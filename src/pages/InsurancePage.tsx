import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare, 
  ChevronRight, 
  Search, 
  FileCheck2, 
  Clock, 
  Building2, 
  Sparkles,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface InsurancePageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const InsurancePage: React.FC<InsurancePageProps> = ({ 
  onBackToHome, 
  onOpenAppointmentModal 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const tpaList = [
    { name: 'Star Health & Allied Insurance', type: 'Private Insurer', preAuthTime: '30 mins' },
    { name: 'HDFC ERGO General Insurance', type: 'Private Insurer', preAuthTime: '30 mins' },
    { name: 'ICICI Lombard General Insurance', type: 'Private Insurer', preAuthTime: '30 mins' },
    { name: 'Care Health Insurance (Religare)', type: 'Standalone Health', preAuthTime: '45 mins' },
    { name: 'Niva Bupa Health Insurance (Max Bupa)', type: 'Standalone Health', preAuthTime: '30 mins' },
    { name: 'Bajaj Allianz General Insurance', type: 'Private Insurer', preAuthTime: '45 mins' },
    { name: 'Tata AIG General Insurance', type: 'Private Insurer', preAuthTime: '45 mins' },
    { name: 'Aditya Birla Health Insurance', type: 'Standalone Health', preAuthTime: '30 mins' },
    { name: 'SBI General Insurance', type: 'PSU / Private', preAuthTime: '45 mins' },
    { name: 'Medi Assist Insurance TPA', type: 'TPA Network', preAuthTime: '30 mins' },
    { name: 'Paramount Health Services TPA', type: 'TPA Network', preAuthTime: '30 mins' },
    { name: 'Vidal Health Insurance TPA', type: 'TPA Network', preAuthTime: '30 mins' },
    { name: 'Family Health Plan Insurance TPA (FHPL)', type: 'TPA Network', preAuthTime: '30 mins' },
    { name: 'MDIndia Health Insurance TPA', type: 'TPA Network', preAuthTime: '45 mins' },
    { name: 'Heritage Health Insurance TPA', type: 'TPA Network', preAuthTime: '45 mins' },
    { name: 'Raksha Health Insurance TPA', type: 'TPA Network', preAuthTime: '45 mins' },
    { name: 'Vipul Medcorp Insurance TPA', type: 'TPA Network', preAuthTime: '45 mins' },
    { name: 'Health India Insurance TPA', type: 'TPA Network', preAuthTime: '45 mins' },
    { name: 'Universal Sompo General Insurance', type: 'Private Insurer', preAuthTime: '60 mins' },
    { name: 'IFFCO Tokio General Insurance', type: 'Private Insurer', preAuthTime: '60 mins' },
    { name: 'National Insurance Company', type: 'PSU Insurer', preAuthTime: '60 mins' },
    { name: 'New India Assurance Company', type: 'PSU Insurer', preAuthTime: '60 mins' },
    { name: 'Oriental Insurance Company', type: 'PSU Insurer', preAuthTime: '60 mins' },
    { name: 'United India Insurance Company', type: 'PSU Insurer', preAuthTime: '60 mins' },
  ];

  const filteredTPAs = tpaList.filter(tpa => 
    tpa.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tpa.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <span className="text-slate-800 font-semibold">Cashless Insurance & 50+ Empaneled TPAs</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001744] via-[#00246a] to-[#00388c] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • Dedicated TPA & Insurance Wing</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Hassle-Free 100% Cashless Hospitalization
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              We are empaneled with over 50 leading private health insurance companies and Third-Party Administrators (TPAs) for laser stone surgery, dialysis, proctology, orthopedics, and emergency admissions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">50+ TPAs</div>
                <div className="text-slate-300 text-xs">Direct Cashless Desk</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">30 Mins</div>
                <div className="text-slate-300 text-xs">Average Pre-Auth Turnaround</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">24/7 Desk</div>
                <div className="text-slate-300 text-xs">Casualty Pre-Auth Active</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">0% Hassle</div>
                <div className="text-slate-300 text-xs">End-to-End Paperwork Help</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Cashless Works: Step-by-Step */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">How Cashless Hospitalization Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#00246a] font-black text-sm flex items-center justify-center mb-4">01</div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Show Insurance Card & ID</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Visit our TPA desk on Ground Floor with patient’s Health Insurance E-card/Policy copy, Aadhaar card, and Doctor’s admission advice slip.
            </p>
            <div className="text-[11px] text-slate-500 font-medium">Planned admissions: Submit 48 hours prior for early pre-approval.</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#00246a] font-black text-sm flex items-center justify-center mb-4">02</div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Fast Pre-Authorization</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Our insurance team coordinates directly with your TPA to transmit diagnosis and medical records, obtaining initial approval in ~30–45 minutes.
            </p>
            <div className="text-[11px] text-slate-500 font-medium">Zero stress: Our desk manages all digital filings and queries.</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#00246a] font-black text-sm flex items-center justify-center mb-4">03</div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Cashless Discharge</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              At discharge, final hospital bills and clinical summaries are transmitted. Once the final authorization is signed, you pay only non-medical items.
            </p>
            <div className="text-[11px] text-slate-500 font-medium">Original bills and claims portfolio handed over for record.</div>
          </div>
        </div>
      </section>

      {/* Searchable TPAs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Empaneled Insurance & TPA Partners</h3>
              <p className="text-xs text-slate-500">Check if your insurance card is accepted at Kanha Hospitals</p>
            </div>

            {/* Search filter */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search insurance or TPA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#00246a]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTPAs.map((tpa, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/40 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] font-bold text-[#00246a]">{tpa.type}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1">{tpa.name}</h4>
                <div className="text-[11px] text-slate-400">Pre-Auth: {tpa.preAuthTime}</div>
              </div>
            ))}
          </div>

          {/* Direct Helpdesk Card */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Don't see your insurance listed?</h4>
              <p className="text-xs text-slate-600">
                Call our 24/7 Cashless TPA Coordinator to verify your policy eligibility or reimbursement assistance.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a 
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="px-5 py-2.5 rounded-full bg-[#00246a] text-white text-xs font-bold hover:bg-[#001744] transition-all flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {HOSPITAL_INFO.phoneFormatted}</span>
              </a>
              <a 
                href="https://wa.me/919091445566?text=Hi,%20I%20have%20a%20question%20about%20my%20health%20insurance%20cashless%20pre-auth"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

