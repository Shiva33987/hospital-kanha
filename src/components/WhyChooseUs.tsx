import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Award, 
  Building2, 
  MapPin, 
  CheckCircle2,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface WhyChooseUsProps {
  onOpenAppointmentModal: () => void;
  onOpenEmergencyModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
}) => {
  const pillars = [
    {
      icon: Users,
      title: 'Expert Medical Team',
      desc: 'Highly trained senior consultants, M.Ch urologists, DM nephrologists, and intensive care physicians with decades of collective clinical excellence.',
      color: 'from-blue-600 via-sky-600 to-cyan-500',
    },
    {
      icon: HeartHandshake,
      title: 'Compassionate Care',
      desc: 'Empathy at the heart of everything we do. Dedicated 1:1 patient care managers and supportive nursing ensuring dignity, comfort, and peace of mind.',
      color: 'from-teal-600 via-emerald-600 to-green-500',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Hygienic Environment',
      desc: '3 Modular Laminar Flow OTs with sterile HEPA filtration, zero-cross contamination dialysis bays, and strict NABH infection control standards.',
      color: 'from-indigo-600 via-blue-600 to-sky-600',
    },
    {
      icon: Clock,
      title: '24/7 Patient Support',
      desc: 'Round-the-clock emergency casualty, 24/7 in-house pharmacy, cardiac life-support ambulance dispatch, and bedside patient coordination.',
      color: 'from-sky-600 via-cyan-600 to-teal-500',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP STATS COUNTER STRIP - Luminous Medical Glass Design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(8,31,61,0.08),0_0_1px_1px_rgba(255,255,255,0.9)_inset] p-6 sm:p-9 mb-16 sm:mb-20 overflow-hidden"
        >
          {/* Top Accent Gradient Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0077e6] to-transparent opacity-85" />
          
          {/* Ambient Soft Glow in corner */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* Header inside the strip */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Commitment To Clinical Excellence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trusted by <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">75,000+ Families</span> Across Hyderabad
            </h3>
          </div>

          {/* 6 Grid Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 text-center">
            {HOSPITAL_INFO.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                {stat.suffix && (
                  <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider mt-0.5">
                    {stat.suffix}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2-COLUMN SHOWCASE: PILLARS & BUILDING HIGHLIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Building Photo & Overlay Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Building Card with Luxury Glass Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(8,31,61,0.14)] border border-slate-200/80 bg-slate-900 group">
              <img
                src="/images/kanha-building.jpg"
                alt="Kanha Hospitals Building - Kompally Hyderabad"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-md text-slate-900 border border-white/80 text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-md flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0077e6]" />
                  <span>Super-Specialty Campus</span>
                </span>
              </div>

              {/* Building Card Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Kanha Hospitals
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1.5 flex items-start sm:items-center space-x-1.5 font-normal">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
                  <span>Panchsheel Enclave, Hi Tension Rd, Alwal, Opp O'rica Café, Kompally, Hyderabad</span>
                </p>
              </div>
            </div>

            {/* Floating Quality Stamp */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 sm:right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-[0_15px_35px_rgba(8,31,61,0.12)] border border-white/90 flex items-center space-x-3.5 z-10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white flex items-center justify-center font-bold shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Quality Protocol</span>
                <span className="text-sm font-extrabold text-slate-900">NABH &amp; 100% Infection-Free</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: "Your Health Our Priority" 4 Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>Our Core Promise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight leading-tight">
                Your Health,{' '}
                <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Expanding our commitment to better healthcare through cutting-edge medical technology, patient dignity, and clinical excellence.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-[0_4px_16px_-4px_rgba(8,31,61,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(0,119,230,0.14)] transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pil.color} text-white flex items-center justify-center shadow-xs mb-3.5 group-hover:scale-108 transition-transform`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-[15px] group-hover:text-[#0077e6] transition-colors">
                        {pil.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                        {pil.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] font-semibold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Protocol</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap gap-3 items-center">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-[0_6px_20px_rgba(0,119,230,0.3)] hover:shadow-lg transition-all cursor-pointer active:scale-95 flex items-center space-x-2 group"
              >
                <span>Schedule Hospital Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEmergencyModal}
                className="bg-white hover:bg-red-50/50 border border-slate-200/90 hover:border-red-200 text-slate-800 hover:text-red-600 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-2xs transition-all flex items-center space-x-2.5 cursor-pointer active:scale-95"
              >
                <div className="w-6 h-6 rounded-full bg-red-100/80 text-red-600 flex items-center justify-center">
                  <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <span>24/7 Helpline: 9091445566</span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
