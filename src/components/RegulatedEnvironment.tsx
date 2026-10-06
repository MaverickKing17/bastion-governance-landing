import React from 'react';
import { ShieldCheck, Lock, Globe, FileCheck, CheckCircle2, Server } from 'lucide-react';
import { motion } from 'motion/react';

export const RegulatedEnvironment: React.FC = () => {
  const compliancePillars = [
    {
      title: 'OSFI Guideline E-21 & Operational Resilience',
      jurisdiction: 'Canadian Financial Institutions',
      description: 'Developed to support third-party risk management, operational resilience, and automated governance records expected by Canadian financial regulators.',
      icon: ShieldCheck
    },
    {
      title: 'PIPEDA & Canadian AI and Data Act (AIDA)',
      jurisdiction: 'Federal Privacy & AI Standards',
      description: 'Architected to verify that personally identifiable information (PII) such as Canadian Social Insurance Numbers (SIN) remains strictly protected and governed.',
      icon: Lock
    },
    {
      title: 'Model Risk Management (MRM) Alignment',
      jurisdiction: 'Enterprise Model Governance',
      description: 'Structured to support three lines of defense, sound model inventory protocols, validation review cadences, and continuous monitoring of behavioral drift.',
      icon: FileCheck
    },
    {
      title: 'NIST AI Risk Management Framework (AI RMF 1.0)',
      jurisdiction: 'Global AI Safety Standards',
      description: 'Mapped against the core NIST functions: Govern, Map, Measure, and Manage to foster trustworthy, explainable, and accountable AI adoption.',
      icon: Globe
    }
  ];

  return (
    <section id="regulated" className="py-24 px-6 lg:px-12 bg-[#020612] relative border-t border-slate-900/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Compliance & Governance Alignment
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Designed for regulated environments
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            Pellorn is being developed with the governance expectations of regulated industries in mind.
          </p>
        </div>

        {/* 4 Compliance Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {compliancePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] transition-all duration-300 rounded-2xl p-7 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400/80 bg-cyan-950/40 border border-cyan-500/25 px-2.5 py-0.5 rounded-full font-bold">
                      {pillar.jurisdiction}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-sans font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-800/60 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/90 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PRE-LAUNCH DESIGN CRITERIA</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sovereign Hosting & Architecture Callout */}
        <div className="bg-gradient-to-r from-slate-950 via-[#071324] to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
              <Server className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left">
              <h4 className="text-base font-bold text-white font-sans">
                Sovereign Canadian Infrastructure Strategy
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-2xl">
                Telemetry and metadata processing are architected for deployment in Canadian sovereign cloud regions (Toronto / Canada Central), with strict zero-custody guarantees ensuring sensitive client payloads never leave your environment.
              </p>
            </div>
          </div>

          <div className="shrink-0 font-mono text-[10px] uppercase text-cyan-400 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
            Canada Central (Toronto)
          </div>
        </div>

      </div>
    </section>
  );
};
