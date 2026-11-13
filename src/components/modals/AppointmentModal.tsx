import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Video, 
  Building,
  Sparkles,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPECIALTIES, DOCTORS, HOSPITAL_INFO } from '../../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpecialtyId?: string;
  defaultDoctorId?: string;
  defaultSlot?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultSpecialtyId,
  defaultDoctorId,
  defaultSlot,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('urology');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [consultType, setConsultType] = useState<'hospital' | 'video'>('hospital');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow (10:00 AM)');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM');
  
  // Patient fields
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientAge, setPatientAge] = useState<string>('');
  const [patientGender, setPatientGender] = useState<'male' | 'female' | 'other'>('male');
  const [symptoms, setSymptoms] = useState<string>('');

  // Submission state
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');

  useEffect(() => {
    if (defaultSpecialtyId) {
      setSelectedSpecialty(defaultSpecialtyId);
    }
    if (defaultDoctorId) {
      setSelectedDoctorId(defaultDoctorId);
    }
    if (defaultSlot) {
      setSelectedSlot(defaultSlot);
    }
  }, [defaultSpecialtyId, defaultDoctorId, defaultSlot, isOpen]);

  if (!isOpen) return null;

  const filteredDoctors = selectedSpecialty
    ? DOCTORS.filter((d) => d.departmentId === selectedSpecialty)
    : DOCTORS;

  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || filteredDoctors[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const generatedId = `KH-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setIsBooked(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // ignore
    }
  };

  const handleCloseAndReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-hospital-navy to-hospital-navyLight p-5 sm:p-6 text-white rounded-t-3xl relative">
          <button
            onClick={handleCloseAndReset}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
          >
            ✕
          </button>
          
          <div className="flex items-center space-x-2 text-hospital-sky text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Online Patient Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            {isBooked ? 'Appointment Confirmed!' : 'Book Doctor Appointment'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {isBooked 
              ? 'Your consultation token has been generated. Confirmation SMS sent.' 
              : 'Direct priority booking at Kanha Hospitals, Kompally, Hyderabad.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7">
          {isBooked ? (
            /* CONFIRMATION SUCCESS VIEW */
            <div className="text-center space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Booking Reference</span>
                <div className="text-3xl font-black text-hospital-navy mt-0.5 tracking-wider font-mono">
                  {bookingId}
                </div>
              </div>

              {/* Appointment Summary Box */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-bold text-hospital-navy">{patientName} ({patientAge || '30'}y / {patientGender})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-bold text-hospital-blue">{currentDoctor?.name || 'Chief Consultant'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Department:</span>
                  <span className="font-bold text-slate-800 uppercase">{selectedSpecialty}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Slot & Timing:</span>
                  <span className="font-bold text-emerald-700">{selectedDate} ({selectedSlot})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Consultation Mode:</span>
                  <span className="font-bold text-slate-800 capitalize">{consultType === 'hospital' ? 'In-Hospital OPD Visit' : 'Video Teleconsult'}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500">Hospital Location:</span>
                  <span className="font-semibold text-slate-700 text-right truncate max-w-[220px]">
                    Kompally, Opp O'rica Café
                  </span>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-sky-50 text-hospital-navy p-3.5 rounded-xl text-xs text-left space-y-1 border border-sky-100">
                <span className="font-bold block uppercase text-[10px] text-hospital-blue">Patient Checklist:</span>
                <p>• Please arrive 15 minutes prior to your time slot for vital check & registration.</p>
                <p>• Please carry any previous ultrasound, blood reports, or prescription history.</p>
                <p>• For urgent assistance, contact reception at <strong>{HOSPITAL_INFO.phoneFormatted}</strong>.</p>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={handleCloseAndReset}
                  className="w-full bg-hospital-navy hover:bg-hospital-blue text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          ) : (
            /* BOOKING FORM VIEW */
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              {/* Consultation Type Selector */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultType('hospital')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      consultType === 'hospital'
                        ? 'border-hospital-blue bg-sky-50 text-hospital-navy ring-1 ring-hospital-blue'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5 text-hospital-blue" />
                    <span>In-Hospital OPD Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultType('video')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      consultType === 'video'
                        ? 'border-hospital-blue bg-sky-50 text-hospital-navy ring-1 ring-hospital-blue'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5 text-hospital-blue" />
                    <span>Video Teleconsultation</span>
                  </button>
                </div>
              </div>

              {/* Department & Doctor Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Speciality / Department
                  </label>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => {
                      setSelectedSpecialty(e.target.value);
                      setSelectedDoctorId('');
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  >
                    {SPECIALTIES.map((sp) => (
                      <option key={sp.id} value={sp.id}>
                        {sp.name} {sp.isKeyFocus ? '(Key Focus)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Consultant
                  </label>
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => setSelectedDoctorId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  >
                    <option value="">Any Available Senior Doctor</option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.qualification.split(',')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Day
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  >
                    <option value="Today (Urgent OPD)">Today (Urgent OPD)</option>
                    <option value="Tomorrow (Morning)">Tomorrow (Morning)</option>
                    <option value="Tomorrow (Evening)">Tomorrow (Evening)</option>
                    <option value="This Saturday">This Saturday</option>
                    <option value="This Sunday (Special OPD)">This Sunday (Special OPD)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:15 AM">11:15 AM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                    <option value="07:45 PM">07:45 PM</option>
                  </select>
                </div>
              </div>

              {/* Patient Personal Info */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Patient Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Mobile Number (for SMS token) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      placeholder="Years"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Gender
                    </label>
                    <select
                      value={patientGender}
                      onChange={(e) => setPatientGender(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Symptoms or Medical Concern (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Flank pain, kidney stones, regular dialysis consult"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-3 bg-gradient-to-r from-hospital-navy to-hospital-blue hover:from-hospital-navyLight hover:to-hospital-sky text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Confirm & Generate Appointment Token</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero registration fees online • Pay upon hospital arrival</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

