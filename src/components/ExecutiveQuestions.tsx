import React from 'react';
import { HelpCircle, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ExecutiveQuestions: React.FC = () => {
  const leadershipQuestions = [
    {
      question: 'Where is AI being used?',
      perspective: 'Inventory & Perimeter',
      detail: 'Identify internal microservices, vendor-embedded generative tools, and line-of-business models deployed across business units.'
    },
    {
      question: 'Which systems matter most?',
      perspective: 'Materiality & Criticality',
      detail: 'Rank AI assets by financial exposure, operational dependence, customer-facing touchpoints, and regulatory sensitivity.'
    },
    {
      question: 'Who owns them?',
      perspective: 'Accountability & Line-of-Business',
      detail: 'Establish unequivocal ownership between technical development teams, risk stewards, and business line sponsors.'
    },
    {
      question: 'What risks are emerging?',
      perspective: 'Continuous Risk Monitoring',
      detail: 'Surface behavioral drift, unexpected prompt interactions, sensitive PII handling, and third-party API dependencies in real time.'
    },
    {
      question: 'Which controls are operating?',
      perspective: 'Policy Enforcement & Verification',
      detail: 'Verify whether designated guardrails, human approvals, rate-limits, and masking layers are functioning as intended.'
    },
    {
      question: 'Can we demonstrate what happened?',
      perspective: 'Audit & Regulatory Defensibility',
      detail: 'Produce verifiable decision trails, input/output histories, and immutable logs ready for internal audit and OSFI review.'
    }
  ];

  return (
    <section id="executive-questions" className="py-24 px-6 lg:px-12 bg-[#020611] relative border-t border-slate-900/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Leadership & Board Oversight
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            The questions leadership <br className="hidden sm:block" />
            needs answered
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            In financial services, executive accountability cannot rest on assumptions. Senior leaders need unambiguous, defensible intelligence about AI deployment.
          </p>
        </div>

        {/* 6 Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipQuestions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.14)] transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <HelpCircle className="w-4.5 h-4.5 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/80 uppercase font-semibold">
                    Q0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                    {item.question}
                  </h3>
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mt-1 font-semibold">
                    {item.perspective}
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed font-sans font-medium">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-800/60 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80" />
                <span>Pellorn Visibility Target</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Summary Banner */}
        <div className="bg-gradient-to-r from-slate-900/90 via-[#071324] to-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto space-y-3 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <p className="text-base sm:text-lg text-white font-sans font-semibold">
            Pellorn is being designed to turn a fragmented AI landscape into clearer intelligence for decision-makers.
          </p>
          <p className="text-xs text-slate-400 font-sans max-w-2xl mx-auto">
            Providing senior risk officers, compliance leaders, and technology executives with verifiable, structured evidence rather than uninspected assumptions.
          </p>
        </div>

      </div>
    </section>
  );
};
