import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  ZoomIn,
  ShieldCheck,
  Zap,
  Activity,
  Award
} from 'lucide-react';
import { FACILITIES, Facility } from '../data/hospitalData';

interface FacilitiesShowcaseProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
  onOpenEmergencyModal: () => void;
}

export const FacilitiesShowcase: React.FC<FacilitiesShowcaseProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'critical' | 'surgical' | 'diagnostic' | 'patient_care'>('all');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [posterModal, setPosterModal] = useState<'facilities' | 'expansion' | null>(null);

  const filteredFacilities = activeFilter === 'all'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === activeFilter);

  return (
    <section id="facilities" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative background glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-cyan-100 text-hospital-blue px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3 border border-sky-200/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-hospital-blue" />
            <span>World-Class Medical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-hospital-navy tracking-tight">
            State-of-the-Art Medical Facilities
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From 3 modular laminar flow operation theaters and 24/7 advanced dialysis to high-resolution CT imaging, Kanha Hospitals brings premier clinical infrastructure to Kompally, Hyderabad.
          </p>

          {/* Quick Technical Specs Highlights Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span className="flex items-center space-x-1.5 text-hospital-blue">
              <Zap className="w-3.5 h-3.5 text-hospital-sky" />
              <span>Holmium Laser Urology</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center space-x-1.5 text-teal-700">
              <Award className="w-3.5 h-3.5 text-teal-500" />
              <span>Class 10,000 HEPA Clean Air</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center space-x-1.5 text-indigo-700">
              <Activity className="w-3.5 h-3.5 text-indigo-500" />
              <span>Double-Stage RO Pure Water</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center space-x-1.5 text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero-Infection Protocol</span>
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 11 Facilities & Services' },
              { id: 'surgical', label: 'Surgical Suites & 3 Modular OTs' },
              { id: 'critical', label: 'Critical Care, ICU & Dialysis' },
              { id: 'diagnostic', label: 'CT Scan & Precision Lab' },
              { id: 'patient_care', label: 'Pharmacy, Rooms & TPA Desk' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-hospital-navy text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-hospital-navy border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 11 FACILITIES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-hover border border-slate-100 hover:border-hospital-sky/60 transition-all duration-300 flex flex-col group cursor-pointer shine-hover"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hospital-navyDeep/95 via-hospital-navyDeep/40 to-transparent"></div>
                
                {/* Badge top-left */}
                <div className="absolute top-3 left-3">
                  <span className="bg-hospital-navy/90 backdrop-blur-md text-hospital-sky border border-white/20 text-[11px] font-black px-3 py-1 rounded-full shadow-sm">
                    {facility.badge}
                  </span>
                </div>

                {/* Title inside bottom image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-sky-200 truncate mt-0.5 font-medium">
                    {facility.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {facility.features.slice(0, 2).map((feat: string, i: number) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="truncate font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-hospital-blue group-hover:text-hospital-navy">
                  <span className="flex items-center space-x-1">
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OFFICIAL POSTER BROCHURE BANNER */}
        <div className="mt-14 bg-gradient-to-r from-hospital-navy via-hospital-navyLight to-hospital-blue rounded-3xl p-6 sm:p-9 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-hospital-sky/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center space-x-5 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-hospital-sky shrink-0 shadow-inner">
              <ZoomIn className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-sky">Official Hospital Documentation</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Explore Kanha Hospitals Official Brochures & Posters
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                View the official launch & services posters featuring complete facility certifications, specialties, and contact details.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0 relative z-10">
            <button
              onClick={() => setPosterModal('facilities')}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs px-4 py-3 rounded-xl transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>View Facilities Poster</span>
              <ExternalLink className="w-3.5 h-3.5 text-hospital-sky" />
            </button>
            <button
              onClick={() => setPosterModal('expansion')}
              className="bg-hospital-sky hover:bg-sky-400 text-hospital-navy font-black text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>View Expansion Poster</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* DETAIL MODAL */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
            <div className="relative h-64 bg-slate-900">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="bg-hospital-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedFacility.badge}
                </span>
                <h3 className="text-2xl font-black text-white mt-1.5">{selectedFacility.title}</h3>
                <p className="text-xs text-sky-200 font-medium">{selectedFacility.subtitle}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-extrabold text-hospital-navy uppercase tracking-wider mb-2">Facility Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{selectedFacility.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-hospital-navy uppercase tracking-wider mb-3">Key Technical Specifications & Features</h4>
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
                  className="px-6 py-2.5 rounded-xl bg-hospital-navy hover:bg-hospital-blue text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
                >
                  {selectedFacility.id === 'emergency-care' ? 'Call 24/7 Emergency Helpline' : 'Inquire / Book Facility Service'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POSTER VIEWER MODAL */}
      {posterModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden p-2 flex flex-col items-center">
            <button
              onClick={() => setPosterModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-red-600 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
            >
              ✕
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
          </div>
        </div>
      )}
    </section>
  );
};
