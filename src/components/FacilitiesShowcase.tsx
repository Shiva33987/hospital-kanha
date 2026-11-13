import React, { useState } from 'react';
import { 
  ScanLine, 
  Droplet, 
  Activity, 
  Sparkles, 
  Ambulance, 
  Pill, 
  Bed, 
  ShieldCheck, 
  HeartPulse, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  ZoomIn
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
    <section id="facilities" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-sky-100/80 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-hospital-blue" />
            <span>World-Class Medical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
            State-of-the-Art Medical Facilities & Services
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            From 3 modular laminar flow operation theaters and 24/7 advanced dialysis to high-resolution CT imaging, Kanha Hospitals brings cutting-edge clinical infrastructure to Kompally, Hyderabad.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 11 Facilities & Services' },
              { id: 'surgical', label: 'Surgical Suites & OTs' },
              { id: 'critical', label: 'Critical Care & Dialysis' },
              { id: 'diagnostic', label: 'CT Scan & Diagnostics' },
              { id: 'patient_care', label: 'Pharmacy, Rooms & TPA' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
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

        {/* 11 FACILITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover border border-slate-100 hover:border-hospital-sky/40 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Container with Badge */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hospital-navyDeep/90 via-hospital-navyDeep/30 to-transparent"></div>
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-hospital-navy/90 backdrop-blur-md text-white border border-white/20 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {facility.badge}
                  </span>
                </div>

                {/* Bottom title inside image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-sky-200 truncate mt-0.5">
                    {facility.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>

                  {/* Top 2 Features */}
                  <div className="mt-3.5 space-y-1.5">
                    {facility.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-hospital-blue group-hover:text-hospital-navy">
                  <span className="flex items-center space-x-1">
                    <span>View Specifications & Care</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM OFFICIAL POSTER BROCHURE BANNER */}
        <div className="mt-14 bg-gradient-to-r from-hospital-navy to-hospital-navyLight rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-hospital-sky shrink-0">
              <ZoomIn className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-hospital-sky">Official Hospital Documentation</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Explore Kanha Hospitals Official Brochures & Posters
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                View the official launch & services posters featuring complete facility certifications and contact details.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setPosterModal('facilities')}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs px-4 py-3 rounded-xl transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>View Facilities Poster</span>
              <ExternalLink className="w-3.5 h-3.5 text-hospital-sky" />
            </button>
            <button
              onClick={() => setPosterModal('expansion')}
              className="bg-hospital-sky hover:bg-sky-400 text-hospital-navy font-bold text-xs px-4 py-3 rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>View Expansion Poster</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* FACILITY DETAIL MODAL */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
            {/* Modal Image */}
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
                <h3 className="text-2xl font-bold text-white mt-1.5">{selectedFacility.title}</h3>
                <p className="text-xs text-sky-200">{selectedFacility.subtitle}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-hospital-navy uppercase tracking-wider mb-2">Facility Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{selectedFacility.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-hospital-navy uppercase tracking-wider mb-3">Key Technical Specifications & Features</h4>
                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {selectedFacility.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
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

