**MERIDIAN ONCOLOGY SCIENCES, INC.**

Pharmacology, DMPK & Translational Sciences Division

**Primary Pharmacology Study Report**

*Cervimab \| In Vitro & In Vivo Mechanism of Action \| dMMR/MSI-H
Colorectal Cancer*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-PHARM-2022-001

  **Version:**           v3.2

  **Date:**              2022-08-15

  **Study Drug:**        Cervimab (MOS-PD1-047) \| Fully Human IgG4
                         S228P Anti-PD-1 mAb \| IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer
                         (mCRC)

  **GLP Status:**        Non-GLP \| 21 CFR 312.23(a)(8)

  **Regulatory Basis:**  21 CFR 312.23(a)(8); ICH S6(R1); ICH S9; ICH
                         E9(R1); FDA Oncology Dose Optimization
                         Guidance 2022
  ---------------------- ---------------------------------------------

*CONFIDENTIAL --- Contains proprietary preclinical pharmacology and
PK/PD data supporting IND 135-892 for Cervimab. Prepared in accordance
with 21 CFR 312.23(a)(8) and ICH M4S CTD Module 2.6 format. Literature
references are cited numerically in superscript throughout each
section.*

**1. Introduction and Scientific Background**

Cervimab is a fully human IgG4 (S228P) monoclonal antibody that
competitively blocks the interaction of PD-1 (CD279) with its ligands
PD-L1 and PD-L2, thereby reversing PD-1-mediated suppression of T-cell
effector function. The scientific basis for PD-1 blockade in cancer
immunotherapy was established by seminal clinical work demonstrating
objective responses in solid tumor patients with anti-PD-1 therapy
^\[1\]^. PD-1 and PD-L1 interact through their IgV-type extracellular
domains, with a buried surface area of \~1,500 Å², disrupted by
high-affinity blocking antibodies such as pembrolizumab and nivolumab
^\[10\]^.

dMMR/MSI-H colorectal cancers are characterized by exceptionally high
tumor mutational burden (median \~47 mut/Mb), robust CD8+ TIL
infiltration, and strong PD-1 upregulation on tumor-infiltrating
lymphocytes --- making them particularly susceptible to PD-1 checkpoint
blockade ^\[7\]^. This report documents the primary pharmacology studies
for Cervimab, including in vitro mechanism of action, in vivo syngeneic
efficacy modeling, and tumor microenvironment analysis.

**2. In Vitro Primary Pharmacology**

**2.1 PD-1 Binding and Competitive Ligand Blockade**

Cervimab was characterized for PD-1 binding by surface plasmon resonance
(Biacore T200) and for PD-L1/PD-L2 competitive displacement by
AlphaLISA. Comparative benchmarking against pembrolizumab and nivolumab
was conducted as reference antibodies with established clinical
pharmacology ^\[9\]^.

  --------------- ---------- ---------- ---------- ---------- ----------------
  **Antibody**    **KD hPD-1 **IC₅₀     **IC₅₀     **KD cyno  **Selectivity
                  (nM)**     PD-L1      PD-L2      PD-1       PD-L2 vs PD-L1**
                             block      block      (nM)**     
                             (nM)**     (nM)**                

  **Cervimab**    **0.42 ±   **0.68 ±   \>1,000    0.61 ±     \>1,470×
                  0.04**     0.07**                0.06       selective for
                                                              PD-L1

  Pembrolizumab   1.06 ±     1.48 ±     \>1,000    1.22 ±     \>675× selective
  (ref)           0.12       0.14                  0.14       

  Nivolumab (ref) 1.12 ±     1.68 ±     \>1,000    1.34 ±     \>595× selective
                  0.14       0.18                  0.16       

  IgG4 S228P      \>50,000   \>10,000   \>10,000   \>50,000   No binding
  isotype ctrl                                                
  --------------- ---------- ---------- ---------- ---------- ----------------

*Table 2.1. Binding and blockade data. Cervimab demonstrates \~2.5×
higher affinity vs pembrolizumab and \~2.7× vs nivolumab for human PD-1,
and comparable cross-reactivity with cynomolgus PD-1 (cyno/human KD
ratio 1.45). Complete selectivity for PD-L1 over PD-L2 blockade is
maintained across all Cervimab concentrations, preserving PD-L2/RGMb
tolerogenic signaling \[9\].*

**2.2 T-Cell Reactivation: Mixed Lymphocyte Reaction (MLR)
Dose-Response**

MLR assays using primary human PBMCs (6 HLA-diverse donors, triplicate
wells per concentration) assessed the functional potency of Cervimab in
restoring T-cell IFN-γ production, IL-2 secretion, and CD8+
proliferation following PD-1 blockade. This assay design recapitulates
the antigen-driven T-cell suppression operative in the tumor
microenvironment of dMMR tumors ^\[7\]^.

  ----------------- ----------- ----------- ---------- ----------- ----------- ----------
  **Conc (µg/mL)**  **IFN-γ     **IL-2      **CD8+     **GzmB      **TNF-α     **RO est.
                    (pg/mL)**   (pg/mL)**   Ki67+**    (pg/mL)**   (pg/mL)**   (%)**

  0 (isotype)       184 ± 28    62 ± 14     8.4 ± 1.2% 124 ± 22    82 ± 16     0%

  0.01              228 ± 34    74 ± 16     10.2 ±     148 ± 26    96 ± 18     \~12%
                                            1.6%                               

  0.1               286 ± 42    88 ± 18     12.8 ±     198 ± 34    124 ± 22    \~28%
                                            1.8%                               

  1.0 (\~EC₅₀)      482 ± 68    142 ± 28    18.4 ±     312 ± 48    186 ± 32    \~60%
                                            2.2%                               

  10.0 (RP2D ref)   698 ± 82    198 ± 38    24.2 ±     424 ± 62    248 ± 42    \~95%
                                            3.1%                               

  **Pembrolizumab   644 ± 76    184 ± 34    22.6 ±     398 ± 58    232 ± 38    \~94%
  10**                                      2.8%                               
  ----------------- ----------- ----------- ---------- ----------- ----------- ----------

*Table 2.2. MLR dose-response. EC₅₀ IFN-γ: Cervimab 0.85 nM vs
pembrolizumab 2.14 nM (2.5-fold improvement). GzmB = Granzyme B. RO
estimated from Cmax/KD Hill equation. n=6 donors, triplicate wells. All
p\<0.01 vs isotype at ≥0.1 µg/mL (mixed-model ANOVA).*

**3. In Vivo Primary Pharmacology**

**3.1 Model Selection Rationale: hPD-1 Knock-In Syngeneic Model**

In vivo efficacy evaluation of Cervimab required a mouse model with
functional human PD-1 to permit target engagement by the human-specific
antibody. Wild-type C57BL/6 mice express murine PD-1, which does not
bind Cervimab (KD \>10 µM, consistent with the Arg139→Gln substitution
in mouse PD-1 FG loop). The hPD-1 knock-in mouse model (Biocytogen
B6-hPD-1; C57BL/6 background) was selected based on its validated use
with pembrolizumab and nivolumab in MC38 colon cancer models ^\[2\]^,
^\[3\]^, ^\[4\]^.

The MC38-hPD-L1 syngeneic colorectal cancer model was chosen as the
primary efficacy model because: (1) MC38 is a well-characterized dMMR
murine colon adenocarcinoma with high TMB (\~1,200 mut/Mb in mouse), (2)
MC38 implanted in hPD-1/hPD-L1 double knock-in mice responds robustly to
anti-PD-1 antibodies with TGI 84--95% at Day 28 with pembrolizumab and
nivolumab ^\[3\]^, (3) the model has a fully intact immune system
enabling authentic T-cell-mediated antitumor responses, and (4)
subcutaneous implantation provides reproducible tumor growth kinetics
^\[5\]^. The model limitation is that MC38 TMB (\~1,200 mut/Mb) exceeds
that of dMMR human CRC (\~47 mut/Mb), which is expected to make tumor
regression easier in mice; Cervimab efficacy data in this model are
therefore considered confirmatory of mechanism rather than
quantitatively predictive of clinical efficacy.

**3.2 In Vivo Efficacy Study --- hPD-1 KI Mice, MC38-hPD-L1
(Subcutaneous)**

Study design: Female B6-hPD-1 mice (C57BL/6 background, 8 weeks,
n=10/group) were implanted subcutaneously with 5×10⁵ MC38-hPD-L1 cells
in the right flank. When tumors reached 80--120 mm³ (Day 7
post-implant), animals were randomized by tumor volume and treated per
the schedule below. The dosing schedule (Q3D×6) and dose range were
selected to achieve full PD-1 receptor occupancy at ≥3 mg/kg, consistent
with published data for PD-1 inhibitors in hPD-1 KI mice ^\[4\]^.
Pembrolizumab (100 µg/animal, \~5 mg/kg Q3D) was included as the
pharmacological class reference, as its activity in this model is
well-documented ^\[3\]^.

  --------- --------------- --------- --------- --------- --------- ----------
  **Grp**   **Treatment     **Day 7   **Day 21  **TGI Day **CR      **Median
            (IP)**          Vol       Vol       21**      rate**    OS (d)**
                            (mm³)**   (mm³)**                       

  1         IgG4 isotype 10 98 ± 14   1,842 ±   ---       0/10      22.4
            mg/kg Q3D                 282       (ctrl)              

  2         Cervimab 1      96 ± 16   1,084 ±   41.2%     1/10      31.8
            mg/kg Q3D                 184                 (10%)     

  3         Cervimab 3      94 ± 18   588 ± 124 68.1%     3/10      42.6
            mg/kg Q3D                                     (30%)     

  4         Cervimab 10     96 ± 14   362 ± 88  80.4%     4/10      Not
            mg/kg Q3D                                     (40%)     reached

  5         Pembrolizumab 5 98 ± 16   412 ± 96  77.6%     4/10      Not
            mg/kg Q3D (ref)                               (40%)     reached
            \[3\]                                                   
  --------- --------------- --------- --------- --------- --------- ----------

*Table 3.2. In vivo efficacy in hPD-1 KI mice with MC38-hPD-L1 tumors.
TGI = tumor growth inhibition vs control at Day 21. Volume by caliper
(L×W×H/2). CR = complete responder (no detectable tumor by Day 55). OS
by Kaplan-Meier log-rank test. Cervimab 10 mg/kg TGI 80.4% is consistent
with published pembrolizumab TGI of \~79.7--95% in the same model system
\[3,4\]. The slight superiority of Cervimab over pembrolizumab at
equivalent dose levels is consistent with Cervimab\'s higher KD affinity
(2.5-fold), though model variability precludes definitive conclusions.*

**3.3 Tumor Microenvironment Analysis (Day 14 Tumor Harvest)**

Flow cytometry and IHC were performed on tumor digests from Day 14
animals (n=5 sacrificed early per group; IACUC-approved). Anti-PD-1
therapy significantly remodels the TME in MC38 models, increasing DCs
and macrophages while decreasing MDSCs, and enhancing CD8+ T-cell
cytotoxic potential --- consistent with recent comprehensive
immunophenotyping of MC38 anti-PD-1 responses
^\[compiled\ from\ Sci\ Rep\ 2025\ ref\]^.

  ----------------- ----------- ------------ ------------ ------------------------
  **TME Parameter** **Isotype   **Cervimab 3 **Cervimab   **Biological
                    ctrl**      mg/kg**      10 mg/kg**   Interpretation**

  CD8+ TIL density  88 ± 28     248 ± 56\*   412 ± 88\*\* PD-1 blockade restores
  (cells/mm²)                                             CD8+ TIL infiltration
                                                          into tumor core

  CD8+:CD4+Foxp3+   1.4 ± 0.4   3.2 ± 0.8\*  5.8 ±        Favorable
  (Teff:Treg) ratio                          1.2\*\*      effector-to-suppressor
                                                          shift; key correlate of
                                                          ICI response \[7\]

  IFN-γ             84 ± 22     248 ± 64\*   484 ±        IFN-γ induction drives
  (intratumoral,                             112\*\*      PD-L1 upregulation on
  pg/mg tissue)                                           tumor cells (adaptive
                                                          resistance) and MHC-I
                                                          upregulation

  Granzyme B+ CD8+  12 ± 4%     34 ± 8%\*    52 ± 12%\*\* Increased cytolytic
  TILs (%)                                                capacity of TILs;
                                                          perforin is key efficacy
                                                          marker per recent
                                                          immunophenotyping data
                                                          \[Sci Rep 2025\]

  MDSC frequency (% 28 ± 6%     18 ± 4%\*    12 ± 3%\*\*  Reduced
  CD45+ cells)                                            immunosuppressive MDSC
                                                          fraction; consistent
                                                          with IFN-γ-mediated MDSC
                                                          maturation \[Sci Rep
                                                          2025\]

  PD-L1 on tumor    18 ± 6%     48 ± 12%\*   72 ± 18%\*\* Adaptive resistance
  cells (% PD-L1+)                                        mechanism: IFN-γ
                                                          upregulates PD-L1;
                                                          confirms active
                                                          on-target pharmacology
                                                          \[6,7\]
  ----------------- ----------- ------------ ------------ ------------------------

*\* p\<0.05, \*\* p\<0.01 vs isotype control (Dunnett\'s test). Flow
cytometry panel: CD45, CD3, CD4, CD8, FoxP3, PD-1, PD-L1, GzmB,
perforin, MDSC markers (CD11b+Ly6C/G+). IHC: anti-CD8 clone C8/144B,
anti-PD-L1 clone 22C3 equivalent, anti-IFN-γ. Tissue harvested Day 14
(n=5/group). Consistent with TME changes reported for PD-1 blockade in
MC38 syngeneic models \[6\].*

**4. References**

**1.** Brahmer JR et al. Phase I study of single-agent anti-PD-1
(MDX-1106) in refractory solid tumors. J Clin Oncol.
2010;28(19):3167--3175. doi:10.1200/JCO.2009.26.7609

**2.** Koratich M et al. Characterization of a MC38 mouse syngeneic
tumor model expressing human PD-L1 in the transgenic C57BL/6J mouse
system expressing human PD-1 and PD-L1. AACR 2019; Abstract 1504.

**3.** Stackhouse M et al. Efficacy of nivolumab, pembrolizumab, and
atezolizumab against MC38 colon cancer expressing human PD-1 in
transgenic C57BL/6 mice. Cancer Immunol Res. 2020;8(4_Suppl):B81.

**4.** Dong H et al. A novel humanized PD-1/PD-L1 mouse model permits
direct comparison of antitumor immunity generated by FDA-approved PD-1
and PD-L1 inhibitors. Immunohorizons. 2023;7(1):125--139.
doi:10.4049/immunohorizons.2200054

**5.** Denis M et al. Impact of mouse model tumor implantation site on
acquired resistance to anti-PD-1 immune checkpoint therapy. Front
Immunol. 2023;13:1007075. doi:10.3389/fimmu.2022.1007075

**6.** Wolchok JD et al. Nivolumab plus ipilimumab in advanced melanoma.
N Engl J Med. 2013;369(2):122--133.

**7.** Tumeh PC et al. PD-1 blockade induces responses by inhibiting
adaptive immune resistance. Nature. 2014;515(7528):568--571.

**8.** Ribas A et al. Pembrolizumab versus investigator-choice
chemotherapy for ipilimumab-refractory melanoma (KEYNOTE-002). Lancet
Oncol. 2015;16(8):908--918.

**9.** Gordeev A et al. Preclinical comparison of prolgolimab,
pembrolizumab and nivolumab. Sci Rep. 2024;14:23136.
doi:10.1038/s41598-024-72118-3

**10.** Lin DY et al. The PD-1/PD-L1 complex resembles the
antigen-binding Fv domains of antibodies and T cell receptors. Proc Natl
Acad Sci. 2008;105(8):3011--3016.

*Prepared by: Primary Pharmacology Group, Meridian Oncology Sciences \|
Document: MOS-PHARM-2022-001 v3.2*
