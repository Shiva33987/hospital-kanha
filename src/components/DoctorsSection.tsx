import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Calendar, 
  Clock, 
  Award, 
  Star, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  User,
  PhoneCall
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

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDept === 'all' || doc.departmentId === selectedDept;
    const matchesSearch = !searchDoc ||
      doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.qualification.toLowerCase().includes(searchDoc.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="doctors" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-sky-100/80 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Compassionate & Experienced Medical Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
              Consult Our Senior Doctors & Surgeons
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Meet our eminent consultants in Urology, Nephrology, Cardiology, Critical Care, Orthopedics, and Laparoscopic Surgery. Book verified OPD slots online with zero waiting time.
            </p>
          </div>

          {/* Quick Doctor Search input */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              placeholder="Search doctor by name or specialty..."
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky transition-all shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* DEPARTMENT QUICK FILTER PILLS */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            onClick={() => setSelectedDept('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              selectedDept === 'all'
                ? 'bg-hospital-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-hospital-navy border border-slate-200'
            }`}
          >
            All Departments ({DOCTORS.length})
          </button>
          {['urology', 'nephrology', 'cardiology', 'orthopedics', 'gynaecology', 'critical-care', 'general-surgery', 'pulmonology'].map((deptId) => {
            const sp = SPECIALTIES.find(s => s.id === deptId);
            if (!sp) return null;
            return (
              <button
                key={deptId}
                onClick={() => setSelectedDept(deptId)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedDept === deptId
                    ? 'bg-hospital-navy text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-hospital-navy border border-slate-200'
                }`}
              >
                {sp.name}
              </button>
            );
          })}
        </div>

        {/* DOCTORS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover border border-slate-100 hover:border-hospital-sky/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Head Info */}
                <div className="p-6 flex space-x-4 items-start">
                  <div className="relative shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-1 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-sm" title="Verified Consultant">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {doc.badge && (
                      <span className="inline-block bg-sky-50 text-hospital-blue text-[10px] font-bold px-2 py-0.5 rounded-md border border-sky-100 mb-1 truncate max-w-full">
                        {doc.badge}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-hospital-navy group-hover:text-hospital-blue transition-colors truncate">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-hospital-sky mt-0.5 line-clamp-1">
                      {doc.specialty}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {doc.qualification}
                    </p>

                    <div className="flex items-center space-x-3 mt-2 text-xs">
                      <span className="flex items-center text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                        {doc.rating}
                      </span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-600 font-semibold">{doc.experienceYears}+ Years Exp</span>
                    </div>
                  </div>
                </div>

                {/* About Bio Snippet */}
                <div className="px-6 pb-4">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    {doc.about}
                  </p>
                </div>

                {/* Schedule & OPD Timings */}
                <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 space-y-1 text-xs">
                  <div className="flex items-center text-slate-700 space-x-2">
                    <Clock className="w-3.5 h-3.5 text-hospital-sky shrink-0" />
                    <span className="font-semibold text-[11px] truncate">{doc.opdTimings}</span>
                  </div>
                  <div className="flex items-center text-slate-500 space-x-2 text-[11px]">
                    <span className="font-bold text-slate-700">Days:</span>
                    <span>{doc.availableDays.join(', ')}</span>
                  </div>
                </div>

                {/* Fast Available Slots */}
                <div className="px-6 py-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Available Slots Today / Tomorrow:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.slots.slice(0, 3).map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => onOpenAppointmentModal(doc.departmentId, doc.id, slot)}
                        className="bg-white hover:bg-sky-50 text-hospital-navy hover:text-hospital-blue border border-slate-200 hover:border-hospital-sky text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all cursor-pointer"
                      >
                        {slot}
                      </button>
                    ))}
                    {doc.slots.length > 3 && (
                      <span className="text-[10px] text-slate-400 self-center">+{doc.slots.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Book Button */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="text-xs font-bold text-slate-600 hover:text-hospital-navy flex items-center space-x-1"
                >
                  <PhoneCall className="w-3 h-3 text-hospital-sky" />
                  <span>Call Hospital</span>
                </a>

                <button
                  onClick={() => onOpenAppointmentModal(doc.departmentId, doc.id)}
                  className="bg-hospital-navy group-hover:bg-hospital-blue text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-hospital-sky" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

