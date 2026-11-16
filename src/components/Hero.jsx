import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { collegeInfo as defaultCollegeInfo } from '../data/collegeInfo';

const DEFAULT_HERO_SLIDES = [
  {
    image: "/images/hero/slide_1_workshop.jpg",
    title: "Mechanical Workshop & Fabrication Lab",
    alt: "Agricultural engineering students in mechanical workshop laboratory"
  },
  {
    image: "/images/hero/slide_2_surveying.jpg",
    title: "Field Surveying & Topographic Levelling Practice",
    alt: "Faculty instructing students in surveying and theodolite field work"
  },
  {
    image: "/images/hero/slide_3_machinery_lab.jpg",
    title: "Farm Machinery & Seeding Technology Demonstration",
    alt: "Students learning farm machinery mechanisms in lab"
  },
  {
    image: "/images/hero/slide_4_implements_yard.jpg",
    title: "Farm Power Implements & Field Testing Yard",
    alt: "Outdoor machinery yard with tractor implements and equipment"
  },
  {
    image: "/images/hero/slide_5_statue.jpg",
    title: "College Entrance & Institutional Memorial",
    alt: "Golden bust statue and entrance of Dr NTR CAE Bapatla",
    fit: "contain"
  },
  {
    image: "/images/hero/slide_6_signboard.jpg",
    title: "ANGRAU Dr NTR College Foundation Plaque",
    alt: "University stone foundation inscription in Telugu"
  }
];

export default function Hero() {
  const { officialStructure, collegeInfo } = useWebsite();
  const currentCollegeInfo = collegeInfo || defaultCollegeInfo;
  const hero = officialStructure?.hero || officialStructureData.hero || {
    badge: "ESTD. 1983 • Constituent of ANGRAU • Bapatla",
    titleMain: "Excellence in",
    titleAccent: "Agricultural Engineering",
    titleSuffix: "& Technology",
    intro: "Pioneering academic distinction, farm mechanization, micro-irrigation systems, and agro-processing engineering to drive sustainable agrarian advancement under ANGRAU.",
  };

  const slides = Array.isArray(hero.slides) && hero.slides.length > 0
    ? hero.slides
    : DEFAULT_HERO_SLIDES;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Guaranteed continuous auto-sliding every 4 seconds without stopping on hover
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Helper to extract YouTube Video ID for background streaming (if video is enabled)
  const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const isVideoMode = hero.mediaType === 'video' && Boolean(hero.bgVideo);
  const ytVideoId = isVideoMode ? getYouTubeId(hero.bgVideo) : null;

  return (
    <section
      id="home"
      className="relative bg-[#06101e] text-white overflow-hidden min-h-[calc(100vh-185px)] lg:min-h-[calc(100vh-188px)] flex items-start"
    >
      {/* Background Campus Media: Sliding Carousel or Video */}
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
              poster={slides[0]?.image || "/images/hero/slide_1_workshop.jpg"}
              className="w-full h-full object-cover object-center scale-105 filter blur-[1.5px]"
            >
              <source src={hero.bgVideo} type="video/mp4" />
              <source src={hero.bgVideo} type="video/webm" />
              <img
                src={slides[0]?.image || "/images/hero/slide_1_workshop.jpg"}
                alt="Dr NTR College of Agricultural Engineering, Bapatla Campus"
                className="w-full h-full object-cover"
              />
            </video>
          )
        ) : (
          /* Multi-image Sliding Carousel with Crystal-Clear Visibility */
          slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            const isContain = slide.fit === 'contain' || (slide.image && slide.image.includes('slide_5'));
            return (
              <div
                key={slide.image || idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {isContain ? (
                  <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-[#06101e]">
                    {/* Ambient backdrop so wide screens blend naturally without harsh black bars */}
                    <img
                      src={slide.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-125 opacity-30 pointer-events-none"
                    />
                    {/* Natural un-enlarged, uncropped full photo */}
                    <img
                      src={slide.image}
                      alt={slide.alt || "Campus view at Dr NTR CAE Bapatla"}
                      className="relative z-[1] max-h-full max-w-full object-contain object-center drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]"
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.alt || "Campus view at Dr NTR CAE Bapatla"}
                    className="w-full h-full object-cover object-center"
                    loading={idx === 0 ? "eager" : "lazy"}
                    fetchpriority={idx === 0 ? "high" : "low"}
                    decoding="async"
                  />
                )}
              </div>
            );
          })
        )}

        {/* Minimal, Top-Focused Gradient: Keeps images bright and clear while ensuring headline readability */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg, rgba(6, 16, 30, 0.75) 0%, rgba(6, 16, 30, 0.35) 22%, transparent 45%, rgba(6, 16, 30, 0.45) 100%)
            `
          }}
        />
      </div>

      {/* Slide Navigation Controls & Indicators */}
      {!isVideoMode && slides.length > 1 && (
        <div className="absolute bottom-4 right-4 sm:right-8 z-[10] flex items-center gap-1.5 sm:gap-2 bg-[#06101e]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          <button
            type="button"
            onClick={prevSlide}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5 px-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? 'w-6 h-1.5 bg-[#ecc75f]'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={nextSlide}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="container relative z-10 pt-5 sm:pt-7 lg:pt-8 pb-6">
        {/* Floating Open Cinematic Layout */}
        <div className="w-full">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1a2e]/90 border border-[#d4a72c]/50 text-[#fae4a4] text-xs font-bold mb-3 sm:mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#ecc75f] flex-shrink-0" />
            <span>{hero.badge || "ESTD. 1983 • Constituent of ANGRAU • Bapatla"}</span>
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
