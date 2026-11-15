import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  FileText, 
  Send,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface EducationPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onBackToHome }) => {
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
          <span className="text-slate-800 font-semibold">Medical Education & Academic Academy</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001744] via-[#00246a] to-[#00388c] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • Academic & Clinical Training Wing</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Advancing Medical Education, DNB & Surgical Fellowships
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Empowering next-generation surgeons, physicians, and nurses through hands-on laser urology mentorship, simulation labs, hemodialysis training, and National Board accredited residencies.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">DNB / DrNB</div>
                <div className="text-slate-300 text-xs">Accredited Programs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">1-Year</div>
                <div className="text-slate-300 text-xs">Laser Urology Fellowship</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">Dialysis Tech</div>
                <div className="text-slate-300 text-xs">Hands-On Academy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">Monthly</div>
                <div className="text-slate-300 text-xs">Live CME Workshops</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">Flagship Academic Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00246a] flex items-center justify-center font-bold mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Laser Endourology & RIRS Fellowship</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Intensive 12-month clinical fellowship for MS/DNB General Surgeons and young urologists. Comprehensive mastery of 100W Holmium laser, flexible ureteroscopy, PCNL access, and laser prostate enucleation (HoLEP).
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Hands-on wet lab & live OT mentoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Over 500+ cases procedural exposure</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Dialysis Technology Certification</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Comprehensive 2-year diploma in Hemodialysis & CRRT technology. Trains paramedical students on Fresenius 4008/5008 automated machines, dual-pass RO plants, dialyzer reprocessing, and vascular access cannulation.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% placement record in hospital units</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Stipend-backed clinical internships</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Critical Care & OT Nursing Academy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Specialized certification for BSc / GNM nurses focusing on mechanical ventilation, arterial line monitoring, modular OT laminar flow sterility protocols, and emergency triage stabilization.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>AHA-accredited BLS & ACLS certifications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mentorship under senior ICU intensivists</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Inquiries Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">Academic & Fellowship Inquiries</h3>
            <p className="text-xs text-slate-500">Contact the Academic Director for admission guidelines and seat availability</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Academic admissions coordinator will contact you.'); }} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Applicant Name *</label>
              <input type="text" required placeholder="Full Name" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input type="tel" required placeholder="98XXXXXXXX" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Current Qualification *</label>
                <input type="text" required placeholder="e.g. MBBS, MS, BSc Nursing" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Program of Interest *</label>
              <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50">
                <option>Laser Endourology & RIRS Fellowship (1 Year)</option>
                <option>Dialysis Technology Diploma (2 Years)</option>
                <option>Critical Care Nursing Certification (6 Months)</option>
                <option>Upcoming CME Workshops & Live Surgeries</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3.5 rounded-full bg-[#00246a] text-white font-bold text-sm hover:bg-[#001744] transition-all cursor-pointer">
              Submit Academic Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

