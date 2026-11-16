import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ChevronRight, 
  Stethoscope, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2,
  Activity,
  AlertCircle
} from 'lucide-react';
import { CLINICAL_CONDITIONS, ALPHABET_LIST, ClinicalCondition } from '../data/diseasesData';

interface DiseasesConditionsSectionProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string, slot?: string) => void;
  onOpenEmergencyModal?: () => void;
}

export const DiseasesConditionsSection: React.FC<DiseasesConditionsSectionProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
}) => {
  // Start with null by default: section does NOT show conditions until the user presses an alphabet button or searches
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCondition, setActiveCondition] = useState<ClinicalCondition | null>(null);

  const hasUserInteracted = selectedLetter !== null || searchQuery.trim().length > 0;

  // Filter conditions based on search query or selected alphabet letter
  const filteredConditions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      return CLINICAL_CONDITIONS.filter(c => 
        c.name.toLowerCase().includes(query) ||
        c.specialtyName.toLowerCase().includes(query) ||
        c.overview.toLowerCase().includes(query) ||
        c.symptoms.some(s => s.toLowerCase().includes(query)) ||
        c.treatment.some(t => t.toLowerCase().includes(query))
      );
    }

    if (selectedLetter && selectedLetter !== 'ALL') {
      return CLINICAL_CONDITIONS.filter(c => c.letter.toUpperCase() === selectedLetter.toUpperCase());
    }

    if (selectedLetter === 'ALL') {
      return CLINICAL_CONDITIONS;
    }

    return [];
  }, [searchQuery, selectedLetter]);

  const handleLetterClick = (letter: string) => {
    setSearchQuery('');
    if (selectedLetter === letter) {
      // Toggle off if clicking the already active letter
      setSelectedLetter(null);
      setActiveCondition(null);
    } else {
      setSelectedLetter(letter);
      setActiveCondition(null);
    }
  };

  const handleClearFilter = () => {
    setSearchQuery('');
    setSelectedLetter(null);
    setActiveCondition(null);
  };

  const handleSelectCondition = (condition: ClinicalCondition) => {
    setActiveCondition(condition);
  };

  return (
    <section 
      id="diseases-conditions" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#e8f1fc] via-[#f4f8fe] to-[#eaf2fc] relative overflow-hidden border-y border-blue-200/70"
    >
      {/* Ambient Decorative Blue Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[350px] bg-blue-200/35 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            TOP MAIN SECTION: LEFT HERO INFO + RIGHT SEARCH CARD
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
          
          {/* LEFT COLUMN: EDITORIAL AUTHORITY HEADER */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#041b53] shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>Medical Resource Center</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#041b53] tracking-tight leading-[1.12]">
              Diseases <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#041b53] via-[#00246a] to-[#0052cc] bg-clip-text text-transparent">
                &amp; Conditions
              </span>
            </h2>

            {/* Navy Hairline Accent Rule */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#041b53] to-[#0052cc] rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
              Access globally-verified clinical insights into conditions, symptoms, evidence-based treatments, and senior specialist patient care protocols at Kanha Hospitals.
            </p>

            {/* Quick Clinical Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0052cc]" />
                <span>100+ Verified Conditions</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Evidence-Based Protocols</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Activity className="w-4 h-4 text-[#041b53]" />
                <span>Zero-Wait Specialist OPD</span>
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: CLINICAL SEARCH & A-Z CARD */}
          <div className="lg:col-span-6">
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_12px_36px_-8px_rgba(4,27,83,0.08)] relative overflow-hidden group">
              
              {/* Top Subtle Brand Navy Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#041b53] via-[#0052cc] to-[#0284c7]" />

              <div className="text-center mb-5">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#041b53] tracking-tight">
                  Clinical Search
                </h3>
                <div className="w-8 h-0.5 bg-slate-200 rounded-full mx-auto mt-1.5" />
              </div>

              {/* Search Bar Input */}
              <div className="relative mb-5 group/search">
                <Search className="w-4 h-4 text-slate-400 group-focus-within/search:text-[#0052cc] absolute left-4 top-3.5 transition-colors pointer-events-none" />
                <input
                  type="text"
                  placeholder="Symptoms, Conditions..."
                  value={searchQuery}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSearchQuery(val);
                    if (val.trim()) {
                      setSelectedLetter('ALL');
                    } else {
                      setSelectedLetter(null);
                    }
                  }}
                  className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200/90 rounded-2xl pl-11 pr-10 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-4 focus:ring-sky-100/80 shadow-2xs transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearFilter}
                    className="absolute right-3.5 top-3 w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-xs cursor-pointer transition-colors"
                    title="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Alphabet Browser */}
              <div>
                <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500 text-center mb-3">
                  Browse by Alphabet
                </div>

                <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedLetter === 'ALL') {
                        setSelectedLetter(null);
                      } else {
                        setSelectedLetter('ALL');
                        setSearchQuery('');
                      }
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                      selectedLetter === 'ALL' && !searchQuery
                        ? 'bg-[#041b53] text-white shadow-xs scale-105 ring-2 ring-[#0052cc]/30'
                        : 'bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-[#041b53]'
                    }`}
                  >
                    All
                  </button>

                  {ALPHABET_LIST.map((letter) => {
                    const isSelected = selectedLetter === letter && !searchQuery;
                    return (
                      <button
                        key={letter}
                        type="button"
                        onClick={() => handleLetterClick(letter)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? 'bg-[#041b53] text-white shadow-md scale-110 ring-2 ring-[#0052cc]/40 font-extrabold'
                            : 'bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-[#041b53] hover:scale-105'
                        }`}
                        title={`Browse conditions starting with ${letter}`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================
            MIDDLE SECTION: CONDITIONS FOUND TRAY (4-COLUMN GRID)
            ONLY SHOWN WHEN THE USER HAS PRESSED A BUTTON OR SEARCHED!
           ======================================================== */}
        <AnimatePresence>
          {hasUserInteracted && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-[0_8px_30px_-6px_rgba(4,27,83,0.06)] mb-8"
            >
              {/* Header of Drawer */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#0052cc]" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#041b53]">
                    {filteredConditions.length} Conditions Found
                    {selectedLetter && selectedLetter !== 'ALL' && !searchQuery && ` (Letter "${selectedLetter}")`}
                    {searchQuery && ` for "${searchQuery}"`}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleClearFilter}
                  className="text-xs font-bold text-slate-500 hover:text-[#041b53] cursor-pointer transition-colors flex items-center space-x-1"
                >
                  <span>Clear Filter</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 4-Column Responsive Grid */}
              {filteredConditions.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-72 sm:max-h-80 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                  {filteredConditions.map((condition) => {
                    const isActive = activeCondition?.id === condition.id;
                    return (
                      <button
                        key={condition.id}
                        type="button"
                        onClick={() => handleSelectCondition(condition)}
                        className={`p-3 rounded-2xl text-left text-xs font-medium transition-all duration-200 flex items-center justify-between group cursor-pointer border ${
                          isActive
                            ? 'bg-blue-50/90 border-[#0052cc] text-[#041b53] shadow-xs font-bold ring-2 ring-[#0052cc]/20'
                            : 'bg-white hover:bg-sky-50/60 border-slate-200/80 hover:border-sky-300 text-slate-800 hover:text-[#041b53]'
                        }`}
                      >
                        <span className="truncate pr-2">{condition.name}</span>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                          isActive 
                            ? 'text-[#0052cc] translate-x-0.5' 
                            : 'text-slate-400 group-hover:text-[#0052cc] group-hover:translate-x-0.5'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-700">No conditions found for this filter</p>
                  <p className="text-xs text-slate-500 mt-1">Try another letter or search keyword like "stones", "fever", "chest pain", or click "All".</p>
                  <button
                    type="button"
                    onClick={handleClearFilter}
                    className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            BOTTOM EXPANDABLE SECTION: VERIFIED CLINICAL INSIGHT
           ======================================================== */}
        <AnimatePresence>
          {activeCondition && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-xl border border-blue-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_16px_45px_-10px_rgba(4,27,83,0.12)] relative overflow-hidden mb-4"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#041b53] via-[#0052cc] to-[#0284c7]" />

              {/* Header with Close Button */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#0052cc] mb-1">
                    Verified Clinical Insight
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#041b53] tracking-tight">
                    {activeCondition.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    Specialty: <span className="text-[#041b53] font-bold">{activeCondition.specialtyName}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCondition(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close Clinical Insight"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Columns: OVERVIEW | SYMPTOMS | TREATMENT */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 pb-6 border-b border-slate-100">
                
                {/* 1. OVERVIEW */}
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Overview
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeCondition.overview}
                  </p>
                </div>

                {/* 2. SYMPTOMS */}
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Symptoms
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {activeCondition.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0052cc] mt-1.5 shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. TREATMENT */}
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Treatment
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {activeCondition.treatment.map((treatment, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#041b53] mt-1.5 shrink-0" />
                        <span>{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Action Strip */}
              <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0052cc] border border-sky-100 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span>Specialized care under <strong className="text-[#041b53] font-bold">{activeCondition.specialistTitle}</strong></span>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  {activeCondition.urgency === 'emergency' && onOpenEmergencyModal && (
                    <button
                      type="button"
                      onClick={onOpenEmergencyModal}
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition-all cursor-pointer"
                    >
                      Emergency 24/7 Helpline
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      onOpenAppointmentModal(activeCondition.departmentId);
                    }}
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#041b53] via-[#00246a] to-[#0052cc] hover:from-[#001744] hover:to-[#041b53] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                  >
                    <span>Consult Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
