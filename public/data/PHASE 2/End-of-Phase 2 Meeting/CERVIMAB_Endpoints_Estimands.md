**AGREED ENDPOINTS AND ESTIMANDS**

**CERVIX-03 --- Cervimab Phase 3 Study in dMMR/MSI-H mCRC**

*Estimand Framework per ICH E9(R1) Addendum on Estimands and Sensitivity
Analysis in Clinical Trials*

  --------------------- -----------------------------------------------
  **Document Status:**  Draft --- For EOP2 Meeting Discussion (Version
                        1.0, March 16, 2026)

  **Author:**           Vexion Therapeutics, Inc. --- Biostatistics and
                        Clinical Development

  **Reference:**        ICH E9(R1) Addendum (November 2019); FDA
                        Guidance on Estimands (November 2023)
  --------------------- -----------------------------------------------

1\. PURPOSE AND SCOPE

This document defines the endpoints and estimands for the pivotal Phase
3 study CERVIX-03, in alignment with ICH E9(R1). For each endpoint, the
five estimand attributes are specified: (1) the treatment condition of
interest, (2) the target population, (3) the variable (outcome), (4) the
strategy for addressing intercurrent events (ICEs), and (5) the
population-level summary measure. Sensitivity and supplementary analyses
are described for the primary estimand.

**The following intercurrent events are anticipated in CERVIX-03 and are
addressed by each estimand:**

- ICE-1: Treatment discontinuation (due to toxicity, patient withdrawal,
  death, or other reason) prior to the primary event

- ICE-2: Initiation of subsequent anti-cancer therapy (chemotherapy,
  targeted, or immunotherapy) prior to the primary event

- ICE-3: Non-protocol-specified procedures affecting disease assessment

- ICE-4: Death (relevant for PFS and ORR estimands)

2\. PRIMARY ESTIMAND --- PROGRESSION-FREE SURVIVAL (PFS)

  ---------------------------------------------------------------------
  **Estimand        **Specification**
  Attribute**       
  ----------------- ---------------------------------------------------
  1\. Treatment     Cervimab 400 mg IV Q6W versus Investigator\'s
  Condition         Choice Chemotherapy (FOLFIRI ± bevacizumab,
                    regorafenib, or trifluridine/tipiracil) as
                    allocated at randomization, regardless of treatment
                    received

  2\. Target        All randomized adult patients with confirmed
  Population        dMMR/MSI-H mCRC who received ≥1 prior line of
                    fluoropyrimidine-based systemic therapy
                    (Intent-to-Treat population)

  3\. Variable      Time in months from date of randomization to the
  (Outcome)         earlier of: (a) first documented radiologic disease
                    progression per RECIST v1.1 assessed by blinded
                    independent central review (BICR); or (b) death
                    from any cause. Patients alive and free of
                    progression at the data cutoff date are censored at
                    the date of last adequate tumor assessment.

  4\. ICE           ICE-1 (Treatment Discontinuation): Composite
  Strategies        strategy --- disease progression and death events
                    occurring after treatment discontinuation are
                    counted as PFS events. Patients who discontinue
                    without progression are followed for radiologic
                    assessment until PD or death. ICE-2 (Subsequent
                    Therapy): Composite strategy --- consistent with
                    treatment policy; subsequent therapy does not
                    affect PFS censoring. Patients are censored at last
                    adequate assessment only if lost to follow-up
                    without an event. ICE-4 (Death without Prior
                    Progression): Death from any cause counts as a PFS
                    event, regardless of proximity to last tumor
                    assessment (treatment policy for death).

  5\. Summary       Hazard Ratio (HR) estimated by stratified Cox
  Measure           proportional hazards model (strata: prior lines of
                    therapy, BRAF V600E status, geographic region); 95%
                    confidence interval. Median PFS estimated by
                    Kaplan-Meier method with 95% CI
                    (Brookmeyer-Crowley). 12-month and 18-month PFS
                    rates with 95% CI. Statistical test: Stratified
                    log-rank test; two-sided α = 0.05.
  ---------------------------------------------------------------------

2.1 Sensitivity Analyses for Primary PFS Estimand

  ---------------------------------------------------------------------
  **Sensitivity           **Description**
  Analysis**              
  ----------------------- ---------------------------------------------
  SA-1: Unstratified      Unstratified log-rank test without
  log-rank                stratification factors

  SA-2: Per-Protocol      Primary analysis repeated in PP population
  Population              (excluding major protocol deviations
                          impacting PFS assessment)

  SA-3:                   Censoring at initiation of subsequent
  Crossover-adjusted      anti-cancer therapy (patients on ICC arm who
                          cross to OLE cervimab censored at crossover)

  SA-4: Conservative      Patients with ≥2 missed assessments censored
  censoring               at last assessment prior to first missed
                          visit

  SA-5:                   PFS assessed by investigator (not BICR) as
  Investigator-assessed   supplementary
  PFS                     

  SA-6: Weighted log-rank Non-proportional hazards scenario;
  (MaxCombo)              Fleming-Harrington weighted log-rank tests
                          G(0,0), G(1,0), G(0,1), G(1,1) combined
                          (MaxCombo)
  ---------------------------------------------------------------------

3\. KEY SECONDARY ESTIMAND --- OVERALL SURVIVAL (OS)

  ---------------------------------------------------------------------
  **Estimand        **Specification**
  Attribute**       
  ----------------- ---------------------------------------------------
  1\. Treatment     Cervimab vs. ICC as randomized (treatment policy
  Condition         strategy)

  2\. Target        All randomized patients (ITT)
  Population        

  3\. Variable      Time in months from date of randomization to death
  (Outcome)         from any cause. Patients alive at data cutoff
                    censored at date of last known alive.

  4\. ICE           ICE-2 (Subsequent Therapy): Treatment policy
  Strategies        strategy --- patients in ICC arm who subsequently
                    receive cervimab in the OLE are NOT censored at
                    crossover in the primary OS analysis; all deaths
                    counted regardless of subsequent therapy.
                    Hypothetical Strategy Sensitivity: Censoring ICC
                    patients at crossover to estimate OS in the
                    hypothetical scenario where crossover did not occur
                    (RPSFT or IPE method).

  5\. Summary       HR (stratified Cox model, same strata as PFS); 95%
  Measure           CI. Median OS (Kaplan-Meier); 24-month and 36-month
                    OS rates. Alpha allocation: final OS tested at α
                    per O\'Brien-Fleming spending function; interim OS
                    at \~50% events tested at α-spending boundary.
  ---------------------------------------------------------------------

4\. KEY SECONDARY ESTIMAND --- OBJECTIVE RESPONSE RATE (ORR)

  --------------------- -----------------------------------------------
  **Treatment           Cervimab vs. ICC as randomized
  Condition:**          

  **Target              All randomized patients with measurable disease
  Population:**         at baseline per RECIST v1.1 (ITT with
                        measurable disease; sensitivity: full ITT)

  **Variable:**         Proportion of patients achieving best overall
                        response of CR or PR per RECIST v1.1 assessed
                        by BICR

  **ICE Strategy:**     Treatment policy strategy: responses occurring
                        before or after ICEs (treatment
                        discontinuation, subsequent therapy) are
                        counted in the assessment of ORR

  **Summary Measure:**  ORR with 95% CI per Clopper-Pearson method;
                        between-arm difference with 95% CI; odds ratio
                        (logistic regression with stratification
                        factors)
  --------------------- -----------------------------------------------

5\. KEY SECONDARY ESTIMAND --- DURATION OF RESPONSE (DOR)

  --------------------- -----------------------------------------------
  **Target              Patients achieving CR or PR (responders)
  Population:**         

  **Variable:**         Time from date of first documented CR or PR to
                        first documented PD per RECIST v1.1 (BICR) or
                        death from any cause

  **ICE Strategy:**     Composite strategy (same as PFS) --- treatment
                        discontinuation does not censor; death is an
                        event; subsequent therapy does not censor

  **Summary Measure:**  Median DOR with 95% CI (Kaplan-Meier);
                        proportion with DOR ≥12 months
  --------------------- -----------------------------------------------

6\. KEY SECONDARY ESTIMAND --- HEALTH-RELATED QUALITY OF LIFE (HRQoL)

  --------------------- -----------------------------------------------
  **Instrument:**       EORTC QLQ-C30 (version 3.0); GHS/QoL scale
                        (items 29--30)

  **Target              All patients with baseline and ≥1 post-baseline
  Population:**         PRO assessment

  **Variable:**         Change from baseline in EORTC QLQ-C30 GHS/QoL
                        scale; time to definitive deterioration (TDD)
                        defined as ≥10-point decrease from baseline
                        confirmed at next assessment or followed by
                        death within 3 weeks

  **ICE Strategy:**     While on treatment: treatment policy (all
                        observations used). Post-progression/death:
                        hypothetical strategy --- multiple imputation
                        under missing not at random (MNAR) assumption
                        for sensitivity

  **Summary Measure:**  Mean change from baseline at each assessment
                        (mixed model for repeated measures, MMRM); TDD
                        analyzed by log-rank test and KM method

  **Assessment          Baseline, then every 2 cycles, and at end of
  Schedule:**           treatment; quarterly during follow-up
  --------------------- -----------------------------------------------

7\. SUPPLEMENTARY AND EXPLORATORY ESTIMANDS

  ----------------------------------------------------------------------
  **Endpoint**      **Variable**                  **Strategy**
  ----------------- ----------------------------- ----------------------
  Disease Control   Proportion with CR + PR + SD  Treatment policy
  Rate (DCR)        ≥8 weeks per BICR             

  PFS2              Time from randomization to    Treatment policy
                    2nd progression or death      (post-ICE events
                                                  counted)

  Time to Response  Time from randomization to    Descriptive
  (TTR)             first CR or PR in responders  (Kaplan-Meier)

  PD-L1 Subgroup    PFS and OS by CPS ≥1 vs. \<1  Same as primary
  PFS/OS                                          estimand; no alpha
                                                  allocation

  TMB Subgroup      PFS by TMB-H (≥10 mut/Mb) vs. Exploratory;
                    TMB-L                         descriptive

  ctDNA Clearance   Association of ctDNA          Exploratory biomarker;
                    clearance at C3D1 with PFS    no multiplicity
                                                  adjustment
  ----------------------------------------------------------------------

8\. MISSING DATA HANDLING

- Missing PFS assessments: patients without disease progression or death
  censored at date of last adequate tumor assessment (defined as
  assessment where at least target lesions are evaluable)

- Patients with no post-baseline tumor assessments due to early death:
  death counted as PFS event

- Patients lost to follow-up without event: censored at date of last
  contact

- Patients who withdraw consent: censored at date of withdrawal; vital
  status follow-up for OS to be attempted per local regulations

- Missing PRO data: items with ≥50% of items answered will be scored;
  MMRM model used for longitudinal HRQoL; MNAR sensitivity per
  controlled multiple imputation
