# College of Agricultural Engineering (CAE), Bapatla
## Official Academic Multi-Page Portal & Administrator Control Center (`caebpt.ac.in`)

A complete, production-grade, multi-page website and **Administrator Dashboard** built for the **College of Agricultural Engineering, Bapatla** (affiliated with Acharya N.G. Ranga Agricultural University — ANGRAU, established in 1983).

---

## 1. Quick Access & Live URL

The local development server is running in the background:
👉 **[http://localhost:3000](http://localhost:3000)**

Direct access to the new **Administrator Control Center**:
👉 **[http://localhost:3000/admin](http://localhost:3000/admin)**  
*(Passkey: `admin` or `caebpt2025` — or click the **1-Click Demo Admin Login** button).*

---

## 2. Dedicated Multi-Page Navigation Structure

Every navigation item now has its own dedicated page with page banners, breadcrumb navigation, and smooth scroll restoration:

| Route | Page | Key Content & Features |
| :--- | :--- | :--- |
| `/` | **Home Page** | High-contrast hero section, live announcement ticker, quick navigation cards, overview preview, courses, faculty, facilities, and contact preview. |
| `/about` | **About the College** | Four-decade institutional history narrative (Estd. 1983), Vision & Mission statements, Core Values, Principal's Message, and Academic Governance framework. |
| `/academics` | **Academic Programs** | Undergraduate (B.Tech), Postgraduate (M.Tech), and Doctoral (Ph.D.) degree matrices, credit breakdown, evaluation guidelines, and interactive syllabus modal. |
| `/departments` | **Departments** | 5 core engineering divisions (Farm Machinery & Power, Soil & Water Conservation, Food Process Engg, Renewable Energy, Basic Engineering) with lab inventories and research areas. |
| `/faculty` | **Faculty Directory** | Searchable roster of teaching professors and HoDs, filterable by department, with qualifications, research thrusts, and contact information. |
| `/facilities` | **Campus Facilities** | High-definition showcases of the Farm Machinery Test Track, Watershed Flumes, Food Pilot Plant, Central Library (CeRA access), Smart Classrooms, Hostels, and Sports Complex. |
| `/gallery` | **Photo Gallery** | Categorized photographic tour with an interactive **HD Lightbox** featuring full-screen zoom and keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`). |
| `/notices` | **Notices & Circulars** | Official circulars board filterable by Examinations, Admissions, Events, and Tenders, with simulated PDF circular downloads. |
| `/admissions` | **Admissions & Counseling** | Admission timeline, seat quota matrix, FAQ accordion, and interactive student enquiry form with client-side validation. |
| `/contact` | **Contact & Location** | Full campus address in Bapatla, office hours, departmental telephone directory, and interactive embedded Google Map with GPS coordinates. |
| `/admin` | **Administrator Control Center** | Complete back-office control panel to monitor traffic, broadcast alerts, manage notices, edit faculty, update course info, and track student inquiries. |

---

## 3. Administrator Dashboard Capabilities (`/admin`)

The `/admin` portal gives college management full control over the website's live data and traffic regulations without touching code:

### 1. Live Traffic & Analytics Control
- **Real-Time Active Visitors Counter**: Simulates live concurrent user sessions with automatic polling.
- **Traffic Metrics**: Displays today's pageviews, weekly traffic, edge latency (21ms), cache hit ratio (96.4%), and bandwidth consumption.
- **Emergency Broadcast Banner Toggle**: Allows administrators to type any urgent alert (e.g., counseling notices, storm warnings, holiday alerts) and immediately broadcast it across all pages of the site.
- **Maintenance Mode Switch**: Instantly toggles site-wide maintenance alerts.
- **Rate Limiting / DDoS Shield**: Simulates Cloudflare edge firewall protection.

### 2. Notices & Circulars Manager
- **Publish Circulars**: Add new notices with Title, Category (Examinations, Admissions, Academic, Events, Tenders), Summary, Body, and simulated PDF attachment metadata.
- **Toggle "NEW" Badge**: Instantly mark or unmark notices as new with pulsing red badges.
- **Delete / Archive**: Remove outdated circulars with one click.

### 3. Student Admission Inquiries (Leads Manager)
- Displays all enquiries submitted through the public Admissions form.
- Status management: Mark leads as **New**, **Contacted**, **In Review**, or **Admitted**.
- **Export to CSV**: Export the entire student enquiry list to an Excel/CSV file with one click.

### 4. Faculty & Staff Directory Manager
- Add new professors or lecturers (Name, Designation, Department, Qualifications, Research Focus, Email, Avatar URL).
- Delete faculty members or modify departmental listings.

### 5. Academic Degrees & Facilities Manager
- Update degree durations, intake seat quotas, and eligibility text dynamically.
- Modify facility descriptions and capabilities.

### 6. Persistence & One-Click Reset
- All administrative changes are persisted in `localStorage`, meaning updates remain active across page reloads.
- A **Reset All Data** button reverts everything back to the clean official demo dataset at any time.

---

## 4. Smoother Scrolling & Page Transitions

- **Automated Scroll Restoration**: The `ScrollToTop` component automatically scrolls the viewport smoothly to `(0, 0)` upon route change.
- **Smooth Page Fade-In**: Subpages utilize smooth CSS opacity transitions (`animation: fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)`).
- **Active Navigation Highlighting**: Header links dynamically track the active route with a gold indicator bar (`#B88E22`) and background pill (`#FDF5DF`).
- **Responsive Drawer**: The mobile drawer menu automatically closes when any page link is selected.

---

## 5. Build Verification & Deployment

```powershell
# Compile optimized static production bundle
npm run build
```

Compiled in **8.77s** with **zero errors**:
- Output folder: `dist/`
- Standard Cloudflare Pages redirect file created: `public/_redirects` (`/* /index.html 200`) ensures smooth direct URL routing on static hosts.
