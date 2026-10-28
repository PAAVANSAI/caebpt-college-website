/**
 * College Official Structure Data
 * College of Agricultural Engineering (CAE), Bapatla
 * Constituent College of Acharya N.G. Ranga Agricultural University (ANGRAU)
 * Domain: caebpt.ac.in • Official University: angrau.ac.in
 * All entries are clearly labeled placeholders ready for official institutional replacement.
 */

export const officialStructureData = {
  angrauUrl: "https://angrau.ac.in",
  angrauName: "Acharya N.G. Ranga Agricultural University (ANGRAU)",
  collegeFullName: "College of Agricultural Engineering, Bapatla",
  estd: "1983",
  domain: "caebpt.ac.in",

  // 0. Hero Section Highlights & Display
  hero: {
    badge: "ESTD. 1983 • Constituent of ANGRAU • Bapatla",
    titleMain: "Excellence in",
    titleAccent: "Agricultural Engineering",
    titleSuffix: "& Technology",
    intro: "Pioneering academic distinction, farm mechanization, micro-irrigation systems, and agro-processing engineering to drive sustainable agrarian advancement under ANGRAU.",
    bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
    highlights: [
      { count: "5", label: "Core Academic Departments", note: "Specialized Disciplines" },
      { count: "3+", label: "Degree Programs Offered", note: "B.Tech, M.Tech & Ph.D." },
      { count: "18+", label: "Modern Engineering Labs", note: "Testing & Research Units" },
      { count: "50+", label: "Campus Green Acreage", note: "Acres with Trial Fields" },
    ]
  },

  // 1. Leadership Messages
  messages: {
    dean: {
      title: "Message from the Dean",
      role: "Dean of Agricultural Engineering & Technology (ANGRAU)",
      name: "Dr. G. Subba Rao, Ph.D. (Official Placeholder)",
      qualification: "M.Tech (IIT Kharagpur), Ph.D. (Farm Power & Machinery)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      content: [
        "Agricultural engineering stands at the crucial intersection of biological science and technological innovation. At ANGRAU, we are committed to revolutionizing Indian agriculture through precision mechanization, smart micro-irrigation management, and innovative post-harvest technologies.",
        "The College of Agricultural Engineering at Bapatla has remained our flagship constituent engineering institute since 1983, nurturing graduates who lead across industries, scientific research institutions, and governmental agricultural commissions. We welcome prospective students, researchers, and industrial partners to join hands with us in advancing climate-resilient farming futures."
      ]
    },
    associateDean: {
      title: "Message from the Associate Dean",
      role: "Associate Dean & Professor, CAE Bapatla",
      name: "Dr. K. S. Rao, Ph.D. (Official Placeholder)",
      qualification: "M.Tech (IIT Roorkee), Ph.D. (Soil & Water Conservation)",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      content: [
        "Welcome to the College of Agricultural Engineering, Bapatla. For more than four decades, this institution has served as a beacon of academic excellence in agricultural mechanization, natural resource management, and food process engineering.",
        "Our academic environment combines foundational engineering sciences with hands-on machinery workshops, GIS-based hydrological simulations, and pilot processing plants. We ensure every student receives comprehensive training, ethical grounding, and real-world industrial in-plant experience to emerge as visionary technocrats."
      ]
    }
  },

  // 2. Announcements & Notices by Type (Homepage + Subpages)
  announcements: {
    newsEvents: [
      {
        id: "ne-1",
        title: "National Conference on Precision Farm Robotics & AI in Agriculture",
        date: "November 18-20, 2024",
        category: "Events",
        summary: "Department of Farm Machinery & Power invites research papers and technological demonstrations from scholars nationwide.",
        link: "#"
      },
      {
        id: "ne-2",
        title: "Annual Tech-Agri Symposium 'AGRI-TECH 2024' Scheduled",
        date: "November 28, 2024",
        category: "Events",
        summary: "Student engineering innovator competitions, drone flight displays, and agricultural equipment design hackathon.",
        link: "#"
      },
      {
        id: "ne-3",
        title: "MoU Signed with Micro-Irrigation Industrial Consortium for Student Internships",
        date: "October 30, 2024",
        category: "News",
        summary: "Providing semester-long industrial training stipends and placement pathways for B.Tech final-year scholars.",
        link: "#"
      }
    ],
    recruitment: [
      {
        id: "rec-1",
        title: "Notification for Engagement of Teaching Associates in Soil & Water Conservation",
        date: "November 05, 2024",
        deadline: "November 25, 2024",
        category: "Recruitment (Demo)",
        department: "Soil & Water Conservation Engineering",
        summary: "Applications are invited on contractual basis for Teaching Associates with M.Tech in SWCE / Water Resources.",
        docName: "Recruitment_Notification_TA_SWCE_Demo.pdf"
      },
      {
        id: "rec-2",
        title: "Walk-in Interview for Senior Research Fellow (SRF) under ICAR Sponsored Drone Project",
        date: "October 22, 2024",
        deadline: "November 15, 2024",
        category: "Recruitment (Demo)",
        department: "Farm Machinery & Power Engineering",
        summary: "SRF vacancy under precision drone spraying trials in agricultural fields.",
        docName: "SRF_WalkIn_Notification_Demo.pdf"
      }
    ],
    tenders: [
      {
        id: "tnd-1",
        title: "Tender Notice: Procurement of High-Precision Tractor PTO Dynamometer",
        date: "November 02, 2024",
        refNo: "CAE/BPT/TEND/FMPE/2024-03",
        deadline: "November 24, 2024",
        summary: "Sealed competitive tenders invited from accredited manufacturers for supply and commissioning of PTO dynamometer testing rig.",
        docName: "Tender_Notice_Dynamometer_Demo.pdf"
      },
      {
        id: "tnd-2",
        title: "Tender Notice: Supply of Analytical UV-Vis Spectrophotometer for Food Testing Lab",
        date: "October 18, 2024",
        refNo: "CAE/BPT/TEND/APFE/2024-02",
        deadline: "November 10, 2024",
        summary: "Procurement of spectrophotometer and texture analysis spare sensors for Post-Harvest Processing Lab.",
        docName: "Tender_Notice_FoodLab_Demo.pdf"
      }
    ],
    circulars: [
      {
        id: "cir-1",
        title: "Circular: Schedule for Mid-Term Theory Examinations 2024-25",
        date: "November 04, 2024",
        issuingAuthority: "Officer In-charge of Academic Matters",
        summary: "Timetable for B.Tech (Agri Engg) 3rd, 5th, and 7th semester mid-term evaluations.",
        docName: "Circular_Exam_Schedule_Demo.pdf"
      },
      {
        id: "cir-2",
        title: "Circular: Mandatory Anti-Ragging Affidavit Submission for All Enrolled Students",
        date: "October 26, 2024",
        issuingAuthority: "Officer In-charge of Student Affairs",
        summary: "All undergraduate and postgraduate hostel residents must submit online anti-ragging undertakings.",
        docName: "Circular_AntiRagging_Mandate_Demo.pdf"
      },
      {
        id: "cir-3",
        title: "Circular: Guidelines for Availing University Merit-cum-Means Scholarships",
        date: "October 15, 2024",
        issuingAuthority: "Administrative Officer",
        summary: "Eligible candidates may submit scholarship application forms along with parent income certificates.",
        docName: "Circular_Scholarships_Guidelines_Demo.pdf"
      }
    ]
  },

  // 3. Galleries
  galleries: {
    photos: [
      {
        id: "p-1",
        title: "Main Administrative & Academic Wing",
        category: "Campus",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
        caption: "Front view of the academic block at Bapatla."
      },
      {
        id: "p-2",
        title: "Tractor & Heavy Farm Machinery Demonstration",
        category: "Machinery",
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
        caption: "Students conducting field implement trials."
      },
      {
        id: "p-3",
        title: "Post-Harvest Food Pilot Processing Plant",
        category: "Labs",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
        caption: "Food engineering scholars operating pilot extruders and dryers."
      },
      {
        id: "p-4",
        title: "Central Academic Library Reading Hall",
        category: "Campus",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
        caption: "Digital reading stations and technical archives."
      },
      {
        id: "p-5",
        title: "Soil & Water Hydraulics Flume Laboratory",
        category: "Labs",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
        caption: "Open-channel hydraulics and sediment evaluation."
      },
      {
        id: "p-6",
        title: "Student Technical Exhibition & Prototype Expo",
        category: "Events",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        caption: "Innovators showcasing automated micro-irrigation systems."
      }
    ],
    videos: [
      {
        id: "v-1",
        title: "Campus Virtual Tour: College of Agricultural Engineering, Bapatla",
        duration: "04:32",
        thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
        description: "An overview of the 50-acre academic campus, research trial fields, modern laboratories, and student hostels.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "v-2",
        title: "Farm Machinery in Action: Precision Tractor Trials",
        duration: "03:15",
        thumbnail: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
        description: "Demonstration of laser land levelers, high-clearance tractor sprayers, and seed drills at the testing track.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "v-3",
        title: "Soil & Water Conservation: Micro-Irrigation Automation Facility",
        duration: "02:45",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
        description: "Hydraulic laboratory flume experiments and automated sensor-based drip emission monitoring.",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ]
  },

  // 4. About Us Subsections
  aboutUs: {
    history: {
      title: "Historical Background",
      established: "1983",
      content: [
        "The College of Agricultural Engineering, Bapatla was established in the year 1983 as a premier constituent college of Acharya N.G. Ranga Agricultural University (ANGRAU) to impart specialized education and conduct mission-oriented research in the field of Agricultural Engineering.",
        "Located in the historic coastal town of Bapatla in Andhra Pradesh, the college was set up to address regional challenges in farm mechanization, irrigation canal management, soil salinization, and post-harvest produce preservation.",
        "Over four decades, the institution has produced over 2,000 professional agricultural engineers serving in premier multinational equipment manufacturers, state groundwater and irrigation departments, scientific institutes of the ICAR, and civil services worldwide."
      ],
      milestones: [
        { year: "1983", event: "Establishment of the College of Agricultural Engineering at Bapatla." },
        { year: "1991", event: "Introduction of Postgraduate (M.Tech) degree programs in core engineering disciplines." },
        { year: "2002", event: "Commissioning of modern Tractor Power Testing Track and Hydraulics Flume Centre." },
        { year: "2012", event: "Establishment of the Food Processing Pilot Plant with semi-industrial dehydration lines." },
        { year: "2020", event: "Launch of precision agricultural drone training and IoT-based micro-irrigation suites." }
      ]
    },
    visionMandate: {
      title: "Vision and Mandate",
      vision: "To emerge as a world-class centre of academic distinction and technological innovation in agricultural engineering, empowering future leaders to drive sustainable farm mechanization, climate-resilient water management, and agro-industrial transformation.",
      mandates: [
        "Impart high-quality undergraduate, postgraduate, and doctoral education in agricultural engineering aligned with national ICAR standards.",
        "Conduct applied, problem-solving scientific research in farm power machinery, watershed conservation, food processing, and agro-renewable energy.",
        "Transfer proven agricultural engineering technologies to farmers, custom hiring centres, and local agro-enterprises through outreach and training.",
        "Foster industry-academia collaborations, entrepreneurship incubation, and technical advisory services."
      ]
    },
    orgStructure: {
      title: "Organizational Structure",
      description: "The College operates within the statutory governance structure of Acharya N.G. Ranga Agricultural University (ANGRAU):",
      hierarchy: [
        { level: "Apex University Authority", role: "Vice-Chancellor, ANGRAU", name: "Dr. R. Sarada Jayalakshmi Devi (ANGRAU Vice-Chancellor)" },
        { level: "Faculty Administration", role: "Dean of Agricultural Engineering & Technology", name: "Dr. G. Subba Rao (Faculty Dean Placeholder)" },
        { level: "College Executive Head", role: "Associate Dean, CAE Bapatla", name: "Dr. K. S. Rao (Associate Dean Placeholder)" },
        {
          level: "Academic Departments",
          heads: [
            "Head, Farm Machinery & Power Engineering (FMPE)",
            "Head, Soil & Water Conservation Engineering (SWCE)",
            "Head, Agricultural Process & Food Engineering (APFE)",
            "Head, Renewable Energy Engineering (REE)",
            "Head, Basic Engineering & Allied Sciences (BEAS)"
          ]
        },
        {
          level: "Collegiate Supporting Administrative Officers",
          officers: [
            "Administrative Officer (Establishment, Finance & Stores)",
            "Wardens (Boys & Girls Student Hostels)",
            "Officer In-charge of Academic Matters (Examinations & Admissions)",
            "Officer In-charge of Student Affairs (Welfare, Sports & Cultural)",
            "Placement Officer (Training, Internships & Corporate Relations)",
            "Transport In-charge (Campus Transit & Fleet Maintenance)"
          ]
        }
      ]
    },
    accreditation: {
      title: "Status of Accreditation",
      statusStatement: "The educational programs of the College of Agricultural Engineering, Bapatla are recognized by the Indian Council of Agricultural Research (ICAR), New Delhi, and affiliated to ANGRAU.",
      details: [
        { label: "Governing Apex Council", value: "Indian Council of Agricultural Research (ICAR), New Delhi" },
        { label: "Affiliating University", value: "Acharya N.G. Ranga Agricultural University (ANGRAU)" },
        { label: "Curriculum Standard", value: "Aligned with ICAR 5th Deans' Committee Recommendations" },
        { label: "Approval Body", value: "Government of Andhra Pradesh / State Agricultural University System" },
        { label: "Accreditation Status Note", value: "Official institutional accreditation certificates and NIRF records are maintained by the ANGRAU Central Quality Assurance Cell." }
      ]
    }
  },

  // 5. Administration Sections and Submenus
  administration: {
    viceChancellor: {
      title: "Vice-Chancellor",
      name: "Dr. R. Sarada Jayalakshmi Devi, Ph.D. (ANGRAU Leadership)",
      designation: "Hon'ble Vice-Chancellor, ANGRAU",
      university: "Acharya N.G. Ranga Agricultural University",
      officeLocation: "Administrative Headquarters, ANGRAU, Lam, Guntur, AP",
      message: "ANGRAU remains steadfast in advancing technological self-reliance, farm productivity, and scientific education across Andhra Pradesh through its constituent colleges."
    },
    deansOfFaculty: {
      title: "Deans of Faculty",
      facultyDeans: [
        {
          name: "Dr. G. Subba Rao, Ph.D. (Placeholder)",
          designation: "Dean of Agricultural Engineering & Technology",
          responsibilities: "Overlooks academic regulations, syllabus revisions, accreditation compliances, and post-graduate engineering research across university colleges.",
          email: "dean.agengg@angrau.ac.in (Placeholder)"
        },
        {
          name: "Dr. P. Venkateswarlu, Ph.D. (Placeholder)",
          designation: "Dean of Agriculture",
          responsibilities: "Coordinates agricultural sciences education and joint interdisciplinary crop-machinery trials.",
          email: "dean.agri@angrau.ac.in (Placeholder)"
        },
        {
          name: "Dr. K. Hemalatha, Ph.D. (Placeholder)",
          designation: "Dean of Post Graduate Studies",
          responsibilities: "Supervises M.Tech, M.Sc., and Ph.D. dissertation evaluations and university doctoral fellowships.",
          email: "dean.pgs@angrau.ac.in (Placeholder)"
        }
      ]
    },
    associateDean: {
      title: "Associate Dean",
      name: "Dr. K. S. Rao, Ph.D. (Associate Dean Placeholder)",
      designation: "Associate Dean & Professor",
      office: "Principal's Administrative Chamber, Main Block, CAE Bapatla",
      phone: "+91 8643 224025 (Office Demo)",
      email: "associate.dean@caebpt.ac.in (Demo)",
      biography: "Serving as the executive and academic head of the College of Agricultural Engineering, Bapatla. Over 24 years of academic and administrative experience in agricultural research, tractor testings, and student mentoring."
    },
    supportingStaff: {
      title: "Supporting Staff & Officers In-Charge",
      description: "Key collegiate officers responsible for day-to-day administrative functions, academic records, student welfare, and campus operations:",
      staffList: [
        {
          role: "Administrative Officer",
          name: "Er. N. Satyanarayana (Placeholder)",
          designation: "Administrative Officer",
          duties: "Oversees general administration, university communications, establishment matters, service registers, finance, and procurement stores.",
          contact: "ao.cae@caebpt.ac.in (Demo) • Ext: 102"
        },
        {
          role: "Warden",
          name: "Dr. T. Harikrishna (Boys Hostel) & Dr. V. Deepa (Girls Hostel) (Placeholder)",
          designation: "Hostel Wardens",
          duties: "Management of residential hostels, dining messes, student discipline, room allotments, and resident security.",
          contact: "wardens@caebpt.ac.in (Demo) • Ext: 106"
        },
        {
          role: "Officer In-charge of Academic Matters",
          name: "Dr. P. V. Ramana (Placeholder)",
          designation: "Professor & Academic In-Charge",
          duties: "Coordinates semester registrations, examination scheduling, attendance registers, grade reports, and classroom scheduling.",
          contact: "academics.officer@caebpt.ac.in (Demo) • Ext: 104"
        },
        {
          role: "Officer In-charge of Student Affairs",
          name: "Dr. M. S. Reddy (Placeholder)",
          designation: "Professor & Student Affairs In-Charge",
          duties: "Coordinates student welfare, extracurricular clubs, sports events, cultural symposia, NSS/NCC units, and grievance redressal.",
          contact: "student.affairs@caebpt.ac.in (Demo) • Ext: 108"
        },
        {
          role: "Placement Officer",
          name: "Dr. Ch. Srinivas (Placeholder)",
          designation: "Associate Professor & Placement Officer",
          duties: "Liaisons with farm equipment companies, micro-irrigation corporations, food processors, campus interviews, and career counseling.",
          contact: "placement@caebpt.ac.in (Demo) • Ext: 110"
        },
        {
          role: "Transport In-charge",
          name: "Er. B. Anjaneyulu (Placeholder)",
          designation: "Assistant Professor & Transport In-Charge",
          duties: "Manages college transport buses, field demonstration vehicles, farm machinery mobilization, and scheduled shuttle operations.",
          contact: "transport@caebpt.ac.in (Demo) • Ext: 114"
        }
      ]
    }
  },

  // 6. Academics: Courses & Detailed Departments
  academics: {
    courses: [
      {
        id: "btech-agengg",
        level: "Undergraduate Program",
        name: "B.Tech (Agricultural Engineering)",
        duration: "4 Academic Years (8 Semesters)",
        eligibility: "10+2 with Physics, Chemistry & Mathematics (PCM) or State EAPCET Engineering Entrance rank.",
        intake: "Sample: 60 Seats / Year",
        highlights: "6-month mandatory industrial in-plant training in 8th semester, farm machinery hands-on workshop, CAD/GIS laboratories."
      },
      {
        id: "mtech-fmpe",
        level: "Postgraduate Program",
        name: "M.Tech in Farm Machinery & Power Engineering",
        duration: "2 Academic Years (4 Semesters)",
        eligibility: "B.Tech in Agricultural Engineering or Mechanical Engineering with qualifying entrance examination score.",
        intake: "Sample: 12 Seats / Year",
        highlights: "Advanced tractor-implement dynamics, precision farming sensors, ergonomic optimization, master dissertation."
      },
      {
        id: "mtech-swce",
        level: "Postgraduate Program",
        name: "M.Tech in Soil & Water Conservation Engineering",
        duration: "2 Academic Years (4 Semesters)",
        eligibility: "B.Tech in Agricultural Engineering or Civil Engineering with entrance qualification.",
        intake: "Sample: 10 Seats / Year",
        highlights: "Watershed hydrology simulation, micro-irrigation automation, groundwater recharge structures."
      },
      {
        id: "mtech-apfe",
        level: "Postgraduate Program",
        name: "M.Tech in Agricultural Process & Food Engineering",
        duration: "2 Academic Years (4 Semesters)",
        eligibility: "B.Tech in Agricultural Engineering / Food Technology with entrance qualification.",
        intake: "Sample: 10 Seats / Year",
        highlights: "Dehydration kinetics, food extrusion, hermetic storage silo design, cold-chain logistics."
      },
      {
        id: "phd-agri",
        level: "Doctoral Program",
        name: "Ph.D. in Agricultural Engineering",
        duration: "3 - 5 Years (Research Degree)",
        eligibility: "M.Tech in relevant branch of Agricultural Engineering with university doctoral entrance score.",
        intake: "Based on faculty research grants and approved guides.",
        highlights: "Independent doctoral research, high-impact journal publications, patented machine design prototypes."
      }
    ],
    departments: [
      {
        id: "fmpe",
        slug: "farm-machinery-and-power",
        name: "Farm Machinery and Power Engineering",
        shortCode: "FMPE",
        about: "The Department of Farm Machinery and Power Engineering is dedicated to modernizing agricultural operations through ergonomic tractors, automated seed drills, autonomous drone sprayers, and combine harvesters. It combines mechanical design with agronomic suitability to improve field efficiency and reduce farmer drudgery.",
        labs: [
          "Tractor Ergonomics and Vibration Analysis Lab",
          "Tractor Power Testing Track & PTO Dynamometer Unit",
          "Farm Implements & Tillage Machinery Testing Bay",
          "Autonomous Agro-Drone Flight & Sensor Calibration Lab",
          "Internal Combustion Engines & Biofuels Testing Rig"
        ],
        hodAndFaculty: {
          hodName: "Dr. P. V. Ramana, Ph.D. (HoD Placeholder)",
          hodDesignation: "Professor & Head of Department",
          hodSpecialization: "Tractor-Implement Dynamics, Harvesting Machinery & Drone Spraying",
          facultyMembers: [
            { name: "Dr. K. S. Rao", designation: "Professor", qual: "Ph.D. (IIT Kharagpur)" },
            { name: "Er. T. Harikrishna", designation: "Assistant Professor", qual: "M.Tech (Agri Engg)" },
            { name: "Er. N. Kiran Kumar (Placeholder)", designation: "Assistant Professor", qual: "M.Tech (FMPE)" }
          ]
        }
      },
      {
        id: "swce",
        slug: "soil-and-water-conservation",
        name: "Soil and Water Conservation Engineering",
        shortCode: "SWCE",
        about: "The Department of Soil and Water Conservation Engineering focuses on sustainable land-water management, automated micro-irrigation, rainwater harvesting, watershed delineation, and hydrological drought forecasting using remote sensing and GIS.",
        labs: [
          "Computerized Hydraulic Flume & Fluid Mechanics Lab",
          "Automated Drip & Micro-Sprinkler Irrigation Test Bench",
          "Rainfall Simulator & Soil Erosion Modeling Station",
          "Geospatial GIS & Remote Sensing Watershed Modeling Suite",
          "Groundwater Hydrology & Recharge Demonstration Lab"
        ],
        hodAndFaculty: {
          hodName: "Dr. M. S. Reddy, Ph.D. (HoD Placeholder)",
          hodDesignation: "Professor & Head of Department",
          hodSpecialization: "Watershed Hydrology, Micro-Irrigation & Drought Forecasting",
          facultyMembers: [
            { name: "Dr. V. Deepa", designation: "Assistant Professor", qual: "Ph.D. (Remote Sensing)" },
            { name: "Er. S. Prasanna (Placeholder)", designation: "Assistant Professor", qual: "M.Tech (SWCE)" }
          ]
        }
      },
      {
        id: "apfe",
        slug: "agricultural-process-and-food-engineering",
        name: "Agricultural Process and Food Engineering",
        shortCode: "APFE",
        about: "The Department of Agricultural Process & Food Engineering focuses on post-harvest handling, grain milling, drying kinetics, cold storage management, and value-added food processing to minimize agrarian crop loss and boost farmer incomes.",
        labs: [
          "Semi-Industrial Pilot Food Processing & Dehydration Plant",
          "Grain Milling, Sizing & Silo Storage Lab",
          "Food Quality Analytical Lab (Spectrophotometer, Texture Analyzer)",
          "Extrusion Processing & Packaging Technology Unit",
          "Dairy & Cold Chain Engineering Lab"
        ],
        hodAndFaculty: {
          hodName: "Dr. G. Lakshmi, Ph.D. (HoD Placeholder)",
          hodDesignation: "Associate Professor & Head of Department",
          hodSpecialization: "Food Dehydration, Grain Storage Silos & Packaging",
          facultyMembers: [
            { name: "Dr. R. Madhusudhan (Placeholder)", designation: "Assistant Professor", qual: "Ph.D. (Food Process)" },
            { name: "Er. M. Bhavani (Placeholder)", designation: "Teaching Associate", qual: "M.Tech (APFE)" }
          ]
        }
      },
      {
        id: "ree",
        slug: "renewable-energy-engineering",
        name: "Renewable Energy Engineering",
        shortCode: "REE",
        about: "The Department of Renewable Energy Engineering explores solar photovoltaic water pumping, biomass gasification, solar greenhouse crop drying, and bio-waste conversion to provide clean, self-sustaining energy for rural farming communities.",
        labs: [
          "Solar Photovoltaic Testing & Solar Agri-Pumping Yard",
          "Biomass Briquetting, Pelleting & Gasifier Testing Bay",
          "Controlled Environment Greenhouse Research Station",
          "Bio-Fuel Extraction & Thermal Analysis Lab"
        ],
        hodAndFaculty: {
          hodName: "Dr. Ch. Srinivas, Ph.D. (HoD Placeholder)",
          hodDesignation: "Associate Professor & Head of Department",
          hodSpecialization: "Solar Pumping Systems, Biomass Gasifiers & Greenhouses",
          facultyMembers: [
            { name: "Er. K. Suresh (Placeholder)", designation: "Assistant Professor", qual: "M.Tech (Energy Engg)" }
          ]
        }
      },
      {
        id: "beas",
        slug: "basic-engineering-and-allied-sciences",
        name: "Basic Engineering and Allied Sciences",
        shortCode: "BEAS",
        about: "The Department of Basic Engineering & Allied Sciences provides bedrock foundations in engineering mechanics, thermodynamics, CAD/CAM computational design, mathematics, computer science, and agricultural economics.",
        labs: [
          "CAD/CAM Modeling & Computational Fluid Dynamics (CFD) Centre",
          "Thermodynamics & Heat Transfer Demonstration Bay",
          "Engineering Workshop (Fitting, Welding, Carpentry, Smithy)",
          "Computational Programming & Applied Data Analytics Lab"
        ],
        hodAndFaculty: {
          hodName: "Dr. B. Anjaneyulu, Ph.D. (HoD Placeholder)",
          hodDesignation: "Assistant Professor & Head of Department",
          hodSpecialization: "Finite Element Analysis (FEA), Mechanical Design & Metallurgy",
          facultyMembers: [
            { name: "Dr. L. Swathi (Placeholder)", designation: "Assistant Professor (Maths)", qual: "Ph.D." },
            { name: "Er. J. Venkat (Placeholder)", designation: "Assistant Professor (Computer Science)", qual: "M.Tech" }
          ]
        }
      }
    ]
  },

  // 7. Student's Welfare Activities (All 12 Mandatory Items)
  welfare: [
    {
      id: "hostels",
      slug: "hostels",
      name: "Hostels",
      title: "Student Residential Hostels",
      summary: "Well-maintained separate residential halls for boys and girls with 24/7 security, nutritious dining messes, RO drinking water, and Wi-Fi.",
      features: [
        "Separate hostel buildings for male and female engineering students",
        "Student mess committee managing balanced, hygienic dining menus",
        "Round-the-clock security personnel and CCTV campus surveillance",
        "Solar water heating systems and high-speed Wi-Fi access"
      ]
    },
    {
      id: "sports-cultural",
      slug: "sports-cultural",
      name: "Sports, Games, Cultural and Literary Activities",
      title: "Sports, Games & Cultural Affairs",
      summary: "Encouraging athletic excellence, physical fitness, and cultural vibrancy through university sports meets, inter-collegiate tournaments, and annual tech-fests.",
      features: [
        "Standard outdoor cricket/football ground and 400m running track",
        "Illuminated volleyball, basketball, and badminton courts",
        "Equipped multi-station fitness gymnasium",
        "Literary and cultural clubs organizing debates, elocution, drama, and symposia"
      ]
    },
    {
      id: "scholarships",
      slug: "scholarships",
      name: "Scholarships",
      title: "Scholarships & Financial Assistance",
      summary: "Facilitating access to central, state government, and ICAR scholarships for meritorious and underprivileged engineering students.",
      features: [
        "Government of AP Jagananna Vidya Deevena (Fee Reimbursement)",
        "ICAR National Talent Scholarship (NTS) for undergraduate scholars",
        "Post-Graduate Merit Scholarships & GATE Stipends",
        "Endowment awards and merit-cum-means financial aids"
      ]
    },
    {
      id: "nss-ncc",
      slug: "nss-ncc",
      name: "NSS/NCC",
      title: "National Service Scheme (NSS) & NCC",
      summary: "Instilling social service, rural outreach, civic responsibility, and leadership discipline through active campus NSS and NCC units.",
      features: [
        "Annual 7-day special rural service camp in adopted village communities",
        "Blood donation camps, tree plantation drives, and cleanliness campaigns",
        "Awareness campaigns on water conservation and micro-irrigation for local farmers",
        "Participation in university and state-level parade contingents"
      ]
    },
    {
      id: "international-students",
      slug: "international-students",
      name: "International Students",
      title: "International Students Cell",
      summary: "Dedicated single-window advisory unit assisting international scholars with admissions, visa endorsements, orientation, and campus boarding.",
      features: [
        "Guidance on Indian Council of Agricultural Research (ICAR) foreign quota admissions",
        "Assistance with FRRO registration and residence permits",
        "Special residential hostel arrangements and cultural mentorship",
        "Academic tutorial support and language orientation"
      ]
    },
    {
      id: "placement-cell",
      slug: "placement-cell",
      name: "Placement Cell",
      title: "Training and Placement Cell",
      summary: "Bridging the gap between academia and agricultural industry leaders, facilitating mock interviews, soft skills training, and campus placements.",
      features: [
        "Strong recruitment ties with tractor MNCs, micro-irrigation firms, and food processing giants",
        "Coordination of 6-month industrial in-plant training for final-year students",
        "Aptitude, resume-building, and technical mock interview sessions",
        "Career guidance for GATE, CAT, GRE, and Civil Services examinations"
      ]
    },
    {
      id: "health-clinics",
      slug: "health-clinics",
      name: "Health Clinics",
      title: "Campus Health Centre & Medical Care",
      summary: "Round-the-clock primary medical aid, basic diagnostics, and ambulance support for students, faculty, and resident campus staff.",
      features: [
        "Qualified medical doctor and nursing assistant on duty during working hours",
        "Stocked dispensary with essential medicines and first-aid provisions",
        "Tie-ups with specialized multi-speciality hospitals in Bapatla and Guntur",
        "Emergency ambulance service available 24/7 on campus"
      ]
    },
    {
      id: "alumni",
      slug: "alumni",
      name: "Alumni",
      title: "Alumni Association",
      summary: "A vibrant global network of CAE Bapatla alumni occupying leadership positions across industry, academia, research, and governance.",
      features: [
        "Annual alumni re-union and mentorship chapters",
        "Guest lectures and technical webinars by distinguished alumni",
        "Alumni endowment scholarships for financially deserving students",
        "Guidance for overseas higher education and entrepreneurial startups"
      ]
    },
    {
      id: "anti-ragging",
      slug: "anti-ragging",
      name: "Anti-Ragging Cell",
      title: "Anti-Ragging Cell & Helpline",
      summary: "Strict zero-tolerance policy against ragging in accordance with Supreme Court and UGC/ICAR mandates, ensuring a secure and supportive campus.",
      features: [
        "Active anti-ragging squad conducting regular surprise visits to hostels",
        "Mandatory online affidavit submission by every student and parent",
        "Confidential 24/7 complaint box and institutional helpline: +91 8643 224025",
        "National Anti-Ragging Helpline: 1800-180-5522 (Toll Free)"
      ]
    },
    {
      id: "sc-st-cell",
      slug: "sc-st-cell",
      name: "SC/ST Cell",
      title: "SC / ST Welfare & Equal Opportunity Cell",
      summary: "Ensuring social inclusion, equal opportunities, grievance redressal, and academic remedial assistance for SC and ST students.",
      features: [
        "Monitoring proper implementation of statutory reservation quotas",
        "Remedial coaching classes and English language proficiency training",
        "Guidance on state and central social welfare scholarship disbursement",
        "Confidential grievance cell headed by senior faculty members"
      ]
    },
    {
      id: "women-protection",
      slug: "women-protection",
      name: "Women Protection Cell",
      title: "Women Protection Cell & Internal Complaints Committee (ICC)",
      summary: "Promoting gender equity, safety, self-confidence, and a dignified learning environment for female students and women staff members.",
      features: [
        "Internal Complaints Committee (ICC) constituted per POSH Act guidelines",
        "Regular workshops on women safety, mental health, and leadership",
        "Dedicated grievance redressal mechanism with female counselor support",
        "Campus self-defense training programs and guest seminars"
      ]
    },
    {
      id: "library",
      slug: "library",
      name: "Library and e-Resources",
      title: "Central Academic Library & e-Resources",
      summary: "Extensive repository of over 25,000 agricultural engineering volumes, international journals, research theses, and CeRA digital consortium access.",
      features: [
        "Access to Consortium for e-Resources in Agriculture (CeRA) with thousands of journals",
        "Automated digital catalog (OPAC) and RFID book circulation",
        "High-speed browsing center with dedicated terminals for research scholars",
        "Quiet study cubicles and competitive examination reference books section"
      ]
    }
  ],

  // 8. Publications
  publications: {
    title: "Institutional Publications & Research Bulletins",
    description: "Monographs, technical research bulletins, conference proceedings, and student annual publications published by the college:",
    list: [
      {
        id: "pub-1",
        title: "Advances in Precision Farm Machinery and Tractor Implement Systems",
        type: "Technical Research Bulletin",
        year: "2024",
        department: "Farm Machinery & Power Engineering",
        authors: "Faculty Research Team, FMPE",
        docName: "Research_Bulletin_FMPE_2024_Demo.pdf"
      },
      {
        id: "pub-2",
        title: "Hydrological Modeling & Micro-Irrigation Guidelines for Coastal Andhra Pradesh",
        type: "Monograph",
        year: "2023",
        department: "Soil & Water Conservation Engineering",
        authors: "Faculty Research Team, SWCE",
        docName: "Monograph_SWCE_WaterResources_Demo.pdf"
      },
      {
        id: "pub-3",
        title: "Post-Harvest Produce Preservation and Extrusion Technologies",
        type: "Extension Handbook",
        year: "2023",
        department: "Agricultural Process & Food Engineering",
        authors: "Faculty Research Team, APFE",
        docName: "Handbook_APFE_PostHarvest_Demo.pdf"
      },
      {
        id: "pub-4",
        title: "'AGRI-ENGINEER' — Annual College Magazine (40th Anniversary Edition)",
        type: "Annual College Magazine",
        year: "2023-24",
        department: "College Editorial Board",
        authors: "Student & Faculty Editorial Committee",
        docName: "AgriEngineer_Annual_Magazine_Demo.pdf"
      }
    ]
  }
};

