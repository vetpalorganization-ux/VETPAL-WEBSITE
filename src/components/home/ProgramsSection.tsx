import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Anchor, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    icon: Shield,
    title: 'Veterans Program',
    description: 'Comprehensive support for veterans transitioning to conservation careers, including mental health resources and peer mentorship.',
    features: ['Paid positions available', 'Mental health support', 'Peer mentorship'],
    href: '/programs#veterans',
    color: 'accent',
  },
  {
    icon: Anchor,
    title: 'Marine Conservation',
    description: 'Hands-on restoration projects including coral reef rehabilitation, beach cleanups, and coastal habitat preservation.',
    features: ['Diving certifications', 'Field research', 'Data collection'],
    href: '/programs#conservation',
    color: 'seafoam',
  },
  {
    icon: Award,
    title: 'Training & Certification',
    description: 'Professional development pathways leading to recognized environmental and diving certifications.',
    features: ['PADI certification', 'Wildlife surveys', 'GIS mapping'],
    href: '/programs#training',
    color: 'info',
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Regular volunteer events open to the public, creating opportunities for community engagement and education.',
    features: ['Beach cleanups', 'Educational workshops', 'Family-friendly'],
    href: '/events',
    color: 'warning',
  },
];

export function ProgramsSection() {
  return (
    <section className="section-container bg-card">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Our Programs
        </div>
        
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Pathways to Purpose
        </h2>
        
        <p className="text-lg text-muted-foreground">
          From entry-level volunteer positions to paid conservation roles, 
          we offer multiple ways for veterans and community members to get involved.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="group glass-card p-8 hover-lift cursor-pointer"
          >
            <div className="flex items-start gap-6">
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-${program.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <program.icon className={`w-7 h-7 text-${program.color}`} />
              </div>
              
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {program.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={program.href}
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link to="/programs">
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
