import React, { useState, useMemo } from 'react';
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
  Headphones
} from 'lucide-react';
import { HOSPITAL_INFO, FAQS, FAQItem } from '../data/hospitalData';

interface LocationContactSectionProps {
  onOpenAppointmentModal?: (specialtyId?: string, doctorId?: string) => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [formSent, setFormSent] = useState(false);
  const [faqOpenId, setFaqOpenId] = useState<string | null>('faq-location');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'location', label: 'Location & Access' },
    { id: 'appointment', label: 'OPD Appointments' },
    { id: 'emergency', label: '24/7 Casualty' },
    { id: 'insurance', label: 'Cashless & TPA' },
    { id: 'clinical', label: 'Urology & Dialysis' },
    { id: 'diagnostics', label: 'Lab & Home Care' },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-200/80">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-sky-100/35 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            PART 1: FREQUENTLY ASKED QUESTIONS (REDESIGNED)
           ======================================================== */}
        <div className="mb-24">
          
          {/* SECTION HEADER & SEARCH BAR */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-2.5">
                <HelpCircle className="w-3.5 h-3.5 text-sky-500" />
                <span>Got Questions? Clear Answers &amp; Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                Everything you need to know about OPD booking, emergency admissions, dialysis, and cashless claims at Kanha Hospitals.
              </p>
            </div>

            {/* Quick FAQ Search Bar */}
            <div className="w-full md:w-80 shrink-0">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search questions (e.g. dialysis, ambulance)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100/70 shadow-2xs transition-all"
                />
                <Search className="w-4 h-4 text-sky-600 absolute left-3.5 top-3 group-focus-within:text-[#0077e6] transition-colors" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs transition-colors cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* MAIN 2-COLUMN FAQ SHOWCASE */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8">
            
            {/* LEFT ANCHOR CONCIERGE CARD ("Need Direct Assistance?") */}
            <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_-6px_rgba(8,31,61,0.06)] relative overflow-hidden group">
              
              {/* Top Accent Gradient Hairline */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0077e6] via-[#0284c7] to-[#10b981]" />

              <div>
                {/* Top Support Icon in soft sky circle */}
                <div className="w-13 h-13 rounded-2xl bg-sky-50 text-[#0077e6] flex items-center justify-center mb-6 border border-sky-100 shadow-2xs">
                  <Headphones className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Bold Headline */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0077e6] tracking-tight leading-none">
                  Need Direct
                </h3>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight leading-tight mt-1">
                  Assistance?
                </h3>

                {/* Green Accent Line */}
                <div className="w-10 h-1 bg-emerald-500 rounded-full my-4" />

                {/* Subtitles */}
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Have a specific case, report, or urgent admission? Our patient coordinators and casualty desk are active 24/7.
                </p>

                {/* Trust Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 space-y-2 font-medium">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24/7 Trauma &amp; Casualty Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Instant Ambulance: 9091445566</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>50+ Empaneled Cashless TPAs</span>
                  </div>
                </div>
              </div>

              {/* Direct Help Action Cards in Left Anchor */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                
                {/* 24/7 Emergency Line */}
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-red-50 hover:bg-red-100/90 border border-red-200/80 text-red-700 transition-all font-bold text-xs group/call cursor-pointer"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-red-500 font-extrabold uppercase tracking-wider">24/7 Emergency Casualty</div>
                      <div className="text-xs font-black text-red-700">{HOSPITAL_INFO.phoneFormatted}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover/call:translate-x-1 transition-transform" />
                </a>

                {/* WhatsApp Helpdesk */}
                <a
                  href="https://wa.me/919091445566?text=Hi%20Kanha%20Hospitals,%20I%20have%20an%20inquiry%20regarding%20consultations%20and%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/80 text-emerald-800 transition-all font-bold text-xs group/wa cursor-pointer"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider">WhatsApp Patient Desk</div>
                      <div className="text-xs font-black text-emerald-800">Chat with Coordinator</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600 group-hover/wa:translate-x-0.5 transition-transform" />
                </a>

                {/* Book OPD Appointment Modal Button */}
                <button
                  type="button"
                  onClick={() => onOpenAppointmentModal?.()}
                  className="w-full bg-gradient-to-r from-[#0077e6] to-[#0284c7] hover:from-[#0066cc] hover:to-[#0284c7] text-white py-2.5 rounded-2xl font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Doctor Slot Online</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: CATEGORY TABS & PREMIUM ACCORDION CARDS */}
            <div className="flex-1 min-w-0">
              
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-1 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                        isActive
                          ? 'bg-[#0077e6] text-white shadow-2xs'
                          : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
                      }`}
                    >
                      {cat.label} {cat.id === 'all' ? `(${FAQS.length})` : ''}
                    </button>
                  );
                })}
              </div>

              {/* Accordion FAQ Cards List */}
              {filteredFaqs.length === 0 ? (
                <div className="bg-white rounded-3xl p-10 text-center border border-slate-200/80 space-y-3">
                  <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
                  <h4 className="font-extrabold text-slate-800 text-base">No Matching Questions Found</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try searching for another keyword like &quot;dialysis&quot;, &quot;insurance&quot;, &quot;ambulance&quot;, or reset your filter.
                  </p>
                  <button
                    onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                    className="mt-2 bg-[#0077e6] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#0066cc] cursor-pointer"
                  >
                    Reset Filter &amp; Search
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {filteredFaqs.map((faq, idx) => {
                    const isOpen = faqOpenId === faq.id;
                    const numberStr = String(idx + 1).padStart(2, '0');

                    return (
                      <div
                        key={faq.id}
                        className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'bg-gradient-to-b from-sky-50/40 via-white to-white border-sky-400/90 shadow-[0_12px_32px_-6px_rgba(0,119,230,0.12)] ring-2 ring-sky-100/60'
                            : 'bg-white/95 border-slate-200/90 hover:border-sky-300 hover:shadow-[0_8px_25px_-5px_rgba(0,119,230,0.08)]'
                        }`}
                      >
                        {/* Question Header Trigger */}
                        <button
                          type="button"
                          onClick={() => setFaqOpenId(isOpen ? null : faq.id)}
                          className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-3.5 cursor-pointer group"
                        >
                          <div className="flex items-start sm:items-center space-x-3.5 min-w-0">
                            
                            {/* Question Number Badge */}
                            <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 border transition-all ${
                              isOpen
                                ? 'bg-[#0077e6] text-white border-[#0077e6] shadow-2xs'
                                : 'bg-sky-50 text-[#0077e6] border-sky-100 group-hover:bg-sky-100'
                            }`}>
                              {numberStr}
                            </span>

                            <div className="min-w-0">
                              {/* Category Chip Tag */}
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  {faq.categoryLabel}
                                </span>
                              </div>

                              {/* Question Heading */}
                              <h3 className={`text-sm sm:text-base font-extrabold transition-colors leading-snug ${
                                isOpen ? 'text-[#0077e6]' : 'text-slate-900 group-hover:text-[#0077e6]'
                              }`}>
                                {faq.q}
                              </h3>
                            </div>
                          </div>

                          {/* Smooth Circular Chevron Button */}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? 'rotate-180 bg-[#0077e6] text-white shadow-xs'
                              : 'bg-slate-100 group-hover:bg-sky-100 text-slate-500 group-hover:text-[#0077e6]'
                          }`}>
                            <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        </button>

                        {/* Expanded Answer Panel */}
                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4 animate-in fade-in duration-200">
                            
                            {/* Answer Description */}
                            <p className="font-normal text-slate-700 leading-relaxed">
                              {faq.a}
                            </p>

                            {/* Clinical Key Highlight Chips */}
                            {faq.highlights && faq.highlights.length > 0 && (
                              <div className="pt-1">
                                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                                  Key Highlights:
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {faq.highlights.map((h, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center space-x-1.5 bg-sky-50 text-sky-800 border border-sky-200/70 text-[11px] font-bold px-2.5 py-1 rounded-xl shadow-2xs"
                                    >
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0077e6] shrink-0" />
                                      <span>{h}</span>
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Contextual Action CTA Button */}
                            <div className="pt-2 flex flex-wrap items-center gap-3">
                              {faq.actionType === 'appointment' && (
                                <button
                                  type="button"
                                  onClick={() => onOpenAppointmentModal?.()}
                                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0077e6] to-[#0284c7] hover:from-[#0066cc] hover:to-[#0284c7] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95"
                                >
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>{faq.actionLabel || 'Book Appointment Online'}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              )}

                              {faq.actionType === 'phone' && (
                                <a
                                  href={`tel:${HOSPITAL_INFO.phone}`}
                                  className="inline-flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200/80 px-4 py-2 rounded-xl font-bold text-xs transition-all active:scale-95"
                                >
                                  <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                                  <span>{faq.actionLabel || 'Call 24/7 Helpline: 9091445566'}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                              )}

                              {faq.actionType === 'map' && (
                                <a
                                  href="https://www.google.com/maps/search/?api=1&query=Kanha+Hospitals+Panchsheel+Enclave+Road+No+5+Hi+Tension+Road+Alwal+Kompally+Hyderabad"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-[#0077e6] text-white px-4 py-2 rounded-xl font-bold text-xs transition-all shadow-2xs active:scale-95"
                                >
                                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                                  <span>{faq.actionLabel || 'Open Google Maps Navigation'}</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}

                              {faq.actionType === 'whatsapp' && (
                                <a
                                  href="https://wa.me/919091445566?text=Hi%20Kanha%20Hospitals,%20I%20have%20an%20inquiry%20regarding%20cashless%20insurance"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-bold text-xs transition-all shadow-2xs active:scale-95"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                  <span>{faq.actionLabel || 'Chat on WhatsApp Helpdesk'}</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>

                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

            </div>

          </div>
        </div>

        {/* ========================================================
            PART 2: LOCATION & CONTACT SECTION (HARMONIZED)
           ======================================================== */}
        <div className="border-t border-slate-200/80 pt-16 sm:pt-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0077e6] shadow-2xs mb-2.5">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>Easy To Reach • Centrally Located</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
              Visit Kanha Hospitals in{' '}
              <span className="bg-gradient-to-r from-[#0066cc] via-[#0284c7] to-[#0ea5e9] bg-clip-text text-transparent">
                Kompally, Hyderabad
              </span>
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Conveniently located off NH 44 / Hi Tension Road, Alwal, opposite O&apos;rica Café, with 24-hour dedicated emergency ambulance and patient reception.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: CONTACT DETAILS & OPERATING HOURS */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Address Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5">
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0077e6] border border-sky-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                      Hospital Address
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                      Panchsheel Enclave Road No. 5, Hi Tension Road, Alwal,<br />
                      Opposite O&apos;rica Café, Kompally, Hyderabad, Telangana 500010
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                      24/7 Helpline &amp; Casualty
                    </h4>
                    <a
                      href={`tel:${HOSPITAL_INFO.phone}`}
                      className="text-base sm:text-lg font-black text-red-600 hover:text-red-700 block mt-0.5"
                    >
                      {HOSPITAL_INFO.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-slate-500">Instant ambulance &amp; trauma casualty dispatch</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                      Operating Hours
                    </h4>
                    <p className="text-xs text-slate-700 mt-1">
                      <span className="font-bold text-slate-900">OPD Clinics:</span> {HOSPITAL_INFO.opdHours}
                    </p>
                    <p className="text-xs text-slate-700 mt-0.5">
                      <span className="font-bold text-slate-900">Emergency &amp; Trauma:</span> 24 Hours / 365 Days
                    </p>
                    <p className="text-xs text-slate-700 mt-0.5">
                      <span className="font-bold text-slate-900">Dialysis Suite:</span> 24/7 Active
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Route Guide */}
              <div className="p-5 sm:p-6 rounded-3xl bg-sky-50/70 border border-sky-100/90 text-xs text-slate-700 space-y-2">
                <span className="font-extrabold text-[#0077e6] uppercase tracking-wider block">
                  Quick Directions:
                </span>
                <p>• <strong>From Suchitra Circle:</strong> 7 minutes via Medchal Highway &amp; Hi-Tension Road.</p>
                <p>• <strong>From Alwal Center:</strong> 5 minutes via Panchsheel Enclave Road No. 5.</p>
                <p>• <strong>Landmark:</strong> Directly opposite O&apos;rica Café.</p>
              </div>

              {/* Google Maps Direction Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kanha+Hospitals+Panchsheel+Enclave+Road+No+5+Hi+Tension+Road+Alwal+Kompally+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0077e6] hover:bg-[#0066cc] text-white py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <Navigation className="w-4 h-4 text-sky-200" />
                <span>Open in Google Maps / Get Driving Directions</span>
              </a>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE EMBEDDED MAP & CONTACT MESSAGE FORM */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Google Maps Iframe */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 h-80 bg-slate-100 relative">
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
              </div>

              {/* Quick Hospital Message / Inquiry Form */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <h4 className="font-extrabold text-base text-slate-900 mb-1">
                  Send an Inquiry to Hospital Administration
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  For surgical inquiries, corporate empanelment, or general assistance.
                </p>

                {formSent ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-emerald-900 text-sm">Message Sent Successfully!</h5>
                    <p className="text-xs text-emerald-700">Our patient coordination team will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 transition-all"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 transition-all"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject / Department (e.g. Kidney Stone Laser Inquiry)"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 transition-all"
                    />
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your medical query or appointment requirement..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 transition-all"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-[#0077e6] hover:bg-[#0066cc] text-white py-3 rounded-xl font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
