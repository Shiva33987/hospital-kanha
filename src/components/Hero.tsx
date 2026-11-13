import React from 'react';
import { 
  ShieldCheck, 
  Star, 
  Calendar, 
  Stethoscope, 
  Clock, 
  Activity,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#fbfdff] via-[#f1f6fb] to-[#e4eef8] overflow-hidden pt-4 sm:pt-8 pb-8 lg:pb-12">
      
      {/* Dynamic Background Wave & Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 60% 50%, rgba(2, 132, 199, 0.08) 0%, rgba(14, 165, 233, 0.03) 45%, transparent 75%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* MAIN 2-COLUMN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ================= LEFT COLUMN: HEADLINE, COPY, SOCIAL PROOF & CTAS ================= */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 pt-2 lg:pt-4">
            
            {/* 1. Top Pill Badge: Trusted by 500,000+ Patients Worldwide */}
            <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md border border-sky-200/90 text-slate-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-[0_2px_10px_rgba(2,132,199,0.08)]">
              <ShieldCheck className="w-4 h-4 text-[#0077e6]" />
              <span className="tracking-tight">Trusted by 500,000+ Patients Worldwide</span>
            </div>

            {/* 2. Headline exactly matching attached image typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black leading-[1.08] tracking-tight">
              <span className="block text-[#0a1e3b]">Expert Doctors</span>
              <span className="block text-[#0077e6] my-1">Instant Access</span>
              <span className="block text-[#0a1e3b]">Peace of Mind</span>
            </h1>

            {/* 3. Description copy */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Book appointments, consult certified doctors, manage prescriptions, and track your health — all from one secure platform designed for modern care.
            </p>

            {/* 4. Social Proof: 4 Doctor Avatars + 5 Gold Stars + 4.9/5 Rating */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <img 
                src="/images/hero_avatars_hd.png" 
                alt="Certified Specialists at Kanha Hospitals" 
                className="h-9 w-auto object-contain rounded-full shadow-sm"
              />
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-amber-400 space-x-0.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-sm font-bold text-[#0a1e3b]">
                  4.9/5 Patient Rating
                </span>
              </div>
            </div>

            {/* 5. Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              
              {/* Get Started Button with White Circle Arrow */}
              <button
                onClick={() => onOpenAppointmentModal()}
                className="bg-[#0077e6] hover:bg-[#0066cc] text-white font-bold text-sm px-6 py-3 rounded-full shadow-[0_8px_20px_rgba(0,119,230,0.32)] hover:shadow-[0_10px_25px_rgba(0,119,230,0.45)] transition-all flex items-center space-x-2.5 cursor-pointer group active:scale-[0.98]"
              >
                <span>Get Started</span>
                <span className="w-5 h-5 rounded-full bg-white text-[#0077e6] flex items-center justify-center font-bold text-xs shadow-sm group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-[#0077e6]" />
                </span>
              </button>

              {/* Book Appointment Button with Calendar Icon */}
              <button
                onClick={() => onOpenAppointmentModal()}
                className="bg-white hover:bg-slate-50 border border-[#0077e6]/40 hover:border-[#0077e6] text-[#0a1e3b] font-bold text-sm px-5 py-3 rounded-full shadow-sm hover:shadow transition-all flex items-center space-x-2 cursor-pointer active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[#0077e6]" />
                <span>Book Appointment</span>
              </button>

            </div>

            {/* 6. Bottom 4 Feature Highlights with Dividers */}
            <div className="pt-6 mt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-700 text-xs font-semibold">
              <div className="flex items-center space-x-2 pr-1">
                <Stethoscope className="w-4 h-4 text-[#0077e6] shrink-0" />
                <span className="leading-tight">Expert Specialists</span>
              </div>
              <div className="flex items-center space-x-2 pr-1 sm:border-l sm:border-slate-200/80 sm:pl-3">
                <Clock className="w-4 h-4 text-[#0077e6] shrink-0" />
                <span className="leading-tight">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 pr-1 sm:border-l sm:border-slate-200/80 sm:pl-3">
                <ShieldCheck className="w-4 h-4 text-[#0077e6] shrink-0" />
                <span className="leading-tight">Secure & Confidential</span>
              </div>
              <div className="flex items-center space-x-2 sm:border-l sm:border-slate-200/80 sm:pl-3">
                <Activity className="w-4 h-4 text-[#0077e6] shrink-0" />
                <span className="leading-tight">Better Health Brighter Future</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: DOCTOR, CORRIDOR, 3D WAVES & SATISFACTION CARD ================= */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end items-end relative z-0">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <img
                src="/images/hero_scene_hd.png"
                alt="Kanha Hospitals Specialist Doctor & Patient Satisfaction"
                className="w-full h-auto object-contain object-bottom drop-shadow-md select-none"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
