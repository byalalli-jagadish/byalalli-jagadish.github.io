
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="pt-16 md:pt-24 pb-16 md:pb-24 bg-orange-100/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-slate-900">Experience</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 border-l-2 border-orange-200">
              <div className="absolute left-[-9px] top-0 w-[16px] h-[16px] rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.4)] border-4 border-white" />
              <div className="mb-1 text-orange-600 font-black tracking-widest text-[11px] uppercase">{exp.period}</div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1">{exp.role}</h3>
              <div className="text-slate-700 font-bold mb-4 text-base flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {exp.company}
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
