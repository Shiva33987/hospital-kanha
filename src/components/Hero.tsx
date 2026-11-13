import React, { useState } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Calendar, 
  ShieldCheck, 
  FileText,
  Activity,
  ArrowRight
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeroProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
  onOpenReportsModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenReportsModal = () => {},
}) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full aspect-[1024/571] min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[720px] max-h-[92vh] overflow-hidden select-none bg-slate-900 flex flex-col justify-between">
      
      {/* 1. MASTER CANVAS BACKGROUND (Matches attached image 100% with high-resolution clarity) */}
      <img 
        src="/images/hero_clean_canvas.jpg" 
        alt="Kanha Hospitals - Urology, Nephrology, Andrology & 24 Multi-Specialties" 
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
      />

      {/* 2. TOP NAVIGATION BAR (Exact visual layout built in React code) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 md:pt-5 flex items-center justify-between">
        
        {/* Top-Left Logo inside the white swoosh */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center shrink-0 group pl-1 sm:pl-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <img 
            src="/images/kanha-logo.png" 
            alt="Kanha Hospitals Logo - Urology | Nephrology | Andrology" 
            className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-sm"
          />
        </a>

        {/* Top-Right Floating White Pill Navbar (Desktop) */}
        <div className="hidden lg:flex items-center bg-white/95 text-slate-700 rounded-full px-4 py-1.5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border border-slate-200/90 text-xs xl:text-[13px] font-semibold space-x-4 xl:space-x-6">
          
          {/* Active Home Pill */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#0077e6] text-white px-4 py-1.5 rounded-full font-bold shadow-sm transition-all hover:bg-[#0066cc] cursor-pointer"
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button 
              className="text-slate-700 hover:text-[#0077e6] flex items-center space-x-1 cursor-pointer transition-colors py-1.5"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#0077e6]' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800">
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Urology & Laser Stone Center
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  24/7 Advanced Dialysis
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  3 Modular Laminar OTs
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  High-Res CT-Scan & Lab
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-hospital-blue">
                  All 24 Specialties &rarr;
                </a>
              </div>
            )}
          </div>

          <a href="#doctors" className="text-slate-700 hover:text-[#0077e6] transition-colors py-1.5">
            Doctor
          </a>

          <a href="#packages" className="text-slate-700 hover:text-[#0077e6] transition-colors py-1.5">
            Pricing
          </a>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesDropdownOpen(true)}
            onMouseLeave={() => setResourcesDropdownOpen(false)}
          >
            <button 
              className="text-slate-700 hover:text-[#0077e6] flex items-center space-x-1 cursor-pointer transition-colors py-1.5"
            >
              <span>Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesDropdownOpen ? 'rotate-180 text-[#0077e6]' : ''}`} />
            </button>

            {resourcesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800">
                <button 
                  onClick={onOpenReportsModal}
                  className="w-full text-left p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold"
                >
                  Download Lab Reports
                </button>
                <a href="#cashless-insurance" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Cashless TPA Desk (50+)
                </a>
                <a href="#symptom-matcher" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  AI Symptom Checker
                </a>
                <a href="#contact" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Location & Map
                </a>
              </div>
            )}
          </div>

          <button 
            onClick={onOpenReportsModal}
            className="text-slate-700 hover:text-[#0077e6] transition-colors cursor-pointer py-1.5"
          >
            Login
          </button>

          {/* Sign Up Button (Exact Cyan-Blue Pill Button) */}
          <button 
            onClick={() => onOpenAppointmentModal()}
            className="bg-[#0077e6] hover:bg-[#0066cc] text-white font-bold px-5 py-1.5 rounded-full shadow-sm transition-all cursor-pointer text-xs active:scale-95"
          >
            Sign Up
          </button>

        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center space-x-2.5 lg:hidden">
          <button
            onClick={onOpenEmergencyModal}
            className="bg-red-600 text-white p-2 rounded-full shadow-md"
            title="24/7 Emergency"
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-white/95 text-slate-800 hover:bg-white rounded-xl shadow-md border border-slate-200 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <img 
                  src="/images/kanha-logo.png" 
                  alt="Kanha Hospitals Logo" 
                  className="h-9 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-2">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-bold text-sm bg-sky-50 text-[#0077e6]"
                >
                  Home
                </a>
                <a
                  href="#specialties"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50"
                >
                  Specialties (24)
                </a>
                <a
                  href="#doctors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50"
                >
                  Doctor Profiles
                </a>
                <a
                  href="#packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50"
                >
                  Pricing & Checkups
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReportsModal();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50"
                >
                  Download Lab Reports
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50"
                >
                  Location & Map
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full bg-[#0077e6] hover:bg-[#0066cc] text-white py-3 rounded-full font-bold text-sm shadow-md"
              >
                Sign Up / Book Appointment
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergencyModal();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-bold text-sm shadow-md flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>24/7 Emergency: 9091445566</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. SUBTLE BOTTOM QUICK ACCESS BAR OVER MARBLE FLOOR */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-5 flex items-end justify-between pointer-events-none">
        
        {/* Live Hospital OPD Status Pill on Bottom Left */}
        <div className="hidden sm:inline-flex items-center space-x-2.5 bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-2xl shadow-lg pointer-events-auto transition-transform hover:scale-[1.01]">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <div className="text-xs">
            <span className="font-bold text-[#0a1e3b]">Live Hospital Desk Active</span>
            <span className="text-slate-400 mx-2">•</span>
            <span className="text-slate-600">50+ Senior Specialists Ready</span>
            <span className="text-slate-400 mx-2">•</span>
            <a href="tel:9091445566" className="font-semibold text-[#0077e6] hover:underline">
              Ph: +91 90914 45566
            </a>
          </div>
        </div>

        {/* Quick Consultation Token Trigger Button on Bottom Right */}
        <button
          onClick={() => onOpenAppointmentModal()}
          className="hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-[#0077e6] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-[0_8px_20px_rgba(0,119,230,0.35)] transition-all cursor-pointer group active:scale-95 pointer-events-auto"
        >
          <span>Instant Consultation Token</span>
          <span className="w-5 h-5 rounded-full bg-white text-[#0077e6] flex items-center justify-center font-bold text-xs shadow-sm group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </button>

      </div>

    </section>
  );
};
