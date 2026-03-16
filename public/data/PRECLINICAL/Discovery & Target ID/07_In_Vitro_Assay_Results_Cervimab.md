**MERIDIAN ONCOLOGY SCIENCES, INC.**

Discovery & Preclinical Research Division

**In Vitro Assay Results Report**

*Cervimab Pharmacological Activity: Validated In Vitro Assay Package*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-IVA-2022-005

  **Version:**           v2.5

  **Date:**              2022-06-15

  **Program:**           Cervimab (MOS-PD1-047) \| Anti-PD-1 mAb \|
                         IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer

  **Classification:**    CONFIDENTIAL --- IND Supporting Data (21 CFR
                         312.23)
  ---------------------- ---------------------------------------------

*This document contains confidential and proprietary information of
Meridian Oncology Sciences, Inc. Prepared in accordance with 21 CFR
312.23(a)(8), ICH S9, and applicable FDA guidance documents.*

**1. Introduction and Regulatory Context**

This report presents the complete in vitro assay results package for
Cervimab (MOS-PD1-047), compiled in support of IND 135-892 (21 CFR
312.23(a)(8) pharmacology and toxicology information). All assays were
conducted under qualified (not GLP unless specified) conditions with
appropriate controls, in compliance with the ICH M10 Bioanalytical
Method Validation framework (fit-for-purpose) and 21 CFR Part 11
electronic records requirements.

The assay battery encompasses: (1) Surface plasmon resonance (SPR)
binding kinetics, (2) AlphaLISA competitive binding, (3) Flow cytometry
receptor occupancy on primary human T cells and cell lines, (4) Mixed
lymphocyte reaction (MLR) functional assays, (5) Tumor cell co-culture
cytotoxicity, (6) Antibody-dependent cellular cytotoxicity (ADCC) and
complement-dependent cytotoxicity (CDC) Fc effector assays, (7) Tissue
cross-reactivity by IHC, and (8) In vitro immunogenicity risk screening.

**2. Assay Qualification Summary**

  ------------------- -------------- ---------- -------------- -------------------
  **Assay**           **Z-factor**   **CV% QC** **S/B ratio**  **Compliance
                                                               status**

  SPR (Biacore T200)  N/A (kinetic)  8.2%       N/A            ICH M10 Tier 2
                                                               validated; Biacore
                                                               calibration
                                                               verified

  AlphaLISA           0.72 ± 0.04    6.8%       12.4           Qualified (Z\>0.5);
  competition                                                  21 CFR Part 11
                                                               compliant ELN

  HTRF competition    0.68 ± 0.06    7.4%       9.8            Qualified (Z\>0.5);
                                                               corroborates
                                                               AlphaLISA

  Flow cytometry RO   N/A            9.6%       N/A            Qualified;
  assay                                                        instrument QC beads
                                                               daily; compensation
                                                               controls each run

  MLR (IFN-γ ELISA)   N/A            12.4%      6.2 (max       Qualified;
                      (cell-based)              stimulation)   pembrolizumab
                                                               reference control
                                                               each plate

  LDH cytotoxicity    0.74 ± 0.08    8.8%       8.4            Qualified; maximum
                                                               lysis control
                                                               (Triton X-100) each
                                                               run

  ADCC reporter       0.76 ± 0.06    7.2%       18.4           Qualified;
  (Jurkat-NFAT-luc)                                            trastuzumab
                                                               reference control
                                                               each run

  CDC (complement     0.68 ± 0.08    11.2%      6.4            Qualified;
  lysis)                                                       rituximab reference
                                                               included each run
  ------------------- -------------- ---------- -------------- -------------------

*Table 2.1 Assay qualification summary. Z-factor \> 0.5 across all
applicable assays. CV% reported for positive control samples across ≥6
independent runs. S/B = signal-to-background. N/A = assay format does
not use Z-factor or S/B as primary quality metric.*

**3. SPR Binding Kinetics --- Full Characterization**

**3.1 Human PD-1 Binding: Multi-Cycle Kinetics**

Full kinetic characterization of Cervimab binding to recombinant human
PD-1-ECD (Acro Biosystems PD1-H52H3; lot #PD1-2021-04) was performed by
multi-cycle kinetics (MCK) on Biacore T200. PD-1 captured on Series S
CM5 chips via anti-His antibody (Cytiva Cat. 28995056; \~200 RU
capture). Association 120s; dissociation 900s. Regeneration: 10 mM
Glycine pH 1.7, 30s × 2.

  ----------------- ---------- ------------ ---------- ---------- ---------- ---------
  **Concentration   **Rmax     **kon        **koff     **KD       **Chi²     **Fit**
  (nM)**            (RU)**     (M⁻¹s⁻¹)**   (s⁻¹)**    (nM)**     (RU²)**    

  0.156             18.2       4.82 × 10⁵   2.02 ×     0.42       0.12       Good
                                            10⁻⁴                             

  0.313             29.4       4.78 × 10⁵   2.01 ×     0.42       0.14       Good
                                            10⁻⁴                             

  0.625             46.8       4.84 × 10⁵   2.03 ×     0.42       0.16       Good
                                            10⁻⁴                             

  1.25              72.4       4.79 × 10⁵   1.99 ×     0.42       0.18       Good
                                            10⁻⁴                             

  2.5               98.6       4.81 × 10⁵   2.00 ×     0.42       0.21       Good
                                            10⁻⁴                             

  5.0               118.4      4.83 × 10⁵   2.02 ×     0.42       0.19       Good
                                            10⁻⁴                             

  **Mean ± SD**     ---        **4.81 ±     **2.01 ±   **0.42 ±   0.17 ±     ---
                               0.03 × 10⁵** 0.02 ×     0.002**    0.03       
                                            10⁻⁴**                           
  ----------------- ---------- ------------ ---------- ---------- ---------- ---------

*Table 3.1 Multi-cycle kinetics: Cervimab / human PD-1. 1:1 Langmuir
binding model fit (χ² \<1 RU² for all concentrations). Highly consistent
KD across all concentrations (CV \<1%) confirms simple 1:1 stoichiometry
with no evidence of heterogeneous binding or rebinding artifacts. t½ off
= ln(2)/koff = 57.5 min --- exceptionally slow off-rate supports
sustained receptor occupancy.*

**4. Flow Cytometry Receptor Occupancy Assay**

**4.1 Assay Protocol and Qualification**

Receptor occupancy (RO) was measured by a competitive saturation binding
assay. Principle: primary human PBMCs (buffy coat; CD8+ T cells
activated 72h with anti-CD3/CD28 beads + IL-2 100 U/mL to maximize PD-1
expression) incubated with cervimab (0.001--1000 nM, 1h 37°C), then
washed and stained with a non-competing, site-labeled PE-anti-PD-1
detection antibody (clone EH12.2H7; epitope distinct from cervimab
paratope, validated by competition SPR). Reduction in PE signal = RO.

  ------------ ------------ ------------ ------------ -------------------
  **Cervimab   **% RO on    **% RO on    **CD8+ PD-1  **Derived
  (nM)**       CD8+**       CD4+**       MFI (det.    PD/efficacy
                                         Ab)**        correlation**

  0 (vehicle)  0%           0%           4,842 ± 284  Baseline --- no
                                                      cervimab

  0.01         5% ± 1.8     3% ± 1.4     4,598 ± 262  Sub-threshold RO;
                                                      no functional
                                                      signal

  0.1          18% ± 3.2    12% ± 2.8    3,970 ± 228  First detectable
                                                      IFN-γ increase
                                                      (\~1.4-fold)

  0.5          48% ± 5.4    38% ± 4.8    2,516 ± 148  Approach functional
                                                      EC₅₀ (\~40% RO)

  1.0 (est.    64% ± 6.2    54% ± 5.6    1,742 ± 122  \~60% RO correlates
  EC₅₀ RO)                                            with near-maximal
                                                      functional response

  5.0          88% ± 4.8    78% ± 5.2    582 ± 48     Near-saturation;
                                                      functional plateau
                                                      reached

  10.0         95% ± 3.2    88% ± 4.1    242 ± 28     Saturation;
                                                      consistent with KD
                                                      (EC₅₀ RO ≈ KD in
                                                      cell-based assay)

  100.0        98% ± 2.1    94% ± 2.8    97 ± 14      Complete occupancy
  ------------ ------------ ------------ ------------ -------------------

*Table 4.1 Receptor occupancy dose-response. EC₅₀ for RO saturation ≈
1.0 nM (cell-based; accounts for receptor density and membrane
environment). This is approximately 2.4-fold higher than the SPR KD
(0.42 nM), consistent with avidity effects and membrane-embedded target.
MABEL = dose achieving \~20--30% RO = \~0.1--0.15 nM in vitro;
translates to \~0.8 mg/kg IV estimated starting dose in cynomolgus
monkey (allometric scaling).*

**5. MLR Functional Assay: Full Dose-Response**

  --------------- ----------- ----------- ----------- ----------- ---------- ---------
  **Cervimab      **IFN-γ     **IL-2      **IL-10     **TNF-α     **CD8+     **CD8+
  (µg/mL)**       (pg/mL)**   (pg/mL)**   (pg/mL)**   (pg/mL)**   Ki67+**    GzmB+**

  0 (isotype)     184 ± 28    62 ± 14     84 ± 18     124 ± 22    8.4% ± 1.2 12.4%

  0.001           196 ± 30    66 ± 14     86 ± 18     128 ± 24    8.8% ± 1.4 12.8%

  0.01            228 ± 34    74 ± 16     90 ± 20     148 ± 26    10.2% ±    14.4%
                                                                  1.6        

  0.1             286 ± 42    88 ± 18     96 ± 20     182 ± 32    12.8% ±    17.2%
                                                                  1.8        

  1.0 (\~EC₅₀)    482 ± 68    142 ± 28    108 ± 24    248 ± 38    18.4% ±    22.6%
                                                                  2.2        

  10.0 (RP2D ref) 698 ± 82    198 ± 38    124 ± 26    312 ± 48    24.2% ±    28.4%
                                                                  3.1        

  100.0           712 ± 88    204 ± 40    126 ± 28    318 ± 52    24.8% ±    29.2%
                                                                  3.2        

  Pembrolizumab   644 ± 76    184 ± 34    118 ± 24    288 ± 44    22.6% ±    26.8%
  10.0 (ref)                                                      2.8        
  --------------- ----------- ----------- ----------- ----------- ---------- ---------

*Table 5.1 MLR full dose-response (mean ± SD; n=6 donors, triplicate
wells per condition). EC₅₀ for IFN-γ induction: 0.85 nM (= 0.127 µg/mL
for 144 kDa IgG4). Maximum IFN-γ plateaus at \~700 pg/mL from 10 µg/mL
onward, consistent with saturable receptor-mediated mechanism. IL-10 is
mildly upregulated (consistent with restored Th1/regulatory balance).
Cervimab produces 1.08× more IFN-γ than pembrolizumab at equivalent
concentration.*

**6. ADCC and CDC Assays --- Fc Effector Function**

**6.1 ADCC Reporter Assay**

Antibody-dependent cellular cytotoxicity (ADCC) was assessed using the
Promega ADCC Reporter Bioassay (Jurkat-NFAT-luciferase effectors stably
expressing FcγRIIIa V158; PD-L1-overexpressing target cells
MC38-hPD-L1). Rationale: IgG4 is generally considered a
non-ADCC-effector isotype, but cervimab was tested to confirm the
absence of effector function that could deplete PD-1-expressing T cells.

  ----------------- ---------------- ------------ ------------------ --------------------
  **Antibody**      **Luminescence   **EC₅₀       **Max              **Interpretation**
                    (RLU)**          (µg/mL)**    fold-induction**   

  Cervimab 10 µg/mL 2,840 ± 284      \>100 (no    1.0× (no effect)   No ADCC activity ---
                                     ADCC)                           IgG4 as expected

  Isotype IgG4      2,812 ± 268      \>100        1.0×               Negative control ---
  S228P 10 µg/mL                                                     consistent with
                                                                     cervimab

  Trastuzumab 10    48,240 ± 4,828   0.08         17.0×              Positive control ---
  µg/mL (IgG1 pos                                                    expected IgG1 ADCC
  ctrl)                                                              activity

  Anti-PD-1 IgG1    22,480 ± 2,248   0.42         8.0×               IgG1 PD-1 antibody
  comparator 10                                                      kills PD-L1+ cells
  µg/mL                                                              --- safety concern
                                                                     not present with
                                                                     cervimab IgG4
  ----------------- ---------------- ------------ ------------------ --------------------

*Table 6.1 ADCC assay. Absence of ADCC activity for cervimab (IgG4
S228P) is a key safety advantage: IgG1 anti-PD-1 antibodies would
theoretically deplete PD-1-expressing T cells, the desired effector
population. The IgG4 isotype selection specifically addresses this
safety concern. Target cells are PD-L1-expressing; effectors are
FcγRIIIa-expressing Jurkat cells.*

**6.2 Complement-Dependent Cytotoxicity (CDC)**

CDC was assessed by LDH release assay (Promega CytoTox 96) using
PD-1-overexpressing Jurkat cells as targets and normal human serum (NHS;
20% v/v) as complement source. Purpose: confirm absence of CDC that
could deplete PD-1+ T cells.

  ---------------------- ------------ ------------- ---------------------
  **Condition**          **% Specific **vs          **Interpretation**
                         Lysis**      Control**     

  Cervimab 100 µg/mL +   3.2% ± 1.8   Not           No CDC --- expected
  NHS                                 significant   for IgG4 (poor C1q
                                                    binding)

  Isotype IgG4 100       2.8% ± 1.4   ---           Negative control ---
  µg/mL + NHS                                       consistent with
                                                    cervimab

  Rituximab 10 µg/mL +   68.4% ± 6.2  Positive      Expected CDC activity
  NHS (IgG1, pos ctrl)                control       for IgG1 on CD20+
                                                    Raji cells

  Cervimab +             2.4% ± 1.2   ---           No complement
  heat-inactivated NHS                              activity without
  (control)                                         active complement
  ---------------------- ------------ ------------- ---------------------

*Table 6.2 CDC assay. Cervimab shows no CDC activity --- consistent with
IgG4 isotype (minimal C1q binding) and S228P stabilization. Combined
with absence of ADCC (Table 6.1), the effector function profile of
cervimab is consistent with a pure PD-1 blocking mechanism without
direct T-cell depletion.*

**7. Tissue Cross-Reactivity IHC (Human and Cynomolgus)**

Tissue cross-reactivity (TCR-IHC) was performed to assess off-target
binding of cervimab to non-intended tissues. A panel of 37 human tissues
and 32 cynomolgus monkey tissues was tested (FFPE; 4 µm sections),
following FDA guidance on tissue cross-reactivity studies for antibody
therapeutics. Staining performed by Covance Laboratories under contract
(GLP-compliant IHC; anti-HRP secondary; DAB chromogen; hematoxylin
counterstain).

  ------------------- --------------- --------------- --------------- ------------------
  **Tissue**          **Human         **Human         **Cyno staining **Interpretation /
                      staining (1     staining (20    (20 µg/mL)**    Expected**
                      µg/mL)**        µg/mL)**                        

  Lymph node (cortex) +++             +++             +++             EXPECTED: PD-1+
                      (lymphocytes)   (lymphocytes)   (lymphocytes)   T-cells in
                                                                      germinal centers
                                                                      --- on-target

  Thymus              ++ (medullary   ++ (medullary)  ++ (medullary)  EXPECTED: PD-1
                      T-cells)                                        expressed on
                                                                      developing T-cells
                                                                      --- on-target

  Spleen (white pulp) ++ (T-cell      ++ (T-cell      ++ (T-cell      EXPECTED: PD-1+
                      zones)          zones)          zones)          T-cells in PALS
                                                                      --- on-target

  Tonsil              ++ (T-cell      ++ (T-cell      ++ (T-cell      EXPECTED:
                      areas)          areas)          areas)          on-target

  Bone marrow         \+ (scattered   \+ (scattered   \+ (scattered   EXPECTED: PD-1+
                      cells)          cells)          cells)          progenitor T-cells

  Brain (cortex,      Negative        Negative        Negative        No unexpected CNS
  cerebellum)                                                         binding

  Heart (myocardium)  Negative        Negative        Negative        No unexpected
                                                                      cardiac binding

  Liver (hepatocytes, Negative        Negative        Negative        No hepatocyte
  Kupffer)                                                            binding; Kupffer
                                                                      cells negative
                                                                      (not PD-1+)

  Kidney (cortex,     Negative        Negative        Negative        No unexpected
  medulla)                                                            renal binding
                                                                      (relevance:
                                                                      nephritis
                                                                      monitoring)

  Lung (alveoli,      \+ (scattered   \+ (scattered   \+ (scattered   EXPECTED:
  bronchi)            lymphocytes)    lymphocytes)    lymphocytes)    tissue-resident
                                                                      PD-1+ T-cells
                                                                      (relevance:
                                                                      pneumonitis risk)

  Colon (mucosa)      \+ (lamina      \+ (lamina      \+ (lamina      EXPECTED: mucosal
                      propria         propria)        propria)        TILs and lamina
                      lymphocytes)                                    propria T-cells
                                                                      (colitis risk
                                                                      explained)

  All other 25+       Negative        Negative        Negative        No unexpected
  tissues                                                             off-target binding
                                                                      in any other
                                                                      normal tissue
  ------------------- --------------- --------------- --------------- ------------------

*Table 7.1 Tissue cross-reactivity IHC panel (abbreviated; full report
GLP-compliant, available as MOS-TCR-2022-001). Staining in lymphoid
tissues is fully expected (PD-1 is physiologically expressed on T-cells
in these compartments). Absence of non-immune-cell binding in all other
tissues (brain, heart, liver, kidney, etc.) demonstrates high target
specificity. Lung and colon PD-1+ TIL staining mechanistically explains
the known class irAE risks (pneumonitis, colitis) and will inform the
clinical monitoring schedule.*

**8. In Vitro Immunogenicity Risk Assessment**

Cervimab was assessed for immunogenicity risk using the EpiMatrix T-cell
epitope prediction algorithm (EpiVax, Inc.) and an in vitro T-cell
activation assay (DC/T-cell co-stimulation with pre-processed peptides
covering the cervimab VH/VL sequences).

  ----------------- -------------- --------------- --------------------------
  **Assessment**    **Result**     **Threshold**   **Interpretation**

  EpiMatrix         −2.8           \<0 = low risk  Low predicted T-cell
  immunogenicity    (normalized)                   epitope content in VH;
  score (VH)                                       germline origin (IGHV3-33)
                                                   reduces neo-epitope risk

  EpiMatrix         −1.4           \<0 = low risk  Low predicted T-cell
  immunogenicity    (normalized)                   epitope content in VL;
  score (VL)                                       germline origin (IGKV1-39)
                                                   reduces risk

  Number of T-cell  0 VH / 0 VL    \<3 hot-spots = No predicted immunogenic
  epitope                          low             hot-spots in VH or VL CDR
  \'hot-spots\'                                    regions
  (EpiMatrix ≥1.64)                                

  In vitro          SI = 1.08 ±    SI \<2.5 = low  No T-cell stimulation
  DC/T-cell         0.12                           above background --- very
  stimulation assay                                low immunogenicity risk
  (SI vs control)                                  

  Fc-mediated       None predicted ---             S228P eliminates IgG4
  immunogenicity                                   Fab-arm exchange, reducing
  risk (IgG4 S228P)                                neoepitope formation from
                                                   hybrid antibodies
  ----------------- -------------- --------------- --------------------------

*Table 8.1 Immunogenicity risk assessment. Overall immunogenicity risk
for cervimab is LOW based on both computational and functional in vitro
assessments. This is consistent with the fully human IgG4 antibody
design using germline VH and VL frameworks. Expected ADA rate based on
class data (pembrolizumab \~1--2%; nivolumab \~0%) estimated at \<5% for
cervimab in Phase 1.*

**9. Summary Table: Complete In Vitro Assay Results**

  ------------------ -------------- -------------------- ----------------------------
  **Assay**          **Key Result** **Reference          **Regulatory Significance**
                                    Standard**           

  SPR KD (human      0.42 nM        Pembrolizumab 1.06   2.5× higher affinity than
  PD-1)                             nM                   approved agent; supports
                                                         differentiated clinical
                                                         activity; basis for MABEL
                                                         FIH dose

  PD-L1 competitive  0.68 nM        Pembrolizumab 1.48   Validates mechanism of
  block IC₅₀                        nM                   action for IND Section 3
                                                         (general investigational
                                                         plan)

  MLR EC₅₀ IFN-γ     0.85 nM        Pembrolizumab 2.14   Functional potency supports
                                    nM                   RP2D selection rationale for
                                                         Phase 2

  T-cell RO EC₅₀     \~1.0 nM       N/A                  MABEL calculation: 20--30%
                     (cell-based)                        RO = 0.1--0.15 nM → FIH dose
                                                         \~1 mg/kg IV

  Cyno PD-1 KD       0.61 nM        Cyno/human ratio     Supports cynomolgus monkey
                                    1.45                 as pharmacologically
                                                         relevant toxicology species
                                                         (ICH S6R1)

  ADCC (FcγRIIIa     No ADCC        IgG4 (expected)      Confirms absence of T-cell
  reporter)                                              depletion risk; critical
                                                         safety advantage of IgG4
                                                         isotype selection

  CDC                No CDC         IgG4 (expected)      Confirms absence of
                                                         complement-mediated T-cell
                                                         depletion

  Tissue             Expected       On-target only       No unexpected off-target
  cross-reactivity   (lymphoid)                          binding; informs monitoring
  IHC                                                    for known class irAEs
                                                         (colitis, pneumonitis)

  In vitro           Low risk (SI   SI \<2.5 = low       Supports low predicted
  immunogenicity     1.08)                               clinical ADA rate;
                                                         consistent with fully human
                                                         IgG4 design

  Patient tumor      6/6 dMMR       Biomarker-selected   Mechanistic rationale for
  digest ex vivo     respond; 0/2   response             dMMR/MSI-H patient selection
  activity           pMMR                                (IND biomarker strategy)
  ------------------ -------------- -------------------- ----------------------------

*Table 9.1 Integrated in vitro assay summary. This package constitutes
the primary pharmacological basis for the IND submission and supports
the proposed FIH starting dose (1 mg/kg IV Q3W), species selection
(cynomolgus monkey), and biomarker strategy (dMMR/MSI-H) per 21 CFR
312.23(a)(8).*

**10. Regulatory Compliance and Data Integrity**

All in vitro studies were conducted under the following quality
framework:

- 21 CFR Part 11: Electronic records and electronic signatures --- all
  data captured in Dotmatics ELN (Version 11.2) with full audit trail;
  instrument data files archived with read-only access protection.

- ICH M10 Bioanalytical Method Validation (2022): Fit-for-purpose
  qualification applied to all assays; critical assays (SPR, MLR)
  performed at ICH M10 Tier 2 level.

- FDA Guidance on In Vitro Companion Diagnostic Tests (2014): TCR-IHC
  conducted at GLP-qualified CRO (Covance Laboratories) in compliance
  with FDA tissue cross-reactivity study expectations.

- ARRIVE 2.0: Not applicable (in vitro; no animals used in this assay
  package). Animal studies are reported separately per ARRIVE 2.0 in
  MOS-TVR-2021-001.

- OECD GLP Principles: Not applicable to exploratory in vitro studies;
  GLP applies to pivotal toxicology studies (reported in
  MOS-NOAEL-2022-001).

*Prepared by: Pharmacology and In Vitro Sciences Group, Meridian
Oncology Sciences \| Document: MOS-IVA-2022-005 v2.5 \| Reviewed by:
Head of Discovery Pharmacology \| Approved by: VP Regulatory Affairs*
