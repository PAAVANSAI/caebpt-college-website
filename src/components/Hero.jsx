import React, { useState } from 'react';
import { ArrowRight, BookOpen, Building2, ChevronDown, ChevronRight, Sparkles, Award } from 'lucide-react';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { collegeInfo as defaultCollegeInfo } from '../data/collegeInfo';

export default function Hero() {
  const { officialStructure, collegeInfo } = useWebsite();
  const currentCollegeInfo = collegeInfo || defaultCollegeInfo;
  const hero = officialStructure?.hero || officialStructureData.hero || {
    badge: "ESTD. 1983 • Constituent of ANGRAU • Bapatla",
    titleMain: "Excellence in",
    titleAccent: "Agricultural Engineering",
    titleSuffix: "& Technology",
    intro: "Pioneering academic distinction, farm mechanization, micro-irrigation systems, and agro-processing engineering to drive sustainable agrarian advancement under ANGRAU.",
    bgImage: "/images/campus_hero.jpg",
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
    <section id="home" className="relative bg-[#06101e] text-white overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center">
      {/* Background Campus Media with Soft Cinematic Depth-of-Field */}
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
              preload="auto"
              poster={hero.bgImage || "/images/campus_hero.jpg"}
              className="w-full h-full object-cover object-center scale-105 filter blur-[1.5px]"
            >
              <source src={hero.bgVideo} type="video/mp4" />
              <source src={hero.bgVideo} type="video/webm" />
              <img
                src={hero.bgImage || "/images/campus_hero.jpg"}
                alt="Dr NTR College of Agricultural Engineering, Bapatla Campus"
                className="w-full h-full object-cover"
              />
            </video>
          )
        ) : (
          <img
            src={hero.bgImage || "/images/campus_hero.jpg"}
            alt="Dr NTR College of Agricultural Engineering, Bapatla Campus"
            className="w-full h-full object-cover object-center scale-105 filter blur-[1.5px] transition-transform duration-1000"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            width="1280"
            height="720"
          />
        )}

        {/* Amrita-Inspired Deep Cinematic Gradient Scrim (Vignette) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgba(6, 16, 30, 0.94) 0%, rgba(6, 16, 30, 0.78) 48%, rgba(6, 16, 30, 0.45) 80%, rgba(6, 16, 30, 0.35) 100%),
              linear-gradient(180deg, rgba(6, 16, 30, 0.70) 0%, transparent 40%, rgba(6, 16, 30, 0.95) 100%)
            `
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

      <div className="container relative z-10 py-12 sm:py-16 lg:py-24">
        {/* Floating Open Cinematic Layout (No boxed card!) */}
        <div className="max-w-3xl">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1a2e]/90 border border-[#d4a72c]/50 text-[#fae4a4] text-xs font-bold mb-5 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#ecc75f] flex-shrink-0" />
            <span>{hero.badge}</span>
          </div>

          {/* Large, Bold, Elegant Typography */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-white tracking-tight leading-[1.08] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Excellence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecc75f] via-[#fae4a4] to-[#ecc75f]">
              Agricultural Engineering
            </span> <br />
            & Technology
          </h1>

          {/* Clean Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200/95 font-medium leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {hero.intro}
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10 sm:mb-14">
            <button
              type="button"
              onClick={() => scrollToSection('academics')}
              className="px-6 py-3.5 rounded-full bg-[#d4a72c] hover:bg-[#ecc75f] text-[#06101e] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#06101e]" />
              <span>Explore Academic Programmes</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('facilities')}
              className="px-5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm flex items-center gap-2 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#f5c84c]" />
              <span>Campus Facilities</span>
            </button>
          </div>
        </div>

        {/* Live Highlight Cards Row */}
        <div className="pt-6 sm:pt-8 border-t border-white/15">
          <div className="text-[10px] sm:text-[11px] text-[#ecc75f] font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
            <span>Institutional Highlights</span>
            <span className="text-slate-300 font-normal lowercase">(accredited profile)</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {(currentCollegeInfo?.institutionalHighlights || []).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b1a2e]/85 hover:bg-[#0f243f]/95 border border-white/15 hover:border-[#ecc75f] rounded-xl p-3 sm:p-4 transition-all duration-200 shadow-md backdrop-blur-sm group"
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
