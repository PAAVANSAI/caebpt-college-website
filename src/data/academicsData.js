/**
 * Academic Programs & Departments Data
 * Official academic curricula, departments, and seat matrix for CAE Bapatla.
 */

export const departmentsData = [
  {
    id: "fmpe",
    name: "Farm Machinery & Power Engineering",
    shortCode: "FMPE",
    headOfDept: "Dr. P. V. Ramana",
    description: "Specializing in tractor ergonomics, autonomous farm robotics, seed drills, precision spraying, and mechanized harvesting technologies.",
    icon: "Tractor",
    stats: "3 Research Labs • 1 Machinery Testing Track",
    keyFocusAreas: [
      "Precision Farming & Drone Spraying",
      "Ergonomics & Safety in Farm Machinery",
      "Electric & Hybrid Farm Tractors",
      "Autonomous Harvesters & Sensor Integration"
    ]
  },
  {
    id: "swce",
    name: "Soil & Water Conservation Engineering",
    shortCode: "SWCE",
    headOfDept: "Dr. M. S. Reddy",
    description: "Focusing on micro-irrigation systems, watershed hydrology, groundwater recharge, remote sensing, and GIS-based drought modeling.",
    icon: "Droplets",
    stats: "2 Hydrology Labs • 1 Meteorological Station",
    keyFocusAreas: [
      "Drip & Sprinkler Automation",
      "Watershed Delineation & Soil Erosion Modeling",
      "Groundwater Recharging Structures",
      "Satellite Remote Sensing & GIS in Agriculture"
    ]
  },
  {
    id: "apfe",
    name: "Agricultural Process & Food Engineering",
    shortCode: "APFE",
    headOfDept: "Dr. G. Lakshmi",
    description: "Dedicated to post-harvest technology, grain storage silos, cold chain logistics, food dehydration, and novel packaging solutions.",
    icon: "UtensilsCrossed",
    stats: "4 Pilot Processing Units • 1 Food Analytical Lab",
    keyFocusAreas: [
      "Post-Harvest Loss Minimization",
      "Thermal & Non-Thermal Food Processing",
      "Grain Storage, Drying & Silo Engineering",
      "Bio-Degradable Food Packaging Systems"
    ]
  },
  {
    id: "ree",
    name: "Renewable Energy Engineering",
    shortCode: "REE",
    headOfDept: "Dr. Ch. Srinivas",
    description: "Pioneering biomass gasification, solar photovoltaic pumping, solar crop dryers, and bio-fuel generation for agricultural sustainability.",
    icon: "SunMedium",
    stats: "2 Solar Trial Stations • 1 Bio-Energy Testing Lab",
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

export const programsData = [
  {
    id: "btech-agri",
    level: "Undergraduate",
    degree: "B.Tech",
    name: "Bachelor of Technology in Agricultural Engineering",
    duration: "4 Years (8 Semesters)",
    intake: "Sample 60 Seats / Year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics (PCM) or equivalent through State Engineering Entrance (Sample Criteria)",
    department: "All Engineering Departments",
    overview: "A comprehensive 4-year professional engineering degree combining mechanical, civil, chemical, and environmental sciences to solve vital agrarian and agro-industrial challenges.",
    highlights: [
      "Hands-on Industrial In-Plant Training (6 Months / 8th Semester)",
      "Comprehensive tractor driving & field machinery operations",
      "Modern GIS & CAD design project assignments",
      "Interdisciplinary minors in IoT and Data Analytics in Agriculture"
    ],
    curriculumSummary: [
      { sem: "Sem 1 & 2", subjects: "Engineering Mathematics, Physics, Chemistry, Basic Electrical, Surveying, Workshop Practice" },
      { sem: "Sem 3 & 4", subjects: "Fluid Mechanics, Farm Power, Soil Mechanics, Thermodynamics, Strength of Materials, Heat Transfer" },
      { sem: "Sem 5 & 6", subjects: "Farm Machinery Design, Irrigation & Drainage, Post Harvest Engineering, Soil & Water Conservation" },
      { sem: "Sem 7 & 8", subjects: "Agro-Energy Systems, Dairy & Food Engineering, Industrial In-Plant Training, Capstone Project" }
    ],
    careerOpportunities: "Government Agricultural Engineering Departments, Tractor & Farm Equipment MNCs, Micro-Irrigation Corporates, Food Processing Giants, and Civil Services."
  },
  {
    id: "mtech-fmpe",
    level: "Postgraduate",
    degree: "M.Tech",
    name: "M.Tech in Farm Machinery & Power Engineering",
    duration: "2 Years (4 Semesters)",
    intake: "Sample 12 Seats / Year",
    eligibility: "B.Tech in Agricultural Engineering / Mechanical Engineering with qualifying entrance score (Sample Criteria)",
    department: "Farm Machinery & Power Engineering",
    overview: "Advanced study focusing on computer-aided machinery design, sensor-assisted agricultural machinery, tractor-implement dynamics, and ergonomic optimization.",
    highlights: [
      "Research thesis supervised by experienced academic faculty",
      "Tractor testing track trials and dynamometer evaluations",
      "Collaborative project opportunities with farm equipment manufacturers"
    ],
    curriculumSummary: [
      { sem: "Year 1", subjects: "Design of Farm Power & Tillage Machinery, Vibration & Ergonomics, Precision Farming Instrumentation" },
      { sem: "Year 2", subjects: "Research Seminar, Master's Dissertation Research & Industrial Defense" }
    ],
    careerOpportunities: "R&D centers of tractor corporations, machinery testing authorities, international agricultural consulting, and university research."
  },
  {
    id: "mtech-swce",
    level: "Postgraduate",
    degree: "M.Tech",
    name: "M.Tech in Soil & Water Conservation Engineering",
    duration: "2 Years (4 Semesters)",
    intake: "Sample 10 Seats / Year",
    eligibility: "B.Tech in Agricultural Engineering / Civil Engineering with qualifying entrance score (Sample Criteria)",
    department: "Soil & Water Conservation Engineering",
    overview: "Advanced specialization in watershed hydrology, micro-irrigation automation, groundwater modeling, and GIS-based water resource planning.",
    highlights: [
      "Geospatial simulation labs using modern GIS software",
      "Field studies on watershed recharge structures",
      "Climate change vulnerability and mitigation research"
    ],
    curriculumSummary: [
      { sem: "Year 1", subjects: "Advanced Hydrology, Micro-Irrigation Design, Groundwater Resource Modeling, Remote Sensing" },
      { sem: "Year 2", subjects: "Master's Thesis Research, Watershed Field Practicum & Dissertation" }
    ],
    careerOpportunities: "State Water Resources Departments, Ground Water Boards, Micro-irrigation MNCs, Climate & Environmental Consultancies."
  },
  {
    id: "mtech-apfe",
    level: "Postgraduate",
    degree: "M.Tech",
    name: "M.Tech in Agricultural Process & Food Engineering",
    duration: "2 Years (4 Semesters)",
    intake: "Sample 10 Seats / Year",
    eligibility: "B.Tech in Agricultural Engineering / Food Technology / Chemical Engineering (Sample Criteria)",
    department: "Agricultural Process & Food Engineering",
    overview: "Specialized postgraduate program concentrating on food preservation, extrusion, drying kinetics, cold chain management, and food packaging technologies.",
    highlights: [
      "Hands-on work in pilot processing plant",
      "Quality analysis of agro-produce using HPLC and spectrophotometry",
      "Supply chain and post-harvest optimization studies"
    ],
    curriculumSummary: [
      { sem: "Year 1", subjects: "Advanced Food Process Engineering, Storage & Silo Design, Packaging Technology, Food Quality Assurance" },
      { sem: "Year 2", subjects: "Industrial Project, Dissertation Research & Defense" }
    ],
    careerOpportunities: "Food FMCG giants, Grain storage corporations, Cold chain networks, Quality inspection laboratories."
  },
  {
    id: "phd-agri",
    level: "Doctoral",
    degree: "Ph.D.",
    name: "Doctor of Philosophy (Ph.D.) in Agricultural Engineering",
    duration: "3 - 5 Years (Research Program)",
    intake: "Based on faculty availability and sponsored research grants",
    eligibility: "M.Tech in relevant branch of Agricultural Engineering with qualifying university research entrance (Sample Criteria)",
    department: "All Engineering Departments",
    overview: "Rigorous doctoral research program aimed at producing novel scientific solutions, patented technologies, and high-impact publications in agrarian engineering.",
    highlights: [
      "Access to extensive experimental farm plots and central testing labs",
      "Support for presenting at national and international peer-reviewed symposia",
      "Interdisciplinary guidance with allied agro-scientific departments"
    ],
    curriculumSummary: [
      { sem: "Coursework", subjects: "Advanced Research Methodology, Specialized Electives, Comprehensive Viva-Voce" },
      { sem: "Research", subjects: "Field & Laboratory Experimentation, Progress Seminars, Thesis Submission & Defense" }
    ],
    careerOpportunities: "Professorship in premier state and national universities, Senior Scientists in ICAR / CSIR labs, Chief Technology Officers in Agri-Tech."
  }
];

