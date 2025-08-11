import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(express.json());

// Mirror the Vercel-style route locally
app.post('/api/gemini-chat', async (req, res) => {
  try {
    const { systemPrompt, profileContext, history, question } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
      return;
    }

    const messages = [];
    if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
    messages.push({ role: 'system', content: `Profile context:\n${typeof profileContext === 'string' ? profileContext : JSON.stringify(profileContext)}` });
    (history || []).forEach((m) => messages.push({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }));
    if (question) messages.push({ role: 'user', content: question });

    const baseUrl = 'https://generativelanguage.googleapis.com/openai/v1/chat/completions';
    const url = `${baseUrl}?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({ model: 'gemini-2.0-flash', messages, temperature: 0.3, max_tokens: 256 })
    });

    const raw = await response.text();
    if (!response.ok) {
      let apiError = `Gemini API error (${response.status} ${response.statusText})`;
      try {
        const errPayload = JSON.parse(raw);
        apiError = errPayload?.error?.message || errPayload?.error || apiError;
      } catch (_) {
        apiError = raw || apiError;
      }

      // Fallback
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const contextText = typeof profileContext === 'string' ? profileContext : JSON.stringify(profileContext);
        const historyText = (history || []).map((m) => `${m.role.toUpperCase()}: ${m.content}`).join('\n');
        const prompt = [systemPrompt || '', '\nPROFILE CONTEXT:\n' + contextText, '\nCHAT HISTORY:\n' + historyText, '\nUSER QUESTION:\n' + (question || '')].join('\n\n');
        const result = await model.generateContent(prompt);
        const fallbackAnswer = result?.response?.text?.();
        if (fallbackAnswer) {
          res.status(200).json({ answer: fallbackAnswer });
          return;
        }
      } catch (_) {
        // ignore
      }

      res.status(response.status).json({ error: apiError });
      return;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (_) {
      res.status(500).json({ error: 'Invalid JSON from Gemini' });
      return;
    }
    let answer = data?.choices?.[0]?.message?.content || data?.choices?.[0]?.text;
    if (!answer) answer = 'Sorry, I could not generate a response.';
    res.status(200).json({ answer });
  } catch (err) {
    res.status(500).json({ error: err?.message || 'Server error' });
  }
});

// Static fallback to Vite dev server is handled by concurrently; no static serving here
const port = process.env.API_PORT || 5174;
app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});


