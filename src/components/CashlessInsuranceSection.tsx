import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  FileText, 
  HelpCircle, 
  PhoneCall, 
  ArrowRight,
  Send,
  Building
} from 'lucide-react';
import { INSURANCE_PARTNERS, HOSPITAL_INFO } from '../data/hospitalData';

export const CashlessInsuranceSection: React.FC = () => {
  const [insuranceQuerySubmitted, setInsuranceQuerySubmitted] = useState(false);
  const [insurerName, setInsurerName] = useState('');
  const [policyHolderName, setPolicyHolderName] = useState('');
  const [phone, setPhone] = useState('');

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInsuranceQuerySubmitted(true);
    setTimeout(() => {
      setInsuranceQuerySubmitted(false);
      setInsurerName('');
      setPolicyHolderName('');
      setPhone('');
    }, 5000);
  };

  const steps = [
    {
      step: '01',
      title: 'Show Health Card',
      desc: 'Show your TPA/Insurance e-card and Aadhaar card at our 24/7 Cashless Helpdesk.',
    },
    {
      step: '02',
      title: 'Pre-Authorization',
      desc: 'Our dedicated insurance desk submits the medical claim and secures approval in < 2 hours.',
    },
    {
      step: '03',
      title: 'Hassle-Free Care',
      desc: 'Undergo surgeries or treatment with zero out-of-pocket stress.',
    },
    {
      step: '04',
      title: 'Swift Discharge',
      desc: 'Final bill is cleared directly with the insurer; you return home smoothly.',
    },
  ];

  return (
    <section id="cashless-insurance" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Cashless Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
            Empaneled With 50+ Top Health Insurers & TPAs
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kanha Hospitals partners with leading private and public health insurance companies and Third-Party Administrators (TPAs) to provide smooth, paperless cashless admissions.
          </p>
        </div>

        {/* 4 STEPS TO CASHLESS ADMISSION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-hospital-sky hover:bg-sky-50/30 transition-all duration-300 relative group"
            >
              <div className="text-3xl font-black text-hospital-blue/30 group-hover:text-hospital-blue transition-colors mb-2 font-mono">
                {s.step}
              </div>
              <h3 className="font-bold text-hospital-navy text-base">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* PARTNERS LOGO & BADGE WALL */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 mb-6 border-b border-slate-200/80 gap-3">
            <div>
              <h3 className="font-extrabold text-lg text-hospital-navy">
                Recognized Insurers & TPA Network Partners
              </h3>
              <p className="text-xs text-slate-500">
                Tier-1 network hospital status with instant digital approvals
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
              50+ Networks Connected
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {INSURANCE_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200/70 hover:border-hospital-blue hover:shadow-sm transition-all flex flex-col justify-between text-center group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-hospital-blue mx-auto flex items-center justify-center font-bold text-xs mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-hospital-navy group-hover:text-hospital-blue leading-tight truncate">
                  {partner.name}
                </h4>
                <span className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-COLUMN BOTTOM: INSURANCE CHECK FORM & HELPDESK INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-hospital-navy to-hospital-navyLight rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-hospital-sky">
              Dedicated On-Campus TPA Helpdesk
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Check Your Insurance Coverage & Pre-Authorization
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Have doubts about whether your policy covers laser kidney stone surgery, dialysis sessions, or knee replacement? Send us your details, and our insurance desk will verify your policy benefits within 30 minutes.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero documentation charges or hidden deductibles</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Government & PSU employee medical insurance accepted</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Assistance with reimbursement claims for unlisted insurers</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="inline-flex items-center space-x-2 text-hospital-sky hover:text-white font-bold text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Direct TPA Desk Helpline: {HOSPITAL_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Quick Query Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 text-hospital-navy shadow-lg">
            {insuranceQuerySubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-hospital-navy">Query Received!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our insurance desk at Kanha Hospitals is reviewing your details. A coordinator will call you at {phone || 'your phone number'} within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuerySubmit} className="space-y-3.5">
                <h4 className="font-extrabold text-base text-hospital-navy">
                  Verify Your Policy in 30 Mins
                </h4>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Insurance Provider / TPA Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Star Health / HDFC Ergo / Medi Assist"
                    value={insurerName}
                    onChange={(e) => setInsurerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Policy Holder / Patient Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. K. Reddy"
                    value={policyHolderName}
                    onChange={(e) => setPolicyHolderName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Phone Number for Callback
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-hospital-navy hover:bg-hospital-blue text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Verify My Policy Benefits</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

