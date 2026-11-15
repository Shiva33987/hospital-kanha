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

          <a href="#doctors" className="px-3 py-2 text-white/90 hover:text-white font-medium transition-colors cursor-pointer">Find a doctor</a>
          
          <button onClick={() => toggleDropdown('health-library')} className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer">
            <span>Health Library</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>

          <button onClick={() => toggleDropdown('patients')} className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer">
            <span>Patients and visitors</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>

          <button onClick={() => toggleDropdown('international')} className="px-3 py-2 text-white/90 hover:text-white font-medium flex items-center space-x-1 transition-colors cursor-pointer">
            <span>International services</span>
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
            className="bg-[#00875a] hover:bg-[#00704a] text-white font-semibold text-xs sm:text-[13.5px] px-4 sm:px-5 py-2 rounded-full shadow-md hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
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
                className="w-full bg-[#00875a] hover:bg-[#00704a] text-white font-black py-3 rounded-full flex items-center justify-center space-x-2"
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
