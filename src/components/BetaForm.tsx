import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, User, Building, Briefcase, HelpCircle, Shield, Database, Lock, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BetaForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    sector: 'Banking',
    role: 'Risk / Compliance',
    governancePriority: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.organization) {
      setErrorMessage('Please fill in your name, work email, and organization.');
      return;
    }

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
          brand: 'Pellorn',
          name: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          sector: formData.sector,
          role: formData.role,
          governancePriority: formData.governancePriority,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit early access request. Please try again or email us directly.');
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
      icon: Shield,
      title: 'Isolated Staging Evaluation',
      desc: 'Test Pellorn in a private, sandboxed environment without altering live production configurations.'
    },
    {
      icon: Database,
      title: 'Synthetic Payloads Only',
      desc: 'Zero risk of customer data leakage. We use high-fidelity synthetic transactions and model traces.'
    },
    {
      icon: Lock,
      title: 'Zero Production Credentials',
      desc: 'No corporate credentials or live database access required to review governance capabilities.'
    },
    {
      icon: Users,
      title: 'Direct Dialogue with Architects',
      desc: 'Engage with our core team in Toronto to explore specific OSFI E-21, PIPEDA, and model risk requirements.'
    }
  ];

  return (
    <section id="early-access" className="py-24 px-6 lg:px-12 bg-slate-950 relative border-t border-slate-900/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-12 relative z-10">
        
        {/* Layout Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Evaluation Assurance */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                Early Access & Validation
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
                Evaluate Pellorn for your organization
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                Connect with our team to discuss AI governance in your organization, review the platform specification, and participate in our early validation program.
              </p>
            </div>

            {/* List of evaluation assurances */}
            <div className="space-y-4 pt-2">
              {outcomes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-sans">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 font-mono">
              <div className="text-cyan-400 font-bold uppercase text-[10px] tracking-wider mb-1">
                Privacy Notice
              </div>
              Your information is used exclusively for correspondence regarding the Pellorn Early Access Program. We never sell or share contact details.
            </div>
          </div>

          {/* Right Column: Intake Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-b from-slate-900 via-[#07111F] to-slate-950 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(6,182,212,0.12)] text-left relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 mx-auto flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white font-sans">
                        Request Received
                      </h4>
                      <p className="text-sm text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                        Thank you for your interest in Pellorn. A member of our team will review your organization profile and reach out within 1 business day.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 text-xs font-mono text-cyan-400">
                      Advisory desk: advisory@pellorn.com
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-slate-800/80 pb-4">
                      <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                        ADVISORY INTAKE
                      </span>
                      <h4 className="text-xl font-bold text-white font-sans mt-0.5">
                        Join the Early Access Program
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 font-sans">
                        For leaders in Canadian and international financial services.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/90 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                        Corporate Work Email <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@rbc.com / institution.ca"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/90 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                        Institution / Organization <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Scotiabank, Sun Life, Wealthsimple"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/90 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Sector & Role Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                          Primary Sector
                        </label>
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="w-full px-3 py-2.5 bg-slate-950/90 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                        >
                          <option value="Banking">Banking</option>
                          <option value="Insurance">Insurance</option>
                          <option value="Wealth Management">Wealth Management</option>
                          <option value="Lending & Fintech">Lending & Fintech</option>
                          <option value="Asset Management">Asset Management</option>
                          <option value="Other">Other Regulated Sector</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                          Executive Role / Function
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-3 py-2.5 bg-slate-950/90 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                        >
                          <option value="CIO / CTO">CIO / CTO</option>
                          <option value="CISO / Tech Risk">CISO / Tech Risk</option>
                          <option value="CRO / Model Risk">CRO / Model Risk</option>
                          <option value="Chief Data Officer / AI Lead">Chief Data Officer / AI Lead</option>
                          <option value="Compliance / Legal">Compliance / Legal</option>
                          <option value="Governance Committee">Governance Committee</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Key Governance Priorities */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                        Current AI Governance Priorities / Focus Areas
                      </label>
                      <textarea
                        rows={3}
                        value={formData.governancePriority}
                        onChange={(e) => setFormData({ ...formData, governancePriority: e.target.value })}
                        placeholder="e.g. Gaining visibility into third-party AI dependencies, preparing for OSFI E-21, or establishing line-of-business model ownership..."
                        className="w-full px-3 py-2 bg-slate-950/90 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-400 hover:from-cyan-400 hover:via-sky-300 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Submit Early Access Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
