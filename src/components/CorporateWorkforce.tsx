import React, { useState } from 'react';
import { Agent } from '../types';
import { Network, Search, ChevronDown, ChevronRight, Cpu, ShieldCheck, AlertTriangle, ShieldAlert, XCircle, Info, Settings } from 'lucide-react';

interface CorporateWorkforceProps {
  agents: Agent[];
  onAgentSelect: (agent: Agent) => void;
  selectedAgent: Agent | null;
}

export const CorporateWorkforce: React.FC<CorporateWorkforceProps> = ({
  agents,
  onAgentSelect,
  selectedAgent,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'compliant' | 'warning' | 'quarantined'>('all');
  
  // Collapsed states for the divisions
  const [collapsedDivisions, setCollapsedDivisions] = useState<Record<string, boolean>>({
    'Retail Banking': false,
    'Wealth Management': false,
    'Lending': false,
    'Insurance': false,
  });

  const toggleDivision = (division: string) => {
    setCollapsedDivisions((prev) => ({
      ...prev,
      [division]: !prev[division],
    }));
  };

  const getStatusIcon = (status: Agent['status']) => {
    switch (status) {
      case 'compliant':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />;
      case 'quarantined':
        return <XCircle className="w-4 h-4 text-rose-400" />;
    }
  };

  const getStatusClass = (status: Agent['status']) => {
    switch (status) {
      case 'compliant':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'warning':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'quarantined':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
    }
  };

  const divisions = ['Retail Banking', 'Wealth Management', 'Lending', 'Insurance'];

  // Filter agents based on search & status
  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          agent.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 shadow-lg flex flex-col justify-between h-full" id="workforce-hierarchy">
      <div className="space-y-4">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <Network className="w-4 h-4 text-emerald-400" />
              Corporate AI Workforce
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Command hierarchy tracing back to governance authorities
            </p>
          </div>

          {/* Status Tabs */}
          <div className="flex gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 self-stretch sm:self-auto">
            {(['all', 'compliant', 'warning', 'quarantined'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-2 py-1 text-[10px] font-mono rounded uppercase font-bold cursor-pointer transition-all duration-150 ${
                  statusFilter === tab
                    ? tab === 'quarantined'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      : tab === 'warning'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search agents by model, name or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 placeholder:text-slate-600 transition-all duration-200"
          />
        </div>

        {/* Visual Governance Tree Node (Office of CIO / CRO) */}
        <div className="border border-emerald-500/30 bg-emerald-950/10 rounded-lg p-3 text-center shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 p-1 opacity-10">
            <Settings className="w-16 h-16 animate-spin-slow text-emerald-400" />
          </div>
          <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
            Root Governance Node
          </span>
          <h3 className="text-xs font-bold text-slate-100 tracking-wide uppercase mt-0.5">
            Office of the CIO / CRO
          </h3>
          <p className="text-[10px] text-slate-400 font-mono mt-1">
            Sign-off: Policy SEC-904-GLOBAL • Lakera Guard Gateway v2.8
          </p>
          {/* Visual Vertical Connecting Line */}
          <div className="w-0.5 h-4 bg-emerald-500/30 mx-auto mt-3"></div>
        </div>

        {/* Division List Branches */}
        <div className="space-y-3.5 pl-2">
          {divisions.map((division) => {
            const divisionAgents = filteredAgents.filter((a) => a.category === division);
            const isCollapsed = collapsedDivisions[division];

            if (divisionAgents.length === 0 && searchTerm) return null;

            return (
              <div key={division} className="relative border-l border-slate-700/60 pl-4 space-y-2">
                {/* Visual horizontal guide connection */}
                <div className="absolute left-0 top-3 w-3 h-0.5 bg-slate-700/60"></div>

                {/* Division Header */}
                <button
                  onClick={() => toggleDivision(division)}
                  className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-400 hover:text-slate-200 select-none transition-colors duration-150 py-0.5"
                >
                  {isCollapsed ? (
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-emerald-400" />
                  )}
                  <span className="uppercase tracking-wider font-mono text-[10px]">{division}</span>
                  <span className="text-[9px] bg-slate-900 border border-slate-800 text-slate-500 px-1.5 rounded font-mono">
                    {divisionAgents.length}
                  </span>
                </button>

                {/* Agent List items */}
                {!isCollapsed && (
                  <div className="space-y-2 pt-1 pl-2">
                    {divisionAgents.length === 0 ? (
                      <p className="text-[10px] font-mono text-slate-600 italic">No agents active in division.</p>
                    ) : (
                      divisionAgents.map((agent) => {
                        const isSelected = selectedAgent?.id === agent.id;
                        return (
                          <div
                            key={agent.id}
                            onClick={() => onAgentSelect(agent)}
                            className={`flex items-center justify-between p-2.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-slate-700/40 border-emerald-500/50 shadow-md shadow-emerald-950/20'
                                : 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-700/20 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 shrink-0">
                                <Cpu className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-xs font-semibold text-slate-200 truncate">{agent.name}</h4>
                                <p className="text-[10px] font-mono text-slate-500 truncate mt-0.5">
                                  {agent.model} • Audit: {agent.lastAudit}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${getStatusClass(agent.status)}`}>
                                {agent.status}
                              </span>
                              {getStatusIcon(agent.status)}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded Agent Inspector details (when selected) */}
      {selectedAgent && (
        <div className="mt-5 pt-4 border-t border-slate-700/60 bg-slate-900/40 rounded-lg p-3.5" id="agent-workforce-inspector">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Agent Configuration Profile
            </span>
            <span className="text-[9px] font-mono text-slate-500">ID: {selectedAgent.id}</span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-mono">
            <div>
              <span className="text-slate-500 block uppercase text-[9px]">Queries Managed</span>
              <span className="text-slate-300 font-semibold">{selectedAgent.queryCount.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase text-[9px]">PII Fields Masked</span>
              <span className="text-emerald-400 font-bold">{selectedAgent.maskedItems.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase text-[9px]">Behavioral Threat Score</span>
              <span className={`font-bold ${selectedAgent.threatScore > 50 ? 'text-rose-400' : selectedAgent.threatScore > 20 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {selectedAgent.threatScore}/100
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase text-[9px]">Last Audit Status</span>
              <span className="text-slate-300 truncate block font-semibold">{selectedAgent.lastAudit}</span>
            </div>
          </div>
          <div className="mt-2.5 text-xs text-slate-400 bg-slate-950 p-2 rounded border border-slate-800/60 leading-relaxed">
            <span className="text-[9px] font-mono uppercase text-slate-500 block mb-0.5">Role Intent Description</span>
            {selectedAgent.description}
          </div>
        </div>
      )}
    </div>
  );
};
