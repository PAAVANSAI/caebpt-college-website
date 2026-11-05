/**
 * Official ANGRAU Academics Catalog Data
 * College of Agricultural Engineering (CAE), Bapatla
 * Constituent of Acharya N.G. Ranga Agricultural University (ANGRAU)
 *
 * Sourced directly from:
 * 1. Course outlines of B.Tech (Ag. Engg.) as per ICAR VI Deans' Committee Recommendations (2024)
 * 2. ANGRAU Post Graduate Degree Programme Guidelines for Thesis Presentation (2019 Booklet)
 * 3. ANGRAU Academic Council Resolution No. 2920 (Anti-Plagiarism Regulations & UGC 2018 Compliance)
 */

// ============================================================================
// 1. UNDERGRADUATE CURRICULUM (B.Tech. Agricultural Engineering - ICAR VI Deans' 2024)
// ============================================================================
export const ugCurriculumData = {
  degreeName: "Bachelor of Technology in Agricultural Engineering [B.Tech. (Ag. Engg.)]",
  standard: "ICAR VI Deans' Committee Recommendations (Effective 2024–25)",
  duration: "4 Years (8 Semesters)",
  totalCredits: "180 + 4 Non-Gradial (NG) Credits",
  creditBreakdown: {
    theoryCredits: 91,
    practicalCredits: 83,
    moocCredits: 6,
    nonGradialCredits: 4,
    grandTotal: "180 + 4 NG"
  },
  
  departmentWiseCredits: [
    { code: "FMPE", dept: "Farm Machinery and Power Engineering", theory: 8, practical: 4, total: 12 },
    { code: "PFE", dept: "Processing and Food Engineering", theory: 10, practical: 5, total: 15 },
    { code: "IDEN", dept: "Irrigation and Drainage Engineering", theory: 6, practical: 3, total: 9 },
    { code: "SWCE", dept: "Soil and Water Conservation Engineering", theory: 8, practical: 4, total: 12 },
    { code: "REEN", dept: "Renewable Energy Engineering", theory: 4, practical: 2, total: 6 },
    { code: "AEBE", dept: "Basic Engineering", theory: 26, practical: 21, total: 47 },
    { code: "AEAS", dept: "Agricultural Sciences", theory: 20, practical: 11, total: 31 },
    { code: "FRSP", dept: "Language & Communication Skills", theory: 3, practical: 1, total: 4 },
    { code: "COCA", dept: "Deeksharambh & Physical Education", theory: 0, practical: 4, total: "4 + 2 NG" },
    { code: "SRDY", dept: "Skill Enhancement / Student READY", theory: 0, practical: 25, total: "25 + 2 NG" },
    { code: "ELEC", dept: "Elective Courses", theory: 6, practical: 3, total: 9 },
    { code: "MOOC", dept: "Online MOOCs (SWAYAM / NPTEL)", theory: 6, practical: 0, total: 6 }
  ],

  nepEntryExit: [
    {
      level: "Year 1 (Sem I & II)",
      award: "UG Certificate in Agricultural Engineering",
      credits: "44 Credits + 10-Week Vocational Internship (SRDY 182 - 10 Credits)",
      exitQualification: "Certificate in Farm Mechanization & Agro-Systems",
      entryRequirement: "Intermediate (10+2) with MPC / AP EAPCET / ICAR AIEEA."
    },
    {
      level: "Year 2 (Sem III & IV)",
      award: "UG Diploma in Agricultural Engineering",
      credits: "88 Credits + 10-Week Industrial Internship (SRDY 281 - 10 Credits)",
      exitQualification: "Diploma in Farm Power, Irrigation & Food Processing",
      entryRequirement: "Lateral entry for 3-Year Agri Engg polytechnic diploma holders via AP ECET direct to 2nd year."
    },
    {
      level: "Year 3 (Sem V & VI)",
      award: "B.Sc. in Agricultural Engineering Technology",
      credits: "134 Credits across specialized departmental core modules",
      exitQualification: "Degree in Agricultural Engineering Technology",
      entryRequirement: "Continuation or lateral credit transfer."
    },
    {
      level: "Year 4 (Sem VII & VIII)",
      award: "B.Tech. (Agricultural Engineering) Professional Degree",
      credits: "180 + 4 Non-Gradial Credits (Full 8 Semesters with 6-month READY In-Plant Training)",
      exitQualification: "Full Professional B.Tech Degree accredited by ICAR & AICTE",
      entryRequirement: "Regular completion of all prescribed courses and internship."
    }
  ],

  semesters: [
    {
      semester: "Semester I",
      totalCredits: "22 (12+10)",
      courses: [
        { code: "FRSP 101", title: "Communication Skills in English", credits: "2(1+1)", dept: "FRSP" },
        { code: "AEBE 101", title: "Engineering Mathematics - I", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 102", title: "Engineering Physics", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 103", title: "Engineering Chemistry", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 104", title: "Engineering Mechanics", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 105", title: "Principles of Electrical Engineering", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEAS 101", title: "Principles of Agronomy", credits: "3(2+1)", dept: "AEAS" },
        { code: "COCA 101", title: "Deeksharambh (Student Induction Programme)", credits: "2(0+2) NG", dept: "COCA" }
      ]
    },
    {
      semester: "Semester II",
      totalCredits: "23 (13+10)",
      courses: [
        { code: "AEBE 106", title: "Engineering Mathematics - II", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 107", title: "Engineering Drawing & Computer Graphics", credits: "3(1+2)", dept: "AEBE" },
        { code: "AEBE 108", title: "Workshop Technology & Practice", credits: "3(1+2)", dept: "AEBE" },
        { code: "AEBE 109", title: "Fluid Mechanics & Hydraulics", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 110", title: "Surveying & Levelling", credits: "3(1+2)", dept: "AEBE" },
        { code: "AEAS 102", title: "Principles of Soil Science", credits: "3(2+1)", dept: "AEAS" },
        { code: "AEAS 103", title: "Principles of Horticultural Sciences", credits: "2(1+1)", dept: "AEAS" },
        { code: "COCA 102", title: "Physical Education & Yoga Practices", credits: "2(0+2) NG", dept: "COCA" },
        { code: "SRDY 182", title: "Internship-I (Vocational Training - 10 Weeks for Certificate Exit)", credits: "10(0+10)", dept: "SRDY" }
      ]
    },
    {
      semester: "Semester III",
      totalCredits: "23 (14+9)",
      courses: [
        { code: "AEBE 201", title: "Engineering Mathematics - III", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 202", title: "Strength of Materials", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 203", title: "Engineering Thermodynamics", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 204", title: "Theory of Machines", credits: "3(2+1)", dept: "AEBE" },
        { code: "FMPE 201", title: "Farm Power Engineering & Tractors", credits: "3(2+1)", dept: "FMPE" },
        { code: "SWCE 201", title: "Soil & Water Conservation Engineering", credits: "3(2+1)", dept: "SWCE" },
        { code: "AEAS 201", title: "Crop Physiology & Plant Biochemistry", credits: "2(1+1)", dept: "AEAS" },
        { code: "FRSP 201", title: "Technical Writing & Seminar Presentation", credits: "2(1+1)", dept: "FRSP" },
        { code: "COCA 201", title: "NSS / NCC Training", credits: "1(0+1) NG", dept: "COCA" }
      ]
    },
    {
      semester: "Semester IV",
      totalCredits: "23 (13+10)",
      courses: [
        { code: "AEBE 205", title: "Machine Design", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEBE 206", title: "Heat and Mass Transfer", credits: "3(2+1)", dept: "AEBE" },
        { code: "FMPE 202", title: "Farm Machinery & Equipment - I", credits: "3(2+1)", dept: "FMPE" },
        { code: "PFE 201", title: "Engineering Properties of Agricultural Materials", credits: "2(1+1)", dept: "PFE" },
        { code: "SWCE 202", title: "Watershed Hydrology", credits: "3(2+1)", dept: "SWCE" },
        { code: "IDEN 201", title: "Irrigation Engineering & System Design", credits: "3(2+1)", dept: "IDEN" },
        { code: "REEN 201", title: "Renewable Energy Sources & Technologies", credits: "3(2+1)", dept: "REEN" },
        { code: "AEAS 202", title: "Protected Cultivation & Greenhouses", credits: "2(1+1)", dept: "AEAS" },
        { code: "SRDY 281", title: "Internship-II (Industrial Training - 10 Weeks for Diploma Exit)", credits: "10(0+10)", dept: "SRDY" }
      ]
    },
    {
      semester: "Semester V",
      totalCredits: "23 (13+10)",
      courses: [
        { code: "AEBE 301", title: "Computer Programming & AI Applications", credits: "3(1+2)", dept: "AEBE" },
        { code: "AEBE 302", title: "Instrumentation & Control Systems", credits: "3(2+1)", dept: "AEBE" },
        { code: "FMPE 301", title: "Farm Machinery & Equipment - II", credits: "3(2+1)", dept: "FMPE" },
        { code: "FMPE 302", title: "Tractor Systems and Controls", credits: "3(2+1)", dept: "FMPE" },
        { code: "PFE 301", title: "Post-Harvest Operations & Food Drying", credits: "3(2+1)", dept: "PFE" },
        { code: "PFE 302", title: "Dairy and Food Engineering", credits: "3(2+1)", dept: "PFE" },
        { code: "IDEN 301", title: "Drainage Engineering & Salinity Reclamation", credits: "3(2+1)", dept: "IDEN" },
        { code: "REEN 301", title: "Biomass Gasification & Bioreactors", credits: "2(1+1)", dept: "REEN" }
      ]
    },
    {
      semester: "Semester VI",
      totalCredits: "23 (12+11)",
      courses: [
        { code: "AEBE 303", title: "Agro-Industrial Waste Management", credits: "2(1+1)", dept: "AEBE" },
        { code: "SWCE 301", title: "Soil & Water Conservation Structures", credits: "3(2+1)", dept: "SWCE" },
        { code: "SWCE 302", title: "Remote Sensing & GIS Applications", credits: "3(1+2)", dept: "SWCE" },
        { code: "IDEN 302", title: "Groundwater, Wells & Pumps", credits: "3(2+1)", dept: "IDEN" },
        { code: "PFE 303", title: "Food Packaging & Storage Technology", credits: "3(2+1)", dept: "PFE" },
        { code: "PFE 304", title: "Agricultural Process Engineering", credits: "3(2+1)", dept: "PFE" },
        { code: "ELEC 301", title: "Elective Course - I", credits: "3(2+1)", dept: "ELEC" },
        { code: "MOOC 301", title: "Online Course / MOOCs (SWAYAM / NPTEL)", credits: "3(3+0)", dept: "MOOC" }
      ]
    },
    {
      semester: "Semester VII",
      totalCredits: "23 (12+11)",
      courses: [
        { code: "AEBE 401", title: "Precision Agriculture & Agricultural Robotics", credits: "3(2+1)", dept: "AEBE" },
        { code: "AEAS 401", title: "Agribusiness Management & Entrepreneurship", credits: "3(2+1)", dept: "AEAS" },
        { code: "SWCE 401", title: "Watershed Planning & Management", credits: "3(2+1)", dept: "SWCE" },
        { code: "PFE 401", title: "Cold Chain Logistics & Food Quality", credits: "3(2+1)", dept: "PFE" },
        { code: "REEN 401", title: "Solar Energy Applications & Agrivoltaics", credits: "2(1+1)", dept: "REEN" },
        { code: "ELEC 401", title: "Elective Course - II", credits: "3(2+1)", dept: "ELEC" },
        { code: "ELEC 402", title: "Elective Course - III", credits: "3(2+1)", dept: "ELEC" },
        { code: "MOOC 401", title: "Online Course / MOOCs (NPTEL / edX)", credits: "3(3+0)", dept: "MOOC" }
      ]
    },
    {
      semester: "Semester VIII",
      totalCredits: "20 (0+20)",
      isStudentReady: true,
      courses: [
        { code: "SRDY 481", title: "Industrial In-Plant Training (10 Weeks in Agro-Industry)", credits: "10(0+10)", dept: "SRDY" },
        { code: "SRDY 482", title: "Experiential Learning Programme (ELP) / Multi-Commodity Plant", credits: "5(0+5)", dept: "SRDY" },
        { code: "SRDY 483", title: "Project Work & Design Viva-Voce", credits: "5(0+5)", dept: "SRDY" }
      ]
    }
  ],

  // 24 Skill Enhancement Modules as mandated in VI Deans' Committee
  skillModules: [
    { id: 1, title: "Operation & Maintenance of Farm Machinery", dept: "FMPE" },
    { id: 2, title: "Repair & Maintenance of Tractors and Power Tillers", dept: "FMPE" },
    { id: 3, title: "Management of Agricultural Machinery Custom Hiring & Maintenance Facilities", dept: "FMPE" },
    { id: 4, title: "Fabrication, Operation & Maintenance of Renewable Energy Devices", dept: "REEN" },
    { id: 5, title: "Operation & Maintenance of Drones Used for Agricultural Applications", dept: "AEBE" },
    { id: 6, title: "Machine Vision, Sensors & Sensors Architecture in Smart Farms", dept: "AEBE" },
    { id: 7, title: "Design of Solar PV Systems Using Computer-Aided Softwares", dept: "REEN" },
    { id: 8, title: "Installation & Maintenance of On-Grid and Off-Grid Solar Systems", dept: "REEN" },
    { id: 9, title: "Design & Maintenance of Agrivoltaic Systems", dept: "REEN" },
    { id: 10, title: "Valorization of Agri-Biomass & Organic Waste", dept: "REEN" },
    { id: 11, title: "Energy Audit, Energy Conservation & Energy Efficiency in Agro-Industries", dept: "REEN" },
    { id: 12, title: "Repair & Maintenance of Centrifugal & Submersible Pumps and Irrigation Networks", dept: "IDEN" },
    { id: 13, title: "Installation & Maintenance of Automated Micro-Irrigation (Drip & Sprinkler) Systems", dept: "IDEN" },
    { id: 14, title: "Application of Remote Sensing & GIS for Agricultural Water Management", dept: "SWCE" },
    { id: 15, title: "Operation & Maintenance of Hydro-Meteorological Instruments & Weather Stations", dept: "SWCE" },
    { id: 16, title: "Geophysical Survey & Investigations for Groundwater Exploration & Borewell Siting", dept: "IDEN" },
    { id: 17, title: "Installation & Maintenance of Rooftop Rainwater Harvesting Systems", dept: "SWCE" },
    { id: 18, title: "Operation & Maintenance of Soil and Water Conservation Structures (Check Dams & Bunds)", dept: "SWCE" },
    { id: 19, title: "Construction, Management & Maintenance of Protected Cultivation Polyhouses", dept: "AEAS" },
    { id: 20, title: "Agro-Processing Methods, Equipment Operation and Machinery Maintenance", dept: "PFE" },
    { id: 21, title: "Operation & Management of Multi-Commodity Agro-Processing Centre (APC)", dept: "PFE" },
    { id: 22, title: "Primary Processing, Value Addition & Cold Chain Logistics for Perishables", dept: "PFE" },
    { id: 23, title: "Food Grain Godown, Silo Storage & Scientific Warehouse Management", dept: "PFE" },
    { id: 24, title: "Post-Harvest Value Chain Management Including Traceability & Export Logistics", dept: "PFE" }
  ],

  // Representative Elective Courses
  electiveCourses: [
    { code: "EL-FM-01", title: "Tractor Ergonomics, Safety and Operator Workplace Design", dept: "FMPE", credits: "3(2+1)" },
    { code: "EL-FM-02", title: "Design and Testing of Tillage & Sowing Machinery", dept: "FMPE", credits: "3(2+1)" },
    { code: "EL-FM-03", title: "Autonomous Farm Vehicles & Robotics Architecture", dept: "FMPE", credits: "3(2+1)" },
    { code: "EL-PF-01", title: "Extrusion Cooking and Functional Food Processing", dept: "PFE", credits: "3(2+1)" },
    { code: "EL-PF-02", title: "Non-Thermal Food Preservation & Emerging Technologies", dept: "PFE", credits: "3(2+1)" },
    { code: "EL-PF-03", title: "Spices, Condiments, Plantation & Medicinal Plant Processing", dept: "PFE", credits: "3(2+1)" },
    { code: "EL-SW-01", title: "Micro-Irrigation Automation and Precision Fertigation", dept: "SWCE", credits: "3(2+1)" },
    { code: "EL-SW-02", title: "Command Area Development and Participatory Water Management", dept: "IDEN", credits: "3(2+1)" },
    { code: "EL-SW-03", title: "Soil Erosion Modeling & Watershed Decision Support Systems", dept: "SWCE", credits: "3(2+1)" },
    { code: "EL-RE-01", title: "Biofuels, Bioethanol & Biorefinery Engineering", dept: "REEN", credits: "3(2+1)" },
    { code: "EL-RE-02", title: "Waste-to-Energy and Industrial Cogeneration Systems", dept: "REEN", credits: "3(2+1)" },
    { code: "EL-AI-01", title: "Internet of Things (IoT) & Smart Sensors in Agriculture", dept: "AEBE", credits: "3(2+1)" }
  ]
};

// ============================================================================
// 2. POSTGRADUATE PROGRAMS (M.Tech. Agricultural Engineering)
// ============================================================================
export const pgProgramData = {
  degreeName: "Master of Technology [M.Tech. (Ag. Engg.)]",
  standard: "ICAR Post-Graduate Curriculum & ANGRAU Regulations",
  duration: "2 Years (4 Semesters)",
  totalCredits: "70 Credits (Core: 24, Supporting: 6, Seminar: 2, Research Thesis: 30, Common: 5, Non-Gradial: 3)",
  branches: [
    {
      code: "FMPE",
      name: "M.Tech. in Farm Machinery and Power Engineering",
      sanctionedIntake: "3 Seats / Year (+ 20% ICAR JRF Quota & International Student Provision)",
      eligibility: "B.Tech. (Agri. Engg.) / B.E. (Agri. Engg.) with qualifying rank in ICAR AIEEA-PG (JRF) or ANGRAU PG entrance test.",
      focus: "Tractor dynamics, advanced ergonomics, simulation of tillage dynamics, precision seed metering, autonomous harvesters, vibration analysis, and patentable field innovations.",
      researchLabs: "Tractor Dynamics Track, Ergonomics Lab, Tool Carrier Test Rig, Machinery Prototype Fabrication Complex."
    },
    {
      code: "PFE",
      name: "M.Tech. in Processing and Food Engineering",
      sanctionedIntake: "5 Seats / Year (+ 20% ICAR JRF Quota & International Student Provision)",
      eligibility: "B.Tech. in Agri. Engg. / Food Technology / Chemical Engg. with qualifying ICAR AIEEA-PG score.",
      focus: "Drying kinetics, super-critical fluid extraction, modified atmosphere packaging (MAP), dairy plant engineering, grain silo aeration, cold-chain thermal modeling, and functional food development.",
      researchLabs: "Multi-Commodity Pilot Processing Centre, Grain Quality Lab, Texture & Rheology Lab, Packaging Testing Center."
    },
    {
      code: "SWE",
      name: "M.Tech. in Soil and Water Engineering",
      sanctionedIntake: "5 + 1* EWS Seats / Year (*On rotation basis) (+ 20% ICAR JRF Quota)",
      eligibility: "B.Tech. (Agri. Engg.) / B.Tech. (Civil Engg.) with qualifying ICAR AIEEA-PG rank.",
      focus: "Watershed hydrology simulation, automated sensor-based micro-irrigation, GIS/remote sensing drought modeling, groundwater recharge dynamics, pressurized pipe networks, and climate change impacts.",
      researchLabs: "Remote Sensing & GIS GIS-Lab, Soil Physics Lab, Hydraulic Flume Rig, Automated Micro-Irrigation Research Station."
    }
  ]
};

// ============================================================================
// 3. DOCTORAL PROGRAMS (Ph.D. Agricultural Engineering)
// ============================================================================
export const phdProgramData = {
  degreeName: "Doctor of Philosophy [Ph.D. (Ag. Engg.)]",
  standard: "ICAR National Doctoral Framework & ANGRAU Regulations",
  duration: "3 Years (6 Semesters - extendable up to 5 Years)",
  totalCredits: "100 Credits (Coursework: 25, Doctoral Seminar: 4, Research Dissertation: 75)",
  branches: [
    {
      code: "PHD-FMPE",
      name: "Ph.D. in Farm Machinery and Power Engineering",
      sanctionedIntake: "2 Seats / Year (+ 20% ICAR SRF Quota & 1 In-Service ANGRAU Seat)",
      eligibility: "M.Tech. in Farm Machinery and Power Engineering with minimum OGPA of 6.50/10.00 and ICAR AICE-JRF/SRF qualification.",
      keyAreas: "Deep learning based robotic harvesters, variable rate fertilizer/pesticide applicator design, drone payload aerodynamics, electric tractors, and life cycle cost assessment."
    },
    {
      code: "PHD-PFE",
      name: "Ph.D. in Processing and Food Engineering",
      sanctionedIntake: "1 Seat / Year (+ 20% ICAR SRF Quota & 1 In-Service ANGRAU Seat)",
      eligibility: "M.Tech. in Processing and Food Engineering / Agricultural Process Engineering with minimum OGPA of 6.50/10.00.",
      keyAreas: "Non-thermal pulsed electric field preservation, bio-nanocomposite packaging films, cold plasma treatment of grains, and continuous extrusion modeling."
    },
    {
      code: "PHD-SWE",
      name: "Ph.D. in Soil and Water Engineering",
      sanctionedIntake: "1 Seat / Year (+ 20% ICAR SRF Quota & 1 In-Service ANGRAU Seat)",
      eligibility: "M.Tech. in Soil and Water Engineering / Irrigation and Drainage with minimum OGPA of 6.50/10.00.",
      keyAreas: "Coupled surface-subsurface hydrologic modeling (SWAT, MODFLOW), satellite-based evapotranspiration mapping, saline aquifer management, and automated canal control."
    }
  ]
};

// ============================================================================
// 4. EXAMINATION REGULATIONS & EVALUATION SYSTEM
// ============================================================================
export const examinationRegulationsData = {
  title: "Official Examination & Continuous Evaluation System",
  authority: "ANGRAU Academic Regulations & Controller of Examinations",
  attendanceRule: "Minimum 75% attendance in theory and practical classes separately is mandatory to appear for semester end examinations. Condonation up to 10% (i.e. between 65% and 74%) may be granted by the Associate Dean solely on valid medical grounds.",
  
  ugEvaluationScheme: [
    {
      component: "Theory Courses (Without Practical)",
      midTermExam: "30 Marks (Objective & Descriptive Mid-Term)",
      assignmentsQuizzes: "10 Marks (Class quizzes, seminars, homework)",
      semesterEndExam: "60 Marks (3-Hour University External Theory Examination)",
      totalMarks: "100 Marks (Passing standard: 50%)"
    },
    {
      component: "Courses with Theory + Practical",
      theoryComponent: "Theory: Mid-Term (20) + Sem-End (50) = 70 Marks",
      practicalComponent: "Continuous Lab Work (10) + Lab Record (5) + Sem-End Practical & Viva (15) = 30 Marks",
      semesterEndExam: "Conducted jointly by internal and nominated external examiners",
      totalMarks: "100 Marks (50% aggregate passing required)"
    },
    {
      component: "Student READY / Industrial In-Plant Training",
      midTermExam: "Continuous Monthly Progress Diary (25 Marks)",
      assignmentsQuizzes: "Host Industry Supervisor Evaluation (25 Marks)",
      semesterEndExam: "Comprehensive Technical Report & Viva-Voce (50 Marks)",
      totalMarks: "100 Marks evaluated by Faculty Committee"
    }
  ],

  gradingSystem: {
    scale: "10.00 Point Scale (OGPA - Overall Grade Point Average)",
    passingGradePoint: "5.00 out of 10.00 for UG; 6.50 out of 10.00 for PG and Ph.D.",
    classifications: [
      { ogpa: "8.50 – 10.00", classification: "First Class with Distinction", honors: "Eligible for University Gold Medals & Merit Certificates" },
      { ogpa: "7.00 – 8.49", classification: "First Class", honors: "Standard Professional First Division" },
      { ogpa: "6.00 – 6.99", classification: "Second Class", honors: "Satisfactory Degree Completion" },
      { ogpa: "5.00 – 5.99", classification: "Pass Division", honors: "Minimum Passing Standard" },
      { ogpa: "Below 5.00", classification: "Fail / Re-appear", honors: "Must clear course in supplementary examination" }
    ]
  },

  academicProbation: "A student who secures an OGPA of less than 5.00 at the end of any semester shall be placed on academic probation. Failure to overcome probation within the maximum permitted residency period will result in cancellation of admission."
};

// ============================================================================
// 5. UNDERGRADUATE (UG) GUIDELINES
// ============================================================================
export const ugGuidelinesData = {
  title: "Undergraduate Academic Guidelines & Regulations",
  items: [
    {
      heading: "Admissions & Lateral Entry",
      description: "Regular entry through AP EAPCET counseling (MPC stream) with 60% Convener quota and 40% Farmers' quota reservation. Diploma in Agricultural Engineering holders are admitted directly into the 2nd year (3rd semester) under the 15% lateral entry quota via AP ECET."
    },
    {
      heading: "Credit Load per Semester",
      description: "A student can register for a maximum of 25 credits and a minimum of 16 credits in a regular semester, except in the final semester (Student READY) or during approved makeup semesters."
    },
    {
      heading: "Academic Advisory & Mentorship System",
      description: "Each undergraduate scholar is assigned a dedicated Faculty Advisor upon admission. The advisor monitors semester course registration, reviews academic progress, counsels on elective selection, and provides career mentorship throughout the 4-year tenure."
    },
    {
      heading: "Student READY Program (8th Semester)",
      description: "The 8th semester is devoted entirely to the Student READY (Rural Entrepreneurship Awareness Development Yojana) program comprising 10 weeks of mandatory Agro-Industrial In-Plant Training, Experiential Learning Programme (ELP), and final year design project work."
    },
    {
      heading: "Code of Conduct & Anti-Ragging Strictures",
      description: "Ragging in any form inside or outside the college campus and student hostels is strictly prohibited by law. Violators face immediate suspension, rustication, and criminal prosecution under the Andhra Pradesh Prohibition of Ragging Act."
    }
  ]
};

// ============================================================================
// 6. POSTGRADUATE (PG) GUIDELINES
// ============================================================================
export const pgGuidelinesData = {
  title: "Postgraduate & Doctoral Academic Guidelines",
  items: [
    {
      heading: "Advisory Committee Constitution",
      description: "Within the first semester of admission, an Advisory Committee is constituted for every M.Tech and Ph.D scholar comprising: Major Advisor (Chairperson from student's department), Minor Advisor, Supporting Department Member, and the Dean's Nominee."
    },
    {
      heading: "Program of Research (PP-1, PP-2 & PG-3)",
      description: "The student must formulate and defend the research problem and synopsis (PP-1 & PP-2) before the Advisory Committee and departmental faculty. Approval by the Dean of Post Graduate Studies is mandatory prior to commencement of field/laboratory investigations."
    },
    {
      heading: "Qualifying Comprehensive Examination",
      description: "After completing at least 75% of prescribed coursework, students must clear the Comprehensive Written Examination followed by an Oral Comprehensive Viva-Voce conducted with an appointed External Examiner."
    },
    {
      heading: "Pre-Thesis Submission Colloquium",
      description: "A minimum of 3 months prior to final thesis submission, the candidate must deliver an open pre-submission seminar (Colloquium) detailing research results and statistical inferences in the presence of faculty and scholars."
    },
    {
      heading: "Mandatory Publications for Degree Award",
      description: "Ph.D scholars must show documentary evidence of at least 2 accepted/published research papers in NAAS-rated peer-reviewed journals, and M.Tech scholars must have at least 1 manuscript submitted/accepted."
    }
  ]
};

// ============================================================================
// 7. THESIS PRESENTATION GUIDELINES (ANGRAU 2019 Booklet)
// ============================================================================
export const thesisGuidelinesData = {
  title: "ANGRAU Guidelines for Thesis Presentation",
  documentSource: "Post Graduate Degree Programme Guidelines for Thesis Presentation (ANGRAU 2019)",
  issuedBy: "Dean of Post Graduate Studies, ANGRAU, Lam, Guntur",
  
  physicalSpecs: {
    paper: "Executive Bond paper (A4 size: 210 mm x 297 mm), 75 to 85 GSM, pure white.",
    margins: "Left Margin: 4.0 cm (1.5 inches) for binding; Right Margin: 2.0 cm (0.8 inches); Top Margin: 2.0 cm; Bottom Margin: 2.0 cm.",
    font: "Times New Roman. Main Body: 12 pt; Table content & footnotes: 10–11 pt; Chapter Titles: 14 pt bold UPPERCASE; Section Headings: 12 pt bold Title Case.",
    spacing: "1.5 line spacing throughout main text. Single line spacing for Abstract, block quotations, and multi-line table headers.",
    pagination: "Preliminary pages numbered with lower-case Roman numerals (i, ii, iii...) at bottom center. Main text numbered with Arabic numerals (1, 2, 3...) at top right corner, starting with Chapter I.",
    bindingColor: "Maroon Rexin Hard-Bound Binding with golden embossed letters for Agricultural Engineering & Technology (Green for Agriculture; Blue for Community Science).",
    copiesRequired: "Triplicate hardbound copies for submission (Central Library, Campus Library, Department Library) plus digital PDF on CD-ROM."
  },

  arrangementOfParts: [
    { seq: "1", part: "Title Page", desc: "Includes university emblem, exact title, student's full name, I.D. No., degree sought, department name, college name, and year of submission (as per Appendix A)." },
    { seq: "2", part: "Declaration by Student", desc: "Formal declaration stating the thesis is an authentic record of original research carried out under the supervisor's guidance and has not been submitted elsewhere (Appendix B)." },
    { seq: "3", part: "Certificate of Advisory Committee", desc: "Duly signed certificate by Chairperson, Co-Chairperson, Member, and Dean's Nominee approving the thesis submission (Appendix C)." },
    { seq: "4", part: "Acknowledgements", desc: "Brief, dignified expression of gratitude to major guide, committee, laboratory assistants, funding agencies, and family." },
    { seq: "5", part: "Table of Contents", desc: "Complete list of chapters, sections, sub-sections with corresponding starting page numbers." },
    { seq: "6", part: "List of Tables & Figures", desc: "Separate tabular registers detailing Table number, exact title, and page number; followed by List of Figures / Plates / Charts." },
    { seq: "7", part: "List of Symbols and Abbreviations", desc: "Alphabetical definitions of all mathematical notations, Greek letters, acronyms, and SI measurement units." },
    { seq: "8", part: "Abstract", desc: "Concise summary of ~500 words, single spaced, summarizing background, objectives, methodology, key findings, and practical recommendations (English and Telugu translation optional)." },
    { seq: "9", part: "Chapter I: Introduction", desc: "Statement of problem, socio-economic relevance, agrarian context, research hypotheses, and specific concise objectives." },
    { seq: "10", part: "Chapter II: Review of Literature", desc: "Critical appraisal and synthesis of past national and international research, grouped chronologically or thematically." },
    { seq: "11", part: "Chapter III: Material and Methods", desc: "Exhaustive description of experimental sites, climate, materials, fabrication tools, experimental design, instrumentation, calibration, and statistical analytical software." },
    { seq: "12", part: "Chapter IV: Results and Discussion", desc: "Objective presentation of findings via tables and graphics, supported by rigorous scientific interpretation and comparison with cited literature." },
    { seq: "13", part: "Chapter V: Summary and Conclusions", desc: "Salient findings of the study, technological breakthroughs, practical recommendations for farmers/industry, and suggested avenues for future investigations." },
    { seq: "14", part: "Literature Cited (References)", desc: "Author-year system arranged alphabetically by senior author's surname. Hanging indent of 0.5 inch (1.27 cm). Strict conformance to ANGRAU citation format." },
    { seq: "15", part: "Appendices", desc: "Raw observation tables, ANOVA calculations, instrument calibration charts, survey questionnaires, and copies of published research papers." }
  ],

  citationExamples: {
    journalArticle: "Rao, P.V.K., Reddy, B.S., and Baig, M.S. 2023. Energy audit and optimization of paddy combine harvesters in coastal Andhra Pradesh. Journal of Agricultural Engineering (India). 60(2): 112–124.",
    book: "Michael, A.M. 2008. Irrigation: Theory and Practice. Second Edition. Vikas Publishing House Pvt. Ltd., New Delhi. pp. 450–475.",
    bulletinOrGovt: "ICAR. 2024. Guidelines and Course Outlines of B.Tech (Ag. Engg.) as per VI Deans' Committee. Indian Council of Agricultural Research, New Delhi. pp. 1–180."
  }
};

// ============================================================================
// 8. ANTI-PLAGIARISM REGULATIONS (ANGRAU Academic Council Res. No. 2920)
// ============================================================================
export const antiPlagiarismPolicyData = {
  title: "ANGRAU Anti-Plagiarism Regulations & Academic Integrity Policy",
  resolutionNo: "Resolution No. 2920 of the 101st Meeting of the Academic Council",
  regulatoryCompliance: "University Grants Commission (Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions) Regulations, 2018",
  effectiveDate: "Applicable to all Master's Theses, Doctoral Dissertations, Project Reports, and Research Publications across ANGRAU constituent colleges.",
  
  similarityLimit: "Maximum Permissible Similarity Index: <= 10%",
  softwareUsed: "URKUND / Turnitin plagiarism detection tool through INFLIBNET Centre.",

  permissibleExclusions: [
    "All quoted work reproduced with all necessary permissions and/or proper scholarly attribution.",
    "All references, literature cited, bibliography, table of contents, preface, acknowledgements, and title page.",
    "Generic terms, common agrarian laws, standard mathematical symbols, equations, scientific nomenclature, and well-established statistical equations.",
    "Common knowledge or coincidental matches up to 14 consecutive words."
  ],

  penaltyLevels: [
    {
      level: "Level 0",
      range: "Similarities up to 10%",
      label: "Permissible (Minor Similarity)",
      studentPenalty: "No penalty. Eligible for certificate of originality and formal thesis evaluation.",
      facultyPenalty: "No action required."
    },
    {
      level: "Level 1",
      range: "Similarities above 10% to 40%",
      label: "Low Level Plagiarism",
      studentPenalty: "Student shall be asked to revise the script and resubmit within a period not exceeding 6 months. Defense viva-voce is deferred.",
      facultyPenalty: "Manuscript must be withdrawn immediately from publisher."
    },
    {
      level: "Level 2",
      range: "Similarities above 40% to 60%",
      label: "Moderate Level Plagiarism",
      studentPenalty: "Debarred from submitting revised thesis for a period of one (1) full year. Loss of academic semester.",
      facultyPenalty: "Manuscript withdrawn, denial of one annual increment, and barred from supervising any M.Tech/Ph.D student for two (2) years."
    },
    {
      level: "Level 3",
      range: "Similarities above 60%",
      label: "Severe Academic Fraud",
      studentPenalty: "Registration for the degree programme shall be CANCELLED permanently. Expulsion from the university.",
      facultyPenalty: "Manuscript withdrawn, denial of two successive increments, barred from supervision for 3 years; repeat offense leads to dismissal from service."
    }
  ],

  integrityCommittees: [
    {
      panel: "DAIP (Departmental Academic Integrity Panel)",
      composition: "Head of the Department (Chairperson), Senior Faculty Member, Nominee from another department.",
      mandate: "Conducts initial plagiarism screening on synopsis and thesis drafts; assesses similarity reports generated by plagiarism detection software."
    },
    {
      panel: "IAIP (Institutional Academic Integrity Panel)",
      composition: "Dean of Post Graduate Studies (Chairperson), Senior Professor nominated by Vice-Chancellor, External Domain Expert, University Librarian.",
      mandate: "Apex appellate authority for investigating academic integrity violations, hearing appeals, and recommending statutory penalties to the Vice-Chancellor."
    }
  ]
};

