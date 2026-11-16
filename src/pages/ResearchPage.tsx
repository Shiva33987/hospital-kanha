import React from 'react';
import { 
  FlaskConical, 
  FileText, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Microscope,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface ResearchPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onBackToHome }) => {
  const publications = [
    {
      journal: 'Indian Journal of Urology (IJU)',
      year: '2026',
      title: 'Comparative Efficacy of High-Power 100W Holmium:YAG vs SuperPulse Thulium Fiber Laser in Lower Pole Renal Calculi Clearance',
      authors: 'Dr. Rajesh Sharma, Dr. V. Narayana et al.',
      impact: 'Cited in 38 international clinical reviews'
    },
    {
      journal: 'Journal of Clinical Nephrology & Renal Care',
      year: '2025',
      title: 'Solute Clearance and Beta-2 Microglobulin Reduction in Online Hemodiafiltration Using Dual-Pass Ultra-Pure Reverse Osmosis',
      authors: 'Dr. P. Venkat Reddy, Dr. S. K. Gupta',
      impact: 'Gold Standard Protocol adopted in 20+ centres'
    },
    {
      journal: 'International Andrology & Microsurgery Annals',
      year: '2025',
      title: 'Outcomes of Sub-Inguinal Microsurgical Varicocelectomy with Testicular Artery Preservation in Severe Oligoasthenoteratozoospermia',
      authors: 'Dr. M. S. Rao, Clinical Research Group',
      impact: 'Peer-reviewed clinical outcome study'
    }
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
          <span className="text-slate-800 font-semibold">Clinical Research & Publications</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#041b53] via-[#00246a] to-[#010d29] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • Research & Innovation Directorate</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Translating Clinical Science Into Patient Healing
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Our clinical investigators conduct pioneering research in laser stone physics, biocompatible stent coatings, and diabetic kidney disease progression registered with the ICMR & CDSCO.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">25+</div>
                <div className="text-slate-300 text-xs">Published Papers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">ICMR / CDSCO</div>
                <div className="text-slate-300 text-xs">Ethics Registered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">5,000+</div>
                <div className="text-slate-300 text-xs">Stone Registry Cohort</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">GCP Trained</div>
                <div className="text-slate-300 text-xs">Principal Investigators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Research Initiatives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">Active Clinical Research Initiatives</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#00246a] flex items-center justify-center font-bold mb-4">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">North Hyderabad Urolithiasis Registry</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              A comprehensive prospective registry studying urinary metabolic profiles, infrared spectroscopy stone composition, and water TDS correlations in over 5,000 surgical patients.
            </p>
            <div className="text-[11px] text-slate-400 font-medium">Status: Active Multi-Year Longitudinal Trial</div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold mb-4">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Diabetic Nephropathy Early Biomarkers</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Investigating urinary Podocalyxin and NGAL as ultra-early microvascular damage markers before conventional microalbuminuria manifests in Type-2 diabetic patients.
            </p>
            <div className="text-[11px] text-slate-400 font-medium">Status: Phase-II Observational Biomarker Study</div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Laser HoLEP vs En-Bloc Laser Resection</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Randomized comparative study analyzing catheterization duration, post-void dribbling incidence, and retro-grade ejaculation prevention techniques.
            </p>
            <div className="text-[11px] text-slate-400 font-medium">Status: Data Analysis & Manuscript Preparation</div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
            <BookOpen className="w-6 h-6 text-[#00246a]" />
            <div>
              <h3 className="text-xl font-bold text-slate-900">Recent Peer-Reviewed Publications</h3>
              <p className="text-xs text-slate-500">Research papers published in indexed international medical journals</p>
            </div>
          </div>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/30 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-[#00246a] bg-blue-100/60 px-2.5 py-0.5 rounded-full">
                    {pub.journal}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{pub.year}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">{pub.title}</h4>
                <div className="text-xs text-slate-600 mb-2">Authors: {pub.authors}</div>
                <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{pub.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

