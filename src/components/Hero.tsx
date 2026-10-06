import React from 'react';
import { ArrowRight, ShieldCheck, Compass, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenSpec?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection, onOpenSpec }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 lg:px-12 text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(6,182,212,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-600/5 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        
        {/* Working Brand Kicker & Context */}
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Pre-Launch Validation · Financial Services Intelligence</span>
        </motion.div>

        {/* Brand Display */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono text-xs md:text-sm font-extrabold uppercase tracking-[0.35em] text-cyan-400"
        >
          PELLORN
        </motion.div>

        {/* Primary Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] font-sans"
        >
          AI Governance Intelligence <br className="hidden md:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300">Financial Services</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-slate-300 text-base md:text-xl leading-relaxed font-sans font-normal"
        >
          See what AI is doing across your organization. Understand the risks. Strengthen controls. Build the evidence leadership needs.
        </motion.p>

        {/* Subtle Supporting Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs md:text-sm text-cyan-400/90 font-mono tracking-wide font-medium"
        >
          Built for organizations bringing AI into critical business workflows.
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3"
        >
          <button
            onClick={() => onScrollToSection('approach')}
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-400 hover:from-cyan-400 hover:via-sky-300 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Pellorn
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={() => onScrollToSection('early-access')}
            className="w-full sm:w-auto px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800/90 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            Join Early Access
          </button>

          {onOpenSpec && (
            <button
              onClick={onOpenSpec}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              Platform Spec
            </button>
          )}
        </motion.div>

        {/* Sophisticated Abstract Hero Visual */}
        <HeroVisual />

        {/* 4 Supporting Tenets / Core Pillars */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto border-t border-slate-900/80"
        >
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 text-left transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/70">
            <div className="text-sm font-bold text-white font-sans">Full Landscape Visibility</div>
            <div className="text-[11px] text-slate-400 font-sans mt-1 leading-snug">
              Know what models, agents, and vendor systems operate across business units.
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 text-left transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/70">
            <div className="text-sm font-bold text-white font-sans">Actionable Risk Intelligence</div>
            <div className="text-[11px] text-slate-400 font-sans mt-1 leading-snug">
              Continuous evaluation of data exposure, reasoning limits, and operational drift.
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 text-left transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/70">
            <div className="text-sm font-bold text-white font-sans">Verifiable Evidence</div>
            <div className="text-[11px] text-slate-400 font-sans mt-1 leading-snug">
              Immutable audit records, decision histories, and compliance telemetry.
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 text-left transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/70">
            <div className="text-sm font-bold text-white font-sans">Executive Oversight</div>
            <div className="text-[11px] text-slate-400 font-sans mt-1 leading-snug">
              Clarity for Boards, CROs, CISOs, and Model Risk Committees.
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
