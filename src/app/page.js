import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorSection from '@/components/DoctorSection';
import OperatingHoursSection from '@/components/OperatingHoursSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppointmentSection from '@/components/AppointmentSection';
import VisitSection from '@/components/VisitSection';
import Footer from '@/components/Footer';
import InsuranceModal from '@/components/InsuranceModal';


export default function Home() {
  return (
    <>
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <DoctorSection />
      <OperatingHoursSection />
      <TestimonialsSection />
      <AppointmentSection />
      <VisitSection />
      <Footer />
    </main>
    <InsuranceModal />
    </>
  );
}
