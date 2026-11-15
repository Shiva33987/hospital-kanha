import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PatientJourneySection } from './components/PatientJourneySection';
import { QuickActionCards } from './components/QuickActionCards';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingEmergencyBar } from './components/FloatingEmergencyBar';

// 10 Dedicated Feature Pages
import { ReferralPage } from './pages/ReferralPage';
import { InternationalPatientsPage } from './pages/InternationalPatientsPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { HealthLibraryPage } from './pages/HealthLibraryPage';
import { PatientsVisitorsPage } from './pages/PatientsVisitorsPage';
import { EServicesPage } from './pages/EServicesPage';
import { InsurancePage } from './pages/InsurancePage';
import { EducationPage } from './pages/EducationPage';
import { ResearchPage } from './pages/ResearchPage';

// Modals
import { AppointmentModal } from './components/modals/AppointmentModal';
import { EmergencyModal } from './components/modals/EmergencyModal';
import { SearchModal } from './components/modals/SearchModal';
import { ReportsModal } from './components/modals/ReportsModal';

import type { PageRoute } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentSpecialty, setAppointmentSpecialty] = useState<string | undefined>(undefined);
  const [appointmentDoctor, setAppointmentDoctor] = useState<string | undefined>(undefined);
  const [appointmentSlot, setAppointmentSlot] = useState<string | undefined>(undefined);

  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [reportsModalOpen, setReportsModalOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'referral',
        'international',
        'doctors',
        'specialties',
        'health-library',
        'patients-visitors',
        'eservices',
        'insurance',
        'education',
        'research',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      } else {
        // Anchor target inside home (e.g. #facilities, #doctors, #specialties)
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'instant' });
        }, 150);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentPage(route);
    if (route === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = route;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

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
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 antialiased selection:bg-cyan-500 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* 1. Header with Top Emergency Bar & Mega-Menu (Fixed, always visible on mobile & desktop) */}
      <Header
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenSearchModal={handleOpenSearchModal}
        onOpenReportsModal={handleOpenReportsModal}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Master Hero Section */}
            <Hero
              onOpenAppointmentModal={handleOpenAppointmentModal}
              onOpenEmergencyModal={handleOpenEmergencyModal}
              onOpenSearchModal={handleOpenSearchModal}
              onOpenReportsModal={handleOpenReportsModal}
              onNavigate={handleNavigate}
            />

            {/* 2. Patient Visit Journey (KFSH&RC 3-Stage Slide-Up Guide) */}
            <PatientJourneySection
              onOpenAppointmentModal={handleOpenAppointmentModal}
              onOpenEmergencyModal={handleOpenEmergencyModal}
              onOpenReportsModal={handleOpenReportsModal}
            />

            {/* 3. Fast Access Action Grid (6 Core Cards) */}
            <QuickActionCards
              onOpenAppointmentModal={handleOpenAppointmentModal}
              onOpenEmergencyModal={handleOpenEmergencyModal}
              onOpenReportsModal={handleOpenReportsModal}
            />

            {/* 4. State-of-the-Art Medical Facilities */}
            <FacilitiesShowcase
              onOpenAppointmentModal={handleOpenAppointmentModal}
              onOpenEmergencyModal={handleOpenEmergencyModal}
            />

            {/* 5. Clinical Specialties Directory (All 24 Disciplines) */}
            <SpecialtiesSection
              onOpenAppointmentModal={handleOpenAppointmentModal}
            />

            {/* 6. Doctor Directory (Find a Doctor & Instant OPD Slot Booking) */}
            <DoctorsSection
              onOpenAppointmentModal={handleOpenAppointmentModal}
            />

            {/* 7. Location, Directions, Map & FAQs (Kompally Hyderabad) */}
            <LocationContactSection
              onOpenAppointmentModal={handleOpenAppointmentModal}
            />
          </>
        )}

        {/* Dedicated Sub-Pages */}
        {currentPage === 'referral' && (
          <ReferralPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'international' && (
          <InternationalPatientsPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'doctors' && (
          <DoctorsPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'specialties' && (
          <SpecialtiesPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'health-library' && (
          <HealthLibraryPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'patients-visitors' && (
          <PatientsVisitorsPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onOpenEmergencyModal={handleOpenEmergencyModal}
          />
        )}

        {currentPage === 'eservices' && (
          <EServicesPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onOpenReportsModal={handleOpenReportsModal}
          />
        )}

        {currentPage === 'insurance' && (
          <InsurancePage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'education' && (
          <EducationPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'research' && (
          <ResearchPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
      </main>

      {/* Mega Footer */}
      <Footer
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenReportsModal={handleOpenReportsModal}
      />

      {/* Mobile Floating Emergency & Action Bar */}
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
