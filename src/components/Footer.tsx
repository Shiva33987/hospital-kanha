import React, { useState } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUp, 
  Calendar,
  Ambulance,
  FileText,
  ChevronDown,
  ExternalLink,
  Sparkles,
  Award,
  Navigation,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { HOSPITAL_INFO, SPECIALTIES } from '../data/hospitalData';
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
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setMobileAccordion(prev => prev === key ? null : key);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hospital-navyDeep text-slate-300 pt-12 sm:pt-16 pb-28 lg:pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#0284c7]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[300px] bg-gradient-to-t from-red-600/10 via-sky-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* 1. ULTRA-PREMIUM EMERGENCY & AMBULANCE HOTLINE CONCIERGE CARD  */}
        {/* ============================================================== */}
        <div className="relative rounded-3xl p-5 sm:p-8 mb-12 sm:mb-16 overflow-hidden bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-950/95 border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),0_0_1px_1px_rgba(255,255,255,0.08)_inset]">
          
          {/* Top highlight hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/80 to-sky-500/80" />
          
          {/* Subtle Corner Ambient Glow */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            
            {/* Left: Ambulance Visual + Live Triage Badge + Hotline Number */}
            <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-5">
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-500/25 via-red-600/15 to-transparent border border-red-500/40 text-red-400 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(220,38,38,0.25)]">
                <Ambulance className="w-7 h-7 sm:w-9 sm:h-9 text-red-500 animate-pulse" />
              </div>

              <div className="space-y-1">
                {/* Live Active Pill */}
                <div className="inline-flex items-center space-x-2 bg-red-500/15 border border-red-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-red-300">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Emergency & Ambulance 24x7</span>
                </div>

                {/* Direct Dialable Phone Number */}
                <div className="flex items-center space-x-2">
                  <a 
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="text-2xl sm:text-3xl font-black text-white hover:text-red-400 transition-colors tracking-tight flex items-center space-x-2 group"
                  >
                    <span>{HOSPITAL_INFO.phoneFormatted}</span>
                    <Phone className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform hidden sm:inline-block" />
                  </a>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300 font-normal flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Panchsheel Enclave, Kompally • Immediate Cardiac Ambulance Dispatch</span>
                </p>
              </div>
            </div>

            {/* Right: Premium Dual Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-2.5 sm:gap-3 shrink-0">
              <button
                onClick={onOpenEmergencyModal}
                className="bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-[0_8px_25px_-5px_rgba(220,38,38,0.5)] border border-red-400/40 flex items-center justify-center space-x-2 active:scale-95 transition-all cursor-pointer group"
              >
                <PhoneCall className="w-4 h-4 group-hover:animate-bounce" />
                <span>Call 24/7 Casualty</span>
              </button>

              <button
                onClick={() => onOpenAppointmentModal()}
                className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-[0_8px_25px_-5px_rgba(0,119,230,0.35)] border border-sky-400/40 flex items-center justify-center space-x-2 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Hospital OPD</span>
              </button>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. MOBILE-FIRST ACCREDITATION & TRUST RIBBON                   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-10 pb-8 border-b border-white/10 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3 flex items-center justify-center space-x-2">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">NABH Accredited</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3 flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">3 Laminar OTs</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3 flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">20+ Dialysis Beds</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3 flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">50+ TPA Cashless</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. MOBILE VIEW: COMPACT EXECUTIVE ACCORDION + CONTACT TILES    */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-6 pb-10 border-b border-white/10">
          
          {/* Brand Info & Mission */}
          <div className="space-y-3">
            <KanhaLogo variant="white" className="h-12 w-auto" />
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {HOSPITAL_INFO.tagline}
            </p>
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-semibold text-hospital-sky bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{HOSPITAL_INFO.subTagline}</span>
            </div>
          </div>

          {/* 3 Mobile Interactive Action Cards */}
          <div className="grid grid-cols-1 gap-2.5">
            {/* Campus Address Card with Direct Map Link */}
            <a 
              href="https://maps.google.com/?q=Kanha+Hospitals+Kompally+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3.5 flex items-start space-x-3 transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Hospital Location</div>
                <div className="text-xs text-slate-200 font-medium leading-snug line-clamp-2 mt-0.5">
                  {HOSPITAL_INFO.address}
                </div>
                <div className="text-[11px] font-bold text-sky-400 mt-1 flex items-center space-x-1">
                  <span>Get Driving Route</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>

            {/* Helpline & Email Card */}
            <div className="grid grid-cols-2 gap-2.5">
              <a 
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 flex flex-col justify-between transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mb-2">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Call Hospital</div>
                  <div className="text-xs font-black text-white group-hover:text-emerald-300 mt-0.5">
                    {HOSPITAL_INFO.phoneFormatted}
                  </div>
                </div>
              </a>

              <a 
                href={`mailto:${HOSPITAL_INFO.email}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 flex flex-col justify-between transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mb-2">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Email Desk</div>
                  <div className="text-xs font-bold text-white group-hover:text-purple-300 mt-0.5 truncate">
                    care@kanhahospitals.com
                  </div>
                </div>
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">OPD:</span> Mon - Sat 8AM - 9PM | Sun 9AM - 2PM
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                  Casualty, Triage & Dialysis: 24 Hours Active
                </div>
              </div>
            </div>
          </div>

          {/* Accordion 1: Centers of Excellence */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
            <button
              onClick={() => toggleAccordion('specialties')}
              className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-hospital-sky" />
                <span className="font-extrabold text-sm text-white">Centers of Excellence (9)</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${mobileAccordion === 'specialties' ? 'rotate-180' : ''}`} />
            </button>

            {mobileAccordion === 'specialties' && (
              <div className="px-4 pb-4 pt-1 border-t border-white/5 grid grid-cols-1 gap-2.5 text-xs text-slate-300">
                <a 
                  href="#specialties" 
                  onClick={() => onOpenAppointmentModal('urology')}
                  className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-white flex items-center justify-between hover:bg-sky-500/20 transition-colors"
                >
                  <span className="font-bold">Urology & Laser Stones</span>
                  <span className="text-[10px] text-sky-400 font-semibold uppercase">Book Slot &rarr;</span>
                </a>
                <a 
                  href="#specialties" 
                  onClick={() => onOpenAppointmentModal('nephrology')}
                  className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-white flex items-center justify-between hover:bg-teal-500/20 transition-colors"
                >
                  <span className="font-bold">Nephrology & 24/7 Dialysis</span>
                  <span className="text-[10px] text-teal-400 font-semibold uppercase">Book Slot &rarr;</span>
                </a>
                <a 
                  href="#specialties" 
                  onClick={() => onOpenAppointmentModal('andrology')}
                  className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-white flex items-center justify-between hover:bg-purple-500/20 transition-colors"
                >
                  <span className="font-bold">Andrology & Men's Health</span>
                  <span className="text-[10px] text-purple-400 font-semibold uppercase">Book Slot &rarr;</span>
                </a>
                <a href="#specialties" className="p-1.5 hover:text-white transition-colors">Cardiology & Heart Care</a>
                <a href="#specialties" className="p-1.5 hover:text-white transition-colors">Critical Care & Advanced ICU</a>
                <a href="#specialties" className="p-1.5 hover:text-white transition-colors">Orthopedics & Joint Replacement</a>
                <a href="#specialties" className="p-1.5 hover:text-white transition-colors">Obstetrics & Gynaecology</a>
                <a href="#specialties" className="p-1.5 hover:text-white transition-colors">General & Laparoscopic Surgery</a>
                <a href="#specialties" className="p-1.5 hover:text-white transition-colors">Paediatrics & Neonatology</a>
                <a href="#specialties" className="p-2 text-center text-hospital-sky font-bold hover:underline">
                  View All 24 Specialties &rarr;
                </a>
              </div>
            )}
          </div>

          {/* Accordion 2: Facilities & Infrastructure */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
            <button
              onClick={() => toggleAccordion('facilities')}
              className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-extrabold text-sm text-white">Facilities & Technology (8)</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${mobileAccordion === 'facilities' ? 'rotate-180' : ''}`} />
            </button>

            {mobileAccordion === 'facilities' && (
              <div className="px-4 pb-4 pt-1 border-t border-white/5 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">High-Res CT-Scan</a>
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">24/7 Dialysis Unit</a>
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">3 Laminar OTs</a>
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">Advanced ICU</a>
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">Emergency Casualty</a>
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">24/7 Pharmacy</a>
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">Cardiac Ambulance</a>
                <a href="#facilities" className="p-1.5 hover:text-white transition-colors">Inpatient Suites</a>
              </div>
            )}
          </div>

          {/* Accordion 3: Patient Portals & Services */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
            <button
              onClick={() => toggleAccordion('portal')}
              className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="font-extrabold text-sm text-white">Patient Concierge & Reports</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${mobileAccordion === 'portal' ? 'rotate-180' : ''}`} />
            </button>

            {mobileAccordion === 'portal' && (
              <div className="px-4 pb-4 pt-1 border-t border-white/5 space-y-2 text-xs text-slate-300">
                <button
                  onClick={onOpenReportsModal}
                  className="w-full p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span className="font-bold">Download Lab Reports</span>
                  </div>
                  <span>&rarr;</span>
                </button>
                <a href="#doctors" className="block p-1.5 hover:text-white transition-colors">Find Doctor OPD Timings</a>
                <a href="#contact" className="block p-1.5 hover:text-white transition-colors">Driving Route & Free Parking</a>
                <a href="#facilities" className="block p-1.5 hover:text-white transition-colors">Campus Infrastructure Tour</a>
              </div>
            )}
          </div>

        </div>

        {/* ============================================================== */}
        {/* 4. TABLET & DESKTOP VIEW: 4-COLUMN FOOTER NAVIGATION           */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <KanhaLogo variant="white" className="h-14 w-auto" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {HOSPITAL_INFO.tagline}
            </p>
            <p className="text-xs text-hospital-sky font-semibold tracking-wide">
              {HOSPITAL_INFO.subTagline}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-hospital-sky shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <PhoneCall className="w-4 h-4 text-hospital-sky shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-white font-bold">
                  {HOSPITAL_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-hospital-sky shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-white">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Top Clinical Specialties */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Centers of Excellence
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a 
                  href="#specialties" 
                  onClick={() => onOpenAppointmentModal('urology')}
                  className="hover:text-hospital-sky transition-colors flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-hospital-sky"></span>
                  <strong className="text-white">Urology & Laser Stones</strong>
                </a>
              </li>
              <li>
                <a 
                  href="#specialties" 
                  onClick={() => onOpenAppointmentModal('nephrology')}
                  className="hover:text-hospital-sky transition-colors flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-hospital-sky"></span>
                  <strong className="text-white">Nephrology & 24/7 Dialysis</strong>
                </a>
              </li>
              <li>
                <a 
                  href="#specialties" 
                  onClick={() => onOpenAppointmentModal('andrology')}
                  className="hover:text-hospital-sky transition-colors flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-hospital-sky"></span>
                  <strong className="text-white">Andrology & Men's Health</strong>
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-hospital-sky transition-colors">Cardiology & Heart Care</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-hospital-sky transition-colors">Critical Care & Advanced ICU</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-hospital-sky transition-colors">Orthopedics & Joint Replacement</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-hospital-sky transition-colors">Obstetrics & Gynaecology</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-hospital-sky transition-colors">General & Laparoscopic Surgery</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-hospital-sky transition-colors">Paediatrics & Neonatology</a>
              </li>
              <li>
                <a href="#specialties" className="text-hospital-sky font-bold hover:underline">
                  View All 24 Specialties &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Facilities & Infrastructure */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Facilities & Infrastructure
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  High-Resolution CT-Scan
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  24/7 Advanced Dialysis Unit
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  3 Laminar Flow Modular OTs
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  Advanced ICU & Critical Care
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  24/7 Emergency & Trauma Care
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  24/7 In-House Pharmacy
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  24/7 Cardiac Ambulance
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  Comfortable Inpatient Rooms
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Patient Help & Portals */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Patient Portal
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={onOpenReportsModal}
                  className="hover:text-hospital-sky transition-colors text-left flex items-center space-x-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-hospital-sky" />
                  <span>Download Lab Reports</span>
                </button>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-sky transition-colors">
                  State-of-the-Art Facilities
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-hospital-sky transition-colors">
                  Find Doctor OPD Timings
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-hospital-sky transition-colors">
                  Driving Route & Parking
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Quality Protocol
              </span>
              <div className="inline-flex items-center space-x-1.5 bg-white/10 px-2.5 py-1 rounded-md text-[11px] text-emerald-300 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NABH Standard Guidelines</span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 5. BOTTOM COPYRIGHT & BACK-TO-TOP DOCK                         */}
        {/* ============================================================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-200">Kanha Hospitals</strong>. All rights reserved. Panchsheel Enclave, Kompally, Hyderabad.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400 hidden sm:inline">Care • Compassion • Trust</span>
            <button
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 transition-colors cursor-pointer text-xs font-semibold"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

