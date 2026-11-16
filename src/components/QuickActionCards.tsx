import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Droplets, 
  Heart, 
  Scissors, 
  Bone, 
  Ambulance, 
  UserCheck, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  Layers,
  Activity
} from 'lucide-react';

interface QuickActionCardsProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenReportsModal: () => void;
}

interface CentreOfExcellence {
  id: string;
  specialtyId: string;
  name: string;
  specialtiesCount: string;
  description: string;
  image: string;
  icon: React.ElementType;
  ctaText: string;
  actionType: 'appointment' | 'emergency';
}

export const QuickActionCards: React.FC<QuickActionCardsProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenReportsModal,
}) => {
  const centres: CentreOfExcellence[] = [
    {
      id: 'urology',
      specialtyId: 'urology',
      name: 'Urology & Kidney Stone Centre of Excellence',
      specialtiesCount: '6 Specialties',
      description: 'As Kompally’s premier laser urology destination, we perform advanced 100W Holmium laser stone dusting (RIRS / PCNL) and bloodless prostate enucleation (HoLEP) with over 10,000 successful procedures.',
      image: '/images/coe-urology.jpg',
      icon: Zap,
      ctaText: 'Explore more',
      actionType: 'appointment'
    },
    {
      id: 'nephrology',
      specialtyId: 'nephrology',
      name: 'Nephrology & Dialysis Centre of Excellence',
      specialtiesCount: '5 Specialties',
      description: 'Equipped with 20+ automated dialysis stations and dual-pass RO ultra-pure filtration, our dedicated renal faculty provides 24/7 continuous hemodialysis, CRRT, and advanced kidney failure management.',
      image: '/images/coe-nephrology.jpg',
      icon: Droplets,
      ctaText: 'Explore more',
      actionType: 'appointment'
    },
    {
      id: 'cardiology',
      specialtyId: 'cardiology',
      name: 'Heart & Vascular Centre of Excellence',
      specialtiesCount: '4 Specialties',
      description: 'Comprehensive cardiovascular care, non-invasive 2D Doppler echocardiography, continuous cardiac ICU telemetry monitoring, and rapid emergency intervention for acute chest pain and heart failure.',
      image: '/images/service-icu.jpg',
      icon: Heart,
      ctaText: 'Explore more',
      actionType: 'appointment'
    },
    {
      id: 'surgery',
      specialtyId: 'general-surgery',
      name: 'Surgical & Laparoscopic Centre of Excellence',
      specialtiesCount: '7 Specialties',
      description: 'Supported by 3 laminar flow modular operation theaters, our senior surgeons deliver 3D keyhole gallbladder, advanced hernia repairs, and daycare laser proctology with same-day ambulation.',
      image: '/images/facility-operation-theaters.jpg',
      icon: Scissors,
      ctaText: 'Explore more',
      actionType: 'appointment'
    },
    {
      id: 'orthopedics',
      specialtyId: 'orthopedics',
      name: 'Orthopedics & Joint Replacement Centre of Excellence',
      specialtiesCount: '5 Specialties',
      description: 'Pioneering computer-assisted total knee and hip arthroplasty, sports ligament reconstructions, and endoscopic spine surgeries in zero-infection laminar flow surgical suites.',
      image: '/images/coe-orthopedics.jpg',
      icon: Bone,
      ctaText: 'Explore more',
      actionType: 'appointment'
    },
    {
      id: 'emergency',
      specialtyId: 'emergency',
      name: 'Emergency & Trauma Centre of Excellence',
      specialtiesCount: '24/7 Rapid Care',
      description: 'Level-1 resuscitation capacity with dedicated trauma bays, bedside ultrasound, continuous arterial line monitoring, and rapid 10-minute ALS ambulance dispatch across North Hyderabad.',
      image: '/images/coe-emergency.jpg',
      icon: Ambulance,
      ctaText: 'Call 24/7 Casualty',
      actionType: 'emergency'
    },
    {
      id: 'andrology',
      specialtyId: 'andrology',
      name: 'Andrology & Men\'s Health Centre of Excellence',
      specialtiesCount: '4 Specialties',
      description: 'Confidential clinical consultations and high-magnification microsurgical interventions for male factor subfertility, varicocele repair, and hormonal wellness.',
      image: '/images/coe-andrology.jpg',
      icon: UserCheck,
      ctaText: 'Explore more',
      actionType: 'appointment'
    },
    {
      id: 'diagnostics',
      specialtyId: 'urology',
      name: 'Diagnostic Imaging & CT Centre of Excellence',
      specialtiesCount: 'Sub-Second Imaging',
      description: 'High-resolution multi-slice CT scanning, digital X-rays, automated pathology labs, and emergency diagnostic turnaround within minutes to support critical medical decisions.',
      image: '/images/facility-ct-scan.jpg',
      icon: ShieldCheck,
      ctaText: 'Explore more',
      actionType: 'appointment'
    }
  ];

  const [activeCentreId, setActiveCentreId] = useState<string>('urology');

  const activeCentre = centres.find(c => c.id === activeCentreId) || centres[0];

  const handleCtaClick = (centre: CentreOfExcellence) => {
    if (centre.actionType === 'emergency') {
      onOpenEmergencyModal();
    } else {
      onOpenAppointmentModal(centre.specialtyId);
    }
  };

  return (
    <section 
      id="centres-of-excellence" 
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 scroll-mt-24"
    >
      
      {/* ============================================================== */}
      {/* 1. SECTION HEADER (KFSH&RC Clinical Authority Reference)       */}
      {/* ============================================================== */}
      <div className="mb-4 sm:mb-6 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#041b53] tracking-tight leading-tight">
          Centres of Excellence
        </h2>
        <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
          Our Centres of Excellence are dedicated spaces for complex care across our network, bringing together research, education, and clinical expertise to give you consistent, coordinated, and personalized support.
        </p>
      </div>

      {/* ============================================================== */}
      {/* 2. SPLIT LAYOUT: LEFT INTERACTIVE LIST + RIGHT FEATURE DISPLAY */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* ============================================================
            LEFT COLUMN: INTERACTIVE VERTICAL LIST OF CENTRES
           ============================================================ */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-1">
          {centres.map((centre) => {
            const Icon = centre.icon;
            const isActive = centre.id === activeCentreId;

            return (
              <button
                key={centre.id}
                type="button"
                onClick={() => setActiveCentreId(centre.id)}
                onMouseEnter={() => setActiveCentreId(centre.id)}
                className={`w-full text-left py-2 px-2.5 sm:px-3 rounded-xl transition-all duration-200 flex items-center group cursor-pointer relative ${
                  isActive 
                    ? 'bg-white shadow-[0_2px_12px_-2px_rgba(4,27,83,0.06)] border border-slate-200/80' 
                    : 'hover:bg-slate-50/80 border border-transparent'
                }`}
              >
                {/* Active Indicator Bar on Left (Amber / Navy Accent) */}
                <div className="w-2 mr-2 flex items-center justify-center shrink-0">
                  {isActive ? (
                    <motion.div 
                      layoutId="coe-active-indicator"
                      className="w-1.5 h-5 bg-amber-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  ) : (
                    <div className="w-1.5 h-5 bg-transparent rounded-full" />
                  )}
                </div>

                {/* Line Icon */}
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center mr-2.5 shrink-0 transition-colors ${
                  isActive 
                    ? 'text-[#041b53] bg-sky-50' 
                    : 'text-slate-400 group-hover:text-slate-600'
                }`}>
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                </div>

                {/* Centre Name */}
                <span className={`text-xs sm:text-[13px] transition-colors ${
                  isActive 
                    ? 'font-bold text-[#041b53]' 
                    : 'font-medium text-slate-600 group-hover:text-slate-900'
                }`}>
                  {centre.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ============================================================
            RIGHT COLUMN: LARGE FEATURE DISPLAY WITH OVERLAY CARD
           ============================================================ */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_36px_-10px_rgba(4,27,83,0.12)] border border-slate-200/80 h-[340px] sm:h-[370px] lg:h-[400px] min-h-[340px] flex flex-col justify-end bg-slate-900 group">
            
            {/* Background Medical Photo with Smooth Crossfade */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCentre.id}
                src={activeCentre.image}
                alt={activeCentre.name}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Subtle Gradient Veil for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

            {/* ========================================================
                FLOATING CARD ON BOTTOM-RIGHT (Matching reference image)
               ======================================================== */}
            <div className="relative z-10 p-3 sm:p-4 lg:p-5 flex justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCentre.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full sm:max-w-[380px] bg-[#fffdfa]/95 backdrop-blur-md border border-amber-200/60 rounded-2xl p-4 sm:p-4.5 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.22)] relative overflow-hidden"
                >
                  {/* Subtle Top Gold Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400/40" />

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#041b53] tracking-tight leading-snug">
                    {activeCentre.name}
                  </h3>

                  {/* Specialties Badge */}
                  <div className="mt-1.5 mb-2">
                    <span className="inline-flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-200/80 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold">
                      <Layers className="w-3 h-3 text-amber-600" />
                      <span>{activeCentre.specialtiesCount}</span>
                    </span>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {activeCentre.description}
                  </p>

                  {/* Action Link: Explore More -> with Circle Arrow Button */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleCtaClick(activeCentre)}
                      className="inline-flex items-center space-x-2 text-[#041b53] hover:text-[#0052cc] font-extrabold text-xs cursor-pointer group/btn transition-colors"
                    >
                      <span>{activeCentre.ctaText}</span>
                      <div className="w-6 h-6 rounded-full bg-[#041b53] group-hover/btn:bg-[#0052cc] text-white flex items-center justify-center transition-all group-hover/btn:translate-x-1 shadow-xs">
                        <ArrowRight className="w-3 h-3 stroke-[2.2]" />
                      </div>
                    </button>

                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                      NABH Accredited
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
