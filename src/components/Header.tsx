import React, { useState } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Calendar, 
  PhoneCall, 
  FileText, 
  ShieldCheck, 
  Ambulance 
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#edf2f8]/95 backdrop-blur-md transition-all duration-300">
      
      {/* Exact MediEase Navbar Layout from Reference Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        
        {/* ORIGINAL KANHA HOSPITALS LOGO */}
        <a href="#" className="flex items-center shrink-0 group mr-6">
          <img 
            src="/images/kanha-logo.png" 
            alt="Kanha Hospitals Logo - Urology | Nephrology | Andrology" 
            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* EXACT FLOATING DARK PILL NAVBAR (Right side) */}
        <div className="hidden lg:flex items-center bg-[#171a21] text-white rounded-full px-7 py-2.5 shadow-xl border border-white/10 text-xs xl:text-[13px] font-semibold space-x-6 xl:space-x-7">
          
          <a href="#" className="text-white hover:text-cyan-400 transition-colors">
            Home
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button 
              className="text-slate-300 hover:text-white flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
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

          <a href="#doctors" className="text-slate-300 hover:text-white transition-colors">
            Doctor
          </a>

          <a href="#packages" className="text-slate-300 hover:text-white transition-colors">
            Pricing
          </a>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesDropdownOpen(true)}
            onMouseLeave={() => setResourcesDropdownOpen(false)}
          >
            <button 
              className="text-slate-300 hover:text-white flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <span>Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
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
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Login
          </button>

          {/* Sign Up Button (Exact Cyan-Blue Pill Button) */}
          <button 
            onClick={() => onOpenAppointmentModal()}
            className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] text-white font-bold px-5 py-2 rounded-full shadow-md transition-all cursor-pointer text-xs"
          >
            Sign Up
          </button>

        </div>

        {/* Mobile Hamburger & Emergency icon */}
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
            className="p-2 text-slate-800 hover:bg-white rounded-xl transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-5 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-3">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-slate-800 font-bold hover:bg-sky-50 text-sm"
            >
              Home
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-slate-800 font-bold hover:bg-sky-50 text-sm"
            >
              Services (24+ Specialties)
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-slate-800 font-bold hover:bg-sky-50 text-sm"
            >
              Doctor Directory
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-slate-800 font-bold hover:bg-sky-50 text-sm"
            >
              Pricing & Packages
            </a>
            <a
              href="#cashless-insurance"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-slate-800 font-bold hover:bg-sky-50 text-sm"
            >
              Cashless TPA Desk
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-slate-800 font-bold hover:bg-sky-50 text-sm"
            >
              Location & Map (Kompally)
            </a>

            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReportsModal();
                }}
                className="flex-1 py-2.5 rounded-full border border-slate-300 text-slate-700 font-bold text-xs"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white font-bold text-xs shadow-md"
              >
                Sign Up / Book
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
