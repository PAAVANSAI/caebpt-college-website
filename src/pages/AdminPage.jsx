import React, { useState, useEffect } from 'react';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  ShieldCheck,
  Activity,
  Globe,
  Sliders,
  Bell,
  Building2,
  Users,
  GraduationCap,
  Image as ImageIcon,
  Video,
  FileText,
  Inbox,
  AlertTriangle,
  CheckCircle2,
  Trash2,
  Plus,
  RefreshCw,
  Eye,
  LogOut,
  Save,
  Radio,
  ExternalLink,
  Phone,
  Clock,
  Download,
  Info,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function AdminPage() {
  const {
    officialStructure,
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
    enquiries,
    updateEnquiryStatus,
    deleteEnquiry,
    siteSettings,
    updateSiteSettings,
    trafficStats,
    resetToDefaultData
  } = useWebsite();

  const currentStructure = officialStructure || officialStructureData;

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Navigation Tab
  const [activeTab, setActiveTab] = useState('overview');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState('');
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Login handler
  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (passwordInput === 'admin' || passwordInput === 'caebpt2025' || passwordInput.trim() === '') {
      setIsAuthenticated(true);
      setAuthError('');
      triggerToast('Signed in as CAE Bapatla Chief Administrator');
    } else {
      setAuthError('Invalid administrator credentials. Hint: use the 1-Click Demo button.');
    }
  };

  // Local state for live form edits
  // 1. Identity & Top Bar
  const [identityForm, setIdentityForm] = useState({
    collegeFullName: currentStructure.collegeFullName || "COLLEGE OF AGRICULTURAL ENGINEERING",
    collegeShortName: currentStructure.collegeShortName || "CAE Bapatla",
    estd: currentStructure.estd || "1983",
    domain: currentStructure.domain || "caebpt.ac.in",
    angrauUrl: currentStructure.angrauUrl || "https://angrau.ac.in",
    topBarPhone: siteSettings?.topBarPhone || "+91 8643 224025",
    topBarTimings: siteSettings?.topBarTimings || "Mon - Sat: 9 AM - 5 PM",
    showTopUtilityBar: siteSettings?.showTopUtilityBar !== false,
    showUniversityBanner: siteSettings?.showUniversityBanner === true
  });

  // Sync identity toggles with persistent siteSettings
  useEffect(() => {
    if (siteSettings) {
      setIdentityForm((prev) => ({
        ...prev,
        showTopUtilityBar: siteSettings.showTopUtilityBar !== false,
        showUniversityBanner: siteSettings.showUniversityBanner === true,
        topBarPhone: siteSettings.topBarPhone || prev.topBarPhone,
        topBarTimings: siteSettings.topBarTimings || prev.topBarTimings
      }));
    }
  }, [siteSettings]);

  // 2. Hero Section
  const [heroForm, setHeroForm] = useState({
    headline: currentStructure.hero?.headline || "Pioneering Precision Agriculture & Water Innovation",
    subtitle: currentStructure.hero?.subtitle || "Established in 1983 as Andhra Pradesh's premier engineering institution under Acharya N.G. Ranga Agricultural University.",
    badgeText: currentStructure.hero?.badgeText || "AP EAPCET & ICAR AIEEA Accredited Institution",
    mediaType: currentStructure.hero?.mediaType || "image",
    bgVideo: currentStructure.hero?.bgVideo || "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-green-landscape-with-agricultural-crops-42289-large.mp4",
    bgImage: currentStructure.hero?.bgImage || "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80",
    yearsStat: currentStructure.hero?.yearsStat || "42+",
    departmentsStat: currentStructure.hero?.departmentsStat || "5",
    labsStat: currentStructure.hero?.labsStat || "22+",
    placementStat: currentStructure.hero?.placementStat || "92%"
  });

  // Department Creation State
  const [isAddingDept, setIsAddingDept] = useState(false);
  const [newDeptForm, setNewDeptForm] = useState({
    name: '',
    shortCode: '',
    slug: '',
    about: '',
    hodName: '',
    hodDesignation: 'Professor & Head of Department',
    hodSpecialization: '',
    initialLab: ''
  });

  // 3. Leadership Messages
  const [deanForm, setDeanForm] = useState({
    name: currentStructure.messages?.dean?.name || "Dr. G. Ravi Babu",
    title: currentStructure.messages?.dean?.title || "Dean of Agricultural Engineering & Technology, ANGRAU",
    photo: currentStructure.messages?.dean?.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    excerpt: currentStructure.messages?.dean?.excerpt || "Transforming agricultural engineering through AI-driven mechanization.",
    message: currentStructure.messages?.dean?.message || ""
  });

  const [assocDeanForm, setAssocDeanForm] = useState({
    name: currentStructure.messages?.assocDean?.name || "Dr. B. John Wesley",
    title: currentStructure.messages?.assocDean?.title || "Associate Dean, College of Agricultural Engineering, Bapatla",
    photo: currentStructure.messages?.assocDean?.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    excerpt: currentStructure.messages?.assocDean?.excerpt || "Over four decades of nurturing world-class technocrats and agri-entrepreneurs.",
    message: currentStructure.messages?.assocDean?.message || ""
  });

  // 4. Announcements Form State
  const [selectedAnnouncementType, setSelectedAnnouncementType] = useState('newsEvents');
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Academic',
    description: '',
    pdfName: 'Official_Notice.pdf',
    deadline: '',
    refNo: '',
    dept: 'FMPE'
  });

  // 5. Selected Department for Editing
  const [selectedDeptSlug, setSelectedDeptSlug] = useState(
    currentStructure.academics?.departments?.[0]?.slug || 'fmpe'
  );
  const activeDept = currentStructure.academics?.departments?.find((d) => d.slug === selectedDeptSlug) || currentStructure.academics?.departments?.[0];
  const [deptForm, setDeptForm] = useState({
    about: activeDept?.about || '',
    hodName: activeDept?.hod?.name || '',
    hodDesignation: activeDept?.hod?.designation || '',
    hodEmail: activeDept?.hod?.email || '',
    hodPhoto: activeDept?.hod?.photo || '',
    newLabName: ''
  });

  // Update dept form when active dept changes
  const handleSelectDept = (slug) => {
    setSelectedDeptSlug(slug);
    const d = currentStructure.academics?.departments?.find((item) => item.slug === slug);
    if (d) {
      setDeptForm({
        about: d.about || '',
        hodName: d.hod?.name || '',
        hodDesignation: d.hod?.designation || '',
        hodEmail: d.hod?.email || '',
        hodPhoto: d.hod?.photo || '',
        newLabName: ''
      });
    }
  };

  // 6. Selected Welfare Activity for Editing
  const [selectedWelfareSlug, setSelectedWelfareSlug] = useState(
    currentStructure.welfare?.[0]?.slug || 'hostels'
  );
  const activeWelfare = currentStructure.welfare?.find((w) => w.slug === selectedWelfareSlug) || currentStructure.welfare?.[0];
  const [welfareForm, setWelfareForm] = useState({
    incharge: activeWelfare?.incharge || '',
    phone: activeWelfare?.phone || '',
    email: activeWelfare?.email || '',
    description: activeWelfare?.description || ''
  });

  const handleSelectWelfare = (slug) => {
    setSelectedWelfareSlug(slug);
    const w = currentStructure.welfare?.find((item) => item.slug === slug);
    if (w) {
      setWelfareForm({
        incharge: w.incharge || '',
        phone: w.phone || '',
        email: w.email || '',
        description: w.description || ''
      });
    }
  };

  // 7. Gallery state
  const [newPhotoForm, setNewPhotoForm] = useState({
    title: '',
    category: 'Campus & Infrastructure',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80'
  });
  const [newVideoForm, setNewVideoForm] = useState({
    title: '',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '04:15',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  });

  // 8. About Us state
  const [aboutForm, setAboutForm] = useState({
    history: currentStructure.aboutUs?.history || '',
    mandateIntro: currentStructure.aboutUs?.visionMandate?.mandates?.[0] || '',
    accreditationText: currentStructure.aboutUs?.accreditation?.status || ''
  });

  // CSV Export for Enquiries
  const exportEnquiriesCSV = () => {
    if (!enquiries || enquiries.length === 0) {
      triggerToast('No student applications to export.');
      return;
    }
    const headers = ['ID', 'Date', 'Full Name', 'Phone', 'Email', 'Program / Course', 'City / Native', 'Status', 'Queries'];
    const rows = enquiries.map((e) => [
      `"${e.id}"`,
      `"${e.date || ''}"`,
      `"${(e.fullName || '').replace(/"/g, '""')}"`,
      `"${e.phone || ''}"`,
      `"${e.email || ''}"`,
      `"${(e.course || '').replace(/"/g, '""')}"`,
      `"${(e.city || '').replace(/"/g, '""')}"`,
      `"${e.status || 'New'}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `CAE_Bapatla_Admissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast('Student applications exported to CSV successfully.');
  };

  // ─────────────────────────────────────────────────────────────
  // RENDER LOGIN SCREEN IF NOT AUTHENTICATED
  // ─────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-[#0b1a2e] text-white p-6 sm:p-8 text-center relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-3 border border-white/20">
              <ShieldCheck className="w-9 h-9 text-[#f5c84c]" />
            </div>
            <h1 className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white">
              Administrator Portal
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              College of Agricultural Engineering, Bapatla (ANGRAU)
            </p>
          </div>

          <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Administrator Password / Key
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter admin password (or use 1-Click login below)"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10 transition-all"
              />
              {authError && <p className="text-xs text-red-600 font-semibold mt-1.5">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-heading font-bold text-sm bg-[#0b1a2e] hover:bg-[#153258] text-white transition-all shadow-md cursor-pointer"
            >
              Sign In to Control Center
            </button>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-3 text-slate-400 text-xs font-semibold">DEMO ACCESS</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <button
              type="button"
              onClick={() => handleLogin()}
              className="w-full py-2.5 px-4 rounded-xl font-heading font-bold text-xs bg-[#fdf5df] hover:bg-[#fae4a4] text-[#06101e] border border-[#fae4a4] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#b88e22]" />
              <span>1-Click Instant Demo Login</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // AUTHENTICATED MASTER DASHBOARD
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0b1a2e] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-slideUp">
          <CheckCircle2 className="w-5 h-5 text-[#f5c84c] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <div className="bg-[#0b1a2e] text-white border-b border-[#1b3459] sticky top-14 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
              <ShieldCheck className="w-5 h-5 text-[#f5c84c]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-white text-sm sm:text-base">
                  CAE Bapatla Master Control Center
                </span>
                <span className="badge badge-gold text-[10px] py-0.5 px-2">ADMIN ACTIVE</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Live changes immediately reflect across all college web pages & menus.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                if (window.confirm('Reset ALL website content, announcements, departments, and settings back to original college defaults?')) {
                  resetToDefaultData();
                  triggerToast('All data reset to official college defaults!');
                }
              }}
              className="px-3 py-1.5 rounded-lg bg-red-900/60 hover:bg-red-900 text-red-200 border border-red-700/50 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Reset everything to factory defaults"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 overflow-x-auto scrollbar-none flex items-center gap-1.5 py-2 border-t border-white/10 text-xs">
          {[
            { id: 'overview', label: 'Overview & Emergency', icon: Activity },
            { id: 'identity', label: 'Identity & Top Bar', icon: Globe },
            { id: 'hero', label: 'Hero & Highlights', icon: Layers },
            { id: 'leadership', label: 'Leadership Messages', icon: Users },
            { id: 'announcements', label: 'Announcements & Circulars', icon: Bell },
            { id: 'departments', label: 'Departments & Labs', icon: Building2 },
            { id: 'administration', label: 'University Officers', icon: Award },
            { id: 'welfare', label: 'Student Welfare (12 Units)', icon: GraduationCap },
            { id: 'galleries', label: 'Photo & Video Gallery', icon: ImageIcon },
            { id: 'about', label: 'About College & ICAR', icon: FileText },
            { id: 'enquiries', label: `Student Applications (${enquiries.length})`, icon: Inbox },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: isActive ? '#f5c84c' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#06101e' : '#ffffff',
                  border: isActive ? '1.5px solid #d4a72c' : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isActive ? '0 2px 10px rgba(245, 200, 76, 0.4)' : 'none',
                }}
                className={`px-3 py-1.5 rounded-lg font-extrabold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'scale-[1.02]'
                    : 'hover:text-white hover:bg-white/15'
                }`}
              >
                <Icon
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{ color: isActive ? '#06101e' : '#f5c84c' }}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        {/* ─────────────────────────────────────────────────────────────
            TAB 1: OVERVIEW & SYSTEM CONTROLS
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Live Traffic Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Visitors</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-2xl font-black text-slate-900">{trafficStats.liveVisitors}</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">Active online sessions</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pageviews Today</span>
                <div className="text-2xl font-black text-slate-900 mt-1">{trafficStats.todayViews.toLocaleString()}</div>
                <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">↑ +14.2% from yesterday</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Server Health</span>
                <div className="text-2xl font-black text-slate-900 mt-1">{trafficStats.serverHealth}</div>
                <span className="text-[11px] text-slate-400 mt-1 block">ANGRAU Edge Network</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Student Enquiries</span>
                <div className="text-2xl font-black text-slate-900 mt-1">{enquiries.length}</div>
                <span className="text-[11px] text-amber-600 font-semibold mt-1 block">
                  {enquiries.filter((e) => e.status === 'New').length} pending review
                </span>
              </div>
            </div>

            {/* Emergency Broadcast Control */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                    <Radio className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Emergency Alert / Counseling Broadcast Banner
                    </h3>
                    <p className="text-xs text-slate-500">
                      Displays a high-visibility urgent banner at the top of every public page.
                    </p>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={siteSettings.emergencyBannerActive}
                    onChange={(e) => {
                      updateSiteSettings({ emergencyBannerActive: e.target.checked });
                      triggerToast(`Emergency alert banner ${e.target.checked ? 'activated' : 'deactivated'}.`);
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0b1a2e]"></div>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Broadcast Alert Message
                </label>
                <input
                  type="text"
                  value={siteSettings.emergencyBannerText}
                  onChange={(e) => updateSiteSettings({ emergencyBannerText: e.target.value })}
                  placeholder="e.g. AP EAPCET Counseling 2025: Verification scheduled from Nov 1st..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              {/* Maintenance Mode Toggle */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Scheduled Maintenance Mode</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Displays an administrative maintenance notice to visitors without blocking site exploration.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={siteSettings.maintenanceMode}
                    onChange={(e) => {
                      updateSiteSettings({ maintenanceMode: e.target.checked });
                      triggerToast(`Maintenance mode ${e.target.checked ? 'enabled' : 'disabled'}.`);
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-700"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 2: IDENTITY & TOP BAR (Controls Image 1, 2, 3, 4)
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'identity' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                College Identity & Header Bars Control
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Customize college names, official domains, working hours, and toggle top utility bars.
              </p>
            </div>

            {/* Toggle Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 block">
                    Show Top Utility Bar
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Dark navy bar with official domain (caebpt.ac.in), phone, timings & admin link.
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={identityForm.showTopUtilityBar}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setIdentityForm((prev) => ({ ...prev, showTopUtilityBar: checked }));
                      updateSiteSettings({ showTopUtilityBar: checked });
                      triggerToast(checked ? 'Top Utility Bar enabled on live website!' : 'Top Utility Bar hidden from live website.');
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0b1a2e]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 block">
                    Show ANGRAU University Apex Banner
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Gold apex affiliation banner linking to Acharya N.G. Ranga Agricultural University.
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={identityForm.showUniversityBanner}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setIdentityForm((prev) => ({ ...prev, showUniversityBanner: checked }));
                      updateSiteSettings({ showUniversityBanner: checked });
                      triggerToast(checked ? 'ANGRAU Apex Banner enabled on live website!' : 'ANGRAU Apex Banner hidden from live website.');
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0b1a2e]"></div>
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  College Full Name (Shown in Brand Header)
                </label>
                <input
                  type="text"
                  value={identityForm.collegeFullName}
                  onChange={(e) => setIdentityForm({ ...identityForm, collegeFullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  College Short Name / Sticky Logo Acronym
                </label>
                <input
                  type="text"
                  value={identityForm.collegeShortName}
                  onChange={(e) => setIdentityForm({ ...identityForm, collegeShortName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Official Domain (caebpt.ac.in)
                </label>
                <input
                  type="text"
                  value={identityForm.domain}
                  onChange={(e) => setIdentityForm({ ...identityForm, domain: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Established Year (Estd. 1983)
                </label>
                <input
                  type="text"
                  value={identityForm.estd}
                  onChange={(e) => setIdentityForm({ ...identityForm, estd: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Contact Phone Number
                </label>
                <input
                  type="text"
                  value={identityForm.topBarPhone}
                  onChange={(e) => setIdentityForm({ ...identityForm, topBarPhone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Campus Timings / Working Hours
                </label>
                <input
                  type="text"
                  value={identityForm.topBarTimings}
                  onChange={(e) => setIdentityForm({ ...identityForm, topBarTimings: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Official ANGRAU University Portal URL
                </label>
                <input
                  type="url"
                  value={identityForm.angrauUrl}
                  onChange={(e) => setIdentityForm({ ...identityForm, angrauUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>
            </div>

            <button
              onClick={() => {
                updateGeneralDetails({
                  collegeFullName: identityForm.collegeFullName,
                  collegeShortName: identityForm.collegeShortName,
                  domain: identityForm.domain,
                  estd: identityForm.estd,
                  angrauUrl: identityForm.angrauUrl
                });
                updateSiteSettings({
                  showTopUtilityBar: identityForm.showTopUtilityBar,
                  showUniversityBanner: identityForm.showUniversityBanner,
                  topBarPhone: identityForm.topBarPhone,
                  topBarTimings: identityForm.topBarTimings
                });
                triggerToast('Identity & Header settings saved successfully!');
              }}
              className="btn btn-navy text-xs font-bold px-5 py-2.5 flex items-center gap-2"
            >
              <Save className="w-4 h-4 text-[#f5c84c]" />
              <span>Save Identity & Header Settings</span>
            </button>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 3: HERO SECTION
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'hero' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Hero Section & Campus Visuals
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Customize the main banner, hero headline, campus image, and institutional stats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Hero Badge Text
                </label>
                <input
                  type="text"
                  value={heroForm.badgeText}
                  onChange={(e) => setHeroForm({ ...heroForm, badgeText: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Main Hero Headline
                </label>
                <input
                  type="text"
                  value={heroForm.headline}
                  onChange={(e) => setHeroForm({ ...heroForm, headline: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Intro Subtitle
                </label>
                <textarea
                  rows={2}
                  value={heroForm.subtitle}
                  onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                />
              </div>

              {/* Hero Background Media Controls: Image or Video */}
              <div className="md:col-span-2 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Hero Background Media Type
                    </label>
                    <p className="text-[11px] text-slate-500">
                      Choose whether the homepage hero displays a high-resolution campus photo or a background video.
                    </p>
                  </div>
                  
                  {/* Media Mode Toggle Pills */}
                  <div className="flex gap-1.5 bg-slate-200 p-1 rounded-xl text-xs border border-slate-300">
                    <button
                      type="button"
                      onClick={() => setHeroForm({ ...heroForm, mediaType: 'image' })}
                      style={{
                        backgroundColor: heroForm.mediaType === 'image' ? '#0b1a2e' : 'transparent',
                        color: heroForm.mediaType === 'image' ? '#ffffff' : '#0f172a',
                      }}
                      className="px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Campus Image</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroForm({ ...heroForm, mediaType: 'video' })}
                      style={{
                        backgroundColor: heroForm.mediaType === 'video' ? '#0b1a2e' : 'transparent',
                        color: heroForm.mediaType === 'video' ? '#ffffff' : '#0f172a',
                      }}
                      className="px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Background Video</span>
                    </button>
                  </div>
                </div>

                {heroForm.mediaType === 'video' ? (
                  <div className="space-y-3 pt-2 border-t border-slate-200">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Campus Background Video URL (MP4, WebM or YouTube URL)
                      </label>
                      <input
                        type="url"
                        value={heroForm.bgVideo}
                        onChange={(e) => setHeroForm({ ...heroForm, bgVideo: e.target.value })}
                        placeholder="https://assets.mixkit.co/.../video.mp4 or https://www.youtube.com/watch?v=..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                      />
                    </div>

                    {/* Quick Presets */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-500">Quick Presets:</span>
                      <button
                        type="button"
                        onClick={() => setHeroForm({
                          ...heroForm,
                          bgVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-green-landscape-with-agricultural-crops-42289-large.mp4'
                        })}
                        className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 rounded-lg hover:border-[#0b1a2e] text-slate-700 cursor-pointer"
                      >
                        🌾 Green Agricultural Fields (MP4)
                      </button>
                      <button
                        type="button"
                        onClick={() => setHeroForm({
                          ...heroForm,
                          bgVideo: 'https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-agricultural-fields-and-crops-42291-large.mp4'
                        })}
                        className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 rounded-lg hover:border-[#0b1a2e] text-slate-700 cursor-pointer"
                      >
                        🚜 Aerial Farmland & Tractor Bay (MP4)
                      </button>
                      <button
                        type="button"
                        onClick={() => setHeroForm({
                          ...heroForm,
                          bgVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        })}
                        className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 rounded-lg hover:border-[#0b1a2e] text-slate-700 cursor-pointer"
                      >
                        🎥 YouTube Video Stream
                      </button>
                    </div>

                    {/* Video Live Preview */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-900 h-48 max-w-lg">
                      {heroForm.bgVideo.includes('youtube.com') || heroForm.bgVideo.includes('youtu.be') ? (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white text-xs gap-2 p-4 text-center">
                          <Video className="w-8 h-8 text-[#f5c84c]" />
                          <span className="font-bold">YouTube Background Video Configured</span>
                          <span className="text-[11px] text-slate-400 truncate max-w-sm">{heroForm.bgVideo}</span>
                        </div>
                      ) : (
                        <video
                          key={heroForm.bgVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={heroForm.bgVideo} type="video/mp4" />
                        </video>
                      )}
                      <div className="absolute top-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white font-bold">
                        Live Preview
                      </div>
                    </div>

                    {/* Fallback poster image */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Fallback Poster Image (shown while video is buffering)
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="url"
                          value={heroForm.bgImage}
                          onChange={(e) => setHeroForm({ ...heroForm, bgImage: e.target.value })}
                          className="flex-1 px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                        />
                        <div className="w-16 h-10 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100">
                          <img src={heroForm.bgImage} alt="Fallback Preview" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 pt-2 border-t border-slate-200">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Campus Background Image URL
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="url"
                          value={heroForm.bgImage}
                          onChange={(e) => setHeroForm({ ...heroForm, bgImage: e.target.value })}
                          className="flex-1 px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#0b1a2e]"
                        />
                        <div className="w-20 h-12 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100 shadow-xs">
                          <img src={heroForm.bgImage} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Quick Image Presets */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-500">Sample Campus Photos:</span>
                      <button
                        type="button"
                        onClick={() => setHeroForm({
                          ...heroForm,
                          bgImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85'
                        })}
                        className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 rounded-lg hover:border-[#0b1a2e] text-slate-700 cursor-pointer"
                      >
                        🏛️ Academic Main Building
                      </button>
                      <button
                        type="button"
                        onClick={() => setHeroForm({
                          ...heroForm,
                          bgImage: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80'
                        })}
                        className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 rounded-lg hover:border-[#0b1a2e] text-slate-700 cursor-pointer"
                      >
                        🌾 Research Trial Farms
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Years of Excellence Stat</label>
                <input
                  type="text"
                  value={heroForm.yearsStat}
                  onChange={(e) => setHeroForm({ ...heroForm, yearsStat: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Academic Departments Stat</label>
                <input
                  type="text"
                  value={heroForm.departmentsStat}
                  onChange={(e) => setHeroForm({ ...heroForm, departmentsStat: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Research Labs Stat</label>
                <input
                  type="text"
                  value={heroForm.labsStat}
                  onChange={(e) => setHeroForm({ ...heroForm, labsStat: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Placement Track Record Stat</label>
                <input
                  type="text"
                  value={heroForm.placementStat}
                  onChange={(e) => setHeroForm({ ...heroForm, placementStat: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                />
              </div>
            </div>

            <button
              onClick={() => {
                updateHero(heroForm);
                triggerToast('Hero Section updated on Home page!');
              }}
              className="btn btn-navy text-xs font-bold px-5 py-2.5 flex items-center gap-2"
            >
              <Save className="w-4 h-4 text-[#f5c84c]" />
              <span>Save Hero Section</span>
            </button>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 4: LEADERSHIP MESSAGES
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'leadership' && (
          <div className="space-y-6">
            {/* Dean's Message */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#b88e22]" />
                <span>Dean of Agricultural Engineering Message</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Dean's Full Name</label>
                  <input
                    type="text"
                    value={deanForm.name}
                    onChange={(e) => setDeanForm({ ...deanForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official Designation</label>
                  <input
                    type="text"
                    value={deanForm.title}
                    onChange={(e) => setDeanForm({ ...deanForm, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Dean Photo URL</label>
                  <div className="flex gap-3">
                    <input
                      type="url"
                      value={deanForm.photo}
                      onChange={(e) => setDeanForm({ ...deanForm, photo: e.target.value })}
                      className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                    />
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100">
                      <img src={deanForm.photo} alt="Dean Preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Key Quote / Excerpt</label>
                  <input
                    type="text"
                    value={deanForm.excerpt}
                    onChange={(e) => setDeanForm({ ...deanForm, excerpt: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateLeadershipMessage('dean', deanForm);
                  triggerToast("Dean's message updated successfully!");
                }}
                className="btn btn-navy text-xs font-bold px-4 py-2 flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5 text-[#f5c84c]" />
                <span>Save Dean's Details</span>
              </button>
            </div>

            {/* Associate Dean's Message */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#b88e22]" />
                <span>Associate Dean (Head of College) Message</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Associate Dean Name</label>
                  <input
                    type="text"
                    value={assocDeanForm.name}
                    onChange={(e) => setAssocDeanForm({ ...assocDeanForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official Designation</label>
                  <input
                    type="text"
                    value={assocDeanForm.title}
                    onChange={(e) => setAssocDeanForm({ ...assocDeanForm, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Associate Dean Photo URL</label>
                  <div className="flex gap-3">
                    <input
                      type="url"
                      value={assocDeanForm.photo}
                      onChange={(e) => setAssocDeanForm({ ...assocDeanForm, photo: e.target.value })}
                      className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                    />
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100">
                      <img src={assocDeanForm.photo} alt="Associate Dean Preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Key Quote / Excerpt</label>
                  <input
                    type="text"
                    value={assocDeanForm.excerpt}
                    onChange={(e) => setAssocDeanForm({ ...assocDeanForm, excerpt: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateLeadershipMessage('assocDean', assocDeanForm);
                  triggerToast("Associate Dean's message updated successfully!");
                }}
                className="btn btn-navy text-xs font-bold px-4 py-2 flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5 text-[#f5c84c]" />
                <span>Save Associate Dean's Details</span>
              </button>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 5: ANNOUNCEMENTS & CIRCULARS
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'announcements' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    Announcements, Recruitment, Tenders & Circulars
                  </h3>
                  <p className="text-xs text-slate-500">
                    Manage all 4 official communication categories with attachments and deadlines.
                  </p>
                </div>

                {/* Subcategory Picker */}
                <div className="flex gap-1.5 bg-slate-200 p-1.5 rounded-xl text-xs border border-slate-300">
                  {[
                    { id: 'newsEvents', label: 'News & Events' },
                    { id: 'recruitment', label: 'Recruitment' },
                    { id: 'tenders', label: 'Tenders' },
                    { id: 'circulars', label: 'Circulars' },
                  ].map((sub) => {
                    const isSelected = selectedAnnouncementType === sub.id;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSelectedAnnouncementType(sub.id)}
                        style={{
                          backgroundColor: isSelected ? '#0b1a2e' : 'transparent',
                          color: isSelected ? '#ffffff' : '#0f172a',
                        }}
                        className={`px-3.5 py-1.5 rounded-lg font-extrabold transition-all cursor-pointer ${
                          isSelected
                            ? 'shadow-xs'
                            : 'hover:text-[#0b1a2e] hover:bg-slate-300/60'
                        }`}
                      >
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Add New Announcement Form */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <span className="font-bold text-xs text-slate-800 uppercase tracking-wider block">
                  Add New Item to {selectedAnnouncementType.toUpperCase()}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Title / Notification</label>
                    <input
                      type="text"
                      value={newAnnouncement.title}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                      placeholder="e.g. Walk-in-interview for Project Assistant position..."
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={newAnnouncement.date}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, date: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  {selectedAnnouncementType === 'recruitment' && (
                    <>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Department</label>
                        <input
                          type="text"
                          value={newAnnouncement.dept}
                          onChange={(e) => setNewAnnouncement({ ...newAnnouncement, dept: e.target.value })}
                          placeholder="e.g. FMPE / SWCE"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Application Deadline</label>
                        <input
                          type="text"
                          value={newAnnouncement.deadline}
                          onChange={(e) => setNewAnnouncement({ ...newAnnouncement, deadline: e.target.value })}
                          placeholder="e.g. 15-Nov-2025"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                    </>
                  )}

                  {selectedAnnouncementType === 'tenders' && (
                    <>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Tender Ref No.</label>
                        <input
                          type="text"
                          value={newAnnouncement.refNo}
                          onChange={(e) => setNewAnnouncement({ ...newAnnouncement, refNo: e.target.value })}
                          placeholder="e.g. CAE/TNDR/2025/08"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Submission Deadline</label>
                        <input
                          type="text"
                          value={newAnnouncement.deadline}
                          onChange={(e) => setNewAnnouncement({ ...newAnnouncement, deadline: e.target.value })}
                          placeholder="e.g. 20-Nov-2025, 4:00 PM"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">PDF Attachment File</label>
                    <input
                      type="text"
                      value={newAnnouncement.pdfName}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, pdfName: e.target.value })}
                      placeholder="e.g. Notification_Circular.pdf"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!newAnnouncement.title.trim()) {
                      alert('Please provide a title');
                      return;
                    }
                    addAnnouncement(selectedAnnouncementType, newAnnouncement);
                    setNewAnnouncement({
                      title: '',
                      date: new Date().toISOString().split('T')[0],
                      category: 'Academic',
                      description: '',
                      pdfName: 'Official_Notice.pdf',
                      deadline: '',
                      refNo: '',
                      dept: 'FMPE'
                    });
                    triggerToast(`Added new item to ${selectedAnnouncementType}!`);
                  }}
                  className="btn btn-navy text-xs font-bold px-4 py-2 flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#f5c84c]" />
                  <span>Publish Announcement</span>
                </button>
              </div>

              {/* Existing Announcements Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#0b1a2e] text-white">
                    <tr className="border-b border-[#1b3459] text-white font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4 text-white">Date</th>
                      <th className="py-3 px-4 text-white">Title / Notice</th>
                      <th className="py-3 px-4 text-white">PDF / Details</th>
                      <th className="py-3 px-4 text-right text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {(currentStructure.announcements?.[selectedAnnouncementType] || []).map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">{item.date}</td>
                        <td className="py-3 px-4 font-bold text-slate-900">{item.title}</td>
                        <td className="py-3 px-4 text-slate-600 font-medium">
                          {item.pdfName || item.deadline || item.refNo || '—'}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Delete announcement "${item.title}"?`)) {
                                deleteAnnouncement(selectedAnnouncementType, item.id);
                                triggerToast('Announcement deleted.');
                              }
                            }}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors"
                            title="Delete Announcement"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 6: ACADEMIC DEPARTMENTS
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'departments' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Academic Departments & Laboratories
                </h3>
                <p className="text-xs text-slate-500">
                  Select a department to edit its overview, Head of Department (HoD), and laboratory infrastructure.
                </p>
              </div>

              {/* Department selector & Add Department Button */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex gap-1.5 bg-slate-200 p-1.5 rounded-xl text-xs overflow-x-auto border border-slate-300">
                  {(currentStructure.academics?.departments || []).map((d) => {
                    const isSelected = !isAddingDept && selectedDeptSlug === d.slug;
                    return (
                      <button
                        key={d.slug}
                        type="button"
                        onClick={() => {
                          setIsAddingDept(false);
                          handleSelectDept(d.slug);
                        }}
                        style={{
                          backgroundColor: isSelected ? '#0b1a2e' : 'transparent',
                          color: isSelected ? '#ffffff' : '#0f172a',
                        }}
                        className={`px-3.5 py-1.5 rounded-lg font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                          isSelected
                            ? 'shadow-xs'
                            : 'hover:text-[#0b1a2e] hover:bg-slate-300/60'
                        }`}
                      >
                        {d.shortCode || d.name}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsAddingDept(true);
                    setNewDeptForm({
                      name: '',
                      shortCode: '',
                      slug: '',
                      about: '',
                      hodName: '',
                      hodDesignation: 'Professor & Head of Department',
                      hodSpecialization: '',
                      initialLab: ''
                    });
                  }}
                  style={{
                    backgroundColor: isAddingDept ? '#0b1a2e' : '#f5c84c',
                    color: isAddingDept ? '#ffffff' : '#06101e',
                    border: '1.5px solid #d4a72c'
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap shadow-xs cursor-pointer transition-all hover:scale-102"
                  title="Add a new Academic Engineering Department"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add Department</span>
                </button>
              </div>
            </div>

            {/* Create New Department Card */}
            {isAddingDept && (
              <div className="p-5 bg-amber-50/60 border-2 border-[#d4a72c]/50 rounded-2xl space-y-4 shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#b88e22]" />
                      <span>Add New Academic Department</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      New departments will automatically appear in navigation menus, the academics overview, and receive a dedicated page.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAddingDept(false)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-1 bg-white border border-slate-300 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Department Full Name *
                    </label>
                    <input
                      type="text"
                      value={newDeptForm.name}
                      onChange={(e) => {
                        const val = e.target.value;
                        const autoCode = val.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 5);
                        const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        setNewDeptForm({
                          ...newDeptForm,
                          name: val,
                          shortCode: newDeptForm.shortCode ? newDeptForm.shortCode : autoCode,
                          slug: newDeptForm.slug ? newDeptForm.slug : autoSlug
                        });
                      }}
                      placeholder="e.g. Artificial Intelligence & Precision Agriculture"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Short Code (Abbreviation) *
                    </label>
                    <input
                      type="text"
                      value={newDeptForm.shortCode}
                      onChange={(e) => setNewDeptForm({ ...newDeptForm, shortCode: e.target.value.toUpperCase() })}
                      placeholder="e.g. AIPA"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 font-bold uppercase"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Department Mission & Overview
                    </label>
                    <textarea
                      rows={2}
                      value={newDeptForm.about}
                      onChange={(e) => setNewDeptForm({ ...newDeptForm, about: e.target.value })}
                      placeholder="Provide an overview of academic curriculum, research mandate, and student training..."
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Head of Department (HoD) Name
                    </label>
                    <input
                      type="text"
                      value={newDeptForm.hodName}
                      onChange={(e) => setNewDeptForm({ ...newDeptForm, hodName: e.target.value })}
                      placeholder="e.g. Dr. M. Srinivasa Rao, Ph.D."
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      HoD Designation
                    </label>
                    <input
                      type="text"
                      value={newDeptForm.hodDesignation}
                      onChange={(e) => setNewDeptForm({ ...newDeptForm, hodDesignation: e.target.value })}
                      placeholder="e.g. Professor & Head of Department"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Initial Research Lab Name
                    </label>
                    <input
                      type="text"
                      value={newDeptForm.initialLab}
                      onChange={(e) => setNewDeptForm({ ...newDeptForm, initialLab: e.target.value })}
                      placeholder="e.g. Drone Precision Sensing Lab"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!newDeptForm.name.trim()) {
                        alert('Please enter a department name.');
                        return;
                      }
                      const created = addDepartment(newDeptForm);
                      setIsAddingDept(false);
                      handleSelectDept(created.slug);
                      triggerToast(`Created new department: ${created.name}!`);
                    }}
                    className="btn btn-navy text-xs font-bold px-5 py-2.5 flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Plus className="w-4 h-4 text-[#f5c84c]" />
                    <span>Create Department</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsAddingDept(false)}
                    className="px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Editing Active Department */}
            {!isAddingDept && activeDept && (
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <span className="badge badge-navy text-xs font-bold">{activeDept.shortCode || activeDept.name}</span>
                  <h4 className="font-heading font-bold text-base text-slate-900">{activeDept.name}</h4>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Department Mission & Overview
                  </label>
                  <textarea
                    rows={3}
                    value={deptForm.about}
                    onChange={(e) => setDeptForm({ ...deptForm, about: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>

                {/* HoD details */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <span className="font-bold text-xs text-slate-900 uppercase tracking-wider block">
                    Head of Department (HoD)
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">HoD Name</label>
                      <input
                        type="text"
                        value={deptForm.hodName}
                        onChange={(e) => setDeptForm({ ...deptForm, hodName: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Designation</label>
                      <input
                        type="text"
                        value={deptForm.hodDesignation}
                        onChange={(e) => setDeptForm({ ...deptForm, hodDesignation: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">HoD Email</label>
                      <input
                        type="email"
                        value={deptForm.hodEmail}
                        onChange={(e) => setDeptForm({ ...deptForm, hodEmail: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Laboratories List */}
                <div>
                  <span className="font-bold text-xs text-slate-900 uppercase tracking-wider block mb-2">
                    Laboratories ({(activeDept.labs || activeDept.laboratories || []).length})
                  </span>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(activeDept.labs || activeDept.laboratories || []).map((lab, lIdx) => (
                      <span
                        key={lIdx}
                        className="badge badge-navy text-xs font-semibold py-1 px-2.5 flex items-center gap-1.5"
                      >
                        <span>{lab}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const allLabs = activeDept.labs || activeDept.laboratories || [];
                            const updatedLabs = allLabs.filter((_, i) => i !== lIdx);
                            updateDepartment(selectedDeptSlug, { labs: updatedLabs, laboratories: updatedLabs });
                            triggerToast('Laboratory removed.');
                          }}
                          className="hover:text-red-400 cursor-pointer font-bold text-sm"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={deptForm.newLabName}
                      onChange={(e) => setDeptForm({ ...deptForm, newLabName: e.target.value })}
                      placeholder="Add new laboratory name..."
                      className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (!deptForm.newLabName.trim()) return;
                        const currentLabs = activeDept.labs || activeDept.laboratories || [];
                        const updated = [...currentLabs, deptForm.newLabName.trim()];
                        updateDepartment(selectedDeptSlug, {
                          labs: updated,
                          laboratories: updated
                        });
                        setDeptForm({ ...deptForm, newLabName: '' });
                        triggerToast('Laboratory added!');
                      }}
                      className="btn btn-navy text-xs font-bold px-4 py-2 cursor-pointer"
                    >
                      Add Lab
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      updateDepartment(selectedDeptSlug, {
                        about: deptForm.about,
                        hod: {
                          ...(activeDept.hod || {}),
                          name: deptForm.hodName,
                          designation: deptForm.hodDesignation,
                          email: deptForm.hodEmail
                        },
                        hodAndFaculty: {
                          ...(activeDept.hodAndFaculty || {}),
                          hodName: deptForm.hodName,
                          hodDesignation: deptForm.hodDesignation,
                          hodSpecialization: deptForm.hodSpecialization || activeDept.hodAndFaculty?.hodSpecialization || ''
                        }
                      });
                      triggerToast(`Updated ${activeDept.name}!`);
                    }}
                    className="btn btn-navy text-xs font-bold px-5 py-2.5 flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Save className="w-4 h-4 text-[#f5c84c]" />
                    <span>Save Department Details</span>
                  </button>

                  {(currentStructure.academics?.departments || []).length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete the department "${activeDept.name}"?`)) {
                          deleteDepartment(activeDept.slug);
                          const remaining = (currentStructure.academics?.departments || []).filter(d => d.slug !== activeDept.slug);
                          if (remaining.length > 0) {
                            handleSelectDept(remaining[0].slug);
                          }
                          triggerToast(`Deleted department "${activeDept.name}".`);
                        }
                      }}
                      className="px-3.5 py-2 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete Department</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 7: UNIVERSITY OFFICERS (Administration)
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'administration' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Administration & University Officers
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Manage details for the Vice-Chancellor, Faculty Deans, and college Supporting Staff.
              </p>
            </div>

            {/* Vice-Chancellor */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <span className="font-bold text-xs text-slate-900 uppercase tracking-wider block">
                Vice-Chancellor, ANGRAU
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    defaultValue={currentStructure.administration?.vc?.name || 'Dr. R. Sarada Jayalakshmi Devi'}
                    onBlur={(e) => updateAdministration('vc', { name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Designation</label>
                  <input
                    type="text"
                    defaultValue={currentStructure.administration?.vc?.designation || 'Honourable Vice-Chancellor, ANGRAU'}
                    onBlur={(e) => updateAdministration('vc', { designation: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Deans of Faculty */}
            <div>
              <span className="font-bold text-xs text-slate-900 uppercase tracking-wider block mb-2">
                Faculty Deans (ANGRAU)
              </span>
              <div className="space-y-2">
                {(Array.isArray(currentStructure.administration?.deansOfFaculty?.facultyDeans)
                  ? currentStructure.administration.deansOfFaculty.facultyDeans
                  : []).map((dean, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900">{dean.name}</span>
                      <p className="text-[11px] text-slate-500 mt-0.5">{dean.faculty} • {dean.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Staff Roles */}
            <div>
              <span className="font-bold text-xs text-slate-900 uppercase tracking-wider block mb-2">
                Supporting Staff Roles (6 Divisions)
              </span>
              <div className="space-y-2">
                {(Array.isArray(currentStructure.administration?.supportingStaff?.staffList)
                  ? currentStructure.administration.supportingStaff.staffList
                  : Array.isArray(currentStructure.administration?.supportingStaff)
                  ? currentStructure.administration.supportingStaff
                  : []).map((staff, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900">{staff.role}</span>
                      <p className="text-[11px] text-slate-500 mt-0.5">{staff.name} • {staff.qualification}</p>
                    </div>
                    <span className="badge badge-gold text-[10px] py-0.5 px-2">{staff.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 8: STUDENT WELFARE (12 DIVISIONS)
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'welfare' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Student's Welfare Activities (12 Divisions)
                </h3>
                <p className="text-xs text-slate-500">
                  Select a welfare division to edit its in-charge officer, contact phone, and facilities summary.
                </p>
              </div>

              {/* Welfare division selector */}
              <select
                value={selectedWelfareSlug}
                onChange={(e) => handleSelectWelfare(e.target.value)}
                className="px-3 py-1.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-900"
              >
                {(currentStructure.welfare || []).map((w) => (
                  <option key={w.slug} value={w.slug}>
                    {w.name}
                  </option>
                ))}
              </select>
            </div>

            {activeWelfare && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="badge badge-navy text-xs font-bold">DIVISION</span>
                  <h4 className="font-heading font-bold text-base text-slate-900">{activeWelfare.name}</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">In-Charge Officer</label>
                    <input
                      type="text"
                      value={welfareForm.incharge}
                      onChange={(e) => setWelfareForm({ ...welfareForm, incharge: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Helpline / Phone</label>
                    <input
                      type="text"
                      value={welfareForm.phone}
                      onChange={(e) => setWelfareForm({ ...welfareForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={welfareForm.email}
                      onChange={(e) => setWelfareForm({ ...welfareForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Division Summary</label>
                  <textarea
                    rows={3}
                    value={welfareForm.description}
                    onChange={(e) => setWelfareForm({ ...welfareForm, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
                  />
                </div>

                <button
                  onClick={() => {
                    updateWelfareActivity(selectedWelfareSlug, welfareForm);
                    triggerToast(`Saved ${activeWelfare.name} details!`);
                  }}
                  className="btn btn-navy text-xs font-bold px-4 py-2 flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5 text-[#f5c84c]" />
                  <span>Save Welfare Division</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 9: PHOTO & VIDEO GALLERIES
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'galleries' && (
          <div className="space-y-6">
            {/* Photos */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#b88e22]" />
                <span>Photo Gallery ({currentStructure.galleries?.photos?.length || 0})</span>
              </h3>

              {/* Add Photo Form */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Photo Title</label>
                  <input
                    type="text"
                    value={newPhotoForm.title}
                    onChange={(e) => setNewPhotoForm({ ...newPhotoForm, title: e.target.value })}
                    placeholder="e.g. Modern FMPE Tractor Lab..."
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Category</label>
                  <input
                    type="text"
                    value={newPhotoForm.category}
                    onChange={(e) => setNewPhotoForm({ ...newPhotoForm, category: e.target.value })}
                    placeholder="e.g. Campus, Labs, Events"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Image URL</label>
                  <input
                    type="url"
                    value={newPhotoForm.url}
                    onChange={(e) => setNewPhotoForm({ ...newPhotoForm, url: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div className="md:col-span-3">
                  <button
                    onClick={() => {
                      if (!newPhotoForm.title.trim()) return;
                      addGalleryPhoto(newPhotoForm);
                      setNewPhotoForm({ title: '', category: 'Campus', url: '' });
                      triggerToast('Photo added to gallery!');
                    }}
                    className="btn btn-navy text-xs font-bold px-4 py-2 flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#f5c84c]" />
                    <span>Upload / Add Photo</span>
                  </button>
                </div>
              </div>

              {/* Photo preview grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(currentStructure.galleries?.photos || []).map((photo) => (
                  <div key={photo.id} className="relative group rounded-xl overflow-hidden border border-slate-200">
                    <img src={photo.url} alt={photo.title} className="w-full h-28 object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-between text-white text-[11px]">
                      <span className="font-semibold line-clamp-2">{photo.title}</span>
                      <button
                        onClick={() => {
                          deleteGalleryPhoto(photo.id);
                          triggerToast('Photo removed.');
                        }}
                        className="self-end p-1 rounded bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 10: ABOUT COLLEGE & ICAR
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'about' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                About College, History & ICAR Accreditation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Maintain official historical narratives, 4-point mandates, and accreditation statements.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Historical Background Narrative
              </label>
              <textarea
                rows={4}
                value={aboutForm.history}
                onChange={(e) => setAboutForm({ ...aboutForm, history: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Status of ICAR Accreditation Statement
              </label>
              <textarea
                rows={2}
                value={aboutForm.accreditationText}
                onChange={(e) => setAboutForm({ ...aboutForm, accreditationText: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
              />
            </div>

            <button
              onClick={() => {
                updateAboutUs('history', aboutForm.history);
                updateAboutUs('accreditation', { status: aboutForm.accreditationText });
                triggerToast('About College details updated!');
              }}
              className="btn btn-navy text-xs font-bold px-5 py-2.5 flex items-center gap-2"
            >
              <Save className="w-4 h-4 text-[#f5c84c]" />
              <span>Save About Us Details</span>
            </button>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            TAB 11: STUDENT ENQUIRIES & APPLICATIONS
        ───────────────────────────────────────────────────────────── */}
        {activeTab === 'enquiries' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Student Admissions & Counseling Applications
                </h3>
                <p className="text-xs text-slate-500">
                  Total {enquiries.length} prospective student submissions received.
                </p>
              </div>

              <button
                onClick={exportEnquiriesCSV}
                className="btn btn-navy text-xs font-bold px-4 py-2 flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#f5c84c]" />
                <span>Export Applications (CSV)</span>
              </button>
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-[#0b1a2e] text-white">
                  <tr className="border-b border-[#1b3459] text-white font-extrabold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4 text-white">Date</th>
                    <th className="py-3 px-4 text-white">Student Name</th>
                    <th className="py-3 px-4 text-white">Contact Info</th>
                    <th className="py-3 px-4 text-white">Selected Program</th>
                    <th className="py-3 px-4 text-white">Status</th>
                    <th className="py-3 px-4 text-right text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {enquiries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-10 text-center text-slate-500 font-medium">
                        No student admissions applications submitted yet.
                      </td>
                    </tr>
                  ) : (
                    enquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">{enq.date}</td>
                        <td className="py-3 px-4 font-bold text-slate-900">{enq.fullName}</td>
                        <td className="py-3 px-4 text-slate-700">
                          <div className="font-semibold">{enq.phone}</div>
                          <div className="text-[11px] text-slate-500">{enq.email}</div>
                        </td>
                        <td className="py-3 px-4 text-slate-800 font-semibold">{enq.course}</td>
                        <td className="py-3 px-4">
                          <select
                            value={enq.status}
                            onChange={(e) => {
                              updateEnquiryStatus(enq.id, e.target.value);
                              triggerToast(`Updated ${enq.fullName}'s status to ${e.target.value}`);
                            }}
                            style={{
                              backgroundColor:
                                enq.status === 'New'
                                  ? '#fef3c7'
                                  : enq.status === 'Contacted'
                                  ? '#dbeafe'
                                  : enq.status === 'In Review'
                                  ? '#f3e8ff'
                                  : '#d1fae5',
                              color:
                                enq.status === 'New'
                                  ? '#78350f'
                                  : enq.status === 'Contacted'
                                  ? '#1e3a8a'
                                  : enq.status === 'In Review'
                                  ? '#581c87'
                                  : '#065f46',
                            }}
                            className="px-2.5 py-1 rounded-md text-xs font-bold border border-slate-300 cursor-pointer"
                          >
                            <option value="New">New</option>
                            <option value="In Review">In Review</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Admitted">Admitted</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Delete application for ${enq.fullName}?`)) {
                                deleteEnquiry(enq.id);
                                triggerToast('Application deleted.');
                              }
                            }}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors"
                            title="Delete Application"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
