import React, { useState } from 'react';
import { Shield, Menu, X, FileText, Compass } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenSpec?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection, onOpenSpec }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'The Problem', id: 'problem' },
    { name: 'The Approach', id: 'approach' },
    { name: 'Financial Services', id: 'financial-services' },
    { name: 'Intelligence Model', id: 'governance-intelligence' },
    { name: 'Architecture', id: 'architecture' },
    { name: 'Regulated', id: 'regulated' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between px-6 lg:px-12 z-50 transition-all duration-300">
      {/* Brand Logo & Mark */}
      <div 
        onClick={() => onScrollToSection('hero')} 
        className="flex items-center gap-2.5 cursor-pointer group select-none"
      >
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors duration-200">
          <Shield className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-[0.2em] text-white uppercase font-sans">
            PELLORN
          </div>
          <div className="text-[8px] text-cyan-400 font-semibold tracking-wider uppercase font-mono">
            AI Governance Intelligence
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden xl:flex items-center gap-6">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onScrollToSection(link.id)}
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors duration-150 uppercase tracking-wider font-mono cursor-pointer"
          >
            {link.name}
          </button>
        ))}
        {onOpenSpec && (
          <button
            onClick={onOpenSpec}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-150 uppercase tracking-wider font-mono cursor-pointer flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Platform Spec
          </button>
        )}
      </div>

      {/* Primary CTA button */}
      <div className="hidden md:flex items-center gap-3">
        {onOpenSpec && (
          <button
            onClick={onOpenSpec}
            className="px-3.5 py-2 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 text-[11px] font-bold rounded-lg uppercase tracking-wider font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            Spec Sheet
          </button>
        )}
        <button
          onClick={() => onScrollToSection('early-access')}
          className="px-4 py-2 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 hover:border-cyan-400 text-cyan-300 text-[11px] font-bold rounded-lg uppercase tracking-wider font-mono transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center gap-1.5"
        >
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          Join Early Access
        </button>
      </div>

      {/* Mobile Menu button */}
      <div className="xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-400 hover:text-white p-1"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-950 border-b border-slate-800 flex flex-col p-6 space-y-4 xl:hidden z-40">
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
          {onOpenSpec && (
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenSpec();
              }}
              className="text-left text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-150 uppercase tracking-wider font-mono py-1 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Platform Technical Spec
            </button>
          )}
          <button
            onClick={() => {
              setIsOpen(false);
              onScrollToSection('early-access');
            }}
            className="w-full text-center py-2.5 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 text-[11px] font-bold rounded-lg uppercase tracking-wider font-mono transition-all duration-200"
          >
            Join Early Access
          </button>
        </div>
      )}
    </nav>
  );
};
