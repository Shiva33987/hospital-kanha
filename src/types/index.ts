export type PageRoute = 
  | 'home'
  | 'referral'
  | 'international'
  | 'doctors'
  | 'specialties'
  | 'health-library'
  | 'patients-visitors'
  | 'eservices'
  | 'insurance'
  | 'education'
  | 'research';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  departmentId: string;
  qualification: string;
  experienceYears: number;
  experience?: string;
  languages: string[];
  opdTimings: string;
  image: string;
  rating: number;
  reviewCount: number;
  availableDays: string[];
  slots: string[];
  about: string;
  badge?: string;
  focusAreas?: string[];
  consultationFee?: number;
}

export interface Specialty {
  id: string;
  name: string;
  category: 'core' | 'surgical' | 'medical' | 'allied';
  tagline: string;
  description: string;
  iconName: string;
  isKeyFocus?: boolean;
  commonSymptoms: string[];
  keyProcedures: string[];
  availableDoctorsCount: number;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
  category: 'critical' | 'diagnostic' | 'surgical' | 'patient_care';
}

export interface HealthPackage {
  id: string;
  name: string;
  targetAudience: string;
  originalPrice: number;
  discountedPrice: number;
  totalTests: number;
  fastingRequired: boolean;
  features: string[];
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  treatment: string;
  doctorName: string;
  quote: string;
  story: string;
  rating: number;
  city: string;
  date: string;
}

export interface InsurancePartner {
  name: string;
  type: 'Insurance' | 'TPA';
  description: string;
}

export interface AppointmentData {
  department: string;
  doctorId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  age?: string;
  gender?: string;
  symptoms?: string;
  consultationType: 'hospital' | 'video';
  bookingId?: string;
}

