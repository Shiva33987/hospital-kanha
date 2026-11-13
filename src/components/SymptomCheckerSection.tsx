import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  UserCheck, 
  Stethoscope,
  HeartPulse,
  Droplets,
  Flame,
  Brain,
  Bone,
  Zap,
  Clock,
  ShieldAlert,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { DOCTORS } from '../data/hospitalData';

interface SymptomCheckerProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const SymptomCheckerSection: React.FC<SymptomCheckerProps> = ({
  onOpenAppointmentModal,
}) => {
  const [activeTab, setActiveTab] = useState<'symptom-matcher' | 'kidney-calculator'>('symptom-matcher');

  // Symptom Matcher states
  const commonSymptoms = [
    {
      id: 'stone',
      label: 'Severe Flank / Back Pain',
      specialtyId: 'urology',
      specialtyName: 'Urology & Laser Stones',
      severity: 'Urgent',
      severityType: 'urgent',
      advice: 'Could indicate acute ureteric or kidney stone calculus. Immediate ultrasound/CT KUB and urology review advised.',
      doctorName: 'Dr. K. Ramakrishna Rao',
      doctorQual: 'MBBS, MS, M.Ch (Urology), DNB',
      doctorId: 'dr-k-ramakrishna',
      icon: Zap,
      gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    },
    {
      id: 'hematuria',
      label: 'Blood in Urine (Hematuria)',
      specialtyId: 'urology',
      specialtyName: 'Urology & Endourology',
      severity: 'Priority',
      severityType: 'priority',
      advice: 'Never ignore hematuria. Requires microscopic urine examination and urological evaluation to rule out stones or infection.',
      doctorName: 'Dr. K. Ramakrishna Rao',
      doctorQual: 'MBBS, MS, M.Ch (Urology), DNB',
      doctorId: 'dr-k-ramakrishna',
      icon: Droplets,
      gradient: 'from-cyan-500 via-teal-600 to-emerald-600',
    },
    {
      id: 'edema',
      label: 'Swollen Feet / Facial Puffiness',
      specialtyId: 'nephrology',
      specialtyName: 'Nephrology & Renal Care',
      severity: 'Moderate',
      severityType: 'moderate',
      advice: 'Fluid retention and proteinuria may point to impaired renal glomerular filtration. Check Serum Creatinine and KFT.',
      doctorName: 'Dr. Ananya Reddy',
      doctorQual: 'MBBS, MD, DM (Nephrology)',
      doctorId: 'dr-ananya-reddy',
      icon: HeartPulse,
      gradient: 'from-teal-500 via-emerald-600 to-green-600',
    },
    {
      id: 'chest-pain',
      label: 'Sudden Chest Heaviness / Squeezing',
      specialtyId: 'cardiology',
      specialtyName: 'Cardiology & Emergency Heart Care',
      severity: 'CRITICAL',
      severityType: 'critical',
      advice: 'Potential cardiac ischemia or acute coronary event. Rush to 24/7 emergency casualty immediately or call 9091445566.',
      doctorName: 'Dr. Vikramaditya Sharma',
      doctorQual: 'MBBS, MD, DM (Cardiology), FACC',
      doctorId: 'dr-vikram-sharma',
      icon: Flame,
      gradient: 'from-rose-500 via-red-500 to-pink-600',
    },
    {
      id: 'joint-pain',
      label: 'Knee Joint Stiffness & Grinding',
      specialtyId: 'orthopedics',
      specialtyName: 'Orthopedics & Joint Replacement',
      severity: 'Elective',
      severityType: 'elective',
      advice: 'Signs of osteoarthritis or cartilage degeneration. Digital X-ray and joint mobility assessment recommended.',
      doctorName: 'Dr. Suresh V. Patel',
      doctorQual: 'MBBS, MS (Ortho), M.Ch (Ortho, UK)',
      doctorId: 'dr-suresh-patel',
      icon: Bone,
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
    },
    {
      id: 'chronic-headache',
      label: 'Severe Recurrent Headaches / Numbness',
      specialtyId: 'neurology',
      specialtyName: 'Neurology & Brain Health',
      severity: 'Moderate',
      severityType: 'moderate',
      advice: 'Persistent headaches with visual aura or focal limb numbness warrant neurological screening and CT scan evaluation.',
      doctorName: 'Senior Consultant Neurologist',
      doctorQual: 'MBBS, MD, DM (Neurology)',
      doctorId: '',
      icon: Brain,
      gradient: 'from-violet-500 via-purple-600 to-indigo-600',
    },
  ];

  const [selectedSymptom, setSelectedSymptom] = useState(commonSymptoms[0]);

  // Lookup matched doctor object from DOCTORS dataset
  const consultantDoctor = DOCTORS.find(d => d.id === selectedSymptom.doctorId);

  // Kidney Risk Calculator State
  const [fluidIntake, setFluidIntake] = useState<'low' | 'medium' | 'high'>('low');
  const [stoneHistory, setStoneHistory] = useState<boolean>(true);
  const [saltyDiet, setSaltyDiet] = useState<boolean>(true);
  const [calcDone, setCalcDone] = useState<boolean>(false);

  const calculateKidneyScore = () => {
    setCalcDone(true);
  };

  const getKidneyRiskResult = () => {
    let score = 0;
    if (fluidIntake === 'low') score += 40;
    if (fluidIntake === 'medium') score += 15;
    if (stoneHistory) score += 35;
    if (saltyDiet) score += 25;

    if (score >= 60) {
      return {
        level: 'Elevated Risk of Kidney Stone & Crystal Formation',
        color: 'text-red-700 bg-red-50/80 border-red-200',
        badge: 'High Risk (Action Needed)',
        recommendation: 'Your daily hydration and metabolic profile significantly predispose you to renal stones. We recommend booking the Kanha Renal Screen (USG KUB + Creatinine) and consulting Dr. Ramakrishna Rao or Dr. Ananya Reddy.',
      };
    } else {
      return {
        level: 'Moderate / Healthy Baseline Risk',
        color: 'text-emerald-700 bg-emerald-50/80 border-emerald-200',
        badge: 'Moderate Risk',
        recommendation: 'Maintain your fluid intake at 2.5 to 3 liters daily. An annual urine and creatinine check is advised to ensure optimal renal filtration.',
      };
    }
  };

  return (
    <section id="symptom-matcher" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-b border-slate-200/80">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Smart Clinical Triage Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Find the Right Doctor in{' '}
            <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
              2 Clicks
            </span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Not sure which department to consult? Select what you are experiencing below for clinical guidance and immediate doctor appointment scheduling.
          </p>

          {/* Luxury Floating Segmented Tab Switcher */}
          <div className="inline-flex items-center bg-slate-100/80 backdrop-blur-md p-1.5 rounded-2xl mt-7 border border-slate-200/80 shadow-2xs">
            <button
              onClick={() => setActiveTab('symptom-matcher')}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'symptom-matcher'
                  ? 'text-[#0066cc]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'symptom-matcher' && (
                <motion.div
                  layoutId="activeTriageTab"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/60"
                />
              )}
              <span className="relative z-10 flex items-center space-x-1.5">
                <Stethoscope className="w-4 h-4" />
                <span>Symptom Matcher &amp; Doctor Finder</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kidney-calculator')}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'kidney-calculator'
                  ? 'text-[#0066cc]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'kidney-calculator' && (
                <motion.div
                  layoutId="activeTriageTab"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/60"
                />
              )}
              <span className="relative z-10 flex items-center space-x-1.5">
                <Activity className="w-4 h-4" />
                <span>Kidney &amp; Stone Health Calculator</span>
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: SYMPTOM MATCHER */}
        {activeTab === 'symptom-matcher' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Symptom selector chips */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between mb-1 px-1">
                <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Click a symptom you are experiencing:
                </span>
                <span className="text-[11px] font-semibold text-sky-600">
                  Instant Match
                </span>
              </div>

              {commonSymptoms.map((sym) => {
                const isSelected = selectedSymptom.id === sym.id;
                const Icon = sym.icon;

                return (
                  <motion.button
                    key={sym.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedSymptom(sym)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-250 flex items-center justify-between cursor-pointer group relative overflow-hidden ${
                      isSelected
                        ? 'bg-gradient-to-r from-sky-50 via-blue-50/50 to-white border-2 border-sky-400 shadow-[0_8px_25px_-6px_rgba(0,119,230,0.18)] ring-2 ring-sky-200/50'
                        : 'bg-white/90 hover:bg-slate-50/80 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    {/* Active hairline indicator */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0077e6] to-[#0ea5e9]" />
                    )}

                    <div className="flex items-center space-x-3.5 pl-1">
                      {/* Gradient Icon Badge */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold shrink-0 shadow-xs transition-transform duration-300 ${
                        isSelected 
                          ? `bg-gradient-to-br ${sym.gradient} text-white scale-105` 
                          : 'bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-[#0077e6]'
                      }`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      <div>
                        <h4 className={`font-extrabold text-sm sm:text-[15px] leading-snug transition-colors ${
                          isSelected ? 'text-slate-900' : 'text-slate-800 group-hover:text-[#0077e6]'
                        }`}>
                          {sym.label}
                        </h4>
                        <span className={`text-xs block mt-0.5 font-medium ${
                          isSelected ? 'text-[#0077e6] font-semibold' : 'text-slate-500'
                        }`}>
                          Matches: {sym.specialtyName}
                        </span>
                      </div>
                    </div>

                    {/* Right Check / Arrow */}
                    <div className="shrink-0 pl-2">
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-sky-100 border border-sky-300 text-[#0077e6] flex items-center justify-center shadow-2xs">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0077e6] group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right Column: Matched Specialty & Doctor Recommendation Card */}
            <div className="lg:col-span-7">
              <motion.div 
                key={selectedSymptom.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(8,31,61,0.08)] space-y-6 relative overflow-hidden"
              >
                {/* Top Ambient Gradient Hairline */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-blue-600 to-cyan-400" />
                
                {/* Top Badge & Specialty name */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      Recommended Clinical Department
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
                      {selectedSymptom.specialtyName}
                    </h3>
                  </div>

                  {/* High-Contrast Triage Severity Badges */}
                  <div>
                    {selectedSymptom.severityType === 'critical' ? (
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-red-50 text-red-700 border border-red-200 shadow-2xs flex items-center space-x-1.5 animate-pulse">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                        <span>Triage: CRITICAL</span>
                      </span>
                    ) : selectedSymptom.severityType === 'urgent' ? (
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Triage: URGENT</span>
                      </span>
                    ) : selectedSymptom.severityType === 'priority' ? (
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs flex items-center space-x-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                        <span>Triage: PRIORITY</span>
                      </span>
                    ) : (
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs flex items-center space-x-1.5">
                        <Activity className="w-3.5 h-3.5 text-sky-600" />
                        <span>Triage: MODERATE</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Medical Advice Box */}
                <div className="bg-gradient-to-br from-sky-50/60 to-blue-50/40 p-5 rounded-2xl border border-sky-100/90 shadow-2xs space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-[#0077e6] uppercase tracking-wider">
                    <Stethoscope className="w-4 h-4 text-sky-600" />
                    <span>Clinical Assessment &amp; Guidance:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {selectedSymptom.advice}
                  </p>
                </div>

                {/* Suggested Consultant Profile - Luxury Medical Glass Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-sky-50/40 to-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-sky-300 transition-all">
                  <div className="flex items-center space-x-3.5 text-center sm:text-left w-full sm:w-auto">
                    {consultantDoctor ? (
                      <img 
                        src={consultantDoctor.image} 
                        alt={selectedSymptom.doctorName} 
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-sky-200 shadow-xs shrink-0 mx-auto sm:mx-0" 
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#0077e6] flex items-center justify-center shrink-0 shadow-xs mx-auto sm:mx-0">
                        <UserCheck className="w-7 h-7" />
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0077e6] block">
                        Recommended Senior Consultant
                      </span>
                      <h4 className="font-extrabold text-base text-slate-900 mt-0.5">
                        {selectedSymptom.doctorName}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {selectedSymptom.doctorQual} • Kanha Hospitals
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAppointmentModal(selectedSymptom.specialtyId, selectedSymptom.doctorId || undefined)}
                    className="w-full sm:w-auto shrink-0 bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,119,230,0.25)] hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95 group"
                  >
                    <span>Book Specialist Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Footer Assistance */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-2 gap-2 border-t border-slate-100">
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Immediate hospital visit recommended if symptoms are acute.</span>
                  </span>
                  <a 
                    href="tel:9091445566" 
                    className="font-bold text-red-600 hover:text-red-700 hover:underline flex items-center space-x-1.5 shrink-0"
                  >
                    <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                    <span>24/7 Casualty: 9091445566</span>
                  </a>
                </div>

              </motion.div>
            </div>

          </div>
        )}

        {/* TAB 2: KIDNEY STONE & RENAL HEALTH CALCULATOR */}
        {activeTab === 'kidney-calculator' && (
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(8,31,61,0.08)]">
            
            <div className="flex items-center space-x-3.5 mb-7 pb-5 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Kanha Renal &amp; Kidney Stone Risk Assessment
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Evaluate your personal susceptibility to kidney stone formation and renal strain in 30 seconds.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              
              {/* Question 1: Water Intake */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  1. How much water / fluids do you drink daily?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'low', label: '< 1.5 Liters (Low)' },
                    { id: 'medium', label: '1.5 - 2.5 Liters' },
                    { id: 'high', label: '> 3 Liters (Optimal)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFluidIntake(opt.id as any)}
                      className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        fluidIntake === opt.id
                          ? 'bg-sky-50 text-[#0066cc] border-2 border-sky-400 shadow-2xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Stone History */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  2. Do you or an immediate family member have a history of kidney stones?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setStoneHistory(true)}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      stoneHistory
                        ? 'bg-sky-50 text-[#0066cc] border-2 border-sky-400 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Yes, past stone or family history
                  </button>
                  <button
                    type="button"
                    onClick={() => setStoneHistory(false)}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      !stoneHistory
                        ? 'bg-sky-50 text-[#0066cc] border-2 border-sky-400 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    No prior stone history
                  </button>
                </div>
              </div>

              {/* Question 3: Diet & Sodium */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  3. Do you consume a high-sodium (salty), high-protein, or packaged food diet?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSaltyDiet(true)}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      saltyDiet
                        ? 'bg-sky-50 text-[#0066cc] border-2 border-sky-400 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Yes, frequent salt / processed foods
                  </button>
                  <button
                    type="button"
                    onClick={() => setSaltyDiet(false)}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      !saltyDiet
                        ? 'bg-sky-50 text-[#0066cc] border-2 border-sky-400 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Balanced, low-salt diet
                  </button>
                </div>
              </div>

              {/* Calculate CTA */}
              <button
                onClick={calculateKidneyScore}
                className="w-full bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <span>Calculate My Renal Risk Score</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Results display */}
              {calcDone && (
                <div className={`p-6 rounded-2xl border space-y-3 animate-in zoom-in-95 duration-200 ${getKidneyRiskResult().color}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider">
                      Assessment Outcome:
                    </span>
                    <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-white/90 border shadow-2xs">
                      {getKidneyRiskResult().badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-black">{getKidneyRiskResult().level}</h4>
                  <p className="text-xs sm:text-sm leading-relaxed">{getKidneyRiskResult().recommendation}</p>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <button
                      onClick={() => onOpenAppointmentModal('urology', 'dr-k-ramakrishna')}
                      className="bg-gradient-to-r from-[#0077e6] to-[#0284c7] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
                    >
                      Book Consult with Dr. Ramakrishna Rao (Urology)
                    </button>
                    <button
                      onClick={() => onOpenAppointmentModal('health-checkup')}
                      className="bg-white text-[#0077e6] border border-sky-300 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-sky-50 transition-colors cursor-pointer shadow-2xs"
                    >
                      Book Comprehensive Renal Package (₹1,999)
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
