import React from 'react';
import { Cpu, ShieldCheck, Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 lg:px-12 text-center overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Release Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 font-mono text-xs uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Governance Gateway Enterprise v2.8 is Live
        </motion.div>

        {/* Primary Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] font-sans"
        >
          The AI Control Plane <br className="hidden md:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Autonomous Agents</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl mx-auto text-slate-300 text-base md:text-xl leading-relaxed font-sans"
        >
          Continuous compliance, real-time policy interception, and identity-aware security for enterprise LLM workflows and autonomous agents. Built for highly regulated industries.
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => onScrollToSection('demo')}
            className="w-full sm:w-auto px-7 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-250 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-500/15"
          >
            Launch Beta Sandbox
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onScrollToSection('open-source')}
            className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-250 cursor-pointer flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            View Open-Source Engine
          </button>
        </motion.div>

        {/* Key Metrics Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-slate-900/60"
        >
          <div>
            <div className="text-2xl md:text-3xl font-bold font-mono text-white">99.99%</div>
            <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider mt-1">Interception Rate</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold font-mono text-white">&lt; 15ms</div>
            <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider mt-1">Gateway Overhead</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold font-mono text-white">100%</div>
            <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider mt-1">Residency Isolation</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold font-mono text-white">4+</div>
            <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider mt-1">Active Frameworks</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
