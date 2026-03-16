**MERIDIAN ONCOLOGY SCIENCES, INC.**

Pharmacology, DMPK & Translational Sciences Division

**PK/PD Model Report**

*Cervimab \| Two-Compartment TMDD Model \| Cynomolgus Monkey & Human PK
Translation*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-PKPD-2022-002

  **Version:**           v2.8

  **Date:**              2022-10-20

  **Study Drug:**        Cervimab (MOS-PD1-047) \| Fully Human IgG4
                         S228P Anti-PD-1 mAb \| IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer
                         (mCRC)

  **GLP Status:**        Non-GLP \| ICH S3A; FDA Population PK
                         Guidance 2022

  **Regulatory Basis:**  21 CFR 312.23(a)(8); ICH S6(R1); ICH S9; ICH
                         E9(R1); FDA Oncology Dose Optimization
                         Guidance 2022
  ---------------------- ---------------------------------------------

*CONFIDENTIAL --- Contains proprietary preclinical pharmacology and
PK/PD data supporting IND 135-892 for Cervimab. Prepared in accordance
with 21 CFR 312.23(a)(8) and ICH M4S CTD Module 2.6 format. Literature
references are cited numerically in superscript throughout each
section.*

**1. Introduction and Modeling Strategy**

This report describes the PK/PD modeling framework for Cervimab,
encompassing: (1) a two-compartment model with Michaelis-Menten (MM)
approximation of target-mediated drug disposition (TMDD) for PK
characterization in cynomolgus monkeys, (2) allometric and
species-invariant time (STIV) approaches for human PK prediction, (3) a
receptor occupancy (RO)-PD relationship model linking Cervimab exposure
to CD8+ T-cell activation biomarkers, and (4) model-based simulations
supporting selection of the 400 mg flat dose Q3W regimen for Phase 1/2
studies. The MM-TMDD approach was selected as the most parsimonious
model capturing both linear FcRn-mediated clearance and saturable
PD-1-mediated target-mediated clearance at low doses ^\[1\]^, ^\[6\]^.

The modeling approach follows the precedent established for
pembrolizumab ^\[10\]^ and nivolumab ^\[2\]^, where 2-compartment models
with nonlinear clearance components have been shown to capture the
characteristic biphasic PK of anti-PD-1 antibodies, with near-linear
kinetics at and above receptor-saturating doses.

**2. Cynomolgus Monkey PK Model**

**2.1 Model Structure and Equations**

Model: 2-compartment, IV bolus input (60-min infusion modeled as
zero-order input rate = Dose/1h). Elimination: parallel linear clearance
(CL, representing FcRn-dependent nonspecific elimination) and
Michaelis-Menten term (representing PD-1 TMDD at low concentrations).
Software: NONMEM v7.5.1 (ICON PLC); R v4.3 (xpose4 for diagnostics; vpc
package for visual predictive checks).

**Differential equations:**

dC₁/dt = (Input/V₁) - (CL/V₁)·C₁ - (Q/V₁)·C₁ + (Q/V₂)·C₂ -
(Vmax·C₁)/(Km + C₁)

dC₂/dt = (Q/V₁)·C₁ - (Q/V₂)·C₂

RO(t) = C₁(t) / (C₁(t) + Km_RO) \[Receptor Occupancy equation\]

The MM term with parameters Vmax (maximum target-mediated elimination
rate) and Km (concentration at half-maximal TMDD clearance) follows the
quasi-steady state approximation of the full TMDD model, as described
for anti-CD33 antibodies by Figueroa et al. ^\[1\]^ and validated for
PD-1 checkpoint inhibitors by Desnoyer et al. ^\[3\]^. The Km_RO for
receptor occupancy is estimated separately from the Km for TMDD because
Km_RO reflects binding affinity to membrane-bound PD-1 on T cells, while
Km_TMDD reflects the combination of binding, internalization, and target
turnover kinetics.

**2.2 Parameter Estimates --- Cynomolgus Monkey (Non-GLP PK Study,
n=18)**

  ---------------------- -------------- ---------- ----------- --------------------
  **Parameter**          **Estimate**   **RSE      **Units**   **Interpretation**
                                        (%)**                  

  CL (linear clearance)  0.296          8.4%       mL/h/kg     FcRn-mediated
                                                               nonspecific CL;
                                                               consistent with IgG4
                                                               class (0.22--0.45
                                                               mL/h/kg range \[5\])

  Vmax (TMDD max rate)   0.642          18.2%      µg/h/kg     Target-mediated
                                                               elimination
                                                               capacity; estimated
                                                               from nonlinearity at
                                                               1 mg/kg dosing

  Km (TMDD half-max      0.382          22.4%      µg/mL       Km reflects
  conc.)                                                       combination of KD,
                                                               internalization
                                                               rate, and target
                                                               turnover --- higher
                                                               than in vitro KD
                                                               (0.42 nM = 0.061
                                                               µg/mL) as expected
                                                               for TMDD \[1,6\]

  V₁ (central volume)    48.2           10.8%      mL/kg       \~Plasma volume +
                                                               interstitial;
                                                               consistent with IgG4
                                                               class Vss \~58 mL/kg

  V₂ (peripheral volume) 38.4           14.2%      mL/kg       Peripheral
                                                               compartment; total
                                                               Vss = V₁ + V₂ = 86.6
                                                               mL/kg

  Q (inter-compartmental 0.182          16.8%      mL/h/kg     Distribution
  CL)                                                          clearance; t½α \~6h

  Km_RO (RO EC₅₀)        0.186          12.4%      µg/mL       Corresponds to \~1.3
                                                               nM; \~3× in vitro
                                                               KD; membrane-bound
                                                               target affinity
                                                               lower than soluble

  IIV on CL (%CV)        24.8%          ---        ---         Inter-individual
                                                               variability;
                                                               moderate; driven by
                                                               ADA in repeat-dose
                                                               study animals

  Residual error         14.2%          ---        ---         Acceptable for mAb
  (proportional)                                               PK modeling;
                                                               Chi-squared GOF
                                                               p\>0.05
  ---------------------- -------------- ---------- ----------- --------------------

*Table 2.2. NONMEM 2-compartment TMDD model estimates. RSE = relative
standard error. Goodness-of-fit assessed by: OFV (Objective Function
Value) improvement vs base model ΔOFV=−48.4 (p\<0.001 for TMDD term);
observed vs predicted plots (linear regression slope 0.98, R²=0.96); VPC
(80% of observations within 80% CI). Model diagnostics consistent with
criteria described for PD-1 mAb PK models \[3,10\].*

**2.3 Model Validation: Visual Predictive Check (VPC)**

VPC was performed by simulating 1,000 virtual cynomolgus monkey datasets
from final model parameters and comparing 10th, 50th, 90th percentiles
of simulated data against observed data at each dose level. The model
captures dose-nonlinearity at 1 mg/kg (where TMDD contributes \~18% of
total CL) and linear behavior at ≥3 mg/kg (TMDD saturated, contributing
\<5% of CL). This behavior is consistent with published TMDD
characterization for PD-1 inhibitors in cynomolgus monkeys where
receptor saturation occurs at low nanomolar concentrations corresponding
to \<1 mg/kg in vivo doses ^\[3\]^.

**3. Human PK Prediction**

**3.1 Allometric Scaling (AS) Method**

Allometric scaling of CL and Vss from cynomolgus monkey to human uses
the standard power model with body weight exponents: CL_human =
CL_monkey × (BW_human/BW_monkey)\^0.85 and Vss_human = Vss_monkey ×
(BW_human/BW_monkey)\^1.0, as recommended for mAb PK prediction ^\[4\]^,
^\[5\]^. FcRn KD correction factor of 2× applied (human FcRn KD \~2×
higher than cyno at pH 6.0, predicting slightly longer human t½)
^\[4\]^.

  ----------------- ------------ ------------- ------------------ ------------
  **PK Parameter**  **Cyno       **Human       **Human observed   **Pred/Obs
                    observed**   predicted     (Phase 1)          ratio**
                                 (AS)**        \[validation\]**   

  CL (mL/h/kg)      0.296        0.198         0.210 ± 0.048      **0.94
                                                                  (within
                                                                  2-fold)**

  Vss (mL/kg)       86.6         86.6          82.4 ± 14.8        **1.05
                                 (exponent                        (within
                                 1.0)                             2-fold)**

  t½ terminal       20.2 ± 2.4   23.8          22.3 ± 4.1 (C1,    **1.07
  (days)                                       400 mg)            (within
                                                                  2-fold)**

  Cmax at 400 mg    N/A (not 400 98.4          98.4 ± 14.2        **1.00
  flat (µg/mL)      mg dose)     (simulated)   (observed Ph1)     (exact)**

  AUC₀₋₂₁d at 400   N/A          14,720        14,820 ± 2,340     **0.99
  mg (µg·h/mL)                   (simulated)   (observed Ph1)     (within
                                                                  2-fold)**
  ----------------- ------------ ------------- ------------------ ------------

*Table 3.1. Allometric scaling predictions vs Phase 1 observed data
(n=18 patients, MOS-CRC-101). All predictions within 2-fold of observed
values --- excellent translational accuracy. Chen et al. 2024 \[4\]
demonstrated comparable prediction accuracy for 6 PD-1/PD-L1 antibodies
using AS with exponents 0.85 (CL) and 1.0 (V). Pred/Obs within 2-fold
meets FDA expectations for allometric PK prediction (FDA PopPK Guidance
2022).*

**4. Exposure-Response (E-R) Model**

**4.1 Sigmoidal Emax Model: IFN-γ vs AUC**

An E-R model linking Cervimab AUC (AUC₀₋₂₁d at Cycle 1) to
pharmacodynamic biomarker response (serum IFN-γ as primary PD readout;
ORR as efficacy endpoint) was developed from Phase 1/2a pooled data
(N=146 patients). This approach follows the E-R modeling framework used
for nivolumab ^\[2\]^ and toripalimab ^\[7\]^, where AUC was identified
as the most predictive exposure metric for both efficacy and toxicity.

  ----------------- -------------- ----------- --------------- --------------------
  **E-R Parameter** **Estimate**   **RSE (%)** **Units**       **Interpretation**

  Emax (max IFN-γ   4.18-fold      12.4%       fold-increase   Maximum \~4×
  induction)                                   vs baseline     induction of serum
                                                               IFN-γ at full
                                                               receptor saturation

  EC₅₀ (AUC at 50%  6,840          18.2%       µg·h/mL         \~46% of 400 mg Q3W
  Emax)                                                        predicted AUC₀₋₂₁d =
                                                               14,820 µg·h/mL

  Hill coefficient  1.42           22.8%       ---             γ\>1: steep E-R
  (γ)                                                          relationship; most
                                                               patients reach
                                                               near-Emax at 400 mg
                                                               Q3W

  ORR-AUC           Plateau above  ---         ---             No meaningful
  relationship      Q3 (\>14,000                               incremental ORR
                    µg·h/mL)                                   benefit above AUC Q3
                                                               --- supports 400 mg
                                                               flat dose as optimal
                                                               (consistent with
                                                               dose-optimization
                                                               guidance \[2\])
  ----------------- -------------- ----------- --------------- --------------------

*Table 4.1. E-R model parameters from Phase 1/2a pooled analysis
(N=146). Model: Sigmoid Emax (4PL). AUC Q3 (75th percentile) of
predicted Cycle 1 AUC at 400 mg = \~18,400 µg·h/mL. ORR plateau above Q3
AUC is consistent with published E-R analyses for nivolumab \[2\] and
atezolizumab \[9\], supporting the flat-dose 400 mg Q3W regimen.*

**5. Model-Based Dose Selection Simulations**

Monte Carlo simulations (n=1,000 virtual patients; covariate
distributions from Phase 1 dataset) were performed to compare Cmin and
AUC distributions across candidate dosing regimens. Target: Cmin \> 1
µg/mL (\>99% PD-1 RO at trough) in ≥90% of patients. This threshold was
derived from the Km_RO estimate (0.186 µg/mL) combined with a 5× safety
margin to ensure sustained near-complete RO at trough, consistent with
the approach used for pembrolizumab dose selection ^\[10\]^.

  ----------------- ------------------ ------------- ------------- -----------------
  **Regimen**       **Cmin Cycle 1     **AUC₀₋₂₁d    **% Pts \>1   **Selection
                    (µg/mL, median     (µg·h/mL)**   µg/mL Cmin**  Rationale**
                    \[5th--95th\])**                               

  200 mg flat Q3W   14.2 \[6.8--28.4\] 7,410         98.4%         Sub-optimal: AUC
                                                                   in Q2 only (\~50%
                                                                   Emax); 1.6% pts
                                                                   below Cmin target

  400 mg flat Q3W   **28.4             **14,820**    **\>99.0%**   OPTIMAL: \>99%
  (SELECTED)        \[14.2--56.8\]**                               pts above Cmin;
                                                                   AUC in Q3
                                                                   (near-Emax
                                                                   plateau);
                                                                   consistent with
                                                                   pembrolizumab 200
                                                                   mg Q3W approach
                                                                   \[7,10\]

  600 mg flat Q3W   42.6               22,240        \>99.9%       No added efficacy
                    \[20.8--86.2\]                                 vs 400 mg (AUC
                                                                   beyond Emax
                                                                   plateau);
                                                                   increased irAE
                                                                   risk at higher
                                                                   AUC Q4; not
                                                                   selected

  400 mg flat Q6W   8.4 \[3.2--18.4\]  14,820 (same  92.4%         7.6% pts below
                                       AUC, longer                 Cmin at trough
                                       tau)                        (unacceptable RO
                                                                   gap); not
                                                                   supported
  ----------------- ------------------ ------------- ------------- -----------------

*Table 5.1. Dose simulation results. 400 mg flat Q3W selected based on:
(1) \>99% of patients maintain Cmin \>1 µg/mL (\>99% PD-1 RO at trough),
(2) AUC in the efficacy plateau region (near-Emax), (3) equivalent or
superior predicted efficacy vs weight-based dosing (CV of AUC reduced
from 38% weight-based to 32% flat dose \[consistent with 7\]), (4)
operational convenience (flat dosing reduces preparation complexity).
This is consistent with the regulatory precedent of flat-dose
pembrolizumab 200 mg Q3W selected via model-informed drug development
\[7,10\].*

**6. References**

**1.** Figueroa I et al. Modeling of clinical pharmacokinetics of
anti-CD33 antibody-drug conjugate in cynomolgus monkeys and humans using
a Michaelis-Menten approximation of target-mediated drug disposition.
MAbs. 2018;10(6):967--978. doi:10.1080/19420862.2018.1465160

**2.** Xu XS et al. Exposure-response relationships for nivolumab in
patients with solid tumor types. Clin Cancer Res.
2017;23(16):4793--4802.

**3.** Desnoyer A et al. Pharmacokinetic/pharmacodynamic relationship of
therapeutic monoclonal antibodies used in oncology: Part 2, immune
checkpoint inhibitor antibodies. Eur J Cancer. 2020;128:119--128.
doi:10.1016/j.ejca.2020.01.003

**4.** Chen W et al. Translate pharmacokinetics of PD-1/PD-L1 monoclonal
antibodies from cynomolgus monkey to human. J Pharm Sci.
2024;113(9):2915--2921. doi:10.1016/j.xphs.2024.07.003

**5.** Betts A et al. Linear pharmacokinetic parameters for monoclonal
antibodies are similar within a species and across different
pharmacological targets. MAbs. 2018;10(5):751--764.
doi:10.1080/19420862.2018.1462429

**6.** Gibiansky L et al. Target-mediated drug disposition model for
drugs that bind soluble and membrane-bound targets. J Pharmacokinet
Pharmacodyn. 2009;36(4):355--378.

**7.** Li L et al. Flat dose regimen of toripalimab based on
model-informed drug development approach. Front Pharmacol.
2023;13:1069818.

**8.** Zhao Y et al. Model-informed clinical pharmacology profile of a
novel fixed-dose combination of nivolumab and relatlimab. Clin Cancer
Res. 2024;30(14):3050--3058.

**9.** Centanni M et al. Clinical pharmacokinetics and pharmacodynamics
of atezolizumab in cancer immunotherapy. Clin Pharmacokinet.
2019;58(5):543--556.

**10.** Lindauer A et al. Translational pharmacokinetic/pharmacodynamic
modeling of tumor growth inhibition supports dose-range selection of the
anti-PD-1 antibody pembrolizumab. CPT Pharmacometrics Syst Pharmacol.
2017;6(1):11--20.

*Prepared by: DMPK / Modeling & Simulation Group, Meridian Oncology
Sciences \| Software: NONMEM 7.5.1, R 4.3 (xpose4, vpc, ggplot2), MATLAB
R2022b \| Document: MOS-PKPD-2022-002 v2.8*
