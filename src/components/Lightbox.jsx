import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex === null || !Array.isArray(images) || !images[activeIndex]) return null;

  const current = images[activeIndex];

  // Keyboard navigation (Esc to close, Left/Right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
    >
      {/* Top Bar with Counter & Close */}
      <div className="flex items-center justify-between z-20 text-white w-full max-w-6xl mx-auto pb-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-gold-400" />
          <span className="text-sm font-semibold tracking-wide">
            {activeIndex + 1} / {images.length}
          </span>
          <span className="text-slate-400 text-xs hidden sm:inline">•</span>
          <span className="text-gold-300 text-xs font-medium hidden sm:inline">{current.category}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-gold-400 hover:text-navy-950 text-white transition-all cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Viewport with Previous & Next controls */}
      <div
        className="lightbox-content-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          className="lightbox-nav-btn absolute left-2 sm:left-6 z-20"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={current.image || current.url}
          alt={current.title}
          className="lightbox-image select-none"
        />

        <button
          type="button"
          onClick={onNext}
          className="lightbox-nav-btn absolute right-2 sm:right-6 z-20"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Title Footer */}
      <div
        className="z-20 text-center max-w-2xl mx-auto pt-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-heading text-base font-bold text-white mb-1">
          {current.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {current.caption}
        </p>
        <span className="text-[11px] text-gold-300 font-semibold block mt-1">
          {current.date}
        </span>
      </div>
    </div>
  );
}

