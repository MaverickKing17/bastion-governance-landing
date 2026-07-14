import React, { useState, useEffect } from 'react';
import { INITIAL_AGENTS, INITIAL_INCIDENTS, HEAT_MAP_DATA, ThreatScenario } from '../mockData';
import { Agent, Incident, HeatMapCell, Region, Timeframe } from '../types';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { MetricCards } from './MetricCards';
import { RiskHeatMap } from './RiskHeatMap';
import { NarrativeEngine } from './NarrativeEngine';
import { CorporateWorkforce } from './CorporateWorkforce';
import { IncidentTimeline } from './IncidentTimeline';
import { KillSwitchModal } from './KillSwitchModal';
import { ShieldAlert, ShieldCheck, Info, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const DemoShowcase: React.FC = () => {
  // State management for enterprise gateway metrics
  const [region, setRegion] = useState<Region>('canada');
  const [timeframe, setTimeframe] = useState<Timeframe>('30d');
  const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
  const [incidents, setIncidents] = useState<Incident[]>(INITIAL_INCIDENTS);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(INITIAL_AGENTS.find(a => a.id === 'agent-7') || null);
  const [selectedCell, setSelectedCell] = useState<HeatMapCell | null>(HEAT_MAP_DATA.find(c => c.category === 'Insurance' && c.metric === 'Prompt') || null);
  
  // Safety indicators
  const [killSwitchActive, setKillSwitchActive] = useState<boolean>(false);
  const [isKillSwitchModalOpen, setIsKillSwitchModalOpen] = useState<boolean>(false);
  const [securityHealth, setSecurityHealth] = useState<number>(100.0);
  const [currentUserRole, setCurrentUserRole] = useState<string>('Auditor');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // In-app interactive Notification toast
  const [toastMessage, setToastMessage] = useState<{ id: string; type: 'info' | 'alert' | 'success'; title: string; message: string } | null>(null);

  const showToast = (title: string, message: string, type: 'info' | 'alert' | 'success' = 'info') => {
    const id = Date.now().toString();
    setToastMessage({ id, type, title, message });
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Handle manual emergency shutdown
  const handleTriggerKillSwitch = () => {
    if (!killSwitchActive) {
      setKillSwitchActive(true);
      setSecurityHealth(0.0);
      setIsKillSwitchModalOpen(true);
      showToast('SYSTEM LOCKDOWN ENGAGED', 'All model API access keys have been temporarily revoked.', 'alert');
      
      setAgents(prev =>
        prev.map(a => ({
          ...a,
          status: 'quarantined',
          threatScore: Math.min(100, a.threatScore + 40),
        }))
      );
    } else {
      setKillSwitchActive(false);
      setSecurityHealth(100.0);
      showToast('CONTAINMENT RESOLVED', 'Enterprise LLM gateways have been restored to default audit parameters.', 'success');
      setAgents(INITIAL_AGENTS);
    }
  };

  const handleRegionChange = (newRegion: Region) => {
    setRegion(newRegion);
    const regionNames = { canada: 'Canada Central', us: 'US East/West', eu: 'EU West' };
    showToast('DATA JURISDICTION ROTATED', `Primary residency routing updated to: ${regionNames[newRegion]}. Active framework checks updated.`, 'info');
  };

  const handleTriggerThreatScenario = (scenario: ThreatScenario) => {
    if (isSimulating) return;

    setIsSimulating(true);
    showToast('BREACH INFILTRATION DETECTED', `Simulating adversarial payload targeting: ${scenario.agentName}.`, 'alert');

    setTimeout(() => {
      const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
      const newIncident: Incident = {
        id: `inc-sim-${Date.now()}`,
        timestamp: currentTime,
        event: scenario.threatName,
        type: scenario.metricType === 'Prompt' ? 'injection' : scenario.metricType === 'PII' ? 'pii' : 'circuit',
        severity: scenario.severity === 'critical' ? 'critical' : 'high',
        agentName: scenario.agentName,
        description: scenario.details,
      };

      setIncidents(prev => [newIncident, ...prev]);

      setAgents(prev =>
        prev.map(a => {
          if (a.name === scenario.agentName) {
            return {
              ...a,
              status: scenario.severity === 'critical' ? 'quarantined' : 'warning',
              threatScore: Math.min(100, a.threatScore + 45),
              queryCount: a.queryCount + 1,
              maskedItems: scenario.metricType === 'PII' ? a.maskedItems + 14 : a.maskedItems,
            };
          }
          return a;
        })
      );

      setSecurityHealth(prev => Math.max(12.5, prev - 18.4));

      const updatedAgent = agents.find(a => a.name === scenario.agentName);
      if (updatedAgent) {
        setSelectedAgent({
          ...updatedAgent,
          status: scenario.severity === 'critical' ? 'quarantined' : 'warning',
          threatScore: Math.min(100, updatedAgent.threatScore + 45),
        });
      }

      const matchingCell = HEAT_MAP_DATA.find(
        c => c.category === (updatedAgent?.category || 'Insurance') && c.metric === scenario.metricType
      );
      if (matchingCell) {
        setSelectedCell({
          ...matchingCell,
          attempts: matchingCell.attempts + 1,
          level: 'high',
        });
      }

      showToast(
        'AUTOMATED DEFENSE TRIPPED',
        `Lakera Guard isolated ${scenario.agentName} following direct policy violation.`,
        'success'
      );
      setIsSimulating(false);
    }, 1200);
  };

  const handleResetTimeline = () => {
    setIncidents(INITIAL_INCIDENTS);
    setAgents(INITIAL_AGENTS);
    setSecurityHealth(100.0);
    setKillSwitchActive(false);
    setSelectedAgent(INITIAL_AGENTS.find(a => a.id === 'agent-7') || null);
    setSelectedCell(HEAT_MAP_DATA.find(c => c.category === 'Insurance' && c.metric === 'Prompt') || null);
    showToast('SIMULATOR STATE CONFIGURED', 'Timeline metrics, audit ledgers, and threat scores restored successfully.', 'success');
  };

  const handleRoleChange = (newRole: string) => {
    setCurrentUserRole(newRole);
    showToast(
      'SECURITY ROLE SWITCHED',
      `Command dashboard metrics filtered for the ${newRole} perspective.`,
      'info'
    );
  };

  const highRiskAgentsCount = agents.filter(a => a.status === 'warning' || a.threatScore > 40).length;
  const quarantinedCount = agents.filter(a => a.status === 'quarantined').length;
  const activeInterventionsCount = incidents.filter(i => i.severity === 'critical' || i.severity === 'high').length * 12 + 14;

  return (
    <section id="demo" className="py-20 px-6 lg:px-12 bg-[#212F45] relative border-t border-slate-900/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
            Interactive Command Deck
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
            AI Control Plane Sandbox
          </h3>
          <p className="text-slate-100 text-sm leading-relaxed font-medium">
            Take command of our high-fidelity secure gateway operations console. Trigger mock threat scenarios, rotate regional jurisdictions, or activate the emergency lockdown to preview Bastion Audit's core architecture.
          </p>
        </div>

        {/* Browser Frame Structure */}
        <div className="max-w-6xl mx-auto w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-[0_0_50px_rgba(0,120,212,0.15)] overflow-hidden flex flex-col h-[850px] relative">
          
          {/* Header Bar */}
          <div className="h-11 bg-slate-950 px-4 flex items-center justify-between border-b border-slate-800/80 shrink-0 select-none">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/20" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/20" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/20" />
            </div>

            {/* Browser Address bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-md px-3 py-1 text-[10px] font-mono text-slate-400 w-1/3 text-center truncate select-all">
              console.bastion.security/sandbox/tenant_global
            </div>

            {/* Connection badge */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SECURE TLS 1.3
            </div>
          </div>

          {/* Interactive Console Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden relative">
            
            {/* Nested Topnav inside browser frame */}
            <TopNav
              region={region}
              securityHealth={securityHealth}
              killSwitchActive={killSwitchActive}
              onTriggerKillSwitch={handleTriggerKillSwitch}
              currentUserRole={currentUserRole}
              onChangeUserRole={handleRoleChange}
            />

            {/* Sub-body including Sidebar + Main panel */}
            <div className="flex-1 flex overflow-hidden flex-col lg:flex-row relative">
              <Sidebar
                region={region}
                onRegionChange={handleRegionChange}
                activeAgentsCount={agents.length}
              />

              <div className="flex-1 p-5 overflow-y-auto space-y-6 bg-[#0B131E]">
                {/* Secondary Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div>
                    <h4 className="text-lg font-extrabold tracking-tight text-white uppercase font-sans">
                      AI Governance Command Center
                    </h4>
                    <p className="text-[10px] md:text-xs text-slate-400">
                      Real-Time Oversight of Autonomous Enterprise Agents
                    </p>
                  </div>
                  <div className="bg-slate-850/80 border border-slate-800 rounded px-2.5 py-1 flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400">ROLE_SCOPE:</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">{currentUserRole}</span>
                  </div>
                </div>

                {/* KPI Metrics */}
                <MetricCards
                  region={region}
                  governanceScore={killSwitchActive ? 12 : securityHealth < 100 ? 84 : 92}
                  agentsUnderMgmt={284}
                  regulatoryExposure={killSwitchActive ? "0.0" : securityHealth < 80 ? "8.2M" : "3.4M"}
                  financialLossPrevented="28.7M"
                  highRiskAgents={highRiskAgentsCount}
                  activeInterventions={killSwitchActive ? 284 : activeInterventionsCount}
                  onCardClick={(m) => showToast('METRIC QUERY', `Interrogating logs related to: ${m}`, 'info')}
                />

                {/* Heat Map & Executive Narrative */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2">
                    <RiskHeatMap
                      selectedCell={selectedCell}
                      onCellSelect={(cell) => setSelectedCell(cell)}
                    />
                  </div>
                  <div className="xl:col-span-1">
                    <NarrativeEngine
                      region={region}
                      timeframe={timeframe}
                      onTimeframeChange={(tf) => setTimeframe(tf)}
                      highRiskCount={highRiskAgentsCount}
                      quarantinedCount={quarantinedCount}
                    />
                  </div>
                </div>

                {/* Workforce & Incident Timeline */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2">
                    <CorporateWorkforce
                      agents={agents}
                      selectedAgent={selectedAgent}
                      onAgentSelect={(agent) => setSelectedAgent(agent)}
                    />
                  </div>
                  <div className="xl:col-span-1">
                    <IncidentTimeline
                      incidents={incidents}
                      isSimulating={isSimulating}
                      onTriggerThreatScenario={handleTriggerThreatScenario}
                      onResetTimeline={handleResetTimeline}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notification Container inside Frame */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 border border-slate-750 rounded-xl p-4 shadow-2xl shadow-slate-950/80 flex gap-3"
              >
                <div className="shrink-0 mt-0.5">
                  {toastMessage.type === 'alert' ? (
                    <ShieldAlert className="w-5 h-5 text-rose-400 animate-bounce" />
                  ) : toastMessage.type === 'success' ? (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Info className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wide">
                    {toastMessage.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 leading-normal font-mono">
                    {toastMessage.message}
                  </p>
                </div>
                <button
                  onClick={() => setToastMessage(null)}
                  className="shrink-0 p-1 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lockdown Modal */}
          <KillSwitchModal
            isOpen={isKillSwitchModalOpen}
            onClose={() => setIsKillSwitchModalOpen(false)}
          />
        </div>

        {/* Captions below the browser container as required */}
        <p className="text-center text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed font-sans mt-4">
          <strong className="text-slate-200">Bastion Audit Command Center:</strong> Real-time telemetry, automated risk heat-mapping, and instant agent containment capabilities built for highly regulated financial sectors.
        </p>
      </div>
    </section>
  );
};
