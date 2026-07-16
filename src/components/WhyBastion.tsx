import React from 'react';
import { ShieldOff, UserX, AlertTriangle, Cpu, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyBastion: React.FC = () => {
  const cards = [
    {
      icon: <ShieldOff className="w-5 h-5 text-cyan-400" />,
      title: "Firewalls Fail on AI Reasoning",
      description: "Traditional payload inspection filters protocols and static patterns, but lacks the semantic capability to detect prompt injections, multi-turn social engineering, or hallucinated logic bypasses."
    },
    {
      icon: <UserX className="w-5 h-5 text-cyan-400" />,
      title: "Static IAM Cannot Govern Autonomy",
      description: "Identity and Access Management defines what a service is allowed to authenticate. It cannot intercept downstream agent decision-making when given unstructured, non-deterministic tasks."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-cyan-400" />,
      title: "SIEMs Observe but Do Not Prevent",
      description: "Security Information and Event Management systems read logs in retrospect. They notify security operations hours after an autonomous agent has already initiated an unauthorized API query or data export."
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "The Bastion AI Control Plane",
      description: "Our dual-engine gateway analyzes semantics in real-time. We continuously audit agent intent, verify runtime tool-execution permissions, and apply millisecond circuit breakers to prevent breach before it happens."
    }
  ];

  return (
    <section id="why-bastion" className="py-24 px-6 lg:px-12 bg-[#050B14] relative border-t border-slate-900/60">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Architectural Gap Analysis
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Why Traditional Security Stops <br className="hidden sm:block" />
            at the AI Agent
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            As autonomous enterprise systems evolve from simple text chat to action-oriented agents, traditional perimeter defense mechanisms leave business critical APIs, databases, and compliance boundaries entirely unprotected.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 sm:p-8 rounded-xl border border-l-4 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.015] ${
                index === 3 
                  ? 'bg-gradient-to-br from-[#0D1F38] via-[#081527] to-[#040B15] border-cyan-500/70 border-l-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] hover:border-cyan-400'
                  : 'bg-gradient-to-br from-[#0F1C30] to-[#060D1A] border-[#1E3250] border-l-sky-500/40 hover:border-cyan-500/70 hover:border-l-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]'
              }`}
            >
              <div className="space-y-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                  index === 3
                    ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400 shadow-cyan-500/10'
                    : 'bg-[#030712] border-slate-800 text-cyan-400'
                }`}>
                  {card.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed font-sans font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
              
              {index === 3 && (
                <div className="pt-6 border-t border-cyan-500/10 mt-6 flex items-center gap-2 text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  <span>Explore the Active Gateway Architecture</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
