import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stages = [
    {
      id: 'before-visit',
      stepNumber: 1,
      tabLabel: 'BEFORE YOUR VISIT',
      title: 'Before your visit',
      description:
        "Check your follow-up appointment details, medical reports, and test results through the Kanha Care portal. You'll be able to manage future appointments, review your Visit Summary, and more, without needing to visit the hospital.",
      primaryActionLabel: 'Explore more',
      primaryAction: () => onOpenAppointmentModal(),
      // Patient in consultation lounge preparing for appointment
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85',
      imageAlt: 'Patient in reception lounge before visit',
    },
    {
      id: 'during-visit',
      stepNumber: 2,
      tabLabel: 'DURING YOUR VISIT',
      title: 'During your visit',
      description:
        "During your visit to Kanha Hospitals, you can expect a compassionate and personalized patient experience. Your appointments will be on time, you'll have easy access to information, and you can communicate openly with your healthcare providers. Your care journey is our priority.",
      primaryActionLabel: 'Explore more',
      primaryAction: () => {
        const el = document.getElementById('facilities') || document.getElementById('doctors');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenAppointmentModal();
      },
      // Doctor sitting with patient in consultation suite
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1800&q=85',
      imageAlt: 'Doctor consultation with patient during hospital visit',
    },
    {
      id: 'after-visit',
      stepNumber: 3,
      tabLabel: 'AFTER YOUR VISIT',
      title: 'After your visit',
      description:
        'After your visit to Kanha Hospitals, your recovery and continuity of care remain our highest commitment. Access your verified digital discharge summaries, diagnostic lab reports, and round-the-clock pharmacy refills from home. Connect with your specialist anytime via tele-consultation.',
      primaryActionLabel: 'Explore more',
      primaryAction: () => onOpenReportsModal(),
      // Doctor follow-up tele-consultation review
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85',
      imageAlt: 'Follow-up consultation and recovery review after visit',
    },
  ];

  // Scroll detection to highlight active stage tab as cards stack
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 350;
      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const top = ref.offsetTop;
        const height = ref.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveTab(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    setActiveTab(index);
    const target = cardRefs.current[index];
    if (target) {
      const yOffset = -140;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-white pt-8 sm:pt-12 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 1. STICKY TOP TIMELINE NAVIGATION BAR                          */}
        {/* ============================================================== */}
        <div className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-md pt-4 pb-5 border-b border-slate-100 shadow-2xs mb-8 sm:mb-12">
          {/* Labels Row */}
          <div className="grid grid-cols-3 text-left">
            {stages.map((stage, idx) => {
              const isActive = idx === activeTab;
              const isPast = idx < activeTab;
              return (
                <button
                  key={stage.id}
                  onClick={() => scrollToCard(idx)}
                  className="group text-left focus:outline-none transition-all cursor-pointer py-1"
                >
                  <span 
                    className={`block text-[11px] sm:text-xs md:text-[13px] font-bold tracking-wider uppercase transition-colors ${
                      isActive 
                        ? 'text-slate-900 font-extrabold' 
                        : isPast 
                          ? 'text-[#c59b27] hover:text-slate-900' 
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

            {/* Filled Gold Active Track Line */}
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#00875a] via-[#c59b27] to-[#d4af37] transition-all duration-300 ease-out z-0"
              style={{
                width: activeTab === 0 ? '16%' : activeTab === 1 ? '50%' : '100%',
              }}
            />

            {/* Node 1: Before your visit */}
            <button
              onClick={() => scrollToCard(0)}
              className="relative z-10 flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Before your visit"
            >
              <div 
                className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                  activeTab >= 0
                    ? 'bg-[#c59b27] ring-4 ring-[#c59b27]/25 shadow-sm scale-110'
                    : 'bg-slate-300 ring-2 ring-white'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </button>

            {/* Node 2: During your visit */}
            <button
              onClick={() => scrollToCard(1)}
              className="relative z-10 flex items-center justify-center focus:outline-none cursor-pointer"
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
              onClick={() => scrollToCard(2)}
              className="relative z-10 flex items-center justify-center focus:outline-none cursor-pointer"
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
        {/* 2. STACKING CARDS SCROLL CONTAINER (EXACT KFSH&RC EFFECT)      */}
        {/* ============================================================== */}
        <div className="relative space-y-16 sm:space-y-24 md:space-y-32">
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              ref={(el) => { cardRefs.current[idx] = el; }}
              id={stage.id}
              style={{
                // Stacks each card with a slight incremental top offset so upper card header peeks
                top: `calc(130px + ${idx * 24}px)`,
              }}
              className="sticky w-full min-h-[400px] sm:min-h-[460px] md:min-h-[500px] rounded-3xl md:rounded-[36px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.06)] flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white group bg-slate-900 transition-all duration-300"
            >
              {/* High-Resolution Background Photo */}
              <img
                src={stage.image}
                alt={stage.imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Multi-Layered Frosted Dark Vignette & Gradient for Pristine Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 sm:via-slate-950/55 via-55% to-slate-950/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              {/* Content Block */}
              <div className="relative z-10 max-w-2xl">
                
                {/* Stage Counter Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold text-white/95 mb-4 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
                  <span>Stage 0{stage.stepNumber} • {stage.tabLabel}</span>
                </div>

                {/* Big Bold Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
                  {stage.title}
                </h2>

                {/* Detailed Description */}
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-8 max-w-xl drop-shadow-sm">
                  {stage.description}
                </p>

                {/* Call to Action Row */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={stage.primaryAction}
                    className="inline-flex items-center gap-2.5 font-bold text-sm sm:text-base text-white hover:text-emerald-300 transition-colors group/link cursor-pointer"
                  >
                    <span className="underline-offset-4 group-hover/link:underline">{stage.primaryActionLabel}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover/link:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenEmergencyModal}
                    className="hidden sm:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer ml-4"
                  >
                    <span>Need Guidance? Call Helpdesk</span>
                  </button>
                </div>
              </div>

              {/* Stage Number Watermark */}
              <div className="absolute bottom-6 right-8 sm:bottom-10 sm:right-12 z-10 font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white/20 select-none pointer-events-none">
                0{stage.stepNumber}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
