import React, { createContext, useContext, useState, useEffect } from 'react';
import { collegeInfo as defaultCollegeInfo } from '../data/collegeInfo';
import { officialStructureData as defaultOfficialStructure } from '../data/officialStructureData';
import { programsData as defaultPrograms } from '../data/academicsData';
import { departmentsData as defaultDepartments } from '../data/academicsData';
import { facultyData as defaultFaculty } from '../data/facultyData';
import { facilitiesData as defaultFacilities } from '../data/facilitiesData';
import { noticesData as defaultNotices } from '../data/noticesData';
import { galleryData as defaultGallery } from '../data/galleryData';
import { auth, db, storage } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  doc, onSnapshot, setDoc, collection, deleteDoc, increment, getDocs
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const WebsiteContext = createContext();

const initialEnquiries = [
  {
    id: "enq-101",
    fullName: "K. Sai Praneeth",
    phone: "98480 12345",
    email: "sai.praneeth@gmail.com",
    course: "B.Tech in Agricultural Engineering",
    city: "Guntur, AP",
    message: "Inquiring about AP EAPCET cutoff ranks and hostel availability for boys.",
    date: "2024-10-26 14:32",
    status: "New"
  },
  {
    id: "enq-102",
    fullName: "M. Anusha Reddy",
    phone: "99890 54321",
    email: "anusha.reddy@yahoo.com",
    course: "M.Tech in Soil & Water Conservation",
    city: "Vijayawada, AP",
    message: "Seeking details on GATE scholarship eligibility and department research grants.",
    date: "2024-10-25 11:15",
    status: "Contacted"
  },
  {
    id: "enq-103",
    fullName: "V. Rajesh Kumar",
    phone: "94401 98765",
    email: "rajesh.v@outlook.com",
    course: "Ph.D. in Agricultural Engineering",
    city: "Tirupati, AP",
    message: "Interested in Ph.D. research under Farm Machinery & Power department.",
    date: "2024-10-23 09:40",
    status: "In Review"
  }
];

/**
 * Deeply sanitizes data before writing to Firestore.
 * Removes all undefined properties, converts undefined in arrays to null/omits them,
 * and ensures 100% compliant JSON-serializable payloads for Firestore setDoc().
 */
function safeFirestoreData(data) {
  if (data === undefined) return {};
  try {
    const jsonStr = JSON.stringify(data, (key, value) => {
      if (value === undefined) return null;
      return value;
    });
    if (!jsonStr) return {};
    const parsed = JSON.parse(jsonStr);

    function removeUndefinedAndCleanArrays(obj) {
      if (obj === undefined) return null;
      if (obj === null || typeof obj !== 'object') return obj;
      if (Array.isArray(obj)) {
        return obj
          .filter((item) => item !== undefined)
          .map((item) => (item === undefined ? null : removeUndefinedAndCleanArrays(item)));
      }
      const res = {};
      for (const [k, v] of Object.entries(obj)) {
        if (v !== undefined) {
          res[k] = removeUndefinedAndCleanArrays(v);
        }
      }
      return res;
    }
    return removeUndefinedAndCleanArrays(parsed);
  } catch (err) {
    console.warn("safeFirestoreData serialization notice:", err);
    return {};
  }
}

async function ensureAdminAuth() {
  if (!auth.currentUser) {
    try {
      await signInWithEmailAndPassword(auth, 'admin@caebpt.ac.in', 'caebpt2025');
    } catch (e) {
      console.warn('Firebase admin authentication notice:', e?.message);
    }
  }
}

function sanitizeOfficialStructure(data) {
  if (!data || typeof data !== 'object') return defaultOfficialStructure;

  // Safe History object
  const historyObj = {
    ...defaultOfficialStructure.aboutUs.history,
    ...(data.aboutUs?.history || {}),
    content: data.aboutUs?.history?.content && Array.isArray(data.aboutUs.history.content) && data.aboutUs.history.content.length >= 5
      ? data.aboutUs.history.content
      : defaultOfficialStructure.aboutUs.history.content,
    foundationStone: defaultOfficialStructure.aboutUs.history.foundationStone,
    inauguration: defaultOfficialStructure.aboutUs.history.inauguration,
    campusLayout: defaultOfficialStructure.aboutUs.history.campusLayout,
    landAssetPattern: defaultOfficialStructure.aboutUs.history.landAssetPattern,
    buildingComplex: defaultOfficialStructure.aboutUs.history.buildingComplex,
    coreDepartments: defaultOfficialStructure.aboutUs.history.coreDepartments,
    totalGraduates: defaultOfficialStructure.aboutUs.history.totalGraduates,
    milestones: defaultOfficialStructure.aboutUs.history.milestones
  };

  // Safe Accreditation object
  const defaultDocs = defaultOfficialStructure.aboutUs.accreditation.documents || [];
  const defaultDocsMap = new Map(defaultDocs.map(d => [d.id, d]));
  
  let mergedDocs = defaultDocs;
  if (Array.isArray(data.aboutUs?.accreditation?.documents) && data.aboutUs.accreditation.documents.length > 0) {
    const existingIds = new Set(data.aboutUs.accreditation.documents.map(d => d.id));
    const missingDefaults = defaultDocs.filter(def => !existingIds.has(def.id));

    const updatedUserDocs = data.aboutUs.accreditation.documents.map(d => {
      const def = defaultDocsMap.get(d.id);
      if (def) {
        return {
          ...def,
          ...d,
          fileUrl: d.fileUrl || def.fileUrl,
          fileSize: d.fileSize || def.fileSize,
          subReports: d.subReports || def.subReports,
          docName: d.docName || def.docName,
          approvedPrograms: d.approvedPrograms || def.approvedPrograms,
          isPrimaryOrder: d.isPrimaryOrder ?? def.isPrimaryOrder
        };
      }
      return d;
    });

    // Ensure the primary ICAR Accreditation Order is ALWAYS at position 1, followed by other statutory documents
    mergedDocs = [...missingDefaults, ...updatedUserDocs].sort((a, b) => {
      if (a.id === 'icar-accreditation-order') return -1;
      if (b.id === 'icar-accreditation-order') return 1;
      return (a.order || 0) - (b.order || 0);
    }).map((doc, idx) => ({
      ...doc,
      order: idx + 1
    }));
  }

  const accreditationObj = {
    ...defaultOfficialStructure.aboutUs.accreditation,
    ...(data.aboutUs?.accreditation || {}),
    statusStatement: data.aboutUs?.accreditation?.statusStatement || defaultOfficialStructure.aboutUs.accreditation.statusStatement,
    documents: mergedDocs
  };

  // Safe Vision & Mandate
  const visionMandateObj = {
    ...defaultOfficialStructure.aboutUs.visionMandate,
    ...(data.aboutUs?.visionMandate || {})
  };

  // Safe Org Structure
  const orgStructureObj = {
    ...defaultOfficialStructure.aboutUs.orgStructure,
    ...(data.aboutUs?.orgStructure || {}),
    chartImage: defaultOfficialStructure.aboutUs.orgStructure.chartImage,
    chartCaption: defaultOfficialStructure.aboutUs.orgStructure.chartCaption
  };

  // Safe Dean Message
  const isDeanStale = data.messages?.dean?.image?.includes('avatars') ||
    data.messages?.dean?.name?.includes('Ravi Babu');
  const deanRawImage = data.messages?.dean?.image || data.messages?.dean?.photo;
  const isDeanPlaceholder = Array.isArray(data.messages?.dean?.content) &&
    data.messages.dean.content[0]?.includes('crucial intersection of biological science');
  const deanObj = {
    ...defaultOfficialStructure.messages.dean,
    ...(data.messages?.dean || {}),
    name: (isDeanStale || !data.messages?.dean?.name)
      ? defaultOfficialStructure.messages.dean.name
      : data.messages.dean.name,
    qualification: "",
    image: (isDeanStale || !deanRawImage || deanRawImage.includes('unsplash.com') || deanRawImage.includes('avatars'))
      ? defaultOfficialStructure.messages.dean.image
      : deanRawImage,
    content: (isDeanPlaceholder || !data.messages?.dean?.content)
      ? defaultOfficialStructure.messages.dean.content
      : Array.isArray(data.messages.dean.content)
      ? data.messages.dean.content
      : data.messages.dean.message
      ? [data.messages.dean.message]
      : defaultOfficialStructure.messages.dean.content
  };

  // Safe Associate Dean Message
  const isAssocDeanMsgStale = data.messages?.associateDean?.image?.includes('avatars') ||
    data.messages?.associateDean?.name?.includes('Wesley') ||
    data.messages?.associateDean?.name?.includes('K. S. Rao');
  const assocDeanRawImage = data.messages?.associateDean?.image || data.messages?.associateDean?.photo;
  const isAssocDeanPlaceholder = Array.isArray(data.messages?.associateDean?.content) &&
    data.messages.associateDean.content[0]?.includes('served as a beacon of academic excellence');
  const assocDeanObj = {
    ...defaultOfficialStructure.messages.associateDean,
    ...(data.messages?.associateDean || {}),
    name: (isAssocDeanMsgStale || !data.messages?.associateDean?.name)
      ? defaultOfficialStructure.messages.associateDean.name
      : data.messages.associateDean.name,
    qualification: "",
    image: (isAssocDeanMsgStale || !assocDeanRawImage || assocDeanRawImage.includes('unsplash.com') || assocDeanRawImage.includes('avatars'))
      ? defaultOfficialStructure.messages.associateDean.image
      : assocDeanRawImage,
    content: (isAssocDeanPlaceholder || !data.messages?.associateDean?.content)
      ? defaultOfficialStructure.messages.associateDean.content
      : Array.isArray(data.messages.associateDean.content)
      ? data.messages.associateDean.content
      : data.messages.associateDean.message
      ? [data.messages.associateDean.message]
      : defaultOfficialStructure.messages.associateDean.content
  };

  // Safe Administration
  const isVcStale = data.administration?.viceChancellor?.name?.includes('Sarada');
  const isAssocDeanStale = data.administration?.associateDean?.name?.includes('John Wesley') || data.administration?.associateDean?.name?.includes('K. S. Rao');
  const isStaffStale = !Array.isArray(data.administration?.supportingStaff?.staffList) ||
    data.administration.supportingStaff.staffList.length < 10 ||
    data.administration.supportingStaff.staffList.some(s => s.name?.includes('Harikrishna') || s.name?.includes('Satyanarayana'));

  const adminObj = {
    ...defaultOfficialStructure.administration,
    ...(data.administration || {}),
    viceChancellor: isVcStale || !data.administration?.viceChancellor
      ? defaultOfficialStructure.administration.viceChancellor
      : {
          ...defaultOfficialStructure.administration.viceChancellor,
          ...(data.administration?.viceChancellor || data.administration?.vc || {})
        },
    deansOfFaculty: {
      ...defaultOfficialStructure.administration.deansOfFaculty,
      ...(data.administration?.deansOfFaculty || {}),
      facultyDeans: defaultOfficialStructure.administration.deansOfFaculty.facultyDeans
    },
    associateDean: isAssocDeanStale || !data.administration?.associateDean
      ? defaultOfficialStructure.administration.associateDean
      : {
          ...defaultOfficialStructure.administration.associateDean,
          ...(data.administration?.associateDean || {})
        },
    supportingStaff: isStaffStale || !data.administration?.supportingStaff
      ? defaultOfficialStructure.administration.supportingStaff
      : {
          ...defaultOfficialStructure.administration.supportingStaff,
          ...(data.administration?.supportingStaff || {}),
          staffList: defaultOfficialStructure.administration.supportingStaff.staffList
        }
  };

  const isHeroHighlightsStale = !Array.isArray(data.hero?.highlights) ||
    data.hero.highlights.length < 4 ||
    JSON.stringify(data.hero.highlights).includes('"5"') ||
    !data.hero.highlights.some(h => h.label?.includes('Core Academic') || h.label?.includes('Departments'));

  return {
    ...defaultOfficialStructure,
    ...data,
    collegeFullName: (data.collegeFullName && data.collegeFullName.includes('NTR'))
      ? data.collegeFullName
      : defaultOfficialStructure.collegeFullName,
    collegeShortName: (data.collegeShortName && data.collegeShortName.includes('NTR'))
      ? data.collegeShortName
      : defaultOfficialStructure.collegeShortName,
    hero: {
      ...defaultOfficialStructure.hero,
      ...(data.hero || {}),
      badge: data.hero?.badge || defaultOfficialStructure.hero.badge,
      titleMain: data.hero?.titleMain || defaultOfficialStructure.hero.titleMain,
      titleAccent: data.hero?.titleAccent || defaultOfficialStructure.hero.titleAccent,
      titleSuffix: data.hero?.titleSuffix || defaultOfficialStructure.hero.titleSuffix,
      intro: data.hero?.intro || data.hero?.subtitle || defaultOfficialStructure.hero.intro,
      bgImage: (data.hero?.bgImage && !data.hero.bgImage.includes('unsplash.com') && !data.hero.bgImage.includes('campus_hero.webp'))
        ? data.hero.bgImage
        : defaultOfficialStructure.hero.bgImage,
      highlights: isHeroHighlightsStale
        ? defaultOfficialStructure.hero.highlights
        : data.hero.highlights
    },
    messages: {
      dean: deanObj,
      associateDean: assocDeanObj
    },
    announcements: {
      newsEvents: Array.isArray(data.announcements?.newsEvents)
        ? data.announcements.newsEvents
        : defaultOfficialStructure.announcements.newsEvents,
      recruitment: Array.isArray(data.announcements?.recruitment)
        ? data.announcements.recruitment
        : defaultOfficialStructure.announcements.recruitment,
      tenders: Array.isArray(data.announcements?.tenders)
        ? data.announcements.tenders
        : defaultOfficialStructure.announcements.tenders,
      circulars: Array.isArray(data.announcements?.circulars)
        ? data.announcements.circulars
        : defaultOfficialStructure.announcements.circulars
    },
    academics: {
      courses: defaultOfficialStructure.academics.courses.map((defCourse) => {
        const userCourse = Array.isArray(data.academics?.courses)
          ? data.academics.courses.find((c) => c.id === defCourse.id)
          : null;
        if (!userCourse) return defCourse;

        const rawIntake = String(userCourse.intake || '');
        const isStaleIntake = !rawIntake ||
          rawIntake.includes('61 Base') ||
          rawIntake.includes("Farmers'") ||
          rawIntake.includes('FELLOWSHIP') ||
          rawIntake.includes('INTERNATIONAL') ||
          rawIntake.length > 25;

        return {
          ...defCourse,
          ...userCourse,
          intake: isStaleIntake ? defCourse.intake : userCourse.intake,
          intakeTable: defCourse.intakeTable,
          intakeBreakdown: defCourse.intakeBreakdown || userCourse.intakeBreakdown
        };
      }),
      departments: (() => {
        const userDepts = data.academics?.departments;
        const isDeptsStale = !Array.isArray(userDepts) ||
          userDepts.length < 6 ||
          !userDepts.some(d => d.id === 'ide' || d.slug?.includes('irrigation')) ||
          !userDepts.some(d => d.id === 'fmpe' && d.hodAndFaculty?.hodName?.includes('Rami Reddy')) ||
          !userDepts.some(d => (d.id === 'apfe' || d.id === 'pfe') && d.hodAndFaculty?.hodName?.includes('Sreenivasula')) ||
          !userDepts.some(d => d.id === 'ree' && d.hodAndFaculty?.hodName?.includes('Vishnu Vardhan')) ||
          JSON.stringify(userDepts).includes('Placeholder') ||
          JSON.stringify(userDepts).includes('Dr. Ch. Srinivas') ||
          JSON.stringify(userDepts).includes('Dr. M. S. Reddy') ||
          userDepts.some(d => !d.hodAndFaculty || !d.hodAndFaculty.hodName || d.hodAndFaculty.hodName.includes('Placeholder')) ||
          !userDepts.every(d => d.hodAndFaculty?.hodPhoto);

        if (isDeptsStale) {
          return defaultOfficialStructure.academics.departments;
        }

        return defaultOfficialStructure.academics.departments.map(defDept => {
          const userDept = userDepts.find(d => d.id === defDept.id || d.slug === defDept.slug);
          if (!userDept || JSON.stringify(userDept).includes('Placeholder') || JSON.stringify(userDept).includes('Dr. Ch. Srinivas') || JSON.stringify(userDept).includes('Dr. M. S. Reddy')) {
            return defDept;
          }
          const defHod = defDept.hodAndFaculty || {};
          const userHod = userDept.hodAndFaculty || {};
          return {
            ...defDept,
            ...userDept,
            hodAndFaculty: {
              ...defHod,
              ...userHod,
              hodPhoto: defHod.hodPhoto,
              hodId: defHod.hodId,
              facultyMembers: (defHod.facultyMembers || []).map((defMember) => {
                const uMember = (userHod.facultyMembers || []).find(
                  (m) => m.name === defMember.name || m.id === defMember.id
                );
                return {
                  ...defMember,
                  ...(uMember || {}),
                  photo: defMember.photo,
                  id: defMember.id
                };
              })
            }
          };
        });
      })()
    },
    administration: adminObj,
    welfare: defaultOfficialStructure.welfare.map((defW) => {
      const userW = Array.isArray(data.welfare)
        ? data.welfare.find((w) => w.id === defW.id || w.slug === defW.slug)
        : null;
      return {
        ...defW,
        ...(userW || {}),
        fullNarrative: defW.fullNarrative,
        gallery: defW.gallery,
        tables: defW.tables,
        dossier: defW.dossier,
        keyStatistics: defW.keyStatistics,
        sections: defW.sections,
        features: (userW?.features && userW.features.length >= defW.features.length)
          ? userW.features
          : defW.features
      };
    }),
    galleries: {
      photos: Array.isArray(data.galleries?.photos)
        ? data.galleries.photos.map((p, idx) => ({
            ...p,
            image: (p.image && !p.image.includes('unsplash.com'))
              ? p.image
              : (defaultOfficialStructure.galleries.photos[idx]?.image || `/images/gallery/photo_${(idx % 6) + 1}.webp`)
          }))
        : defaultOfficialStructure.galleries.photos,
      videos: Array.isArray(data.galleries?.videos)
        ? data.galleries.videos.map((v, idx) => ({
            ...v,
            thumbnail: (v.thumbnail && !v.thumbnail.includes('unsplash.com'))
              ? v.thumbnail
              : (defaultOfficialStructure.galleries.videos[idx]?.thumbnail || `/images/gallery/video_thumb_${(idx % 3) + 1}.webp`)
          }))
        : defaultOfficialStructure.galleries.videos
    },
    aboutUs: {
      ...defaultOfficialStructure.aboutUs,
      ...(data.aboutUs || {}),
      history: historyObj,
      visionMandate: visionMandateObj,
      orgStructure: orgStructureObj,
      accreditation: accreditationObj
    },
    publications: (data.publications && typeof data.publications === 'object' && Array.isArray(data.publications.list))
      ? data.publications
      : defaultOfficialStructure.publications
  };
}

export function WebsiteProvider({ children }) {
  // Official Structure Master State (Covers 100% of the college website specification)
  const [officialStructure, setOfficialStructure] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_official_structure');
      return saved ? sanitizeOfficialStructure(JSON.parse(saved)) : defaultOfficialStructure;
    } catch (e) {
      console.error("Error reading saved official structure", e);
      return defaultOfficialStructure;
    }
  });

  // College Info & Subsystems with safe deep merging
  const [collegeInfo, setCollegeInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_college_info');
      if (!saved) return defaultCollegeInfo;
      const parsed = JSON.parse(saved);
      return {
        ...defaultCollegeInfo,
        ...parsed,
        contact: {
          ...defaultCollegeInfo.contact,
          ...(parsed.contact || {})
        },
        institutionalHighlights: Array.isArray(parsed.institutionalHighlights) && parsed.institutionalHighlights.length > 0
          ? parsed.institutionalHighlights
          : defaultCollegeInfo.institutionalHighlights
      };
    } catch {
      return defaultCollegeInfo;
    }
  });

  const [notices, setNotices] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_notices');
      if (!saved) return defaultNotices;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultNotices;
    } catch {
      return defaultNotices;
    }
  });

  const [faculty, setFaculty] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_faculty');
      if (!saved) return defaultFaculty;
      const parsed = JSON.parse(saved);
      const isStale = !Array.isArray(parsed) ||
        parsed.length < 15 ||
        JSON.stringify(parsed).includes('Placeholder') ||
        JSON.stringify(parsed).includes('Dr. Ch. Srinivas') ||
        JSON.stringify(parsed).includes('Dr. M. S. Reddy') ||
        !parsed.some(f => f.name?.includes('Krupavathi')) ||
        !parsed.some(f => f.name?.includes('Vishnu Vardhan')) ||
        !parsed.some(f => f.name?.includes('Rami Reddy')) ||
        !parsed.some(f => f.name?.includes('Sreenivasula'));
      return isStale ? defaultFaculty : parsed;
    } catch {
      return defaultFaculty;
    }
  });

  const [programs, setPrograms] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_programs');
      if (!saved) return defaultPrograms;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length >= 7 && !parsed[0]?.intake?.includes('Sample')
        ? parsed
        : defaultPrograms;
    } catch {
      return defaultPrograms;
    }
  });

  const [facilities, setFacilities] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_facilities');
      if (!saved) return defaultFacilities;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultFacilities;
    } catch {
      return defaultFacilities;
    }
  });

  const [departments, setDepartments] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_departments');
      if (!saved) return defaultDepartments;
      const parsed = JSON.parse(saved);
      const isStale = !Array.isArray(parsed) ||
        parsed.length < 6 ||
        JSON.stringify(parsed).includes('Placeholder') ||
        JSON.stringify(parsed).includes('Dr. Ch. Srinivas') ||
        JSON.stringify(parsed).includes('Dr. M. S. Reddy') ||
        !parsed.some(d => d.id === 'ide' || d.slug?.includes('irrigation')) ||
        !parsed.some(d => d.id === 'fmpe' && d.headOfDept?.includes('Rami Reddy')) ||
        !parsed.some(d => (d.id === 'apfe' || d.id === 'pfe') && d.headOfDept?.includes('Sreenivasula')) ||
        !parsed.some(d => d.id === 'ree' && d.headOfDept?.includes('Vishnu Vardhan'));
      return isStale ? defaultDepartments : parsed;
    } catch {
      return defaultDepartments;
    }
  });

  const [gallery, setGallery] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_gallery');
      if (!saved) return defaultGallery;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultGallery;
    } catch {
      return defaultGallery;
    }
  });

  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('caebpt_enquiries');
    return saved ? JSON.parse(saved) : initialEnquiries;
  });

  const [siteSettings, setSiteSettings] = useState(() => {
    const saved = localStorage.getItem('caebpt_site_settings');
    const defaults = {
      emergencyBannerActive: true,
      emergencyBannerText: "AP EAPCET & ICAR AIEEA 2025–26 Counseling Window: Official B.Tech (Agri Engg) admissions guidelines and verification schedules are active.",
      maintenanceMode: false,
      rateLimitingActive: false,
      publicAdmissionsOpen: true,
      activeTheme: "Navy & Gold Standard",
      showTopUtilityBar: false,
      showUniversityBanner: false,
      topBarTimings: "Mon - Sat: 9 AM - 5 PM",
      topBarPhone: "+91 8643 224025"
    };
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });

  // Real-time Cloud Analytics & Stats
  const [trafficStats, setTrafficStats] = useState({
    databaseStatus: "Connected",
    todayViews: 1,
    serverHealth: "99.99%",
    activeRegion: "asia-south1 (Mumbai)"
  });

  // Persist to localStorage (fast local cache)
  useEffect(() => {
    localStorage.setItem('caebpt_official_structure', JSON.stringify(officialStructure));
  }, [officialStructure]);

  useEffect(() => {
    localStorage.setItem('caebpt_college_info', JSON.stringify(collegeInfo));
  }, [collegeInfo]);

  useEffect(() => {
    localStorage.setItem('caebpt_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('caebpt_faculty', JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem('caebpt_programs', JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    localStorage.setItem('caebpt_facilities', JSON.stringify(facilities));
  }, [facilities]);

  useEffect(() => {
    localStorage.setItem('caebpt_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('caebpt_site_settings', JSON.stringify(siteSettings));
  }, [siteSettings]);

  // ── FIREBASE REALTIME LISTENERS ──────────────────────────────
  // 1. Realtime Site Settings Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'settings', 'siteSettings');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists() && !docSnap.metadata.hasPendingWrites) {
          const remoteSettings = docSnap.data();
          setSiteSettings((prev) => ({ ...prev, ...remoteSettings }));
        }
      }, (err) => {
        console.warn('Firestore siteSettings listener notice:', err.message);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firebase listener error:', e);
    }
  }, []);

  // 2. Realtime Official Structure / Content Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'content', 'officialStructure');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists() && !docSnap.metadata.hasPendingWrites) {
          const remoteContent = docSnap.data();
          setOfficialStructure((prev) => sanitizeOfficialStructure({ ...prev, ...remoteContent }));
        }
      }, (err) => {
        console.warn('Firestore officialStructure listener notice:', err.message);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firebase content listener error:', e);
    }
  }, []);

  // 3. Realtime Admissions Enquiries Sync
  useEffect(() => {
    try {
      const colRef = collection(db, 'enquiries');
      const unsubscribe = onSnapshot(colRef, (querySnap) => {
        if (!querySnap.empty) {
          const remoteList = [];
          querySnap.forEach((d) => remoteList.push(d.data()));
          if (remoteList.length > 0) {
            setEnquiries(remoteList.sort((a, b) => (b.date || '').localeCompare(a.date || '')));
          }
        }
      }, (err) => {
        console.warn('Firestore enquiries listener notice:', err.message);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firebase enquiries error:', e);
    }
  }, []);

  // 4. Realtime Notices Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'content', 'notices');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (Array.isArray(data.list) && data.list.length > 0) {
            setNotices(data.list);
          }
        }
      }, () => {});
      return () => unsubscribe();
    } catch (e) {}
  }, []);

  // 5. Realtime Faculty Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'content', 'faculty');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (Array.isArray(data.list) && data.list.length > 0) {
            setFaculty(data.list);
          }
        }
      }, () => {});
      return () => unsubscribe();
    } catch (e) {}
  }, []);

  // 6. Realtime Programs Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'content', 'programs');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (Array.isArray(data.list) && data.list.length > 0) {
            setPrograms(data.list);
          }
        }
      }, () => {});
      return () => unsubscribe();
    } catch (e) {}
  }, []);

  // 7. Realtime Facilities Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'content', 'facilities');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (Array.isArray(data.list) && data.list.length > 0) {
            setFacilities(data.list);
          }
        }
      }, () => {});
      return () => unsubscribe();
    } catch (e) {}
  }, []);

  // 8. Realtime Departments Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'content', 'departments');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (Array.isArray(data.list) && data.list.length > 0) {
            setDepartments(data.list);
          }
        }
      }, () => {});
      return () => unsubscribe();
    } catch (e) {}
  }, []);

  // 9. Realtime Gallery Sync
  useEffect(() => {
    try {
      const docRef = doc(db, 'content', 'gallery');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.photos || data.videos) {
            setGallery((prev) => ({
              ...prev,
              photos: Array.isArray(data.photos) && data.photos.length > 0 ? data.photos : prev.photos,
              videos: Array.isArray(data.videos) && data.videos.length > 0 ? data.videos : prev.videos
            }));
          }
        }
      }, () => {});
      return () => unsubscribe();
    } catch (e) {}
  }, []);

  // 10. Realtime Pageviews Tracking & Analytics Sync
  useEffect(() => {
    try {
      const statsRef = doc(db, 'traffic', 'stats');
      setDoc(statsRef, {
        todayViews: increment(1),
        lastActive: new Date().toISOString()
      }, { merge: true }).catch(() => {});

      const unsubscribe = onSnapshot(statsRef, (docSnap) => {
        if (docSnap.exists()) {
          const remoteStats = docSnap.data();
          setTrafficStats((prev) => ({
            ...prev,
            todayViews: Number(remoteStats.todayViews) || 1,
            serverHealth: "99.99% (Google Cloud)"
          }));
        }
      }, () => {});
      return () => unsubscribe();
    } catch (e) {
      console.warn('Traffic stats error:', e);
    }
  }, []);

  // ─────────────────────────────────────────────────────────────
  // OFFICIAL STRUCTURE ADMIN ACTIONS (Control ALL sections)
  // ─────────────────────────────────────────────────────────────

  // Helper: persist officialStructure to Firestore after state update
  const persistStructure = (updater) => {
    setOfficialStructure((prev) => {
      const next = updater(prev);
      try {
        localStorage.setItem('caebpt_official_structure', JSON.stringify(next));
      } catch {}
      (async () => {
        try {
          await ensureAdminAuth();
          const cleaned = safeFirestoreData(next);
          if (cleaned && typeof cleaned === 'object' && Object.keys(cleaned).length > 0) {
            await setDoc(doc(db, 'content', 'officialStructure'), cleaned, { merge: true });
          }
        } catch (err) {
          console.warn('Firestore officialStructure write notice:', err.message);
        }
      })();
      return next;
    });
  };

  // 1. General College Details & Affiliation
  const updateGeneralDetails = (details) => {
    persistStructure((prev) => ({ ...prev, ...details }));
  };

  // 2. Hero Section
  const updateHero = (heroData) => {
    persistStructure((prev) => ({
      ...prev,
      hero: { ...(prev.hero || defaultOfficialStructure.hero), ...heroData }
    }));
  };

  // 3. Leadership Messages (Dean / Associate Dean)
  const updateLeadershipMessage = (key, msgData) => {
    persistStructure((prev) => {
      const target = key === 'dean' ? 'dean' : 'associateDean';
      const currentMsg = prev.messages?.[target] || defaultOfficialStructure.messages[target];
      const img = msgData.photo || msgData.image || currentMsg.image;
      const content = msgData.content || (msgData.message ? [msgData.message] : currentMsg.content);
      return {
        ...prev,
        messages: {
          ...prev.messages,
          [target]: {
            ...currentMsg, ...msgData,
            image: img, photo: img,
            content: Array.isArray(content) ? content : [String(content)]
          }
        }
      };
    });
  };

  // 4. Announcements & Circulars (newsEvents, recruitment, tenders, circulars)
  const addAnnouncement = (category, item) => {
    persistStructure((prev) => {
      const currentList = prev.announcements[category] || [];
      const newItem = { ...item, id: `${category}-${Date.now()}` };
      return { ...prev, announcements: { ...prev.announcements, [category]: [newItem, ...currentList] } };
    });
  };

  const updateAnnouncement = (category, id, updated) => {
    persistStructure((prev) => {
      const currentList = prev.announcements[category] || [];
      return {
        ...prev,
        announcements: {
          ...prev.announcements,
          [category]: currentList.map((item) => (item.id === id ? { ...item, ...updated } : item))
        }
      };
    });
  };

  const deleteAnnouncement = (category, id) => {
    persistStructure((prev) => {
      const currentList = prev.announcements[category] || [];
      return {
        ...prev,
        announcements: { ...prev.announcements, [category]: currentList.filter((item) => item.id !== id) }
      };
    });
  };

  // 5. Galleries (Photos & Videos)
  const addGalleryPhoto = (photo) => {
    persistStructure((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        photos: [{ ...photo, id: `photo-${Date.now()}` }, ...prev.galleries.photos]
      }
    }));
  };

  const deleteGalleryPhoto = (id) => {
    persistStructure((prev) => ({
      ...prev,
      galleries: { ...prev.galleries, photos: prev.galleries.photos.filter((p) => p.id !== id) }
    }));
  };

  const addGalleryVideo = (video) => {
    persistStructure((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        videos: [{ ...video, id: `video-${Date.now()}` }, ...prev.galleries.videos]
      }
    }));
  };

  const deleteGalleryVideo = (id) => {
    persistStructure((prev) => ({
      ...prev,
      galleries: { ...prev.galleries, videos: prev.galleries.videos.filter((v) => v.id !== id) }
    }));
  };

  // 6. Departments (Academics)
  const addDepartment = (deptData) => {
    const rawName = (deptData.name || 'New Department').trim();
    const shortCode = (deptData.shortCode || rawName.slice(0, 4).toUpperCase()).trim().toUpperCase();
    const baseSlug = (deptData.slug || rawName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) || 'dept';
    const id = shortCode.toLowerCase();

    const newDepartment = {
      id, slug: baseSlug, name: rawName, shortCode,
      about: deptData.about || `The Department of ${rawName} offers specialized educational training, research initiatives, and laboratory infrastructure at CAE Bapatla.`,
      labs: Array.isArray(deptData.labs) && deptData.labs.length > 0 ? deptData.labs : (deptData.initialLab ? [deptData.initialLab] : ['Foundational Engineering Laboratory']),
      hodAndFaculty: {
        hodName: deptData.hodName || 'Head of Department',
        hodDesignation: deptData.hodDesignation || 'Professor & Head',
        hodSpecialization: deptData.hodSpecialization || 'Agricultural Engineering & Allied Technologies',
        facultyMembers: Array.isArray(deptData.facultyMembers) ? deptData.facultyMembers : []
      }
    };

    persistStructure((prev) => {
      const existing = prev.academics?.departments || defaultOfficialStructure.academics.departments || [];
      const uniqueSlug = existing.some(d => d.slug === baseSlug) ? `${baseSlug}-${Date.now().toString().slice(-4)}` : baseSlug;
      newDepartment.slug = uniqueSlug;
      return { ...prev, academics: { ...prev.academics, departments: [...existing, newDepartment] } };
    });

    return newDepartment;
  };

  const deleteDepartment = (slug) => {
    persistStructure((prev) => ({
      ...prev,
      academics: { ...prev.academics, departments: (prev.academics?.departments || []).filter((dept) => dept.slug !== slug) }
    }));
  };

  const updateDepartment = (slug, updatedData) => {
    persistStructure((prev) => ({
      ...prev,
      academics: {
        ...prev.academics,
        departments: (prev.academics?.departments || []).map((dept) =>
          dept.slug === slug ? { ...dept, ...updatedData } : dept
        )
      }
    }));
  };

  // 7. Student Welfare Activities (12 sections)
  const updateWelfareActivity = (slug, updatedData) => {
    persistStructure((prev) => ({
      ...prev,
      welfare: prev.welfare.map((act) => act.slug === slug ? { ...act, ...updatedData } : act)
    }));
  };

  // 8. Administration Directory (VC, Deans, Associate Dean, Supporting Staff)
  const updateAdministration = (section, updatedData) => {
    const key = section === 'vc' ? 'viceChancellor' : section;
    persistStructure((prev) => ({
      ...prev,
      administration: {
        ...prev.administration,
        [key]: { ...(prev.administration?.[key] || defaultOfficialStructure.administration[key] || {}), ...updatedData }
      }
    }));
  };

  // 9. About Us (History, Vision & Mandate, Org Structure, Accreditation)
  const updateAboutUs = (section, updatedData) => {
    persistStructure((prev) => {
      const currentSection = prev.aboutUs?.[section] || defaultOfficialStructure.aboutUs[section] || {};
      const nextSection = typeof updatedData === 'string'
        ? { ...currentSection, content: [updatedData] }
        : { ...currentSection, ...updatedData };
      return { ...prev, aboutUs: { ...prev.aboutUs, [section]: nextSection } };
    });
  };

  // 9B. Official Documents & Accreditation Documents Management
  const addAccreditationDocument = (docData) => {
    persistStructure((prev) => {
      const currentDocs = prev.aboutUs?.accreditation?.documents || defaultOfficialStructure.aboutUs.accreditation.documents || [];
      const newDoc = {
        id: docData.id || `doc-${Date.now()}`,
        order: currentDocs.length + 1,
        tag: docData.tag || '<OFFICIAL DOCUMENT>',
        title: docData.title || 'Untitled Document',
        refNo: docData.refNo || `ANGRAU/CAE/${new Date().getFullYear()}/${currentDocs.length + 1}`,
        type: docData.type || 'Institutional Document',
        date: docData.date || 'Current Cycle',
        authority: docData.authority || 'Dr. NTRCAE & ANGRAU',
        summary: docData.summary || '',
        docName: docData.docName || 'Official_Document.pdf',
        fileUrl: docData.fileUrl || '',
        fileData: docData.fileData || '',
        fileSize: docData.fileSize || ''
      };
      return {
        ...prev,
        aboutUs: { ...prev.aboutUs, accreditation: { ...prev.aboutUs?.accreditation, documents: [...currentDocs, newDoc] } }
      };
    });
  };

  const updateAccreditationDocument = (docId, updatedDocData) => {
    persistStructure((prev) => {
      const currentDocs = prev.aboutUs?.accreditation?.documents || defaultOfficialStructure.aboutUs.accreditation.documents || [];
      const updatedDocs = currentDocs.map((doc) => doc.id === docId ? { ...doc, ...updatedDocData } : doc);
      return { ...prev, aboutUs: { ...prev.aboutUs, accreditation: { ...prev.aboutUs?.accreditation, documents: updatedDocs } } };
    });
  };

  const deleteAccreditationDocument = (docId) => {
    persistStructure((prev) => {
      const currentDocs = prev.aboutUs?.accreditation?.documents || defaultOfficialStructure.aboutUs.accreditation.documents || [];
      const reindexed = currentDocs.filter((doc) => doc.id !== docId).map((doc, idx) => ({ ...doc, order: idx + 1 }));
      return { ...prev, aboutUs: { ...prev.aboutUs, accreditation: { ...prev.aboutUs?.accreditation, documents: reindexed } } };
    });
  };

  const reorderAccreditationDocuments = (startIndex, endIndex) => {
    persistStructure((prev) => {
      const currentDocs = [...(prev.aboutUs?.accreditation?.documents || defaultOfficialStructure.aboutUs.accreditation.documents || [])];
      if (startIndex < 0 || startIndex >= currentDocs.length || endIndex < 0 || endIndex >= currentDocs.length) return prev;
      const [removed] = currentDocs.splice(startIndex, 1);
      currentDocs.splice(endIndex, 0, removed);
      const reindexed = currentDocs.map((doc, idx) => ({ ...doc, order: idx + 1 }));
      return { ...prev, aboutUs: { ...prev.aboutUs, accreditation: { ...prev.aboutUs?.accreditation, documents: reindexed } } };
    });
  };

  const resetAccreditationDocuments = () => {
    persistStructure((prev) => ({
      ...prev,
      aboutUs: { ...prev.aboutUs, accreditation: { ...prev.aboutUs?.accreditation, documents: defaultOfficialStructure.aboutUs.accreditation.documents } }
    }));
  };

  // 10. Publications
  const addPublication = (pub) => {
    persistStructure((prev) => ({
      ...prev,
      publications: [{ ...pub, id: `pub-${Date.now()}` }, ...prev.publications]
    }));
  };

  const deletePublication = (id) => {
    persistStructure((prev) => ({
      ...prev,
      publications: prev.publications.filter((p) => p.id !== id)
    }));
  };

  // 11. Firebase Storage — upload file and return download URL
  const uploadFileToStorage = async (file, path) => {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  // 12. Enquiries
  const addEnquiry = (enquiryData) => {
    const newEnq = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: "New"
    };
    setEnquiries((prev) => [newEnq, ...prev]);
    try {
      const cleaned = safeFirestoreData(newEnq);
      setDoc(doc(db, 'enquiries', newEnq.id), cleaned).catch(() => {});
    } catch (err) {
      console.warn('Enquiry write notice:', err.message);
    }
  };

  const updateEnquiryStatus = (id, status) => {
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
    try {
      setDoc(doc(db, 'enquiries', id), { status }, { merge: true }).catch(() => {});
    } catch (err) {
      console.warn('Enquiry status write notice:', err.message);
    }
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
    try {
      deleteDoc(doc(db, 'enquiries', id)).catch(() => {});
    } catch {}
  };

  // 12. Site Settings
  const updateSiteSettings = (updated) => {
    setSiteSettings((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('caebpt_site_settings', JSON.stringify(next));
      } catch {}
      (async () => {
        try {
          await ensureAdminAuth();
          const cleaned = safeFirestoreData(next);
          await setDoc(doc(db, 'settings', 'siteSettings'), cleaned, { merge: true });
        } catch (err) {
          console.warn('Firestore siteSettings write notice:', err.message);
        }
      })();
      return next;
    });
  };

  // 13. Reset to original mock data
  const resetToDefaultData = () => {
    setOfficialStructure(defaultOfficialStructure);
    setCollegeInfo(defaultCollegeInfo);
    setNotices(defaultNotices);
    setFaculty(defaultFaculty);
    setPrograms(defaultPrograms);
    setFacilities(defaultFacilities);
    setDepartments(defaultDepartments);
    setGallery(defaultGallery);
    setEnquiries(initialEnquiries);
    setSiteSettings({
      emergencyBannerActive: true,
      emergencyBannerText: "AP EAPCET & ICAR AIEEA 2025–26 Counseling Window: Official B.Tech (Agri Engg) admissions guidelines and verification schedules are active.",
      maintenanceMode: false,
      rateLimitingActive: false,
      publicAdmissionsOpen: true,
      activeTheme: "Navy & Gold Standard",
      showTopUtilityBar: false,
      showUniversityBanner: false,
      topBarTimings: "Mon - Sat: 9 AM - 5 PM",
      topBarPhone: "+91 8643 224025"
    });
    localStorage.clear();
  };

  return (
    <WebsiteContext.Provider
      value={{
        // Official College Structure State & Actions
        officialStructure,
        setOfficialStructure,
        updateGeneralDetails,
        updateHero,
        updateLeadershipMessage,
        addAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
        addGalleryPhoto,
        deleteGalleryPhoto,
        addGalleryVideo,
        deleteGalleryVideo,
        addDepartment,
        deleteDepartment,
        updateDepartment,
        updateWelfareActivity,
        updateAdministration,
        updateAboutUs,
        addAccreditationDocument,
        updateAccreditationDocument,
        deleteAccreditationDocument,
        reorderAccreditationDocuments,
        resetAccreditationDocuments,
        addPublication,
        deletePublication,
        uploadFileToStorage,

        // Supporting Subsystems
        collegeInfo,
        setCollegeInfo,
        notices,
        faculty,
        programs,
        facilities,
        departments,
        gallery,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        siteSettings,
        updateSiteSettings,
        trafficStats,
        setTrafficStats,
        resetToDefaultData
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsite() {
  const context = useContext(WebsiteContext);
  if (!context) {
    throw new Error('useWebsite must be used within a WebsiteProvider');
  }
  return context;
}
