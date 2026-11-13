import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ScanLine, 
  Flame, 
  Droplet, 
  Scissors, 
  Bed, 
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface HospitalTourProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
  onOpenEmergencyModal: () => void;
}

export const HospitalTourFloorPlan: React.FC<HospitalTourProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
}) => {
  const floors = [
    {
      level: 'Ground Floor (Level 0)',
      title: '24/7 Emergency, CT-Scan & Central Diagnostics',
      tagline: 'Rapid Triage, Trauma Resuscitation, In-House Pharmacy & Cashless TPA',
      image: '/images/facility-emergency.jpg',
      icon: Flame,
      color: 'from-red-600 to-rose-600',
      highlights: [
        'Dedicated 24/7 Emergency casualty entrance with ramp access',
        'High-Resolution Multi-Slice CT Scanner suite',
        '24-Hour fully stocked genuine hospital pharmacy',
        'On-campus Cashless Insurance & TPA coordination desk',
        'Priority trauma elevator directly linked to 3rd floor OTs',
      ],
      quickAction: 'Emergency Helpline: 9091445566',
      actionType: 'emergency',
    },
    {
      level: 'Floor 1',
      title: 'Outpatient Specialty Suites & Consultation Chambers',
      tagline: 'Senior Consultants in Urology, Nephrology, Cardiology, Ortho & Gynaec',
      image: '/images/kanha-building.jpg',
      icon: Layers,
      color: 'from-blue-600 to-sky-600',
      highlights: [
        'Consultation chambers for 24+ medical & surgical departments',
        'High-throughput automated phlebotomy & blood sample collection',
        'Non-invasive cardiac diagnostics (2D Echo, ECG & TMT Lab)',
        'Spacious air-conditioned waiting lounges with token display',
        'Wheelchair accessibility and patient concierge assistance',
      ],
      quickAction: 'Book OPD Consultation',
      actionType: 'opd',
    },
    {
      level: 'Floor 2',
      title: '24/7 Advanced Hemodialysis Center & Laser Daycare',
      tagline: '20+ Automated Dialysis Stations & Daycare Endourology Suites',
      image: '/images/facility-dialysis.jpg',
      icon: Droplet,
      color: 'from-sky-600 to-teal-600',
      highlights: [
        'Double-stage RO ultra-pure water treatment plant',
        '24/7 continuous maintenance hemodialysis with zero waiting time',
        'Isolated negative-pressure dialysis pods for seropositive patients',
        'Daycare laser stone recovery lounge with motorized recliners',
        'Continuous nephrologist and dialysis technician supervision',
      ],
      quickAction: 'Book Dialysis Slot',
      actionType: 'opd',
    },
    {
      level: 'Floor 3',
      title: '3 Modular Laminar Flow Operation Theaters',
      tagline: 'Class 10,000 Sterile Airflow, HEPA Filtration & Laser Surgery Suite',
      image: '/images/facility-operation-theaters.jpg',
      icon: Scissors,
      color: 'from-indigo-600 to-blue-700',
      highlights: [
        'Continuous vertical laminar airflow with high-efficiency HEPA filters',
        'Anti-microbial seamless conductive vinyl flooring & walls',
        'Holmium Laser Lithotripsy tower & digital flexible ureteroscopy',
        'Advanced anesthesia workstations with continuous multi-gas analysis',
        'Zero Surgical Site Infection (SSI) sterile protocol zone',
      ],
      quickAction: 'Consult Chief Surgeon',
      actionType: 'opd',
    },
    {
      level: 'Floor 4',
      title: 'Advanced Intensive Care Unit (ICU) & Critical Care',
      tagline: 'Multi-Organ Life Support with 1:1 Nurse-to-Patient Ratio',
      image: '/images/service-icu.jpg',
      icon: CheckCircle2,
      color: 'from-teal-600 to-emerald-600',
      highlights: [
        'Invasive & non-invasive mechanical ventilators for each bed',
        'Continuous arterial invasive blood pressure and cardiac monitoring',
        'Dedicated intensivist stationed 24 hours round-the-clock',
        'Bedside arterial blood gas (ABG) & point-of-care ultrasound',
        'Positive & negative pressure isolation suites for infection control',
      ],
      quickAction: 'ICU Patient Assistance',
      actionType: 'emergency',
    },
    {
      level: 'Floor 5',
      title: 'Deluxe Inpatient Rooms, Suites & Patient Comfort',
      tagline: 'Healing Accommodations with Companion Comfort Amenities',
      image: '/images/service-inpatient-room.jpg',
      icon: Bed,
      color: 'from-cyan-600 to-sky-700',
      highlights: [
        'Suite, Deluxe Private, Single & Twin-Sharing patient rooms',
        'Motorized multi-position orthopaedic electric beds',
        'Nurse call system with rapid 60-second bedside response guarantee',
        'Complimentary Wi-Fi, entertainment screen & companion couch',
        'Strict hygiene sanitation & dietary counseling meals',
      ],
      quickAction: 'Inpatient Room Booking',
      actionType: 'opd',
    },
  ];

  const [activeFloorIdx, setActiveFloorIdx] = useState(0);
  const activeFloor = floors[activeFloorIdx];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Campus Infrastructure Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
            Explore the Multi-Floor Medical Campus
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Take an interactive walk-through of Kanha Hospitals’ purpose-built multi-story facility in Kompally, engineered to international NABH infection control standards.
          </p>
        </div>

        {/* 2-COLUMN INTERACTIVE FLOOR DIRECTORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card">
          
          {/* Left Column: Floor Selector Tabs */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-3">
              Select Campus Level:
            </span>

            {floors.map((fl, idx) => {
              const isSelected = activeFloorIdx === idx;
              const Icon = fl.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFloorIdx(idx)}
                  className={`w-full p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-r from-hospital-navy to-hospital-blue text-white shadow-md border-transparent ring-2 ring-hospital-sky/40'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-hospital-blue shadow-sm'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-wider block ${
                        isSelected ? 'text-hospital-sky' : 'text-slate-400'
                      }`}>
                        {fl.level}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm truncate max-w-[230px]">
                        {fl.title.split('&')[0]}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-hospital-sky' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Floor Visual & Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md bg-slate-900">
              <img
                src={activeFloor.image}
                alt={activeFloor.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-navyDeep/90 via-hospital-navyDeep/30 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-hospital-navy/90 backdrop-blur-md text-hospital-sky border border-white/20 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {activeFloor.level}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl sm:text-2xl font-black">{activeFloor.title}</h3>
                <p className="text-xs text-sky-200 mt-1">{activeFloor.tagline}</p>
              </div>
            </div>

            {/* Highlights List */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-[11px] font-bold text-hospital-navy uppercase tracking-wider block mb-1">
                Facility Infrastructure Highlights:
              </span>
              {activeFloor.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="flex items-center justify-between pt-1">
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-700">Location:</span> Panchsheel Enclave, Kompally
              </div>

              <button
                onClick={() => {
                  if (activeFloor.actionType === 'emergency') {
                    onOpenEmergencyModal();
                  } else {
                    onOpenAppointmentModal();
                  }
                }}
                className="bg-hospital-navy hover:bg-hospital-blue text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <span>{activeFloor.quickAction}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
