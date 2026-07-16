import React from 'react';
import { Award, Cpu, ShieldAlert, Coins, AlertTriangle, Radio } from 'lucide-react';
import { Region } from '../types';

interface MetricCardsProps {
  region: Region;
  governanceScore: number;
  agentsUnderMgmt: number;
  regulatoryExposure: string;
  financialLossPrevented: string;
  highRiskAgents: number;
  activeInterventions: number;
  onCardClick?: (metricName: string) => void;
}

export const MetricCards: React.FC<MetricCardsProps> = ({
  region,
  governanceScore,
  agentsUnderMgmt,
  regulatoryExposure,
  financialLossPrevented,
  highRiskAgents,
  activeInterventions,
  onCardClick,
}) => {
  // Exposure currency symbol helper
  const currencySymbol = region === 'canada' ? 'CAD' : region === 'us' ? 'USD' : 'EUR';

  const metrics = [
    {
      id: 'score',
      title: 'AI Governance Score',
      value: `${governanceScore}/100`,
      icon: Award,
      statusColor: governanceScore >= 90 ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      subtext: 'Weighted health score',
      trend: '+0.4% (Last 24h)',
      trendPositive: true,
    },
    {
      id: 'agents',
      title: 'Agents Under Mgmt',
      value: agentsUnderMgmt.toString(),
      icon: Cpu,
      statusColor: 'text-slate-300 bg-slate-950/50 border-slate-800',
      subtext: 'Active microservices',
      trend: '100.0% coverage',
      trendPositive: true,
    },
    {
      id: 'exposure',
      title: 'Regulatory Exposure',
      value: `${regulatoryExposure} ${currencySymbol}`,
      icon: ShieldAlert,
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      subtext: 'Est. liability potential',
      trend: 'Low tier risk',
      trendPositive: true,
    },
    {
      id: 'saved',
      title: 'Financial Loss Prevented',
      value: `${financialLossPrevented} USD`,
      icon: Coins,
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      subtext: 'Malicious queries blocked',
      trend: 'Calculated liability saved',
      trendPositive: true,
    },
    {
      id: 'highrisk',
      title: 'High-Risk Agents',
      value: highRiskAgents.toString(),
      icon: AlertTriangle,
      statusColor: highRiskAgents > 0 ? 'text-rose-400 bg-rose-500/10 border-rose-500/20 animate-pulse' : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      subtext: 'Elevated behavioral drift',
      trend: highRiskAgents > 0 ? 'INVESTIGATION REQUIRED' : 'No anomalies flagged',
      trendPositive: highRiskAgents === 0,
    },
    {
      id: 'interventions',
      title: 'Active Interventions',
      value: activeInterventions.toString(),
      icon: Radio,
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      subtext: 'Guardrails & circuit triggers',
      trend: '+12 automated overrides',
      trendPositive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4" id="kpi-grid">
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div
            key={m.id}
            onClick={() => onCardClick?.(m.title)}
            className="group cursor-pointer bg-slate-900/60 backdrop-blur-md border border-[#1E3250]/70 rounded-xl p-4 flex flex-col justify-between hover:bg-slate-900 hover:border-cyan-500/50 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] hover:-translate-y-0.5 select-none"
          >
            {/* Top row */}
            <div className="flex justify-between items-start gap-2">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider line-clamp-1 group-hover:text-cyan-300 transition-colors">
                {m.title}
              </span>
              <div className={`p-1.5 rounded-lg border flex items-center justify-center shrink-0 shadow-sm ${m.statusColor}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Main Value */}
            <div className="mt-3 mb-1.5">
              <span className="text-2xl font-black font-mono tracking-tight text-white group-hover:text-cyan-200 transition-colors duration-200">
                {m.value}
              </span>
            </div>

            {/* Bottom trend row */}
            <div className="pt-2.5 border-t border-slate-800/80 flex flex-col gap-0.5">
              <span className="text-[9px] font-mono text-slate-400 truncate block">
                {m.subtext}
              </span>
              <span className={`text-[9px] font-mono font-bold truncate block ${
                m.id === 'highrisk' && highRiskAgents > 0
                  ? 'text-rose-400'
                  : m.trendPositive
                    ? 'text-emerald-400'
                    : 'text-slate-400'
              }`}>
                {m.trend}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
