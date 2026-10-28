import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn, Calendar, Sparkles } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['All', 'Campus', 'Labs', 'Fieldwork', 'Events'];

  const filteredGallery = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handlePrev = () => {
    setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = () => {
    setActiveLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="section-padding bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <ImageIcon className="w-3.5 h-3.5" />
            Visual Tour
          </span>
          <h2 className="section-title">Campus Life & Gallery</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            A photographic glimpse into our active classrooms, tractor workshops, research laboratories, and vibrant collegiate events.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat === 'All' ? 'All Photographs' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="academic-card group cursor-pointer overflow-hidden border border-slate-200 hover:border-gold-400/80 transition-all bg-white relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpenLightbox(index);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              {/* Image with zoom effect */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="badge badge-gold text-[10px] font-bold">
                      {item.category}
                    </span>
                    <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 mt-1 font-normal">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Card Summary (Visible when not hovered) */}
              <div className="p-4 bg-white flex items-center justify-between group-hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="font-semibold text-navy-950 text-sm truncate max-w-[200px]">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3 h-3 text-gold-500" />
                    {item.date}
                  </span>
                </div>

                <span className="text-xs font-semibold text-navy-700 group-hover:text-gold-600 transition-colors flex items-center gap-1">
                  Preview
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Archive Notice */}
        <div className="text-center text-xs text-slate-500">
          Photographic archives documenting campus developments, student initiatives, convocation ceremonies, and regional agricultural conventions.
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredGallery}
        activeIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}

