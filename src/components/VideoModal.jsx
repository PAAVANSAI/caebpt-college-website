import React from 'react';
import { X, Video, ExternalLink } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-3xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        <div className="bg-[#06101e] text-white p-4 flex items-center justify-between border-b border-[#153258]">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-[#d4a72c]" />
            <h3 id="video-modal-title" className="font-heading text-sm font-bold text-white truncate">
              {video.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-navy-850 transition-colors"
            aria-label="Close Video Player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Simulated Video Player Box */}
          <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden flex flex-col items-center justify-center text-white border border-slate-800 shadow-inner">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 filter blur-xs"
            />
            <div className="relative z-10 text-center p-6 bg-black/60 rounded-2xl backdrop-blur-md max-w-md mx-4">
              <div className="w-16 h-16 rounded-full bg-[#d4a72c] text-[#06101e] flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Video className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-base mb-1">{video.title}</h4>
              <p className="text-xs text-slate-300 mb-3">{video.description}</p>
              <span className="badge badge-gold text-xs">Runtime: {video.duration}</span>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs flex items-center justify-between">
            <span>Video playback demo placeholder. Official video link is configured for: <strong>{video.title}</strong></span>
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
            >
              <span>Open on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button type="button" onClick={onClose} className="btn btn-primary btn-sm">
            Close Player
          </button>
        </div>
      </div>
    </div>
  );
}

