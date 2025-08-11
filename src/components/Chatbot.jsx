import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaPaperPlane, FaTimes } from 'react-icons/fa';

const defaultSystemPrompt = `You are a professional, concise chatbot assistant for Shivanshu Tiwari's portfolio website.
Goals:
- Answer clearly in 1-4 short sentences.
- Be friendly, confident, and helpful.
- Use simple language.
- When asked about experience, skills, projects, certifications, or contact, use the provided profile context.
- If details are unavailable, say you don't have that info and suggest viewing the site sections.
- Never invent dates, metrics, or employers not in context.

Always keep answers short and actionable. Avoid bullet lists unless explicitly requested.`;

const Chatbot = ({ profileContext, systemPrompt = defaultSystemPrompt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I can answer questions about my background, projects, and skills. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const askGemini = async (userMessage) => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt,
          profileContext,
          history: messages,
          question: userMessage,
        })
      });

      if (!res.ok) {
        const raw = await res.text();
        let msg = 'Request failed';
        try {
          const parsed = JSON.parse(raw);
          msg = parsed?.error || msg;
        } catch (_) {
          msg = raw || msg;
        }
        return `Error: ${msg}`;
      }
      const data = await res.json();
      return data.answer || 'Sorry, I could not generate a response right now.';
    } catch (err) {
      console.error(err);
      return `Error: ${err?.message || 'Unknown error'}`;
    } finally {
      setIsLoading(false);
    }
  };

  const onSend = async (e) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    const next = [...messages, { role: 'user', content: trimmed }];
    setMessages(next);
    setInput('');
    const reply = await askGemini(trimmed);
    setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[120]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-96 h-[28rem] bg-white rounded-xl shadow-2xl border border-supply-lightgray flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 bg-supply-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaCommentDots className="w-5 h-5" />
                <span className="font-semibold text-sm">Ask Shivanshu’s AI</span>
              </div>
              <button
                aria-label="Close chat"
                className="p-1 rounded hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-supply-background">
              {messages.map((m, idx) => (
                <div key={idx} className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${m.role === 'assistant' ? 'bg-white border border-supply-lightgray text-supply-dark' : 'bg-supply-primary text-white ml-auto'}`}>
                  {m.content}
                </div>
              ))}
              {isLoading && (
                <div className="text-xs text-supply-gray">Thinking…</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={onSend} className="p-3 border-t border-supply-lightgray bg-white flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, experience…"
                className="flex-1 px-3 py-2 text-sm border border-supply-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-supply-primary"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 rounded-lg bg-supply-primary text-white hover:bg-supply-highlight disabled:opacity-50"
                aria-label="Send"
              >
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-xl bg-supply-primary text-white flex items-center justify-center"
          aria-label="Open chat"
        >
          <FaCommentDots className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;

