import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowRight, 
  PhoneCall, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { HEALTH_PACKAGES, HealthPackage, HOSPITAL_INFO } from '../data/hospitalData';

interface HealthPackagesProps {
  onOpenAppointmentModal: (specialtyId?: string) => void;
}

export const HealthPackagesSection: React.FC<HealthPackagesProps> = ({
  onOpenAppointmentModal,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<HealthPackage | null>(null);

  return (
    <section id="packages" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-hospital-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Preventive Wellness & Diagnostics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-navy tracking-tight">
            Comprehensive Health Checkup Packages
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Early detection prevents chronic organ failure. Choose from our specialized kidney stone screens, cardiac wellness profiles, and master health checkups at transparent, subsidized rates.
          </p>
        </div>

        {/* PACKAGES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEALTH_PACKAGES.map((pkg, idx) => {
            const isFeatured = idx === 0; // Renal Care is #1 for Kanha Hospitals
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 shadow-soft hover:shadow-hover border transition-all duration-300 flex flex-col justify-between relative group ${
                  isFeatured 
                    ? 'border-hospital-blue ring-2 ring-hospital-sky/30' 
                    : 'border-slate-100 hover:border-hospital-sky/40'
                }`}
              >
                {/* Special Tag for Renal */}
                {isFeatured && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-hospital-navy to-hospital-blue text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    ★ Most Recommended
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-hospital-sky uppercase tracking-wider">
                      {pkg.totalTests} Diagnostic Tests
                    </span>
                    {pkg.fastingRequired && (
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md font-semibold border border-amber-200">
                        10-12h Fasting
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-hospital-navy group-hover:text-hospital-blue transition-colors leading-snug">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {pkg.targetAudience}
                  </p>

                  {/* Pricing Box */}
                  <div className="my-5 p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-500 block">Package Price</span>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl sm:text-3xl font-black text-hospital-navy">
                          ₹{pkg.discountedPrice}
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                          ₹{pkg.originalPrice}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-lg">
                      Save {Math.round((1 - pkg.discountedPrice / pkg.originalPrice) * 100)}%
                    </span>
                  </div>

                  {/* Tests Included Preview */}
                  <div className="space-y-2 text-xs text-slate-700">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Key Inclusions:
                    </span>
                    {pkg.features.slice(0, 5).map((f, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                    {pkg.features.length > 5 && (
                      <span className="text-[11px] text-hospital-blue font-semibold block pt-1">
                        +{pkg.features.length - 5} additional lab investigations
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => onOpenAppointmentModal(`package-${pkg.id}`)}
                    className="w-full bg-hospital-navy hover:bg-hospital-blue text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Book Package at ₹{pkg.discountedPrice}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    Home blood sample collection available in Kompally & Alwal
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM HOME SAMPLE COLLECTION BANNER */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-hospital-blue flex items-center justify-center font-bold shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-hospital-navy text-base sm:text-lg">
                Need Blood Sample Collection from Home?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our trained phlebotomists will collect blood & urine samples right from your doorstep anywhere in Kompally, Alwal, Medchal, and Secunderabad.
              </p>
            </div>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phone}`}
            className="shrink-0 bg-hospital-sky hover:bg-sky-400 text-hospital-navy font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-all flex items-center space-x-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call to Schedule: {HOSPITAL_INFO.phoneFormatted}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

