/**
 * Academic Programs & Departments Data
 * Official academic curricula, departments, and statutory seat matrix for CAE Bapatla.
 */

export const departmentsData = [
  {
    id: "fmpe",
    name: "Farm Machinery & Power Engineering",
    shortCode: "FMPE",
    headOfDept: "Dr. K. V. S. Rami Reddy",
    description: "Specializing in agricultural machinery, tractor ergonomics, soil dynamics, CNC manufacturing, precision drone spraying, and on-farm mechanization R&D.",
    icon: "Tractor",
    stats: "5 Specialized Labs • Advanced CNC Workshop • Custom Hiring Centre",
    keyFocusAreas: [
      "Precision Farming & Drone Spraying",
      "Ergonomics & Safety in Farm Machinery",
      "Soil Dynamics & Traction Mechanics",
      "Autonomous Harvesters & CNC Prototyping"
    ]
  },
  {
    id: "swce",
    name: "Soil & Water Conservation Engineering",
    shortCode: "SWCE",
    headOfDept: "Dr. G. Ravi Babu",
    description: "Focusing on micro-irrigation systems, watershed hydrology, groundwater recharge, remote sensing, and GIS-based drought modeling.",
    icon: "Droplets",
    stats: "5 Specialized Labs • Model Watershed Complex",
    keyFocusAreas: [
      "Drip & Sprinkler Automation",
      "Watershed Delineation & Soil Erosion Modeling",
      "Groundwater Recharging Structures",
      "Satellite Remote Sensing & GIS in Agriculture"
    ]
  },
  {
    id: "ide",
    name: "Irrigation & Drainage Engineering",
    shortCode: "IDE",
    headOfDept: "Dr. (Mrs.) K. Krupavathi",
    description: "Managing natural agricultural water resources through precision micro-irrigation, canal automation, saline soil reclamation, and geomatics-based hydrological modeling.",
    icon: "Droplets",
    stats: "4 Specialized Labs • Meteorological Station",
    keyFocusAreas: [
      "Groundwater Modeling & Well Hydraulics",
      "Micro-Irrigation Automation & Fertigation",
      "Saline & Waterlogged Soil Reclamation",
      "Geomatics, Remote Sensing & Delta Water Management"
    ]
  },
  {
    id: "apfe",
    name: "Processing & Food Engineering",
    shortCode: "PFE",
    headOfDept: "Dr. B. Sreenivasula Reddy",
    description: "Dedicated to post-harvest technology, grain milling, drying kinetics, twin-screw extrusion, commercial ANGRAU FOODS experiential learning, and novel food packaging.",
    icon: "UtensilsCrossed",
    stats: "6 Specialized Labs • Commercial ELP Unit • FSSAI Certified",
    keyFocusAreas: [
      "Refractive Window Drying & Freeze Dehydration",
      "Millet Extrusion & Fortified Foods",
      "Modified Atmosphere Packaging & Ripening Chambers",
      "Grain Storage, Milling & Primary Processing"
    ]
  },
  {
    id: "ree",
    name: "Renewable Energy Engineering",
    shortCode: "REE",
    headOfDept: "Dr. S. Vishnu Vardhan",
    description: "Pioneering biomass gasification, solar photovoltaic pumping, solar crop dryers, and bio-fuel generation for agricultural sustainability.",
    icon: "SunMedium",
    stats: "Solar PV Agri-Pumping Yard • Biomass Gasifier Station",
    keyFocusAreas: [
      "Solar Water Pumping Systems",
      "Biomass Pelleting & Gasifiers",
      "Greenhouse Climate Control & Automation",
      "Agricultural Waste-to-Energy Conversion"
    ]
  },
  {
    id: "beas",
    name: "Basic Engineering & Allied Sciences",
    shortCode: "BEAS",
    headOfDept: "Dr. B. Anjaneyulu",
    description: "Providing foundational strengths in engineering mechanics, thermodynamics, fluid dynamics, computer programming, and mathematical modeling.",
    icon: "Cpu",
    stats: "CAD/CAM Computing Centre • Thermodynamics Lab",
    keyFocusAreas: [
      "Computational Fluid Dynamics (CFD)",
      "CAD/CAM Agricultural Equipment Modeling",
      "Artificial Intelligence & IoT for Agri-Systems",
      "Engineering Materials & Metallurgy"
    ]
  }
];

export const courseIntakeTables = {
  ug: {
    title: "Under Graduate Courses (B.Tech.)",
    programName: "B.Tech. (Agricultural Engineering)",
    duration: "4 Years (8 Semesters)",
    totalIntake: 88,
    admissionProcess: "Admission into First Year B.Tech. (Agricultural Engineering) programme is being done through AP state EAMCET ranks through common counseling of the state. Intake is for 60 seats. Out of 60 seats, 60% (36) of the seats are filled by EAMCET Convener, whereas remaining 40% (24) seats are filled under farmers' quota duly following the reservation policy of the state. There are 20% additional seats over and above 60 available for students of ICAR quota nominated by ICAR, New Delhi. Those who have completed 3-year Diploma in Agricultural Engineering have facility of entering into Second Year B.Tech. (Agricultural Engineering) through AP ECET conducted by AP State Council for Higher Education (APSCHE). There are 15% seats over and above 61 reserved for these lateral entry students.",
    rows: [
      { sNo: "1", name: "B.Tech. (Ag. Engg.) Convener & Farmers' Quota", intake: "61", duration: "4 years (8 semesters)", note: "60% Convener (36) + 40% Farmers' Quota (24)" },
      { sNo: "•", name: "ICAR Quota @ 20%", intake: "12", duration: "4 years", note: "Nominated by ICAR, New Delhi" },
      { sNo: "•", name: "EWS Quota @ 10%", intake: "6", duration: "4 years", note: "Economically Weaker Sections state quota" },
      { sNo: "•", name: "Lateral Entry for Diploma Students @ 15%", intake: "9", duration: "3 years (Direct 2nd Year)", note: "AP ECET conducted by APSCHE for 3-yr Diploma holders" },
      { sNo: "Total", name: "Total Sanctioned Annual Intake", intake: "88", duration: "4 Years (8 Semesters)", isTotal: true, note: "Complete sanctioned seat capacity" }
    ]
  },
  pg: {
    title: "Post Graduate Courses (M.Tech.)",
    duration: "2 Years (4 Semesters)",
    totalIntake: "13 + 1* EWS",
    admissionProcess: "Admission process carried out to the M.Tech. programmes is through entrance examination (JRF) conducted by the ICAR every year (since 2018-19) as per the reservation policy of the state. Earlier ANGRAU conducted the entrance examination based on the B.Tech. (Agricultural Engineering) syllabus. Present intake is 13 students in all the three departments of M.Tech. (Agricultural Engineering) programme. Apart from regular admission, over and above, 20% of students secure admission under ICAR quota with ICAR fellowship. From the academic year 2017-18 onwards, provision is made for International students also for PG programmes.",
    rows: [
      { sNo: "1", department: "Farm Machinery and Power Engineering", programme: "M.Tech. (Farm Machinery and Power Engineering)", intake: "3", duration: "2 years (4 semesters)", note: "ICAR JRF ranking & state reservation" },
      { sNo: "2", department: "Processing and Food Engineering", programme: "M.Tech. (Processing and Food Engineering)", intake: "5", duration: "2 years (4 semesters)", note: "ICAR JRF ranking & state reservation" },
      { sNo: "3", department: "Soil and Water Engineering", programme: "M.Tech. (Soil and Water Engineering)", intake: "5 + 1* EWS", duration: "2 years (4 semesters)", note: "*on rotation basis" },
      { sNo: "Total", department: "All 3 Engineering Departments", programme: "Total M.Tech. Sanctioned Intake", intake: "13 + 1* EWS", duration: "2 years (4 semesters)", isTotal: true, note: "+ 20% ICAR Fellowship Quota & International seats" }
    ]
  },
  phd: {
    title: "Doctoral Courses (Ph.D.)",
    duration: "3 Years (6 Semesters)",
    totalIntake: "4",
    admissionProcess: "Admission process carried out to the Ph.D. programmes is through entrance examination (SRF) conducted by the ICAR every year (since 2018-19) and interview performance as per the reservation policy of the state. Earlier ANGRAU conducted the entrance examinations in each specialization based on the M.Tech. (Agricultural Engineering) syllabus. Apart from regular admission, over and above, 20% of students secure admission under ICAR quota with ICAR fellowship. There is a provision of one seat for regular students in each Department and one seat altogether for in-service faculty of ANGRAU.",
    rows: [
      { sNo: "1", department: "Farm Machinery and Power Engineering", programme: "Ph.D. (Farm Machinery and Power Engineering)", intake: "2", duration: "3 years (6 semesters)", note: "ICAR SRF + Interview merit" },
      { sNo: "2", department: "Processing and Food Engineering", programme: "Ph.D. (Processing and Food Engineering)", intake: "1", duration: "3 years (6 semesters)", note: "ICAR SRF + Interview merit" },
      { sNo: "3", department: "Soil and Water Engineering", programme: "Ph.D. (Soil and Water Engineering)", intake: "1", duration: "3 years (6 semesters)", note: "ICAR SRF + Interview merit" },
      { sNo: "Total", department: "All 3 Research Departments", programme: "Total Ph.D. Regular Intake", intake: "4", duration: "3 years (6 semesters)", isTotal: true, note: "+ 20% ICAR Fellowship & 1 In-service ANGRAU faculty seat" }
    ]
  }
};

/**
 * Consolidated Single Table of Numerical Intake across ALL Branches (UG, PG, Ph.D.)
 */
export const consolidatedAllBranchesTable = {
  title: "Comprehensive Annual Sanctioned Seat Matrix of All Branches",
  subtitle: "Consolidated statutory numerical seat distribution across all 7 undergraduate, postgraduate, and doctoral degree programmes at CAE Bapatla",
  totalSeats: "106 Seats / Year",
  statutorySummary: "Approved by Acharya N.G. Ranga Agricultural University (ANGRAU), APSCHE & Indian Council of Agricultural Research (ICAR), New Delhi.",
  rows: [
    {
      sNo: "1",
      level: "Undergraduate (UG)",
      levelBadge: "UG",
      branch: "Agricultural Engineering",
      degree: "B.Tech. (Ag. Engg.)",
      duration: "4 Years (8 Semesters)",
      breakdown: [
        { label: "Convener Quota (60%)", val: 36 },
        { label: "Farmers' Quota (40%)", val: 24 },
        { label: "ICAR Quota (20%)", val: 12 },
        { label: "EWS Quota (10%)", val: 6 },
        { label: "Lateral Entry Diploma (15%)", val: 9 }
      ],
      breakdownText: "36 Convener + 24 Farmers' Quota + 12 ICAR (20%) + 6 EWS (10%) + 9 Lateral Entry (15%)",
      totalIntake: "88",
      totalIntakeNumber: 88,
      admissionChannel: "AP EAMCET (Convener & Farmers') • AP ECET (Diploma 2nd Yr) • ICAR AIEEA-UG"
    },
    {
      sNo: "2",
      level: "Postgraduate (PG)",
      levelBadge: "PG",
      branch: "Farm Machinery & Power Engineering (FMPE)",
      degree: "M.Tech.",
      duration: "2 Years (4 Semesters)",
      breakdown: [
        { label: "Regular Intake", val: 3 },
        { label: "ICAR Fellowship Quota", val: "+20%" },
        { label: "International Students", val: "Yes" }
      ],
      breakdownText: "3 Regular + 20% ICAR Fellowship & International Quota",
      totalIntake: "3",
      totalIntakeNumber: 3,
      admissionChannel: "ICAR AIEEA-PG (JRF) All-India Ranking & State Counseling"
    },
    {
      sNo: "3",
      level: "Postgraduate (PG)",
      levelBadge: "PG",
      branch: "Processing & Food Engineering (PFE)",
      degree: "M.Tech.",
      duration: "2 Years (4 Semesters)",
      breakdown: [
        { label: "Regular Intake", val: 5 },
        { label: "ICAR Fellowship Quota", val: "+20%" },
        { label: "International Students", val: "Yes" }
      ],
      breakdownText: "5 Regular + 20% ICAR Fellowship & International Quota",
      totalIntake: "5",
      totalIntakeNumber: 5,
      admissionChannel: "ICAR AIEEA-PG (JRF) All-India Ranking & State Counseling"
    },
    {
      sNo: "4",
      level: "Postgraduate (PG)",
      levelBadge: "PG",
      branch: "Soil & Water Engineering (SWE)",
      degree: "M.Tech.",
      duration: "2 Years (4 Semesters)",
      breakdown: [
        { label: "Regular Intake", val: 5 },
        { label: "EWS Quota (*on rotation)", val: 1 },
        { label: "ICAR Fellowship Quota", val: "+20%" },
        { label: "International Students", val: "Yes" }
      ],
      breakdownText: "5 Regular + 1* EWS (on rotation) + 20% ICAR Fellowship",
      totalIntake: "5 + 1*",
      totalIntakeNumber: 6,
      admissionChannel: "ICAR AIEEA-PG (JRF) All-India Ranking & State Counseling"
    },
    {
      sNo: "5",
      level: "Doctoral (Ph.D.)",
      levelBadge: "Ph.D.",
      branch: "Farm Machinery & Power Engineering (FMPE)",
      degree: "Ph.D.",
      duration: "3 Years (6 Semesters)",
      breakdown: [
        { label: "Regular Research Intake", val: 2 },
        { label: "ICAR Fellowship Quota", val: "+20%" },
        { label: "In-service Faculty (ANGRAU)", val: 1 }
      ],
      breakdownText: "2 Regular + 20% ICAR Fellowship + 1 In-service Faculty Seat",
      totalIntake: "2",
      totalIntakeNumber: 2,
      admissionChannel: "ICAR AICE-JRF/SRF (Ph.D.) Entrance Score & Viva-Voce"
    },
    {
      sNo: "6",
      level: "Doctoral (Ph.D.)",
      levelBadge: "Ph.D.",
      branch: "Processing & Food Engineering (PFE)",
      degree: "Ph.D.",
      duration: "3 Years (6 Semesters)",
      breakdown: [
        { label: "Regular Research Intake", val: 1 },
        { label: "ICAR Fellowship Quota", val: "+20%" },
        { label: "In-service Faculty (ANGRAU)", val: 1 }
      ],
      breakdownText: "1 Regular + 20% ICAR Fellowship + 1 In-service Faculty Seat",
      totalIntake: "1",
      totalIntakeNumber: 1,
      admissionChannel: "ICAR AICE-JRF/SRF (Ph.D.) Entrance Score & Viva-Voce"
    },
    {
      sNo: "7",
      level: "Doctoral (Ph.D.)",
      levelBadge: "Ph.D.",
      branch: "Soil & Water Engineering (SWE)",
      degree: "Ph.D.",
      duration: "3 Years (6 Semesters)",
      breakdown: [
        { label: "Regular Research Intake", val: 1 },
        { label: "ICAR Fellowship Quota", val: "+20%" },
        { label: "In-service Faculty (ANGRAU)", val: 1 }
      ],
      breakdownText: "1 Regular + 20% ICAR Fellowship + 1 In-service Faculty Seat",
      totalIntake: "1",
      totalIntakeNumber: 1,
      admissionChannel: "ICAR AICE-JRF/SRF (Ph.D.) Entrance Score & Viva-Voce"
    }
  ],
  totals: {
    ugTotal: 88,
    pgTotal: "13 + 1* EWS (14)",
    phdTotal: 4,
    grandTotal: "106 Seats / Year"
  }
};

export const programsData = [
  {
    id: "btech-agri",
    level: "Undergraduate",
    degree: "B.Tech",
    name: "B.Tech. in Agricultural Engineering",
    duration: "4 Years (8 Semesters)",
    intake: "88 Seats / Year",
    intakeBreakdown: "61 Base (36 Convener + 24 Farmers' Quota) • 12 ICAR Quota (20%) • 6 EWS (10%) • 9 Lateral Entry (15%)",
    intakeTable: [
      { category: "EAMCET Convener Quota (60%)", seats: 36, note: "Common state counseling" },
      { category: "Farmers' Quota (40%)", seats: 24, note: "State agrarian reservation" },
      { category: "ICAR Quota (20%)", seats: 12, note: "Nominated by ICAR, New Delhi" },
      { category: "EWS Quota (10%)", seats: 6, note: "Economically Weaker Sections" },
      { category: "Lateral Entry Diploma (15%)", seats: 9, note: "AP ECET 2nd year entry" }
    ],
    eligibility: "10+2 with PCM through AP EAMCET common counseling. Lateral entry for 3-Year Diploma in Agri Engg holders into 2nd year through AP ECET (APSCHE).",
    admissionProcess: "State AP EAMCET ranks (60% Convener, 40% Farmers' quota), ICAR AIEEA nomination (20%), and AP ECET for lateral entry diploma candidates.",
    department: "All Engineering Departments",
    overview: "Admission into First Year B.Tech. (Agricultural Engineering) is conducted through AP state EAMCET ranks via common state counseling. Out of 60 regular seats, 60% (36) are filled by the EAMCET Convener, and 40% (24) are filled under farmers' quota following state reservation policy. Over and above 60 seats, 20% additional seats (12) are nominated by ICAR New Delhi, 10% under EWS quota (6), and 15% (9 seats) for Diploma holders entering 2nd Year through AP ECET.",
    highlights: [
      "Intake capacity: 88 seats (61 base + 12 ICAR + 6 EWS + 9 Lateral Entry)",
      "Dedicated 40% reservation quota for candidates from agricultural/farming families",
      "Direct 2nd-year lateral entry pathway for 3-Year Agricultural Engineering Diploma holders via AP ECET",
      "Mandatory 6-month Industrial In-Plant Training in 8th semester with field mechanization internships"
    ],
    curriculumSummary: [
      { sem: "Sem 1 & 2", subjects: "Engineering Mathematics, Physics, Chemistry, Basic Electrical, Surveying, Workshop Practice" },
      { sem: "Sem 3 & 4", subjects: "Fluid Mechanics, Farm Power, Soil Mechanics, Thermodynamics, Strength of Materials, Heat Transfer" },
      { sem: "Sem 5 & 6", subjects: "Farm Machinery Design, Irrigation & Drainage, Post Harvest Engineering, Soil & Water Conservation" },
      { sem: "Sem 7 & 8", subjects: "Agro-Energy Systems, Dairy & Food Engineering, Industrial In-Plant Training, Capstone Project" }
    ],
    careerOpportunities: "State Agricultural Engineering Departments, Tractor & Farm Machinery MNCs, Irrigation Companies, Food Processing Industries, ICAR & Banking Agronomy Officers."
  },
  {
    id: "mtech-fmpe",
    level: "Postgraduate",
    degree: "M.Tech",
    name: "M.Tech. in Farm Machinery and Power Engineering",
    duration: "2 Years (4 Semesters)",
    intake: "3 Seats / Year",
    intakeBreakdown: "3 Regular Sanctioned Seats + 20% ICAR Quota with Fellowship + International Student Provision",
    intakeTable: [
      { category: "Regular Sanctioned Intake", seats: 3, note: "ICAR JRF ranking & merit" },
      { category: "ICAR Fellowship Quota", seats: "+ 20%", note: "Over and above regular seats" },
      { category: "International Students", seats: "Quota", note: "Admitted since 2017-18" }
    ],
    eligibility: "B.Tech. in Agricultural Engineering or Mechanical Engineering with qualifying ICAR JRF entrance examination ranking.",
    admissionProcess: "Entrance examination (JRF) conducted by ICAR every year (since 2018-19) as per state reservation policy. 20% over and above with ICAR fellowship.",
    department: "Farm Machinery and Power Engineering",
    overview: "Specialized postgraduate program focusing on advanced farm power, tractor ergonomics, computer-aided machine design, sensor-assisted precision spraying, and autonomous harvesting technologies.",
    highlights: [
      "Annual sanctioned intake: 3 seats + 20% ICAR Fellowship quota",
      "Admission via ICAR All India JRF entrance examination",
      "Full access to Tractor Power Testing Track and PTO Dynamometer facilities",
      "Provision for International students and industry-sponsored research trials"
    ],
    curriculumSummary: [
      { sem: "Year 1", subjects: "Design of Farm Power & Tillage Machinery, Vibration & Ergonomics, Precision Farming Instrumentation, Testing of Tractors" },
      { sem: "Year 2", subjects: "Research Seminar, Master's Dissertation Research & Defense" }
    ],
    careerOpportunities: "R&D divisions of tractor and farm implement manufacturers, Farm Machinery Training and Testing Institutes (FMTTI), academia, and international consulting."
  },
  {
    id: "mtech-pfe",
    level: "Postgraduate",
    degree: "M.Tech",
    name: "M.Tech. in Processing and Food Engineering",
    duration: "2 Years (4 Semesters)",
    intake: "5 Seats / Year",
    intakeBreakdown: "5 Regular Sanctioned Seats + 20% ICAR Quota with Fellowship + International Student Provision",
    intakeTable: [
      { category: "Regular Sanctioned Intake", seats: 5, note: "ICAR JRF ranking & merit" },
      { category: "ICAR Fellowship Quota", seats: "+ 20%", note: "Over and above regular seats" },
      { category: "International Students", seats: "Quota", note: "Admitted since 2017-18" }
    ],
    eligibility: "B.Tech. in Agricultural Engineering / Food Technology / Chemical Engineering with ICAR JRF qualification.",
    admissionProcess: "Entrance examination (JRF) conducted by ICAR as per state reservation policy, with additional 20% ICAR fellowship seats.",
    department: "Processing and Food Engineering",
    overview: "Advanced study in post-harvest technology, crop processing, thermal & non-thermal food preservation, grain storage silos, and cold chain logistics to achieve seed-to-fork value addition.",
    highlights: [
      "Annual sanctioned intake: 5 seats + 20% ICAR Fellowship quota",
      "Hands-on research in 4 pilot food processing units and modern analytical lab",
      "Extensive training on grain drying kinetics, extrusion, and modified atmosphere packaging",
      "Eligible for International student quota and national agro-processing grants"
    ],
    curriculumSummary: [
      { sem: "Year 1", subjects: "Advanced Food Process Engineering, Storage & Silo Design, Packaging Technology, Food Quality Assurance, Bioprocess Engineering" },
      { sem: "Year 2", subjects: "Industrial Dissertation, Seminar, and Master's Thesis Defense" }
    ],
    careerOpportunities: "Food MNCs, Grain storage & warehousing corporations, export packaging labs, APEDA, and food processing start-up R&D."
  },
  {
    id: "mtech-swe",
    level: "Postgraduate",
    degree: "M.Tech",
    name: "M.Tech. in Soil and Water Engineering",
    duration: "2 Years (4 Semesters)",
    intake: "5 + 1* EWS Seats",
    intakeBreakdown: "5 Regular Seats + 1 EWS (on rotation) + 20% ICAR Quota with Fellowship + International Student Provision",
    intakeTable: [
      { category: "Regular Sanctioned Intake", seats: 5, note: "ICAR JRF ranking & merit" },
      { category: "EWS Quota (*on rotation)", seats: 1, note: "Rotation basis" },
      { category: "ICAR Fellowship Quota", seats: "+ 20%", note: "Over and above regular seats" },
      { category: "International Students", seats: "Quota", note: "Admitted since 2017-18" }
    ],
    eligibility: "B.Tech. in Agricultural Engineering / Civil Engineering with qualifying ICAR JRF entrance score.",
    admissionProcess: "ICAR JRF national entrance examination and state reservation policy, plus 20% over and above with ICAR fellowship.",
    department: "Soil and Water Engineering",
    overview: "Postgraduate specialization in watershed hydrology, micro-irrigation automation, command area water management, groundwater recharge modeling, and GIS-based drought mitigation.",
    highlights: [
      "Sanctioned intake: 5 + 1* EWS seats (*on rotation basis) + 20% ICAR Fellowship seats",
      "Geospatial simulation using ArcGIS, remote sensing imagery, and watershed runoff modeling",
      "Field experimentation in canal command areas and automated drip-irrigation plots",
      "Active research projects addressing climate resilience and soil erosion control"
    ],
    curriculumSummary: [
      { sem: "Year 1", subjects: "Advanced Hydrology, Micro-Irrigation Design, Groundwater Resource Modeling, Remote Sensing & GIS in Water Resources" },
      { sem: "Year 2", subjects: "Master's Thesis Research, Watershed Field Practicum & Dissertation" }
    ],
    careerOpportunities: "State Water Resources Departments, Central Ground Water Board, irrigation corporates (Jain, Netafim), and environmental consultancies."
  },
  {
    id: "phd-fmpe",
    level: "Doctoral",
    degree: "Ph.D.",
    name: "Ph.D. in Farm Machinery and Power Engineering",
    duration: "3 Years (6 Semesters)",
    intake: "2 Seats / Year",
    intakeBreakdown: "2 Regular Research Seats + 20% ICAR SRF Quota with Fellowship + 1 In-service ANGRAU faculty seat",
    intakeTable: [
      { category: "Regular Research Intake", seats: 2, note: "ICAR SRF + Interview merit" },
      { category: "ICAR Fellowship Quota", seats: "+ 20%", note: "Over and above with fellowship" },
      { category: "In-Service ANGRAU Faculty", seats: "1 Seat", note: "For in-service university faculty" }
    ],
    eligibility: "M.Tech. in Farm Machinery & Power Engineering with qualifying ICAR SRF entrance examination ranking and interview performance.",
    admissionProcess: "National entrance examination (SRF) conducted by ICAR and interview performance as per state reservation policy, plus ICAR fellowship quota.",
    department: "Farm Machinery and Power Engineering",
    overview: "Rigorous doctoral research program developing patented technologies, autonomous agricultural robotics, sensor-guided implements, and ergonomic tractor cabs.",
    highlights: [
      "Sanctioned intake: 2 doctoral research scholars per year",
      "Admission through ICAR SRF national entrance examination and interview",
      "Dedicated provision for in-service faculty of ANGRAU",
      "Over and above 20% quota for ICAR SRF fellowship holders"
    ],
    curriculumSummary: [
      { sem: "Coursework", subjects: "Advanced Research Methodology, Similitude in Engineering, Farm Machinery Dynamics, Comprehensive Viva" },
      { sem: "Research", subjects: "Independent Field Research, Prototype Fabrication, Patent Drafting, Doctoral Dissertation Defense" }
    ],
    careerOpportunities: "University professorship, Principal Scientists in ICAR/CSIR institutes, Heads of R&D at multinational farm equipment corporations."
  },
  {
    id: "phd-pfe",
    level: "Doctoral",
    degree: "Ph.D.",
    name: "Ph.D. in Processing and Food Engineering",
    duration: "3 Years (6 Semesters)",
    intake: "1 Seat / Year",
    intakeBreakdown: "1 Regular Research Seat + 20% ICAR SRF Quota with Fellowship + 1 In-service ANGRAU faculty seat",
    intakeTable: [
      { category: "Regular Research Intake", seats: 1, note: "ICAR SRF + Interview merit" },
      { category: "ICAR Fellowship Quota", seats: "+ 20%", note: "Over and above with fellowship" },
      { category: "In-Service ANGRAU Faculty", seats: "1 Seat", note: "For in-service university faculty" }
    ],
    eligibility: "M.Tech. in Processing and Food Engineering / Agricultural Process Engineering with ICAR SRF ranking and interview.",
    admissionProcess: "ICAR SRF entrance examination and interview as per state reservation policy, plus ICAR fellowship quota.",
    department: "Processing and Food Engineering",
    overview: "Advanced doctoral investigation into non-thermal food processing, nano-packaging, super-critical extraction, and industrial drying kinetics for agricultural commodities.",
    highlights: [
      "Sanctioned intake: 1 doctoral research scholar per year",
      "Admission through ICAR SRF national entrance examination and interview",
      "State-of-the-art chromatographic and spectrophotometric analytical instruments",
      "Over and above 20% quota for ICAR SRF fellowship holders"
    ],
    curriculumSummary: [
      { sem: "Coursework", subjects: "Advanced Food Rheology, Thermal & Non-Thermal Kinetics, Doctoral Seminar, Comprehensive Examination" },
      { sem: "Research", subjects: "Laboratory Experimentation, Pilot Scale Trials, High-Impact Journal Publishing, Thesis Submission" }
    ],
    careerOpportunities: "Senior scientists in food laboratories, CFTRI, ICAR-CIPHET, university faculty, and directors of food innovation centers."
  },
  {
    id: "phd-swce",
    level: "Doctoral",
    degree: "Ph.D.",
    name: "Ph.D. in Soil and Water Engineering",
    duration: "3 Years (6 Semesters)",
    intake: "1 Seat / Year",
    intakeBreakdown: "1 Regular Research Seat + 20% ICAR SRF Quota with Fellowship + 1 In-service ANGRAU faculty seat",
    intakeTable: [
      { category: "Regular Research Intake", seats: 1, note: "ICAR SRF + Interview merit" },
      { category: "ICAR Fellowship Quota", seats: "+ 20%", note: "Over and above with fellowship" },
      { category: "In-Service ANGRAU Faculty", seats: "1 Seat", note: "For in-service university faculty" }
    ],
    eligibility: "M.Tech. in Soil and Water Engineering / Conservation with ICAR SRF ranking and interview.",
    admissionProcess: "ICAR SRF entrance examination and interview as per state reservation policy, plus ICAR fellowship quota.",
    department: "Soil and Water Engineering",
    overview: "Doctoral research addressing regional and national water security, precision irrigation automation, artificial groundwater recharge, and climate-adaptive watershed planning.",
    highlights: [
      "Sanctioned intake: 1 doctoral research scholar per year",
      "Admission through ICAR SRF national entrance examination and interview",
      "Field lysimeter installations and satellite telemetry stations",
      "Over and above 20% quota for ICAR SRF fellowship holders"
    ],
    curriculumSummary: [
      { sem: "Coursework", subjects: "Advanced Hydrodynamics, Geo-Spatial Modeling, Vadose Zone Hydrology, Comprehensive Doctoral Viva" },
      { sem: "Research", subjects: "Field Hydrology Monitoring, Numerical Model Calibration, Journal Publications, Doctoral Defense" }
    ],
    careerOpportunities: "Research scientists at ICAR-IISWC, NIH Roorkee, water policy advisors, university professors, and international water institutions."
  }
];
