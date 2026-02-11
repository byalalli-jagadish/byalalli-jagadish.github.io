
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 leading-tight">
          Let's build something <span className="text-orange-600">extraordinary</span> together.
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          I'm currently looking for new opportunities and collaborations. Whether you have a specific project in mind or just want to chat about system design, I'd love to hear from you.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
          <div className="flex items-center gap-4 text-left p-6 bg-orange-50 rounded-2xl border border-orange-100 w-full max-w-sm transition-transform hover:scale-105">
            <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Email Me</div>
              <div className="text-sm md:text-lg font-bold text-slate-700">{PERSONAL_INFO.email}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-left p-6 bg-slate-50 rounded-2xl border border-slate-100 w-full max-w-sm transition-transform hover:scale-105">
            <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Based In</div>
              <div className="text-sm md:text-lg font-bold text-slate-700">{PERSONAL_INFO.location}</div>
            </div>
          </div>
        </div>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/25 text-sm md:text-base uppercase tracking-widest"
        >
          <span>Send me an email</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
