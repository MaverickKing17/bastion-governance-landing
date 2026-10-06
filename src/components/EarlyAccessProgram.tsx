import React from 'react';
import { Users, Shield, Layers, FileCheck, Compass, Sparkles, HelpCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const EarlyAccessProgram: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Isolated Staging Evaluation',
      desc: 'Review the Pellorn governance model and risk intelligence in sandboxed staging environments without connecting live production systems.'
    },
    {
      icon: Layers,
      title: 'Zero Production Data Required',
      desc: 'Validate policies, telemetry ingestion, and reporting structures using synthetic data payloads and simulated financial workflows.'
    },
    {
      icon: Users,
      title: 'Direct Founding Team Collaboration',
      desc: 'Work directly with the Pellorn engineering and architecture team in Toronto, Ontario to evaluate alignment with your internal risk framework.'
    },
    {
      icon: Compass,
      title: 'Influence Platform Taxonomy',
      desc: 'Help shape governance metrics, risk categorization, and OSFI-aligned executive report templates to reflect real-world financial realities.'
    },
    {
      icon: FileCheck,
      title: 'Defensible Audit Templates',
      desc: 'Receive pre-compiled governance mapping documentation and control frameworks designed for presentation to internal audit and risk committees.'
    }
  ];

  return (
    <section id="early-access-program" className="py-24 px-6 lg:px-12 bg-[#030713] relative border-t border-slate-900/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Advisory Validation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Early Access & Advisory Program
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            We are collaborating with senior technology, risk, compliance, and AI leaders across Canadian financial institutions to refine the next generation of AI governance intelligence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#0E1F36] via-[#091527] to-[#040C16] border border-cyan-500/40 rounded-2xl p-7 flex flex-col justify-between shadow-[0_0_35px_rgba(6,182,212,0.18)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-[40px] pointer-events-none" />
            
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  CANADIAN FINANCIAL SERVICES
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                Why participate in Early Validation?
              </h3>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                Pellorn is currently in market validation. As institutions expand AI from experimental pilots to critical operations, we provide a forum for risk and technology executives to evaluate practical governance solutions with zero operational friction.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-200 font-sans">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Bi-weekly architectural feedback loop</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Early access to synthetic sandbox staging</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Priority access upon platform release</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-cyan-500/20 mt-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-cyan-300 font-sans font-bold uppercase tracking-wider">Direct Advisory Inquiry</p>
                <p className="text-[11px] text-cyan-400 font-mono mt-0.5">advisory@pellorn.com</p>
              </div>
            </div>
          </motion.div>

          {/* 5 Value Prop Cards */}
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.14)] transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-sans font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>EARLY ACCESS BENEFIT</span>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
