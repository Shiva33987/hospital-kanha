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
  Globe,
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
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[720px] overflow-hidden select-none bg-slate-950 flex flex-col justify-between">
      
      {/* ============================================================== */}
      {/* 1. MASTER BACKGROUND LAYER (LUXURY HOSPITAL VIDEO BACKGROUND)  */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Ambient Dark Canvas Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061426] via-[#0a203b] to-[#030c18]" />

        {/* Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-x-0 -top-6 sm:-top-8 md:-top-10 w-full h-[135%] object-cover object-[center_top] translate-y-16 sm:translate-y-22 md:translate-y-28 lg:translate-y-32 xl:translate-y-36"
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
                  <div className="w-72 bg-[#17212d]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)] text-sm text-slate-200 space-y-2.5">
                    {/* Top All Centres Link */}
                    <a 
                      href="#specialties" 
                      onClick={() => setActiveDropdown(null)} 
                      className="flex items-center space-x-3 font-bold text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-full bg-slate-900/80 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-105 group-hover:bg-white group-hover:text-slate-900 transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[13.5px]">All Centres & Specialties</span>
                    </a>

                    {/* Subcategories */}
                    <div className="space-y-1.5 pt-1">
                      <button 
                        onMouseEnter={() => setActiveSubCategory('centres')}
                        onClick={() => setActiveSubCategory('centres')}
                        className={`w-full text-left p-3 rounded-xl flex items-center justify-between text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          activeSubCategory === 'centres'
                            ? 'bg-white text-slate-950 shadow-lg font-bold'
                            : 'hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        <span>Centres of Excellence</span>
                        <ChevronRight className={`w-4 h-4 ${activeSubCategory === 'centres' ? 'text-slate-950' : 'opacity-60'}`} />
                      </button>

                      <button 
                        onMouseEnter={() => setActiveSubCategory('specialties')}
                        onClick={() => setActiveSubCategory('specialties')}
                        className={`w-full text-left p-3 rounded-xl flex items-center justify-between text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          activeSubCategory === 'specialties'
                            ? 'bg-white text-slate-950 shadow-lg font-bold'
                            : 'hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        <span>Specialties</span>
                        <ChevronRight className={`w-4 h-4 ${activeSubCategory === 'specialties' ? 'text-slate-950' : 'opacity-60'}`} />
                      </button>

                      <button 
                        onMouseEnter={() => setActiveSubCategory('services')}
                        onClick={() => setActiveSubCategory('services')}
                        className={`w-full text-left p-3 rounded-xl flex items-center justify-between text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          activeSubCategory === 'services'
                            ? 'bg-white text-slate-950 shadow-lg font-bold'
                            : 'hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        <span>Services</span>
                        <ChevronRight className={`w-4 h-4 ${activeSubCategory === 'services' ? 'text-slate-950' : 'opacity-60'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Right Crisp White Card (Sub Box - Enlarged, Professional & Premium) */}
                  <div className="w-[380px] lg:w-[420px] bg-white text-slate-800 rounded-2xl p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.06)] border border-slate-100 text-sm font-medium animate-in fade-in duration-150">
                    {activeSubCategory === 'specialties' && (
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="text-[15px] font-bold text-slate-950 hover:text-[#00875a] flex items-center gap-1.5 transition-colors group"
                          >
                            <span>All specialties</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00875a]" />
                          </a>
                          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                            3 Clinics
                          </span>
                        </div>

                        {/* Location Links */}
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                            Available Locations
                          </span>
                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#00875a] transition-colors">
                                In Hyderabad (Kompally)
                              </div>
                              <div className="text-[11.5px] text-slate-500">Main Super-Specialty Hospital & Inpatient</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#00875a] transition-colors">
                                In Hitec City Clinic
                              </div>
                              <div className="text-[11.5px] text-slate-500">Day Consultation & Preventive Care Centre</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#00875a] transition-colors">
                                In Secunderabad OPD
                              </div>
                              <div className="text-[11.5px] text-slate-500">Specialist OPD & Follow-Up Services</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>
                        </div>

                        {/* Key Disciplines Grid */}
                        <div className="border-t border-slate-100 pt-3">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                            Key Disciplines
                          </span>
                          <div className="grid grid-cols-2 gap-2 text-[12.5px]">
                            <a 
                              href="#specialties" 
                              onClick={() => setActiveDropdown(null)} 
                              className="p-2 rounded-lg bg-slate-50/70 hover:bg-emerald-50 hover:text-emerald-800 font-medium text-slate-700 transition-colors flex items-center justify-between"
                            >
                              <span>Urology & Andrology</span>
                            </a>
                            <a 
                              href="#specialties" 
                              onClick={() => setActiveDropdown(null)} 
                              className="p-2 rounded-lg bg-slate-50/70 hover:bg-emerald-50 hover:text-emerald-800 font-medium text-slate-700 transition-colors flex items-center justify-between"
                            >
                              <span>Nephrology & Dialysis</span>
                            </a>
                            <a 
                              href="#specialties" 
                              onClick={() => setActiveDropdown(null)} 
                              className="p-2 rounded-lg bg-slate-50/70 hover:bg-emerald-50 hover:text-emerald-800 font-medium text-slate-700 transition-colors flex items-center justify-between"
                            >
                              <span>Kidney Transplant</span>
                            </a>
                            <a 
                              href="#specialties" 
                              onClick={() => setActiveDropdown(null)} 
                              className="p-2 rounded-lg bg-slate-50/70 hover:bg-emerald-50 hover:text-emerald-800 font-medium text-slate-700 transition-colors flex items-center justify-between"
                            >
                              <span>Laparoscopic Surgery</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSubCategory === 'centres' && (
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="text-[15px] font-bold text-slate-950 hover:text-[#00875a] flex items-center gap-1.5 transition-colors group"
                          >
                            <span>All Centres of Excellence</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00875a]" />
                          </a>
                          <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/60">
                            Tertiary Care
                          </span>
                        </div>

                        {/* List */}
                        <div className="space-y-1">
                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                Advanced Urology Institute
                              </div>
                              <div className="text-[11.5px] text-slate-500">Laser stone enucleation, prostate & reconstructive uro</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                Renal Sciences & Dialysis Centre
                              </div>
                              <div className="text-[11.5px] text-slate-500">20+ station high-flux dialysis & acute kidney failure care</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                Minimally Invasive Surgery Hub
                              </div>
                              <div className="text-[11.5px] text-slate-500">Single-incision laparoscopy & scarless procedures</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                Men&apos;s Health & Andrology
                              </div>
                              <div className="text-[11.5px] text-slate-500">Male infertility, hormonal health & microsurgery</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#specialties" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                24/7 Critical Emergency Centre
                              </div>
                              <div className="text-[11.5px] text-slate-500">Immediate trauma, stroke, cardiac & ICU resuscitation</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>
                        </div>
                      </div>
                    )}

                    {activeSubCategory === 'services' && (
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <a 
                            href="#facilities" 
                            onClick={() => setActiveDropdown(null)} 
                            className="text-[15px] font-bold text-slate-950 hover:text-[#00875a] flex items-center gap-1.5 transition-colors group"
                          >
                            <span>All Hospital Services</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00875a]" />
                          </a>
                          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                            24/7 Service
                          </span>
                        </div>

                        {/* List */}
                        <div className="space-y-1">
                          <a 
                            href="#facilities" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                24/7 Casualty & Life Support ICU
                              </div>
                              <div className="text-[11.5px] text-slate-500">Continuous invasive monitoring & multi-organ support</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#facilities" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                3 Modular Laminar Flow OTs
                              </div>
                              <div className="text-[11.5px] text-slate-500">Class 100 HEPA filtration for infection-free surgeries</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#facilities" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                20+ Station Dialysis Bay
                              </div>
                              <div className="text-[11.5px] text-slate-500">Individual TV console & ultra-pure RO water system</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#facilities" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                Pathology & Ultrasound Imaging
                              </div>
                              <div className="text-[11.5px] text-slate-500">Same-day accredited reports & digital Doppler ultrasound</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>

                          <a 
                            href="#facilities" 
                            onClick={() => setActiveDropdown(null)} 
                            className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00875a] transition-colors">
                                In-House 24/7 Pharmacy
                              </div>
                              <div className="text-[11.5px] text-slate-500">100% genuine temperature-regulated medicines</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00875a] group-hover:translate-x-0.5 transition-all" />
                          </a>
                        </div>
                      </div>
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
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Specialties Directory</a>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Group: "Start a referral" */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Start a referral Pill Button */}
            <button
              onClick={() => onOpenAppointmentModal('referral')}
              className="bg-[#00246a] hover:bg-[#001c54] text-white font-semibold text-xs sm:text-[13.5px] px-4 sm:px-5 py-2 rounded-full shadow-md hover:shadow-blue-900/30 border border-blue-400/30 transition-all duration-200 cursor-pointer"
            >
              Start a referral
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
      {/* 4. MAIN HERO CONTENT AREA (PREMIUM ELEVATED MEDICAL DESIGN)     */}
      {/* ============================================================== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-14 flex-1 flex flex-col justify-end">
        <div className="max-w-4xl">
          
          {/* Trust & Accreditation Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-[12.5px] font-medium tracking-wide shadow-sm mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">Kanha Hospitals • Kompally, Hyderabad</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-emerald-300 font-medium hidden sm:inline">24/7 Multi-Specialty & Emergency</span>
          </div>

          {/* Main Headline (Kanha Hospitals Official Motto & Brand Voice) */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.24] sm:leading-[1.28] drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
            Your Health, Our Priority.<br className="hidden sm:inline" />
            Care, Compassion & Trust.
          </h1>

          {/* Description Paragraph (Authentic to Kanha Hospitals) */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm lg:text-[15px] text-white/90 leading-[1.65] max-w-2xl font-normal drop-shadow-sm">
            At Kanha Hospitals, our senior medical faculty combines multi-specialty surgical expertise, advanced laser & dialysis technologies, and 24/7 emergency care — committed to compassionate healing and trusted patient outcomes.
          </p>

          {/* Clinical Authority Highlights */}
          <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-white/90 text-xs sm:text-[13px] font-medium">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500/25 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span>50+ Senior Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500/25 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span>Advanced Laser & Dialysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500/25 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span>24/7 Rapid Emergency & ICU</span>
            </div>
          </div>

          {/* 3 Bottom Emerald Action Cards (Perfect balanced placement) */}
          <div className="mt-8 sm:mt-10 md:mt-12 -translate-x-5 sm:-translate-x-10 md:-translate-x-16 lg:-translate-x-20 xl:-translate-x-24 translate-y-1 sm:translate-y-2 md:translate-y-3 flex flex-wrap lg:flex-nowrap items-stretch gap-3 sm:gap-4 max-w-4xl relative z-20">
            
            {/* Card 1: Start a Referral */}
            <div 
              onClick={() => onOpenAppointmentModal('referral')}
              className="flex-1 min-w-[190px] sm:min-w-[220px] md:min-w-[240px] h-28 sm:h-30 md:h-34 bg-gradient-to-br from-[#00875a] via-[#008055] to-[#006e49] hover:brightness-105 text-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-4.5 flex flex-col justify-between shadow-2xl cursor-pointer transition-all duration-200 hover:-translate-y-1.5 relative overflow-hidden group"
            >
              {/* Subtle wave watermark */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
                <path d="M0,80 Q50,40 100,70 T200,50 L200,120 L0,120 Z" fill="white" />
              </svg>

              <div className="relative z-10">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <span className="font-bold text-xs sm:text-sm md:text-[15px] text-white">Start a Referral</span>
                <ExternalLink className="w-4 h-4 text-white/90 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 2: Contact International Services */}
            <div 
              onClick={onOpenEmergencyModal}
              className="flex-1 min-w-[190px] sm:min-w-[220px] md:min-w-[240px] h-28 sm:h-30 md:h-34 bg-gradient-to-br from-[#00875a] via-[#008055] to-[#006e49] hover:brightness-105 text-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-4.5 flex flex-col justify-between shadow-2xl cursor-pointer transition-all duration-200 hover:-translate-y-1.5 relative overflow-hidden group"
            >
              {/* Subtle wave watermark */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
                <path d="M0,80 Q50,40 100,70 T200,50 L200,120 L0,120 Z" fill="white" />
              </svg>

              <div className="relative z-10">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <span className="font-bold text-xs sm:text-sm md:text-[15px] text-white leading-tight">
                  Contact International<br />Services
                </span>
                <ArrowRight className="w-4 h-4 text-white/90 stroke-[2] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Find a Doctor */}
            <div 
              onClick={() => {
                const el = document.getElementById('doctors');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onOpenAppointmentModal();
              }}
              className="flex-1 min-w-[190px] sm:min-w-[220px] md:min-w-[240px] h-28 sm:h-30 md:h-34 bg-gradient-to-br from-[#00875a] via-[#008055] to-[#006e49] hover:brightness-105 text-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-4.5 flex flex-col justify-between shadow-2xl cursor-pointer transition-all duration-200 hover:-translate-y-1.5 relative overflow-hidden group"
            >
              {/* Subtle wave watermark */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
                <path d="M0,80 Q50,40 100,70 T200,50 L200,120 L0,120 Z" fill="white" />
              </svg>

              <div className="relative z-10">
                <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <span className="font-bold text-xs sm:text-sm md:text-[15px] text-white">Find a Doctor</span>
                <ArrowRight className="w-4 h-4 text-white/90 stroke-[2] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 5. BOTTOM WHITE SWOOPING CURVE ACCENT                          */}
      {/* ============================================================== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg 
          className="w-full h-20 sm:h-28 lg:h-36 block text-white" 
          viewBox="0 0 1440 200" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 0,40 C 160,70 340,150 680,190 C 950,205 1200,200 1440,200 L 1440,200 L 0,200 Z" 
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
