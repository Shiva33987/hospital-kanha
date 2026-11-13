import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Search, 
  PhoneCall, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Award,
  Sparkles,
  ArrowRight,
  HeartPulse,
  Activity,
  ShieldCheck,
  Zap,
  Ambulance,
  UserCheck,
  Star
} from 'lucide-react';
import { HOSPITAL_INFO, SPECIALTIES, DOCTORS, HEALTH_PACKAGES } from '../data/hospitalData';

interface HeroProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenSearchModal,
}) => {
  const [activeTab, setActiveTab] = useState<'appointment' | 'find-doctor' | 'packages'>('appointment');

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('urology');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [doctorSearchQuery, setDoctorSearchQuery] = useState<string>('');

  const slides = [
    {
      badge: 'Premier Healthcare Institution',
      title: 'Delivers Expert, High-Quality & Compassionate Healthcare',
      highlight: 'Across Multiple Specialties',
      description: 'Centrally established super-specialty hospital in Kompally, Hyderabad, pioneering advanced laser urology, 24/7 hemodialysis, high-resolution CT imaging, and 3 modular laminar flow operating theaters.',
      image: '/images/kanha-building.jpg',
      tagline: 'Your Health Our Priority',
      badgeText: 'Kompally Flagship Campus',
    },
    {
      badge: 'Centers of Excellence',
      title: 'Advanced Urology, Nephrology & Men’s Health Institute',
      highlight: 'Minimally Invasive Laser Surgeries',
      description: 'Painless kidney stone dusting (RIRS / PCNL), Holmium laser prostate surgery, microscopic varicocele repair, and a round-the-clock 20-bed automated dialysis unit.',
      image: '/images/facility-urology-suite.jpg',
      tagline: 'Zero Incision • Rapid Recovery',
      badgeText: '7,500+ Laser Procedures',
    },
    {
      badge: 'Precision Infrastructure',
      title: 'High-Resolution CT-Scan & 3 Laminar Modular OTs',
      highlight: 'Sterile Airflow & Low-Dose 3D Imaging',
      description: 'Sub-second volumetric CT imaging for immediate trauma triage, Class 10,000 sterile airflow modular operating rooms, and dedicated intensivist-led ICU care.',
      image: '/images/facility-operation-theaters.jpg',
      tagline: 'Zero SSI Infection Protocol',
      badgeText: 'Class 10,000 HEPA Air',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleQuickBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAppointmentModal(selectedSpecialty, selectedDoctor || undefined);
  };

  const filteredDoctors = selectedSpecialty 
    ? DOCTORS.filter(d => d.departmentId === selectedSpecialty)
    : DOCTORS;

  return (
    <section className="relative bg-gradient-to-br from-[#05162a] via-[#092244] to-[#041224] text-white overflow-hidden pt-8 pb-16 lg:pb-24 border-b border-white/10">
      
      {/* Background radial glows for atmosphere */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Notification Ticker */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-1.5 px-4 max-w-fit shadow-md">
          <div className="flex items-center space-x-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="font-extrabold text-emerald-300 uppercase tracking-wide text-[11px]">Live Hospital Status:</span>
            <span className="text-slate-200 font-medium">18 Senior Consultants On-Duty • 24/7 Casualty Ready</span>
          </div>
          <span className="text-hospital-sky font-bold hidden sm:inline pl-2 border-l border-white/20">
            Emergency: 9091445566
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: HERO HEADLINE & SHOWCASE */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            
            {/* Tag badge with icon */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-hospital-blue/40 to-hospital-sky/30 backdrop-blur-md border border-hospital-sky/50 px-4 py-1.5 rounded-full text-xs font-bold text-hospital-sky shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>{slides[currentSlide].badge}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span className="text-white font-semibold">Panchsheel Enclave, Kompally</span>
            </div>

            {/* Main Headline with ultra-sharp contrast */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black tracking-tight text-white leading-[1.15]">
              {slides[currentSlide].title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 block mt-1">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-normal">
              {slides[currentSlide].description}
            </p>

            {/* Key feature pills with high visibility */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center space-x-2 text-xs text-white bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">24/7 Advanced Dialysis</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">3 Modular Laminar OTs</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">High-Res CT-Scan</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Holmium Laser Urology</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">50+ Cashless Insurances</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">24/7 Emergency & ICU</span>
              </div>
            </div>

            {/* Action buttons with glowing styling */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="bg-gradient-to-r from-hospital-blue via-sky-500 to-cyan-400 hover:from-sky-500 hover:to-teal-400 text-white font-extrabold px-7 py-4 rounded-full shadow-glow hover:shadow-cyan-400/50 transition-all duration-300 flex items-center space-x-2.5 text-sm sm:text-base cursor-pointer group"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Book In-Hospital Visit</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onOpenEmergencyModal}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-4 rounded-full border border-red-400/40 shadow-emergency hover:shadow-red-600/50 transition-all duration-300 flex items-center space-x-2.5 text-sm sm:text-base cursor-pointer group"
              >
                <PhoneCall className="w-5 h-5 animate-bounce" />
                <span>Emergency: {HOSPITAL_INFO.phoneFormatted}</span>
              </button>
            </div>

            {/* Trust Statistics Strip */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-3 sm:grid-cols-4 gap-4 text-white">
              <div>
                <div className="text-xl sm:text-2xl font-black text-cyan-300">75,000+</div>
                <div className="text-[11px] text-slate-300 uppercase font-semibold">Patients Treated</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-cyan-300 flex items-center">
                  <span>4.95</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 ml-1" />
                </div>
                <div className="text-[11px] text-slate-300 uppercase font-semibold">Trust Rating</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-cyan-300">24/7</div>
                <div className="text-[11px] text-slate-300 uppercase font-semibold">Dialysis & ICU</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl sm:text-2xl font-black text-cyan-300">3 OTs</div>
                <div className="text-[11px] text-slate-300 uppercase font-semibold">Laminar Airflow</div>
              </div>
            </div>

            {/* Carousel navigation indicators */}
            <div className="flex items-center space-x-2.5 pt-2">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? 'w-10 bg-cyan-400' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-slate-300 pl-2 font-mono">
                {currentSlide + 1} / {slides.length} — {slides[currentSlide].tagline}
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: VISUAL HOSPITAL SHOWCASE & EXPRESS BOOKING DESK */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* 1. VISUAL HOSPITAL PHOTO SHOWCASE WITH FLOATING BADGES */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
              <img
                src={slides[currentSlide].image}
                alt="Kanha Hospitals Building and Facilities"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05162a]/95 via-[#05162a]/40 to-transparent"></div>

              {/* Floating Top Badge */}
              <div className="absolute top-3 left-3 bg-[#06182e]/90 backdrop-blur-md border border-white/20 text-hospital-sky text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>{slides[currentSlide].badgeText}</span>
              </div>

              {/* Floating Live Doctor Card bottom */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md text-hospital-navy rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-10 h-10 rounded-full bg-hospital-navy text-white flex items-center justify-center font-bold text-xs shrink-0 border-2 border-hospital-sky">
                    <UserCheck className="w-5 h-5 text-hospital-sky" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-hospital-navy">Dr. K. Ramakrishna Rao</h5>
                    <p className="text-[11px] text-slate-500">M.Ch (Urology) • Chief Urologist</p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md shrink-0">
                  On-Duty Today
                </span>
              </div>
            </div>

            {/* 2. EXPRESS BOOKING DESK CARD */}
            <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 text-hospital-navy border-2 border-white relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-hospital-navy to-hospital-blue text-white flex items-center justify-center shadow-sm">
                    <HeartPulse className="w-5 h-5 text-hospital-sky" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-hospital-navy leading-none">
                      Express OPD Booking Desk
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1">Direct Consultation Token in 60s</p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Instant Token
                </span>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-3.5 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('appointment')}
                  className={`py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    activeTab === 'appointment'
                      ? 'bg-white text-hospital-navy shadow-sm'
                      : 'text-slate-600 hover:text-hospital-navy'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>OPD Visit</span>
                </button>
                <button
                  onClick={() => setActiveTab('find-doctor')}
                  className={`py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    activeTab === 'find-doctor'
                      ? 'bg-white text-hospital-navy shadow-sm'
                      : 'text-slate-600 hover:text-hospital-navy'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Doctor</span>
                </button>
                <button
                  onClick={() => setActiveTab('packages')}
                  className={`py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    activeTab === 'packages'
                      ? 'bg-white text-hospital-navy shadow-sm'
                      : 'text-slate-600 hover:text-hospital-navy'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Packages</span>
                </button>
              </div>

              {/* TAB 1: QUICK OPD APPOINTMENT FORM */}
              {activeTab === 'appointment' && (
                <form onSubmit={handleQuickBookSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                      1. Select Specialty
                    </label>
                    <select
                      value={selectedSpecialty}
                      onChange={(e) => {
                        setSelectedSpecialty(e.target.value);
                        setSelectedDoctor('');
                      }}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    >
                      <option value="urology">Urology & Laser Stone Care (Featured Flagship)</option>
                      <option value="nephrology">Nephrology & 24/7 Dialysis Unit (Featured)</option>
                      <option value="andrology">Andrology & Men's Health (Featured)</option>
                      <option value="cardiology">Cardiology & Heart Care</option>
                      <option value="orthopedics">Orthopedics & Joint Replacement</option>
                      <option value="critical-care">Critical Care & Advanced ICU</option>
                      <option value="general-surgery">General & Laparoscopic Surgery</option>
                      <option value="gynaecology">Obstetrics & Gynaecology</option>
                      <option value="paediatrics">Paediatrics & Neonatology</option>
                      <option value="pulmonology">Pulmonology & Chest Medicine</option>
                      <option value="general-medicine">General Medicine & Internal Health</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                      2. Choose Specialist / Consultant
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    >
                      <option value="">Any Available Senior Specialist</option>
                      {filteredDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} ({doc.qualification.split(',')[0]} - {doc.experienceYears}y exp)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                        Patient Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Reddy"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-1 bg-gradient-to-r from-hospital-navy via-hospital-navyLight to-hospital-blue hover:from-hospital-blue hover:to-hospital-sky text-white py-3 rounded-xl font-extrabold text-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Proceed to Confirm Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* TAB 2: FIND DOCTOR SEARCH */}
              {activeTab === 'find-doctor' && (
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search doctor or symptom..."
                      value={doctorSearchQuery}
                      onChange={(e) => setDoctorSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  </div>

                  <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                    {DOCTORS.filter(d => 
                      !doctorSearchQuery || 
                      d.name.toLowerCase().includes(doctorSearchQuery.toLowerCase()) || 
                      d.specialty.toLowerCase().includes(doctorSearchQuery.toLowerCase())
                    ).map((doc) => (
                      <div 
                        key={doc.id}
                        onClick={() => onOpenAppointmentModal(doc.departmentId, doc.id)}
                        className="p-2 rounded-xl border border-slate-100 hover:border-hospital-sky hover:bg-sky-50/50 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2.5">
                          <img 
                            src={doc.image} 
                            alt={doc.name} 
                            className="w-9 h-9 rounded-full object-cover border border-slate-200" 
                          />
                          <div>
                            <h4 className="font-bold text-xs text-hospital-navy group-hover:text-hospital-blue">{doc.name}</h4>
                            <p className="text-[10px] text-slate-500">{doc.specialty}</p>
                          </div>
                        </div>
                        <span className="text-xs text-hospital-blue font-bold">
                          Book &rarr;
                        </span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#doctors" 
                    className="block text-center text-xs font-bold text-hospital-blue hover:text-hospital-navy pt-1"
                  >
                    View All Hospital Doctors &rarr;
                  </a>
                </div>
              )}

              {/* TAB 3: HEALTH PACKAGES QUICK ACCESS */}
              {activeTab === 'packages' && (
                <div className="space-y-2.5">
                  <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                    {HEALTH_PACKAGES.slice(0, 3).map((pkg) => (
                      <div 
                        key={pkg.id}
                        className="p-2.5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-hospital-sky transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-xs text-hospital-navy">{pkg.name}</h4>
                            <p className="text-[10px] text-slate-500">{pkg.totalTests} Diagnostic Tests</p>
                          </div>
                          <span className="font-black text-xs text-hospital-blue">₹{pkg.discountedPrice}</span>
                        </div>
                        <button
                          onClick={() => onOpenAppointmentModal(`package-${pkg.id}`)}
                          className="mt-1.5 w-full py-1 bg-white border border-hospital-sky text-hospital-blue hover:bg-hospital-blue hover:text-white rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          Book at ₹{pkg.discountedPrice}
                        </button>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#packages" 
                    className="block text-center text-xs font-bold text-hospital-blue hover:text-hospital-navy pt-1"
                  >
                    Explore All Health Checkup Packages &rarr;
                  </a>
                </div>
              )}

              {/* Card Footer */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-hospital-sky" />
                  <span>OPD Open Today till 9 PM</span>
                </span>
                <a 
                  href={`tel:${HOSPITAL_INFO.phone}`} 
                  className="font-bold text-hospital-navy hover:text-hospital-blue flex items-center space-x-1"
                >
                  <PhoneCall className="w-3 h-3 text-red-500" />
                  <span>{HOSPITAL_INFO.phoneFormatted}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
