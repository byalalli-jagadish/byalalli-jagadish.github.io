
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-orange-100/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-heading font-bold mb-6 text-slate-900 tracking-tight">Technical Expertise</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx} 
                className={`p-8 lg:p-10 bg-white rounded-[2.5rem] border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 group ${
                  cat.title === 'Backend' ? 'md:col-span-2 lg:col-span-1' : 
                  cat.title === 'Cloud & DevOps' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                   </div>
                   <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-700 text-xs font-bold rounded-xl group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:text-orange-700 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
