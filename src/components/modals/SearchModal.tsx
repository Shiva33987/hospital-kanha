import React, { useState, useEffect, useRef } from 'react';
import { Search, X, User, Activity, Sparkles, Building, Award, ArrowRight } from 'lucide-react';
import { DOCTORS, SPECIALTIES, FACILITIES, HEALTH_PACKAGES } from '../../data/hospitalData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctor: (departmentId: string, doctorId: string) => void;
  onSelectSpecialty: (specialtyId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDoctor,
  onSelectSpecialty,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedDoctors = q ? DOCTORS.filter(d => 
    d.name.toLowerCase().includes(q) || 
    d.specialty.toLowerCase().includes(q) ||
    d.qualification.toLowerCase().includes(q)
  ) : [];

  const matchedSpecialties = q ? SPECIALTIES.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.tagline.toLowerCase().includes(q) ||
    s.commonSymptoms.some(sym => sym.toLowerCase().includes(q)) ||
    s.keyProcedures.some(p => p.toLowerCase().includes(q))
  ) : [];

  const matchedFacilities = q ? FACILITIES.filter(f =>
    f.title.toLowerCase().includes(q) ||
    f.subtitle.toLowerCase().includes(q) ||
    f.description.toLowerCase().includes(q)
  ) : [];

  const matchedPackages = q ? HEALTH_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.targetAudience.toLowerCase().includes(q)
  ) : [];

  const hasResults = matchedDoctors.length > 0 || matchedSpecialties.length > 0 || matchedFacilities.length > 0 || matchedPackages.length > 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center space-x-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-hospital-blue shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search doctors, specialties, treatments (e.g. kidney stone, dialysis, CT scan)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 focus:outline-none placeholder-slate-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {!q ? (
            /* POPULAR SUGGESTIONS */
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Kidney Stones (RIRS Laser)',
                  'Dialysis 24/7',
                  'High-Res CT Scan',
                  'Modular Laminar OTs',
                  'Prostate Laser Surgery',
                  'Emergency Ambulance',
                  'Cashless Insurance TPA',
                  'Master Health Checkup',
                ].map((term, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(term)}
                    className="bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-hospital-blue border border-slate-200 hover:border-hospital-sky px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : !hasResults ? (
            /* NO RESULTS */
            <div className="text-center py-10 space-y-2">
              <p className="text-slate-500 text-sm font-semibold">No direct matches for "{query}".</p>
              <p className="text-xs text-slate-400">
                Try searching for departments like Urology, Nephrology, Orthopedics, or contact reception at 9091445566.
              </p>
            </div>
          ) : (
            /* MATCHED ITEMS */
            <div className="space-y-5">
              
              {/* Doctors Matches */}
              {matchedDoctors.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Specialist Doctors ({matchedDoctors.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedDoctors.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => {
                          onClose();
                          onSelectDoctor(doc.departmentId, doc.id);
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-hospital-sky hover:bg-sky-50/50 flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div className="flex items-center space-x-3">
                          <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <h5 className="font-bold text-xs sm:text-sm text-hospital-navy group-hover:text-hospital-blue">{doc.name}</h5>
                            <p className="text-[11px] text-slate-500">{doc.specialty}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-hospital-blue flex items-center space-x-1">
                          <span>Book Slot</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties Matches */}
              {matchedSpecialties.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Clinical Specialties ({matchedSpecialties.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedSpecialties.map((sp) => (
                      <div
                        key={sp.id}
                        onClick={() => {
                          onClose();
                          onSelectSpecialty(sp.id);
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-hospital-sky hover:bg-sky-50/50 flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div>
                          <h5 className="font-bold text-xs sm:text-sm text-hospital-navy group-hover:text-hospital-blue">{sp.name}</h5>
                          <p className="text-[11px] text-slate-500">{sp.tagline}</p>
                        </div>
                        <span className="text-xs font-bold text-hospital-blue flex items-center space-x-1">
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Facilities Matches */}
              {matchedFacilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>Facilities & Services ({matchedFacilities.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedFacilities.map((fac) => (
                      <div
                        key={fac.id}
                        onClick={() => {
                          onClose();
                          const el = document.getElementById('facilities');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-hospital-sky hover:bg-sky-50/50 flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div className="flex items-center space-x-3">
                          <img src={fac.image} alt={fac.title} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <h5 className="font-bold text-xs sm:text-sm text-hospital-navy group-hover:text-hospital-blue">{fac.title}</h5>
                            <p className="text-[11px] text-slate-500">{fac.subtitle}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-hospital-blue">View Spec</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>Press ESC to close</span>
          <span>Kanha Hospitals Search Engine</span>
        </div>
      </div>
    </div>
  );
};

