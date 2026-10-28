import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  ExternalLink,
  Shield,
  Globe,
  Clock,
  Phone,
} from 'lucide-react';
import CollegeEmblem from './CollegeEmblem';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';

export default function Header({ onOpenAdmissionsModal }) {
  const { officialStructure, siteSettings } = useWebsite();
  const currentStructure = officialStructure || officialStructureData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);
  const [mobileOpenSubSection, setMobileOpenSubSection] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Once user scrolls past the top bars (~75px), navbar docks cleanly at top: 0
          if (currentScrollY > 75) {
            setIsScrolled(true);
          } else if (currentScrollY <= 40) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setHoveredSubmenu(null);
    setMobileOpenSubSection(null);
  }, [location.pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setHoveredSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About Us',
      path: '/about',
      submenus: [
        { label: 'Historical Background', path: '/about?tab=history' },
        { label: 'Vision and Mandate', path: '/about?tab=vision-mandate' },
        { label: 'Organizational Structure', path: '/about?tab=org-structure' },
        { label: 'Status of Accreditation', path: '/about?tab=accreditation' },
      ],
    },
    {
      label: 'Administration',
      path: '/administration',
      submenus: [
        { label: 'Vice-Chancellor', path: '/administration?tab=vc' },
        { label: 'Deans of Faculty', path: '/administration?tab=deans' },
        { label: 'Associate Dean', path: '/administration?tab=associate-dean' },
        {
          label: 'Supporting Staff',
          path: '/administration?tab=supporting-staff',
          children: [
            'Administrative Officer',
            'Warden (Boys & Girls)',
            'Officer In-charge of Academic Matters',
            'Officer In-charge of Student Affairs',
            'Placement Officer',
            'Transport In-charge',
          ],
        },
      ],
    },
    {
      label: 'Academics',
      path: '/academics',
      submenus: [
        { label: 'Courses (B.Tech, M.Tech, Ph.D.)', path: '/academics/courses' },
        {
          label: 'Departments',
          path: '/academics/departments',
          childrenList: (currentStructure?.academics?.departments || officialStructureData.academics.departments || []).map((d) => ({
            label: d.name,
            path: `/academics/departments/${d.slug}`,
          })),
        },
      ],
    },
    {
      label: "Student's Welfare",
      path: '/student-welfare',
      submenus: (currentStructure?.welfare || officialStructureData.welfare || []).map((w) => ({
        label: w.name,
        path: `/student-welfare/${w.slug}`,
      })),
    },
    { label: 'Publications', path: '/publications' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* 
        TIER 0A: OFFICIAL ANGRAU UNIVERSITY APEX BANNER
        Controlled by Admin: siteSettings?.showUniversityBanner === true
      */}
      {siteSettings?.showUniversityBanner === true && (
        <div className="bg-gradient-to-r from-[#855e09] via-[#d4a72c] to-[#855e09] text-[#06101e] px-4 py-1.5 text-xs font-bold border-b border-[#b88e22] shadow-xs relative z-40">
          <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between gap-3 flex-wrap text-[11px] sm:text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#06101e] text-[#f5c84c] rounded text-[10px] font-extrabold tracking-wider uppercase">
                Apex Affiliation
              </span>
              <span className="font-extrabold tracking-wide">
                Acharya N.G. Ranga Agricultural University (ANGRAU) • Lam, Guntur
              </span>
            </div>
            <a
              href={currentStructure.angrauUrl || "https://angrau.ac.in"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#06101e]/90 hover:bg-[#06101e] text-white px-2.5 py-1 rounded text-[11px] font-bold transition-all shadow-xs"
              style={{ textDecoration: 'none' }}
            >
              <span>Visit Official ANGRAU Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#f5c84c]" />
            </a>
          </div>
        </div>
      )}

      {/* 
        TIER 0: TOP UTILITY BAR
        Controlled by Admin: can be customized or toggled on/off.
        Sits in upper scrollable container, scrolls away smoothly on scroll down.
      */}
      {siteSettings?.showTopUtilityBar !== false && (
        <div className="bg-[#0b1a2e] text-slate-300 border-b border-white/10 text-xs py-1.5 relative z-30 transition-all">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 text-[11px] sm:text-xs">
            {/* Left: Domain & Affiliation */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="flex items-center gap-1.5 text-[#f5c84c] font-bold tracking-wide">
                <Globe className="w-3.5 h-3.5 text-[#f5c84c]" />
                <span>Official Domain: {currentStructure.domain || 'caebpt.ac.in'}</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-300 hidden sm:inline">
                Affiliated to ANGRAU • Established {currentStructure.estd || '1983'}
              </span>
              <span className="text-slate-500 hidden md:inline">|</span>
              <span className="hidden md:flex items-center gap-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{siteSettings?.topBarTimings || 'Mon - Sat: 9 AM - 5 PM'}</span>
              </span>
            </div>

            {/* Right: Phone & Admin Portal */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={`tel:${(siteSettings?.topBarPhone || '+91 8643 224025').replace(/[^0-9+]/g, '')}`}
                className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-3.5 h-3.5 text-[#f5c84c]" />
                <span>{siteSettings?.topBarPhone || '+91 8643 224025'}</span>
              </a>

              <Link
                to="/admin"
                className="flex items-center gap-1 bg-[#d4a72c] hover:bg-[#ecc75f] text-[#06101e] px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] font-extrabold transition-all shadow-xs"
                title="Administrator Control Panel"
                style={{ textDecoration: 'none' }}
              >
                <Shield className="w-3 h-3 text-[#06101e]" />
                <span>Admin Portal</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 
        TIER 1: UPPER BRAND BAR (Desktop Only)
        Sits naturally in document flow on large screens. On mobile, a dedicated unified bar is used.
      */}
      <div className="hidden lg:block bg-white border-b border-slate-200/80 relative z-30">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <div className="flex items-center justify-between gap-4">
            {/* College Crest & Title */}
            <Link
              to="/"
              className="flex items-center gap-3 group cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <CollegeEmblem size={44} />
              </div>

              <div className="flex flex-col">
                <span
                  className="font-heading font-extrabold text-[#0b1a2e] text-base sm:text-lg lg:text-xl tracking-tight leading-tight"
                >
                  {currentStructure.collegeFullName || "COLLEGE OF AGRICULTURAL ENGINEERING"}
                </span>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-xs font-bold text-[#b88e22] tracking-wider uppercase">
                    BAPATLA
                  </span>
                  <span className="text-slate-300 text-xs hidden sm:inline">•</span>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    {currentStructure.domain}
                  </span>
                  <span className="badge badge-navy text-[10px] py-0.5 px-2 hidden sm:inline-flex font-bold">
                    ESTD. {currentStructure.estd}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold hidden md:inline">
                    Constituent of ANGRAU
                  </span>
                </div>
              </div>
            </Link>

            {/* Right Utilities on the Upper Bar */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* ANGRAU Official University Link */}
              <a
                href={currentStructure.angrauUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#0b1a2e] hover:text-white text-slate-700 border border-slate-200 text-xs font-bold transition-all"
                title="Visit official Acharya N.G. Ranga Agricultural University website"
                style={{ textDecoration: 'none' }}
              >
                <span>ANGRAU Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#b88e22]" />
              </a>

              {/* Admin Portal Shortcut */}
              <Link
                to="/admin"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#0b1a2e] hover:text-white text-slate-700 border border-slate-200 text-xs font-bold transition-all shadow-2xs"
                title="Administrator Control Panel"
                style={{ textDecoration: 'none' }}
              >
                <Shield className="w-3.5 h-3.5 text-[#d4a72c]" />
                <span>Admin</span>
              </Link>

              {/* Primary Apply CTA on upper bar */}
              <button
                type="button"
                onClick={onOpenAdmissionsModal}
                className="btn btn-gold px-4 py-2 text-xs font-extrabold hidden sm:inline-flex items-center gap-1.5 shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-[#06101e]" />
                <span>Apply for Admission</span>
              </button>

              {/* Mobile Hamburger Toggle (Visible on screens < 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#0b1a2e] hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 
        TIER 2: REAL NAVBAR
        Sticky at top: 0 with seamless docking.
        Fixed height and balanced side slots ensure the centered navigation items NEVER jitter or shift horizontally!
      */}
      <nav
        ref={dropdownRef}
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 h-14 flex items-center ${
          isScrolled
            ? 'shadow-md border-slate-200/90'
            : 'shadow-xs border-slate-200/60'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Scrolled Compact Brand (Fades in smoothly on scroll without changing layout width) */}
          <div className="w-[180px] xl:w-[220px] flex items-center flex-shrink-0">
            <Link
              to="/"
              className={`flex items-center gap-2 whitespace-nowrap group transition-fade-slide ${
                isScrolled
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1.5 pointer-events-none'
              }`}
              style={{ textDecoration: 'none' }}
            >
              <CollegeEmblem size={30} />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-[#0b1a2e] text-xs sm:text-sm tracking-tight leading-none">
                  CAE Bapatla
                </span>
                <span className="text-[10px] text-[#b88e22] font-bold tracking-wider uppercase leading-tight mt-0.5">
                  ANGRAU
                </span>
              </div>
            </Link>
          </div>

          {/* Centered Desktop Menu Items (Rock-solid centered position) */}
          <ul className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2 py-0.5 list-none m-0 p-0">
            {menuItems.map((item, idx) => {
              const hasSubmenus = item.submenus && item.submenus.length > 0;
              const isDropdownOpen = openDropdown === item.label;
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);
              const isRightAligned = idx >= 4;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSubmenus && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasSubmenus && setOpenDropdown(null)}
                >
                  <div className="flex items-center">
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive: isLinkActive }) =>
                        `px-3 xl:px-3.5 py-1.5 rounded-lg text-xs xl:text-sm font-bold tracking-tight transition-all duration-150 flex items-center gap-1 whitespace-nowrap ${
                          isLinkActive || (isActive && item.path !== '/')
                            ? 'text-[#0b1a2e] bg-[#fdf5df] border border-[#fae4a4] shadow-2xs font-extrabold'
                            : 'text-slate-700 hover:text-[#0b1a2e] hover:bg-slate-100/70'
                        }`
                      }
                      style={{ textDecoration: 'none' }}
                    >
                      <span>{item.label}</span>
                      {hasSubmenus && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-[#b88e22]' : 'opacity-50'
                          }`}
                        />
                      )}
                    </NavLink>
                  </div>

                  {/* Desktop Dropdown Menu Panel */}
                  {hasSubmenus && isDropdownOpen && (
                    <div
                      className={`absolute top-full ${
                        isRightAligned ? 'right-0' : 'left-0'
                      } z-50 pt-1.5 animate-fadeIn`}
                    >
                      <div
                        className={`min-w-[270px] max-w-[340px] bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 px-1 ring-1 ring-black/5 divide-y divide-slate-100 ${
                          item.submenus.length > 6 ? 'max-h-[75vh] overflow-y-auto' : 'overflow-visible'
                        }`}
                      >
                        <div className="space-y-0.5">
                          {item.submenus.map((sub) => {
                            const hasChildren = Boolean(sub.children || sub.childrenList);
                            const isSubActive = hoveredSubmenu === sub.label;
                            return (
                              <div
                                key={sub.label}
                                className="relative"
                                onMouseEnter={() => hasChildren && setHoveredSubmenu(sub.label)}
                                onMouseLeave={() => hasChildren && setHoveredSubmenu(null)}
                              >
                                <Link
                                  to={sub.path}
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setHoveredSubmenu(null);
                                  }}
                                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-between ${
                                    isSubActive
                                      ? 'text-[#0b1a2e] bg-[#fdf5df]'
                                      : 'text-slate-700 hover:text-[#0b1a2e] hover:bg-[#fdf5df]'
                                  }`}
                                  style={{ textDecoration: 'none' }}
                                >
                                  <span>{sub.label}</span>
                                  {hasChildren && (
                                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                                      isSubActive ? 'text-[#b88e22] translate-x-0.5' : 'text-slate-400'
                                    }`} />
                                  )}
                                </Link>

                                {/* 
                                  3rd Level Hover Flyout for Departments (Academics)
                                  HIDDEN BY DEFAULT. Appears ONLY when cursor is placed on "Departments"!
                                */}
                                {sub.childrenList && isSubActive && (
                                  <div
                                    className={`absolute ${
                                      isRightAligned ? 'right-full pr-1.5' : 'left-full pl-1.5'
                                    } top-0 z-50 animate-fadeIn`}
                                    onMouseEnter={() => setHoveredSubmenu(sub.label)}
                                    onMouseLeave={() => setHoveredSubmenu(null)}
                                  >
                                    <div className="min-w-[290px] max-w-[340px] bg-white border border-slate-200 rounded-xl shadow-2xl py-2 px-1 ring-1 ring-black/5">
                                      <div className="px-3 py-1 mb-1 text-[10px] font-bold uppercase tracking-wider text-[#b88e22] border-b border-slate-100 flex items-center justify-between">
                                        <span>Select Department</span>
                                        <span className="text-[9px] text-slate-400 font-normal">5 units</span>
                                      </div>
                                      <div className="space-y-0.5">
                                        {sub.childrenList.map((dept, dIdx) => (
                                          <Link
                                            key={dIdx}
                                            to={dept.path}
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              setHoveredSubmenu(null);
                                            }}
                                            className="block py-1.5 px-3 text-xs text-slate-700 hover:text-[#0b1a2e] font-semibold hover:bg-[#fdf5df] rounded-lg transition-colors"
                                            style={{ textDecoration: 'none' }}
                                          >
                                            • {dept.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* 
                                  3rd Level Hover Flyout for Supporting Staff (Administration)
                                  HIDDEN BY DEFAULT. Appears ONLY when cursor is placed on "Supporting Staff"!
                                */}
                                {sub.children && isSubActive && (
                                  <div
                                    className={`absolute ${
                                      isRightAligned ? 'right-full pr-1.5' : 'left-full pl-1.5'
                                    } top-0 z-50 animate-fadeIn`}
                                    onMouseEnter={() => setHoveredSubmenu(sub.label)}
                                    onMouseLeave={() => setHoveredSubmenu(null)}
                                  >
                                    <div className="min-w-[290px] max-w-[340px] bg-white border border-slate-200 rounded-xl shadow-2xl py-2 px-1 ring-1 ring-black/5">
                                      <div className="px-3 py-1 mb-1 text-[10px] font-bold uppercase tracking-wider text-[#b88e22] border-b border-slate-100 flex items-center justify-between">
                                        <span>Supporting Staff Roles</span>
                                        <span className="text-[9px] text-slate-400 font-normal">6 roles</span>
                                      </div>
                                      <div className="space-y-0.5">
                                        {sub.children.map((child, cIdx) => (
                                          <Link
                                            key={cIdx}
                                            to={`${sub.path}&staff=${encodeURIComponent(child)}`}
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              setHoveredSubmenu(null);
                                            }}
                                            className="block py-1.5 px-3 text-xs text-slate-700 hover:text-[#0b1a2e] font-semibold hover:bg-[#fdf5df] rounded-lg transition-colors"
                                            style={{ textDecoration: 'none' }}
                                          >
                                            • {child}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Scrolled Compact Action Button (Fades and glides in smoothly on scroll without changing layout width) */}
          <div className="w-[180px] xl:w-[220px] flex items-center justify-end flex-shrink-0">
            <button
              type="button"
              onClick={onOpenAdmissionsModal}
              className={`btn btn-gold btn-sm text-xs font-extrabold whitespace-nowrap shadow-xs transition-fade-slide hidden lg:inline-flex items-center gap-1.5 ${
                isScrolled
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1.5 pointer-events-none'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Unified Sticky Mobile Header Bar */}
          <div className="lg:hidden flex items-center justify-between w-full py-1">
            <Link
              to="/"
              className="flex items-center gap-2.5 group cursor-pointer"
              style={{ textDecoration: 'none' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <CollegeEmblem size={34} />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold text-[#0b1a2e] leading-tight">
                  CAE Bapatla
                </span>
                <span className="text-[10px] text-[#b88e22] font-bold uppercase tracking-wider">
                  ANGRAU • Estd 1983
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenAdmissionsModal}
                className="btn btn-gold py-1.5 px-3 text-xs font-extrabold inline-flex items-center gap-1 shadow-xs"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#06101e]" />
                <span className="hidden sm:inline">Apply</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#0b1a2e]" /> : <Menu className="w-5 h-5 text-slate-700" />}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Mobile Navigation Drawer (Attached dynamically to bottom of sticky navbar) */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 z-50 bg-white border-b border-slate-200 shadow-2xl px-5 pt-3 pb-6 animate-slideUp">
          <div className="flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
            {/* Mobile Top Badge with ANGRAU and Admin shortcuts */}
            <div className="p-2.5 mb-2 bg-[#f2f7fc] rounded-xl flex items-center justify-between border border-[#c5d7ed]">
              <span className="text-xs font-bold text-[#0b1a2e]">
                caebpt.ac.in • ANGRAU
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={currentStructure.angrauUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge badge-navy text-xs font-bold flex items-center gap-1"
                >
                  ANGRAU ↗
                </a>
                <Link
                  to="/admin"
                  className="badge badge-gold text-xs font-bold flex items-center gap-1"
                  style={{ textDecoration: 'none' }}
                >
                  <Shield className="w-3 h-3" />
                  <span>Admin</span>
                </Link>
              </div>
            </div>

            {/* Mobile Navigation List with Nested Accordions */}
            {menuItems.map((item) => {
              const hasSubmenus = item.submenus && item.submenus.length > 0;
              const isSectionOpen = mobileOpenSection === item.label;

              return (
                <div key={item.label} className="border-b border-slate-100 last:border-b-0 pb-1">
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => !hasSubmenus && setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-between ${
                          isActive
                            ? 'bg-[#0b1a2e] text-white'
                            : 'text-slate-800 hover:bg-slate-50'
                        }`
                      }
                      style={{ textDecoration: 'none' }}
                    >
                      <span>{item.label}</span>
                    </NavLink>

                    {hasSubmenus && (
                      <button
                        type="button"
                        onClick={() =>
                          setMobileOpenSection(isSectionOpen ? null : item.label)
                        }
                        className="p-2 text-slate-500 hover:text-navy-950 cursor-pointer"
                        aria-label={`Toggle ${item.label} Submenu`}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isSectionOpen ? 'rotate-180 text-[#b88e22]' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu Accordion Panel */}
                  {hasSubmenus && isSectionOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg my-1">
                      {item.submenus.map((sub) => {
                        const hasSubChildren = Boolean(sub.children || sub.childrenList);
                        const isSubOpen = mobileOpenSubSection === sub.label;

                        return (
                          <div key={sub.label} className="py-1 border-b border-slate-100 last:border-b-0">
                            <div className="flex items-center justify-between">
                              <Link
                                to={sub.path}
                                onClick={() => !hasSubChildren && setMobileMenuOpen(false)}
                                className="text-xs font-bold text-slate-700 hover:text-navy-950 flex-1 py-1"
                                style={{ textDecoration: 'none' }}
                              >
                                • {sub.label}
                              </Link>

                              {hasSubChildren && (
                                <button
                                  type="button"
                                  onClick={() => setMobileOpenSubSection(isSubOpen ? null : sub.label)}
                                  className="p-1 text-slate-500 hover:text-[#0b1a2e]"
                                  aria-label={`Toggle ${sub.label}`}
                                >
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform ${
                                      isSubOpen ? 'rotate-180 text-[#b88e22]' : ''
                                    }`}
                                  />
                                </button>
                              )}
                            </div>

                            {/* Collapsed by default on mobile too */}
                            {sub.children && isSubOpen && (
                              <div className="pl-4 py-1.5 space-y-1 bg-white rounded-md mt-1 border-l-2 border-[#d4a72c]">
                                {sub.children.map((c, idx) => (
                                  <Link
                                    key={idx}
                                    to={`${sub.path}&staff=${encodeURIComponent(c)}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1 text-[11px] text-slate-600 hover:text-[#0b1a2e] font-semibold"
                                    style={{ textDecoration: 'none' }}
                                  >
                                    - {c}
                                  </Link>
                                ))}
                              </div>
                            )}

                            {sub.childrenList && isSubOpen && (
                              <div className="pl-4 py-1.5 space-y-1 bg-white rounded-md mt-1 border-l-2 border-[#d4a72c]">
                                {sub.childrenList.map((dept, idx) => (
                                  <Link
                                    key={idx}
                                    to={dept.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1 text-[11px] text-slate-600 hover:text-[#0b1a2e] font-semibold"
                                    style={{ textDecoration: 'none' }}
                                  >
                                    - {dept.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Footer CTAs */}
            <div className="pt-3 mt-2 border-t border-slate-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionsModal();
                }}
                className="w-full btn btn-gold btn-md justify-center font-extrabold shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-[#06101e]" />
                <span className="font-extrabold text-[#06101e]">Apply for Admission</span>
              </button>

              <a
                href="tel:+918643224025"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 hover:bg-slate-200 transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-3.5 h-3.5 text-[#b88e22]" />
                <span>Call Campus Helpline: +91 8643 224025</span>
              </a>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
