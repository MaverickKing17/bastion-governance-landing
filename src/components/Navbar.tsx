import React from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Architecture', id: 'architecture' },
    { name: 'Open Source', id: 'open-source' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between px-6 lg:px-12 z-50 transition-all duration-300">
      {/* Brand Logo & Mark */}
      <div 
        onClick={() => onScrollToSection('hero')} 
        className="flex items-center gap-2.5 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-colors duration-200">
          <Shield className="w-4.5 h-4.5 text-sky-400" />
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-widest text-white uppercase font-sans">
            Bastion Audit
          </div>
          <div className="text-[8px] text-sky-400 font-semibold tracking-widest uppercase font-mono">
            AI Control Plane
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onScrollToSection(link.id)}
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors duration-150 uppercase tracking-wider font-mono cursor-pointer"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Primary CTA button */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => onScrollToSection('beta-form')}
          className="px-4 py-2 bg-transparent hover:bg-sky-500/10 border border-sky-500/40 hover:border-sky-400 text-sky-400 text-[11px] font-bold rounded uppercase tracking-wider font-mono transition-all duration-200 cursor-pointer shadow-sm hover:shadow-sky-500/10"
        >
          Apply for Private Beta
        </button>
      </div>

      {/* Mobile Menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-400 hover:text-white p-1"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-950 border-b border-slate-800 flex flex-col p-6 space-y-4 md:hidden z-40">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setIsOpen(false);
                onScrollToSection(link.id);
              }}
              className="text-left text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-150 uppercase tracking-wider font-mono py-1"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onScrollToSection('beta-form');
            }}
            className="w-full text-center py-2.5 bg-transparent hover:bg-sky-500/10 border border-sky-500/40 text-sky-400 text-[11px] font-bold rounded uppercase tracking-wider font-mono transition-all duration-200"
          >
            Apply for Private Beta
          </button>
        </div>
      )}
    </nav>
  );
};
