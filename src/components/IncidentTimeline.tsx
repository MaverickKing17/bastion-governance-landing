import React from 'react';
import { Incident, IncidentType } from '../types';
import { THREAT_SCENARIOS, ThreatScenario } from '../mockData';
import { AlertCircle, ShieldAlert, XCircle, ShieldCheck, Play, HelpCircle, Activity, Info, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface IncidentTimelineProps {
  incidents: Incident[];
  onTriggerThreatScenario: (scenario: ThreatScenario) => void;
  onResetTimeline: () => void;
  isSimulating: boolean;
}

export const IncidentTimeline: React.FC<IncidentTimelineProps> = ({
  incidents,
  onTriggerThreatScenario,
  onResetTimeline,
  isSimulating,
}) => {

  const getEventIcon = (type: IncidentType, severity: string) => {
    switch (type) {
      case 'injection':
        return (
          <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
        );
      case 'pii':
        return (
          <div className="w-7 h-7 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 animate-pulse">
            <AlertCircle className="w-4 h-4" />
          </div>
        );
      case 'circuit':
        return (
          <div className="w-7 h-7 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 shrink-0">
            <Activity className="w-4 h-4" />
          </div>
        );
      case 'quarantine':
        return (
          <div className="w-7 h-7 rounded-full bg-rose-950/40 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
            <XCircle className="w-4 h-4" />
          </div>
        );
      case 'info':
      default:
        return (
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
        );
    }
  };

  const getSeverityBadgeClass = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-rose-950/40 text-rose-400 border-rose-500/30';
      case 'high':
        return 'bg-amber-950/40 text-amber-400 border-amber-500/30';
      case 'medium':
        return 'bg-slate-900 text-slate-400 border-slate-700/60';
      case 'low':
      default:
        return 'bg-emerald-950/20 text-emerald-400 border-emerald-500/20';
    }
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 shadow-lg flex flex-col justify-between h-full" id="incident-timeline">
      <div>
        {/* Header Title */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              Agent Incident Timeline
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Cryptographically signed ledger of automated agent interactions
            </p>
          </div>
        </div>

        {/* Live Threat Simulator Panel */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3.5 mb-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5" />
              SecOps Threat Simulator
            </span>
            <button
              onClick={onResetTimeline}
              disabled={isSimulating}
              className="text-[9px] font-mono text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors uppercase disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <RefreshCw className="w-2.5 h-2.5" /> Reset Demo
            </button>
          </div>
          <p className="text-[10px] text-slate-400 font-sans leading-normal">
            Launch interactive breach scenarios to demo how Bastion Audit's automated circuit breakers isolate compromised LLMs in real-time.
          </p>

          <div className="grid grid-cols-1 gap-2">
            {THREAT_SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => onTriggerThreatScenario(scenario)}
                disabled={isSimulating}
                className="w-full text-left p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-xs transition-all flex justify-between items-center group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <div>
                  <div className="font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
                    {scenario.name}
                  </div>
                  <div className="text-[9px] text-slate-500 font-mono mt-0.5 truncate max-w-[200px]">
                    Target: {scenario.agentName} ({scenario.metricType})
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className={`text-[8px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    scenario.severity === 'critical' ? 'bg-rose-500/15 text-rose-400' : 'bg-amber-500/15 text-amber-400'
                  }`}>
                    {scenario.severity}
                  </span>
                  <Play className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Incidents timeline scroll container */}
        <div className="relative pl-6 space-y-4 max-h-[350px] overflow-y-auto pr-1">
          {/* Vertical connecting bar */}
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-700/60"></div>

          <AnimatePresence initial={false}>
            {incidents.map((incident, idx) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="relative flex gap-3 group"
              >
                {/* Timestamp indicator */}
                <div className="absolute -left-[54px] top-1 text-[9px] font-mono text-slate-500 bg-slate-900 border border-slate-800/80 rounded px-1 group-hover:text-slate-300 transition-colors">
                  {incident.timestamp}
                </div>

                {/* Status dot / icon wrapper */}
                <div className="absolute -left-[37px] top-0.5 z-10 bg-slate-900 rounded-full p-0.5">
                  {getEventIcon(incident.type, incident.severity)}
                </div>

                {/* Event text card */}
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-3 w-full space-y-1.5 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                      {incident.event}
                    </h3>
                    <span className={`text-[8px] font-mono uppercase px-1.5 py-0.5 rounded border font-semibold ${getSeverityBadgeClass(incident.severity)}`}>
                      {incident.severity}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Agent: <span className="text-slate-300 font-semibold">{incident.agentName}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal font-sans">
                    {incident.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Audit Guarantee Footer */}
      <div className="mt-4 pt-3.5 border-t border-slate-700/40 flex items-center justify-between text-[9px] font-mono text-slate-500">
        <span className="flex items-center gap-1 uppercase">
          <Info className="w-3.5 h-3.5 text-slate-500" />
          Secured Audit Log
        </span>
        <span>SHA-256 Validated</span>
      </div>
    </div>
  );
};
