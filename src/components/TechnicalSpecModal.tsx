import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Printer, FileText, ExternalLink, ShieldCheck, Cpu, HardDrive, CheckCircle2, Mail, Layers, Compass, BarChart3 } from 'lucide-react';

interface TechnicalSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalSpecModal: React.FC<TechnicalSpecModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const specMarkdown = `# PELLORN — AI Governance Intelligence Specification
**Document Version:** 1.0-Draft / Market Validation
**Target Audience:** CIO, CTO, CISO, CRO, Chief Data Officers, Model Risk & Compliance Leaders
**Primary Context:** Canadian Financial Services (Toronto, Ontario, Canada) & Global Regulated Markets
**Status:** Pre-Launch Advisory Review

---

## 1. Executive Summary & Product Positioning

**Pellorn** is an enterprise AI Governance Intelligence platform being developed specifically for financial services organizations bringing AI into critical business workflows.

As financial institutions accelerate the deployment of models, autonomous agents, and vendor-embedded AI, adoption is outpacing organizational visibility. Systems operate across fragmented departments, lines of business, and infrastructure silos.

Pellorn addresses this fundamental visibility gap through the core paradigm:
**AI visibility + governance intelligence + evidence + executive oversight.**

Our core operating principle:
*See what AI is doing. Understand the risk. Strengthen governance. Demonstrate oversight.*

---

## 2. The Five-Stage Governance Framework

Pellorn structures enterprise AI oversight across five sequential, interconnected stages:

1. **SEE (Inventory & Lineage):**
   * Continuous cataloging of proprietary models, vendor APIs, robotic process automations, and autonomous agent instances.
   * Attribution of technical runtime endpoints to business functions and lines of business.

2. **UNDERSTAND (Contextual Risk Evaluation):**
   * Multi-dimensional risk scoring evaluating data sensitivity, reasoning autonomy, financial materiality, and hallucination tolerance.
   * Behavioral drift tracking and automated classification of sensitive data handling (e.g., Canadian Social Insurance Numbers, banking credentials).

3. **CONTROL (Safeguards, Boundaries & Ownership):**
   * Designation of accountable business sponsors and technical risk stewards for every active AI asset.
   * Enforcement of real-time policy guardrails, rate limits, and automated containment circuit breakers.

4. **PROVE (Immutable Evidence Trails):**
   * Capture of cryptographically signed audit logs, decision histories, and execution metadata.
   * Tamper-resistant packaging of evidence ready for internal audit review and regulatory examination.

5. **INFORM (Executive Intelligence & Board Oversight):**
   * Translation of complex runtime telemetry into structured risk dashboards for Boards, CROs, CISOs, and Model Risk Committees.
   * Unified risk metrics and trend forecasting to guide strategic resource allocation.

---

## 3. Four-Layer Conceptual Architecture

The Pellorn platform architecture is structured into four distinct, coherent operational tiers:

\`\`\`
[ LAYER 04: EXECUTIVE INTELLIGENCE ]
  Priorities · Trends · Exposure · Board Oversight
       ▲
[ LAYER 03: EVIDENCE VAULT ]
  Activity Trails · Decisions · Exceptions · Audit Evidence
       ▲
[ LAYER 02: GOVERNANCE ENGINE ]
  Risk Scoring · Controls · Ownership · Regulatory Policies
       ▲
[ LAYER 01: AI LANDSCAPE ]
  Systems · Foundation Models · Agents · Critical Workflows
\`\`\`

---

## 4. Sector-Specific Application in Financial Services

* **Banking:** Real-time visibility into models assisting customer inquiries, fraud anomaly detection algorithms, operational back-office reconciliation, and internal credit scoring engines.
* **Insurance:** Rigorous oversight of automated claims adjudication, commercial underwriting copilot tools, fraud detection, and policyholder interaction pipelines.
* **Wealth Management:** Governance of advisor assistance tools, research synthesis engines, automated portfolio rebalancing suggestions, and tax-loss harvesting models with strict fiduciary traceability.
* **Lending & Fintech:** Defensible validation of credit underwriting models, automated loan servicing communications, and partner API integrations.

---

## 5. Regulatory Alignment & Canadian Standards

Pellorn is architected with the stringent expectations of regulated financial environments at its foundation:

* **OSFI Guideline E-21 (Operational Risk & Resilience):**
  Provides automated operational logs and risk metrics to substantiate operational resilience and third-party AI dependency management.
* **PIPEDA & Canadian AI and Data Act (AIDA / Bill C-27):**
  Ensures zero unmasked transmission of Personally Identifiable Information (PII) such as Canadian Social Insurance Numbers (SIN) or proprietary account records.
* **Model Risk Management (MRM / SR 11-7 / OSFI E-23 Standards):**
  Complements internal model validation teams by providing continuous behavioral tracking, version lineage, and historical decision provenance.
* **NIST AI Risk Management Framework (AI RMF 1.0):**
  Aligns governance reporting across the core functions of Govern, Map, Measure, and Manage.

---

## 6. Data Sovereignty & Zero-Custody Architecture

* **Canadian Data Residency:** Telemetry evaluation nodes are targeted for Canadian sovereign cloud infrastructure (Canada Central / Toronto and Canada East / Quebec).
* **Zero Payload Retention:** Pellorn operates on a non-custodial telemetry model. Customer prompts, proprietary client data, and raw financial payloads are not stored permanently or used for external model training.
* **Synthetic Evaluation First:** Design partners and prospective evaluators can review Pellorn's governance capabilities in isolated sandboxes using 100% synthetic financial transactions.

---

## 7. Pre-Launch Advisory & Contact

For early access inquiries, architectural reviews, or participation in the Pellorn Advisory Validation Program:

* **Website:** https://pellorn.com
* **Advisory Contact:** advisory@pellorn.com
* **Headquarters / Primary Node:** Toronto, Ontario, Canada
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(specMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-slate-950/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25 }}
            className="bg-slate-900 border border-cyan-500/40 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide font-sans">
                    PELLORN Technical Specification & Architecture Brief
                  </h3>
                  <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                    Pre-Launch Advisory Document · v1.0
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy Markdown specification"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Spec</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer hidden sm:flex"
                  title="Print document"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-400" />
                  <span>Print</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body / Markdown View */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-slate-950 font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
              
              {/* Document Header Card */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 to-[#071324] border border-cyan-500/30 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-bold uppercase">
                    CONFIDENTIAL PRE-RELEASE DRAFT
                  </span>
                  <span className="text-slate-400">
                    Target: Canadian Financial Institutions
                  </span>
                </div>
                <h1 className="text-2xl font-black text-white tracking-tight">
                  PELLORN — AI Governance Intelligence Platform
                </h1>
                <p className="text-xs text-slate-300">
                  Architectural specification for technology, risk, compliance, and model-governance leaders.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-3 border-b border-slate-900 pb-6">
                <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  1. Executive Summary & Positioning
                </h2>
                <p>
                  Pellorn is being developed to solve the enterprise visibility gap: organizations are deploying AI across applications, workflows, vendor integrations, and business units faster than they can maintain visibility into those systems.
                </p>
                <p>
                  Rather than functioning merely as a tactical developer runtime filter, Pellorn provides organizational intelligence connecting what AI systems exist, who owns them, what risks they introduce, what controls are operating, and what evidence leadership needs.
                </p>
              </div>

              {/* Section 2: Framework */}
              <div className="space-y-4 border-b border-slate-900 pb-6">
                <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  2. The Five-Stage Framework
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {[
                    { title: 'SEE', q: 'What AI exists?' },
                    { title: 'UNDERSTAND', q: 'What risks exist?' },
                    { title: 'CONTROL', q: 'What safeguards exist?' },
                    { title: 'PROVE', q: 'Can we demonstrate it?' },
                    { title: 'INFORM', q: 'Can leadership act?' },
                  ].map((s, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                      <div className="font-mono text-xs font-bold text-cyan-400">0{i+1}. {s.title}</div>
                      <div className="text-[11px] text-slate-300">{s.q}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Architecture */}
              <div className="space-y-3 border-b border-slate-900 pb-6">
                <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  3. Four Conceptual Layers
                </h2>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="font-mono text-xs font-bold text-white">LAYER 4: EXECUTIVE INTELLIGENCE</span> — Priorities, trends, exposure, and board-level risk summaries.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="font-mono text-xs font-bold text-white">LAYER 3: EVIDENCE</span> — Activity, decisions, exception alerts, and tamper-resistant audit logs.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="font-mono text-xs font-bold text-white">LAYER 2: GOVERNANCE</span> — Risk, controls, line-of-business ownership, and policy frameworks.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="font-mono text-xs font-bold text-white">LAYER 1: AI LANDSCAPE</span> — Proprietary systems, foundation models, agents, and vendor workflows.
                  </div>
                </div>
              </div>

              {/* Section 4: Regulated Alignment */}
              <div className="space-y-3 border-b border-slate-900 pb-6">
                <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  4. Canadian Regulatory Alignment
                </h2>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>OSFI Guideline E-21:</strong> Automated mapping of operational risk, third-party technology dependencies, and governance records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>PIPEDA / AIDA:</strong> Zero unmasked storage of sensitive Canadian customer PII including Social Insurance Numbers (SIN).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Sovereign Canadian Hosting:</strong> Architectural compatibility with Canada Central (Toronto) cloud regions.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5: Advisory Contact */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Pellorn Advisory Desk</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    For questions regarding this technical brief or to schedule a founder review.
                  </p>
                </div>
                <div className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded border border-cyan-500/30">
                  advisory@pellorn.com
                </div>
              </div>

            </div>

            {/* Modal Bottom Bar */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-[11px] font-mono text-slate-500 shrink-0">
              <div>PELLORN · MARKET VALIDATION STAGE</div>
              <div>TORONTO · ONTARIO · CANADA</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
