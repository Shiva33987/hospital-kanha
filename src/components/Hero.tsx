import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <section className="relative w-full min-h-[680px] lg:min-h-[720px] bg-gradient-to-b from-[#f0f4f9] via-[#edf3f9] to-[#e4eef8] overflow-hidden flex flex-col justify-between pt-6 pb-8 lg:pb-12">
      
      {/* VIBRANT CYAN / SKY-BLUE RADIAL GLOW BLENDED IN LOWER CENTER & LEFT */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 45% 72%, rgba(56, 189, 248, 0.42) 0%, rgba(14, 165, 233, 0.22) 32%, transparent 68%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* MAIN 3-ZONE CONTENT AREA: LEFT TEXT | CENTER DOCTOR | RIGHT WIDGETS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative pt-4 sm:pt-6">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 space-y-6 z-10 pt-2 lg:pt-4">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-700 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <span>Trusted by 500,000+ Patients Worldwide</span>
            </div>

            {/* Massive Staggered Headline exactly matching image */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black text-[#0c2340] leading-[1.12] tracking-tight">
              <span className="block">Expert Doctors</span>
              <span className="block pl-6 sm:pl-12 text-[#0c2340]">Instant Access</span>
              <span className="block">Peace of Mind</span>
            </h1>

            {/* Doctor Avatars & Social Proof Rating Row */}
            <div className="flex items-center space-x-4 pt-4 sm:pt-6">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden items-center">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150"
                  alt="Doctor 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1594824813587-43df81389417?auto=format&fit=crop&q=80&w=150"
                  alt="Doctor 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150"
                  alt="Doctor 3"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150"
                  alt="Doctor 4"
                />
                <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-white bg-[#0284c7] text-white font-extrabold text-xs items-center justify-center">
                  1M+
                </div>
              </div>

              {/* Star Rating & Text */}
              <div className="flex flex-col">
                <div className="flex items-center text-amber-400 space-x-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#0c2340] mt-0.5">
                  4.9/5 Patient Rating
                </span>
              </div>
            </div>

          </div>

          {/* ================= CENTER DOCTOR IMAGE ================= */}
          <div className="lg:col-span-4 flex justify-center items-end relative z-0 -mt-6 sm:-mt-10 lg:mt-0">
            <div className="relative w-full max-w-[380px] lg:max-w-[440px]">
              <img
                src="/images/doctor-hero-blended.png"
                alt="Expert Medical Doctor"
                className="w-full h-auto object-contain mx-auto drop-shadow-lg"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SATISFACTION CARD & ACTION ================= */}
          <div className="lg:col-span-3 space-y-8 z-10 pt-2 lg:pt-4 flex flex-col justify-between">
            
            {/* 1. "How satisfied are you?" Glassmorphic Card (Exact visual replica) */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-5 border border-white/70 shadow-[0_15px_35px_-5px_rgba(14,165,233,0.22)] max-w-xs ml-auto w-full">
              <h4 className="text-xs font-bold text-slate-700 text-center mb-3.5 tracking-tight">
                How satisfied are you?
              </h4>

              <div className="space-y-2.5 text-[11px] font-semibold text-slate-600">
                {/* Very Satisfied */}
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate">Very Satisfied</span>
                  <div className="w-24 h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                    <div className="w-full h-full rounded-full stripe-green"></div>
                  </div>
                </div>

                {/* Somewhat satisfied */}
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate">Somewhat satisfied</span>
                  <div className="w-24 h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                    <div className="w-[72%] h-full rounded-full stripe-blue"></div>
                  </div>
                </div>

                {/* Neutral */}
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate">Neutral</span>
                  <div className="w-24 h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                    <div className="w-[45%] h-full rounded-full stripe-orange"></div>
                  </div>
                </div>

                {/* Very Dissatisfied */}
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate">Very Dissatisfied</span>
                  <div className="w-24 h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 ml-0.5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Description Paragraph & Dual CTAs */}
            <div className="space-y-4 pt-4 lg:pt-10 max-w-sm ml-auto">
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Book appointments, consult certified doctors, manage prescriptions, and track your health—all from one secure platform designed for modern care.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Get Started Button with White Circle Arrow */}
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] hover:from-[#0369a1] hover:to-[#0284c7] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md hover:shadow-cyan-400/40 transition-all flex items-center space-x-2.5 cursor-pointer group"
                >
                  <span>Get Started</span>
                  <span className="w-5 h-5 rounded-full bg-white text-[#0284c7] flex items-center justify-center font-bold text-xs shadow-sm group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>

                {/* Book Appointment Button */}
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="bg-white/80 hover:bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm transition-all cursor-pointer"
                >
                  Book Appointment
                </button>

              </div>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM PARTNERS TRUST STRIP ================= */}
        <div className="pt-8 sm:pt-10 mt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-500 block">
              Trusted by 300K+ organizations worldwide
            </span>

            {/* Exact Partner Brand Names */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-slate-700 font-extrabold text-xs sm:text-sm tracking-wide">
              <span className="tracking-widest font-black text-sm">SAMSUNG</span>
              <span className="font-bold text-sm">Uber</span>
              <span className="font-bold lowercase tracking-tighter text-sm">adidas</span>
              <span className="text-[11px] font-serif uppercase tracking-widest font-bold">HARVARD UNIVERSITY</span>
              <span className="font-black tracking-wider text-xs">M<span className="text-[10px]">C</span>KESSON</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400">
            Certified Telemedicine & In-Hospital OPD
          </div>
        </div>

      </div>
    </section>
  );
};
