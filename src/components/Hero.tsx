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
  Award,
  Clock
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
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
    'Advanced Laser Urology',
    '24/7 Precision Dialysis',
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
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[760px] overflow-hidden select-none bg-white flex flex-col justify-between">
      
      {/* 1. MASTER CANVAS BACKGROUND (High-res clean hospital lobby with doctor) */}
      <img 
        src="/images/hero_clean_canvas.jpg" 
        alt="Kanha Hospitals - Urology, Nephrology, Andrology & 24 Multi-Specialties" 
        className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] object-cover object-center pointer-events-none z-0"
      />

      {/* 2. TOP NAVIGATION BAR */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 md:pt-5 flex items-center justify-between">
        
        {/* Top-Left Brand Logo in Frosted Glass Capsule */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Kanha Hospitals - Back to Top"
          title="Kanha Hospitals - Back to Top"
          className="flex items-center shrink-0 bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] hover:shadow-md hover:border-hospital-blue/40 transition-all cursor-pointer group active:scale-95"
        >
          <KanhaLogo className="h-8 sm:h-9 md:h-10 w-auto" />
        </a>

        {/* Top-Right Floating White Pill Navbar (Desktop) */}
        <div className="hidden lg:flex items-center bg-white/95 backdrop-blur-md text-slate-700 rounded-full px-4 py-1.5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border border-slate-200/90 text-xs xl:text-[13px] font-semibold space-x-4 xl:space-x-6">
          
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
            className="text-slate-700 hover:text-[#0077e6] transition-colors cursor-pointer py-1.5"
          >
            Login
          </button>

          {/* Sign Up Button */}
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

      {/* 3. HERO CONTENT AREA (Positioned cleanly in left 55% over frosted glass corridor) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Animated Text & Clinical Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 xl:col-span-7 space-y-5"
        >
          {/* Animated Medical Trust Pill */}
          <div className="inline-flex items-center space-x-2.5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-200/80 shadow-xs text-xs font-bold text-slate-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-hospital-navy">NABH Accredited Tertiary Care</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#0077e6] font-extrabold flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 inline mr-0.5" />
              <span>Hyderabad</span>
            </span>
          </div>

          {/* Kinetic Animated Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold font-sans text-slate-900 tracking-tight leading-[1.12]">
            Exceptional Healthcare,
            <span className="block mt-1 text-slate-900">
              Focused On{' '}
              <span className="inline-block relative h-[1.25em] align-top overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingSpecialties[specialtyIndex]}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent font-extrabold whitespace-nowrap block"
                  >
                    {rotatingSpecialties[specialtyIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 max-w-xl leading-relaxed font-normal">
            Hyderabad's trusted superspecialty hospital with 24 multi-specialties, 3 modular laminar OTs, automated dialysis &amp; senior consultants with zero waiting time.
          </p>

          {/* Action Buttons Row (Light, airy, and premium - no dark solid blocks) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-[0_8px_25px_rgba(0,119,230,0.32)] flex items-center space-x-2.5 transition-all cursor-pointer group active:scale-95"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Doctor Consultation</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenEmergencyModal}
              className="bg-white/95 backdrop-blur-md hover:bg-white text-slate-800 border border-slate-200/90 font-bold text-sm px-5 py-3.5 rounded-full shadow-xs flex items-center space-x-2.5 transition-all hover:border-red-300 hover:text-red-600 cursor-pointer group active:scale-95"
            >
              <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span>24/7 Helpline: 9091445566</span>
            </button>
          </div>

          {/* Floating Motion Graphics / Mini Status Pill */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold">
            <div className="flex items-center space-x-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="font-bold text-slate-800">4.9/5 Rating</span>
              <span className="text-slate-400">•</span>
              <span>25,000+ Surgeries</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-hospital-blue" />
              <span className="text-slate-800">15-Min Fast-Track OPD Token</span>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Empty grid space so doctor's photo shines through cleanly */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-5 relative h-full min-h-[350px]">
          {/* Subtle floating glass trust badge near the doctor's side */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 -left-6 bg-white/95 backdrop-blur-xl border border-white/80 px-4 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center space-x-3 pointer-events-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-[#0077e6] text-white flex items-center justify-center shadow-xs">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">50+ Senior Specialists</div>
              <div className="text-[11px] font-semibold text-emerald-600 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active On-Duty Today</span>
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
