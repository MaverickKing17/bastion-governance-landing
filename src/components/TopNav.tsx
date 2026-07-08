import React from 'react';
import { Shield, Radio, Flame, User, Key, CheckCircle } from 'lucide-react';
import { Region } from '../types';
import { REGION_DETAILS } from '../mockData';

interface TopNavProps {
  region: Region;
  securityHealth: number;
  killSwitchActive: boolean;
  onTriggerKillSwitch: () => void;
  currentUserRole: string;
  onChangeUserRole: (role: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  region,
  securityHealth,
  killSwitchActive,
  onTriggerKillSwitch,
  currentUserRole,
  onChangeUserRole,
}) => {
  const currentRegionConfig = REGION_DETAILS[region];

  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-20 sticky top-0 shadow-lg shadow-slate-950/20" id="top-nav">
      {/* Brand Logo & Meta */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Shield className={`w-6 h-6 ${killSwitchActive ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`} />
          </div>
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${killSwitchActive ? 'bg-rose-400' : 'bg-emerald-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${killSwitchActive ? 'bg-rose-500' : 'bg-emerald-500'}`}></span>
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-sans font-bold text-lg text-white tracking-wider uppercase">Bastion Audit</h1>
            <span className="text-[9px] font-mono tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded uppercase">
              v2.8-STABLE
            </span>
          </div>
          <p className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
            ENTERPRISE AI GOVERNANCE GATEWAY
          </p>
        </div>
      </div>

      {/* Compliance Pill Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-mono text-slate-500 mr-1 uppercase">Active Frameworks:</span>
        {currentRegionConfig.complianceBadges.map((badge) => (
          <div
            key={badge}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 font-mono text-xs shadow-sm shadow-emerald-950/50 hover:bg-emerald-500/10 transition-all duration-200"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {badge}
          </div>
        ))}
      </div>

      {/* Actions & Metrics */}
      <div className="flex items-center flex-wrap gap-4 ml-auto md:ml-0">
        {/* Security Health */}
        <div className="bg-slate-950/50 border border-slate-800 rounded-lg px-3.5 py-1.5 flex items-center gap-2.5">
          <Radio className={`w-4 h-4 ${securityHealth < 100 ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}`} />
          <div>
            <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
              SECURITY HEALTH
            </div>
            <div className={`text-sm font-mono font-bold ${securityHealth === 100 ? 'text-emerald-400' : securityHealth >= 80 ? 'text-amber-400' : 'text-rose-400'}`}>
              {securityHealth.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Live Kill Switch Button */}
        <button
          onClick={onTriggerKillSwitch}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md ${
            killSwitchActive
              ? 'bg-rose-500 text-white hover:bg-rose-600 animate-pulse ring-4 ring-rose-500/20'
              : 'bg-rose-950/30 border border-rose-500/40 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300'
          }`}
          id="kill-switch-btn"
        >
          <Flame className="w-4 h-4" />
          {killSwitchActive ? 'SYSTEM LOCKED DOWN' : 'LIVE KILL-SWITCH'}
        </button>

        {/* Role Selector / Sign In */}
        <div className="relative flex items-center bg-slate-950/50 border border-slate-800 rounded-md p-1">
          <div className="p-1 text-slate-400">
            <User className="w-4 h-4" />
          </div>
          <select
            value={currentUserRole}
            onChange={(e) => onChangeUserRole(e.target.value)}
            className="bg-transparent text-slate-300 font-mono text-xs focus:outline-none pr-6 pl-1 cursor-pointer hover:text-white"
          >
            <option value="Auditor" className="bg-slate-850 text-slate-100">Auditor (SecOps)</option>
            <option value="CISO" className="bg-slate-850 text-slate-100">CISO Panel</option>
            <option value="Compliance" className="bg-slate-850 text-slate-100">Compliance Officer</option>
          </select>
        </div>
      </div>
    </header>
  );
};
