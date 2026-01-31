import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Anchor, 
  Award,
  ArrowRight,
  CheckCircle,
  Users,
  Heart,
  Waves
} from 'lucide-react';

const programs = [
  {
    id: 'veterans',
    icon: Shield,
    title: 'Veterans Program',
    tagline: 'Purpose, Community, Career',
    description: 'Our flagship program provides comprehensive support for veterans transitioning to conservation careers.',
    features: [
      'Paid positions for qualified participants',
      'Mental health and wellness support',
      'Peer mentorship from fellow veterans',
      'Career counseling and job placement',
      'Professional networking opportunities',
      'Flexible scheduling for transition needs',
    ],
    requirements: [
      'Honorable or general discharge',
      'Commitment to program completion',
      'Physical ability for field work (accommodations available)',
      'Background check clearance',
    ],
    stats: {
      participants: '170+',
      placement: '85%',
      wellness: '98%',
    },
  },
  {
    id: 'conservation',
    icon: Anchor,
    title: 'Marine Conservation Projects',
    tagline: 'Hands-on Environmental Impact',
    description: 'Participate in meaningful restoration projects that make a direct impact on marine ecosystems.',
    features: [
      'Beach and underwater cleanups',
      'Coral reef restoration',
      'Seagrass bed monitoring',
      'Marine wildlife surveys',
      'Invasive species removal',
      'Water quality testing',
    ],
    requirements: [
      'Open to all skill levels',
      'Training provided',
      'Some projects require dive certification',
      'Must attend safety orientation',
    ],
    stats: {
      projects: '90+',
      debris: '13,000+ lbs',
      sites: '7',
    },
  },
  {
    id: 'training',
    icon: Award,
    title: 'Training & Certification',
    tagline: 'Build Your Career',
    description: 'Earn recognized certifications that open doors to careers in environmental science and conservation.',
    features: [
      'PADI Dive Certification',
      'Wildlife Survey Methods',
      'GIS and Data Collection',
      'Water Quality Analysis',
      'Marine Biology Basics',
      'First Aid / CPR',
    ],
    requirements: [
      'Program enrollment or volunteer status',
      'Completion of prerequisite training',
      'Commitment to certification timeline',
      'Physical requirements vary by certification',
    ],
    stats: {
      certifications: '342',
      courses: '12',
      partners: '8',
    },
  },
];

export default function ProgramsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[520px] md:h-[750px] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/assets/images/training.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Waves className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">Our Programs</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pathways to{' '}
              <span className="text-accent">Purpose</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From entry-level opportunities to professional certifications, 
              we offer multiple pathways for veterans to find purpose in conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="glass-card p-6 text-center hover-lift group"
              >
                <program.icon className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground">{program.tagline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Program Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`section-container ${index % 2 === 1 ? 'bg-card' : ''}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <program.icon className="w-4 h-4" />
                {program.tagline}
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {program.title}
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                {program.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(program.stats).map(([key, value]) => (
                  <div key={key} className="glass-card p-4 text-center">
                    <div className="font-heading text-2xl font-bold text-accent">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="accent" asChild>
                <Link to={`/apply/${program.id === 'veterans' ? 'veteran' : 'volunteer'}`}>
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Features & Requirements */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              {/* Features */}
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  What You Get
                </h3>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {program.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      <span className="text-muted-foreground text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-container">
        <div className="glass-card p-8 md:p-12 bg-gradient-ocean text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Whether you are a veteran looking for a new mission or someone passionate about 
            marine conservation, we have a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/apply/veteran">
                Apply as Veteran
                <Shield className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/apply/volunteer">
                <Heart className="w-5 h-5" />
                Volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
