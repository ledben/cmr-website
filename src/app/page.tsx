import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import DepotSection from '@/components/DepotSection';
import ClothingCarousel from '@/components/ClothingCarousel';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <DepotSection />
        <ClothingCarousel />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
