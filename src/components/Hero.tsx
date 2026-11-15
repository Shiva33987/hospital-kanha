import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Search, 
  ChevronDown, 
  ChevronUp,
  ChevronRight,
  ArrowRight, 
  Phone, 
  Users, 
  Stethoscope, 
  Menu, 
  X,
  Shield,
  ExternalLink,
  Globe
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
  onOpenSearchModal,
  onOpenReportsModal = () => {},
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<'specialties' | 'centres' | 'services'>('specialties');
  const [topTab, setTopTab] = useState<'healthcare' | 'education' | 'research'>('healthcare');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <section className="relative w-full min-h-[720px] lg:min-h-[780px] xl:min-h-[840px] overflow-hidden select-none bg-slate-950 flex flex-col justify-between">
      
      {/* ============================================================== */}
      {/* 1. MASTER BACKGROUND LAYER (LUXURY HOSPITAL VIDEO BACKGROUND)  */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Ambient Dark Canvas Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061426] via-[#0a203b] to-[#030c18]" />

        {/* Video Element (Moved down significantly so the hospital tower & illuminated name are completely, clearly visible) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-x-0 -top-8 sm:-top-12 md:-top-16 w-full h-[120%] sm:h-[125%] md:h-[130%] object-cover object-[center_top] translate-y-14 sm:translate-y-20 md:translate-y-24 lg:translate-y-28"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Top Sky Blend Gradient (Soft dark transition under top bar) */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#030914] via-[#030914]/70 to-transparent pointer-events-none" />

        {/* Cinematic Readability & Clarity Overlays */}
        {/* Left-to-right gradient: deep dark on text side (left), crystal clear on hospital tower & name (right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030a16]/95 via-[#041022]/75 via-45% to-transparent" />
        {/* Bottom vignette only to blend smoothly into bottom cards */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#020712] via-[#020712]/75 to-transparent" />
        {/* Very soft top vignette for header readability without darkening the building */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020712]/70 via-[#020712]/20 to-transparent" />
        
        {/* Ambient Luminous Glow Accents */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-b from-sky-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-500/10 via-sky-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Holographic Medical Shield (Top Right) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden xl:block absolute top-28 right-16 lg:right-24 z-10 pointer-events-none"
      >
        <div className="relative w-28 h-32 flex items-center justify-center">
          {/* Outer radial aura glow */}
          <div className="absolute inset-0 bg-sky-400/25 rounded-full blur-2xl animate-pulse" />
          
          {/* Holographic Shield Shape */}
          <svg className="w-full h-full text-sky-400/70 drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]" viewBox="0 0 100 120" fill="none">
            <path 
              d="M50 5 L88 22 C88 65 65 98 50 115 C35 98 12 65 12 22 Z" 
              stroke="rgba(56,189,248,0.85)" 
              strokeWidth="3.5" 
              fill="rgba(8,31,61,0.4)" 
            />
            {/* Medical Cross in center */}
            <path d="M50 35 V75 M30 55 H70" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* 2. TOP UTILITY HEADER BAR                                      */}
      {/* ============================================================== */}
      <div className="relative z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 sm:h-10">
          
          {/* Left Tabs: Healthcare (active underline), Education, Research */}
          <div className="flex items-center space-x-5 sm:space-x-8 h-full">
            <button 
              onClick={() => setTopTab('healthcare')}
              className={`h-full flex items-center font-bold text-xs sm:text-[13px] transition-colors relative cursor-pointer ${
                topTab === 'healthcare' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Healthcare</span>
              {topTab === 'healthcare' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-amber-400 rounded-full" />
              )}
            </button>

            <button 
              onClick={() => setTopTab('education')}
              className={`h-full flex items-center font-medium text-xs sm:text-[13px] transition-colors relative cursor-pointer ${
                topTab === 'education' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Education</span>
              {topTab === 'education' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-amber-400 rounded-full" />
              )}
            </button>

            <button 
              onClick={() => setTopTab('research')}
              className={`h-full flex items-center font-medium text-xs sm:text-[13px] transition-colors relative cursor-pointer ${
                topTab === 'research' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Research</span>
              {topTab === 'research' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-amber-400 rounded-full" />
              )}
            </button>
          </div>

          {/* Right Sub-Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 text-xs text-slate-300 font-medium">
            <a href="#specialties" className="hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Suppliers</a>
            <a href="#contact" className="hover:text-white transition-colors">Giving</a>
            <a href="#news" className="hover:text-white transition-colors">News</a>
            <a href="#careers" className="hover:text-white transition-colors">Careers</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MAIN NAVIGATION BAR (EXACT REFERENCE ARCHITECTURE)          */}
      {/* ============================================================== */}
      <div className="relative z-30 w-full border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Left Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center shrink-0 group mr-4 sm:mr-6"
          >
            <KanhaLogo variant="cyan" className="h-9 sm:h-11 w-auto group-hover:scale-105 transition-transform drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-xs lg:text-[13.5px] font-semibold text-white/95">
            
            {/* Centres & Specialties (Pill button with Cascading Mega-Menu) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('centres')}
            >
              <button 
                onClick={() => toggleDropdown('centres')}
                className={`transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                  activeDropdown === 'centres' 
                    ? 'bg-white text-slate-950 font-bold px-4 py-2 rounded-full shadow-lg' 
                    : 'px-3 py-2 text-white/90 hover:text-white font-medium'
                }`}
              >
                <span>Centres & Specialties</span>
                {activeDropdown === 'centres' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-slate-950" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                )}
              </button>

              {/* Cascading Dual-Card Mega Menu */}
              {activeDropdown === 'centres' && (
                <div 
                  className="absolute top-full left-0 mt-3 flex items-start space-x-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Left Dark Frosted Card */}
                  <div className="w-64 bg-[#1f2937]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl text-sm text-slate-200 space-y-2">
                    {/* Top All Centres Link */}
                    <a 
                      href="#specialties" 
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center space-x-2.5 font-bold text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-slate-900/80 border border-white/20 flex items-center justify-center text-white shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <span>All Centres & Specialties</span>
                    </a>

                    {/* Subcategories */}
                    <div className="space-y-1 pt-1">
                      <button 
                        onMouseEnter={() => setActiveSubCategory('centres')}
                        onClick={() => setActiveSubCategory('centres')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          activeSubCategory === 'centres'
                            ? 'bg-white text-slate-950 shadow-md font-bold'
                            : 'hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        <span>Centres of Excellence</span>
                        <ChevronRight className="w-4 h-4 opacity-70" />
                      </button>

                      <button 
                        onMouseEnter={() => setActiveSubCategory('specialties')}
                        onClick={() => setActiveSubCategory('specialties')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          activeSubCategory === 'specialties'
                            ? 'bg-white text-slate-950 shadow-md font-bold'
                            : 'hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        <span>Specialties</span>
                        <ChevronRight className="w-4 h-4 opacity-70" />
                      </button>

                      <button 
                        onMouseEnter={() => setActiveSubCategory('services')}
                        onClick={() => setActiveSubCategory('services')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          activeSubCategory === 'services'
                            ? 'bg-white text-slate-950 shadow-md font-bold'
                            : 'hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        <span>Services</span>
                        <ChevronRight className="w-4 h-4 opacity-70" />
                      </button>
                    </div>
                  </div>

                  {/* Right Crisp White Card */}
                  <div className="w-64 bg-white text-slate-800 rounded-2xl p-5 shadow-2xl border border-slate-100 text-sm font-medium space-y-3 animate-in fade-in duration-150">
                    {activeSubCategory === 'specialties' && (
                      <>
                        <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block font-bold text-slate-950 hover:text-sky-700 transition-colors">All specialties</a>
                        <div className="border-t border-slate-100 pt-2 space-y-2 text-slate-700">
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">In Hyderabad (Kompally)</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">In Hitec City Clinic</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">In Secunderabad OPD</a>
                        </div>
                        <div className="border-t border-slate-100 pt-2 space-y-1.5 text-xs text-slate-600">
                          <span className="font-bold text-[11px] text-slate-400 uppercase tracking-wider block mb-1">Key Disciplines</span>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700">Urology & Andrology</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700">Nephrology & Dialysis</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700">Kidney Transplant Unit</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700">Laparoscopic Surgery</a>
                        </div>
                      </>
                    )}

                    {activeSubCategory === 'centres' && (
                      <>
                        <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block font-bold text-slate-950 hover:text-sky-700 transition-colors">All Centres of Excellence</a>
                        <div className="border-t border-slate-100 pt-2 space-y-2 text-slate-700">
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">Advanced Urology Institute</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">Renal Sciences & Dialysis Centre</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">Minimally Invasive Surgery Hub</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">Men&apos;s Health & Andrology</a>
                          <a href="#specialties" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">24/7 Critical Emergency Centre</a>
                        </div>
                      </>
                    )}

                    {activeSubCategory === 'services' && (
                      <>
                        <a href="#facilities" onClick={() => setActiveDropdown(null)} className="block font-bold text-slate-950 hover:text-sky-700 transition-colors">All Hospital Services</a>
                        <div className="border-t border-slate-100 pt-2 space-y-2 text-slate-700">
                          <a href="#facilities" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">24/7 Casualty & Life Support ICU</a>
                          <a href="#facilities" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">3 Modular Laminar Flow OTs</a>
                          <a href="#facilities" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">20+ Station Dialysis Bay</a>
                          <a href="#facilities" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">Pathology & Ultrasound Lab</a>
                          <a href="#facilities" onClick={() => setActiveDropdown(null)} className="block hover:text-sky-700 transition-colors">In-House Pharmacy (24/7)</a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Find a Doctor */}
            <a 
              href="#doctors" 
              className="px-3 py-2 text-white/90 hover:text-white font-medium transition-colors cursor-pointer"
            >
              Find a doctor
            </a>

            {/* Health Library */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('health-library')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('health-library')}
                className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Health Library</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'health-library' && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-[#1f2937]/95 border border-white/15 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Patient Health Guides</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Diseases & Treatments Index</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Kidney Care & Stone Prevention</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Wellness & Diet Advice</a>
                </div>
              )}
            </div>

            {/* Patients and Visitors */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('patients')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('patients')}
                className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Patients and visitors</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'patients' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#1f2937]/95 border border-white/15 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Admission & Discharge Guide</a>
                  <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Visiting Hours & Hospital Rules</a>
                  <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Insurance & Cashless TPA Help</a>
                  <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Room Categories & Amenities</a>
                </div>
              )}
            </div>

            {/* International Services */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('international')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('international')}
                className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>International services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'international' && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-[#1f2937]/95 border border-white/15 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <button onClick={onOpenEmergencyModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Global Patient Desk</button>
                  <button onClick={onOpenEmergencyModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Medical Visa & Embassy Papers</button>
                  <button onClick={onOpenEmergencyModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">International Tele-Consult</button>
                  <button onClick={onOpenEmergencyModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Language Translators Desk</button>
                </div>
              )}
            </div>

            {/* e-Services */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('eservices')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('eservices')}
                className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>e-Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'eservices' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1f2937]/95 border border-white/15 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <button onClick={() => onOpenAppointmentModal()} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Book Doctor Appointment</button>
                  <button onClick={onOpenReportsModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Download Lab & Scan Reports</button>
                  <button onClick={() => onOpenAppointmentModal('tele')} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Online Tele-Consultation</button>
                  <a href="#symptom-matcher" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">AI Symptom Checker</a>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Group: "Start a referral" + Arabic toggle + Search */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Start a referral Pill Button */}
            <button
              onClick={() => onOpenAppointmentModal('referral')}
              className="bg-[#00875a] hover:bg-[#00704a] text-white font-semibold text-xs sm:text-[13.5px] px-4 sm:px-5 py-2 rounded-full shadow-md hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
            >
              Start a referral
            </button>

            {/* Arabic Language Toggle */}
            <button
              onClick={() => {}}
              className="hidden sm:flex items-center space-x-1.5 text-white/90 hover:text-white text-xs sm:text-[13.5px] font-semibold px-2 py-1 transition-colors cursor-pointer"
              title="Switch Language"
            >
              <span className="font-arabic">عربي</span>
              <Globe className="w-4 h-4 text-white/80" />
            </button>

            {/* Search Icon Button */}
            <button
              onClick={onOpenSearchModal}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-white/10 text-white/90 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Search Specialties or Doctors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Drawer Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Floating Red "Beta Version" tab on right edge (as seen in reference screenshot) */}
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[10px] sm:text-[11px] font-bold px-1.5 py-3 rounded-l-md shadow-2xl select-none [writing-mode:vertical-rl] tracking-widest uppercase cursor-pointer transition-colors"
        title="Beta Version"
      >
        Beta Version
      </div>

      {/* ============================================================== */}
      {/* 4. MAIN HERO CONTENT AREA                                      */}
      {/* ============================================================== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-8 sm:pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow with Cyan/Emerald Horizontal Rule */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-slate-200">
              Quality Healthcare • Compassionate Care
            </span>
            <div className="hidden sm:block h-[1.5px] w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-white tracking-tight leading-[1.08]">
            Delivering world-class care{' '}
            <span className="block mt-1 sm:mt-2 text-white font-black">
              with{' '}
              <span className="text-[#00c982] italic font-black drop-shadow-[0_0_35px_rgba(0,201,130,0.55)]">
                compassion
              </span>
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm">
            Advanced medical expertise meets genuine human connection. Our internationally trained specialists combine cutting-edge treatments with personalized care.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            
            {/* Button 1: Start a Referral */}
            <button
              onClick={() => onOpenAppointmentModal('referral')}
              className="bg-[#00c982] hover:bg-[#00b374] text-slate-950 font-black text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[0_0_30px_rgba(0,201,130,0.5)] flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer group"
            >
              <span>Start a Referral</span>
              <div className="w-6 h-6 rounded-full bg-slate-950/20 flex items-center justify-center text-slate-950 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Button 2: Contact International Services */}
            <button
              onClick={onOpenEmergencyModal}
              className="bg-[#081a2f]/80 hover:bg-[#0c2444] text-white border border-white/25 backdrop-blur-xl font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:border-emerald-400/50 active:scale-95 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#00c982]/20 text-[#00c982] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>Contact International Services</span>
            </button>

          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 5. BOTTOM 3 FLOATING FROSTED GLASS ACTION CARDS                */}
      {/* ============================================================== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          
          {/* Card 1: Start a Referral */}
          <div 
            onClick={() => onOpenAppointmentModal('referral')}
            className="group bg-gradient-to-br from-[#0c2847]/85 via-[#0b1f38]/80 to-[#071629]/90 backdrop-blur-2xl border border-white/15 hover:border-[#00c982]/60 rounded-3xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center justify-between gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,201,130,0.2)]"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#00c982] text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,201,130,0.4)] group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight group-hover:text-[#00c982] transition-colors">
                  Start a Referral
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                  Get started with a seamless referral process.
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-slate-900/60 border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-[#00c982] group-hover:text-slate-950 group-hover:border-[#00c982] transition-all">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: Contact International Services */}
          <div 
            onClick={onOpenEmergencyModal}
            className="group bg-gradient-to-br from-[#0c2847]/85 via-[#0b1f38]/80 to-[#071629]/90 backdrop-blur-2xl border border-white/15 hover:border-[#00c982]/60 rounded-3xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center justify-between gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,201,130,0.2)]"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#00c982] text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,201,130,0.4)] group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight group-hover:text-[#00c982] transition-colors">
                  Contact International Services
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                  Reach out for global medical support.
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-slate-900/60 border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-[#00c982] group-hover:text-slate-950 group-hover:border-[#00c982] transition-all">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Find a Doctor */}
          <div 
            onClick={() => {
              const el = document.getElementById('doctors');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenAppointmentModal();
            }}
            className="group bg-gradient-to-br from-[#0c2847]/85 via-[#0b1f38]/80 to-[#071629]/90 backdrop-blur-2xl border border-white/15 hover:border-[#00c982]/60 rounded-3xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center justify-between gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,201,130,0.2)]"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#00c982] text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,201,130,0.4)] group-hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight group-hover:text-[#00c982] transition-colors">
                  Find a Doctor
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                  Search and connect with our expert doctors.
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-slate-900/60 border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-[#00c982] group-hover:text-slate-950 group-hover:border-[#00c982] transition-all">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 6. BOTTOM DECORATIVE WAVE RIBBON & DOT MATRIX ACCENT           */}
      {/* ============================================================== */}
      <div className="relative z-10 w-full overflow-hidden leading-none pointer-events-none">
        {/* Dot Matrix Pattern at bottom left */}
        <div className="absolute bottom-2 left-6 w-36 h-16 opacity-25 bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:10px_10px]" />

        {/* Elegant Swooshing Ribbon Curves into White Content Section */}
        <svg 
          className="w-full h-8 sm:h-12 lg:h-16 block text-white" 
          viewBox="0 0 1440 60" 
          fill="none" 
          preserveAspectRatio="none"
        >
          {/* Subtle Emerald Accent Ribbon */}
          <path 
            d="M0,45 C350,15 700,60 1100,25 C1280,10 1380,20 1440,25" 
            stroke="#00c982" 
            strokeWidth="3.5" 
            opacity="0.8" 
          />
          {/* Main White Body Transition */}
          <path 
            d="M0,35 C320,65 600,10 950,40 C1200,60 1350,25 1440,30 L1440,60 L0,60 Z" 
            fill="#ffffff" 
          />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* 7. MOBILE SLIDE-OVER NAVIGATION DRAWER                         */}
      {/* ============================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md xl:hidden flex justify-end"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-sm bg-[#091b32] text-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl border-l border-white/10"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center">
                    <KanhaLogo variant="cyan" className="h-8 w-auto" />
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Drawer Nav Links */}
                <div className="py-4 space-y-1 text-sm font-semibold text-slate-200">
                  <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl bg-white/10 text-white font-bold">Centres & Specialties</a>
                  <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Find a Doctor</a>
                  <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Health Library</a>
                  <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Patients and Visitors</a>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenEmergencyModal(); }} className="w-full text-left p-2.5 rounded-xl hover:bg-white/5">International Services</button>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenReportsModal(); }} className="w-full text-left p-2.5 rounded-xl hover:bg-white/5">e-Services</button>
                  <div className="border-t border-white/10 my-2 pt-2 text-xs text-slate-400 space-y-1">
                    <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block p-2 rounded-lg hover:bg-white/5">About Us</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block p-2 rounded-lg hover:bg-white/5">Suppliers</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block p-2 rounded-lg hover:bg-white/5">Giving</a>
                    <a href="#news" onClick={() => setMobileMenuOpen(false)} className="block p-2 rounded-lg hover:bg-white/5">News</a>
                    <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="block p-2 rounded-lg hover:bg-white/5">Careers</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block p-2 rounded-lg hover:bg-white/5">Contact Us</a>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
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

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEmergencyModal();
                  }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-full flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Helpline: 9091445566</span>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
