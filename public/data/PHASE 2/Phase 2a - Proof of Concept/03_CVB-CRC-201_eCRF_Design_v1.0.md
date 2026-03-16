**ELECTRONIC CASE REPORT FORM**

**DESIGN SPECIFICATION AND ANNOTATED FIELD DEFINITIONS**

Study: CVB-CRC-201 \| CERVIMAB Phase 2a in dMMR/MSI-H mCRC

  -----------------------------------------------------------------
  **Parameter**        **Value**
  -------------------- --------------------------------------------
  Protocol             CVB-CRC-201

  Document Type        eCRF Design Specification

  EDC Platform         Medidata Rave (Version 2023.2) --- \[or
                       equivalent validated EDC system\]

  CDASH Version        CDASH v2.1 (CDISC)

  CDASH IG             Oncology Therapeutic Area User Guide v1.0

  MedDRA Version       26.0

  CTCAE Version        v5.0 (AE grading)

  Author               Cervi Therapeutics Data Management

  Version              1.0

  Date                 01 March 2025

  Status               DRAFT FOR REVIEW
  -----------------------------------------------------------------

**1. OVERVIEW AND SCOPE**

This eCRF Design Specification defines all electronic Case Report Form
(eCRF) pages, modules, data fields, response options, edit checks,
derivations, and CDISC CDASH v2.1 variable annotations for the
CVB-CRC-201 clinical study. This document serves as the primary
reference for EDC system build, data manager review, CDASH annotation,
and downstream SDTM mapping.

All eCRF modules are designed in compliance with: CDISC CDASH v2.1
standards; FDA 21 CFR Part 11 electronic records and signatures
requirements; ICH E6(R2) GCP guidelines; and ALCOA+ data quality
principles (Attributable, Legible, Contemporaneous, Original, Accurate +
Complete, Consistent, Enduring, Available).

**1.1 eCRF Module Inventory**

  ----------------------------------------------------------------------
  **Module   **Module Name**    **Timing**   **Repeating?**   **CDASH
  \#**                                                        Domain**
  ---------- ------------------ ------------ ---------------- ----------
  01         Subject            Screening    No               DM, DS
             Registration &                                   
             Eligibility                                      

  02         Demographics       Screening    No               DM

  03         Medical History    Screening    Yes (per         MH
                                             condition)       

  04         Prior and          All visits   Yes (per         CM
             Concomitant                     medication)      
             Medications                                      

  05         dMMR/MSI-H         Screening    No               SC, MB
             Biomarker Status                                 

  06         Tumor History and  Screening    Yes (per prior   TH, PR, CM
             Prior Treatment                 Tx)              

  07         Physical           Per SoA      No (per visit)   PE
             Examination                                      

  08         Vital Signs        Per SoA      No (per visit)   VS

  09         ECOG Performance   Per SoA      No (per visit)   QS
             Status                                           

  10         Laboratory         Per SoA      No (per visit)   LB
             Assessments                                      

  11         ECG                Per SoA      No (per visit)   EG

  12         Cervimab           Each         Yes (per cycle)  EX
             Administration     infusion                      

  13         Tumor Response     Q6W/Q12W     No (per          RS, TU
             Assessment (RECIST              assessment)      
             v1.1)                                            

  14         Adverse Events     All visits   Yes (per event)  AE

  15         Serious Adverse    As needed    Yes (per event)  AE
             Events                                           

  16         Protocol           As needed    Yes (per         DV
             Deviations                      deviation)       

  17         End of Treatment / EOT          No               DS
             Study Disposition                                

  18         Survival Follow-Up Q12W         No (per contact) DS
                                post-EOT                      

  19         Patient-Reported   Q6W          No (per visit)   QS
             Outcomes (EORTC                                  
             QLQ-C30)                                         

  20         Pharmacokinetics   Per SoA      Yes (per sample) PC
             Sampling                                         

  21         Biomarker Sample   Per SoA      Yes (per sample) SC
             Collection                                       
  ----------------------------------------------------------------------

**2. eCRF MODULE SPECIFICATIONS**

**Module 01: Subject Registration and Eligibility**

  ----------------------------------------------------------------
  **eCRF Page: SUBJECT REGISTRATION \| Timing: Screening \|
  Repeating: No**

  ----------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------
  **Field Label** **Field Type**     **Response Options / **Edit Checks /   **CDASH      **Req\'d**
                                     Format**             Validation**      Variable**   
  --------------- ------------------ -------------------- ----------------- ------------ ------------
  **Site Number** Text               *System-generated*   Not editable;     SITEID       **Yes**
                  (auto-populated)                        format: 3-digit                
                                                          numeric                        

  **Subject       Text               *System-generated*   Format: NNN-XXX   SUBJID       **Yes**
  Number**        (auto-populated)                        (Site-Sequence)                

  **Date of       Date               *DD-MON-YYYY*        Must be \<=       RFICDTC      **Yes**
  Informed                                                Screening Date;                
  Consent**                                               Cannot be in                   
                                                          future                         

  **Country of    Dropdown           *USA; \[Other per    Single select     COUNTRY      **Yes**
  Enrollment**                       CRF build\]*                                        

  **Screening     Date               *DD-MON-YYYY*        Must be \>=       DSSTDTC (DS) **Yes**
  Date**                                                  Consent Date; \<=              
                                                          Enrollment Date                

  **Enrollment    Date               *DD-MON-YYYY*        Must be \>=       RFSTDTC      **Yes**
  Date (First                                             Screening Date                 
  Dose)**                                                                                
  ---------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------
  **eCRF Page: INCLUSION/EXCLUSION CRITERIA \| Timing: Screening
  \| Repeating: No**

  ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------
  **Field Label**    **Field       **Response    **Edit Checks /  **CDASH      **Req\'d**
                     Type**        Options /     Validation**     Variable**   
                                   Format**                                    
  ------------------ ------------- ------------- ---------------- ------------ ------------
  **IC1: Confirmed   Radio         *Yes / No*    If No: trigger   IEORRES (IC) **Yes**
  mCRC                                           screen failure                
  adenocarcinoma**                                                             

  **IC2: dMMR/MSI-H  Radio         *Yes / No*    If No: trigger   IEORRES (IC) **Yes**
  confirmed**                                    screen failure                

  **IC3: Measurable  Radio         *Yes / No*    If No: trigger   IEORRES (IC) **Yes**
  disease per RECIST                             screen failure                
  v1.1**                                                                       

  **IC4: \>= 1 prior Radio         *Yes / No*    If No: trigger   IEORRES (IC) **Yes**
  systemic Tx line**                             screen failure                

  **IC5: ECOG PS 0   Radio         *Yes / No*    If No: trigger   IEORRES (IC) **Yes**
  or 1**                                         screen failure                

  **IC6: Age \>= 18  Radio         *Yes / No*    If No: trigger   IEORRES (IC) **Yes**
  years**                                        screen failure;               
                                                 cross-validate                
                                                 with DOB                      

  **IC7: Adequate    Radio         *Yes / No*    If No: trigger   IEORRES (IC) **Yes**
  organ function**                               screen failure                

  **EC1: Prior       Radio         *Yes / No*    If Yes: trigger  IEORRES (EC) **Yes**
  anti-PD-1/PD-L1                                screen failure                
  therapy**                                                                    

  **EC2: Active      Radio         *Yes / No*    If Yes: trigger  IEORRES (EC) **Yes**
  autoimmune                                     screen failure                
  disease**                                                                    

  **EC3: Active      Radio         *Yes / No*    If Yes: trigger  IEORRES (EC) **Yes**
  IBD**                                          screen failure                

  **Eligibility      Radio         *Eligible /   Auto-populated   DSDECOD (DS) **Yes**
  Decision**         (auto-calc)   Screen        based on all                  
                                   Failure*      IC/EC responses;              
                                                 editable with                 
                                                 reason                        

  Screen Failure     Free text     *Max 500      Required if      DSSCAT (DS)  **Cond**
  Reason (if                       chars*        Eligibility =                 
  applicable)                                    Screen Failure                
  -----------------------------------------------------------------------------------------

**Module 02: Demographics**

  ----------------------------------------------------------------
  **eCRF Page: DEMOGRAPHICS \| Timing: Screening \| Repeating:
  No**

  ----------------------------------------------------------------

  ---------------------------------------------------------------------------------------------
  **Field Label** **Field     **Response     **Edit Checks /          **CDASH      **Req\'d**
                  Type**      Options /      Validation**             Variable**   
                              Format**                                             
  --------------- ----------- -------------- ------------------------ ------------ ------------
  **Date of       Date        *DD-MON-YYYY   Not in future; Age       BRTHDTC      **Yes**
  Birth**                     or Year Only*  derivation: (Screening                
                                             Date - DOB)/365.25 must               
                                             be \>=18                              

  **Age at        Numeric     *Years*        System-derived from DOB  AGE          **Yes**
  Consent         (derived)                  and Consent Date                      
  (derived)**                                                                      

  **Sex**         Radio       *Male / Female Single select; required  SEX          **Yes**
                              / Unknown*     for SDTM DM.SEX                       

  **Race**        Checkbox    *American      Select all that apply;   RACE         **Yes**
                  (multi)     Indian or      if Unknown selected,                  
                              Alaska Native; others not selectable                 
                              Asian; Black                                         
                              or African                                           
                              American;                                            
                              Native                                               
                              Hawaiian or                                          
                              Other Pacific                                        
                              Islander;                                            
                              White; Not                                           
                              Reported;                                            
                              Unknown*                                             

  **Ethnicity**   Radio       *Hispanic or   Single select; per FDA   ETHNIC       **Yes**
                              Latino / Not   requirements                          
                              Hispanic or                                          
                              Latino / Not                                         
                              Reported /                                           
                              Unknown*                                             

  **Weight (kg)** Numeric     *Range: 30-200 Soft range check: query  VSORRES (VS) **Yes**
                              kg*            if \<40 or \>150 kg                   

  **Height (cm)** Numeric     *Range:        Soft range check: query  VSORRES (VS) **Yes**
                              100-220 cm*    if \<140 or \>210 cm                  

  BMI (kg/m2,     Numeric     *Derived from  Calculated field:        VSORRESU     **No**
  derived)        (derived)   Wt/Ht*         Weight/(Height/100)\^2                
  ---------------------------------------------------------------------------------------------

**Module 07 / 08: Vital Signs and Physical Examination**

  ----------------------------------------------------------------
  **eCRF Page: VITAL SIGNS \| Timing: Per Schedule of Assessments
  \| Repeating: No (per visit)**

  ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------
  **Field Label**   **Field Type**     **Response     **Edit Checks /      **CDASH         **Req\'d**
                                       Options /      Validation**         Variable**      
                                       Format**                                            
  ----------------- ------------------ -------------- -------------------- --------------- ------------
  **Visit Name**    Dropdown           *Screening;    System-controlled;   VISIT           **Yes**
                    (auto-populated)   C1D1; C1D8;    derived from visit                   
                                       \...*          schedule                             

  **Assessment      Date + Time        *DD-MON-YYYY   Must be within visit VSDTC           **Yes**
  Date/Time**                          HH:MM*         window; not in                       
                                                      future                               

  **Systolic Blood  Numeric            *Range: 60-250 Soft limits: \<80 or VSORRES;        **Yes**
  Pressure (mmHg)**                    mmHg*          \>200: query; Hard   VSTEST=SYSBP    
                                                      limit outside range:                 
                                                      hard stop                            

  **Diastolic Blood Numeric            *Range: 30-150 Soft limits: \<50 or VSORRES;        **Yes**
  Pressure (mmHg)**                    mmHg*          \>120: query         VSTEST=DIABP    

  **Pulse Rate      Numeric            *Range: 30-200 Soft limits: \<45 or VSORRES;        **Yes**
  (bpm)**                              bpm*           \>150: query         VSTEST=PULSE    

  **Respiratory     Numeric            *Range: 8-40*  Soft limits: \<10 or VSORRES;        **Yes**
  Rate                                                \>30: query          VSTEST=RESP     
  (breaths/min)**                                                                          

  **Temperature     Numeric            *Range:        Soft limits: \<35.0  VSORRES;        **Yes**
  (degrees C)**                        33.0-42.0*     or \>39.5: query     VSTEST=TEMP     

  **Oxygen          Numeric            *Range:        Soft limit: \<90:    VSORRES;        **Yes**
  Saturation (%)**                     70-100*        query                VSTEST=OXYSAT   

  **Fasting         Radio              *Fasting /     Required if lab      VSBLFL          **Yes**
  Status**                             Non-fasting /  sample taken at same                 
                                       Unknown*       visit                                
  -----------------------------------------------------------------------------------------------------

**Module 10: Laboratory Assessments**

  ----------------------------------------------------------------
  **eCRF Page: LABORATORY RESULTS \| Timing: Per Schedule of
  Assessments \| Repeating: No (per visit)**

  ----------------------------------------------------------------

Note: All laboratory results will be entered into the eCRF as reported
by the local certified laboratory (CLIA). Reference ranges and units
from the central lab will be pre-populated. Local lab results are
acceptable with appropriate notation of reference ranges and units.

  ----------------------------------------------------------------------------------
  **Lab Test**   **CDASH      **Units**     **Normal      **Soft        **Hard
                 LBTESTCD**                 Range         Alert**       Stop**
                                            (example)**                 
  -------------- ------------ ------------- ------------- ------------- ------------
  White Blood    WBC          10\^9/L       4.0-10.0      \<2.0 or      \<1.0 or
  Cell Count                                              \>20.0        \>50.0

  Absolute       NEUT         10\^9/L       1.8-7.5       \<1.0 or      \<0.5
  Neutrophil                                              \>15.0        
  Count                                                                 

  Hemoglobin     HGB          g/dL          12.0-17.5     \<8.0 or      \<6.0
                                                          \>20.0        

  Platelets      PLAT         10\^9/L       150-400       \<75 or \>800 \<25

  Serum          CREAT        mg/dL         0.6-1.2       \>3.0         \>6.0
  Creatinine                                                            

  AST (SGOT)     AST          U/L           10-40         \>200 (5xULN) \>400

  ALT (SGPT)     ALT          U/L           7-56          \>200 (5xULN) \>400

  Total          BILI         mg/dL         0.2-1.2       \>3.0         \>6.0
  Bilirubin                                                             

  Alkaline       ALP          U/L           44-147        \>500         \>1000
  Phosphatase                                                           

  Albumin        ALB          g/dL          3.5-5.0       \<2.0         \<1.5

  Total Protein  PROT         g/dL          6.3-8.2       N/A           N/A

  Sodium         NA           mEq/L         135-145       \<125 or      \<120 or
                                                          \>155         \>160

  Potassium      K            mEq/L         3.5-5.0       \<3.0 or      \<2.5 or
                                                          \>5.5         \>6.5

  Calcium        CA           mg/dL         8.5-10.5      \<7.5 or      \<6.5
  (total)                                                 \>12.0        

  Glucose        GLUC         mg/dL         70-100        \<50 or \>400 \<40 or
  (fasting)                                                             \>600

  TSH            TSH          mIU/L         0.4-4.0       \<0.05 or     None
                                                          \>10.0        

  Free T4        T4FREE       ng/dL         0.8-1.8       \<0.4 or      None
                                                          \>4.0         

  Urinalysis --- UPROTEIN     Qualitative   Neg/Trace     2+ or greater None
  Protein                                                               

  Urinalysis --- UBLOOD       Qualitative   Negative      2+ or greater None
  Blood                                                                 

  Pregnancy Test HCG          Qualitative   Negative      Positive =    Positive =
  (serum, WOCBP)                                          screen        enrollment
                                                          failure alert blocked
  ----------------------------------------------------------------------------------

**Module 12: Cervimab Administration (Drug Exposure)**

  ----------------------------------------------------------------
  **eCRF Page: INVESTIGATIONAL DRUG ADMINISTRATION \| Timing: Each
  Cycle (Day 1) \| Repeating: Yes per cycle**

  ----------------------------------------------------------------

  ---------------------------------------------------------------------------------------------
  **Field Label**    **Field      **Response       **Edit Checks /    **CDASH      **Req\'d**
                     Type**       Options /        Validation**       Variable**   
                                  Format**                                         
  ------------------ ------------ ---------------- ------------------ ------------ ------------
  **Cycle Number**   Numeric      *Integer 1-32*   Must be            EXSEQ        **Yes**
                                                   sequential; no                  
                                                   skipped cycles                  
                                                   without                         
                                                   explanation                     

  **Planned Date of  Date         *DD-MON-YYYY*    Must be within     EXSTDTC      **Yes**
  Administration**                                 protocol-defined                
                                                   visit window                    

  **Actual Date of   Date         *DD-MON-YYYY*    Must be \<= today; EXSTDTC      **Yes**
  Administration**                                 Must be \>=                     
                                                   previous cycle +                
                                                   14 days                         

  **Actual Start     Time         *HH:MM (24hr)*   Required           EXSTDTC      **Yes**
  Time of Infusion**                                                               

  **Actual End Time  Time         *HH:MM (24hr)*   End \> Start;      EXENDTC      **Yes**
  of Infusion**                                    infusion duration               
                                                   calculated and                  
                                                   checked (15-90 min              
                                                   range)                          

  **Planned Dose     Numeric      *200 mg*         Pre-populated =    EXDOSE       **Yes**
  (mg)**             (pre-pop)                     200; not editable               
                                                   without dose                    
                                                   modification form               

  **Actual Dose      Numeric      *Integer;        If \<200: require  EXDOSE       **Yes**
  Administered                    typically 200*   dose modification               
  (mg)**                                           eCRF; query if                  
                                                   \>200                           

  **Dose             Radio        *Yes / No*       If Yes: dose       EXDOSU       **Yes**
  Modification from                                modification                    
  Planned?**                                       module triggered                

  Reason for Dose    Dropdown +   *Toxicity /      Required if        EXADJ        **Cond**
  Modification       Text         Patient Request  modification =                  
                                  / Other          Yes; free text up               
                                  (specify)*       to 500 chars                    

  **Infusion         Radio        *Yes / No*       If No: reason      EXOCCUR      **Yes**
  Completed as                                     required                        
  Planned?**                                                                       

  Reason Infusion    Dropdown +   *Infusion        Required if not    EXADJ        **Cond**
  Not Completed      Text         Reaction /       completed                       
                                  Patient Request                                  
                                  / Other*                                         

  **Route of         Dropdown     *Intravenous*    Pre-populated;     EXROUTE      **Yes**
  Administration**   (pre-pop)                     read-only                       

  **Lot Number of    Text         *Alphanumeric;   Required for drug  EXLOTNM      **Yes**
  Cervimab**                      max 20 chars*    accountability                  

  **Infusion         Radio        *Yes / No*       If Yes: adverse    EXOCCUR      **Yes**
  Reaction                                         event module                    
  Observed?**                                      triggered                       

  Pre-medications    Radio        *Yes / No*       If Yes:            EXOCCUR      **No**
  Given?                                           concomitant meds                
                                                   module triggered                
  ---------------------------------------------------------------------------------------------

**Module 13: Tumor Response Assessment (RECIST v1.1)**

  ----------------------------------------------------------------
  **eCRF Page: TUMOR RESPONSE ASSESSMENT \| Timing: Q6W (first 24
  weeks), then Q12W \| Repeating: No (per assessment timepoint)**

  ----------------------------------------------------------------

  ----------------------------------------------------------------------------------------
  **Field Label**  **Field     **Response      **Edit Checks /   **CDASH      **Req\'d**
                   Type**      Options /       Validation**      Variable**   
                               Format**                                       
  ---------------- ----------- --------------- ----------------- ------------ ------------
  **Assessment     Dropdown    *Baseline; Week Auto-populated    RSEVAL       **Yes**
  Timepoint**                  6; Week 12;     from visit; must               
                               \...;           match SoA                      
                               Unscheduled*                                   

  **Assessment     Date        *DD-MON-YYYY*   Must be within    RSDTC        **Yes**
  Date**                                       visit window (+/-              
                                               7 days); not in                
                                               future                         

  **Imaging        Radio       *CT Scan / MRI  Must be           RSMETHOD     **Yes**
  Modality**                   / PET-CT*       consistent with                
                                               prior assessments              
                                               (change requires               
                                               query)                         

  **Number of      Numeric     *Integer 1-5*   RECIST v1.1: max  RSSTRESC     **Yes**
  Target Lesions**                             5 target lesions;              
                                               2 per organ; Hard              
                                               stop if \>5                    

  **Sum of         Numeric     *Decimal*       Required; if 0    RSSTRESN     **Yes**
  Diameters ---                                (complete                      
  Target Lesions                               disappearance):                
  (mm)**                                       flag CR; derived               
                                               % change from                  
                                               nadir/baseline                 
                                               calculated                     

  \% Change from   Numeric     *Decimal %*     System-derived:   RSSTRESC     **No**
  Baseline (SoD)   (derived)                   \[(Current SoD -               
                                               Baseline                       
                                               SoD)/Baseline                  
                                               SoD\] x 100                    

  \% Change from   Numeric     *Decimal %*     System-derived    RSSTRESC     **No**
  Nadir (SoD)      (derived)                   for PD                         
                                               determination                  

  Non-Target       Radio       *Present and    Required if       RSSTRESC     **Cond**
  Lesion Response              non-CR / Absent non-target                     
                               / Unequivocal   lesions present                
                               Progression*    at baseline                    

  **New Lesions    Radio       *Yes / No*      If Yes: trigger   RSORRES      **Yes**
  Present?**                                   new lesion detail              
                                               sub-form; flag as              
                                               PD trigger                     

  New Lesion       Free text + *Anatomy + size Required if new   RSSTRESC     **Cond**
  Description (if  location    in mm*          lesion = Yes                   
  Yes)                                                                        

  **Investigator   Radio       *CR / PR / SD / Auto-suggested    RSSTRESC     **Yes**
  Overall                      PD / NE (Not    based on RECIST                
  Response**                   Evaluable)*     rules;                         
                                               investigator must              
                                               confirm or                     
                                               override with                  
                                               justification                  

  Justification    Free text   *Max 1000       Required if       RSREASND     **Cond**
  for Override (if             chars*          response differs               
  applicable)                                  from algorithm                 
                                               suggestion                     

  Date of Response Date        *DD-MON-YYYY*   Required for      RSDTC        **Cond**
  Confirmation                                 confirmed CR/PR;  (confirm)    
  (CR/PR)                                      must be \>=28                  
                                               days after                     
                                               initial response               
  ----------------------------------------------------------------------------------------

**Module 14: Adverse Events**

  ----------------------------------------------------------------
  **eCRF Page: ADVERSE EVENT LOG \| Timing: All visits
  (cumulative) \| Repeating: Yes (per event)**

  ----------------------------------------------------------------

Note: Each adverse event is entered as a separate eCRF record. The AE
log is cumulative and visible at every visit from Cycle 1 Day 1 through
30-day safety follow-up.

  ------------------------------------------------------------------------------------------------
  **Field Label**    **Field    **Response Options /   **Edit Checks /   **CDASH      **Req\'d**
                     Type**     Format**               Validation**      Variable**   
  ------------------ ---------- ---------------------- ----------------- ------------ ------------
  **AE Verbatim      Free text  *Max 200 chars; as     Required; will be AETERM       **Yes**
  Term**                        reported by patient or MedDRA coded by                
                                observed*              DM                             

  **MedDRA System    Dropdown   *MedDRA SOC list       Auto-populated    AEBODSYS     **Yes**
  Organ Class        (coded)    v26.0*                 after DM coding;               
  (SOC)**                                              investigator                   
                                                       reviews                        

  **MedDRA Preferred Dropdown   *MedDRA PT list v26.0* Auto-populated    AEDECOD      **Yes**
  Term (PT)**        (coded)                           after DM coding;               
                                                       investigator                   
                                                       reviews and                    
                                                       confirms                       

  **AE Start Date**  Date       *DD-MON-YYYY*          Must be \>= First AESTDTC      **Yes**
                                                       Dose Date; not in              
                                                       future                         

  **AE End Date /    Date       *DD-MON-YYYY or        If resolved: End  AEENDTC      **Yes**
  Resolution Date**             Ongoing*               Date \>= Start                 
                                                       Date; If ongoing:              
                                                       check \'Ongoing\'              

  AE Ongoing?        Checkbox   *Check if ongoing*     If checked: End   AEENRF       **Cond**
                                                       Date disabled                  

  **CTCAE Grade      Radio      *Grade 1 / Grade 2 /   Required; per     AESEV        **Yes**
  (Severity)**                  Grade 3 / Grade 4 /    CTCAE v5.0                     
                                Grade 5*               definitions                    

  **Maximum CTCAE    Radio      *Grade 1-5*            Required if grade AESEV (max)  **Yes**
  Grade Reached**                                      changes during                 
                                                       event; highest                 
                                                       grade reached                  

  **Causality /      Radio      *Definitely / Probably Required; per     AEREL        **Yes**
  Relatedness to                / Possibly / Unlikely  investigator                   
  Cervimab**                    / Not Related*         clinical judgment              

  **Serious Adverse  Radio      *Yes / No*             If Yes: SAE       AESER        **Yes**
  Event (SAE)?**                                       module triggered               
                                                       automatically                  

  SAE Criterion (if  Checkbox   *Death /               At least one      AESCONG etc. **Cond**
  SAE=Yes)           (multi)    Life-Threatening /     required if                    
                                Hospitalization /      SAE=Yes                        
                                Disability /                                          
                                Congenital Anomaly /                                  
                                Medically Important*                                  

  **Immune-Related   Radio      *Yes / No / Unknown*   Query if high     AECAT        **Yes**
  AE (irAE)?**                                         suspicion based                
                                                       on PT (e.g.                    
                                                       pneumonitis,                   
                                                       colitis)                       

  irAE Organ/System  Dropdown   *Lung / Liver / GI /   Required if       AESCAT       **Cond**
  Affected                      Skin / Endocrine /     irAE=Yes                       
                                Renal / Neurological /                                
                                Cardiac / Other*                                      

  **Action Taken --- Radio      *None / Dose Delayed / Required; if      AEACN        **Yes**
  Cervimab**                    Drug Discontinued /    discontinued: EOT              
                                Not Applicable*        module triggered               

  **Treatment        Radio      *Yes / No*             If Yes: specify   AECONTRT     **Yes**
  Required for AE?**                                   treatment in                   
                                                       concomitant                    
                                                       medications                    

  **AE Outcome**     Radio      *Recovered/Resolved /  If Fatal: Grade 5 AEOUT        **Yes**
                                Recovering/Resolving / auto-populated;                
                                Recovered with         death date                     
                                Sequelae / Not         required in                    
                                Recovered / Fatal /    disposition                    
                                Unknown*                                              
  ------------------------------------------------------------------------------------------------

**Module 17: End of Treatment and Study Disposition**

  ----------------------------------------------------------------
  **eCRF Page: STUDY DISPOSITION \| Timing: EOT + Withdrawal \|
  Repeating: No**

  ----------------------------------------------------------------

  ---------------------------------------------------------------------------------------------
  **Field Label**    **Field     **Response Options  **Edit Checks /  **CDASH      **Req\'d**
                     Type**      / Format**          Validation**     Variable**   
  ------------------ ----------- ------------------- ---------------- ------------ ------------
  **Last Date of     Date        *DD-MON-YYYY*       Must match last  DSSTDTC (EX) **Yes**
  Cervimab                                           entry in Drug                 
  Administration**                                   Administration                
                                                     module                        

  **Last Cycle       Numeric     *Integer*           Cross-validate   EXSEQ        **Yes**
  Completed**                                        with drug admin               
                                                     records                       

  Total Doses        Numeric     *Integer*           System-derived   EXOCCUR      **No**
  Received           (derived)                       count from EX                 
                                                     module                        

  **Treatment Still  Radio       *Yes / No*          If No: End of    DSDECOD      **Yes**
  Ongoing?**                                         Treatment Reason              
                                                     required                      

  Primary Reason for Radio       *Disease            Required if      DSDECOD      **Cond**
  End of Treatment               Progression /       treatment not                 
                                 Adverse Event /     ongoing                       
                                 Patient Withdrawal                                
                                 / Investigator                                    
                                 Decision / Protocol                               
                                 Completion (\~24                                  
                                 mos) / Death /                                    
                                 Other*                                            

  Date of Disease    Date        *DD-MON-YYYY*       Required if EOT  DSSTDTC      **Cond**
  Progression (if                                    reason = Disease              
  applicable)                                        Progression;                  
                                                     must match tumor              
                                                     assessment date               

  **Patient Enrolled Radio       *Yes / No*          If No: reason    DSDECOD      **Yes**
  in Survival                                        required                      
  Follow-Up?**                                                                     

  Date of Study      Date        *DD-MON-YYYY*       Required if      DSSTDTC      **Cond**
  Withdrawal                                         patient fully                 
                                                     withdraws from                
                                                     study; \>= Last               
                                                     Dose Date                     

  Date of Death (if  Date        *DD-MON-YYYY*       Required if      DTHDTC       **Cond**
  applicable)                                        patient                       
                                                     deceased;                     
                                                     cross-validate                
                                                     with AE (Grade                
                                                     5) and OS                     
                                                     endpoint                      

  Cause of Death     Radio       *Disease Under      Required if Date DTHCAUS      **Cond**
                                 Study /             of Death entered              
                                 Treatment-Related /                               
                                 Other Cause /                                     
                                 Unknown*                                          
  ---------------------------------------------------------------------------------------------

**3. EDIT CHECK SPECIFICATION SUMMARY**

The following table summarizes key system-level edit checks programmed
into the EDC. All checks are implemented as either hard stops (prevent
data save) or soft queries (allow save with forced response).

  --------------------------------------------------------------------------------------
  **Check   **Module**   **Field(s)**     **Check           **Type**   **Query Text**
  ID**                                    Description**                
  --------- ------------ ---------------- ----------------- ---------- -----------------
  EC-001    01           Date of Consent  Consent Date must Hard Stop  Consent date
                         vs. Screening    be \<= Screening             cannot be after
                         Date             Date                         screening date.

  EC-002    01           All IC responses Eligibility =     Hard Stop  All inclusion met
                         = Yes AND all EC Eligible only if             and no exclusion
                         = No             all criteria met             met required for
                                                                       eligible status.

  EC-003    10           Pregnancy Test = Block enrollment; Hard Stop  Positive
                         Positive (WOCBP) trigger screen               pregnancy test:
                                          failure                      patient is not
                                                                       eligible.

  EC-004    12           Actual Dose !=   If actual dose    Soft Query Actual dose
                         Planned Dose     differs from 200             differs from
                                          mg, dose mod form            planned dose.
                                          required                     Confirm or
                                                                       complete dose
                                                                       modification CRF.

  EC-005    12           Cycle date vs.   Minimum 14 days   Soft Query Less than 14 days
                         prior cycle date between cycle                since last cycle.
                                          start dates                  Confirm dates are
                                                                       correct.

  EC-006    13           SoD % change     Alert if          Soft Query Calculated
                         meets            investigator                 response \[X\]
                         CR/PR/SD/PD      response differs             differs from
                         criteria         from algorithm               entered response
                                                                       \[Y\]. Confirm or
                                                                       provide
                                                                       justification.

  EC-007    14           AE Start Date    AE start prior to Soft Query AE start date
                         before First     first dose                   precedes first
                         Dose             requires                     dose. Should this
                                          pre-existing                 be entered as
                                          condition                    Medical History?
                                          classification               

  EC-008    14           SAE=Yes, SAE     Force SAE module  Hard Stop  SAE form must be
                         module not       completion within            completed when
                         completed        24 hours                     SAE=Yes.

  EC-009    14           AE               Death date must   Hard Stop  Date of death
                         Outcome=Fatal,   be entered in                required when AE
                         Death Date       disposition                  outcome is fatal.
                         missing                                       

  EC-010    17           EOT Reason=PD,   Progression date  Soft Query Progression date
                         no PD assessment must match a                 should correspond
                                          tumor assessment             to a confirmed
                                          date                         imaging
                                                                       assessment date.

  EC-011    10           Lab value        Extreme value:    Hard Stop  Lab value outside
                         outside hard     force                        acceptable data
                         range            investigator                 entry range.
                                          confirmation                 Verify and
                                                                       correct.

  EC-012    13           New Lesion=Yes,  New lesion        Soft Query New lesion
                         No PD recorded   appearance should            identified. Per
                                          trigger PD                   RECIST v1.1,
                                          classification               consider PD
                                          per RECIST                   classification.
  --------------------------------------------------------------------------------------

**4. CDASH-TO-SDTM MAPPING NOTES**

This eCRF is designed to capture data in CDASH v2.1 format to facilitate
downstream SDTM mapping. The following SDTM domains are expected to be
derived from eCRF data: DM, DS, MH, CM, AE, EX, VS, LB, EG, PE, QS, RS,
TU, PC, SC, MB, PR, TH, FA, SV.

A separate SDTM Mapping Specification document
(CVB-CRC-201-SDTM-MAP-v1.0) will define complete variable-level
CDASH-to-SDTM transformation rules, derivations, and controlled
terminology references. This document is maintained by the Data
Standards team.

**5. eCRF COMPLETION GUIDELINES**

All eCRF fields designated as \'Required\' must be completed.
Conditionally required fields (\'Cond\') must be completed when the
specified trigger condition is met. Fields marked \'No\' are optional or
system-derived. Sites must complete eCRF pages within 3 business days of
the visit or event. Outstanding queries must be resolved within 5
business days of query generation. Source documents must support all
eCRF entries (ALCOA+ compliance).
