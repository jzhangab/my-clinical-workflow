**MERIDIAN ONCOLOGY SCIENCES, INC.**

Nonclinical Safety & Pharmacokinetics Division

**Metabolite Profiling and Protein Binding Data Report**

*Cervimab --- Catabolic Profiling, FcRn Binding Kinetics & Plasma
Protein Characterization*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-MPBR-2022-008

  **Version:**           v1.8

  **Date:**              2022-08-30

  **Study Drug:**        Cervimab (MOS-PD1-047) \| Fully Human IgG4
                         S228P Anti-PD-1 mAb

  **IND:**               IND 135-892

  **GLP Status:**        IND Supporting --- Non-GLP \| ICH M10; ICH
                         Q6B; ICH S6(R1) \| 21 CFR 312.23(a)(8)

  **Regulatory Basis:**  21 CFR 312.23(a)(8); ICH S9; ICH S6(R1); ICH
                         S3A; 21 CFR 58 (GLP)
  ---------------------- ---------------------------------------------

*CONFIDENTIAL --- This document contains proprietary preclinical safety
information supporting IND 135-892. Distribution restricted to the IND
working group and regulatory authorities. Prepared per FDA GLP
regulations (21 CFR Part 58) and ICH M4S CTD format.*

**1. Introduction: Protein Biologic Metabolite Context**

Cervimab, as a full-length human IgG4 monoclonal antibody, does not
generate conventional small-molecule drug metabolites via phase I/II
biotransformation. This report covers: (1) catabolic peptide profiling
by LC-MS/MS to characterize proteolytic degradation products, (2) FcRn
binding kinetics (the primary protein interaction governing half-life),
(3) plasma protein binding characterization, (4) serum albumin and
immunoglobulin interaction assessment, and (5) post-translational
modification (glycan) profiling. These data are required for ICH Q6B
characterization and support IND Module 4 (nonclinical study reports)
and IND Module 3 (CMC characterization).

**2. Metabolite (Catabolite) Profiling by LC-MS/MS**

**2.1 In Vitro Lysosomal Catabolism Study**

Cervimab (1 mg/mL) was incubated with purified human lysosomal extracts
(lysosome preparation from THP-1 macrophages; 37°C, pH 5.5, 1% acetic
acid activation; n=3 biological replicates) for 0, 2, 6, 12, and 24
hours. Catabolites were characterized by nano-LC-MS/MS (Thermo Orbitrap
Eclipse; HCD fragmentation; Sequest HT search against Cervimab sequence
database).

  ------------------- ----------- -------------- --------- ------------- ------------ -----------------
  **Catabolite /      **Chain**   **Residues**   **MW      **Detection   **%          **Source site**
  Fragment**                                     (Da)**    (h)**         Intensity    
                                                                         (24h)**      

  Intact IgG4         HC+LC       Full           144,284   0--2h only    100% → 0%    ---
  (parent)                                                                            

  Fab fragment        HC+LC       1--220 HC /    48,420    2--12h        28%          Hinge region
                                  full LC                                             cleavage
                                                                                      (Cathepsin D, B)

  Fc fragment         HC          221--447       24,840    2--24h        12%          Hinge cleavage;
                                                                                      FcRn-bound Fc
                                                                                      more stable

  CDR-H3-containing   VH          93--106        1,688     6--24h        4%           Cathepsin B
  peptide                                                                             cleavage C-term
  (Ala93--Tyr106)                                                                     to aromatic AA

  CDR-L3-containing   VL          89--97         1,042     6--24h        3%           Non-specific
  peptide                                                                             endoproteolysis
  (Gln89--Thr97)                                                                      

  CH2 glycopeptide    HC          295--305       3,240 +   6--24h        8%           Complex
  (Asn297 + N-glycan)                            glycan                               biantennary
                                                                                      N-glycan;
                                                                                      released intact
                                                                                      then
                                                                                      deglycosylated

  Free amino acids    All         Single AA      75--186   6--24h        Dominant at  Terminal
  (pool)                                                                 24h          proteolysis;
                                                                                      endogenous AA
                                                                                      pool re-entry

  Novel unique        ---         ---            ---       ---           **NONE       No unexpected
  catabolites (no                                                        DETECTED**   catabolites; no
  reference)                                                                          reactive
                                                                                      fragments
                                                                                      identified
  ------------------- ----------- -------------- --------- ------------- ------------ -----------------

*Table 2.1 Lysosomal catabolite profile at 24h. All catabolites are
expected fragments of the Cervimab primary sequence --- no novel
chemical entities, reactive intermediates, or unexpected cleavage
products detected. LC-MS/MS sequence coverage: 92% (heavy chain), 96%
(light chain). All catabolites confirmed by de novo sequencing.*

**2.2 In Vivo Catabolite Assessment --- Cynomolgus Monkey Urine**

Urine samples from the 13-week repeat-dose GLP study (Day 85, all dose
groups, n=5/sex/group) were analyzed for Cervimab-derived catabolites by
LC-MS/MS (same platform as in vitro analysis). Bioanalytical assay:
anti-Cervimab capture ELISA (LLOQ 0.5 ng/mL for intact IgG4); LC-MS/MS
for peptide catabolites (LLOQ 1 ng/mL).

  ---------------------- ------------- ------------------- ---------------------
  **Analyte**            **Urine       **Concentration**   **Interpretation**
                         detection**                       

  Intact Cervimab IgG4   **Not         \< LLOQ (0.5 ng/mL) Confirms no intact
  (ELISA)                detected**                        mAb renal excretion
                                                           (MW 144 kDa; above
                                                           GFR threshold)

  Cervimab Fab fragments **Not         \< LLOQ (0.5 ng/mL) Fab MW \~48 kDa;
  (reduced ELISA)        detected**                        borderline GFR
                                                           threshold; confirmed
                                                           absent in urine

  CDR-derived peptides   **Not         \< LLOQ (1 ng/mL)   Cervimab-specific
  (LC-MS/MS)             detected**                        peptides undetectable
                                                           in urine; catabolism
                                                           complete

  Free amino acids       Detected      Endogenous levels ± Cervimab-derived
  (LC-MS/MS, ¹³C-labeled               5% vs vehicle       ¹³C-AA contribution
  AA tracing)                                              negligible vs
                                                           endogenous pool at
                                                           therapeutic doses;
                                                           confirms
                                                           quantitatively minor
                                                           contribution to amino
                                                           acid excretion
  ---------------------- ------------- ------------------- ---------------------

**3. FcRn Binding Kinetics --- Primary Protein Interaction Governing
Half-Life**

**3.1 pH-Dependent FcRn Binding (SPR)**

FcRn binding to Cervimab Fc was characterized by SPR (Biacore T200)
using recombinant human FcRn-β₂m heterodimer (Acro Biosystems;
His-tagged; captured on NiNTA chip). Binding measured at pH 6.0
(endosomal, high affinity) and pH 7.4 (physiological, low affinity).
This pH-dependent mechanism is the basis of FcRn-mediated half-life
extension.

  --------------- ------------- ---------- ------------ --------- -----------------
  **Antibody**    **pH**        **KD       **kon        **koff    **Biological
                                (nM)**     (M⁻¹s⁻¹)**   (s⁻¹)**   Significance**

  Cervimab        6.0           8.4 ± 0.8  1.2 × 10⁵    1.0 ×     High-affinity
                  (endosomal)                           10⁻³      FcRn binding in
                                                                  endosome →
                                                                  efficient
                                                                  recycling → long
                                                                  t½

  Cervimab        7.4 (plasma)  \>10,000   N.D.         N.D.      pH 7.4 release at
                                (no                               cell surface →
                                binding)                          Cervimab released
                                                                  to circulation →
                                                                  available for
                                                                  PD-1 binding

  Pembrolizumab   6.0           9.2 ± 1.0  1.1 × 10⁵    1.0 ×     Consistent
  (IgG4                                                 10⁻³      class-level FcRn
  reference)                                                      binding; Cervimab
                                                                  FcRn KD ratio vs
                                                                  pembrolizumab =
                                                                  0.91 (slightly
                                                                  higher FcRn
                                                                  affinity)

  Endogenous      6.0           \~150 nM   0.8 × 10⁵    1.2 ×     Cervimab FcRn
  human IgG                                             10⁻²      affinity \~18×
  (reference)                                                     higher than
                                                                  endogenous IgG;
                                                                  supports \~21-day
                                                                  t½ vs shorter t½
                                                                  of non-FcRn-bound
                                                                  proteins

  Cervimab Fc     6.0           7.8 ± 0.8  1.3 × 10⁵    1.0 ×     S228P mutation
  S228P (isolated                                       10⁻³      does not alter
  Fc fragment)                                                    FcRn binding
                                                                  (mutation in
                                                                  hinge, not Fc
                                                                  region); confirms
                                                                  IgG4 S228P
                                                                  engineering
                                                                  maintains normal
                                                                  t½
  --------------- ------------- ---------- ------------ --------- -----------------

*SPR conditions: pH 6.0 buffer (50 mM MES, 150 mM NaCl, 0.05% Tween-20);
pH 7.4 buffer (PBS, 0.05% Tween-20). N.D. = not determinable (no
measurable binding at pH 7.4, confirming complete pH-dependence). This
switchlike pH-dependence is the mechanistic basis of FcRn recycling and
predicts the \~20-day observed t½.*

**3.2 Cynomolgus FcRn vs Human FcRn Binding Comparison**

  ----------------- ------------ ------------ --------------------------
  **FcRn Source**   **KD (pH     **koff       **Translational
                    6.0, nM)**   (s⁻¹)**      Significance**

  Human FcRn-β₂m    8.4 ± 0.8    1.0 × 10⁻³   Primary target; will
                                              determine clinical t½

  Cynomolgus        9.6 ± 1.0    1.1 × 10⁻³   14% lower affinity for
  FcRn-β₂m                                    cyno FcRn; explains
                                              slightly shorter t½ in
                                              cynomolgus (\~19--21d) vs
                                              predicted human
                                              (\~20--23d)

  Human/Cyno FcRn   0.88 (human  ---          Human t½ predicted
  ratio             tighter)                  slightly longer than cyno:
                                              0.88× higher FcRn affinity
                                              → \~15% longer t½ in
                                              human. Predicted human t½
                                              = cyno t½ × 1/0.88 =
                                              \~22--24 days.
  ----------------- ------------ ------------ --------------------------

**4. Plasma Protein Binding**

**4.1 General Framework for mAb Protein Binding**

Unlike small-molecule drugs where plasma protein binding (PPB) to
albumin or α₁-acid glycoprotein reduces free fraction and affects
efficacy, mAb \'protein binding\' is a distinct concept. For Cervimab,
the relevant protein interactions are:

- FcRn binding (endosomal, pH 6.0): recycling mechanism --- covered in
  Section 3

- Target engagement (PD-1 receptor): primary pharmacological interaction

- Non-specific serum protein interactions: assessed by standard PPB
  methods to evaluate risk of displacement or reduced free fraction

- Neonatal Fc receptor on mucosal tissues: relevant for subcutaneous
  formulation (not applicable to IV)

**4.2 Non-Specific Plasma Protein Binding --- Equilibrium Dialysis**

Standard equilibrium dialysis (RED assay; Thermo Scientific) was used to
assess non-specific binding of Cervimab to plasma proteins in human and
cynomolgus plasma. Cervimab at 1, 10, and 100 µg/mL in plasma
equilibrated for 4h at 37°C; buffer compartment: PBS pH 7.4. Cervimab
quantified by anti-PD-1 Fab-specific sandwich ELISA (LLOQ 0.5 ng/mL).

  ------------ -------------- -------------- ---------- ---------- --------------------
  **Species /  **\[Plasma\]   **\[Buffer\]   **%        **%        **Interpretation**
  Conc.        (µg/mL)**      (µg/mL)**      Unbound    Bound**    
  (µg/mL)**                                  (fu)**                

  Human plasma 1.0 ± 0.08     0.98 ± 0.08    98.0 ±     2.0 ± 0.8% Essentially unbound
  --- 1 µg/mL                                0.8%                  in plasma --- as
                                                                   expected for IgG4

  Human plasma 10.0 ± 0.4     9.84 ± 0.4     98.4 ±     1.6 ± 0.5% Consistent with 1
  --- 10 µg/mL                               0.5%                  µg/mL; no
                                                                   concentration
                                                                   dependence

  Human plasma 100 ± 6        98.2 ± 5.8     98.2 ±     1.8 ± 0.6% No saturation of
  --- 100                                    0.6%                  non-specific binding
  µg/mL                                                            across therapeutic
                                                                   range

  Cyno plasma  10.0 ± 0.5     9.80 ± 0.5     98.0 ±     2.0 ± 0.5% Comparable to human;
  --- 10 µg/mL                               0.5%                  supports cyno as
                                                                   relevant preclinical
                                                                   species for PK
  ------------ -------------- -------------- ---------- ---------- --------------------

*fu \~98% confirms Cervimab circulates essentially as free drug in
plasma at all concentrations tested (1--100 µg/mL, spanning full
therapeutic-to-toxic range). This is expected for IgG4: the size (\~144
kDa) and hydrophilicity preclude non-specific HSA or α₁-AGP binding that
affects small molecules. Clinical PK analysis can use total plasma
Cervimab concentration as a proxy for free drug concentration.*

**4.3 Albumin and IgG Competitive Binding Assessment**

Since Cervimab and human serum albumin (HSA) share the FcRn recycling
receptor (FcRn binds IgG at the CH2-CH3 junction and albumin at a
distinct site on CH3), competition between endogenous IgG (\~10 g/L in
serum) and Cervimab for FcRn was assessed by SPR competitive binding
experiments at pH 6.0.

  ------------------- ------------- --------------- ------------------------
  **Competitive       **Cervimab    **Impact on t½  **Clinical
  Scenario**          FcRn          (predicted)**   Significance**
                      Binding**                     

  Cervimab alone (no  KD 8.4 nM at  \~22 days       Reference
  endogenous IgG      pH 6.0        (baseline)      
  competition)                                      

  Cervimab +          KD 8.6 ± 0.4  \~21--22 days   Negligible competition
  endogenous IgG (10  nM (+2%       (−2%)           at therapeutic cervimab
  g/L, physiological) shift)                        doses (\<5 mg/kg).
                                                    Endogenous IgG at 10 g/L
                                                    vastly exceeds Cmax but
                                                    binds different FcRn
                                                    sites; functional
                                                    saturation only at
                                                    IVIG-like doses (\>200
                                                    mg/kg). No dose
                                                    adjustment needed.

  Cervimab + HSA (4   KD 8.4 ± 0.5  No change       HSA binds FcRn at a
  g/dL,               nM                            distinct site (domain
  physiological)      (unchanged)                   III loop); no
                                                    competition with IgG4 Fc
                                                    binding at CH2-CH3
                                                    interface. No
                                                    pharmacokinetic
                                                    interaction predicted.
  ------------------- ------------- --------------- ------------------------

**5. N-Glycan Profiling (Post-Translational Modifications)**

**5.1 Fc Glycan Characterization (Asn297)**

N-glycan profiling was performed by PNGase F release + HILIC-FLD
(hydrophilic interaction liquid chromatography with fluorescence
detection; 2-AB labeling; Waters ACQUITY UPLC H-class) and LC-MS
confirmation (Orbitrap Exploris 480). Cervimab expressed in CHO-K1
cells, Lot C21-028 (representative GLP tox batch).

  ------------------- --------------- ------------ --------------------------
  **N-Glycan          **Glycan Type** **Relative   **Regulatory
  Species**                           %**          Significance**

  G0F (afucosylated   Complex         38.4 ± 2.2%  Major Fc glycoform; no
  core + fucose)      biantennary                  impact on FcRn binding;
                                                   IgG4 does not mediate ADCC
                                                   so afucosylation not
                                                   relevant

  G1F (G0F + 1        Complex         28.6 ± 1.8%  Second-largest species;
  galactose)          biantennary                  galactose improves C1q
                                                   binding (minor for IgG4)

  G2F (G0F + 2        Complex         14.2 ± 1.4%  Normal complex glycoform
  galactose)          biantennary                  for CHO-expressed IgG4

  G0                  Complex         8.4 ± 1.0%   Afucosylated: higher
  (non-fucosylated)   biantennary                  FcγRIIIa affinity.
                                                   However, IgG4 S228P
                                                   already minimizes Fc
                                                   effector function; ADCC
                                                   not a safety concern.

  Man5 (high mannose) High mannose    4.8 ± 0.8%   High-mannose species may
                                                   have faster clearance via
                                                   mannose receptor. Within
                                                   acceptable range; no
                                                   impact on clinical PK at
                                                   \<5%.

  Sialylated species  Sialylated      3.6 ± 0.6%   Minor; sialylation
  (G2FS1, G2FS2)      complex                      associated with
                                                   anti-inflammatory Fc
                                                   activity. Low level is
                                                   consistent with CHO
                                                   expression (CHO cells have
                                                   low sialyltransferase
                                                   activity).

  Total fucosylated   Complex         81.2 ± 2.4%  Normal CHO glycosylation
  species             (fucosylated)                profile. Acceptance
                                                   criterion: ≥70%
                                                   fucosylated (per ICH Q6B
                                                   Lot Release).
  ------------------- --------------- ------------ --------------------------

*Table 5.1 N-glycan profiling. Batch-to-batch consistency across 3
development lots: CV \<8% for major glycoforms. Glycan profile is within
the established characterization range for CHO-expressed IgG4
therapeutics. No unexpected glycoforms detected. Sialic acid content:
1.8 ± 0.4 mol/mol IgG4 (within specification).*

**5.2 Other Post-Translational Modifications**

  ------------------- -------------- ------------- --------------------------
  **PTM /             **Detection    **Level /     **Regulatory Assessment**
  Modification**      Method**       Result**      

  N-terminal          LC-MS/MS       72 ± 4% (pGlu Common N-terminal
  pyroglutamate       (intact mass)  form)         modification for IgG4 with
  (pGlu) conversion                                Glu-1 residue; no
  (VH)                                             immunogenicity, potency,
                                                   or safety concern.
                                                   Specified in Q6B
                                                   characterization.

  C-terminal Lys      LC-MS/MS       88 ± 4%       C-terminal Lys removal by
  clipping (heavy     (reduced)      Lys-clipped   carboxypeptidase B in CHO
  chain)                                           culture is common; no
                                                   impact on potency, FcRn
                                                   binding, or PK. Specified
                                                   in ICH Q6B.

  Deamidation (Asn →  LC-MS/MS       \<2% at Asn55 Low-level deamidation in
  Asp/isoAsp)         (peptide map)  HC; \<1%      CDR-H2 (Asn55, minor
                                     total         site); acceptably low; no
                                                   impact on potency or
                                                   stability within shelf
                                                   life. Within Q6B
                                                   specification.

  Oxidation (Met →    LC-MS/MS       \<3% at       Met oxidation in Fc at
  Met-sulfoxide)      (peptide map)  Met252, \<1%  M252/M428: minor levels;
                                     at Met428     stress conditions (forced
                                                   oxidation) show ≤8%. FcRn
                                                   binding not affected at
                                                   these oxidation levels
                                                   (\<10% oxidation per ICH
                                                   Q6B threshold).

  Disulfide bonds     Non-reducing   All correct;  All 16 disulfide bonds
  (all 16 expected    CE-SDS +       0% free thiol correct (intrachain: VH,
  intrachain +        LC-MS/MS                     VL, CH1, CH2, CH3;
  interchain)                                      interchain: H-L, H-H
                                                   hinge + S228P). S228P
                                                   stabilizes hinge
                                                   disulfide. Confirms
                                                   structural integrity.
  ------------------- -------------- ------------- --------------------------

**6. Summary and Regulatory Conclusions**

The metabolite, FcRn binding, plasma protein binding, and PTM
characterization data collectively demonstrate:

- No novel small-molecule metabolites or reactive catabolites ---
  Cervimab catabolism yields only amino acids and expected peptide
  fragments, all endogenous substances. No metabolite safety assessment
  required per ICH S9 and ICH S6(R1).

- Robust FcRn recycling mechanism --- pH-dependent FcRn binding (KD 8.4
  nM at pH 6.0; no binding at pH 7.4) predicts \~21-day clinical
  half-life, consistent with Q3W dosing interval.

- Essentially complete plasma free fraction (fu \~98%) --- total plasma
  Cervimab is a valid surrogate for free drug; no protein displacement
  DDI possible. No small-molecule DDI via CYP or transporter mechanisms.

- Defined PTM profile meeting ICH Q6B characterization requirements ---
  N-glycan profile, deamidation, oxidation, and disulfide integrity all
  within specification.

- Cynomolgus monkey is a validated PK model --- FcRn binding KD ratio
  (cyno/human = 1.14) accurately predicts the \~15% shorter cyno t½ vs
  human, supporting PK bridging from nonclinical to clinical.

*Prepared by: ADME & Biophysics Group, Meridian Oncology Sciences \|
Document: MOS-MPBR-2022-008 v1.8 \| Analytical work conducted at
Meridian laboratories and under contract at Covance Bioanalytical
Services, Harrogate, UK (ICH M10 qualified bioanalytical facility).*
