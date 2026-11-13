import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Ambulance, 
  ChevronDown, 
  HelpCircle,
  Building2
} from 'lucide-react';
import { HOSPITAL_INFO, FAQS } from '../data/hospitalData';

export const LocationContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQS SECTION FIRST */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 bg-sky-100 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl font-extrabold text-hospital-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Everything you need to know about OPD booking, emergency admissions, dialysis, and cashless claims at Kanha Hospitals.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 bg-white"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-hospital-navy flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-hospital-sky shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-hospital-blue' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* LOCATION & CONTACT SECTION */}
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-hospital-blue">
              Easy To Reach • Centrally Located
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight mt-1">
              Visit Kanha Hospitals in Kompally, Hyderabad
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Conveniently located off NH 44 / Hi Tension Road, Alwal, opposite O'rica Café, with 24-hour dedicated emergency ambulance and patient reception.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: CONTACT DETAILS & OPERATING HOURS */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Address Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-hospital-navy text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-hospital-sky" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-hospital-navy uppercase tracking-wider">
                      Hospital Address
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                      Panchsheel Enclave Road No. 5, Hi Tension Road, Alwal,<br />
                      Opposite O'rica Café, Kompally, Hyderabad, Telangana 500010
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-hospital-navy uppercase tracking-wider">
                      24/7 Helpline & Emergency
                    </h4>
                    <a
                      href={`tel:${HOSPITAL_INFO.phone}`}
                      className="text-base sm:text-lg font-black text-red-600 hover:text-red-700 block mt-0.5"
                    >
                      {HOSPITAL_INFO.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-slate-500">Instant ambulance & doctor support</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-hospital-blue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-hospital-navy uppercase tracking-wider">
                      Operating Hours
                    </h4>
                    <p className="text-xs text-slate-700 mt-1">
                      <span className="font-bold text-slate-900">OPD Clinics:</span> {HOSPITAL_INFO.opdHours}
                    </p>
                    <p className="text-xs text-slate-700 mt-0.5">
                      <span className="font-bold text-slate-900">Emergency & Trauma:</span> 24 Hours / 365 Days
                    </p>
                    <p className="text-xs text-slate-700 mt-0.5">
                      <span className="font-bold text-slate-900">Dialysis Suite:</span> 24/7 Active
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Route Guide */}
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-xs text-slate-700 space-y-2">
                <span className="font-bold text-hospital-navy uppercase block">
                  Quick Directions:
                </span>
                <p>• <strong>From Suchitra Circle:</strong> 7 minutes via Medchal Highway & Hi-Tension Road.</p>
                <p>• <strong>From Alwal Center:</strong> 5 minutes via Panchsheel Enclave Road No. 5.</p>
                <p>• <strong>Landmark:</strong> Directly opposite O'rica Café.</p>
              </div>

              {/* Google Maps Direction Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kanha+Hospitals+Panchsheel+Enclave+Road+No+5+Hi+Tension+Road+Alwal+Kompally+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-hospital-navy hover:bg-hospital-blue text-white py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4 text-hospital-sky" />
                <span>Open in Google Maps / Get Driving Directions</span>
              </a>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE EMBEDDED MAP & CONTACT MESSAGE FORM */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Google Maps Iframe */}
              <div className="rounded-3xl overflow-hidden shadow-soft border border-slate-200 h-80 bg-slate-100 relative">
                <iframe
                  title="Kanha Hospitals Location Map"
                  src="https://maps.google.com/maps?q=Panchsheel+Enclave+Road+No.+5,+Hi+Tension+Road,+Alwal,+Kompally,+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Quick Hospital Message / Inquiry Form */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200">
                <h4 className="font-extrabold text-base text-hospital-navy mb-1">
                  Send an Inquiry to Hospital Administration
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  For surgical inquiries, corporate empanelment, or general assistance.
                </p>

                {formSent ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-emerald-900 text-sm">Message Sent Successfully!</h5>
                    <p className="text-xs text-emerald-700">Our patient coordination team will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject / Department (e.g. Kidney Stone Laser Inquiry)"
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    />
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your medical query or appointment requirement..."
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-hospital-navy hover:bg-hospital-blue text-white py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

