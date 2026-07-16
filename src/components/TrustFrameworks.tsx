import React from 'react';
import { ShieldAlert, Fingerprint, RefreshCw, BarChart2, Radio, Server, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const TrustFrameworks: React.FC = () => {
  const frameworks = [
    {
      name: "PIPEDA / AIDA Compliance",
      category: "Privacy Control",
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
      desc: "Architected to filter outbound data structures, masking PII and safeguarding compliance with Canadian federal privacy regulations."
    },
    {
      name: "NIST AI RMF Alignment",
      category: "Risk Governance",
      icon: <Fingerprint className="w-5 h-5 text-cyan-400" />,
      desc: "Continuous semantic scoring mapped precisely against the National Institute of Standards and Technology AI Risk Management guidelines."
    },
    {
      name: "OWASP LLM Top 10",
      category: "Threat Abatement",
      icon: <ShieldAlert className="w-5 h-5 text-cyan-400" />,
      desc: "Built-in mitigations for prompt injection, sensitive data disclosure, overreliance, and downstream model execution vulnerabilities."
    },
    {
      name: "OpenTelemetry Standards",
      category: "Observability",
      icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
      desc: "Standardized output structured tracing, metrics, and logs dispatchable to standard performance monitors and application dashboards."
    },
    {
      name: "Microsoft Entra Identity",
      category: "Directory Sync",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      desc: "Federated least-privilege role authentication for validating the secure identities of active autonomous agent clusters."
    },
    {
      name: "Microsoft Sentinel Syslog",
      category: "SIEM Dispatcher",
      icon: <Radio className="w-5 h-5 text-cyan-400" />,
      desc: "Instant forwarding of security incidents and anomalies using native RFC-compliant syslog formats for active SOC workflows."
    },
    {
      name: "Zero Trust Architecture",
      category: "Access Policy",
      icon: <BarChart2 className="w-5 h-5 text-cyan-400" />,
      desc: "Strictly enforces explicit verification for every external database call, API action, or file write executed by an autonomous model."
    }
  ];

  return (
    <section id="trust" className="py-24 px-6 lg:px-12 bg-[#050B14] relative border-t border-slate-900/60 overflow-hidden">
      {/* Background neon effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
            Compliance & Security Integrations
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Designed for Regulated Enterprises
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            Bastion Audit functions as a drop-in security layer compatible with industry standard directories, SIEM logs, privacy legislation guides, and Zero Trust access management workflows.
          </p>
        </div>

        {/* Badges/Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {frameworks.map((fw, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-br from-[#0F1C30] to-[#060D1A] border border-[#1E3250]/90 hover:bg-gradient-to-br hover:from-[#142A4A] hover:to-[#091526] hover:border-cyan-400/80 hover:shadow-[0_0_40px_rgba(6,182,212,0.22)] hover:scale-[1.015] transition-all duration-300 flex flex-col justify-between group rounded-xl p-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-sm">
                    {fw.icon}
                  </div>
                  <span className="text-[9px] font-mono uppercase bg-cyan-500/15 border border-cyan-400/25 px-2 py-0.5 rounded text-cyan-300 tracking-wider font-bold">
                    {fw.category}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide font-sans group-hover:text-cyan-300 transition-colors">
                    {fw.name}
                  </h4>
                  <p className="text-zinc-300 text-[11px] leading-relaxed mt-2.5 font-sans font-medium">
                    {fw.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-4 flex items-center gap-1.5 text-[9px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>COMPATIBILITY READY</span>
              </div>
            </motion.div>
          ))}
          
          {/* Highlight card for Custom Controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="bg-gradient-to-br from-[#0B253D] via-[#081B2E] to-[#040D17] border border-cyan-500/60 shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:border-cyan-400 hover:scale-[1.015] hover:shadow-[0_0_50px_rgba(6,182,212,0.28)] transition-all duration-300 flex flex-col justify-between rounded-xl p-5"
          >
            <div className="space-y-3.5">
              <div className="flex">
                <span className="text-[9px] font-mono bg-cyan-500/25 text-cyan-200 px-2.5 py-1 rounded-full border border-cyan-400/30 font-extrabold uppercase tracking-wider">
                  ENTERPRISE CUSTOMIZABLE
                </span>
              </div>
              <h4 className="text-base font-bold text-white tracking-wide font-sans">
                Need Custom Policies?
              </h4>
              <p className="text-zinc-200 text-xs leading-relaxed font-sans font-medium">
                Our policy engine supports tailored compliance templates for private banking guidelines, provincial health registries, or unique corporate data classification protocols.
              </p>
            </div>

            <div className="pt-4 border-t border-cyan-500/15 mt-4 text-[9px] font-mono text-cyan-300/80 uppercase font-bold tracking-wider">
              RESOURCES PROVIDED BY BASTION SEC
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
