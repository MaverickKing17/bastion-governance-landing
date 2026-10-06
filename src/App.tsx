import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PellornApproach } from './components/PellornApproach';
import { FinancialServices } from './components/FinancialServices';
import { GovernanceIntelligence } from './components/GovernanceIntelligence';
import { ExecutiveQuestions } from './components/ExecutiveQuestions';
import { DemoShowcase } from './components/DemoShowcase';
import { Architecture } from './components/Architecture';
import { RegulatedEnvironment } from './components/RegulatedEnvironment';
import { EarlyAccessProgram } from './components/EarlyAccessProgram';
import { BetaForm } from './components/BetaForm';
import { TechnicalSpecModal } from './components/TechnicalSpecModal';
import { Shield, Mail, FileText, ArrowUp, Compass } from 'lucide-react';

export default function App() {
  const [isSpecOpen, setIsSpecOpen] = useState(false);

  // Smooth scroll controller for navigating the Single-Page landing layout
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      
      {/* SECTION 1 — Navigation Header */}
      <Navbar onScrollToSection={handleScrollToSection} onOpenSpec={() => setIsSpecOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex flex-col">
        
        {/* SECTION 2 — Hero */}
        <Hero onScrollToSection={handleScrollToSection} onOpenSpec={() => setIsSpecOpen(true)} />

        {/* SECTION 3 — Problem: AI is moving faster than organizational visibility */}
        <ProblemSection />

        {/* SECTION 4 — The Pellorn Approach: Five-Step Framework (SEE, UNDERSTAND, CONTROL, PROVE, INFORM) */}
        <PellornApproach />

        {/* SECTION 5 — Financial Services: Banking, Insurance, Wealth Management, Lending & Fintech */}
        <FinancialServices />

        {/* SECTION 6 — Governance Intelligence: From AI inventory to AI intelligence */}
        <GovernanceIntelligence />

        {/* SECTION 7 — Executive Section: The questions leadership needs answered */}
        <ExecutiveQuestions />

        {/* SECTION 8 — Product Visual & Console: One intelligence layer for the AI landscape */}
        <DemoShowcase />

        {/* SECTION 9 — Conceptual 4-Layer Architecture */}
        <Architecture />

        {/* SECTION 10 — Regulated Environments (OSFI E-21, PIPEDA, MRM, NIST AI RMF) */}
        <RegulatedEnvironment />

        {/* SECTION 11 — Early Access & Advisory Program */}
        <EarlyAccessProgram />

        {/* SECTION 12 — Early Access Intake Request Form */}
        <BetaForm />

      </main>

      {/* Enterprise Financial Services SaaS Footer */}
      <footer className="bg-[#02050D] border-t border-slate-900 py-16 px-6 lg:px-12 select-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-400">
          
          {/* Brand & Mission column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-sm font-extrabold tracking-[0.2em] text-white uppercase">
                  PELLORN
                </span>
                <p className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">
                  AI Governance Intelligence
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 font-sans">
              See what AI is doing. Understand the risk. Strengthen governance. Demonstrate oversight.
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Toronto · Ontario · Canada
            </p>
          </div>

          {/* Navigation links */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Platform</h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => handleScrollToSection('problem')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  The Visibility Gap
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('approach')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Five-Stage Framework
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('financial-services')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Financial Sectors
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('governance-intelligence')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Intelligence Model
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('architecture')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Four-Layer Architecture
                </button>
              </li>
              <li>
                <button onClick={() => setIsSpecOpen(true)} className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Technical Spec Sheet
                </button>
              </li>
            </ul>
          </div>

          {/* Regulatory Context */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Regulatory Alignment</h5>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>OSFI Guideline E-21</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>PIPEDA & AIDA Standards</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Model Risk Management (MRM)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>NIST AI Risk Management Framework</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Sovereign Canadian Cloud Hosting</span>
              </li>
            </ul>
          </div>

          {/* Advisory & Early Access */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Advisory Validation</h5>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Designed for senior technology, risk, governance, and compliance leaders within Canadian financial institutions.
            </p>
            <div className="pt-1">
              <button
                onClick={() => handleScrollToSection('early-access')}
                className="px-3.5 py-2 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider hover:bg-cyan-500/25 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5" />
                Request Early Access
              </button>
            </div>
            <div className="pt-2 text-[11px] text-slate-500">
              Contact: advisory@pellorn.com
            </div>
          </div>

        </div>

        {/* Fine bottom bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-mono">
          <div>
            &copy; {new Date().getFullYear()} PELLORN. All rights reserved. Pre-launch market validation platform.
          </div>
          <div className="flex items-center gap-4">
            <span>Built for financial services organizations bringing AI into critical workflows.</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>

      {/* Embedded High-Quality Technical Specification Overlay Modal */}
      <TechnicalSpecModal isOpen={isSpecOpen} onClose={() => setIsSpecOpen(false)} />

    </div>
  );
}
