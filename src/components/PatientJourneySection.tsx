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
  const [scrollProgress, setScrollProgress] = useState<number>(0);
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
      image: '/images/journey-before-visit.jpg',
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
      image: '/images/journey-during-visit.jpg',
      imageAlt: 'Senior Indian doctor consulting with patient at Kanha Hospitals',
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
      image: '/images/journey-after-visit.jpg',
      imageAlt: 'Follow-up tele-consultation and recovery review with Indian specialist after visit',
    },
  ];

  // Continuous scroll detection to calculate exact progress and active tab
  useEffect(() => {
    const handleScroll = () => {
      const c0 = cardRefs.current[0];
      const c1 = cardRefs.current[1];
      const c2 = cardRefs.current[2];
      if (!c0 || !c1 || !c2) return;

      const c0Rect = c0.getBoundingClientRect();
      const c1Rect = c1.getBoundingClientRect();
      const c2Rect = c2.getBoundingClientRect();

      // Viewport target offset where card sticks
      const targetSticky = 130;

      // Distance between card tops
      const span01 = Math.max(1, c1.offsetTop - c0.offsetTop);
      const span12 = Math.max(1, c2.offsetTop - c1.offsetTop);

      let p = 0;
      if (c1Rect.top > targetSticky + 20) {
        // Between stage 0 and 1
        const scrolled = targetSticky - c0Rect.top;
        p = Math.max(0, Math.min(1, scrolled / span01));
      } else if (c2Rect.top > targetSticky + 40) {
        // Between stage 1 and 2
        const scrolled = targetSticky + 20 - c1Rect.top;
        p = 1 + Math.max(0, Math.min(1, scrolled / span12));
      } else {
        // At stage 2
        p = 2;
      }

      setScrollProgress(p);

      if (p < 0.6) {
        setActiveTab(0);
      } else if (p < 1.6) {
        setActiveTab(1);
      } else {
        setActiveTab(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    setActiveTab(index);
    setScrollProgress(index);
    const target = cardRefs.current[index];
    if (target) {
      const yOffset = -130;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-white pt-6 sm:pt-10 pb-24 sm:pb-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 1. ULTRA-PREMIUM KFSH&RC STICKY TIMELINE NAVIGATION BAR        */}
        {/* ============================================================== */}
        <div className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-xl py-4 sm:py-5 border-b border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] mb-8 sm:mb-12">
          {/* Row 1: Step Labels in a 3-column grid */}
          <div className="grid grid-cols-3 gap-0 mb-3">
            {stages.map((stage, idx) => {
              const isActive = idx === activeTab;
              const isPast = idx < activeTab;

              return (
                <button
                  key={stage.id}
                  onClick={() => scrollToCard(idx)}
                  className="group text-left focus:outline-none cursor-pointer select-none"
                  aria-label={stage.tabLabel}
                >
                  <span 
                    className={`block text-[11px] sm:text-xs md:text-[13px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                      isActive 
                        ? 'font-bold text-[#9a7b2c]' 
                        : isPast 
                          ? 'font-semibold text-[#b88e28]' 
                          : 'font-medium text-slate-400 group-hover:text-slate-700'
                    }`}
                  >
                    {stage.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 2: One Continuous Connecting Line with Aligned Nodes */}
          <div className="relative flex items-center">
            {/* Continuous Base Track Line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-slate-200/90 z-0" />

            {/* Continuous Active Gold Fill Line */}
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#c59b27] via-[#d4af37] to-[#e0b84c] transition-all duration-300 ease-out z-0"
              style={{
                width: `${Math.min(100, Math.max(0, (scrollProgress / 2) * 100))}%`,
              }}
            />

            {/* 3 Grid Positions for Nodes: Exact same 3-column grid */}
            <div className="grid grid-cols-3 w-full relative z-10 pointer-events-none">
              {stages.map((stage, idx) => {
                const isReached = scrollProgress >= idx;
                return (
                  <div key={stage.id} className="flex items-center">
                    <button
                      onClick={() => scrollToCard(idx)}
                      className="pointer-events-auto focus:outline-none cursor-pointer group"
                      aria-label={stage.tabLabel}
                    >
                      <div 
                        className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                          isReached
                            ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#c59b27] ring-4 ring-[#c59b27]/25 shadow-xs scale-105'
                            : 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-slate-300 ring-4 ring-white group-hover:bg-slate-400'
                        }`}
                      >
                        {isReached && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-2xs" />
                        )}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
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
                top: `calc(130px + ${idx * 24}px)`,
              }}
              className="sticky w-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] rounded-3xl md:rounded-[36px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.06)] flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white group bg-slate-900 transition-all duration-300"
            >
              {/* High-Resolution Background Photo */}
              <img
                src={stage.image}
                alt={stage.imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Multi-Layered Frosted Dark Vignette & Gradient for Pristine Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 sm:via-slate-950/50 via-50% to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Content Block */}
              <div className="relative z-10 max-w-2xl">
                
                {/* Big Bold Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-sm">
                  {stage.title}
                </h2>

                {/* Detailed Description */}
                <p className="text-sm sm:text-base text-slate-100/95 leading-relaxed font-normal mb-8 max-w-xl drop-shadow-sm">
                  {stage.description}
                </p>

                {/* Call to Action Link */}
                <div className="flex items-center">
                  <button
                    onClick={stage.primaryAction}
                    className="inline-flex items-center gap-2.5 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors group/link cursor-pointer"
                  >
                    <span>{stage.primaryActionLabel}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover/link:text-amber-300 group-hover/link:translate-x-1.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
