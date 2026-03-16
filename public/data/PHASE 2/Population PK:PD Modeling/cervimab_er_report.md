**PHARMA INNOVATE, INC.**

**EXPOSURE-RESPONSE ANALYSIS REPORT**

**Cervimab (CVM-001)**

Efficacy and Safety Exposure-Response for dMMR/MSI-H Metastatic
Colorectal Cancer

  ----------------- -----------------------------------
  **Document        CVM-001-ER-RPT-001
  Number:**         

  **Study:**        CVM-001-202 (Phase 2)

  **Exposure        Individual Bayesian PK estimates
  Input:**          from PopPK Report
                    CVM-001-POPPK-RPT-001

  **Version /       1.0 (Final) --- March 2026
  Date:**           

  **Prepared by:**  Clinical Pharmacology, Pharma
                    Innovate, Inc.

  **Regulatory      FDA Guidance: Exposure-Response
  Reference:**      Relationships (2003); ICH E4
  ----------------- -----------------------------------

**1. EXECUTIVE SUMMARY**

This report presents the exposure-response (E-R) analyses for efficacy
and safety of cervimab (CVM-001) using data from Study CVM-001-202, a
Phase 2 open-label multicenter trial in 142 patients with dMMR/MSI-H
metastatic colorectal cancer (mCRC). Individual Bayesian post-hoc PK
parameters derived from the validated population PK model (Report
CVM-001-POPPK-RPT-001) served as exposure metrics.

Positive, statistically significant E-R relationships were identified
between cervimab steady-state AUC (AUCss) and both objective response
rate (ORR) and progression-free survival (PFS). No meaningful E-R
relationship was identified between AUCss and the incidence of
immune-mediated adverse events (imAEs). These findings support the
proposed commercial dose of 400 mg Q3W IV and do not indicate a need for
dose modification based on individual PK variability or patient
characteristics.

At the proposed dose, \>94% of patients are predicted to achieve AUCss
above the estimated minimum effective exposure threshold (EC50 for ORR),
providing a strong justification for the selected flat dose. No
exposure-safety signal was identified that would suggest a need to cap
dose or apply dose reductions in high-exposure patients.

**2. OBJECTIVES**

**2.1 Primary Objectives**

- Characterize the E-R relationship between cervimab systemic exposure
  and efficacy endpoints (ORR, PFS)

- Characterize the E-R relationship between cervimab exposure and safety
  endpoints (imAEs, any AE Grade \>=3)

- Support the proposed commercial dose and dosing regimen selection for
  Phase 3 and NDA/BLA submission

**2.2 Secondary Objectives**

- Evaluate whether any patient subgroups exhibit altered E-R
  relationships that would warrant different dosing

- Predict the proportion of patients achieving target AUCss at the
  proposed dose

- Assess the flat-dose vs. weight-based dosing paradigm for clinical use

**3. METHODS**

**3.1 Exposure Metrics**

Individual Bayesian PK parameter estimates (CL, V1, Q, V2) from the
final two-compartment PopPK model were used to derive the following
exposure metrics for each patient:

- AUCss: Steady-state AUC at Cycle 3 (primary E-R metric for efficacy)

- Cmax,ss: Maximum concentration at steady state (Cycle 1 Day 1 EOI)

- Ctrough,ss: Trough concentration at steady state (pre-dose Cycle 3)

AUCss was used as the primary exposure metric for efficacy E-R analyses
based on mechanistic considerations: sustained PD-1 receptor occupancy
(RO) throughout the dosing interval is theorized to be critical for
anti-tumor T-cell activation. Ctrough was used as a secondary metric
consistent with the PD-1 RO hypothesis.

**3.2 Efficacy Endpoints**

- Objective Response Rate (ORR): confirmed complete response (CR) +
  partial response (PR) per RECIST v1.1; binary outcome

- Progression-Free Survival (PFS): time from first dose to disease
  progression or death; analyzed using time-to-event methods

- Disease Control Rate (DCR): ORR + stable disease (SD); binary outcome,
  exploratory

- Duration of Response (DoR): among responders; exploratory

**3.3 Safety Endpoints**

- Any immune-mediated adverse event (imAE): binary outcome; events coded
  per MedDRA and pre-specified imAE list

- Grade \>=3 imAE: binary outcome

- Any AE Grade \>=3 (all-cause): binary outcome

- Time to first imAE: exploratory time-to-event analysis

**3.4 Statistical Models**

The following modeling approaches were used, performed in R v4.3 using
packages lme4, survival, and rms:

**Efficacy --- ORR and DCR:**

- Logistic regression: logit(P\[response\]) = alpha + beta \*
  log(AUCss/AUCss,ref), with AUCss,ref = geometric mean AUCss = 1,869
  mcg\*day/mL

- Emax model: P\[response\] = Emin + (Emax - Emin) \* AUCss\^gamma /
  (EC50\^gamma + AUCss\^gamma)

- Covariate-adjusted logistic regression: additional terms for ECOG PS,
  age, sex, prior lines of therapy, and tumor burden

**Efficacy --- PFS:**

- Cox proportional hazards regression: exposure treated as both
  continuous and categorized (exposure quartiles)

- Parametric AFT model (Weibull) with log(AUCss) as predictor

**Safety --- imAE:**

- Logistic regression of imAE incidence vs. log(AUCss)

- Fine-Gray competing risk analysis for time to first imAE (death as
  competing event)

Exposure quartiles (Q1--Q4) were used for graphical E-R assessment and
confirmatory analyses. Spearman rank correlations were computed for all
endpoint-exposure pairs prior to modeling.

**4. PATIENT POPULATION AND EXPOSURE SUMMARY**

E-R analyses included 142 patients from Study CVM-001-202. The
distribution of steady-state AUCss is presented in Table 1.

**Table 1. Summary of Steady-State Exposure Metrics by Quartile
(N=142)**

  -------------------------------------------------------------------------
  **Metric**      **Q1          **Q2           **Q3           **Q4
                  (\<25th)**    (25--50th)**   (50--75th)**   (\>75th)**
  --------------- ------------- -------------- -------------- -------------
  AUCss range     \<1,158       1,158--1,869   1,869--2,841   \>2,841
  (mcg\*day/mL)                                               

  AUCss ---       931           1,501          2,271          3,784
  median                                                      

  Ctrough,ss ---  22.8          42.3           68.9           112
  median (mcg/mL)                                             

  N per quartile  36            35             36             35

  Body weight --- 82.4          75.1           69.3           61.8
  median (kg)                                                 
  -------------------------------------------------------------------------

Note: Higher body weight (lower CL per allometric scaling) was
associated with higher AUCss. The negative correlation between body
weight and AUCss within a flat-dose paradigm is expected and was
accounted for in covariate-adjusted models.

**5. EXPOSURE-EFFICACY RESULTS**

**5.1 Objective Response Rate (ORR)**

Overall ORR in the ITT population was 43.0% (95% CI: 34.8%--51.5%). A
statistically significant positive relationship between AUCss and ORR
was identified by logistic regression.

**Table 2. ORR by AUCss Quartile**

  ----------------------------------------------------------------------------
  **Endpoint**   **Q1**      **Q2**      **Q3**      **Q4**      **p-trend**
  -------------- ----------- ----------- ----------- ----------- -------------
  ORR (n/N)      10/36       14/35       17/36       20/35       0.008
                 (27.8%)     (40.0%)     (47.2%)     (57.1%)     

  DCR (n/N)      22/36       26/35       29/36       31/35       0.003
                 (61.1%)     (74.3%)     (80.6%)     (88.6%)     

  Spearman rho   0.31        ---         ---         ---         \<0.001
  (ORR vs AUCss)                                                 
  ----------------------------------------------------------------------------

Logistic regression (log-linear model): OR = 1.48 per doubling of AUCss
(95% CI: 1.14--1.92; p = 0.003). Emax modeling estimated: Emin = 0.18,
Emax = 0.72, EC50 = 820 mcg\*day/mL (95% CI: 510--1,310), Hill
coefficient gamma = 1.4. At the geometric mean AUCss of 1,869
mcg\*day/mL, the predicted ORR is 52%, consistent with observed data. At
the 5th percentile AUCss (1,041 mcg\*day/mL), predicted ORR is 41%.

The covariate-adjusted logistic regression confirmed a positive E-R
relationship for ORR (p = 0.006) after adjustment for ECOG PS, age, sex,
number of prior lines, and tumor burden, suggesting that the E-R
relationship is not confounded by these patient characteristics.

**5.2 Progression-Free Survival (PFS)**

Median PFS across the full population was 8.2 months (95% CI:
6.8--10.1). A statistically significant improvement in PFS was observed
with increasing AUCss.

**Table 3. PFS by AUCss Quartile**

  ---------------------------------------------------------------------------------------
  **PFS Metric**  **Q1**      **Q2**         **Q3**         **Q4**         **p
                                                                           (log-rank)**
  --------------- ----------- -------------- -------------- -------------- --------------
  Median PFS      5.4         7.9            9.1            12.3           \<0.001
  (months)                                                                 

  6-month PFS     46.2%       63.4%          71.8%          80.9%          ---
  rate (%)                                                                 

  12-month PFS    20.4%       32.1%          41.6%          55.8%          ---
  rate (%)                                                                 

  HR Q2 vs Q1     ---         0.74           0.62           0.49           ---
  (95% CI)                    (0.48--1.14)   (0.40--0.96)   (0.31--0.77)   
  ---------------------------------------------------------------------------------------

Cox regression with continuous log(AUCss): HR = 0.71 per doubling of
AUCss (95% CI: 0.59--0.85; p \< 0.001). The Weibull AFT model similarly
indicated a statistically significant relationship (p \< 0.001), with
higher AUCss associated with longer PFS. The proportional hazards
assumption was met (Schoenfeld residuals test p = 0.42).

**5.3 Target Attainment Analysis**

Using the EC50 for ORR (820 mcg\*day/mL) as a threshold for minimum
effective exposure, the proportion of patients simulated to achieve
AUCss \>= EC50 at the 400 mg Q3W dose was 97.8% (95% CI: 96.2%--99.1%).
Even at the 5th percentile of simulated AUCss (1,041 mcg\*day/mL),
predicted ORR (41%) remains clinically meaningful.

These simulations indicate that 400 mg Q3W provides a substantial safety
margin above the EC50 for the majority of patients and that reducing the
dose to 200 mg Q3W would result in \~28% of patients falling below the
EC50 threshold---supporting the selection of 400 mg as the minimum
recommended dose.

**6. EXPOSURE-SAFETY RESULTS**

**6.1 Immune-Mediated Adverse Events (imAEs)**

Overall incidence of any-grade imAEs was 32.4% (46/142). Grade \>=3
imAEs occurred in 9.9% (14/142). The most common imAEs were
immune-mediated colitis (8.5%), hypothyroidism (7.7%), hepatitis (4.9%),
and pneumonitis (3.5%).

**Table 4. imAE Incidence by AUCss Quartile**

  ------------------------------------------------------------------------
  **Safety Endpoint**  **Q1**       **Q2**       **Q3**       **Q4**
  -------------------- ------------ ------------ ------------ ------------
  Any imAE (n/N, %)    11/36        11/35        12/36        12/35
                       (30.6%)      (31.4%)      (33.3%)      (34.3%)

  Grade \>=3 imAE      4/36 (11.1%) 3/35 (8.6%)  3/36 (8.3%)  4/35 (11.4%)
  (n/N, %)                                                    

  Any AE Grade \>=3    14/36        15/35        13/36        14/35
  (n/N, %)             (38.9%)      (42.9%)      (36.1%)      (40.0%)

  Treatment            4/36 (11.1%) 3/35 (8.6%)  4/36 (11.1%) 5/35 (14.3%)
  discontinuation                                             
  (n/N, %)                                                    
  ------------------------------------------------------------------------

Logistic regression of any imAE vs. log(AUCss): OR = 1.06 per doubling
of AUCss (95% CI: 0.74--1.52; p = 0.74). No statistically significant or
clinically relevant relationship between AUCss and any safety endpoint
was identified. The Spearman rank correlation between AUCss and imAE
(rho = 0.04; p = 0.61) and AUCss and Grade \>=3 imAE (rho = 0.02; p =
0.81) both indicated no meaningful association. These results are
consistent with the established mechanism of action of PD-1 inhibitors,
where immune-related toxicity appears to be driven by individual immune
susceptibility rather than dose/exposure.

**6.2 ADA Sensitivity Analysis**

Among ADA-positive patients (n=11), imAE incidence was 27.3% vs. 33.1%
in ADA-negative patients. No statistically significant effect of ADA
status on imAE rates was identified (OR = 0.77; 95% CI: 0.21--2.82; p =
0.69). ADA positivity was associated with modestly lower AUCss
(geometric mean ratio 0.87 vs. ADA-negative), but this difference did
not translate to meaningfully different efficacy or safety outcomes.

**7. SUMMARY E-R TABLE**

**Table 5. Summary of Exposure-Response Relationships for Cervimab**

  -------------------------------------------------------------------------------
  **Endpoint**      **E-R       **p-value**   **Direction /     **Clinical
                    Metric**                  Magnitude**       Implication**
  ----------------- ----------- ------------- ----------------- -----------------
  ORR (binary)      AUCss       0.003         Positive: OR 1.48 Supports 400 mg
                                              per 2x AUCss      dose; no plateau
                                                                observed within
                                                                clinical range

  DCR (binary)      AUCss       0.003         Positive:         Same as ORR
                                              consistent with   
                                              ORR               

  PFS               AUCss       \<0.001       Positive: HR 0.71 Higher exposure
  (time-to-event)                             per 2x AUCss      associated with
                                                                prolonged PFS

  Any imAE (binary) AUCss       0.74          None: OR 1.06     No dose reduction
                                              (NS)              warranted for
                                                                safety

  Grade \>=3 imAE   AUCss       0.81          None: Spearman    No
  (binary)                                    rho 0.02 (NS)     exposure-driven
                                                                toxicity signal

  Any Grade \>=3 AE AUCss       0.93          None: no trend    No safety
                                              across quartiles  concerns with
                                                                higher exposure
  -------------------------------------------------------------------------------

**8. FLAT DOSE vs. WEIGHT-BASED DOSING**

To evaluate whether weight-based dosing (mg/kg) would provide better
exposure uniformity than flat dosing (400 mg), simulations were
performed comparing AUCss distributions across body weight strata for:
(a) flat dose 400 mg Q3W and (b) weight-based dose 5 mg/kg Q3W.

**Table 6. AUCss CV% by Dosing Strategy and Body Weight Stratum**

  ---------------------------------------------------------------------
  **Body Weight        **Flat Dose    **Mg/kg Dose   **Conclusion**
  Stratum**            AUCss CV%**    AUCss CV%**    
  -------------------- -------------- -------------- ------------------
  40--60 kg (n=18)     34.2%          32.8%          Comparable; flat
                                                     dose acceptable

  61--80 kg (n=72)     29.8%          31.2%          Comparable

  81--100 kg (n=38)    31.4%          30.1%          Comparable

  \>100 kg (n=14)      33.8%          28.4%          Minor CV
                                                     reduction; not
                                                     clinically
                                                     meaningful given
                                                     flat E-R safety

  Overall (N=142)      31.4%          30.4%          No meaningful
                                                     advantage of mg/kg
                                                     over flat dosing
  ---------------------------------------------------------------------

Weight-based dosing offered no meaningful reduction in AUCss variability
compared to flat dosing, consistent with the known reduced impact of
weight-based dosing for mAbs with allometric clearance. Given
operational advantages of flat dosing and the absence of a safety E-R
relationship, flat dose 400 mg Q3W is supported.

**9. SUBGROUP ANALYSES**

E-R relationships for ORR and imAE were examined in the following
subgroups:

  --------------------------------------------------------------------------
  **Subgroup**      **N**       **ORR OR (95%  **imAE OR (95% **Consistent
                                CI) per 2x     CI)**          with
                                AUCss**                       Overall?**
  ----------------- ----------- -------------- -------------- --------------
  Females           64          1.51           1.08           Yes
                                (1.02--2.24)   (0.62--1.88)   

  Males             78          1.46           1.04           Yes
                                (1.04--2.05)   (0.63--1.72)   

  Age \>=65         62          1.39           1.11           Yes
                                (0.94--2.06)   (0.67--1.84)   

  Age \<65          80          1.55           1.04           Yes
                                (1.09--2.19)   (0.63--1.71)   

  BWT \>=80 kg      52          1.44           1.09           Yes
                                (0.96--2.17)   (0.60--2.00)   

  BWT \<80 kg       90          1.50           1.05           Yes
                                (1.08--2.09)   (0.64--1.71)   

  \>=2 prior lines  81          1.47           0.99           Yes
                                (1.04--2.08)   (0.60--1.63)   
  --------------------------------------------------------------------------

E-R relationships for ORR were consistent across all evaluated
subgroups. No subgroup interaction was statistically significant. The
absence of an exposure-imAE relationship was consistent in all
subgroups.

**10. CONCLUSIONS AND REGULATORY IMPLICATIONS**

A positive, statistically significant E-R relationship was established
between cervimab steady-state AUC and both objective response rate and
progression-free survival in patients with dMMR/MSI-H mCRC. These
findings are consistent with the mechanism of action of PD-1 inhibitors
(sustained receptor occupancy driving tumor immune rejection) and are
robust to covariate adjustment and subgroup analyses.

No clinically meaningful E-R relationship was identified between
cervimab AUCss and immune-mediated or all-cause toxicity, indicating a
favorable therapeutic index with no evidence of a narrow safety-efficacy
window at the proposed dose range.

The following regulatory conclusions are supported by these analyses:

- The proposed commercial dose of 400 mg Q3W IV is appropriate and
  provides target exposure (\>EC50 for ORR) in approximately 97.8% of
  patients

- No dose adjustment is required for patient characteristics including
  body weight, age, sex, renal function, hepatic function, ECOG PS, or
  ADA status

- Flat (fixed) dosing is preferred over weight-based (mg/kg) dosing, as
  it provides equivalent PK uniformity with operational advantages

- No upper exposure limit (dose cap) is required given the absence of an
  exposure-toxicity relationship

- These findings will be presented in Module 2.7.2 of the NDA/BLA
  submission as part of the Clinical Pharmacology Summary

**11. REFERENCES**

- US FDA. Exposure-Response Relationships --- Study Design, Data
  Analysis, and Regulatory Applications. Guidance for Industry. 2003.

- ICH E4. Dose-Response Information to Support Drug Registration. 1994.

- US FDA. Population Pharmacokinetics: Guidance for Industry. February
  2022.

- Hodi FS, et al. Evaluation of immune-related response criteria and
  RECIST v1.1 response in patients with advanced melanoma treated with
  pembrolizumab. J Clin Oncol. 2016.

- Centanni M, et al. Clinical Pharmacokinetics and Pharmacodynamics of
  Atezolizumab in Cancer Immunotherapy. Clin Pharmacokinet. 2019.

- R Core Team. R: A Language and Environment for Statistical Computing.
  Vienna, Austria: R Foundation for Statistical Computing. 2023.
