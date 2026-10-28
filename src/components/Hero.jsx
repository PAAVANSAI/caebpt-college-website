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
    bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
    highlights: [
      { count: "5", label: "Core Academic Departments", note: "Specialized Disciplines" },
      { count: "3+", label: "Degree Programs Offered", note: "B.Tech, M.Tech & Ph.D." },
      { count: "18+", label: "Modern Engineering Labs", note: "Testing & Research Units" },
      { count: "50+", label: "Campus Green Acreage", note: "Acres with Trial Fields" },
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
          <img
            src={hero.bgImage}
            alt="College of Agricultural Engineering, Bapatla Campus"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
          />
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

      <div className="container relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b1a2e]/80 border border-[#d4a72c]/50 text-[#fae4a4] text-xs font-bold mb-4 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ecc75f]" />
            <span>{hero.badge}</span>
          </div>

          {/* Clean Academic Headline */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            {hero.titleMain}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecc75f] via-[#fae4a4] to-[#ecc75f] font-extrabold">
              {hero.titleAccent}
            </span>{' '}
            {hero.titleSuffix}
          </h1>

          {/* Intro Text */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed mb-7 max-w-xl font-normal drop-shadow-sm">
            {hero.intro}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              type="button"
              onClick={() => scrollToSection('academics')}
              className="btn btn-gold btn-md shadow-md hover:scale-102 transition-transform"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onOpenAdmissionsModal}
              className="btn btn-outline-gold btn-md shadow-sm font-bold hover:scale-102 transition-transform"
            >
              <span>Admissions Enquiry</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('facilities')}
              className="btn btn-white btn-md shadow-sm font-bold hover:scale-102 transition-transform"
            >
              <Building2 className="w-3.5 h-3.5 text-[#0b1a2e]" />
              <span>Campus Facilities</span>
            </button>
          </div>
        </div>

        {/* Live Highlight Cards Row */}
        <div className="pt-6 border-t border-white/20">
          <div className="text-[11px] text-[#ecc75f] font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
            <span>Institutional Highlights</span>
            <span className="text-slate-300 font-normal lowercase">(accredited profile)</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {(currentCollegeInfo?.institutionalHighlights || []).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b1a2e]/85 hover:bg-[#0f243f]/95 border border-white/15 hover:border-[#ecc75f] rounded-xl p-4 transition-all duration-200 shadow-md backdrop-blur-sm group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#fae4a4] font-heading tracking-tight">
                    {item.value}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#d4a72c] group-hover:scale-125 transition-transform" />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-[#fae4a4] transition-colors leading-snug">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
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
