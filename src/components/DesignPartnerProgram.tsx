import React from 'react';
import { Users, FileCheck, Shield, HelpCircle, EyeOff, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const DesignPartnerProgram: React.FC = () => {
  const points = [
    {
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      title: "Built for Highly Regulated Sectors",
      desc: "Architected directly alongside security teams in financial services, medical registries, and critical governance-heavy SaaS platforms."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
      title: "Sandbox-First Evaluation",
      desc: "Deploy and review the full platform utility inside isolated staging environments with high-fidelity simulated agent traffic before deployment."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-cyan-400" />,
      title: "Zero Production Credentials Required",
      desc: "Conduct comprehensive audit trials and pen-tests using fully synthetic keys and sandboxed mock credentials—never touching live data."
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      title: "Privacy-First Data Isolation",
      desc: "Our localized containment architecture ensures that no user-authored agent prompts or organizational secrets ever leave your environment."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      title: "Engineering Collaboration",
      desc: "Direct integration channels with the Bastion Security founding engineering team to custom-tailor safety circuit-breakers and specialized policy definitions."
    }
  ];

  return (
    <section id="design-partners" className="py-24 px-6 lg:px-12 bg-[#050B14] relative border-t border-slate-900/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Design Partner Program
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Co-Develop the Future of <br className="hidden sm:block" />
            Autonomous Agent Security
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            We work directly with visionary security leaders, CISOs, and enterprise platform engineering teams. Evaluate Bastion Audit with absolute confidence and Zero Data Risk.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main program overview card (double height or featured styling) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#0B253D] via-[#081B2E] to-[#040D17] border border-cyan-500/60 hover:border-cyan-400 hover:scale-[1.015] hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] transition-all duration-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden group"
          >
            {/* Ambient indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-[40px] pointer-events-none" />
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                Why partner with Bastion Audit?
              </h3>
              <p className="text-zinc-200 text-sm leading-relaxed font-sans font-medium">
                Our Design Partner Program is tailored specifically for high-growth enterprises and highly regulated organizations who cannot compromise on data sovereignty, runtime latency, or system visibility.
              </p>
              
              <ul className="space-y-3.5 text-xs text-white font-mono font-bold">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
                  <span className="text-zinc-200">Direct roadmap influence</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
                  <span className="text-zinc-200">Dedicated Slack / Teams support channel</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
                  <span className="text-zinc-200">Custom-built integration layers</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-cyan-500/15 mt-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <HelpCircle className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-[10px] text-cyan-300 font-sans font-bold uppercase tracking-wider">Questions about sandbox tests?</p>
                <p className="text-[10px] text-cyan-400 font-mono mt-0.5">Contact: secops@bastion.security</p>
              </div>
            </div>
          </motion.div>

          {/* Regular Points */}
          {points.map((point, index) => {
            const isRemainingThree = index >= 2; // Index 2, 3, 4 correspond to Cards 03, 04, 05
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`border transition-all duration-300 flex flex-col justify-between group rounded-2xl p-6 hover:scale-[1.015] ${
                  isRemainingThree
                    ? 'bg-gradient-to-br from-[#0E2543] via-[#08172D] to-[#030A14] border-cyan-500/70 border-l-4 border-l-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.18)] hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:border-cyan-400'
                    : 'bg-gradient-to-br from-[#0F1C30] to-[#060D1A] border-[#1E3250] hover:bg-gradient-to-br hover:from-[#142A4A] hover:to-[#091526] hover:border-cyan-500/80 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]'
                }`}
              >
                <div className="space-y-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shadow-sm ${
                    isRemainingThree
                      ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400 shadow-cyan-500/10'
                      : 'bg-cyan-500/10 border-cyan-400/25 text-cyan-400/90'
                  }`}>
                    {point.icon}
                  </div>
                  
                  <div className="space-y-2.5">
                    <h4 className="text-base font-extrabold text-white tracking-wide font-sans group-hover:text-cyan-300 transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {point.desc}
                    </p>
                  </div>
                </div>

                <div className={`pt-6 border-t mt-6 flex items-center gap-1.5 text-[9px] font-mono tracking-wider font-bold uppercase ${
                  isRemainingThree
                    ? 'border-cyan-500/15 text-cyan-300'
                    : 'border-slate-800/60 text-cyan-400/80'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isRemainingThree ? 'bg-cyan-400 animate-pulse' : 'bg-cyan-500'}`} />
                  <span>0{index + 1} / SECURITY CRITERIA</span>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
