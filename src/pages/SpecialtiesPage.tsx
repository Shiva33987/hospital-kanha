import React, { useState } from 'react';
import { 
  Activity, 
  Droplet, 
  UserCheck, 
  Heart, 
  Brain, 
  Bone, 
  Scissors, 
  Ambulance, 
  Search, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Flame,
  Stethoscope
} from 'lucide-react';
import { SPECIALTIES, Specialty, HOSPITAL_INFO } from '../data/hospitalData';

interface SpecialtiesPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({ 
  onBackToHome, 
  onOpenAppointmentModal 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'surgical' | 'medical'>('all');

  const filteredSpecialties = SPECIALTIES.filter((sp) => {
    const matchesCategory = activeCategory === 'all' || sp.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      sp.name.toLowerCase().includes(query) ||
      sp.description.toLowerCase().includes(query) ||
      sp.tagline.toLowerCase().includes(query) ||
      sp.commonSymptoms?.some(s => s.toLowerCase().includes(query)) ||
      sp.keyProcedures?.some(p => p.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const getSpecialtyIcon = (id: string) => {
    switch (id) {
      case 'urology': return <Activity className="w-6 h-6 text-sky-500" />;
      case 'nephrology': return <Droplet className="w-6 h-6 text-cyan-500" />;
      case 'andrology': return <UserCheck className="w-6 h-6 text-indigo-500" />;
      case 'cardiology': return <Heart className="w-6 h-6 text-rose-500" />;
      case 'neurology': return <Brain className="w-6 h-6 text-purple-500" />;
      case 'orthopedics': return <Bone className="w-6 h-6 text-amber-500" />;
      case 'laparoscopy': return <Scissors className="w-6 h-6 text-emerald-500" />;
      default: return <Stethoscope className="w-6 h-6 text-blue-500" />;
    }
  };

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
          <span className="text-slate-800 font-semibold">Centres of Excellence & Clinical Specialties</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#041b53] via-[#00246a] to-[#010d29] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • Super-Specialty Healthcare</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Centres of Excellence & Clinical Specialties
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Internationally benchmarked super-specialty care combining 100W Holmium laser precision, 24/7 dedicated hemodialysis, and compassionate surgical outcomes in Hyderabad.
            </p>

            {/* Search Box */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search procedures, symptoms (e.g. kidney stone, hernia, knee replacement)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 shadow-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#00246a] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Disciplines ({SPECIALTIES.length})
          </button>
          <button
            onClick={() => setActiveCategory('core')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'core'
                ? 'bg-[#00246a] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Core Focus (Urology, Nephrology, Andrology)
          </button>
          <button
            onClick={() => setActiveCategory('surgical')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'surgical'
                ? 'bg-[#00246a] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Surgical Disciplines
          </button>
          <button
            onClick={() => setActiveCategory('medical')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'medical'
                ? 'bg-[#00246a] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Medical Disciplines & Diagnostics
          </button>
        </div>
      </div>

      {/* Specialties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSpecialties.map((sp) => (
            <div 
              key={sp.id}
              className={`bg-white rounded-3xl border transition-all duration-200 p-6 flex flex-col justify-between shadow-md hover:shadow-xl ${
                sp.isKeyFocus ? 'border-cyan-300 ring-2 ring-cyan-400/20' : 'border-slate-200/80'
              }`}
            >
              <div>
                {/* Header Icon + Focus Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner">
                    {getSpecialtyIcon(sp.id)}
                  </div>
                  {sp.isKeyFocus && (
                    <span className="text-[11px] font-bold text-[#00246a] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      Signature Institute
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{sp.name}</h3>
                <div className="text-xs font-semibold text-cyan-700 mb-3">{sp.tagline}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {sp.description}
                </p>

                {/* Key Procedures */}
                {sp.keyProcedures && sp.keyProcedures.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Interventions & Tech</div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {sp.keyProcedures.slice(0, 3).map((proc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {sp.availableDoctorsCount ? `${sp.availableDoctorsCount} Senior Consultants` : 'Daily OPD Active'}
                </span>
                <button
                  onClick={() => onOpenAppointmentModal(sp.id)}
                  className="px-4 py-2 rounded-full bg-[#00246a] hover:bg-[#001744] text-white text-xs font-bold shadow-md hover:shadow-blue-900/20 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book OPD</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

