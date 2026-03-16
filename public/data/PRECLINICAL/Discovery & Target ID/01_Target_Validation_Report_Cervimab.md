**MERIDIAN ONCOLOGY SCIENCES, INC.**

Discovery & Preclinical Research Division

**Target Validation Report**

*PD-1 (CD279) as Therapeutic Target in dMMR/MSI-H Metastatic Colorectal
Cancer*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-TVR-2021-001

  **Version:**           v2.1

  **Date:**              2021-09-15

  **Program:**           Cervimab (MOS-PD1-047) \| Anti-PD-1 mAb \|
                         IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer

  **Classification:**    CONFIDENTIAL --- Pre-IND Research
  ---------------------- ---------------------------------------------

*This document contains confidential and proprietary information of
Meridian Oncology Sciences, Inc. Prepared in accordance with 21 CFR
312.23(a)(8), ICH S9, and applicable FDA guidance documents.*

**1. Executive Summary**

This report documents the scientific validation of Programmed Cell Death
Protein 1 (PD-1, CD279) as the primary therapeutic target for Cervimab
(MOS-PD1-047) in patients with mismatch repair-deficient (dMMR) and
microsatellite instability-high (MSI-H) metastatic colorectal cancer
(mCRC). Validation encompasses target expression analysis, functional
characterization, genetic validation in patient-derived specimens, and
assessment of biological plausibility.

Key findings establish PD-1 as a compelling and well-validated target:
dMMR/MSI-H CRC tumors demonstrate markedly elevated PD-1 expression on
tumor-infiltrating lymphocytes (TILs), with functional suppression of
anti-tumor immunity reversible through PD-1 blockade in ex vivo and in
vivo models.

**2. Background and Scientific Rationale**

**2.1 Tumor Immunology of dMMR/MSI-H Colorectal Cancer**

Colorectal cancer arising from mismatch repair deficiency generates an
exceptionally high somatic mutation burden (median TMB: 47 mut/Mb; range
18--210 in this analysis) compared to proficient MMR tumors (median 5
mut/Mb). The resulting frameshift insertions and deletions produce
neoantigens recognized by the adaptive immune system, driving robust
CD8+ T-cell infiltration into the tumor microenvironment (TME).

However, this anti-tumor immune response is counteracted by upregulation
of immune checkpoint pathways---principally the PD-1/PD-L1 axis---which
suppress T-cell effector function and promote immune exhaustion. This
creates a state of \'immunological dormancy\' that can be reversed by
PD-1 checkpoint blockade.

**2.2 PD-1 Biology and Mechanism**

PD-1 (gene: PDCD1; protein UniProt Q15116) is a 288-amino acid type I
transmembrane receptor expressed on activated T cells, B cells, and NK
cells. Its extracellular immunoglobulin variable (IgV) domain (residues
21--167) mediates interactions with two ligands: PD-L1 (CD274) and PD-L2
(CD273). Ligand binding recruits SHP-1 and SHP-2 phosphatases to the
intracellular immunoreceptor tyrosine-based inhibitory motif (ITIM) and
switch motif (ITSM), dephosphorylating key signaling nodes in the TCR
activation cascade (ZAP70, PI3K-Akt).

In the context of dMMR tumors, chronic antigen stimulation drives T-cell
exhaustion characterized by sustained PD-1 upregulation, reduced
effector cytokine production, and proliferative impairment. PD-1
blockade reverses this exhausted phenotype, restoring cytotoxic
capacity.

**3. Target Expression Analysis**

**3.1 Patient Specimen Cohort**

PD-1 expression was assessed in a cohort of 48 colorectal cancer patient
specimens obtained under IRB Protocol MOS-IRB-2020-012 with informed
consent. Specimens were classified by MMR status using standard IHC
(MLH1/MSH2/MSH6/PMS2) and PCR-based MSI analysis.

  -------------------- -------------- ----------- ------------- -----------------
  **Characteristic**   **dMMR         **pMMR      **p-value**   **Method**
                       (n=24)**       (n=24)**                  

  Median age (yr)      62 (41--78)    64 (38--82) 0.61          Mann-Whitney U

  \% Male              54%            58%         0.77          Chi-square

  Median TMB (mut/Mb)  47 (18--210)   5 (1--12)   \<0.0001      Mann-Whitney U

  Tumor stage (III/IV) 29% / 71%      25% / 75%   0.74          Chi-square

  Median CD8+ TIL      486            92          \<0.0001      Halo image
  density (cells/mm²)  (210--1,840)   (18--380)                 analysis
  -------------------- -------------- ----------- ------------- -----------------

*Table 3.1 Patient cohort characteristics by MMR status. p-values for
continuous variables by Mann-Whitney U; categorical by chi-square.*

**3.2 PD-1 Protein Expression: Immunohistochemistry**

Multi-plex IHC was performed on FFPE sections using the Opal 7-color
panel (Akoya Biosciences). Primary antibodies: anti-PD-1 (clone NAT105,
1:100; Abcam ab52587), anti-CD8 (clone C8/144B, 1:200), anti-CD4 (clone
4B12, 1:150), anti-FOXP3 (clone 236A/E7, 1:100), anti-pan-cytokeratin
(clone AE1/AE3, 1:200). Antigen retrieval: HIER pH 9.0 (EDTA buffer), 20
min at 97°C. Automated staining on BOND-RX (Leica).

  ------------------- ------------ ------------ ------------- -------------
  **Cell Population** **dMMR %     **pMMR %     **OR (95%     **p-value**
                      PD-1+**      PD-1+**      CI)**         

  CD8+ TILs           82% (±6.2)   31% (±8.4)   10.9          \<0.0001
                                                (4.2--28.4)   

  CD4+ TILs           64% (±9.1)   22% (±7.6)   6.4           0.0003
                                                (2.4--17.2)   

  CD4+FOXP3+ Tregs    71% (±8.3)   28% (±9.2)   6.2           0.0004
                                                (2.3--16.8)   

  PD-L1 on tumor      71%          18%          11.2          \<0.0001
  cells (CPS ≥10)                               (3.4--37.1)   

  PD-L1 on            88%          42%          11.8          0.0001
  macrophages                                   (3.0--46.6)   
  ------------------- ------------ ------------ ------------- -------------

*Table 3.2 PD-1 and PD-L1 expression by cell subset and MMR status. Data
expressed as mean ± SD % positive cells. OR = Odds Ratio by logistic
regression; CPS = Combined Positive Score.*

**3.3 PD-1 Transcript Analysis: RNA-seq**

Bulk RNA sequencing (Illumina NovaSeq 6000; 100bp paired-end; median 60M
reads/sample) was performed on 32 fresh-frozen CRC specimens (dMMR n=16,
pMMR n=16) obtained concurrently with IHC cohort. Alignment to GRCh38
using STAR v2.7.10; quantification with RSEM v1.3.3; differential
expression analysis with DESeq2 v1.38.

  ----------------- ------------ ------------ ------------ --------------
  **Gene**          **dMMR mean  **pMMR mean  **log2FC**   **Adj. p-value
                    TPM**        TPM**                     (BH)**

  PDCD1 (PD-1)      48.2 ± 12.4  8.6 ± 3.1    +2.49        3.2 × 10⁻⁸

  CD274 (PD-L1)     82.4 ± 22.1  14.2 ± 6.8   +2.54        1.8 × 10⁻⁷

  CD8A              124.6 ± 38.4 22.4 ± 8.2   +2.47        4.1 × 10⁻⁸

  FOXP3             18.4 ± 6.2   4.8 ± 2.1    +1.94        2.4 × 10⁻⁵

  HAVCR2 (TIM-3)    22.8 ± 7.4   5.2 ± 2.4    +2.13        8.6 × 10⁻⁶

  LAG3              16.2 ± 5.8   3.4 ± 1.6    +2.25        1.2 × 10⁻⁵

  IFNG (IFN-γ)      38.4 ± 14.2  6.8 ± 2.8    +2.50        2.8 × 10⁻⁸
  ----------------- ------------ ------------ ------------ --------------

*Table 3.3 Key immune checkpoint gene expression. TPM = transcripts per
million; log2FC = log2 fold-change (dMMR vs pMMR); adjusted p-value by
Benjamini-Hochberg method. Co-expression of TIM-3 and LAG-3 with PD-1
indicates polyfunctional T-cell exhaustion signature in dMMR tumors.*

**4. Functional Validation: In Vitro Studies**

**4.1 Mixed Lymphocyte Reaction (MLR) Assay**

PD-1 functional relevance was assessed by measuring T-cell reactivation
following PD-1 blockade in a standard MLR system. Human PBMCs (HLA-typed
donors; n=6 independent experiments, each in triplicate) were
co-cultured with allogeneic mature DCs for 96h. Plate-bound anti-PD-1 or
isotype control were added at initiation.

Readouts: IFN-γ (ELISA; Meso Scale Discovery), IL-2 (ELISA), T-cell
proliferation (CellTrace Violet dilution by flow cytometry), granzyme B
(Luminex). Flow cytometry panel: CD3, CD4, CD8, PD-1, Ki67, Granzyme B
(BD LSRFortessa).

  ----------------- ------------ ------------ ------------ --------------
  **Condition**     **IFN-γ      **IL-2       **CD8+       **GzmB
                    (pg/mL)**    (pg/mL)**    Ki67+**      (pg/mL)**

  Isotype control   184 ± 28     62 ± 14      8.4% ± 1.2   124 ± 22
  (10 µg/mL)                                               

  Cervimab 0.1      286 ± 42     88 ± 19      12.8% ± 1.8  198 ± 34
  µg/mL                                                    

  Cervimab 1 µg/mL  482 ± 68     142 ± 28     18.4% ± 2.2  312 ± 48

  Cervimab 10 µg/mL 698 ± 82     198 ± 38     24.2% ± 3.1  424 ± 62

  Pembrolizumab 10  644 ± 76     184 ± 34     22.6% ± 2.8  398 ± 58
  µg/mL (ref)                                              
  ----------------- ------------ ------------ ------------ --------------

*Table 4.1 MLR assay results: cervimab dose-dependently increases T-cell
activation markers. Values represent mean ± SD (n=6 donors, triplicate
wells). Cervimab 10 µg/mL shows comparable activity to pembrolizumab
reference. GzmB = Granzyme B.*

**4.2 PD-1/PD-L1 Competitive Binding (SPR)**

Surface plasmon resonance (Biacore T200; Cytiva) was used to quantify
PD-1 binding kinetics and competitive displacement of PD-L1. Recombinant
human PD-1-ECD (aa 21--167; His-tagged; Acro Biosystems PD1-H52H3) was
captured on Series S NiNTA chips at 50 RU. Analyte: cervimab (serially
diluted 0.02--500 nM in HBS-EP+ running buffer). All experiments at
25°C, 3 replicate concentration series.

  ----------------- ------------ ----------- ----------- ----------------
  **Analyte**       **kon        **koff      **KD (nM)** **PD-L1
                    (M⁻¹s⁻¹)**   (s⁻¹)**                 displacement
                                                         IC₅₀ (nM)**

  Cervimab / human  4.8 × 10⁵    2.0 × 10⁻⁴  0.42        0.68
  PD-1                                                   

  Cervimab / cyno   3.9 × 10⁵    2.4 × 10⁻⁴  0.61        0.94
  PD-1                                                   

  Cervimab / mouse  N.D.         N.D.        \>10,000    \>10,000
  PD-1                                                   

  Pembrolizumab /   2.1 × 10⁵    2.3 × 10⁻⁴  1.06        1.48
  human PD-1 (ref)                                       

  Nivolumab / human 1.8 × 10⁵    2.1 × 10⁻⁴  1.12        1.68
  PD-1 (ref)                                             
  ----------------- ------------ ----------- ----------- ----------------

*Table 4.2 SPR kinetics. Cervimab demonstrates 2.5-fold higher affinity
for human PD-1 than pembrolizumab and 2.7-fold over nivolumab. No
cross-reactivity with mouse PD-1 confirmed (consistent with IgG4 Fc
engineering; justifies cynomolgus monkey as the relevant toxicology
species per ICH S9). N.D. = not determinable.*

**5. Genetic Validation**

**5.1 CRISPR-Cas9 Knockout Studies**

PDCD1 knockout (KO) was generated in Jurkat cells (clone E6-1) and
primary CD8+ T cells using ribonucleoprotein (RNP) delivery (sgRNA:
5\'-GGTCACGGCGCTGTCCCTGT-3\'; Cas9 nuclease; 4D-Nucleofector, Lonza). KO
efficiency confirmed by flow cytometry (\>95% loss of surface PD-1 by
Day 7) and Sanger sequencing (TIDE analysis: 94% indel frequency).

PD-L1-expressing tumor cell line (MC38-hPD-L1; stably transduced with
human PD-L1) was used as stimulator. Co-culture: KO or WT CD8+ T cells
with irradiated MC38-hPD-L1 cells at 10:1 E:T ratio, 72h.

  -------------------- ------------ ------------ -----------------------
  **Condition**        **IFN-γ      **% Tumor    **Interpretation**
                       (pg/mL)**    lysis**      

  WT CD8+ +            128 ± 22     18% ± 3.2    Baseline:
  MC38-hPD-L1                                    PD-L1-mediated
                                                 suppression active

  WT CD8+ +            486 ± 64     52% ± 6.8    Cervimab rescues T-cell
  MC38-hPD-L1 +                                  function (+3.8-fold
  Cervimab 10 µg/mL                              IFN-γ)

  PD-1 KO CD8+ +       512 ± 78     54% ± 7.2    KO phenocopies cervimab
  MC38-hPD-L1                                    blockade (genetic
                                                 validation)

  PD-1 KO CD8+ +       524 ± 82     55% ± 7.6    No additive effect:
  MC38-hPD-L1 +                                  cervimab acts solely
  Cervimab                                       via PD-1 (on-target)
  -------------------- ------------ ------------ -----------------------

*Table 5.1 CRISPR-Cas9 validation. The near-identical activity of
cervimab-blocked WT cells and PD-1 KO cells, with no additive effect in
combination, provides genetic proof that cervimab\'s mechanism is
exclusively PD-1-mediated.*

**6. In Vivo Validation: Syngeneic Tumor Models**

**6.1 MC38-hPD-L1 Humanized Mouse Model**

Preclinical efficacy was assessed in hPD-1 knock-in mice (C57BL/6
background; Biocytogen) bearing subcutaneous MC38-hPD-L1 tumors. Groups:
(1) Vehicle IgG4 isotype control 10 mg/kg IV Q3W, (2) Cervimab 1 mg/kg
IV Q3W, (3) Cervimab 3 mg/kg IV Q3W, (4) Cervimab 10 mg/kg IV Q3W, (5)
Pembrolizumab 3 mg/kg IV Q3W (reference). n=10/group.

  -------------------- ----------- ----------- ----------- -------------
  **Treatment Group**  **Median    **CR Rate** **Median OS **p vs
                       TGI (%)**               (days)**    control**

  IgG4 isotype control ---         0/10 (0%)   22.4        ---
  10 mg/kg                                                 

  Cervimab 1 mg/kg Q3W 42%         1/10 (10%)  31.8        0.042

  Cervimab 3 mg/kg Q3W 68%         3/10 (30%)  42.6        0.0008

  Cervimab 10 mg/kg    81%         4/10 (40%)  Not reached \<0.0001
  Q3W                                                      

  Pembrolizumab 3      64%         3/10 (30%)  40.2        0.0012
  mg/kg Q3W (ref)                                          
  -------------------- ----------- ----------- ----------- -------------

*Table 6.1 Syngeneic model efficacy. TGI = tumor growth inhibition vs
control at Day 21. OS by Kaplan-Meier with log-rank test. Cervimab 10
mg/kg shows superior efficacy with durable complete responses.
Consistent with class pharmacology; performance comparable or superior
to pembrolizumab reference.*

**7. Target Druggability Assessment**

**7.1 Epitope and Structural Analysis**

The cervimab binding epitope was mapped by hydrogen-deuterium exchange
mass spectrometry (HDX-MS) and alanine scanning mutagenesis of PD-1-ECD.
Key contacts were identified on the CC\' and FG loops of PD-1,
overlapping the PD-L1 binding interface: residues Gln133, Glu136, Asn58
(glycosylated), and Arg139. This epitope overlaps substantially with the
pembrolizumab binding interface (PDB: 5B8C) but includes a unique
contribution from the Asn58 glycan, providing a differentiated binding
mode.

The total buried surface area of cervimab on PD-1-ECD is \~1,180 Å²
(HDX-MS estimate), compared to \~1,137 Å² for pembrolizumab
(crystallographic; Lin et al., Sci Rep 2016). The larger buried surface
area is consistent with cervimab\'s \~2.5-fold higher affinity for PD-1.

**7.2 Species Cross-Reactivity**

Cervimab binds human PD-1 (KD 0.42 nM) and cynomolgus monkey PD-1 (KD
0.61 nM) with comparable affinity, supporting the cynomolgus monkey as
the pharmacologically relevant toxicology species per ICH S9. No binding
to mouse or rat PD-1 was detected (\>10 µM), consistent with sequence
divergence in the FG loop region (mouse PD-1 Arg139→Gln substitution).

**8. Target Validation Conclusions**

The data presented in this report provide robust multi-modal validation
of PD-1 as a therapeutic target for Cervimab in dMMR/MSI-H mCRC:

- Expression: PD-1 is dramatically upregulated on CD8+ TILs in dMMR
  tumors (82% PD-1+ vs 31% in pMMR; OR 10.9, p\<0.0001), driven by high
  neoantigen burden and chronic TCR stimulation.

- Function: PD-1 blockade by cervimab dose-dependently restores T-cell
  IFN-γ production, proliferation, and cytolytic activity in ex vivo MLR
  and co-culture systems.

- Genetic validation: PDCD1 KO phenocopies cervimab activity with no
  additive effect, confirming on-target mechanism.

- In vivo: Dose-dependent tumor growth inhibition (up to 81% TGI) and
  complete responses (40%) in hPD-1 knock-in syngeneic model.

- Druggability: Defined structural epitope on PD-L1-binding interface;
  superior affinity vs approved agents; complete cross-reactivity with
  cynomolgus PD-1 supporting nonclinical program design.

On the basis of these findings, PD-1 is designated a VALIDATED and
PRIORITIZED target for Cervimab development. This report supports
advancement to IND-enabling studies (GLP toxicology) in the cynomolgus
monkey as the pharmacologically relevant species.

**9. Regulatory Compliance Statement**

Studies described herein were conducted in accordance with:

- 21 CFR 312.23(a)(8) --- Pharmacology and toxicology information
  requirements for IND submission

- ICH S9 --- Nonclinical Evaluation for Anticancer Pharmaceuticals

- ICH S6(R1) --- Preclinical Safety Evaluation of Biotechnology-Derived
  Pharmaceuticals

- FDA Guidance: Target Animal Safety for Veterinary Biological Products
  (not applicable; referenced for comparative purposes)

- ARRIVE 2.0 guidelines for in vivo study reporting

- IACUC Protocol MOS-IACUC-2021-008 (approved 2021-06-01)

*Prepared by: Discovery Research Team, Meridian Oncology Sciences \|
Reviewed by: Chief Scientific Officer \| Approved by: Head of Regulatory
Affairs \| Distribution: IND Working Group, Research Leadership*
