import React, { useState } from 'react';
import { Cpu, Users, AlertTriangle, ShieldCheck, FileText, Sparkles, ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const GovernanceIntelligence: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const chainElements = [
    {
      id: 'systems',
      title: 'AI Systems',
      subtitle: 'Inventory & Classification',
      icon: Cpu,
      description: 'Knowing what models, vendor tools, and autonomous agent systems are currently deployed across the organization.',
      example: 'e.g. MortgageUnderwriter-v2, ClaimsCopilot, WealthAdvisorLLM, CustomerServiceBot',
      color: 'border-cyan-500/50 text-cyan-400'
    },
    {
      id: 'ownership',
      title: 'Ownership',
      subtitle: 'Accountability & Line-of-Business',
      icon: Users,
      description: 'Assigning explicit business owners, operational stewards, and risk managers to every active system.',
      example: 'e.g. Head of Retail Lending, VP Claims Operations, Model Risk Officer',
      color: 'border-sky-500/50 text-sky-400'
    },
    {
      id: 'risk',
      title: 'Risk',
      subtitle: 'Contextual Threat & Impact Analysis',
      icon: AlertTriangle,
      description: 'Evaluating sensitivity of handled data, decision blast-radius, hallucination tolerance, and regulatory classification.',
      example: 'e.g. High PII Exposure (SIN), Medium Financial Materiality, Low Autonomy',
      color: 'border-amber-500/50 text-amber-400'
    },
    {
      id: 'controls',
      title: 'Controls',
      subtitle: 'Safeguards & Enforcement Guardrails',
      icon: ShieldCheck,
      description: 'Applying runtime policy boundaries, redacting sensitive payloads, and establishing operational circuit breakers.',
      example: 'e.g. Mandatory human-in-the-loop review over $50k, localized PII redaction, token budgets',
      color: 'border-emerald-500/50 text-emerald-400'
    },
    {
      id: 'evidence',
      title: 'Evidence',
      subtitle: 'Immutable Audit & Verification Records',
      icon: FileText,
      description: 'Preserving tamper-resistant audit trails, execution inputs, model outputs, and control validation records.',
      example: 'e.g. Signed cryptographic audit logs, OSFI E-21 compliance traces, exception timestamps',
      color: 'border-teal-500/50 text-teal-400'
    }
  ];

  return (
    <section id="governance-intelligence" className="py-24 px-6 lg:px-12 bg-[#030712] relative border-t border-slate-900/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Conceptual Model
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            From AI inventory to AI intelligence
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            Knowing that an AI system exists is only the beginning. Pellorn is being developed to connect AI systems with their owners, risks, controls and evidence — creating a clearer operational picture of the organization's AI landscape.
          </p>
        </div>

        {/* Visual 5-Stage Cascade to Executive Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 5 Connecting Flow Nodes */}
          <div className="lg:col-span-7 space-y-3">
            {chainElements.map((elem, idx) => {
              const Icon = elem.icon;
              const isSelected = selectedLayer === idx;

              return (
                <div key={elem.id} className="relative">
                  <motion.div
                    onClick={() => setSelectedLayer(idx)}
                    whileHover={{ x: 4 }}
                    className={`cursor-pointer p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/40'
                        : 'bg-slate-950/60 hover:bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-slate-900 border flex items-center justify-center shrink-0 ${elem.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-500 font-bold">0{idx + 1}</span>
                          <h4 className="text-base font-bold text-white font-sans">
                            {elem.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 font-sans mt-0.5">
                          {elem.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hidden sm:inline-block">
                        CONNECT
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                    </div>
                  </motion.div>

                  {/* Connecting Down Arrow between cards */}
                  {idx < chainElements.length - 1 && (
                    <div className="flex justify-center my-0.5">
                      <div className="w-0.5 h-3 bg-gradient-to-b from-cyan-500/40 to-slate-800" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: The Synthesis -> Executive Intelligence */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-gradient-to-b from-[#0D1F38] via-[#091526] to-[#040C16] border border-cyan-400/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(6,182,212,0.22)] relative overflow-hidden text-left space-y-6">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-[50px] pointer-events-none" />

              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                      SYNTHESIZED OUTCOME
                    </span>
                    <h3 className="text-xl font-bold text-white font-sans">
                      Executive Intelligence
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-200 text-sm leading-relaxed font-sans font-medium">
                  By joining inventory to owners, risk profiles, controls, and tamper-resistant evidence, Pellorn equips senior leaders with an active operational picture.
                </p>

                <div className="space-y-3 pt-3 border-t border-cyan-500/15">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Current Layer Context: {chainElements[selectedLayer].title}
                  </div>
                  
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {chainElements[selectedLayer].description}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20 font-mono text-[11px] text-cyan-300">
                    {chainElements[selectedLayer].example}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>GOVERNANCE MATURITY: HIGH</span>
                <span className="text-cyan-400 font-bold">DECISION READY</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
