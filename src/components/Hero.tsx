import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  Users, 
  Stethoscope, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

import type { PageRoute } from '../types';

interface HeroProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
  onOpenReportsModal?: () => void;
  onNavigate?: (route: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenSearchModal,
  onOpenReportsModal = () => {},
  onNavigate,
}) => {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] overflow-hidden select-none bg-slate-950 flex flex-col justify-between">
      
      {/* ============================================================== */}
      {/* 1. MASTER BACKGROUND LAYER (LUXURY HOSPITAL VIDEO BACKGROUND)  */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Slate Canvas Fallback */}
        <div className="absolute inset-0 bg-[#060e1a]" />

        {/* Video Element: Solid, Crisp, Centered, and Watermark-Clipped */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] scale-[1.12] sm:scale-[1.14] origin-top-left contrast-[1.06] saturate-[1.05]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Clean, Solid Cinematic Readability Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/70 via-50% to-slate-950/15" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#020712] via-[#020712]/60 to-transparent" />
        <div className="absolute -bottom-4 -right-4 w-48 h-36 bg-[#020712] rounded-tl-full blur-2xl pointer-events-none opacity-90" />
      </div>



      {/* ============================================================== */}
      {/* 2. MAIN HERO CONTENT AREA                                      */}
      {/* ============================================================== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-8 sm:pb-12 md:pb-14 flex-1 flex flex-col justify-end">
        <div className="max-w-4xl">
          
          {/* Trust & Accreditation Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-[12.5px] font-medium tracking-wide shadow-sm mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">Kanha Hospitals • Kompally, Hyderabad</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-emerald-300 font-medium hidden sm:inline">24/7 Multi-Specialty & Emergency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.24] sm:leading-[1.28] drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
            Your Health, Our Priority.<br className="hidden sm:inline" />
            Care, Compassion & Trust.
          </h1>

          {/* Description Paragraph */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm lg:text-[15px] text-white/90 leading-[1.65] max-w-2xl font-normal drop-shadow-sm">
            At Kanha Hospitals, our senior medical faculty combines multi-specialty surgical expertise, advanced laser & dialysis technologies, and 24/7 emergency care — committed to compassionate healing and trusted patient outcomes.
          </p>

          {/* Clinical Authority Highlights */}
          <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 text-white/90 text-xs sm:text-[13px] font-medium">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-4 h-4 rounded-full bg-cyan-500/25 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span>50+ Senior Specialists</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-4 h-4 rounded-full bg-cyan-500/25 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span>Advanced Laser & Dialysis</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-4 h-4 rounded-full bg-cyan-500/25 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span>24/7 Rapid Emergency & ICU</span>
            </div>
          </div>

          {/* 3 Bottom Action Cards (Mobile-friendly vertical stack on small screens, row on sm+) */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 max-w-4xl relative z-20">
            
            {/* Card 1: Start a Referral */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('referral');
                else onOpenAppointmentModal('referral');
              }}
              className="flex-1 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-[#00388c] via-[#00246a] to-[#001744] hover:brightness-110 text-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xl hover:shadow-[#00246a]/50 border border-blue-400/25 cursor-pointer transition-all duration-200 hover:-translate-y-1 relative overflow-hidden group"
            >
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
                <path d="M0,80 Q50,40 100,70 T200,50 L200,120 L0,120 Z" fill="white" />
              </svg>

              <div className="relative z-10">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <span className="font-bold text-xs sm:text-sm md:text-[15px] text-white">Start a Referral</span>
                <ExternalLink className="w-4 h-4 text-white/90 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 2: Contact International Services */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('international');
                else onOpenEmergencyModal();
              }}
              className="flex-1 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-[#00388c] via-[#00246a] to-[#001744] hover:brightness-110 text-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xl hover:shadow-[#00246a]/50 border border-blue-400/25 cursor-pointer transition-all duration-200 hover:-translate-y-1 relative overflow-hidden group"
            >
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
                <path d="M0,80 Q50,40 100,70 T200,50 L200,120 L0,120 Z" fill="white" />
              </svg>

              <div className="relative z-10">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <span className="font-bold text-xs sm:text-sm md:text-[15px] text-white leading-tight">
                  Contact International Services
                </span>
                <ArrowRight className="w-4 h-4 text-white/90 stroke-[2] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Find a Doctor */}
            <div 
              onClick={() => {
                if (onNavigate) {
                  onNavigate('doctors');
                } else {
                  const el = document.getElementById('doctors');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onOpenAppointmentModal();
                }
              }}
              className="flex-1 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-[#00388c] via-[#00246a] to-[#001744] hover:brightness-110 text-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xl hover:shadow-[#00246a]/50 border border-blue-400/25 cursor-pointer transition-all duration-200 hover:-translate-y-1 relative overflow-hidden group"
            >
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
                <path d="M0,80 Q50,40 100,70 T200,50 L200,120 L0,120 Z" fill="white" />
              </svg>

              <div className="relative z-10">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.5]" />
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
      {/* 3. BOTTOM WHITE SWOOPING CURVE ACCENT                          */}
      {/* ============================================================== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg 
          className="w-full h-16 sm:h-24 lg:h-32 block text-white" 
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

    </section>
  );
};
