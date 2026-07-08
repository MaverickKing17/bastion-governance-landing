import React from 'react';
import { ShieldAlert, Flame, Lock, ServerCrash, RefreshCw, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

interface KillSwitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KillSwitchModal: React.FC<KillSwitchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4" id="kill-switch-modal">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-slate-900 border-2 border-rose-500 rounded-2xl max-w-lg w-full p-6 shadow-2xl shadow-rose-950/40 space-y-6 relative overflow-hidden"
      >
        {/* Animated warning scanline */}
        <div className="absolute inset-x-0 top-0 h-1 bg-rose-500/50 animate-pulse"></div>

        {/* Header Alert banner */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 animate-pulse">
            <Flame className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-xl font-black text-rose-400 uppercase tracking-widest font-mono">
              EMERGENCY LOCKDOWN ACTIVE
            </h2>
            <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
              Policy override code: #SEC-904-KILL
            </p>
          </div>
        </div>

        {/* Detailed Status Logs */}
        <div className="bg-slate-950/80 border border-rose-500/20 rounded-lg p-4 space-y-3 font-mono text-[11px] leading-relaxed select-none">
          <div className="flex items-center justify-between border-b border-slate-850 pb-2">
            <span className="text-slate-500 uppercase flex items-center gap-1.5 font-bold">
              <Terminal className="w-4 h-4 text-rose-400" />
              Containment Protocol Logs
            </span>
            <span className="text-rose-400 animate-pulse font-bold uppercase text-[9px]">Ingress Terminated</span>
          </div>

          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span>[11:39:21] INGRESS STREAM FILTER:</span>
              <span className="text-rose-400 font-bold">BLOCKED [100.0%]</span>
            </div>
            <div className="flex justify-between">
              <span>[11:39:21] ACTIVE LLM CREDENTIALS:</span>
              <span className="text-rose-400 font-bold">REVOKED [284/284]</span>
            </div>
            <div className="flex justify-between">
              <span>[11:39:22] FIREWALL TRANSIT GATE:</span>
              <span className="text-rose-400 font-bold">CONTAINED [0.0.0.0/0]</span>
            </div>
            <div className="flex justify-between">
              <span>[11:39:22] FIREBASE SYSTEM DATABASES:</span>
              <span className="text-amber-400 font-bold">READ_ONLY</span>
            </div>
            <div className="flex justify-between">
              <span>[11:39:23] LAKERA SHIELD SAFEGUARDS:</span>
              <span className="text-emerald-400 font-bold">MAX_DEFENSIVE</span>
            </div>
          </div>
        </div>

        {/* Explanation text */}
        <p className="text-xs text-slate-400 leading-relaxed text-center">
          The manual circuit breaker has been successfully engaged. All downstream AI agent pipelines, including general customer support and credit evaluators, have had their execution contexts suspended to prevent potential data exfiltration or policy breaches.
        </p>

        {/* Dynamic Controls */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* Release override button */}
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/20 active:bg-emerald-500/30 transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            De-escalate & Restore Gateways
          </button>
        </div>
      </motion.div>
    </div>
  );
};
