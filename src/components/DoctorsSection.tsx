import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Clock, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Search, 
  Play, 
  Pause,
  X 
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
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [scrollSpeed, setScrollSpeed] = useState<'slow' | 'normal'>('slow');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDept === 'all' || doc.departmentId === selectedDept;
    const matchesSearch = !searchDoc ||
      doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.qualification.toLowerCase().includes(searchDoc.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // Build duplicated list to guarantee 100% seamless infinite auto-scroll loop
  const displayDoctors = useMemo(() => {
    if (filteredDoctors.length === 0) return [];
    const repeatCount = Math.max(2, Math.ceil(10 / filteredDoctors.length)) * 2;
    const list: (Doctor & { uniqueKey: string })[] = [];
    for (let i = 0; i < repeatCount; i++) {
      for (const doc of filteredDoctors) {
        list.push({ ...doc, uniqueKey: `${doc.id}-loop-${i}` });
      }
    }
    return list;
  }, [filteredDoctors]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getDepartmentBadgeName = (deptId: string, fallback: string) => {
    const sp = SPECIALTIES.find(s => s.id === deptId);
    return sp ? sp.name : fallback;
  };

  return (
    <section id="doctors" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-200/80">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-0" />

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
          animation: doctorStream ${scrollSpeed === 'slow' ? '92s' : '46s'} linear infinite;
        }
        .doctor-stream-track:hover,
        .doctor-stream-track.is-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-5">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Compassionate &amp; Experienced Medical Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Consult Our Senior{' '}
              <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
                Specialists &amp; Surgeons
              </span>
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Meet our eminent consultants with decades of collective clinical excellence. Verified OPD consultations with zero waiting time.
            </p>
          </div>

          {/* Quick Doctor Search input */}
          <div className="w-full md:w-80 shrink-0">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search doctor or specialty..."
                value={searchDoc}
                onChange={(e) => setSearchDoc(e.target.value)}
                className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100/70 shadow-2xs transition-all"
              />
              <Search className="w-4 h-4 text-sky-600 absolute left-3.5 top-3 group-focus-within:text-[#0077e6] transition-colors" />
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

        {/* DEPARTMENT FILTER PILLS */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-1 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setSelectedDept('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
              selectedDept === 'all'
                ? 'bg-[#0077e6] text-white shadow-2xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
            }`}
          >
            All Specialties ({DOCTORS.length})
          </button>
          {['urology', 'nephrology', 'cardiology', 'orthopedics', 'gynaecology', 'general-surgery', 'critical-care', 'pulmonology'].map((deptId) => {
            const sp = SPECIALTIES.find(s => s.id === deptId);
            if (!sp) return null;
            const isActive = selectedDept === deptId;
            return (
              <button
                key={deptId}
                onClick={() => setSelectedDept(deptId)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#0077e6] text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {sp.name}
              </button>
            );
          })}
        </div>

        {/* DOCTOR SHOWCASE: ANCHOR CARD + HORIZONTAL CAROUSEL */}
        <div className="flex flex-col lg:flex-row items-stretch gap-5 sm:gap-6">
          
          {/* LEFT ANCHOR CARD ("Specialists Who Care.") */}
          <div className="w-full lg:w-[290px] xl:w-[310px] shrink-0 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_-6px_rgba(8,31,61,0.06)] relative overflow-hidden group">
            
            {/* Top Accent Gradient Hairline */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#10b981]" />

            <div>
              {/* Top Specialist Icon in soft circle */}
              <div className="w-13 h-13 rounded-2xl bg-sky-50 text-[#0077e6] flex items-center justify-center mb-6 border border-sky-100 shadow-2xs">
                <Users className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Bold Headline */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0077e6] tracking-tight leading-none">
                Specialists
              </h3>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight leading-tight mt-1">
                Who Care.
              </h3>

              {/* Green Accent Line */}
              <div className="w-10 h-1 bg-emerald-500 rounded-full my-4" />

              {/* Subtitles */}
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Advanced expertise.<br />
                Personalised care.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 space-y-1.5 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>50+ Senior Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>NABH Accredited Tertiary Center</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero-Wait OPD Scheduling</span>
                </div>
              </div>
            </div>

            {/* Slider Navigation & Auto-Scroll Controls */}
            <div className="pt-6 border-t border-slate-100 flex flex-col space-y-3">
              
              {/* Auto-Scroll Toggle Pill & Navigation */}
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className="inline-flex items-center space-x-2 bg-slate-50 hover:bg-sky-50 border border-slate-200/90 hover:border-sky-300 px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-700 hover:text-[#0077e6] transition-all cursor-pointer select-none"
                  title={isAutoScrolling ? 'Click to Pause Auto-Scroll' : 'Click to Resume Auto-Scroll'}
                >
                  {isAutoScrolling ? (
                    <>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <Pause className="w-3 h-3 text-slate-500" />
                      <span>{scrollSpeed === 'slow' ? 'Slow Auto-Scroll' : 'Auto-Scroll Active'}</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <Play className="w-3 h-3 text-amber-600 fill-amber-600" />
                      <span>Resume Scroll</span>
                    </>
                  )}
                </button>

                {/* Manual Navigation Arrows */}
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => scroll('left')}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-[#0077e6] border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
                    title="Scroll Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0077e6] to-[#0284c7] hover:from-[#0066cc] hover:to-[#0284c7] text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                    title="Scroll Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Speed Mode Selector & Pause Hint */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-slate-400 font-medium">
                  (Hover cards to pause)
                </span>

                <div className="inline-flex items-center space-x-1 bg-slate-100/90 p-0.5 rounded-lg border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => setScrollSpeed('slow')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                      scrollSpeed === 'slow'
                        ? 'bg-white text-emerald-700 shadow-2xs font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Gentle, ultra-readable slow scrolling"
                  >
                    Slow 🐢
                  </button>
                  <button
                    type="button"
                    onClick={() => setScrollSpeed('normal')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                      scrollSpeed === 'normal'
                        ? 'bg-white text-[#0077e6] shadow-2xs font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Standard pace scrolling"
                  >
                    Normal ⚡
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* HORIZONTAL AUTO-SCROLLING DOCTORS CAROUSEL */}
          <div className="flex-1 min-w-0 relative overflow-hidden py-1">
            
            {/* Subtle Right Edge Fade Mask */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-20 pointer-events-none" />

            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex"
            >
              <div className={`doctor-stream-track py-2 px-1 gap-5 ${!isAutoScrolling ? 'is-paused' : ''}`}>
                {displayDoctors.map((doc) => {
                  const departmentName = getDepartmentBadgeName(doc.departmentId, doc.specialty);

                  return (
                    <div
                      key={doc.uniqueKey}
                      onClick={() => setActiveDoctorModal(doc)}
                      className="w-[270px] sm:w-[290px] shrink-0 bg-white rounded-3xl border border-slate-200/90 hover:border-sky-300 overflow-hidden shadow-[0_4px_20px_-3px_rgba(8,31,61,0.06)] hover:shadow-[0_16px_35px_-8px_rgba(0,119,230,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer select-none"
                    >
                      <div>
                        {/* Doctor Photo */}
                        <div className="h-56 sm:h-60 overflow-hidden bg-slate-100 relative">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Rating Pill Badge */}
                          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-2xs flex items-center space-x-1 border border-white/80">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                            <span>{doc.rating}</span>
                          </div>

                          {/* Experience Pill Badge */}
                          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-white/20">
                            {doc.experienceYears}+ Yrs Experience
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5">
                          {/* Specialty Badge in Soft Green Pill */}
                          <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-bold px-3 py-1 rounded-full mb-2.5 truncate max-w-full">
                            {departmentName}
                          </span>

                          {/* Doctor Name in Bold Medical Blue */}
                          <h4 className="font-extrabold text-base sm:text-[17px] text-[#0077e6] group-hover:text-[#0055b3] transition-colors leading-snug line-clamp-1">
                            {doc.name}
                          </h4>

                          {/* Designation / Specialty */}
                          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed font-medium">
                            {doc.specialty}
                          </p>

                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                            {doc.qualification}
                          </p>

                          {/* Hospital Location Pin */}
                          <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-2.5 pt-2 border-t border-slate-100 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                            <span className="truncate">Kanha Hospitals, Kompally</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer: View Profile + Book Slot */}
                      <div className="p-4 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                        <span className="font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center space-x-1 transition-colors">
                          <span>View Profile</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenAppointmentModal(doc.departmentId, doc.id);
                          }}
                          className="bg-gradient-to-r from-[#0077e6] to-[#0284c7] hover:from-[#0066cc] hover:to-[#0284c7] text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-2xs hover:shadow-xs transition-all flex items-center space-x-1 cursor-pointer active:scale-95"
                        >
                          <Calendar className="w-3 h-3" />
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

      </div>

      {/* DOCTOR FULL PROFILE MODAL */}
      <AnimatePresence>
        {activeDoctorModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
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
                  <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-0.5 rounded-full mb-1.5">
                    {getDepartmentBadgeName(activeDoctorModal.departmentId, activeDoctorModal.specialty)}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0077e6] font-bold mt-0.5">
                    {activeDoctorModal.specialty}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {activeDoctorModal.qualification}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start space-x-3 mt-2.5 text-xs">
                    <span className="flex items-center text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                      {activeDoctorModal.rating} ({activeDoctorModal.reviewCount} Reviews)
                    </span>
                    <span className="text-slate-600 font-bold bg-slate-100 px-2 py-0.5 rounded-md">
                      {activeDoctorModal.experienceYears}+ Years Exp
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                    About The Specialist
                  </h4>
                  <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 font-normal">
                    {activeDoctorModal.about}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">OPD Consultation Hours</span>
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5 mt-1">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      <span>{activeDoctorModal.opdTimings}</span>
                    </span>
                  </div>

                  <div className="bg-teal-50/60 p-3.5 rounded-xl border border-teal-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Consultation Days</span>
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>{activeDoctorModal.availableDays.join(', ')}</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                    Available Fast-Track Slots:
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
                        className="bg-white hover:bg-sky-50 text-slate-800 hover:text-[#0077e6] border border-slate-200 hover:border-sky-300 text-xs font-bold px-3 py-1.5 rounded-xl transition-all shadow-2xs cursor-pointer"
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
                  className="text-xs font-bold text-slate-600 hover:text-[#0077e6] flex items-center space-x-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-500" />
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
                    className="px-5 py-2 bg-gradient-to-r from-[#0077e6] to-[#0284c7] hover:from-[#0066cc] hover:to-[#0284c7] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
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
