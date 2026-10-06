import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ShieldCheck, Activity, FileText, CheckCircle2, Eye, Cpu, Database, AlertCircle, ArrowRight } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const pipeline = [
    {
      id: 'systems',
      step: '01',
      title: 'AI Systems',
      subtitle: 'Models · Workflows · Agents',
      detail: 'Continuous discovery across internal deployments, third-party vendor APIs, and departmental automation tools.',
      icon: Cpu,
      status: '84 Tracked',
      badgeColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30'
    },
    {
      id: 'risk',
      step: '02',
      title: 'Risk Signals',
      subtitle: 'Behavior · Data · Criticality',
      detail: 'Semantic inspection, sensitive data exposure monitoring, and model drift identification.',
      icon: Activity,
      status: 'Low/Moderate',
      badgeColor: 'text-sky-400 bg-sky-950/40 border-sky-500/30'
    },
    {
      id: 'controls',
      step: '03',
      title: 'Controls & Owners',
      subtitle: 'Policies · Boundaries · Accountable Leads',
      detail: 'Explicit assignment of business line owners, operational guardrails, and compliance checkpoints.',
      icon: ShieldCheck,
      status: 'Active Controls',
      badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30'
    },
    {
      id: 'evidence',
      step: '04',
      title: 'Evidence Vault',
      subtitle: 'Activity · Decisions · Audit Logs',
      detail: 'Cryptographically signed audit records, decision histories, and regulatory submission logs.',
      icon: FileText,
      status: 'Immutable Logs',
      badgeColor: 'text-teal-400 bg-teal-950/40 border-teal-500/30'
    },
    {
      id: 'intelligence',
      step: '05',
      title: 'Executive Intelligence',
      subtitle: 'Exposure · Trends · Board Oversight',
      detail: 'Synthesized, high-level governance summaries for CIO, CRO, CISO, and Board Risk Committees.',
      icon: Eye,
      status: 'Audit Ready',
      badgeColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-400/50'
    }
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 select-none">
      {/* Outer framing glow & grid */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#060D1A]/95 to-[#030712] border border-cyan-500/30 p-4 sm:p-6 shadow-[0_0_60px_rgba(6,182,212,0.12)] backdrop-blur-xl">
        
        {/* Top Header bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className="font-mono text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
              Governance Intelligence Signal Stream
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-[10px] text-cyan-400/80">
              Toronto · Canada Central Node
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
              Multi-Cloud Landscape
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
              Live Synthesis
            </span>
          </div>
        </div>

        {/* Abstract Horizontal Intelligence Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-4 relative">
          
          {pipeline.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveStep(index)}
                whileHover={{ y: -2 }}
                className={`cursor-pointer rounded-xl p-3.5 sm:p-4 transition-all duration-300 relative flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0F223D] to-[#071324] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/50'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Stage number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-slate-500 font-bold tracking-widest">
                    STAGE {item.step}
                  </span>
                  <div className={`p-1.5 rounded-lg border ${
                    isSelected ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300' : 'bg-slate-800/50 border-slate-700/60 text-slate-400'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-cyan-400/90 font-mono mt-0.5 font-medium truncate">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/70 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wide">
                    {item.status}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Deep-Dive Interactive Drawer */}
        <div className="mt-5 pt-4 border-t border-slate-800/70 bg-[#06101E]/70 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                LAYER {pipeline[activeStep].step} DEEP-DIVE:
              </span>
              <span className="text-sm font-bold text-white">
                {pipeline[activeStep].title} — {pipeline[activeStep].subtitle}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {pipeline[activeStep].detail}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % pipeline.length)}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Next Layer</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Micro Telemetry Bar */}
        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-slate-500 border-t border-slate-900">
          <div className="flex items-center gap-3">
            <span>DISCOVERY: CONTINUOUS</span>
            <span>·</span>
            <span>METRICS: OSFI E-21 / PIPEDA MAPPED</span>
            <span>·</span>
            <span>SOVEREIGNTY: CANADIAN SOIL ONLY</span>
          </div>
          <div className="text-slate-400">
            NON-INTRUSIVE TELEMETRY · ZERO SENSITIVE PAYLOAD STORAGE
          </div>
        </div>

      </div>
    </div>
  );
};
