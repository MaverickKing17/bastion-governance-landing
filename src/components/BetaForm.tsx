import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, User, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BetaForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    painPoint: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.painPoint) return;

    setIsSubmitting(true);
    // Simulate high-fidelity backend submission to firestore / lambda hooks
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="beta-form" className="py-24 px-6 lg:px-12 bg-slate-950 relative border-t border-slate-900/60 flex flex-col items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-xl w-full mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
            Advisory Council
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
            Secure Your Private Beta Spot.
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed max-w-lg mx-auto">
            We are onboarding exactly four mid-market financial design partners for our upcoming compliance testing cohort. Secure a lifetime core license and directly influence the development roadmap.
          </p>
        </div>

        {/* Minimalist Enterprise Form Container */}
        <div className="bg-slate-950/60 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 relative overflow-hidden">
          
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
                {/* Field 1: Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your executive name"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500/50 focus:border-sky-500/50 placeholder:text-slate-400 transition-all duration-200"
                  />
                </div>

                {/* Field 2: Corporate Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500/50 focus:border-sky-500/50 placeholder:text-slate-400 transition-all duration-200"
                  />
                </div>

                {/* Field 3: Primary AI Security Pain Point */}
                <div className="space-y-2">
                  <label htmlFor="painPoint" className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                    Primary AI Security Pain Point
                  </label>
                  <textarea
                    id="painPoint"
                    required
                    rows={4}
                    value={formData.painPoint}
                    onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                    placeholder="Briefly describe your principal LLM safety or residency concern (e.g. prompt injection, unmasked PII, data exfiltration)"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500/50 focus:border-sky-500/50 placeholder:text-slate-400 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Full Width Azure Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Validating Credentials...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Request Sandbox Access
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="beta-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-pulse">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-mono uppercase text-emerald-400 tracking-wider">
                    Application Logged Successfully
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 font-mono leading-relaxed">
                    Token: #SEC-{Date.now().toString().slice(-6)}-PENDING
                  </p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto font-sans">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Our governance architecture committee will review your submission matching <span className="text-sky-400 font-semibold">{formData.email}</span> within 24 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Dynamic slots metadata */}
        <p className="text-center font-mono text-[10px] text-slate-500">
          AUTHORIZED CRYPTOGRAPHIC ENVELOPE SEC-904-BETA • DIRECTORY PROTECTED
        </p>
      </div>
    </section>
  );
};
