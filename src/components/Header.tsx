import React, { useState, useEffect } from 'react';
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<'specialties' | 'centres' | 'services'>('specialties');
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 border-b border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center shrink-0 group mr-4 sm:mr-6"
        >
          <KanhaLogo variant="cyan" className="h-8 sm:h-10 w-auto group-hover:scale-105 transition-transform" />
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-xs lg:text-[13.5px] font-semibold text-white/95">

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

          <a href="#doctors" className="px-3 py-2 text-white/90 hover:text-white font-medium transition-colors cursor-pointer">Find a doctor</a>

          <button onClick={() => toggleDropdown('health-library')} className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer">
            <span>Health Library</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>

          <button onClick={() => toggleDropdown('patients')} className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer">
            <span>Patients and visitors</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>

          <button onClick={() => toggleDropdown('eservices')} className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer">
            <span>e-Services</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>
        </nav>

        {/* Right Action: Start a Referral */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => onOpenAppointmentModal('referral')}
            className="bg-[#00246a] hover:bg-[#001c54] text-white font-semibold text-xs sm:text-[13.5px] px-4 sm:px-5 py-2 rounded-full shadow-md hover:shadow-blue-900/30 border border-blue-400/30 transition-all duration-200 cursor-pointer"
          >
            Start a referral
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
                <KanhaLogo variant="cyan" className="h-8 w-auto" />
                <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <X className="w-4 h-4" />
                </button>
              </div>

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

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal('referral');
                }}
                className="w-full bg-[#00246a] hover:bg-[#001c54] text-white font-black py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg"
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
