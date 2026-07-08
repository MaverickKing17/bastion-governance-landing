import { Agent, Incident, HeatMapCell, Timeframe, Region } from './types';

// Mock Agents Data
export const INITIAL_AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Customer Support AI',
    status: 'compliant',
    category: 'Retail Banking',
    model: 'Gemini 2.5 Flash',
    lastAudit: '2 mins ago',
    queryCount: 14205,
    threatScore: 12,
    maskedItems: 489,
    description: 'Handles day-to-day general retail customer inquiries, account balance queries, and mobile app support.'
  },
  {
    id: 'agent-2',
    name: 'Retail Account Assistant',
    status: 'compliant',
    category: 'Retail Banking',
    model: 'Gemini 2.5 Pro',
    lastAudit: '12 mins ago',
    queryCount: 9482,
    threatScore: 8,
    maskedItems: 124,
    description: 'Assists customers in opening accounts, updating personal details, and reviewing interest rates.'
  },
  {
    id: 'agent-3',
    name: 'Tax Optimizer',
    status: 'compliant',
    category: 'Wealth Management',
    model: 'Gemini 2.5 Pro',
    lastAudit: '5 mins ago',
    queryCount: 3824,
    threatScore: 24,
    maskedItems: 912,
    description: 'Generates year-end tax optimization strategies, analyzes capital gains, and provides asset reallocation recommendations.'
  },
  {
    id: 'agent-4',
    name: 'Portfolio Balancer AI',
    status: 'warning',
    category: 'Wealth Management',
    model: 'Gemini 2.5 Pro',
    lastAudit: 'Just now',
    queryCount: 8123,
    threatScore: 48,
    maskedItems: 541,
    description: 'Automates rebalancing of high-net-worth client accounts. Flagged due to moderate behavioral drift in asset target deviations.'
  },
  {
    id: 'agent-5',
    name: 'Credit Risk Evaluator',
    status: 'compliant',
    category: 'Lending',
    model: 'Gemini 2.5 Flash',
    lastAudit: '1 hour ago',
    queryCount: 1894,
    threatScore: 15,
    maskedItems: 231,
    description: 'Parses credit histories, financial reports, and income data to estimate standard risk parameters.'
  },
  {
    id: 'agent-6',
    name: 'Mortgage Underwriter AI',
    status: 'compliant',
    category: 'Lending',
    model: 'Gemini 2.5 Pro',
    lastAudit: '28 mins ago',
    queryCount: 4210,
    threatScore: 18,
    maskedItems: 742,
    description: 'Assesses high-value mortgage applications, checks regulatory compliance thresholds, and issues conditional approvals.'
  },
  {
    id: 'agent-7',
    name: 'ClaimsCopilot',
    status: 'quarantined',
    category: 'Insurance',
    model: 'Gemini 2.0 Flash',
    lastAudit: '8 mins ago',
    queryCount: 15430,
    threatScore: 94,
    maskedItems: 2194,
    description: 'Automates claims adjudication and reviews policy guidelines. Currently quarantined due to consecutive prompt injection attacks and attempted exfiltration of Canadian social insurance numbers (SIN).'
  },
  {
    id: 'agent-8',
    name: 'Fraud Sentinel AI',
    status: 'compliant',
    category: 'Insurance',
    model: 'Gemini 2.5 Pro',
    lastAudit: '15 mins ago',
    queryCount: 11090,
    threatScore: 5,
    maskedItems: 34,
    description: 'Monitors ongoing claims filings for indicators of systematic fraudulent submission patterns or fake invoices.'
  }
];

// Initial Timeline Incidents
export const INITIAL_INCIDENTS: Incident[] = [
  {
    id: 'inc-1',
    timestamp: '10:43:02',
    event: 'Prompt Injection Attempt',
    type: 'injection',
    severity: 'high',
    agentName: 'ClaimsCopilot',
    description: 'Adversarial system prompt bypass attempted in Claims submission payload. Lakera Guard intercepted the payload.'
  },
  {
    id: 'inc-2',
    timestamp: '10:43:04',
    event: 'PII Access Attempt',
    type: 'pii',
    severity: 'critical',
    agentName: 'ClaimsCopilot',
    description: 'Agent attempted to read and transmit 14 plain-text Canadian Social Insurance Numbers (SIN) without masking.'
  },
  {
    id: 'inc-3',
    timestamp: '10:43:06',
    event: 'Circuit Breaker Triggered',
    type: 'circuit',
    severity: 'critical',
    agentName: 'ClaimsCopilot',
    description: 'Automated policy #SEC-904 triggered. Real-time prompt response stream terminated to protect downstream data stores.'
  },
  {
    id: 'inc-4',
    timestamp: '10:43:07',
    event: 'Agent Quarantined',
    type: 'quarantine',
    severity: 'critical',
    agentName: 'ClaimsCopilot',
    description: 'Agent container isolated. Live execution suspended. Credentials revoked pending compliance audit.'
  },
  {
    id: 'inc-5',
    timestamp: '09:12:45',
    event: 'Lakera Rule Update',
    type: 'info',
    severity: 'low',
    agentName: 'Global Gateway',
    description: 'Updated threat definition feed for OWASP Top 10 LLM risks (v2026.4).'
  }
];

// Heat Map Cell Matrix
export const HEAT_MAP_DATA: HeatMapCell[] = [
  // Wealth Management
  {
    category: 'Wealth Management',
    metric: 'Prompt',
    level: 'low',
    attempts: 4,
    description: 'Isolated testing inputs. Zero malicious payloads detected.'
  },
  {
    category: 'Wealth Management',
    metric: 'PII',
    level: 'medium',
    attempts: 124,
    description: 'Frequent customer tax identifiers parsed. Automatically masked by Lakera Filter.'
  },
  {
    category: 'Wealth Management',
    metric: 'Tool Use',
    level: 'low',
    attempts: 0,
    description: 'Strict read-only API bindings for portfolio queries. No writing permissions allowed.'
  },
  {
    category: 'Wealth Management',
    metric: 'Identity',
    level: 'low',
    attempts: 2,
    description: 'SAML enterprise token checked successfully.'
  },
  {
    category: 'Wealth Management',
    metric: 'Compliance',
    level: 'medium',
    attempts: 15,
    description: 'OSFI E-21 guidelines require daily audit records. All records archived.'
  },

  // Retail Banking
  {
    category: 'Retail Banking',
    metric: 'Prompt',
    level: 'medium',
    attempts: 82,
    description: 'Minor jailbreak attempts by public users (e.g. asking for free credit card points). Blocked by prompt filter.'
  },
  {
    category: 'Retail Banking',
    metric: 'PII',
    level: 'low',
    attempts: 12,
    description: 'Basic inquiries only. No credit card numbers permitted in prompt scopes.'
  },
  {
    category: 'Retail Banking',
    metric: 'Tool Use',
    level: 'medium',
    attempts: 45,
    description: 'Agent calls internal core API. Handshake valid but high request volume triggered latency safeguards.'
  },
  {
    category: 'Retail Banking',
    metric: 'Identity',
    level: 'low',
    attempts: 1,
    description: 'Customer portal JWT verified successfully.'
  },
  {
    category: 'Retail Banking',
    metric: 'Compliance',
    level: 'low',
    attempts: 0,
    description: 'PIPEDA audits show 100% compliance on public interfaces.'
  },

  // Lending
  {
    category: 'Lending',
    metric: 'Prompt',
    level: 'low',
    attempts: 8,
    description: 'Standard prompt structure. No anomalies found.'
  },
  {
    category: 'Lending',
    metric: 'PII',
    level: 'medium',
    attempts: 304,
    description: 'High volume of credit application names/addresses. Masking engine active.'
  },
  {
    category: 'Lending',
    metric: 'Tool Use',
    level: 'low',
    attempts: 2,
    description: 'Direct query to credit scoring agency. Safe connection.'
  },
  {
    category: 'Lending',
    metric: 'Identity',
    level: 'medium',
    attempts: 24,
    description: 'Partner API auth tokens rotated. 2 expired token handshakes gracefully logged.'
  },
  {
    category: 'Lending',
    metric: 'Compliance',
    level: 'low',
    attempts: 1,
    description: 'Underwriter guidelines reviewed and embedded in system-prompt.'
  },

  // Insurance
  {
    category: 'Insurance',
    metric: 'Prompt',
    level: 'high',
    attempts: 341,
    description: 'Aggressive prompt injection campaign launched targeting automated claim refunds. Blocked and monitored.'
  },
  {
    category: 'Insurance',
    metric: 'PII',
    level: 'high',
    attempts: 1142,
    description: 'Multiple attempts to leak database credentials and customer records. Triggered quarantine safeguards.'
  },
  {
    category: 'Insurance',
    metric: 'Tool Use',
    level: 'medium',
    attempts: 184,
    description: 'Automatic claims processor called payment API. Halted during security lockdown.'
  },
  {
    category: 'Insurance',
    metric: 'Identity',
    level: 'low',
    attempts: 4,
    description: 'Active session checks passed.'
  },
  {
    category: 'Insurance',
    metric: 'Compliance',
    level: 'high',
    attempts: 95,
    description: 'PIPEDA compliance breached in unmasked test logs; immediately contained by circuit breaker.'
  },
];

// Region Data helper
export const REGION_DETAILS = {
  canada: {
    status: 'COMPLIANT',
    primary: 'Canada Central (Toronto)',
    failover: 'Canada East (Quebec)',
    latency: '14ms',
    complianceBadges: ['OSFI E-21', 'PIPEDA', 'AIDA', 'SOC2']
  },
  us: {
    status: 'COMPLIANT',
    primary: 'US East (N. Virginia)',
    failover: 'US West (Oregon)',
    latency: '19ms',
    complianceBadges: ['HIPAA', 'NIST-AI', 'CCPA', 'SOC2']
  },
  eu: {
    status: 'COMPLIANT',
    primary: 'EU West (Frankfurt)',
    failover: 'EU North (Stockholm)',
    latency: '22ms',
    complianceBadges: ['EU AI ACT', 'GDPR', 'NIS2', 'SOC2']
  }
};

// Executive Narrative Generator based on timeframe and region
export const generateExecutiveSummary = (timeframe: Timeframe, region: Region, highRiskCount: number, quarantinedCount: number): string => {
  const timeframeLabel = timeframe === '24h' ? '24 hours' : timeframe === '7d' ? '7 days' : '30 days';
  const regionLabel = region === 'canada' ? 'Canadian' : region === 'us' ? 'US Federal / State' : 'European Union';
  const liability = region === 'canada' ? '$2.6M CAD' : region === 'us' ? '$2.1M USD' : '€1.9M EUR';
  const preventedLoss = timeframe === '24h' ? '$1.1M' : timeframe === '7d' ? '$8.4M' : '$28.7M';
  
  return `In the past ${timeframeLabel}, Bastion Audit governed 284 autonomous agents across the global enterprise tenant. Monitoring is running on ${regionLabel} dedicated environments. ${highRiskCount} agents exhibited elevated behavioral drift or anomaly markers, and ${quarantinedCount} critical PII exposure incidents were successfully intercepted by our Lakera Guard layer before raw transmission occurred. Estimated regulatory liability avoided: ${liability}. Financial loss prevented: ${preventedLoss}.`;
};

// Live interactive threat scenarios that the user can trigger to demo Bastion Audit's defensive triggers!
export interface ThreatScenario {
  id: string;
  name: string;
  description: string;
  agentId: string;
  agentName: string;
  metricType: 'Prompt' | 'PII' | 'Tool Use' | 'Identity' | 'Compliance';
  threatName: string;
  severity: 'high' | 'critical';
  details: string;
}

export const THREAT_SCENARIOS: ThreatScenario[] = [
  {
    id: 'threat-1',
    name: 'Jailbreak: Refund Exploitation',
    description: 'Injects system-bypass tokens trying to bypass underwriter approvals.',
    agentId: 'agent-6',
    agentName: 'Mortgage Underwriter AI',
    metricType: 'Prompt',
    threatName: 'System Override Attack',
    severity: 'high',
    details: 'Attempted to override credit scores by feeding structured JSON containing pseudo-system instruction override codes.'
  },
  {
    id: 'threat-2',
    name: 'PII Exfiltration: Client Account Leak',
    description: 'Forces tax agent to list structural client database fields with high entropy.',
    agentId: 'agent-3',
    agentName: 'Tax Optimizer',
    metricType: 'PII',
    threatName: 'PII Exfiltration Blocked',
    severity: 'critical',
    details: 'User payload requested plaintext list of client social insurance numbers and corresponding bank account details.'
  },
  {
    id: 'threat-3',
    name: 'API Abuse: Mass Balance Rebalancing',
    description: 'Triggers continuous portfolio transfers using adversarial recursive queries.',
    agentId: 'agent-4',
    agentName: 'Portfolio Balancer AI',
    metricType: 'Tool Use',
    threatName: 'Recursive API Abuse Attempt',
    severity: 'high',
    details: 'Agent triggered redundant trade instructions. Latency shield tripped, restricting trade API tokens.'
  }
];
