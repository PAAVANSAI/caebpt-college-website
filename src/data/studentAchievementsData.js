/**
 * Student Performance & Competitive Exam Achievers Data
 * College of Agricultural Engineering, Bapatla (ANGRAU)
 * Documented from Institutional Examination Roster
 */

export const gateToppersData = [
  { name: "Prakash Kumar", rollNo: "BE/2020-027", exam: "GATE 2026", air: 2, badge: "AIR 2" },
  { name: "Deepthi Kuraku", rollNo: "BED/2023-008", exam: "GATE 2026", air: 16, badge: "AIR 16" },
  { name: "Gulshan Kumar", rollNo: "BE/2022-029", exam: "GATE 2026", air: 29, badge: "AIR 29" },
  { name: "Sai Keertika.B", rollNo: "BE/2022-018", exam: "GATE 2026", air: 56, badge: "AIR 56" },
  { name: "Raunak Kumar", rollNo: "BE/2020-027", exam: "GATE 2024", air: 15, badge: "AIR 15" },
  { name: "Suman Kumar Saha", rollNo: "BE/2020-048", exam: "GATE 2024", air: 31, badge: "AIR 31" },
  { name: "Shashwat Maurya", rollNo: "BE/2018-067", exam: "GATE 2022", air: 2, badge: "AIR 2" },
  { name: "Sudhir Kumar K", rollNo: "BE/2017-069", exam: "GATE 2021", air: 4, badge: "AIR 4" },
  { name: "MV Ram Prakash", rollNo: "BE/2017-056", exam: "GATE 2021", air: 8, badge: "AIR 8" },
  { name: "Yogesh Singh D", rollNo: "BE/2017-070", exam: "GATE 2021", air: 23, badge: "AIR 23" },
  { name: "Narendra Kumar Chaudhary", rollNo: "BE/2017-009", exam: "GATE 2021", air: 27, badge: "AIR 27" },
  { name: "Soubhagya Kumar. S", rollNo: "BE/2017-068", exam: "GATE 2021", air: 27, badge: "AIR 27" }
];

export const nationalExamsPerformanceData = {
  columns: ["Year", "JRF", "SRF", "NET", "ARS", "GATE", "Management", "Others*", "Total"],
  rows: [
    { year: "2021-22", jrf: 4, srf: "-", net: "-", ars: "-", gate: 9, management: 3, others: 1, total: 17 },
    { year: "2022-23", jrf: 5, srf: "-", net: 3, ars: 3, gate: 5, management: 3, others: 2, total: 21 },
    { year: "2023-24", jrf: 4, srf: "-", net: "-", ars: "-", gate: 3, management: 5, others: 1, total: 13 },
    { year: "2024-25", jrf: 4, srf: 2, net: "-", ars: "-", gate: 5, management: "-", others: 4, total: 15 },
    { year: "2025-26", jrf: "-", srf: "-", net: "-", ars: "-", gate: 13, management: 4, others: "-", total: 17 }
  ],
  totalSummary: {
    year: "Total",
    jrf: 17,
    srf: 2,
    net: 3,
    ars: 3,
    gate: 35,
    management: 15,
    others: 8,
    total: 83
  },
  note: "*Others includes competitive examinations like NMAT / XAT / NIFTEM.",
  premierInstitutesJoined: [
    "IIT Kharagpur",
    "IIT Madras",
    "IIT Bombay",
    "IIT Roorkee",
    "NITIE Mumbai",
    "IIT Kanpur",
    "National Institutes of Technology (NITs)",
    "ICAR-IARI, New Delhi",
    "State Agricultural Universities (SAUs)",
    "IIMs",
    "IRMA Anand",
    "ICAR-NAARM Hyderabad"
  ],
  posterImage: "/images/achievements/student_performance_national_exams.png",
  toppersPosterImage: "/images/achievements/gate_toppers.png",
  achieversPosterImage: "/images/achievements/ars_icar_achievers.png"
};

export const arsAchieversData = [
  { name: "Raja Sekhar M", rollNo: "BEM/2015-010", exam: "ARS Examination", designation: "Agricultural Research Scientist" },
  { name: "Shilpa S Selvan", rollNo: "BEM/2017-005", exam: "ARS Examination", designation: "Agricultural Research Scientist" },
  { name: "Sivamma. P", rollNo: "BEP/2019-004", exam: "ARS Examination", designation: "Agricultural Research Scientist" }
];

export const icarSrfJrfAchieversData = [
  { name: "K. Madhu Malathi", rollNo: "BEM/2022-001", exam: "ICAR 2024 – SRF", air: 18, badge: "AIR 18" },
  { name: "K. Koteswara Rao", rollNo: "BEM/2015-002", exam: "ICAR 2024 – SRF", air: 48, badge: "AIR 48" },
  { name: "R. Navin", rollNo: "BE/2017-034", exam: "ICAR 2022 – JRF", air: 17, badge: "AIR 17" }
];
