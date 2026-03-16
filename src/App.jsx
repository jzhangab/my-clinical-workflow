import { useState } from "react";

const PHASES = [
  {
    id: "preclinical",
    label: "Preclinical",
    color: "#7C5CBF",
    accent: "#A98AE8",
    bg: "#1A1230",
    duration: "2–6 years",
    icon: "🔬",
    parallel: [
      {
        id: "pc-disc",
        label: "Discovery & Target ID",
        type: "parallel",
        docs: ["Target validation report", "HTS screening data", "Lead compound library"],
        artifacts: ["Compound activity data", "Structure-activity relationship (SAR) models"],
        data: ["Genomic/proteomic datasets", "In vitro assay results"],
      },
      {
        id: "pc-tox",
        label: "In Vitro & In Vivo Toxicology",
        type: "parallel",
        docs: ["GLP toxicology study reports", "NOAEL/LOAEL determinations", "Genotox battery results"],
        artifacts: ["Tox summary tables", "Dose-response curves"],
        data: ["ADME data", "Metabolite profiling", "Protein binding data"],
      },
      {
        id: "pc-pharm",
        label: "Pharmacology & PK/PD",
        type: "parallel",
        docs: ["Pharmacology study reports", "PK/PD models", "Bioavailability summaries"],
        artifacts: ["PK parameter tables", "PD biomarker data"],
        data: ["Plasma concentration-time data", "Receptor occupancy data"],
      },
      {
        id: "pc-chem",
        label: "Analytical Chemistry & Formulation",
        type: "parallel",
        docs: ["Drug substance characterization", "Formulation development reports", "Stability studies"],
        artifacts: ["Analytical methods", "Reference standards"],
        data: ["Purity/impurity profiles", "Stability data packages"],
      },
    ],
    sequential: [
      {
        id: "pc-ind",
        label: "IND-Enabling Package",
        type: "sequential",
        docs: ["IND Application (21 CFR 312)", "Investigator's Brochure (IB) v1", "CMC section", "Pharmacology/Tox section", "Clinical protocol synopsis"],
        artifacts: ["Integrated summary of safety (ISS) preclinical", "FDA pre-IND meeting minutes"],
        data: ["Consolidated nonclinical dataset", "Starting dose calculations"],
      },
    ],
  },
  {
    id: "phase1",
    label: "Phase 1",
    color: "#1A7BB8",
    accent: "#4DAFEA",
    bg: "#0E1E2E",
    duration: "1–3 years",
    icon: "💉",
    parallel: [
      {
        id: "p1-sad",
        label: "SAD/MAD Studies",
        type: "parallel",
        docs: ["SAD/MAD protocol", "Dose escalation plan", "Safety monitoring committee charter"],
        artifacts: ["Dose-exposure-response tables", "PK parameter summaries", "Safety listings"],
        data: ["PK plasma samples", "Safety labs", "ECG data", "Biomarker specimens"],
      },
      {
        id: "p1-food",
        label: "Food Effect / DDI Studies",
        type: "parallel",
        docs: ["Food effect protocol", "DDI study protocol", "CYP inhibition/induction report"],
        artifacts: ["Bioequivalence summaries", "DDI risk assessment"],
        data: ["Fed/fasted PK profiles", "CYP probe substrate data"],
      },
      {
        id: "p1-bioa",
        label: "Bioanalytical Methods",
        type: "parallel",
        docs: ["Bioanalytical method validation report (BMV)", "Incurred sample reanalysis (ISR) report"],
        artifacts: ["Validated assay SOPs", "Reference standard COAs"],
        data: ["Calibration curve data", "QC sample data"],
      },
      {
        id: "p1-cmc",
        label: "CMC Development",
        type: "parallel",
        docs: ["Drug product manufacturing batch records", "Process development reports", "Container closure validation"],
        artifacts: ["Drug product specifications", "Stability summaries"],
        data: ["Release testing data", "Stability time-points"],
      },
    ],
    sequential: [
      {
        id: "p1-imp",
        label: "IMP & IMPD Preparation",
        type: "sequential",
        docs: ["Investigational Medicinal Product Dossier (IMPD)", "IND amendments", "Updated IB (v2+)"],
        artifacts: ["Integrated PK/PD report", "First-in-human safety summary"],
        data: ["Pooled safety database (AESI, SAE)", "PK modeling outputs"],
      },
      {
        id: "p1-eop1",
        label: "End-of-Phase 1 Meeting",
        type: "sequential",
        docs: ["FDA Type B meeting request", "Briefing document", "Phase 2 protocol synopsis"],
        artifacts: ["Meeting minutes", "Agreed dose range for Phase 2"],
        data: ["Exposure-response analyses"],
      },
    ],
  },
  {
    id: "phase2",
    label: "Phase 2",
    color: "#0F8C6A",
    accent: "#2ECC9E",
    bg: "#0D1F1A",
    duration: "2–4 years",
    icon: "📊",
    parallel: [
      {
        id: "p2a",
        label: "Phase 2a – Proof of Concept",
        type: "parallel",
        docs: ["Phase 2a protocol", "ICF", "eCRF design", "SAP v1", "CSR (Phase 2a)"],
        artifacts: ["PoC decision package", "Biomarker validation report"],
        data: ["SDTM (DM, AE, LB, VS, EX)", "ADaM (ADSL, ADEFF, ADLB)", "TFLs"],
      },
      {
        id: "p2b",
        label: "Phase 2b – Dose Ranging",
        type: "parallel",
        docs: ["Phase 2b protocol", "ICF", "eCRF", "SAP v2", "CSR (Phase 2b)"],
        artifacts: ["Dose-response model", "Optimal dose selection report"],
        data: ["SDTM domains", "ADaM datasets", "KM plots", "Forest plots"],
      },
      {
        id: "p2-pop",
        label: "Population PK/PD Modeling",
        type: "parallel",
        docs: ["PopPK analysis plan", "PopPK report", "Exposure-response analysis report"],
        artifacts: ["PopPK model (NONMEM/Monolix)", "E-R analysis outputs"],
        data: ["Pooled PK dataset", "PD biomarker data", "Covariate dataset"],
      },
      {
        id: "p2-rmp",
        label: "Risk Management & Regulatory",
        type: "parallel",
        docs: ["IND annual report", "Safety update reports", "Risk Management Plan (RMP) draft", "Pediatric investigation plan (PIP)"],
        artifacts: ["DSMB/DMC charters", "Risk-benefit framework"],
        data: ["Integrated safety dataset", "Benefit-risk modeling"],
      },
    ],
    sequential: [
      {
        id: "p2-eop2",
        label: "End-of-Phase 2 Meeting",
        type: "sequential",
        docs: ["Type B EOP2 meeting package", "Phase 3 protocol synopsis", "Agreed endpoints/estimands", "SPA request"],
        artifacts: ["SPA agreement letter", "Agreed SAP framework", "FDA meeting minutes"],
        data: ["Benefit-risk integrated summary"],
      },
    ],
  },
  {
    id: "phase3",
    label: "Phase 3",
    color: "#B85C1A",
    accent: "#F0944D",
    bg: "#1F1208",
    duration: "3–5 years",
    icon: "🏥",
    parallel: [
      {
        id: "p3-piv",
        label: "Pivotal Trials (≥2)",
        type: "parallel",
        docs: ["Phase 3 protocol (ICH E6 GCP)", "Master ICF", "eCRF", "SAP (final)", "CSR per trial"],
        artifacts: ["Primary/secondary endpoint tables", "KM curves", "Forest plots", "Responder analyses"],
        data: ["SDTM (all domains)", "ADaM (ADSL, ADAE, ADTTE, ADLB, ADEFF, ADCM)", "TFLs", "ADRG"],
      },
      {
        id: "p3-sub",
        label: "Supportive & Subgroup Studies",
        type: "parallel",
        docs: ["Long-term safety protocol", "Special population protocols (renal/hepatic)", "QTc study"],
        artifacts: ["Integrated safety summary (ISS)", "Integrated efficacy summary (IES)"],
        data: ["Pooled SDTM/ADaM", "Meta-analytic datasets"],
      },
      {
        id: "p3-cmc",
        label: "Commercial CMC Package",
        type: "parallel",
        docs: ["Drug substance/product CTD sections (P+S)", "Process validation reports", "Comparability protocols", "Shelf life determination"],
        artifacts: ["Commercial specifications", "Quality system documentation"],
        data: ["Stability data (accelerated + long-term)", "Process analytical technology (PAT) data"],
      },
      {
        id: "p3-reg",
        label: "Regulatory Submissions",
        type: "parallel",
        docs: ["NDA/BLA (eCTD format)", "MAA (EMA)", "PMDA submission (Japan)", "Health Canada filing"],
        artifacts: ["eCTD spine", "Module 2 summaries (QOS, NCS, CS)", "Risk management plan (final)"],
        data: ["Define.xml", "Reviewer's Guide", "ADRG"],
      },
    ],
    sequential: [
      {
        id: "p3-rev",
        label: "Regulatory Review & Advisory",
        type: "sequential",
        docs: ["Complete Response to information requests", "Advisory Committee briefing document", "Labeling negotiations (PI/SmPC)", "REMS proposal"],
        artifacts: ["Final product label (draft)", "Advisory committee slides", "Risk communication materials"],
        data: ["Integrated benefit-risk dataset", "Real-world external control data"],
      },
      {
        id: "p3-approval",
        label: "Approval & Launch Readiness",
        type: "sequential",
        docs: ["Approval letter", "Final USPI/SmPC", "Post-marketing commitment schedule", "Risk Evaluation and Mitigation Strategy (REMS)"],
        artifacts: ["Final eCTD submission archive", "Approved labeling package"],
        data: ["Approved indication dataset", "Launch safety database"],
      },
    ],
  },
  {
    id: "postlaunch",
    label: "Post-Launch",
    color: "#8A1A5C",
    accent: "#E84FA0",
    bg: "#1F0A14",
    duration: "Ongoing",
    icon: "🌍",
    parallel: [
      {
        id: "pl-rwe",
        label: "Real World Evidence (RWE)",
        type: "parallel",
        docs: ["RWE study protocol", "Data use agreement", "IRB/ethics approval", "RWD analysis plan"],
        artifacts: ["RWE study reports", "Comparative effectiveness analyses", "Patient registry outputs"],
        data: ["EHR data", "Claims data", "Patient registries", "Wearable/sensor data", "Natural language processed notes"],
      },
      {
        id: "pl-pms",
        label: "Post-Marketing Safety (PMS)",
        type: "parallel",
        docs: ["PSUR/PBRER", "PADER", "ICSRs (MedWatch/EudraVigilance)", "Risk management plan updates", "REMS assessment reports"],
        artifacts: ["Signal detection reports", "Disproportionality analyses", "DILI/AESI surveillance outputs"],
        data: ["Spontaneous adverse event reports", "FAERS/EudraVigilance data", "Literature surveillance"],
      },
      {
        id: "pl-pmc",
        label: "Post-Marketing Commitments",
        type: "parallel",
        docs: ["PMC/PMR study protocols", "Pediatric study reports", "Long-term registry protocols"],
        artifacts: ["Annual PMC progress reports", "Completed study CSRs"],
        data: ["Pediatric SDTM/ADaM", "Special population datasets"],
      },
      {
        id: "pl-heor",
        label: "HEOR & Market Access",
        type: "parallel",
        docs: ["HTA dossier (NICE, HAS, G-BA)", "Cost-effectiveness models", "Budget impact analysis", "Value dossier"],
        artifacts: ["Payer evidence packages", "Systematic literature review", "Network meta-analysis report"],
        data: ["QoL/PRO data (EQ-5D, SF-36)", "Resource utilization data", "Indirect comparison datasets"],
      },
    ],
    sequential: [
      {
        id: "pl-label",
        label: "Labeling Changes & Lifecycle",
        type: "sequential",
        docs: ["sNDA/sBLA or Type II variation", "New indication protocol & CSR", "Label revision request", "CCDS updates"],
        artifacts: ["Updated USPI/SmPC", "Dear Healthcare Provider letters", "Updated patient labeling", "New eCTD sequence"],
        data: ["Post-approval safety signal data", "New indication clinical datasets", "Updated benefit-risk assessment"],
      },
    ],
  },
];

const DOC_COLORS = {
  docs: { bg: "#1e3a5f", border: "#4DAFEA", label: "📄 Documents", text: "#b3d9f7" },
  artifacts: { bg: "#1a3d2b", border: "#2ECC9E", label: "⚙️ Data Artifacts", text: "#a3e8cc" },
  data: { bg: "#3d1a2b", border: "#E84FA0", label: "🗄️ Raw Data", text: "#f7b3d4" },
};

export default function ClinicalWorkflow() {
  const [activePhase, setActivePhase] = useState(null);
  const [activeNode, setActiveNode] = useState(null);

  const selectedPhase = PHASES.find((p) => p.id === activePhase);
  const selectedNode = selectedPhase
    ? [...selectedPhase.parallel, ...selectedPhase.sequential].find((n) => n.id === activeNode)
    : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080C14",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      color: "#e2e8f0",
      padding: "0",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&family=Syne:wght@400;600;800&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #0d1117; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
        .phase-btn:hover { transform: translateY(-2px); }
        .node-card:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(0,0,0,0.5) !important; }
        .detail-tag:hover { opacity: 0.85; }
        @keyframes fadeSlide { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }
        .animated { animation: fadeSlide 0.25s ease forwards; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        .connector-arrow { font-size: 22px; color: #475569; margin: 0 4px; }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d1117 0%, #111827 100%)",
        borderBottom: "1px solid #1e293b",
        padding: "28px 40px 22px",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>⚗️</span>
          <div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 22, fontWeight: 800, letterSpacing: "0.04em",
              color: "#f1f5f9",
            }}>CLINICAL DEVELOPMENT WORKFLOW</div>
            <div style={{ fontSize: 11, color: "#64748b", letterSpacing: "0.12em" }}>
              PRECLINICAL → PHASE 1 → PHASE 2 → PHASE 3 → POST-LAUNCH · DOCUMENTS · ARTIFACTS · DATA
            </div>
          </div>
        </div>

        {/* Phase selector */}
        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          {PHASES.map((phase) => (
            <button
              key={phase.id}
              className="phase-btn"
              onClick={() => {
                setActivePhase(activePhase === phase.id ? null : phase.id);
                setActiveNode(null);
              }}
              style={{
                background: activePhase === phase.id ? phase.color : "transparent",
                border: `1.5px solid ${activePhase === phase.id ? phase.accent : "#334155"}`,
                color: activePhase === phase.id ? "#fff" : "#94a3b8",
                padding: "8px 16px",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
                letterSpacing: "0.06em",
                transition: "all 0.18s ease",
                display: "flex", alignItems: "center", gap: 7,
              }}
            >
              <span>{phase.icon}</span>
              <span>{phase.label.toUpperCase()}</span>
              <span style={{ fontSize: 10, opacity: 0.7 }}>({phase.duration})</span>
            </button>
          ))}
          {activePhase && (
            <button
              onClick={() => { setActivePhase(null); setActiveNode(null); }}
              style={{
                background: "transparent", border: "1.5px solid #475569",
                color: "#64748b", padding: "8px 14px", borderRadius: 6,
                cursor: "pointer", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace",
                transition: "all 0.15s",
              }}
            >✕ CLEAR</button>
          )}
        </div>
      </div>

      <div style={{ padding: "32px 40px", maxWidth: 1600, margin: "0 auto" }}>

        {/* Overview pipeline — always visible */}
        {!activePhase && (
          <div className="animated">
            <div style={{
              fontSize: 11, color: "#475569", letterSpacing: "0.15em",
              marginBottom: 20, textTransform: "uppercase",
            }}>← SELECT A PHASE ABOVE TO EXPLORE ITS PROCESSES →</div>

            {/* Full pipeline overview */}
            <div style={{ overflowX: "auto", paddingBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: 900 }}>
                {PHASES.map((phase, i) => (
                  <div key={phase.id} style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
                    <div
                      onClick={() => setActivePhase(phase.id)}
                      style={{
                        flex: 1,
                        background: `linear-gradient(160deg, ${phase.bg} 0%, #0a0d14 100%)`,
                        border: `1px solid ${phase.color}44`,
                        borderRadius: i === 0 ? "10px 0 0 10px" : i === PHASES.length - 1 ? "0 10px 10px 0" : "0",
                        borderLeft: i === 0 ? `1px solid ${phase.color}44` : "none",
                        padding: "24px 20px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      className="phase-btn"
                    >
                      <div style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: 3,
                        background: `linear-gradient(90deg, ${phase.color}, ${phase.accent})`,
                      }} />
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{phase.icon}</div>
                      <div style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 14, fontWeight: 800, color: phase.accent,
                        letterSpacing: "0.04em", marginBottom: 4,
                      }}>{phase.label.toUpperCase()}</div>
                      <div style={{ fontSize: 10, color: "#64748b", marginBottom: 16 }}>{phase.duration}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>
                        <div style={{ marginBottom: 4 }}>
                          <span style={{ color: phase.accent }}>⟣</span> {phase.parallel.length} parallel tracks
                        </div>
                        <div>
                          <span style={{ color: phase.accent }}>→</span> {phase.sequential.length} sequential gates
                        </div>
                      </div>
                      <div style={{
                        marginTop: 16, fontSize: 10, color: "#475569",
                        borderTop: `1px solid ${phase.color}33`, paddingTop: 12,
                      }}>
                        {[...phase.parallel, ...phase.sequential].slice(0, 3).map(n => (
                          <div key={n.id} style={{ marginBottom: 2 }}>
                            {n.type === "parallel" ? "⟣" : "→"} {n.label}
                          </div>
                        ))}
                        {phase.parallel.length + phase.sequential.length > 3 && (
                          <div style={{ color: phase.accent }}>+ {phase.parallel.length + phase.sequential.length - 3} more…</div>
                        )}
                      </div>
                    </div>
                    {i < PHASES.length - 1 && (
                      <div style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: 32, background: "#0a0d14", zIndex: 2,
                        fontSize: 18, color: "#334155",
                      }}>▶</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div style={{
              marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap",
              borderTop: "1px solid #1e293b", paddingTop: 24,
            }}>
              <div style={{ fontSize: 11, color: "#64748b", letterSpacing: "0.08em" }}>LEGEND:</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                <span style={{ color: "#7C5CBF", fontSize: 16 }}>⟣</span>
                <span style={{ color: "#94a3b8" }}>Parallel tracks (concurrent execution)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                <span style={{ color: "#1A7BB8", fontSize: 16 }}>→</span>
                <span style={{ color: "#94a3b8" }}>Sequential gates (dependencies)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                <span style={{ color: "#4DAFEA" }}>📄</span>
                <span style={{ color: "#94a3b8" }}>Regulatory Documents</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                <span style={{ color: "#2ECC9E" }}>⚙️</span>
                <span style={{ color: "#94a3b8" }}>Data Artifacts</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                <span style={{ color: "#E84FA0" }}>🗄️</span>
                <span style={{ color: "#94a3b8" }}>Raw/Source Data</span>
              </div>
            </div>
          </div>
        )}

        {/* Phase detail view */}
        {selectedPhase && (
          <div className="animated">
            {/* Phase header */}
            <div style={{
              display: "flex", alignItems: "center", gap: 16, marginBottom: 28,
              paddingBottom: 20, borderBottom: `1px solid ${selectedPhase.color}44`,
            }}>
              <span style={{ fontSize: 40 }}>{selectedPhase.icon}</span>
              <div>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 26, fontWeight: 800,
                  color: selectedPhase.accent, letterSpacing: "0.04em",
                }}>{selectedPhase.label.toUpperCase()} PHASE</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>
                  Typical duration: {selectedPhase.duration} ·{" "}
                  {selectedPhase.parallel.length} parallel tracks ·{" "}
                  {selectedPhase.sequential.length} sequential gates
                </div>
              </div>
            </div>

            {/* Parallel tracks */}
            <div style={{ marginBottom: 32 }}>
              <div style={{
                fontSize: 11, color: selectedPhase.accent,
                letterSpacing: "0.14em", marginBottom: 14,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ fontSize: 16 }}>⟣</span>
                PARALLEL TRACKS — EXECUTED CONCURRENTLY
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                {selectedPhase.parallel.map((node) => (
                  <NodeCard
                    key={node.id}
                    node={node}
                    phase={selectedPhase}
                    isActive={activeNode === node.id}
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  />
                ))}
              </div>
            </div>

            {/* Arrow connector */}
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              margin: "24px 0", color: "#475569", fontSize: 11,
              letterSpacing: "0.1em",
            }}>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${selectedPhase.color}66, transparent)` }} />
              <span>PARALLEL TRACKS CONVERGE</span>
              <span style={{ fontSize: 20 }}>▼</span>
              <span>SEQUENTIAL GATE</span>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(270deg, ${selectedPhase.color}66, transparent)` }} />
            </div>

            {/* Sequential gates */}
            <div>
              <div style={{
                fontSize: 11, color: selectedPhase.accent,
                letterSpacing: "0.14em", marginBottom: 14,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ fontSize: 16 }}>→</span>
                SEQUENTIAL GATES — ORDERED DEPENDENCIES
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {selectedPhase.sequential.map((node, i) => (
                  <div key={node.id} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    {i > 0 && (
                      <div style={{ fontSize: 20, color: "#475569", paddingTop: 14, flexShrink: 0 }}>↓</div>
                    )}
                    {i === 0 && <div style={{ width: 28 }} />}
                    <div style={{ flex: 1 }}>
                      <NodeCard
                        node={node}
                        phase={selectedPhase}
                        isActive={activeNode === node.id}
                        onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                        wide
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            {selectedNode && (
              <div className="animated" style={{
                marginTop: 32,
                background: "#0d1117",
                border: `1px solid ${selectedPhase.color}66`,
                borderRadius: 10,
                padding: 28,
                borderLeft: `4px solid ${selectedPhase.accent}`,
              }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 16, fontWeight: 700,
                  color: selectedPhase.accent, marginBottom: 6,
                }}>
                  {selectedNode.type === "parallel" ? "⟣" : "→"} {selectedNode.label}
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 24 }}>
                  {selectedNode.type === "parallel" ? "PARALLEL TRACK" : "SEQUENTIAL GATE"} · CLICK AGAIN TO COLLAPSE
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
                  {Object.entries(DOC_COLORS).map(([key, style]) => (
                    <div key={key} style={{
                      background: style.bg,
                      border: `1px solid ${style.border}55`,
                      borderRadius: 8,
                      padding: 18,
                    }}>
                      <div style={{
                        fontSize: 11, fontWeight: 600,
                        color: style.border, letterSpacing: "0.1em",
                        marginBottom: 14,
                      }}>{style.label}</div>
                      {selectedNode[key].map((item, i) => (
                        <div key={i} style={{
                          fontSize: 11.5, color: style.text,
                          padding: "6px 0",
                          borderBottom: i < selectedNode[key].length - 1 ? `1px solid ${style.border}22` : "none",
                          lineHeight: 1.5,
                        }}>
                          <span style={{ color: style.border, marginRight: 6 }}>▸</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function NodeCard({ node, phase, isActive, onClick, wide }) {
  return (
    <div
      className="node-card"
      onClick={onClick}
      style={{
        background: isActive
          ? `linear-gradient(135deg, ${phase.bg}, #0d1117)`
          : "#0d1117",
        border: `1.5px solid ${isActive ? phase.accent : phase.color + "55"}`,
        borderRadius: 8,
        padding: "16px 18px",
        cursor: "pointer",
        transition: "all 0.18s ease",
        boxShadow: isActive ? `0 0 20px ${phase.color}33` : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isActive && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${phase.color}, ${phase.accent})`,
        }} />
      )}
      <div style={{
        display: "flex", alignItems: "flex-start",
        justifyContent: "space-between", gap: 8,
      }}>
        <div>
          <div style={{
            fontSize: 11,
            color: node.type === "parallel" ? phase.accent : "#F0944D",
            letterSpacing: "0.1em", marginBottom: 5,
          }}>
            {node.type === "parallel" ? "⟣ PARALLEL" : "→ SEQUENTIAL"}
          </div>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 13, fontWeight: 700,
            color: "#e2e8f0", lineHeight: 1.3,
          }}>{node.label}</div>
        </div>
        <div style={{ fontSize: 16, color: isActive ? phase.accent : "#334155", flexShrink: 0 }}>
          {isActive ? "▲" : "▼"}
        </div>
      </div>

      {/* Mini pill counts */}
      <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
        {Object.entries(DOC_COLORS).map(([key, style]) => (
          <span key={key} style={{
            background: style.bg,
            border: `1px solid ${style.border}44`,
            color: style.text,
            fontSize: 10, padding: "3px 8px", borderRadius: 4,
          }}>
            {node[key].length} {key}
          </span>
        ))}
      </div>

      {!isActive && (
        <div style={{ marginTop: 10, fontSize: 10, color: "#475569" }}>
          Click to expand details ↓
        </div>
      )}
    </div>
  );
}
