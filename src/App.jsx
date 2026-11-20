import React, { useState, useMemo } from 'react';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Compass,
  Cpu,
  Eye,
  EyeOff,
  Factory,
  Gauge,
  Info,
  Layers,
  Play,
  Pause,
  RotateCcw,
  Search,
  ShieldAlert,
  Wrench
} from 'lucide-react';
import Hexane3DCanvas from './components/Hexane3DCanvas';
import { SUBSYSTEMS, EQUIPMENTS, DEVIATION_SCENARIOS } from './data/hexane700Data';

export default function App() {
  const [selectedSubsystemId, setSelectedSubsystemId] = useState('all');
  const [selectedEquipmentId, setSelectedEquipmentId] = useState('T-703');
  const [activeScenarioId, setActiveScenarioId] = useState('normal');
  const [activeTab, setActiveTab] = useState('principle');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLabels, setShowLabels] = useState(true);
  const [flowSpeed, setFlowSpeed] = useState(1.0);
  const [cameraResetTrigger, setCameraResetTrigger] = useState(0);
  const [resolvedSteps, setResolvedSteps] = useState({});

  const selectedEquipment = useMemo(
    () => EQUIPMENTS.find((eq) => eq.id === selectedEquipmentId) || EQUIPMENTS[0],
    [selectedEquipmentId]
  );

  const activeScenario = useMemo(
    () => DEVIATION_SCENARIOS.find((sc) => sc.id === activeScenarioId) || DEVIATION_SCENARIOS[0],
    [activeScenarioId]
  );

  const activeSubsystemObj = useMemo(() => {
    if (selectedSubsystemId === 'all') return 'all';
    return SUBSYSTEMS.find((s) => s.id === selectedSubsystemId) || 'all';
  }, [selectedSubsystemId]);

  const filteredEquipments = useMemo(() => {
    return EQUIPMENTS.filter((eq) => {
      const matchesSub = selectedSubsystemId === 'all' || eq.subsystem === selectedSubsystemId;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        eq.tag.toLowerCase().includes(q) ||
        eq.name.toLowerCase().includes(q) ||
        eq.purpose.toLowerCase().includes(q);
      return matchesSub && matchesSearch;
    });
  }, [selectedSubsystemId, searchQuery]);

  const handleSelectScenario = (scenarioId) => {
    setActiveScenarioId(scenarioId);
    setResolvedSteps({});
    setActiveTab('sop');
    const sc = DEVIATION_SCENARIOS.find((s) => s.id === scenarioId);
    if (sc && sc.affectedIds.length > 0) {
      setSelectedEquipmentId(sc.affectedIds[0]);
    }
  };

  const toggleStepDone = (idx) => {
    setResolvedSteps((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#060b14] text-slate-100 overflow-hidden">
      <header className="h-14 px-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <Factory className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-wide text-white uppercase">
                LSP Petrochemical Complex • Section #700 Hexane Recovery
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
                SOP: HD-W-7000-00-001
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Mô hình mô phỏng 3D tương tác quy trình công nghệ, nguyên lý thiết bị & xử lý sự cố vận hành
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${
              activeScenario.severity === 'critical'
                ? 'bg-red-500/20 text-red-300 border-red-500/50 animate-pulse'
                : activeScenario.severity === 'warning'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{activeScenario.tag}</span>
          </div>

          <button
            onClick={() => setFlowSpeed((s) => (s === 0 ? 1.0 : 0))}
            className="px-2.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs flex items-center gap-1.5 text-slate-200"
            title="Tạm dừng / Tiếp tục dòng chảy"
          >
            {flowSpeed === 0 ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
            <span>{flowSpeed === 0 ? 'Chạy' : 'Dừng'}</span>
          </button>

          <button
            onClick={() => setShowLabels((v) => !v)}
            className="px-2.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs flex items-center gap-1.5 text-slate-200"
          >
            {showLabels ? <Eye className="w-3.5 h-3.5 text-sky-400" /> : <EyeOff className="w-3.5 h-3.5 text-slate-400" />}
            <span>Nhãn 3D</span>
          </button>

          <button
            onClick={() => {
              setSelectedSubsystemId('all');
              setCameraResetTrigger((c) => c + 1);
            }}
            className="px-2.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs flex items-center gap-1.5 text-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
            <span>Toàn cảnh</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-slate-950/85 border-r border-slate-800 flex flex-col shrink-0 z-20">
          <div className="p-3 border-b border-slate-800">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm Tag (VD: T-703, D-711, P-721)..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div className="p-2.5 border-b border-slate-800 max-h-56 overflow-y-auto">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1.5 mb-1.5 flex items-center gap-1">
              <Layers className="w-3 h-3" />
              <span>8 Phân khu quy trình (#700)</span>
            </div>
            <button
              onClick={() => setSelectedSubsystemId('all')}
              className={`w-full text-left px-2.5 py-1.5 rounded text-xs mb-1 transition-colors flex items-center justify-between ${
                selectedSubsystemId === 'all'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>Toàn bộ cụm Hexane Recovery</span>
              <span className="text-[10px] font-mono text-slate-400">{EQUIPMENTS.length}</span>
            </button>

            {SUBSYSTEMS.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubsystemId(sub.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs mb-0.5 transition-colors flex items-center gap-2 ${
                  selectedSubsystemId === sub.id
                    ? 'bg-slate-800 text-white font-semibold border border-slate-600'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: sub.color }} />
                <span className="truncate">{sub.name}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-1.5 mb-1.5 flex items-center justify-between">
              <span>Danh sách thiết bị ({filteredEquipments.length})</span>
              <Compass className="w-3 h-3" />
            </div>
            <div className="space-y-1">
              {filteredEquipments.map((eq) => {
                const isSelected = eq.id === selectedEquipmentId;
                const isAlarm = activeScenario.affectedIds.includes(eq.id);
                return (
                  <button
                    key={eq.id}
                    onClick={() => setSelectedEquipmentId(eq.id)}
                    className={`w-full text-left p-2 rounded-lg border transition-all ${
                      isAlarm
                        ? 'bg-red-950/40 border-red-500/60 text-red-200'
                        : isSelected
                        ? 'bg-sky-500/15 border-sky-500/50 text-white'
                        : 'bg-slate-900/50 border-slate-800/80 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-sky-400">{eq.tag}</span>
                      {isAlarm && <AlertTriangle className="w-3.5 h-3.5 text-red-400 animate-bounce" />}
                    </div>
                    <div className="text-xs font-medium truncate mt-0.5">{eq.name}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <main className="flex-1 relative bg-[#060b14] overflow-hidden">
          <Hexane3DCanvas
            selectedEquipmentId={selectedEquipmentId}
            onSelectEquipment={setSelectedEquipmentId}
            activeSubsystem={activeSubsystemObj}
            activeScenario={activeScenario}
            showLabels={showLabels}
            flowSpeed={flowSpeed}
            cameraResetTrigger={cameraResetTrigger}
          />

          <div className="absolute top-3 left-3 max-w-md bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-lg p-3 pointer-events-none z-10">
            <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-1">
              {selectedSubsystemId === 'all'
                ? 'Tổng quan Section #700 • Hexane Recovery'
                : SUBSYSTEMS.find((s) => s.id === selectedSubsystemId)?.name}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedSubsystemId === 'all'
                ? 'Nhấp vào bất kỳ thiết bị nào trong mô hình 3D (tháp chưng cất, bồn tách, bơm, thiết bị trao đổi nhiệt, Drum Flaker) để xem mục đích, nguyên lý hoạt động và giới hạn vận hành an toàn.'
                : SUBSYSTEMS.find((s) => s.id === selectedSubsystemId)?.summary}
            </p>
          </div>

          <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-2 flex flex-wrap gap-3 text-[11px] z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="text-slate-300">ML / Crude Hexane</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-slate-300">Pure Hexane / Vapor</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
              <span className="text-slate-300">Molten Low Polymer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="text-slate-300">Oligomer Cut</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
              <span className="text-slate-300">Wastewater / HCl</span>
            </div>
          </div>
        </main>

        <aside className="w-96 bg-slate-950/90 border-l border-slate-800 flex flex-col shrink-0 z-20">
          <div className="p-4 border-b border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-sky-500/20 border border-sky-500/40 font-mono text-xs font-bold text-sky-300">
                {selectedEquipment.tag}
              </span>
              <span className="text-[11px] text-slate-400 uppercase font-mono">
                {SUBSYSTEMS.find((s) => s.id === selectedEquipment.subsystem)?.code} UNIT
              </span>
            </div>
            <h2 className="text-base font-bold text-white mt-1.5">{selectedEquipment.name}</h2>
          </div>

          <div className="grid grid-cols-3 border-b border-slate-800 text-xs font-medium">
            <button
              onClick={() => setActiveTab('principle')}
              className={`py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'principle'
                  ? 'border-sky-400 text-sky-300 bg-sky-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Nguyên lý</span>
            </button>
            <button
              onClick={() => setActiveTab('limits')}
              className={`py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'limits'
                  ? 'border-emerald-400 text-emerald-300 bg-emerald-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>Thông số SOL</span>
            </button>
            <button
              onClick={() => setActiveTab('sop')}
              className={`py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'sop'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Sự cố SOP</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeTab === 'principle' && (
              <>
                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Mục đích công nghệ</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{selectedEquipment.purpose}</p>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Nguyên lý hoạt động</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{selectedEquipment.principle}</p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Phân định trách nhiệm vận hành (SOP)
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-slate-300">
                    <li>
                      <strong className="text-sky-300">Boardman (BM):</strong> Giám sát DCS, kiểm soát vòng điều khiển tự động và hệ thống liên động an toàn (ESD).
                    </li>
                    <li>
                      <strong className="text-emerald-300">Field Operator (FO):</strong> Tuân thủ quy trình tại hiện trường, kiểm tra van tay, bypass, kính thủy và bơm.
                    </li>
                  </ul>
                </div>
              </>
            )}

            {activeTab === 'limits' && (
              <div className="space-y-2.5">
                <div className="text-[11px] text-slate-400">
                  Giới hạn vận hành an toàn & ngưỡng cảnh báo (Safe Operating Limits):
                </div>
                {selectedEquipment.params.map((p, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-amber-400">{p.tag}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-mono text-[11px]">
                        {p.normal}
                      </span>
                    </div>
                    <div className="text-xs text-slate-200 mt-1">{p.desc}</div>
                    <div className="text-[11px] font-mono text-slate-400 mt-1.5 pt-1.5 border-t border-slate-800/80">
                      Giới hạn: <span className="text-rose-300">{p.limits}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'sop' && (
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
                    Chọn kịch bản mô phỏng sự cố (Deviation):
                  </label>
                  <select
                    value={activeScenarioId}
                    onChange={(e) => handleSelectScenario(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {DEVIATION_SCENARIOS.map((sc) => (
                      <option key={sc.id} value={sc.id}>
                        {sc.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  className={`rounded-lg p-3 border ${
                    activeScenario.severity === 'critical'
                      ? 'bg-red-950/30 border-red-500/40'
                      : activeScenario.severity === 'warning'
                      ? 'bg-amber-950/30 border-amber-500/40'
                      : 'bg-emerald-950/20 border-emerald-500/30'
                  }`}
                >
                  <div className="text-xs font-bold text-white mb-2">{activeScenario.title}</div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-amber-300">Nguyên nhân (Cause): </span>
                      <span className="text-slate-300">{activeScenario.cause}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-rose-300">Hậu quả (Consequence): </span>
                      <span className="text-slate-300">{activeScenario.consequence}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-sky-300">Phòng ngừa (Prevention): </span>
                      <span className="text-slate-300">{activeScenario.prevent}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Các bước khắc phục sự cố (Corrective Actions)
                  </div>
                  <div className="space-y-2">
                    {activeScenario.actions.map((act, idx) => {
                      const done = !!resolvedSteps[idx];
                      return (
                        <button
                          key={idx}
                          onClick={() => toggleStepDone(idx)}
                          className={`w-full text-left p-2 rounded border text-xs flex items-start gap-2 transition-colors ${
                            done
                              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200 line-through opacity-75'
                              : 'bg-slate-950/70 border-slate-800 text-slate-200 hover:border-slate-600'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${done ? 'text-emerald-400' : 'text-slate-600'}`}
                          />
                          <span>{act}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
