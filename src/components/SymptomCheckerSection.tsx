import React, { useState } from 'react';
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
  Droplet,
  Flame,
  Brain,
  Bone
} from 'lucide-react';
import { SPECIALTIES, DOCTORS } from '../data/hospitalData';

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
      severityColor: 'bg-amber-100 text-amber-800 border-amber-300',
      advice: 'Could indicate acute ureteric or kidney stone calculus. Immediate ultrasound/CT KUB and urology review advised.',
      doctorName: 'Dr. K. Ramakrishna Rao (M.Ch Urology)',
      doctorId: 'dr-k-ramakrishna',
      icon: Activity,
    },
    {
      id: 'hematuria',
      label: 'Blood in Urine (Hematuria)',
      specialtyId: 'urology',
      specialtyName: 'Urology & Endourology',
      severity: 'Priority',
      severityColor: 'bg-red-100 text-red-800 border-red-300',
      advice: 'Never ignore hematuria. Requires microscopic urine examination and urological evaluation to rule out stones or infection.',
      doctorName: 'Dr. K. Ramakrishna Rao',
      doctorId: 'dr-k-ramakrishna',
      icon: Droplet,
    },
    {
      id: 'edema',
      label: 'Swollen Feet / Facial Puffiness',
      specialtyId: 'nephrology',
      specialtyName: 'Nephrology & Renal Care',
      severity: 'Moderate',
      severityColor: 'bg-sky-100 text-sky-800 border-sky-300',
      advice: 'Fluid retention and proteinuria may point to impaired renal glomerular filtration. Check Serum Creatinine and KFT.',
      doctorName: 'Dr. Ananya Reddy (DM Nephrology)',
      doctorId: 'dr-ananya-reddy',
      icon: HeartPulse,
    },
    {
      id: 'chest-pain',
      label: 'Sudden Chest Heaviness / Squeezing',
      specialtyId: 'cardiology',
      specialtyName: 'Cardiology & Emergency Heart Care',
      severity: 'CRITICAL',
      severityColor: 'bg-red-600 text-white border-red-700 animate-pulse',
      advice: 'Potential cardiac ischemia or acute coronary event. Rush to 24/7 emergency casualty immediately or call 9091445566.',
      doctorName: 'Dr. Vikramaditya Sharma (DM Cardiology)',
      doctorId: 'dr-vikram-sharma',
      icon: Flame,
    },
    {
      id: 'joint-pain',
      label: 'Knee Joint Stiffness & Grinding',
      specialtyId: 'orthopedics',
      specialtyName: 'Orthopedics & Joint Replacement',
      severity: 'Elective',
      severityColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      advice: 'Signs of osteoarthritis or cartilage degeneration. Digital X-ray and joint mobility assessment recommended.',
      doctorName: 'Dr. Suresh V. Patel (MS Ortho, UK Fellow)',
      doctorId: 'dr-suresh-patel',
      icon: Bone,
    },
    {
      id: 'chronic-headache',
      label: 'Severe Recurrent Headaches / Numbness',
      specialtyId: 'neurology',
      specialtyName: 'Neurology & Brain Health',
      severity: 'Moderate',
      severityColor: 'bg-purple-100 text-purple-800 border-purple-300',
      advice: 'Persistent headaches with visual aura or focal limb numbness warrant neurological screening and CT scan evaluation.',
      doctorName: 'Consultant Neurologist',
      doctorId: '',
      icon: Brain,
    },
  ];

  const [selectedSymptom, setSelectedSymptom] = useState(commonSymptoms[0]);

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
        color: 'text-red-600 bg-red-50 border-red-200',
        badge: 'High Risk (Action Needed)',
        recommendation: 'Your daily hydration and metabolic profile significantly predispose you to renal stones. We recommend booking the Kanha Renal Screen (USG KUB + Creatinine) and consulting Dr. Ramakrishna Rao or Dr. Ananya Reddy.',
      };
    } else {
      return {
        level: 'Moderate / Healthy Baseline Risk',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badge: 'Moderate Risk',
        recommendation: 'Maintain your fluid intake at 2.5 to 3 liters daily. An annual urine and creatinine check is advised to ensure optimal renal filtration.',
      };
    }
  };

  return (
    <section id="symptom-matcher" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-hospital-blue" />
            <span>Smart Clinical Guidance System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
            Find the Right Doctor in 2 Clicks
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Not sure which department to consult? Select what you are experiencing below for clinical guidance and immediate doctor appointment scheduling.
          </p>

          {/* Tool switch tabs */}
          <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-2xl mt-6 border border-slate-200/80">
            <button
              onClick={() => setActiveTab('symptom-matcher')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'symptom-matcher'
                  ? 'bg-hospital-navy text-white shadow-md'
                  : 'text-slate-600 hover:text-hospital-navy'
              }`}
            >
              Symptom Matcher & Doctor Finder
            </button>
            <button
              onClick={() => setActiveTab('kidney-calculator')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'kidney-calculator'
                  ? 'bg-hospital-navy text-white shadow-md'
                  : 'text-slate-600 hover:text-hospital-navy'
              }`}
            >
              Kidney & Stone Health Calculator
            </button>
          </div>
        </div>

        {/* TAB 1: SYMPTOM MATCHER */}
        {activeTab === 'symptom-matcher' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Symptom selector chips */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                Click a symptom you are experiencing:
              </span>

              {commonSymptoms.map((sym) => {
                const isSelected = selectedSymptom.id === sym.id;
                const Icon = sym.icon;
                return (
                  <button
                    key={sym.id}
                    onClick={() => setSelectedSymptom(sym)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                      isSelected
                        ? 'bg-gradient-to-r from-hospital-navy to-hospital-blue text-white shadow-md border-transparent ring-2 ring-hospital-sky/40'
                        : 'bg-slate-50 hover:bg-white text-slate-700 hover:text-hospital-navy border-slate-200/80 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-white text-hospital-blue shadow-sm'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm leading-snug">{sym.label}</h4>
                        <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-sky-200' : 'text-slate-400'}`}>
                          Matches: {sym.specialtyName}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-hospital-sky' : 'text-slate-400 group-hover:translate-x-1'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Matched Specialty & Doctor Recommendation Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
                
                {/* Top Badge & Specialty name */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Recommended Department</span>
                    <h3 className="text-2xl font-black text-hospital-navy mt-1">
                      {selectedSymptom.specialtyName}
                    </h3>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${selectedSymptom.severityColor}`}>
                    Triage Level: {selectedSymptom.severity}
                  </span>
                </div>

                {/* Medical Advice Box */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-hospital-blue uppercase tracking-wider">
                    <Stethoscope className="w-4 h-4" />
                    <span>Clinical Assessment & Recommendation:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {selectedSymptom.advice}
                  </p>
                </div>

                {/* Suggested Consultant Profile */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-hospital-navy to-hospital-navyLight text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-3.5 text-center sm:text-left">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-hospital-sky shrink-0">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-hospital-sky block">Recommended Consultant</span>
                      <h4 className="font-extrabold text-base text-white">{selectedSymptom.doctorName}</h4>
                      <p className="text-[11px] text-slate-300">Kanha Hospitals • Kompally, Hyderabad</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAppointmentModal(selectedSymptom.specialtyId, selectedSymptom.doctorId || undefined)}
                    className="shrink-0 bg-hospital-sky hover:bg-sky-400 text-hospital-navy px-5 py-2.5 rounded-xl font-extrabold text-xs shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>Book Specialist Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Immediate hospital visit recommended if symptoms are acute.</span>
                  <a href={`tel:9091445566`} className="font-bold text-red-600 hover:underline">
                    24/7 Emergency Line: 9091445566
                  </a>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: KIDNEY STONE & RENAL HEALTH CALCULATOR */}
        {activeTab === 'kidney-calculator' && (
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
            
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-hospital-navy text-white flex items-center justify-center shrink-0">
                <Droplet className="w-6 h-6 text-hospital-sky" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-hospital-navy">
                  Kanha Renal & Kidney Stone Risk Assessment
                </h3>
                <p className="text-xs text-slate-500">
                  Evaluate your personal susceptibility to kidney stone formation and renal strain in 30 seconds.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              
              {/* Question 1: Water Intake */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. How much water / fluids do you drink daily?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'low', label: '< 1.5 Liters (Low)' },
                    { id: 'medium', label: '1.5 - 2.5 Liters' },
                    { id: 'high', label: '> 3 Liters (Optimal)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFluidIntake(opt.id as any)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        fluidIntake === opt.id
                          ? 'bg-hospital-navy text-white border-hospital-navy shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Stone History */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Do you or an immediate family member have a history of kidney stones?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setStoneHistory(true)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      stoneHistory
                        ? 'bg-hospital-navy text-white border-hospital-navy shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Yes, past stone or family history
                  </button>
                  <button
                    type="button"
                    onClick={() => setStoneHistory(false)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      !stoneHistory
                        ? 'bg-hospital-navy text-white border-hospital-navy shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    No prior stone history
                  </button>
                </div>
              </div>

              {/* Question 3: Diet & Sodium */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Do you consume a high-sodium (salty), high-protein, or packaged food diet?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSaltyDiet(true)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      saltyDiet
                        ? 'bg-hospital-navy text-white border-hospital-navy shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Yes, frequent salt / processed foods
                  </button>
                  <button
                    type="button"
                    onClick={() => setSaltyDiet(false)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      !saltyDiet
                        ? 'bg-hospital-navy text-white border-hospital-navy shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Balanced, low-salt diet
                  </button>
                </div>
              </div>

              {/* Calculate CTA */}
              <button
                onClick={calculateKidneyScore}
                className="w-full bg-hospital-navy hover:bg-hospital-blue text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
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
                    <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-white/80 border">
                      {getKidneyRiskResult().badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-black">{getKidneyRiskResult().level}</h4>
                  <p className="text-xs sm:text-sm leading-relaxed">{getKidneyRiskResult().recommendation}</p>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <button
                      onClick={() => onOpenAppointmentModal('urology', 'dr-k-ramakrishna')}
                      className="bg-hospital-navy text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-hospital-blue transition-colors cursor-pointer"
                    >
                      Book Consult with Dr. Ramakrishna Rao (Urology)
                    </button>
                    <button
                      onClick={() => onOpenAppointmentModal('health-checkup')}
                      className="bg-white text-hospital-navy border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
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
