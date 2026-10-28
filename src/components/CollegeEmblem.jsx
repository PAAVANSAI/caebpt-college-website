import React from 'react';

export default function CollegeEmblem({ className = "w-12 h-12", size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="College of Agricultural Engineering Bapatla Official Crest"
    >
      <defs>
        <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB235" />
          <stop offset="50%" stopColor="#C59B27" />
          <stop offset="100%" stopColor="#9E791B" />
        </linearGradient>
        <linearGradient id="crestNavy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B192C" />
          <stop offset="100%" stopColor="#1E3E62" />
        </linearGradient>
        <filter id="crestShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Outer Golden Border with Bevel */}
      <circle cx="60" cy="60" r="56" fill="url(#crestGold)" filter="url(#crestShadow)" />
      <circle cx="60" cy="60" r="52" fill="url(#crestNavy)" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Decorative Outer Beaded Ring */}
      <circle cx="60" cy="60" r="48" stroke="url(#crestGold)" strokeWidth="1.2" strokeDasharray="2 3" />

      {/* Inner Shield / Crest Base */}
      <path
        d="M60 22 C78 22 88 26 88 42 C88 64 60 88 60 88 C60 88 32 64 32 42 C32 26 42 22 60 22 Z"
        fill="#071324"
        stroke="url(#crestGold)"
        strokeWidth="2"
      />

      {/* Cogwheel / Engineering Gear in center-top */}
      <circle cx="60" cy="46" r="14" fill="none" stroke="url(#crestGold)" strokeWidth="3" />
      <path
        d="M60 30 V34 M60 58 V62 M44 46 H48 M72 46 H76 M49 35 L52 38 M68 54 L71 57 M49 57 L52 54 M68 38 L71 35"
        stroke="url(#crestGold)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Wheat / Agro Stalks Rising on Sides */}
      <path
        d="M48 64 C44 56 42 46 44 38 M44 40 C42 41 40 43 40 46 M43 48 C41 49 39 52 40 55 M45 56 C43 58 42 61 44 64"
        stroke="url(#crestGold)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M72 64 C76 56 78 46 76 38 M76 40 C78 41 80 43 80 46 M77 48 C79 49 81 52 80 55 M75 56 C77 58 78 61 76 64"
        stroke="url(#crestGold)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Open Book of Knowledge in bottom of shield */}
      <path
        d="M44 66 C52 64 60 67 60 67 C60 67 68 64 76 66 V76 C68 74 60 77 60 77 C60 77 52 74 44 76 Z"
        fill="#FFFFFF"
        stroke="url(#crestGold)"
        strokeWidth="1.5"
      />
      <line x1="60" y1="67" x2="60" y2="77" stroke="#1E3E62" strokeWidth="1.5" />
      <line x1="48" y1="69" x2="56" y2="70" stroke="#8892B0" strokeWidth="1" />
      <line x1="48" y1="72" x2="56" y2="73" stroke="#8892B0" strokeWidth="1" />
      <line x1="64" y1="70" x2="72" y2="69" stroke="#8892B0" strokeWidth="1" />
      <line x1="64" y1="73" x2="72" y2="72" stroke="#8892B0" strokeWidth="1" />

      {/* Lower Ribbon Banner */}
      <path
        d="M24 94 L34 88 H86 L96 94 L90 99 L86 96 H34 L30 99 Z"
        fill="url(#crestGold)"
        stroke="#9E791B"
        strokeWidth="1"
      />
      <text
        x="60"
        y="94.5"
        textAnchor="middle"
        fontSize="5.8"
        fontWeight="800"
        fill="#0B192C"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        letterSpacing="0.6"
      >
        CAE • ESTD 1983
      </text>

      {/* Subtle Star */}
      <polygon points="60,14 62,18 66,19 63,22 64,26 60,24 56,26 57,22 54,19 58,18" fill="url(#crestGold)" />
    </svg>
  );
}

