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
  Activity,
  Bed,
  Stethoscope,
  Shield,
  Check
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
      highlights: ['M.Ch Urologists', 'DM Nephrologists', 'Senior Surgeons'],
      gradient: 'from-blue-600 via-sky-600 to-cyan-500',
      badge: 'Board Certified Faculty',
      badgeStyle: 'text-[#0077e6] bg-sky-50 border-sky-200/90 shadow-2xs',
      glow: 'from-blue-500/10 via-sky-500/5 to-transparent',
      verifiedText: 'Board Certified Clinical Faculty',
    },
    {
      icon: HeartHandshake,
      metric: '1:1 Patient Advocacy',
      title: 'Compassionate Care',
      desc: 'Empathy at the heart of everything we do. Dedicated 1:1 patient care managers and supportive nursing ensuring complete comfort, dignity, and peace of mind.',
      highlights: ['Bedside Concierge', 'Family Updates', 'Dignified Nursing'],
      gradient: 'from-teal-600 via-emerald-600 to-green-500',
      badge: 'Dedicated Care Managers',
      badgeStyle: 'text-emerald-700 bg-emerald-50 border-emerald-200/90 shadow-2xs',
      glow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      verifiedText: 'Patient Dignity & Transparency Protocol',
    },
    {
      icon: ShieldCheck,
      metric: 'Class 10,000 Sterile Air',
      title: 'Safe & Hygienic Environment',
      desc: 'Ultra-clean surgical environment with 3 Modular Laminar Flow OTs, sterile HEPA filtration, zero-cross contamination dialysis bays, and strict NABH infection control.',
      highlights: ['3 Modular OTs', 'HEPA 99.97% Air', 'Zero Cross-Contamination'],
      gradient: 'from-indigo-600 via-blue-600 to-sky-600',
      badge: 'NABH Infection-Free Zone',
      badgeStyle: 'text-indigo-700 bg-indigo-50 border-indigo-200/90 shadow-2xs',
      glow: 'from-indigo-500/10 via-blue-500/5 to-transparent',
      verifiedText: '100% Sterilization Protocol Certified',
    },
    {
      icon: Clock,
      metric: 'Immediate Triage Casualty',
      title: '24/7 Patient Support',
      desc: 'Round-the-clock emergency casualty, 24/7 in-house pharmacy, cardiac life-support ambulance dispatch, and bedside clinical coordination.',
      highlights: ['Emergency Casualty', '24/7 In-House Pharmacy', 'Cardiac Ambulance'],
      gradient: 'from-sky-600 via-cyan-600 to-teal-500',
      badge: 'Always Active On-Duty',
      badgeStyle: 'text-teal-700 bg-teal-50 border-teal-200/90 shadow-2xs',
      glow: 'from-cyan-500/10 via-teal-500/5 to-transparent',
      verifiedText: 'Always Active On-Duty Emergency',
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
      
      {/* Subtle Luminous Background Glows */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-gradient-to-br from-sky-200/30 via-blue-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/25 via-emerald-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* 1. TOP STATS COUNTER STRIP - LUMINOUS EXECUTIVE MEDICAL GLASS  */}
        {/* ============================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(8,31,61,0.08),0_0_1px_1px_rgba(255,255,255,0.95)_inset] p-5 sm:p-7 mb-8 sm:mb-10 overflow-hidden"
        >
          {/* Top Accent Gradient Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0077e6] to-transparent opacity-85" />
          
          {/* Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* Header inside the strip */}
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Commitment To Clinical Excellence</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
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
                className="p-3 sm:p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all duration-300 group"
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

        {/* ============================================================== */}
        {/* 2. SECTION HEADER: CENTERED, BALANCED & ELEGANT                */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-2.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Why Choose Kanha Hospitals</span>
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
            className="mt-2.5 text-slate-600 text-xs sm:text-base leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Expanding our commitment to better healthcare through cutting-edge medical technology, patient dignity, and clinical excellence.
          </motion.p>
        </div>

        {/* ============================================================== */}
        {/* 3. MASTER SHOWCASE: ARCHITECTURAL FLAGSHIP & 4 CLINICAL CARDS  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 lg:gap-8 items-stretch">
          
          {/* Left Column: Luxury Architectural Campus Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(8,31,61,0.18),0_0_1px_1px_rgba(255,255,255,0.8)_inset] border border-slate-200/90 bg-slate-950 flex-1 flex flex-col justify-between min-h-[380px] sm:min-h-[460px] md:min-h-[540px] group">
              
              {/* Background Campus Image with rich zoom */}
              <img
                src="/images/kanha-building.jpg"
                alt="Kanha Hospitals Building - Kompally Hyderabad"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Multi-Layer Glass Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />

              {/* Top Floating Glass Badges */}
              <div className="relative z-10 p-4 sm:p-5 lg:p-6 flex items-center justify-between gap-2 pointer-events-none">
                <span className="bg-white/95 backdrop-blur-md text-slate-900 border border-white/80 text-[10px] sm:text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0077e6]" />
                  <span>Super-Specialty Campus</span>
                </span>

                <span className="bg-emerald-500/95 backdrop-blur-md text-white border border-emerald-400 text-[9.5px] sm:text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1">
                  <Award className="w-3 h-3" />
                  <span>NABH Accredited</span>
                </span>
              </div>

              {/* Bottom Integrated Frosted Console Inside Image */}
              <div className="relative z-10 p-4 sm:p-6 text-white space-y-3">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-emerald-300 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>NABH Certified Tertiary Center</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                    Kanha Hospitals
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-200 mt-1 flex items-start space-x-1.5 font-normal leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>Panchsheel Enclave, Hi Tension Rd, Opp O'rica Café, Kompally, Hyderabad</span>
                  </p>
                </div>

                {/* Campus Infrastructure Highlights Dock */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-2 border-t border-white/15 text-center">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/15">
                    <div className="text-xs sm:text-sm font-black text-sky-300">100+ Beds</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-300">Inpatient Care</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/15">
                    <div className="text-xs sm:text-sm font-black text-emerald-300">3 Modular</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-300">Laminar OTs</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/15">
                    <div className="text-xs sm:text-sm font-black text-amber-300">20+ Stations</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-300">24/7 Dialysis</div>
                  </div>
                </div>

                {/* Live Campus Quality Assurance Seal & Tour CTA */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-1.5 text-[10.5px] sm:text-xs font-semibold text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Infection-Free Clean Protocol</span>
                  </div>

                  <a 
                    href="#contact"
                    className="text-[10.5px] sm:text-xs font-bold text-sky-300 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <span>Tour Campus</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 4 Master Clinical Pillars in Luxury 2x2 Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5"
          >
            {/* 4 Pillars Grid: EXACT 2x2 GRID ON BOTH MOBILE AND DESKTOP */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 flex-1">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-3 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 hover:border-sky-300 shadow-[0_8px_25px_-5px_rgba(8,31,61,0.06),0_0_1px_1px_rgba(255,255,255,0.9)_inset] hover:shadow-[0_20px_45px_-10px_rgba(0,119,230,0.18)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Top corner ambient color sheen */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${pil.glow} rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

                    <div className="relative z-10">
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-start justify-between mb-2.5 sm:mb-3.5 gap-1">
                        <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pil.gradient} text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-4 h-4 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
                        </div>

                        <span className={`text-[7px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-tight sm:tracking-wider px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-full border leading-[1.15] text-right shrink min-w-0 max-w-[95px] sm:max-w-none ${pil.badgeStyle}`}>
                          {pil.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-base lg:text-lg group-hover:text-[#0077e6] transition-colors leading-tight sm:leading-snug">
                        {pil.title}
                      </h4>

                      {/* Stat Metric */}
                      <div className="text-[10px] sm:text-xs font-bold text-sky-600 mt-0.5 sm:mt-1 leading-tight flex items-center space-x-1">
                        <span>{pil.metric}</span>
                      </div>

                      {/* Micro Clinical Tags (Visible on Tablet/Desktop, clean wrap) */}
                      <div className="hidden sm:flex flex-wrap gap-1 mt-2">
                        {pil.highlights.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9.5px] font-semibold bg-slate-100/90 text-slate-600 px-1.5 py-0.5 rounded-md border border-slate-200/60">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Concise Description */}
                      <p className="text-[9.5px] sm:text-xs text-slate-600 mt-1.5 sm:mt-2 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                        {pil.desc}
                      </p>
                    </div>

                    {/* Bottom Verification Seal */}
                    <div className="mt-3 sm:mt-4 pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center space-x-1 sm:space-x-1.5 text-[8.5px] xs:text-[9.5px] sm:text-xs font-semibold text-emerald-600 relative z-10">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-emerald-500" />
                      <span className="truncate">{pil.verifiedText}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] hover:from-[#0066cc] hover:to-[#0284c7] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold shadow-[0_6px_20px_rgba(0,119,230,0.3)] hover:shadow-lg transition-all cursor-pointer active:scale-95 flex items-center justify-center space-x-2 group"
              >
                <span>Schedule Hospital Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onOpenEmergencyModal}
                className="bg-white hover:bg-red-50/50 border border-slate-200/90 hover:border-red-200 text-slate-800 hover:text-red-600 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold shadow-2xs transition-all flex items-center justify-center space-x-2.5 cursor-pointer active:scale-95"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100/80 text-red-600 flex items-center justify-center">
                  <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
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
