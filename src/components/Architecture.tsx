import React, { useState } from 'react';
import { Cpu, ShieldCheck, FileText, Eye, ArrowDown, ChevronRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const Architecture: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const layers = [
    {
      id: 'landscape',
      level: 'LAYER 01',
      title: 'AI LANDSCAPE',
      pillars: ['Systems', 'Models', 'Agents', 'Workflows'],
      icon: Cpu,
      description: 'The operational foundation where AI capabilities live—whether proprietary model endpoints, third-party vendor APIs, internal workflow automations, or autonomous multi-agent systems.',
      color: 'from-cyan-950/40 to-slate-900/60 border-cyan-500/40 text-cyan-400'
    },
    {
      id: 'governance',
      level: 'LAYER 02',
      title: 'GOVERNANCE',
      pillars: ['Risk', 'Controls', 'Ownership', 'Policies'],
      icon: ShieldCheck,
      description: 'The organizational intelligence layer establishing line-of-business accountability, evaluating operational risks, mapping compliance expectations, and defining runtime boundaries.',
      color: 'from-sky-950/40 to-slate-900/60 border-sky-500/40 text-sky-400'
    },
    {
      id: 'evidence',
      level: 'LAYER 03',
      title: 'EVIDENCE',
      pillars: ['Activity', 'Decisions', 'Exceptions', 'Evidence'],
      icon: FileText,
      description: 'The verifiable record of what occurred—capturing audit trails, execution inputs, exception alerts, and policy compliance verification records for audits and examinations.',
      color: 'from-teal-950/40 to-slate-900/60 border-teal-500/40 text-teal-400'
    },
    {
      id: 'intelligence',
      level: 'LAYER 04',
      title: 'EXECUTIVE INTELLIGENCE',
      pillars: ['Priorities', 'Trends', 'Exposure', 'Oversight'],
      icon: Eye,
      description: 'High-level synthesis for senior decision-makers—translating technical system states into strategic exposure views, board summaries, and regulatory defensibility.',
      color: 'from-blue-950/40 to-slate-900/60 border-blue-400/50 text-blue-300'
    }
  ];

  return (
    <section id="architecture" className="py-24 px-6 lg:px-12 bg-[#040A15] relative border-t border-slate-900/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Conceptual Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            The Four Governance Layers
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            A simplified, structured architecture that connects technical AI implementations to executive oversight and regulatory readiness without unnecessary complexity.
          </p>
        </div>

        {/* 4 Layers Flowing Diagram */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer === index;

            return (
              <React.Fragment key={layer.id}>
                <motion.div
                  onClick={() => setSelectedLayer(index)}
                  whileHover={{ scale: 1.01 }}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/40'
                      : 'bg-slate-900/50 hover:bg-slate-900/75 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-400 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                        <span>{layer.level}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                        {layer.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-300">
                        {layer.pillars.map((pillar, pIdx) => (
                          <React.Fragment key={pIdx}>
                            <span className="font-semibold text-slate-200">{pillar}</span>
                            {pIdx < layer.pillars.length - 1 && <span className="text-cyan-500 font-bold">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-left md:text-right max-w-md">
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {layer.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Arrow */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500">
                      <ArrowDown className="w-4 h-4 text-cyan-400/80" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};
