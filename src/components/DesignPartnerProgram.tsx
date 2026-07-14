import React from 'react';
import { Users, FileCheck, Shield, HelpCircle, EyeOff, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const DesignPartnerProgram: React.FC = () => {
  const points = [
    {
      icon: <Shield className="w-5 h-5 text-sky-400" />,
      title: "Built for Highly Regulated Sectors",
      desc: "Architected directly alongside security teams in financial services, medical registries, and critical governance-heavy SaaS platforms."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-sky-400" />,
      title: "Sandbox-First Evaluation",
      desc: "Deploy and review the full platform utility inside isolated staging environments with high-fidelity simulated agent traffic before deployment."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-sky-400" />,
      title: "Zero Production Credentials Required",
      desc: "Conduct comprehensive audit trials and pen-tests using fully synthetic keys and sandboxed mock credentials—never touching live data."
    },
    {
      icon: <Users className="w-5 h-5 text-sky-400" />,
      title: "Privacy-First Data Isolation",
      desc: "Our localized containment architecture ensures that no user-authored agent prompts or organizational secrets ever leave your environment."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-sky-400" />,
      title: "Engineering Collaboration",
      desc: "Direct integration channels with the Bastion Security founding engineering team to custom-tailor safety circuit-breakers and specialized policy definitions."
    }
  ];

  return (
    <section id="design-partners" className="py-24 px-6 lg:px-12 bg-[#0C1523] relative border-t border-slate-900/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[10px] uppercase tracking-wider font-bold">
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#050C16] to-[#0A1220] border-2 border-sky-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(14,165,233,0.1)] relative overflow-hidden"
          >
            {/* Ambient indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full filter blur-[40px] pointer-events-none" />
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide font-sans">
                Why partner with Bastion Audit?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Our Design Partner Program is tailored specifically for high-growth enterprises and highly regulated organizations who cannot compromise on data sovereignty, runtime latency, or system visibility.
              </p>
              
              <ul className="space-y-3 text-xs text-slate-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Direct roadmap influence</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Dedicated Slack / Teams support channel</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Custom-built integration layers</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-900/60 mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sky-500/15 flex items-center justify-center text-sky-400 shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-sans font-semibold leading-none">Questions about sandbox tests?</p>
                <p className="text-[9px] text-slate-500 font-mono mt-1">Contact: secops@bastion.security</p>
              </div>
            </div>
          </motion.div>

          {/* Regular Points */}
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#050C16]/50 border border-slate-900 rounded-xl p-6 hover:bg-[#081220]/60 hover:border-sky-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 transition-colors group-hover:bg-sky-500/15">
                  {point.icon}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-200 tracking-wide font-sans group-hover:text-white transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center gap-1.5 text-[9px] font-mono text-slate-500 tracking-wider">
                <span>0{index + 1} / SECURITY CRITERIA</span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
