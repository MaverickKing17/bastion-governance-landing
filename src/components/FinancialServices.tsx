import React from 'react';
import { Landmark, Umbrella, TrendingUp, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FinancialServices: React.FC = () => {
  const industries = [
    {
      icon: Landmark,
      sector: 'Banking',
      tagline: 'AI across lending, fraud, operations, risk and customer service.',
      workflows: [
        'Automated retail customer interactions & balance inquiries',
        'Real-time fraud anomaly pattern recognition',
        'Back-office operational reconciliation & AML triage',
        'Internal credit risk parameter scoring & monitoring'
      ],
      governanceFocus: 'OSFI E-21 resilience & auditability of automated transactional reasoning.'
    },
    {
      icon: Umbrella,
      sector: 'Insurance',
      tagline: 'AI across claims, underwriting, fraud and customer interactions.',
      workflows: [
        'Automated claims adjudication & documentation triage',
        'Commercial & personal policy underwriting assistants',
        'Fraudulent invoice & systematic pattern detection',
        'Policyholder self-service advisory workflows'
      ],
      governanceFocus: 'Strict isolation of provincial health records & sensitive policyholder PII.'
    },
    {
      icon: TrendingUp,
      sector: 'Wealth Management',
      tagline: 'AI supporting advisors, client communications, recommendations and portfolio workflows.',
      workflows: [
        'Advisor copilot for meeting summaries & research synthesis',
        'High-net-worth portfolio rebalancing suggestions',
        'Tax optimization modeling & capital gains scenarios',
        'Client communication reviews for suitability & compliance'
      ],
      governanceFocus: 'Fiduciary duty preservation, recommendation tracing, and suitability evidence.'
    },
    {
      icon: CreditCard,
      sector: 'Lending & Fintech',
      tagline: 'AI-enabled underwriting, servicing, risk and operational workflows.',
      workflows: [
        'Alternative data & rapid credit decisioning models',
        'Loan servicing automation & delinquency outreach',
        'Fintech API integrations & partner ecosystem tool-calling',
        'Automated KYC & Canadian identity verification flows'
      ],
      governanceFocus: 'Algorithmic fairness, model explainability, and credit decision defensibility.'
    }
  ];

  return (
    <section id="financial-services" className="py-24 px-6 lg:px-12 bg-[#040A16] relative border-t border-slate-900/80">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Sector Focus · Canada & Global Markets
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Built for AI in financial services
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            When AI touches financial decisions and critical business workflows, organizations need visibility into how those systems are used, governed and monitored.
          </p>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.16)] transition-all duration-300 rounded-2xl p-7 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400/90 bg-cyan-950/40 border border-cyan-500/25 px-2.5 py-1 rounded-full font-bold">
                      FINANCIAL USE CASES
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                      {item.sector}
                    </h3>
                    <p className="text-slate-200 text-sm font-medium mt-1.5 leading-relaxed font-sans">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                      Critical AI Workflows:
                    </div>
                    {item.workflows.map((wf, wIdx) => (
                      <div key={wIdx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{wf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-800/60 bg-slate-950/40 -mx-7 -mb-7 p-5 rounded-b-2xl">
                  <div className="flex items-start gap-2 text-xs">
                    <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-mono text-[10px] uppercase block font-semibold">Governance Focus:</span>
                      <span className="text-slate-300 font-sans text-xs">{item.governanceFocus}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
