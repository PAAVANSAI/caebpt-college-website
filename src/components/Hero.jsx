import React from 'react';
import { ArrowRight, BookOpen, Building2, ChevronDown, Sparkles } from 'lucide-react';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { collegeInfo as defaultCollegeInfo } from '../data/collegeInfo';

export default function Hero({ onOpenAdmissionsModal }) {
  const { officialStructure, collegeInfo } = useWebsite();
  const currentCollegeInfo = collegeInfo || defaultCollegeInfo;
  const hero = officialStructure?.hero || officialStructureData.hero || {
    badge: "ESTD. 1983 • Constituent of ANGRAU • Bapatla",
    titleMain: "Excellence in",
    titleAccent: "Agricultural Engineering",
    titleSuffix: "& Technology",
    intro: "Pioneering academic distinction, farm mechanization, micro-irrigation systems, and agro-processing engineering to drive sustainable agrarian advancement under ANGRAU.",
    bgImage: "/images/campus_hero.webp",
    highlights: [
      { count: "6", label: "Core Academic Departments", note: "Specialized Disciplines" },
      { count: "1,046", label: "Total Graduates", note: "Graduated Agro-Engineers" },
      { count: "25", label: "Campus Green Acreage", note: "9.51 Hectares on NH-216" },
      { count: "2021–26", label: "ICAR Accreditation", note: "National NAEAB Cycle" },
    ]
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to extract YouTube Video ID for background streaming
  const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const isVideoMode = hero.mediaType === 'video' && Boolean(hero.bgVideo);
  const ytVideoId = isVideoMode ? getYouTubeId(hero.bgVideo) : null;

  return (
    <section id="home" className="relative bg-[#06101e] text-white overflow-hidden min-h-[580px] flex items-center">
      {/* Background Campus Media (Image or Video) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isVideoMode ? (
          ytVideoId ? (
            <div className="w-full h-full relative overflow-hidden pointer-events-none">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${ytVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytVideoId}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
                title="Campus Drone Video Background"
                className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={hero.bgImage}
              className="w-full h-full object-cover object-center scale-102"
            >
              <source src={hero.bgVideo} type="video/mp4" />
              <source src={hero.bgVideo} type="video/webm" />
              <img
                src={hero.bgImage}
                alt="College of Agricultural Engineering, Bapatla Campus"
                className="w-full h-full object-cover"
              />
            </video>
          )
        ) : (
          <picture>
            <source
              type="image/webp"
              srcSet="/images/campus_hero_desktop.webp 1200w, /images/campus_hero.webp 960w"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
            <img
              src={hero.bgImage || "/images/campus_hero.webp"}
              alt="College of Agricultural Engineering, Bapatla Campus"
              className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              width="1280"
              height="720"
            />
          </picture>
        )}

        {/* Balanced Academic Scrim — Keeps campus/video visible while ensuring text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6, 16, 30, 0.65) 0%, rgba(11, 26, 46, 0.52) 45%, rgba(6, 16, 30, 0.88) 100%)'
          }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(212, 167, 44, 0.4) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10 py-8 sm:py-14 lg:py-20">
        <div className="max-w-2xl">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0b1a2e]/85 border border-[#d4a72c]/50 text-[#fae4a4] text-[10.5px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ecc75f] flex-shrink-0" />
            <span>{hero.badge}</span>
          </div>

          {/* Clean Academic Headline */}
          <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white leading-snug sm:leading-tight mb-3 sm:mb-4 drop-shadow-md">
            {hero.titleMain}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecc75f] via-[#fae4a4] to-[#ecc75f] font-extrabold">
              {hero.titleAccent}
            </span>{' '}
            {hero.titleSuffix}
          </h1>

          {/* Intro Text */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed mb-5 sm:mb-7 max-w-xl font-normal drop-shadow-sm">
            {hero.intro}
          </p>

          {/* Action CTAs (Mobile Responsive Stacking) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-10">
            <button
              type="button"
              onClick={() => scrollToSection('academics')}
              className="btn btn-gold py-2.5 px-4 text-xs sm:text-sm font-extrabold shadow-md hover:scale-102 transition-transform flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
              <button
                type="button"
                onClick={onOpenAdmissionsModal}
                className="btn btn-outline-gold py-2.5 px-3 text-xs sm:text-sm font-bold shadow-sm hover:scale-102 transition-transform justify-center"
              >
                <span>Admissions Enquiry</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('facilities')}
                className="btn btn-white py-2.5 px-3 text-xs sm:text-sm font-bold shadow-sm hover:scale-102 transition-transform flex items-center justify-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-[#0b1a2e]" />
                <span>Facilities</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Highlight Cards Row */}
        <div className="pt-4 sm:pt-6 border-t border-white/20">
          <div className="text-[10px] sm:text-[11px] text-[#ecc75f] font-bold tracking-wider uppercase mb-2.5 sm:mb-3 flex items-center gap-2">
            <span>Institutional Highlights</span>
            <span className="text-slate-300 font-normal lowercase">(accredited profile)</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {(currentCollegeInfo?.institutionalHighlights || []).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b1a2e]/85 hover:bg-[#0f243f]/95 border border-white/15 hover:border-[#ecc75f] rounded-xl p-2.5 sm:p-4 transition-all duration-200 shadow-md backdrop-blur-sm group"
              >
                <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                  <span className="text-lg sm:text-2xl font-extrabold text-[#fae4a4] font-heading tracking-tight">
                    {item.value}
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d4a72c] group-hover:scale-125 transition-transform" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white group-hover:text-[#fae4a4] transition-colors leading-tight">
                  {item.label}
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-slate-300 mt-0.5 leading-tight">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center gap-1 text-slate-300 hover:text-[#ecc75f] transition-colors text-[11px] font-semibold cursor-pointer bg-transparent border-0 p-0"
            aria-label="Scroll to About section"
          >
            <span>Learn More About College</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#ecc75f]" />
          </button>
        </div>
      </div>
    </section>
  );
}
