import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Menu,
  X,
  Search,
  ArrowRight,
  Phone,
  Globe
} from 'lucide-react';
import { KanhaLogo } from './KanhaLogo';
import type { PageRoute } from '../types';

interface HeaderProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
  onOpenReportsModal: () => void;
  onNavigate?: (route: PageRoute) => void;
  currentPage?: PageRoute;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenSearchModal,
  onOpenReportsModal,
  onNavigate,
  currentPage = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<'specialties' | 'centres' | 'services'>('specialties');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-slate-950/95 border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.55)] backdrop-blur-2xl'
          : 'bg-slate-950/85 border-b border-white/10 backdrop-blur-md'
      }`}
    >
      {/* 1. TOP UTILITY STRIP (Desktop only, when at top of homepage) */}
      {!isScrolled && currentPage === 'home' && (
        <div className="hidden lg:block w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-md text-xs text-slate-300 transition-all duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
            {/* Left Tabs: Healthcare, Education, Research */}
            <div className="flex items-center space-x-6 h-full">
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('home');
                }}
                className="h-full flex items-center font-bold text-xs text-white transition-colors relative cursor-pointer"
              >
                <span>Healthcare</span>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400 rounded-full" />
              </button>

              <button
                onClick={() => {
                  if (onNavigate) onNavigate('education');
                }}
                className="h-full flex items-center font-medium text-xs text-slate-400 hover:text-white transition-colors relative cursor-pointer"
              >
                <span>Education</span>
              </button>

              <button
                onClick={() => {
                  if (onNavigate) onNavigate('research');
                }}
                className="h-full flex items-center font-medium text-xs text-slate-400 hover:text-white transition-colors relative cursor-pointer"
              >
                <span>Research</span>
              </button>
            </div>

            {/* Right Quick Links */}
            <div className="flex items-center space-x-5 text-xs text-slate-300 font-medium">
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('international');
                }}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>International Services</span>
              </button>
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('insurance');
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Cashless Insurance
              </button>
              <a
                href="tel:9091445566"
                className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>24/7 Casualty: 9091445566</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between w-full">

        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center shrink-0 group mr-2 sm:mr-6"
        >
          <KanhaLogo variant="cyan" className="h-7 sm:h-9 w-auto group-hover:scale-105 transition-transform" />
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs lg:text-[12.5px] xl:text-[13.5px] font-semibold text-white/95">

          {/* Centres & Specialties */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('centres')}
          >
            <button
              onClick={() => toggleDropdown('centres')}
              className={`transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${activeDropdown === 'centres'
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
                      className={`w-full text-left p-3 rounded-xl flex items-center justify-between text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${activeSubCategory === 'centres'
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
                      className={`w-full text-left p-3 rounded-xl flex items-center justify-between text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${activeSubCategory === 'specialties'
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
                      className={`w-full text-left p-3 rounded-xl flex items-center justify-between text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${activeSubCategory === 'services'
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
                          className="text-[15px] font-bold text-slate-950 hover:text-[#00246a] flex items-center gap-1.5 transition-colors group"
                        >
                          <span>All specialties</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00246a]" />
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
                            <div className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#00246a] transition-colors">
                              In Hyderabad (Kompally)
                            </div>
                            <div className="text-[11.5px] text-slate-500">Main Super-Specialty Hospital & Inpatient</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#specialties"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#00246a] transition-colors">
                              In Hitec City Clinic
                            </div>
                            <div className="text-[11.5px] text-slate-500">Day Consultation & Preventive Care Centre</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#specialties"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#00246a] transition-colors">
                              In Secunderabad OPD
                            </div>
                            <div className="text-[11.5px] text-slate-500">Specialist OPD & Follow-Up Services</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
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
                          className="text-[15px] font-bold text-slate-950 hover:text-[#00246a] flex items-center gap-1.5 transition-colors group"
                        >
                          <span>All Centres of Excellence</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00246a]" />
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
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              Advanced Urology Institute
                            </div>
                            <div className="text-[11.5px] text-slate-500">Laser stone enucleation, prostate & reconstructive uro</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#specialties"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              Renal Sciences & Dialysis Centre
                            </div>
                            <div className="text-[11.5px] text-slate-500">20+ station high-flux dialysis & acute kidney failure care</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#specialties"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              Minimally Invasive Surgery Hub
                            </div>
                            <div className="text-[11.5px] text-slate-500">Single-incision laparoscopy & scarless procedures</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#specialties"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              Men&apos;s Health & Andrology
                            </div>
                            <div className="text-[11.5px] text-slate-500">Male infertility, hormonal health & microsurgery</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#specialties"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              24/7 Critical Emergency Centre
                            </div>
                            <div className="text-[11.5px] text-slate-500">Immediate trauma, stroke, cardiac & ICU resuscitation</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
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
                          className="text-[15px] font-bold text-slate-950 hover:text-[#00246a] flex items-center gap-1.5 transition-colors group"
                        >
                          <span>All Hospital Services</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00246a]" />
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
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              24/7 Casualty & Life Support ICU
                            </div>
                            <div className="text-[11.5px] text-slate-500">Continuous invasive monitoring & multi-organ support</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#facilities"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              3 Modular Laminar Flow OTs
                            </div>
                            <div className="text-[11.5px] text-slate-500">Class 100 HEPA filtration for infection-free surgeries</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#facilities"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              20+ Station Dialysis Bay
                            </div>
                            <div className="text-[11.5px] text-slate-500">Individual TV console & ultra-pure RO water system</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#facilities"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              Pathology & Ultrasound Imaging
                            </div>
                            <div className="text-[11.5px] text-slate-500">Same-day accredited reports & digital Doppler ultrasound</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>

                        <a
                          href="#facilities"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#00246a] transition-colors">
                              In-House 24/7 Pharmacy
                            </div>
                            <div className="text-[11.5px] text-slate-500">100% genuine temperature-regulated medicines</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00246a] group-hover:translate-x-0.5 transition-all" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (onNavigate) onNavigate('doctors');
              else {
                const el = document.getElementById('doctors');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-3 py-2 text-white/90 hover:text-white font-medium transition-colors cursor-pointer"
          >
            Find a doctor
          </button>

          <button 
            onClick={() => {
              if (onNavigate) onNavigate('health-library');
            }} 
            className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>Health Library</span>
          </button>

          <button 
            onClick={() => {
              if (onNavigate) onNavigate('patients-visitors');
            }} 
            className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>Patients and visitors</span>
          </button>

          <button 
            onClick={() => {
              if (onNavigate) onNavigate('eservices');
            }} 
            className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>e-Services</span>
          </button>
        </nav>

        {/* Right Action: Search, Start a Referral & Mobile Hamburger */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <button
            onClick={onOpenSearchModal}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 shrink-0"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </button>

          <button
            onClick={() => {
              if (onNavigate) onNavigate('referral');
              else onOpenAppointmentModal('referral');
            }}
            className="hidden lg:inline-flex bg-[#00246a] hover:bg-[#001c54] text-white font-semibold text-xs lg:text-[13px] xl:text-[13.5px] px-4 xl:px-5 py-2 rounded-full shadow-md hover:shadow-blue-900/30 border border-blue-400/30 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Start a referral
          </button>

          {/* Mobile Hamburger Toggle (Always visible on mobile & tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/35 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-sm shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>

      </div>

      {/* Mobile Sticky Slide-Over Drawer rendered to document.body via Portal (Immune to parent transforms & blur) */}
      {typeof document !== 'undefined' && mobileMenuOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-[#08172b] text-white h-full overflow-y-auto p-5 sm:p-6 flex flex-col justify-between shadow-2xl border-l border-white/15">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (onNavigate) onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="cursor-pointer"
                >
                  <KanhaLogo variant="cyan" className="h-8 sm:h-9 w-auto" />
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer border border-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items (Dedicated Pages) */}
              <div className="py-4 space-y-1.5 text-sm font-semibold text-slate-200">
                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('home'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'home' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>🏠 Home Overview</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('specialties'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'specialties' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>🏥 Centres & Specialties (24)</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('doctors'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'doctors' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>👨‍⚕️ Find a Doctor & OPD Slots</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('health-library'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'health-library' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>📚 Health Library & Care Guides</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('patients-visitors'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'patients-visitors' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>👥 Patients & Visitors Guide</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('international'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'international' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>🌐 International Patients Concierge</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('eservices'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'eservices' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>📱 e-Services (Lab Reports & Tele-OPD)</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('insurance'); }} 
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    currentPage === 'insurance' ? 'bg-[#00246a] text-white font-bold border border-blue-400/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <span>🛡️ Cashless Insurance (50+ TPAs)</span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </button>

                <div className="border-t border-white/10 my-3 pt-3 text-xs text-slate-300 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
                    Academic & Research
                  </div>
                  <button 
                    onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('education'); }} 
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                      currentPage === 'education' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/5'
                    }`}
                  >
                    <span>🎓 Education & Residency Academy</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </button>
                  <button 
                    onClick={() => { setMobileMenuOpen(false); if (onNavigate) onNavigate('research'); }} 
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                      currentPage === 'research' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/5'
                    }`}
                  >
                    <span>🔬 Clinical Research & ICMR Trials</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom Call to Actions */}
            <div className="pt-4 border-t border-white/15 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate('referral');
                  else onOpenAppointmentModal('referral');
                }}
                className="w-full bg-[#00246a] hover:bg-[#001c54] text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 shadow-lg border border-blue-400/30 cursor-pointer text-sm"
              >
                <span>Start a Referral</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:9091445566"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-md cursor-pointer text-xs"
              >
                <Phone className="w-4 h-4 text-white animate-pulse" />
                <span>24/7 Casualty: +91 9091445566</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

    </header>
  );
};
