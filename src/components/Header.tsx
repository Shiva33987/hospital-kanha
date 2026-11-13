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
  HeartHandshake
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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-40 sticky top-0 transition-all duration-300">
      {/* 1. TOP EMERGENCY & UTILITY BAR (Medanta Gold Standard) */}
      <div className="bg-hospital-navyDeep text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Emergency & Ambulance Hotline */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenEmergencyModal}
              className="flex items-center space-x-2 text-red-400 hover:text-red-300 font-semibold cursor-pointer group transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="tracking-wide">24x7 EMERGENCY & AMBULANCE:</span>
              <span className="text-white font-bold bg-red-600/80 hover:bg-red-600 px-2 py-0.5 rounded text-xs tracking-wider transition-colors">
                {HOSPITAL_INFO.phoneFormatted}
              </span>
            </button>

            <div className="flex items-center text-slate-300 space-x-1">
              <Clock className="w-3.5 h-3.5 text-hospital-sky" />
              <span>OPD: 8 AM - 9 PM | Dialysis & ICU: 24/7</span>
            </div>

            <div className="flex items-center text-slate-300 space-x-1">
              <MapPin className="w-3.5 h-3.5 text-hospital-sky" />
              <span>Panchsheel Enclave, Kompally, Hyderabad</span>
            </div>
          </div>

          {/* Right: Quick Patient Utilities */}
          <div className="flex items-center space-x-4 text-slate-300">
            <button 
              onClick={onOpenReportsModal}
              className="hover:text-hospital-sky flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Lab Reports</span>
            </button>
            <span className="text-slate-600">|</span>
            <a 
              href="#cashless-insurance" 
              className="hover:text-hospital-sky flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cashless TPA (50+)</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => onOpenAppointmentModal()}
              className="hover:text-hospital-sky flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-hospital-sky" />
              <span>Second Opinion</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' 
            : 'bg-white shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img 
              src="/images/kanha-logo.png" 
              alt="Kanha Hospitals Logo - Urology | Nephrology | Andrology" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-[15px] font-medium text-slate-700">
            {/* Specialties Mega Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
              onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 hover:text-hospital-blue transition-colors py-2 cursor-pointer font-semibold"
              >
                <span>Specialties</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${specialtiesDropdownOpen ? 'rotate-180 text-hospital-blue' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {specialtiesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-2xl shadow-dropdown border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex justify-between items-center pb-3 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="font-bold text-hospital-navy text-base">Centers of Excellence & Clinical Specialties</h4>
                      <p className="text-xs text-slate-500">24+ comprehensive clinical and surgical departments</p>
                    </div>
                    <a 
                      href="#specialties" 
                      onClick={() => setSpecialtiesDropdownOpen(false)}
                      className="text-xs text-hospital-blue hover:text-hospital-navy font-semibold flex items-center space-x-1"
                    >
                      <span>View All 24 Specialties</span>
                      <span>&rarr;</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {/* Featured Top Focus */}
                    <div className="col-span-3 grid grid-cols-3 gap-2 bg-sky-50/80 p-3 rounded-xl border border-sky-100 mb-2">
                      <a 
                        href="#specialties"
                        onClick={() => setSpecialtiesDropdownOpen(false)}
                        className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all group"
                      >
                        <span className="text-xs font-bold text-hospital-blue uppercase tracking-wider block">Flagship</span>
                        <span className="font-bold text-hospital-navy group-hover:text-hospital-blue text-sm">Urology & Laser Stone</span>
                        <span className="text-[11px] text-slate-500 block">RIRS, PCNL, Laser Stones</span>
                      </a>
                      <a 
                        href="#specialties"
                        onClick={() => setSpecialtiesDropdownOpen(false)}
                        className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all group"
                      >
                        <span className="text-xs font-bold text-hospital-blue uppercase tracking-wider block">Speciality</span>
                        <span className="font-bold text-hospital-navy group-hover:text-hospital-blue text-sm">Nephrology & Dialysis</span>
                        <span className="text-[11px] text-slate-500 block">24/7 Advanced Renal Unit</span>
                      </a>
                      <a 
                        href="#specialties"
                        onClick={() => setSpecialtiesDropdownOpen(false)}
                        className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all group"
                      >
                        <span className="text-xs font-bold text-hospital-blue uppercase tracking-wider block">Speciality</span>
                        <span className="font-bold text-hospital-navy group-hover:text-hospital-blue text-sm">Andrology & Men's Health</span>
                        <span className="text-[11px] text-slate-500 block">Microsurgery & Infertility</span>
                      </a>
                    </div>

                    {/* Other Specialties */}
                    {SPECIALTIES.slice(3, 15).map((sp) => (
                      <a
                        key={sp.id}
                        href="#specialties"
                        onClick={() => setSpecialtiesDropdownOpen(false)}
                        className="p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-hospital-blue transition-colors text-xs font-medium flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-hospital-sky"></span>
                        <span className="truncate">{sp.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#doctors" className="hover:text-hospital-blue transition-colors py-2 font-medium">
              Find a Doctor
            </a>

            <a href="#facilities" className="hover:text-hospital-blue transition-colors py-2 font-medium">
              Facilities & Tech
            </a>

            <a href="#packages" className="hover:text-hospital-blue transition-colors py-2 font-medium">
              Health Packages
            </a>

            <a href="#cashless-insurance" className="hover:text-hospital-blue transition-colors py-2 font-medium">
              Cashless TPA
            </a>

            <a href="#contact" className="hover:text-hospital-blue transition-colors py-2 font-medium">
              Contact & Location
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearchModal}
              title="Search Doctors, Specialties, Treatments (Ctrl+K)"
              className="p-2.5 text-slate-500 hover:text-hospital-blue hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Emergency Hotline Button */}
            <button
              onClick={onOpenEmergencyModal}
              className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 px-3.5 py-2 rounded-full font-semibold text-xs tracking-wide transition-all shadow-sm cursor-pointer group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <Ambulance className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
              <span>EMERGENCY 24x7</span>
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="flex items-center space-x-2 bg-gradient-to-r from-hospital-navy to-hospital-blue hover:from-hospital-navyLight hover:to-hospital-sky text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-glow transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-hospital-sky" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu & Emergency Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenEmergencyModal}
              className="bg-red-600 text-white p-2 rounded-full shadow-md"
              title="24/7 Emergency"
            >
              <PhoneCall className="w-4 h-4" />
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
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-5 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearchModal();
              }}
              className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-600 text-sm font-medium"
            >
              <span className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span>Search doctors, treatments, facilities...</span>
              </span>
              <kbd className="px-2 py-0.5 text-[10px] bg-white border border-slate-200 rounded text-slate-500">Search</kbd>
            </button>

            <div className="border-t border-slate-100 pt-2 space-y-1">
              <a
                href="#specialties"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                Specialties (24+ Departments)
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                Find a Doctor
              </a>
              <a
                href="#facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                Facilities & Technology
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                Health Checkup Packages
              </a>
              <a
                href="#cashless-insurance"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                Cashless Insurance & TPA
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                Hospital Location & Maps
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-hospital-navy text-white py-3 rounded-xl font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 text-hospital-sky" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergencyModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-3 rounded-xl font-semibold text-sm shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency: {HOSPITAL_INFO.phoneFormatted}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

