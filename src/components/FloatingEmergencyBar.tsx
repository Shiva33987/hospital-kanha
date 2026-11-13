import React from 'react';
import { PhoneCall, Calendar, MessageSquare, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface FloatingEmergencyBarProps {
  onOpenAppointmentModal: () => void;
  onOpenEmergencyModal: () => void;
}

export const FloatingEmergencyBar: React.FC<FloatingEmergencyBarProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
}) => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 shadow-2xl lg:hidden">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        
        {/* Emergency Call */}
        <button
          onClick={onOpenEmergencyModal}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-red-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <PhoneCall className="w-4 h-4 mb-0.5 animate-bounce" />
          <span>Emergency 24x7</span>
        </button>

        {/* Book Appointment */}
        <button
          onClick={onOpenAppointmentModal}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-hospital-navy text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-hospital-sky" />
          <span>Book OPD</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/919091445566?text=Hi%20Kanha%20Hospitals,%20I%20would%20like%20to%20inquire%20about%20doctor%20appointment`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Kanha+Hospitals+Panchsheel+Enclave+Road+No+5+Hi+Tension+Road+Alwal+Kompally+Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 text-slate-800 font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-hospital-blue" />
          <span>Directions</span>
        </a>

      </div>
    </aside>
  );
};

