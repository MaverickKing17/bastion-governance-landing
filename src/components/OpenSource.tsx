import React from 'react';
import { Terminal, Github, CheckCircle2, ShieldAlert, Cpu, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const OpenSource: React.FC = () => {
  const terminalTabs = ['npm install', 'verify.sh', 'telemetry.conf'];
  const [activeTab, setActiveTab] = React.useState(0);

  const getCodeContent = () => {
    switch (activeTab) {
      case 1:
        return `# Cryptographic verification checklist\n$ gpg --verify bastion-guard.sig\n\n# GPG signature matched from Bastion Key Authority\n# hash: sha256_f8a3d42e0965c711a938be9238fcd\n# Status: 100% verified secure container binary\n# Audit chain validation: SUCCESSFUL\nSTATUS: VERIFIED SECURE`;
      case 2:
        return `# Telemetry configuration profile\n{\n  "engine": "bastion-guard",\n  "version": "2.8.0",\n  "masking_mode": "max-defense",\n  "residency": "ca-central-1",\n  "payload_encryption": "aes-256-gcm",\n  "circuit_breakers": {\n    "block_pii": true,\n    "block_prompt_injection": true,\n    "max_token_cost_threshold": 10.0\n  }\n}`;
      case 0:
      default:
        return `# Deploy our telemetry extraction layer directly\n$ npm install @bastion/guard-telemetry\n\n# Telemetry client initialization succeeded.\n# Latency overhead: 0.14ms\n# Connected to Bastion Audit gateway.\n# Loaded 42 semantic detection guardrails.\nSTATUS: BOUND`;
    }
  };

  return (
    <section id="open-source" className="py-24 px-6 lg:px-12 bg-slate-950 relative border-t border-slate-900/60">
      {/* Background glow decoration */}
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Transparency Core
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Trust Through Transparency
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-sans">
            We believe enterprise security infrastructure shouldn't be a black box. Our telemetry engine is completely inspectable.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Copy Block */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-wide uppercase font-mono">
              Inspectable Gateway Telemetry
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-sans font-medium">
              Our core telemetry collection engine, <strong className="text-white font-semibold">Bastion Guard</strong>, is fully open-source on GitHub. This means your internal engineering, security operations, and compliance audit teams can inspect, verify, and conduct complete security reviews of our container code before any customer data or corporate credentials are introduced.
            </p>

            {/* Checklist of open source assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Auditable Codebase</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Logs or Dial-Home</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dual Sandbox Container Isolation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Cryptographic Signatures</span>
              </div>
            </div>

            {/* GitHub button link */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                className="px-5 py-3 bg-[#0A1220]/80 border border-slate-800 hover:border-slate-600 hover:bg-[#0E1B30] text-slate-200 hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-300 cursor-pointer flex items-center gap-2.5 shadow-sm"
              >
                <Github className="w-4 h-4" />
                Inspect GitHub Repository
              </button>
              
              <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px]">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                Loved by 12,000+ security engineers
              </div>
            </div>
          </div>

          {/* Right Column Monospace Terminal block */}
          <div className="bg-[#050C16] rounded-xl border border-sky-500/10 shadow-[0_0_50px_rgba(14,165,233,0.05)] overflow-hidden flex flex-col h-[340px]">
            {/* Terminal Header */}
            <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900/60 select-none shrink-0">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-500" />
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                  Bastion Guard Secure Shell
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-mono bg-sky-950/40 border border-sky-500/20 text-sky-400 px-1.5 py-0.5 rounded font-bold">
                  v2.8-STABLE
                </span>
              </div>
            </div>

            {/* Tab Toggles inside Terminal */}
            <div className="bg-slate-950/40 border-b border-slate-900/60 flex px-2 shrink-0">
              {terminalTabs.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-2 text-[10px] font-mono border-b-2 transition-all duration-200 cursor-pointer ${
                    activeTab === idx
                      ? 'border-sky-500 text-sky-400 font-semibold'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code Output Window */}
            <div className="flex-1 p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-300 overflow-y-auto leading-relaxed select-text bg-[#050C16] scrollbar-thin">
              <pre className="whitespace-pre-wrap break-all sm:break-normal font-mono">{getCodeContent()}</pre>
            </div>

            {/* Terminal Meta footer */}
            <div className="p-3 bg-slate-950/50 border-t border-slate-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[9px] text-slate-500">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-emerald-400 font-bold">● BASTION AUDIT OPEN SOURCE</span>
                <span>TELEMETRY ENGINE</span>
              </div>
              <span className="font-bold text-[8px] sm:text-[9px]">VERIFIED PACKAGE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
