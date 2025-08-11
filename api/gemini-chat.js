import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
// Serverless endpoint that calls Gemini via the OpenAI-compatible API
// Model: gemini-2.0-flash

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { systemPrompt, profileContext, history, question } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Missing Gemini API key in environment.' });
      return;
    }

    const messages = [];
    if (systemPrompt) {
      messages.push({ role: 'system', content: systemPrompt });
    }
    messages.push({ role: 'system', content: `Profile context:\n${typeof profileContext === 'string' ? profileContext : JSON.stringify(profileContext)}` });
    (history || []).forEach((m) => {
      const role = m.role === 'assistant' ? 'assistant' : 'user';
      messages.push({ role, content: m.content });
    });
    if (question) {
      messages.push({ role: 'user', content: question });
    }

    const baseUrl = 'https://generativelanguage.googleapis.com/openai/v1/chat/completions';
    const url = `${baseUrl}?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        model: 'gemini-2.0-flash',
        messages,
        temperature: 0.3,
        max_tokens: 256
      })
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
      // Fallback to native SDK if OpenAI-compatible endpoint fails
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const contextText = typeof profileContext === 'string' ? profileContext : JSON.stringify(profileContext);
        const historyText = (history || [])
          .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
          .join('\n');
        const prompt = [
          systemPrompt || '',
          '\nPROFILE CONTEXT:\n' + contextText,
          '\nCHAT HISTORY:\n' + historyText,
          '\nUSER QUESTION:\n' + (question || ''),
        ].join('\n\n');

        const result = await model.generateContent(prompt);
        const fallbackAnswer = result?.response?.text?.();
        if (fallbackAnswer) {
          res.status(200).json({ answer: fallbackAnswer });
          return;
        }
      } catch (fallbackErr) {
        // continue to return error below
      }

      res.status(response.status).json({ error: apiError, status: response.status });
      return;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (_) {
      res.status(500).json({ error: 'Invalid JSON from Gemini' });
      return;
    }
    // OpenAI-compatible chat completions: choices[0].message.content (string)
    let answer = data?.choices?.[0]?.message?.content;
    // Some variants may return choices[0].text
    if (!answer && data?.choices?.[0]?.text) {
      answer = data.choices[0].text;
    }
    if (!answer) {
      answer = 'Sorry, I could not generate a response.';
    }
    res.status(200).json({ answer });
  } catch (error) {
    console.error('Gemini error:', error);
    res.status(500).json({ error: 'Gemini request failed' });
  }
}

