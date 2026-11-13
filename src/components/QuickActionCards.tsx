import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Calendar, 
  Video, 
  Ambulance, 
  ScanLine, 
  Activity, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface QuickActionCardsProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenReportsModal: () => void;
}

export const QuickActionCards: React.FC<QuickActionCardsProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenReportsModal,
}) => {
  const cards = [
    {
      id: 'book-opd',
      title: 'Book Hospital Appointment',
      subtitle: 'Consult 24+ Top Specialties In-Person',
      desc: 'Instant confirmed booking with leading specialists in Urology, Nephrology, Ortho & Cardiology.',
      featureTag: 'Zero Waiting • Instant Token',
      icon: Calendar,
      color: 'from-blue-600 via-sky-600 to-cyan-500',
      categoryColor: 'text-sky-600',
      glowColor: 'rgba(2, 132, 199, 0.22)',
      badge: 'Zero Waiting',
      badgeIcon: Sparkles,
      badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200/80',
      action: () => onOpenAppointmentModal(),
      btnText: 'Book OPD Slot',
      highlight: false,
    },
    {
      id: 'emergency-call',
      title: '24/7 Emergency & Trauma',
      subtitle: 'Rapid Response Critical Care',
      desc: 'Immediate emergency physician triage, trauma resuscitation bays & priority critical care admission.',
      featureTag: '10-Min Response • ALS Fleet',
      icon: Ambulance,
      color: 'from-red-600 via-rose-600 to-pink-600',
      categoryColor: 'text-red-600',
      glowColor: 'rgba(220, 38, 38, 0.25)',
      badge: '24x7 Live Active',
      badgeIcon: Zap,
      badgeStyle: 'bg-red-50 text-red-700 border-red-200/90',
      action: onOpenEmergencyModal,
      btnText: 'Emergency: 9091445566',
      highlight: true,
    },
    {
      id: 'ct-diagnostics',
      title: 'CT Scan & Diagnostics',
      subtitle: 'High Resolution 3D Imaging & Lab',
      desc: 'Low-radiation multi-slice CT, automated biochemistry, digital ultrasound, and specialized renal profile tests.',
      featureTag: 'NABL Certified • 60-Min Reports',
      icon: ScanLine,
      color: 'from-teal-600 via-cyan-600 to-emerald-500',
      categoryColor: 'text-teal-600',
      glowColor: 'rgba(13, 148, 136, 0.22)',
      badge: 'NABL Standard',
      badgeIcon: CheckCircle2,
      badgeStyle: 'bg-teal-50 text-teal-700 border-teal-200/80',
      action: () => {
        const el = document.getElementById('facilities');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenReportsModal();
      },
      btnText: 'View Diagnostics',
      highlight: false,
    },
    {
      id: 'dialysis-care',
      title: '24/7 Advanced Dialysis Unit',
      subtitle: 'Comprehensive Renal Care',
      desc: '20+ automated dialysis stations with dual-pass RO ultra-pure water filtration & continuous nephrology cover.',
      featureTag: 'Fresenius Tech • Ultra-Pure RO',
      icon: Activity,
      color: 'from-blue-700 via-indigo-600 to-sky-600',
      categoryColor: 'text-blue-600',
      glowColor: 'rgba(37, 99, 235, 0.22)',
      badge: '24/7 Dedicated',
      badgeIcon: Clock,
      badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200/80',
      action: () => onOpenAppointmentModal('nephrology'),
      btnText: 'Book Dialysis Session',
      highlight: false,
    },
    {
      id: 'cashless-tpa',
      title: 'Cashless Insurance & TPA',
      subtitle: '50+ Empaneled Providers',
      desc: 'Zero-cash admissions, pre-auth clearance within 2 hours, and a dedicated 24/7 bedside support desk.',
      featureTag: 'Star, Care, HDFC & 50+ TPAs',
      icon: ShieldCheck,
      color: 'from-emerald-600 via-teal-600 to-green-500',
      categoryColor: 'text-emerald-600',
      glowColor: 'rgba(5, 150, 105, 0.22)',
      badge: '100% Cashless',
      badgeIcon: ShieldCheck,
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      action: () => {
        const el = document.getElementById('cashless-insurance');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      btnText: 'Check TPA Partners',
      highlight: false,
    },
    {
      id: 'teleconsult',
      title: 'Telemedicine / Video Consult',
      subtitle: 'Consult Specialists from Home',
      desc: 'HD video consultation with senior doctors, instant digital e-prescriptions sent directly on WhatsApp.',
      featureTag: 'WhatsApp Rx • Secure HD Call',
      icon: Video,
      color: 'from-purple-600 via-violet-600 to-indigo-500',
      categoryColor: 'text-purple-600',
      glowColor: 'rgba(124, 58, 237, 0.22)',
      badge: 'Across India',
      badgeIcon: Sparkles,
      badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200/80',
      action: () => onOpenAppointmentModal(undefined),
      btnText: 'Start Teleconsult',
      highlight: false,
    },
  ];

  // Motion Variants for Apple/Stripe-tier Staggered Slide-Up Entrance
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 55,
      scale: 0.94,
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.65, 
        delay: i * 0.09,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }),
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-18 mb-24">
      
      {/* Section Header with Coordinated Slide-Up Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center mb-10 sm:mb-12 lg:mb-14"
      >
        <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 px-4 py-1.5 rounded-full shadow-xs text-xs font-bold text-hospital-navy uppercase tracking-wider mb-3.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-800">Hospital Direct Access Hub</span>
          <span className="text-slate-300">•</span>
          <span className="text-[#0077e6] font-extrabold">24/7 Operations</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold font-sans text-slate-900 tracking-tight leading-tight">
          Immediate Clinical Care &amp;{' '}
          <span className="bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
            Fast-Track OPD
          </span>
        </h2>
        
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Direct hospital access, priority emergency dispatch, and verified senior consultant appointments with zero delay.
        </p>

        <div className="flex items-center justify-center space-x-2 mt-4">
          <div className="w-8 h-[2px] bg-slate-200 rounded-full"></div>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#0077e6] to-[#0ea5e9] rounded-full"></div>
          <div className="w-8 h-[2px] bg-slate-200 rounded-full"></div>
        </div>
      </motion.div>

      {/* 6 Luxury Action Cards with Orchestrated Cascading Slide-Up Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const BadgeIcon = card.badgeIcon;
          
          return (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 350, damping: 22 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={card.action}
              className={`group relative rounded-3xl p-6 sm:p-7 cursor-pointer overflow-hidden transition-shadow duration-300 bg-white/95 backdrop-blur-xl border flex flex-col justify-between ${
                card.highlight 
                  ? 'border-red-200/90 shadow-[0_12px_32px_-8px_rgba(239,68,68,0.18)] hover:shadow-[0_26px_52px_-12px_rgba(239,68,68,0.30)] ring-1 ring-red-400/40 hover:ring-2 hover:ring-red-500/60' 
                  : 'border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(8,31,61,0.07)] hover:shadow-[0_26px_52px_-12px_rgba(2,132,199,0.22)] hover:border-hospital-blue/40'
              }`}
            >
              {/* Shimmer Sweep Effect Across Card on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Top Accent Gradient Bar with Ambient Spring Glow */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.color} transition-all duration-300 group-hover:h-2.5`} 
              />
              
              {/* Subtle Ambient Hover Glow in Background */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: card.glowColor }}
              />

              {/* Card Top: Icon & Live Badge */}
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className={`w-13 h-13 rounded-2xl flex items-center justify-center bg-gradient-to-br ${card.color} text-white shadow-md shadow-slate-900/10 group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-300`}>
                    <Icon className="w-6.5 h-6.5 stroke-[2.2]" />
                  </div>
                  
                  <span className={`inline-flex items-center space-x-1.5 text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs ${card.badgeStyle}`}>
                    <BadgeIcon className="w-3 h-3" />
                    <span>{card.badge}</span>
                  </span>
                </div>

                {/* Card Content */}
                <div className="mt-5">
                  <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider block ${card.categoryColor}`}>
                    {card.subtitle}
                  </span>
                  
                  <h3 className="text-[19px] sm:text-[20px] font-extrabold font-sans text-slate-900 group-hover:text-[#0077e6] transition-colors mt-1 tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Card Bottom: Feature Pill & Action Button with Slide-Up Hover Effect */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex flex-col space-y-3">
                {/* Feature Highlight Pill */}
                <div className="inline-flex items-center text-[11px] font-semibold text-slate-700 bg-slate-50/90 border border-slate-200/80 px-2.5 py-1 rounded-lg w-fit transition-transform duration-300 group-hover:-translate-y-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-hospital-blue mr-1.5"></span>
                  <span>{card.featureTag}</span>
                </div>

                {/* Call to Action Button */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0077e6] transition-colors pt-1">
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">{card.btnText}</span>
                  
                  <div className={`w-8.5 h-8.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    card.highlight 
                      ? 'bg-red-500 text-white group-hover:bg-red-600 shadow-sm shadow-red-500/30 group-hover:scale-110' 
                      : 'bg-slate-100 text-slate-700 group-hover:bg-[#0077e6] group-hover:text-white shadow-2xs group-hover:scale-110'
                  }`}>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Bottom Trust Ribbon with Subtle Upward Fade */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-500 bg-white/70 backdrop-blur-md border border-slate-200/70 py-3 px-6 rounded-2xl max-w-4xl mx-auto shadow-2xs"
      >
        <div className="flex items-center space-x-1.5 text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>NABH Accredited Standards</span>
        </div>
        <div className="hidden sm:block text-slate-300">•</div>
        <div className="flex items-center space-x-1.5 text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-hospital-blue" />
          <span>50+ Cashless Insurance Empaneled</span>
        </div>
        <div className="hidden sm:block text-slate-300">•</div>
        <div className="flex items-center space-x-1.5 text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-purple-600" />
          <span>Zero-Wait Priority Digital OPD</span>
        </div>
      </motion.div>

    </section>
  );
};
