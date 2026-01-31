import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    icon: Heart,
    title: 'Healing Through Purpose',
    description: 'We provide veterans with meaningful work that promotes mental wellness and builds community connections.',
  },
  {
    icon: Target,
    title: 'Conservation Impact',
    description: 'Our programs directly contribute to marine ecosystem restoration and coastal habitat protection.',
  },
  {
    icon: Compass,
    title: 'Career Pathways',
    description: 'Veterans gain certifications and experience for careers in environmental science and conservation.',
  },
];

export function MissionSection() {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 wave-pattern opacity-50" />
      
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Our Mission
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Where Service Meets{' '}
              <span className="gradient-text">Conservation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              VETPAL creates a bridge between military service and environmental stewardship. 
              We believe that veterans, with their discipline, teamwork, and commitment to service, 
              are uniquely positioned to lead the charge in protecting our marine ecosystems.
            </p>

            <div className="space-y-6 mb-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <pillar.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="accent" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-card overflow-hidden border border-border/50">
              <img
                src="/assets/images/Vetpal-card-1.jpg"
                alt="Veterans and volunteers working together on coastal restoration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-accent/10 animate-float" />
              <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full bg-seafoam/10 animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-[200px] animate-float" style={{ animationDelay: '1s' }}>
              <div className="font-heading text-3xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-muted-foreground">
                of participants report improved mental wellness
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
