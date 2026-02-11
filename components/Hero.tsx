
import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeroProps {
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-400/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute -bottom-1/4 -right-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-100 text-orange-700 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-sm">
              Available for Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-heading font-bold leading-[1.05] mb-8 text-slate-900 tracking-tight">
              Building the next <span className="block lg:inline">generation</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-600 to-blue-600">applications.</span>
            </h1>
            
            <p className="text-base md:text-xl xl:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hi, I'm <span className="text-slate-900 font-bold underline decoration-orange-400/30 decoration-4 underline-offset-4">{PERSONAL_INFO.name}</span>. 
              I specialize in <span className="text-orange-600 font-semibold">Spring Boot microservices</span> and <span className="text-blue-600 font-semibold">scalable web architectures</span> that power modern enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 text-center text-sm uppercase tracking-widest group"
              >
                <span>Discover Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href={PERSONAL_INFO.resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-slate-900/20 text-center text-sm uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          <div 
            className="relative shrink-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] group order-1 lg:order-2"
          >
            {/* Premium Multi-layered frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-blue-500 rounded-[2.5rem] md:rounded-[3.5rem] rotate-6 scale-95 opacity-20 blur-2xl group-hover:rotate-12 transition-all duration-700" />
            <div className="absolute inset-0 border-[2px] md:border-[3px] border-orange-500/20 rounded-[2.5rem] md:rounded-[3.5rem] -rotate-3 group-hover:-rotate-6 transition-all duration-700" />
            
            <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-[8px] md:ring-[14px] ring-white bg-slate-50">
              <img 
                src={profileImage} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Decorative Grid for high-end feel */}
            <div className="absolute -bottom-8 -left-8 w-24 md:w-32 h-24 md:h-32 grid grid-cols-4 gap-2 opacity-30 pointer-events-none">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
