
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChatResponse } from '../services/geminiService';
import { Message } from '../types';
import { PERSONAL_INFO } from '../constants';

interface ChatAssistantProps {
  profileImage: string;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ profileImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Hi! I'm Jagadish's AI assistant. How can I help you today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { label: "🚀 Projects", query: "Show me your featured projects" },
    { label: "💼 Experience", query: "Tell me about your work experience" },
    { label: "🛠 Skills", query: "What are your core technical skills?" },
    { label: "📧 Contact", query: "How can I reach out to you?" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const executeScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      element.classList.add('ring-4', 'ring-orange-500/20', 'rounded-2xl', 'transition-all', 'duration-1000');
      setTimeout(() => element.classList.remove('ring-4', 'ring-orange-500/20'), 3000);
    }
  };

  const handleSend = async (customQuery?: string) => {
    const query = customQuery || input;
    if (!query.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setIsLoading(true);

    const history = messages.slice(-6).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    try {
      const result = await getGeminiChatResponse(query, history);
      let responseText = result.text;

      if (result.functionCalls && result.functionCalls.length > 0) {
        result.functionCalls.forEach((call: any) => {
          if (call.name === 'scrollToSection' && call.args && typeof call.args.sectionId === 'string') {
            executeScroll(call.args.sectionId);
            if (!responseText) {
              responseText = `I'm scrolling you to the ${call.args.sectionId} section.`;
            }
          }
        });
      }

      setMessages(prev => [...prev, { role: 'assistant', content: responseText || "I've navigated that for you!" }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl group ${
          isOpen ? 'bg-slate-900 rotate-90 scale-90' : 'bg-orange-500 hover:scale-110'
        }`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        )}
      </button>

      {/* Ultra-Compact Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[88px] right-6 left-6 md:left-auto md:w-[320px] h-[45vh] md:h-[380px] max-h-[70vh] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          
          {/* Header - Narrower padding */}
          <div className="px-4 py-3 bg-slate-900 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center overflow-hidden ring-2 ring-white/10">
                   <img src={profileImage} alt="AI" className="w-full h-full object-cover object-top scale-110" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-[11px] leading-none">Portfolio Assistant</h3>
                <span className="text-[7px] font-black uppercase tracking-widest text-orange-400">Active</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-md transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Messages - More compact spacing */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-3.5 space-y-2.5 bg-slate-50/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-300`}>
                <div className={`max-w-[88%] p-2.5 rounded-xl text-[11px] leading-snug ${
                  msg.role === 'user' 
                    ? 'bg-orange-500 text-white rounded-tr-none shadow-md shadow-orange-500/10' 
                    : 'bg-white text-slate-700 rounded-tl-none shadow-sm border border-slate-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex gap-1">
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Footer Area - Reduced vertical space */}
          <div className="bg-white border-t border-slate-100 p-3 shrink-0">
            <div className="flex gap-1.5 overflow-x-auto pb-2.5 no-scrollbar">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  disabled={isLoading}
                  onClick={() => handleSend(s.query)}
                  className="whitespace-nowrap px-2 py-1 bg-slate-50 border border-slate-100 text-slate-500 text-[8px] font-bold rounded-md hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me..."
                className="w-full bg-slate-50 border border-transparent focus:border-orange-100 focus:bg-white rounded-lg pl-3 pr-9 py-2 text-[11px] outline-none transition-all shadow-inner"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="absolute right-1 top-1 bottom-1 px-2 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-200 text-white rounded-md transition-all active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            
            <div className="flex justify-between items-center mt-2 opacity-50">
              <span className="text-[7px] text-slate-400 font-bold uppercase tracking-widest">Jagadish v1.1</span>
              <span className="text-[7px] text-orange-400 font-black uppercase tracking-tighter">Gemini Flash</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
