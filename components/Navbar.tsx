
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  profileImage: string;
}

const Navbar: React.FC<NavbarProps> = ({ profileImage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-orange-50/95 backdrop-blur-md border-b border-orange-200 py-3 shadow-sm' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 shadow-md flex-shrink-0">
              <img 
                src={profileImage} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="text-xl md:text-2xl font-heading font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent tracking-tight"
            >
              {PERSONAL_INFO.name.split(' ')[0]}<span className="text-slate-900">.</span>
            </a>
          </div>
          
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-bold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-[0.15em] whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-orange-600 transition-colors uppercase tracking-widest shadow-lg shadow-slate-900/10"
            >
              LeetCode
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-slate-900 focus:outline-none bg-white rounded-xl shadow-sm border border-orange-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div className={`lg:hidden fixed inset-0 top-[76px] bg-orange-50 z-40 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="px-8 py-12 flex flex-col gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-black text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs text-center px-8 py-4 bg-orange-500 text-white text-sm font-black rounded-2xl hover:bg-orange-600 transition-colors uppercase tracking-widest shadow-xl shadow-orange-500/20"
            >
              LeetCode Profile
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
