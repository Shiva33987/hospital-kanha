import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  ZoomIn,
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
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052cc] group-hover:text-[#041b53] transition-colors">
          <span className="flex items-center space-x-1.5">
            <span>View Specifications</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-[11px] text-slate-400 font-semibold bg-slate-50 px-2.5 py-1 rounded-lg group-hover:bg-sky-50 group-hover:text-[#0052cc] transition-colors flex items-center space-x-1">
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
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [posterModal, setPosterModal] = useState<'facilities' | 'expansion' | null>(null);

  // Duplicated 11 facilities array for a 100% seamless infinite auto-scroll loop
  const marqueeItems = useMemo(() => {
    return [...FACILITIES, ...FACILITIES].map((fac, idx) => ({
      ...fac,
      uniqueKey: `${fac.id}-stream-${idx}`,
    }));
  }, []);

  return (
    <section id="facilities" className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-slate-200/80">
      
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
          animation: facilityStream 72s linear infinite;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .facility-stream-track::-webkit-scrollbar {
          display: none;
        }
        .facility-stream-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#041b53] tracking-tight leading-[1.15]"
          >
            State-of-the-Art{' '}
            <span className="bg-gradient-to-r from-[#041b53] via-[#00246a] to-[#0052cc] bg-clip-text text-transparent">
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
        </div>

      </div>

      {/* CONTINUOUS INFINITE AUTO-SCROLLING CAROUSEL */}
      <div className="relative w-full overflow-hidden py-3">
        
        {/* Left & Right Edge Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-20 pointer-events-none" />

        {/* Auto-Scrolling Track */}
        <div className="overflow-hidden flex select-none w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="facility-stream-track py-2 px-4 gap-5 sm:gap-6">
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
            <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200/80 flex items-center justify-center text-[#0052cc] shrink-0 shadow-xs">
              <ZoomIn className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0052cc]">
                Official Hospital Documentation
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#041b53] mt-0.5">
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
              className="flex-1 md:flex-initial bg-white hover:bg-sky-50 border border-slate-200 text-slate-800 hover:text-[#041b53] font-bold text-xs px-4 py-3 rounded-xl shadow-2xs hover:shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
            >
              <span>View Facilities Poster</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0052cc]" />
            </button>
            <button
              onClick={() => setPosterModal('expansion')}
              className="flex-1 md:flex-initial bg-gradient-to-r from-[#041b53] via-[#0052cc] to-[#0284c7] hover:from-[#001744] hover:to-[#0052cc] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
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
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#041b53] via-[#0052cc] to-[#0284c7] hover:from-[#001744] hover:to-[#0052cc] text-white text-xs font-bold shadow-md transition-all cursor-pointer active:scale-95"
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
