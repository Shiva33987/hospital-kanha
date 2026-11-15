import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  CreditCard, 
  Download, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  ArrowRight,
  Clock,
  Send,
  Lock
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface EServicesPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenReportsModal: () => void;
}

export const EServicesPage: React.FC<EServicesPageProps> = ({ 
  onBackToHome, 
  onOpenAppointmentModal,
  onOpenReportsModal 
}) => {
  const [activeTab, setActiveTab] = useState<'reports' | 'tele' | 'billing'>('reports');
  const [uhid, setUhid] = useState('');
  const [mobile, setMobile] = useState('');
  const [reportResults, setReportResults] = useState(false);

  const handleSearchReports = (e: React.FormEvent) => {
    e.preventDefault();
    if (uhid || mobile) {
      setReportResults(true);
    }
  };

  const sampleReports = [
    { id: 'REP-9021', name: 'Renal Function Test (RFT) & Serum Creatinine', date: '14 Nov 2026', doctor: 'Dr. P. Venkat Reddy', status: 'Verified & Ready' },
    { id: 'REP-9018', name: 'Ultrasound KUB (Kidney, Ureter, Bladder)', date: '12 Nov 2026', doctor: 'Dr. Rajesh Sharma', status: 'Verified & Ready' },
    { id: 'REP-8994', name: 'Complete Urine Examination (CUE) & Culture', date: '10 Nov 2026', doctor: 'Dr. Rajesh Sharma', status: 'Verified & Ready' },
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
          <span className="text-slate-800 font-semibold">Digital e-Services & Patient Portal</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001744] via-[#00246a] to-[#00388c] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • 24/7 Digital Patient Portal</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Instant Access to Lab Reports, Tele-OPD & Online Billing
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Download your clinical lab test results, schedule video tele-consultations with senior doctors, and pay hospital invoices securely from any device.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'reports' ? 'bg-white text-slate-950 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Download Lab Reports
              </button>
              <button
                onClick={() => setActiveTab('tele')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'tele' ? 'bg-white text-slate-950 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Tele-Consultation
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'billing' ? 'bg-white text-slate-950 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Pay Bill Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: DOWNLOAD LAB REPORTS */}
        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00246a] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Patient Diagnostic Report Portal</h2>
                  <p className="text-xs text-slate-500">Enter your Mobile Number or Patient UHID to view pathology & radiology reports</p>
                </div>
              </div>

              <form onSubmit={handleSearchReports} className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Registered Mobile Number *</label>
                    <input 
                      type="tel" 
                      placeholder="98XXXXXXXX" 
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Patient UHID (e.g. KH-10928)</label>
                    <input 
                      type="text" 
                      placeholder="KH-XXXXX" 
                      value={uhid}
                      onChange={(e) => setUhid(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#00246a] hover:bg-[#001744] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Fetch Diagnostic Reports</span>
                </button>
              </form>

              {/* Sample / Fetched Reports List */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Recent Diagnostic Reports</span>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>NABL Accredited Laboratory</span>
                  </span>
                </div>

                <div className="space-y-3">
                  {sampleReports.map((rep) => (
                    <div 
                      key={rep.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-blue-50/30 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold font-mono text-[#00246a] bg-blue-100/60 px-2 py-0.5 rounded">
                            {rep.id}
                          </span>
                          <span className="text-xs text-slate-400">{rep.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{rep.name}</h4>
                        <div className="text-xs text-slate-500">Authorized by: {rep.doctor}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => alert(`Downloading PDF report: ${rep.name}`)}
                          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#00246a] text-slate-800 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-[#00246a]" />
                          <span>Download PDF</span>
                        </button>
                        <a 
                          href={`https://wa.me/919091445566?text=Please%20send%20report%20${rep.id}%20to%20my%20WhatsApp`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                          title="Send to WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Help Box */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#00246a]" />
                  <span>Secure & Private Access</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  All clinical reports are cryptographically signed by authorized pathologists and radiologists. Reports remain encrypted and accessible 24/7.
                </p>
                <div className="text-xs text-slate-500 font-medium">Need past scan DICOM CD? Collect in-person at Department of Radiology, Ground Floor.</div>
              </div>

              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800">
                <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">Helpdesk Support</div>
                <h4 className="text-base font-bold mb-2">Can't find your report?</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Call our Central Diagnostic Reception desk directly for instant report lookup or dispatch.
                </p>
                <a 
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="w-full py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {HOSPITAL_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TELE-CONSULTATION */}
        {activeTab === 'tele' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl max-w-3xl mx-auto">
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Virtual Tele-Consultation with Specialists</h2>
                <p className="text-xs text-slate-500">Consult with senior Kanha consultants from the comfort of your home</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className="w-8 h-8 rounded-full bg-[#00246a] text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">1</div>
                <h4 className="font-bold text-slate-900 text-xs mb-1">Book Virtual Slot</h4>
                <p className="text-[11px] text-slate-500">Pick preferred specialist & video timing</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className="w-8 h-8 rounded-full bg-[#00246a] text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">2</div>
                <h4 className="font-bold text-slate-900 text-xs mb-1">Receive Secure Link</h4>
                <p className="text-[11px] text-slate-500">Video room URL sent via WhatsApp & SMS</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className="w-8 h-8 rounded-full bg-[#00246a] text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">3</div>
                <h4 className="font-bold text-slate-900 text-xs mb-1">Digital e-Prescription</h4>
                <p className="text-[11px] text-slate-500">Instant PDF prescription signed by doctor</p>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => onOpenAppointmentModal()}
                className="px-8 py-4 rounded-full bg-[#00246a] hover:bg-[#001744] text-white font-bold text-sm shadow-xl hover:shadow-[#00246a]/30 transition-all cursor-pointer"
              >
                Schedule Video Tele-Consultation Now
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: PAY BILL ONLINE */}
        {activeTab === 'billing' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Online Hospital Bill Payment</h2>
                <p className="text-xs text-slate-500">Pay OPD consultation fees, advance deposits, or pharmacy bills</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Redirecting to secure bank gateway...'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Patient UHID or Inpatient IP No. *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. KH-10928 or IP-4029" 
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Payment For *</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50 font-medium">
                  <option>OPD Consultation Fee (₹600)</option>
                  <option>Dialysis Session Token (₹1,500)</option>
                  <option>Inpatient Admission Advance Deposit</option>
                  <option>Diagnostic Lab & Scan Tests</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Amount (₹ INR) *</label>
                <input 
                  type="number" 
                  required
                  placeholder="Enter amount" 
                  defaultValue={600}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50 font-bold"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl transition-all cursor-pointer"
              >
                Proceed to Secure UPI / Card Payment
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

