**CERVI THERAPEUTICS, INC.**

**COST-EFFECTIVENESS ANALYSIS**

CERVIMAB vs. FOLFOX/FOLFIRI ± Bevacizumab

dMMR/MSI-H Metastatic Colorectal Cancer --- Second Line and Beyond

  ---------------------- -------------------------------------------
  Model Type:            Partitioned Survival Model (3-state)

  Indication:            dMMR/MSI-H mCRC, ≥2nd line

  Comparator:            FOLFOX ± bevacizumab / FOLFIRI ±
                         bevacizumab

  Perspective:           US Third-Party Payer

  Time Horizon:          Lifetime (30 years)

  Discount Rate:         3% per annum (costs and effects)

  Base Case ICER:        \$142,300 per QALY gained

  Version:               Version 2.2 -- Final Submission

  Date:                  March 2026

  Classification:        CONFIDENTIAL
  ---------------------- -------------------------------------------

**1. INTRODUCTION AND OBJECTIVE**

This report presents a cost-effectiveness analysis (CEA) of cervimab
compared with investigator\'s choice of standard oxaliplatin- or
irinotecan-based chemotherapy (FOLFOX ± bevacizumab or FOLFIRI ±
bevacizumab) in adult patients with dMMR/MSI-H metastatic colorectal
cancer (mCRC) who have received at least one prior line of systemic
therapy for metastatic disease.

The analysis was developed to support the FDA BLA submission (BLA
761999), ICER review, and payer/HTA negotiations. The model follows best
practices outlined in the ISPOR-SMDM joint taskforce guidelines for
modeling good practice and the ICER Reference Case (Version 2.0, 2020).
All analyses were conducted from the perspective of a US third-party
payer, with a lifetime time horizon and 3% annual discounting of both
costs and quality-adjusted life-years (QALYs).

**2. MODEL STRUCTURE**

**2.1 Model Type: Partitioned Survival Model**

A partitioned survival model (PSM) was selected as the model type given:
(1) availability of robust individual patient data (IPD) from CERVI-301
to fit parametric survival functions; (2) standard use in oncology
cost-effectiveness analyses; and (3) alignment with ICER reference case
recommendations for oncology. The PSM was structured as a three-state
model with health states of: (1) Progression-Free (PF), (2) Progressed
Disease (PD), and (3) Death.

**2.2 Model States and Transitions**

  ------------------ -------------------------- --------------- ------------
  **State**          **Description**            **Utility Value **Source**
                                                (Base Case)**   

  Progression-Free   On treatment; no disease   0.74            CERVI-301
                     progression per RECIST                     EQ-5D-5L

  Progressed Disease Post-progression; may      0.58            Literature
                     receive subsequent                         (Starr et
                     therapies                                  al., 2021)

  Death              Absorbing state            0.00            ---
  ------------------ -------------------------- --------------- ------------

The proportion of patients in each health state at each cycle (1-month
cycles over 30-year horizon) was derived from the fitted survival
functions. Proportion in PF = S(PFS at time t). Proportion dead = 1 --
S(OS at time t). Proportion in PD = S(OS) -- S(PFS).

**2.3 Parametric Survival Modeling**

Parametric survival functions were fitted to PFS and OS data from
CERVI-301 using individual patient data (IPD). Model selection was
informed by visual inspection of Kaplan-Meier curves overlaid with
parametric fits, Akaike Information Criterion (AIC), Bayesian
Information Criterion (BIC), and clinical plausibility review.

  ------------------ -------------- ----------- -------------- ----------- --------------
  **Distribution**   **PFS AIC      **PFS AIC   **OS AIC       **OS AIC    **Selected**
                     (Cervimab)**   (Chemo)**   (Cervimab)**   (Chemo)**   

  Exponential        1842           1521        1634           1498        No

  Weibull            1798           1487        1589           1461        No

  Log-normal         1781           1492        1563           1449        Yes -- PFS

  Log-logistic       1785           1490        1558           1443        No

  Gompertz           1804           1501        1572           1455        No

  Generalized Gamma  1776           1488        1551           1439        Yes -- OS
  ------------------ -------------- ----------- -------------- ----------- --------------

The selected log-normal (PFS) and generalized gamma (OS) distributions
provided the best statistical fit with clinically plausible long-term
extrapolations reviewed and validated by an independent clinical
advisory board. Mixture cure models were also explored for cervimab PFS
given evidence of a plateau in the tail of the Kaplan-Meier curve;
results are presented as a scenario analysis.

**3. CLINICAL INPUTS**

**3.1 Treatment Efficacy**

Clinical inputs were derived from the CERVI-301 pivotal trial (data
cutoff March 15, 2025). Parametric survival models were fitted to IPD
for both treatment arms independently.

  ---------------------- -------------- ------------------ --------------
  **Parameter**          **Cervimab**   **Chemotherapy**   **Source**

  Median PFS             16.3 months    6.2 months         CERVI-301 BICR

  Median OS              NR (modeled    14.7 months        CERVI-301
                         \~32 mo)                          

  ORR                    43.7%          18.4%              CERVI-301

  Treatment duration     Aligned with   6 cycles (4.5 mo   Trial +
  (on-treatment)         PFS curve      median)            clinical input

  Subsequent therapy     71%            68%                CERVI-301
  rate                                                     

  Time on subsequent     4.2 months     4.8 months         CERVI-301
  therapy                                                  
  ---------------------- -------------- ------------------ --------------

**3.2 Adverse Event Inputs**

Grade 3--4 treatment-related adverse events (TRAEs) with \>2% incidence
in either arm were included in the model. Unit costs for AE management
were applied as one-time costs in the cycle of occurrence, with
hospitalization rates for each AE sourced from published literature and
adjusted for current US healthcare costs.

  ------------------- ------------ ----------- ----------- ----------------
  **Adverse Event**   **Cervimab   **Chemo     **Unit Cost **Disutility**
                      Incidence    Incidence   (USD)**     
                      (G3/4)**     (G3/4)**                

  Immune-mediated     4.2%         0%          \$8,400     0.12 × duration
  colitis                                                  

  Immune-mediated     2.3%         0%          \$6,200     0.08 × duration
  hepatitis                                                

  Neutropenia         1.5%         34.1%       \$4,800     0.15 × 0.5
                                                           cycles

  Anemia Grade 3+     2.1%         12.3%       \$3,600     0.09 × 0.5
                                                           cycles

  Peripheral          0.8%         8.7%        \$2,100     0.10 × 3 cycles
  neuropathy Grade 3                                       

  Febrile neutropenia 0.8%         9.2%        \$22,000    0.20 × 0.5
                                                           cycles

  Severe              1.1%         11.4%       \$1,800     0.08 × 0.5
  nausea/vomiting                                          cycles

  Diarrhea Grade 3+   2.4%         6.1%        \$3,200     0.10 × 0.5
                                                           cycles
  ------------------- ------------ ----------- ----------- ----------------

**4. UTILITY INPUTS**

**4.1 Health State Utilities**

Health state utility values were derived from the CERVI-301 trial using
the EQ-5D-5L instrument, crosswalked to EQ-5D-3L using the published UK
tariff following NICE reference case methodology and adapted to US
population norms using the MacLachlan crosswalk.

  ------------------- ----------- ------------ ------------------ ---------------
  **Health State**    **Utility   **95% CI**   **Distribution**   **Source**
                      Value**                                     

  Progression-Free    0.74        0.69--0.79   Beta (α=74, β=26)  CERVI-301
  (cervimab)                                                      EQ-5D-5L

  Progression-Free    0.64        0.59--0.69   Beta (α=64, β=36)  CERVI-301
  (chemotherapy)                                                  EQ-5D-5L

  Progressed Disease  0.58        0.53--0.63   Beta (α=58, β=42)  Starr et al.
                                                                  2021;
                                                                  meta-analysis

  Terminal phase      0.44        0.38--0.50   Beta (α=44, β=56)  Coyle et al.
  (last 3 months)                                                 2022
  ------------------- ----------- ------------ ------------------ ---------------

**4.2 Adverse Event Disutilities**

Short-term disutilities associated with Grade 3--4 adverse events were
applied as decrements to the cycle utility for the duration of the
event, sourced from published literature and validated against
trial-based PRO data.

**5. COST INPUTS**

**5.1 Drug Acquisition Costs**

Drug costs reflect the proposed Wholesale Acquisition Cost (WAC) for
cervimab and current Red Book/Medicaid Drug Rebate Program (MDRP)
pricing for comparator regimens. Net price estimates incorporate
anticipated mandatory rebates, negotiated rebates based on market
analogues, and plan-level pharmacy benefit manager (PBM) rebates.

  --------------- ------------ -------------- -------------- -----------------
  **Component**   **WAC (Per   **Net Price    **Dosing**     **Cycles/Year**
                  Cycle)**     Estimate**                    

  Cervimab 400 mg \$18,500     \$13,875 (25%  Q6W            \~8.7
  IV                           rebate)                       

  FOLFOX          \$4,200      \$3,570 (15%   Q2W            \~26
  (5-FU/LV/OX) IV              rebate)                       

  FOLFIRI         \$3,800      \$3,230 (15%   Q2W            \~26
  (5-FU/LV/IRI)                rebate)                       
  IV                                                         

  Bevacizumab 5   \$3,600      \$2,880 (20%   Q2W (with      \~26
  mg/kg                        rebate)        chemo)         

  Regorafenib     \$15,200     \$11,400       Daily (28-day  \~12
  (subsequent)                                cycle)         

  TAS-102         \$8,900      \$6,675        Twice daily    \~12
  (subsequent)                                (28-day)       
  --------------- ------------ -------------- -------------- -----------------

**5.2 Administration Costs**

  ---------------- ---------------------- ---------------------- ------------------
  **Cost           **Cervimab**           **Chemotherapy**       **Source/Notes**
  Component**                                                    

  Infusion         \$512/infusion         \$512/infusion         CMS ASP + admin
  administration                                                 fee

  Premedication    \$45/infusion          \$85/infusion          Average wholesale
  (steroid,                                                      
  antihistamine)                                                 

  Lab monitoring   \$180/cycle            \$220/cycle            CMS Clinical Lab
  (CBC, LFTs, CMP)                                               Fee Schedule

  Imaging (CT per  \$1,450 Q6W yr1; Q12W  \$1,450 Q8W            CMS 2025 MPFS
  RECIST)          yr2+                                          

  Physician/NP     \$310 Q6W              \$310 Q2W              CMS MPFS E/M
  visit                                                          

  irAE management  \$1,240/patient/year   N/A                    Model calculation
  (weighted avg)                                                 

  Supportive care  \$2,100/patient/year   \$4,800/patient/year   CMS data +
  (weighted avg)                                                 literature
  ---------------- ---------------------- ---------------------- ------------------

**5.3 Terminal Care Costs**

Terminal care costs (last 3 months of life) were derived from
SEER-Medicare linkage data (2018--2022) for patients with mCRC. A mean
terminal care cost of \$52,400 per patient was applied uniformly across
both arms, reflecting current US oncology end-of-life care patterns.

**6. BASE CASE RESULTS**

**6.1 Summary of Base Case Outcomes**

  ---------------------- -------------- ------------------ ------------------
  **Outcome**            **Cervimab**   **Chemotherapy**   **Incremental**

  Total Life-Years (LYs) 5.42           2.87               +2.55 LYs

  Total Quality-Adjusted 3.84           1.63               +2.21 QALYs
  LYs                                                      

  Life-Years in PF State 2.18           0.72               +1.46 LYs

  Total Drug Cost        \$281,400      \$87,300           +\$194,100

  Total Administration   \$38,700       \$29,400           +\$9,300
  Cost                                                     

  Total AE Cost          \$7,200        \$18,400           -\$11,200

  Total Subsequent       \$42,100       \$48,200           -\$6,100
  Therapy Cost                                             

  Total Terminal Care    \$52,400       \$52,400           \$0
  Cost                                                     

  TOTAL COST             \$421,800      \$235,700          +\$186,100

  Net incremental cost   ---            ---                \$186,100
  (vs. gross)                                              

  ICER (\$/QALY gained)  ---            ---                \$84,200

  ICER at WAC (no        ---            ---                \$142,300
  rebate)                                                  
  ---------------------- -------------- ------------------ ------------------

Note: The ICER at net price (\$84,200/QALY) is below the commonly cited
\$100,000--\$150,000/QALY willingness-to-pay threshold used by US
payers. Even at WAC with no rebate, the ICER of \$142,300/QALY is within
the range commonly deemed cost-effective by ICER for oncology conditions
with significant unmet need (threshold range \$100,000--\$200,000/QALY).

**7. SENSITIVITY ANALYSES**

**7.1 One-Way Sensitivity Analysis (OWSA)**

The OWSA identifies parameters with the greatest influence on the ICER.
The top 10 drivers of uncertainty are presented in descending order of
impact:

  ---------------- ------------------- ------------ ---------- ----------- -----------
  **Parameter**    **Base Case Value** **Low        **High     **ICER      **ICER
                                       Range**      Range**    Low**       High**

  OS HR (cervimab  0.51                0.38         0.68       \$78,100    \$224,400
  vs. chemo)                                                               

  PFS parametric   Log-normal          Weibull      Gen. Gamma \$101,200   \$159,800
  distribution                                                             

  Cervimab net     \$13,875/infusion   \$10,000     \$18,500   \$62,300    \$142,300
  price                                                                    

  PF utility       0.74                0.69         0.79       \$119,800   \$107,200
  (cervimab)                                                               

  Treatment        Aligned with PFS    PFS -20%     PFS +20%   \$118,400   \$168,700
  duration                                                                 

  Time horizon     30 years            15 years     Lifetime   \$171,300   \$136,800

  Discount rate    3%                  0%           5%         \$108,100   \$159,400

  Subsequent       Per model           No           Double     \$138,900   \$147,200
  therapy cost                         subsequent   cost                   

  Terminal care    \$52,400            \$30,000     \$80,000   \$139,100   \$146,400
  cost                                                                     

  Bevacizumab use  58%                 0%           100%       \$134,100   \$152,800
  with chemo                                                               
  ---------------- ------------------- ------------ ---------- ----------- -----------

**7.2 Probabilistic Sensitivity Analysis (PSA)**

PSA was conducted using Monte Carlo simulation with 10,000 iterations.
Parameter distributions were assigned as: Beta for utilities and
probabilities; Gamma for costs; Log-normal for relative risks and hazard
ratios. Results are presented as cost-effectiveness acceptability curves
(CEACs).

  ----------------------- --------------------- --------------------
  **WTP Threshold         **Probability         **95% CI**
  (\$/QALY)**             Cervimab              
                          Cost-Effective**      

  \$50,000                12%                   8%--17%

  \$100,000               38%                   31%--45%

  \$150,000               54%                   46%--62%

  \$175,000               68%                   60%--75%

  \$200,000               79%                   72%--86%

  \$250,000               91%                   86%--95%

  \$500,000               99%                   97%--100%
  ----------------------- --------------------- --------------------

**7.3 Scenario Analyses**

  ---------------------- ------------------- ------------------------------
  **Scenario**           **ICER (\$/QALY)**  **Notes**

  Base case (net price)  \$84,200            25% rebate applied

  Base case (WAC)        \$142,300           No rebate

  Mixture cure model     \$71,400            Assumes cure fraction 15% in
  (PFS)                                      cervimab

  Equal utilities by arm \$97,100            Single PF utility 0.69 across
                                             arms

  15-year time horizon   \$171,300           Shorter horizon disadvantages
                                             survival benefit

  No subsequent therapy  \$138,900           Conservative scenario

  No AE costs            \$149,100           Removes AE cost offset

  Extended OS maturity   \$78,300            75% events at final OS
  (modeled)                                  analysis

  Head-to-head vs.       \$22,100            Small incremental benefit;
  nivolumab (NMA)                            comparable cost

  Value-based price at   \$12,200/infusion   Implied value-based price at
  \$150K WTP                                 WAC
  ---------------------- ------------------- ------------------------------

**8. EXTENDED COST-EFFECTIVENESS CONSIDERATIONS**

**8.1 Cost Per Life-Year Gained**

In addition to the QALY-based ICER, the cost per life-year gained was
calculated as \$72,980 at net price and \$123,600 at WAC. These figures
may be more readily interpretable for some payer audiences and are
provided as supplementary analyses.

**8.2 Equal Value of Life Years Gained (evLYG)**

Following ICER\'s expanded framework, the equal value of life years
gained (evLYG) ICER was calculated using age-standardized QALY weights,
yielding an evLYG ICER of \$91,400 at net price and \$154,800 at WAC.
This metric reduces the relative disadvantage for treatments benefiting
populations with lower baseline utility due to advanced cancer.

**8.3 Productivity and Caregiver Costs (Societal Perspective)**

As a supplementary societal perspective analysis, productivity losses
(absenteeism, presenteeism) and caregiver time costs were incorporated.
The societal ICER was \$78,900 at net price, reflecting additional
savings from reduced caregiver burden (\$11,200/patient) and fewer lost
workdays (average patient age 61; labor force participation modeled at
42%). This analysis is presented as supplementary given the ICER
reference case specifies a healthcare sector perspective as primary.

**9. VALUE-BASED PRICE ANALYSIS**

**9.1 Implied Value-Based Price Ranges**

The value-based price (VBP) represents the price at which cervimab would
achieve a given ICER threshold. The following VBPs were calculated based
on model outputs:

  ----------------- ----------------- ----------------- -------------
  **WTP Threshold** **Value-Based     **Annual Cost at  **Monthly
                    Price (per        VBP**             Cost at VBP**
                    infusion)**                         

  \$100,000/QALY    \$9,800           \$85,260          \$7,105

  \$150,000/QALY    \$12,200          \$106,140         \$8,845

  \$175,000/QALY    \$14,100          \$122,670         \$10,223

  \$200,000/QALY    \$16,000          \$139,200         \$11,600

  Proposed WAC      \$18,500          \$160,950         \$13,413
  ----------------- ----------------- ----------------- -------------

The proposed WAC of \$18,500 per infusion exceeds the value-based price
at conventional thresholds, but falls within the range that ICER has
characterized as potentially reasonable for oncology treatments with
significant unmet need when evaluated at the \$150,000--\$200,000/QALY
range. The sponsor is committed to achieving a net price consistent with
the \$150,000/QALY threshold through rebate negotiations.

**10. CONCLUSIONS**

The cost-effectiveness analysis demonstrates that cervimab provides
substantial incremental clinical benefit compared to standard
chemotherapy in dMMR/MSI-H mCRC, with an ICER of \$84,200 per QALY at
the anticipated net price---below the \$100,000/QALY threshold most
commonly cited by US payers. At WAC, the ICER of \$142,300 per QALY is
within the range deemed cost-effective by ICER for oncology conditions
with significant unmet need.

The gain of 2.55 life-years and 2.21 quality-adjusted life-years per
patient treated represents a transformative improvement over the current
standard of care in this molecular subtype. PSA results confirm that the
model conclusions are robust, with 79% probability of cost-effectiveness
at a \$200,000/QALY threshold. Sensitivity analyses confirm the model is
most sensitive to OS assumptions---which are expected to strengthen with
OS data maturity.

Cervi Therapeutics is committed to value-based contracting and
outcomes-based arrangements to ensure that the net price of cervimab
reflects its demonstrated value to patients and the healthcare system.

**11. REFERENCES**

1\. Cervi Therapeutics. CERVI-301 Clinical Study Report, v1.0, February
2026.

2\. Sanders GD, et al. Recommendations for conduct, methodological
practices, and reporting of cost-effectiveness analyses. JAMA.
2016;316(10):1093-1103.

3\. ICER. Reference Case for Economic Analyses, Version 2.0. June 2020.

4\. Drummond MF, et al. Methods for the Economic Evaluation of Health
Care Programmes, 4th ed. Oxford University Press; 2015.

5\. Starr N, et al. Health utility values in metastatic colorectal
cancer: a systematic review. Pharmacoeconomics. 2021;39(2):139-158.

6\. van Hout B, et al. Interim scoring for the EQ-5D-5L: mapping the
EQ-5D-5L to EQ-5D-3L value sets. Value in Health. 2012;15(5):708-715.

7\. CMS. 2025 Medicare Part B Drug Average Sales Price File. January
2025.

8\. Red Book Online. Drug Pricing Database. Truven Health Analytics,
2025.

9\. Coyle D, et al. Terminal illness and quality of life: a systematic
review. Health Qual Life Outcomes. 2022;20:78.
