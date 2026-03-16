**PHARMA INNOVATE, INC.**

**POPULATION PHARMACOKINETIC ANALYSIS PLAN**

**Cervimab (CVM-001)**

A PD-1 Inhibitor for the Treatment of dMMR/MSI-H Metastatic Colorectal
Cancer

  ----------------- -----------------------------------
  **Document        CVM-001-POPPK-PLAN-001
  Number:**         

  **Study:**        CVM-001-202 (Phase 2)

  **Version:**      1.0 (Final)

  **Date:**         March 2026

  **Prepared by:**  Clinical Pharmacology, Pharma
                    Innovate, Inc.

  **Regulatory      FDA Guidance: Population
  Reference:**      Pharmacokinetics (2022)
  ----------------- -----------------------------------

**1. BACKGROUND AND INTRODUCTION**

Cervimab (CVM-001) is an investigational fully human IgG4 monoclonal
antibody targeting the programmed cell death protein 1 (PD-1) receptor.
It is being developed for the treatment of patients with deficient
mismatch repair (dMMR) or microsatellite instability-high (MSI-H)
metastatic colorectal cancer (mCRC). Cervimab blocks the interaction
between PD-1 and its ligands PD-L1 and PD-L2, thereby restoring
antitumor immune activity.

Study CVM-001-202 is an open-label, multicenter Phase 2 trial evaluating
the efficacy and safety of cervimab 400 mg administered intravenously
(IV) every 3 weeks (Q3W) in patients with dMMR/MSI-H mCRC who have
received at least one prior line of therapy.

This Population Pharmacokinetic (PopPK) Analysis Plan describes the
methodology for characterizing the PK of cervimab using nonlinear
mixed-effects modeling (NLME), identifying clinically relevant
covariates, and supporting subsequent exposure-response (E-R) analyses.
This plan was prospectively developed prior to unblinding of PK data, in
accordance with FDA guidance on population pharmacokinetics (2022) and
ICH E4/M3 principles.

**2. OBJECTIVES**

**2.1 Primary Objectives**

- Develop a robust population PK model to characterize the PK of
  cervimab following IV administration in the target patient population

- Estimate individual-level Bayesian PK parameters and derived exposure
  metrics (AUC, Cmax, Ctrough) for use in E-R analyses

- Evaluate and quantify the effect of clinically relevant patient
  characteristics (covariates) on cervimab PK

**2.2 Secondary Objectives**

- Compare observed PK in Phase 2 patients with Phase 1 healthy volunteer
  and patient data

- Simulate PK at the proposed commercial dosing regimen and assess
  adequacy of PK target attainment

- Provide individual predicted PK parameter estimates to support
  efficacy and safety E-R analyses

**3. DATA**

**3.1 Source Data**

PK data will be derived from Study CVM-001-202 (Phase 2). Supplemental
data from the Phase 1 dose-escalation study (CVM-001-101) will be
incorporated to support base model development and bridging.

PK samples will be collected as follows:

- Cycle 1 (Day 1): pre-dose, end-of-infusion (60 min), 2 h, 4 h, 8 h, 24
  h, 72 h, and 168 h post-infusion start

- Cycle 3 and Cycle 6 Day 1: pre-dose and end-of-infusion (trough and
  Cmax)

- All subsequent odd cycles (C9, C11\...): pre-dose trough only

- End of treatment and 30-day follow-up visits

**3.2 Data Inclusion/Exclusion Criteria**

Inclusion criteria for PK analysis:

- All patients who received at least one dose of cervimab and have at
  least one post-dose PK concentration

- All PK concentrations above the lower limit of quantification (LLOQ =
  0.100 mcg/mL)

Exclusion criteria:

- Concentrations flagged as protocol deviations with documented
  analytical failure

- Samples with documented pre-dose collection within 72 h of prior dose
  (for trough samples only, unless dose records confirm exact timing)

- Subjects with confirmed ADA positivity impacting PK (as adjudicated by
  the immunogenicity review committee)

**3.3 Covariates**

The following covariates will be evaluated in the PopPK model:

  -------------------------------------------------------------------------
  **Covariate          **Specific Variable** **Rationale**
  Category**                                 
  -------------------- --------------------- ------------------------------
  Demographic          Body weight (BWT)     Allometric scaling of CL and V

  Demographic          Age                   Age-related changes in IgG
                                             recycling/FcRn

  Demographic          Sex                   Potential effect on Vd and CL

  Demographic          Race/Ethnicity        PK variability between
                                             populations

  Organ Function       eGFR (CKD-EPI)        Impact on
                                             catabolism/elimination

  Organ Function       ALT, AST, Total       Hepatic function marker
                       Bilirubin             

  Organ Function       Albumin               Drug binding, distribution
                                             volume

  Disease              ECOG PS (0/1 vs. 2)   Disease severity and
                                             physiology

  Disease              Tumor burden (sum of  Volume of distribution
                       diameters)            correlate

  Immunogenicity       ADA status            Potential impact on clearance
                       (positive/negative)   

  Drug-related         Anti-drug antibody    Continuous ADA effect on CL
                       titer                 
  -------------------------------------------------------------------------

**4. MODELING STRATEGY**

**4.1 Software**

Analyses will be performed using NONMEM v7.5 (ICON plc) with PsN v5.3.0
toolkit and R v4.3 (CRAN) for data preparation, visualization, and
diagnostics. Perl-speaks-NONMEM (PsN) will be used for model selection,
bootstrapping, and visual predictive checks. The FOCE with INTERACTION
estimation method will be used as the primary method.

**4.2 Base Structural Model**

Based on the biologic class and IV administration, the following
structural models will be evaluated sequentially:

- One-compartment model with first-order elimination (linear PK)

- Two-compartment model with first-order elimination

- Two-compartment model with parallel linear and Michaelis-Menten
  (target-mediated drug disposition, TMDD) elimination --- if
  nonlinearity is observed

Fixed allometric scaling on clearance (CL, Q) and volume (V1, V2) using
body weight with exponents of 0.75 and 1.0, respectively, will be
implemented as part of the base structural model, consistent with best
practices for monoclonal antibodies.

**4.3 Random Effects Model**

Between-subject variability (BSV) will be modeled as exponential
(log-normal) on all primary PK parameters. Residual unexplained
variability (RUV) will be characterized using combined additive plus
proportional error models. Between-occasion variability (BOV) will be
explored if supported by the data.

**4.4 Covariate Analysis**

Covariate analysis will follow a stepwise approach:

- Step 1 --- Graphical assessment: Empirical Bayes estimates (EBEs) of
  PK parameters will be plotted against each potential covariate to
  assess relationships

- Step 2 --- Forward selection: Covariates with \|DOBJ\| \> 6.635 (p \<
  0.01, chi-square, 1 df) will be added iteratively

- Step 3 --- Backward elimination: Covariates will be retained if
  removal causes \|DOBJ\| \> 10.828 (p \< 0.001)

- Clinical relevance criterion: Covariates will be retained only if the
  effect size results in \> 20% change in AUCss or Cmax relative to
  reference

Continuous covariates will be centered on the population median.
Categorical covariates will be coded as binary or ordinal indicators.
Power, linear, and exponential functional forms will be compared for
continuous covariates.

**4.5 Model Evaluation**

The final model will be evaluated using:

- Goodness-of-fit (GOF) plots: CWRES vs. TIME, DV vs. IPRED, DV vs. PRED

- Visual predictive check (VPC): 1,000 simulations, stratified by dose,
  occasion, and key covariates

- Normalized prediction distribution errors (NPDE)

- Non-parametric bootstrap (n = 1,000) for parameter uncertainty
  estimation and 95% confidence intervals

**5. DERIVED EXPOSURE METRICS**

Individual Bayesian post-hoc estimates of the following PK parameters
and derived metrics will be generated for each patient for use in E-R
analyses:

  ---------------------------------------------------------------------
  **Parameter**    **Definition**          **Notes**
  ---------------- ----------------------- ----------------------------
  CL (L/day)       Total body clearance    Primary elimination
                                           parameter

  V1 (L)           Central volume of       ---
                   distribution            

  V2 (L)           Peripheral volume of    From 2-compartment model
                   distribution            

  AUCss            AUC at steady-state     Primary E-R metric for
  (mcg\*day/mL)    (Cycle 3 Day 1)         efficacy

  Cmax,ss (mcg/mL) Peak conc. at           Cycle 1 Day 1 EOI
                   steady-state            

  Ctrough,ss       Trough conc. at         Pre-dose Cycle 3
  (mcg/mL)         steady-state            

  t1/2 (days)      Effective half-life     Derived from CL and Vss
  ---------------------------------------------------------------------

**6. SIMULATIONS**

Following final model acceptance, the following simulations will be
performed (n = 1,000 virtual subjects per scenario):

- Replicate the proposed commercial regimen (400 mg Q3W IV) and
  characterize steady-state PK distributions

- Dose-proportionality assessment across the dose range evaluated in
  Phase 1/2 (200--600 mg)

- Covariate sensitivity analysis: simulate exposure in covariate
  subgroups (e.g., low vs. normal body weight, mild/moderate renal
  impairment) to assess need for dose adjustment

- Time to steady-state characterization

**7. REPORTING**

This analysis plan will be finalized and version-controlled prior to
database lock and PK data unblinding. Results will be reported in a
Population PK Report (CVM-001-POPPK-RPT-001) and will be included in
Module 2.7.2 (Summary of Clinical Pharmacology Studies) of the NDA/BLA
submission package. Individual Bayesian PK parameter estimates will be
transferred to the E-R analysis team under controlled file transfer.

**8. REFERENCES**

- US FDA. Population Pharmacokinetics: Guidance for Industry. February
  2022.

- ICH E4. Dose-Response Information to Support Drug Registration. 1994.

- Beal SL, Sheiner LB, Boeckmann A, Bauer RJ. NONMEM Users Guide.
  1989-2009. ICON plc.

- Lindbom L, et al. Perl-speaks-NONMEM (PsN) --- a Perl module for
  NONMEM related programming. Comput Methods Programs Biomed. 2004.

- US FDA. Guidance for Industry: Clinical Pharmacology Considerations
  for the Development of Monoclonal Antibodies. 2022.

**9. APPENDIX: PLANNED DIAGNOSTIC PLOTS**

The following diagnostic plots will be presented in the final PopPK
report:

**A.1 Base Model Diagnostics**

- DV vs PRED and DV vs IPRED (with identity line and loess smoother)

- CWRES vs PRED and CWRES vs TIME (with reference lines at ±2)

- Histogram and QQ-plot of CWRES

**A.2 Covariate Analysis**

- EBE-covariate scatter plots with regression lines for all evaluated
  covariates

- Forest plots of covariate effects on AUCss and Cmax,ss (percent change
  relative to reference individual)

**A.3 Model Qualification**

- Visual predictive checks (VPC) stratified by dose, study, and key
  covariates

- NPDE distribution plots

- Bootstrap parameter distributions vs. final model estimates
