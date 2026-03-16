**ONCOBIOLOGICS, INC.**

**ELECTRONIC CASE REPORT FORM (eCRF)**

**Protocol: CERVIMAB-301 \| Version 1.0 \| 16 March 2026**

EDC Platform: Medidata Rave \| CRF Version: 1.0

*\* Required Field \[ CDASH variable reference included for all key
fields \]*

**eCRF GENERAL INSTRUCTIONS**

**Data Entry Standards**

- All required fields (marked with \*) must be completed before form
  submission.

- Dates must be entered in DD/MMM/YYYY format (e.g., 16/MAR/2026).
  Partial dates: if day is unknown, enter UNK/MMM/YYYY; if month and day
  are unknown, enter UNK/UNK/YYYY.

- All data must be consistent with the source document (medical record,
  lab report, etc.).

- Do not use patient name anywhere in the eCRF. Use Subject ID only.

- Text fields: avoid abbreviations unless listed in the protocol
  glossary.

- If a test was not done, select \'Not Done\' and provide reason. Do not
  leave blank.

- If a value is not applicable, select \'N/A\' where available.

**Query Resolution**

- Queries will be generated automatically by the EDC system or by the
  sponsor\'s data management team.

- All queries must be resolved within 5 business days of receipt.

- Do not delete or overwrite previous entries. Use the audit trail
  function for corrections.

**Audit Trail**

The EDC system maintains a full audit trail of all entries, changes, and
query resolutions. All changes require an electronic signature and
reason for change. The audit trail cannot be altered or deleted.

  -----------------------------------------------------------------
  **NOTE: CDASH (Clinical Data Acquisition Standards Harmonization)
  variable names are provided in brackets for informational
  purposes to guide EDC build and SDTM mapping. These follow CDISC
  CDASH v2.1.**

  -----------------------------------------------------------------

**FORM 01: INFORMED CONSENT**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **INFORMED CONSENT AND ENROLLMENT**                    **Form:
                                                        IC-001**

  -------------------------------------------------- ---------------

+--------------------------+----------------------------------------+
| **Date of Informed       | DD / MMM / YYYY                        |
| Consent \***             |                                        |
|                          |                                        |
| *\[CDASH: RFICDTC\]*     |                                        |
+--------------------------+----------------------------------------+
| **Written informed       | ( ) Yes                                |
| consent obtained? \***   |                                        |
|                          | ( ) No --- Reason:                     |
| *\[CDASH: ICYN\]*        | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+--------------------------+----------------------------------------+
| **Was the patient given  | ( ) Yes                                |
| a copy of the signed     |                                        |
| ICF? \***                | ( ) No                                 |
+--------------------------+----------------------------------------+
| **ICF Version Number     | *\[ Free text entry field \]*          |
| \***                     |                                        |
+--------------------------+----------------------------------------+
| **IRB/IEC Name \***      | *\[ Free text entry field \]*          |
+--------------------------+----------------------------------------+
| **IRB/IEC Approval Date  | DD / MMM / YYYY                        |
| \***                     |                                        |
+--------------------------+----------------------------------------+
| **LAR Consent            | ( ) No                                 |
| Required?**              |                                        |
|                          | ( ) Yes --- LAR Name:                  |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                          | Relationship: \_\_\_\_\_\_\_\_\_\_\_   |
+--------------------------+----------------------------------------+
| **Optional Biobanking    | ( ) Agreed                             |
| Consent \***             |                                        |
|                          | ( ) Declined                           |
+--------------------------+----------------------------------------+
| **Person Obtaining       | *\[ Free text entry field \]*          |
| Consent (Name) \***      |                                        |
+--------------------------+----------------------------------------+
| **Person Obtaining       | *\[ Select one: \]*                    |
| Consent (Role) \***      |                                        |
|                          | Principal Investigator                 |
|                          |                                        |
|                          | Sub-Investigator                       |
|                          |                                        |
|                          | Study Coordinator                      |
|                          |                                        |
|                          | Other: \_\_\_\_\_\_\_                  |
+--------------------------+----------------------------------------+

  -----------------------------------------------------------------
  **NOTE: This form must be completed and signed in the EDC before
  any other screening procedures are recorded.**

  -----------------------------------------------------------------

**FORM 02: DEMOGRAPHICS & ELIGIBILITY**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **DEMOGRAPHICS**                                       **Form:
                                                        DM-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Date of Birth \***     | DD / MMM / YYYY                      |
|                          |                                      |
| *\[CDASH: BRTHDTC\]*     |                                      |
+--------------------------+--------------------------------------+
| **Age at Randomization   | *\[ Numeric entry \]                 |
| (years)**                | (auto-calculated from DOB and        |
|                          | randomization date)*                 |
| *\[CDASH: AGE\]*         |                                      |
+--------------------------+--------------------------------------+
| **Sex at Birth \***      | ( ) Male                             |
|                          |                                      |
| *\[CDASH: SEX\]*         | ( ) Female                           |
|                          |                                      |
|                          | ( ) Intersex / Other                 |
+--------------------------+--------------------------------------+
| **Gender Identity**      | *\[ Select one: \]*                  |
|                          |                                      |
|                          | Male                                 |
|                          |                                      |
|                          | Female                               |
|                          |                                      |
|                          | Non-binary                           |
|                          |                                      |
|                          | Prefer not to disclose               |
|                          |                                      |
|                          | Other                                |
+--------------------------+--------------------------------------+
| **Race \***              | \[ \] American Indian or Alaska      |
|                          | Native                               |
| *\[CDASH: RACE\]*        |                                      |
|                          | \[ \] Asian                          |
|                          |                                      |
|                          | \[ \] Black or African American      |
|                          |                                      |
|                          | \[ \] Native Hawaiian or Pacific     |
|                          | Islander                             |
|                          |                                      |
|                          | \[ \] White                          |
|                          |                                      |
|                          | \[ \] More than one race             |
|                          |                                      |
|                          | \[ \] Unknown / Not reported         |
+--------------------------+--------------------------------------+
| **Ethnicity \***         | ( ) Hispanic or Latino               |
|                          |                                      |
| *\[CDASH: ETHNIC\]*      | ( ) Not Hispanic or Latino           |
|                          |                                      |
|                          | ( ) Unknown / Not reported           |
+--------------------------+--------------------------------------+
| **Country of Birth \***  | *\[ Select one: \]*                  |
|                          |                                      |
|                          | (Country list --- ISO 3166)          |
+--------------------------+--------------------------------------+
| **Country of Residence   | *\[ Select one: \]*                  |
| \***                     |                                      |
|                          | (Country list --- ISO 3166)          |
+--------------------------+--------------------------------------+
| **Height (cm) \***       | *\[ Numeric entry \] cm*             |
|                          |                                      |
| *\[CDASH: HEIGHTBL\]*    |                                      |
+--------------------------+--------------------------------------+
| **Weight (kg) \***       | *\[ Numeric entry \] kg*             |
|                          |                                      |
| *\[CDASH: WEIGHTBL\]*    |                                      |
+--------------------------+--------------------------------------+
| **BSA (m²)**             | *\[ Numeric entry \]                 |
|                          | (auto-calculated by Mosteller        |
|                          | formula)*                            |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **ELIGIBILITY CONFIRMATION**                           **Form:
                                                        EL-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **All inclusion criteria | ( ) Yes                              |
| met? \***                |                                      |
|                          | ( ) No --- specify which criterion   |
|                          | failed: \_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **All exclusion criteria | ( ) Yes                              |
| absent? \***             |                                      |
|                          | ( ) No --- specify which criterion   |
|                          | applies: \_\_\_\_\_\_\_\_\_\_\_      |
+--------------------------+--------------------------------------+
| **dMMR/MSI-H confirmed   | ( ) Yes --- attach lab report        |
| at central lab? \***     |                                      |
|                          | ( ) No                               |
|                          |                                      |
|                          | ( ) Pending                          |
+--------------------------+--------------------------------------+
| **ECOG Performance       | ( ) 0 --- Fully active               |
| Status \***              |                                      |
|                          | ( ) 1 --- Restricted strenuous       |
| *\[CDASH: ECOGBL\]*      | activity but ambulatory              |
|                          |                                      |
|                          | ( ) 2 --- Not eligible               |
|                          |                                      |
|                          | ( ) 3 --- Not eligible               |
|                          |                                      |
|                          | ( ) 4 --- Not eligible               |
+--------------------------+--------------------------------------+
| **Prior adjuvant         | ( ) No                               |
| therapy? \***            |                                      |
|                          | ( ) Yes --- Date completed:          |
|                          | \_\_\_/\_\_\_/\_\_\_\_\_ Regimen:    |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_             |
+--------------------------+--------------------------------------+
| **Patient eligible for   | ( ) Yes                              |
| randomization? \***      |                                      |
|                          | ( ) No                               |
+--------------------------+--------------------------------------+
| **If not eligible ---    | *\[ Free text entry field \]*        |
| reason for screen        |                                      |
| failure**                |                                      |
+--------------------------+--------------------------------------+

  -----------------------------------------------------------------
  **NOTE: Both inclusion and exclusion confirmations must be \'Yes
  / absent\' before the patient may be randomized.**

  -----------------------------------------------------------------

**FORM 03: MEDICAL HISTORY & PRIOR THERAPY**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **PRIMARY CANCER DIAGNOSIS**                           **Form:
                                                        MH-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Primary tumor site     | *\[ Select one: \]*                  |
| \***                     |                                      |
|                          | Colon                                |
| *\[CDASH: MHTERM\]*      |                                      |
|                          | Rectum                               |
|                          |                                      |
|                          | Rectosigmoid junction                |
|                          |                                      |
|                          | Other: \_\_\_\_\_\_\_                |
+--------------------------+--------------------------------------+
| **Histology \***         | *\[ Select one: \]*                  |
|                          |                                      |
|                          | Adenocarcinoma                       |
|                          |                                      |
|                          | Mucinous adenocarcinoma              |
|                          |                                      |
|                          | Signet ring cell carcinoma           |
|                          |                                      |
|                          | Other: \_\_\_\_\_\_\_                |
+--------------------------+--------------------------------------+
| **Date of initial        | DD / MMM / YYYY                      |
| diagnosis \***           |                                      |
|                          |                                      |
| *\[CDASH: MHSTDTC\]*     |                                      |
+--------------------------+--------------------------------------+
| **Stage at initial       | *\[ Select one: \]*                  |
| diagnosis \***           |                                      |
|                          | I                                    |
|                          |                                      |
|                          | II                                   |
|                          |                                      |
|                          | III                                  |
|                          |                                      |
|                          | IV --- de novo metastatic            |
+--------------------------+--------------------------------------+
| **Date of metastatic     | DD / MMM / YYYY                      |
| diagnosis \***           |                                      |
+--------------------------+--------------------------------------+
| **Sites of metastatic    | \[ \] Liver                          |
| disease \***             |                                      |
|                          | \[ \] Lung                           |
|                          |                                      |
|                          | \[ \] Peritoneum                     |
|                          |                                      |
|                          | \[ \] Lymph node                     |
|                          |                                      |
|                          | \[ \] Bone                           |
|                          |                                      |
|                          | \[ \] Brain                          |
|                          |                                      |
|                          | \[ \] Other: \_\_\_\_\_\_\_          |
+--------------------------+--------------------------------------+
| **RAS mutation status    | ( ) Wild-type (RAS WT)               |
| (central lab) \***       |                                      |
|                          | ( ) KRAS mutant                      |
|                          |                                      |
|                          | ( ) NRAS mutant                      |
|                          |                                      |
|                          | ( ) Unknown                          |
+--------------------------+--------------------------------------+
| **BRAF V600E mutation    | ( ) Wild-type                        |
| status \***              |                                      |
|                          | ( ) Mutant                           |
|                          |                                      |
|                          | ( ) Unknown                          |
+--------------------------+--------------------------------------+
| **MSI/MMR testing method | ( ) IHC (MLH1/MSH2/MSH6/PMS2)        |
| \***                     |                                      |
|                          | ( ) PCR-based MSI                    |
|                          |                                      |
|                          | ( ) NGS-based                        |
|                          |                                      |
|                          | ( ) Both IHC and PCR                 |
+--------------------------+--------------------------------------+
| **MSI/MMR result         | ( ) MSI-H / dMMR                     |
| (central lab) \***       |                                      |
|                          | ( ) MSS / pMMR                       |
| *\[CDASH: MHRES\]*       |                                      |
|                          | ( ) Indeterminate                    |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **RELEVANT MEDICAL HISTORY**                           **Form:
                                                        MH-002**

  -------------------------------------------------- ---------------

+--------------------------+----------------------------------------+
| **History of autoimmune  | ( ) No                                 |
| disease? \***            |                                        |
|                          | ( ) Yes --- specify:                   |
| *\[CDASH: MHYN\]*        | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+--------------------------+----------------------------------------+
| **History of             | ( ) No                                 |
| inflammatory bowel       |                                        |
| disease? \***            | ( ) Yes --- Crohn\'s                   |
|                          |                                        |
|                          | ( ) Yes --- Ulcerative colitis         |
+--------------------------+----------------------------------------+
| **History of             | ( ) No                                 |
| interstitial lung        |                                        |
| disease? \***            | ( ) Yes                                |
+--------------------------+----------------------------------------+
| **Cardiovascular history | \[ \] None                             |
| \***                     |                                        |
|                          | \[ \] Hypertension                     |
|                          |                                        |
|                          | \[ \] Coronary artery disease          |
|                          |                                        |
|                          | \[ \] Heart failure                    |
|                          |                                        |
|                          | \[ \] Prior stroke/TIA                 |
|                          |                                        |
|                          | \[ \] Other: \_\_\_\_\_\_\_            |
+--------------------------+----------------------------------------+
| **Hepatitis B status     | ( ) Negative                           |
| (HBsAg) \***             |                                        |
|                          | ( ) Positive                           |
+--------------------------+----------------------------------------+
| **Hepatitis C status     | ( ) Negative                           |
| (HCV RNA) \***           |                                        |
|                          | ( ) Positive                           |
|                          |                                        |
|                          | ( ) Not tested                         |
+--------------------------+----------------------------------------+
| **HIV status \***        | ( ) Negative                           |
|                          |                                        |
|                          | ( ) Positive --- CD4 count: \_\_\_     |
|                          | cells/uL                               |
|                          |                                        |
|                          | ( ) Not tested                         |
+--------------------------+----------------------------------------+
| **Other significant      | *\[ Free text entry field \]*          |
| medical history**        |                                        |
+--------------------------+----------------------------------------+

  -------------------------------------------------- ---------------
  **PRIOR ANTICANCER THERAPY**                           **Form:
                                                        CM-001**

  -------------------------------------------------- ---------------

+--------------------------+----------------------------------------+
| **Prior                  | ( ) No                                 |
| adjuvant/neoadjuvant     |                                        |
| therapy? \***            | ( ) Yes                                |
|                          |                                        |
| *\[CDASH: CMYN\]*        |                                        |
+--------------------------+----------------------------------------+
| **If yes --- Regimen**   | *\[ Free text entry field \]*          |
|                          |                                        |
| *\[CDASH: CMTRT\]*       |                                        |
+--------------------------+----------------------------------------+
| **If yes --- Start       | DD / MMM / YYYY                        |
| date**                   |                                        |
|                          |                                        |
| *\[CDASH: CMSTDTC\]*     |                                        |
+--------------------------+----------------------------------------+
| **If yes --- End date**  | DD / MMM / YYYY                        |
|                          |                                        |
| *\[CDASH: CMENDTC\]*     |                                        |
+--------------------------+----------------------------------------+
| **Prior surgery for CRC? | ( ) No                                 |
| \***                     |                                        |
|                          | ( ) Yes --- procedure:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                          | Date: \_\_\_/\_\_\_/\_\_\_\_\_         |
+--------------------------+----------------------------------------+
| **Prior radiation        | ( ) No                                 |
| therapy? \***            |                                        |
|                          | ( ) Yes --- site:                      |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                          | Date: \_\_\_/\_\_\_/\_\_\_\_\_         |
+--------------------------+----------------------------------------+
| **Prior immunotherapy?   | ( ) No                                 |
| \***                     |                                        |
|                          | ( ) Yes --- agent:                     |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+--------------------------+----------------------------------------+

  -----------------------------------------------------------------
  **NOTE: Patients who have received prior anti-PD-1/PD-L1 therapy
  are not eligible (Exclusion Criterion). If \'Yes\' to prior
  immunotherapy, notify the Medical Monitor immediately.**

  -----------------------------------------------------------------

**FORM 04: VITAL SIGNS & PHYSICAL EXAMINATION**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **VITAL SIGNS**                                        **Form:
                                                        VS-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Date and time of       | DD / MMM / YYYY                      |
| measurement \***         |                                      |
|                          |                                      |
| *\[CDASH: VSDTC\]*       |                                      |
+--------------------------+--------------------------------------+
| **Systolic Blood         | *\[ Numeric entry \] mmHg*           |
| Pressure (mmHg) \***     |                                      |
|                          |                                      |
| *\[CDASH: SYSBP\]*       |                                      |
+--------------------------+--------------------------------------+
| **Diastolic Blood        | *\[ Numeric entry \] mmHg*           |
| Pressure (mmHg) \***     |                                      |
|                          |                                      |
| *\[CDASH: DIABP\]*       |                                      |
+--------------------------+--------------------------------------+
| **Heart Rate (bpm) \***  | *\[ Numeric entry \] beats per       |
|                          | minute*                              |
| *\[CDASH: HR\]*          |                                      |
+--------------------------+--------------------------------------+
| **Respiratory Rate       | *\[ Numeric entry \] breaths per     |
| (breaths/min)**          | minute*                              |
|                          |                                      |
| *\[CDASH: RESP\]*        |                                      |
+--------------------------+--------------------------------------+
| **Temperature (°C) \***  | *\[ Numeric entry \] °C*             |
|                          |                                      |
| *\[CDASH: TEMP\]*        |                                      |
+--------------------------+--------------------------------------+
| **Oxygen Saturation      | *\[ Numeric entry \] % (pulse        |
| (%)**                    | oximetry)*                           |
|                          |                                      |
| *\[CDASH: OXYSAT\]*      |                                      |
+--------------------------+--------------------------------------+
| **Weight at this visit   | *\[ Numeric entry \] kg*             |
| (kg) \***                |                                      |
|                          |                                      |
| *\[CDASH: VSWT\]*        |                                      |
+--------------------------+--------------------------------------+
| **Height (cm) ---        | *\[ Numeric entry \] cm --- enter at |
| Screening only**         | Screening only*                      |
|                          |                                      |
| *\[CDASH: VSHT\]*        |                                      |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **ECOG PERFORMANCE STATUS**                            **Form:
                                                        VS-002**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **ECOG Performance       | ( ) 0 --- Fully active, no           |
| Status \***              | restriction                          |
|                          |                                      |
| *\[CDASH: VSECOG\]*      | ( ) 1 --- Restricted strenuous       |
|                          | activity; ambulatory, light work OK  |
|                          |                                      |
|                          | ( ) 2 --- Ambulatory, capable of     |
|                          | self-care; no work; up \>50% waking  |
|                          | hrs                                  |
|                          |                                      |
|                          | ( ) 3 --- Limited self-care;         |
|                          | confined to bed/chair \>50% waking   |
|                          | hrs                                  |
|                          |                                      |
|                          | ( ) 4 --- Completely disabled; no    |
|                          | self-care                            |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **PHYSICAL EXAMINATION**                               **Form:
                                                        PE-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **General appearance     | ( ) Normal                           |
| \***                     |                                      |
|                          | ( ) Abnormal --- not clinically      |
| *\[CDASH: PEGEN\]*       | significant                          |
|                          |                                      |
|                          | ( ) Abnormal --- clinically          |
|                          | significant:                         |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Head and neck \***     | ( ) Normal                           |
|                          |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Respiratory / Lungs    | ( ) Normal                           |
| \***                     |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Cardiovascular \***    | ( ) Normal                           |
|                          |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Abdomen / GI \***      | ( ) Normal                           |
|                          |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Musculoskeletal \***   | ( ) Normal                           |
|                          |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Neurological \***      | ( ) Normal                           |
|                          |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Skin \***              | ( ) Normal                           |
|                          |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Lymph nodes \***       | ( ) Normal                           |
|                          |                                      |
|                          | ( ) Abnormal --- not CS              |
|                          |                                      |
|                          | ( ) Abnormal --- CS:                 |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_       |
+--------------------------+--------------------------------------+
| **Other findings**       | *\[ Free text entry field \]*        |
+--------------------------+--------------------------------------+

**FORM 05: LABORATORY ASSESSMENTS**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **HEMATOLOGY**                                         **Form:
                                                        LB-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Sample collection      | DD / MMM / YYYY                      |
| date/time \***           |                                      |
|                          |                                      |
| *\[CDASH: LBDTC\]*       |                                      |
+--------------------------+--------------------------------------+
| **White Blood Cells      | *\[ Numeric entry \] x10\^9/L*       |
| (x10\^9/L) \***          |                                      |
|                          |                                      |
| *\[CDASH: WBC\]*         |                                      |
+--------------------------+--------------------------------------+
| **Absolute Neutrophil    | *\[ Numeric entry \] x10\^9/L*       |
| Count (x10\^9/L) \***    |                                      |
|                          |                                      |
| *\[CDASH: NEUT\]*        |                                      |
+--------------------------+--------------------------------------+
| **Lymphocytes (x10\^9/L) | *\[ Numeric entry \] x10\^9/L*       |
| \***                     |                                      |
|                          |                                      |
| *\[CDASH: LYMPH\]*       |                                      |
+--------------------------+--------------------------------------+
| **Hemoglobin (g/dL) \*** | *\[ Numeric entry \] g/dL*           |
|                          |                                      |
| *\[CDASH: HGB\]*         |                                      |
+--------------------------+--------------------------------------+
| **Platelets (x10\^9/L)   | *\[ Numeric entry \] x10\^9/L*       |
| \***                     |                                      |
|                          |                                      |
| *\[CDASH: PLT\]*         |                                      |
+--------------------------+--------------------------------------+
| **Hematocrit (%)**       | *\[ Numeric entry \] %*              |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **CHEMISTRY / METABOLIC PANEL**                        **Form:
                                                        LB-002**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Sample collection      | DD / MMM / YYYY                      |
| date/time \***           |                                      |
|                          |                                      |
| *\[CDASH: LBDTC\]*       |                                      |
+--------------------------+--------------------------------------+
| **Sodium (mmol/L) \***   | *\[ Numeric entry \] mmol/L*         |
|                          |                                      |
| *\[CDASH: SODIUM\]*      |                                      |
+--------------------------+--------------------------------------+
| **Potassium (mmol/L)     | *\[ Numeric entry \] mmol/L*         |
| \***                     |                                      |
|                          |                                      |
| *\[CDASH: POTASSM\]*     |                                      |
+--------------------------+--------------------------------------+
| **Creatinine (mg/dL or   | *\[ Numeric entry \] specify units*  |
| umol/L) \***             |                                      |
|                          |                                      |
| *\[CDASH: CREAT\]*       |                                      |
+--------------------------+--------------------------------------+
| **eGFR (mL/min/1.73m²)** | *\[ Numeric entry \]                 |
|                          | (auto-calculated CKD-EPI)*           |
| *\[CDASH: EGFR\]*        |                                      |
+--------------------------+--------------------------------------+
| **Total Bilirubin (mg/dL | *\[ Numeric entry \] specify units*  |
| or umol/L) \***          |                                      |
|                          |                                      |
| *\[CDASH: TBILI\]*       |                                      |
+--------------------------+--------------------------------------+
| **Direct Bilirubin       | *\[ Numeric entry \] mg/dL*          |
| (mg/dL)**                |                                      |
+--------------------------+--------------------------------------+
| **AST / SGOT (U/L) \***  | *\[ Numeric entry \] U/L*            |
|                          |                                      |
| *\[CDASH: AST\]*         |                                      |
+--------------------------+--------------------------------------+
| **ALT / SGPT (U/L) \***  | *\[ Numeric entry \] U/L*            |
|                          |                                      |
| *\[CDASH: ALT\]*         |                                      |
+--------------------------+--------------------------------------+
| **Alkaline Phosphatase   | *\[ Numeric entry \] U/L*            |
| (U/L) \***               |                                      |
|                          |                                      |
| *\[CDASH: ALKPH\]*       |                                      |
+--------------------------+--------------------------------------+
| **Albumin (g/dL) \***    | *\[ Numeric entry \] g/dL*           |
|                          |                                      |
| *\[CDASH: ALB\]*         |                                      |
+--------------------------+--------------------------------------+
| **LDH (U/L)**            | *\[ Numeric entry \] U/L*            |
+--------------------------+--------------------------------------+
| **Glucose (mg/dL) \***   | *\[ Numeric entry \] mg/dL*          |
|                          |                                      |
| *\[CDASH: GLUC\]*        |                                      |
+--------------------------+--------------------------------------+
| **Calcium (mg/dL)**      | *\[ Numeric entry \] mg/dL*          |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **THYROID FUNCTION**                                   **Form:
                                                        LB-003**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **TSH (mIU/L) \***       | *\[ Numeric entry \] mIU/L*          |
|                          |                                      |
| *\[CDASH: TSH\]*         |                                      |
+--------------------------+--------------------------------------+
| **Free T4 (ng/dL) \***   | *\[ Numeric entry \] ng/dL*          |
|                          |                                      |
| *\[CDASH: FT4\]*         |                                      |
+--------------------------+--------------------------------------+
| **Free T3 (pg/mL)**      | *\[ Numeric entry \] pg/mL (if TSH   |
|                          | abnormal)*                           |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **TUMOR MARKERS**                                      **Form:
                                                        LB-004**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **CEA (ng/mL) \***       | *\[ Numeric entry \] ng/mL*          |
|                          |                                      |
| *\[CDASH: CEA\]*         |                                      |
+--------------------------+--------------------------------------+
| **CA19-9 (U/mL) \***     | *\[ Numeric entry \] U/mL*           |
|                          |                                      |
| *\[CDASH: CA199\]*       |                                      |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **URINALYSIS**                                         **Form:
                                                        LB-005**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Protein (dipstick)     | *\[ Select one: \]*                  |
| \***                     |                                      |
|                          | Negative                             |
| *\[CDASH: URPROT\]*      |                                      |
|                          | +1                                   |
|                          |                                      |
|                          | +2                                   |
|                          |                                      |
|                          | +3                                   |
|                          |                                      |
|                          | +4                                   |
|                          |                                      |
|                          | Not done                             |
+--------------------------+--------------------------------------+
| **If protein \>=+2:      | *\[ Numeric entry \] g/24hr*         |
| 24-hr urine protein      |                                      |
| (g/24hr)**               |                                      |
+--------------------------+--------------------------------------+
| **Blood (dipstick) \***  | *\[ Select one: \]*                  |
|                          |                                      |
|                          | Negative                             |
|                          |                                      |
|                          | +1                                   |
|                          |                                      |
|                          | +2                                   |
|                          |                                      |
|                          | +3                                   |
|                          |                                      |
|                          | Not done                             |
+--------------------------+--------------------------------------+
| **Other significant      | *\[ Free text entry field \]*        |
| findings**               |                                      |
+--------------------------+--------------------------------------+

**FORM 06: RANDOMIZATION**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **RANDOMIZATION**                                      **Form:
                                                        RN-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Date of Randomization  | DD / MMM / YYYY                      |
| \***                     |                                      |
|                          |                                      |
| *\[CDASH: RANDDT\]*      |                                      |
+--------------------------+--------------------------------------+
| **Randomization Number   | *\[ Free text entry field \]*        |
| (from IWRS) \***         |                                      |
|                          |                                      |
| *\[CDASH: RANDNO\]*      |                                      |
+--------------------------+--------------------------------------+
| **Treatment Arm Assigned | ( ) Arm A --- Cervimab 400 mg IV Q3W |
| \***                     |                                      |
|                          | ( ) Arm B --- FOLFOX-4 + Bevacizumab |
| *\[CDASH: ARM\]*         |                                      |
+--------------------------+--------------------------------------+
| **Stratification Factor: | ( ) 0                                |
| ECOG PS \***             |                                      |
|                          | ( ) 1                                |
| *\[CDASH: STRECOG\]*     |                                      |
+--------------------------+--------------------------------------+
| **Stratification Factor: | ( ) North America / Western Europe   |
| Geographic Region \***   |                                      |
|                          | ( ) Rest of World                    |
| *\[CDASH: STRREGN\]*     |                                      |
+--------------------------+--------------------------------------+
| **Stratification Factor: | ( ) Wild-type (both RAS and BRAF WT) |
| RAS/BRAF Status \***     |                                      |
|                          | ( ) Mutant (KRAS, NRAS, or BRAF      |
| *\[CDASH: STRMUT\]*      | mutant)                              |
+--------------------------+--------------------------------------+
| **IWRS confirmation code | *\[ Free text entry field \]*        |
| \***                     |                                      |
+--------------------------+--------------------------------------+

  -----------------------------------------------------------------
  **NOTE: Randomization must be performed via IWRS only. Manual
  randomization is not permitted. The treatment arm assignment will
  be masked from the patient and the treating investigator. Only
  the IWRS and unblinded pharmacist will have access to treatment
  assignment.**

  -----------------------------------------------------------------

**FORM 07: STUDY TREATMENT ADMINISTRATION**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **CERVIMAB / PLACEBO ADMINISTRATION**                  **Form:
                                                        EX-001**

  -------------------------------------------------- ---------------

+--------------------------+----------------------------------------+
| **Cycle Number \***      | *\[ Numeric entry \] (enter cycle      |
|                          | number)*                               |
| *\[CDASH: EXSEQ\]*       |                                        |
+--------------------------+----------------------------------------+
| **Planned Dose (mg) \*** | *\[ Numeric entry \] 400 mg (or        |
|                          | specify if modified)*                  |
| *\[CDASH: EXDOSE\]*      |                                        |
+--------------------------+----------------------------------------+
| **Actual Dose            | *\[ Numeric entry \] mg*               |
| Administered (mg) \***   |                                        |
|                          |                                        |
| *\[CDASH: EXADOSE\]*     |                                        |
+--------------------------+----------------------------------------+
| **Date of infusion \***  | DD / MMM / YYYY                        |
|                          |                                        |
| *\[CDASH: EXSTDTC\]*     |                                        |
+--------------------------+----------------------------------------+
| **Start time of infusion | *\[ Free text entry field \]*          |
| \***                     |                                        |
+--------------------------+----------------------------------------+
| **End time of infusion   | *\[ Free text entry field \]*          |
| \***                     |                                        |
+--------------------------+----------------------------------------+
| **Duration of infusion   | *\[ Numeric entry \] minutes (target:  |
| (minutes) \***           | 30 min)*                               |
+--------------------------+----------------------------------------+
| **Dose level (% of       | *\[ Numeric entry \]                   |
| planned)**               | (auto-calculated)*                     |
+--------------------------+----------------------------------------+
| **Was the dose modified? | ( ) No                                 |
| \***                     |                                        |
|                          | ( ) Yes --- reason: dose reduction /   |
| *\[CDASH: EXDOSMOD\]*    | delay / interruption / permanent       |
|                          | discontinuation                        |
+--------------------------+----------------------------------------+
| **If dose modified ---   | *\[ Select one: \]*                    |
| reason**                 |                                        |
|                          | AE / Toxicity                          |
| *\[CDASH: EXMODRS\]*     |                                        |
|                          | Patient request                        |
|                          |                                        |
|                          | Investigator decision                  |
|                          |                                        |
|                          | Protocol requirement                   |
|                          |                                        |
|                          | Other: \_\_\_\_\_\_\_                  |
+--------------------------+----------------------------------------+
| **Route of               | ( ) IV infusion                        |
| administration \***      |                                        |
|                          | ( ) Other (specify)                    |
| *\[CDASH: EXROUTE\]*     |                                        |
+--------------------------+----------------------------------------+
| **Infusion site**        | *\[ Free text entry field \]*          |
+--------------------------+----------------------------------------+
| **Any infusion           | ( ) No                                 |
| interruption?**          |                                        |
|                          | ( ) Yes --- duration: \_\_\_ min       |
|                          | Reason: \_\_\_\_\_\_\_\_\_\_\_         |
+--------------------------+----------------------------------------+
| **Pre-medications        | ( ) No                                 |
| given?**                 |                                        |
|                          | ( ) Yes --- specify:                   |
|                          | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+--------------------------+----------------------------------------+

  -----------------------------------------------------------------
  **NOTE: A separate administration record must be completed for
  each infusion visit. For Arm B patients, a separate FOLFOX-4 and
  Bevacizumab administration form will auto-populate.**

  -----------------------------------------------------------------

  -------------------------------------------------- ---------------
  **REASON FOR TREATMENT DISCONTINUATION (complete       **Form:
  at EOT only)**                                        EX-002**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Is this the End of     | ( ) No                               |
| Treatment visit? \***    |                                      |
|                          | ( ) Yes                              |
+--------------------------+--------------------------------------+
| **Date of last dose**    | DD / MMM / YYYY                      |
|                          |                                      |
| *\[CDASH: EXENDTC\]*     |                                      |
+--------------------------+--------------------------------------+
| **Primary reason for     | *\[ Select one: \]*                  |
| discontinuation**        |                                      |
|                          | Disease progression                  |
| *\[CDASH: DCREASCD\]*    |                                      |
|                          | Complete response --- elective       |
|                          | discontinuation after 2 years        |
|                          |                                      |
|                          | Unacceptable adverse event           |
|                          |                                      |
|                          | Patient withdrawal of consent        |
|                          |                                      |
|                          | Patient decision --- other           |
|                          |                                      |
|                          | Investigator decision                |
|                          |                                      |
|                          | Protocol deviation                   |
|                          |                                      |
|                          | Sponsor decision / study termination |
|                          |                                      |
|                          | Death                                |
|                          |                                      |
|                          | Lost to follow-up                    |
|                          |                                      |
|                          | Other: \_\_\_\_\_\_\_                |
+--------------------------+--------------------------------------+

**FORM 08: TUMOR ASSESSMENT (RECIST v1.1)**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **TUMOR IMAGING --- INVESTIGATOR ASSESSMENT**          **Form:
                                                        TU-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Assessment timepoint   | *\[ Select one: \]*                  |
| \***                     |                                      |
|                          | Baseline (Screening)                 |
|                          |                                      |
|                          | Week 6                               |
|                          |                                      |
|                          | Week 12                              |
|                          |                                      |
|                          | Week 18                              |
|                          |                                      |
|                          | Week 24                              |
|                          |                                      |
|                          | Week 30                              |
|                          |                                      |
|                          | Week 36                              |
|                          |                                      |
|                          | Week 42                              |
|                          |                                      |
|                          | Week 48                              |
|                          |                                      |
|                          | Week 60 onwards (Q12W)               |
+--------------------------+--------------------------------------+
| **Date of CT/MRI \***    | DD / MMM / YYYY                      |
|                          |                                      |
| *\[CDASH: TUDTC\]*       |                                      |
+--------------------------+--------------------------------------+
| **Imaging modality \***  | ( ) CT with IV contrast              |
|                          |                                      |
|                          | ( ) MRI with IV contrast             |
|                          |                                      |
|                          | ( ) CT without contrast --- reason:  |
|                          | \_\_\_\_\_\_\_\_\_\_\_               |
|                          |                                      |
|                          | ( ) MRI without contrast --- reason: |
|                          | \_\_\_\_\_\_\_\_\_\_\_               |
+--------------------------+--------------------------------------+
| **Imaging body regions   | \[ \] Chest                          |
| \***                     |                                      |
|                          | \[ \] Abdomen                        |
|                          |                                      |
|                          | \[ \] Pelvis                         |
|                          |                                      |
|                          | \[ \] Other: \_\_\_\_\_\_\_          |
+--------------------------+--------------------------------------+

  -----------------------------------------------------------------
  **TARGET LESIONS (up to 5 total; max 2 per organ)**

  -----------------------------------------------------------------

+--------------------------+--------------------------------------+
| **Target Lesion 1 ---    | *\[ Free text entry field \]*        |
| Location / Organ**       |                                      |
|                          |                                      |
| *\[CDASH: TULOC1\]*      |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 1 ---    | *\[ Numeric entry \] mm*             |
| Longest Diameter (mm)**  |                                      |
|                          |                                      |
| *\[CDASH: TUORRES1\]*    |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 2 ---    | *\[ Free text entry field \]*        |
| Location / Organ**       |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 2 ---    | *\[ Numeric entry \] mm*             |
| Longest Diameter (mm)**  |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 3 ---    | *\[ Free text entry field \]*        |
| Location / Organ**       |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 3 ---    | *\[ Numeric entry \] mm*             |
| Longest Diameter (mm)**  |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 4 ---    | *\[ Free text entry field \]*        |
| Location / Organ**       |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 4 ---    | *\[ Numeric entry \] mm*             |
| Longest Diameter (mm)**  |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 5 ---    | *\[ Free text entry field \]*        |
| Location / Organ**       |                                      |
+--------------------------+--------------------------------------+
| **Target Lesion 5 ---    | *\[ Numeric entry \] mm*             |
| Longest Diameter (mm)**  |                                      |
+--------------------------+--------------------------------------+
| **Sum of Diameters (SOD) | *\[ Numeric entry \]                 |
| --- mm**                 | (auto-calculated)*                   |
|                          |                                      |
| *\[CDASH: TUSUMD\]*      |                                      |
+--------------------------+--------------------------------------+
| **% Change from Baseline | *\[ Numeric entry \]                 |
| SOD**                    | (auto-calculated)*                   |
+--------------------------+--------------------------------------+
| **% Change from Nadir    | *\[ Numeric entry \]                 |
| SOD**                    | (auto-calculated)*                   |
+--------------------------+--------------------------------------+

  -----------------------------------------------------------------
  **NON-TARGET LESIONS**

  -----------------------------------------------------------------

+--------------------------+------------------------------------------------+
| **Non-target lesion      | ( ) No non-target lesions                      |
| presence at baseline?**  |                                                |
|                          | ( ) Yes --- specify locations:                 |
| *\[CDASH: TUNONTGT\]*    | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+--------------------------+------------------------------------------------+
| **Non-target lesion      | *\[ Select one: \]*                            |
| response**               |                                                |
|                          | Non-CR/Non-PD                                  |
|                          |                                                |
|                          | Unequivocal progression                        |
|                          |                                                |
|                          | CR (complete disappearance)                    |
|                          |                                                |
|                          | Not applicable --- no non-target lesions       |
+--------------------------+------------------------------------------------+

  -----------------------------------------------------------------
  **NEW LESIONS**

  -----------------------------------------------------------------

+--------------------------+------------------------------------------------+
| **New lesions present?   | ( ) No                                         |
| \***                     |                                                |
|                          | ( ) Yes --- location(s):                       |
| *\[CDASH: TUNEWLSN\]*    | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+--------------------------+------------------------------------------------+
| **If yes --- date of     | DD / MMM / YYYY                                |
| first new lesion         |                                                |
| detection**              |                                                |
+--------------------------+------------------------------------------------+

  -----------------------------------------------------------------
  **OVERALL RESPONSE**

  -----------------------------------------------------------------

+--------------------------+--------------------------------------+
| **Investigator Overall   | ( ) CR --- Complete Response         |
| Response Assessment \*** |                                      |
|                          | ( ) PR --- Partial Response          |
| *\[CDASH: OVRLRESP\]*    |                                      |
|                          | ( ) SD --- Stable Disease            |
|                          |                                      |
|                          | ( ) PD --- Progressive Disease       |
|                          |                                      |
|                          | ( ) NE --- Not Evaluable --- reason: |
|                          | \_\_\_\_\_\_\_\_\_\_\_               |
+--------------------------+--------------------------------------+
| **Date of response first | DD / MMM / YYYY                      |
| documented**             |                                      |
+--------------------------+--------------------------------------+
| **Confirmation scan date | DD / MMM / YYYY                      |
| (for CR/PR)**            |                                      |
+--------------------------+--------------------------------------+
| **Confirmed response?**  | ( ) Yes                              |
|                          |                                      |
|                          | ( ) No                               |
|                          |                                      |
|                          | ( ) Pending confirmation             |
+--------------------------+--------------------------------------+

  -----------------------------------------------------------------
  **NOTE: BICR (Blinded Independent Central Review) will perform
  independent tumor assessments. Investigator assessments guide
  clinical management. Primary endpoint analysis is based on BICR.
  All imaging must be uploaded to the central imaging vendor
  platform within 5 business days of acquisition.**

  -----------------------------------------------------------------

**FORM 09: ADVERSE EVENTS**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **ADVERSE EVENT RECORD**                               **Form:
                                                        AE-001**

  -------------------------------------------------- ---------------

Complete one row per AE. Each AE must be recorded separately.

  -------------- ---------- --------------- --------------- ------------- ------------ ---------------- -------------------- -------------
  **AE Term      **MedDRA   **Start Date**  **End Date**    **Grade       **Serious?   **Relationship   **Action Taken       **Resolved?
  (Verbatim)**   PT (SOC)**                                 (CTCAE v5)**  (Y/N)**      to Study Drug**  (dose/treatment)**   (Y/N/Unk)**

  *\[ AE Term    *\[ MedDRA *DD/MMM/YYYY*   *DD/MMM/YYYY*   *1/2/3/4/5*   *\[ \]*      *\[ \]*          *\[ \]*              *\[ \]*
  \]*            PT \]*                                                                                                      

  *\[ AE Term    *\[ MedDRA *DD/MMM/YYYY*   *DD/MMM/YYYY*   *1/2/3/4/5*   *\[ \]*      *\[ \]*          *\[ \]*              *\[ \]*
  \]*            PT \]*                                                                                                      

  *\[ AE Term    *\[ MedDRA *DD/MMM/YYYY*   *DD/MMM/YYYY*   *1/2/3/4/5*   *\[ \]*      *\[ \]*          *\[ \]*              *\[ \]*
  \]*            PT \]*                                                                                                      
  -------------- ---------- --------------- --------------- ------------- ------------ ---------------- -------------------- -------------

  -----------------------------------------------------------------
  **NOTE: Grade ALL AEs using NCI CTCAE Version 5.0. Adverse Events
  of Special Interest (AESI) --- immune-related reactions --- must
  be flagged separately. Any AE with outcome = Death must generate
  an SAE report within 24 hours.**

  -----------------------------------------------------------------

  -------------------------------------------------- ---------------
  **SERIOUS ADVERSE EVENT DETAILS (complete for each     **Form:
  SAE)**                                                AE-002**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **AE Term \***           | *\[ Free text entry field \]*        |
|                          |                                      |
| *\[CDASH: AETERM\]*      |                                      |
+--------------------------+--------------------------------------+
| **Date of SAE onset \*** | DD / MMM / YYYY                      |
|                          |                                      |
| *\[CDASH: AESTDTC\]*     |                                      |
+--------------------------+--------------------------------------+
| **Date SAE reported to   | DD / MMM / YYYY                      |
| sponsor \***             |                                      |
+--------------------------+--------------------------------------+
| **SAE Criteria (select   | \[ \] Death                          |
| all that apply) \***     |                                      |
|                          | \[ \] Life-threatening               |
| *\[CDASH: AESCONG\]*     |                                      |
|                          | \[ \] Hospitalization or prolonged   |
|                          | hospitalization                      |
|                          |                                      |
|                          | \[ \] Persistent/significant         |
|                          | disability or incapacity             |
|                          |                                      |
|                          | \[ \] Congenital anomaly/birth       |
|                          | defect                               |
|                          |                                      |
|                          | \[ \] Important medical event per    |
|                          | investigator judgment                |
+--------------------------+--------------------------------------+
| **Outcome \***           | *\[ Select one: \]*                  |
|                          |                                      |
| *\[CDASH: AEOUT\]*       | Recovered/Resolved                   |
|                          |                                      |
|                          | Recovering/Resolving                 |
|                          |                                      |
|                          | Not recovered/Not resolved           |
|                          |                                      |
|                          | Recovered with sequelae              |
|                          |                                      |
|                          | Fatal                                |
|                          |                                      |
|                          | Unknown                              |
+--------------------------+--------------------------------------+
| **Date of resolution**   | DD / MMM / YYYY                      |
|                          |                                      |
| *\[CDASH: AEENDTC\]*     |                                      |
+--------------------------+--------------------------------------+
| **If fatal --- date of   | DD / MMM / YYYY                      |
| death**                  |                                      |
|                          |                                      |
| *\[CDASH: DTHDTC\]*      |                                      |
+--------------------------+--------------------------------------+
| **If fatal --- primary   | *\[ Free text entry field \]*        |
| cause of death**         |                                      |
+--------------------------+--------------------------------------+
| **Relationship to        | ( ) Not related                      |
| Cervimab \***            |                                      |
|                          | ( ) Unlikely related                 |
| *\[CDASH: AEREL\]*       |                                      |
|                          | ( ) Possibly related                 |
|                          |                                      |
|                          | ( ) Probably related                 |
|                          |                                      |
|                          | ( ) Definitely related               |
|                          |                                      |
|                          | ( ) Not assessable                   |
+--------------------------+--------------------------------------+
| **SAE Narrative          | *\[ Free text entry field \]*        |
| (required) \***          |                                      |
|                          |                                      |
| *\[CDASH: AENARRTS\]*    |                                      |
+--------------------------+--------------------------------------+

**FORM 10: CONCOMITANT MEDICATIONS**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **CONCOMITANT MEDICATIONS**                            **Form:
                                                        CM-002**

  -------------------------------------------------- ---------------

Record ALL medications taken from 14 days before first dose through 30
days after last dose.

  --------------- ---------------- ----------- --------- ------------ ----------- ----------
  **Medication    **Indication**   **Dose /    **Start   **End Date   **Related   **Action
  Name                             Frequency / Date**    (or          to AE?**    re Study
  (Generic)**                      Route**               Ongoing)**               Drug**

  *\[ entry \]*   *\[ entry \]*    *\[ entry   *\[ entry *\[ entry    *\[ entry   *\[ entry
                                   \]*         \]*       \]*          \]*         \]*

  *\[ entry \]*   *\[ entry \]*    *\[ entry   *\[ entry *\[ entry    *\[ entry   *\[ entry
                                   \]*         \]*       \]*          \]*         \]*

  *\[ entry \]*   *\[ entry \]*    *\[ entry   *\[ entry *\[ entry    *\[ entry   *\[ entry
                                   \]*         \]*       \]*          \]*         \]*
  --------------- ---------------- ----------- --------- ------------ ----------- ----------

  -----------------------------------------------------------------
  **NOTE: Prohibited concomitant medications (other immunotherapy,
  systemic immunosuppressants, live vaccines) must be flagged
  immediately as potential protocol deviations.**

  -----------------------------------------------------------------

**FORM 11: PATIENT-REPORTED OUTCOMES (PROs)**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **EORTC QLQ-C30 --- VERSION 3.0 (SAMPLE FIELDS)**      **Form:
                                                        QS-001**

  -------------------------------------------------- ---------------

Patients complete this questionnaire independently before any clinical
discussion at the visit.

  -----------------------------------------------------------------
  **FUNCTIONAL SCALES (1=Not at all 2=A little 3=Quite a bit 4=Very
  much)**

  -----------------------------------------------------------------

+--------------------------+--------------------------------------+
| **Do you have any        | ( ) 1 --- Not at all                 |
| trouble doing strenuous  |                                      |
| activities? \***         | ( ) 2 --- A little                   |
|                          |                                      |
|                          | ( ) 3 --- Quite a bit                |
|                          |                                      |
|                          | ( ) 4 --- Very much                  |
+--------------------------+--------------------------------------+
| **Do you have any        | ( ) 1 --- Not at all                 |
| trouble taking a long    |                                      |
| walk? \***               | ( ) 2 --- A little                   |
|                          |                                      |
|                          | ( ) 3 --- Quite a bit                |
|                          |                                      |
|                          | ( ) 4 --- Very much                  |
+--------------------------+--------------------------------------+
| **Have you had to stay   | ( ) 1 --- Not at all                 |
| in bed or a chair during |                                      |
| the day? \***            | ( ) 2 --- A little                   |
|                          |                                      |
|                          | ( ) 3 --- Quite a bit                |
|                          |                                      |
|                          | ( ) 4 --- Very much                  |
+--------------------------+--------------------------------------+
| **Have you needed help   | ( ) 1 --- Not at all                 |
| with eating, dressing,   |                                      |
| washing yourself? \***   | ( ) 2 --- A little                   |
|                          |                                      |
|                          | ( ) 3 --- Quite a bit                |
|                          |                                      |
|                          | ( ) 4 --- Very much                  |
+--------------------------+--------------------------------------+

  -----------------------------------------------------------------
  **GLOBAL HEALTH STATUS / QoL SCALE (1=Very poor \...
  7=Excellent)**

  -----------------------------------------------------------------

+--------------------------+--------------------------------------+
| **How would you rate     | ( ) 1                                |
| your overall health      |                                      |
| during the past week?    | ( ) 2                                |
| \***                     |                                      |
|                          | ( ) 3                                |
|                          |                                      |
|                          | ( ) 4                                |
|                          |                                      |
|                          | ( ) 5                                |
|                          |                                      |
|                          | ( ) 6                                |
|                          |                                      |
|                          | ( ) 7                                |
+--------------------------+--------------------------------------+
| **How would you rate     | ( ) 1                                |
| your overall quality of  |                                      |
| life during the past     | ( ) 2                                |
| week? \***               |                                      |
|                          | ( ) 3                                |
|                          |                                      |
|                          | ( ) 4                                |
|                          |                                      |
|                          | ( ) 5                                |
|                          |                                      |
|                          | ( ) 6                                |
|                          |                                      |
|                          | ( ) 7                                |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **EQ-5D-5L (SAMPLE FIELDS)**                           **Form:
                                                        QS-002**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Mobility \***          | ( ) 1 --- I have no problems walking |
|                          | about                                |
| *\[CDASH: EQMOB\]*       |                                      |
|                          | ( ) 2 --- I have slight problems     |
|                          |                                      |
|                          | ( ) 3 --- I have moderate problems   |
|                          |                                      |
|                          | ( ) 4 --- I have severe problems     |
|                          |                                      |
|                          | ( ) 5 --- I am unable to walk about  |
+--------------------------+--------------------------------------+
| **Self-care \***         | ( ) 1 --- I have no problems washing |
|                          | or dressing myself                   |
| *\[CDASH: EQSC\]*        |                                      |
|                          | ( ) 2 --- I have slight problems     |
|                          |                                      |
|                          | ( ) 3 --- I have moderate problems   |
|                          |                                      |
|                          | ( ) 4 --- I have severe problems     |
|                          |                                      |
|                          | ( ) 5 --- I am unable to wash or     |
|                          | dress myself                         |
+--------------------------+--------------------------------------+
| **Usual activities \***  | ( ) 1 --- No problems                |
|                          |                                      |
| *\[CDASH: EQUA\]*        | ( ) 2 --- Slight problems            |
|                          |                                      |
|                          | ( ) 3 --- Moderate problems          |
|                          |                                      |
|                          | ( ) 4 --- Severe problems            |
|                          |                                      |
|                          | ( ) 5 --- Unable to do usual         |
|                          | activities                           |
+--------------------------+--------------------------------------+
| **Pain / Discomfort \*** | ( ) 1 --- No pain or discomfort      |
|                          |                                      |
| *\[CDASH: EQPD\]*        | ( ) 2 --- Slight                     |
|                          |                                      |
|                          | ( ) 3 --- Moderate                   |
|                          |                                      |
|                          | ( ) 4 --- Severe                     |
|                          |                                      |
|                          | ( ) 5 --- Extreme pain or discomfort |
+--------------------------+--------------------------------------+
| **Anxiety / Depression   | ( ) 1 --- Not anxious or depressed   |
| \***                     |                                      |
|                          | ( ) 2 --- Slightly                   |
| *\[CDASH: EQAD\]*        |                                      |
|                          | ( ) 3 --- Moderately                 |
|                          |                                      |
|                          | ( ) 4 --- Severely                   |
|                          |                                      |
|                          | ( ) 5 --- Extremely anxious or       |
|                          | depressed                            |
+--------------------------+--------------------------------------+
| **EQ Visual Analogue     | *\[ Numeric entry \] 0 = worst       |
| Scale (0--100) \***      | imaginable health state; 100 = best  |
|                          | imaginable health state*             |
| *\[CDASH: EQVAS\]*       |                                      |
+--------------------------+--------------------------------------+

  -----------------------------------------------------------------
  **NOTE: PRO questionnaires must be completed by the patient
  BEFORE any clinical assessments or discussions at each visit.
  Completeness is critical --- incomplete forms will generate
  queries.**

  -----------------------------------------------------------------

**FORM 12: STUDY COMPLETION & SURVIVAL FOLLOW-UP**

+---------------+---------------+---------------+---------------+
| **Subject     | **Visit:**    | **Visit       | **Initials    |
| ID:**         |               | Date:**       | (Pt):**       |
|               | *\[ Visit     |               |               |
| *\[ Site No.  | Name/Number   | DD/MMM/YYYY   | \[ \]\[ \]\[  |
| -- Pt. Seq.   | \]*           |               | \]            |
| \]*           |               |               |               |
+---------------+---------------+---------------+---------------+

  -------------------------------------------------- ---------------
  **END OF TREATMENT (EOT) SUMMARY**                     **Form:
                                                        DS-001**

  -------------------------------------------------- ---------------

+--------------------------+--------------------------------------+
| **Date of last study     | DD / MMM / YYYY                      |
| treatment \***           |                                      |
|                          |                                      |
| *\[CDASH: DSENDTC\]*     |                                      |
+--------------------------+--------------------------------------+
| **Reason for treatment   | *\[ Select one: \]*                  |
| discontinuation \***     |                                      |
|                          | Disease progression                  |
| *\[CDASH: DSDECOD\]*     |                                      |
|                          | Complete response --- 2-year maximum |
|                          | reached                              |
|                          |                                      |
|                          | Unacceptable toxicity                |
|                          |                                      |
|                          | Patient withdrawal                   |
|                          |                                      |
|                          | Investigator decision                |
|                          |                                      |
|                          | Death                                |
|                          |                                      |
|                          | Other                                |
+--------------------------+--------------------------------------+
| **Tumor status at EOT    | *\[ Select one: \]*                  |
| \***                     |                                      |
|                          | CR                                   |
|                          |                                      |
|                          | PR                                   |
|                          |                                      |
|                          | SD                                   |
|                          |                                      |
|                          | PD                                   |
|                          |                                      |
|                          | Unknown                              |
+--------------------------+--------------------------------------+
| **Patient disposition at | *\[ Select one: \]*                  |
| EOT \***                 |                                      |
|                          | Entering survival follow-up          |
| *\[CDASH: DSTERM\]*      |                                      |
|                          | Withdrawing from study entirely      |
|                          |                                      |
|                          | Lost to follow-up                    |
|                          |                                      |
|                          | Deceased                             |
+--------------------------+--------------------------------------+
| **EOT visit date \***    | DD / MMM / YYYY                      |
+--------------------------+--------------------------------------+
| **90-day safety          | DD / MMM / YYYY                      |
| follow-up date**         |                                      |
+--------------------------+--------------------------------------+

  -------------------------------------------------- ---------------
  **SURVIVAL FOLLOW-UP (every 3 months after EOT)**      **Form:
                                                        SV-001**

  -------------------------------------------------- ---------------

+--------------------------+----------------------------------------+
| **Follow-up contact date | DD / MMM / YYYY                        |
| \***                     |                                        |
|                          |                                        |
| *\[CDASH: SVDTC\]*       |                                        |
+--------------------------+----------------------------------------+
| **Method of contact \*** | ( ) Clinic visit                       |
|                          |                                        |
|                          | ( ) Telephone call                     |
|                          |                                        |
|                          | ( ) Medical records review             |
|                          |                                        |
|                          | ( ) Other                              |
+--------------------------+----------------------------------------+
| **Patient alive? \***    | ( ) Yes                                |
|                          |                                        |
| *\[CDASH: DTHFL\]*       | ( ) No --- Date of death: DD/MMM/YYYY  |
|                          |                                        |
|                          | ( ) Unknown --- lost to follow-up      |
+--------------------------+----------------------------------------+
| **If alive --- current   | ( ) No subsequent therapy              |
| anticancer therapy?**    |                                        |
|                          | ( ) Yes --- specify regimen:           |
| *\[CDASH: NTHERCM\]*     | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                          | Start date: \_\_\_/\_\_\_/\_\_\_\_\_   |
+--------------------------+----------------------------------------+
| **If deceased ---        | *\[ Select one: \]*                    |
| primary cause of death** |                                        |
|                          | Disease progression                    |
| *\[CDASH: DTHCAUS\]*     |                                        |
|                          | Treatment-related toxicity             |
|                          |                                        |
|                          | Other disease                          |
|                          |                                        |
|                          | Unknown                                |
+--------------------------+----------------------------------------+
| **Additional notes**     | *\[ Free text entry field \]*          |
+--------------------------+----------------------------------------+

**APPENDIX A: eCRF FORM INDEX**

  ----------- ------------- --------------------------------- --------------
  **Form \#** **Form ID**   **Form Name**                     **Visit(s)**

  01          IC-001        Informed Consent and Enrollment   Screening

  02          DM-001 /      Demographics & Eligibility        Screening
              EL-001                                          

  03          MH-001/002 /  Medical History & Prior Therapy   Screening
              CM-001                                          

  04          VS-001/002 /  Vital Signs & Physical            All Visits
              PE-001        Examination                       

  05          LB-001--005   Laboratory Assessments            All Visits

  06          RN-001        Randomization                     Day 1

  07          EX-001/002    Study Treatment Administration    All Treatment
                                                              Visits

  08          TU-001        Tumor Assessment (RECIST v1.1)    Q6W/Q12W

  09          AE-001/002    Adverse Events & SAEs             Continuous

  10          CM-002        Concomitant Medications           All Visits

  11          QS-001/002    Patient-Reported Outcomes (PROs)  Q6W

  12          DS-001 /      Study Completion & Survival       EOT + Q3M
              SV-001        Follow-Up                         
  ----------- ------------- --------------------------------- --------------

**Version History**

  ------------- ------------ ----------------------------------------
  **Version**   **Date**     **Summary of Changes**

  1.0           16 Mar 2026  Original eCRF Completion Guidelines,
                             CERVIMAB-301
  ------------- ------------ ----------------------------------------
