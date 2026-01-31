import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { MissionSection } from '@/components/home/MissionSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { CTASection } from '@/components/home/CTASection';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { ComplianceSection } from '@/components/home/ComplianceSection';

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta */}
      <title>VETPAL - Veterans Empowered To Protect Aquatic Life</title>
      
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      {/* <PartnersSection /> */}
      <LeadershipSection />
      <ComplianceSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
