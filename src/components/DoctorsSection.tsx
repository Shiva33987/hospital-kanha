import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Search, 
  X,
  Award,
  Stethoscope,
  Activity,
  Star,
  Clock,
  ShieldCheck,
  Users
} from 'lucide-react';
import { DOCTORS, Doctor, SPECIALTIES, HOSPITAL_INFO } from '../data/hospitalData';

interface DoctorsSectionProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string, slot?: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchDoc, setSearchDoc] = useState<string>('');
  const [activeDoctorModal, setActiveDoctorModal] = useState<Doctor | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDept === 'all' || doc.departmentId === selectedDept;
    const matchesSearch = !searchDoc ||
      doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.qualification.toLowerCase().includes(searchDoc.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // Infinite looping list for smooth continuous carousel
  const displayDoctors = useMemo(() => {
    if (filteredDoctors.length === 0) return [];
    const repeatCount = Math.max(2, Math.ceil(12 / filteredDoctors.length)) * 2;
    const list: (Doctor & { uniqueKey: string })[] = [];
    for (let i = 0; i < repeatCount; i++) {
      for (const doc of filteredDoctors) {
        list.push({ ...doc, uniqueKey: `${doc.id}-loop-${i}` });
      }
    }
    return list;
  }, [filteredDoctors]);

  const getDepartmentBadgeName = (deptId: string, fallback: string) => {
    const sp = SPECIALTIES.find(s => s.id === deptId);
    return sp ? sp.name : fallback;
  };

  return (
    <section id="doctors" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8faff] via-white to-[#f0f9ff]/40 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Ambient Decorative Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Dynamic Keyframe Style for Auto-Scrolling Doctor Marquee */}
      <style>{`
        @keyframes doctorStream {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .doctor-stream-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: doctorStream 65s linear infinite;
        }
        .doctor-stream-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            EXECUTIVE SECTION HEADER
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0052cc] shadow-2xs mb-3">
              <Award className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>Distinguished Senior Medical Faculty</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#041b53] tracking-tight leading-tight">
              Consult Our Senior{' '}
              <span className="bg-gradient-to-r from-[#041b53] via-[#00246a] to-[#0052cc] bg-clip-text text-transparent">
                Specialists &amp; Surgeons
              </span>
            </h2>
            
            <p className="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Meet our eminent clinicians with decades of collective surgical mastery. Guaranteed zero-wait OPD scheduling with confirmed time slots.
            </p>
          </div>

          {/* Quick Doctor Search */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Input */}
            <div className="relative group w-full sm:w-72">
              <input
                type="text"
                placeholder="Search doctor or specialty..."
                value={searchDoc}
                onChange={(e) => setSearchDoc(e.target.value)}
                className="w-full bg-white border border-slate-200/90 rounded-2xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-4 focus:ring-sky-100/80 shadow-2xs transition-all"
              />
              <Search className="w-4 h-4 text-[#0052cc] absolute left-3.5 top-3 group-focus-within:text-[#041b53] transition-colors" />
              {searchDoc && (
                <button 
                  onClick={() => setSearchDoc('')}
                  className="absolute right-3 top-2.5 w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            DEPARTMENT FILTER PILLS
           ======================================================== */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setSelectedDept('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
              selectedDept === 'all'
                ? 'bg-gradient-to-r from-[#041b53] via-[#0052cc] to-[#0284c7] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:text-[#041b53] border border-slate-200/80 hover:border-sky-300 hover:bg-slate-50'
            }`}
          >
            All Specialties ({DOCTORS.length})
          </button>
          {['urology', 'nephrology', 'cardiology', 'orthopedics', 'gynaecology', 'general-surgery', 'critical-care', 'pulmonology'].map((deptId) => {
            const sp = SPECIALTIES.find(s => s.id === deptId);
            if (!sp) return null;
            const isActive = selectedDept === deptId;
            const count = DOCTORS.filter(d => d.departmentId === deptId).length;
            return (
              <button
                key={deptId}
                onClick={() => setSelectedDept(deptId)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#041b53] via-[#0052cc] to-[#0284c7] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-[#041b53] border border-slate-200/80 hover:border-sky-300 hover:bg-slate-50'
                }`}
              >
                <span>{sp.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            DOCTORS SHOWCASE: FULL-WIDTH LUXURY CAROUSEL
           ======================================================== */}
        <div className="relative overflow-hidden py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          
          {/* Subtle Side Fade Edges for Carousel */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#f8faff] to-transparent z-20 pointer-events-none" />
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#f8faff] to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollRef}
            className="overflow-x-auto sm:overflow-hidden flex select-none w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="doctor-stream-track py-3 px-1 gap-6">
              {displayDoctors.map((doc) => {
                const departmentName = getDepartmentBadgeName(doc.departmentId, doc.specialty);

                return (
                  <div
                    key={doc.uniqueKey}
                    onClick={() => setActiveDoctorModal(doc)}
                    className="w-[290px] sm:w-[315px] shrink-0 bg-white rounded-3xl border border-slate-200/90 hover:border-[#0052cc]/40 overflow-hidden shadow-[0_4px_24px_-4px_rgba(4,27,83,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(4,27,83,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer select-none"
                  >
                    <div>
                      {/* Doctor Photo Frame */}
                      <div className="h-64 sm:h-68 overflow-hidden bg-slate-100 relative">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        
                        {/* Vignette Gradient for smooth transition */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#041b53]/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                        
                        {/* Top-Left Badge (Leadership / Department) */}
                        {doc.badge && (
                          <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-[#0052cc] shadow-2xs border border-white/80 max-w-[170px] truncate">
                            {doc.badge}
                          </div>
                        )}

                        {/* Top-Right Rating Badge */}
                        <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-2xs flex items-center space-x-1 border border-white/80">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          <span>{doc.rating}</span>
                        </div>

                        {/* Bottom-Left Experience Badge */}
                        <div className="absolute bottom-3 left-3.5 bg-[#041b53]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-xs">
                          {doc.experienceYears}+ Yrs Experience
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 sm:p-6">
                        {/* Specialty Badge */}
                        <span className="inline-block bg-sky-50 text-[#0052cc] border border-sky-200/80 text-[11px] font-bold px-3 py-1 rounded-full mb-2.5 truncate max-w-full">
                          {departmentName}
                        </span>

                        {/* Doctor Name in Bold Brand Navy */}
                        <h4 className="font-extrabold text-base sm:text-lg text-[#041b53] group-hover:text-[#0052cc] transition-colors leading-snug line-clamp-1">
                          {doc.name}
                        </h4>

                        {/* Specialty Subtitle */}
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed font-medium">
                          {doc.specialty}
                        </p>

                        {/* Qualifications */}
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-1 font-normal">
                          {doc.qualification}
                        </p>

                        {/* OPD Availability Status */}
                        <div className="flex items-center space-x-2 text-xs text-emerald-700 bg-emerald-50/70 border border-emerald-100 rounded-xl px-2.5 py-1.5 mt-3">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="font-semibold text-[11px] truncate">
                            OPD Available Today • Zero Wait
                          </span>
                        </div>

                        {/* Hospital Location Pin */}
                        <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-2.5 pt-2 border-t border-slate-100 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#0052cc] shrink-0" />
                          <span className="truncate">Kanha Hospitals, Kompally</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: View Profile + Book Slot */}
                    <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-slate-50/60 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDoctorModal(doc);
                        }}
                        className="border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-[#0052cc] hover:bg-white px-3 py-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-1 cursor-pointer shrink-0"
                      >
                        <span>Profile</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenAppointmentModal(doc.departmentId, doc.id);
                        }}
                        className="bg-gradient-to-r from-[#0052cc] via-[#0066cc] to-[#0284c7] hover:from-[#041b53] hover:to-[#0052cc] text-white px-3.5 py-2 rounded-xl font-bold text-xs shadow-2xs hover:shadow-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95 flex-1"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Slot</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================
          DOCTOR FULL PROFILE MODAL (Executive Treatment)
         ======================================================== */}
      <AnimatePresence>
        {activeDoctorModal && (
          <div className="fixed inset-0 z-50 bg-[#041b53]/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 pb-6 border-b border-slate-100 text-center sm:text-left">
                <img
                  src={activeDoctorModal.image}
                  alt={activeDoctorModal.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-sky-100 shadow-md"
                />
                <div>
                  <span className="inline-block bg-sky-50 text-[#0052cc] border border-sky-200 text-xs font-bold px-3 py-0.5 rounded-full mb-1.5">
                    {getDepartmentBadgeName(activeDoctorModal.departmentId, activeDoctorModal.specialty)}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#041b53]">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0052cc] font-bold mt-0.5">
                    {activeDoctorModal.specialty}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {activeDoctorModal.qualification}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start space-x-3 mt-2.5 text-xs">
                    <span className="flex items-center text-amber-500 font-bold bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-100">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                      {activeDoctorModal.rating} ({activeDoctorModal.reviewCount} Reviews)
                    </span>
                    <span className="text-[#041b53] font-bold bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {activeDoctorModal.experienceYears}+ Years Exp
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-extrabold text-[#041b53] uppercase tracking-wider mb-2">
                    About The Specialist
                  </h4>
                  <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 font-normal leading-relaxed">
                    {activeDoctorModal.about}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">OPD Consultation Hours</span>
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5 mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#0052cc]" />
                      <span>{activeDoctorModal.opdTimings}</span>
                    </span>
                  </div>

                  <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Consultation Days</span>
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0052cc]" />
                      <span>{activeDoctorModal.availableDays.join(', ')}</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                    Available Fast-Track Slots Today:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeDoctorModal.slots.map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const doc = activeDoctorModal;
                          setActiveDoctorModal(null);
                          onOpenAppointmentModal(doc.departmentId, doc.id, slot);
                        }}
                        className="bg-white hover:bg-sky-50 text-slate-800 hover:text-[#0052cc] border border-slate-200 hover:border-sky-300 text-xs font-bold px-3 py-1.5 rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-3">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="text-xs font-bold text-slate-600 hover:text-[#0052cc] flex items-center space-x-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#0052cc]" />
                  <span>Hospital Helpline: {HOSPITAL_INFO.phone}</span>
                </a>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveDoctorModal(null)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const doc = activeDoctorModal;
                      setActiveDoctorModal(null);
                      onOpenAppointmentModal(doc.departmentId, doc.id);
                    }}
                    className="px-5 py-2 bg-gradient-to-r from-[#0052cc] via-[#0066cc] to-[#0284c7] hover:from-[#041b53] hover:to-[#0052cc] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Book In-Person Appointment
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
