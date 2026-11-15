import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Search, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Users, 
  Stethoscope, 
  Menu, 
  X,
  Shield,
  ExternalLink
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
      <div className="relative z-30 w-full border-b border-white/10 bg-slate-950/40 backdrop-blur-md text-[11px] sm:text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          
          {/* Left info items */}
          <div className="flex flex-wrap items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            <a 
              href="mailto:info@kshrc.edu.sa" 
              className="hidden sm:flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>info@kshrc.edu.sa</span>
            </a>

            <div className="hidden md:flex items-center space-x-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center space-x-3 text-slate-300">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all"
              title="YouTube"
              aria-label="YouTube"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white hover:text-slate-950 flex items-center justify-center transition-all"
              title="X (Twitter)"
              aria-label="X"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. FLOATING GLASS CAPSULE NAVBAR                               */}
      {/* ============================================================== */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div className="bg-[#0b1f38]/70 border border-white/20 rounded-full backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
          
          {/* Logo with Cyan Emblem + Kanha Hospitals */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center shrink-0 group mr-2 sm:mr-4"
          >
            <KanhaLogo variant="cyan" className="h-8 sm:h-9 md:h-10 w-auto group-hover:scale-105 transition-transform drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-xs lg:text-[13px] font-semibold text-slate-200">
            
            {/* Active Home Pill with Underglow */}
            <div className="relative">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-slate-900 font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-md hover:bg-slate-100 transition-all cursor-pointer"
              >
                Home
              </button>
              {/* Cyan Glow Underline */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]" />
            </div>

            {/* About Us */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('about')}
                className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>About Us</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Hospital Overview</a>
                  <a href="#doctors" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Leadership & Faculty</a>
                  <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">NABH Accreditations</a>
                </div>
              )}
            </div>

            {/* Education */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('education')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('education')}
                className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Education</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {activeDropdown === 'education' && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <a href="#doctors" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Clinical Training</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">CME Workshops</a>
                  <a href="#doctors" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Fellowship Programs</a>
                </div>
              )}
            </div>

            {/* Research */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('research')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('research')}
                className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Research</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {activeDropdown === 'research' && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Clinical Trials</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Renal Innovation</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Laser Urology Studies</a>
                </div>
              )}
            </div>

            {/* Healthcare Services */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('services')}
                className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Healthcare Services</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Urology & Laser Stone Care</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">24/7 Advanced Hemodialysis</a>
                  <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">3 Modular Laminar Flow OTs</a>
                  <a href="#facilities" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">24/7 Casualty & Trauma Unit</a>
                  <a href="#specialties" className="block p-2 rounded-xl hover:bg-white/10 text-sky-400 font-bold">All 24 Multi-Specialties &rarr;</a>
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
                className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>International Services</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {activeDropdown === 'international' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <button onClick={onOpenEmergencyModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Global Patient Desk</button>
                  <button onClick={onOpenEmergencyModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Medical Visa Assistance</button>
                  <button onClick={onOpenEmergencyModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Tele-Consultation</button>
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
                className="px-2.5 py-2 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>e-Services</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {activeDropdown === 'eservices' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#0b1f38]/95 border border-white/15 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 text-xs text-slate-200">
                  <button onClick={onOpenReportsModal} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Download Lab Reports</button>
                  <button onClick={() => onOpenAppointmentModal()} className="w-full text-left p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Online OPD Booking</button>
                  <a href="#symptom-matcher" className="block p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors">AI Symptom Checker</a>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <a href="#contact" className="px-2.5 py-2 hover:text-white transition-colors">
              Contact Us
            </a>

          </nav>

          {/* Right Action: Emerald "Start a Referral →" Button + Search Icon */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => onOpenAppointmentModal('referral')}
              className="bg-[#00c982] hover:bg-[#00b374] text-slate-950 font-extrabold text-xs sm:text-[13px] px-4 sm:px-5 py-2 rounded-full shadow-[0_0_20px_rgba(0,201,130,0.45)] flex items-center space-x-1.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start a Referral</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Search Icon Button */}
            <button
              onClick={onOpenSearchModal}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white/10 text-white font-bold"
                  >
                    Home
                  </button>
                  <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">About Us</a>
                  <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Healthcare Services</a>
                  <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Find a Doctor</a>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenEmergencyModal(); }} className="w-full text-left p-2.5 rounded-xl hover:bg-white/5">International Services</button>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenReportsModal(); }} className="w-full text-left p-2.5 rounded-xl hover:bg-white/5">e-Services (Lab Reports)</button>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block p-2.5 rounded-xl hover:bg-white/5">Contact Us</a>
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
