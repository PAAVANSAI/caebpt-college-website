import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import NoticeTicker from '../components/NoticeTicker';
import VideoModal from '../components/VideoModal';
import Lightbox from '../components/Lightbox';
import { officialStructureData } from '../data/officialStructureData';
import { useWebsite } from '../context/WebsiteContext';
import {
  Quote,
  Bell,
  Briefcase,
  FileSpreadsheet,
  FileText,
  Image as ImageIcon,
  Video,
  ExternalLink,
  ChevronRight,
  Calendar,
  Download,
  AlertCircle,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function HomePage({ onOpenAdmissions, onSelectProgram, onSelectNotice }) {
  const { siteSettings, officialStructure } = useWebsite();
  const currentStructure = officialStructure || officialStructureData;
  const messages = currentStructure?.messages || officialStructureData.messages;
  const deanMessage = messages?.dean || officialStructureData.messages.dean;
  const assocDeanMessage = messages?.associateDean || officialStructureData.messages.associateDean;
  const announcements = currentStructure?.announcements || officialStructureData.announcements;
  const newsList = (Array.isArray(announcements?.newsEvents) && announcements.newsEvents.length > 0)
    ? announcements.newsEvents
    : officialStructureData.announcements.newsEvents;
  const recList = (Array.isArray(announcements?.recruitment) && announcements.recruitment.length > 0)
    ? announcements.recruitment
    : officialStructureData.announcements.recruitment;
  const tenderList = (Array.isArray(announcements?.tenders) && announcements.tenders.length > 0)
    ? announcements.tenders
    : officialStructureData.announcements.tenders;
  const circularList = (Array.isArray(announcements?.circulars) && announcements.circulars.length > 0)
    ? announcements.circulars
    : officialStructureData.announcements.circulars;
  const galleries = currentStructure?.galleries || officialStructureData.galleries;
  const photoList = (Array.isArray(galleries?.photos) && galleries.photos.length > 0)
    ? galleries.photos
    : officialStructureData.galleries.photos;
  const videoList = (Array.isArray(galleries?.videos) && galleries.videos.length > 0)
    ? galleries.videos
    : officialStructureData.galleries.videos;
  const angrauUrl = currentStructure?.angrauUrl || officialStructureData.angrauUrl;
  const angrauName = currentStructure?.angrauName || officialStructureData.angrauName;

  const [activeAnnouncementTab, setActiveAnnouncementTab] = useState('news');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const handleDownloadDoc = (item, type = 'Notification') => {
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${item.title || item.docName}</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #111; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px; }
            .crest { font-size: 20px; font-weight: bold; text-transform: uppercase; }
            .sub { font-size: 13px; color: #444; }
            .meta { display: flex; justify-content: space-between; margin-bottom: 25px; font-size: 14px; font-weight: bold; }
            .title { text-align: center; font-size: 17px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; text-transform: uppercase; }
            .content { font-size: 15px; text-align: justify; margin-bottom: 30px; }
            .specs { background: #f9f9f9; padding: 15px; border-left: 4px solid #000; margin-bottom: 25px; font-size: 14px; }
            .sig { margin-top: 50px; text-align: right; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="no-print" style="margin-bottom: 20px; text-align: right;">
            <button onclick="window.print()" style="padding: 8px 18px; background: #0b1a2e; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Print / Save as Official PDF</button>
          </div>
          <div class="header">
            <div class="crest">COLLEGE OF AGRICULTURAL ENGINEERING, BAPATLA</div>
            <div class="sub">ACHARYA N.G. RANGA AGRICULTURAL UNIVERSITY (ANGRAU)</div>
            <div class="sub">Bapatla - 522 101, Bapatla District, Andhra Pradesh, India</div>
          </div>
          <div class="meta">
            <div>Ref: ${item.refNo || 'CAEBPT/OFFICIAL/' + new Date().getFullYear()}</div>
            <div>Date: ${item.date || new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
          </div>
          <div class="title">${type}: ${item.title || 'Official Document'}</div>
          <div class="content">
            <p>${item.summary || item.content || 'This document has been officially issued and entered into the institutional administrative records.'}</p>
            ${item.deadline ? `<div class="specs"><strong>Submission / Application Deadline:</strong> ${item.deadline}<br/><strong>File Reference:</strong> ${item.docName || 'Official Notification'}</div>` : ''}
          </div>
          <div class="sig">
            <div style="font-weight: bold;">Associate Dean</div>
            <div>College of Agricultural Engineering</div>
            <div>ANGRAU, Bapatla</div>
          </div>
        </body>
        </html>
      `);
      win.document.close();
    }
  };

  return (
    <div>
      {/* Emergency Administrative Broadcast Banner (if enabled in Admin Panel) */}
      {siteSettings?.emergencyBannerActive && (
        <div className="bg-[#b45309] text-white py-1.5 sm:py-2 px-3 sm:px-4 text-[11px] sm:text-xs font-semibold flex items-center justify-between border-b border-[#d97706]">
          <div className="container flex items-center gap-1.5 sm:gap-2 justify-center text-center leading-snug">
            <AlertCircle className="w-3.5 h-3.5 text-[#fae4a4] flex-shrink-0" />
            <span>{siteSettings?.emergencyBannerText || 'AP EAPCET & ICAR AIEEA 2025–26 Counseling Window: Official B.Tech (Agri Engg) admissions guidelines and verification schedules are active.'}</span>
          </div>
        </div>
      )}

      {/* Hero Banner Section */}
      <Hero onOpenAdmissionsModal={() => onOpenAdmissions?.()} />

      {/* Live Notice Ticker */}
      <NoticeTicker onSelectNotice={onSelectNotice} />



      {/* ITEMS 1 & 2: LEADERSHIP MESSAGES (MESSAGE FROM DEAN & MESSAGE FROM ASSOCIATE DEAN) */}
      <section className="section-padding bg-white border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Quote className="w-3.5 h-3.5" />
              Institutional Leadership
            </span>
            <h2 className="section-title">Messages from Leadership</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Guiding thoughts from the Dean of Agricultural Engineering & Technology and the Associate Dean of the College.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Item 1: Message from Dean */}
            <div className="academic-card border border-slate-200/90 shadow-lg bg-white flex flex-col justify-between border-t-4 border-t-[#d4a72c] hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-6 flex items-center justify-between border-b border-[#153258]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ecc75f] block">
                    ANGRAU Leadership
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white">
                    {deanMessage?.title || officialStructureData.messages.dean.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-[#d4a72c]" />
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-100">
                  <div className="relative">
                    <img
                      src={deanMessage?.image || deanMessage?.photo || officialStructureData.messages.dean.image}
                      alt={deanMessage?.name || officialStructureData.messages.dean.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#d4a72c] shadow-md flex-shrink-0"
                      loading="lazy"
                      decoding="async"
                      width="64"
                      height="64"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0b1a2e] border-2 border-white flex items-center justify-center text-[10px] text-[#fae4a4]">
                      ★
                    </span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-950 text-base leading-tight">
                      {deanMessage?.name || officialStructureData.messages.dean.name}
                    </h4>
                    <p className="text-xs text-[#854d0e] font-extrabold mt-0.5">
                      {deanMessage?.role || officialStructureData.messages.dean.role}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {deanMessage?.qualification || officialStructureData.messages.dean.qualification}
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-quote italic">
                  {(Array.isArray(deanMessage?.content)
                    ? deanMessage.content
                    : [deanMessage?.content || deanMessage?.message || officialStructureData.messages.dean.content[0]]
                  ).map((p, idx) => (
                    <p key={idx}>"{p}"</p>
                  ))}
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">Faculty of Agricultural Engineering & Technology</span>
                  <span className="badge badge-navy text-[10px] font-bold">Official Record</span>
                </div>
              </div>
            </div>

            {/* Item 2: Message from Associate Dean */}
            <div className="academic-card border border-slate-200/90 shadow-lg bg-white flex flex-col justify-between border-t-4 border-t-[#ecc75f] hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-6 flex items-center justify-between border-b border-[#153258]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ecc75f] block">
                    Collegiate Head
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white">
                    {assocDeanMessage?.title || officialStructureData.messages.associateDean.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-[#ecc75f]" />
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-100">
                  <div className="relative">
                    <img
                      src={assocDeanMessage?.image || assocDeanMessage?.photo || officialStructureData.messages.associateDean.image}
                      alt={assocDeanMessage?.name || officialStructureData.messages.associateDean.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#d4a72c] shadow-md flex-shrink-0"
                      loading="lazy"
                      decoding="async"
                      width="64"
                      height="64"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0b1a2e] border-2 border-white flex items-center justify-center text-[10px] text-[#fae4a4]">
                      ★
                    </span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-950 text-base leading-tight">
                      {assocDeanMessage?.name || officialStructureData.messages.associateDean.name}
                    </h4>
                    <p className="text-xs text-[#854d0e] font-extrabold mt-0.5">
                      {assocDeanMessage?.role || officialStructureData.messages.associateDean.role}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {assocDeanMessage?.qualification || officialStructureData.messages.associateDean.qualification}
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-quote italic">
                  {(Array.isArray(assocDeanMessage?.content)
                    ? assocDeanMessage.content
                    : [assocDeanMessage?.content || assocDeanMessage?.message || officialStructureData.messages.associateDean.content[0]]
                  ).map((p, idx) => (
                    <p key={idx}>"{p}"</p>
                  ))}
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">CAE Bapatla Administration</span>
                  <span className="badge badge-gold text-[10px] font-bold">Principal's Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITEMS 3, 4, 5, 6: OFFICIAL NOTICES, RECRUITMENT, TENDERS & CIRCULARS PANEL */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Bell className="w-3.5 h-3.5" />
              Official Notifications & Announcements
            </span>
            <h2 className="section-title">News, Recruitment, Tenders & Circulars</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Centralized official portal for academic circulars, faculty recruitment, institutional procurement tenders, and campus updates.
            </p>
          </div>

          {/* Announcement Category Selector Tabs */}
          <div className="filter-tabs-wrapper mb-8">
            <button
              type="button"
              onClick={() => setActiveAnnouncementTab('news')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 ${
                activeAnnouncementTab === 'news' ? 'active' : ''
              }`}
            >
              <Bell className={`w-4 h-4 ${activeAnnouncementTab === 'news' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Latest News & Events ({newsList.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveAnnouncementTab('recruitment')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 ${
                activeAnnouncementTab === 'recruitment' ? 'active' : ''
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeAnnouncementTab === 'recruitment' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Recruitment ({recList.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveAnnouncementTab('tenders')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 ${
                activeAnnouncementTab === 'tenders' ? 'active' : ''
              }`}
            >
              <FileSpreadsheet className={`w-4 h-4 ${activeAnnouncementTab === 'tenders' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Tenders ({tenderList.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveAnnouncementTab('circulars')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 ${
                activeAnnouncementTab === 'circulars' ? 'active' : ''
              }`}
            >
              <FileText className={`w-4 h-4 ${activeAnnouncementTab === 'circulars' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Circulars ({circularList.length})</span>
            </button>
          </div>

          {/* Tab Content 1: Latest News & Events */}
          {activeAnnouncementTab === 'news' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {newsList.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#d4a72c] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="badge badge-gold text-[10px] font-extrabold">{item.category}</span>
                      <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#b88e22]" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-navy-950 text-base mb-2.5 leading-snug group-hover:text-navy-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>
                  <Link
                    to="/notices"
                    className="text-xs font-bold text-navy-800 hover:text-[#b88e22] inline-flex items-center gap-1.5 mt-auto pt-3 border-t border-slate-100 transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Read Full Notification</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 2: Recruitment */}
          {activeAnnouncementTab === 'recruitment' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {recList.map((rec) => (
                <div
                  key={rec.id}
                  className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-[#d4a72c] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <span className="badge badge-navy text-[10px] font-extrabold">{rec.category}</span>
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">Dept: {rec.department}</span>
                      <span className="text-xs text-red-600 font-extrabold bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md">
                        Last Date: {rec.deadline}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-navy-950 text-base leading-snug group-hover:text-navy-700 transition-colors">
                      {rec.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{rec.summary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownloadDoc(rec, 'Recruitment Notification')}
                    className="btn btn-outline btn-sm text-xs font-bold flex items-center gap-2 flex-shrink-0 hover:bg-[#0b1a2e] hover:text-white hover:border-[#0b1a2e] transition-all w-full sm:w-auto justify-center"
                  >
                    <Download className="w-3.5 h-3.5 text-[#b88e22]" />
                    <span>View / Print Circular</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 3: Tenders */}
          {activeAnnouncementTab === 'tenders' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {tenderList.map((tnd) => (
                <div
                  key={tnd.id}
                  className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-[#d4a72c] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <span className="badge badge-gold text-[10px] font-extrabold">Tender Notice</span>
                      <span className="text-xs text-slate-600 font-mono font-bold bg-slate-100 px-2.5 py-0.5 rounded-md">Ref: {tnd.refNo}</span>
                      <span className="text-xs text-amber-700 font-extrabold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                        Due: {tnd.deadline}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-navy-950 text-base leading-snug group-hover:text-navy-700 transition-colors">
                      {tnd.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{tnd.summary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownloadDoc(tnd, 'Tender Specifications')}
                    className="btn btn-outline btn-sm text-xs font-bold flex items-center gap-2 flex-shrink-0 hover:bg-[#0b1a2e] hover:text-white hover:border-[#0b1a2e] transition-all w-full sm:w-auto justify-center"
                  >
                    <Download className="w-3.5 h-3.5 text-[#b88e22]" />
                    <span>View Tender Specs</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 4: Circulars */}
          {activeAnnouncementTab === 'circulars' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {circularList.map((cir) => (
                <div
                  key={cir.id}
                  className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-[#d4a72c] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <span className="badge badge-navy text-[10px] font-extrabold">Official Circular</span>
                      <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#b88e22]" />
                        {cir.date}
                      </span>
                      <span className="text-xs text-slate-600 font-bold bg-slate-100 px-2.5 py-0.5 rounded-md">Issued by: {cir.issuingAuthority}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-navy-950 text-base leading-snug group-hover:text-navy-700 transition-colors">
                      {cir.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{cir.summary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownloadDoc(cir, 'Official Circular')}
                    className="btn btn-primary btn-sm text-xs font-bold flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-center"
                  >
                    <Download className="w-3.5 h-3.5 text-[#fae4a4]" />
                    <span>View / Print PDF</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              to="/notices"
              className="btn btn-outline btn-md text-xs font-bold inline-flex items-center gap-2"
              style={{ textDecoration: 'none' }}
            >
              <span>View All Circulars & Archives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ITEM 7: PHOTO GALLERY */}
      <section className="section-padding bg-white border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <ImageIcon className="w-3.5 h-3.5" />
              Visual Tour
            </span>
            <h2 className="section-title">Photo Gallery</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Campus architecture, tractor testing grounds, hydraulics flume laboratories, and student activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {photoList.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActivePhotoIndex(idx)}
                className="academic-card group cursor-pointer overflow-hidden border border-slate-200/90 hover:border-[#d4a72c] hover:shadow-xl transition-all duration-300 bg-white rounded-2xl"
                role="button"
                tabIndex={0}
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="256"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="badge badge-navy bg-navy-950/85 text-white backdrop-blur-md text-[10px] font-extrabold border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-bold flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-[#fae4a4]" />
                      <span>Click to enlarge photo</span>
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-extrabold text-navy-950 text-sm leading-snug group-hover:text-navy-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="btn btn-outline btn-md text-xs font-bold inline-flex items-center gap-2 hover:bg-[#0b1a2e] hover:text-white hover:border-[#0b1a2e] transition-all"
              style={{ textDecoration: 'none' }}
            >
              <span>Explore Complete Photo Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ITEM 8: VIDEO GALLERY */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Video className="w-3.5 h-3.5" />
              Documentaries & Video Tours
            </span>
            <h2 className="section-title">Video Gallery</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Audio-visual showcases of machinery operations, micro-irrigation trials, student engineering projects, and campus overviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {videoList.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="academic-card group cursor-pointer overflow-hidden border border-slate-200/90 hover:border-[#d4a72c] hover:shadow-xl transition-all duration-300 bg-white rounded-2xl"
                role="button"
                tabIndex={0}
              >
                <div className="relative h-52 overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-80"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="208"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#b88e22] to-[#ecc75f] text-[#06101e] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6 fill-[#06101e]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-extrabold text-navy-950 text-sm leading-snug group-hover:text-navy-700 transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <span className="text-xs text-slate-500">
              Click any video card above to launch the simulated media viewer.
            </span>
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      <Lightbox
        images={photoList}
        activeIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onPrev={() => setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : photoList.length - 1))}
        onNext={() => setActivePhotoIndex((prev) => (prev < photoList.length - 1 ? prev + 1 : 0))}
      />

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
