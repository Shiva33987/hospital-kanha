import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  Sparkles,
  Star,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { KanhaLogo } from './KanhaLogo';

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

  // Dynamic Rotating Specialty Text
  const rotatingSpecialties = [
    '24/7 Precision Dialysis',
    'Advanced Laser Urology',
    'Minimally Invasive Surgery',
    'Comprehensive Kidney Care',
    'Andrology & Men\'s Health',
  ];
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % rotatingSpecialties.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingSpecialties.length]);

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px] overflow-hidden select-none bg-white flex flex-col justify-between">
      
      {/* 1. MASTER CANVAS BACKGROUND (High-res clean hospital lobby with doctor) */}
      <img 
        src="/images/hero_clean_canvas.jpg" 
        alt="Kanha Hospitals - Urology, Nephrology, Andrology & 24 Multi-Specialties" 
        className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] object-cover object-center pointer-events-none z-0"
      />

      {/* Subtle Luminous Ambient Glow behind the card */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-sky-200/35 rounded-full blur-3xl pointer-events-none z-10" />

      {/* 2. TOP NAVIGATION BAR */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3 md:pt-4 flex items-center justify-between">
        
        {/* Top-Left Brand Logo in Frosted Glass Capsule */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Kanha Hospitals - Back to Top"
          title="Kanha Hospitals - Back to Top"
          className="flex items-center shrink-0 bg-white/95 backdrop-blur-md rounded-full px-3.5 sm:px-4 py-1.5 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] hover:shadow-md hover:border-hospital-blue/40 transition-all cursor-pointer group active:scale-95"
        >
          <KanhaLogo className="h-7 sm:h-8 md:h-9 w-auto" />
        </a>

        {/* Top-Right Floating White Pill Navbar (Desktop) */}
        <div className="hidden lg:flex items-center bg-white/95 backdrop-blur-md text-slate-700 rounded-full px-4 py-1.5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border border-slate-200/90 text-xs xl:text-[13px] font-semibold space-x-4 xl:space-x-6">
          
          {/* Active Home Pill */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#0077e6] text-white px-3.5 py-1 rounded-full font-bold shadow-xs transition-all hover:bg-[#0066cc] cursor-pointer"
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
              className="text-slate-700 hover:text-[#0077e6] flex items-center space-x-1 cursor-pointer transition-colors py-1"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#0077e6]' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800">
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Urology &amp; Laser Stone Center
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  24/7 Advanced Dialysis
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  3 Modular Laminar OTs
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  High-Res CT-Scan &amp; Lab
                </a>
                <a href="#specialties" className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-hospital-blue">
                  All 24 Specialties &rarr;
                </a>
              </div>
            )}
          </div>

          <a href="#doctors" className="text-slate-700 hover:text-[#0077e6] transition-colors py-1">
            Doctor
          </a>

          <a href="#packages" className="text-slate-700 hover:text-[#0077e6] transition-colors py-1">
            Pricing
          </a>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesDropdownOpen(true)}
            onMouseLeave={() => setResourcesDropdownOpen(false)}
          >
            <button 
              className="text-slate-700 hover:text-[#0077e6] flex items-center space-x-1 cursor-pointer transition-colors py-1"
            >
              <span>Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesDropdownOpen ? 'rotate-180 text-[#0077e6]' : ''}`} />
            </button>

            {resourcesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800">
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
                  Location &amp; Map
                </a>
              </div>
            )}
          </div>

          <button 
            onClick={onOpenReportsModal}
            className="text-slate-700 hover:text-[#0077e6] transition-colors cursor-pointer py-1"
          >
            Login
          </button>

          {/* Sign Up Button */}
          <button 
            onClick={() => onOpenAppointmentModal()}
            className="bg-[#0077e6] hover:bg-[#0066cc] text-white font-bold px-4 py-1.5 rounded-full shadow-xs transition-all cursor-pointer text-xs active:scale-95"
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

      {/* 3. HERO CONTENT AREA (Enclosed in Slim Luxury Frosted Glass Medical Console) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-2 sm:py-3 lg:py-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: Glass Console Card (Shifted left to give doctor full breathing space) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-6 max-w-lg lg:max-w-[520px] xl:max-w-[540px] lg:-ml-4 xl:-ml-10"
        >
          {/* Frosted Medical Console Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/88 sm:bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_15px_45px_-12px_rgba(8,31,61,0.12),0_0_1px_1px_rgba(255,255,255,0.85)_inset] p-4 sm:p-5 lg:p-5 space-y-3">
            
            {/* Top Luminous Blue Accent Hairline */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0077e6] to-transparent opacity-80" />

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-1.5">
              <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-sky-50 to-blue-50/80 border border-sky-200/80 px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0077e6] shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-wide">NABH ACCREDITED TERTIARY CARE</span>
              </div>

              <div className="inline-flex items-center space-x-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-700">
                <Sparkles className="w-3 h-3 text-sky-500" />
                <span>Kompally, Hyderabad</span>
              </div>
            </div>

            {/* Kinetic Animated Headline */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-extrabold font-sans text-slate-900 tracking-tight leading-[1.2]">
                Exceptional Healthcare,
                <span className="block mt-1 text-slate-900">
                  Focused On{' '}
                  <span className="inline-block relative h-[1.7em] align-middle overflow-hidden -mb-1.5 max-w-full">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={rotatingSpecialties[specialtyIndex]}
                        initial={{ y: 26, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -26, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent font-extrabold whitespace-nowrap inline-block leading-normal pt-0.5 pb-3 px-1"
                      >
                        {rotatingSpecialties[specialtyIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
              </h1>
            </div>

            {/* Value Proposition Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Hyderabad's premier tertiary center with 24 multi-specialties, 3 modular laminar OTs, advanced hemodialysis &amp; senior consultants with zero waiting time.
            </p>

            {/* Micro Clinical Feature Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              <div className="inline-flex items-center space-x-1 bg-sky-50/80 border border-sky-100 text-sky-900 px-2 py-0.5 rounded-md text-[11px] font-semibold">
                <CheckCircle2 className="w-3 h-3 text-[#0077e6]" />
                <span>24 Multi-Specialties</span>
              </div>
              <div className="inline-flex items-center space-x-1 bg-sky-50/80 border border-sky-100 text-sky-900 px-2 py-0.5 rounded-md text-[11px] font-semibold">
                <CheckCircle2 className="w-3 h-3 text-[#0077e6]" />
                <span>3 Modular Laminar OTs</span>
              </div>
              <div className="inline-flex items-center space-x-1 bg-sky-50/80 border border-sky-100 text-sky-900 px-2 py-0.5 rounded-md text-[11px] font-semibold">
                <CheckCircle2 className="w-3 h-3 text-[#0077e6]" />
                <span>50+ Cashless TPAs</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="relative group overflow-hidden bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-[0_6px_20px_rgba(0,119,230,0.3)] flex items-center space-x-2 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book Doctor Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEmergencyModal}
                className="bg-white hover:bg-red-50/50 text-slate-800 hover:text-red-600 border border-slate-200/90 hover:border-red-200 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-2xs flex items-center space-x-2 transition-all duration-300 cursor-pointer group active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-red-100/80 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-3 h-3 animate-pulse" />
                </div>
                <span>24/7 Helpline: 9091445566</span>
              </button>
            </div>

            {/* Trust Metrics Bar at bottom of card */}
            <div className="border-t border-slate-200/60 pt-2.5 grid grid-cols-3 gap-1.5 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-1 text-slate-900 font-extrabold text-sm sm:text-base">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>4.9 / 5</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">2,400+ Reviews</div>
              </div>

              <div className="border-x border-slate-200/60 flex flex-col items-center">
                <div className="text-[#0077e6] font-extrabold text-sm sm:text-base">
                  25,000+
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Surgeries Done</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-1 text-emerald-600 font-extrabold text-sm sm:text-base">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>0 Min Wait</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Fast-Track OPD</div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Doctor floating motion badges */}
        <div className="hidden lg:block lg:col-span-6 relative h-full min-h-[360px]">
          {/* Floating Badge 1: Senior Specialists Active */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-4 bg-white/95 backdrop-blur-xl border border-white/90 px-3.5 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(8,31,61,0.08)] flex items-center space-x-2.5 pointer-events-none z-10"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-[#0077e6] text-white flex items-center justify-center shadow-xs">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">50+ Senior Specialists</div>
              <div className="text-[11px] font-semibold text-emerald-600 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block mr-0.5"></span>
                <span>Active On-Duty Today</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge 2: Cashless Tie-ups */}
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 right-4 bg-white/95 backdrop-blur-xl border border-white/90 px-3.5 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(8,31,61,0.08)] flex items-center space-x-2.5 pointer-events-none z-10"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">100% Cashless Tie-ups</div>
              <div className="text-[11px] font-medium text-slate-500">
                All Major Insurances &amp; TPAs
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <KanhaLogo className="h-9 w-auto" />
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
                  Specialties
                </a>
                <a
                  href="#doctors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50"
                >
                  Find Doctors
                </a>
                <a
                  href="#packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50"
                >
                  Health Packages
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
                  Location &amp; Map
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

    </section>
  );
};
