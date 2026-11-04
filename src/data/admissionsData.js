/**
 * Official Statutory Admissions & Counseling Policy Data
 * CAE Bapatla (ANGRAU) — Governed by APSCHE, ICAR New Delhi, and Government of Andhra Pradesh.
 */

export const admissionCriteriaUG = {
  degree: "B.Tech. (Agricultural Engineering)",
  duration: "Min: 4 Years, Max: 7 Years (from the date of admission)",
  entranceExam: "Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test (AP EAPCET) / EAMCET",
  statutoryOrder: "G.O.Ms.No.184, dated 20-08-1993 of Education (E.C.2) Department",
  counselingAuthority: "Centralized Counseling System by Andhra Pradesh State Council of Higher Education (APSCHE)",
  intakeSummary: "60 Approved Base Seats + 20% Supernumerary ICAR Quota + 15% Lateral Entry (88 Total Seats)",
  quotaBreakdown: [
    { quota: "Convener Quota (AP EAPCET)", pct: "60%", seats: 36, basis: "Merit and state statutory reservation" },
    { quota: "Farmers' Quota", pct: "40%", seats: 24, basis: "Policies and reservation guidelines of Govt. of Andhra Pradesh for agrarian families" },
    { quota: "ICAR Quota (Supernumerary)", pct: "20%", seats: 12, basis: "Nominated by ICAR New Delhi through CUET / AIEEA-UG at National Level" },
    { quota: "Lateral Entry (AP ECET)", pct: "15%", seats: 9, basis: "Direct 2nd Year admission for 3-Year Diploma in Agri Engg holders" }
  ],
  ageCriteria: {
    minAge: "17 Years as on 31st December of the year of admission",
    generalUpper: "22 Years for general candidates",
    scStUpper: "25 Years for Scheduled Caste (SC) and Scheduled Tribe (ST) candidates",
    phUpper: "27 Years for Physically Challenged (PH) candidates"
  }
};

export const statutoryFlowcharts = {
  ug: {
    title: "Under Graduate Admission Process",
    program: "B. Tech. (Agricultural Engineering) — 60 Base Seats",
    channels: [
      {
        name: "Convenor Quota",
        test: "AP EAPCET (60%)",
        seats: "36 seats",
        type: "convenor",
        note: "Merit-based state counseling"
      },
      {
        name: "Farmer's Quota",
        test: "AP EAPCET (40%)",
        seats: "24 seats",
        type: "farmers",
        note: "Form-I & Form-II verified"
      },
      {
        name: "ICAR Quota",
        test: "ICAR – CUET (UG)",
        seats: "+20% (12 seats)",
        type: "icar",
        note: "All-India national quota"
      }
    ],
    lateralEntry: {
      name: "Lateral Entry into II Year",
      test: "AP ECET (APSCHE)",
      seats: "+15% (9 seats)",
      note: "For 3-Year Agricultural Engineering Diploma holders"
    }
  },
  pg: {
    title: "Post Graduate Admission Process",
    program: "M. Tech. (Agricultural Engineering) — 14 Seats",
    testName: "ICAR – JRF Entrance Examination",
    branches: [
      { name: "Farm Machinery & Power Engineering", seats: "3 seats", entrance: "ICAR – JRF Entrance" },
      { name: "Processing & Food Engineering", seats: "5 seats", entrance: "ICAR – JRF Entrance" },
      { name: "Soil & Water Conservation Engineering", seats: "6 seats", entrance: "ICAR – JRF Entrance", note: "5 Regular + 1* EWS" }
    ]
  },
  phd: {
    title: "Doctoral Programme Admission Process",
    program: "Ph.D. (Agricultural Engineering) — 4 Seats",
    testName: "ICAR – SRF Entrance Examination & Interview",
    branches: [
      { name: "Farm Machinery & Power Engineering", seats: "2 seats", entrance: "ICAR – SRF Entrance + Interview" },
      { name: "Processing & Food Engineering", seats: "1 seat", entrance: "ICAR – SRF Entrance + Interview" },
      { name: "Soil & Water Conservation Engineering", seats: "1 seat", entrance: "ICAR – SRF Entrance + Interview" }
    ]
  }
};

export const statutoryReservation = {
  localArea: {
    title: "Allocation of Seats in Relation to Local Area (Presidential Order)",
    unreserved: {
      pct: "15%",
      label: "Unreserved (UR) Category",
      description: "Open to any candidate from Andhra University (AU) or Sri Venkateswara University (SVU) region of Andhra Pradesh. Candidates from Osmania University (OU) region (Telangana State) are also eligible to compete with intermediate marks."
    },
    local: {
      pct: "85%",
      label: "Local Area Seats",
      ratio: "42 : 22",
      description: "Allocated strictly in the ratio of 42 : 22 between Andhra University (AU) and Sri Venkateswara University (SVU) regions respectively among local candidates."
    }
  },
  socialCategories: [
    {
      group: "Backward Classes (BC)",
      totalPct: "29%",
      breakdown: [
        { code: "BC-A", pct: "7%" },
        { code: "BC-B", pct: "10%" },
        { code: "BC-C", pct: "1%" },
        { code: "BC-D", pct: "7%" },
        { code: "BC-E", pct: "4%" }
      ]
    },
    {
      group: "Scheduled Caste (SC)",
      totalPct: "15%",
      breakdown: [{ code: "SC", pct: "15%" }]
    },
    {
      group: "Scheduled Tribe (ST)",
      totalPct: "06%",
      breakdown: [{ code: "ST", pct: "6%" }]
    }
  ],
  specialReservations: [
    { title: "Children of Armed Personnel (CAP)", code: "CAP", pct: "2%", icon: "Shield" },
    { title: "National Cadet Corps", code: "NCC", pct: "1%", icon: "Award" },
    { title: "Games & Sports Quota", code: "Sports", pct: "0.5%", icon: "Trophy" },
    {
      title: "Differently Abled (PH)",
      code: "PH",
      pct: "3%",
      icon: "HeartHandshake",
      subDistribution: [
        { type: "Visually Handicapped", pct: "1%" },
        { type: "Hearing Impaired", pct: "1%" },
        { type: "Orthopedically Handicapped", pct: "1%" }
      ]
    }
  ],
  womenReservation: {
    pct: "33 1/3 %",
    statutoryOrder: "G.O.Ms. No. 75 / Edn., dated 13-03-1996 of Government of Andhra Pradesh",
    description: "In each course, 33 1/3 % of the seats are reserved in favour of women candidates horizontally from each social category."
  },
  farmersQuota: {
    pct: "40%",
    title: "Reservations for Candidates from Families of Agriculturists cum Rural Area",
    eligibilityText: "Forty (40) percent of the seats in B.Tech. (Agricultural Engineering) are reserved for candidates coming from families of Agriculturists actually engaged in agriculture and owning not less than 1 acre of agricultural land, and who have studied for a minimum of 4 years in schools located in Non-Municipal (rural) areas.",
    formsRequired: [
      {
        formNumber: "Form - I",
        name: "Land Ownership & Revenue Certificate",
        officer: "Mandal Revenue Officer (MRO) / Tahsildar",
        instructions: "Must contain official Patta Numbers and extent of agricultural land (minimum 1 acre) certified by a Revenue Officer not below the rank of Mandal Revenue Officer of the Mandal concerned, or a certified copy of Pattadar Pass Book issued by the MRO with official seal."
      },
      {
        formNumber: "Form - II",
        name: "Non-Municipal (Rural) School Study Certificate",
        officer: "Head of the Educational Institution",
        instructions: "Certificate issued by the Heads of Institutions confirming that the candidate has studied for a minimum period of 4 years in Schools located in Non-Municipal areas during their study from 1st class to 12th class (or Intermediate)."
      }
    ],
    mandatoryNotice: "Form - I and Form - II must be submitted with official signatures and office seals of the Mandal Revenue Officer / Tahsildar and Head of Institution respectively. Incomplete forms without seals will be summarily rejected."
  }
};

export const pgPhdAdmissionWeightage = {
  pg: {
    degree: "M.Tech. (Agricultural Engineering)",
    duration: "2 Years (4 Semesters)",
    entranceExam: "ICAR All India Entrance Examination for Admission (AIEEA-PG)",
    ratio: "30 : 70",
    distribution: [
      { component: "Undergraduate (UG) Academic Record", weight: "30%", color: "bg-blue-500" },
      { component: "ICAR AIEEA Entrance Score / Marks", weight: "70%", color: "bg-gold-500" }
    ],
    qualifyingRule: "Candidate must qualify and secure a valid rank card in the specific subject group in ICAR AIEEA."
  },
  phd: {
    degree: "Ph.D. (Agricultural Engineering)",
    duration: "3 Years (6 Semesters)",
    entranceExam: "ICAR All India Competitive Examination (AICE-JRF/SRF)",
    ratio: "10 : 30 : 50 : 10",
    distribution: [
      { component: "Undergraduate (UG) Record", weight: "10%", color: "bg-blue-400" },
      { component: "Postgraduate (M.Tech) Record", weight: "30%", color: "bg-blue-600" },
      { component: "ICAR AICE Competitive Test", weight: "50%", color: "bg-gold-500" },
      { component: "Personal Interview & Viva-Voce", weight: "10%", color: "bg-emerald-500" }
    ],
    qualifyingRule: "Candidate must qualify and secure a valid rank card in ICAR AICE in the subject specialization and clear the interview."
  }
};

export const foreignStudentsPolicy = {
  title: "Admission of Foreign / International Students",
  nodalAgency: "Asst. Director General (HRD-II), Indian Council of Agricultural Research (ICAR), Krishi Anusandhan Bhavan, New Delhi - 110012",
  procedure: "Applications must be routed through ICAR HRD-II with complete academic records, transcripts, medium of instruction, and research outline (for PG/Ph.D.). Applications are scrutinized and evaluated by the collegiate faculty committee to verify eligibility.",
  visaRequirement: "Candidates applying for Ph.D. degree must obtain a valid Research Visa from the Ministry of Education / MHRD, Government of India.",
  institutionalFee: {
    international: "US $ 4,000 / Year",
    saarc: "US $ 2,000 / Year (SAARC Countries)",
    note: "Payable annually in addition to normal collegiate fees payable by Indian students."
  },
  amenities: [
    "Dedicated International Student Residential Hostel",
    "High-speed campus-wide Wi-Fi & Gigabit internet",
    "Digital Library access with international journal databases",
    "Modern sports, gym, and cultural amenities"
  ]
};

export const collegiateLifecycle = [
  {
    step: "01",
    phase: "Fee Payment & Counseling",
    title: "Fee Mechanism at Admission",
    desc: "Application fees, semester fees, and special university dues prescribed by ANGRAU are paid in person by the candidate at the university counseling center upon official seat allocation."
  },
  {
    step: "02",
    phase: "Orientation & Student Registration",
    title: "Associate Dean's Registration Program",
    desc: "Guidelines are communicated by the Associate Dean. Newly admitted students attend an orientation program and register in person with their identity card at the registration counter on scheduled dates."
  },
  {
    step: "03",
    phase: "Course Allotment by Academic Section",
    title: "Roster Preparation & Faculty Allocation",
    desc: "The Undergraduate Academic Section compiles official lists of registered students course-wise and dispatches them to respective department professors within one week of registration."
  },
  {
    step: "04",
    phase: "Academic Calendar Communication",
    title: "Approved Academic Schedule Publication",
    desc: "An approved academic calendar outlining dates for course registration, instruction commencement, preparation holidays, final theory exams, and next semester start is communicated within 10 days of semester registration."
  }
];

