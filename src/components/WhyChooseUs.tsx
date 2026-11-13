import React from 'react';
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
  PhoneCall
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
      color: 'from-blue-600 to-sky-600',
    },
    {
      icon: HeartHandshake,
      title: 'Compassionate Care',
      desc: 'Empathy at the heart of everything we do. Dedicated 1:1 patient care managers and supportive nursing ensuring dignity, comfort, and peace of mind.',
      color: 'from-teal-600 to-emerald-600',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Hygienic Environment',
      desc: '3 Modular Laminar Flow OTs with sterile HEPA filtration, zero-cross contamination dialysis bays, and strict NABH infection control standards.',
      color: 'from-indigo-600 to-blue-700',
    },
    {
      icon: Clock,
      title: '24/7 Patient Support',
      desc: 'Round-the-clock emergency casualty, 24/7 in-house pharmacy, cardiac life-support ambulance dispatch, and bedside patient coordination.',
      color: 'from-sky-600 to-cyan-600',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP STATS COUNTER STRIP */}
        <div className="bg-gradient-to-r from-hospital-navyDeep via-hospital-navy to-hospital-navyLight rounded-3xl p-8 sm:p-10 text-white shadow-2xl mb-20 border border-white/10 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-hospital-sky/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-hospital-sky">
              Commitment To Better Healthcare
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Trusted by 75,000+ Families Across Hyderabad
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {HOSPITAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-2">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-hospital-sky">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {stat.label}
                </div>
                {stat.suffix && (
                  <div className="text-[10px] text-hospital-sky/80 uppercase font-mono mt-0.5">
                    {stat.suffix}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2-COLUMN SHOWCASE: PILLARS & BUILDING HIGHLIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Building Photo & Overlay Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="/images/kanha-building.jpg"
                alt="Kanha Hospitals Building - Kompally Hyderabad"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-navyDeep/90 via-transparent to-transparent"></div>

              {/* Building Card Floating Badges */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-hospital-sky text-hospital-navy text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                  Super-Specialty Hospital Campus
                </span>
                <h4 className="text-xl sm:text-2xl font-bold mt-2 text-white">
                  Kanha Hospitals
                </h4>
                <p className="text-xs text-slate-300 mt-1 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-hospital-sky shrink-0" />
                  <span>Panchsheel Enclave, Hi Tension Rd, Alwal, Opp O'rica Café, Kompally</span>
                </p>
              </div>
            </div>

            {/* Floating Quality Stamp */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 block uppercase">Quality Protocol</span>
                <span className="text-sm font-extrabold text-hospital-navy">NABH & Infection-Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: "Your Health Our Priority" 4 Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-sky-100 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Core Promise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
                Your Health, Our Priority
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                Expanding our commitment to better healthcare through cutting-edge medical technology, patient dignity, and clinical excellence.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-hospital-sky/40 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pil.color} text-white flex items-center justify-center shadow-sm mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-hospital-navy text-sm">
                      {pil.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-hospital-navy hover:bg-hospital-blue text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Schedule Hospital Visit
              </button>

              <button
                onClick={onOpenEmergencyModal}
                className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>24/7 Helpline: 9091445566</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

