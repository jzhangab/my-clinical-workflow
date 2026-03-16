**MERIDIAN ONCOLOGY SCIENCES, INC.**

Pharmacology, DMPK & Translational Sciences Division

**PK Parameter Table Report**

*Cervimab \| Complete Pharmacokinetic Parameter Summary \| Preclinical
to Phase 1 Bridging*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-PKT-2022-004

  **Version:**           v3.0

  **Date:**              2022-11-15

  **Study Drug:**        Cervimab (MOS-PD1-047) \| Fully Human IgG4
                         S228P Anti-PD-1 mAb \| IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer
                         (mCRC)

  **GLP Status:**        Summary Report \| Integrates GLP and Non-GLP
                         Studies \| 21 CFR 312.23(a)(8)

  **Regulatory Basis:**  21 CFR 312.23(a)(8); ICH S6(R1); ICH S9; ICH
                         E9(R1); FDA Oncology Dose Optimization
                         Guidance 2022
  ---------------------- ---------------------------------------------

*CONFIDENTIAL --- Contains proprietary preclinical pharmacology and
PK/PD data supporting IND 135-892 for Cervimab. Prepared in accordance
with 21 CFR 312.23(a)(8) and ICH M4S CTD Module 2.6 format. Literature
references are cited numerically in superscript throughout each
section.*

**1. Introduction**

This report provides the comprehensive PK parameter summary for Cervimab
across all preclinical and Phase 1 studies, organized by species, dose,
and study phase. Parameter estimates are derived by non-compartmental
analysis (NCA) using Phoenix WinNonlin v8.3 (Certara), with additional
compartmental parameter estimates from the NONMEM popPK model
(MOS-PKPD-2022-002). This report supports IND Module 2.7.2 Clinical
Summary of PK and Phase 1 Regulatory Package. All human data presented
are from study MOS-CRC-101 (Phase 1, N=54). Comparative benchmarking
against the established PK parameters of pembrolizumab ^\[1\]^ and
nivolumab ^\[2\]^ provides translational context.

**2. Cynomolgus Monkey PK --- Single-Dose NCA (Exploratory Non-GLP)**

Study MOS-PK-2021-004: n=3M+3F per dose group; serial sampling (0.25, 1,
4, 24, 48, 96, 168, 336, 504, 672h post-dose); NCA by linear-log
trapezoidal method (log-linear terminal phase fit); bioanalytical:
validated anti-Cervimab sandwich ELISA (LLOQ 5 ng/mL). Parameters
consistent with linear IgG4 PK at doses ≥3 mg/kg and mild TMDD
nonlinearity at 1 mg/kg (AUC slightly sub-dose-proportional: DN-AUC
ratio 0.84 at 1 mg/kg vs 5 mg/kg), consistent with published anti-PD-1
antibody PK profiles in cynomolgus monkeys ^\[5\]^, ^\[6\]^.

  ----------- ------- ----------- -------- ------------- ---------- ------------- ----------- ----------
  **Dose      **n**   **Cmax      **Tmax   **AUC₀₋∞      **t½       **CL          **Vss       **MRT
  (mg/kg)**           (µg/mL)**   (h)**    (µg·h/mL)**   (days)**   (mL/h/kg)**   (mL/kg)**   (days)**

  1 M         3       20.2 ± 2.4  1.1      2,740 ± 310   17.8 ± 2.2 0.365 ± 0.062 54 ± 8      22.1 ± 2.8

  1 F         3       21.4 ± 2.8  1.1      3,220 ± 380   19.0 ± 2.4 0.311 ± 0.054 62 ± 10     24.4 ± 3.2

  5 M         3       100.4 ±     1.1      14,280 ±      19.4 ± 2.4 0.350 ± 0.058 57 ± 8      23.8 ± 3.0
                      12.2                 1,620                                              

  5 F         3       107.8 ±     1.1      15,400 ±      20.2 ± 2.8 0.325 ± 0.056 61 ± 9      25.2 ± 3.4
                      14.4                 1,840                                              

  20 M        3       398 ± 48    1.1      56,240 ±      19.8 ± 2.6 0.356 ± 0.062 60 ± 9      24.4 ± 3.2
                                           6,620                                              

  20 F        3       426 ± 56    1.1      61,040 ±      20.6 ± 2.8 0.328 ± 0.054 63 ± 10     25.8 ± 3.6
                                           7,080                                              
  ----------- ------- ----------- -------- ------------- ---------- ------------- ----------- ----------

*NCA by WinNonlin v8.3 (linear-log trapezoidal). Values mean ± SD. No
statistically significant sex difference (p=0.18, Mann-Whitney U). CL
range 0.311--0.365 mL/h/kg consistent with WT IgG4 CL in cynomolgus
monkey (3.7--6.6 mL/day/kg = 0.154--0.275 mL/h/kg for WT mAbs \[6\];
Cervimab CL slightly higher, partially attributable to TMDD at 1 mg/kg
doses).*

**3. Cynomolgus Monkey PK --- GLP 13-Week Repeat-Dose (Q2W×7)**

GLP Study MOS-GLP-TOX-2022-002. TK samples collected predose C1 (Day 1)
and C7 (Day 85), and at 0.25h post-end-of-infusion, 4, 24, 48, 72, 96h
post each dose. n=5M+5F per group. ADA assessed concurrently (ECL
bridging assay). PK was affected by ADA at 30 mg/kg (8/10 animals ADA+
by Cycle 7) --- consistent with published observations of high ADA rates
for human IgG4 antibodies in cynomolgus monkeys, which do not predict
human ADA risk (pembrolizumab: high ADA in NHP vs \~1% in humans)
^\[5\]^.

  ----------- ----------- ----------- ----------- ------------- ---------- ---------- ----------
  **Dose      **Cycle**   **Cmax      **Cmin      **AUC₀₋τ      **t½       **Accum.   **ADA+**
  (mg/kg)**               (µg/mL)**   (µg/mL)**   (µg·h/mL)**   (days)**   Ratio**    

  3 M/F       C1          62 ± 8      18 ± 4      1,240 ± 180   19.8 ± 2.4 ---        0/10

  3 M/F       C7          78 ± 10     22 ± 6      1,560 ± 200   20.4 ± 2.6 1.26×      4/10

  10 M/F      C1          212 ± 24    62 ± 8      4,240 ± 480   20.2 ± 2.2 ---        0/10

  10 M/F      C7          248 ± 28    78 ± 10     4,980 ± 560   20.8 ± 2.4 1.17×      6/10

  30 M/F      C1          624 ± 72    182 ± 24    12,480 ±      20.6 ± 2.8 ---        0/10
                                                  1,440                               

  30 M/F      C7\*        542 ± 84\*  124 ± 28\*  10,840 ±      18.4 ±     0.87×      8/10\*
                                                  1,280\*       3.2\*      (↓ADA)     
  ----------- ----------- ----------- ----------- ------------- ---------- ---------- ----------

*\* ADA-enhanced clearance at 30 mg/kg Cycle 7 --- reduced Cmax and AUC
vs Cycle 1 (0.87× accumulation). This is expected; NHP ADA rates do not
predict human immunogenicity \[5\]. Accumulation ratio at 3 mg/kg
(1.26×) is consistent with predicted value from t½=20d and Q2W dosing:
R_acc = 1/(1-e\^(-0.693×14/20)) = 1.35 (slight overestimate due to
nonlinear component). At 10 mg/kg (TMDD saturated), R_acc observed 1.17×
vs predicted 1.28× --- consistent with slightly faster effective CL due
to residual TMDD contribution.*

**4. Human PK Parameters --- Phase 1 Study MOS-CRC-101**

Phase 1 NCA parameters from study MOS-CRC-101 (N=54 patients enrolled;
18 evaluable at 400 mg Q3W RP2D for full PK analysis). Bioanalytical:
validated anti-Cervimab Fab-specific sandwich ELISA (LLOQ 0.5 µg/mL;
dynamic range 0.5--500 µg/mL; selectivity: no cross-reactivity with
endogenous IgG4 confirmed). Comparative benchmarking against published
pembrolizumab PK at approved 200 mg Q3W ^\[1\]^ and nivolumab 240 mg Q2W
^\[2\]^ provides regulatory context.

  --------------- ------------------ ----------------- ------------- ----------- ----------------
  **PK            **Cervimab 400 mg  **Pembrolizumab   **Nivolumab   **Units**   **Assessment**
  Parameter**     Q3W**              200 mg Q3W        240 mg Q2W                
                                     \[1\]**           \[2\]**                   

  Cmax (Cycle 1)  **98.4 ± 14.2**    66.3 ± 18.4       68.4 ± 22.4   µg/mL       Cervimab Cmax
                                                                                 \~48% higher vs
                                                                                 pembro at 2×
                                                                                 dose (expected)

  Tmax            0.5h (end          0.5h (end         1.0h (end     h           Consistent with
                  infusion)          infusion)         infusion)                 IV infusion

  AUC₀₋₂₁d (Cycle **14,820 ± 2,340** N/A (Q3W)         N/A (Q2W)     µg·h/mL     AUC₀₋₂₁d for
  1)                                                                             dose interval
                                                                                 comparison

  t½ (terminal,   **22.3 ± 4.1**     26.7 ± 7.2 days   26.7 ± 7.6    days        Slightly shorter
  Cycle 1)                           \[1\]             days \[2\]                t½ vs
                                                                                 pembro/nivo
                                                                                 (KD-driven);
                                                                                 within IgG4
                                                                                 class range

  CL (popPK,      **0.210 ± 0.048**  0.222 ± 0.062     0.192 ± 0.058 mL/h/kg     Consistent with
  Cycle 1)                           \[1\]             \[2\]                     IgG4 class CL
                                                                                 range 0.18--0.25
                                                                                 mL/h/kg \[7\]

  Vss (popPK)     82.4 ± 14.8        69.8 ± 18.4 \[1\] 88.4 ± 22.6   mL/kg       Slightly higher
                                                       \[2\]                     Vss may reflect
                                                                                 binding to lymph
                                                                                 node and tumor
                                                                                 compartments

  Cmin (Cycle 1   **30.2 ± 6.8**     22.4 ± 8.2 (Q3W)  18.4 ± 6.8    µg/mL       All above RO
  trough, Day 22)                    \[1\]             (Q2W) \[2\]               target (1 µg/mL)

  Steady-state    42.8 ± 10.4        N/A               N/A           µg/mL       1.42×
  Cmin                                                                           accumulation at
  (predicted,                                                                    steady state;
  Cycle 4+)                                                                      consistent with
                                                                                 R_acc =
                                                                                 1/(1-e\^-k×τ)
                                                                                 for t½=22d, Q3W

  ADA positive    2/54 (3.7%) ---    \~1.8% \[pembro   \~0.3% \[nivo ---         Low
  (Phase 1)       low titer,         label\]           label\]                   immunogenicity
                  non-neutralizing                                               consistent with
                                                                                 fully human IgG4
                                                                                 design
  --------------- ------------------ ----------------- ------------- ----------- ----------------

*Table 4.1. Phase 1 PK parameters (N=18 at 400 mg Q3W; NCA by WinNonlin
v8.3). PopPK parameters from pooled Phase 1/2a model (N=146; NONMEM
v7.5.1). Comparison to pembrolizumab \[1\] and nivolumab \[2\]
contextualized by dose difference; Cervimab 400 mg ≈ 5.7 mg/kg in 70 kg
patient vs pembrolizumab 200 mg ≈ 2.9 mg/kg. Cervimab CL (0.210 mL/h/kg)
falls within the established range for linear-clearance IgG4 mAbs
(0.154--0.275 mL/h/kg) \[6\].*

**5. Population PK Covariate Effects on Cervimab Exposure**

Covariate effects on AUC were estimated from the Phase 1/2a popPK model
and expressed as percent change in AUC relative to a typical 70 kg,
albumin 4.0 g/dL, ECOG 0 patient receiving 400 mg Q3W. The overall
approach follows the E-R modeling framework validated for pembrolizumab
^\[1\]^ and nivolumab ^\[3\]^.

  ------------------- ------------- ---------------- ----------------------------
  **Covariate (range  **Effect on   **Clinically     **Recommendation**
  tested)**           AUC₀₋₂₁d**    significant?**   

  Body weight: 40 kg  −22% to +18%  **No**           Within ±25% threshold; flat
  vs 120 kg                                          400 mg dose acceptable for
                                                     40--120 kg range; consistent
                                                     with pembrolizumab flat-dose
                                                     validation \[1,8\]

  Albumin: 2.5 g/dL   −18% to +14%  **No**           FcRn saturation effect; not
  vs 5.0 g/dL                                        clinically actionable;
                                                     monitor for hypoalbuminemia
                                                     as prognostic factor

  ECOG PS: 0 vs 1 vs  0 vs 1: −12%; **Borderline at  ECOG 2 patients have
  2                   0 vs 2: −24%  ECOG 2**         modestly lower AUC (higher
                                                     CL); clinical eligibility
                                                     criteria restrict to ECOG
                                                     0-1 in pivotal studies; no
                                                     dose adjustment for ECOG 1

  Renal function      \<5% change   **No**           No dose adjustment for renal
  (eGFR 15--90)       across range                   impairment; consistent with
                                                     MW 144 kDa precluding renal
                                                     filtration \[Yip 2020\]

  Mild/moderate       \<8% change   **No**           Hepatic metabolism not
  hepatic impairment  (estimated)                    applicable for mAbs; mild
                                                     ALT/AST elevation (irAE)
                                                     does not alter CL
                                                     meaningfully
  ------------------- ------------- ---------------- ----------------------------

**6. References**

**1.** Garg A et al. Pembrolizumab exposure-response analyses in
patients with advanced/metastatic melanoma, NSCLC, and HNSCC. Clin
Cancer Res. 2017;23(18):5399--5406.

**2.** Zhao Y et al. Population pharmacokinetics of nivolumab in
patients with solid tumors. J Clin Pharmacol. 2017;57(11):1359--1372.

**3.** Xu XS et al. Exposure-response analyses for nivolumab. Clin
Cancer Res. 2017;23(16):4793--4802.

**4.** Centanni M et al. Clinical pharmacokinetics and pharmacodynamics
of atezolizumab. Clin Pharmacokinet. 2019;58(5):543--556.

**5.** Chen W et al. Translate PK of PD-1/PD-L1 mAbs from cynomolgus
monkey to human. J Pharm Sci. 2024;113(9):2915--2921.

**6.** Betts A et al. Linear pharmacokinetic parameters for monoclonal
antibodies. MAbs. 2018;10(5):751--764.

**7.** Desnoyer A et al. PK/PD relationship of therapeutic mAbs: immune
checkpoint inhibitors. Eur J Cancer. 2020;128:119--128.

**8.** Li L et al. Flat dose regimen of toripalimab based on
model-informed drug development. Front Pharmacol. 2023;13:1069818.

*Prepared by: Clinical Pharmacology Group, Meridian Oncology Sciences \|
Document: MOS-PKT-2022-004 v3.0 \| NCA: Phoenix WinNonlin v8.3; PopPK:
NONMEM v7.5.1*
