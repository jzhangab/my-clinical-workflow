**PHARMA INNOVATE, INC.**

**POPULATION PHARMACOKINETIC ANALYSIS REPORT**

**Cervimab (CVM-001)**

A PD-1 Inhibitor for dMMR/MSI-H Metastatic Colorectal Cancer

  ----------------- -----------------------------------
  **Document        CVM-001-POPPK-RPT-001
  Number:**         

  **Study:**        CVM-001-202 (Phase 2)

  **Software:**     NONMEM v7.5, PsN v5.3, R v4.3

  **Version /       1.0 (Final) --- March 2026
  Date:**           

  **Prepared by:**  Clinical Pharmacology, Pharma
                    Innovate, Inc.
  ----------------- -----------------------------------

**1. EXECUTIVE SUMMARY**

A population pharmacokinetic (PopPK) model was developed for cervimab
using concentration-time data from 142 patients with dMMR/MSI-H
metastatic colorectal cancer enrolled in Study CVM-001-202 (Phase 2) and
supplemented with data from 36 subjects in Phase 1 (Study CVM-001-101).
A total of 2,847 PK observations were available for analysis following
data cleaning per pre-specified criteria.

Cervimab PK was best described by a two-compartment model with linear
(first-order) elimination and allometric scaling on body weight.
Clearance was estimated at 0.214 L/day and central volume at 3.52 L in a
reference individual (70 kg, male). The estimated terminal half-life was
approximately 22.4 days, consistent with typical IgG4 monoclonal
antibody behavior.

Body weight was identified as the only statistically and clinically
significant covariate affecting CL and V1, with effects adequately
captured by the implemented allometric scaling. No other
covariates---including age, sex, race, renal function, hepatic function,
ECOG PS, tumor burden, or ADA status---met predefined criteria for
inclusion. The final model demonstrated adequate fit and predictive
performance based on goodness-of-fit plots, visual predictive checks,
and bootstrap analyses.

At 400 mg Q3W IV, the model-predicted steady-state Ctrough (geometric
mean, 5th--95th percentile) was 52.4 (18.7--127) mcg/mL, with Cmax,ss of
318 (210--481) mcg/mL, confirming consistent target coverage across the
patient population. Individual Bayesian PK parameter estimates are
provided for use in subsequent exposure-response analyses.

**2. INTRODUCTION**

Cervimab (CVM-001) is a fully human IgG4 monoclonal antibody targeting
the PD-1 receptor. This report describes the development and evaluation
of the final population PK model, performed in accordance with the
pre-specified Analysis Plan (CVM-001-POPPK-PLAN-001), FDA Guidance on
Population Pharmacokinetics (2022), and accepted pharmacometric best
practices.

**3. DATA SUMMARY**

**3.1 Study Population**

Table 1 presents a summary of patient demographics and baseline
characteristics included in the PopPK analysis dataset.

**Table 1. Demographic and Baseline Characteristics of PopPK Analysis
Dataset**

  ----------------------------------------------------------------------
  **Characteristic**         **Phase 2 (N=142)**   **Combined (N=178)**
  -------------------------- --------------------- ---------------------
  Age, years --- median      62 (29--81)           58 (22--81)
  (range)                                          

  Body weight, kg --- median 72.8 (41--136)        71.2 (41--136)
  (range)                                          

  Sex --- Male, n (%)        78 (54.9%)            96 (53.9%)

  Race --- White, n (%)      102 (71.8%)           126 (70.8%)

  ECOG PS 0 or 1, n (%)      131 (92.3%)           164 (92.1%)

  eGFR, mL/min/1.73m2 ---    84.3                  86.1
  median                                           

  Albumin, g/dL --- median   3.9                   4.0

  ADA positive, n (%)        11 (7.7%)             15 (8.4%)

  Total PK observations      2,281                 2,847

  Observations \<LLOQ, n (%) 23 (1.0%)             28 (0.98%)
  ----------------------------------------------------------------------

**3.2 Concentration-Time Profiles**

Observed cervimab concentration-time profiles showed typical biphasic
IgG kinetics with a distribution phase apparent in the first 24--48 h
following IV infusion. Trough concentrations at steady state (Cycle 3
pre-dose) ranged from 9.8 to 218 mcg/mL (approximately 22-fold
variability), suggesting moderate inter-subject variability in PK. No
apparent time-dependency in clearance was observed across cycles, and no
concentration-dependent elimination was identified visually.

**4. MODEL DEVELOPMENT**

**4.1 Structural Model Selection**

Table 2 summarizes the comparison of candidate structural models
evaluated during base model development.

**Table 2. Structural Model Comparison**

  ---------------------------------------------------------------------
  **Model Description**   **OFV**     **DOFV vs   **AIC**     **NPDE
                                      1-CMT**                 p**
  ----------------------- ----------- ----------- ----------- ---------
  1-CMT, linear           18,432.1    Reference   18,448.1    0.024
  elimination                                                 

  2-CMT, linear           17,891.4    -540.7\*    17,911.4    0.312
  elimination                                                 

  2-CMT, TMDD (QSS        17,883.2    -548.9\*    17,909.2    0.289
  approx.)                                                    

  2-CMT, linear +         17,602.1    -830.0\*    17,624.1    0.551
  allometric BWT                                              
  ---------------------------------------------------------------------

\*p \< 0.001 vs. reference model. 1-CMT = one-compartment; 2-CMT =
two-compartment; TMDD = target-mediated drug disposition; QSS =
quasi-steady-state approximation; OFV = objective function value; AIC =
Akaike information criterion; NPDE = normalized prediction distribution
errors.

The two-compartment model with linear elimination and fixed allometric
scaling on body weight (exponents 0.75 for CL and Q; 1.0 for V1 and V2)
provided the best balance of fit, parsimony, and mechanistic
interpretability. The TMDD model did not improve fit significantly over
the linear 2-CMT model (DOFV = 8.2, p = 0.22 for 2 additional
parameters), confirming linear PK over the observed concentration range.

**4.2 Residual Variability Model**

A combined proportional-plus-additive residual error model provided the
best fit. The additive component (0.228 mcg/mL) was small relative to
typical observed concentrations, suggesting the proportional component
(CV \~18.3%) dominated across the observed concentration range.

**4.3 Covariate Analysis**

Table 3 summarizes the results of the full covariate screening via
stepwise selection.

**Table 3. Covariate Screening Results (Forward Selection, p \< 0.01
Criterion)**

  ------------------------------------------------------------------------------
  **Covariate (on      **DOFV**      **p-value**   **Effect on   **Retained?**
  parameter)**                                     AUCss (%)**   
  -------------------- ------------- ------------- ------------- ---------------
  Body weight on CL    -830.0        \<0.001       -28% (40 vs   YES
  (allometric)                                     70 kg)        

  Age on CL            -4.2          0.040         -6.1% per     NO
                                                   decade        

  Sex (F vs M) on V1   -3.8          0.051         +4.3% (F vs   NO
                                                   M)            

  eGFR on CL           -2.9          0.089         -3.8%         NO

  Albumin on CL        -5.1          0.024         -9.2% (low vs NO
                                                   normal)       

  ECOG PS on CL        -3.3          0.069         +7.1% (PS2 vs NO
                                                   PS0/1)        

  ADA positive on CL   -6.8          0.009         +11.4% AUC    NO\*
                                                   decrease      

  Race (non-White vs   -1.8          0.180         -2.1%         NO
  White) on CL                                                   
  ------------------------------------------------------------------------------

\*ADA status was statistically significant (p \< 0.01) but failed the
clinical relevance threshold (\>20% change in AUCss). Only 7.7% of
patients were ADA positive; the effect is numerically modest. ADA status
will be explored as a sensitivity analysis in the E-R report.

Body weight (via allometric scaling) was the only covariate that met
both statistical and clinical relevance criteria. No dose adjustment is
predicted to be necessary for other tested covariates.

**5. FINAL MODEL PARAMETERS**

**Table 4. Final PopPK Model Parameter Estimates**

  ----------------------------------------------------------------------------
  **Parameter (Units)** **Estimate**   **%RSE**    **Bootstrap   **Bootstrap
                                                   Median**      95% CI**
  --------------------- -------------- ----------- ------------- -------------
  CL (L/day) --- 70 kg  0.214          5.1%        0.216         0.193 --
  reference                                                      0.240

  V1 (L) --- 70 kg      3.52           4.8%        3.55          3.18 -- 3.91
  reference                                                      

  Q (L/day) ---         0.683          8.4%        0.694         0.551 --
  inter-compartmental                                            0.843
  CL                                                             

  V2 (L) --- peripheral 4.28           7.2%        4.34          3.72 -- 5.04
  volume                                                         

  Allometric exponent   0.75 (fixed)   ---         ---           ---
  on CL/Q                                                        

  Allometric exponent   1.0 (fixed)    ---         ---           ---
  on V1/V2                                                       

  BSV CL (%CV)          29.4%          9.8%        29.1%         24.2 -- 34.9%

  BSV V1 (%CV)          22.1%          11.2%       21.8%         17.4 -- 27.3%

  Residual error ---    18.3%          6.2%        18.1%         16.1 -- 20.5%
  proportional                                                   

  Residual error ---    0.228          28.4%       0.221         0.118 --
  additive (mcg/mL)                                              0.371
  ----------------------------------------------------------------------------

CL = clearance; V1 = central volume; Q = inter-compartmental clearance;
V2 = peripheral volume; BSV = between-subject variability; %RSE =
relative standard error from NONMEM. Bootstrap: n=1,000 successful runs
(992/1,000).

**6. MODEL EVALUATION**

Goodness-of-fit plots for the final model demonstrated adequate
predictive performance:

- DV vs PRED and DV vs IPRED: observations were symmetrically
  distributed around the line of unity with no systematic bias across
  the observed concentration range (0.1 -- 850 mcg/mL)

- CWRES vs PRED: residuals were uniformly distributed within ±2 with no
  evidence of trend or heteroscedasticity

- CWRES vs TIME: no time-dependent trends identified, confirming
  stability of clearance over the treatment period

- VPC: 90% prediction interval captured 89.2% of observed concentrations
  (90% CI: 87.1--91.8%), within acceptable limits

- NPDE: mean = 0.021 (95% CI: -0.118 to 0.160), variance = 1.04;
  distribution was consistent with standard normal (p = 0.44 by
  Fisher\'s test)

- Bootstrap: 99.2% convergence; parameter estimates were within 2--4% of
  NONMEM estimates, confirming model stability

**7. SIMULATED STEADY-STATE PK AT 400 MG Q3W**

**Table 5. Simulated Steady-State Exposure Metrics at 400 mg Q3W IV
(N=1,000 virtual patients)**

  -----------------------------------------------------------------------
  **PK Metric**        **Geometric   **CV%**     **5th       **95th
                       Mean**                    Pctile**    Pctile**
  -------------------- ------------- ----------- ----------- ------------
  AUCss (mcg·day/mL)   1,869         32.4%       1,041       3,362

  Cmax,ss (mcg/mL)     318           28.1%       210         481

  Ctrough,ss (mcg/mL)  52.4          41.2%       18.7        127

  Time to steady-state \~77          ---         ---         ---
  (days)                                                     

  Accumulation ratio   3.82          8.1%        3.31        4.41
  (AUC)                                                      

  Effective t1/2       22.4          12.3%       17.8        28.6
  (days)                                                     
  -----------------------------------------------------------------------

**8. COVARIATE SENSITIVITY ANALYSIS**

Predicted AUCss in population subgroups relative to the reference (70 kg
male, normal renal and hepatic function, ECOG PS 0/1, ADA negative) is
presented in Table 6.

**Table 6. Covariate Sensitivity: Predicted AUCss Change Relative to
Reference Individual**

  -------------------------------------------------------------------------
  **Subgroup**               **AUCss Ratio vs. **90% CI**    **Dose
                             Reference**                     Adjustment
                                                             Warranted?**
  -------------------------- ----------------- ------------- --------------
  Body weight 40 kg vs 70 kg 1.47              1.31 -- 1.65  No (flat
                                                             dosing
                                                             acceptable)

  Body weight 120 kg vs 70   0.73              0.64 -- 0.83  No
  kg                                                         

  Female vs Male             1.04              0.96 -- 1.13  No

  Age \>=75 vs 40--65 years  1.10              0.98 -- 1.24  No

  Mild RI (eGFR 60-89) vs    1.03              0.97 -- 1.10  No
  Normal                                                     

  Moderate RI (eGFR 30-59)   1.09              0.99 -- 1.20  No
  vs Normal                                                  

  Mild HI (albumin 3.0--3.5  1.08              1.01 -- 1.16  No
  g/dL) vs Normal                                            

  ADA positive vs negative   0.87              0.78 -- 0.97  No

  ECOG PS 2 vs PS 0/1        1.07              0.96 -- 1.19  No
  -------------------------------------------------------------------------

No subgroup analysis predicted AUCss differences exceeding the
pre-specified 20% clinical relevance threshold, supporting flat-dose 400
mg Q3W without dose adjustment for any of the tested covariates.

**9. CONCLUSIONS**

A two-compartment PopPK model with linear elimination and allometric
body weight scaling adequately described cervimab PK in patients with
dMMR/MSI-H mCRC. The model demonstrated good predictive performance with
acceptable between-subject variability. Body weight was the only
clinically relevant covariate identified; however, its effect was
adequately captured by allometric scaling implemented in the structural
model, and no additional dose adjustment is recommended.

At the proposed commercial dose of 400 mg Q3W IV, cervimab achieves
consistent systemic exposure with geometric mean steady-state Ctrough of
52.4 mcg/mL and AUCss of 1,869 mcg\*day/mL. Individual Bayesian PK
parameters have been estimated for all 178 subjects and will be used in
the exposure-response analyses (Report CVM-001-ER-RPT-001).

**10. REFERENCES**

- US FDA. Population Pharmacokinetics: Guidance for Industry. February
  2022.

- Beal SL, Sheiner LB, Boeckmann A, Bauer RJ. NONMEM Users Guide. ICON
  plc, 1989-2009.

- Lindbom L, et al. PsN --- Perl-speaks-NONMEM. Comput Methods Programs
  Biomed. 2004;75:85--94.

- Gibiansky L, Gibiansky E. Target-mediated drug disposition model:
  approximations, identifiability of model parameters and applications
  to the population pharmacokinetic-pharmacodynamic modeling of
  biologics. Expert Opin Drug Metab Toxicol. 2009.

- Mould DR, Upton RN. Basic concepts in population modeling, simulation,
  and model-based drug development. CPT Pharmacometrics Syst Pharmacol.
  2012.
