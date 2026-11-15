import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Search, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrolled) {
    return null;
  }

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300 animate-in fade-in slide-in-from-top-3">
      <div className="bg-[#0b1f38]/90 border border-white/20 rounded-full backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Brand Logo with Cyan Emblem + Kanha Hospitals */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2.5 shrink-0 group mr-2 sm:mr-4"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)] group-hover:scale-105 transition-transform" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="8" r="4.5" fill="#38bdf8" />
              <path d="M15 15C11 15 8 19 8 24C8 28 11 31 15 31" stroke="#38bdf8" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M25 15C29 15 32 19 32 24C32 28 29 31 25 31" stroke="#38bdf8" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M15 17C18 20 20 25 20 32" stroke="#38bdf8" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M25 17C22 20 20 25 20 32" stroke="#38bdf8" strokeWidth="3.2" strokeLinecap="round" />
            </svg>
          </div>
          
          <div className="flex flex-col text-left">
            <span className="text-base sm:text-lg font-black text-white leading-tight tracking-tight">Kanha</span>
            <span className="text-xs sm:text-sm font-bold text-sky-300 leading-none tracking-tight">Hospitals</span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-xs lg:text-[13px] font-semibold text-slate-200">
          
          {/* Active Home Pill */}
          <div className="relative">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-slate-900 font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-md hover:bg-slate-100 transition-all cursor-pointer"
            >
              Home
            </button>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]" />
          </div>

          {/* About Us Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer">
              <span>About Us</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white">Hospital Overview</a>
                <a href="#doctors" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white">Senior Doctors</a>
                <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white">Facilities & Tech</a>
              </div>
            )}
          </div>

          {/* Healthcare Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer">
              <span>Healthcare Services</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white">Urology & Laser Stone Care</a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white">24/7 Advanced Hemodialysis</a>
                <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white">3 Modular Laminar Flow OTs</a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 text-sky-400 font-bold">All 24 Specialties &rarr;</a>
              </div>
            )}
          </div>

          <a href="#doctors" className="px-2.5 py-2 hover:text-white transition-colors">Find a Doctor</a>
          <button onClick={onOpenEmergencyModal} className="px-2.5 py-2 hover:text-white transition-colors cursor-pointer">International Services</button>
          <button onClick={onOpenReportsModal} className="px-2.5 py-2 hover:text-white transition-colors cursor-pointer">e-Services</button>
          <a href="#contact" className="px-2.5 py-2 hover:text-white transition-colors">Contact Us</a>

        </nav>

        {/* Right Action: Start a Referral & Search */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => onOpenAppointmentModal('referral')}
            className="bg-[#00c982] hover:bg-[#00b374] text-slate-950 font-extrabold text-xs sm:text-[13px] px-4 sm:px-5 py-2 rounded-full shadow-[0_0_20px_rgba(0,201,130,0.45)] flex items-center space-x-1.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Start a Referral</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenSearchModal}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Sticky Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-sm bg-[#091b32] text-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl border-l border-white/10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-black text-lg text-white">Kanha Hospitals</span>
                <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-4 space-y-1 text-sm font-semibold text-slate-200">
                <button onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="w-full text-left p-2.5 rounded-xl bg-white/10 text-white font-bold">Home</button>
                <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">About Us</a>
                <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Healthcare Services</a>
                <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Find a Doctor</a>
                <button onClick={() => { setMobileMenuOpen(false); onOpenEmergencyModal(); }} className="w-full text-left p-2.5 rounded-xl hover:bg-white/5">International Services</button>
                <button onClick={() => { setMobileMenuOpen(false); onOpenReportsModal(); }} className="w-full text-left p-2.5 rounded-xl hover:bg-white/5">e-Services</button>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Contact Us</a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal('referral');
                }}
                className="w-full bg-[#00c982] hover:bg-[#00b374] text-slate-950 font-black py-3 rounded-full flex items-center justify-center space-x-2"
              >
                <span>Start a Referral</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
