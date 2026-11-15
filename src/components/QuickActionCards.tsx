import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Droplets, 
  UserCheck, 
  Ambulance, 
  Bone, 
  Scissors, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'renal' | 'emergency' | 'surgical'>('all');

  const centers = [
    {
      id: 'urology',
      specialtyId: 'urology',
      category: 'renal',
      title: 'Urology & Kidney Stones',
      subtitle: 'Holmium Laser • RIRS • Prostate',
      desc: 'Minimally invasive 100W laser stone clearance (RIRS / PCNL) and daycare prostate enucleation.',
      image: '/images/coe-urology.jpg',
      badge: 'Flagship Center',
      badgeStyle: 'bg-blue-50 text-[#00246a] border-blue-200/80 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30',
      icon: Zap,
      gradient: 'from-[#00388c] to-[#0ea5e9]',
      glowColor: 'rgba(0, 56, 140, 0.20)',
      tags: ['10,000+ Lasers', 'Daycare Discharge'],
      ctaText: 'Consult Urologist',
      action: () => onOpenAppointmentModal('urology'),
      highlight: false,
    },
    {
      id: 'nephrology',
      specialtyId: 'nephrology',
      category: 'renal',
      title: 'Nephrology & 24/7 Dialysis',
      subtitle: 'Comprehensive Renal Care • CRRT',
      desc: '20+ automated dialysis stations with dual-pass RO ultra-pure filtration & continuous nephrology cover.',
      image: '/images/coe-nephrology.jpg',
      badge: '20+ Beds • RO Tech',
      badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200/80 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30',
      icon: Droplets,
      gradient: 'from-[#00707a] to-[#00b4d8]',
      glowColor: 'rgba(0, 112, 122, 0.20)',
      tags: ['Ultra-Pure RO', '24/7 Nephrologist'],
      ctaText: 'Book Dialysis',
      action: () => onOpenAppointmentModal('nephrology'),
      highlight: false,
    },
    {
      id: 'andrology',
      specialtyId: 'andrology',
      category: 'renal',
      title: 'Andrology & Men\'s Health',
      subtitle: 'Male Infertility • Microsurgery',
      desc: 'Confidential clinical care and advanced microsurgical interventions for male reproductive wellness.',
      image: '/images/coe-andrology.jpg',
      badge: '100% Private Suite',
      badgeStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200/80 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30',
      icon: UserCheck,
      gradient: 'from-[#3730a3] to-[#818cf8]',
      glowColor: 'rgba(79, 70, 229, 0.20)',
      tags: ['Confidential OPD', 'Microsurgery Lab'],
      ctaText: 'Consult Andrologist',
      action: () => onOpenAppointmentModal('andrology'),
      highlight: false,
    },
    {
      id: 'emergency',
      specialtyId: 'emergency',
      category: 'emergency',
      title: 'Emergency & Trauma Care',
      subtitle: 'Level-1 Trauma • 24/7 Resuscitation',
      desc: 'Immediate emergency physician triage, multi-bed critical resuscitation bays & 10-minute ALS ambulance dispatch.',
      image: '/images/coe-emergency.jpg',
      badge: '24x7 Live Active',
      badgeStyle: 'bg-red-50 text-red-700 border-red-200/90 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-400',
      icon: Ambulance,
      gradient: 'from-[#dc2626] to-[#f43f5e]',
      glowColor: 'rgba(220, 38, 38, 0.25)',
      tags: ['10-Min ALS Response', 'Rapid ICU Bay'],
      ctaText: 'Call: 9091445566',
      action: onOpenEmergencyModal,
      highlight: true,
    },
    {
      id: 'orthopedics',
      specialtyId: 'orthopedics',
      category: 'surgical',
      title: 'Orthopedics & Joint Care',
      subtitle: 'Robotic Arthroplasty • Spine Surgery',
      desc: 'Computer-assisted total knee & hip replacement, keyhole sports arthroscopy & endoscopic spine decompression.',
      image: '/images/coe-orthopedics.jpg',
      badge: 'Fast Recovery',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200/80 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30',
      icon: Bone,
      gradient: 'from-[#b45309] to-[#f59e0b]',
      glowColor: 'rgba(217, 119, 6, 0.20)',
      tags: ['Laminar Flow OTs', 'Same-Day Ambulation'],
      ctaText: 'Book Ortho OPD',
      action: () => onOpenAppointmentModal('orthopedics'),
      highlight: false,
    },
    {
      id: 'laparoscopy',
      specialtyId: 'general-surgery',
      category: 'surgical',
      title: 'Laparoscopy & GI Surgery',
      subtitle: '3D Keyhole • Laser Proctology',
      desc: 'Advanced 3D laparoscopic gallbladder, hernia repair & painless daycare laser surgery for piles and fistula.',
      image: '/images/coe-laparoscopy.jpg',
      badge: 'Daycare Discharge',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200/80 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30',
      icon: Scissors,
      gradient: 'from-[#047857] to-[#10b981]',
      glowColor: 'rgba(5, 150, 105, 0.20)',
      tags: ['Minimal Post-Op Pain', 'Pinhole Incisions'],
      ctaText: 'Consult Surgeon',
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
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8 lg:mt-10 mb-8 sm:mb-14 scroll-mt-24"
    >
      
      {/* ============================================================== */}
      {/* 1. COMPACT, ATTRACTIVE HEADER                                  */}
      {/* ============================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center mb-6 sm:mb-8"
      >
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-100/90 px-3.5 py-1 rounded-full shadow-2xs text-[10.5px] sm:text-xs font-bold text-[#00246a] uppercase tracking-wider mb-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>KANHA HOSPITALS</span>
          <span className="text-slate-300">•</span>
          <span className="text-[#0055d4] font-extrabold">CLINICAL EXCELLENCE</span>
        </div>

        {/* Headline */}
        <h2 className="text-xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Centres of{' '}
          <span className="bg-gradient-to-r from-[#00388c] via-[#0055d4] to-[#0ea5e9] bg-clip-text text-transparent">
            Excellence
          </span>
        </h2>
        
        {/* Concise Subtitle */}
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Benchmark super-specialty institutes delivering advanced laser surgical precision, 24/7 dedicated renal care, and trusted patient outcomes.
        </p>

        {/* Compact Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5">
          {[
            { id: 'all', label: 'All Centres' },
            { id: 'renal', label: 'Renal Sciences (Urology & Nephrology)' },
            { id: 'emergency', label: 'Emergency & Critical Care' },
            { id: 'surgical', label: 'Surgical Disciplines' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#00246a] text-white shadow-sm shadow-blue-900/20 font-bold scale-102'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* 2. COMPACT, ULTRA-ATTRACTIVE 6-CARD GRID                       */}
      {/* ============================================================== */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5"
      >
        <AnimatePresence>
          {filteredCenters.map((center, index) => {
            const Icon = center.icon;
            
            return (
              <motion.div
                layout
                key={center.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ 
                  y: -4, 
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                className={`group relative rounded-2xl p-4 sm:p-5 cursor-pointer overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border flex flex-col justify-between ${
                  center.highlight 
                    ? 'border-red-200/90 shadow-[0_4px_20px_-4px_rgba(239,68,68,0.18)] hover:shadow-[0_20px_40px_-8px_rgba(239,68,68,0.35)] ring-1 ring-red-400/40 hover:ring-red-400' 
                    : 'border-slate-200/85 shadow-[0_2px_14px_-3px_rgba(0,36,106,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(0,36,106,0.25)] hover:border-blue-400/50'
                }`}
                onClick={center.action}
              >
                {/* ========================================================= */}
                {/* SLIDE-UP HIGH-RESOLUTION IMAGE ON HOVER                   */}
                {/* ========================================================= */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
                  <img
                    src={center.image}
                    alt={center.title}
                    className="w-full h-full object-cover object-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark cinematic vignette overlay ensuring 100% text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-900/65 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>

                {/* Top Subtle Gradient Line */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${center.gradient} transition-all duration-300 group-hover:h-1.5 z-10`} 
                />

                {/* Subtle Ambient Hover Glow */}
                <div 
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
                  style={{ backgroundColor: center.glowColor }}
                />

                {/* Card Top: Header Icon & Status Badge */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    {/* Glowing Jewel Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${center.gradient} text-white shadow-xs group-hover:scale-105 group-hover:shadow-md transition-all shrink-0 ring-1 ring-white/20`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    
                    {/* Badge */}
                    <span className={`inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs group-hover:backdrop-blur-md transition-all duration-300 ${center.badgeStyle}`}>
                      <Sparkles className="w-2.5 h-2.5 mr-1 text-current shrink-0" />
                      <span className="truncate">{center.badge}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-[16px] sm:text-[17px] font-extrabold text-slate-900 group-hover:text-white transition-colors duration-300 tracking-tight leading-snug">
                    {center.title}
                  </h3>
                  
                  <p className={`text-[11px] font-semibold mt-0.5 tracking-tight uppercase transition-colors duration-300 ${
                    center.highlight 
                      ? 'text-red-600 group-hover:text-rose-300' 
                      : 'text-[#0055d4] group-hover:text-cyan-300'
                  }`}>
                    {center.subtitle}
                  </p>

                  {/* Short 2-Line Description */}
                  <p className="text-xs text-slate-600 group-hover:text-slate-200 transition-colors duration-300 mt-1.5 leading-relaxed font-normal line-clamp-2">
                    {center.desc}
                  </p>

                  {/* Compact Feature Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3">
                    {center.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md group-hover:bg-white/15 group-hover:text-white group-hover:border-white/25 group-hover:backdrop-blur-md transition-all duration-300"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 group-hover:text-emerald-400 shrink-0 transition-colors duration-300" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Action Link */}
                <div className="relative z-10 mt-3.5 pt-2.5 border-t border-slate-100 group-hover:border-white/20 transition-colors duration-300 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transform duration-150">
                    {center.ctaText}
                  </span>
                  
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                    center.highlight 
                      ? 'bg-red-500 text-white group-hover:bg-red-500 group-hover:shadow-[0_0_14px_rgba(239,68,68,0.8)] shadow-2xs group-hover:scale-110' 
                      : 'bg-slate-100 text-slate-700 group-hover:bg-white group-hover:text-[#00246a] shadow-2xs group-hover:scale-110 group-hover:shadow-md'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ============================================================== */}
      {/* 3. COMPACT TRUST BAR                                           */}
      {/* ============================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] font-semibold text-slate-600 bg-white/80 backdrop-blur-md border border-slate-200/70 py-2.5 px-5 rounded-xl max-w-3xl mx-auto shadow-2xs"
      >
        <div className="flex items-center space-x-1.5 text-slate-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>NABH Accredited Standards</span>
        </div>
        <div className="hidden sm:block text-slate-300">•</div>
        <div className="flex items-center space-x-1.5 text-slate-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#00246a]" />
          <span>50+ Cashless TPA Empaneled</span>
        </div>
        <div className="hidden sm:block text-slate-300">•</div>
        <div className="flex items-center space-x-1.5 text-slate-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#00707a]" />
          <span>Zero-Delay Fast-Track Priority OPD</span>
        </div>
      </motion.div>

    </section>
  );
};
