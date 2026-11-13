import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FacilitySlide {
  id: string;
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  badge: string;
  floor: string;
  image: string;
  features: string[];
}

export const FACILITY_SLIDES: FacilitySlide[] = [
  {
    id: 'laminar-ot',
    subtitle: 'Surgical Wing • Level 2',
    titleLine1: '3 MODULAR LAMINAR',
    titleLine2: 'OPERATION THEATERS',
    description: 'Ultra-sterile Class-100 vertical laminar airflow suites engineered for complex laser urology, laparoscopic surgeries, and reconstructive procedures with German LED surgical towers and C-Arm fluoroscopy.',
    badge: 'Zero-Infection Protocol • C-Arm Precision',
    floor: 'Level 2 • Surgical Wing',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600',
    features: ['Class-100 HEPA Airflow', 'C-Arm 3D Imaging', 'Karl Storz Endoscopy Towers', 'Hermetic Touchless Doors']
  },
  {
    id: 'ct-scan',
    subtitle: 'Advanced Imaging • Ground Floor',
    titleLine1: 'HIGH-RESOLUTION',
    titleLine2: 'CT-SCAN & IMAGING',
    description: 'High-speed multi-slice spiral CT scanner delivering sub-millimeter anatomical precision, 3D kidney stone reconstruction, and rapid emergency angiograms with minimal radiation exposure.',
    badge: 'Sub-Millimeter Imaging • 24/7 Radiologist On-Site',
    floor: 'Ground Floor • Diagnostic Bay',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600',
    features: ['Low Radiation Dose', 'Ultra-fast 3D Scans', 'Renal Stone Localization', '24/7 Digital Reporting']
  },
  {
    id: 'dialysis-unit',
    subtitle: 'Nephrology Suite • Level 1',
    titleLine1: '24/7 ADVANCED',
    titleLine2: 'DIALYSIS CENTER',
    description: 'Dedicated comprehensive renal dialysis unit with advanced Fresenius hemodialysis machines, online biocompatible filtration, and hospital-grade ultra-pure RO water systems under continuous nephrologist supervision.',
    badge: '100% Biocompatible • SLEDD & Emergency Ready',
    floor: 'Level 1 • Nephro Center',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1600',
    features: ['Fresenius Technology', 'Ultra-Pure Double RO Water', 'Negative-Pressure Isolation Bed', '24/7 Emergency Dialysis']
  },
  {
    id: 'emergency-care',
    subtitle: 'Emergency Department • Ground Floor',
    titleLine1: '24/7 TRAUMA &',
    titleLine2: 'EMERGENCY CARE',
    description: 'Round-the-clock emergency medical response center featuring rapid triage resuscitation bays, immediate point-of-care cardiac diagnostics, and cardiac life-support mobile ambulances.',
    badge: 'Immediate Triage • ALS Mobile Dispatch',
    floor: 'Ground Floor • Main Portico',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600',
    features: ['Red Trauma Resuscitation', 'Point-of-Care Echocardiography', 'Emergency Blood Bank Access', 'Mobile Telemedicine Ambulance']
  },
  {
    id: 'critical-icu',
    subtitle: 'Intensive Care Unit • Level 3',
    titleLine1: 'ADVANCED CRITICAL',
    titleLine2: 'CARE & ICU SUITE',
    description: 'Multidisciplinary intensive care unit equipped with high-end mechanical ventilators, invasive arterial telemetry, dialysis-capable beds, and 1:1 dedicated critical-care nursing.',
    badge: '1:1 Nursing Care • Multi-Parametric Telemetry',
    floor: 'Level 3 • Critical Wing',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1600',
    features: ['Hamilton Ventilators', 'Central Telemetry Monitoring', 'Dedicated Intensivist on Duty', 'Strict Isolation Cubicles']
  },
  {
    id: 'inpatient-rooms',
    subtitle: 'Inpatient Suites • Levels 4 & 5',
    titleLine1: 'COMFORTABLE DELUXE',
    titleLine2: 'INPATIENT ROOMS',
    description: 'Serene patient recovery suites with motorized orthopaedic beds, smart bedside nurse calling consoles, sanitised companion rest lounges, and 50+ Cashless TPA insurance claim desks.',
    badge: 'Smart Nurse Call • 50+ Cashless TPA Desks',
    floor: 'Levels 4 & 5 • Inpatient Wing',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1600',
    features: ['Electric Motorized Beds', 'HEPA Filtered Air', 'Private Sanitized Bathrooms', 'Cashless TPA Assistance']
  }
];

interface HospitalFacilitiesSliderProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal?: () => void;
}

export const HospitalFacilitiesSlider: React.FC<HospitalFacilitiesSliderProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState<Record<string, boolean>>({});
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentSlide = FACILITY_SLIDES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FACILITY_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FACILITY_SLIDES.length) % FACILITY_SLIDES.length);
  };

  const toggleBookmark = (id: string) => {
    setIsBookmarked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Autoplay functionality with smooth cadence
  useEffect(() => {
    if (!isAutoplay) return;
    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [currentIndex, isAutoplay]);

  return (
    <section 
      className="relative w-full min-h-[660px] lg:min-h-[720px] xl:min-h-[760px] bg-slate-950 overflow-hidden flex flex-col justify-between py-10 lg:py-16 select-none"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      aria-label="World-Class Medical Facilities Showcase"
    >
      
      {/* 1. DYNAMIC BACKGROUND IMAGE WITH CROSSFADE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src={currentSlide.image} 
            alt={currentSlide.titleLine1 + ' ' + currentSlide.titleLine2}
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          />
          {/* Cinematic Gradients for Depth & Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/75 to-slate-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* 2. TOP AMBIENT ACCREDITATION TAG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              World-Class Infrastructure • Kanha Hospitals
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-semibold text-slate-300">
            <span>Panchsheel Enclave, Kompally, Hyderabad</span>
            <span className="text-white/30">•</span>
            <span className="text-amber-400 font-bold">NABH Certified Medical Standards</span>
          </div>
        </div>
      </div>

      {/* 3. MAIN SLIDER BODY: LEFT CONTENT + RIGHT CARD CAROUSEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center my-6 lg:my-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Category / Floor Tag */}
            <motion.div 
              key={`tag-${currentSlide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
              <span className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-wider uppercase">
                {currentSlide.subtitle}
              </span>
            </motion.div>

            {/* Huge Condensed Typography Heading */}
            <motion.div
              key={`title-${currentSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black uppercase text-white tracking-tight leading-[0.98] font-display">
                <span className="block">{currentSlide.titleLine1}</span>
                <span className="block text-cyan-400 mt-1">{currentSlide.titleLine2}</span>
              </h2>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p 
              key={`desc-${currentSlide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-normal"
            >
              {currentSlide.description}
            </motion.p>

            {/* Key Clinical Features Chips */}
            <motion.div
              key={`chips-${currentSlide.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {currentSlide.features.map((feature, idx) => (
                <span 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                >
                  ✓ {feature}
                </span>
              ))}
            </motion.div>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              
              {/* Bookmark Toggle Button */}
              <button
                onClick={() => toggleBookmark(currentSlide.id)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 ${
                  isBookmarked[currentSlide.id] 
                    ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300' 
                    : 'bg-amber-400/90 hover:bg-amber-400 text-slate-950 hover:shadow-amber-400/30'
                }`}
                title="Save Facility Details"
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked[currentSlide.id] ? 'fill-slate-950' : ''}`} />
              </button>

              {/* Discover Facility / Book Consultation Button */}
              <button
                onClick={() => onOpenAppointmentModal()}
                className="bg-white/10 hover:bg-white border border-white/40 hover:border-white text-white hover:text-slate-900 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full backdrop-blur-md shadow-lg transition-all flex items-center space-x-2.5 cursor-pointer group active:scale-95"
              >
                <span>BOOK FACILITY CONSULTATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

          {/* ================= RIGHT CARD CAROUSEL ================= */}
          <div className="lg:col-span-6 overflow-hidden py-4">
            <div className="flex items-center space-x-4 sm:space-x-5 overflow-x-auto no-scrollbar scroll-smooth py-2">
              {FACILITY_SLIDES.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <motion.div
                    key={slide.id}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative shrink-0 w-44 sm:w-52 h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 shadow-xl group ${
                      isActive 
                        ? 'ring-4 ring-amber-400 shadow-amber-400/20 scale-[1.02]' 
                        : 'opacity-70 hover:opacity-100 hover:ring-2 hover:ring-white/40'
                    }`}
                  >
                    {/* Card Photo */}
                    <img 
                      src={slide.image} 
                      alt={slide.titleLine1}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                      
                      {/* Active Indicator Pulse */}
                      {isActive && (
                        <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-md">
                          VIEWING
                        </div>
                      )}

                      <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                        {slide.floor}
                      </span>
                      
                      <h4 className="text-sm sm:text-base font-black text-white uppercase leading-tight group-hover:text-cyan-300 transition-colors">
                        {slide.titleLine1} {slide.titleLine2}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM CONTROLS & PROGRESS TRACK BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Navigation Arrows + Progress Track */}
          <div className="flex items-center space-x-4 sm:space-x-6 w-full sm:w-auto">
            
            {/* Prev & Next Arrow Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                title="Previous Facility"
                aria-label="Previous Facility"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                title="Next Facility"
                aria-label="Next Facility"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Horizontal Animated Progress Track Bar */}
            <div className="flex-1 sm:w-64 md:w-80 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400 transition-all duration-500 rounded-full"
                style={{ width: `${((currentIndex + 1) / FACILITY_SLIDES.length) * 100}%` }}
              ></div>
            </div>

          </div>

          {/* Large Numerical Slide Counter on the Right */}
          <div className="flex items-baseline space-x-1 self-end sm:self-auto">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-bold text-white/40 tracking-wider">
              / {String(FACILITY_SLIDES.length).padStart(2, '0')}
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};
