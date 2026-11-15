import React, { useState } from 'react';
import { 
  Globe, 
  Plane, 
  FileCheck2, 
  Languages, 
  Building2, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  Send,
  HeartHandshake
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface InternationalPatientsPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const InternationalPatientsPage: React.FC<InternationalPatientsPageProps> = ({ 
  onBackToHome, 
  onOpenAppointmentModal 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    country: 'United Arab Emirates',
    whatsapp: '',
    email: '',
    specialty: 'urology',
    medicalHistory: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const countries = [
    'United Arab Emirates', 'Oman', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain',
    'Kenya', 'Tanzania', 'Nigeria', 'Ethiopia', 'Uganda', 'Bangladesh', 'Nepal', 
    'Sri Lanka', 'United Kingdom', 'United States', 'Canada', 'Other Country'
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
          <span className="text-slate-800 font-semibold">International Patient Services</span>
        </nav>
      </div>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001744] via-[#00246a] to-[#00388c] text-white p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 top-10 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-5">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>International Medical Tourism & Care Concierge</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
              World-Class Surgical Care & Concierge for Global Patients
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed mb-8">
              Recognized worldwide for advanced 100W Holmium laser kidney stone clearance, 24/7 hemodialysis, and male reproductive microsurgery in Hyderabad, India — delivered with dedicated personal care coordinators.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">24 Hours</div>
                <div className="text-slate-300 text-xs">Visa Invitation Letter</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">Free HYD</div>
                <div className="text-slate-300 text-xs">Airport VIP Transfer</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">4+ Languages</div>
                <div className="text-slate-300 text-xs">Arabic, French, Swahili</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">70% Less</div>
                <div className="text-slate-300 text-xs">Cost vs Western Clinics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Patient Journey: 4 Simple Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Seamless 4-Stage International Pathway</h2>
          <p className="text-xs sm:text-sm text-slate-600">From your first remote inquiry to post-discharge recovery back home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00246a] font-black text-sm flex items-center justify-center mb-4">01</div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Digital Second Opinion</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Upload your CT/MRI scans and lab reports. Our senior department head reviews your case and issues a transparent treatment plan & estimate within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00246a] font-black text-sm flex items-center justify-center mb-4">02</div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Medical Visa & Flights</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We provide official Embassy Visa Invitation Letters for patient and attendants, assist with ticket bookings, and verify all travel health guidelines.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00246a] font-black text-sm flex items-center justify-center mb-4">03</div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Arrival & Treatment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chauffeur pickup from Hyderabad Airport (HYD) to private hospital suites. Multilingual coordinator assigned for seamless doctor consults & procedure.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00246a] font-black text-sm flex items-center justify-center mb-4">04</div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Fit-to-Fly & Tele-Care</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive discharge summary in English, fit-to-fly airline medical certificates, medicine supply, and scheduled virtual follow-ups back home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl text-center">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Inquiry Submitted Successfully</h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-6">
                  Dear <span className="font-semibold text-slate-900">{formData.fullName}</span>, our International Patient Liaison has received your case and will message you on WhatsApp ({formData.whatsapp}) within 6 hours.
                </p>
                <div className="inline-block bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8 text-left max-w-md w-full">
                  <div className="text-xs text-slate-500 font-medium">Assigned Officer</div>
                  <div className="text-base font-bold text-[#00246a]">Kanha Global Patient Desk (Dr. Irfan & Sarah)</div>
                  <div className="text-xs text-slate-500 mt-1">Direct Liaison: +91 90914 45566</div>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
                <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00246a] flex items-center justify-center font-bold">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Request Second Opinion & Cost Quote</h2>
                    <p className="text-xs sm:text-sm text-slate-500">Free clinical evaluation with our senior surgical heads</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name (As on Passport) *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Ahmed Al-Mansoor"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Country of Residence *</label>
                      <select 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                      >
                        {countries.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp / Phone Number (With Country Code) *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+971 50 XXXXXXX"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="patient@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Primary Treatment Needed *</label>
                    <select 
                      value={formData.specialty}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50 font-medium"
                    >
                      <option value="urology">Laser Kidney Stone Clearance (RIRS / PCNL)</option>
                      <option value="prostate">Laser Prostate Enucleation (HoLEP / TURP)</option>
                      <option value="dialysis">24/7 Renal Medicine & Vacation Dialysis</option>
                      <option value="andrology">Male Infertility & Microsurgical TESE</option>
                      <option value="laparoscopy">3D Laparoscopic & GI Surgery</option>
                      <option value="orthopedics">Computer-Navigated Joint Replacement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Describe Condition & Current Symptoms *</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder="Please mention stone size, diagnosis, prior surgeries, or medications..."
                      value={formData.medicalHistory}
                      onChange={(e) => setFormData({...formData, medicalHistory: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#00246a] hover:bg-[#001744] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-[#00246a]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit for Free Second Opinion & Cost Estimate</span>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Sidebar: Concierge Features & Direct WhatsApp */}
          <div className="space-y-6">
            
            {/* Direct WhatsApp Concierge Card */}
            <div className="bg-gradient-to-br from-[#00875a] to-[#006e49] text-white rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-100">Instant Chat</div>
                  <div className="text-lg font-bold">WhatsApp Concierge Desk</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-emerald-50 mb-5 leading-relaxed">
                Connect directly with our International Patient Coordinator for immediate queries, medical visa letters, or estimate inquiries.
              </p>
              <a 
                href="https://wa.me/919091445566?text=Hello%20Kanha%20Hospitals,%20I%20am%20an%20international%20patient%20inquiring%20about%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white text-[#006e49] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:bg-emerald-50 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 90914 45566)</span>
              </a>
            </div>

            {/* Exclusive Global Amenities List */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00246a]" />
                <span>Included Global Patient Services</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Complimentary airport pickup & drop in private AC car</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Assistance with Indian Medical Visa (V-Visa) processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dedicated language interpreter throughout hospital stay</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hotel and service apartment booking assistance near Kompally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Local SIM card, currency exchange & FRRO registration help</span>
                </li>
              </ul>
            </div>

            {/* Direct Phone Helpline */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800">
              <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">24/7 International Desk</div>
              <div className="text-xl font-bold mb-2">+91 90914 45566</div>
              <p className="text-xs text-slate-300">
                Operating round the clock for urgent inquiries across all international time zones.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

