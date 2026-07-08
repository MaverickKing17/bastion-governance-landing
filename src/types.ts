export type RiskLevel = 'low' | 'medium' | 'high';

export type Region = 'canada' | 'us' | 'eu';

export type Timeframe = '24h' | '7d' | '30d';

export interface Agent {
  id: string;
  name: string;
  status: 'compliant' | 'warning' | 'quarantined';
  category: 'Retail Banking' | 'Wealth Management' | 'Lending' | 'Insurance';
  model: string;
  lastAudit: string;
  queryCount: number;
  threatScore: number; // 0 to 100
  maskedItems: number;
  description: string;
}

export type IncidentType = 'injection' | 'pii' | 'circuit' | 'quarantine' | 'info';

export interface Incident {
  id: string;
  timestamp: string;
  event: string;
  type: IncidentType;
  severity: 'low' | 'medium' | 'high' | 'critical';
  agentName: string;
  description: string;
}

export interface HeatMapCell {
  category: string;
  metric: 'Prompt' | 'PII' | 'Tool Use' | 'Identity' | 'Compliance';
  level: RiskLevel;
  attempts: number;
  description: string;
}
