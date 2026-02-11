
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { Contact } from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  // Use a version key to force-update when constants change
  const IMAGE_VERSION = "v3_final_assets"; 
  
  const [profileImage] = useState<string>(() => {
    const savedVersion = localStorage.getItem('portfolio_image_version');
    const savedImage = localStorage.getItem('portfolio_profile_image');
    
    // If version doesn't match or no image is saved, use the hardcoded one
    if (savedVersion !== IMAGE_VERSION || !savedImage) {
      localStorage.setItem('portfolio_image_version', IMAGE_VERSION);
      localStorage.setItem('portfolio_profile_image', PERSONAL_INFO.profileImage);
      return PERSONAL_INFO.profileImage;
    }
    
    return savedImage;
  });

  return (
    <div className="min-h-screen relative bg-orange-50">
      <Navbar profileImage={profileImage} />
      
      <main>
        <Hero profileImage={profileImage} />
        
        <section id="about" className="py-16 md:py-24 bg-orange-100/20 border-y border-orange-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6 text-slate-900">
                About <span className="text-orange-600">Me</span>
              </h2>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed mb-6">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8">
                As a developer based in {PERSONAL_INFO.location}, I thrive on solving complex problems with elegant code. 
                I believe in building applications that are not only powerful under the hood but also provide a delightful 
                experience for every user.
              </p>
              
              <div className="flex gap-8 justify-center items-center pt-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-orange-600 transition-all">
                  <svg className="h-6 w-6 md:h-8 md:w-8 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-orange-600 transition-all">
                  <svg className="h-6 w-6 md:h-8 md:w-8 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0-2.761 2.239-5 5-5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="py-12 border-t border-orange-100 text-center bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <ChatAssistant profileImage={profileImage} />
    </div>
  );
};

export default App;
