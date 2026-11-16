import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Stethoscope, 
  ArrowRight, 
  RotateCcw, 
  X, 
  Star, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronDown,
  User,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { DOCTORS, SPECIALTIES, HOSPITAL_INFO, Doctor } from '../data/hospitalData';
import type { PageRoute } from '../types';

interface DoctorSearchWidgetProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string, slot?: string) => void;
  onNavigate?: (route: PageRoute) => void;
}

export const DoctorSearchWidget: React.FC<DoctorSearchWidgetProps> = ({
  onOpenAppointmentModal,
  onNavigate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [hasSearched, setHasSearched] = useState(false);

  const locations = [
    { id: 'all', label: 'All Campus Locations' },
    { id: 'main', label: 'Main Hospital Tower (Panchsheel Enclave)' },
    { id: 'casualty', label: '24/7 Casualty & Emergency (Gate 1)' },
    { id: 'renal', label: 'Renal Sciences & Dialysis Wing' },
    { id: 'opd', label: 'OPD Specialty Clinics (Level 1 & 2)' },
  ];

  const specialtiesList = [
    { id: 'all', label: 'All Specialties (24 Disciplines)' },
    { id: 'urology', label: 'Urology & Kidney Stones' },
    { id: 'nephrology', label: 'Nephrology & 24/7 Dialysis' },
    { id: 'andrology', label: "Andrology & Men's Health" },
    { id: 'cardiology', label: 'Interventional Cardiology' },
    { id: 'orthopedics', label: 'Orthopedics & Joint Replacement' },
    { id: 'gynaecology', label: 'Obstetrics & Gynaecology' },
    { id: 'general-surgery', label: 'General & Laparoscopic Surgery' },
    { id: 'critical-care', label: 'Critical Care & Advanced ICU' },
    { id: 'pediatrics', label: 'Paediatrics & Neonatology' },
    { id: 'neurology', label: 'Neurology & Stroke Care' },
    { id: 'pulmonology', label: 'Pulmonology & Chest Medicine' },
  ];

  const quickPills = [
    { label: '⚡ Laser Stone Surgery', specialty: 'urology', query: 'laser stone' },
    { label: '💧 24/7 Dialysis', specialty: 'nephrology', query: 'dialysis' },
    { label: '❤️ Cardiology', specialty: 'cardiology', query: 'cardiology' },
    { label: '🦴 Joint Replacement', specialty: 'orthopedics', query: 'joint replacement' },
    { label: '👶 Maternity Care', specialty: 'gynaecology', query: 'delivery' },
    { label: '🧠 Neurology', specialty: 'neurology', query: 'neurology' },
    { label: '🩺 General Surgery', specialty: 'general-surgery', query: 'surgery' },
  ];

  // Filter matching doctors
  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doc) => {
      // Match specialty
      const matchesSpecialty = selectedSpecialty === 'all' || doc.departmentId === selectedSpecialty;

      // Match search term
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch = !query || 
        doc.name.toLowerCase().includes(query) ||
        doc.specialty.toLowerCase().includes(query) ||
        doc.about.toLowerCase().includes(query) ||
        doc.languages.some(l => l.toLowerCase().includes(query));

      return matchesSpecialty && matchesSearch;
    });
  }, [searchTerm, selectedSpecialty]);

  const handleSearchClick = () => {
    setHasSearched(true);
  };

  const handleClearAll = () => {
    setSearchTerm('');
    setSelectedLocation('all');
    setSelectedSpecialty('all');
    setHasSearched(false);
  };

  const isFilterActive = searchTerm !== '' || selectedLocation !== 'all' || selectedSpecialty !== 'all';

  return (
    <div className="relative z-30 mt-1 sm:mt-2 lg:mt-2.5 w-full max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
      {/* Main Glassmorphic Search Card */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(4,27,83,0.12),0_0_1px_1px_rgba(255,255,255,0.8)_inset] px-4 py-3 sm:px-6 sm:py-3.5 lg:px-7 lg:py-4 relative overflow-hidden">
        
        {/* Top Accent Gradient Hairline */}
        <div className="absolute top-0 inset-x-8 h-[2.5px] bg-gradient-to-r from-transparent via-[#041b53] to-transparent rounded-full" />

        {/* Compact Single-Row Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052cc] animate-pulse"></span>
            <h3 className="text-xs sm:text-sm font-extrabold text-[#041b53] tracking-tight leading-none">
              Search for a Doctor &amp; Book Consultation
            </h3>
            <span className="text-[11px] text-slate-400 font-medium hidden md:inline">• 24 Specialties • Instant OPD Scheduling</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-200/60">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Zero-Wait OPD</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 bg-blue-50 text-[#0052cc] px-2 py-0.5 rounded-md border border-blue-200/60">
              <CheckCircle2 className="w-3 h-3 text-[#0052cc]" />
              <span>50+ Specialists</span>
            </span>
          </div>
        </div>

        {/* Search Input Controls */}
        <div className="space-y-2 sm:space-y-2.5">
          
          {/* Row 1: Primary Search Input */}
          <div className="relative group">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-[#0052cc] transition-colors pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setHasSearched(true);
              }}
              placeholder="Search for a Doctor, Specialty, or Treatment (e.g. Dr. Ramakrishna, Laser Stone, Dialysis, Knee Replacement)..."
              className="w-full bg-slate-50/90 hover:bg-slate-50 border border-slate-200/90 rounded-xl pl-10 sm:pl-11 pr-9 py-2 sm:py-2.5 text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:bg-white focus:ring-3 focus:ring-blue-100/60 shadow-2xs transition-all font-medium"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[10px] transition-colors cursor-pointer"
                title="Clear search input"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            )}
          </div>

          {/* Row 2: Location Dropdown + Specialty Dropdown + Search Button */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 items-center">
            
            {/* Field 1: Select Location */}
            <div className="md:col-span-5 relative group">
              <MapPin className="w-4 h-4 text-[#0052cc] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  setHasSearched(true);
                }}
                className="w-full appearance-none bg-slate-50/90 hover:bg-slate-50 border border-slate-200/90 rounded-xl pl-10 pr-9 py-2 text-xs sm:text-[13px] text-slate-800 font-semibold focus:outline-none focus:border-[#0052cc] focus:bg-white focus:ring-2 focus:ring-blue-100/60 shadow-2xs transition-all cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Field 2: Select Specialty */}
            <div className="md:col-span-5 relative group">
              <Stethoscope className="w-4 h-4 text-[#0052cc] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedSpecialty}
                onChange={(e) => {
                  setSelectedSpecialty(e.target.value);
                  setHasSearched(true);
                }}
                className="w-full appearance-none bg-slate-50/90 hover:bg-slate-50 border border-slate-200/90 rounded-xl pl-10 pr-9 py-2 text-xs sm:text-[13px] text-slate-800 font-semibold focus:outline-none focus:border-[#0052cc] focus:bg-white focus:ring-2 focus:ring-blue-100/60 shadow-2xs transition-all cursor-pointer"
              >
                {specialtiesList.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    {spec.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Field 3: Search Action Button */}
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={handleSearchClick}
                className="w-full bg-[#041b53] hover:bg-[#00246a] text-white py-2 px-3 rounded-xl font-bold text-xs sm:text-[13px] shadow-sm shadow-[#041b53]/20 border border-blue-900/40 hover:border-blue-700 transition-all flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95 group"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Row 3: Trending Quick Filter Chips + Clear All */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1.5 border-t border-slate-100">
            
            {/* Quick Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">
                Trending:
              </span>
              {quickPills.map((pill, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setSelectedSpecialty(pill.specialty);
                    setSearchTerm('');
                    setHasSearched(true);
                  }}
                  className="text-[10px] font-semibold text-slate-700 hover:text-[#041b53] bg-slate-100/80 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 px-2 py-0.5 rounded-md transition-all cursor-pointer shrink-0"
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Clear All Button */}
            <button
              type="button"
              onClick={handleClearAll}
              className={`inline-flex items-center space-x-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md transition-all self-center sm:self-auto cursor-pointer border ${
                isFilterActive
                  ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
                  : 'bg-slate-50/80 border-slate-200/80 text-slate-500 hover:text-[#041b53] hover:bg-slate-100'
              }`}
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Clear All</span>
            </button>

          </div>

        </div>

        {/* Live Filter Results Drawer */}
        <AnimatePresence>
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-5 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                      {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Specialist' : 'Specialists'} Available for Consultation
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHasSearched(false)}
                    className="text-[11px] font-bold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                  >
                    Hide Results ▲
                  </button>
                </div>

                {filteredDoctors.length === 0 ? (
                  <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200/80 space-y-2">
                    <User className="w-8 h-8 text-slate-400 mx-auto" />
                    <h4 className="font-extrabold text-slate-800 text-sm">No specialists matching your criteria</h4>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Try resetting your search query or specialty filter to view all available faculty consultants.
                    </p>
                    <button
                      type="button"
                      onClick={handleClearAll}
                      className="mt-2 bg-[#041b53] text-white px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-[#00246a] cursor-pointer shadow-xs"
                    >
                      Show All Doctors
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {filteredDoctors.slice(0, 6).map((doc) => (
                      <div
                        key={doc.id}
                        className="bg-white rounded-xl border border-slate-200/80 hover:border-[#0052cc]/50 hover:shadow-md p-4 flex flex-col justify-between transition-all group"
                      >
                        <div>
                          <div className="flex items-start gap-3 mb-2.5">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0 shadow-2xs"
                              loading="lazy"
                            />
                            <div className="min-w-0">
                              <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#041b53] transition-colors truncate">
                                {doc.name}
                              </h4>
                              <p className="text-[11px] text-[#0052cc] font-semibold truncate">
                                {doc.specialty}
                              </p>
                              <div className="flex items-center gap-2 mt-0.5 text-[10.5px] text-slate-500">
                                <span className="flex items-center text-amber-600 font-bold">
                                  <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-0.5" />
                                  {doc.rating}
                                </span>
                                <span>•</span>
                                <span>{doc.experienceYears}+ Yrs Exp</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-50 rounded-lg p-2 text-[10.5px] text-slate-600 mb-3 flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[#0052cc] shrink-0" />
                            <span className="truncate">{doc.opdTimings}</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => onOpenAppointmentModal(doc.departmentId, doc.id)}
                          className="w-full bg-[#041b53] hover:bg-[#00246a] text-white py-1.5 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer"
                        >
                          <Calendar className="w-3 h-3 text-cyan-300" />
                          <span>Book OPD Slot</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* View Full Directory Link */}
                {filteredDoctors.length > 0 && (
                  <div className="mt-3.5 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('doctors');
                        } else {
                          const el = document.getElementById('doctors');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-xs font-bold text-[#0052cc] hover:text-[#041b53] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore all 50+ Doctors in full directory</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

