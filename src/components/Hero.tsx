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
          className="max-w-3xl mx-auto text-slate-300 text-base md:text-[20px] leading-relaxed font-sans font-medium"
        >
          Protect enterprise AI agents before they reach production through identity-aware policy enforcement, prompt security, governance automation, and continuous compliance.
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => onScrollToSection('beta-form')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 hover:from-sky-450 hover:via-sky-350 hover:to-cyan-350 text-slate-950 font-extrabold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Request Invite Access
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
          
          <button
            onClick={() => onScrollToSection('open-source')}
            className="w-full sm:w-auto px-8 py-4 bg-[#0A1220]/80 border border-slate-800 hover:border-slate-600 hover:bg-[#0E1B30] text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
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
          className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto border-t border-slate-900/60"
        >
          <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-5 text-left transition-all duration-300 hover:bg-[#07111F]/60 hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.06)] flex flex-col justify-between group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">Zero-Trust</div>
            <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider mt-2.5 leading-relaxed group-hover:text-slate-200 transition-colors">Agent Guardrails</div>
          </div>
          <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-5 text-left transition-all duration-300 hover:bg-[#07111F]/60 hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.06)] flex flex-col justify-between group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">0ms</div>
            <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider mt-2.5 leading-relaxed group-hover:text-slate-200 transition-colors">Runtime Latency Overhead</div>
          </div>
          <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-5 text-left transition-all duration-300 hover:bg-[#07111F]/60 hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.06)] flex flex-col justify-between group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">100%</div>
            <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider mt-2.5 leading-relaxed group-hover:text-slate-200 transition-colors">Outbound Tool-Invocation Visibility</div>
          </div>
          <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-5 text-left transition-all duration-300 hover:bg-[#07111F]/60 hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.06)] flex flex-col justify-between group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">Audit-Ready</div>
            <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider mt-2.5 leading-relaxed group-hover:text-slate-200 transition-colors">Compliance Logging</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
