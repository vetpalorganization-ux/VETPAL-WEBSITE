import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Users, 
  Building2, 
  Handshake,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Shield,
  Award
} from 'lucide-react';

const volunteerOpportunities = [
  {
    title: 'Beach Cleanup Volunteer',
    commitment: '4-6 hours/month',
    location: 'Multiple locations',
    description: 'Join our regular beach cleanup events. No experience required.',
  },
  {
    title: 'Dive Team Member',
    commitment: '8-10 hours/month',
    location: 'Coastal sites',
    description: 'Assist with underwater debris removal. PADI certification required.',
  },
  {
    title: 'Event Support',
    commitment: 'As needed',
    location: 'Various',
    description: 'Help with registration, logistics, and community events.',
  },
  {
    title: 'Veteran Mentor',
    commitment: '4 hours/month',
    location: 'Remote/In-person',
    description: 'Support new veteran participants through their journey.',
  },
];

const partnerBenefits = [
  'Logo placement on event materials and website',
  'Employee volunteer opportunities',
  'Social media recognition and content',
  'Impact reports and metrics',
  'Tax-deductible contributions',
  'Customized partnership packages',
];

const corporateTiers = [
  {
    name: 'Bronze Partner',
    amount: '$5,000+',
    benefits: ['Logo on website', 'Social media mention', 'Annual impact report'],
  },
  {
    name: 'Silver Partner',
    amount: '$15,000+',
    benefits: ['All Bronze benefits', 'Event sponsorship', 'Employee volunteer day'],
  },
  {
    name: 'Gold Partner',
    amount: '$50,000+',
    benefits: ['All Silver benefits', 'Program naming rights', 'Executive site visit'],
  },
  {
    name: 'Platinum Partner',
    amount: '$100,000+',
    benefits: ['All Gold benefits', 'Board observer seat', 'Custom partnership'],
  },
];

export default function GetInvolvedPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[520px] md:h-[750px] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/assets/images/beach-clean-mission.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">Get Involved</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Be Part of the{' '}
              <span className="text-accent">Solution</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              There are many ways to support our mission. Whether you give your time, 
              talent, or treasure, every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="#volunteer" className="glass-card p-6 text-center hover-lift group">
              <Users className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground">Volunteer</h3>
            </a>
            <a href="#partner" className="glass-card p-6 text-center hover-lift group">
              <Handshake className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground">Partner</h3>
            </a>
            <a href="#corporate" className="glass-card p-6 text-center hover-lift group">
              <Building2 className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground">Corporate</h3>
            </a>
            <Link to="/donate" className="glass-card p-6 text-center hover-lift group">
              <Heart className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground">Donate</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Volunteer With Us
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Give Your Time, Make an Impact
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our volunteers are the backbone of VETPAL. Whether you can spare a few hours 
              a month or want to make a regular commitment, we have opportunities for you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">No Experience Required</h4>
                  <p className="text-sm text-muted-foreground">We provide all training for new volunteers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">Events on weekends and weekdays</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Make Real Connections</h4>
                  <p className="text-sm text-muted-foreground">Join a community of passionate people</p>
                </div>
              </div>
            </div>

            <Button variant="accent" asChild>
              <Link to="/apply/volunteer">
                Apply to Volunteer
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {volunteerOpportunities.map((opp, index) => (
              <div key={index} className="glass-card p-6 hover-lift">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {opp.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {opp.commitment}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {opp.location}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{opp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterans Section */}
      <section className="section-container bg-card">
        <div className="glass-card p-8 md:p-12 bg-gradient-ocean">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                For Veterans
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Veterans Program
              </h2>
              
              <p className="text-foreground/80 mb-6">
                Are you a veteran looking for purpose, community, and career opportunities 
                in conservation? Our Veterans Program offers paid positions, certifications, 
                and mental health support.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Paid positions available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Professional certifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Mental health resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Peer mentorship</span>
                </div>
              </div>

              <Button variant="accent" size="lg" asChild>
                <Link to="/apply/veteran">
                  Apply as a Veteran
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-32 h-32 text-accent/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Partnership Opportunities
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Partner With VETPAL
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Organizations and businesses can amplify their impact through partnership with VETPAL.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Partnership Benefits
            </h3>
            <div className="space-y-4">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="accent" className="w-full mt-8" asChild>
              <Link to="/contact?topic=partnership">
                Discuss Partnership
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Current Partners Include
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {['Ocean Conservancy', 'NOAA', 'Sierra Club', 'VA Partnership', 'Surfrider', 'Coral Restoration'].map((partner, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <span className="font-medium text-muted-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="section-container bg-card">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Corporate Sponsorship
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Corporate Partnership Tiers
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Align your brand with environmental impact and veteran support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateTiers.map((tier, index) => (
            <div key={index} className="glass-card p-6 hover-lift">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {tier.name}
              </h3>
              <div className="font-heading text-2xl font-bold text-accent mb-4">
                {tier.amount}
              </div>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" asChild>
            <Link to="/contact?topic=corporate">
              Contact Our Development Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
