**STATISTICAL ANALYSIS PLAN**

**Phase 2a Study of Cervimab in dMMR/MSI-H Metastatic Colorectal
Cancer**

  -------------------------------------------------------------------
  **Parameter**         **Details**
  --------------------- ---------------------------------------------
  Protocol Number       CVB-CRC-201

  Document Type         Statistical Analysis Plan (SAP)

  Sponsor               Cervi Therapeutics, Inc.

  Statistician          John A. Smith, PhD, Senior Biostatistician

  Statistical           Mary L. Chen, SAS Programming Lead
  Programming Lead      

  Version               1.0

  Date                  01 March 2025

  Software              SAS v9.4 (primary); R v4.3.1
                        (sensitivity/exploratory)

  Status                FINAL --- approved prior to database lock
  -------------------------------------------------------------------

**IMPORTANT: This SAP is finalized before database lock and unblinding.
Any post-hoc analyses added after the primary analysis will be clearly
identified as such.**

**1. INTRODUCTION**

**1.1 Purpose**

This Statistical Analysis Plan (SAP) describes the planned statistical
analyses for the CVB-CRC-201 clinical study. It is intended to
pre-specify all primary, secondary, and key exploratory analyses to be
performed in order to minimize potential bias and ensure transparency of
the analytical approach. This SAP was finalized and approved prior to
database lock and unblinding of the primary efficacy data.

This SAP should be read in conjunction with the study protocol (Version
1.0, 01 March 2025) and the Data Management Plan. In case of any
discrepancy between this SAP and the protocol, the SAP takes precedence
for the purposes of statistical analysis.

**1.2 Study Design Summary**

CVB-CRC-201 is a Phase 2a, open-label, single-arm, multicenter study of
cervimab 200 mg IV Q3W in patients with dMMR/MSI-H mCRC who have
received at least 1 prior line of systemic therapy. The study employs a
two-stage Simon Optimal design with the following parameters:

- Null hypothesis (H0): ORR (p0) \<= 20%

- Alternative hypothesis (H1): ORR (p1) \>= 40%

- One-sided alpha: 0.05

- Power: 80%

- Stage 1: N=19; continue if \>= 6 responses

- Stage 2: Total N=40; reject H0 if \>= 13 responses

**2. ANALYSIS POPULATIONS**

  ---------------------------------------------------------------------------
  **Population**        **Definition**                   **Primary Use**
  --------------------- -------------------------------- --------------------
  Intent-to-Treat (ITT) All enrolled patients who        Safety; secondary to
                        received at least 1 dose of      EE for efficacy
                        cervimab                         

  Efficacy-Evaluable    All ITT patients with at least 1 PRIMARY efficacy
  (EE)                  post-baseline tumor assessment   analysis
                        OR who discontinued due to PD or 
                        death before first assessment    

  Safety Population     All ITT patients (identical to   All safety analyses;
                        ITT for this single-arm study)   summarized as Safety
                                                         Pop.

  Per-Protocol (PP)     EE patients with no major        Sensitivity analysis
                        protocol deviations affecting    for ORR
                        efficacy evaluation (defined     
                        prospectively before unblinding) 

  Pharmacokinetic (PK)  All Safety Population patients   PK analyses
  Population            with at least 1 evaluable PK     
                        concentration sample             

  Biomarker-Evaluable   All patients with evaluable      Exploratory
  Population            biomarker sample for given       biomarker analyses
                        biomarker (PD-L1, TMB, ctDNA --- 
                        defined separately)              
  ---------------------------------------------------------------------------

A patient is considered non-evaluable for efficacy if they: (a) withdraw
consent before any tumor assessment and did not progress; (b) are lost
to follow-up before any tumor assessment; or (c) have technical imaging
failure preventing any post-baseline response determination.
Non-evaluable patients are counted as non-responders in sensitivity
analyses.

**3. ENDPOINTS AND ANALYSIS METHODS**

**3.1 Primary Endpoint: Objective Response Rate (ORR)**

**3.1.1 Definition**

ORR is defined as the proportion of patients in the EE Population who
achieve a Confirmed Complete Response (CR) or Confirmed Partial Response
(PR) as the best overall response (BOR), according to RECIST v1.1
criteria assessed by Blinded Independent Central Review (BICR).

Confirmation of response requires a second response assessment no sooner
than 4 weeks (28 days) after the initial response criteria are met.

**3.1.2 Statistical Method**

ORR will be estimated as:

*ORR = (Number of Confirmed CR + Confirmed PR) / N(EE) x 100%*

A two-sided 95% exact Clopper-Pearson confidence interval will be
computed. The hypothesis test will be one-sided at alpha = 0.05.

The null hypothesis H0: ORR \<= 20% will be rejected if \>= 13 confirmed
responses are observed in 40 evaluable patients. The one-sided p-value
will be computed based on the exact binomial test:

*p = P(X \>= 13 \| n=40, p0=0.20) = 1 - CDF(Binomial(40, 0.20), 12)*

Patients with unknown or unconfirmed best overall response will be
counted as non-responders (PR/SD cannot be confirmed) in the primary
analysis.

**3.1.3 Sensitivity Analyses for ORR**

- Sensitivity 1 --- PP Population: ORR analysis restricted to the
  Per-Protocol population, excluding patients with major protocol
  deviations that may have influenced response assessment.

- Sensitivity 2 --- ITT Population: All enrolled patients as
  denominator; non-evaluable patients counted as non-responders.

- Sensitivity 3 --- Investigator Assessment: ORR as assessed by the
  local investigator rather than BICR, using the same RECIST v1.1
  criteria.

- Sensitivity 4 --- iRECIST: ORR using immune-modified RECIST (iRECIST)
  in EE population to account for potential pseudo-progression.

**3.2 Secondary Endpoints**

**3.2.1 Duration of Response (DoR)**

DoR is defined as the time from the date of first confirmed CR or PR
(whichever occurs first) to the date of first objectively documented PD
(per BICR) or death from any cause, whichever occurs first, for patients
who achieve a confirmed objective response.

DoR will be analyzed only in confirmed responders (CR/PR). Patients who
have not progressed or died at the time of analysis will be censored at
the date of last tumor assessment showing non-progression.

DoR will be estimated using the Kaplan-Meier method. Median DoR and
associated 95% CI will be estimated using the KM estimator with
Greenwood\'s variance formula. The 25th and 75th percentiles will also
be reported. Event-free rates at 6, 12, and 18 months will be reported
with 95% CIs (plain method).

**3.2.2 Progression-Free Survival (PFS)**

PFS is defined as the time from the date of first cervimab dose to the
date of first objectively documented disease progression per RECIST v1.1
by BICR or death from any cause, whichever occurs first.

Censoring rules (pre-specified, in order of application):

- Patient is progression-free and alive at data cutoff: censored at date
  of last evaluable tumor assessment.

- Patient begins new anticancer therapy without prior documented PD:
  censored at date of last evaluable tumor assessment before new
  therapy.

- Patient has no post-baseline assessment and did not die: censored at
  date of first dose (Day 1).

- Patient is lost to follow-up: censored at date of last known
  alive/progression-free.

PFS will be estimated using the Kaplan-Meier method. Median PFS,
25th/75th percentiles, and 6/12/18-month event-free rates with 95% CIs
will be reported. The log-rank test is not applicable in this single-arm
design; the primary summary will be descriptive KM estimation.

**3.2.3 Overall Survival (OS)**

OS is defined as the time from the date of first cervimab dose to death
from any cause. Patients alive at the time of analysis will be censored
at the last date known to be alive. OS will be analyzed using the same
KM methodology as PFS. For this Phase 2a study, OS data are expected to
be immature at the time of primary analysis; OS will be updated in a
subsequent analysis after at least 18 months of median follow-up.

**3.2.4 Disease Control Rate (DCR)**

DCR is defined as the proportion of EE patients achieving CR + PR +
Stable Disease (SD) for at least 12 weeks as their best overall response
per BICR. DCR and its two-sided exact 95% Clopper-Pearson CI will be
computed analogously to ORR.

**3.3 Subgroup Analyses**

The following pre-specified subgroup analyses will be performed for ORR
and, where data are sufficient, for PFS. All subgroup analyses are
exploratory and hypothesis-generating. No multiplicity adjustments will
be applied.

  ----------------------------------------------------------
  **Subgroup         **Categories**        **Endpoint(s)**
  Variable**                               
  ------------------ --------------------- -----------------
  Number of Prior    1 vs. \>= 2           ORR, PFS
  Lines of Therapy                         

  ECOG Performance   0 vs. 1               ORR, PFS
  Status                                   

  Primary Tumor      Right-sided           ORR, PFS
  Location           (cecum-transverse)    
                     vs. Left-sided        
                     (descending-rectum)   

  Lynch Syndrome vs. Lynch / Sporadic /    ORR
  Sporadic dMMR      Unknown               

  Tumor PD-L1 CPS    CPS \< 1 vs. 1-\<10   ORR, PFS
                     vs. \>= 10            

  Prior Bevacizumab  Yes vs. No            ORR
  Exposure                                 

  Tumor Mutational   TMB-H (\>=10 mut/Mb)  ORR, PFS
  Burden (TMB)       vs. TMB-L (\<10       
                     mut/Mb)               

  Age                \< 65 years vs. \>=   ORR, PFS
                     65 years              

  Sex                Male vs. Female       ORR

  MMR Testing Method IHC vs. Molecular     ORR
                     (PCR/NGS)             
  ----------------------------------------------------------

Subgroup results will be presented as ORR (%) with exact 95% CIs and
forest plots. For PFS, KM curves and median estimates by subgroup will
be provided.

**4. SAFETY ANALYSES**

**4.1 Adverse Event Summaries**

All safety analyses will be performed on the Safety Population. Adverse
events will be coded using MedDRA v26.0. Treatment-emergent adverse
events (TEAEs) are defined as AEs with onset on or after the date of
first cervimab dose and up to 30 days after the last dose. Each patient
will be counted once per AE category (SOC and PT) at the maximum CTCAE
grade observed.

The following AE summary tables will be produced:

- AEs by MedDRA SOC and PT (all grades, and Grade \>= 3, separately):
  incidence and percentage

- Treatment-Related AEs (TRAEs; definitely/probably/possibly related) by
  SOC/PT, all grades and Grade \>= 3

- Serious Adverse Events (SAEs) by SOC/PT and relationship to study drug

- Immune-related AEs (irAEs) by organ system and CTCAE grade

- AEs leading to dose delay, treatment discontinuation, or death

- Most frequent TRAEs (\>= 10% of patients)

**4.2 Laboratory Assessments**

Descriptive statistics (N, mean, median, SD, min, max) for continuous
laboratory parameters will be provided by visit. Shift tables from
baseline to worst post-baseline CTCAE grade (Grade 0/1/2/3/4) will be
produced for key hematology and chemistry parameters. Notable
abnormalities (values meeting Grade \>= 3 CTCAE criteria) will be
individually listed.

**4.3 Vital Signs and ECG**

Summary statistics for vital sign parameters and ECG intervals (HR, PR,
QRS, QTc using Fridericia correction \[QTcF\]) will be provided by
visit. Changes from baseline will be summarized. Potentially clinically
significant (PCS) abnormalities will be flagged per pre-specified
criteria.

**4.4 Exposure-Response Analyses**

If sufficient PK and efficacy/safety data are available, exploratory
exposure-response analyses will evaluate relationships between cervimab
Ctrough (trough concentration) and: (a) ORR; (b) Grade \>= 3 irAE
incidence. These are descriptive; statistical significance testing is
not planned due to small sample size.

**5. MISSING DATA HANDLING**

**5.1 General Principle**

The amount and pattern of missing data will be assessed and summarized.
All analyses will follow pre-specified rules for handling missing data
as described below. In general, no imputation is planned for the primary
efficacy endpoint. Sensitivity analyses are specified to assess the
potential impact of missing data.

**5.2 Best Overall Response and ORR**

Patients with no evaluable post-baseline tumor assessment (other than
those who progressed) will be classified as non-evaluable and excluded
from the EE Population. In the ITT sensitivity analysis, they will be
counted as non-responders. Unconfirmed responses (i.e., initial CR/PR
without confirmatory scan within the protocol window) will be classified
as the best documented response (SD or NE) --- not as confirmed PR/CR.

**5.3 Time-to-Event Endpoints**

Missing event dates will not be imputed. Pre-specified censoring rules
(Section 3.2.2) will be applied consistently. A worst-case sensitivity
analysis will be performed for PFS, wherein patients with missing
follow-up data (not documented as progression-free) will be assigned as
progressed/dead at the date of last known contact.

**5.4 Laboratory and Vital Signs**

Missing laboratory values will not be imputed. Descriptive summaries
will reflect observed data only; the number of patients with non-missing
values (N) will be reported for each parameter and visit.

**5.5 Patient-Reported Outcomes**

PRO data (EORTC QLQ-C30, EQ-5D-5L) will be summarized descriptively.
EORTC scoring manuals will be followed for scale score calculation.
Patients with \>50% items missing for a given scale will be excluded
from that scale\'s analysis. Change from baseline will be described; no
imputation for missing PRO items is planned.

**6. MULTIPLICITY**

The primary analysis is a single hypothesis test (H0: ORR \<= 20%) at a
pre-specified one-sided alpha of 0.05, consistent with the Simon
two-stage design. No multiplicity adjustment is needed for the primary
endpoint.

Secondary endpoints are tested in a descriptive framework. No formal
multiplicity corrections are applied to secondary endpoints; results are
presented with 95% CIs. All subgroup and exploratory analyses are
hypothesis-generating only; no type I error adjustment is applied, and
all such results should be interpreted cautiously.

**7. INTERIM ANALYSES**

Formal interim analysis: None planned for efficacy. The Simon two-stage
design incorporates a built-in futility interim at Stage 1 (after 19
evaluable patients). The futility analysis will be performed when 19
evaluable patients have had at least one post-baseline tumor assessment.
If \<= 5 responses are observed in 19 patients, the study will stop for
futility.

Safety interim reviews will be performed by the DSMB (after each
10-patient cohort) per the DSMB Charter. DSMB safety reviews do not
constitute formal statistical interim analyses and do not affect the
overall Type I error rate. Safety data shared with the DSMB will be
flagged as interim; the study team remains blinded to emerging efficacy
data until the primary analysis.

**8. OUTPUTS: PLANNED TABLES, FIGURES, AND LISTINGS**

  ----------------------------------------------------------------
  **\#**   **Description**             **Population**   **Data
                                                        Source**
  -------- --------------------------- ---------------- ----------
  T1.1     Patient Disposition         ITT              DS
           (enrolled, treated,                          
           completed, discontinued by                   
           reason)                                      

  T2.1     Baseline Demographics and   Safety Pop       DM, MH, SC
           Disease Characteristics                      

  T2.2     Prior Anticancer Therapy    Safety Pop       CM/PR

  T3.1     Primary Endpoint: ORR with  EE               RS
           95% CI (BICR) --- MAIN                       
           TABLE                                        

  T3.2     Best Overall Response       EE               RS
           Distribution                                 

  T3.3     ORR Subgroup Analysis       EE subgroups     RS + SC +
           (Forest Plot Data)                           QS

  T3.4     Duration of Response        Responders       RS
           Summary (KM)                                 

  T3.5     Progression-Free Survival   EE               RS, DS
           Summary (KM)                                 

  T3.6     Overall Survival Summary    ITT              DS
           (KM)                                         

  T3.7     Disease Control Rate with   EE               RS
           95% CI                                       

  T4.1     TEAEs by SOC/PT (All        Safety Pop       AE
           Grades; N, %)                                

  T4.2     Grade \>= 3 TEAEs by SOC/PT Safety Pop       AE

  T4.3     Treatment-Related AEs by    Safety Pop       AE
           SOC/PT (All Grades)                          

  T4.4     Serious Adverse Events      Safety Pop       AE

  T4.5     Immune-Related AEs by Organ Safety Pop       AE
           System and Grade                             

  T4.6     AEs Leading to Dose Delay,  Safety Pop       AE, DS
           Discontinuation, Death                       

  T5.1     Laboratory Shift Tables     Safety Pop       LB
           (Baseline to Worst Grade)                    
           --- Hematology                               

  T5.2     Laboratory Shift Tables --- Safety Pop       LB
           Chemistry                                    

  T6.1     EORTC QLQ-C30 Summary       PRO Pop          QS
           Scores by Visit                              

  F1.1     Kaplan-Meier Curve --- PFS  EE               RS, DS

  F1.2     Kaplan-Meier Curve --- OS   ITT              DS

  F1.3     Kaplan-Meier Curve --- DoR  Responders       RS
           (Responders)                                 

  F1.4     Waterfall Plot --- Best %   EE (evaluable)   RS
           Change in SoD from Baseline                  

  F1.5     Spider Plot --- SoD Change  EE (evaluable)   RS
           Over Time                                    

  F1.6     Swimmer Plot --- Individual EE               EX, RS, DS
           Patient Treatment Duration                   
           and Response                                 

  F1.7     Forest Plot --- ORR         EE subgroups     RS
           Subgroup Analysis                            

  L1.1     Patient Listing ---         EE               All
           Individual Efficacy Data                     

  L2.1     Patient Listing --- SAEs    Safety Pop       AE

  L2.2     Patient Listing --- AEs     Safety Pop       AE, DS
           Leading to Discontinuation                   

  L2.3     Patient Listing --- Deaths  Safety Pop       DS, AE
  ----------------------------------------------------------------

**9. SOFTWARE AND COMPUTING ENVIRONMENT**

- Primary analysis software: SAS Version 9.4 (SAS Institute, Cary, NC,
  USA)

- Sensitivity and graphical analyses: R Version 4.3.1 (packages:
  survival, km.ci, forestplot, ggplot2, ggsurvfit)

- KM estimates: SAS PROC LIFETEST (KMPLOT option); R survfit() from
  survival package

- Exact binomial CI: SAS PROC FREQ (EXACT option); binom.test() in R

- MedDRA coding: SAS-based MedDRA autocoder with manual review

- Data management: CDASH-compliant EDC; SDTM-derived analysis datasets
  (ADaM format: ADSL, ADRS, ADTTE, ADAE, ADLB, ADEX)

- ADaM dataset specifications: Defined in separate ADaM Specifications
  document (CVB-CRC-201-ADAM-SPEC-v1.0)

**10. DOCUMENT HISTORY AND APPROVAL**

  -----------------------------------------------------------------------------
  **Version**   **Date**   **Author**        **Summary of Changes**
  ------------- ---------- ----------------- ----------------------------------
  0.1 (Draft)   15 Jan     J.A. Smith, PhD   Initial draft for internal review
                2025                         

  0.2 (Draft)   05 Feb     J.A. Smith, PhD;  Incorporated medical monitor
                2025       M.L. Chen         comments; refined censoring rules

  1.0 (Final)   01 Mar     J.A. Smith, PhD   Final version; approved prior to
                2025                         database lock
  -----------------------------------------------------------------------------

Approved signatures on file:

Biostatistician:
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_

Medical Monitor:
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_

Head of Data Management:
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date:
\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**APPENDIX A: SIMON TWO-STAGE DESIGN DECISION TABLE**

  ------------------------------------------------------------------------------------------
  **Stage**   **N          **Responses Needed   **Action if     **Alpha          **Power**
              Enrolled**   to                   Criterion NOT   (cumulative)**   
                           Continue/Succeed**   Met**                            
  ----------- ------------ -------------------- --------------- ---------------- -----------
  Stage 1     19           \>= 6 responses to   Stop for        0.05 (one-sided) 80%
  Interim                  proceed              futility                         

  Stage 2     40 (total)   \>= 13 responses to  Fail to reject  0.05 (one-sided) 80%
  Final                    reject H0            H0                               
                                                (insufficient                    
                                                efficacy)                        
  ------------------------------------------------------------------------------------------

Under H0 (p=0.20), the probability of incorrectly concluding efficacy
(Type I error) = 0.049 (\< 0.05). Under H1 (p=0.40), the probability of
correctly concluding efficacy (Power) = 0.804. Expected sample size
under H0 = 26.1 patients; under H1 = 38.0 patients.

**APPENDIX B: RECIST v1.1 RESPONSE CRITERIA SUMMARY (FOR REFERENCE)**

  ----------------------------------------------------------------
  **Response    **Target Lesion      **Non-Target      **New
  Category**    Criteria**           Criteria**        Lesions**
  ------------- -------------------- ----------------- -----------
  Complete      Disappearance of all Disappearance of  None
  Response (CR) target lesions; any  all non-target    
                lymph nodes reduced  lesions; all      
                to \<10 mm short     lymph nodes       
                axis                 normal            

  Partial       \>= 30% decrease in  Non-CR/non-PD     None
  Response (PR) SoD from baseline                      

  Stable        Neither PR nor PD    Non-CR/non-PD     None
  Disease (SD)  criteria met;                          
                duration \>= 12                        
                weeks                                  

  Progressive   \>= 20% increase     Unequivocal       Present
  Disease (PD)  from nadir SoD AND   progression       
                absolute increase                      
                \>= 5 mm; OR new                       
                lesion(s)                              

  Not Evaluable Insufficient data to N/A               N/A
  (NE)          classify; \>= 1                        
                target lesion not                      
                measured                               
  ----------------------------------------------------------------
