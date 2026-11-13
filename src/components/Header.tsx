import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Clock, 
  MapPin, 
  Calendar, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  ShieldCheck, 
  Ambulance, 
  HeartHandshake,
  Activity,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { HOSPITAL_INFO, SPECIALTIES } from '../data/hospitalData';

interface HeaderProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
  onOpenReportsModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenSearchModal,
  onOpenReportsModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-40 sticky top-0 transition-all duration-300">
      {/* 1. TOP LIVE EMERGENCY & PATIENT UTILITY BAR */}
      <div className="bg-hospital-navyDeep text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          
          {/* Left: Emergency Status & Hotline */}
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenEmergencyModal}
              className="flex items-center space-x-2 text-red-400 hover:text-red-300 font-bold cursor-pointer group transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="tracking-wide uppercase text-[11px]">24x7 EMERGENCY & AMBULANCE:</span>
              <span className="text-white font-extrabold bg-red-600 hover:bg-red-700 px-2.5 py-0.5 rounded-full text-xs tracking-wider transition-all shadow-sm">
                {HOSPITAL_INFO.phoneFormatted}
              </span>
            </button>

            <span className="text-white/20">|</span>

            {/* Live OPD status indicator */}
            <div className="flex items-center space-x-1.5 text-slate-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-emerald-300">OPD Active:</span>
              <span>8 AM - 9 PM</span>
              <span className="text-slate-500">•</span>
              <span>Dialysis & ICU: 24/7</span>
            </div>
          </div>

          {/* Right: Quick Utilities */}
          <div className="flex items-center space-x-5 text-slate-300 text-xs font-medium">
            <button 
              onClick={onOpenReportsModal}
              className="hover:text-hospital-sky flex items-center space-x-1.5 cursor-pointer transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-hospital-sky" />
              <span>Download Lab Reports</span>
            </button>
            <span className="text-white/20">|</span>
            <a 
              href="#cashless-insurance" 
              className="hover:text-hospital-sky flex items-center space-x-1.5 cursor-pointer transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cashless TPA Desk (50+)</span>
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="#contact" 
              className="hover:text-hospital-sky flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-hospital-sky" />
              <span>Kompally, Hyderabad</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2.5 border-b border-slate-100' 
            : 'bg-white shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo with tagline */}
          <a href="#" className="flex items-center space-x-3 group">
            <img 
              src="/images/kanha-logo.png" 
              alt="Kanha Hospitals Logo - Urology | Nephrology | Andrology" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-[15px] font-semibold text-slate-700">
            
            {/* Specialties Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
              onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 hover:text-hospital-blue transition-colors py-2 cursor-pointer font-bold"
              >
                <span>Specialties</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${specialtiesDropdownOpen ? 'rotate-180 text-hospital-blue' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {specialtiesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] bg-white rounded-3xl shadow-dropdown border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex justify-between items-center pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-sky-50 text-hospital-blue">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-hospital-navy text-sm">Centers of Excellence & 24+ Specialties</h4>
                        <p className="text-xs text-slate-400">Board-certified surgeons & senior consultants</p>
                      </div>
                    </div>
                    <a 
                      href="#specialties" 
                      onClick={() => setSpecialtiesDropdownOpen(false)}
                      className="text-xs text-hospital-blue hover:text-hospital-navy font-bold flex items-center space-x-1"
                    >
                      <span>Explore All 24 Specialties</span>
                      <span>&rarr;</span>
                    </a>
                  </div>

                  {/* 3 Featured Key Focus Specialties */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <a 
                      href="#specialties"
                      onClick={() => setSpecialtiesDropdownOpen(false)}
                      className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 hover:border-hospital-blue hover:shadow-md transition-all group"
                    >
                      <span className="text-[10px] font-extrabold text-hospital-blue uppercase tracking-widest block">Flagship Speciality</span>
                      <h5 className="font-extrabold text-hospital-navy group-hover:text-hospital-blue text-sm mt-0.5">Urology & Laser Stones</h5>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">RIRS, PCNL, Holmium Laser Lithotripsy</p>
                    </a>

                    <a 
                      href="#specialties"
                      onClick={() => setSpecialtiesDropdownOpen(false)}
                      className="p-3.5 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 hover:border-teal-500 hover:shadow-md transition-all group"
                    >
                      <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest block">Key Center</span>
                      <h5 className="font-extrabold text-hospital-navy group-hover:text-teal-600 text-sm mt-0.5">Nephrology & Dialysis</h5>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">24/7 Advanced Hemodialysis Suite</p>
                    </a>

                    <a 
                      href="#specialties"
                      onClick={() => setSpecialtiesDropdownOpen(false)}
                      className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:border-indigo-600 hover:shadow-md transition-all group"
                    >
                      <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest block">Key Center</span>
                      <h5 className="font-extrabold text-hospital-navy group-hover:text-indigo-600 text-sm mt-0.5">Andrology & Men's Health</h5>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Microscopic Varicocele & Infertility</p>
                    </a>
                  </div>

                  {/* Rest of the Specialties */}
                  <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-100">
                    {SPECIALTIES.slice(3, 19).map((sp) => (
                      <a
                        key={sp.id}
                        href="#specialties"
                        onClick={() => setSpecialtiesDropdownOpen(false)}
                        className="p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-hospital-blue transition-colors text-xs font-semibold flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-hospital-sky shrink-0"></span>
                        <span className="truncate">{sp.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#doctors" className="hover:text-hospital-blue transition-colors py-2 font-bold">
              Find Doctor
            </a>

            <a href="#facilities" className="hover:text-hospital-blue transition-colors py-2 font-bold">
              Facilities & Tech
            </a>

            <a href="#symptom-matcher" className="hover:text-hospital-blue transition-colors py-2 font-bold flex items-center space-x-1">
              <span>Symptom Checker</span>
              <span className="bg-sky-100 text-hospital-blue text-[10px] px-2 py-0.5 rounded-full font-bold">AI</span>
            </a>

            <a href="#packages" className="hover:text-hospital-blue transition-colors py-2 font-bold">
              Health Packages
            </a>

            <a href="#cashless-insurance" className="hover:text-hospital-blue transition-colors py-2 font-bold">
              Cashless TPA
            </a>

            <a href="#contact" className="hover:text-hospital-blue transition-colors py-2 font-bold">
              Location & Map
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {/* Live Search Trigger */}
            <button
              onClick={onOpenSearchModal}
              title="Search Doctors, Specialties, Treatments (Ctrl+K)"
              className="p-2.5 text-slate-500 hover:text-hospital-blue hover:bg-slate-100 rounded-full transition-all cursor-pointer border border-transparent hover:border-slate-200"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Emergency Hotline Button with pulsating glow */}
            <button
              onClick={onOpenEmergencyModal}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all shadow-emergency hover:shadow-lg cursor-pointer group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <Ambulance className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>EMERGENCY 24x7</span>
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="flex items-center space-x-2 bg-gradient-to-r from-hospital-navy via-hospital-navyLight to-hospital-blue hover:from-hospital-blue hover:to-hospital-sky text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-hospital-sky" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenEmergencyModal}
              className="bg-red-600 text-white p-2 rounded-full shadow-md"
              title="24/7 Emergency"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-hospital-navy hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-5 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearchModal();
              }}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 rounded-2xl text-slate-600 text-sm font-medium border border-slate-200"
            >
              <span className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-hospital-blue" />
                <span>Search doctors, treatments, facilities...</span>
              </span>
              <kbd className="px-2 py-0.5 text-[10px] bg-white border border-slate-200 rounded text-slate-500 font-mono">Search</kbd>
            </button>

            <div className="space-y-1 text-sm font-semibold">
              <a
                href="#specialties"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-sky-50"
              >
                Specialties (24+ Departments)
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-sky-50"
              >
                Find a Doctor
              </a>
              <a
                href="#symptom-matcher"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-sky-50"
              >
                AI Symptom Checker & Doctor Matcher
              </a>
              <a
                href="#facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-sky-50"
              >
                Facilities & Technology (CT Scan, OTs)
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-sky-50"
              >
                Health Checkup Packages
              </a>
              <a
                href="#cashless-insurance"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-sky-50"
              >
                Cashless Insurance & TPA (50+)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-sky-50"
              >
                Location & Route (Kompally)
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-hospital-navy to-hospital-blue text-white py-3.5 rounded-2xl font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 text-hospital-sky" />
                <span>Book In-Hospital OPD Visit</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergencyModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-2xl font-bold text-sm shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Emergency Hotline: {HOSPITAL_INFO.phoneFormatted}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
