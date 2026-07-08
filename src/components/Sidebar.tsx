import React from 'react';
import { Region } from '../types';
import { REGION_DETAILS } from '../mockData';
import { ShieldCheck, Globe, Database, Cpu, Activity, Info } from 'lucide-react';

interface SidebarProps {
  region: Region;
  onRegionChange: (region: Region) => void;
  activeAgentsCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  region,
  onRegionChange,
  activeAgentsCount,
}) => {
  const currentRegionConfig = REGION_DETAILS[region];

  return (
    <aside className="bg-slate-950/80 border-r border-slate-800 w-full lg:w-64 flex flex-col justify-between shrink-0 font-sans select-none" id="sidebar">
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Top Section: Tenant Context */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            <span>Tenant Context</span>
            <span className="flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3.5 space-y-2 hover:border-slate-700/60 transition-all duration-200">
            <h3 className="font-semibold text-sm text-slate-200">Global Enterprise</h3>
            <div className="text-xs text-slate-400 space-y-1 font-mono">
              <div className="flex justify-between">
                <span>Tenant ID:</span>
                <span className="text-emerald-400">#TEN-9042</span>
              </div>
              <div className="flex justify-between">
                <span>Active Agents:</span>
                <span className="text-slate-300 font-bold">{activeAgentsCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-emerald-400 font-semibold uppercase">Secured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Data Residency */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            Data Residency Config
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3.5 space-y-4">
            {/* Region Toggles */}
            <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded border border-slate-800">
              {(['canada', 'us', 'eu'] as Region[]).map((r) => (
                <button
                  key={r}
                  onClick={() => onRegionChange(r)}
                  className={`py-1 text-[10px] font-mono uppercase rounded transition-all duration-200 ${
                    region === r
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/40'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Residency Information */}
            <div className="space-y-2.5 font-mono text-[11px]">
              <div>
                <span className="text-slate-500 block uppercase text-[9px] tracking-wider">RESIDENCY AUDIT</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {currentRegionConfig.status}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block uppercase text-[9px] tracking-wider">Primary Region</span>
                <span className="text-slate-300 block font-semibold truncate">
                  {currentRegionConfig.primary}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block uppercase text-[9px] tracking-wider">Failover Zone</span>
                <span className="text-slate-400 block truncate">
                  {currentRegionConfig.failover}
                </span>
              </div>

              <div className="flex justify-between pt-1 border-t border-slate-800/60">
                <span className="text-slate-500 uppercase text-[9px]">API Latency</span>
                <span className="text-slate-400 font-semibold">{currentRegionConfig.latency}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: System Status */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            System Status
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3.5 space-y-3">
            {/* Status Item 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-slate-300">Lakera Guard</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded uppercase">
                ACTIVE
              </span>
            </div>

            {/* Status Item 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-slate-300">Firestore DB</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded uppercase">
                STABLE
              </span>
            </div>

            {/* Status Item 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-slate-300">Agent Monitor</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded uppercase">
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-slate-500 text-[10px] font-mono">
        <span>Bastion Core v2.8</span>
        <span className="text-[9px] bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded">
          UTC TIME
        </span>
      </div>
    </aside>
  );
};
