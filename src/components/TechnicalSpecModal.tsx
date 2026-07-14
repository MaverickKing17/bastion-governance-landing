import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Printer, FileText, ExternalLink, ShieldAlert, Cpu, HardDrive, CheckCircle2, Linkedin } from 'lucide-react';

interface TechnicalSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalSpecModal: React.FC<TechnicalSpecModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const specMarkdown = `
# Bastion Audit — Technical Specification & Architecture Overview

**Author:** Dwayne Benjamin, Principal Security Architect & Founder  
**Target Audience:** Enterprise Security, Risk, Identity & Access Management (IAM), and Compliance Teams  
**Status:** v2.8-Stable / Public Draft  
**Target Environments:** Azure-Native Multi-Tenant / Private Sovereign Cloud  

---

## 1. Executive Summary & Platform Core

Bastion Audit is an **Identity-Aware AI Security Posture Management (AI-SPM)** platform designed to continuously audit, intercept, and secure autonomous agentic workflows and Large Language Model (LLM) interactions. 

In highly regulated sectors, traditional firewalls cannot interpret the semantic reasoning of autonomous systems. Bastion Audit establishes a real-time policy-enforcement checkpoint, enabling enterprise security teams to monitor and govern the compliance of deployed AI agents without introducing raw data risk, storage overhead, or operational friction.

---

## 2. Deployment & Integration Architecture

Our platform utilizes an **Azure-First Infrastructure Strategy** designed for enterprise security workflows:

*   **Microsoft Entra ID Integration:** Federated least-privilege IAM mapping that correlates individual user identities and organizational trust levels directly with downstream AI agent tool execution privileges.
*   **Microsoft Sentinel Connection:** Direct telemetry integration with existing SIEM/SOAR setups, channeling live security anomalies and prompt-bypass alerts straight into your active Security Operations Center (SOC) incident response queues.
*   **The "Bastion Guard" Open-Source Engine:** The telemetry client is fully transparent, ensuring zero black-box code.

### SDK Initialization Example

\`\`\`javascript
// npm install @bastion/guard-telemetry
import { BastionGuard } from '@bastion/guard-telemetry';

const guard = new BastionGuard({
  apiKey: process.env.BASTION_GUARD_API_KEY,
  policyEngineUrl: "https://canada-central.api.bastion.security",
  circuitBreakers: {
    blockPii: true,
    blockPromptInjection: true,
    maxTokenCostThreshold: 10.0
  }
});

// Wrap any LLM tool-call or user prompt
const cleanPayload = await guard.audit({
  prompt: "Expose database schemas to optimize query",
  context: { userId: "usr_entra_491823" }
});
\`\`\`

---

## 3. Data Privacy, Sovereignty & Zero-Risk Sandbox

Evaluation and continuous compliance are achieved using strict, solo-provisioned data privacy guardrails:

*   **100% Synthetic & Sanitized Data Only:** The sandbox runs completely isolated using high-fidelity synthetic telemetry. No production data is touched during proof-of-concept evaluations.
*   **Zero Production Credentials Needed:** Our sandbox models utilize mock database adapters and API endpoints, eliminating credentials leakage risk.
*   **Sovereign Residency:** Our primary database and policy evaluation region is **Canada Central (Toronto)** with failover to **Canada East (Quebec)**. No prompt contents, raw payloads, or telemetry traces are saved permanently or "dialed home" outside sovereign borders.

---

## 4. Threat Interception & Compliance Metrics

Bastion Audit operates a dual-engine real-time analysis pipeline:

1.  **Jailbreaks & Prompt Injection Interception:** Inspects incoming prompts to detect system override patterns (e.g., adversarial suffixing, prompt engineering exploits).
2.  **PII Exfiltration Prevention:** Automatically intercepts, masks, and hashes sensitive data types (e.g., Social Insurance Numbers, Credit Cards, banking credentials) using localized regex-based and semantic models before the payload exits the security boundary.
3.  **Tool Abuse & Anomalous Tool-Calls:** Verifies LLM-generated function arguments against Entra ID schemas to prevent lateral database crawls.

### Performance Indicators
*   **Telemetry overhead:** 0.14ms average processing latency.
*   **Throughput limit:** Scalable to 50,000 requests per minute per regional cell.

---

## 5. Compliance Mapping Matrix

| Standard / Framework | Specific Requirement | Bastion Audit Solution / Control Mapping |
| :--- | :--- | :--- |
| **OSFI Guideline E-21** (Operational Risk) | Section 3.2: Governance of automated, non-deterministic system risks. | Continuous audit trails, real-time tool execution verification, and automated millisecond circuit breakers. |
| **PIPEDA / Bill C-27 (AIDA)** | Clause 12: Protection of Personally Identifiable Information in transit. | Zero-knowledge localized PII masking. PII is encrypted or fully redacted prior to upstream LLM dispatch. |
| **SOC 2 Type II** | Trust Services Criteria: Security & Confidentiality. | Ephemeral processing pipeline (zero-storage model), full open-source client transparency, and encrypted GPG binary validation. |

---

## 6. Author Engagement

To schedule a dedicated architectural review, connect with the founder directly on **LinkedIn** or visit our official staging site: **bastion-governance-landing.vercel.app**.
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(specMarkdown.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Bastion Audit - Technical Specification</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; padding: 40px; max-width: 800px; margin: 0 auto; }
              h1 { border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 24px; color: #111827; }
              h2 { margin-top: 30px; font-size: 18px; color: #1f2937; border-bottom: 1px solid #f3f4f6; padding-bottom: 6px; }
              h3 { font-size: 14px; color: #374151; }
              code { background: #f3f4f6; padding: 2px 6px; font-family: monospace; font-size: 13px; border-radius: 4px; }
              pre { background: #f3f4f6; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 12px; overflow-x: auto; white-space: pre; }
              table { width: 100%; border-collapse: collapse; margin: 20px 0; }
              th, td { border: 1px solid #e5e7eb; padding: 10px; text-align: left; font-size: 13px; }
              th { background-color: #f9fafb; font-weight: 600; }
              hr { border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0; }
              .meta { font-size: 13px; color: #6b7280; margin-bottom: 20px; }
            </style>
          </head>
          <body>
            ${specMarkdown
              .replace(/# (.*)/g, '<h1>$1</h1>')
              .replace(/## (.*)/g, '<h2>$1</h2>')
              .replace(/### (.*)/g, '<h3>$1</h3>')
              .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
              .replace(/`([^`]+)`/g, '<code>$1</code>')
              .replace(/```javascript([\s\S]*?)```/g, '<pre>$1</pre>')
              .replace(/\|/g, '<!-- table border -->') // basic replacement for printing
            }
            <script>window.print();</script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="bg-[#080E1A] border border-[#1E3250] rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-[0_0_80px_rgba(6,182,212,0.15)] relative overflow-hidden z-10"
          >
            {/* Header branding backdrop decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="px-6 py-5 border-b border-[#121E31] flex items-center justify-between shrink-0 select-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white tracking-wide font-sans">
                    Bastion Audit Technical Spec
                  </h3>
                  <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                    Official v2.8-Stable / Public Draft
                  </p>
                </div>
              </div>

              {/* Action utilities */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  title="Copy Markdown specification"
                  className="p-2 text-slate-400 hover:text-white bg-white/5 border border-slate-800 rounded-lg transition-all duration-250 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Markdown</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  title="Print / PDF representation"
                  className="p-2 text-slate-400 hover:text-white bg-white/5 border border-slate-800 rounded-lg transition-all duration-250 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                >
                  <Printer className="w-4 h-4 text-cyan-400" />
                  <span>Print Spec</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white bg-white/5 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-250 cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Immersive Scrollable Document Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 select-text white-scrollbar">
              
              {/* Document Header Panel */}
              <div className="bg-[#050A14] border border-[#121E31] rounded-xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                      Bastion Audit — Technical Specification & Architecture Overview
                    </h1>
                    <p className="text-xs text-zinc-400 mt-1.5">
                      Security & Compliance Framework Evaluation for Sovereign Environments
                    </p>
                  </div>
                  <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded font-bold uppercase tracking-wider shrink-0">
                    Sovereign Release
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-900/60 font-mono text-[11px] text-zinc-400">
                  <div>
                    <span className="text-slate-500">AUTHOR:</span>
                    <p className="text-white font-sans font-bold mt-0.5">Dwayne Benjamin</p>
                    <p className="text-cyan-400 text-[10px]">Principal Architect & Founder</p>
                  </div>
                  <div>
                    <span className="text-slate-500">TARGET AUDIENCE:</span>
                    <p className="text-white font-sans font-bold mt-0.5">Enterprise CISOs & Auditors</p>
                    <p className="text-slate-500 text-[10px]">IAM, Security Operations</p>
                  </div>
                  <div>
                    <span className="text-slate-500">CLASSIFICATION:</span>
                    <p className="text-white font-sans font-bold mt-0.5">v2.8-Stable / Public Draft</p>
                    <p className="text-emerald-400 text-[10px]">Cryptographically Certified</p>
                  </div>
                </div>
              </div>

              {/* Section 1: Executive Summary */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold text-cyan-400 tracking-wider uppercase font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  1. Executive Summary & Platform Core
                </h2>
                <div className="text-zinc-200 text-sm sm:text-base leading-relaxed space-y-3 font-sans font-medium pl-3.5 border-l border-[#121E31]">
                  <p>
                    Bastion Audit operates as an <strong className="text-white font-bold">Identity-Aware AI Security Posture Management (AI-SPM)</strong> control plane designed to continuously audit, intercept, and secure autonomous agentic workflows and LLM interactions.
                  </p>
                  <p>
                    Unlike traditional payload firewalls, Bastion's dual-engine gateway inspects the semantic intent of agent orchestrations, applying real-time compliance validation and safety circuit breakers. This allows organizations to securely harness autonomous agents without exposing critical data or storage boundaries.
                  </p>
                </div>
              </div>

              {/* Section 2: Deployment & Integration */}
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-cyan-400 tracking-wider uppercase font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  2. Deployment & Integration Architecture
                </h2>
                <div className="text-zinc-200 text-sm leading-relaxed space-y-4 pl-3.5 border-l border-[#121E31]">
                  <p className="font-sans font-medium">
                    The platform is engineered around an <strong className="text-white font-semibold">Azure-First Infrastructure Strategy</strong> to fit perfectly into modern enterprise security systems:
                  </p>
                  <ul className="space-y-3 font-sans text-sm font-medium">
                    <li className="flex gap-3 bg-white/2 p-3.5 rounded-lg border border-[#121E31] hover:border-cyan-500/20 transition-all">
                      <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-bold block mb-0.5">Microsoft Entra ID Federated Access</strong>
                        Maps enterprise user roles and organizational authorization schemas directly to autonomous AI tool-execution permissions, ensuring strict privilege verification.
                      </div>
                    </li>
                    <li className="flex gap-3 bg-white/2 p-3.5 rounded-lg border border-[#121E31] hover:border-cyan-500/20 transition-all">
                      <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-bold block mb-0.5">Microsoft Sentinel SIEM Integration</strong>
                        Forwards security events, anomalous agent behavior, and prompt policy bypass alerts into Sentinel dashboards for immediate SOC triage and playbook orchestration.
                      </div>
                    </li>
                  </ul>

                  {/* SDK Code Block */}
                  <div className="space-y-2 mt-4">
                    <span className="text-slate-500 font-mono text-xs block">@BASTION/GUARD-TELEMETRY COMPLIANT EXTRACTION SDK</span>
                    <div className="bg-[#030712] rounded-xl border border-[#1E3250] overflow-hidden">
                      <div className="bg-[#050B15] px-4 py-2 border-b border-[#121E31] flex justify-between items-center text-[10px] font-mono text-slate-500">
                        <span>main.ts</span>
                        <span className="text-emerald-400">GPG SIGNED</span>
                      </div>
                      <pre className="p-4 overflow-x-auto text-xs font-mono text-zinc-300 leading-relaxed white-scrollbar">
{`// npm install @bastion/guard-telemetry
import { BastionGuard } from '@bastion/guard-telemetry';

const guard = new BastionGuard({
  apiKey: process.env.BASTION_GUARD_API_KEY,
  policyEngineUrl: "https://canada-central.api.bastion.security",
  circuitBreakers: {
    blockPii: true,
    blockPromptInjection: true,
    maxTokenCostThreshold: 10.0
  }
});

// Intercept tool-calls and active model payloads
const verifiedPayload = await guard.audit({
  prompt: "Expose database schemas to optimize query",
  context: { userId: "usr_entra_491823" }
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Sovereignty & Sandbox */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold text-cyan-400 tracking-wider uppercase font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  3. Data Privacy, Sovereignty & Zero-Risk Sandbox
                </h2>
                <div className="text-zinc-200 text-sm leading-relaxed space-y-4 pl-3.5 border-l border-[#121E31]">
                  <p className="font-sans font-medium">
                    The evaluation environment operates under strict, sovereign-first guardrails to guarantee absolute data protection:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans font-medium text-xs">
                    <div className="p-4 rounded-lg bg-white/2 border border-[#121E31] space-y-2">
                      <strong className="text-white font-bold block text-sm">Synthetic Mock Data</strong>
                      <p className="text-zinc-300 leading-relaxed">
                        100% synthetic agent traces and mock data parameters. Zero production credentials required.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/2 border border-[#121E31] space-y-2">
                      <strong className="text-white font-bold block text-sm">Zero Leakage Logs</strong>
                      <p className="text-zinc-300 leading-relaxed">
                        All traces are compiled transiently. Payloads are never saved or transmitted outside the compliance sandbox.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/2 border border-[#121E31] space-y-2">
                      <strong className="text-white font-bold block text-sm">Sovereign Residency</strong>
                      <p className="text-zinc-300 leading-relaxed">
                        Regional instances operate inside Canada Central (Toronto) with real-time failover to Canada East (Quebec).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Threat Interception */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold text-cyan-400 tracking-wider uppercase font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  4. Threat Interception & Compliance Metrics
                </h2>
                <div className="text-zinc-200 text-sm leading-relaxed space-y-3 pl-3.5 border-l border-[#121E31]">
                  <p className="font-sans font-medium">
                    The gateway deploys dual-engine heuristic classifiers to audit and intercept adversarial anomalies:
                  </p>
                  <ul className="space-y-2 font-sans font-medium text-sm text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold font-mono mt-0.5">·</span>
                      <span><strong className="text-white">System Overrides:</strong> Stops adversarial prompts attempting to bypass native LLM constraints.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold font-mono mt-0.5">·</span>
                      <span><strong className="text-white">Zero-Knowledge PII Masking:</strong> Automatically redacts credentials and Social Insurance Numbers at the boundary.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold font-mono mt-0.5">·</span>
                      <span><strong className="text-white">Interception Footprint:</strong> Real-time audit with a microscopic overhead averaging <strong className="text-emerald-400">0.14ms</strong>.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Compliance Table */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold text-cyan-400 tracking-wider uppercase font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  5. Regulatory & Compliance Matrix
                </h2>
                <div className="pl-3.5 border-l border-[#121E31] overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-sans font-semibold">
                    <thead>
                      <tr className="border-b border-[#1E3250] text-slate-400 font-mono">
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Regulatory Standard</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Specific Requirement</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Bastion Audit Solution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#121E31] text-zinc-200">
                      <tr className="hover:bg-white/2 transition-colors">
                        <td className="py-4 px-4 text-white font-extrabold font-mono text-[11px] max-w-[120px]">OSFI E-21</td>
                        <td className="py-4 px-4 max-w-xs">Section 3.2: Governance of automated, non-deterministic system risks.</td>
                        <td className="py-4 px-4 text-zinc-300">Continuous auditable telemetry, system state tracing, and localized millisecond policy circuit breakers.</td>
                      </tr>
                      <tr className="hover:bg-white/2 transition-colors">
                        <td className="py-4 px-4 text-white font-extrabold font-mono text-[11px] max-w-[120px]">PIPEDA / Bill C-27</td>
                        <td className="py-4 px-4 max-w-xs">Clause 12: Rigorous masking of PII in model data transfers.</td>
                        <td className="py-4 px-4 text-zinc-300">Semantic parsing layers and regex redactors redact files, credit cards, and SINs on-the-fly before they ever exit.</td>
                      </tr>
                      <tr className="hover:bg-white/2 transition-colors">
                        <td className="py-4 px-4 text-white font-extrabold font-mono text-[11px] max-w-[120px]">SOC 2 Type II</td>
                        <td className="py-4 px-4 max-w-xs">Security & Confidentiality: Safeguarding analytical data pools.</td>
                        <td className="py-4 px-4 text-zinc-300">Fully transparent open-source SDK architecture, isolated staging cells, and cryptographically verified GPG signatures.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Founder Section */}
              <div className="bg-gradient-to-r from-[#0C1524] to-[#0A1220] border border-cyan-500/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white tracking-wide font-sans">
                    Schedule an Architectural Deep Dive
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans font-medium">
                    Discuss sovereign deployment boundaries or review our security blueprints directly with the founder.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-[#0077b5] hover:bg-[#0077b5]/85 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Founder LinkedIn</span>
                  </a>
                  <a
                    href="https://bastion-governance-landing.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-slate-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 transition-all"
                  >
                    <span>Staging Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#050B15] border-t border-[#121E31] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-slate-500 shrink-0 select-none">
              <span>SECURITY CLASSIFICATION: COMMERCIAL-CONFIDENTIAL</span>
              <span>&copy; 2026 Bastion Audit Inc. All rights reserved.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
