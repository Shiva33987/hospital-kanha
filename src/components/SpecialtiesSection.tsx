import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Stethoscope, 
  ShieldAlert, 
  Heart, 
  Brain, 
  Bone, 
  Flame, 
  Scissors, 
  Droplets, 
  Smile, 
  Wind, 
  Ear, 
  ShieldCheck, 
  Feather, 
  Sun,
  X,
  Zap,
  UserCheck,
  HeartPulse,
  Users,
  Award,
  Calendar,
  PhoneCall,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { SPECIALTIES, Specialty, DOCTORS } from '../data/hospitalData';

interface SpecialtiesSectionProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

// Bespoke Luxury Visual Meta for every Specialty
const SPECIALTY_META: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  glowColor: string;
}> = {
  urology: {
    icon: Zap,
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    glowColor: 'rgba(2, 132, 199, 0.25)',
  },
  nephrology: {
    icon: Droplets,
    gradient: 'from-cyan-500 via-teal-600 to-emerald-600',
    glowColor: 'rgba(13, 148, 136, 0.25)',
  },
  andrology: {
    icon: UserCheck,
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    glowColor: 'rgba(79, 70, 229, 0.25)',
  },
  cardiology: {
    icon: Heart,
    gradient: 'from-rose-500 via-red-500 to-pink-600',
    glowColor: 'rgba(244, 63, 94, 0.25)',
  },
  oncology: {
    icon: ShieldAlert,
    gradient: 'from-purple-600 via-fuchsia-600 to-indigo-600',
    glowColor: 'rgba(168, 85, 247, 0.25)',
  },
  neurology: {
    icon: Brain,
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    glowColor: 'rgba(147, 51, 234, 0.25)',
  },
  neurosurgery: {
    icon: Sparkles,
    gradient: 'from-indigo-600 via-sky-600 to-blue-700',
    glowColor: 'rgba(99, 102, 241, 0.25)',
  },
  orthopedics: {
    icon: Bone,
    gradient: 'from-amber-500 via-orange-500 to-amber-600',
    glowColor: 'rgba(245, 158, 11, 0.25)',
  },
  'critical-care': {
    icon: Flame,
    gradient: 'from-red-500 via-rose-600 to-orange-500',
    glowColor: 'rgba(239, 68, 68, 0.25)',
  },
  gastroenterology: {
    icon: Activity,
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    glowColor: 'rgba(16, 185, 129, 0.25)',
  },
  'general-surgery': {
    icon: Scissors,
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
    glowColor: 'rgba(2, 132, 199, 0.25)',
  },
  gynaecology: {
    icon: HeartPulse,
    gradient: 'from-pink-500 via-rose-500 to-fuchsia-600',
    glowColor: 'rgba(236, 72, 153, 0.25)',
  },
  paediatrics: {
    icon: Smile,
    gradient: 'from-sky-400 via-blue-500 to-cyan-500',
    glowColor: 'rgba(56, 189, 248, 0.25)',
  },
  pulmonology: {
    icon: Wind,
    gradient: 'from-teal-400 via-cyan-500 to-sky-600',
    glowColor: 'rgba(20, 184, 166, 0.25)',
  },
  diabetology: {
    icon: Activity,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    glowColor: 'rgba(129, 140, 248, 0.25)',
  },
  ent: {
    icon: Ear,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    glowColor: 'rgba(6, 182, 212, 0.25)',
  },
  dermatology: {
    icon: Sparkles,
    gradient: 'from-amber-400 via-rose-400 to-pink-500',
    glowColor: 'rgba(251, 146, 60, 0.25)',
  },
  dental: {
    icon: CheckCircle2,
    gradient: 'from-sky-400 via-cyan-500 to-teal-500',
    glowColor: 'rgba(56, 189, 248, 0.25)',
  },
  rheumatology: {
    icon: ShieldCheck,
    gradient: 'from-blue-600 via-indigo-600 to-slate-700',
    glowColor: 'rgba(59, 130, 246, 0.25)',
  },
  'plastic-surgery': {
    icon: Feather,
    gradient: 'from-rose-400 via-fuchsia-500 to-indigo-500',
    glowColor: 'rgba(244, 63, 94, 0.25)',
  },
  physiotherapy: {
    icon: Activity,
    gradient: 'from-emerald-500 via-green-600 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.25)',
  },
  psychiatry: {
    icon: Sun,
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.25)',
  },
  'general-medicine': {
    icon: Stethoscope,
    gradient: 'from-blue-500 via-cyan-600 to-teal-600',
    glowColor: 'rgba(14, 165, 233, 0.25)',
  },
};

const defaultMeta = {
  icon: Stethoscope,
  gradient: 'from-sky-500 via-blue-600 to-indigo-600',
  glowColor: 'rgba(2, 132, 199, 0.25)',
};

const POPULAR_QUERIES = [
  'Laser Kidney Stones',
  '24/7 Dialysis',
  'Joint Replacement',
  'Cardiac Care',
  'Laparoscopic Surgery',
  'Brain & Spine'
];

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'surgical' | 'medical' | 'allied'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  const categories = [
    { id: 'all', label: 'All 24 Specialties', count: SPECIALTIES.length },
    { id: 'core', label: 'Key Focus (Urology, Nephrology, ICU)', count: SPECIALTIES.filter(s => s.category === 'core').length },
    { id: 'surgical', label: 'Surgical & Minimally Invasive', count: SPECIALTIES.filter(s => s.category === 'surgical').length },
    { id: 'medical', label: 'Medical Super-Specialties', count: SPECIALTIES.filter(s => s.category === 'medical').length },
    { id: 'allied', label: 'Allied & Wellness Services', count: SPECIALTIES.filter(s => s.category === 'allied').length },
  ];

  const filteredSpecialties = SPECIALTIES.filter((sp) => {
    const matchesCategory = activeCategory === 'all' || sp.category === activeCategory;
    const matchesSearch = !searchQuery || 
      sp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.commonSymptoms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      sp.keyProcedures.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="specialties" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER & SEARCH CONSOLE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Comprehensive Clinical Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our 24+{' '}
              <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
                Clinical & Surgical Specialties
              </span>
            </h2>
            <p className="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Led by board-certified senior consultants, surgeons, and specialists equipped with modern minimally invasive, laser, and organ-sparing techniques.
            </p>

            {/* Quick Stats Pill Strip */}
            <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center space-x-1.5 bg-white/90 border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>24 Multi-Specialties</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white/90 border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#0077e6]" />
                <span>50+ Senior Consultants</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white/90 border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-sky-500" />
                <span>Zero-Wait Fast-Track OPD</span>
              </span>
            </div>
          </div>

          {/* Luxury Frosted Search Bar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search specialty, symptom or surgery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl pl-11 pr-10 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100/70 shadow-[0_2px_12px_rgba(8,31,61,0.04)] transition-all"
              />
              <Search className="w-4 h-4 text-sky-600 absolute left-4 top-3.5 group-focus-within:text-[#0077e6] transition-colors" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-xs transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Query Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Popular:</span>
              {POPULAR_QUERIES.map((q) => {
                const isSelected = searchQuery.toLowerCase() === q.toLowerCase();
                return (
                  <button
                    key={q}
                    onClick={() => setSearchQuery(isSelected ? '' : q)}
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500 text-white shadow-2xs'
                        : 'bg-white/80 hover:bg-sky-50 text-slate-600 hover:text-[#0077e6] border border-slate-200/70'
                    }`}
                  >
                    {q}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* CATEGORY TABS - Framer Motion Floating Segmented Pill */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100/80 backdrop-blur-md rounded-2xl border border-slate-200/70 w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center space-x-2 shrink-0 ${
                    isActive
                      ? 'text-[#0066cc]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSpecialtyTab"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/60"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                    isActive ? 'bg-sky-100 text-[#0066cc]' : 'bg-slate-200/80 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SPECIALTIES GRID */}
        {filteredSpecialties.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/80 rounded-3xl border border-slate-200 shadow-sm max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0077e6] flex items-center justify-center mx-auto mb-3.5">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No specialties matched "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching with symptoms like "stone", "dialysis", "knee", "chest" or clear filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-[#0077e6] to-[#0284c7] text-white rounded-xl text-xs font-bold shadow-sm cursor-pointer hover:shadow-md transition-all"
            >
              Reset Filters & Show All
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredSpecialties.map((sp) => {
                const meta = SPECIALTY_META[sp.id] || defaultMeta;
                const Icon = meta.icon;
                const isFeatured = sp.isKeyFocus;

                return (
                  <motion.div
                    key={sp.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${
                      isFeatured
                        ? 'bg-white/95 backdrop-blur-xl border border-sky-300/80 shadow-[0_4px_20px_-4px_rgba(0,119,230,0.12)] hover:shadow-[0_20px_45px_-10px_rgba(0,119,230,0.22)] ring-1 ring-sky-200/50'
                        : 'bg-white/95 backdrop-blur-xl border border-slate-200/80 hover:border-sky-300 shadow-[0_4px_20px_-4px_rgba(8,31,61,0.05)] hover:shadow-[0_20px_45px_-12px_rgba(0,119,230,0.16)]'
                    }`}
                  >
                    {/* Top Highlight Hairline for Key Specialties */}
                    {isFeatured && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-blue-600 to-cyan-400" />
                    )}

                    <div>
                      {/* Top Row: Emblems & Center of Excellence Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-108 group-hover:rotate-1 transition-all duration-300`}>
                          <Icon className="w-6 h-6 stroke-[2.2]" />
                        </div>

                        <div className="flex flex-col items-end space-y-1">
                          {isFeatured && (
                            <span className="inline-flex items-center space-x-1 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 text-[#0066cc] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                              <Sparkles className="w-3 h-3 text-sky-500" />
                              <span>Key Focus</span>
                            </span>
                          )}
                          {sp.availableDoctorsCount && (
                            <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-slate-500 bg-slate-50/80 px-2 py-0.5 rounded-md border border-slate-100">
                              <Users className="w-3 h-3 text-slate-400" />
                              <span>{sp.availableDoctorsCount} Specialists</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-[#0077e6] transition-colors tracking-tight">
                        {sp.name}
                      </h3>
                      <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block mt-1 line-clamp-1">
                        {sp.tagline}
                      </span>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3 mt-2.5 font-normal">
                        {sp.description}
                      </p>

                      {/* Common Conditions / Symptoms */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                            Common Symptoms Treated
                          </span>
                          <span className="text-[10px] font-semibold text-sky-600">
                            {sp.commonSymptoms.length}+ types
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {sp.commonSymptoms.slice(0, 3).map((sym, idx) => (
                            <span 
                              key={idx} 
                              className="bg-sky-50/70 hover:bg-sky-100/80 text-slate-700 text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-lg border border-sky-100/80 transition-colors"
                            >
                              {sym}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedSpecialty(sp)}
                        className="text-xs font-bold text-slate-600 hover:text-[#0077e6] transition-colors flex items-center space-x-1 cursor-pointer py-1.5 group/btn"
                      >
                        <span>Clinical Details</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-slate-400 group-hover/btn:text-[#0077e6]" />
                      </button>

                      <button
                        onClick={() => onOpenAppointmentModal(sp.id)}
                        className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-[0_4px_12px_rgba(0,119,230,0.22)] hover:shadow-[0_6px_18px_rgba(0,119,230,0.32)] transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95 group/book"
                      >
                        <span>Book Specialist</span>
                        <ArrowRight className="w-3 h-3 group-hover/book:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* SPECIALTY DEEP-DIVE MODAL */}
        <AnimatePresence>
          {selectedSpecialty && (() => {
            const meta = SPECIALTY_META[selectedSpecialty.id] || defaultMeta;
            const Icon = meta.icon;
            const deptDocs = DOCTORS.filter(d => d.departmentId === selectedSpecialty.id);

            return (
              <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
                >
                  <button
                    onClick={() => setSelectedSpecialty(null)}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                  >
                    ✕
                  </button>

                  {/* Header */}
                  <div className="flex items-center space-x-3.5 mb-5">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${meta.gradient} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900">Department of {selectedSpecialty.name}</h3>
                      <p className="text-xs text-[#0077e6] font-bold uppercase tracking-wider">{selectedSpecialty.tagline}</p>
                    </div>
                  </div>

                  <div className="space-y-5 text-sm text-slate-700">
                    <p className="leading-relaxed bg-slate-50/80 p-4 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-600">
                      {selectedSpecialty.description}
                    </p>

                    {/* Symptoms Treated */}
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                        <Activity className="w-3.5 h-3.5 text-sky-600" />
                        <span>When should you consult this department?</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedSpecialty.commonSymptoms.map((sym, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs bg-sky-50/50 p-2.5 rounded-xl border border-sky-100/70">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0077e6] shrink-0 mt-0.5" />
                            <span className="text-slate-800 font-medium">{sym}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Procedures */}
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                        <Award className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Key Diagnostic & Surgical Procedures</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedSpecialty.keyProcedures.map((proc, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/70">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-slate-800 font-medium">{proc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Department Doctors */}
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0077e6]" />
                        <span>Department Senior Consultants</span>
                      </h4>
                      {deptDocs.length > 0 ? (
                        <div className="space-y-2.5">
                          {deptDocs.map(doc => (
                            <div key={doc.id} className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-sky-300 transition-all">
                              <div className="flex items-center space-x-3">
                                <img src={doc.image} alt={doc.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-sky-100" />
                                <div>
                                  <h5 className="font-bold text-xs sm:text-sm text-slate-900">{doc.name}</h5>
                                  <p className="text-[11px] text-slate-500 font-medium">{doc.qualification}</p>
                                  <span className="text-[10px] text-sky-600 font-bold">{doc.experienceYears}+ Yrs Experience</span>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setSelectedSpecialty(null);
                                  onOpenAppointmentModal(selectedSpecialty.id, doc.id);
                                }}
                                className="px-3.5 py-1.5 bg-gradient-to-r from-[#0077e6] to-[#0284c7] hover:from-[#0066cc] hover:to-[#0284c7] text-white rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                              >
                                Book Slot
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-slate-800">Senior Faculty & On-Duty Consultants</p>
                            <p className="text-[11px] text-slate-500">OPD consultations available daily 9:00 AM - 8:00 PM</p>
                          </div>
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                            Available Daily
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA Bar */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-end gap-2.5">
                      <button
                        onClick={() => setSelectedSpecialty(null)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer transition-colors"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          const id = selectedSpecialty.id;
                          setSelectedSpecialty(null);
                          onOpenAppointmentModal(id);
                        }}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white text-xs font-bold shadow-[0_4px_14px_rgba(0,119,230,0.25)] cursor-pointer transition-all"
                      >
                        Book Appointment in {selectedSpecialty.name}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
};
