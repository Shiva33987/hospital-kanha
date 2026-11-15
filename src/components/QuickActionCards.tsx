import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Droplets, 
  UserCheck, 
  Ambulance, 
  Bone, 
  Scissors, 
  Heart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield,
  Activity,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

interface QuickActionCardsProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenReportsModal: () => void;
}

export const QuickActionCards: React.FC<QuickActionCardsProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenReportsModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'renal' | 'surgical' | 'emergency'>('all');

  const centers = [
    {
      id: 'urology',
      specialtyId: 'urology',
      category: 'renal',
      centerTag: 'SIGNATURE INSTITUTE',
      title: 'Institute of Urology & Kidney Stones',
      subtitle: 'Laser RIRS • Holmium Enucleation • Kidney Stones',
      desc: 'Pioneering minimally invasive laser surgery for complex renal stones, enlarged prostate (Laser TURP), and reconstructive urology with day-care recovery.',
      badge: 'Flagship Center • 10,000+ Surgeries',
      badgeStyle: 'bg-blue-50 text-[#00246a] border-blue-200/90',
      icon: Zap,
      gradient: 'from-[#00388c] via-[#0052cc] to-[#0ea5e9]',
      glowColor: 'rgba(0, 56, 140, 0.25)',
      borderColor: 'hover:border-blue-500/50',
      bulletPoints: [
        '100W Holmium & Thulium Laser RIRS & PCNL',
        'Laser TURP for Enucleation of Prostate (HoLEP)',
        '3D HD Endoscopic Towers & Daycare Discharge',
      ],
      metrics: ['4 Senior Urologists', '3 Dedicated OTs', '99.4% Stone Clearance'],
      ctaText: 'Book Urology OPD',
      action: () => onOpenAppointmentModal('urology'),
      highlight: false,
    },
    {
      id: 'nephrology',
      specialtyId: 'nephrology',
      category: 'renal',
      centerTag: '24/7 CRITICAL CARE',
      title: 'Institute of Nephrology & Dialysis',
      subtitle: 'Advanced Renal Medicine • 24/7 Hemodialysis',
      desc: 'Comprehensive clinical care for chronic kidney disease (CKD), acute renal injury, diabetic nephropathy, and state-of-the-art round-the-clock dialysis.',
      badge: '20+ Beds • Ultra-Pure RO',
      badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200/90',
      icon: Droplets,
      gradient: 'from-[#00707a] via-[#008f9c] to-[#00b4d8]',
      glowColor: 'rgba(0, 112, 122, 0.22)',
      borderColor: 'hover:border-teal-500/50',
      bulletPoints: [
        '20+ Automated Dialysis Stations with Fresenius Tech',
        'Dual-Pass Reverse Osmosis (RO) Water Purification',
        'Continuous Renal Replacement Therapy (CRRT) & Biopsies',
      ],
      metrics: ['24/7 Nephrologist On-Call', 'Zero-Infection Protocol', 'AV Fistula Care'],
      ctaText: 'Book Dialysis / Nephrology',
      action: () => onOpenAppointmentModal('nephrology'),
      highlight: false,
    },
    {
      id: 'andrology',
      specialtyId: 'andrology',
      category: 'renal',
      centerTag: 'MEN\'S HEALTH INSTITUTE',
      title: 'Center for Andrology & Men\'s Health',
      subtitle: 'Male Infertility • Microsurgery • Sexual Wellness',
      desc: 'Exclusive, confidential clinical consultations and advanced microsurgical interventions for male reproductive disorders, varicocele, and endocrine health.',
      badge: '100% Private Suite',
      badgeStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200/90',
      icon: UserCheck,
      gradient: 'from-[#3730a3] via-[#4f46e5] to-[#818cf8]',
      glowColor: 'rgba(79, 70, 229, 0.22)',
      borderColor: 'hover:border-indigo-500/50',
      bulletPoints: [
        'Microsurgical Sub-Inguinal Varicocelectomy & TESE',
        'Comprehensive Male Infertility & Hormonal Workup',
        'Penile Prosthetics & Erectile Dysfunction Treatments',
      ],
      metrics: ['Dedicated Private OPD', 'Advanced Microsurgery Lab', 'Full Confidentiality'],
      ctaText: 'Consult Andrologist',
      action: () => onOpenAppointmentModal('andrology'),
      highlight: false,
    },
    {
      id: 'emergency',
      specialtyId: 'emergency',
      category: 'emergency',
      centerTag: '24/7 RAPID DISPATCH',
      title: 'Emergency, Trauma & Critical Care',
      subtitle: 'Level-1 Trauma Bays • 10-Min ALS Response',
      desc: 'Round-the-clock emergency medical faculty, fully equipped multi-bed resuscitation bays, modular ICU facilities, and rapid ambulance dispatch.',
      badge: '24x7 Live Operations',
      badgeStyle: 'bg-red-50 text-red-700 border-red-200/90',
      icon: Ambulance,
      gradient: 'from-[#dc2626] via-[#e11d48] to-[#f43f5e]',
      glowColor: 'rgba(220, 38, 38, 0.28)',
      borderColor: 'hover:border-red-500/60',
      bulletPoints: [
        'Immediate Emergency Physician Triage & Stabilization',
        'Advanced Cardiac & Poly-Trauma Resuscitation Bays',
        '10-Minute Rapid Response Advanced Life Support Fleet',
      ],
      metrics: ['24/7 Emergency Faculty', 'Dedicated Crash Carts', 'Rapid ICU Admission'],
      ctaText: 'Emergency: 9091445566',
      action: onOpenEmergencyModal,
      highlight: true,
    },
    {
      id: 'orthopedics',
      specialtyId: 'orthopedics',
      category: 'surgical',
      centerTag: 'JOINT & SPINE INSTITUTE',
      title: 'Orthopedics, Joint Replacement & Spine',
      subtitle: 'Keyhole Arthroscopy • Robotic Arthroplasty',
      desc: 'World-class joint restoration, computer-navigated knee & hip replacements, complex trauma reconstruction, and endoscopic spine surgery with rapid rehab.',
      badge: 'Fast-Track Mobilization',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200/90',
      icon: Bone,
      gradient: 'from-[#b45309] via-[#d97706] to-[#f59e0b]',
      glowColor: 'rgba(217, 119, 6, 0.22)',
      borderColor: 'hover:border-amber-500/50',
      bulletPoints: [
        'Computer-Navigated Minimally Invasive Knee & Hip Arthroplasty',
        'Keyhole Arthroscopic Ligament Reconstruction (ACL/PCL/Meniscus)',
        'Endoscopic Disc Surgery & Spinal Decompression',
      ],
      metrics: ['Ultra-Clean Laminar OTs', 'Same-Day Ambulation', 'Dedicated Physio Wing'],
      ctaText: 'Book Orthopedic OPD',
      action: () => onOpenAppointmentModal('orthopedics'),
      highlight: false,
    },
    {
      id: 'laparoscopy',
      specialtyId: 'general-surgery',
      category: 'surgical',
      centerTag: 'MINIMALLY INVASIVE',
      title: 'Advanced Laparoscopy & GI Surgery',
      subtitle: '3D Keyhole Surgery • Laser Proctology',
      desc: 'High-definition 3D laparoscopic procedures for gallbladder, hernia, appendicitis, and painless laser surgery for proctological conditions with minimal scarring.',
      badge: 'Daycare Discharge',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200/90',
      icon: Scissors,
      gradient: 'from-[#047857] via-[#059669] to-[#10b981]',
      glowColor: 'rgba(5, 150, 105, 0.22)',
      borderColor: 'hover:border-emerald-500/50',
      bulletPoints: [
        '3D Laparoscopic Cholecystectomy & Complex Hernia Repair',
        'Advanced Laser Treatment for Piles, Fissure & Fistula',
        'Gastrointestinal Oncology & Acute Abdomen Interventions',
      ],
      metrics: ['Minimal Post-Op Pain', 'Pinhole Incisions', 'Faster Return to Work'],
      ctaText: 'Consult Laparoscopic Surgeon',
      action: () => onOpenAppointmentModal('general-surgery'),
      highlight: false,
    },
  ];

  const filteredCenters = activeFilter === 'all' 
    ? centers 
    : centers.filter(c => c.category === activeFilter);

  return (
    <section 
      id="centres-of-excellence" 
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-12 lg:mt-16 mb-12 sm:mb-20 scroll-mt-24"
    >
      
      {/* ============================================================== */}
      {/* 1. SECTION HEADER (PREMIUM HOSPITAL BRANDING)                  */}
      {/* ============================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center mb-8 sm:mb-12"
      >
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-100/90 px-3.5 sm:px-4 py-1.5 rounded-full shadow-2xs text-[11px] sm:text-xs font-bold text-[#00246a] uppercase tracking-wider mb-3.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>KANHA HOSPITALS</span>
          <span className="text-slate-300">•</span>
          <span className="text-[#0055d4] font-extrabold">CLINICAL EXCELLENCE</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Centres of{' '}
          <span className="bg-gradient-to-r from-[#00388c] via-[#0055d4] to-[#0ea5e9] bg-clip-text text-transparent">
            Excellence
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Internationally recognized super-specialty institutes delivering advanced laser surgical precision, 24/7 dedicated renal care, and compassionate patient outcomes.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
          {[
            { id: 'all', label: 'All Centres' },
            { id: 'renal', label: 'Renal Sciences (Urology & Nephrology)' },
            { id: 'emergency', label: 'Emergency & Critical Care' },
            { id: 'surgical', label: 'Surgical Disciplines' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#00246a] text-white shadow-md shadow-blue-900/20 scale-102 font-bold'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* 2. CENTERS OF EXCELLENCE CARDS GRID                            */}
      {/* ============================================================== */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        <AnimatePresence>
          {filteredCenters.map((center, index) => {
            const Icon = center.icon;
            
            return (
              <motion.div
                layout
                key={center.id}
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ 
                  y: -6, 
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                className={`group relative rounded-3xl p-6 sm:p-7 cursor-pointer overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border flex flex-col justify-between ${
                  center.highlight 
                    ? 'border-red-200/90 shadow-[0_8px_30px_-8px_rgba(239,68,68,0.20)] hover:shadow-[0_24px_50px_-12px_rgba(239,68,68,0.30)] ring-1 ring-red-400/40 hover:ring-2 hover:ring-red-500/60' 
                    : `border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,36,106,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(0,36,106,0.18)] ${center.borderColor}`
                }`}
                onClick={center.action}
              >
                {/* Top Glowing Gradient Accent Bar */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${center.gradient} transition-all duration-300 group-hover:h-2`} 
                />
                
                {/* Subtle Ambient Hover Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: center.glowColor }}
                />

                {/* Card Top: Header & Badge */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    {/* Glowing Jewel Icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${center.gradient} text-white shadow-md shadow-slate-900/10 group-hover:scale-108 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    
                    {/* Specialty Accreditation Badge */}
                    <span className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs ${center.badgeStyle}`}>
                      <Sparkles className="w-3 h-3 mr-1 text-current shrink-0" />
                      <span className="truncate">{center.badge}</span>
                    </span>
                  </div>

                  {/* Category Tag */}
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0055d4] block mb-1">
                    {center.centerTag}
                  </span>
                  
                  {/* Center Title */}
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-slate-900 group-hover:text-[#00388c] transition-colors tracking-tight leading-snug">
                    {center.title}
                  </h3>
                  
                  {/* Focus Subtitle */}
                  <p className="text-xs font-semibold text-slate-500 mt-1 tracking-tight">
                    {center.subtitle}
                  </p>

                  {/* Narrative Description */}
                  <p className="text-[13px] text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {center.desc}
                  </p>

                  {/* 3 Key Clinical Proof Points with Styled Bullet Checks */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
                    {center.bulletPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Clinical Proof Metrics & Action Row */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex flex-col space-y-3">
                  {/* Metrics Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[10.5px] font-semibold text-slate-600">
                    {center.metrics.map((metric, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Call to Action Button */}
                  <div className="flex items-center justify-between text-sm font-bold text-slate-900 group-hover:text-[#00388c] transition-colors pt-1">
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {center.ctaText}
                    </span>
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      center.highlight 
                        ? 'bg-red-500 text-white group-hover:bg-red-600 shadow-sm shadow-red-500/30 group-hover:scale-110' 
                        : 'bg-slate-100 text-slate-700 group-hover:bg-[#00246a] group-hover:text-white shadow-2xs group-hover:scale-110'
                    }`}>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ============================================================== */}
      {/* 3. BOTTOM TRUST & QUALITY BENCHMARK STRIP                      */}
      {/* ============================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600 bg-white/80 backdrop-blur-md border border-slate-200/70 py-3.5 px-6 rounded-2xl max-w-4xl mx-auto shadow-2xs"
      >
        <div className="flex items-center space-x-1.5 text-slate-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>NABH Accredited Tertiary Standards</span>
        </div>
        <div className="hidden sm:block text-slate-300">•</div>
        <div className="flex items-center space-x-1.5 text-slate-800">
          <CheckCircle2 className="w-4 h-4 text-[#00246a]" />
          <span>50+ Cashless Insurance Empaneled</span>
        </div>
        <div className="hidden sm:block text-slate-300">•</div>
        <div className="flex items-center space-x-1.5 text-slate-800">
          <CheckCircle2 className="w-4 h-4 text-[#00707a]" />
          <span>Zero-Delay Fast-Track Priority OPD</span>
        </div>
      </motion.div>

    </section>
  );
};
