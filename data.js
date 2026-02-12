// data.js

const rawAirlineData = `

# Legacy Carriers

Alaska Airlines (AS) | https://careers.alaskaair.com/career-opportunities/pilots/alaska-airlines/ | ANC, LAX, PDX, SEA, SFO
American Airlines (AA) | https://jobs.aa.com/go/Pilot/9286400/ | BOS, CLT, DCA, DFW, LAX, LGA, MIA, ORD, PHL, PHX
Delta Air Lines (DL) | https://www.delta.com/us/en/careers/pilots/overview | ATL, BOS, DTW, LAX, MSP, NYC, SEA, SLC
Hawaiian Airlines (HA) | https://www.hawaiianairlines.com/careers/first-officer | CVG, HNL
United Airlines (UA) | https://careers.united.com/us/en/pilots | CLE, DEN, EWR, GUM, IAD, IAH, LAX, MCO, ORD, TPA, SFO

# Major / National / Low Cost Carriers (LCC)

Allegiant Air (G4) | https://www.allegiantair.com/careers/pilots | ABE, ATW, AVL, BLI, BNA, CVG, DSM, FLL, FNT, GRR, IND, IWA, LAS, LAX, PGD, PIE, PIT, PVU, SAV, SFB, TYS, VPS
Avelo Airlines (XP) | https://www.aveloair.com/pilots | BDL, ELP, HVN, ILG, IWA, LAL, MCO
Breeze Airways (MX) | https://jobs.flybreeze.com/ | BDL, CHS, MCO, MSY, ORF, PVD, PVU, RSW, TPA, VRB
Frontier Airlines (F9) | https://www.flyfrontier.com/careers/pilot/ | ATL, CLE, CVG, DEN, DFW, LAS, MCO, MDW, MIA, ORD, PHL, PHX, TPA
JetBlue Airways (B6) | https://careers.jetblue.com/go/First-Officer/8044500/ | BOS, EWR, FLL, JFK, LAX, MCO
Southwest Airlines (WN) | https://careers.southwestair.com/pilots | ATL, BNA, BWI, DAL, DEN, HOU, MCO, MDW, LAS, LAX, OAK, PHX
Spirit Airlines (NK) | https://careers.spirit.com/pilots-go-further | ACY, ATL, DFW, DTW, FLL, IAH, LAS, MCO, MIA
Sun Country Airlines (SY) | https://careers.suncountry.com/pilots | MSP

# Cargo Airlines

ABX Air (GB) | https://www.abxair.com/careers/abx-air-pilots | CVG, ILN
Atlas Air (5Y) | https://careers.atlasairworldwide.com/fo/ | MIA
Empire Airlines (EM) | https://www.empireairlines.com | ANC, HNL
Everts Air Cargo (5V) | https://evertsair.com/careers/operations-jobs | ANC, FAI
FedEx Express (FX) | https://careers.fedex.com/career-areas/pilot/ | ANC, IND, LAX, MEM, OAK
Kalitta Air (K4) | https://www.kalittaair.com/teams/pilots | CVG, JFK
Key Lime Air (KG) | https://www.keylimeair.com/about/careers/ | DEN
Mountain Air Cargo | https://mtaircargo.com/pilot-careers/ | DEN, MEM
United Parcel Service (5X) | https://www.jobs-ups.com/us/en/ups-flightpath-i | SDF, MIA, ONT

# Regional Airlines

Cape Air (9K) | https://www.capeair.com/pilots/ | HYA, BOS, STL
CommuteAir (C5) | https://www.commuteair.com/careers/pilots/ | IAD, IAH
Endeavor Air (9E) | https://www.endeavorair.com/content/endeavor-air/en_us/careers/pilots.html | ATL, CVG, DTW, JFK, LGA, MSP, RDU
Envoy Air (MQ) | https://www.envoyair.com/careers/pilots/ | DFW, ORD, MIA, PHX
GoJet Airlines (G7) | https://www.gojetairlines.com/pilot-careers/ | ORD, RDU, STL
Horizon Air (QX) | https://careers.alaskaair.com/career-opportunities/pilots/horizon-air/ | ANC, BOI, GEG, MFR, PAE, PDX, SEA
Mesa Airlines (YV) | https://careers.rjet.com/airline-careers/pilot/ | DFW, IAH, PHX
Piedmont Airlines (PT) | https://piedmont-airlines.com/pilots/ | CLT, MDT, PHL
PSA Airlines (OH) | https://www.psaairlines.com/first-officers/ | CLT, DAY, DCA, DFW, PHL
Republic Airways (XY) | https://careers.rjet.com/airline-careers/pilot/ | BOS, CMH, DCA, EWR, IND, JFK, LGA, ORD, PHL, PIT, SDF
SkyWest (OO) | https://www.skywest.com/skywest-airline-jobs/career-guides/pilot-jobs | ATL, AUS, BOI, COS, DEN, DFW, DTW, FAT, IAH, LAX, MSP, ORD, PDX, PHX, PSP, SAN, SEA, SFO, SLC, TUS

# Fractional Carriers

Airshare | https://careers.flyairshare.com/pilots/ | ABQ, ALB, ATL, AUS, BHM, BNA, BUF, BWI, CHS, CLE, CLT, CMH, COS, CRW, CVG, DAL, DEN, DFW, DSM, DTW, ELP, EWR, FLL, FTW, GRR, GSO, GSP, HOU, IAD, IAH, ICT, IND, ISP, JAN, JAX, JFK, LAS, LEX, LGA, LIT, MCO, MDW, MEM, MIA, MKC, MKE, MLB, MSP, MSY, OKC, OMA, ORD, ORF, PBI, PHL, PHX, PIT, RDU, RIC, ROC, RSW, SAT, SAV, SDF, SHV, SLC, STL, SYR, TEB, TPA, TUL, TYS, XNA
FlexJet | https://careers.flexjet.com/us/en/US-pilot/ | ABQ, ALB, ATL, ATW, AUS, AVL, BDL, BHM, BNA, BOI, BOS, BTV, BUF, BUR, BWI, BZN, CAE, CHA, CHS, CID, CLE, CLT, CMH, COS, CVG, DAY, DCA, DEN, DFW, DSM, DTW, ECP, ELP, EUG, EWR, EYW, FAR, FAT, FSD, FLL, GEG, GRR, GSO, GSP, HOU, HPN, HRL, HSV, IAD, IAH, ICT, ILM, IND, JAN, JAX, JFK, LAS, LAX, LBB, LEX, LGA, LGB, LIT, MAF, MCI, MCO, MFR, MDT, MDW, MEM, MHT, MIA, MKE, MSP, MSN, MSY, MYR, OAK, OKC, OMA, ONT, ORD, ORF, PBI, PDX, PHL, PHX, PIT, PNS, PSP, PVD, PWM, RDM, RDU, RIC, RNO, ROC, RSW, SAN, SAT, SAV, SBA, SDF, SEA, SFO, SGF, SJC, SLC, SMF, SNA, SRQ, STL, SYR, TPA, TUL, TUS, TYS, VPS, XNA, SEA, SLC
NetJets | https://www.netjets.com/en-us/careers/ | ABQ, ALB, ATL, ATW, AUS, AVL, BDL, BHM, BNA, BOI, BOS, BTV, BUF, BUR, BWI, BZN, CAE, CHA, CHS, CID, CLE, CLT, CMH, COS, CVG, DAY, DCA, DEN, DFW, DSM, DTW, ECP, ELP, EUG, EWR, EYW, FAR, FAT, FSD, FLL, GEG, GRR, GSO, GSP, HOU, HPN, HRL, HSV, IAD, IAH, ICT, ILM, IND, JAN, JAX, JFK, LAS, LAX, LBB, LEX, LGA, LGB, LIT, MAF, MCI, MCO, MFR, MDT, MDW, MEM, MHT, MIA, MKE, MSP, MSN, MSY, MYR, OAK, OKC, OMA, ONT, ORD, ORF, PBI, PDX, PHL, PHX, PIT, PNS, PSP, PVD, PWM, RDM, RDU, RIC, RNO, ROC, RSW, SAN, SAT, SAV, SBA, SDF, SEA, SFO, SGF, SJC, SLC, SMF, SNA, SRQ, STL, SYR, TPA, TUL, TUS, TYS, VPS, XNA
PlaneSense | https://www.planesense.com/careers/#pilots | BDL, BNA, BTV, BWI, CHS, CLT, CMH, CVG, DCA, DEN, DFW, DTW, EWR, HOU, HPN, IAD, IAH, IND, JAX, JFK, LAS, LAX, LGA, MCI, MCO, MDW, MEM, MIA, MSP, MSY, ORD, PBI, PDK, PDX, PHL, PHX, PIT, PVD, PSM, RIC, SAN, SEA, SFO, SLC, STL, TPA
TradeWinds | https://www.flytradewind.com/pilots/ | HPN, OXC, SJU, SUA
Vista/XO Jet | https://vistaglobal.com/careers/pilot | 

`.trim();

