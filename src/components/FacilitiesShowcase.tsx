import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  ZoomIn,
  ShieldCheck, 
  Zap, 
  Activity, 
  Award,
  Play,
  Pause,
  LayoutGrid,
  Layers,
  ArrowRight,
  X
} from 'lucide-react';
import { FACILITIES, Facility } from '../data/hospitalData';

interface FacilitiesShowcaseProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
  onOpenEmergencyModal: () => void;
}

const getCategoryTheme = (category: string) => {
  switch (category) {
    case 'surgical':
      return { dot: 'bg-sky-500', text: 'text-sky-600', pill: 'bg-sky-50 text-sky-700 border-sky-200/80' };
    case 'critical':
      return { dot: 'bg-rose-500', text: 'text-rose-600', pill: 'bg-rose-50 text-rose-700 border-rose-200/80' };
    case 'diagnostic':
      return { dot: 'bg-indigo-500', text: 'text-indigo-600', pill: 'bg-indigo-50 text-indigo-700 border-indigo-200/80' };
    case 'patient_care':
      return { dot: 'bg-emerald-500', text: 'text-emerald-600', pill: 'bg-emerald-50 text-emerald-700 border-emerald-200/80' };
    default:
      return { dot: 'bg-blue-500', text: 'text-blue-600', pill: 'bg-blue-50 text-blue-700 border-blue-200/80' };
  }
};

interface FacilityCardProps {
  facility: Facility;
  onClick: () => void;
  className?: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, onClick, className = '' }) => {
  const theme = getCategoryTheme(facility.category);

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(8,31,61,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(0,119,230,0.20)] border border-slate-200/80 hover:border-sky-300 transition-all duration-300 flex flex-col group cursor-pointer relative select-none ${className}`}
    >
      {/* Image Container with Smooth Scale & Gradient Shield */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
        <img
          src={facility.image}
          alt={facility.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"></div>
        
        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="bg-white/95 backdrop-blur-md text-slate-900 border border-white/80 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs flex items-center space-x-1.5">
            <span className={`w-2 h-2 rounded-full ${theme.dot}`}></span>
            <span>{facility.badge}</span>
          </span>

          <span className="bg-black/40 backdrop-blur-md text-white/90 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
            Level {facility.category === 'surgical' ? '2' : facility.category === 'critical' ? '1' : 'G'}
          </span>
        </div>

        {/* Title inside bottom image with high contrast */}
        <div className="absolute bottom-3.5 left-4 right-4">
          <h3 className="text-lg sm:text-[19px] font-black text-white leading-tight drop-shadow-xs">
            {facility.title}
          </h3>
          <p className="text-xs text-sky-200 font-medium truncate mt-0.5">
            {facility.subtitle}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
            {facility.description}
          </p>

          {/* Micro Specs List */}
          <div className="mt-4 space-y-2">
            {facility.features.slice(0, 2).map((feat: string, i: number) => (
              <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="truncate font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Interactive Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0077e6] group-hover:text-[#0055b3] transition-colors">
          <span className="flex items-center space-x-1.5">
            <span>View Specifications</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-[11px] text-slate-400 font-semibold bg-slate-50 px-2.5 py-1 rounded-lg group-hover:bg-sky-50 group-hover:text-[#0077e6] transition-colors flex items-center space-x-1">
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

export const FacilitiesShowcase: React.FC<FacilitiesShowcaseProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'critical' | 'surgical' | 'diagnostic' | 'patient_care'>('all');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [posterModal, setPosterModal] = useState<'facilities' | 'expansion' | null>(null);
  
  // Auto-scroll interactive controls
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [scrollSpeed, setScrollSpeed] = useState<'normal' | 'slow'>('normal');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all' as const, label: 'All 11 Facilities & Services', count: 11 },
    { id: 'surgical' as const, label: 'Surgical Suites & 3 Modular OTs', count: 2 },
    { id: 'critical' as const, label: 'Critical Care, ICU & Dialysis', count: 4 },
    { id: 'diagnostic' as const, label: 'CT Scan & Precision Lab', count: 2 },
    { id: 'patient_care' as const, label: 'Pharmacy, Rooms & TPA Desk', count: 3 },
  ];

  const filteredFacilities = activeFilter === 'all'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === activeFilter);

  // Build duplicated items array to guarantee 100% seamless infinite auto-scroll loop
  const marqueeItems = useMemo(() => {
    if (filteredFacilities.length === 0) return [];
    const repeatCount = Math.max(2, Math.ceil(12 / filteredFacilities.length)) * 2;
    const items: (Facility & { uniqueKey: string })[] = [];
    for (let i = 0; i < repeatCount; i++) {
      filteredFacilities.forEach((fac) => {
        items.push({
          ...fac,
          uniqueKey: `${fac.id}-copy-${i}`,
        });
      });
    }
    return items;
  }, [filteredFacilities]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="facilities" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Dynamic Keyframe Style for Auto-Scrolling Marquee */}
      <style>{`
        @keyframes facilityStream {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .facility-stream-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: facilityStream ${scrollSpeed === 'slow' ? '75s' : '48s'} linear infinite;
        }
        .facility-stream-track:hover,
        .facility-stream-track.is-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 text-[#0077e6] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200/80 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0077e6]"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>World-Class Medical Infrastructure</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]"
          >
            State-of-the-Art{' '}
            <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
              Medical Facilities
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            From 3 modular laminar flow operation theaters and 24/7 advanced dialysis to high-resolution CT imaging, Kanha Hospitals brings premier clinical infrastructure to Kompally, Hyderabad.
          </motion.p>

          {/* 4 Interactive Key Infrastructure Specs Highlight Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
          >
            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0077e6] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-xs font-extrabold text-slate-900">Holmium Laser</div>
              <div className="text-[11px] text-slate-500 font-medium">Precision Urology Stone Tech</div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-300 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-xs font-extrabold text-slate-900">Class 10,000 HEPA</div>
              <div className="text-[11px] text-slate-500 font-medium">99.97% Pure Laminar Air</div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <div className="text-xs font-extrabold text-slate-900">Double-Pass RO</div>
              <div className="text-[11px] text-slate-500 font-medium">Biocompatible Dialysis Water</div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-extrabold text-slate-900">Zero-Infection Protocol</div>
              <div className="text-[11px] font-medium text-emerald-600">NABH Sterile Surgical Zone</div>
            </div>
          </motion.div>

          {/* Animated Category Filter Pills with Floating Pill Slider */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200/80 max-w-4xl mx-auto">
            {categories.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer select-none ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFacilityTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#0077e6] to-[#0284c7] rounded-xl shadow-md"
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-1.5">
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* LUXURY INTERACTIVE AUTO-SCROLL CONTROL BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 px-1">
          {/* Status Indicator & Play/Pause */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="inline-flex items-center space-x-2 bg-white/95 hover:bg-sky-50/80 border border-slate-200/90 hover:border-sky-300 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-[#0077e6] shadow-2xs transition-all cursor-pointer select-none"
              title={isAutoScrolling ? 'Click to Pause Auto-Scroll' : 'Click to Play Auto-Scroll'}
            >
              {isAutoScrolling ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <Pause className="w-3.5 h-3.5 text-slate-500" />
                  <span>Auto-Scroll Active</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <Play className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                  <span>Paused</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-slate-400 hidden md:inline font-medium">
              (Hover cards to pause &amp; inspect)
            </span>
          </div>

          {/* Right Controls: Speed, Nudge & View Mode */}
          <div className="flex items-center space-x-2">
            {/* Speed Toggle */}
            {viewMode === 'carousel' && (
              <button
                onClick={() => setScrollSpeed(scrollSpeed === 'normal' ? 'slow' : 'normal')}
                className="bg-white/90 hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold px-2.5 py-1.5 rounded-xl shadow-2xs transition-colors cursor-pointer"
                title="Toggle Scrolling Speed"
              >
                Speed: <span className="font-bold text-[#0077e6] capitalize">{scrollSpeed}</span>
              </button>
            )}

            {/* Manual Nudge Buttons */}
            {viewMode === 'carousel' && (
              <div className="flex items-center space-x-1 bg-white/90 border border-slate-200 rounded-xl p-0.5 shadow-2xs">
                <button
                  onClick={() => handleManualScroll('left')}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-[#0077e6] transition-colors cursor-pointer"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleManualScroll('right')}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-[#0077e6] transition-colors cursor-pointer"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* View Mode Toggle: Auto-Scroll vs Grid */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-white text-[#0077e6] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Auto-Reel</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#0077e6] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid ({filteredFacilities.length})</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* FACILITIES PRESENTATION: AUTO-SCROLL CAROUSEL OR FULL GRID */}
      {viewMode === 'carousel' ? (
        <div className="relative w-full overflow-hidden py-3">
          
          {/* Subtle Left & Right Edge Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-20 pointer-events-none" />

          {/* Continuous Infinite Auto-Scrolling Track */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-none flex"
          >
            <div className={`facility-stream-track py-2 px-4 gap-5 sm:gap-6 ${!isAutoScrolling ? 'is-paused' : ''}`}>
              {marqueeItems.map((facility) => (
                <div 
                  key={facility.uniqueKey} 
                  className="w-[300px] sm:w-[350px] md:w-[370px] shrink-0 transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <FacilityCard
                    facility={facility}
                    onClick={() => setSelectedFacility(facility)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* GRID VIEW (When user clicks Grid) */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filteredFacilities.map((facility) => (
                <motion.div
                  layout
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <FacilityCard
                    facility={facility}
                    onClick={() => setSelectedFacility(facility)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* OFFICIAL POSTER BROCHURE BANNER - Luminous Frosted Luxury Design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-sky-50 via-blue-50/90 to-teal-50/80 rounded-3xl p-6 sm:p-9 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-200/80 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center space-x-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200/80 flex items-center justify-center text-[#0077e6] shrink-0 shadow-xs">
              <ZoomIn className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0077e6]">
                Official Hospital Documentation
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Explore Kanha Hospitals Official Brochures &amp; Posters
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-normal leading-relaxed">
                View the official launch &amp; services posters featuring complete facility certifications, specialties, and contact details.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0 relative z-10 w-full md:w-auto">
            <button
              onClick={() => setPosterModal('facilities')}
              className="flex-1 md:flex-initial bg-white hover:bg-sky-50 border border-slate-200 text-slate-800 font-bold text-xs px-4 py-3 rounded-xl shadow-2xs hover:shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
            >
              <span>View Facilities Poster</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0077e6]" />
            </button>
            <button
              onClick={() => setPosterModal('expansion')}
              className="flex-1 md:flex-initial bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
            >
              <span>View Expansion Poster</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative"
            >
              <div className="relative h-64 bg-slate-900">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center font-bold text-base transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="bg-[#0077e6] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    {selectedFacility.badge}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1.5 leading-tight">{selectedFacility.title}</h3>
                  <p className="text-xs text-sky-200 font-medium">{selectedFacility.subtitle}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">Facility Overview</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{selectedFacility.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">Key Technical Specifications &amp; Features</h4>
                  <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {selectedFacility.features.map((feat: string, i: number) => (
                      <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 justify-end">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const fid = selectedFacility.id;
                      setSelectedFacility(null);
                      if (fid === 'emergency-care' || fid === 'ambulance-service') {
                        onOpenEmergencyModal();
                      } else {
                        onOpenAppointmentModal();
                      }
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white text-xs font-bold shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    {selectedFacility.id === 'emergency-care' ? 'Call 24/7 Emergency Helpline' : 'Inquire / Book Facility Service'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* POSTER VIEWER MODAL */}
      <AnimatePresence>
        {posterModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden p-2 flex flex-col items-center"
            >
              <button
                onClick={() => setPosterModal(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-red-600 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="overflow-y-auto max-h-[85vh] w-full flex justify-center">
                <img
                  src={
                    posterModal === 'facilities'
                      ? '/images/kanha-facilities-poster.jpg'
                      : '/images/kanha-expansion-poster.jpg'
                  }
                  alt="Kanha Hospitals Official Poster"
                  className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
