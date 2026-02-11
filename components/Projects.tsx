
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-heading font-bold mb-4 text-slate-900 tracking-tight">Projects</h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full mx-auto md:mx-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-orange-200 transition-all duration-500 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(249,115,22,0.12)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-black px-3 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-orange-600 transition-colors text-slate-900 tracking-tight">{project.title}</h3>
                <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                   <a 
                    href={project.link} 
                    className="inline-flex items-center text-xs font-black text-slate-900 hover:text-orange-600 transition-all uppercase tracking-widest group/link"
                  >
                    Explore Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
