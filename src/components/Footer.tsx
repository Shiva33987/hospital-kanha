import React from 'react';
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
  FileText
} from 'lucide-react';
import { HOSPITAL_INFO, SPECIALTIES } from '../data/hospitalData';

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hospital-navyDeep text-slate-300 pt-16 pb-28 lg:pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-hospital-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP ACCREDITATION & EMERGENCY CALLOUT BAR */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center shrink-0">
              <Ambulance className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">Emergency & Ambulance Hotline 24x7</span>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {HOSPITAL_INFO.phoneFormatted}
              </div>
              <p className="text-xs text-slate-400">
                Panchsheel Enclave, Kompally • Immediate Cardiac Ambulance Dispatch
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEmergencyModal}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-emergency transition-all cursor-pointer"
            >
              Call 24/7 Casualty
            </button>
            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-hospital-sky hover:bg-sky-400 text-hospital-navy font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Book In-Hospital OPD
            </button>
          </div>
        </div>

        {/* 4-COLUMN FOOTER NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src="/images/kanha-logo-white.png"
              alt="Kanha Hospitals Logo"
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
                <a href="#cashless-insurance" className="hover:text-hospital-sky transition-colors">
                  Cashless TPA Empanelment
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-hospital-sky transition-colors">
                  Health Checkup Packages
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

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>Kanha Hospitals</strong>. All rights reserved. Panchsheel Enclave, Kompally, Hyderabad.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Care • Compassion • Trust</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

