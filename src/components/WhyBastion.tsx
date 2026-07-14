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
              className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] ${
                index === 3 
                  ? 'bg-gradient-to-br from-[#1C2C46] to-[#0D1828] border-cyan-500/60 shadow-[0_0_40px_rgba(6,182,212,0.12)] hover:border-cyan-400'
                  : 'bg-gradient-to-br from-[#121E31] to-[#0A1322] border-[#1E3250] hover:border-cyan-500/80'
              }`}
            >
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                  index === 3
                    ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400'
                    : 'bg-slate-950 border-slate-800 text-cyan-400'
                }`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide font-sans group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  {card.description}
                </p>
              </div>
              
              {index === 3 && (
                <div className="pt-6 flex items-center gap-2 text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
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
