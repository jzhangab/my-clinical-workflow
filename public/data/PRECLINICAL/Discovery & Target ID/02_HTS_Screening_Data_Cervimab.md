**MERIDIAN ONCOLOGY SCIENCES, INC.**

Discovery & Preclinical Research Division

**High-Throughput Screening (HTS) Data Summary**

*Anti-PD-1 Monoclonal Antibody Discovery Campaign --- Phage Display*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-HTS-2020-001

  **Version:**           v1.4

  **Date:**              2020-11-30

  **Program:**           Cervimab (MOS-PD1-047) \| Anti-PD-1 mAb \|
                         IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer

  **Classification:**    CONFIDENTIAL --- Internal Research
  ---------------------- ---------------------------------------------

*This document contains confidential and proprietary information of
Meridian Oncology Sciences, Inc. Prepared in accordance with 21 CFR
312.23(a)(8), ICH S9, and applicable FDA guidance documents.*

**1. Campaign Overview**

This report summarizes the High-Throughput Screening (HTS) campaign
conducted to identify lead anti-PD-1 monoclonal antibody candidates from
a fully human IgG4 phage display library. The campaign employed a
competitive panning strategy targeting the PD-1 extracellular domain
(ECD) using recombinant biotinylated human PD-1-ECD presented on
streptavidin-coated magnetic beads and as a soluble-phase antigen for
competitive elution.

The campaign identified clone MOS-PD1-047, subsequently engineered and
optimized into Cervimab (fully human IgG4, S228P Fc stabilization
mutation), as the lead candidate for advancement.

**2. Library Description**

**2.1 Library Construction**

Campaign utilized the Meridian Oncology Phage Display Library 3.0
(MOS-PhageLib-3.0), a naive fully human Fab library constructed from
peripheral blood B cells of 42 healthy donors (21 male / 21 female; age
range 22--58 years) with no history of immune-mediated disease or
malignancy. Donors provided written informed consent under
MOS-IRB-2018-024.

Library diversity was estimated at 4.2 × 10⁹ unique clones by deep
sequencing of a 100,000-clone subsample. The library encompasses all
major human VH gene families (IGHV1-7) and Vκ/Vλ light chains, with
synthetic diversification of CDR-H3 (length 8--20 aa; NNK randomization)
to maximize paratope diversity. IgG4 Fc (CH2-CH3) was fused to all
displayed Fab constructs to enable direct functional characterization
post-selection.

  --------------------- ----------------------- -----------------------
  **Library Parameter** **Specification**       **Method**

  Library size          4.2 × 10⁹ unique clones Deep sequencing
                                                (Illumina MiSeq)

  Display format        Fab-phage (pIII fusion, Western blot, anti-Fd
                        monovalent)             antibody

  CDR-H3 length         8--20 aa (median 14 aa) Sanger sequencing
  distribution                                  (n=1,000)

  VH family             VH1: 28%, VH3: 31%,     Deep sequencing CDR
  representation        VH4: 18%, VH5: 9%,      analysis
                        other: 14%              

  Estimated functional  \>85% (titering + ELISA Rescue phage titer
  clones                confirmation)           assay
  --------------------- ----------------------- -----------------------

*Table 2.1 MOS-PhageLib-3.0 library parameters. Diversity estimate
reflects unique CDR-H3 sequences; total combinatorial diversity (VH ×
VL) estimated at 8.4 × 10¹⁵.*

**3. Panning Strategy**

**3.1 Antigen Preparation**

Recombinant human PD-1-ECD (residues 21--167; C-terminal His6 and
AviTag; expressed in HEK293-F suspension cells; \>95% purity by
SDS-PAGE; endotoxin \<1 EU/mg) was site-specifically biotinylated using
BirA ligase (BirA500 kit, Avidity) in vitro. Biotinylation efficiency:
\>92% by mass spectrometry. Antigen identity confirmed by LC-MS/MS
(sequence coverage 94%) and N-glycan profiling (4 N-linked glycosylation
sites: Asn49, Asn58, Asn74, Asn116 --- all occupied, consistent with
crystal structure PDB: 5B8C).

Cynomolgus monkey PD-1-ECD (aa 21--167; \>88% identity to human; Acro
Biosystems) was used for cross-reactivity counter-selection in Round 3.

**3.2 Panning Rounds**

  ----------- ------------------ ---------------- ---------------- ----------------
  **Round**   **Antigen /        **Stringency**   **Elution**      **Phage
              Format**                                             Output/Input**

  1           hPD-1-ECD-biotin / Low: 5× PBS-T    TEA pH 2.2       \~1:10,000
              SA beads (200 nM)  wash             (non-specific)   

  2           hPD-1-ECD-biotin / Medium: 10×      Competitive: 1   \~1:1,000
              SA beads (100 nM)  PBS-T, 30 min RT µM soluble PD-L1 

  3           hPD-1-ECD soluble  High: 20× PBS-T, Competitive: 5   \~1:200
              (50 nM) + cyno     1h 4°C           µM soluble       
              PD-1                                PD-L1 + 1 µM     
              counter-select                      PD-L2            

  4           hPD-1-ECD-biotin   Very high: 30×   Competitive: 500 \~1:80
              fresh prep (25 nM) PBS-T, 2h 4°C    nM PD-L1 (5× KD) 
  ----------- ------------------ ---------------- ---------------- ----------------

*Table 3.2 Four-round panning strategy. Progressive stringency and
competitive elution (PD-L1 displacement) ensure selection of
high-affinity binders that block the functional PD-1/PD-L1 interaction.
Cynomolgus PD-1 counter-selection in Round 3 enriches cross-reactive
clones.*

**4. Hit Identification and Screening Cascade**

**4.1 Primary Screen --- AlphaLISA Competition Assay**

Following Round 4 panning, individual clones were grown in 96-deep-well
format (Escherichia coli TG1) and periplasmic extracts prepared by
osmotic shock. Crude Fab-containing periplasmic extracts were screened
in the AlphaLISA PD-1/PD-L1 competition assay (PerkinElmer).

Assay principle: biotinylated hPD-1-ECD (5 nM) pre-incubated with test
Fab extract for 30 min at RT, then hPD-L1-His (5 nM) added; detected by
AlphaLISA donor/acceptor beads. Signal reduction (≥50% vs isotype
control) = primary hit. Z-factor: 0.72 ± 0.04 across 96-well plates
(acceptable ≥0.5).

  ------------------- ------------ ------------ ------------------------
  **Screening Stage** **Clones     **Hits /     **Hit Criteria**
                      Tested**     Pass Rate**  

  Primary (AlphaLISA  6,240        1,847        ≥50% signal reduction vs
  crude extract)                   (29.6%)      isotype control

  Secondary           1,847        218 (11.8%)  IC₅₀ \<5 nM in purified
  confirmatory                                  Fab competitive ELISA
  (purified Fab IC₅₀)                           

  Selectivity (PD-L2  218          186 (85.3%)  Maintains ≥95% PD-L1
  cross-block filter)                           block, ≤10% PD-L2 block
                                                (preserves PD-L2
                                                biology)

  Cyno                186          124 (66.7%)  KD cyno/human ratio
  cross-reactivity                              \<5-fold
  (SPR Tier 1)                                  

  Biophysical triage  124          89 (71.8%)   Monomer \>95% by SEC; Tm
  (SEC-HPLC, DSF)                               \>65°C by DSF

  IgG4 conversion +   89           42 (47.2%)   KD \<1 nM as full IgG4
  SPR Tier 2                                    by SPR

  MLR functional      42           18 (42.9%)   ≥2-fold IFN-γ increase
  assay (T-cell                                 vs isotype at 10 µg/mL
  reactivation)                                 

  Lead nomination     18           8 (44.4%)    KD \<0.5 nM + IFN-γ
  (affinity                                     fold-change ≥3 + monomer
  maturation                                    \>98%
  candidates)                                   
  ------------------- ------------ ------------ ------------------------

*Table 4.1 HTS screening cascade: 6,240 clones screened → 8 lead
candidates selected for affinity maturation (0.13% overall hit rate to
lead nomination). Clone MOS-PD1-047 (Cervimab parental) identified as
top candidate in final tier.*

**5. Lead Candidate Summary: MOS-PD1-047**

Clone MOS-PD1-047 was selected as the primary lead based on the
combination of highest binding affinity for human PD-1 (KD 0.42 nM
post-maturation), complete cross-reactivity with cynomolgus PD-1,
superior T-cell reactivation potency in MLR, and excellent biophysical
properties. Full characterization is described in the Lead Compound
Library report (MOS-LCL-2021-001).

  ------------------------ -------------------------------------------
  **Property**             **MOS-PD1-047 (Cervimab parental)**

  VH gene                  IGHV3-33\*01 (germline)

  VL gene                  IGKV1-39\*01 (germline)

  CDR-H3 length            14 aa (ARGGYDILTYFDY)

  IgG4 KD (human PD-1)     0.42 nM

  IgG4 KD (cyno PD-1)      0.61 nM

  PD-L1 displacement IC₅₀  0.68 nM

  Tm (DSF)                 74.2°C (Fab); 72.8°C (IgG4)

  SEC-HPLC monomer purity  99.1% (IgG4)

  MLR IFN-γ fold-change    3.8× vs isotype (pre-maturation: 3.2×)
  (10 µg/mL)               

  Selection for            YES --- Primary lead for IND program
  advancement              
  ------------------------ -------------------------------------------

*Table 5.1 Lead candidate summary. CDR-H3 sequence shown (IMGT
numbering). S228P Fc stabilization mutation (prevents IgG4 Fab-arm
exchange) was introduced post-selection per standard IgG4 engineering
practice.*

**6. Data Quality and Assay Validation**

All screening assays were qualified per ICH M10 Bioanalytical Method
Validation principles (fit-for-purpose). AlphaLISA primary screen
Z-factor: 0.72 ± 0.04 (acceptable threshold ≥0.50). Signal-to-background
ratio: 12.4 ± 1.8. Inter-plate CV for positive control (pembrolizumab
reference Fab 10 µg/mL): 8.2%. All data archived in Dotmatics ELN
(Version 11.2) with audit trail per 21 CFR Part 11.

*Prepared by: HTS/Discovery Group, Meridian Oncology Sciences \| Report
Date: 2020-11-30 \| Archived: MOS-ELN-HTS-2020-0841 through -0896*
