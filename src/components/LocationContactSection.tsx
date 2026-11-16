import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Ambulance, 
  ChevronDown, 
  HelpCircle,
  Building2,
  Sparkles,
  Search,
  X,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Headphones,
  Copy,
  Check,
  Share2,
  Car,
  Train,
  Compass,
  User,
  Phone,
  FileText,
  Zap,
  Activity,
  Heart,
  Shield,
  Droplets,
  Layers
} from 'lucide-react';
import { HOSPITAL_INFO, FAQS, FAQItem } from '../data/hospitalData';

interface LocationContactSectionProps {
  onOpenAppointmentModal?: (specialtyId?: string, doctorId?: string) => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [formSent, setFormSent] = useState(false);
  const [faqOpenId, setFaqOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activeRouteTab, setActiveRouteTab] = useState<'suchitra' | 'alwal' | 'orr' | 'station'>('suchitra');
  const [inquiryTopic, setInquiryTopic] = useState('Doctor OPD Consultation');

  const categories = [
    { id: 'all', label: 'All Questions', icon: Layers },
    { id: 'appointment', label: 'OPD Appointments', icon: Calendar },
    { id: 'emergency', label: '24/7 Casualty', icon: Ambulance },
    { id: 'insurance', label: 'Cashless & TPA', icon: ShieldCheck },
    { id: 'clinical', label: 'Urology & Dialysis', icon: Zap },
    { id: 'location', label: 'Location & Access', icon: MapPin },
    { id: 'diagnostics', label: 'Diagnostics & Lab', icon: Droplets },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesQuery = !searchQuery ||
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.highlights && faq.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const col1 = useMemo(() => filteredFaqs.filter((_, i) => i % 2 === 0), [filteredFaqs]);
  const col2 = useMemo(() => filteredFaqs.filter((_, i) => i % 2 === 1), [filteredFaqs]);

  const handleCopyAddress = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(
        "Kanha Hospitals, Panchsheel Enclave Road No. 5, Hi Tension Road, Alwal, Opposite O'rica Café, Kompally, Hyderabad, Telangana 500010"
      );
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 6000);
  };

  const routeGuides = {
    suchitra: {
      title: 'From Suchitra Circle',
      time: '7 Mins',
      distance: '3.2 km',
      icon: Car,
      route: 'Take Medchal Highway (NH 44) north, turn right onto Hi-Tension Road at Alwal crossroad. Continue for 900 meters.',
      landmark: "Directly opposite O'rica Café on the main road.",
    },
    alwal: {
      title: 'From Alwal Center',
      time: '5 Mins',
      distance: '2.1 km',
      icon: Compass,
      route: 'Head towards Panchsheel Enclave Road No. 5 via IG Statue road. Turn smoothly onto Hi-Tension Road.',
      landmark: 'Prominent modern glass-facade hospital building with 24/7 emergency casualty bay at Gate 1.',
    },
    orr: {
      title: 'From ORR (Kompally Exit 6)',
      time: '8 Mins',
      distance: '4.5 km',
      icon: Navigation,
      route: 'Take Exit 6 onto Medchal Highway towards Kompally. Take the service lane into Hi-Tension Road.',
      landmark: 'Smooth 4-lane wide access with ample patient parking and 24/7 valet staff at main entrance.',
    },
    station: {
      title: 'From Secunderabad Station',
      time: '20 Mins',
      distance: '11.8 km',
      icon: Train,
      route: 'Via Bowenpally Checkpost - Medchal Highway - Suchitra Circle - Hi-Tension Road.',
      landmark: 'Direct taxi, auto, and bus connectivity with Kanha Hospitals drop-off reception.',
    },
  };

  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = faqOpenId === faq.id;

    return (
      <div
        key={faq.id}
        className={`bg-white rounded-xl transition-all duration-200 overflow-hidden border ${
          isOpen
            ? 'border-blue-200/90 shadow-sm ring-1 ring-blue-500/10'
            : 'border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xs'
        }`}
      >
        {/* Question Trigger */}
        <button
          type="button"
          onClick={() => setFaqOpenId(isOpen ? null : faq.id)}
          className="w-full py-2.5 px-3 sm:py-2.5 sm:px-3.5 text-left flex items-center justify-between gap-2.5 cursor-pointer group"
        >
          <div className="min-w-0 pr-1">
            <span className="text-[9px] font-bold text-[#0052cc] bg-blue-50/80 px-1.5 py-0.2 rounded uppercase tracking-wider inline-block mb-0.5">
              {faq.categoryLabel}
            </span>
            <h3 className={`text-xs sm:text-[13px] font-bold transition-colors leading-snug ${
              isOpen ? 'text-[#041b53]' : 'text-slate-800 group-hover:text-[#0052cc]'
            }`}>
              {faq.q}
            </h3>
          </div>

          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
            isOpen
              ? 'rotate-180 bg-[#041b53] text-white shadow-xs'
              : 'bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-[#0052cc]'
          }`}>
            <ChevronDown className="w-3.5 h-3.5 stroke-[2.2]" />
          </div>
        </button>

        {/* Expanded Answer Panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-3 sm:px-3.5 pb-3 pt-1 border-t border-slate-100 text-xs text-slate-600 leading-relaxed space-y-2">
                <p className="font-normal text-slate-700 leading-relaxed">
                  {faq.a}
                </p>

                {/* Highlight chips */}
                {faq.highlights && faq.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {faq.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-blue-50/70 border border-blue-100 px-2 py-0.5 rounded text-[10.5px] font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#0052cc] shrink-0" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Action button */}
                {faq.actionLabel && (
                  <div className="pt-1">
                    {faq.actionType === 'appointment' && (
                      <button
                        type="button"
                        onClick={() => onOpenAppointmentModal?.()}
                        className="inline-flex items-center space-x-1.5 bg-[#041b53] hover:bg-[#00246a] text-white px-3 py-1.5 rounded-lg font-bold text-[11px] shadow-xs cursor-pointer"
                      >
                        <Calendar className="w-3 h-3 text-cyan-300" />
                        <span>{faq.actionLabel}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}

                    {faq.actionType === 'phone' && (
                      <a
                        href={`tel:${HOSPITAL_INFO.phone}`}
                        className="inline-flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg font-bold text-[11px] shadow-xs"
                      >
                        <PhoneCall className="w-3 h-3 text-white" />
                        <span>{faq.actionLabel}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}

                    {faq.actionType === 'map' && (
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Kanha+Hospitals+Panchsheel+Enclave+Road+No+5+Hi+Tension+Road+Alwal+Kompally+Hyderabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 bg-[#041b53] hover:bg-[#00246a] text-white px-3 py-1.5 rounded-lg font-bold text-[11px] shadow-xs"
                      >
                        <Navigation className="w-3 h-3 text-cyan-300" />
                        <span>{faq.actionLabel}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {faq.actionType === 'whatsapp' && (
                      <a
                        href="https://wa.me/919091445566?text=Hi%20Kanha%20Hospitals,%20I%20have%20an%20inquiry%20regarding%20cashless%20insurance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg font-bold text-[11px] shadow-xs"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>{faq.actionLabel}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="contact" className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-200/80">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-sky-100/35 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            PART 1: FREQUENTLY ASKED QUESTIONS (COMPACT & ATTRACTIVE)
           ======================================================== */}
        <div className="mb-6 sm:mb-8">
          
          {/* COMPACT SECTION HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold text-[#041b53] uppercase tracking-wider mb-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052cc] animate-pulse"></span>
              <span>KANHA PATIENT CONCIERGE</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#0052cc]">FAQS</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#041b53] tracking-tight leading-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#041b53] via-[#00246a] to-[#0052cc] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-1 text-slate-600 text-xs sm:text-[13px] max-w-lg mx-auto leading-normal font-normal">
              Quick, verified answers about doctor consultations, 24/7 casualty admissions, and cashless claims.
            </p>

            {/* Compact Centered Search Bar */}
            <div className="relative max-w-md mx-auto mt-2.5">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. dialysis, ambulance, insurance)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200/90 rounded-full pl-9 pr-8 py-1.5 sm:py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-blue-100 shadow-2xs transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
            </div>
          </div>

          {/* COMPACT CATEGORY FILTER PILLS */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 mb-4 overflow-x-auto pb-1 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-150 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#041b53] text-white shadow-2xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                  <span>{cat.label}</span>
                  {cat.id === 'all' && (
                    <span className={`text-[9.5px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      {FAQS.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 2-COLUMN ACCORDION FAQ CARDS */}
          <div className="max-w-5xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-xl p-6 text-center border border-slate-200/80 space-y-2 shadow-2xs">
                <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
                <h4 className="font-bold text-slate-800 text-sm">No Matching Questions Found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try searching for another keyword or reset your filter.
                </p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="mt-1 bg-[#041b53] text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#00246a] cursor-pointer shadow-xs transition-colors"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 items-start">
                {/* Column 1 */}
                <div className="space-y-2.5">
                  {col1.map((faq) => renderFaqCard(faq))}
                </div>
                {/* Column 2 */}
                <div className="space-y-2.5">
                  {col2.map((faq) => renderFaqCard(faq))}
                </div>
              </div>
            )}

            {/* COMPACT BOTTOM ASSISTANCE STRIP */}
            <div className="mt-4 bg-gradient-to-r from-blue-50/80 via-sky-50/40 to-indigo-50/60 rounded-xl border border-blue-200/60 px-3.5 py-2.5 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-2.5 shadow-2xs">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <Headphones className="w-4 h-4 text-[#0052cc] shrink-0" />
                <span className="text-xs text-slate-700">
                  <strong className="text-[#041b53] font-bold">Have more questions?</strong> Our 24/7 patient helpline is open round the clock.
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all shadow-2xs"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Call 24/7: {HOSPITAL_INFO.phoneFormatted}</span>
                </a>
                <a
                  href="https://wa.me/919091445566?text=Hi%20Kanha%20Hospitals,%20I%20have%20an%20inquiry%20regarding%20consultations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#041b53] hover:bg-[#00246a] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all shadow-2xs"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => onOpenAppointmentModal?.()}
                  className="inline-flex items-center gap-1 bg-white hover:bg-slate-50 text-[#041b53] border border-blue-200 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all shadow-2xs cursor-pointer"
                >
                  <Calendar className="w-3 h-3 text-[#0052cc]" />
                  <span>Book Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: LOCATION, CAMPUS & CONTACT (SIMPLE & ATTRACTIVE)
           ======================================================== */}
        <div className="border-t border-slate-200/80 pt-8 sm:pt-10">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0052cc] shadow-2xs mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>Campus &amp; Navigation • Kompally, Hyderabad</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#041b53] tracking-tight leading-tight">
              Visit{' '}
              <span className="bg-gradient-to-r from-[#041b53] via-[#00246a] to-[#0052cc] bg-clip-text text-transparent">
                Kanha Hospitals
              </span>
            </h2>
            
            <p className="mt-1.5 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-normal">
              Panchsheel Enclave Road No. 5, Hi Tension Road, Alwal, opposite O&apos;rica Café. Easily accessible via NH 44 and ORR Exit 6 with round-the-clock emergency casualty and valet parking.
            </p>
          </div>

          {/* MAIN 2-COLUMN LOCATION & INQUIRY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch max-w-7xl mx-auto">
            
            {/* =========================================
                LEFT COLUMN: ADDRESS, TIMINGS & ROUTE GUIDE
               ========================================= */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              
              {/* 1. Main Hospital Address & Operating Info Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative overflow-hidden space-y-4">
                
                {/* Top Subtle Medical Hairline */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#041b53] via-[#0052cc] to-[#10b981]" />

                {/* Address Header + Copy Address Button */}
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#041b53] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#0052cc]">Hospital Campus Address</div>
                      <h4 className="font-extrabold text-base text-slate-900 mt-0.5 leading-snug">
                        Kanha Hospitals, Kompally
                      </h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5 leading-relaxed">
                        Panchsheel Enclave Road No. 5, Hi Tension Road, Alwal,<br />
                        Opposite O&apos;rica Café, Kompally, Hyderabad, Telangana 500010
                      </p>
                    </div>
                  </div>

                  {/* Copy Address Button */}
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="shrink-0 inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-300 text-[11px] font-bold text-slate-700 hover:text-[#0052cc] transition-all cursor-pointer shadow-2xs"
                    title="Copy Address to Clipboard"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Dual Action Buttons: Open Maps + Share WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Kanha+Hospitals+Panchsheel+Enclave+Road+No+5+Hi+Tension+Road+Alwal+Kompally+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#041b53] hover:bg-[#00246a] text-white py-2 px-3.5 rounded-xl font-bold text-xs shadow-xs hover:shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                  >
                    <Navigation className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Get Driving Directions</span>
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?text=Kanha%20Hospitals%20Location:%20Panchsheel%20Enclave%20Road%20No.%205,%20Hi%20Tension%20Road,%20Alwal,%20Opposite%20O'rica%20Caf%C3%A9,%20Kompally,%20Hyderabad.%20Helpline:%209091445566%20https://maps.google.com/?q=Kanha+Hospitals+Kompally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-50 hover:bg-emerald-100/90 text-emerald-800 border border-emerald-200/90 py-2 px-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                  >
                    <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Share on WhatsApp</span>
                  </a>
                </div>

                {/* 24/7 Casualty & Emergency Call Box */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-red-50/90 border border-red-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <PhoneCall className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-red-600">
                        24/7 Helpline &amp; Casualty
                      </div>
                      <a
                        href={`tel:${HOSPITAL_INFO.phone}`}
                        className="text-sm sm:text-base font-black text-red-700 hover:text-red-800 block leading-tight"
                      >
                        {HOSPITAL_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="shrink-0 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg font-bold text-[11px] shadow-2xs hover:shadow-xs transition-all flex items-center space-x-1"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Operating Hours 3-Box Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-0.5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="font-extrabold text-slate-900 flex items-center space-x-1 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0052cc]" />
                      <span>OPD Clinics</span>
                    </div>
                    <div className="text-[10.5px] text-slate-600 font-medium mt-0.5 leading-snug">
                      Mon–Sat: 8 AM–9 PM<br />Sun: 9 AM–2 PM
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="font-extrabold text-slate-900 flex items-center space-x-1 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>Casualty &amp; ICU</span>
                    </div>
                    <div className="text-[10.5px] text-slate-600 font-medium mt-0.5 leading-snug">
                      24 Hours / 365 Days<br />Trauma On-Site
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="font-extrabold text-slate-900 flex items-center space-x-1 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Dialysis Suite</span>
                    </div>
                    <div className="text-[10.5px] text-slate-600 font-medium mt-0.5 leading-snug">
                      24/7 Active Bays<br />Zero Waiting Time
                    </div>
                  </div>
                </div>

                {/* Campus Facilities Strip */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 text-[11px] font-semibold text-slate-600">
                  <span className="inline-flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-[#0052cc]" />
                    <span>Free Valet Parking</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Ambulance className="w-3.5 h-3.5 text-red-500" />
                    <span>Gate 1 Ambulance Bay</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Wheelchair Accessible</span>
                  </span>
                </div>

              </div>

              {/* 2. Interactive Transit & Driving Guide Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-lg bg-sky-50 text-[#0052cc] flex items-center justify-center">
                      <Compass className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-extrabold text-xs text-slate-900 uppercase tracking-wider">
                      Turn-by-Turn Driving Guide
                    </span>
                  </div>
                  <span className="text-[10.5px] text-slate-400 font-medium">Select origin:</span>
                </div>

                {/* Transit Route Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {(Object.keys(routeGuides) as (keyof typeof routeGuides)[]).map((key) => {
                    const item = routeGuides[key];
                    const isActive = activeRouteTab === key;
                    const IconComp = item.icon;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveRouteTab(key)}
                        className={`p-2 rounded-xl text-left transition-all cursor-pointer border ${
                          isActive
                            ? 'bg-[#041b53] text-white border-[#041b53] shadow-2xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/70'
                        }`}
                      >
                        <div className="flex items-center space-x-1">
                          <IconComp className="w-3 h-3 shrink-0" />
                          <span className="font-bold text-[11px] truncate">{item.title.replace('From ', '')}</span>
                        </div>
                        <div className={`text-[10px] font-medium mt-0.5 ${isActive ? 'text-sky-200' : 'text-slate-500'}`}>
                          {item.time} • {item.distance}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Route Details Box */}
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#041b53] text-xs">
                      {routeGuides[activeRouteTab].title} ({routeGuides[activeRouteTab].distance})
                    </span>
                    <span className="bg-blue-100 text-[#0052cc] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Approx. {routeGuides[activeRouteTab].time}
                    </span>
                  </div>
                  <p className="leading-relaxed text-slate-600 text-[11.5px]">
                    {routeGuides[activeRouteTab].route}
                  </p>
                  <div className="pt-0.5 text-[11px] font-medium text-slate-700 flex items-center space-x-1 border-t border-blue-200/60">
                    <CheckCircle2 className="w-3 h-3 text-[#0052cc] shrink-0" />
                    <span><strong>Landmark:</strong> {routeGuides[activeRouteTab].landmark}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* =========================================
                RIGHT COLUMN: LIVE MAP & INQUIRY FORM
               ========================================= */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              
              {/* 1. Interactive Google Maps Frame */}
              <div className="rounded-2xl overflow-hidden shadow-2xs border border-slate-200/90 h-[240px] sm:h-[260px] bg-slate-100 relative group">
                
                {/* Floating Map Header Pill */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/80 shadow-xs text-xs font-bold text-slate-800 flex items-center space-x-1.5 pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span>Kanha Hospitals Campus</span>
                  </div>

                  <a
                    href="https://maps.google.com/maps?q=Panchsheel+Enclave+Road+No.+5,+Hi+Tension+Road,+Alwal,+Kompally,+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#041b53] hover:bg-[#00246a] text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-xs transition-all flex items-center space-x-1 pointer-events-auto cursor-pointer"
                  >
                    <span>View Larger Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Google Maps Iframe */}
                <iframe
                  title="Kanha Hospitals Location Map"
                  src="https://maps.google.com/maps?q=Panchsheel+Enclave+Road+No.+5,+Hi+Tension+Road,+Alwal,+Kompally,+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Floating Bottom Campus Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/85 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10.5px] font-medium flex items-center justify-between border border-white/20 pointer-events-none">
                  <span className="truncate">Directly Opposite O&apos;rica Café • 24/7 Gate 1</span>
                  <span className="text-emerald-400 font-bold shrink-0 ml-1.5">Open 24/7</span>
                </div>
              </div>

              {/* 2. Patient Inquiry & Administration Desk */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative overflow-hidden flex-1 flex flex-col justify-between">
                
                {/* Top Subtle Emerald Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-500 to-[#0052cc]" />

                <div>
                  <div className="flex items-center justify-between mb-1.5 pt-0.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0052cc] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      Patient Support Desk
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Avg Response: &lt; 30 Mins
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-slate-900 leading-tight">
                    Send an Inquiry to Hospital Administration
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 mb-3 leading-normal">
                    For cost estimates, doctor appointments, or cashless TPA guidance.
                  </p>

                  {/* 1-Click Topic Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {[
                      'Doctor OPD Consultation',
                      'Kidney Stone / Laser Surgery',
                      '24/7 Dialysis Slot',
                      'Cashless Insurance & TPA'
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setInquiryTopic(topic)}
                        className={`text-[10.5px] font-bold px-2.5 py-1 rounded-lg transition-all cursor-pointer border ${
                          inquiryTopic === topic
                            ? 'bg-[#041b53] text-white border-[#041b53] shadow-2xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/70'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>

                  {/* Form Component */}
                  {formSent ? (
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center space-y-1.5 animate-in fade-in">
                      <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                      <h5 className="font-bold text-emerald-900 text-xs">Inquiry Received Successfully!</h5>
                      <p className="text-[11px] text-emerald-700 leading-relaxed">
                        Our patient coordination officer will call you back within 30 minutes.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSent(false)}
                        className="text-[11px] font-bold text-emerald-800 underline mt-1 cursor-pointer"
                      >
                        Send another query
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Your Full Name"
                            className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                          />
                          <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        </div>
                        
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            placeholder="Mobile Number"
                            className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                          />
                          <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          value={inquiryTopic}
                          onChange={(e) => setInquiryTopic(e.target.value)}
                          placeholder="Subject / Department Requirement"
                          className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                        <FileText className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      </div>

                      <textarea
                        rows={2}
                        required
                        placeholder="Describe your medical query, symptoms, or preferred consultation date..."
                        className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl p-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      ></textarea>

                      <div className="flex items-center justify-between pt-0.5">
                        <span className="text-[10.5px] text-slate-400 font-medium flex items-center space-x-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span>100% Confidential</span>
                        </span>

                        <button
                          type="submit"
                          className="bg-[#041b53] hover:bg-[#00246a] text-white py-2 px-5 rounded-xl font-bold text-xs shadow-xs hover:shadow-sm transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
                        >
                          <Send className="w-3 h-3 text-cyan-300" />
                          <span>Submit Inquiry</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
