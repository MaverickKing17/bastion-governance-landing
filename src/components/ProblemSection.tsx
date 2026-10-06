import React from 'react';
import { Layers, Network, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export const ProblemSection: React.FC = () => {
  const problemCards = [
    {
      icon: Layers,
      title: 'AI is everywhere',
      description: 'AI is increasingly embedded across applications, workflows, vendors and business functions.',
      kicker: 'Pervasive Deployment',
      details: 'From back-office document processing to front-line customer assistance, teams adopt foundation models and agentic workflows faster than traditional IT cataloging can record them.'
    },
    {
      icon: Network,
      title: 'Governance is fragmented',
      description: 'Information about systems, ownership, risks and controls can live across disconnected teams and tools.',
      kicker: 'Organizational Silos',
      details: 'Data science tracks models, security monitors network traffic, compliance keeps static spreadsheets, and risk teams lack a real-time, consolidated source of truth.'
    },
    {
      icon: Eye,
      title: 'Leadership needs a clearer picture',
      description: 'Executives need to understand where AI is being used, what matters most and where governance attention is required.',
      kicker: 'Executive Blind Spots',
      details: 'Boards, CROs, and CISOs face mounting regulatory obligations under OSFI, PIPEDA, and global AI frameworks, yet lack unified visibility to demonstrate active oversight.'
    }
  ];

  return (
    <section id="problem" className="py-24 px-6 lg:px-12 bg-[#030812] relative border-t border-slate-900/80">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            The Visibility Dilemma
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            AI is moving faster than <br className="hidden sm:block" />
            organizational visibility
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            AI is appearing across applications, workflows, vendors and business processes. As adoption grows, organizations need a clearer way to understand where AI exists, what risks it introduces and how it is governed.
          </p>
        </div>

        {/* 3 Concise Cards with Elevated Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] hover:-translate-y-1 transition-all duration-300 rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top edge border gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-cyan-400/80 uppercase font-semibold tracking-wider">
                      {card.kicker}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight font-sans mt-1 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed font-sans font-medium">
                    {card.description}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed font-sans pt-2 border-t border-slate-800/60">
                    {card.details}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-800/40 flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                  <span>CHALLENGE 0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
