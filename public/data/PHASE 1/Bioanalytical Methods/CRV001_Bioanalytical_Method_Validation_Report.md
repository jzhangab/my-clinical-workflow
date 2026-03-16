**BIOANALYTICAL METHOD VALIDATION REPORT**

*Quantification of Cervimab (CRV-001) in Human Serum*

  ------------------- -------------------------------
  **Document          CRV-BA-VAL-001-v1.0
  Number:**           

  **Protocol          CRV-001-PH1-001
  Number:**           

  **Study Drug:**     Cervimab (CRV-001)

  **Drug Class:**     Investigational PD-1 Inhibitor
                      (Humanized IgG4 mAb)

  **Indication:**     dMMR/MSI-H Metastatic
                      Colorectal Cancer

  **Phase:**          Phase 1 --- Dose Escalation

  **Sponsor:**        Aevorix Therapeutics, Inc.

  **CRO /             PharmaKinetics Bioanalytical
  Bioanalytical       Services, LLC
  Lab:**              

  **Study Director:** Dr. Maria Chen, Ph.D. ---
                      Principal Bioanalytical
                      Scientist

  **Report Date:**    14 March 2025

  **Validation        10 January 2025 -- 28 February
  Dates:**            2025

  **Regulatory        FDA Guidance: Bioanalytical
  Basis:**            Method Validation (May 2018)

  **Document          FINAL
  Status:**           
  ------------------- -------------------------------

**CONFIDENTIAL --- FOR REGULATORY USE ONLY**

*This document contains proprietary information of Aevorix Therapeutics,
Inc. Unauthorized disclosure is prohibited.*

**SIGNATURE AND APPROVAL PAGE**

This Bioanalytical Method Validation Report has been reviewed and
approved by the following qualified personnel:

  ------------------------------------------------------------------------------
  **Role**               **Name / Title**       **Signature / Date**
  ---------------------- ---------------------- --------------------------------
  Principal              Maria Chen, Ph.D.      Signed:
  Bioanalytical                                 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
  Scientist                                     Date:
                                                \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  QA Reviewer            James Patel, M.S.      Signed:
                                                \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
                                                Date:
                                                \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  Study Director         Linda Moore, Ph.D.     Signed:
                                                \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
                                                Date:
                                                \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  Sponsor Representative Thomas Erikson, Ph.D.  Signed:
  (CMC/PK)                                      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
                                                Date:
                                                \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
  ------------------------------------------------------------------------------

*All signatories confirm that this document accurately reflects the
validation activities and results, and that the method meets the
acceptance criteria set forth in the validation plan
(CRV-BA-VAL-PLAN-001) and FDA Guidance for Industry: Bioanalytical
Method Validation (May 2018).*

**TABLE OF CONTENTS**

1\. Introduction and Purpose 5

2\. Scope and Regulatory Basis 5

3\. Materials, Reagents, and Equipment 6

4\. Reference Standard and Internal Standard 7

5\. Sample Preparation Procedure 8

6\. Chromatographic / Instrumental Conditions (LC-MS/MS) 8

7\. Calibration Standards and Quality Controls 9

8\. Validation Parameters and Results 10

8.1 Selectivity 10

8.2 Specificity 10

8.3 Sensitivity (LLOQ) 11

8.4 Linearity and Calibration Curve 11

8.5 Accuracy and Precision (Intra-day / Inter-day) 12

8.6 Matrix Effect and Ion Suppression 13

8.7 Recovery 14

8.8 Dilution Integrity 14

8.9 Stability 15

8.10 Carry-Over 17

9\. Acceptance Criteria Summary 18

10\. Deviations and Investigations 19

11\. Conclusions 19

12\. References 20

13\. Appendices 20

**1. INTRODUCTION AND PURPOSE**

This Bioanalytical Method Validation Report (BMVR) documents the full
validation of a quantitative ligand-binding assay (LBA) using
electrochemiluminescence detection (ECL) for the measurement of Cervimab
(CRV-001), an investigational humanized IgG4 monoclonal antibody
targeting the programmed cell death protein 1 (PD-1) receptor, in human
K2-EDTA plasma.

Cervimab is being evaluated in a Phase 1, open-label, multicenter,
dose-escalation study (Protocol CRV-001-PH1-001) in adult patients with
mismatch repair-deficient (dMMR) or microsatellite instability-high
(MSI-H) metastatic colorectal cancer (mCRC) who have received prior
standard-of-care therapy. PK profiling using this validated method will
support:

- Determination of Cervimab exposure (Cmax, AUC, t1/2, CL, Vd) at each
  dose level

- Dose proportionality and PK linearity assessment

- Population PK modeling and PK/PD correlation

- Support for regulatory submissions (IND, NDA/BLA)

This report is prepared in accordance with FDA Guidance for Industry:
Bioanalytical Method Validation (May 2018) and applicable ICH
guidelines.

**2. SCOPE AND REGULATORY BASIS**

**2.1 Scope**

This validation covers the quantitative LBA/ECL method for Cervimab in
human K2-EDTA plasma. The validated concentration range is 0.100 µg/mL
to 100 µg/mL. Samples outside this range are subject to dilution per the
validated dilution integrity protocol.

**2.2 Regulatory Basis**

  --------------------------------------------------------------------
      **Document**         **Title / Description**       **Version /
                                                           Date**
  --------------------- ------------------------------ ---------------
      FDA Guidance           Bioanalytical Method         May 2018
                         Validation for Human Studies  

         ICH M10             Bioanalytical Method         May 2022
                         Validation and Study Sample   
                                   Analysis            

     21 CFR Part 58      Good Laboratory Practice for      Current
                        Nonclinical Laboratory Studies 

     21 CFR Part 312       Investigational New Drug        Current
                                 Application           

   CRV-BA-VAL-PLAN-001  Cervimab Phase 1 Bioanalytical v1.0, Dec 2024
                               Validation Plan         
  --------------------------------------------------------------------

**3. MATERIALS, REAGENTS, AND EQUIPMENT**

**3.1 Critical Reagents**

  -------------------------------------------------------------------
        **Reagent**       **Source / Lot Number**     **Expiry /
                                                     Certificate**
  ----------------------- ----------------------- -------------------
  Anti-human PD-1 capture BioCell Sciences / Lot:  Dec 2025 / CoA on
   antibody (clone 5E4)        BC-2024-0917              file

      Anti-human IgG4     Meso Scale Diagnostics   Jun 2025 / CoA on
    detection antibody        / Lot: MSD-4421            file
        (SULFO-TAG)                               

   Blocker A (1% BSA in   Meso Scale Diagnostics   Sep 2025 / CoA on
           PBST)             / Lot: MSD-BLK-08           file

  MSD GOLD Read Buffer B  Meso Scale Diagnostics   Aug 2025 / CoA on
           (4x)              / Lot: MSD-GRB-12           file

    Human K2-EDTA Blank   BioIVT / Lot: HK2P-0623  Jan 2026 / CoA on
    Plasma (n=6 donors)                                  file

    Cervimab Reference     Aevorix Therapeutics   Dec 2026 / CoA, CoI
   Standard (CRV-RS-001)    Lot: AEV-RS-2024-01         on file

   SIL Surrogate mAb IS    Aevorix Therapeutics    Dec 2026 / CoA on
       (CRV-IS-001)         Lot: AEV-IS-2024-01          file
  -------------------------------------------------------------------

**3.2 Equipment**

  -------------------------------------------------------------------
    **Equipment**    **Manufacturer / Model**       **Asset ID /
                                                   Calibration**
  ------------------ ------------------------- ----------------------
      ECL Reader     Meso Scale Diagnostics /      PKS-ECL-001 /
                           SECTOR S 600         Calibrated Jan 2025

   MSD Plate Washer  Meso Scale Diagnostics /       PKS-MW-002 /
                            MultiWash+          Calibrated Jan 2025

  Analytical Balance Mettler Toledo / XPR 205      PKS-BAL-003 /
                                                Calibrated Jan 2025

       Pipettes      Eppendorf / Research Plus   PKS-PIP-004-009 /
    (multichannel)                              Calibrated Jan 2025

      Ultra-low           Thermo Fisher /      PKS-FRZ-010 / Verified
     Temperature           ULT1786-9-D38              monthly
   Freezer (-80°C)                             

     Vortex Mixer     Scientific Industries /    PKS-VMX-011 / N/A
                          Vortex-Genie 2       

     Data System        SoftMax Pro v7.1.2     PKS-SW-001 / Validated
                        (Molecular Devices)           IQ/OQ/PQ
  -------------------------------------------------------------------

**4. REFERENCE STANDARD AND INTERNAL STANDARD**

**4.1 Analyte Reference Standard --- Cervimab (CRV-001)**

Cervimab reference standard (CRV-RS-001) is a highly purified,
recombinant humanized IgG4 monoclonal antibody targeting PD-1 (MW \~147
kDa). The reference standard was provided by Aevorix Therapeutics, Inc.
and characterized by the following:

  -------------------------------------------------------------------
      **Parameter**        **Specification**     **Observed Value**
  ---------------------- ---------------------- ---------------------
     Purity (SE-HPLC)            ≥98.0%                 99.2%

    Identity (Peptide       Matches sequence          Confirmed
         Mapping)             CRV-SEQ-001       

  Protein Concentration  Certified 10.0 mg/mL ±      10.1 mg/mL
        (UV A280)              0.2 mg/mL        

     Endotoxin (LAL)          \<1.0 EU/mg            0.12 EU/mg

        Sterility               Negative              Negative

    Storage Condition       -80°C, aliquoted          Compliant
  -------------------------------------------------------------------

**4.2 Internal Standard --- Surrogate Isotopically Labeled mAb
(CRV-IS-001)**

A stable isotope-labeled surrogate mAb internal standard (CRV-IS-001)
was used to correct for variability in sample processing and assay
performance. CRV-IS-001 shares identical PD-1 binding and IgG4 structure
with Cervimab but contains 13C/15N-labeled lysine residues (confirmed by
mass spectrometry). The IS was spiked into all calibration standards, QC
samples, and study samples at a fixed concentration of 1.00 µg/mL prior
to plate coating.

**5. SAMPLE PREPARATION PROCEDURE**

**5.1 Overview**

Whole human K2-EDTA plasma samples are processed using a direct sandwich
LBA/ECL format on Meso Scale Discovery (MSD) High Bind plates. No
protein precipitation or liquid-liquid extraction is required. Samples
are diluted 1:4 (minimum required dilution, MRD) in matrix diluent (1%
BSA/PBST) prior to analysis.

**5.2 Step-by-Step Procedure**

**Step 1:** Coat MSD plates (10 µg/mL anti-PD-1 capture antibody, 50
µL/well, overnight at 4°C).

**Step 2:** Wash 3× with PBST (300 µL/well) on plate washer.

**Step 3:** Block plates (150 µL/well Blocker A, 1 hour RT, 600 rpm
orbital shaker).

**Step 4:** Thaw plasma samples and dilute 1:4 in diluent; add
CRV-IS-001 at 1.00 µg/mL final.

**Step 5:** Apply calibrators, QCs, and diluted study samples (50
µL/well) in duplicate; incubate 2 hours RT, 600 rpm.

**Step 6:** Wash 3× PBST; add 1 µg/mL SULFO-TAG detection antibody (50
µL/well); incubate 1 hour RT, 600 rpm.

**Step 7:** Wash 3× PBST; add 150 µL/well MSD GOLD Read Buffer B; read
immediately on SECTOR S 600.

**Step 8:** Calculate concentrations using 4-parameter logistic (4-PL)
curve fit in SoftMax Pro v7.1.2.

**6. CALIBRATION STANDARDS AND QUALITY CONTROLS**

**6.1 Calibration Curve**

Calibration standards (CS) were prepared by serial dilution of Cervimab
reference standard (CRV-RS-001) in blank human K2-EDTA plasma. Eight
non-zero calibration levels were used spanning the dynamic range.

  ------------------------------------------------------------------
   **Level**    **Nominal Concentration    **Accepted Range (±15%;
                       (µg/mL)**               ±20% at LLOQ)**
  ------------ -------------------------- --------------------------
   CS1 (LLOQ)            0.100                  0.080 -- 0.120

      CS2                0.250                  0.213 -- 0.288

      CS3                0.750                  0.638 -- 0.863

      CS4                 2.50                   2.13 -- 2.88

      CS5                 7.50                   6.38 -- 8.63

      CS6                 20.0                   17.0 -- 23.0

      CS7                 60.0                   51.0 -- 69.0

   CS8 (ULOQ)             100                    85.0 -- 115
  ------------------------------------------------------------------

**6.2 Quality Control Samples**

  ------------------------------------------------------------------
   **QC Level**  **Nominal Concentration         **Purpose**
                        (µg/mL)**        
  -------------- ----------------------- ---------------------------
     LLOQ QC              0.100                  Lower limit
                                             precision/accuracy
                                                confirmation

   Low QC (QCL)           0.300              Low end performance

   Mid QC (QCM)           10.0              Mid-range performance

  High QC (QCH)           80.0              High-end performance

   Dilution QC     500 → nominal 10.0     Dilution integrity (high
     (QCDIL)         (1:50 dilution)           concentration)
  ------------------------------------------------------------------

**7. VALIDATION PARAMETERS AND RESULTS**

**7.1 Selectivity**

Selectivity was evaluated using K2-EDTA plasma from six individual
donors (3M, 3F). Blank plasma from each donor was spiked with Cervimab
at the LLOQ (0.100 µg/mL) and processed per the standard method.
Acceptance criterion: ≥80% of LLOQ replicates must be within ±20% of
nominal concentration.

  -------------------------------------------------------------------------
   **Donor**    **Sex**   **Measured Conc   **% Nominal**    **Pass/Fail**
                             (µg/mL)**                      
  ----------- ----------- ---------------- ---------------- ---------------
    Donor 1        M           0.097            97.0%            PASS

    Donor 2        M           0.103             103%            PASS

    Donor 3        M           0.099            99.0%            PASS

    Donor 4        F           0.095            95.0%            PASS

    Donor 5        F           0.101             101%            PASS

    Donor 6        F           0.098            98.0%            PASS
  -------------------------------------------------------------------------

**Conclusion:** 6/6 donors passed. Selectivity acceptance criterion met.

**7.2 Sensitivity --- Lower Limit of Quantification (LLOQ)**

LLOQ was determined as the lowest calibration concentration at which ≥5
of 6 replicates demonstrate accuracy within ±20% of nominal and CV ≤20%.

  -----------------------------------------------------------------
           **Parameter**                      **Value**
  -------------------------------- --------------------------------
           LLOQ (nominal)                    0.100 µg/mL

    Mean Measured Concentration              0.099 µg/mL

        Mean Accuracy (%RE)         +1.1% (within ±20% criterion)

            Intra-day CV                8.3% (≤20% criterion)

       Signal-to-Noise Ratio                    9.4:1
  -----------------------------------------------------------------

**Conclusion:** LLOQ of 0.100 µg/mL is confirmed. All acceptance
criteria met.

**7.3 Linearity and Calibration Curve**

The calibration curve was evaluated over 6 independent runs. Each run
included 8 non-zero calibration levels with a minimum of 6 standards
required per run.

  -----------------------------------------------------------------------------------
   **Run**  **Curve Model**   **R²**   **Back-calculated   **Standards   **Accept?**
                                        Accuracy Range      Passing**   
                                            (%RE)**                     
  --------- ---------------- -------- ------------------- ------------- -------------
    Run 1      4-PL, 1/y²     0.9991    -4.2% to +6.8%         8/8          PASS
               weighting                                                

    Run 2      4-PL, 1/y²     0.9988    -7.1% to +5.2%         8/8          PASS
               weighting                                                

    Run 3      4-PL, 1/y²     0.9992    -3.8% to +4.9%         8/8          PASS
               weighting                                                

    Run 4      4-PL, 1/y²     0.9990    -5.0% to +7.3%         8/8          PASS
               weighting                                                

    Run 5      4-PL, 1/y²     0.9987    -6.2% to +8.1%       7/8 (1         PASS
               weighting                                    excluded)   

    Run 6      4-PL, 1/y²     0.9993    -4.5% to +5.5%         8/8          PASS
               weighting                                                
  -----------------------------------------------------------------------------------

**Conclusion:** All 6 calibration runs passed. R² ≥0.9985 in all runs.
Linearity acceptance criteria met across the validated range 0.100--100
µg/mL.

**7.4 Accuracy and Precision (Intra-day and Inter-day)**

Accuracy (%RE) and precision (%CV) were evaluated at LLOQ, QCL, QCM, and
QCH across 3 intra-day runs (n=6/level/run) and 6 inter-day runs.
Acceptance: %RE within ±15% (±20% at LLOQ); %CV ≤15% (≤20% at LLOQ).

  -------------------------------------------------------------------------------------------------------
    **QC     **Nominal  **Mean Conc  **Intra-day   **Intra-day   **Inter-day   **Inter-day   **Accept?**
   Level**   (µg/mL)**   (µg/mL)**      %RE**         %CV**         %RE**         %CV**     
  --------- ----------- ----------- ------------- ------------- ------------- ------------- -------------
   LLOQ QC     0.100       0.103        +3.0%         9.1%          +2.8%         11.2%         PASS

     QCL       0.300       0.297        -1.0%         6.2%          -2.1%         7.8%          PASS

     QCM       10.0        10.2         +2.0%         4.7%          +1.5%         5.9%          PASS

     QCH       80.0        79.2         -1.0%         3.9%          -1.8%         4.8%          PASS
  -------------------------------------------------------------------------------------------------------

**Conclusion:** All accuracy and precision acceptance criteria met at
all QC levels. Inter-day variability is low, confirming assay robustness
across the analytical run schedule.

**7.5 Matrix Effect and Ion Suppression**

Matrix effects were assessed using post-extraction addition (PEA) of
Cervimab at QCL and QCH concentrations into extracts from 6 individual
donors compared to neat calibration solution. The matrix factor (MF) and
IS-normalized MF were calculated.

  ---------------------------------------------------------------------------
   **QC Level**    **Donor**    **Matrix    **IS-Normalized    **Criterion
                                Factor**         MF**         (0.85--1.15)**
  --------------- ----------- ------------ ----------------- ----------------
    QCL (0.300    Pooled n=6      0.96           0.98              PASS
      µg/mL)                                                 

     QCH (80.0    Pooled n=6      0.94           0.97              PASS
      µg/mL)                                                 
  ---------------------------------------------------------------------------

**Conclusion:** IS-normalized matrix factors within 0.85--1.15 at both
QC levels. Matrix effect acceptance criterion met for all individual
donors.

**7.6 Recovery**

Extraction recovery was assessed by comparing mean response of extracted
QC samples (n=6 per level) to unextracted reference samples representing
100% recovery at QCL, QCM, and QCH.

  -------------------------------------------------------------------
    **QC Level**   **Mean Recovery     **CV (%)**      **Acceptance
                        (%)**                            (\>50%,
                                                      consistent)**
  ---------------- ---------------- ---------------- ----------------
     QCL (0.300         78.2%             5.8%             PASS
       µg/mL)                                        

  QCM (10.0 µg/mL)      81.4%             4.2%             PASS

  QCH (80.0 µg/mL)      79.8%             3.9%             PASS
  -------------------------------------------------------------------

**Conclusion:** Recovery is consistent (range 78.2--81.4%) and well
above the ≥50% acceptance criterion. The IS recovery was 80.1% (CV
4.6%), confirming effective normalization.

**7.7 Dilution Integrity**

Dilution integrity was tested using a Dilution QC (QCDIL) at 500 µg/mL
diluted 1:50 in blank plasma to achieve a nominal concentration of 10.0
µg/mL (equivalent to QCM). Acceptance: %RE within ±15%.

  ----------------------------------------------------------------------------------
   **Dilution     **Nominal     **Mean Measured   **%RE**   **CV (%)**  **Accept?**
    Factor**    Post-Dilution      (µg/mL)**                           
                  (µg/mL)**                                            
  ------------ ---------------- ---------------- ---------- ---------- -------------
      1:10           50.0             49.7         -0.6%       4.1%        PASS

      1:50           10.0             10.3         +3.0%       5.2%        PASS
  ----------------------------------------------------------------------------------

**Conclusion:** Dilution integrity confirmed for up to 1:50 dilution.
Samples above the ULOQ (100 µg/mL) may be diluted up to 1:50 with
retained accuracy.

**7.8 Stability**

Stability of Cervimab was evaluated under the following conditions. All
experiments were performed at QCL (0.300 µg/mL) and QCH (80.0 µg/mL),
n=3 replicates per level per condition.

  ---------------------------------------------------------------------
      **Stability       **Duration /      **QCL     **QCH    **Accept
      Condition**        Condition**      %RE**     %RE**    (±15%)?**
  ------------------- ----------------- --------- --------- -----------
    Freeze-Thaw (3    3 cycles, -80°C ↔   +4.2%     +1.8%      PASS
        cycles)          RT (30 min)                        

       Bench-top       24 hours at RT     +3.1%     +2.9%      PASS
     (short-term)                                           

  Long-term (frozen)  90 days at -80°C    +2.8%     +1.5%      PASS

   Processed Sample    24 hours at 4°C    +2.1%     +3.2%      PASS
     (autosampler)       in diluent                         

    Stock Solution    30 days at -20°C    +1.9%     +0.8%      PASS
       Stability                                            

    Diluted Working     8 hours at RT     +1.2%     +1.7%      PASS
       Standard                                             
  ---------------------------------------------------------------------

**Conclusion:** Cervimab is stable under all tested conditions. Study
samples stored at -80°C and processed within 90 days of collection are
within the validated stability window.

**7.9 Carry-Over**

Carry-over was evaluated by injecting a blank plasma sample immediately
after the ULOQ standard (100 µg/mL). Acceptance: carry-over in the blank
must be ≤20% of LLOQ signal and ≤5% of IS signal.

  ---------------------------------------------------------------------
       **Parameter**         **Observed     **Acceptance    **Result**
                               Value**       Criterion**   
  ------------------------ --------------- --------------- ------------
     Analyte signal in      2.8% of LLOQ    ≤20% of LLOQ       PASS
      post-ULOQ blank          signal                      

   IS signal in post-ULOQ  1.1% of nominal    ≤5% of IS        PASS
           blank              IS signal        signal      
  ---------------------------------------------------------------------

**Conclusion:** Carry-over is negligible. No protocol modification
required.

**8. ACCEPTANCE CRITERIA SUMMARY**

  ---------------------------------------------------------------
     **Validation         **FDA         **Observed     **Overall
      Parameter**      Criterion**       Result**      Status**
  ------------------- -------------- ---------------- -----------
      Selectivity       ≥80% LLOQ       100% (6/6        PASS
                        replicates       donors)      
                       within ±20%                    
                         nominal                      

   LLOQ Sensitivity    ≥5/6 within   6/6 within ±20%,    PASS
                      ±20%, CV ≤20%      CV 8.3%      

    Linearity (R²)       ≥0.9900      0.9987--0.9993     PASS

  Cal Curve Back-calc  ≥75% levels      All 6 runs       PASS
                       within ±15%        passed      
                       (±20% LLOQ)                    

  Intra-day Accuracy   ±15% (%RE);      All within       PASS
                       ±20% at LLOQ      criteria     

  Intra-day Precision CV ≤15%; ≤20%    Max CV: 9.1%      PASS
                         at LLOQ          (LLOQ)      

  Inter-day Accuracy   ±15% (%RE);      All within       PASS
                       ±20% at LLOQ      criteria     

  Inter-day Precision CV ≤15%; ≤20%   Max CV: 11.2%      PASS
                         at LLOQ          (LLOQ)      

     Matrix Effect    MF 0.85--1.15     0.97--0.98       PASS
       (IS-norm)                                      

       Recovery           \>50%,       78.2--81.4%       PASS
                        consistent                    
                      across levels                   

  Dilution Integrity     ±15% %RE         +3.0%          PASS
        (1:50)                                        

      Freeze-Thaw        ±15% %RE     +1.8 to +4.2%      PASS
       Stability                                      

  Bench-top Stability    ±15% %RE     +2.9 to +3.1%      PASS
        (24 hr)                                       

  Long-term Stability    ±15% %RE     +1.5 to +2.8%      PASS
     (90 d, -80°C)                                    

      Carry-Over        Blank ≤20%      2.8%; 1.1%       PASS
                       LLOQ; IS ≤5%                   
  ---------------------------------------------------------------

**ALL validation parameters meet FDA Guidance (May 2018) acceptance
criteria. No parameter failures were recorded.**

**9. DEVIATIONS AND INVESTIGATIONS**

One minor protocol deviation was documented during the validation. It
did not impact the integrity of the validation results.

  ----------------------------------------------------------------------------
   **Dev.    **Date**    **Description**    **Impact**      **Resolution**
    ID**                                                
  --------- ---------- ------------------- ------------ ----------------------
   DEV-001    04 Feb   Plate washer cycle    None ---       Instrument log
               2025       count logged      confirmed       retained; data
                       incorrectly during  washes were     accepted. CAPA:
                         Run 5 (logged 2    performed.   Additional wash log
                           washes; SOP                    verification step
                        requires 3). Upon                    added to SOP
                       review, wash cycle               CRV-BA-SOP-003 Rev 2.
                         log confirmed 3                
                        actual washes by                
                        visual review of                
                         instrument log.                

  ----------------------------------------------------------------------------

**10. CONCLUSIONS**

A fully validated quantitative LBA/ECL method for the determination of
Cervimab (CRV-001) in human K2-EDTA plasma has been established and
confirmed at PharmaKinetics Bioanalytical Services, LLC.

The validated method meets all FDA Guidance for Industry: Bioanalytical
Method Validation (May 2018) acceptance criteria across all evaluated
parameters including selectivity, sensitivity, linearity, accuracy,
precision, matrix effect, recovery, dilution integrity, stability, and
carry-over.

Key validated parameters:

- Validated Concentration Range: 0.100 µg/mL (LLOQ) to 100 µg/mL (ULOQ)
  in human K2-EDTA plasma

- Calibration Model: 4-Parameter Logistic (4-PL) with 1/y² weighting; R²
  ≥0.9987

- Maximum Dilution: 1:50 (validated dilution integrity)

- Stability: Confirmed through 90 days at -80°C, 3 freeze-thaw cycles,
  and 24-hour bench stability

- Precision: Intra-day and inter-day CV ≤11.2% at all QC levels

- Accuracy: %RE within ±4.2% across all QC levels

This method is approved for use in the analysis of study samples from
Protocol CRV-001-PH1-001 (Cervimab Phase 1 Clinical Study in dMMR/MSI-H
Metastatic Colorectal Cancer). All future study sample analyses must
include QC samples from the validated QC panels, and run acceptance
criteria must be applied as defined in this report and the corresponding
Bioanalytical Analysis Plan.

**11. REFERENCES**

1\. FDA Guidance for Industry: Bioanalytical Method Validation for Human
Studies. U.S. Food and Drug Administration, May 2018.

2\. ICH M10 Guideline on Bioanalytical Method Validation and Study
Sample Analysis. International Council for Harmonisation of Technical
Requirements for Pharmaceuticals for Human Use, May 2022.

3\. 21 CFR Part 58: Good Laboratory Practice for Nonclinical Laboratory
Studies. Code of Federal Regulations.

4\. 21 CFR Part 312: Investigational New Drug Application. Code of
Federal Regulations.

5\. Meso Scale Diagnostics. SECTOR Imager 600 Instrument Guide and
SoftMax Pro v7.1.2 Software Manual. MSD, Rockville, MD.

6\. CRV-BA-VAL-PLAN-001 v1.0: Cervimab Phase 1 Bioanalytical Method
Validation Plan. Aevorix Therapeutics, Inc. December 2024.

7\. CRV-BA-SOP-003 Rev 1: Sample Processing and Plate-based LBA for
Cervimab (CRV-001) Quantification. PharmaKinetics Bioanalytical
Services, LLC.

**12. APPENDICES**

The following appendices are available upon request and maintained in
the study file at PharmaKinetics Bioanalytical Services, LLC:

- Appendix A: Certificates of Analysis --- Reference Standard
  (CRV-RS-001) and Internal Standard (CRV-IS-001)

- Appendix B: Calibration Curve Raw Data --- All 6 Validation Runs (Runs
  1--6)

- Appendix C: QC Summary Tables --- All QC Levels, All Runs

- Appendix D: Stability Raw Data (Freeze-Thaw, Bench-top, Long-term,
  Processed Sample)

- Appendix E: Equipment Calibration and Qualification Records

- Appendix F: Deviation Report DEV-001 with CAPA Documentation

- Appendix G: Reagent Lot-to-Lot Qualification (if applicable)

- Appendix H: SoftMax Pro Curve Fit Output Files (Electronic, available
  on request)
