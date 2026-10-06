import React, { useState } from 'react';
import { Eye, Compass, ShieldCheck, FileCheck, BarChart3, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const PellornApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'see',
      verb: 'SEE',
      question: 'What AI exists across the organization?',
      icon: Eye,
      summary: 'Catalog and discover models, agents, workflows, and third-party AI dependencies across all business units.',
      keyOutcomes: [
        'Continuous discovery of internal & vendor AI systems',
        'Line-of-business categorization & operational status',
        'Model versions, runtime parameters, and hosting targets'
      ]
    },
    {
      id: 'understand',
      verb: 'UNDERSTAND',
      question: 'What risks does each system introduce?',
      icon: Compass,
      summary: 'Evaluate each AI system against data exposure, behavioral boundaries, hallucinations, and regulatory exposure.',
      keyOutcomes: [
        'Automated scoring of sensitive data & PII handling',
        'Model risk classification based on financial criticality',
        'Behavioral drift tracking & hallucination indicators'
      ]
    },
    {
      id: 'control',
      verb: 'CONTROL',
      question: 'What safeguards, policies and ownership exist?',
      icon: ShieldCheck,
      summary: 'Establish clear business accountability, enforce policy guardrails, and implement operational boundaries.',
      keyOutcomes: [
        'Designation of accountable business owners & technical leads',
        'Real-time policy guardrails & circuit-breaker boundaries',
        'Access controls & least-privilege tool execution rules'
      ]
    },
    {
      id: 'prove',
      verb: 'PROVE',
      question: 'Can the organization demonstrate what happened?',
      icon: FileCheck,
      summary: 'Build immutable audit records, decision histories, and verifiable evidence required by compliance and regulators.',
      keyOutcomes: [
        'Tamper-resistant audit logs of AI invocations & outputs',
        'Verifiable evidence packages mapped to regulatory standards',
        'Historical decision traces for post-incident review'
      ]
    },
    {
      id: 'inform',
      verb: 'INFORM',
      question: 'Can leadership understand the AI landscape?',
      icon: BarChart3,
      summary: 'Synthesize granular technical telemetry into clear executive intelligence for the Board, CRO, CISO, and regulators.',
      keyOutcomes: [
        'High-level exposure dashboards for Board Risk Committees',
        'Automated governance summaries for OSFI & regulatory review',
        'Trend forecasting & cross-departmental AI exposure metrics'
      ]
    }
  ];

  return (
    <section id="approach" className="py-24 px-6 lg:px-12 bg-[#020612] relative border-t border-slate-900/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            The Five-Stage Framework
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            The Pellorn Approach
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            A structured governance framework designed to take organizations from fragmented, blind AI deployments to comprehensive visibility, evidence, and executive oversight.
          </p>
        </div>

        {/* Desktop: Flowing Horizontal Stepper / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -3 }}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0F223D] via-[#091629] to-[#040C18] border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.22)] ring-1 ring-cyan-400/40'
                    : 'bg-slate-900/50 hover:bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold tracking-wider ${
                      isSelected ? 'text-cyan-400' : 'text-slate-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div className={`p-2 rounded-xl border ${
                      isSelected ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-black tracking-tight font-sans ${
                    isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {step.verb}
                  </h3>

                  <p className="text-xs text-cyan-300/90 font-medium font-sans mt-2 leading-relaxed">
                    {step.question}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                    {isSelected ? 'ACTIVE VIEW' : 'EXPAND'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Deep Dive Inspection Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.12)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold text-cyan-400 tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                  STAGE 0{activeStep + 1} IN DEPTH
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {steps[activeStep].verb} ARCHITECTURE
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                {steps[activeStep].question}
              </h4>

              <p className="text-slate-200 text-sm leading-relaxed font-sans">
                {steps[activeStep].summary}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-2.5 bg-slate-950/80 border border-slate-800 rounded-xl p-5 text-left">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
                Key Governance Deliverables:
              </div>
              {steps[activeStep].keyOutcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 font-sans">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
