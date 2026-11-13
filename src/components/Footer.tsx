import React, { useState } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ArrowUp, 
  Calendar,
  Ambulance,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Award,
  Stethoscope,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { KanhaLogo } from './KanhaLogo';

interface FooterProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenReportsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenReportsModal,
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOSPITAL_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const centersOfExcellence = [
    { name: 'Urology & Laser Stone Center', id: 'urology', isCore: true },
    { name: 'Nephrology & 24/7 Dialysis Suite', id: 'nephrology', isCore: true },
    { name: 'Andrology & Men\'s Health', id: 'andrology', isCore: true },
    { name: 'Interventional Cardiology', id: 'cardiology' },
    { name: 'Critical Care & Advanced ICU', id: 'critical-care' },
    { name: 'Orthopedics & Joint Replacement', id: 'orthopedics' },
    { name: 'Laparoscopic & General Surgery', id: 'general-surgery' },
    { name: 'Paediatrics & Neonatal Care', id: 'paediatrics' },
    { name: 'Obstetrics & Gynaecology', id: 'gynecology' },
    { name: 'Neurology & Spine Care', id: 'neurology' },
  ];

  const infrastructureFacilities = [
    { name: '3 Laminar Flow Modular OTs (Class 10,000 Air)', href: '#facilities' },
    { name: '20+ Station 24/7 Hemodialysis Unit', href: '#facilities' },
    { name: 'High-Resolution CT-Scan & Digital X-Ray', href: '#facilities' },
    { name: 'Advanced 24/7 ICU, CCU & HDU Beds', href: '#facilities' },
    { name: '24/7 In-House Diagnostic Pathology Lab', href: '#facilities' },
    { name: '24/7 Registered On-Campus Pharmacy', href: '#facilities' },
    { name: 'Cardiac Life Support (ALS) Ambulance', href: '#facilities' },
    { name: 'Private & Semi-Private Inpatient Suites', href: '#facilities' },
  ];

  const patientServices = [
    { name: 'Download Digital Lab Reports', action: onOpenReportsModal, icon: FileText, highlight: true },
    { name: 'Find Doctor OPD Timings & Schedules', href: '#doctors' },
    { name: 'Book In-Hospital Consultation', action: () => onOpenAppointmentModal(), icon: Calendar },
    { name: 'Emergency & Casualty Triage Protocol', action: onOpenEmergencyModal, icon: Ambulance },
    { name: 'Driving Routes & Free Valet Parking', href: '#contact' },
    { name: 'Cashless Insurance & TPA Desk', href: '#faq' },
    { name: 'Hospital Visiting Hours & Guidelines', href: '#faq' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#08152b] via-[#050e1f] to-[#020710] text-slate-300 pt-16 sm:pt-20 pb-28 lg:pb-12 border-t border-sky-900/30 relative overflow-hidden">
      
      {/* Decorative ambient medical glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-br from-[#0077e6]/12 to-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      
      {/* Top Accent Gradient Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0077e6] to-transparent opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. TOP EXECUTIVE RAPID CARE & 24/7 EMERGENCY CONSOLE      */}
        {/* ========================================================= */}
        <div className="relative rounded-3xl bg-gradient-to-r from-white/[0.07] via-white/[0.04] to-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] p-6 sm:p-8 lg:p-10 mb-14 sm:mb-16 overflow-hidden">
          
          {/* Subtle Corner Glow Accent */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Box: 24/7 Emergency & Casualty Dispatch */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.4)] border border-red-400/40">
                  <Ambulance className="w-8 h-8 animate-pulse text-white" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#08152b] animate-ping" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#08152b]" />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  <span>24/7 Emergency Casualty & Cardiac Trauma Suite</span>
                </div>
                
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <a 
                    href={`tel:${HOSPITAL_INFO.emergencyPhone}`} 
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-white hover:text-red-300 transition-colors tracking-tight"
                  >
                    {HOSPITAL_INFO.phoneFormatted}
                  </a>
                  <span className="text-xs font-bold text-slate-400 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                    Zero-Wait Triage
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Panchsheel Enclave, Kompally • Immediate On-Duty Physician & Cardiac ALS Ambulance Dispatch
                </p>
              </div>
            </div>

            {/* Right Box: 1-Click Fast Actions */}
            <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap gap-3 items-center justify-start lg:justify-end">
              <button
                onClick={onOpenEmergencyModal}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-[0_8px_25px_rgba(220,38,38,0.4)] transition-all cursor-pointer active:scale-95 flex items-center justify-center space-x-2 group"
              >
                <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Call 24/7 Casualty</span>
              </button>

              <button
                onClick={() => onOpenAppointmentModal()}
                className="w-full sm:w-auto bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-[0_8px_25px_rgba(0,119,230,0.35)] transition-all cursor-pointer active:scale-95 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Hospital OPD</span>
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. QUALITY ASSURANCE & HOSPITAL RECOGNITION PILLARS       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-16">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-500/40 transition-colors flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">NABH Accredited</div>
              <div className="text-[10px] text-slate-400">Strict Quality Standards</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-500/40 transition-colors flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">50+ Senior Specialists</div>
              <div className="text-[10px] text-slate-400">Board Certified Faculty</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-500/40 transition-colors flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">100+ Inpatient Beds</div>
              <div className="text-[10px] text-slate-400">3 Laminar OTs • 20+ Dialysis</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-500/40 transition-colors flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">75,000+ Families</div>
              <div className="text-[10px] text-slate-400">Trusted Healthcare Across Hyd</div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. MULTI-COLUMN LUXURY NAVIGATION ARCHITECTURE            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: Hospital Brand Identity & Campus Hub (Col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block">
              <KanhaLogo variant="white" className="h-13 sm:h-14 w-auto" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {HOSPITAL_INFO.tagline}
            </p>

            {/* Department Focus Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-950/80 to-blue-950/80 border border-sky-500/40 px-3 py-1.5 rounded-full text-xs font-bold text-sky-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Core Excellence: {HOSPITAL_INFO.focus}</span>
            </div>

            {/* Google Rating Micro-Card */}
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 w-fit">
              <div className="flex text-amber-400 text-sm tracking-tighter">
                ★★★★★
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-white">4.9 / 5.0</span>
                <span className="text-slate-400 ml-1.5">(1,850+ Verified Patient Reviews)</span>
              </div>
            </div>

            {/* Interactive Campus Location Card */}
            <div className="pt-2 p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white block mb-0.5">Kanha Hospitals Campus</span>
                  <span>{HOSPITAL_INFO.address}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-sky-300 hover:text-white bg-sky-500/10 hover:bg-sky-500/20 px-2.5 py-1 rounded-lg border border-sky-500/30 transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href="https://maps.google.com/?q=Kanha+Hospitals+Kompally+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              {/* Direct Inquiry Contact Row */}
              <div className="pt-1 flex flex-col space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-slate-400">Direct Helpline:</span>
                  <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-white font-bold hover:text-sky-300">
                    {HOSPITAL_INFO.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-slate-400">Official Desk:</span>
                  <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-white hover:text-sky-300">
                    {HOSPITAL_INFO.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Centers of Excellence (Col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#0077e6]"></span>
              <span>Centers of Excellence</span>
            </h4>
            
            <ul className="space-y-2 text-xs text-slate-300">
              {centersOfExcellence.map((spec, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onOpenAppointmentModal(spec.id)}
                    className="hover:text-sky-300 transition-colors flex items-center space-x-2 text-left group w-full cursor-pointer py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-500/60 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    <span className={spec.isCore ? "text-white font-semibold group-hover:text-sky-300" : "text-slate-300 group-hover:text-white"}>
                      {spec.name}
                    </span>
                    {spec.isCore && (
                      <span className="text-[9px] font-black uppercase text-sky-400 bg-sky-950/80 px-1.5 py-0.2 rounded border border-sky-600/30">
                        Core
                      </span>
                    )}
                  </button>
                </li>
              ))}
              
              <li className="pt-2">
                <a 
                  href="#specialties" 
                  className="text-xs font-bold text-sky-400 hover:text-sky-200 inline-flex items-center space-x-1 transition-colors"
                >
                  <span>Explore All 24+ Clinical Specialties</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Advanced Infrastructure (Col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Facilities & Technology</span>
            </h4>

            <ul className="space-y-2 text-xs text-slate-300">
              {infrastructureFacilities.map((fac, idx) => (
                <li key={idx}>
                  <a
                    href={fac.href}
                    className="hover:text-emerald-300 transition-colors flex items-center space-x-2 text-left group py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 transition-colors shrink-0"></span>
                    <span className="group-hover:text-white transition-colors">{fac.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Department Hours Box */}
            <div className="mt-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>OPD Clinics:</span>
                </div>
                <span className="text-white">8:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                  <span>Emergency / Casualty:</span>
                </div>
                <span className="text-red-300 font-extrabold">24/7 Active</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Dialysis Suite:</span>
                </div>
                <span className="text-emerald-300">24 Hours Open</span>
              </div>
            </div>

          </div>

          {/* Column 4: Patient Services & Quick Portals (Col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Patient Services</span>
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-300">
              {patientServices.map((srv, idx) => {
                const IconComponent = srv.icon;
                if (srv.action) {
                  return (
                    <li key={idx}>
                      <button
                        onClick={srv.action}
                        className={`hover:text-white transition-colors text-left flex items-center space-x-2 cursor-pointer w-full group py-0.5 ${
                          srv.highlight ? 'text-sky-300 font-bold' : 'text-slate-300'
                        }`}
                      >
                        {IconComponent && <IconComponent className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
                        <span className="group-hover:translate-x-0.5 transition-transform">{srv.name}</span>
                      </button>
                    </li>
                  );
                }
                return (
                  <li key={idx}>
                    <a
                      href={srv.href}
                      className="hover:text-sky-300 transition-colors flex items-center space-x-2 text-left group py-0.5"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400 transition-colors shrink-0" />
                      <span className="group-hover:text-white transition-colors">{srv.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Direct WhatsApp Patient Desk */}
            <div className="pt-2">
              <a
                href={`https://wa.me/91${HOSPITAL_INFO.phone}?text=Hello%20Kanha%20Hospitals,%20I%20would%20like%20to%20inquire%20about%20OPD%20appointment%20and%20hospital%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 hover:text-white border border-emerald-500/40 p-2.5 rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Patient Desk</span>
              </a>
            </div>

            {/* Quality Standard Protocol Seal */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                Clinical Quality
              </span>
              <div className="inline-flex items-center space-x-1.5 bg-white/[0.06] px-3 py-1.5 rounded-xl text-[11px] text-emerald-300 border border-white/10 w-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>NABH Certified Protocols</span>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 4. BOTTOM COPYRIGHT, LEGAL & SMOOTH SCROLL BAR            */}
        {/* ========================================================= */}
        <div className="pt-8 sm:pt-10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400">
          
          <div className="space-y-1 text-center md:text-left">
            <div>
              © {new Date().getFullYear()} <strong className="text-white font-bold">Kanha Hospitals</strong>. All rights reserved. Panchsheel Enclave, Kompally, Hyderabad.
            </div>
            <p className="text-[11px] text-slate-500">
              Super-Specialty Tertiary Care Center • Urology, Nephrology, Andrology & Multi-Specialty
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px]">
            <a href="#faq" className="hover:text-white transition-colors">Patient Charter</a>
            <span className="text-slate-600">•</span>
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-600">•</span>
            <a href="#faq" className="hover:text-white transition-colors">Terms of Care</a>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400 font-semibold">Care • Compassion • Trust</span>
            
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0077e6] text-white flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-md group"
              title="Back to Top of Page"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
