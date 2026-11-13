import React from 'react';
import { 
  Calendar, 
  Video, 
  Ambulance, 
  ScanLine, 
  Pill, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

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
      desc: 'Instant booking with top specialists in Urology, Nephrology, Ortho & Cardiology.',
      icon: Calendar,
      color: 'from-blue-600 to-sky-600',
      badge: 'Zero Waiting',
      action: () => onOpenAppointmentModal(),
      btnText: 'Book OPD Slot',
    },
    {
      id: 'emergency-call',
      title: '24/7 Emergency & Trauma',
      subtitle: 'Rapid Response Care Unit',
      desc: 'Immediate emergency physician triage, trauma resuscitation & priority admission.',
      icon: Ambulance,
      color: 'from-red-600 to-rose-600',
      badge: '24x7 Active',
      action: onOpenEmergencyModal,
      btnText: 'Emergency: 9091445566',
      highlight: true,
    },
    {
      id: 'ct-diagnostics',
      title: 'CT Scan & Diagnostics',
      subtitle: 'High Resolution 3D Imaging & Lab',
      desc: 'Multi-slice low-radiation CT scan, automated biochemistry, and renal profile tests.',
      icon: ScanLine,
      color: 'from-cyan-600 to-teal-600',
      badge: 'NABL Standard',
      action: () => {
        const el = document.getElementById('facilities');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      btnText: 'View Diagnostics',
    },
    {
      id: 'dialysis-care',
      title: '24/7 Dialysis Unit',
      subtitle: 'Comprehensive Renal Care',
      desc: '20+ automated dialysis stations with dual-pass RO ultra-pure water filtration.',
      icon: Pill,
      color: 'from-sky-600 to-indigo-600',
      badge: '24/7 Service',
      action: () => onOpenAppointmentModal('nephrology'),
      btnText: 'Book Dialysis Session',
    },
    {
      id: 'cashless-tpa',
      title: 'Cashless Insurance & TPA',
      subtitle: '50+ Empaneled Providers',
      desc: 'Zero-cash admissions, pre-auth clearance within 2 hours, dedicated bedside desk.',
      icon: ShieldCheck,
      color: 'from-emerald-600 to-teal-700',
      badge: '100% Cashless',
      action: () => {
        const el = document.getElementById('cashless-insurance');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      btnText: 'Check TPA Partners',
    },
    {
      id: 'teleconsult',
      title: 'Telemedicine / Video Consult',
      subtitle: 'Consult Specialists from Home',
      desc: 'HD video consultation with senior doctors, digital e-prescriptions on WhatsApp.',
      icon: Video,
      color: 'from-violet-600 to-purple-600',
      badge: 'Across India',
      action: () => onOpenAppointmentModal(undefined),
      btnText: 'Start Teleconsult',
    },
  ];

  return (
    <section className="relative -mt-10 lg:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={card.action}
              className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer group relative overflow-hidden bg-white shadow-soft hover:shadow-hover border ${
                card.highlight 
                  ? 'border-red-200 ring-2 ring-red-500/20' 
                  : 'border-slate-100 hover:border-hospital-sky/40'
              }`}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.color}`}></div>

              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  card.highlight 
                    ? 'bg-red-50 text-red-600 border border-red-200' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {card.badge}
                </span>
              </div>

              <div className="mt-4">
                <span className="text-xs font-semibold text-hospital-sky uppercase tracking-wider block">
                  {card.subtitle}
                </span>
                <h3 className="text-lg font-bold text-hospital-navy group-hover:text-hospital-blue transition-colors mt-0.5">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-hospital-navy group-hover:text-hospital-blue">
                <span>{card.btnText}</span>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-hospital-sky group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

