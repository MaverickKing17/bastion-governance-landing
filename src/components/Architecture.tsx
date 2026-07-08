import React from 'react';
import { Cpu, EyeOff, ShieldCheck, Database, Key, Layers, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const Architecture: React.FC = () => {
  const highlights = [
    { text: 'Sandbox-first deployment', icon: Layers },
    { text: 'Synthetic data testing', icon: Database },
    { text: 'Zero production credentials required', icon: Key },
    { text: 'No customer data exposure', icon: EyeOff },
    { text: 'Faster security evaluation cycles', icon: ShieldCheck },
  ];

  const diagramNodes = [
    { title: 'Agent Layer', desc: 'Autonomous LLM execution containers', color: 'border-sky-500/30 text-sky-400 bg-sky-950/20' },
    { title: 'Policy Engine', desc: 'Real-time validation against regulatory frameworks', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20' },
    { title: 'Risk Evaluation', desc: 'Dynamic behavior drift & prompt injection analysis', color: 'border-amber-500/30 text-amber-400 bg-amber-950/20' },
    { title: 'Governance Controls', desc: 'Circuit breakers & automated quarantining layers', color: 'border-rose-500/30 text-rose-400 bg-rose-950/20' },
    { title: 'Audit Evidence Layer', desc: 'Cryptographically signed audit trail ledger', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
  ];

  return (
    <section id="architecture" className="py-24 px-6 lg:px-12 bg-[#0B131E] relative border-t border-slate-900/60">
      {/* Background decoration dots */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono mb-2">
            System Infrastructure
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
            Enterprise-Grade Trust. Zero Data Risk.
          </h3>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Dual Engine Enforcement Copy */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-white tracking-wide uppercase font-mono">
                Dual-Engine Enforcement Architecture
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bastion Audit enables organizations to validate AI governance workflows without exposing production environments. Test compliance limits and evaluate gateway response profiles directly inside our sandbox frameworks.
              </p>
            </div>

            {/* Structured Highlights list */}
            <ul className="space-y-3.5 pt-2">
              {highlights.map((h, index) => {
                const Icon = h.icon;
                return (
                  <li key={index} className="flex items-center gap-3.5 text-xs text-slate-300 font-medium">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{h.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Core Message Callout */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 mt-4">
              <p className="text-xs text-slate-400 leading-relaxed italic">
                &ldquo;Organizations can evaluate enterprise AI security controls without waiting through traditional six-month procurement and integration cycles.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column - Beautiful Architecture Diagram schematic */}
          <div className="bg-[#131E2B]/85 rounded-2xl border border-slate-850 p-6 shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[450px]">
            {/* Dots background grid for schematic looks */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

            {/* Schematic Flow */}
            <div className="space-y-4 relative z-10">
              {diagramNodes.map((node, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Schematic card */}
                  <div className={`w-full max-w-sm rounded-xl border p-4 flex flex-col items-center text-center shadow-md ${node.color} backdrop-blur-sm transition-all duration-300 hover:border-slate-500/40`}>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold opacity-70 mb-1">
                      0{idx + 1} / NODE
                    </span>
                    <h5 className="text-xs font-bold uppercase tracking-wider">
                      {node.title}
                    </h5>
                    <p className="text-[10px] text-slate-400 mt-1 font-sans">
                      {node.desc}
                    </p>
                  </div>

                  {/* Flow Arrow down */}
                  {idx < diagramNodes.length - 1 && (
                    <div className="my-2 text-slate-600 flex flex-col items-center justify-center">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-slate-700 to-transparent" />
                      <ArrowDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
