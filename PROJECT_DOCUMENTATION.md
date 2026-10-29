# Comprehensive Technical Architecture & Technology Stack Report
**Project:** Dr. NTR College of Agricultural Engineering, Bapatla (ANGRAU) Official Web Portal  
**Repository:** `PAAVANSAI/caebpt-college-website`  
**Generated On:** October 2026  
**Status:** Production-Ready & Deployment-Mapped

---

## 1. Executive Summary

The **Dr. NTR College of Agricultural Engineering (CAEBPT)** web portal is a modern, high-performance, mobile-first institutional platform built for Acharya N.G. Ranga Agricultural University (ANGRAU). It is engineered to fulfill two simultaneous objectives:

1. **Public Statutory & Academic Portal**: Deliver comprehensive information on academic programmes (B.Tech, M.Tech, Ph.D.), research innovations, faculty, student life, admissions, and statutory ICAR accreditation compliance documents.
2. **Dynamic Administrative Content Management System (CMS)**: Empower designated college administrators to manage news, tenders, circulars, faculty designations, enquiries, and accreditation dossiers in real time through an integrated, password-protected administrative interface.

---

## 2. Technology Stack Breakdown

The application is built on modern, standard web technologies prioritizing zero-lag client performance, responsive typography, and long-term maintainability.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          PRESENTATION LAYER                            │
│           React 19  •  Tailwind CSS v4  •  Lucide Icons                │
├────────────────────────────────────────────────────────────────────────┤
│                           ROUTING & STATE                              │
│       React Router v7 (SPA)  •  React Context API + Custom Hooks       │
├────────────────────────────────────────────────────────────────────────┤
│                           BUILD & TOOLING                              │
│         Vite 6 Bundler  •  Rollup  •  PostCSS / Tailwind Engine        │
├────────────────────────────────────────────────────────────────────────┤
│                       DATA & REPOSITORY LAYER                          │
│   Static Statutory Datasets (ICAR/ANGRAU)  •  LocalStorage Engine      │
│     *Roadmap: Google Cloud Firestore & Firebase Storage (Spark Plan)   │
├────────────────────────────────────────────────────────────────────────┤
│                        DEPLOYMENT & CDN HOSTING                        │
│          Netlify Edge Network  •  GitHub Automated CI/CD CDNs          │
└────────────────────────────────────────────────────────────────────────┘
```

### Detailed Tech Stack Specifications

| Layer / Concern | Technology Selected | Version | Purpose & Rationale |
| :--- | :--- | :--- | :--- |
| **Core UI Framework** | **React** | `^19.0.0` | Latest concurrent React engine providing zero-overhead functional components, optimized rendering cycles, and reactive state synchronization. |
| **DOM Renderer** | **React DOM** | `^19.0.0` | Direct integration with standard browser DOM APIs. |
| **Build System & Dev Server** | **Vite** | `^6.0.0` | Ultra-fast native ES modules dev server and Rollup production bundler. Completes entire production builds in seconds with tree-shaking and asset minification. |
| **Vite React Plugin** | `@vitejs/plugin-react` | `^5.0.0` | Fast Refresh (HMR) and optimized JSX/TSX compilation. |
| **Styling & Design System** | **Tailwind CSS v4** | `^4.3.3` | Next-generation CSS framework loaded via `@tailwindcss/vite`. Eliminates runtime CSS bloat and compiles utility classes directly into atomic stylesheets. |
| **Client-Side Routing** | **React Router DOM** | `^7.18.5` | Declarative, client-side SPA routing with instant page transitions, query parameter tracking (`?tab=accreditation`), and smooth scroll restoration. |
| **Iconography & Symbols** | **Lucide React** | `^1.16.0` | High-clarity, clean SVG vector icons optimized for educational, institutional, and administrative navigation. |
| **State Management** | **React Context API** | Native | Single unified `WebsiteContext` managing application-wide announcements, accreditation dossiers, user feedback, and admin preferences without third-party boilerplate. |
| **Data Persistence** | **Browser LocalStorage** | Native | Local persistence engine with custom deep sanitization (`sanitizeOfficialStructure`), schema migration, and fallback recovery. |
| **Static Document Serving** | **Public Static Storage** | Native | Direct root-level serving of official ICAR Self Study Reports (SSRs) and statutory government Gazette notifications (`public/documents/accreditation/`). |
| **Hosting & Redirect Engine** | **Netlify CDN** | Edge | 100 GB/month bandwidth, instant git-driven builds, automatic SSL, and client-side SPA route rewrites configured via `_redirects`. |

---

## 3. Architecture & Project File Hierarchy

```
College Website/
├── public/                               # Publicly accessible static web assets
│   ├── _redirects                        # Netlify single-page application route rewrite rule
│   ├── favicon.svg                       # Institutional college crest vector icon
│   ├── documents/                        # Official public document repository
│   │   └── accreditation/                # Statutory ICAR accreditation documents & SSRs
│   │       ├── Gazette_Notification_Dr_NTRCAE.pdf
│   │       ├── Self_Study_Report_College_DrNTRCAE.pdf     (169-page institutional SSR)
│   │       ├── Self_Study_Report_BTech_AgEngg.pdf         (Undergraduate 4-yr report)
│   │       ├── Self_Study_Report_MTech_AgEngg.pdf         (Postgraduate report)
│   │       ├── Self_Study_Report_PhD_FMPE.pdf             (Ph.D. Farm Machinery SSR)
│   │       ├── Self_Study_Report_PhD_PFE.pdf              (Ph.D. Processing & Food SSR)
│   │       └── Self_Study_Report_PhD_SWCE.pdf             (Ph.D. Soil & Water SSR)
│   └── images/                           # Institutional campus imagery, charts, and photos
│       ├── about/                        # Organization structure diagrams & history milestones
│       └── campus/                       # Infrastructure, buildings, fields, laboratories
├── src/                                  # Application source code
│   ├── components/                       # Modular reusable UI widgets
│   │   ├── Header.jsx                    # Multi-tier navigation, dropdown menus, mobile drawer
│   │   ├── Footer.jsx                    # Institutional links, ANGRAU affiliations, contact info
│   │   ├── Hero.jsx                      # Campus showcase slider, marquee banners, CTA triggers
│   │   ├── NoticeTicker.jsx              # Real-time statutory notices & circular ticker
│   │   ├── Stats.jsx                     # Institutional metrics (25 acres, 1,046+ graduates, etc.)
│   │   ├── QuickLinks.jsx                # One-click student/faculty statutory services
│   │   └── ...                           # Accreditation widgets, testimonials, highlights
│   ├── context/                          # Global application state management
│   │   └── WebsiteContext.jsx            # Dynamic CMS store, CRUD actions, data sanitizers
│   ├── data/                             # Statutory institutional data records & initial seed state
│   │   ├── officialStructureData.js      # Authorized ANGRAU history, mandates, and ICAR SSR links
│   │   └── collegeData.js                # Faculty directories, curricula, hostel & campus metrics
│   ├── pages/                            # Full-page route views
│   │   ├── HomePage.jsx                  # Main college landing portal
│   │   ├── AboutUsPage.jsx               # History, Mandates, Org Structure & Accreditation Tab
│   │   ├── AdministrationPage.jsx        # Governance hierarchy: VC, Deans, Associate Dean, HoDs
│   │   ├── AcademicsPage.jsx             # B.Tech, M.Tech, Ph.D. curriculum & Deans' Committee specs
│   │   ├── AdmissionsPage.jsx            # EAPCET, ICAR AIEEA quotas, eligibility & fee structure
│   │   ├── ResearchPage.jsx              # Research mandates, testing centres, sponsored schemes
│   │   ├── FacilitiesPage.jsx            # Labs, 25-acre instructional farm, library, hostels
│   │   ├── PlacementsPage.jsx            # Career cell, corporate recruiters, student internships
│   │   ├── StudentLifePage.jsx           # NSS, Sports, Cultural fests, Anti-Ragging committee
│   │   ├── ContactPage.jsx               # Interactive campus enquiry form & GIS maps
│   │   ├── GalleryPage.jsx               # Multi-category photo & video event archives
│   │   └── AdminPage.jsx                 # Secure CMS dashboard for content & document management
│   ├── App.jsx                           # Route declarations, layout wrapper, global toasts
│   ├── main.jsx                          # Root DOM mount with BrowserRouter & WebsiteProvider
│   └── index.css                         # Tailwind CSS v4 root imports & custom design utilities
├── package.json                          # Dependencies, scripts, and build metadata
├── vite.config.js                        # Vite build configuration with React & Tailwind plugins
└── PROJECT_DOCUMENTATION.md              # Technical architecture documentation
```

---

## 4. Key Subsystems & Functional Modules

### A. Statutory ICAR Accreditation Document Repository
Designed to comply with Indian Council of Agricultural Research (ICAR) and National Agricultural Education Accreditation Board (NAEAB) compliance mandates.

- **Exact Statutory Ordering**:
  1. `<GAZETTE NOTIFICATION>`: Statutory establishment and faculty notification under the ANGRAU Act.
  2. `<SELF STUDY REPORT OF COLLEGE>`: 169-page comprehensive institutional report.
  3. `<SELF STUDY REPORT OF B.TECH (AG ENGG)>`: Undergraduate program dossier.
  4. `<SELF STUDY REPORT OF M.TECH (AG ENGG)>`: Postgraduate specialization report.
  5. `<SELF STUDY OF PH.D. (AG ENGG)>`: Doctoral reports covering all three departments (FMPE, PFE, SWCE).
- **Interactive Document Capabilities**:
  - **Embedded In-Browser Viewer**: Custom modal incorporating an embedded PDF viewer with native zoom, paging, and navigation.
  - **Direct Downloading**: High-speed downloads of original official files directly from the `/documents/accreditation/` CDN path.
  - **Departmental Sub-Report Selectors**: Document 5 renders direct quick-download buttons for FMPE (`2.1 MB`), PFE (`1.5 MB`), and SWCE (`2.2 MB`).

### B. Dynamic Administration Dashboard (`/admin`)
An integrated, secure interface allowing the college administration to update live portal content without developer intervention:

- **Authentication Guard**: Protected access with administrative session state.
- **Accreditation Document Manager**: Real-time CRUD capabilities for accreditation files:
  - Add new documents with reference numbers, tags, and issuing authority.
  - Upload local replacement files or link hosted URLs.
  - Reorder documents using one-touch **Move Up / Move Down** controls.
  - Restore 5 statutory default documents with a single click.
- **Institutional News & Circulars CMS**: Manage admissions notifications, exam circulars, and recruitment calls.
- **Public Enquiries Pipeline**: Review and update student enquiry tickets submitted from the contact portal.

### C. Mobile-First Responsive Design System
Engineered for smooth usability across smartphones, tablets, laptops, and desktop displays:
- **Mobile Drawer Navigation**: Slide-out menu with collapsible accordions for multi-tier menus (Academics, Administration, About Us).
- **Adaptive Layouts**: Grids automatically shift from 1 column on mobile to 2 on tablets and 3–4 on desktops.
- **Optimized Touch Targets**: Buttons and interactive controls respect minimum 44px touch ergonomics.

---

## 5. Visual Identity & Design System

The visual design is aligned with ANGRAU's official agricultural and engineering heritage:

| Element | Color Value | Role & Usage |
| :--- | :--- | :--- |
| **Deep Imperial Navy** | `#0b1a2e` / `navy-950` | Primary header, navigation bar, hero background, and structural authority. |
| **Academic Gold** | `#d4a72c` / `#f5c84c` | Accent badges, borders, call-to-actions, and key metric counters. |
| **Agricultural Emerald** | `#059669` / `emerald-700` | ICAR accreditation badges, verification seals, and sustainability initiatives. |
| **Institutional Slate** | `#f8fafc` / `#334155` | Neutral card backdrops, reading typography, and subtle borders. |

---

## 6. Deployment & Future Backend Roadmap

### Current Production State
- **Git Repository**: Synced on GitHub (`PAAVANSAI/caebpt-college-website`).
- **Static Assets**: All images, stylesheets, scripts, and statutory accreditation PDFs (~23 MB) are checked in and served from `public/`.
- **Production Build**: Verified with `npm run build` producing optimized, minified bundles in `dist/`.

### Planned Deployment Setup (3-Year Zero-Maintenance Target)
1. **Frontend Hosting (Netlify)**:
   - Connects to the GitHub repository.
   - Automatically builds on git push (`npm run build`).
   - Serves via Netlify's global Edge CDN with 100 GB monthly free bandwidth.
   - Handles client-side routing rewrites via `public/_redirects`.
2. **Backend & Cloud Document Storage (Google Firebase)**:
   - **Cloud Firestore**: Central database for news, circulars, and administration hierarchy changes.
   - **Firebase Cloud Storage (5 GB Free)**: Dedicated cloud bucket for new PDF uploads from the admin dashboard.
   - **Permanent Free Tier**: Google Firebase Spark plan does not sleep or pause after inactivity, ensuring the portal runs uninterrupted for 3+ years at $0 cost.
