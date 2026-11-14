import React from 'react';
import { Sparkles } from 'lucide-react';
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

  // Helper to extract YouTube Video ID for background streaming
  const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const isVideoMode = hero.mediaType === 'video' && Boolean(hero.bgVideo);
  const ytVideoId = isVideoMode ? getYouTubeId(hero.bgVideo) : null;

  return (
    <section id="home" className="relative bg-[#06101e] text-white overflow-hidden min-h-[calc(100vh-185px)] lg:min-h-[calc(100vh-188px)] flex items-center">
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
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
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
              linear-gradient(to right, rgba(6, 16, 30, 0.88) 0%, rgba(6, 16, 30, 0.60) 45%, rgba(6, 16, 30, 0.35) 80%, rgba(6, 16, 30, 0.30) 100%),
              linear-gradient(180deg, rgba(6, 16, 30, 0.65) 0%, transparent 40%, rgba(6, 16, 30, 0.90) 100%)
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

      <div className="container relative z-10 py-10 sm:py-12 lg:py-14">
        {/* Floating Open Cinematic Layout */}
        <div className="w-full">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1a2e]/90 border border-[#d4a72c]/50 text-[#fae4a4] text-xs font-bold mb-5 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#ecc75f] flex-shrink-0" />
            <span>{hero.badge}</span>
          </div>

          {/* Guaranteed Strict Single-Line Typography */}
          <h1 className="font-heading text-[clamp(1.15rem,2.9vw,2.95rem)] font-black text-white tracking-tight leading-none whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Excellence in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecc75f] via-[#fae4a4] to-[#ecc75f]">
              Agricultural Engineering
            </span>{' '}
            & Technology
          </h1>
        </div>
      </div>
    </section>
  );
}
