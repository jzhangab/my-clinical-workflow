**MERIDIAN ONCOLOGY SCIENCES, INC.**

Nonclinical Safety & Pharmacokinetics Division

**Dose-Response Curve Analysis Report**

*Cervimab --- Preclinical Dose-Toxicity and Dose-Exposure Relationships*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-DRC-2022-006

  **Version:**           v1.6

  **Date:**              2022-10-28

  **Study Drug:**        Cervimab (MOS-PD1-047) \| Fully Human IgG4
                         S228P Anti-PD-1 mAb

  **IND:**               IND 135-892

  **GLP Status:**        Regulatory Summary --- Supports IND 135-892
                         Section 7 \| 21 CFR 312.23(a)(8); ICH S3A

  **Regulatory Basis:**  21 CFR 312.23(a)(8); ICH S9; ICH S6(R1); ICH
                         S3A; 21 CFR 58 (GLP)
  ---------------------- ---------------------------------------------

*CONFIDENTIAL --- This document contains proprietary preclinical safety
information supporting IND 135-892. Distribution restricted to the IND
working group and regulatory authorities. Prepared per FDA GLP
regulations (21 CFR Part 58) and ICH M4S CTD format.*

**1. Introduction**

This report presents dose-response analyses for Cervimab across all
nonclinical toxicology studies, covering: (1) dose-toxicity
relationships for adverse endpoints, (2) dose-exposure (PK)
relationships (linearity, accumulation), (3) dose-pharmacodynamic
relationships (receptor occupancy, immune activation), and (4) benchmark
dose (BMD) modeling for key toxicological endpoints. All analyses were
performed using SAS v9.4 and GraphPad Prism v9.5.

**2. Dose-Exposure Relationships**

**2.1 Single-Dose PK Linearity (Non-GLP Exploratory Study)**

  ----------- ----------- ------------- ---------- ------------- ----------- -------------
  **Dose      **Cmax      **AUC₀₋∞      **t½       **CL          **Vss       **Dose-norm
  (mg/kg)**   (µg/mL)**   (µg·h/mL)**   (days)**   (mL/h/kg)**   (mL/kg)**   AUC (prop.)**

  1           20.8 ± 2.4  2,980 ± 340   18.4 ± 2.2 0.34 ± 0.06   58 ± 8      2,980
                                                                             (reference)

  5           104 ± 12    14,840 ±      19.8 ± 2.4 0.34 ± 0.06   61 ± 9      2,968
                          1,680                                              (0.996×)

  20          412 ± 48    58,640 ±      20.2 ± 2.8 0.34 ± 0.06   62 ± 10     2,932
                          6,840                                              (0.984×)

  100 (SD     2,116 ± 190 305,600 ±     20.8 ± 2.6 0.33 ± 0.05   60 ± 8      3,056
  GLP)                    27,200                                             (1.026×)
  ----------- ----------- ------------- ---------- ------------- ----------- -------------

*Dose-normalized AUC is consistent across the 1--100 mg/kg range (ratio
range: 0.984--1.026). CL and Vss are dose-independent, confirming linear
PK (non-saturable FcRn-mediated clearance) over the preclinical dose
range. Power model: AUC = 2,985 × dose\^1.002 (slope 95% CI:
0.991--1.013); confirmed dose-proportionality (r²=0.9998). Absence of
TMDD nonlinearity at these doses is consistent with soluble PD-1 target
being low abundance (not saturable at Cmax tested).*

**2.2 Repeat-Dose Accumulation Analysis (13-Week Study, Q2W)**

  ----------- --------------- ----------- ----------- ------------ --------------- ------------
  **Dose      **Cycle**       **Cmin      **Cmax      **AUC₀₋τ**   **Accum. Ratio  **PD-1 RO
  (mg/kg)**                   (µg/mL)**   (µg/mL)**                (R_acc)**       (est., %)**

  3           C1              18 ± 4      62 ± 8      1,240        ---             \~88% at
                                                                                   Cmax; \~42%
                                                                                   at Cmin

  3           C4              22 ± 6      76 ± 10     1,520        1.23×           \~92% at
              (steady-state                                        (predicted      Cmax; \~52%
              est.)                                                1.20--1.40×)    at Cmin

  10          C1              62 ± 8      212 ± 24    4,240        ---             \~96% at
                                                                                   Cmax; \~78%
                                                                                   at Cmin

  10          C4 (ss est.)    78 ± 10     248 ± 28    4,980        1.17×           \~97% at
                                                                                   Cmax; \~84%
                                                                                   at Cmin

  30          C1              182 ± 24    624 ± 72    12,480       ---             \~99% at
                                                                                   Cmax; \~96%
                                                                                   at Cmin

  30          C7 (with ADA)   124 ± 28 ↓  542 ± 84 ↓  10,840 ↓     0.87×           \~98% at
                                                                   (ADA-enhanced   Cmax; \~92%
                                                                   CL)             at Cmin
  ----------- --------------- ----------- ----------- ------------ --------------- ------------

*Low accumulation ratio (R_acc \~1.17--1.26) at 3--10 mg/kg consistent
with t½ \~20 days and Q2W dosing interval (τ/t½ ratio = 14/20 = 0.70).
Predicted steady-state accumulation using formula R_acc =
1/(1-e\^(-k_el×τ)) = \~1.25--1.40. Reduced AUC at 30 mg/kg Cycle 7 is
attributable to ADA-mediated enhanced clearance (8/10 ADA positive).
ADA-enhanced clearance does not affect safety interpretation (adverse
effects occurred prior to and independent of ADA).*

**3. Dose-Toxicity Relationships**

**3.1 Key Adverse Endpoint Dose-Response: ALT (13-Week Study, Day 85)**

  ----------- ----------- ------------ ------------- ------------- -------------
  **Dose      **Mean ALT  **% Change   **Multiples   **Incidence   **BMDL₁₀
  (mg/kg)**   (U/L)**     vs Vehicle** of ULN**      \>2× ULN**    (mg/kg)**

  0 (vehicle) 30 ± 8      ---          0.4× ULN      0/10          ---

  3           34 ± 10     +13%         0.45× ULN     0/10          ---

  10          42 ± 14     +40%         0.56× ULN     0/10          ---

  30          **58 ± 18** **+93%\***   **0.77× ULN** 0/10 (peak    21.4 mg/kg
                                                     1.4×)         (95% CI:
                                                                   14.2--32.8)
  ----------- ----------- ------------ ------------- ------------- -------------

*BMDL₁₀ (Benchmark Dose Lower Confidence Limit for 10% response): Hill
model fit, BMDS v3.3 (EPA). BMDL₁₀ for ALT = 21.4 mg/kg provides
\>21-fold safety margin vs proposed FIH dose of 1 mg/kg. No animal
reached \>2× ULN ALT (ULN = 75 U/L for cynomolgus monkey). \* p\<0.05 vs
vehicle, Dunnett\'s.*

**3.2 BMD Analysis Summary --- All Endpoints**

  ------------------- ------------------- ------------------ ----------------- ---------------
  **Endpoint**        **NOAEL (mg/kg)**   **BMDL₁₀ (mg/kg)** **Safety margin   **Model fit
                                                             vs 1 mg/kg FIH**  (BMDS)**

  ALT elevation       10                  21.4               **21.4×**         Hill model;
  (biochemistry)                                                               AIC=28.4;
                                                                               adequate fit

  Colitis             10                  18.8               **18.8×**         Quantal
  (histopathology,                                                             logistic;
  Grade 1)                                                                     adequate fit

  Spleen weight       10 (non-adverse)    4.2 (non-adverse)  **4.2× (but       Exponential
  (organ weight)                                             non-adverse)**    Model 3;
                                                                               AIC=22.1

  Body weight (% gain 30                  \>30 (below        **\>30×**         No
  attenuation)        (non-significant)   detection                            statistically
                                          threshold)                           significant
                                                                               relationship

  WBC / lymphocytosis Not adverse         2.1                N/A ---           Sigmoidal Emax;
  (pharmacological)                       (pharmacological   pharmacological   EC₅₀=2.1 mg/kg;
                                          EC₅₀)                                Emax=+68% WBC
  ------------------- ------------------- ------------------ ----------------- ---------------

**4. Dose-Pharmacodynamic Relationships**

**4.1 Receptor Occupancy vs Dose (Cynomolgus Monkey, In Vivo
Estimated)**

In vivo receptor occupancy (RO) was estimated from cynomolgus serum Cmax
values and the in vitro KD for cyno PD-1 (0.61 nM), using the equation:
RO% = 100 × Cmax / (Cmax + KD). This provides a conservative estimate
(assumes no free drug loss at tissue level).

  ----------- ----------- ----------- ----------- ------------- ------------
  **Dose      **Cmax      **Cmax      **KD cyno   **Estimated   **RO% at
  (mg/kg)**   (µg/mL)**   (nM)**      (nM)**      RO% at Cmax** Cmin (steady
                                                                state)**

  0.2 (below  4.2 ± 0.6   29.2        0.61        98% (TMDD     \~82%
  FIH)                                            saturation)   

  1 (FIH      20.8 ± 2.4  144         0.61        \>99%         \~96%
  proposed)                                                     

  3 (NOAEL    62 ± 8      431         0.61        \>99%         \~98%
  low)                                                          

  10 (NOAEL)  212 ± 24    1,472       0.61        \>99.9%       \~99%

  30 (LOAEL)  624 ± 72    4,333       0.61        \>99.9%       \~99.6%
  ----------- ----------- ----------- ----------- ------------- ------------

*Note: In cynomolgus monkeys, PD-1 RO is essentially complete (\>99%) at
all doses ≥1 mg/kg, indicating that the dose-toxicity relationship is
not driven by differential RO but rather by total drug exposure and
duration of immune activation. This is consistent with the absence of a
clear dose-dependent irAE incidence at 3 vs 10 mg/kg (0/10 colitis at
both doses). The MABEL approach (targeting \~20--30% RO in humans) is
based on the human in vitro system (KD 0.42 nM), which translates to the
proposed 1 mg/kg FIH starting dose.*

*Statistical Analysis: SAS v9.4 (mixed model ANOVA, Dunnett\'s
post-test); BMD modeling: BMDS v3.3 (US EPA); Prism v9.5 for curve
fitting. All datasets archived in Meridian ELN (21 CFR Part 11).*
