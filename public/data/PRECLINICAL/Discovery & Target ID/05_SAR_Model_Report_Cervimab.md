**MERIDIAN ONCOLOGY SCIENCES, INC.**

Discovery & Preclinical Research Division

**Structure-Activity Relationship (SAR) Model Report**

*Cervimab CDR Engineering and Affinity Maturation*

  ---------------------- ---------------------------------------------
  **Document Number:**   MOS-SAR-2021-003

  **Version:**           v2.2

  **Date:**              2021-08-20

  **Program:**           Cervimab (MOS-PD1-047) \| Anti-PD-1 mAb \|
                         IND 135-892

  **Indication:**        dMMR/MSI-H Metastatic Colorectal Cancer

  **Classification:**    CONFIDENTIAL --- IND Supporting Data
  ---------------------- ---------------------------------------------

*This document contains confidential and proprietary information of
Meridian Oncology Sciences, Inc. Prepared in accordance with 21 CFR
312.23(a)(8), ICH S9, and applicable FDA guidance documents.*

**1. Introduction**

This report documents the structure-activity relationship (SAR) analysis
conducted during optimization of the Cervimab (MOS-PD1-047) antibody
from its parental clone MOS-PD1-COM (KD 7.6 nM for human PD-1) to the
optimized lead (KD 0.42 nM). Optimization encompassed CDR scanning
mutagenesis, affinity maturation by phage display error-prone PCR and
site-directed CDR diversification, and structural modeling of key
contacts based on homology to published PD-1/antibody crystal
structures.

The final optimized antibody sequence incorporates three key CDR
mutations relative to the parental clone: H-CDR2 W52F (heavy chain CDR2,
Trp→Phe), H-CDR3 Y98R (Tyr→Arg), and L-CDR1 S27D (light chain CDR1,
Ser→Asp), each contributing independently and additively to the 18-fold
affinity improvement.

**2. Parental Clone Starting Point**

  ---------------------- ---------------------------------------------
  **Property**           **Parental Clone MOS-PD1-COM**

  VH gene family         IGHV3-33\*01 (germline assignment by IgBLAST)

  VL gene family         IGKV1-39\*01 (germline assignment)

  CDR-H1 (IMGT)          GFTFSSY (residues 26--32)

  CDR-H2 (IMGT)          ISSGGST (residues 51--57); W52 is hot-spot

  CDR-H3 (IMGT)          ARGGYDILTYFDY (residues 93--102); Y98 is
                         hot-spot

  CDR-L1 (IMGT)          QSVSSY (residues 24--29); S27 is hot-spot

  CDR-L2 (IMGT)          DAS (residues 50--52)

  CDR-L3 (IMGT)          QQRSNWPLT (residues 89--97)

  KD (human PD-1, SPR)   7.6 nM

  PD-L1 IC₅₀             12.4 nM
  (competitive ELISA)    

  MLR IFN-γ fold         2.1× vs isotype
  increase (10 µg/mL)    
  ---------------------- ---------------------------------------------

*Table 2.1 Parental clone characterization. CDR sequences in
single-letter amino acid code. Hot-spot residues identified by alanine
scanning (see Section 3).*

**3. CDR Alanine Scanning Mutagenesis**

All 31 CDR residues (excluding glycines and prolines) were individually
substituted with alanine. Variants were expressed as Fabs in E. coli and
characterized by SPR and competitive ELISA. Residues showing \>2-fold
loss of affinity upon Ala substitution were classified as hot-spots.

  ------------ --------- ----------- ----------- ------------- ----------------
  **Position   **CDR**   **WT        **KD WT     **KD Ala      **Role / PD-1
  (IMGT)**               Residue**   (nM)**      (nM)**        Contact**

  H-CDR2 W52   H-CDR2    Trp (W)     7.6         284 (37×↑)    Critical:
                                                               hydrophobic
                                                               contact with
                                                               PD-1
                                                               Ile126/Leu128
                                                               pocket

  H-CDR3 Y98   H-CDR3    Tyr (Y)     7.6         148 (19×↑)    Critical: H-bond
                                                               to PD-1 Glu136
                                                               (salt bridge
                                                               contribution)

  L-CDR1 S27   L-CDR1    Ser (S)     7.6         62 (8×↑)      Important:
                                                               water-mediated
                                                               H-bond network
                                                               to PD-1 Asn66

  H-CDR1 S30   H-CDR1    Ser (S)     7.6         24 (3×↑)      Moderate: H-bond
                                                               to PD-1 Arg139

  H-CDR2 S57   H-CDR2    Ser (S)     7.6         19 (2.5×↑)    Moderate: H-bond
                                                               to PD-1 Gln133

  L-CDR3 R94   L-CDR3    Arg (R)     7.6         18 (2.4×↑)    Moderate: salt
                                                               bridge with PD-1
                                                               Asp85

  H-CDR2 T58   H-CDR2    Thr (T)     7.6         16 (2.1×↑)    Moderate: H-bond
                                                               to PD-1 Gln133
                                                               (main chain
                                                               carbonyl)

  All other    Mixed     Various     7.6         \<15 nM       Minimal
  CDR residues                                   (tolerated)   contribution
  (24)                                                         (\<2-fold Ala
                                                               effect)
  ------------ --------- ----------- ----------- ------------- ----------------

*Table 3.1 CDR alanine scan. Three hot-spot residues (W52, Y98, S27)
identified as primary engineering targets. Contact assignments based on
homology modeling using pembrolizumab-PD-1 crystal structure (PDB 5B8C)
and published CDR-PD-1 contact data (Lin et al., Sci Rep 2016;
PMC9667898).*

**4. Affinity Maturation: CDR-Targeted Diversification**

**4.1 Maturation Strategy**

Three parallel maturation libraries were designed, each targeting one of
the identified hot-spot positions with defined chemical diversity:

- Library M1 (H-CDR2 position 52): W52 diversified with amino acids that
  maintain aromaticity or introduce π-stacking/CH-π interactions: F, Y,
  W (WT), L, I, V (total 6 AA at position 52). Rationale: Phe retains
  hydrophobic contact but reduces steric strain and improves
  conformational flexibility in the CDR-H2 loop.

- Library M2 (H-CDR3 position 98): Y98 diversified with charged residues
  to optimize salt bridge / H-bond with PD-1 Glu136: R, K, H, Q, E
  (total 5 AA). Rationale: Arg (positively charged guanidinium) forms
  stronger bidentate salt bridge with PD-1 Glu136 carboxylate than Tyr
  OH.

- Library M3 (L-CDR1 position 27): S27 diversified with residues that
  expand water-mediated network: D, E, N, T, H (total 5 AA). Rationale:
  Asp carboxylate accepts additional H-bond donors and can form a direct
  H-bond to PD-1 Asn66, replacing the less-efficient water-mediated
  contact.

**4.2 Individual Mutation Impact**

  -------------- ------------ -------------- ------------ ------------ -------------
  **Mutation**   **KD (nM)**  **Fold         **IC₅₀ PD-L1 **Tm Fab     **Advance**
                              improvement vs (nM)**       (°C)**       
                              parental**                               

  Parental (WT)  7.6          1.0×           12.4         68.4         ---
                              (reference)                              

  W52F (M1 lead) 2.1          3.6× better    3.8          72.1         YES

  W52Y           4.2          1.8× better    6.8          69.8         No

  W52L           8.4          0.9× (no       13.2         67.2         No
                              improvement)                             

  Y98R (M2 lead) 0.8          9.5× better    1.4          72.8         YES

  Y98K           1.4          5.4× better    2.4          71.4         No

  Y98H           2.8          2.7× better    4.6          70.2         No

  S27D (M3 lead) Parental +   See            ---          ---          YES
                 W52F         combination                              
                 context: 0.8                                          
                 → 0.42                                                

  S27E           Parental +   See            ---          ---          No
                 W52F         combination                              
                 context: 0.8                                          
                 → 0.62                                                
  -------------- ------------ -------------- ------------ ------------ -------------

*Table 4.2 Individual mutation impact. Mutations tested in single-change
context vs parental. S27D tested in combination context (see Table 4.3).
The H-CDR3 Y98R mutation provides the largest single-mutation affinity
improvement (9.5-fold), consistent with the enhanced electrostatic
interaction with PD-1 Glu136.*

**4.3 Combination Mutations --- Cervimab Final Sequence**

  ------------------- ---------- ------------ ---------- ---------- -----------
  **Combination**     **KD       **Fold vs    **IC₅₀     **Tm Fab   **%
                      (nM)**     parental**   (nM)**     (°C)**     Monomer**

  Parental (WT all    7.6        1×           12.4       68.4       94.2%
  CDRs)                                                             

  \+ W52F alone       2.1        3.6×         3.8        72.1       98.4%

  \+ W52F + Y98R      0.80       9.5×         1.4        73.6       98.8%

  **+ W52F + Y98R +   **0.42**   **18.1×**    **0.68**   **74.2**   **99.1%**
  S27D (Cervimab)**                                                 

  \+ W52F + Y98R +    0.62       12.3×        0.98       73.8       98.6%
  S27E (comparator)                                                 

  \+ W52F + Y98R +    0.74       10.3×        1.18       73.2       98.8%
  S27N (comparator)                                                 
  ------------------- ---------- ------------ ---------- ---------- -----------

*Table 4.3 Combinatorial optimization. Mutations are additive and
independent (no epistatic effects). The triple mutant W52F + Y98R + S27D
(Cervimab) achieves the optimal balance of affinity (0.42 nM), thermal
stability (Tm 74.2°C), and colloidal stability (99.1% monomer). S27D was
selected over S27E based on marginally superior affinity and equivalent
stability.*

**5. Structural Model of Cervimab--PD-1 Interface**

**5.1 Homology Modeling**

A structural model of the Cervimab Fab--PD-1 complex was generated using
Rosetta (version 3.13) antibody homology modeling with the
pembrolizumab--PD-1 complex (PDB 5B8C) as the primary template. CDR
loops were modeled using the kinematic closure (KIC) algorithm with 500
independent energy minimization trajectories; the top 10 models by
Rosetta energy score were selected for analysis.

  ----------------- ------------- ------------ --------------------------
  **Contact         **Type**      **ΔΔG        **Structural rationale**
  (Cervimab →                     contrib.     
  PD-1)**                         (kcal/mol,   
                                  est.)**      

  H-CDR2 W52F →     Hydrophobic   −1.8         Phe packs into hydrophobic
  PD-1                                         pocket; less steric clash
  Ile126/Leu128                                vs Trp, higher
                                               complementarity (buried SA
                                               180 Å²)

  H-CDR3 Y98R →     Salt bridge   −2.4         Arg guanidinium forms 2
  PD-1 Glu136       (bidentate)                H-bonds to PD-1 Glu136
                                               carboxylate; Tyr OH formed
                                               only 1 H-bond

  L-CDR1 S27D →     H-bond        −0.8         Asp carboxylate forms
  PD-1 Asn66        (direct)                   direct H-bond to Asn66
                                               amide NH, replacing weaker
                                               water-mediated Ser-OH
                                               contact

  H-CDR1 S30 → PD-1 H-bond        −0.9         Unchanged from parental;
  Arg139            (retained                  Ser-OH to Arg139
                    from                       guanidinium main-chain
                    parental)                  carbonyl H-bond

  H-CDR2 S57 → PD-1 H-bond        −0.6         Retained from parental;
  Gln133            (retained)                 Ser-OH to Gln133 carbonyl

  **Total interface **---**       **−6.5       **Compared to parental ΔΔG
  ΔΔG (Cervimab)**                (est.)**     −3.9 kcal/mol; net
                                               improvement −2.6 kcal/mol
                                               = \~18× Kd improvement
                                               (consistent with
                                               experiment)**
  ----------------- ------------- ------------ --------------------------

*Table 5.1 Key binding contacts in Cervimab--PD-1 homology model. ΔΔG
estimates by Rosetta ΔΔG protocol (Kellogg et al. Proteins 2011). PD-1
contact residues annotated per published crystal structures (PDB 5B8C
pembrolizumab; PMC9667898 D12 anti-PD-1 phage antibody). Buried surface
area \~1,180 Å² (Cervimab) vs \~1,137 Å² (pembrolizumab by crystal
structure).*

**6. Sequence and Molecular Characteristics of Final Cervimab**

  ---------------------- ---------------------------------------------
  **Parameter**          **Cervimab (MOS-PD1-047 Final)**

  Heavy chain isotype    Human IgG4 (S228P stabilization)

  Light chain isotype    Human kappa

  CDR-H1 (IMGT)          GFTFSSY (unchanged from parental)

  CDR-H2 (IMGT) ---      ISSGFST (W52→F mutation: W52F)
  matured                

  CDR-H3 (IMGT) ---      ARGGYDILTYRDY (Y98→R mutation: Y98R)
  matured                

  CDR-L1 (IMGT) ---      QSVDSY (S27→D mutation: S27D)
  matured                

  CDR-L2 (IMGT)          DAS (unchanged)

  CDR-L3 (IMGT)          QQRSNWPLT (unchanged)

  Fc mutations           S228P (EU numbering) --- prevents Fab-arm
                         exchange (IgG4 instability)

  Calculated molecular   144,284 Da (predicted from sequence)
  weight                 

  Isoelectric point (pI) 8.6 (by capillary IEF)

  N-glycosylation sites  Asn297 (Fc, Asn-linked; complex glycan); no
                         Fab glycosylation
  ---------------------- ---------------------------------------------

*Table 6.1 Final Cervimab sequence and molecular characteristics. CDR
sequences in IMGT numbering (Lefranc et al.). S228P is the standard IgG4
stabilization mutation used in all approved IgG4 therapeutics
(pembrolizumab, dupilumab, etc.) to prevent half-antibody formation by
disulfide bond stabilization of the hinge.*

*Prepared by: Antibody Engineering & Structural Biology Group, Meridian
Oncology Sciences \| Document: MOS-SAR-2021-003 v2.2 \| References: PDB
5B8C, PMC9667898, Nat Commun 2019 (s42003-019-0642-9)*
