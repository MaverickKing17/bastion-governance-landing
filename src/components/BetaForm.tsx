import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, User, ShieldAlert, FileText, Database, Shield, Zap, Users, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BetaForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    painPoint: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.painPoint) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mnjengap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          securityObjective: formData.painPoint,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit sandbox request. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(err?.message || 'An error occurred during submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const outcomes = [
    {
      icon: <Shield className="w-4.5 h-4.5 text-sky-400" />,
      title: "No Production Integration Required",
      desc: "Evaluate the complete control plane and circuit breaker gates in a fully sandboxed staging environment with zero changes to live systems."
    },
    {
      icon: <Database className="w-4.5 h-4.5 text-sky-400" />,
      title: "Synthetic Datasets Only",
      desc: "Test security policies, prompt injections, and masking overrides using 100% simulated, non-sensitive mock payloads."
    },
    {
      icon: <Zap className="w-4.5 h-4.5 text-sky-400" />,
      title: "Accelerated Security Review",
      desc: "Download pre-compiled architectural diagrams and compliance evidence logs ready to submit to your CISO or Risk Officer."
    },
    {
      icon: <Users className="w-4.5 h-4.5 text-sky-400" />,
      title: "Direct Access to the Founding Team",
      desc: "Work 1-on-1 with Bastion Audit security architects to customize telemetry ingestion configurations and specific safety profiles."
    },
    {
      icon: <Compass className="w-4.5 h-4.5 text-sky-400" />,
      title: "Influence the Security Roadmap",
      desc: "Gain priority access to future release branches, custom dashboard integrations, and upcoming regulatory templates."
    }
  ];

  return (
    <section id="beta-form" className="py-24 px-6 lg:px-12 bg-slate-950 relative border-t border-slate-900/60 flex flex-col items-center justify-center">
      {/* Background ambient lighting - enhanced for high visibility and centering the form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-12 relative z-10">
        
        {/* Layout Grid: 2-Columns on Large Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Business outcomes list */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                Enterprise Evaluation Staging
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
                Evaluate Bastion Audit Without Touching Production
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
                Review our sub-millisecond AI policy interceptors, cryptographic identity validation, and tamper-resistant audit logs with absolute data isolation.
              </p>
            </div>

            {/* List of outcome-based benefits */}
            <div className="space-y-5">
              {outcomes.map((out, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-8 h-8 rounded-lg bg-[#050C16] border border-slate-800/80 flex items-center justify-center text-sky-400 shrink-0 group-hover:border-sky-500/20 group-hover:bg-[#07111F]/50 transition-colors">
                    {out.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                      {out.title}
                    </h4>
                    <p className="text-slate-400 text-[11px] sm:text-xs mt-1 leading-relaxed">
                      {out.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-6 w-full">
            {/* High-Contrast Premium Enterprise Form Container with a vibrant Cyber Glow & Accent Line */}
            <div className="bg-[#050C16] rounded-2xl border-2 border-sky-500/20 shadow-[0_0_80px_rgba(14,165,233,0.15)] p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-sky-400/55 hover:shadow-[0_0_100px_rgba(14,165,233,0.25)] text-left">
              
              {/* Top Edge Neon Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="beta-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-slate-900/60 pb-3">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                        Initiate Sandbox Request
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Secure, sovereign evaluation of active AI model controls.
                      </p>
                    </div>

                    {/* Field 1: Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-sky-400" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Cynthia Vance"
                        className="w-full px-4 py-3.5 bg-[#081220] border border-slate-800 hover:border-slate-600 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-sky-500/50 focus:ring-4 focus:ring-sky-500/10 placeholder:text-slate-600 transition-all duration-200"
                      />
                    </div>

                    {/* Field 2: Corporate Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-sky-400" />
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="c.vance@company.com"
                        className="w-full px-4 py-3.5 bg-[#081220] border border-slate-800 hover:border-slate-600 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-sky-500/50 focus:ring-4 focus:ring-sky-500/10 placeholder:text-slate-600 transition-all duration-200"
                      />
                    </div>

                    {/* Field 3: Primary AI Security Pain Point */}
                    <div className="space-y-2">
                      <label htmlFor="painPoint" className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-sky-400" />
                        Security Objective / Compliance Framework
                      </label>
                      <textarea
                        id="painPoint"
                        required
                        rows={3}
                        value={formData.painPoint}
                        onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                        placeholder="Briefly state your core objective (e.g., prompt filtering, SOC2 telemetry, circuit-breaker deployment, or PIPEDA boundaries)"
                        className="w-full px-4 py-3 bg-[#081220] border border-slate-800 hover:border-slate-600 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-sky-500/50 focus:ring-4 focus:ring-sky-500/10 placeholder:text-slate-600 transition-all duration-200 resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-900/50 p-3 rounded-lg text-center">
                        {errorMessage}
                      </p>
                    )}

                    {/* Full Width Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-450 hover:to-cyan-450 text-white font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(0,191,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing Security Key...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Request Sandbox Invite
                        </>
                      )}
                    </button>

                    {/* CRO Privacy Assurance */}
                    <p className="text-center text-[10px] text-slate-500 font-sans leading-relaxed pt-2">
                      <strong className="text-slate-400 font-semibold">Privacy Policy:</strong> We enforce zero telemetry leakage. Your corporate email and objective metrics will strictly operate under regional compliance boundaries (SOC2/PIPEDA). No data is shared.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="beta-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-pulse">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-mono uppercase text-emerald-400 tracking-wider">
                        Validation Request Logged
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1.5 font-mono tracking-widest">
                        SYSTEM ID: #SEC-{Date.now().toString().slice(-6)}-VERIFIED
                      </p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto font-sans font-medium">
                      The telemetry architecture engine has successfully simulated your sandbox intake profile. A security engineer will contact you shortly to provide cryptographic keys.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Dynamic slots metadata */}
        <p className="text-center font-mono text-[10px] text-slate-600">
          AUTHORIZED CRYPTOGRAPHIC ENVELOPE SEC-904-BETA • DIRECTORY PROTECTED
        </p>
      </div>
    </section>
  );
};
