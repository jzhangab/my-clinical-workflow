import { useState } from "react";

function LoginPage({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "revolution") {
      sessionStorage.setItem("auth", "1");
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setPassword("");
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080C14",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&family=Syne:wght@400;600;800&display=swap');
        * { box-sizing: border-box; }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%,60% { transform: translateX(-8px); }
          40%,80% { transform: translateX(8px); }
        }
        .shake { animation: shake 0.4s ease; }
        .login-input:focus { outline: none; border-color: #A98AE8 !important; }
        .login-btn:hover { background: #7C5CBF !important; }
      `}</style>

      <div
        className={shake ? "shake" : ""}
        style={{
          background: "#0d1117",
          border: `1px solid ${error ? "#E84FA0" : "#1e293b"}`,
          borderRadius: 12,
          padding: "48px 40px",
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          transition: "border-color 0.2s",
        }}
      >
        <div style={{ fontSize: 36, marginBottom: 16 }}>⚗️</div>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 18, fontWeight: 800,
          color: "#f1f5f9", letterSpacing: "0.04em",
          marginBottom: 6,
        }}>
          CLINICAL DEVELOPMENT WORKFLOW
        </div>
        <div style={{ fontSize: 11, color: "#475569", letterSpacing: "0.1em", marginBottom: 40 }}>
          RESTRICTED ACCESS
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Enter password"
            autoFocus
            style={{
              width: "100%",
              background: "#111827",
              border: `1.5px solid ${error ? "#E84FA0" : "#1e293b"}`,
              borderRadius: 6,
              padding: "12px 16px",
              color: "#e2e8f0",
              fontSize: 13,
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.08em",
              marginBottom: 12,
              transition: "border-color 0.2s",
            }}
          />
          {error && (
            <div style={{ fontSize: 11, color: "#E84FA0", marginBottom: 12, letterSpacing: "0.06em" }}>
              INCORRECT PASSWORD
            </div>
          )}
          <button
            type="submit"
            className="login-btn"
            style={{
              width: "100%",
              background: "#1e293b",
              border: "1.5px solid #334155",
              borderRadius: 6,
              padding: "12px",
              color: "#e2e8f0",
              fontSize: 12,
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            ENTER →
          </button>
        </form>
      </div>
    </div>
  );
}

// Helper to build a public/data file URL
const enc = (s) => s
  .replace(/ /g, "%20").replace(/&/g, "%26").replace(/:/g, "%3A")
  .replace(/>/g, "%3E").replace(/\(/g, "%28").replace(/\)/g, "%29");
const f = (folder, filename) => `/data/${enc(folder)}/${enc(filename)}`;

const PC_DISC  = "PRECLINICAL/Discovery & Target ID";
const PC_TOX   = "PRECLINICAL/In Vitro & Toxicology";
const PC_PHARM = "PRECLINICAL/Pharmacology & PK:PD";
const PC_CHEM  = "PRECLINICAL/Analytical Chemistry & Formulation";
const PC_IND   = "PRECLINICAL/IND-Enabling Package";

const P1_SAD   = "PHASE 1/SAD:MAD Studies";
const P1_FOOD  = "PHASE 1/Food Effect : DDI Studies";
const P1_BIOA  = "PHASE 1/Bioanalytical Methods";
const P1_CMC   = "PHASE 1/CMC Development";
const P1_IMP   = "PHASE 1/IMP & IMPD Preparation";
const P1_EOP1  = "PHASE 1/End-of-Phase 1 Meeting";

const P2A      = "PHASE 2/Phase 2a - Proof of Concept";
const P2B      = "PHASE 2/Phase 2b - Dose Ranging";
const P2_POP   = "PHASE 2/Population PK:PD Modeling";
const P2_RMP   = "PHASE 2/Risk Management & Regulatory";
const P2_EOP2  = "PHASE 2/End-of-Phase 2 Meeting";

const P3_PIV   = "PHASE 3/Pivotal Trials (>2)";
const P3_SUB   = "PHASE 3/Supportive & Subgroup Studies";
const P3_CMC   = "PHASE 3/Commercial CMC Package";
const P3_REG   = "PHASE 3/Regulatory Submissions";
const P3_APP   = "PHASE 3/Approval & Launch Readiness";

const PL_RWE   = "POST-LAUNCH/Real World Evidence (RWE)";
const PL_PMS   = "POST-LAUNCH/Post-Marketing Safety (PMS)";
const PL_PMC   = "POST-LAUNCH/Post-Marketing Commitments";
const PL_HEOR  = "POST-LAUNCH/HEOR & Market Access";

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
        docs: [
          { label: "Target validation report",    file: f(PC_DISC, "01_Target_Validation_Report_Cervimab.docx") },
          { label: "HTS screening data",           file: f(PC_DISC, "02_HTS_Screening_Data_Cervimab.docx") },
          { label: "Lead compound library",        file: f(PC_DISC, "03_Lead_Compound_Library_Cervimab.docx") },
        ],
        artifacts: [
          { label: "Compound activity data",                      file: f(PC_DISC, "04_Compound_Activity_Data_Cervimab.docx") },
          { label: "Structure-activity relationship (SAR) models", file: f(PC_DISC, "05_SAR_Model_Report_Cervimab.docx") },
        ],
        data: [
          { label: "Genomic/proteomic datasets", file: f(PC_DISC, "06_Genomic_Proteomic_Dataset_Cervimab.docx") },
          { label: "In vitro assay results",      file: f(PC_DISC, "07_In_Vitro_Assay_Results_Cervimab.docx") },
        ],
      },
      {
        id: "pc-tox",
        label: "In Vitro & In Vivo Toxicology",
        type: "parallel",
        docs: [
          { label: "GLP toxicology study reports (single-dose)",  file: f(PC_TOX, "08_GLP_SingleDose_Tox_Cervimab.docx") },
          { label: "GLP toxicology study reports (repeat-dose)",  file: f(PC_TOX, "09_GLP_RepeatDose_13wk_Tox_Cervimab.docx") },
          { label: "NOAEL/LOAEL determinations",                  file: f(PC_TOX, "10_NOAEL_LOAEL_Determination_Cervimab.docx") },
          { label: "Genotox battery results",                     file: f(PC_TOX, "11_Genotoxicity_Battery_Results_Cervimab.docx") },
        ],
        artifacts: [
          { label: "Tox summary tables",   file: f(PC_TOX, "12_Tox_Summary_Tables_Cervimab.docx") },
          { label: "Dose-response curves", file: f(PC_TOX, "13_Dose_Response_Curves_Cervimab.docx") },
        ],
        data: [
          { label: "ADME data",            file: f(PC_TOX, "14_ADME_Data_Cervimab.docx") },
          { label: "Metabolite profiling", file: f(PC_TOX, "15_Metabolite_Profiling_ProteinBinding_Cervimab.docx") },
          { label: "Protein binding data", file: f(PC_TOX, "15_Metabolite_Profiling_ProteinBinding_Cervimab.docx") },
        ],
      },
      {
        id: "pc-pharm",
        label: "Pharmacology & PK/PD",
        type: "parallel",
        docs: [
          { label: "Pharmacology study reports", file: f(PC_PHARM, "16_Primary_Pharmacology_Study_Cervimab.docx") },
          { label: "PK/PD models",               file: f(PC_PHARM, "17_PKPD_Model_Report_Cervimab.docx") },
          { label: "Bioavailability summaries",  file: f(PC_PHARM, "18_Bioavailability_Summary_Cervimab.docx") },
        ],
        artifacts: [
          { label: "PK parameter tables", file: f(PC_PHARM, "19_PK_Parameter_Tables_Cervimab.docx") },
          { label: "PD biomarker data",   file: f(PC_PHARM, "20_Biomarker_Data_Cervimab.docx") },
        ],
        data: [
          { label: "Plasma concentration-time data", file: f(PC_PHARM, "21_Plasma_Concentration_Time_Data_Cervimab.docx") },
          { label: "Receptor occupancy data",        file: f(PC_PHARM, "22_Receptor_Occupancy_Data_Cervimab.docx") },
        ],
      },
      {
        id: "pc-chem",
        label: "Analytical Chemistry & Formulation",
        type: "parallel",
        docs: [
          { label: "Drug substance characterization",   file: f(PC_CHEM, "cervimab_DS_characterization_3.2.S.3.docx") },
          { label: "Formulation development reports",   file: f(PC_CHEM, "cervimab_formulation_development_3.2.P.2.docx") },
          { label: "Stability studies",                 file: f(PC_CHEM, "cervimab_stability_studies_3.2.S.7_P.8.docx") },
        ],
        artifacts: [
          { label: "Analytical methods",  file: null },
          { label: "Reference standards", file: null },
        ],
        data: [
          { label: "Purity/impurity profiles",   file: null },
          { label: "Stability data packages",    file: null },
        ],
      },
    ],
    sequential: [
      {
        id: "pc-ind",
        label: "IND-Enabling Package",
        type: "sequential",
        docs: [
          { label: "IND Application (21 CFR 312)",        file: f(PC_IND, "CERVIMAB_IND_Package.docx") },
          { label: "Investigator's Brochure (IB) v1",     file: null },
          { label: "CMC section",                         file: null },
          { label: "Pharmacology/Tox section",            file: null },
          { label: "Clinical protocol synopsis",          file: null },
        ],
        artifacts: [
          { label: "Integrated summary of safety (ISS) preclinical", file: null },
          { label: "FDA pre-IND meeting minutes",                     file: null },
        ],
        data: [
          { label: "Consolidated nonclinical dataset", file: null },
          { label: "Starting dose calculations",       file: null },
        ],
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
        docs: [
          { label: "SAD/MAD protocol",                       file: f(P1_SAD, "CERV001_SAD_MAD_Protocol_v1.0.docx") },
          { label: "Dose escalation plan",                   file: f(P1_SAD, "CERV001_Dose_Escalation_Plan_v1.0.docx") },
          { label: "Safety monitoring committee charter",    file: f(P1_SAD, "CERV001_DSMB_Charter_v1.0.docx") },
        ],
        artifacts: [
          { label: "Dose-exposure-response tables", file: null },
          { label: "PK parameter summaries",        file: null },
          { label: "Safety listings",               file: null },
        ],
        data: [
          { label: "PK plasma samples",    file: null },
          { label: "Safety labs",          file: null },
          { label: "ECG data",             file: null },
          { label: "Biomarker specimens",  file: null },
        ],
      },
      {
        id: "p1-food",
        label: "Food Effect / DDI Studies",
        type: "parallel",
        docs: [
          { label: "Food effect protocol",              file: f(P1_FOOD, "CRV-PK-001_FoodEffect_Protocol_v1.0.docx") },
          { label: "DDI study protocol",                file: f(P1_FOOD, "CRV-DDI-002_DDI_Protocol_v1.0.docx") },
          { label: "CYP inhibition/induction report",  file: f(P1_FOOD, "VT-DMPK-004_CYP_Inhibition_Induction_Report.docx") },
        ],
        artifacts: [
          { label: "Bioequivalence summaries", file: null },
          { label: "DDI risk assessment",      file: null },
        ],
        data: [
          { label: "Fed/fasted PK profiles",      file: null },
          { label: "CYP probe substrate data",    file: null },
        ],
      },
      {
        id: "p1-bioa",
        label: "Bioanalytical Methods",
        type: "parallel",
        docs: [
          { label: "Bioanalytical method validation report (BMV)", file: f(P1_BIOA, "CRV001_Bioanalytical_Method_Validation_Report.docx") },
          { label: "Incurred sample reanalysis (ISR) report",      file: f(P1_BIOA, "CRV001_Incurred_Sample_Reanalysis_Report.docx") },
        ],
        artifacts: [
          { label: "Validated assay SOPs",    file: null },
          { label: "Reference standard COAs", file: null },
        ],
        data: [
          { label: "Calibration curve data", file: null },
          { label: "QC sample data",         file: null },
        ],
      },
      {
        id: "p1-cmc",
        label: "CMC Development",
        type: "parallel",
        docs: [
          { label: "Drug product manufacturing batch records", file: f(P1_CMC, "CVM_CMC_BR001_BatchManufacturingRecord.docx") },
          { label: "Process development reports",             file: f(P1_CMC, "CVM_CMC_PDR001_ProcessDevelopmentReport.docx") },
          { label: "Container closure validation",            file: f(P1_CMC, "CVM_CMC_CCI001_ContainerClosureIntegrityValidation.docx") },
        ],
        artifacts: [
          { label: "Drug product specifications", file: null },
          { label: "Stability summaries",         file: null },
        ],
        data: [
          { label: "Release testing data",   file: null },
          { label: "Stability time-points",  file: null },
        ],
      },
    ],
    sequential: [
      {
        id: "p1-imp",
        label: "IMP & IMPD Preparation",
        type: "sequential",
        docs: [
          { label: "Investigational Medicinal Product Dossier (IMPD)", file: f(P1_IMP, "CERVIMAB_IMPD_v3.0.docx") },
          { label: "IND amendments",                                    file: f(P1_IMP, "CERVIMAB_IND_Amendment_012.docx") },
          { label: "Updated IB (v2+)",                                  file: f(P1_IMP, "CERVIMAB_Investigator_Brochure_v4.0.docx") },
        ],
        artifacts: [
          { label: "Integrated PK/PD report",        file: null },
          { label: "First-in-human safety summary",  file: null },
        ],
        data: [
          { label: "Pooled safety database (AESI, SAE)", file: null },
          { label: "PK modeling outputs",               file: null },
        ],
      },
      {
        id: "p1-eop1",
        label: "End-of-Phase 1 Meeting",
        type: "sequential",
        docs: [
          { label: "FDA Type B meeting request",  file: f(P1_EOP1, "CERVIMAB_EOP1_TypeB_Meeting_Request.docx") },
          { label: "Briefing document",           file: f(P1_EOP1, "CERVIMAB_EOP1_Briefing_Document.docx") },
          { label: "Phase 2 protocol synopsis",   file: f(P1_EOP1, "CERVIMAB_CRC002_Phase2_Protocol_Synopsis.docx") },
        ],
        artifacts: [
          { label: "Meeting minutes",                 file: null },
          { label: "Agreed dose range for Phase 2",   file: null },
        ],
        data: [
          { label: "Exposure-response analyses", file: null },
        ],
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
        docs: [
          { label: "Phase 2a protocol",   file: f(P2A, "01_CVB-CRC-201_Protocol_v1.0.docx") },
          { label: "ICF",                 file: f(P2A, "02_CVB-CRC-201_ICF_v1.0.docx") },
          { label: "eCRF design",         file: f(P2A, "03_CVB-CRC-201_eCRF_Design_v1.0.docx") },
          { label: "SAP v1",              file: f(P2A, "04_CVB-CRC-201_SAP_v1.0.docx") },
          { label: "CSR (Phase 2a)",      file: f(P2A, "05_CVB-CRC-201_CSR_v1.0.docx") },
        ],
        artifacts: [
          { label: "PoC decision package",       file: null },
          { label: "Biomarker validation report", file: null },
        ],
        data: [
          { label: "SDTM (DM, AE, LB, VS, EX)",     file: null },
          { label: "ADaM (ADSL, ADEFF, ADLB)",       file: null },
          { label: "TFLs",                           file: null },
        ],
      },
      {
        id: "p2b",
        label: "Phase 2b – Dose Ranging",
        type: "parallel",
        docs: [
          { label: "Phase 2b protocol",   file: f(P2B, "AXB-CRC-201_Cervimab_Phase2b_Protocol_v1.0.docx") },
          { label: "ICF",                 file: null },
          { label: "eCRF",                file: null },
          { label: "SAP v2",              file: null },
          { label: "CSR (Phase 2b)",      file: null },
        ],
        artifacts: [
          { label: "Dose-response model",             file: null },
          { label: "Optimal dose selection report",   file: null },
        ],
        data: [
          { label: "SDTM domains",    file: null },
          { label: "ADaM datasets",   file: null },
          { label: "KM plots",        file: null },
          { label: "Forest plots",    file: null },
        ],
      },
      {
        id: "p2-pop",
        label: "Population PK/PD Modeling",
        type: "parallel",
        docs: [
          { label: "PopPK analysis plan",                  file: f(P2_POP, "cervimab_poppk_plan.docx") },
          { label: "PopPK report",                         file: f(P2_POP, "cervimab_poppk_report.docx") },
          { label: "Exposure-response analysis report",    file: f(P2_POP, "cervimab_er_report.docx") },
        ],
        artifacts: [
          { label: "PopPK model (NONMEM/Monolix)", file: null },
          { label: "E-R analysis outputs",         file: null },
        ],
        data: [
          { label: "Pooled PK dataset",    file: null },
          { label: "PD biomarker data",    file: null },
          { label: "Covariate dataset",    file: null },
        ],
      },
      {
        id: "p2-rmp",
        label: "Risk Management & Regulatory",
        type: "parallel",
        docs: [
          { label: "IND annual report",                    file: f(P2_RMP, "CERVI-IND-Annual-Report-v1.0.docx") },
          { label: "Safety update reports",                file: f(P2_RMP, "CERVI-Safety-Update-Report-v1.0.docx") },
          { label: "Risk Management Plan (RMP) draft",     file: f(P2_RMP, "CERVI-Risk-Management-Plan-v2.0.docx") },
          { label: "Pediatric investigation plan (PIP)",   file: f(P2_RMP, "CERVI-Pediatric-Investigation-Plan-v1.0.docx") },
        ],
        artifacts: [
          { label: "DSMB/DMC charters",      file: null },
          { label: "Risk-benefit framework", file: null },
        ],
        data: [
          { label: "Integrated safety dataset", file: null },
          { label: "Benefit-risk modeling",     file: null },
        ],
      },
    ],
    sequential: [
      {
        id: "p2-eop2",
        label: "End-of-Phase 2 Meeting",
        type: "sequential",
        docs: [
          { label: "Type B EOP2 meeting package",      file: f(P2_EOP2, "CERVIMAB_EOP2_Meeting_Request.docx") },
          { label: "Phase 3 protocol synopsis",        file: f(P2_EOP2, "CERVIMAB_Phase3_Protocol_Synopsis.docx") },
          { label: "Agreed endpoints/estimands",       file: f(P2_EOP2, "CERVIMAB_Endpoints_Estimands.docx") },
          { label: "SPA request",                      file: f(P2_EOP2, "CERVIMAB_SPA_Request.docx") },
        ],
        artifacts: [
          { label: "SPA agreement letter",     file: null },
          { label: "Agreed SAP framework",     file: null },
          { label: "FDA meeting minutes",      file: null },
        ],
        data: [
          { label: "Benefit-risk integrated summary", file: null },
        ],
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
        docs: [
          { label: "Phase 3 protocol (ICH E6 GCP)", file: f(P3_PIV, "CERVIMAB301_Protocol_v1.0.docx") },
          { label: "Master ICF",                    file: f(P3_PIV, "CERVIMAB301_MasterICF_v1.0.docx") },
          { label: "eCRF",                          file: f(P3_PIV, "CERVIMAB301_eCRF_v1.0.docx") },
          { label: "SAP (final)",                   file: f(P3_PIV, "CERV301_SAP_v2.0.docx") },
          { label: "CSR per trial",                 file: f(P3_PIV, "CERV301_CSR_Final.docx") },
        ],
        artifacts: [
          { label: "Primary/secondary endpoint tables", file: null },
          { label: "KM curves",                        file: null },
          { label: "Forest plots",                     file: null },
          { label: "Responder analyses",               file: null },
        ],
        data: [
          { label: "SDTM (all domains)",                           file: null },
          { label: "ADaM (ADSL, ADAE, ADTTE, ADLB, ADEFF, ADCM)", file: null },
          { label: "TFLs",                                         file: null },
          { label: "ADRG",                                         file: null },
        ],
      },
      {
        id: "p3-sub",
        label: "Supportive & Subgroup Studies",
        type: "parallel",
        docs: [
          { label: "Long-term safety protocol",                    file: f(P3_SUB, "CER-LTS-001_LongTerm_Safety_Protocol.docx") },
          { label: "Special population protocols (renal/hepatic)", file: f(P3_SUB, "CER-SP-002_Special_Population_Renal_Hepatic_Protocol.docx") },
          { label: "QTc study",                                    file: f(P3_SUB, "CER-QT-003_TQT_QTc_Study_Protocol.docx") },
        ],
        artifacts: [
          { label: "Integrated safety summary (ISS)",   file: null },
          { label: "Integrated efficacy summary (IES)", file: null },
        ],
        data: [
          { label: "Pooled SDTM/ADaM",      file: null },
          { label: "Meta-analytic datasets", file: null },
        ],
      },
      {
        id: "p3-cmc",
        label: "Commercial CMC Package",
        type: "parallel",
        docs: [
          { label: "Drug substance/product CTD sections (P+S)", file: f(P3_CMC, "CTD_Module3_Cervimab.docx") },
          { label: "Process validation reports",                file: f(P3_CMC, "ProcessValidationReport_PVR001_Cervimab.docx") },
          { label: "Comparability protocols",                   file: f(P3_CMC, "ComparabilityProtocol_CMP001_Cervimab.docx") },
          { label: "Shelf life determination",                  file: f(P3_CMC, "ShelfLifeDetermination_SLD001_Cervimab.docx") },
        ],
        artifacts: [
          { label: "Commercial specifications",      file: null },
          { label: "Quality system documentation",   file: null },
        ],
        data: [
          { label: "Stability data (accelerated + long-term)",  file: null },
          { label: "Process analytical technology (PAT) data", file: null },
        ],
      },
      {
        id: "p3-reg",
        label: "Regulatory Submissions",
        type: "parallel",
        docs: [
          { label: "NDA/BLA (eCTD format)",       file: f(P3_REG, "CERVIMAB_BLA_761XXX_FDA_eCTD.docx") },
          { label: "MAA (EMA)",                   file: f(P3_REG, "CERVIMAB_MAA_EMA.docx") },
          { label: "PMDA submission (Japan)",     file: f(P3_REG, "CERVIMAB_JNDA_PMDA.docx") },
          { label: "Health Canada filing",        file: f(P3_REG, "CERVIMAB_NDS_HealthCanada.docx") },
        ],
        artifacts: [
          { label: "eCTD spine",                          file: null },
          { label: "Module 2 summaries (QOS, NCS, CS)",   file: null },
          { label: "Risk management plan (final)",        file: null },
        ],
        data: [
          { label: "Define.xml",      file: null },
          { label: "Reviewer's Guide", file: null },
          { label: "ADRG",            file: null },
        ],
      },
    ],
    sequential: [
      {
        id: "p3-rev",
        label: "Regulatory Review & Advisory",
        type: "sequential",
        docs: [
          { label: "Complete Response to information requests",    file: f(P3_REG, "CERVIMAB_Doc1_Complete_Response_to_CRL.docx") },
          { label: "Advisory Committee briefing document",         file: f(P3_REG, "CERVIMAB_Doc2_ODAC_Briefing_Document.docx") },
          { label: "Labeling negotiations (PI/SmPC)",              file: f(P3_REG, "CERVIMAB_Doc3_Labeling_Negotiations_PI_SmPC.docx") },
          { label: "REMS proposal",                               file: f(P3_REG, "CERVIMAB_Doc4_REMS_Proposal.docx") },
        ],
        artifacts: [
          { label: "Final product label (draft)",     file: null },
          { label: "Advisory committee slides",       file: null },
          { label: "Risk communication materials",    file: null },
        ],
        data: [
          { label: "Integrated benefit-risk dataset",     file: null },
          { label: "Real-world external control data",    file: null },
        ],
      },
      {
        id: "p3-approval",
        label: "Approval & Launch Readiness",
        type: "sequential",
        docs: [
          { label: "Approval letter",                                   file: f(P3_APP, "Approval Letter.docx") },
          { label: "Final USPI/SmPC",                                   file: null },
          { label: "Post-marketing commitment schedule",                file: null },
          { label: "Risk Evaluation and Mitigation Strategy (REMS)",   file: null },
        ],
        artifacts: [
          { label: "Final eCTD submission archive", file: null },
          { label: "Approved labeling package",     file: null },
        ],
        data: [
          { label: "Approved indication dataset", file: null },
          { label: "Launch safety database",      file: null },
        ],
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
        docs: [
          { label: "RWE study protocol",    file: f(PL_RWE, "CERVIMAB_PostLaunch_RWD_RWE_Package.docx") },
          { label: "Data use agreement",    file: null },
          { label: "IRB/ethics approval",   file: null },
          { label: "RWD analysis plan",     file: null },
        ],
        artifacts: [
          { label: "RWE study reports",                    file: null },
          { label: "Comparative effectiveness analyses",   file: null },
          { label: "Patient registry outputs",             file: null },
        ],
        data: [
          { label: "EHR data",                         file: null },
          { label: "Claims data",                      file: null },
          { label: "Patient registries",               file: null },
          { label: "Wearable/sensor data",             file: null },
          { label: "Natural language processed notes", file: null },
        ],
      },
      {
        id: "pl-pms",
        label: "Post-Marketing Safety (PMS)",
        type: "parallel",
        docs: [
          { label: "PSUR/PBRER",                          file: f(PL_PMS, "PSURPBRER package.docx") },
          { label: "PADER",                               file: null },
          { label: "ICSRs (MedWatch/EudraVigilance)",     file: null },
          { label: "Risk management plan updates",        file: null },
          { label: "REMS assessment reports",             file: null },
        ],
        artifacts: [
          { label: "Signal detection reports",        file: null },
          { label: "Disproportionality analyses",     file: null },
          { label: "DILI/AESI surveillance outputs",  file: null },
        ],
        data: [
          { label: "Spontaneous adverse event reports",   file: null },
          { label: "FAERS/EudraVigilance data",           file: null },
          { label: "Literature surveillance",             file: null },
        ],
      },
      {
        id: "pl-pmc",
        label: "Post-Marketing Commitments",
        type: "parallel",
        docs: [
          { label: "PMC/PMR study protocols",         file: f(PL_PMC, "CERV-PMC-001_PMC_PMR_Study_Protocol.docx") },
          { label: "Pediatric study reports",         file: f(PL_PMC, "CERV-PED-001_Pediatric_Study_Report_PREA.docx") },
          { label: "Long-term registry protocols",    file: f(PL_PMC, "CERV-REG_Long_Term_Registry_Protocol.docx") },
        ],
        artifacts: [
          { label: "Annual PMC progress reports",  file: null },
          { label: "Completed study CSRs",         file: null },
        ],
        data: [
          { label: "Pediatric SDTM/ADaM",          file: null },
          { label: "Special population datasets",  file: null },
        ],
      },
      {
        id: "pl-heor",
        label: "HEOR & Market Access",
        type: "parallel",
        docs: [
          { label: "HTA dossier (NICE, HAS, G-BA)",   file: f(PL_HEOR, "cervimab_hta_dossier.docx") },
          { label: "Cost-effectiveness models",        file: f(PL_HEOR, "cervimab_cost_effectiveness.docx") },
          { label: "Budget impact analysis",           file: f(PL_HEOR, "cervimab_budget_impact.docx") },
          { label: "Value dossier",                    file: f(PL_HEOR, "cervimab_value_dossier.docx") },
        ],
        artifacts: [
          { label: "Payer evidence packages",          file: null },
          { label: "Systematic literature review",     file: null },
          { label: "Network meta-analysis report",     file: null },
        ],
        data: [
          { label: "QoL/PRO data (EQ-5D, SF-36)",      file: null },
          { label: "Resource utilization data",        file: null },
          { label: "Indirect comparison datasets",     file: null },
        ],
      },
    ],
    sequential: [
      {
        id: "pl-label",
        label: "Labeling Changes & Lifecycle",
        type: "sequential",
        docs: [
          { label: "sNDA/sBLA or Type II variation",   file: null },
          { label: "New indication protocol & CSR",    file: null },
          { label: "Label revision request",           file: null },
          { label: "CCDS updates",                     file: null },
        ],
        artifacts: [
          { label: "Updated USPI/SmPC",                  file: null },
          { label: "Dear Healthcare Provider letters",   file: null },
          { label: "Updated patient labeling",           file: null },
          { label: "New eCTD sequence",                  file: null },
        ],
        data: [
          { label: "Post-approval safety signal data",       file: null },
          { label: "New indication clinical datasets",       file: null },
          { label: "Updated benefit-risk assessment",        file: null },
        ],
      },
    ],
  },
];

const DOC_COLORS = {
  docs: { bg: "#1e3a5f", border: "#4DAFEA", label: "📄 Documents", text: "#b3d9f7" },
  artifacts: { bg: "#1a3d2b", border: "#2ECC9E", label: "⚙️ Data Artifacts", text: "#a3e8cc" },
  data: { bg: "#3d1a2b", border: "#E84FA0", label: "🗄️ Raw Data", text: "#f7b3d4" },
};

export default function App() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("auth") === "1");
  if (!authed) return <LoginPage onSuccess={() => setAuthed(true)} />;
  return <ClinicalWorkflow />;
}

function ClinicalWorkflow() {
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
                          {item.file ? (
                            <a
                              href={item.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: style.text,
                                textDecoration: "underline",
                                textDecorationStyle: "dotted",
                                textUnderlineOffset: "3px",
                              }}
                            >
                              {item.label}
                            </a>
                          ) : item.label}
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
