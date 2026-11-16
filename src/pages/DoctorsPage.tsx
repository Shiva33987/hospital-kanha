import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Stethoscope, 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  PhoneCall, 
  Sparkles, 
  Filter,
  GraduationCap,
  Award,
  Languages
} from 'lucide-react';
import { DOCTORS, SPECIALTIES, HOSPITAL_INFO } from '../data/hospitalData';

interface DoctorsPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string, slot?: string) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ 
  onBackToHome, 
  onOpenAppointmentModal 
}) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<'all' | 'today' | 'tomorrow'>('all');

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doc) => {
      const matchesDept = selectedDept === 'all' || doc.departmentId === selectedDept;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        doc.name.toLowerCase().includes(query) ||
        doc.specialty.toLowerCase().includes(query) ||
        doc.qualification.toLowerCase().includes(query) ||
        doc.focusAreas?.some((f: string) => f.toLowerCase().includes(query));

      const matchesDay = selectedDay === 'all' || 
        (selectedDay === 'today' && doc.availableDays?.some(d => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].includes(d))) ||
        (selectedDay === 'tomorrow');

      return matchesDept && matchesSearch && matchesDay;
    });
  }, [selectedDept, searchQuery, selectedDay]);

  const departments = [
    { id: 'all', label: 'All Specialties' },
    { id: 'urology', label: 'Urology & Kidney Stones' },
    { id: 'nephrology', label: 'Nephrology & Dialysis' },
    { id: 'andrology', label: 'Andrology & Men\'s Health' },
    { id: 'orthopedics', label: 'Orthopedics & Joint Care' },
    { id: 'laparoscopy', label: 'Laparoscopy & GI Surgery' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'general_medicine', label: 'General Medicine & ICU' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500">
          <button 
            onClick={onBackToHome}
            className="hover:text-[#00246a] transition-colors flex items-center gap-1 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-semibold">Find a Doctor & Specialists Directory</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#041b53] via-[#00246a] to-[#010d29] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <Stethoscope className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • Senior Medical Faculty</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Consult With Leading Super-Specialists
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Book confirmed in-person OPD consultations or virtual tele-consultations with our renowned urologists, nephrologists, and robotic surgeons in Kompally, Hyderabad.
            </p>

            {/* Live Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by doctor name, specialty (e.g. kidney stone, dialysis, prostate)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 shadow-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Chips Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedDept === dept.id
                  ? 'bg-[#00246a] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm font-bold text-slate-700">
            Showing <span className="text-[#00246a]">{filteredDoctors.length}</span> Verified Specialists
          </div>
          <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPD Open Today • 8:00 AM - 9:00 PM</span>
          </div>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No doctors match your search</h3>
            <p className="text-xs text-slate-500 mb-4">Try searching with a broader term or select 'All Specialties'</p>
            <button 
              onClick={() => { setSelectedDept('all'); setSearchQuery(''); }}
              className="px-5 py-2.5 rounded-full bg-[#00246a] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDoctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-6">
                  {/* Doctor Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-blue-100 via-sky-50 to-blue-50 text-[#00246a] flex items-center justify-center font-black text-xl shrink-0 border border-blue-200 shadow-inner">
                      {doc.name.replace('Dr. ', '').split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#00246a] border border-blue-200/60 mb-1.5">
                        {doc.specialty}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00246a] transition-colors leading-snug">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {doc.qualification}
                      </p>
                    </div>
                  </div>

                  {/* Badges / Experience & OPD Timings */}
                  <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span><strong>{doc.experienceYears ? `${doc.experienceYears}+ Years` : (doc.experience || '12+ Years')}</strong> Clinical Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{doc.opdTimings || 'Mon - Sat: 10:00 AM - 4:00 PM'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>Kompally Main Hospital Campus</span>
                    </div>
                  </div>

                  {/* Focus Areas Pills */}
                  {doc.focusAreas && doc.focusAreas.length > 0 && (
                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {doc.focusAreas.slice(0, 3).map((f: string, i: number) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card CTA Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Consultation Fee</div>
                    <div className="text-sm font-bold text-slate-800">{doc.consultationFee ? `₹${doc.consultationFee}` : '₹600'}</div>
                  </div>

                  <button 
                    onClick={() => onOpenAppointmentModal(doc.departmentId, doc.id)}
                    className="px-5 py-2.5 rounded-full bg-[#00246a] hover:bg-[#001744] text-white text-xs font-bold shadow-md hover:shadow-blue-900/25 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
