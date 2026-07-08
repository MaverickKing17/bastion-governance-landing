import React, { useState } from 'react';
import { HeatMapCell, RiskLevel } from '../types';
import { HEAT_MAP_DATA } from '../mockData';
import { Eye, ShieldAlert, Key, Terminal, HelpCircle } from 'lucide-react';

interface RiskHeatMapProps {
  onCellSelect?: (cell: HeatMapCell) => void;
  selectedCell: HeatMapCell | null;
}

export const RiskHeatMap: React.FC<RiskHeatMapProps> = ({
  onCellSelect,
  selectedCell,
}) => {
  const [hoveredCell, setHoveredCell] = useState<HeatMapCell | null>(null);

  const categories = ['Wealth Management', 'Retail Banking', 'Lending', 'Insurance'];
  const metrics: Array<'Prompt' | 'PII' | 'Tool Use' | 'Identity' | 'Compliance'> = [
    'Prompt',
    'PII',
    'Tool Use',
    'Identity',
    'Compliance',
  ];

  // Helper to get Cell from Grid parameters
  const getCell = (category: string, metric: typeof metrics[number]): HeatMapCell => {
    const found = HEAT_MAP_DATA.find((c) => c.category === category && c.metric === metric);
    if (found) return found;
    return {
      category,
      metric,
      level: 'low',
      attempts: 0,
      description: 'System running within normal thresholds.',
    };
  };

  // Helper to map risk levels to Tailwind classes
  const getCellStyles = (level: RiskLevel, isSelected: boolean) => {
    switch (level) {
      case 'high':
        return {
          bg: isSelected
            ? 'bg-rose-500/35 border-rose-400 ring-2 ring-rose-400'
            : 'bg-rose-500/20 border-rose-500/30 hover:bg-rose-500/30 hover:border-rose-400',
          text: 'text-rose-400',
          badge: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
          indicator: 'bg-rose-400',
        };
      case 'medium':
        return {
          bg: isSelected
            ? 'bg-amber-500/35 border-amber-400 ring-2 ring-amber-400'
            : 'bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30 hover:border-amber-400',
          text: 'text-amber-400',
          badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
          indicator: 'bg-amber-400',
        };
      case 'low':
      default:
        return {
          bg: isSelected
            ? 'bg-emerald-500/35 border-emerald-400 ring-2 ring-emerald-400'
            : 'bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/25 hover:border-emerald-400',
          text: 'text-emerald-400',
          badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
          indicator: 'bg-emerald-400',
        };
    }
  };

  const handleCellClick = (cell: HeatMapCell) => {
    if (onCellSelect) {
      onCellSelect(cell);
    }
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 shadow-lg flex flex-col justify-between h-full" id="heat-map">
      <div>
        {/* Header Title */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              AI Risk Heat Map
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Cross-examination of LLM threat vectors and internal business units
            </p>
          </div>
          <div className="flex gap-2 text-[10px] font-mono">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-500/40"></span> Low</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-500/40"></span> Med</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-rose-500/40"></span> High</span>
          </div>
        </div>

        {/* Heat Map Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-slate-700/60">
                <th className="py-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold w-1/4">
                  Business Division
                </th>
                {metrics.map((m) => (
                  <th
                    key={m}
                    className="py-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold text-center w-[15%]"
                  >
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/30">
              {categories.map((category) => (
                <tr key={category} className="hover:bg-slate-900/10 transition-colors duration-150">
                  <td className="py-3 text-xs font-semibold text-slate-300">
                    {category}
                  </td>
                  {metrics.map((metric) => {
                    const cell = getCell(category, metric);
                    const isSelected =
                      selectedCell?.category === category && selectedCell?.metric === metric;
                    const styles = getCellStyles(cell.level, isSelected);

                    return (
                      <td key={metric} className="p-1 text-center">
                        <button
                          onClick={() => handleCellClick(cell)}
                          onMouseEnter={() => setHoveredCell(cell)}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-full py-4 px-2 rounded-md border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1 ${styles.bg}`}
                        >
                          <span className={`text-[10px] font-mono font-bold tracking-tight uppercase ${styles.text}`}>
                            {cell.level}
                          </span>
                          <span className="text-[9px] font-mono text-slate-500 scale-90 block">
                            {cell.attempts} reqs
                          </span>
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Detail Box (Displays when user clicks a cell) */}
      <div className="mt-5 pt-4 border-t border-slate-700/60 bg-slate-900/40 rounded-lg p-3.5" id="heat-map-inspector">
        {selectedCell ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Auditor Inspector Log
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase">
                {selectedCell.category} • {selectedCell.metric}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
              <div className="md:col-span-1 flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-mono">Risk Profile</span>
                <span className={`text-sm font-bold font-mono uppercase ${
                  selectedCell.level === 'high' ? 'text-rose-400' : selectedCell.level === 'medium' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {selectedCell.level} RISK
                </span>
              </div>
              <div className="md:col-span-1 flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-mono">Audit Triggers</span>
                <span className="text-xs text-slate-300 font-mono font-semibold">
                  {selectedCell.attempts} occurrences
                </span>
              </div>
              <div className="md:col-span-2 flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-mono">Gateway Protection</span>
                <span className="text-xs text-slate-300 font-mono italic truncate">
                  {selectedCell.description}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center py-2 text-slate-500 text-xs gap-2">
            <Eye className="w-4 h-4 text-slate-500/60" />
            <span>Click any heat map cell to inspect live gateway parameters & bypass logs</span>
          </div>
        )}
      </div>
    </div>
  );
};
