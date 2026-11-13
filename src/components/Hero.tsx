import React, { useState } from 'react';
import { ChevronDown, Calendar, ShieldCheck, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
  onOpenEmergencyModal: () => void;
  onOpenSearchModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
}) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#f8fafc] overflow-hidden">
      
      {/* 
        EXACT HERO VISUAL REPLICA:
        Displays the high-resolution 2048x1142 image matching the attached reference pixel-for-pixel:
        - Kanha Hospitals logo with blue wave corner
        - White capsule navbar with Home, Services, Doctor, Pricing, Resources, Login, Sign Up
        - Smiling specialist doctor with white lab coat and stethoscope
        - Luxurious modern hospital marble lobby & glass interior
        - Framing blue swooshes on bottom-left and bottom-right
      */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        
        {/* The Exact Hero Image (Sharp 2X WebP) */}
        <img
          src="/images/kanha_hero_exact_2x.webp"
          alt="Kanha Hospitals - Urology, Nephrology & Multi-Specialties"
          className="w-full h-auto object-cover select-none block"
          loading="eager"
        />

        {/* 
          PIXEL-PERFECT INTERACTIVE OVERLAYS:
          Aligned directly over the image's baked-in logo and navbar elements
          so that every link, dropdown, and button is fully interactive and functional!
        */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          
          {/* 1. TOP-LEFT LOGO CLICK HOTSPOT */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="Kanha Hospitals - Home"
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: '6.5%',
              top: '2.0%',
              width: '18%',
              height: '8.5%',
            }}
          />

          {/* 2. TOP-RIGHT FLOATING CAPSULE NAVBAR HOTSPOTS */}
          <nav
            aria-label="Main Hero Navigation"
            className="absolute pointer-events-auto flex items-center"
            style={{
              left: '43.0%',
              top: '2.2%',
              width: '50.0%',
              height: '8.0%',
            }}
          >
            {/* Home Hotspot */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              title="Home"
              className="h-full rounded-full cursor-pointer transition-opacity hover:opacity-80"
              style={{ width: '13%' }}
            />

            {/* Services Dropdown Hotspot */}
            <div
              className="relative h-full"
              style={{ width: '14%' }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('specialties')}
                title="View All 24 Medical Specialties"
                className="w-full h-full cursor-pointer transition-opacity hover:opacity-80"
              />

              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800 pointer-events-auto"
                >
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                    Featured Centers
                  </div>
                  <a 
                    href="#specialties" 
                    onClick={() => { setServicesDropdownOpen(false); scrollToSection('specialties'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800"
                  >
                    Urology & Laser Stone Care
                  </a>
                  <a 
                    href="#specialties" 
                    onClick={() => { setServicesDropdownOpen(false); scrollToSection('specialties'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800"
                  >
                    24/7 Advanced Hemodialysis
                  </a>
                  <a 
                    href="#specialties" 
                    onClick={() => { setServicesDropdownOpen(false); scrollToSection('specialties'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800"
                  >
                    3 Modular Laminar Flow OTs
                  </a>
                  <a 
                    href="#specialties" 
                    onClick={() => { setServicesDropdownOpen(false); scrollToSection('specialties'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800"
                  >
                    High-Res CT-Scan & Diagnostics
                  </a>
                  <a 
                    href="#specialties" 
                    onClick={() => { setServicesDropdownOpen(false); scrollToSection('specialties'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-bold text-[#0077e6]"
                  >
                    All 24 Specialties &rarr;
                  </a>
                </div>
              )}
            </div>

            {/* Doctor Hotspot */}
            <a
              href="#doctors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('doctors');
              }}
              title="Doctors & Senior Consultants"
              className="h-full rounded-full cursor-pointer transition-opacity hover:opacity-80"
              style={{ width: '13%' }}
            />

            {/* Pricing Hotspot */}
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('packages');
              }}
              title="Health Packages & Pricing"
              className="h-full rounded-full cursor-pointer transition-opacity hover:opacity-80"
              style={{ width: '13%' }}
            />

            {/* Resources Dropdown Hotspot */}
            <div
              className="relative h-full"
              style={{ width: '16%' }}
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                title="Patient Resources"
                className="w-full h-full cursor-pointer transition-opacity hover:opacity-80"
              />

              {resourcesDropdownOpen && (
                <div 
                  className="absolute top-full right-0 mt-1 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 text-slate-800 pointer-events-auto"
                >
                  <button 
                    onClick={() => { setResourcesDropdownOpen(false); onOpenAppointmentModal(); }}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold"
                  >
                    Book OPD Consultation
                  </button>
                  <a 
                    href="#cashless-insurance" 
                    onClick={() => { setResourcesDropdownOpen(false); scrollToSection('cashless-insurance'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold"
                  >
                    Cashless TPA Desk (50+)
                  </a>
                  <a 
                    href="#symptom-matcher" 
                    onClick={() => { setResourcesDropdownOpen(false); scrollToSection('symptom-matcher'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold"
                  >
                    AI Symptom Checker
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => { setResourcesDropdownOpen(false); scrollToSection('contact'); }}
                    className="block p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold"
                  >
                    Hospital Map & Address
                  </a>
                </div>
              )}
            </div>

            {/* Login Hotspot */}
            <button
              onClick={() => onOpenAppointmentModal()}
              title="Patient Login / Portal"
              className="h-full rounded-full cursor-pointer transition-opacity hover:opacity-80"
              style={{ width: '13%' }}
            />

            {/* Sign Up / Book Appointment Hotspot */}
            <button
              onClick={() => onOpenAppointmentModal()}
              title="Book Instant Doctor Appointment"
              className="h-full rounded-full cursor-pointer transition-opacity hover:opacity-80"
              style={{ width: '18%' }}
            />

          </nav>

          {/* 3. DOCTOR & APPOINTMENT CLICK TRIGGER */}
          {/* Clicking on the doctor or hero center launches the Consultation Token scheduler */}
          <button
            onClick={() => onOpenAppointmentModal()}
            title="Click to Book Consultation with Our Senior Medical Specialists"
            className="absolute pointer-events-auto cursor-pointer rounded-3xl transition-all"
            style={{
              left: '48%',
              top: '12%',
              width: '32%',
              height: '84%',
            }}
          >
            <span className="sr-only">Book Doctor Consultation</span>
          </button>

        </div>

      </div>

    </section>
  );
};
