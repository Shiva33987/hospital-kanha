import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CalendarCheck, 
  Building2, 
  FileText, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

interface PatientJourneySectionProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenReportsModal?: () => void;
}

export const PatientJourneySection: React.FC<PatientJourneySectionProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenReportsModal = () => {},
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const stages = [
    {
      id: 'before',
      stepNumber: 1,
      tabLabel: 'BEFORE YOUR VISIT',
      title: 'Before your visit',
      description:
        "Check your appointment details, medical records, and pre-consultation requirements through the Kanha Care portal. You'll be able to manage future appointments, review your Visit Summary, and prepare your documents without needing to wait in queues.",
      primaryActionLabel: 'Explore more',
      primaryAction: () => onOpenAppointmentModal(),
      checklist: [
        'Pre-register online with zero wait time',
        'Upload previous prescriptions & scan reports',
        'Verify cashless health insurance eligibility'
      ],
      badge: 'Digital Pre-Admission Desk',
      // High-res modern patient lounge / reception consultation
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85',
      imageAlt: 'Patient in reception lounge preparing for consultation',
    },
    {
      id: 'during',
      stepNumber: 2,
      tabLabel: 'DURING YOUR VISIT',
      title: 'During your visit',
      description:
        'From our dedicated patient concierge desk and valet parking to 3 modular laminar flow OTs, 20+ station dialysis bays, and private consultation suites — our clinical specialists and nursing staff guide and care for you at every single step.',
      primaryActionLabel: 'Explore more',
      primaryAction: () => {
        const el = document.getElementById('facilities') || document.getElementById('doctors');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenAppointmentModal();
      },
      checklist: [
        '1:1 Dedicated bedside patient concierge',
        'Direct doctor consultation in private suites',
        'State-of-the-art diagnostic labs & pharmacy'
      ],
      badge: 'Compassionate In-Hospital Care',
      // High-res caring doctor / specialist consultation
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1800&q=85',
      imageAlt: 'Senior doctor consultation with patient at Kanha Hospitals',
    },
    {
      id: 'after',
      stepNumber: 3,
      tabLabel: 'AFTER YOUR VISIT',
      title: 'After your visit',
      description:
        'Access your digital discharge summary, accredited lab reports, and prescribed medicine refills securely from home. Connect with your specialist for follow-up tele-consultations and receive tailored post-treatment wellness guidance.',
      primaryActionLabel: 'Explore more',
      primaryAction: () => onOpenReportsModal(),
      checklist: [
        'Download accredited digital lab test reports',
        'Schedule follow-up video tele-consultation',
        '24/7 Home medicine delivery from pharmacy'
      ],
      badge: 'Continuous Recovery Support',
      // High-res patient telehealth / digital recovery review
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85',
      imageAlt: 'Doctor providing follow-up tele-consultation review',
    },
  ];

  const currentStage = stages[activeTab];

  // Auto-cycle through tabs every 8 seconds if not interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % stages.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <section className="relative w-full bg-white pt-6 sm:pt-10 md:pt-12 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 1. TOP TIMELINE NAVIGATION TABS (EXACT KFSH&RC REPLICATION)    */}
        {/* ============================================================== */}
        <div className="w-full mb-8 sm:mb-12">
          {/* Labels Row */}
          <div className="grid grid-cols-3 text-center sm:text-left">
            {stages.map((stage, idx) => {
              const isActive = idx === activeTab;
              const isPast = idx < activeTab;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(idx)}
                  className="group text-left focus:outline-none transition-all cursor-pointer py-2"
                >
                  <span 
                    className={`block text-[11px] sm:text-xs md:text-[13px] font-bold tracking-wider uppercase transition-colors ${
                      isActive 
                        ? 'text-slate-900 font-extrabold' 
                        : isPast 
                          ? 'text-[#00875a] hover:text-slate-900' 
                          : 'text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    {stage.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Track with Golden/Amber Nodes & Connecting Bar */}
          <div className="relative mt-2 flex items-center justify-between">
            {/* Background Grey Track Line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-slate-200 z-0" />

            {/* Filled Active Track Line */}
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#00875a] via-[#c59b27] to-[#d4af37] transition-all duration-500 ease-out z-0"
              style={{
                width: activeTab === 0 ? '16%' : activeTab === 1 ? '50%' : '100%',
              }}
            />

            {/* Node 1: Before your visit */}
            <button
              onClick={() => setActiveTab(0)}
              className="relative z-10 flex items-center justify-center focus:outline-none group cursor-pointer"
              aria-label="Before your visit"
            >
              <div 
                className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                  activeTab >= 0
                    ? 'bg-[#c59b27] ring-4 ring-[#c59b27]/25 shadow-sm scale-110'
                    : 'bg-slate-300'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </button>

            {/* Node 2: During your visit */}
            <button
              onClick={() => setActiveTab(1)}
              className="relative z-10 flex items-center justify-center focus:outline-none group cursor-pointer"
              aria-label="During your visit"
            >
              <div 
                className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                  activeTab >= 1
                    ? 'bg-[#c59b27] ring-4 ring-[#c59b27]/25 shadow-sm scale-110'
                    : 'bg-slate-300 ring-2 ring-white'
                }`}
              >
                {activeTab >= 1 && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>

            {/* Node 3: After your visit */}
            <button
              onClick={() => setActiveTab(2)}
              className="relative z-10 flex items-center justify-center focus:outline-none group cursor-pointer"
              aria-label="After your visit"
            >
              <div 
                className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                  activeTab >= 2
                    ? 'bg-[#c59b27] ring-4 ring-[#c59b27]/25 shadow-sm scale-110'
                    : 'bg-slate-300 ring-2 ring-white'
                }`}
              >
                {activeTab >= 2 && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. MAIN SLIDE-UP CAROUSEL CARD (EXACT REFERENCE AESTHETIC)     */}
        {/* ============================================================== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 35, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.99 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full min-h-[420px] sm:min-h-[460px] md:min-h-[500px] rounded-3xl md:rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white group"
            >
              {/* High-Resolution Background Photo */}
              <img
                src={currentStage.image}
                alt={currentStage.imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Multi-Layered Frosted Dark Vignette & Gradient for Pristine Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 sm:via-slate-950/60 via-55% to-slate-950/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              {/* Content Block */}
              <div className="relative z-10 max-w-2xl">
                
                {/* Context Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold text-white/90 mb-4 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] animate-ping" />
                  <span>{currentStage.badge}</span>
                </div>

                {/* Big Bold Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
                  {currentStage.title}
                </h2>

                {/* Detailed Description */}
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-6 max-w-xl drop-shadow-sm">
                  {currentStage.description}
                </p>

                {/* 3 Value Checklist Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-[13px] text-white/90 font-medium">
                  {currentStage.checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/30 border border-emerald-400/60 flex items-center justify-center text-emerald-300 shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action Row */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={currentStage.primaryAction}
                    className="inline-flex items-center gap-2 bg-[#00875a] hover:bg-[#00734c] text-white font-bold text-sm sm:text-[15px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>{currentStage.primaryActionLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenEmergencyModal}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-3 sm:py-3.5 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                  >
                    <span>Need Help? Contact 24/7 Desk</span>
                  </button>
                </div>
              </div>

              {/* Bottom Right Carousel Step Controls */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-10 flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveTab((prev) => (prev === 0 ? stages.length - 1 : prev - 1))}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs sm:text-sm font-bold text-white/80 px-2 tracking-widest font-mono">
                  0{activeTab + 1} / 0{stages.length}
                </div>
                <button
                  onClick={() => setActiveTab((prev) => (prev + 1) % stages.length)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Card Peek Preview (as seen in the KFSH&RC reference screenshot) */}
          <div 
            onClick={() => setActiveTab((prev) => (prev + 1) % stages.length)}
            className="mt-4 w-full h-12 sm:h-14 rounded-2xl sm:rounded-3xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 flex items-center justify-between px-6 transition-all cursor-pointer group shadow-xs"
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Next Stage:
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#00875a] transition-colors">
                {stages[(activeTab + 1) % stages.length].title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00875a]">
              <span>View Next</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
