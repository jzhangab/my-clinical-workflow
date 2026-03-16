**MERIDIAN ONCOLOGY SCIENCES, INC.**

Discovery & Preclinical Research Division

**Compound Activity Data Report**

*Cervimab (MOS-PD1-047) --- Comprehensive Pharmacological Profiling*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-CAD-2021-002

  **Version:**           v3.0

  **Date:**              2021-12-10

  **Program:**           Cervimab (MOS-PD1-047) \| Anti-PD-1 mAb \|
                         IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer

  **Classification:**    CONFIDENTIAL --- IND Supporting Data
  ---------------------- ---------------------------------------------

*This document contains confidential and proprietary information of
Meridian Oncology Sciences, Inc. Prepared in accordance with 21 CFR
312.23(a)(8), ICH S9, and applicable FDA guidance documents.*

**1. Study Scope**

This report presents comprehensive pharmacological activity data for
Cervimab (MOS-PD1-047), a fully human IgG4 anti-PD-1 monoclonal antibody
with S228P Fc stabilization. Studies encompass primary pharmacology
(receptor binding, functional blockade, T-cell reactivation),
selectivity profiling, secondary pharmacology (Fc effector function,
target cell killing), and ex vivo pharmacology in patient-derived
specimens. Data were generated under IND-enabling qualification
protocols and are compliant with 21 CFR 312.23(a)(8).

**2. Primary Pharmacology**

**2.1 Receptor Binding and Kinetics**

  ----------------- ---------- ------------ --------- --------- ------------
  **Target /        **KD       **kon        **koff    **t½ off  **Method**
  Conditions**      (nM)**     (M⁻¹s⁻¹)**   (s⁻¹)**   (min)**   

  Human PD-1-ECD    0.42       4.8 × 10⁵    2.0 ×     57.8      SPR (Biacore
  (25°C)                                    10⁻⁴                T200)

  Human PD-1-ECD    0.68       3.9 × 10⁵    2.7 ×     42.8      SPR (Biacore
  (37°C)                                    10⁻⁴                T200)

  Human PD-1 on     0.54       N.D.         N.D.      N.D.      Flow
  Jurkat-PD1 cells                                              cytometry
  (37°C)                                                        BLI

  Cyno PD-1-ECD     0.61       3.9 × 10⁵    2.4 ×     48.1      SPR (Biacore
  (25°C)                                    10⁻⁴                T200)

  Mouse PD-1-ECD    \>10,000   N.D.         N.D.      N.D.      SPR (no
  (25°C)                                                        binding
                                                                detected)

  Human PD-L1       \>50,000   N.D.         N.D.      N.D.      SPR (no
  (off-target                                                   binding)
  binding test)                                                 

  Human PD-L2       \>50,000   N.D.         N.D.      N.D.      SPR (no
  (off-target                                                   binding)
  binding test)                                                 
  ----------------- ---------- ------------ --------- --------- ------------

*Table 2.1 Full binding kinetics. Cervimab binds human and cyno PD-1
with high affinity; no detectable binding to PD-L1, PD-L2, or mouse
PD-1. Long off-rate half-life (t½ off 57.8 min at 25°C) reflects stable
complex formation for durable receptor occupancy.*

**2.2 PD-1/PD-L1 Blockade: Competitive ELISA Dose-Response**

Six-point dose-response (0.001--100 nM Cervimab) in competitive ELISA:
biotinylated hPD-1-ECD (10 nM) vs His-tagged hPD-L1-ECD (10 nM);
detection by anti-His-HRP. Four-parameter logistic (4PL) curve fitting
(GraphPad Prism 9). n=4 independent experiments.

  ------------------- ----------- ----------- ----------- --------------
  **Antibody**        **IC₅₀      **IC₅₀      **Hill      **Max block
                      PD-L1       PD-L2       slope**     (%)**
                      (nM)**      (nM)**                  

  Cervimab            0.68 ± 0.08 \>1000      1.14 ± 0.08 97.8 ± 1.2%

  Pembrolizumab       1.48 ± 0.12 \>1000      1.08 ± 0.06 96.4 ± 1.8%
  (reference)                                             

  Nivolumab           1.68 ± 0.18 \>1000      1.12 ± 0.09 95.8 ± 2.1%
  (reference)                                             

  Isotype IgG4 S228P  \>10,000    \>10,000    N.A.        \<2%
  (negative ctrl)                                         
  ------------------- ----------- ----------- ----------- --------------

*Table 2.2 PD-L1/PD-L2 competitive blockade. Cervimab shows 2.2-fold
lower IC₅₀ for PD-L1 blockade vs pembrolizumab. Complete selectivity for
PD-L1 over PD-L2 across all concentrations.*

**2.3 T-Cell Reactivation: Primary Human PBMCs (Multi-Donor)**

  ------------ ------------ ------------ ------------ ------------ --------
  **Donor**    **HLA-A      **EC₅₀ IFN-γ **Max IFN-γ  **EC₅₀ IL-2  **PD-1
               allele**     (nM)**       (pg/mL)**    (nM)**       exp.**

  Donor 1 (F,  A\*02:01 /   0.72         742 ± 84     0.98         High
  28y)         A\*24:02                                            

  Donor 2 (M,  A\*01:01 /   0.88         612 ± 68     1.24         High
  34y)         A\*03:01                                            

  Donor 3 (F,  A\*02:01 /   0.92         584 ± 72     1.18         Med
  45y)         A\*11:01                                            

  Donor 4 (M,  A\*24:02 /   0.78         698 ± 92     1.04         High
  52y)         A\*68:01                                            

  Donor 5 (F,  A\*01:01 /   0.96         556 ± 62     1.28         Med
  61y)         A\*02:01                                            

  Donor 6 (M,  A\*03:01 /   0.86         622 ± 78     1.12         High
  38y)         A\*26:01                                            

  **Mean ±     ---          **0.85 ±     **636 ± 66** **1.14 ±     ---
  SD**                      0.09**                    0.11**       
  ------------ ------------ ------------ ------------ ------------ --------

*Table 2.3 Multi-donor T-cell reactivation. Consistent activity across 6
HLA-diverse donors; inter-donor variability in EC₅₀ of 0.72--0.96 nM
(13% CV) --- excellent consistency across genetic backgrounds. PD-1
expression on CD8+ T cells by flow cytometry: High = \>60% PD-1+; Med =
30--60%.*

**3. Selectivity Profiling**

**3.1 Broad Off-Target Binding Panel**

Cervimab (10 µg/mL) was tested against a panel of 48 human immune
targets (Fc receptor panel, checkpoint receptors, co-stimulatory
molecules) by SPR and/or ELISA. No binding was detected (threshold: ≥10%
signal over negative control) to any off-target, with the exceptions
noted below.

  ------------------- ------------ ---------------- ------------------------
  **Target**          **% Signal   **Conclusion**   **Regulatory
                      vs control**                  Significance**

  PD-L1 (CD274)       \<2%         No binding       Confirms mechanism is
                                                    solely via PD-1 receptor

  PD-L2 (CD273)       \<2%         No binding       Preserves PD-L2/RGMb
                                                    tolerogenic signaling

  CTLA-4 (CD152)      \<2%         No binding       No CTLA-4 off-target
                                                    effects expected

  TIM-3 (HAVCR2)      \<2%         No binding       No cross-reactivity with
                                                    co-expressed checkpoint

  LAG-3               \<2%         No binding       No cross-reactivity with
                                                    LAG-3

  FcγRIIIa (CD16a)    8%           No binding       IgG4 S228P minimizes Fc
                                   (below           effector function ---
                                   threshold)       expected

  FcRn                Binding      Expected (IgG4   Normal IgG4 recycling;
                      confirmed    recycling)       supports \~21-day
                                                    predicted t½

  CD3, CD4, CD8,      \<2% each    No binding       No non-specific immune
  CD20, CD28                                        cell binding
  ------------------- ------------ ---------------- ------------------------

*Table 3.1 Off-target binding panel. Cervimab demonstrates excellent
selectivity with no off-target binding detected across 47/48 tested
targets. FcRn binding confirmed as expected for IgG4 (essential for
Fc-mediated half-life extension).*

**4. Ex Vivo Patient Tumor-Derived Activity**

**4.1 Patient-Derived Tumor Digest Co-Culture**

Fresh tumor tissue from dMMR/MSI-H mCRC resections (n=8 patient
specimens; MOS-IRB-2020-012) was enzymatically dissociated (Collagenase
IV 1 mg/mL + DNase I 40 µg/mL; 37°C, 30 min) to generate single-cell
suspensions containing TILs and tumor cells. Cells were plated at 5 ×
10⁵/well and treated with cervimab or controls for 96h.

  ------------- ----------- ------------ ----------- ------------ --------------
  **Patient**   **dMMR      **Cervimab   **Isotype   **Fold       **Response**
                status**    (10 µg/mL)   control     increase**   
                            IFN-γ        IFN-γ**                  
                            (pg/mL)**                             

  CRC-001       dMMR        884 ± 92     142 ± 18    6.2×         Resp.
                (MLH1-)                                           

  CRC-002       dMMR        724 ± 84     124 ± 14    5.8×         Resp.
                (MSH2-)                                           

  CRC-003       dMMR        612 ± 68     112 ± 16    5.5×         Resp.
                (MSH6-)                                           

  CRC-004       dMMR        524 ± 72     98 ± 12     5.3×         Resp.
                (MLH1-)                                           

  CRC-005       pMMR        148 ± 22     132 ± 18    1.1×         Non-resp.

  CRC-006       pMMR        164 ± 28     148 ± 22    1.1×         Non-resp.

  CRC-007       dMMR        482 ± 64     88 ± 12     5.5×         Resp.
                (PMS2-)                                           

  CRC-008       dMMR        398 ± 52     72 ± 10     5.5×         Resp.
                (MLH1-)                                           
  ------------- ----------- ------------ ----------- ------------ --------------

*Table 4.1 Patient tumor digest ex vivo activity. All 6 dMMR specimens
show ≥5.3-fold IFN-γ induction (Responders); both pMMR specimens show
\<1.2-fold induction (Non-responders). Confirms biomarker-selective
activity supporting dMMR/MSI-H patient selection strategy.*

**5. Pharmacodynamic Biomarker Activity**

Receptor occupancy (RO) on CD8+ T cells was quantified by competitive
flow cytometry using a non-competing anti-PD-1 antibody (clone EH12.2H7)
in samples from the MLR assay treated with increasing cervimab
concentrations.

  ------------ ------------ ------------ ------------ -------------------
  **Cervimab   **% PD-1 RO  **% PD-1 RO  **IFN-γ      **IFN-γ EC₅₀ RO
  conc. (nM)** (CD8+)**     (CD4+)**     (pg/mL)**    estimate**

  0 (vehicle)  0%           0%           182 ± 24     ---

  0.1          18% ± 3.2    12% ± 2.8    248 ± 34     \~20% RO correlates
                                                      with early
                                                      functional response

  0.5          48% ± 5.4    38% ± 4.8    382 ± 48     EC₅₀ range:
                                                      \~40--50% RO

  1.0 (EC₅₀    64% ± 6.2    54% ± 5.6    492 ± 62     \~60% RO at
  est.)                                               functional EC₅₀

  5.0          88% ± 4.8    78% ± 5.2    618 ± 74     Near-maximal
                                                      response at 88% RO

  10.0         95% ± 3.2    88% ± 4.1    638 ± 82     Plateau; no
                                                      additional benefit
                                                      above 95% RO
  ------------ ------------ ------------ ------------ -------------------

*Table 5.1 Receptor occupancy-pharmacodynamic relationship. MABEL
(minimum anticipated biological effect level) for FIH dose calculation
estimated at \~20--30% RO, corresponding to \~0.2--0.3 nM Cervimab (in
vitro). Allometric scaling used for FIH MABEL-based dose = \~0.8 mg/kg.*

**6. Summary and IND-Supporting Conclusions**

The pharmacological activity data for Cervimab establish:

- High-affinity, specific binding to human and cynomolgus PD-1 (KD 0.42
  and 0.61 nM respectively) with no off-target binding to other immune
  checkpoints or cell surface receptors.

- Potent competitive blockade of PD-1/PD-L1 interaction (IC₅₀ 0.68 nM)
  with complete selectivity over PD-L2 blockade.

- Dose-dependent T-cell reactivation in MLR assays with superior potency
  vs approved PD-1 inhibitors (EC₅₀ 0.85 nM vs 2.14 nM pembrolizumab).

- Selective activity in dMMR/MSI-H patient-derived tumor digests (6/6
  responders) with absence of activity in pMMR specimens (0/2),
  supporting precision patient selection strategy.

- Receptor occupancy-PD pharmacodynamic relationship supporting
  MABEL-based FIH starting dose (\~1 mg/kg IV Q3W).

*Prepared by: Pharmacology Group, Meridian Oncology Sciences \|
Document: MOS-CAD-2021-002 v3.0 \| Reviewed: Head of Translational
Science*
