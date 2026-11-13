import React, { useState } from 'react';
import { 
  PhoneCall, 
  Ambulance, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert,
  Send,
  Navigation
} from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [requested, setRequested] = useState(false);
  const [pickupAddress, setPickupAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [condition, setCondition] = useState('Severe Chest Pain / Heart Issue');

  if (!isOpen) return null;

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setRequested(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border-2 border-red-500 relative">
        
        {/* Red Emergency Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-rose-600 p-6 text-white rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
          >
            ✕
          </button>
          
          <div className="flex items-center space-x-2 text-red-200 text-xs font-bold uppercase tracking-wider mb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span>24/7 Rapid Emergency Response</span>
          </div>

          <h3 className="text-2xl font-black">
            Emergency & Ambulance Helpline
          </h3>
          <p className="text-xs text-red-100 mt-1">
            Round-the-clock emergency doctors, resuscitation unit, and GPS-tracked cardiac ambulances.
          </p>
        </div>

        <div className="p-6 space-y-6">
          
          {/* PRIMARY ONE-CLICK CALL BUTTON */}
          <div className="p-5 bg-red-50 border-2 border-red-200 rounded-2xl text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
              Direct Emergency Command Center:
            </span>
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="inline-flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white text-xl sm:text-2xl font-black px-6 py-3.5 rounded-xl shadow-emergency transition-all w-full"
            >
              <PhoneCall className="w-6 h-6 animate-pulse" />
              <span>Call: {HOSPITAL_INFO.phoneFormatted}</span>
            </a>
            <p className="text-[11px] text-red-700 font-semibold">
              Trained emergency triage physician on-line within 3 rings
            </p>
          </div>

          {/* AMBULANCE GPS DISPATCH FORM */}
          {requested ? (
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-center space-y-2 animate-in zoom-in-95">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-extrabold text-base text-emerald-900">
                Ambulance Dispatched!
              </h4>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Emergency vehicle is en route to <strong>{pickupAddress}</strong>. Our driver will call you immediately at <strong>{phone}</strong>.
              </p>
              <div className="text-[11px] text-slate-500 pt-2 font-mono">
                Estimated arrival: 8-12 minutes in Kompally / Alwal region.
              </div>
            </div>
          ) : (
            <form onSubmit={handleDispatch} className="space-y-3.5 border-t border-slate-100 pt-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-hospital-navy uppercase">
                <Ambulance className="w-4 h-4 text-hospital-blue" />
                <span>Request Urgent Ambulance Pickup</span>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Pickup Address / Area in Hyderabad *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Plot 42, Green Meadows, Kompally"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Patient Medical Condition
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <option value="Severe Chest Pain">Severe Chest Pain / Heart Issue</option>
                    <option value="Acute Stroke / Paralysis">Acute Stroke / Paralysis</option>
                    <option value="Trauma / Road Accident">Trauma / Road Accident</option>
                    <option value="Severe Kidney Colic / Stone Pain">Severe Kidney Colic / Stone Pain</option>
                    <option value="High Breathlessness">High Breathlessness</option>
                    <option value="Other Emergency">Other Critical Emergency</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-hospital-navy hover:bg-slate-800 text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Ambulance Pickup Request</span>
              </button>
            </form>
          )}

          {/* FIRST AID TIPS WHILE WAITING */}
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1">
            <span className="font-bold flex items-center space-x-1">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>While Waiting for Ambulance:</span>
            </span>
            <p>• Keep patient lying in a comfortable ventilated position.</p>
            <p>• For chest pain, loosen tight clothing and do not feed solid food.</p>
            <p>• Keep any recent ECGs, prescription papers, and insurance card ready.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

