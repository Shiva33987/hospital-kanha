import React from 'react';
import { 
  Users, 
  Clock, 
  ShieldCheck, 
  Coffee, 
  Car, 
  CreditCard, 
  Pill, 
  Bed, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  HelpCircle,
  PhoneCall,
  MapPin,
  HeartHandshake
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface PatientsVisitorsPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
}

export const PatientsVisitorsPage: React.FC<PatientsVisitorsPageProps> = ({ 
  onBackToHome, 
  onOpenAppointmentModal,
  onOpenEmergencyModal 
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500">
          <button 
            onClick={onBackToHome}
            className="hover:text-[#00246a] transition-colors flex items-center gap-1 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-semibold">Patients & Visitors Guide</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001744] via-[#00246a] to-[#00388c] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Kanha Hospitals • Patient Care & Family Experience</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Visiting Guidelines, Timings & Amenities
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Everything you need for a comfortable, compassionate hospital visit at our Kompally campus — from visiting hours and room categories to parking and discharge guidelines.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">4 PM - 7 PM</div>
                <div className="text-slate-300 text-xs">Ward Visiting Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">24/7 Open</div>
                <div className="text-slate-300 text-xs">Pharmacy & Emergency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">100% Free</div>
                <div className="text-slate-300 text-xs">Valet & Stretcher Help</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">50+ TPAs</div>
                <div className="text-slate-300 text-xs">Cashless Desk Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Hours & ICU Guidelines Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">Visiting Hours & Protocol</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#00246a] flex items-center justify-center font-bold mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Inpatient General & Private Wards</h3>
            <div className="text-sm font-bold text-blue-600 mb-3">4:00 PM – 7:00 PM (Daily)</div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              One visitor pass per patient is issued at admission. A second attendant may visit during scheduled evening hours to preserve restful healing for all patients.
            </p>
            <div className="text-[11px] text-slate-500 font-medium">Children under 12 discouraged in patient rooms for infection prevention.</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Intensive Care Units (ICU & Critical Care)</h3>
            <div className="text-sm font-bold text-rose-600 mb-3">11:00 AM – 12:00 PM & 5:00 PM – 6:00 PM</div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              To minimize infection, only 1 immediate family member allowed per slot. Shoe covers, hand sanitization, and sterile isolation gowns are strictly required before entry.
            </p>
            <div className="text-[11px] text-slate-500 font-medium">Doctor bedside updates provided during the morning 11:30 AM round.</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold mb-4">
              <Bed className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">24/7 Dialysis & Daycare Laser Wing</h3>
            <div className="text-sm font-bold text-cyan-700 mb-3">Continuous Attendant Access</div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Patients undergoing 4-hour hemodialysis or daycare laser stone clearance may have 1 dedicated attendant present in our comfortable recliner pod bays throughout treatment.
            </p>
            <div className="text-[11px] text-slate-500 font-medium">Free Wi-Fi and mobile charging stations at every dialysis station.</div>
          </div>
        </div>
      </div>

      {/* Campus Amenities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">Hospital Amenities & Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">24/7 In-House Pharmacy</h4>
              <p className="text-xs text-slate-500">Fully stocked with urology, nephrology, cardiac & emergency medicines.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Valet & Porch Parking</h4>
              <p className="text-xs text-slate-500">Round-the-clock complimentary valet parking and wheelchair assistance.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Hygienic Cafeteria</h4>
              <p className="text-xs text-slate-500">Fresh South & North Indian vegetarian meals, fresh juices, and beverages.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#00246a] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Cashless Insurance Desk</h4>
              <p className="text-xs text-slate-500">Dedicated desk on Ground Floor for 50+ TPAs with instant pre-auth help.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission to Discharge Step-by-Step */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Inpatient Admission to Discharge Journey</h3>
            <p className="text-xs sm:text-sm text-slate-500">We make inpatient care transparent, predictable, and stress-free</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-[#00246a] text-white font-bold text-xs flex items-center justify-center mb-3">1</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Admission & Bed Allocation</h4>
              <p className="text-xs text-slate-600">Present doctor's admission advice note at the Front Desk. Complete insurance cashless paperwork or advance deposit in under 15 minutes.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-[#00246a] text-white font-bold text-xs flex items-center justify-center mb-3">2</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Clinical Care & Updates</h4>
              <p className="text-xs text-slate-600">Daily morning and evening consultant rounds. All lab and radiology reports explained directly to the family with digital access on mobile.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-[#00246a] text-white font-bold text-xs flex items-center justify-center mb-3">3</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Smooth Discharge & Take-Home Meds</h4>
              <p className="text-xs text-slate-600">Discharge initiated by 10:00 AM. Final billing settled, take-home medicines dispensed with clear nurse instructions, and follow-up appointment booked.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

