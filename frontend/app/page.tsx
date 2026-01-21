import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/about';
import HowItWorks from '@/components/ui/how-it-works';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <section data-scroll-section>
        <HeroSection />
      </section>
      <section data-scroll-section>
        <AboutSection />
      </section>
      <section data-scroll-section>
        <HowItWorks />
      </section>
    </SmoothScroll>
  );
}
