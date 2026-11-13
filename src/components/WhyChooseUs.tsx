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
  ArrowRight,
  ExternalLink,
  Navigation
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
      metric: '50+ Senior Specialists',
      title: 'Expert Medical Team',
      desc: 'Highly trained senior consultants, M.Ch urologists, DM nephrologists, and intensive care physicians with decades of collective clinical excellence.',
      color: 'from-blue-600 via-sky-600 to-cyan-500',
      badge: 'Board Certified Faculty',
      badgeColor: 'text-[#0077e6] bg-sky-50 border-sky-200/80',
    },
    {
      icon: HeartHandshake,
      metric: '1:1 Patient Advocacy',
      title: 'Compassionate Care',
      desc: 'Empathy at the heart of everything we do. Dedicated 1:1 patient care managers and supportive nursing ensuring dignity, comfort, and peace of mind.',
      color: 'from-teal-600 via-emerald-600 to-green-500',
      badge: 'Dedicated Care Managers',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
    },
    {
      icon: ShieldCheck,
      metric: 'Class 10,000 Sterile Air',
      title: 'Safe & Hygienic Environment',
      desc: '3 Modular Laminar Flow OTs with sterile HEPA filtration, zero-cross contamination dialysis bays, and strict NABH infection control standards.',
      color: 'from-indigo-600 via-blue-600 to-sky-600',
      badge: 'NABH Infection-Free Zone',
      badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200/80',
    },
    {
      icon: Clock,
      metric: 'Immediate Triage Casualty',
      title: '24/7 Patient Support',
      desc: 'Round-the-clock emergency casualty, 24/7 in-house pharmacy, cardiac life-support ambulance dispatch, and bedside patient coordination.',
      color: 'from-sky-600 via-cyan-600 to-teal-500',
      badge: 'Always Active On-Duty',
      badgeColor: 'text-teal-700 bg-teal-50 border-teal-200/80',
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

        {/* SECTION HEADER: CENTERED, BALANCED & ELEGANT */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Our Core Promise</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Your Health,{' '}
            <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
              Our Priority
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
          >
            Expanding our commitment to better healthcare through cutting-edge medical technology, patient dignity, and clinical excellence.
          </motion.p>
        </div>

        {/* MASTER 2-COLUMN SHOWCASE: ARCHITECTURAL FLAGSHIP & 4 CLINICAL PILLARS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Luxury Architectural Campus Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(8,31,61,0.14)] border border-slate-200/90 bg-slate-950 flex-1 flex flex-col justify-between min-h-[480px] sm:min-h-[540px] group">
              
              {/* Background Campus Image */}
              <img
                src="/images/kanha-building.jpg"
                alt="Kanha Hospitals Building - Kompally Hyderabad"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Premium Multi-Layer Glass Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-slate-950/40" />

              {/* Top Badges Inside Image */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between pointer-events-none">
                <span className="bg-white/95 backdrop-blur-md text-slate-900 border border-white/80 text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0077e6]" />
                  <span>Super-Specialty Campus</span>
                </span>

                <span className="bg-emerald-500/90 backdrop-blur-md text-white border border-emerald-400 text-[10px] font-bold uppercase px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1">
                  <Award className="w-3 h-3" />
                  <span>NABH Accredited</span>
                </span>
              </div>

              {/* Bottom Integrated Frosted Console Inside Image */}
              <div className="relative z-10 p-5 sm:p-6 text-white space-y-3.5">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                    Kanha Hospitals
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 flex items-start space-x-1.5 font-normal leading-relaxed">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Panchsheel Enclave, Hi Tension Rd, Opp O'rica Café, Kompally, Hyderabad</span>
                  </p>
                </div>

                {/* Campus Infrastructure Highlights Dock */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/15 text-center">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15">
                    <div className="text-xs font-black text-sky-300">100+ Beds</div>
                    <div className="text-[10px] text-slate-300">Inpatient Care</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15">
                    <div className="text-xs font-black text-emerald-300">3 Modular</div>
                    <div className="text-[10px] text-slate-300">Laminar OTs</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15">
                    <div className="text-xs font-black text-amber-300">20+ Stations</div>
                    <div className="text-[10px] text-slate-300">24/7 Dialysis</div>
                  </div>
                </div>

                {/* Live Campus Quality Assurance Seal */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>100% Infection-Free Clean Protocol</span>
                  </div>

                  <a 
                    href="#hospital-tour"
                    className="text-xs font-bold text-sky-300 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <span>Tour Campus</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 4 Master Clinical Pillars in Luxury 2x2 Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 hover:border-sky-300 shadow-[0_4px_20px_-4px_rgba(8,31,61,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(0,119,230,0.18)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      {/* Top Row: Icon + Metric */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pil.color} text-white flex items-center justify-center shadow-xs group-hover:scale-108 transition-transform`}>
                          <Icon className="w-6 h-6 stroke-[2.2]" />
                        </div>

                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-2xs ${pil.badgeColor}`}>
                          {pil.badge}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-slate-900 text-lg group-hover:text-[#0077e6] transition-colors leading-snug">
                        {pil.title}
                      </h4>

                      <div className="text-xs font-bold text-sky-600 mt-0.5">
                        {pil.metric}
                      </div>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                        {pil.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs font-semibold text-emerald-600">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                      <span>Verified Clinical Standard</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-[0_6px_20px_rgba(0,119,230,0.3)] hover:shadow-lg transition-all cursor-pointer active:scale-95 flex items-center space-x-2 group"
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
