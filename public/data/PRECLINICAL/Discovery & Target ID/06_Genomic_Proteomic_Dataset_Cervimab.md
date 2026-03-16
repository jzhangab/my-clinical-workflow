**MERIDIAN ONCOLOGY SCIENCES, INC.**

Discovery & Preclinical Research Division

**Genomic and Proteomic Dataset Report**

*Molecular Characterization of PD-1 Pathway in dMMR/MSI-H Colorectal
Cancer*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-GPR-2021-004

  **Version:**           v1.8

  **Date:**              2021-10-05

  **Program:**           Cervimab (MOS-PD1-047) \| Anti-PD-1 mAb \|
                         IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer

  **Classification:**    CONFIDENTIAL --- IND Supporting /
                         Translational
  ---------------------- ---------------------------------------------

*This document contains confidential and proprietary information of
Meridian Oncology Sciences, Inc. Prepared in accordance with 21 CFR
312.23(a)(8), ICH S9, and applicable FDA guidance documents.*

**1. Dataset Overview**

This report catalogues genomic and proteomic datasets generated to
characterize the PD-1/PD-L1 immune checkpoint axis in dMMR/MSI-H
colorectal cancer and to identify predictive biomarkers for Cervimab
response. Datasets encompass bulk RNA-sequencing, whole-exome sequencing
(WES), multiplex immunohistochemistry (mIHC), mass spectrometry-based
proteomics, and T-cell receptor (TCR) repertoire analysis. All human
specimens were collected under IRB Protocol MOS-IRB-2020-012.

These datasets directly support IND Section 8 (pharmacology/toxicology
supporting data) and the clinical biomarker strategy for Phase 1/2
studies. Data are also submitted to NCBI GEO (accession pending) and
dbGaP (controlled-access WES data) per NIH data sharing requirements.

**2. RNA-Sequencing Dataset (MOS-RNAseq-CRC-001)**

**2.1 Dataset Characteristics**

  ---------------------- ---------------------------------------------
  **Parameter**          **Details**

  Cohort                 32 CRC specimens (dMMR n=16, pMMR n=16);
                         fresh-frozen; FFPE validation subset n=24

  Sample type            Tumor (bulk) + patient-matched normal colon
                         mucosa (n=20 pairs)

  Sequencing platform    Illumina NovaSeq 6000; 100bp paired-end;
                         PolyA+ library (Illumina TruSeq)

  Median read depth      62.4 million reads (range 48--84 million)

  Alignment              STAR v2.7.10a to GRCh38/Ensembl v106; ENCODE
                         STAR parameters

  Quantification         RSEM v1.3.3; TPM and expected_count outputs

  Differential           DESeq2 v1.38; design: \~MMR_status + batch;
  expression             LRT and Wald tests

  Quality metrics        \>92% reads aligned; Q30 ≥88%; RIN ≥7.0 (all
  (FastQC/MultiQC)       included samples)

  Data archival          FastQ + BAM files: MOS-NAS-RNAseq-001
                         (internal); NCBI GEO submission pending (GSE
                         accession TBD)
  ---------------------- ---------------------------------------------

*Table 2.1 RNA-seq dataset summary. RIN = RNA Integrity Number (Agilent
Bioanalyzer 2100). PolyA+ selection to minimize ribosomal RNA without
rRNA depletion reagent interference.*

**2.2 Key Differentially Expressed Genes: Immune Checkpoint Pathway**

DESeq2 analysis identified 3,842 significantly differentially expressed
genes (FDR \<0.05, \|log2FC\| \>1) between dMMR and pMMR tumors. Key
immune checkpoint and T-cell exhaustion genes:

  ------------ ------------ ---------- ---------- ------------ ------------
  **Gene       **Gene       **dMMR     **pMMR     **log2FC**   **Padj
  Symbol**     Name**       TPM**      TPM**                   (BH)**

  **PDCD1**    PD-1         48.2 ±     8.6 ± 3.1  +2.49        3.2 × 10⁻⁸
                            12.4                               

  CD274        PD-L1        82.4 ±     14.2 ± 6.8 +2.54        1.8 × 10⁻⁷
                            22.1                               

  PDCD1LG2     PD-L2        12.4 ± 4.2 2.8 ± 1.2  +2.15        4.2 × 10⁻⁶

  HAVCR2       TIM-3        22.8 ± 7.4 5.2 ± 2.4  +2.13        8.6 × 10⁻⁶

  LAG3         LAG-3        16.2 ± 5.8 3.4 ± 1.6  +2.25        1.2 × 10⁻⁵

  TIGIT        TIGIT        18.4 ± 6.2 4.2 ± 1.8  +2.13        2.4 × 10⁻⁵

  CD8A         CD8 alpha    124.6 ±    22.4 ± 8.2 +2.47        4.1 × 10⁻⁸
                            38.4                               

  GZMB         Granzyme B   84.2 ±     14.8 ± 5.6 +2.51        2.8 × 10⁻⁸
                            24.8                               

  FOXP3        FoxP3 (Treg) 18.4 ± 6.2 4.8 ± 2.1  +1.94        2.4 × 10⁻⁵

  IFNG         IFN-γ        38.4 ±     6.8 ± 2.8  +2.50        2.8 × 10⁻⁸
                            14.2                               

  TNF          TNF-α        28.4 ± 8.6 8.2 ± 3.4  +1.79        4.8 × 10⁻⁵

  PRF1         Perforin-1   42.6 ±     8.4 ± 3.2  +2.34        3.6 × 10⁻⁷
                            14.8                               
  ------------ ------------ ---------- ---------- ------------ ------------

*Table 2.2 Key immune genes differentially expressed in dMMR vs pMMR
CRC. All genes FDR \<0.05. Co-expression of PDCD1, HAVCR2, LAG3, TIGIT
indicates a polyfunctional exhausted TIL signature driven by chronic
antigen stimulation --- the signature that defines susceptibility to
PD-1 checkpoint blockade.*

**3. Whole-Exome Sequencing Dataset (MOS-WES-CRC-001)**

**3.1 Dataset Characteristics**

  ---------------------- ---------------------------------------------
  **Parameter**          **Details**

  Cohort                 48 CRC tumor-normal pairs (dMMR n=24, pMMR
                         n=24)

  Library prep           Agilent SureSelect Human All Exon v7 capture
                         kit; KAPA HyperPrep

  Sequencing depth       \~150× tumor / \~80× normal (mean per-base
  (tumor/normal)         coverage)

  Alignment              BWA-MEM2 v2.2.1 to GRCh38; Picard
                         MarkDuplicates; BQSR (GATK 4.3)

  Somatic variant        GATK4 Mutect2 (SNVs/indels); GATK4 CNV (copy
  calling                number)

  TMB calculation        Non-synonymous SNVs + indels per Mb of exome
                         assessed; coding region \~38 Mb (filter: VAF
                         ≥5%, depth ≥20×)

  MSI calling            MANTIS v1.0.4 (Kautto et al. Oncotarget
                         2017); MANTIS score ≥0.4 = MSI-H

  Data access            dbGaP controlled-access (application
                         required); accession phs00XXXX.v1.p1
                         (submission in progress)
  ---------------------- ---------------------------------------------

*Table 3.1 WES dataset parameters. Tumor purity estimated by FACETS
(ABSOLUTE algorithm); included samples: purity ≥40%. Variants annotated
with VEP (Ensembl v109), COSMIC v98, ClinVar.*

**3.2 Tumor Mutational Burden Distribution**

  --------------------- ------------ ------------ ---------------- ---------------------
  **TMB Category**      **dMMR       **pMMR       **Threshold**    **Clinical
                        (n=24)**     (n=24)**                      Implication**

  Median TMB (mut/Mb)   47 (IQR:     5 (IQR:      ---              9.4× higher in dMMR
                        28--84)      3--8)                         

  TMB ≥10 mut/Mb        23/24 (96%)  4/24 (17%)   FDA TMB-H        Supports pan-tumor
                                                  threshold        TMB indication

  TMB ≥50 mut/Mb        14/24 (58%)  0/24 (0%)    \'Ultra-high\'   Enriched in
                                                  TMB              POLE/POLD1-mutant
                                                                   dMMR

  POLE/POLD1            4/24 (17%)   0/24 (0%)    Hypermutator     TMB \>200 in this
  exonuclease domain                                               subset
  mutations                                                        

  MLH1 promoter         12/24 (50%)  0/24 (0%)    ---              Sporadic MSI-H; BRAF
  methylation                                                      V600E co-occur
  (epigenetic dMMR)                                                

  Lynch                 8/24 (33%)   0/24 (0%)    ---              Younger patients;
  syndrome-associated                                              MLH1/MSH2/MSH6/PMS2
  (germline MMR)                                                   germline
  --------------------- ------------ ------------ ---------------- ---------------------

*Table 3.2 TMB distribution. dMMR tumors universally exceed the FDA
TMB-H threshold (10 mut/Mb), supporting dMMR as the primary patient
selection criterion for Cervimab with TMB as an exploratory biomarker.
Correlation of POLE/POLD1 mutations with extreme TMB is consistent with
published literature (CSCO 2024/2025 guidelines).*

**4. Multiplex IHC Proteomics Dataset (MOS-mIHC-CRC-001)**

  ---------------------- ---------------------------------------------
  **Parameter**          **Details**

  Platform               Opal 7-color multiplexed IHC (Akoya
                         Biosciences PhenoImager HT)

  Panel 1 (Immune        CD8 (Abcam ab17147) / CD4 (Abcam ab133616) /
  infiltrate)            FOXP3 (Abcam ab20034) / PD-1 (Abcam ab52587)
                         / PD-L1 (Cell Signaling 13684S) / pan-CK
                         (AE1/AE3) / DAPI

  Panel 2 (Exhaustion)   CD8 / TIM-3 (CST 83882S) / LAG-3 (CST 15372S)
                         / TIGIT (Abcam ab243903) / TCF7 (CST 2203S) /
                         pan-CK / DAPI

  Image analysis         HALO v3.5 (Indica Labs); cell segmentation by
                         DAPI nuclear staining; phenotyping by
                         cytoplasmic/membranous marker thresholding;
                         \>1,000 cells analyzed per core

  Tissue format          Tissue microarray (TMA): 3 cores/tumor (0.6
                         mm punch); n=48 patients

  Spatial analysis       HALO proximity analysis: distance from
                         PD-1+CD8+ TILs to nearest PD-L1+ tumor cell;
                         proximity index (cells within 20 µm)
  ---------------------- ---------------------------------------------

*Table 4.1 mIHC dataset parameters. All primary antibodies validated by
single-stain controls on cell line pellets (positive and negative) prior
to multiplex deployment. Spectral unmixing calibrated using single-stain
FFPE controls.*

**4.2 Key Proteomic Findings --- Spatial Immune Profiling**

  -------------------- ----------- ----------- ------------- ------------------
  **Parameter**        **dMMR      **pMMR      **p-value**   **Oncological
                       (n=24)**    (n=24)**                  relevance**

  CD8+ TIL density     486 ± 182   92 ± 44     \<0.0001      High TIL predicts
  (cells/mm²)                                                PD-1 blockade
                                                             response

  PD-1+CD8+ TIL        398 ± 148   28 ± 16     \<0.0001      PD-1+ CD8+ TILs =
  density                                                    direct target
                                                             population for
                                                             Cervimab

  TIM-3+PD-1+CD8+      248 ± 96    8 ± 4       \<0.0001      Co-expression
  (dysfunctional TIL)                                        indicates T-cell
                                                             exhaustion state
                                                             reversible by PD-1
                                                             block

  TCF7+PD-1+CD8+       84 ± 38     6 ± 4       \<0.0001      TCF7+ progenitor
  (progenitor                                                pool predicts
  exhausted)                                                 durable response
                                                             to checkpoint
                                                             blockade

  PD-L1+ tumor cell    71% of      18% of      \<0.0001      PD-L1 expression
  density (CPS ≥10)    patients    patients                  confirms ligand
                                                             availability for
                                                             PD-1 signaling

  Proximity index      28.4 ± 8.2  4.2 ± 2.8   \<0.0001      Spatial
  (PD-1+CD8+ within                                          co-localization:
  20µm of PD-L1+ tumor                                       PD-1/PD-L1
  cell)                                                      ligation actively
                                                             occurring in dMMR
                                                             TME
  -------------------- ----------- ----------- ------------- ------------------

*Table 4.2 Spatial immune profiling. The high density of TCF7+PD-1+CD8+
progenitor exhausted TILs (84 cells/mm² in dMMR) is particularly
significant: this population is the key responder to PD-1 checkpoint
blockade, expanding into terminally differentiated effectors upon PD-1
release (Siddiqui et al. Immunity 2019).*

**5. Mass Spectrometry Proteomics (MOS-MS-CRC-001)**

  ---------------------- ---------------------------------------------
  **Parameter**          **Details**

  Sample prep            FFPE microdissected tumor + matched normal;
                         deparaffinization + antigen retrieval; SP3
                         protocol for protein extraction

  Digestion              Trypsin/LysC sequential digest (37°C, 16h);
                         TMT-16plex labeling (Thermo Scientific)

  MS platform            Orbitrap Eclipse Tribrid (Thermo Scientific);
                         high-field asymmetric waveform IMS (FAIMS
                         Pro); SPS-MS3 for TMT quantification

  Fractionation          High-pH reversed-phase HPLC (12 fractions);
                         C18 desalt

  Search engine          Sequest HT (Proteome Discoverer 2.5);
                         SwissProt human (20,412 proteins); FDR 1%
                         protein/peptide (Percolator)

  Proteins quantified    7,284 proteins (≥2 unique peptides; TMT ratio
                         CV \<20%)
  ---------------------- ---------------------------------------------

*Table 5.1 Proteomics dataset parameters. TMT quantification enables
direct comparison across 16 samples per batch. FAIMS reduces
co-isolation interference; SPS-MS3 provides accurate quantification for
TMT reporter ions.*

**5.2 Key Proteins Differentially Expressed (dMMR vs pMMR)**

  ------------- ------------------- ------------- ----------- ---------- -------------
  **UniProt**   **Protein name**    **dMMR/pMMR   **p         **Padj**   **Pathway**
                                    ratio**       (limma)**              

  Q15116        Programmed cell     5.8×          4.2 × 10⁻⁶  1.2 × 10⁻⁴ Checkpoint
                death 1 (PD-1)                                           

  Q9NZQ7        Programmed death    4.2×          8.4 × 10⁻⁶  2.1 × 10⁻⁴ Checkpoint
                ligand 1 (PD-L1)                                         

  P01730        T-cell surface      3.8×          1.2 × 10⁻⁵  2.8 × 10⁻⁴ T-cell
                glycoprotein CD4                                         

  P01732        T-cell surface      5.2×          2.4 × 10⁻⁶  8.4 × 10⁻⁵ T-cell
                glycoprotein CD8α                                        

  P20963        CD3ζ (CD247)        4.8×          3.2 × 10⁻⁶  9.8 × 10⁻⁵ TCR signaling

  P01374        Lymphotoxin-alpha   3.2×          8.8 × 10⁻⁵  1.8 × 10⁻³ Effector
                (TNF-β)                                                  

  P10144        Granzyme B (GZMB)   6.4×          1.2 × 10⁻⁶  4.8 × 10⁻⁵ Cytotoxic

  P13500        CCL2 (MCP-1)        2.8×          4.2 × 10⁻⁴  6.8 × 10⁻³ Chemokine
  ------------- ------------------- ------------- ----------- ---------- -------------

*Table 5.2 Top differentially expressed proteins. mRNA-protein
correlation analysis showed r=0.74 (Pearson) for all checkpoint proteins
--- strong corroboration between transcriptomic and proteomic findings.
PD-1 protein level elevation (5.8-fold at protein level vs 5.6-fold at
RNA level) confirms post-transcriptional stability of PD-1 upregulation
in dMMR TME.*

**6. TCR Repertoire Analysis (MOS-TCR-CRC-001)**

T-cell receptor beta chain (TCRβ) sequencing (Adaptive Biotechnologies
immunoSEQ; bulk PBMC and tumor-infiltrating lymphocyte DNA) was
performed on 20 dMMR and 10 pMMR CRC specimens to characterize TIL
clonal dynamics.

  ------------------- ------------ ------------ ------------------------
  **TCR Parameter**   **dMMR TIL** **pMMR TIL** **Interpretation**

  Clonality index     0.42 ± 0.08  0.18 ± 0.06  Higher clonality in dMMR
  (range 0--1)                                  = focused
                                                neoantigen-specific
                                                response

  Top 10 clone        28.4 ± 6.2   8.4 ± 2.8    Top clones dominate TIL
  frequency (%)                                 pool in dMMR ---
                                                antigen-driven expansion

  Unique CDR3β        4,842 ±      2,124 ± 684  Greater overall
  sequences           1,284                     diversity despite higher
                                                clonality (more
                                                antigens)

  Tumor-blood shared  12.4 ± 3.8%  2.2 ± 1.4%   Higher tumor-blood
  clones (%)                                    sharing = trafficking of
                                                tumor-reactive T cells

  PD-1+CD8+ fraction  82% of top   28% of top   Most expanded TIL clones
  of top clones       50 clones    50 clones    in dMMR express PD-1 ---
                                                direct cervimab target
  ------------------- ------------ ------------ ------------------------

*Table 6.1 TCR repertoire analysis. The high clonality index and PD-1
expression on expanded clones in dMMR tumors confirms that the
tumor-reactive T-cell compartment is precisely the target population for
cervimab. These cells are functionally exhausted but retain a
progenitor-exhausted subpopulation (TCF7+) capable of expansion upon
PD-1 blockade.*

**7. Dataset Integration and Biomarker Implications**

Multi-omics integration (WES + RNA-seq + mIHC + proteomics + TCR)
reveals a coherent molecular picture of the dMMR/MSI-H CRC immune
microenvironment:

- High somatic mutation burden (median TMB 47 mut/Mb) drives sustained
  TCR stimulation, generating expanded tumor-reactive CD8+ TIL clones.

- Chronic TCR stimulation upregulates PDCD1 mRNA (log2FC +2.49, padj
  3.2×10⁻⁸) and PD-1 protein (5.8-fold), with co-expression of TIM-3,
  LAG-3, and TIGIT defining a polyfunctional exhaustion signature.

- PD-L1 is expressed by both tumor cells (CPS ≥10 in 71% of dMMR tumors)
  and tumor-associated macrophages (88%), providing abundant ligand for
  PD-1-mediated T-cell suppression.

- Spatial proximity analysis confirms active PD-1/PD-L1 ligation occurs
  in the dMMR TME (proximity index 28.4 vs 4.2 in pMMR; p\<0.0001).

- TCF7+ progenitor-exhausted CD8+ TILs are present at high density in
  dMMR tumors --- this population is the critical responder to PD-1
  blockade (Siddiqui et al. 2019; Miller et al. 2019).

Collectively, these genomic and proteomic datasets provide a mechanistic
foundation for the clinical development of Cervimab in dMMR/MSI-H mCRC
and support the biomarker strategy (dMMR/MSI-H as enrollment criterion;
TMB, TCR repertoire, and TIL density as exploratory pharmacodynamic
endpoints in Phase 1/2 studies).

*Prepared by: Translational Genomics & Proteomics Group, Meridian
Oncology Sciences \| IRB: MOS-IRB-2020-012 \| Data sharing: NIH GEO and
dbGaP submissions in progress*
