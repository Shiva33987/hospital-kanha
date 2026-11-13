import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickActionCards } from './components/QuickActionCards';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { SymptomCheckerSection } from './components/SymptomCheckerSection';
import { HospitalTourFloorPlan } from './components/HospitalTourFloorPlan';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { CashlessInsuranceSection } from './components/CashlessInsuranceSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingEmergencyBar } from './components/FloatingEmergencyBar';

// Modals
import { AppointmentModal } from './components/modals/AppointmentModal';
import { EmergencyModal } from './components/modals/EmergencyModal';
import { SearchModal } from './components/modals/SearchModal';
import { ReportsModal } from './components/modals/ReportsModal';

export function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentSpecialty, setAppointmentSpecialty] = useState<string | undefined>(undefined);
  const [appointmentDoctor, setAppointmentDoctor] = useState<string | undefined>(undefined);
  const [appointmentSlot, setAppointmentSlot] = useState<string | undefined>(undefined);

  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [reportsModalOpen, setReportsModalOpen] = useState(false);

  const handleOpenAppointmentModal = (specialtyId?: string, doctorId?: string, slot?: string) => {
    setAppointmentSpecialty(specialtyId);
    setAppointmentDoctor(doctorId);
    setAppointmentSlot(slot);
    setAppointmentModalOpen(true);
  };

  const handleOpenEmergencyModal = () => {
    setEmergencyModalOpen(true);
  };

  const handleOpenSearchModal = () => {
    setSearchModalOpen(true);
  };

  const handleOpenReportsModal = () => {
    setReportsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      {/* 1. Header with Top Emergency Bar & Mega-Menu */}
      <Header
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenSearchModal={handleOpenSearchModal}
        onOpenReportsModal={handleOpenReportsModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Aurora Hero with Medanta-style Quick Booking Widget */}
        <Hero
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onOpenEmergencyModal={handleOpenEmergencyModal}
          onOpenSearchModal={handleOpenSearchModal}
          onOpenReportsModal={handleOpenReportsModal}
        />

        {/* 3. Fast Access Action Grid (6 Core Cards) */}
        <QuickActionCards
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onOpenEmergencyModal={handleOpenEmergencyModal}
          onOpenReportsModal={handleOpenReportsModal}
        />

        {/* 4. Why Choose Us: "Your Health Our Priority" & Building Showcase */}
        <WhyChooseUs
          onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          onOpenEmergencyModal={handleOpenEmergencyModal}
        />

        {/* 5. State-of-the-Art Medical Facilities (From Image 2 & 3 with real extracted photos) */}
        <FacilitiesShowcase
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onOpenEmergencyModal={handleOpenEmergencyModal}
        />

        {/* 6. Smart Clinical Guidance: AI Symptom Checker & Kidney Stone Risk Calculator */}
        <SymptomCheckerSection
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />

        {/* 7. Interactive Campus & Multi-Floor Plan Explorer */}
        <HospitalTourFloorPlan
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onOpenEmergencyModal={handleOpenEmergencyModal}
        />

        {/* 8. Clinical Specialties Directory (All 24 Specialties from Image 3) */}
        <SpecialtiesSection
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />

        {/* 9. Doctor Directory (Find a Doctor & Instant OPD Slot Booking) */}
        <DoctorsSection
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />

        {/* 10. Cashless Insurance & TPA Network */}
        <CashlessInsuranceSection />

        {/* 13. Location, Directions, Map & FAQs (Kompally Hyderabad) */}
        <LocationContactSection />
      </main>

      {/* 14. Mega Footer */}
      <Footer
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenReportsModal={handleOpenReportsModal}
      />

      {/* 15. Mobile Floating Emergency & Action Bar */}
      <FloatingEmergencyBar
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenEmergencyModal={handleOpenEmergencyModal}
      />

      {/* MODALS */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        defaultSpecialtyId={appointmentSpecialty}
        defaultDoctorId={appointmentDoctor}
        defaultSlot={appointmentSlot}
      />

      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectDoctor={(deptId, docId) => handleOpenAppointmentModal(deptId, docId)}
        onSelectSpecialty={(deptId) => handleOpenAppointmentModal(deptId)}
      />

      <ReportsModal
        isOpen={reportsModalOpen}
        onClose={() => setReportsModalOpen(false)}
      />
    </div>
  );
}

export default App;
