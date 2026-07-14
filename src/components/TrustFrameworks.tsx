import React from 'react';
import { ShieldAlert, Fingerprint, RefreshCw, BarChart2, Radio, Server, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const TrustFrameworks: React.FC = () => {
  const frameworks = [
    {
      name: "PIPEDA / AIDA Compliance",
      category: "Privacy Control",
      icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />,
      desc: "Architected to filter outbound data structures, masking PII and safeguarding compliance with Canadian federal privacy regulations."
    },
    {
      name: "NIST AI RMF Alignment",
      category: "Risk Governance",
      icon: <Fingerprint className="w-5 h-5 text-sky-400" />,
      desc: "Continuous semantic scoring mapped precisely against the National Institute of Standards and Technology AI Risk Management guidelines."
    },
    {
      name: "OWASP LLM Top 10",
      category: "Threat Abatement",
      icon: <ShieldAlert className="w-5 h-5 text-sky-400" />,
      desc: "Built-in mitigations for prompt injection, sensitive data disclosure, overreliance, and downstream model execution vulnerabilities."
    },
    {
      name: "OpenTelemetry Standards",
      category: "Observability",
      icon: <RefreshCw className="w-5 h-5 text-sky-400" />,
      desc: "Standardized output structured tracing, metrics, and logs dispatchable to standard performance monitors and application dashboards."
    },
    {
      name: "Microsoft Entra Identity",
      category: "Directory Sync",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      desc: "Federated least-privilege role authentication for validating the secure identities of active autonomous agent clusters."
    },
    {
      name: "Microsoft Sentinel Syslog",
      category: "SIEM Dispatcher",
      icon: <Radio className="w-5 h-5 text-sky-400" />,
      desc: "Instant forwarding of security incidents and anomalies using native RFC-compliant syslog formats for active SOC workflows."
    },
    {
      name: "Zero Trust Architecture",
      category: "Access Policy",
      icon: <BarChart2 className="w-5 h-5 text-sky-400" />,
      desc: "Strictly enforces explicit verification for every external database call, API action, or file write executed by an autonomous model."
    }
  ];

  return (
    <section id="trust" className="py-24 px-6 lg:px-12 bg-[#0C1523] relative border-t border-slate-900/60 overflow-hidden">
      {/* Background neon effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[10px] uppercase tracking-wider font-bold">
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-950/45 border border-slate-900 rounded-xl p-5 hover:bg-[#07111F]/50 hover:border-sky-500/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    {fw.icon}
                  </div>
                  <span className="text-[9px] font-mono uppercase bg-slate-900 border border-slate-800/80 px-2 py-0.5 rounded text-slate-500 tracking-wider">
                    {fw.category}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-200 tracking-wide font-sans group-hover:text-white transition-colors">
                    {fw.name}
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed mt-2 font-sans">
                    {fw.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-1.5 text-[9px] font-mono uppercase text-sky-400/70">
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                <span>COMPATIBILITY READY</span>
              </div>
            </motion.div>
          ))}
          
          {/* Highlight card for Custom Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="bg-slate-950 border border-sky-500/20 rounded-xl p-5 shadow-[0_0_30px_rgba(14,165,233,0.05)] flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-[9px] font-mono bg-sky-400/10 text-sky-400 px-2.5 py-1 rounded-full border border-sky-400/20 font-bold">
                ENTERPRISE CUSTOMIZABLE
              </span>
              <h4 className="text-sm font-bold text-white tracking-wide font-sans">
                Need Custom Policies?
              </h4>
              <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                Our policy engine supports tailored compliance templates for private banking guidelines, provincial health registries, or unique corporate data classification protocols.
              </p>
            </div>

            <span className="pt-4 text-[9px] font-mono text-slate-500 uppercase">
              RESOURCES PROVIDED BY BASTION SEC
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
