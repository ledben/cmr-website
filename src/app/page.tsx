import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import DepotSection from '@/components/DepotSection';
import ArticleGrid from '@/components/ArticleGrid';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <DepotSection />
        <ArticleGrid />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
