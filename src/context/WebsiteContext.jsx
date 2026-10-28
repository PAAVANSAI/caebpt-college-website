import React, { createContext, useContext, useState, useEffect } from 'react';
import { collegeInfo as defaultCollegeInfo } from '../data/collegeInfo';
import { officialStructureData as defaultOfficialStructure } from '../data/officialStructureData';
import { programsData as defaultPrograms } from '../data/academicsData';
import { departmentsData as defaultDepartments } from '../data/academicsData';
import { facultyData as defaultFaculty } from '../data/facultyData';
import { facilitiesData as defaultFacilities } from '../data/facilitiesData';
import { noticesData as defaultNotices } from '../data/noticesData';
import { galleryData as defaultGallery } from '../data/galleryData';

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

function sanitizeOfficialStructure(data) {
  if (!data || typeof data !== 'object') return defaultOfficialStructure;

  // Safe History object
  let historyObj = defaultOfficialStructure.aboutUs.history;
  if (data.aboutUs?.history) {
    if (typeof data.aboutUs.history === 'string') {
      historyObj = {
        ...defaultOfficialStructure.aboutUs.history,
        content: [data.aboutUs.history]
      };
    } else {
      historyObj = {
        ...defaultOfficialStructure.aboutUs.history,
        ...data.aboutUs.history,
        content: Array.isArray(data.aboutUs.history.content)
          ? data.aboutUs.history.content
          : defaultOfficialStructure.aboutUs.history.content,
        milestones: Array.isArray(data.aboutUs.history.milestones)
          ? data.aboutUs.history.milestones
          : defaultOfficialStructure.aboutUs.history.milestones
      };
    }
  }

  // Safe Accreditation object
  let accreditationObj = defaultOfficialStructure.aboutUs.accreditation;
  if (data.aboutUs?.accreditation) {
    accreditationObj = {
      ...defaultOfficialStructure.aboutUs.accreditation,
      ...data.aboutUs.accreditation,
      details: Array.isArray(data.aboutUs.accreditation.details)
        ? data.aboutUs.accreditation.details
        : defaultOfficialStructure.aboutUs.accreditation.details
    };
  }

  // Safe Dean Message
  const deanObj = {
    ...defaultOfficialStructure.messages.dean,
    ...(data.messages?.dean || {}),
    image: data.messages?.dean?.image || data.messages?.dean?.photo || defaultOfficialStructure.messages.dean.image,
    content: Array.isArray(data.messages?.dean?.content)
      ? data.messages.dean.content
      : data.messages?.dean?.message
      ? [data.messages.dean.message]
      : defaultOfficialStructure.messages.dean.content
  };

  // Safe Associate Dean Message
  const assocDeanObj = {
    ...defaultOfficialStructure.messages.associateDean,
    ...(data.messages?.associateDean || {}),
    image: data.messages?.associateDean?.image || data.messages?.associateDean?.photo || defaultOfficialStructure.messages.associateDean.image,
    content: Array.isArray(data.messages?.associateDean?.content)
      ? data.messages.associateDean.content
      : data.messages?.associateDean?.message
      ? [data.messages.associateDean.message]
      : defaultOfficialStructure.messages.associateDean.content
  };

  // Safe Administration
  const adminObj = {
    ...defaultOfficialStructure.administration,
    ...(data.administration || {}),
    viceChancellor: {
      ...defaultOfficialStructure.administration.viceChancellor,
      ...(data.administration?.viceChancellor || data.administration?.vc || {})
    },
    deansOfFaculty: {
      ...defaultOfficialStructure.administration.deansOfFaculty,
      ...(data.administration?.deansOfFaculty || {}),
      facultyDeans: Array.isArray(data.administration?.deansOfFaculty?.facultyDeans)
        ? data.administration.deansOfFaculty.facultyDeans
        : defaultOfficialStructure.administration.deansOfFaculty.facultyDeans
    },
    associateDean: {
      ...defaultOfficialStructure.administration.associateDean,
      ...(data.administration?.associateDean || {})
    },
    supportingStaff: {
      ...defaultOfficialStructure.administration.supportingStaff,
      ...(data.administration?.supportingStaff || {}),
      staffList: Array.isArray(data.administration?.supportingStaff?.staffList)
        ? data.administration.supportingStaff.staffList
        : defaultOfficialStructure.administration.supportingStaff.staffList
    }
  };

  return {
    ...defaultOfficialStructure,
    ...data,
    hero: {
      ...defaultOfficialStructure.hero,
      ...(data.hero || {})
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
      courses: Array.isArray(data.academics?.courses)
        ? data.academics.courses
        : defaultOfficialStructure.academics.courses,
      departments: Array.isArray(data.academics?.departments)
        ? data.academics.departments
        : defaultOfficialStructure.academics.departments
    },
    administration: adminObj,
    welfare: Array.isArray(data.welfare) && data.welfare.length > 0
      ? data.welfare
      : defaultOfficialStructure.welfare,
    galleries: {
      photos: Array.isArray(data.galleries?.photos)
        ? data.galleries.photos.map((p) => ({ ...p, image: p.image || p.url }))
        : defaultOfficialStructure.galleries.photos,
      videos: Array.isArray(data.galleries?.videos)
        ? data.galleries.videos
        : defaultOfficialStructure.galleries.videos
    },
    aboutUs: {
      ...defaultOfficialStructure.aboutUs,
      ...(data.aboutUs || {}),
      history: historyObj,
      visionMandate: {
        ...defaultOfficialStructure.aboutUs.visionMandate,
        ...(data.aboutUs?.visionMandate || {}),
        mandates: Array.isArray(data.aboutUs?.visionMandate?.mandates)
          ? data.aboutUs.visionMandate.mandates
          : defaultOfficialStructure.aboutUs.visionMandate.mandates
      },
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
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultFaculty;
    } catch {
      return defaultFaculty;
    }
  });

  const [programs, setPrograms] = useState(() => {
    try {
      const saved = localStorage.getItem('caebpt_programs');
      if (!saved) return defaultPrograms;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultPrograms;
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
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultDepartments;
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
      emergencyBannerText: "Admissions Counseling Demo 2025–26: Online registration window is active for mock demonstration.",
      maintenanceMode: false,
      rateLimitingActive: false,
      publicAdmissionsOpen: true,
      activeTheme: "Navy & Gold Standard",
      showTopUtilityBar: true,
      showUniversityBanner: false,
      topBarTimings: "Mon - Sat: 9 AM - 5 PM",
      topBarPhone: "+91 8643 224025"
    };
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });

  // Simulated live traffic stats
  const [trafficStats, setTrafficStats] = useState({
    liveVisitors: 54,
    todayViews: 2480,
    weeklyViews: 17120,
    bandwidthUsage: "4.4 GB",
    serverHealth: "99.98%",
    avgLatency: "19ms",
    cacheHitRatio: "96.8%",
    activeRegion: "Bapatla / South India Edge"
  });

  // Persist to localStorage
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

  // Traffic counter fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficStats((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const newVisitors = Math.max(35, Math.min(95, prev.liveVisitors + delta));
        return {
          ...prev,
          liveVisitors: newVisitors,
          todayViews: prev.todayViews + (delta > 0 ? delta : 1)
        };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ─────────────────────────────────────────────────────────────
  // OFFICIAL STRUCTURE ADMIN ACTIONS (Control ALL sections)
  // ─────────────────────────────────────────────────────────────

  // 1. General College Details & Affiliation
  const updateGeneralDetails = (details) => {
    setOfficialStructure((prev) => ({
      ...prev,
      ...details
    }));
  };

  // 2. Hero Section
  const updateHero = (heroData) => {
    setOfficialStructure((prev) => ({
      ...prev,
      hero: {
        ...(prev.hero || defaultOfficialStructure.hero),
        ...heroData
      }
    }));
  };

  // 3. Leadership Messages (Dean / Associate Dean)
  const updateLeadershipMessage = (key, msgData) => {
    setOfficialStructure((prev) => {
      const target = key === 'dean' ? 'dean' : 'associateDean';
      const currentMsg = prev.messages?.[target] || defaultOfficialStructure.messages[target];
      const img = msgData.photo || msgData.image || currentMsg.image;
      const content = msgData.content || (msgData.message ? [msgData.message] : currentMsg.content);
      return {
        ...prev,
        messages: {
          ...prev.messages,
          [target]: {
            ...currentMsg,
            ...msgData,
            image: img,
            photo: img,
            content: Array.isArray(content) ? content : [String(content)]
          }
        }
      };
    });
  };

  // 4. Announcements & Circulars (newsEvents, recruitment, tenders, circulars)
  const addAnnouncement = (category, item) => {
    setOfficialStructure((prev) => {
      const currentList = prev.announcements[category] || [];
      const newItem = {
        ...item,
        id: `${category}-${Date.now()}`
      };
      return {
        ...prev,
        announcements: {
          ...prev.announcements,
          [category]: [newItem, ...currentList]
        }
      };
    });
  };

  const updateAnnouncement = (category, id, updated) => {
    setOfficialStructure((prev) => {
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
    setOfficialStructure((prev) => {
      const currentList = prev.announcements[category] || [];
      return {
        ...prev,
        announcements: {
          ...prev.announcements,
          [category]: currentList.filter((item) => item.id !== id)
        }
      };
    });
  };

  // 5. Galleries (Photos & Videos)
  const addGalleryPhoto = (photo) => {
    setOfficialStructure((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        photos: [
          {
            ...photo,
            id: `photo-${Date.now()}`
          },
          ...prev.galleries.photos
        ]
      }
    }));
  };

  const deleteGalleryPhoto = (id) => {
    setOfficialStructure((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        photos: prev.galleries.photos.filter((p) => p.id !== id)
      }
    }));
  };

  const addGalleryVideo = (video) => {
    setOfficialStructure((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        videos: [
          {
            ...video,
            id: `video-${Date.now()}`
          },
          ...prev.galleries.videos
        ]
      }
    }));
  };

  const deleteGalleryVideo = (id) => {
    setOfficialStructure((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        videos: prev.galleries.videos.filter((v) => v.id !== id)
      }
    }));
  };

  // 6. Departments (Academics)
  const addDepartment = (deptData) => {
    const rawName = (deptData.name || 'New Department').trim();
    const shortCode = (deptData.shortCode || rawName.slice(0, 4).toUpperCase()).trim().toUpperCase();
    const baseSlug = (deptData.slug || rawName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) || 'dept';
    const id = shortCode.toLowerCase();

    const newDepartment = {
      id,
      slug: baseSlug,
      name: rawName,
      shortCode,
      about: deptData.about || `The Department of ${rawName} offers specialized educational training, research initiatives, and laboratory infrastructure at CAE Bapatla.`,
      labs: Array.isArray(deptData.labs) && deptData.labs.length > 0 ? deptData.labs : (deptData.initialLab ? [deptData.initialLab] : ['Foundational Engineering Laboratory']),
      hodAndFaculty: {
        hodName: deptData.hodName || 'Head of Department',
        hodDesignation: deptData.hodDesignation || 'Professor & Head',
        hodSpecialization: deptData.hodSpecialization || 'Agricultural Engineering & Allied Technologies',
        facultyMembers: Array.isArray(deptData.facultyMembers) ? deptData.facultyMembers : []
      }
    };

    setOfficialStructure((prev) => {
      const existing = prev.academics?.departments || defaultOfficialStructure.academics.departments || [];
      // avoid exact slug duplication
      const uniqueSlug = existing.some(d => d.slug === baseSlug) ? `${baseSlug}-${Date.now().toString().slice(-4)}` : baseSlug;
      newDepartment.slug = uniqueSlug;
      return {
        ...prev,
        academics: {
          ...prev.academics,
          departments: [...existing, newDepartment]
        }
      };
    });

    return newDepartment;
  };

  const deleteDepartment = (slug) => {
    setOfficialStructure((prev) => ({
      ...prev,
      academics: {
        ...prev.academics,
        departments: (prev.academics?.departments || []).filter((dept) => dept.slug !== slug)
      }
    }));
  };

  const updateDepartment = (slug, updatedData) => {
    setOfficialStructure((prev) => ({
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
    setOfficialStructure((prev) => ({
      ...prev,
      welfare: prev.welfare.map((act) =>
        act.slug === slug ? { ...act, ...updatedData } : act
      )
    }));
  };

  // 8. Administration Directory (VC, Deans, Associate Dean, Supporting Staff)
  const updateAdministration = (section, updatedData) => {
    const key = section === 'vc' ? 'viceChancellor' : section;
    setOfficialStructure((prev) => ({
      ...prev,
      administration: {
        ...prev.administration,
        [key]: { ...(prev.administration?.[key] || defaultOfficialStructure.administration[key] || {}), ...updatedData }
      }
    }));
  };

  // 9. About Us (History, Vision & Mandate, Org Structure, Accreditation)
  const updateAboutUs = (section, updatedData) => {
    setOfficialStructure((prev) => {
      const currentSection = prev.aboutUs?.[section] || defaultOfficialStructure.aboutUs[section] || {};
      let nextSection = {};
      if (typeof updatedData === 'string') {
        nextSection = {
          ...currentSection,
          content: [updatedData]
        };
      } else {
        nextSection = {
          ...currentSection,
          ...updatedData
        };
      }
      return {
        ...prev,
        aboutUs: {
          ...prev.aboutUs,
          [section]: nextSection
        }
      };
    });
  };

  // 10. Publications
  const addPublication = (pub) => {
    setOfficialStructure((prev) => ({
      ...prev,
      publications: [
        { ...pub, id: `pub-${Date.now()}` },
        ...prev.publications
      ]
    }));
  };

  const deletePublication = (id) => {
    setOfficialStructure((prev) => ({
      ...prev,
      publications: prev.publications.filter((p) => p.id !== id)
    }));
  };

  // 11. Enquiries
  const addEnquiry = (enquiryData) => {
    const newEnq = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      date: new Date().toLocaleString(),
      status: "New"
    };
    setEnquiries((prev) => [newEnq, ...prev]);
  };

  const updateEnquiryStatus = (id, status) => {
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  };

  // 12. Site Settings
  const updateSiteSettings = (updated) => {
    setSiteSettings((prev) => ({ ...prev, ...updated }));
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
      emergencyBannerText: "Admissions Counseling Demo 2025–26: Online registration window is active for mock demonstration.",
      maintenanceMode: false,
      rateLimitingActive: false,
      publicAdmissionsOpen: true,
      activeTheme: "Navy & Gold Standard",
      showTopUtilityBar: true,
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
        addPublication,
        deletePublication,

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
