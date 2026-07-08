import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DemoShowcase } from './components/DemoShowcase';
import { Architecture } from './components/Architecture';
import { OpenSource } from './components/OpenSource';
import { BetaForm } from './components/BetaForm';
import { Shield, ShieldCheck, Mail, Heart } from 'lucide-react';

export default function App() {
  // Smooth scroll controller for navigating the Single-Page landing layout
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-sky-500/30 selection:text-white overflow-x-hidden">
      
      {/* SECTION 1 — Navigation Header */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Single-Page Content Frame */}
      <div className="flex flex-col">
        
        {/* SECTION 2 — Hero Component */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* SECTION 3 — Interactive Product Demonstration (The sandbox dashboard) */}
        <DemoShowcase />

        {/* SECTION 4 — Enterprise Architecture & Governance (Dual Engine schematic) */}
        <Architecture />

        {/* SECTION 5 — Open Source Trust Layer (Terminal installation logs) */}
        <OpenSource />

        {/* SECTION 6 — Private Beta Advisory Council (Conversion signup) */}
        <BetaForm />

      </div>

      {/* Corporate B2B SaaS Footer */}
      <footer className="bg-slate-950 border-t border-slate-900/80 py-16 px-6 lg:px-12 select-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-400">
          
          {/* Brand & Mission column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Shield className="w-4.5 h-4.5 text-sky-400" />
              </div>
              <div>
                <span className="text-sm font-extrabold tracking-widest text-white uppercase">
                  Bastion Audit
                </span>
                <p className="text-[8px] font-mono text-sky-400 uppercase tracking-widest">
                  AI Control Plane
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 font-sans">
              Cryptographically signed AI governance and real-time threat abatement layers built for high-trust financial, health, and enterprise SaaS institutions.
            </p>
          </div>

          {/* Product links */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Product</h5>
            <ul className="space-y-2">
              <li><button onClick={() => handleScrollToSection('demo')} className="hover:text-white transition-colors cursor-pointer">Live Sandbox</button></li>
              <li><button onClick={() => handleScrollToSection('architecture')} className="hover:text-white transition-colors cursor-pointer">Dual-Engine Gateway</button></li>
              <li><button onClick={() => handleScrollToSection('open-source')} className="hover:text-white transition-colors cursor-pointer">Bastion Guard Agent</button></li>
              <li><span className="text-slate-600">Enterprise Registry (SOON)</span></li>
            </ul>
          </div>

          {/* Regulatory & Trust */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Compliance Frameworks</h5>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>OSFI E-21 (Canadian Banking)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>PIPEDA / AIDA Privacy standards</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>EU AI Act (Ethical Guardrails)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>NIST-AI Governance Framework</span>
              </li>
            </ul>
          </div>

          {/* Contact and Security */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Contact & Advisory</h5>
            <ul className="space-y-2 text-slate-500">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>secops@bastion.security</span>
              </li>
              <li>Emergency code response queue:</li>
              <li className="text-[10px] bg-slate-900 border border-slate-850 px-2.5 py-1 text-slate-400 rounded">
                #SEC-904-GLOBAL-EMERGENCY
              </li>
            </ul>
          </div>

        </div>

        {/* Fine bottom bar footer */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] font-mono">
          <div>
            &copy; 2026 Bastion Audit Inc. All rights reserved. Registered SOC2-Type II Authority.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed for highly regulated sectors with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
        </div>
      </footer>

    </div>
  );
}
