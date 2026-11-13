import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Heart
} from 'lucide-react';
import { TESTIMONIALS } from '../data/hospitalData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>Real Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
            Stories of Hope, Healing & Recovery
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Read firsthand accounts from patients and their families who received life-saving surgical, nephrological, and intensive care at Kanha Hospitals.
          </p>
        </div>

        {/* TESTIMONIALS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-soft hover:shadow-hover border border-slate-100 hover:border-hospital-sky/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-sky-50 transition-colors pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10">
                {/* Treatment badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-sky-50 text-hospital-blue text-xs font-bold px-3 py-1 rounded-full border border-sky-100">
                    {t.treatment}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg font-bold text-hospital-navy leading-snug">
                  "{t.quote}"
                </blockquote>

                {/* Extended Story */}
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {t.story}
                </p>
              </div>

              {/* Patient Bio & Doctor Consulted */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
                <div>
                  <h4 className="font-extrabold text-sm text-hospital-navy">
                    {t.patientName} ({t.age} yrs)
                  </h4>
                  <span className="text-slate-400 text-[11px]">{t.city} • {t.date}</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Consultant</span>
                  <span className="text-xs font-bold text-hospital-blue">{t.doctorName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SATISFACTION RATING BANNER */}
        <div className="bg-gradient-to-r from-hospital-navyDeep to-hospital-navy text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="flex text-amber-400 text-lg">
              ★★★★★
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base">
                4.9 / 5.0 Average Rating based on 2,400+ Patient Reviews
              </span>
              <p className="text-xs text-slate-300">
                Google Reviews & Verified Patient Feedback in Kompally, Hyderabad
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-hospital-sky hover:text-white underline underline-offset-4"
          >
            Read All Reviews on Google Maps &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

