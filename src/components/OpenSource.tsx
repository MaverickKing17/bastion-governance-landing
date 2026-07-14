import React from 'react';
import { Terminal, Github, CheckCircle2, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const OpenSource: React.FC = () => {
  const terminalTabs = ['npm install', 'verify.sh', 'telemetry.conf'];
  const [activeTab, setActiveTab] = React.useState(0);

  const renderCode = () => {
    switch (activeTab) {
      case 1:
        return (
          <>
            <span className="text-slate-500 font-medium"># Cryptographic verification checklist</span>{"\n"}
            <span className="text-zinc-400">$ </span><span className="text-cyan-400 font-bold">gpg --verify</span> <span className="text-white font-semibold">bastion-guard.sig</span>{"\n"}{"\n"}
            <span className="text-slate-500"># GPG signature matched from Bastion Key Authority</span>{"\n"}
            <span className="text-slate-500"># hash: </span><span className="text-cyan-300 font-medium">sha256_f8a3d42e0965c711a938be9238fcd</span>{"\n"}
            <span className="text-slate-500"># Status: </span><span className="text-emerald-400 font-semibold">100% verified secure container binary</span>{"\n"}
            <span className="text-slate-500"># Audit chain validation: </span><span className="text-emerald-400 font-semibold">SUCCESSFUL</span>{"\n"}{"\n"}
            <span className="text-zinc-400 font-bold">STATUS:</span> <span className="text-emerald-400 font-bold bg-emerald-500/15 px-2.5 py-0.5 rounded border border-emerald-500/30">VERIFIED SECURE</span>
          </>
        );
      case 2:
        return (
          <>
            <span className="text-slate-500 font-medium"># Telemetry configuration profile</span>{"\n"}
            <span className="text-[#A5B4FC]">{"{"}</span>{"\n"}
            <span>  <span className="text-cyan-400">"engine"</span>: <span className="text-[#38BDF8]">"bastion-guard"</span>,</span>{"\n"}
            <span>  <span className="text-cyan-400">"version"</span>: <span className="text-[#38BDF8]">"2.8.0"</span>,</span>{"\n"}
            <span>  <span className="text-cyan-400">"masking_mode"</span>: <span className="text-[#38BDF8]">"max-defense"</span>,</span>{"\n"}
            <span>  <span className="text-cyan-400">"residency"</span>: <span className="text-[#38BDF8]">"ca-central-1"</span>,</span>{"\n"}
            <span>  <span className="text-cyan-400">"payload_encryption"</span>: <span className="text-[#38BDF8]">"aes-256-gcm"</span>,</span>{"\n"}
            <span>  <span className="text-cyan-400">"circuit_breakers"</span>: <span className="text-[#A5B4FC]">{"{"}</span></span>{"\n"}
            <span>    <span className="text-cyan-400">"block_pii"</span>: <span className="text-emerald-400 font-semibold">true</span>,</span>{"\n"}
            <span>    <span className="text-cyan-400">"block_prompt_injection"</span>: <span className="text-emerald-400 font-semibold">true</span>,</span>{"\n"}
            <span>    <span className="text-cyan-400">"max_token_cost_threshold"</span>: <span className="text-amber-400 font-semibold">10.0</span></span>{"\n"}
            <span>  <span className="text-[#A5B4FC]">{"}"}</span></span>{"\n"}
            <span className="text-[#A5B4FC]">{"}"}</span>
          </>
        );
      case 0:
      default:
        return (
          <>
            <span className="text-slate-500 font-medium"># Deploy our telemetry extraction layer directly</span>{"\n"}
            <span className="text-zinc-400">$ </span><span className="text-cyan-400 font-bold">npm install</span> <span className="text-white font-semibold">@bastion/guard-telemetry</span>{"\n"}{"\n"}
            <span className="text-slate-500"># Telemetry client initialization succeeded.</span>{"\n"}
            <span className="text-slate-500"># Latency overhead: </span><span className="text-emerald-400 font-semibold">0.14ms</span>{"\n"}
            <span className="text-slate-500"># Connected to Bastion Audit gateway.</span>{"\n"}
            <span className="text-slate-500"># Loaded 42 semantic detection guardrails.</span>{"\n"}{"\n"}
            <span className="text-zinc-400 font-bold">STATUS:</span> <span className="text-emerald-400 font-bold bg-emerald-500/15 px-2.5 py-0.5 rounded border border-emerald-500/30">BOUND</span>
          </>
        );
    }
  };

  return (
    <section id="open-source" className="py-24 px-6 lg:px-12 bg-[#050B14] relative border-t border-[#121E31]">
      {/* Background glow decoration */}
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Transparency Core
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Trust Through Transparency
          </h2>
          <p className="text-zinc-200 text-sm md:text-base max-w-2xl mx-auto font-sans font-medium">
            We believe enterprise security infrastructure shouldn't be a black box. Our telemetry engine is completely inspectable.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Copy Block */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-cyan-400 tracking-wider uppercase font-mono bg-cyan-950/20 border border-cyan-800/30 px-3 py-1 rounded-md inline-block">
              INSPECTABLE GATEWAY TELEMETRY
            </h4>
            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans font-medium">
              Our core telemetry collection engine, <strong className="text-white font-bold bg-white/5 px-1.5 py-0.5 rounded border border-white/10">Bastion Guard</strong>, is fully open-source on GitHub. This means your internal engineering, security operations, and compliance audit teams can inspect, verify, and conduct complete security reviews of our container code before any customer data or corporate credentials are introduced.
            </p>

            {/* Checklist of open source assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-xs font-mono">
              {[
                "100% Auditable Codebase",
                "Zero Hidden Logs or Dial-Home",
                "Dual Sandbox Container Isolation",
                "Verified Cryptographic Signatures"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#09111E]/40 border border-[#17273F] hover:border-cyan-500/40 transition-all duration-300 group/item">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-white font-semibold font-sans">{text}</span>
                </div>
              ))}
            </div>

            {/* GitHub button link */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                className="px-6 py-3.5 bg-gradient-to-r from-[#0C1524] to-[#12223A] border border-[#1E3250] hover:border-cyan-500/50 hover:from-[#12223A] hover:to-[#172D4D] text-white hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-300 cursor-pointer flex items-center gap-2.5 shadow-lg shadow-black/40 hover:scale-[1.03]"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                Inspect GitHub Repository
              </button>
              
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Licensed under <strong className="text-white font-semibold">Apache-2.0</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column Monospace Terminal block */}
          <div className="bg-[#080E1A]/95 rounded-2xl border border-cyan-500/20 shadow-[0_0_60px_rgba(6,182,212,0.08)] overflow-hidden flex flex-col h-[380px] hover:border-cyan-500/40 hover:scale-[1.01] transition-all duration-300">
            {/* Terminal Header */}
            <div className="bg-[#050B15] px-5 py-3.5 flex items-center justify-between border-b border-[#121E31] select-none shrink-0">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] font-mono text-white font-bold uppercase tracking-wider">
                  Bastion Guard Secure Shell
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded font-bold tracking-wider uppercase animate-pulse">
                  v2.8-STABLE
                </span>
              </div>
            </div>

            {/* Tab Toggles inside Terminal */}
            <div className="bg-[#060D1A] border-b border-[#121E31] flex px-3 gap-1 shrink-0">
              {terminalTabs.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-3 text-[10px] font-mono border-b-2 transition-all duration-200 cursor-pointer ${
                    activeTab === idx
                      ? 'border-cyan-400 text-white font-bold bg-[#0B1726]/40'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code Output Window */}
            <div className="flex-1 p-5 font-mono text-[11px] sm:text-xs text-zinc-100 overflow-y-auto leading-relaxed select-text bg-[#030712] white-scrollbar">
              <pre className="font-mono">{renderCode()}</pre>
            </div>

            {/* Terminal Meta footer */}
            <div className="p-3.5 bg-[#050B15] border-t border-[#121E31] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[9px] text-zinc-400">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  ● BASTION AUDIT OPEN SOURCE
                </span>
                <span className="text-[#527093]">|</span>
                <span>TELEMETRY ENGINE</span>
              </div>
              <span className="font-bold text-[8px] sm:text-[9px] tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                VERIFIED PACKAGE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
