import React, { useState } from 'react';
import { 
  Building2, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Upload, 
  ShieldCheck, 
  UserCheck, 
  Stethoscope, 
  Ambulance, 
  HeartHandshake,
  Sparkles,
  ChevronRight,
  Send,
  AlertCircle
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface ReferralPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

export const ReferralPage: React.FC<ReferralPageProps> = ({ onBackToHome, onOpenAppointmentModal }) => {
  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    doctorPhone: '',
    doctorEmail: '',
    doctorRegNo: '',
    patientName: '',
    patientAge: '',
    patientGender: 'male',
    patientPhone: '',
    specialty: 'urology',
    urgency: 'urgent',
    clinicalNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `REF-KANHA-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackingId(generatedId);
    setSubmitted(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      {/* Breadcrumbs & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500">
          <button 
            onClick={onBackToHome}
            className="hover:text-[#00246a] transition-colors flex items-center gap-1 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-semibold">Doctor & Clinical Referral Portal</span>
        </nav>
      </div>

      {/* Hero Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001744] via-[#00246a] to-[#00388c] text-white p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl">
          {/* Subtle background ambient patterns */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 top-10 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • Physician & Clinical Referral Desk</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
              Doctor-to-Doctor Patient Referral & Transfer Portal
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed mb-8">
              Fast-track urgent admissions, minimally invasive laser surgical cases, 24/7 dialysis beds, and advanced ICU care. We ensure seamless clinical continuity and transparent back-referral reports.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">15 Mins</div>
                <div className="text-slate-300 text-xs">Emergency Triage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">24/7 Beds</div>
                <div className="text-slate-300 text-xs">Dialysis & ICU Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">100% Loop</div>
                <div className="text-slate-300 text-xs">Back-Referral Feedback</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg sm:text-xl">50+ TPAs</div>
                <div className="text-slate-300 text-xs">Cashless Pre-Auth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Form + Urgent Hotline Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Left 2 Cols: Form or Submission Confirmation */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Referral Successfully Registered</h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-6">
                  Thank you, Dr. <span className="font-semibold text-slate-900">{formData.doctorName}</span>. Your patient <span className="font-semibold text-slate-900">{formData.patientName}</span> has been queued for fast-track clinical evaluation.
                </p>

                <div className="inline-block bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 text-left max-w-md w-full">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Referral Reference ID</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#00246a]">{trackingId}</div>
                  <div className="text-xs text-emerald-700 font-medium mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Assigned to: Senior Patient Coordinator & On-Duty Consultant
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-rose-600/30 transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Casualty Desk Immediately</span>
                  </a>
                  <button 
                    onClick={() => { setSubmitted(false); }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all cursor-pointer"
                  >
                    Submit Another Referral
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
                <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00246a] flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Clinical Referral Submission</h2>
                    <p className="text-xs sm:text-sm text-slate-500">Provide case summary for physician-to-physician coordination</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Referring Doctor Section */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#00246a] mb-3 flex items-center gap-1.5">
                      <Stethoscope className="w-4 h-4" />
                      <span>1. Referring Practitioner Details</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Doctor Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Dr. Rajesh Sharma, MBBS, MS" 
                          value={formData.doctorName}
                          onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Hospital / Clinic / Nursing Home Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Sharma Kidney Care Clinic, Suchitra" 
                          value={formData.clinicName}
                          onChange={(e) => setFormData({...formData, clinicName: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Doctor Mobile (for case updates) *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="98XXXXXXXX" 
                          value={formData.doctorPhone}
                          onChange={(e) => setFormData({...formData, doctorPhone: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Medical Council Reg. No. (Optional)</label>
                        <input 
                          type="text" 
                          placeholder="TSMC/12345" 
                          value={formData.doctorRegNo}
                          onChange={(e) => setFormData({...formData, doctorRegNo: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Patient Details */}
                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#00246a] mb-3 flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4" />
                      <span>2. Patient Information</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Patient Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Patient full name" 
                          value={formData.patientName}
                          onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Age & Gender *</label>
                        <div className="flex gap-2">
                          <input 
                            type="number" 
                            required 
                            placeholder="Age" 
                            value={formData.patientAge}
                            onChange={(e) => setFormData({...formData, patientAge: e.target.value})}
                            className="w-20 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                          />
                          <select 
                            value={formData.patientGender}
                            onChange={(e) => setFormData({...formData, patientGender: e.target.value})}
                            className="flex-1 px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Patient Contact Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="Patient or attendant mobile number" 
                        value={formData.patientPhone}
                        onChange={(e) => setFormData({...formData, patientPhone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Specialty and Clinical Details */}
                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#00246a] mb-3 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>3. Referral Specialty & Urgency</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Referred Department *</label>
                        <select 
                          value={formData.specialty}
                          onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50 font-medium"
                        >
                          <option value="urology">Urology & Laser Stone Center</option>
                          <option value="nephrology">Nephrology & 24/7 Dialysis</option>
                          <option value="andrology">Andrology & Men's Health</option>
                          <option value="emergency">Emergency & Critical Care (ICU)</option>
                          <option value="orthopedics">Orthopedics & Joint Replacement</option>
                          <option value="laparoscopy">Advanced Laparoscopy & GI Surgery</option>
                          <option value="cardiology">Cardiology & Cardiac Care</option>
                          <option value="general_medicine">General Medicine & Diabetology</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Urgency Level *</label>
                        <select 
                          value={formData.urgency}
                          onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50 font-semibold"
                        >
                          <option value="emergency">EMERGENCY (Immediate Bed / OT Dispatch)</option>
                          <option value="urgent">URGENT (Admission within 24 Hours)</option>
                          <option value="routine">Routine Specialist OPD Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Provisional Diagnosis / Clinical Summary *</label>
                      <textarea 
                        required 
                        rows={3}
                        placeholder="e.g. 45M with left ureteric calculus (12mm) with hydronephrosis and severe colic, creatinine 1.4 mg/dL. Referred for urgent RIRS / DJ Stenting."
                        value={formData.clinicalNotes}
                        onChange={(e) => setFormData({...formData, clinicalNotes: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00246a] text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#00246a] hover:bg-[#001744] text-white font-bold text-base shadow-xl hover:shadow-[#00246a]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Patient Referral Instantly</span>
                    </button>
                    <p className="text-[11.5px] text-slate-400 text-center mt-3">
                      By submitting, our on-duty Medical Superintendent & Senior Triage Officer will contact your clinic within 15 minutes.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Col: 24/7 Hotlines & Clinician Commitment */}
          <div className="space-y-6">
            
            {/* Direct Casualty Hotline Box */}
            <div className="bg-gradient-to-br from-rose-600 to-rose-700 text-white rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <Ambulance className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-rose-100">Direct Hotline</div>
                  <div className="text-lg font-bold">24/7 Casualty & Triage</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-rose-100 mb-5 leading-relaxed">
                For unstable patients or immediate ICU transfer from Kompally, Medchal, Alwal, or Suchitra Circle:
              </p>
              <a 
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="w-full py-3 px-4 rounded-xl bg-white text-rose-700 font-extrabold text-base flex items-center justify-center gap-2 shadow-md hover:bg-rose-50 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {HOSPITAL_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Why Refer to Kanha Hospitals Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00246a]" />
                <span>Our Referral Commitments</span>
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Delays:</strong> Immediate bed reservation for urgent renal colic, urinary retention, and sepsis cases.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Closed-Loop Feedback:</strong> Detailed operative notes, discharge summaries, and post-op care plans emailed back to you.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cashless TPA Helpdesk:</strong> Hassle-free pre-authorization with 50+ insurance companies to minimize out-of-pocket stress.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Back-Referral Guarantee:</strong> Patients are directed back to their primary physician for continued maintenance and chronic care.</span>
                </li>
              </ul>
            </div>

            {/* Quick OPD Appointment CTA */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800">
              <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">Direct Patient Booking</div>
              <h4 className="text-lg font-bold mb-2">Want to book an OPD slot directly?</h4>
              <p className="text-xs text-slate-300 mb-4">
                Patients can also self-book specialist appointments with our urologists, nephrologists, and surgeons.
              </p>
              <button 
                onClick={() => onOpenAppointmentModal()}
                className="w-full py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Book OPD Slot Online
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

