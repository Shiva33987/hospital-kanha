import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Search, 
  Video, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Award,
  Sparkles,
  ArrowRight,
  User,
  HeartPulse
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
  // Quick Widget Active Tab: 'appointment' | 'find-doctor' | 'packages' | 'teleconsult'
  const [activeTab, setActiveTab] = useState<'appointment' | 'find-doctor' | 'packages' | 'teleconsult'>('appointment');

  // Quick form state
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('urology');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 10:30 AM');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [doctorSearchQuery, setDoctorSearchQuery] = useState<string>('');

  // Hero background slides
  const slides = [
    {
      badge: 'Excellence in Healthcare',
      title: 'Delivers Expert, High-Quality & Compassionate Healthcare',
      highlight: 'Across Multiple Specialties',
      description: 'Super-specialty clinical care centered on Urology, Nephrology & Andrology, backed by 3 Modular Laminar Flow OTs, high-resolution CT Scan, and 24/7 Critical Care.',
      image: '/images/kanha-building.jpg',
      tagline: 'Your Health Our Priority',
    },
    {
      badge: 'Centers of Excellence',
      title: 'Advanced Urology, Nephrology & Laser Stone Center',
      highlight: 'Minimally Invasive Laser Surgeries',
      description: 'Painless kidney stone removal (RIRS/PCNL), laser prostate enucleation, comprehensive dialysis suite with 20+ automated machines, and dedicated male andrology clinic.',
      image: '/images/facility-urology-suite.jpg',
      tagline: 'Care | Compassion | Trust',
    },
    {
      badge: 'State-of-the-Art Infrastructure',
      title: 'High-Resolution CT-Scan & 3 Laminar Modular OTs',
      highlight: 'Zero-Infection Airflow Operating Suites',
      description: 'Ultra-low radiation volumetric CT scanning, Class 10,000 sterile airflow modular operation theaters, and round-the-clock intensive care with 1:1 nursing.',
      image: '/images/facility-operation-theaters.jpg',
      tagline: 'Precision Diagnostics & Surgery',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
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
    <section className="relative bg-gradient-to-b from-slate-900 via-hospital-navyDeep to-hospital-navy text-white overflow-hidden pt-8 pb-16 lg:pb-24">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-hospital-blue/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & HIGHLIGHTS */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-hospital-sky animate-in fade-in duration-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{slides[currentSlide].badge}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span className="text-white/80">Kompally, Hyderabad</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {slides[currentSlide].title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hospital-sky via-cyan-300 to-teal-300 block mt-1">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Key feature check pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Advanced Dialysis</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3 Modular Laminar OTs</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>High-Res CT-Scan</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Holmium Laser Urology</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50+ Cashless Insurances</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Emergency & ICU</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="bg-gradient-to-r from-hospital-blue to-hospital-sky hover:from-sky-500 hover:to-cyan-400 text-white font-bold px-6 py-3.5 rounded-full shadow-glow hover:shadow-lg transition-all flex items-center space-x-2 text-sm cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Hospital Visit</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEmergencyModal}
                className="bg-red-600/90 hover:bg-red-600 text-white font-bold px-5 py-3.5 rounded-full border border-red-500/50 shadow-emergency hover:shadow-red-600/50 transition-all flex items-center space-x-2 text-sm cursor-pointer group"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>Emergency: 9091445566</span>
              </button>
            </div>

            {/* Carousel navigation indicators */}
            <div className="flex items-center space-x-2 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-hospital-sky' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-slate-400 pl-2">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: MEDANTA-STYLE QUICK BOOKING & ACCESS WIDGET */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-7 text-hospital-navy border border-slate-100 relative">
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-sky-50 rounded-lg text-hospital-blue">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-hospital-navy leading-none">
                      Express Hospital Desk
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Book Appointments & Doctors in 60s</p>
                  </div>
                </div>
                <span className="inline-flex items-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  Instant Confirmation
                </span>
              </div>

              {/* Navigation Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-5 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('appointment')}
                  className={`py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
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
                  className={`py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    activeTab === 'find-doctor'
                      ? 'bg-white text-hospital-navy shadow-sm'
                      : 'text-slate-600 hover:text-hospital-navy'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Find Doctor</span>
                </button>
                <button
                  onClick={() => setActiveTab('packages')}
                  className={`py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    activeTab === 'packages'
                      ? 'bg-white text-hospital-navy shadow-sm'
                      : 'text-slate-600 hover:text-hospital-navy'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Packages</span>
                </button>
              </div>

              {/* TAB 1: QUICK APPOINTMENT FORM */}
              {activeTab === 'appointment' && (
                <form onSubmit={handleQuickBookSubmit} className="space-y-3.5">
                  {/* Select Specialty */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      1. Select Specialty
                    </label>
                    <select
                      value={selectedSpecialty}
                      onChange={(e) => {
                        setSelectedSpecialty(e.target.value);
                        setSelectedDoctor('');
                      }}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    >
                      <option value="urology">Urology & Laser Stone Care (Featured)</option>
                      <option value="nephrology">Nephrology & 24/7 Dialysis (Featured)</option>
                      <option value="andrology">Andrology & Men's Health</option>
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

                  {/* Select Doctor */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      2. Choose Specialist / Consultant
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    >
                      <option value="">Any Available Senior Specialist</option>
                      {filteredDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} ({doc.qualification.split(',')[0]} - {doc.experienceYears}y exp)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Patient Info Row */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Patient Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Reddy"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full mt-2 bg-gradient-to-r from-hospital-navy to-hospital-blue hover:from-hospital-navyLight hover:to-hospital-sky text-white py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Proceed to Confirm Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* TAB 2: FIND DOCTOR SEARCH */}
              {activeTab === 'find-doctor' && (
                <div className="space-y-3.5">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search doctor name or disease / symptom..."
                      value={doctorSearchQuery}
                      onChange={(e) => setDoctorSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>

                  <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
                    {DOCTORS.filter(d => 
                      !doctorSearchQuery || 
                      d.name.toLowerCase().includes(doctorSearchQuery.toLowerCase()) || 
                      d.specialty.toLowerCase().includes(doctorSearchQuery.toLowerCase())
                    ).map((doc) => (
                      <div 
                        key={doc.id}
                        onClick={() => onOpenAppointmentModal(doc.departmentId, doc.id)}
                        className="p-2.5 rounded-xl border border-slate-100 hover:border-hospital-sky hover:bg-sky-50/50 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center space-x-3">
                          <img 
                            src={doc.image} 
                            alt={doc.name} 
                            className="w-10 h-10 rounded-full object-cover border border-slate-200" 
                          />
                          <div>
                            <h4 className="font-bold text-xs text-hospital-navy group-hover:text-hospital-blue">{doc.name}</h4>
                            <p className="text-[11px] text-slate-500">{doc.specialty}</p>
                            <span className="text-[10px] text-emerald-600 font-semibold">{doc.experienceYears} Years Exp | {doc.rating} ★</span>
                          </div>
                        </div>
                        <span className="text-xs text-hospital-blue font-bold group-hover:translate-x-1 transition-transform">
                          Book &rarr;
                        </span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#doctors" 
                    className="block text-center text-xs font-bold text-hospital-blue hover:text-hospital-navy pt-1"
                  >
                    View All Hospital Doctors & Consultants &rarr;
                  </a>
                </div>
              )}

              {/* TAB 3: HEALTH PACKAGES QUICK ACCESS */}
              {activeTab === 'packages' && (
                <div className="space-y-3">
                  <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                    {HEALTH_PACKAGES.slice(0, 3).map((pkg) => (
                      <div 
                        key={pkg.id}
                        className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-hospital-sky hover:shadow-sm transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-xs text-hospital-navy">{pkg.name}</h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">{pkg.totalTests} Diagnostic Tests Included</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-slate-400 line-through mr-1.5">₹{pkg.originalPrice}</span>
                            <span className="font-extrabold text-sm text-hospital-blue">₹{pkg.discountedPrice}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onOpenAppointmentModal('health-checkup')}
                          className="mt-2 w-full py-1.5 bg-white border border-hospital-sky text-hospital-blue hover:bg-hospital-blue hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                        >
                          Book Package at ₹{pkg.discountedPrice}
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

              {/* Bottom Quick Contacts */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-hospital-sky" />
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

