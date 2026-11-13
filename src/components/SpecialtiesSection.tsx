import React, { useState } from 'react';
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
  Droplet, 
  Smile, 
  Wind, 
  TrendingDown, 
  Ear, 
  Sparkle, 
  Shield, 
  Feather, 
  Sun,
  X
} from 'lucide-react';
import { SPECIALTIES, Specialty, DOCTORS } from '../data/hospitalData';

interface SpecialtiesSectionProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'surgical' | 'medical' | 'allied'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

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
    <section id="specialties" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-sky-100/80 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Clinical Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
              Our 24+ Clinical & Surgical Specialties
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Led by board-certified senior consultants, surgeons, and specialists with modern minimally invasive, laser, and organ-sparing techniques.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              placeholder="Search specialty, symptom or surgery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
          {[
            { id: 'all', label: 'All 24 Specialties' },
            { id: 'core', label: 'Key Focus (Urology, Nephrology, ICU)' },
            { id: 'surgical', label: 'Surgical & Minimally Invasive' },
            { id: 'medical', label: 'Medical Super-Specialties' },
            { id: 'allied', label: 'Allied & Wellness Services' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-hospital-navy text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-hospital-navy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SPECIALTIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((sp) => {
            const isFeatured = sp.isKeyFocus;
            return (
              <div
                key={sp.id}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-white border ${
                  isFeatured 
                    ? 'border-sky-300 shadow-md ring-1 ring-sky-200/50 bg-gradient-to-b from-sky-50/30 to-white' 
                    : 'border-slate-100 shadow-soft hover:shadow-hover hover:border-hospital-sky/40'
                }`}
              >
                {/* Featured Flag */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-hospital-blue to-hospital-sky text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">
                    Key Specialty
                  </div>
                )}

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm ${
                      isFeatured ? 'bg-gradient-to-br from-hospital-navy to-hospital-blue' : 'bg-hospital-navyLight'
                    }`}>
                      <Activity className="w-5 h-5 text-hospital-sky" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-hospital-navy group-hover:text-hospital-blue transition-colors">
                        {sp.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-hospital-sky uppercase tracking-wider block">
                        {sp.tagline}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mt-2">
                    {sp.description}
                  </p>

                  {/* Common symptoms badges */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Common Symptoms Treated:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sp.commonSymptoms.slice(0, 3).map((sym, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-600 text-[10px] px-2 py-0.5 rounded-md border border-slate-100">
                          {sym}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSpecialty(sp)}
                    className="text-xs font-bold text-slate-600 hover:text-hospital-blue transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View Care Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenAppointmentModal(sp.id)}
                    className="bg-hospital-navy group-hover:bg-hospital-blue text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm transition-all flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Book Specialist</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SPECIALTY DEEP-DIVE MODAL */}
        {selectedSpecialty && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-hospital-navy text-white flex items-center justify-center">
                  <Activity className="w-6 h-6 text-hospital-sky" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-hospital-navy">Department of {selectedSpecialty.name}</h3>
                  <p className="text-xs text-hospital-blue font-bold uppercase tracking-wider">{selectedSpecialty.tagline}</p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-slate-700">
                <p className="leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedSpecialty.description}
                </p>

                <div>
                  <h4 className="font-bold text-hospital-navy text-xs uppercase tracking-wider mb-2">When should you consult this department?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSpecialty.commonSymptoms.map((sym, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs bg-red-50/50 p-2 rounded-lg border border-red-100/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-slate-800">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-hospital-navy text-xs uppercase tracking-wider mb-2">Key Diagnostic & Surgical Procedures</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSpecialty.keyProcedures.map((proc, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-hospital-blue shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium">{proc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Doctors for this Specialty */}
                <div>
                  <h4 className="font-bold text-hospital-navy text-xs uppercase tracking-wider mb-2">Department Consultants</h4>
                  <div className="space-y-2">
                    {DOCTORS.filter(d => d.departmentId === selectedSpecialty.id).map(doc => (
                      <div key={doc.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white">
                        <div className="flex items-center space-x-3">
                          <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <h5 className="font-bold text-xs text-hospital-navy">{doc.name}</h5>
                            <p className="text-[11px] text-slate-500">{doc.qualification}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedSpecialty(null);
                            onOpenAppointmentModal(selectedSpecialty.id, doc.id);
                          }}
                          className="px-3 py-1.5 bg-hospital-navy hover:bg-hospital-blue text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                        >
                          Book Slot
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedSpecialty(null)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const id = selectedSpecialty.id;
                      setSelectedSpecialty(null);
                      onOpenAppointmentModal(id);
                    }}
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-hospital-navy to-hospital-blue text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Book Appointment in {selectedSpecialty.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

