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
  title: "Examinations – Evaluation System",
  authority: "ANGRAU Academic Regulations & Controller of Examinations",
  attendanceRule: "Minimum 75% attendance in theory and practical classes separately is mandatory to appear for semester end examinations. Condonation up to 10% (i.e. between 65% and 74%) may be granted by the Associate Dean solely on valid medical grounds.",

  // Undergraduate Programme: B.Tech (Ag Engg)
  ugEvaluation: {
    programme: "UNDERGRADUATE PROGRAMME: B.Tech (Ag Engg)",
    generalPrinciples: "The evaluation of the student in a course shall be based on his/ her performance in various kinds of examinations, records, class work and other types of exercises. The detailed course outlines in each course shall be prepared by the concerned teacher(s) in consultation with the University Head of the Department/ Head of the Department, which will be made available to the students during the first week of the semester. A schedule of the mid-semester examinations of the academic programme shall be prepared by the Associate Dean and notified to the students at the beginning of each semester.",
    internalEvaluation: {
      title: "Internal Evaluation",
      midSemester: {
        name: "Mid-Semester Examination",
        timing: "Conducted after 50% of the working days are over in a semester.",
        duration: "One and half (1 ½) hours",
        marks: 50,
        rules: "The answer scripts of mid-semester examinations shall be evaluated by the concerned course teacher and shall be shown to the students. The students shall have the option to request the teacher for clarification of any doubts in scoring, provided that such clarification is requested for when the answer scripts are made available to them. This shall not apply for final examinations."
      },
      finalPractical: {
        name: "Final Practical Examination",
        timing: "Conducted in the last practical class of the semester.",
        totalMarks: 50,
        breakdown: [
          { component: "Continuous evaluation of practical classes including class work and record", marks: 25 },
          { component: "Final practical examination including viva-voce examination", marks: 25 }
        ]
      }
    },
    externalEvaluation: {
      title: "External Evaluation",
      semesterFinalTheory: {
        name: "Semester Final Theory Examinations",
        authority: "Conducted in the theory portion of each course by the University at the end of each semester.",
        duration: "Two and half (2 ½) hours",
        marks: 100,
        confidentialWorkflow: "On the last day of semester final theory examinations, the Associate Dean shall send all the coded answer scripts of each course, year of study wise in sealed cover to the designated evaluation centre (constituent colleges in the University) and shall be evaluated by the course teacher of the evaluation center. After evaluation by the concerned course teacher, the marks award list of students shall be sent to the respective college by the Associate Dean of the evaluation centre."
      }
    }
  },

  // Postgraduate Programmes: M.Tech. & Ph.D.
  pgEvaluation: {
    programme: "POSTGRADUATE PROGRAMMES: M.Tech. & Ph.D.",
    generalPrinciples: "During the semester, teacher in charge of a course shall hold different kinds of tests and assign to the student’s laboratory, library or field work. The students may also participate in seminars and submit term paper. The marks to be allotted between the theory and practical work shall be in the proportion of their respective credit hours. The weightage for theory and practical examinations is as follows:",
    weightageTable: [
      {
        theoryItem: "Assignment / term paper / seminars (internal evaluation)",
        theoryMarks: 20,
        practicalItem: "Record and class work (internal evaluation)",
        practicalMarks: 50
      },
      {
        theoryItem: "One mid-term examination (internal evaluation)",
        theoryMarks: 30,
        practicalItem: "Final examination (internal evaluation)",
        practicalMarks: 50
      },
      {
        theoryItem: "Semester final examination of 3 hrs (external evaluation)",
        theoryMarks: 50,
        practicalItem: "—",
        practicalMarks: "—"
      }
    ],
    theoryTotal: 100,
    practicalTotal: 100,
    evaluationStandard: "Each course may be evaluated @ 50 marks for each credit which may be finally reduced to 100 for awarding grade. In order to pass, a PG student must secure a minimum of 50% marks in both theory and practical final examination."
  },

  // Examination Schedules & Re-examination Rules
  schedulesAndRules: {
    title: "Examination Schedules & Academic Progression",
    points: [
      "Midterm examination after about 50 days from the commencement of the semester.",
      "Semester final theory and practical examination at the end of the semester.",
      "A PG student getting a grade less than 6.00/10.00 in any course will be deemed to have failed in that course. However, student may not be required to study that course by repetition, but he/she may appear all examinations including semester final examination in that course when conducted next according to the regular schedule.",
      "In case of students who have successfully completed all courses except failed course, the Associate Dean may permit re-examination during final semester (4th semester for M.Tech./M.Sc. / 5th semester for Ph.D.) or any subsequent semesters."
    ]
  },

  // Minimum Credit Requirements for Master's and Doctoral Programmes
  minimumCreditRequirement: {
    title: "Minimum Credit Requirement",
    table: [
      { subject: "Major", masters: "20", doctoral: "15" },
      { subject: "Minor", masters: "09", doctoral: "08" },
      { subject: "Supporting", masters: "05", doctoral: "05" },
      { subject: "Seminar", masters: "01", doctoral: "02" },
      { subject: "Research", masters: "20", doctoral: "45" },
      { subject: "Total credits", masters: "55", doctoral: "75", isTotal: true },
      { subject: "Compulsory Non-credit courses", masters: "06", doctoral: "06", isNonCredit: true }
    ]
  },

  // Qualifying / Comprehensive Examination & Thesis Defense
  qualifyingAndThesis: {
    title: "Qualifying / Comprehensive Examination & Thesis Evaluation",
    eligibility: "After completion of all core courses (for M.Sc./M.Tech students) and 75% of approved credit load, a qualifying / comprehensive examination comprising of both written and oral components may be conducted. In order to be eligible, the student should have secured an OGPA of 6.50.",
    writtenExam: "The written test will precede the oral. 50% at Master’s degree level and 70% at Ph.D. level shall be the minimum marks for passing the written qualifying examination.",
    oralExam: "The oral examination shall be conducted by the student's Advisory Committee and an External Examiner either from another campus of this university or outside as nominated by the Dean PG Studies.",
    thesisSubmission: "A student shall submit thesis for Master’s degree and Ph.D. degree after completion of coursework requirement, the required number of research credits, and after passing the qualifying examination successfully.",
    externalEvaluation: "The thesis submitted by the student shall be sent to an External Examiner for evaluation. For the Ph.D. degree, the thesis shall be sent for evaluation to two (2) External Examiners from outside the University.",
    degreeAward: "A student of Master’s degree and Ph.D. degree programme shall be eligible for the award of degree after completion of final oral (thesis) examination satisfactorily."
  },

  // Grading System (OGPA)
  gradingSystem: {
    scale: "10.00 Point Scale (OGPA - Overall Grade Point Average)",
    passingGradePoint: "5.00 out of 10.00 for UG; 6.00 out of 10.00 for PG courses (OGPA 6.50 for qualifying/degree).",
    classifications: [
      { ogpa: "8.50 – 10.00", classification: "First Class with Distinction", honors: "Eligible for University Gold Medals & Merit Certificates" },
      { ogpa: "7.00 – 8.49", classification: "First Class", honors: "Standard Professional First Division" },
      { ogpa: "6.00 – 6.99", classification: "Second Class", honors: "Satisfactory Degree Completion" },
      { ogpa: "5.00 – 5.99", classification: "Pass Division (UG Only)", honors: "Minimum UG Passing Standard" },
      { ogpa: "Below 5.00 (UG) / Below 6.00 (PG)", classification: "Fail / Re-appear", honors: "Must clear course in supplementary examination" }
    ]
  },

  academicProbation: "A student who secures an OGPA of less than 5.00 at the end of any semester shall be placed on academic probation. Failure to overcome probation within the maximum permitted residency period will result in cancellation of admission."
};

// ============================================================================
// 5. UNDERGRADUATE (UG) RULES & REGULATIONS (The ANGRAU Regulations, 2016)
// Academic Regulations Governing Undergraduate Programmes (as amended upto 25-11-2017)
// ============================================================================
export const ugRegulationsData = {
  title: "Academic Regulations Governing Undergraduate Programmes",
  shortTitle: "The ANGRAU Regulations, 2016 (As amended upto 25-11-2017)",
  programmesGoverned: "B.Tech. (Agricultural Engineering), B.Tech. (Food Technology), B.Sc. (Hons) Agriculture, and B.Sc. (Hons) Community Science",
  authority: "Acharya N.G. Ranga Agricultural University (ANGRAU), Lam, Guntur, Andhra Pradesh",
  forewordBy: "Dr. V. Damodara Naidu, Vice-Chancellor",
  statutoryReference: "Enacted in exercise of powers conferred under Clause (d) of Subsection-2 of Section 22 of ANGRAU Act 1963 (Act No. 24 of 1963) read with Statute No. 21 of the First Statutes.",

  definitions: [
    { term: "Academic Year", desc: "June to April ordinarily (except in the year of admission) consisting of two semesters." },
    { term: "Semester Duration", desc: "Minimum duration of 110 working days, consisting of 95 instructional days and 15 examination days (except admission year). Short semesters require proportionate class increases." },
    { term: "Credit Hour", desc: "One hour lecture or 2 to 3 hours of laboratory or field practical each week in a semester (known as semester credit or credit)." },
    { term: "Course & Grade Point", desc: "Course is a unit of instruction. Grade point is the marks secured divided by 10 (10-point scale upto 1 decimal place). Credit point is credit hours × grade point." },
    { term: "GPA & OGPA Precision", desc: "GPA is quotient of total credit points by total credit hours taken in that semester (corrected to 1 decimal place). OGPA is cumulative credit points divided by all completed credits (corrected to 2 decimal places)." },
    { term: "Semester Final Examinations", desc: "Conducted by the University at the end of each semester in the theory portion of the course." }
  ],

  advisorySystem: {
    title: "Advisor System & Student Mentorship (Regulation 5.0)",
    batchAssignment: "Students on admission are divided into convenient batches by the Associate Dean and assigned to a dedicated teacher designated as 'Advisor'.",
    responsibilities: [
      "Assists each student immediately after enrolment in planning their academic study programme and filling registration cards.",
      "Establishes and fosters close personal relationship through periodical meetings (both batch and individual) to review study programmes and resolve difficulties.",
      "Recommends remedial actions in consultation with course teachers and the Associate Dean.",
      "Maintains permanent record in 'Registration & Award Book' (Format-1) containing past history, courses registered, exams appeared, grades obtained, advisory meetings log, and conduct/disciplinary records."
    ]
  },

  registrationAndStudyLoad: {
    title: "Registration & Semester Study Load (Regulation 6.0)",
    firstSemester: "Orientation and registration programme conducted by Associate Dean; attendance reckoned from the date of registration.",
    subsequentSemesters: [
      "In-person registration producing identity card at registration centre on the scheduled day.",
      "Students with backlogs can register total backlog courses plus allowable fresh courses offered for that batch.",
      "Payment of college, department, hostel, and library dues/arrears must precede registration."
    ],
    lateRegistration: "Late fee of ₹10/- for first 3 working days from the next day of scheduled registration, and thereafter ₹100/- per day for a further period of 7 days (total 10 working days late registration window).",
    maxStudyLoad: "The total study load for a student shall NOT exceed 23 credit hours per semester (includes fresh courses and backlog courses registered for want of attendance)."
  },

  attendanceRules: {
    title: "Attendance Requirements & Condonation Rules (Regulation 7.0)",
    minAttendance: "75% minimum attendance separately in theory and practicals. Shortage below 75% in either treats course registration as cancelled.",
    medicalRelaxation: "Condonation up to 10% (i.e. minimum 65% for theory and practical separately) is permitted ONLY on medical grounds in case of indoor hospitalization.",
    firstYearCancellation: "If a 1st year UG student fails to register or fails to put in at least 75% attendance in all courses, admission stands cancelled. However, if student secured at least 60% attendance, they may apply within 7 calendar days from last day of instruction with proof to Associate Dean. A high-level committee (Associate Dean, Senior Professor, Academic Advisor, Student Advisor, Medical Officer) evaluates exceptional merit.",
    temporaryDiscontinuation: "Permitted after completing 1st semester with prior permission of Associate Dean within 1 month. Maximum break cannot exceed 4 semesters. Re-admission application at least 1 month prior to semester commencement. Leaving with T.C. cancels readmission eligibility permanently."
  },

  evaluationAndExaminations: {
    title: "Evaluation System, Examinations & Spot Valuation (Regulation 8.0)",
    outlinesAndSchedule: "Detailed course outlines prepared in consultation with HOD and distributed in Week 1. Associate Dean notifies mid-semester schedule at commencement.",
    midSemesterExam: {
      timing: "Conducted by course teacher after 50% working days are completed in a semester.",
      duration: "One and half (1 ½) hours duration.",
      marks: "50 marks. Answer scripts evaluated and shown directly to students with clarification of scoring doubts.",
      specialReExam: "No condonation for absence; however, special re-examination is arranged within 2 weeks for students prevented by serious illness or accident.",
      mandatoryClause: "Unless a student appears for the mid-semester examination, he/she shall NOT be permitted to appear for the semester final theory and practical examinations!"
    },
    finalTheoryExam: {
      duration: "Two and half (2 ½) hours duration (100 marks), conducted by the University.",
      preparationHolidays: "Two (2) preparation holidays (inclusive of public holiday) given before commencement of final theory examinations.",
      spotValuation: "In B.Tech (Agricultural Engineering), spot valuation procedure is strictly followed. Coded scripts jumbled and sent in sealed cover to nominated evaluation centre; valuation completed within 6 working days.",
      scribeProvision: "Students with 60% physical disability allowed a scribe on request."
    },
    marksRatio: {
      creditEvaluation: "Each credit is evaluated for 50 marks. Theory and practical marks apportioned to credit ratio.",
      theoryProportion: "60 : 40 ratio between Semester Final Common Theory Examination and Mid-Semester Examination.",
      practicalProportion: "1 : 1 ratio (50 : 50) between continuous internal practical evaluation (records/class work) and final practical examination with viva-voce.",
      studentReady: "Evaluated according to guidelines in Student READY / RAWEP / Industrial Attachment / ELP manuals."
    },
    unfairMeansPenalty: [
      "Mid-Semester Exam: Student found copying deemed to have failed in that course.",
      "Semester Final Exam: Deemed to have failed in ALL courses registered/appeared in that semester and barred from remaining exams.",
      "Serious Malpractice (abusing/threatening/assaulting invigilator): Failed in all semester courses + debarred for succeeding semester or permanently by Vice-Chancellor."
    ],
    scrutinyOfGrades: "Application to Registrar within 1 week of grade announcement for retotaling of marks or calculation of grade points with prescribed fee."
  },

  academicProgression: {
    title: "Academic Status, Passing Standards & Promotion Rules (Regulation 9.0)",
    passingStandard: [
      "Minimum 50% marks in both final theory and final practical examinations separately for a pass.",
      "Passing Grade Point: 5.00 out of 10.00. Grade below 5.0 is awarded 'F' (Fail).",
      "Physically Challenged (Handicapped) Students: Reduction of pass marks by 10% in each subject is allowed.",
      "Option to re-write mid-semester examination in the same semester when next taking the final examination."
    ],
    finalYearSpecialReExam: "For final year B.Tech (Agricultural Engineering) students, special re-examination is conducted within ONE MONTH of college reopening after vacation in not more than three (3) failed courses, provided passing them completes graduation requirements.",
    reExamFee: "₹100/- per course (maximum ₹500/-) payable within 40 days from date of commencement of subsequent semester.",
    yearToYearPromotion: [
      {
        stage: "Promotion to Second Year",
        rule: "Automatic promotion irrespective of the number of backlog / failed courses in the first year."
      },
      {
        stage: "Promotion to Third Year",
        rule: "Must have passed ALL courses of First Year, and must NOT have more than 6 backlog courses of Second Year."
      },
      {
        stage: "Promotion to Fourth Year",
        rule: "Must have passed ALL courses of Second Year, and must NOT have more than 6 backlog courses of Third Year."
      }
    ]
  },

  graduationRequirements: {
    title: "Graduation Requirements & Degree Classification (Regulation 10.0)",
    residentialLimits: [
      {
        category: "Regular B.Tech (Ag Engg) Students (4-Year Programme)",
        minResidential: "8 Semesters (4 Years)",
        maxDuration: "14 Semesters (7 Academic Years)"
      },
      {
        category: "Lateral Entry Diploma Students (Direct 2nd Year via ECET)",
        minResidential: "6 Semesters (3 Years)",
        maxDuration: "12 Semesters (6 Academic Years)"
      }
    ],
    completionCriteria: "Satisfactory completion of all prescribed courses, Student READY programmes (In-Plant Industrial Training / ELP / Projects), and securing minimum cumulative OGPA of 5.00 / 10.00.",
    degreeClassifications: [
      { classification: "First Class with Distinction", ogpa: "8.00 and above / 10.00", badge: "badge-gold" },
      { classification: "First Class", ogpa: "7.00 to 7.99 / 10.00", badge: "badge-navy" },
      { classification: "Second Class", ogpa: "6.00 to 6.99 / 10.00", badge: "badge-slate" },
      { classification: "Pass Division", ogpa: "5.00 to 5.99 / 10.00", badge: "badge-slate" },
      { classification: "Fail / Incomplete", ogpa: "Below 5.00 / 10.00", badge: "badge-red" }
    ],
    transcriptNote: "Class / division shall not be printed on the degree certificate parchment, but is officially stated as a footnote in the Consolidated Transcript of Marks."
  },

  transferPolicy: {
    title: "Inter-College Transfer Policy (Regulation 12.0)",
    rules: [
      "No transfer allowed during the first year of study.",
      "Transfer requests entertained only at the beginning of the academic year.",
      "Applicant applies to Associate Dean who forwards with specific remarks to Registrar for Vice-Chancellor approval.",
      "Transfer of students from other universities to ANGRAU is strictly prohibited."
    ]
  },

  registrationAndAwardBook: {
    title: "Format-1: Registration & Award Book (Regulation 5.0)",
    desc: "Permanent official academic ledger maintained by the Faculty Advisor tracking student identification, semester registration, re-examinations, GPA/OGPA, advisory meetings log, and conduct/discipline records across all semesters."
  }
};

export const ugGuidelinesData = ugRegulationsData;

// ============================================================================
// 6. POSTGRADUATE (PG) RULES & REGULATIONS (ANGRAU 1980 / Amended upto 2016)
// Compiled by: Dr. R. Veeraraghavaiah, Dr. T. Srinivas, Dr. T. Venkata Sridhar
// ============================================================================
export const pgRegulationsData = {
  title: "Rules and Regulations: Post-Graduate Degree Programme",
  subtitle: "Official Statutory Regulations Governing Master's (M.Tech) & Doctoral (Ph.D) Degree Programmes",
  authority: "Acharya N.G. Ranga Agricultural University (ANGRAU), Lam, Guntur - 522 034",
  compiledBy: "Dr. R. Veeraraghavaiah, Dr. T. Srinivas, Dr. T. Venkata Sridhar",
  amendmentStatus: "Post Graduate Studies Regulations, 1980 (As amended upto July, 2016)",
  statuteReference: "Enacted in exercise of powers conferred under Section 40, read with Clause (d) of Sub-Section (2) of Section 22 of Andhra Pradesh Agricultural University Act, 1963.",

  definitions: [
    { term: "Academic Year", desc: "June to April ordinarily, consisting of two semesters. A uniform national academic calendar is strictly enforced with all PG courses commencing simultaneously on 1st August of every year (Academic Council Resoln. No. 2461)." },
    { term: "Credit Hour / Semester Credit", desc: "Each credit hour represents 1 hour lecture or 2 to 3 hours of laboratory or field practicals each week in a semester. Classes are proportionately increased for shortened terms in admission year." },
    { term: "Semester Duration", desc: "An academic term consisting of not less than 21 weeks, equivalent to 85 to 100 instructional days (except in the year of admission)." },
    { term: "GPA & OGPA Precision", desc: "Grade Point Average (GPA) is computed on a 10.00-point scale and corrected to one decimal place. Overall Grade Point Average (OGPA) reflects cumulative academic performance across all completed semesters and is corrected to two decimal places." },
    { term: "Admissions & Late Registration", desc: "No candidate shall be admitted after expiry of 15 working days from semester commencement. During 2nd and subsequent semesters, late registration with prescribed fee is permitted up to 10 working days, with attendance reckoned from day one." }
  ],

  advisorySystem: {
    title: "Advisor System & Advisory Committee Constitution (Regulation 6)",
    proposalsTimeline: "Submitted in triplicate to Dean of Post Graduate Studies within 6 weeks from commencement of 1st semester (PG Form 1).",
    programmeOfStudies: "Submitted by the end of the 1st semester (PG Form 2).",
    committeeComposition: [
      {
        level: "Master's Degree (M.Tech)",
        membersCount: "3 Members",
        composition: "Two (2) faculty members or accredited teachers from the Major Field (including Major Advisor as Chairperson) + One (1) member representing the Minor Field."
      },
      {
        level: "Doctoral Degree (Ph.D)",
        membersCount: "Minimum 4 Members",
        composition: "Two (2) from Major Field (including Major Advisor as Chairperson) + One (1) from Minor Field + One (1) from Supporting Departments (Academic Council Resoln. Nos. 2444 & 2461)."
      }
    ],
    accreditationRules: [
      "Professors, Deans, Directors, Principal Scientists, and Associate Professors with Ph.D who have guided at least 2 M.Sc/M.Tech students or completed 3 years of service after Ph.D are accredited to teach and guide M.Tech & Ph.D scholars.",
      "Assistant Professors with Ph.D degree or 5 years of teaching/research/extension experience after Master's degree are accredited to teach & guide Master's degree students.",
      "Advisement Cap: Normally, not more than 4 PG students (total of Master's and Ph.D combined) shall be guided by any teacher at any one time (students who completed research credits are excluded from this count)."
    ],
    changeInCommittee: "If Major Advisor is transferred within ANGRAU, he/she may continue to guide if feasible. If the Chairperson resigns or retires, guidance may continue for up to 3 months (extension beyond 3 months requires approval of the Vice-Chancellor). If an Advisory Committee member is away > 3 months or transferred, a substitute member is appointed immediately by Dean PGS."
  },

  creditRequirements: {
    title: "Minimum Statutory Credit Requirements (Regulation 8.2)",
    table: [
      { subject: "Major Subject", masters: "20 Credits", doctoral: "15 Credits", note: "Core parent engineering department in which student is admitted" },
      { subject: "Minor Subject", masters: "09 Credits", doctoral: "08 Credits", note: "Closely related engineering/allied discipline (1 or more for Master's; 1 for Ph.D)" },
      { subject: "Supporting Subject", masters: "05 Credits", doctoral: "05 Credits", note: "Relevant supporting sciences/mathematics essential for thesis research" },
      { subject: "Credit Seminar", masters: "01 Credit", doctoral: "02 Credits", note: "Master's: 1 in Major Field; Ph.D: 1 in Major Field + 1 in Minor Field" },
      { subject: "Research Work (Thesis)", masters: "20 Credits", doctoral: "45 Credits", note: "Original investigation and dissertation defense" },
      { subject: "Total Academic Credits", masters: "55 Credits", doctoral: "75 Credits", note: "Minimum prescribed graduation requirement" },
      { subject: "Compulsory Non-Credit Courses", masters: "06 Courses (PGS 501–506)", doctoral: "06 Courses (Exempt if completed in Master's)", note: "Evaluated on min 75% attendance + term paper as Satisfactory/Unsatisfactory" }
    ],
    semesterLoad: {
      max: "Maximum: 18 credits per semester (excluding non-credit compulsory courses; 15+1 for marginal adjustments).",
      min: "Minimum: 10 credits per semester (During first 2 semesters, students must register minimum 10 course credits excluding research).",
      finalSemester: "Students permitted to register < 10 credits during last semester if permissible credit load is satisfied."
    }
  },

  timeLimitsAndResidency: {
    title: "Minimum Residential Requirements & Maximum Time Limits (Regulation 8.6)",
    limits: [
      { programme: "Master's Degree (M.Tech)", minResidency: "4 Semesters", maxTime: "4 Years (from date of admission)" },
      { programme: "Doctoral Degree (Ph.D)", minResidency: "6 Semesters", maxTime: "6 Years (from date of admission)" }
    ],
    rules: [
      "Failure to complete graduation requirements within maximum time limit (4 years for M.Tech; 6 years for Ph.D) results in automatic cancellation of admission.",
      "Extension for Ph.D: Permitted up to 1 year (1 to 2 semesters) on full-time basis only if employer sanctions study leave; application must be submitted 3 months in advance in PG Form 14.",
      "Ph.D 3-Year Thesis Expiry: If Ph.D thesis is not submitted within 3 years after passing the Qualifying Examination, the candidate must appear for a fresh comprehensive examination."
    ]
  },

  discontinuationAndResumption: {
    title: "Temporary Discontinuation, Resumption & Employment (Regulations 8.7 & 8.8)",
    points: [
      "Discontinuation is permitted ONLY ONCE in the entire PG programme, and strictly after completing at least two (2) semesters of study. Discontinuation before completing 2 semesters results in cancellation of admission.",
      "Written application must be submitted to Associate Dean within 30 calendar days of discontinuation (late fee of ₹100/month up to 5 months on genuine medical grounds).",
      "Resumption of studies must occur within 4 semesters for Master's or within 6 semesters for Ph.D from semester of discontinuation (PG Form 12-A).",
      "For Ph.D scholars, if duration of break exceeds 4 semesters, the Advisory Committee must conduct a fresh comprehensive examination to decide deficiencies.",
      "Employment During Study (Clause 8.8): Permitted to discontinue and rejoin if employment opportunity arises; student must execute a bond with adequate sureties to refund all stipend/financial assistance received if failing to submit thesis within prescribed limit."
    ]
  },

  scholasticProbationAndPassing: {
    title: "Academic Status, Scholastic Probation & Dismissal (Regulation 13)",
    standards: [
      { metric: "Minimum Passing Standard", value: "GPA of 6.50 / 10.00 at end of 1st semester; OGPA of 6.50 / 10.00 during subsequent semesters." },
      { metric: "Scholastic Probation", value: "GPA/OGPA between 6.00 and 6.49 places the student on Scholastic Probation during the subsequent semester." },
      { metric: "Repeat Probation or Withdrawal", value: "If a student on Scholastic Probation again fails to secure OGPA 6.50, Dean PGS decides whether to allow probation for a 2nd time or withdraw student from University." },
      { metric: "Cancellation of Admission", value: "Failure to secure GPA of 6.50 at end of 1st semester or OGPA 6.00 in subsequent semesters results in automatic cancellation of admission." },
      { metric: "Improvement Re-examination", value: "PG students with GPA/OGPA < 6.50 may re-appear in courses with grade < 6.50 to elevate OGPA to 6.50 or above." }
    ]
  },

  qualifyingExamination: {
    title: "Qualifying (Comprehensive) Examination (Regulation 16)",
    eligibility: "Completion of all core courses (Master's) and 75% of approved coursework with minimum cumulative OGPA of 6.50.",
    format: [
      {
        level: "Master's Degree (M.Tech)",
        writtenDetails: "One (1) written paper of 3 hours duration covering core courses. Passing standard: 50% minimum marks.",
        oralDetails: "Oral qualifying exam covering core and elective courses conducted by Advisory Committee + External Examiner nominated by Dean PGS."
      },
      {
        level: "Doctoral Degree (Ph.D)",
        writtenDetails: "Two (2) written papers each of 3 hours duration (Paper I: Major Field; Paper II: Minor Fields). Passing standard: 70% minimum marks.",
        oralDetails: "Oral examination conducted by Advisory Committee + External Examiner nominated by Dean PGS."
      }
    ],
    attemptsRule: "Maximum of 3 attempts permitted. Re-examination cannot take place earlier than 3 months after previous test. A candidate failing for the third time shall not continue as a student in the University."
  },

  thesisRegulations: {
    title: "Thesis Submission, Adjudication & Mandatory Publications (Regulations 17 & 18)",
    synopsisTimeline: "Research synopsis (PG Form 3) submitted by end of 2nd semester (Master's) or 3rd semester (Ph.D). Mandatory time gap between synopsis and thesis submission is 1 semester for Master's and 2 semesters for Ph.D.",
    mandatoryPublications: [
      "Master's Degree: Must submit at least one (1) research paper for publication with proof from journal editor along with thesis submission.",
      "Doctoral Degree (Ph.D): Must submit at least two (2) research papers for publication with proof of submission from journal editor along with thesis submission."
    ],
    externalAdjudication: [
      {
        level: "Master's Thesis Evaluation",
        desc: "Evaluated by one (1) External Examiner outside the college (report required within 3 weeks). Final oral thesis viva-voce conducted by Advisory Committee + Head of Department."
      },
      {
        level: "Ph.D Dissertation Evaluation",
        desc: "Evaluated by two (2) External Examiners outside the University (selected from panel of 8 eminent scientists submitted in PG Form 13 two months prior). If both recommend acceptance, final oral defense is held with 1 External Examiner. If 1 examiner rejects, referred to a 3rd External Examiner."
      }
    ],
    revisionAndResubmission: "If major revision is recommended: Master's thesis resubmitted after 3 months (within 6 months); Ph.D thesis resubmitted after 6 months (within 6–12 months). Maximum 2 thesis submissions permitted; failure at second attempt permanently debars candidate from degree.",
    finalCopies: "Candidate must submit 3 hardbound copies (1 for Department, 2 + 2 CDs for University Library) along with Bound Copy Certificate (PG Form 9)."
  },

  degreeClassification: {
    title: "Eligibility for Degree Award & Class Divisions (Regulation 19)",
    divisions: [
      { division: "First Class with Distinction", ogpa: "8.50 and above / 10.00", desc: "Highest academic honor; Gold Medal & Merit Certificate eligibility" },
      { division: "First Class", ogpa: "8.00 to 8.49 / 10.00", desc: "Awarded degree with First Class division" },
      { division: "Second Class", ogpa: "6.50 to 7.99 / 10.00", desc: "Standard degree completion division" },
      { division: "Ineligible for Degree", ogpa: "Below 6.50 / 10.00", desc: "Cannot qualify for Master's or Doctoral degree award" }
    ]
  },

  publicationEthics: {
    title: "Guidelines to Prevent Unethical Practices in Research Publications (Regulation 24)",
    rules: [
      "Strict Authorship Hierarchy: For all research papers prepared on the basis of student research, authorship must strictly be in order of: 1. Student, 2. Major Advisor (Chairperson), 3. Co-Chairperson, 4. Members of Advisory Committee.",
      "Mandatory Attribution Footnote: Whenever thesis material is published, a footnote must state: 'Part of the thesis submitted for the Post Graduate degree of Acharya N.G. Ranga Agricultural University'.",
      "Departmental Routing: All research papers must be routed through Head of Department / Research Station with certification that due weightage is given to all contributors."
    ]
  },

  statutoryFormsSchedule: [
    {
      form: "PG Form 1",
      name: "Proposal for Constitution of the Advisory Committee",
      timeline: "Within 6 weeks from Commencement of the 1st Semester",
      copies: "Triplicate (to Dean of P.G. Studies)",
      workflow: "Academic Advisor (PG) → Head of Department → Associate Dean → Dean of P.G. Studies",
      purpose: "Statutory constitution of the student's advisory committee. M.Sc.: 2 from major field + 1 from minor field; Ph.D.: 2 from major + 1 minor + 1 supporting field. Maximum 4 students guided concurrently by any Chairperson."
    },
    {
      form: "PG Form 1-A",
      name: "Proposal for Change of the Advisory Committee",
      timeline: "Whenever change of Chairman/Member occurs",
      copies: "Triplicate (to Dean of P.G. Studies)",
      workflow: "Existing Chairperson/Member → Proposed Member → Head of Department → Associate Dean → Dean of P.G. Studies",
      purpose: "Proposal for change of Chairman or Member due to transfer, superannuation, or resignation within ANGRAU. Requires status of synopsis approval, willingness of proposed guide, and research progress record."
    },
    {
      form: "PG Form 2",
      name: "Proposed Programme of Studies for Post Graduate Students",
      timeline: "To be submitted to Dean PGS by end of the First Semester",
      copies: "5 Copies (Associate Dean, HoD, Chairperson, Student, Dean PGS)",
      workflow: "Student → Advisory Committee → Head of Department → Academic Advisor (PG) → Associate Dean → Dean PGS",
      purpose: "Formulation of comprehensive course work (Core, Non-core, Minor, Supporting, Compulsory Non-Credit, and Research credits). Maximum time limit for completion: M.Sc. 4 years, Ph.D. 6 years."
    },
    {
      form: "PG Form 2-A",
      name: "Proposal for Change in Programme of Course Work",
      timeline: "Temporary: within 2 weeks / withdrawal: 6 weeks; Permanent: addition by end of 2nd sem / deletion within 15 days of 3rd sem",
      copies: "Triplicate (got approved before registering courses)",
      workflow: "Student → Advisory Committee → Head of Department → Associate Dean / Dean PGS",
      purpose: "Statutory course changes. Temporary changes permitted by Associate Dean (within 2-6 weeks); permanent course additions/deletions require formal sanction of Dean of P.G. Studies."
    },
    {
      form: "PG Form 3",
      name: "Original / Revised Synopsis of Thesis / Dissertation Problem",
      timeline: "By end of 2nd Semester (M.Tech) / 3rd Semester (Ph.D)",
      copies: "Triplicate (to Dean of P.G. Studies)",
      workflow: "Student → Advisory Committee → University Head of Department → Head of Department → Associate Dean → Dean PGS",
      purpose: "Submission of research problem, objectives, brief resume of work, literature cited, and technical programme of work. Mandatory time gap between synopsis and thesis submission is 1 semester for M.Tech and 2 semesters for Ph.D. Includes plagiarism anti-duplication certificate."
    },
    {
      form: "PG Form 3-A",
      name: "Proposal for Change in Approved Synopsis / Title",
      timeline: "Prior to making changes in research execution",
      copies: "Triplicate (to Dean of P.G. Studies)",
      workflow: "Student → Advisory Committee → Head of Department → Associate Dean → Dean PGS",
      purpose: "Change in approved thesis title or technical programme. Accounts for research credits completed, weightage claimed, and research credits to be cancelled and re-registered."
    },
    {
      form: "PG Form 4",
      name: "Proposal for M.Sc. / Ph.D. Qualifying (Comprehensive Examination)",
      timeline: "To be completed before written examination in triplicate",
      copies: "Triplicate (in sealed cover to Dean PGS)",
      workflow: "Chairperson of Advisory Committee → Head of Department → Dean PGS",
      purpose: "Verification of candidate eligibility: completion of minimum 80% prescribed course work, passing all prescribed core courses, and securing required OGPA before conducting qualifying examinations."
    },
    {
      form: "PG Form 5",
      name: "Result of the Qualifying Examination (Written & Oral)",
      timeline: "Immediately after oral examination along with PG Form 4",
      copies: "Sealed Cover to Dean of P.G. Studies",
      workflow: "External Examiner + Advisory Committee + HoD (Co-opted) → Dean PGS",
      purpose: "Official statutory declaration of candidate performance (PASSED / NOT PASSED and SATISFACTORY / NOT SATISFACTORY in block letters) by examining committee and external examiner."
    },
    {
      form: "PG Form 6",
      name: "Proposal for Submission of Thesis",
      timeline: "Along with thesis submission in Department",
      copies: "Original with 2 passport photographs",
      workflow: "Student → Head of Department → Chairperson → Associate Dean → Dean PGS",
      purpose: "Comprehensive clearance: verification of course completion, OGPA, clearance of 'F' grades, convocation form, fee payment for transcript/provisional certificate, leave sanction copy, and anti-duplication certificate."
    },
    {
      form: "PG Form 7",
      name: "Report on P.G. Thesis and Final Viva-Voce Examination (CONFIDENTIAL)",
      timeline: "Immediately upon completion of final oral defense",
      copies: "Confidential official submission to Dean PGS",
      workflow: "External Examiner (Ph.D) + Advisory Committee + HoD → Chairperson → Dean PGS",
      purpose: "Final certification that thesis has been adjudicated, corrections pointed out by External Examiner incorporated, oral defense conducted, and candidate adjudged SUCCESSFUL."
    },
    {
      form: "PG Form 9",
      name: "Certificate Regarding Submission of Bound Copies of Thesis & CDs to Library",
      timeline: "After viva-voce corrections are completed",
      copies: "3 Bound Copies (1 HoD, 2 Library) + 2 CDs + 6 Copies of Abstracts",
      workflow: "Student → College Librarian → Chairperson → Head of Department → Dean PGS",
      purpose: "Mandatory library clearance prerequisite before official university results, transcripts, or provisional degree certificates are processed and released."
    },
    {
      form: "PG Form 10",
      name: "Form of Information in Respect of Ph.D. Students Before Submission of Thesis",
      timeline: "To be submitted to Dean PGS two months before thesis submission",
      copies: "Original with passport photo & semester-wise academic records",
      workflow: "Student → Chairperson → Head of Department → Associate Dean → Dean PGS",
      purpose: "Complete doctoral dossier verification including course credits, research credits, semester-wise OGPA, date of passing qualifying examination, and approved thesis title."
    },
    {
      form: "PG Form 11",
      name: "Proposal for Evaluation of Research Credits (Semester Progress Report)",
      timeline: "Before the last working day of each semester",
      copies: "Dual copies (1 retained in Department, 1 to Associate Dean for GPA report)",
      workflow: "Student → Advisory Committee → Head of Department → Associate Dean",
      purpose: "Evaluation of research credits registered during the semester (literature review, field trials, observations, laboratory analysis). Uncompleted credits are mandated to be re-registered."
    },
    {
      form: "PG Form 12",
      name: "Statutory University Memo for Temporary Discontinuation of Studies",
      timeline: "Upon application and approval",
      copies: "Official Office Memo issued by Associate Dean",
      workflow: "Associate Dean → Student (Cc: Chairperson, HoD, Dean PGS)",
      purpose: "Grants formal permission for temporary break in studies. Max break allowed: 4 semesters for M.Sc., 6 semesters for Ph.D. Over 4 semesters break in Ph.D. requires fresh comprehensive examination."
    },
    {
      form: "PG Form 12-A",
      name: "Request for Permission to Resume Studies (Re-admission)",
      timeline: "Well in advance of 4th sem (M.Sc.) / 6th sem (Ph.D.) of discontinuation",
      copies: "Triplicate (to Associate Dean)",
      workflow: "Student → Chairperson → Head of Department → Associate Dean → Dean PGS",
      purpose: "Re-admission application detailing credits completed, balance credits to register, expiration date of maximum allowed duration, and reasons for discontinuation."
    },
    {
      form: "PG Form 12-B",
      name: "Official Order Permitting Resumption of Studies",
      timeline: "Upon formal evaluation by Associate Dean",
      copies: "Official Endorsement Memo",
      workflow: "Associate Dean → Student (Cc: Chairperson, HoD, Dean PGS)",
      purpose: "Statutory order according re-admission with conditions: no stipend entitlement, leave evidence for in-service candidates, and mandatory completion within outer time limit."
    },
    {
      form: "PG Form 13",
      name: "Proforma for Sending Panel of 8 External Examiners for Ph.D. Thesis",
      timeline: "2 months before submission of Ph.D. thesis",
      copies: "Confidential submission to Dean of P.G. Studies",
      workflow: "Chairperson → Head of Department → Dean PGS",
      purpose: "Panel of 8 eminent scientists/professors representing reputed national/international institutions with contact addresses, phone numbers, and emails for doctoral thesis adjudication."
    },
    {
      form: "PG Form 14",
      name: "Proposal for Extension of Time for Submission of Ph.D. Thesis",
      timeline: "3 months before expiry of maximum time limit (6 years)",
      copies: "Triplicate along with late fee receipt",
      workflow: "Student → Major Advisor → Head of Department → Associate Dean → Dean PGS",
      purpose: "For scholars who completed coursework and research credits but require additional time (maximum 2 semesters extension) to finalize thesis on valid documented grounds."
    },
    {
      form: "PG Form 16",
      name: "Proposal for Re-Examination in Failed Course",
      timeline: "Within 25 days from commencement of semester",
      copies: "Original with re-examination fee receipt (Rs. 100/- per course)",
      workflow: "Student → Course In-charge → Head of Department → Associate Dean",
      purpose: "Registration for supplementary re-examination in failed courses. Mandatory attendance for internal quizzes and practical evaluations even if course is not currently offered."
    },
    {
      form: "PG Form 17",
      name: "Academic Progress Register of P.G. Students",
      timeline: "Permanent departmental register updated every semester",
      copies: "Departmental Master Ledger",
      workflow: "Maintained by Head of Department & PG Academic Advisor",
      purpose: "Comprehensive departmental ledger recording semester-wise course/research credits, OGPA, and dates of submission of all statutory PG Forms (1, 2, 3, 4, 5, 6, 7/8, 9)."
    },
    {
      form: "PG Form 18",
      name: "Registration-cum-Grade Card for P.G. Courses (Semester I / II)",
      timeline: "At the beginning of each semester on designated registration day",
      copies: "Official Card (Student, Advisor, HoD, Exam Cell)",
      workflow: "Student → Course In-charge → Chairperson → Head of Department → Academic Advisor",
      purpose: "Semester registration of courses and research credits (maximum credit load: 15+1 per semester, or 9 research credits for in-service candidates on duty). Computation of GPA and OGPA."
    },
    {
      form: "PG Form 18-A",
      name: "Registration Card / G.P.A. Report of P.G. Courses",
      timeline: "At semester registration alongside Form 18",
      copies: "Official Progress Record",
      workflow: "Student → Chairperson → Head of Department → Associate Dean",
      purpose: "Cumulative academic checkpoint verifying submission status of PG Forms 1, 2, 3, 4 & 5, research progress status (Satisfactory/Unsatisfactory), and scholastic probation warnings."
    },
    {
      form: "PG Form 19",
      name: "Annexure: Proforma for Introduction of New P.G. Programme",
      timeline: "Submitted when proposing new M.Sc./M.Tech/Ph.D. specialization",
      copies: "University Statutory Proposal",
      workflow: "Head of Department / Officer Proposing → Associate Dean → Academic Council → ANGRAU Board",
      purpose: "Institutional audit for new academic programmes: teaching faculty strength, laboratory facilities, budget estimates for 5 years, workload analysis, and syllabus framework."
    }
  ]
};

export const pgGuidelinesData = pgRegulationsData;

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

