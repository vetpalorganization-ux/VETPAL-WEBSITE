import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { MissionSection } from '@/components/home/MissionSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { CTASection } from '@/components/home/CTASection';
import { PartnersSection } from '@/components/home/PartnersSection';

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta */}
      <title>VETPAL - Veterans Empowered To Protect Aquatic Life</title>
      
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <PartnersSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
