import React from 'react';
import { Layers, Database, Key, EyeOff, ShieldCheck, ChevronDown, Cpu, Shield, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Architecture: React.FC = () => {
  const highlights = [
    { text: 'Sandbox-first evaluation framework', icon: Layers },
    { text: 'Synthetic data payload validation', icon: Database },
    { text: 'Zero production credential inputs', icon: Key },
    { text: 'Complete customer data isolation', icon: EyeOff },
    { text: 'Accelerated security procurement cycles', icon: ShieldCheck },
  ];

  const pipelineNodes = [
    { 
      title: 'LLM', 
      desc: 'Foundation models (GPT-4, Gemini, Claude) executing requests.', 
      code: 'STAGE_01_LLM',
      color: 'border-l-sky-500/40'
    },
    { 
      title: 'AI Agent', 
      desc: 'Autonomous agent runtimes and dynamic system tooling.', 
      code: 'STAGE_02_AGENT',
      color: 'border-l-cyan-500/40'
    },
    { 
      title: 'Identity Verification', 
      desc: 'Cryptographic signature authorization of active agent certificates.', 
      code: 'STAGE_03_ID_VERIFY',
      color: 'border-l-sky-400/50'
    },
    { 
      title: 'Prompt Firewall', 
      desc: 'Real-time defense against injection, payload poisoning, and jailbreaks.', 
      code: 'STAGE_04_FIREWALL',
      color: 'border-l-cyan-400/50'
    },
    { 
      title: 'Policy Engine', 
      desc: 'Continuous mapping against PIPEDA, NIST AI RMF, and internal controls.', 
      code: 'STAGE_05_POLICY_ENG',
      color: 'border-l-sky-500/60'
    },
    { 
      title: 'Risk Engine', 
      desc: 'Behavioral telemetry score monitoring and alignment drift validation.', 
      code: 'STAGE_06_RISK_ENG',
      color: 'border-l-cyan-500/60'
    },
    { 
      title: 'Evidence Vault', 
      desc: 'SOC2-compliant immutable storage for cryptographically-signed audits.', 
      code: 'STAGE_07_EVIDENCE',
      color: 'border-l-sky-400/80'
    },
    { 
      title: 'Microsoft Sentinel / SIEM', 
      desc: 'Seamless dispatching of anomalous telemetry directly to corporate SIEMs.', 
      code: 'STAGE_08_INTEGRATION',
      color: 'border-l-teal-400'
    }
  ];

  return (
    <section id="architecture" className="py-24 px-6 lg:px-12 bg-slate-950 relative border-t border-slate-900/60">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono mb-2">
            System Infrastructure
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
            Enterprise Architecture Pipeline
          </h3>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Dual Engine Enforcement Copy */}
          <div className="space-y-8 sticky top-28">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-extrabold">
                <Shield className="w-3.5 h-3.5" />
                Active Gateway Protocol
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                Continuous Governance Interception
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-sans font-medium">
                Bastion Audit inserts a real-time, identity-aware security plane between your enterprise agents and foundation language models. We evaluate, audit, and log every outbound tool invocation, parameter payload, and reasoning cycle.
              </p>
            </div>

            {/* Structured Highlights list */}
            <ul className="space-y-4 pt-2">
              {highlights.map((h, index) => {
                const Icon = h.icon;
                return (
                  <li key={index} className="flex items-center gap-3.5 text-xs text-slate-200 font-medium font-sans">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span>{h.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Core Message Callout */}
            <div className="bg-[#050C16] border border-slate-800 rounded-xl p-5 shadow-[0_4px_30px_rgba(14,165,233,0.02)]">
              <p className="text-xs text-slate-400 leading-relaxed italic">
                &ldquo;By placing Bastion Audit at the proxy level, security teams can conduct comprehensive audit checks on live LLM traffic without any code modifications inside the active agent.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column - Beautiful Architecture Diagram schematic of 8-layer pipeline */}
          <div className="bg-[#050C16]/80 rounded-2xl border border-slate-800/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            {/* Dots background grid for schematic looks */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-40" />

            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6 relative z-10">
              <span className="text-[10px] font-mono text-slate-500 tracking-wider">SECURE DATA FLOW PATHWAY</span>
              <span className="text-[9px] font-mono bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-400/20">8 PIPELINE CODES</span>
            </div>

            {/* Schematic Flow */}
            <div className="space-y-3 relative z-10">
              {pipelineNodes.map((node, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Schematic card - Transparent card with cyan accent left border */}
                  <div className={`w-full rounded-xl border border-sky-500/10 border-l-4 ${node.color} bg-slate-950/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-sky-400/40 hover:bg-[#07111F]/50 hover:shadow-[0_0_25px_rgba(14,165,233,0.08)] transform hover:-translate-y-0.5 group`}>
                    <div className="space-y-1 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono uppercase bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-slate-500 font-bold group-hover:text-cyan-400 group-hover:border-sky-500/20 transition-colors">
                          0{idx + 1}
                        </span>
                        <h5 className="text-xs font-bold uppercase tracking-wide text-white">
                          {node.title}
                        </h5>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                        {node.desc}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 font-mono text-[9px] text-sky-500/60 group-hover:text-sky-400 transition-colors">
                      {node.code}
                    </div>
                  </div>

                  {/* Flow Chevron down */}
                  {idx < pipelineNodes.length - 1 && (
                    <div className="my-1.5 text-slate-700 flex flex-col items-center justify-center">
                      <ChevronDown className="w-4.5 h-4.5 text-sky-500/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
