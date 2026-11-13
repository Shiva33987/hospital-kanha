import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickActionCards } from './components/QuickActionCards';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { HealthPackagesSection } from './components/HealthPackagesSection';
import { CashlessInsuranceSection } from './components/CashlessInsuranceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingEmergencyBar } from './components/FloatingEmergencyBar';

// Modals
import { AppointmentModal } from './components/modals/AppointmentModal';
import { EmergencyModal } from './components/modals/EmergencyModal';
import { SearchModal } from './components/modals/SearchModal';
import { ReportsModal } from './components/modals/ReportsModal';

export function App() {
  // Modal states
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
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      {/* 1. Header with Top Emergency Bar & Mega-Menu */}
      <Header
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenSearchModal={handleOpenSearchModal}
        onOpenReportsModal={handleOpenReportsModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero with Medanta-style Quick Booking Widget */}
        <Hero
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onOpenEmergencyModal={handleOpenEmergencyModal}
          onOpenSearchModal={handleOpenSearchModal}
        />

        {/* 3. Fast Access Action Grid */}
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

        {/* 6. Clinical Specialties Directory (All 24 Specialties from Image 3) */}
        <SpecialtiesSection
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />

        {/* 7. Doctor Directory (Find a Doctor & Instant OPD Slot Booking) */}
        <DoctorsSection
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />

        {/* 8. Health Checkup Packages */}
        <HealthPackagesSection
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />

        {/* 9. Cashless Insurance & TPA Network */}
        <CashlessInsuranceSection />

        {/* 10. Patient Testimonials & Recovery Stories */}
        <TestimonialsSection />

        {/* 11. Location, Directions, Map & FAQs (Kompally Hyderabad) */}
        <LocationContactSection />
      </main>

      {/* 12. Mega Footer */}
      <Footer
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenReportsModal={handleOpenReportsModal}
      />

      {/* 13. Mobile Floating Emergency & Action Bar */}
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
