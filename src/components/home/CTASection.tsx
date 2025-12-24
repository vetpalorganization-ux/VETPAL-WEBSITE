import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ctaCards = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Your gift directly funds veteran programs and conservation projects. Every dollar makes a difference.',
    action: 'Donate Now',
    href: '/donate',
    variant: 'accent' as const,
  },
  {
    icon: Users,
    title: 'Join as Volunteer',
    description: 'No experience needed. Join our next beach cleanup or conservation event and be part of the solution.',
    action: 'Get Involved',
    href: '/get-involved#volunteer',
    variant: 'outline' as const,
  },
  {
    icon: Building2,
    title: 'Corporate Partnership',
    description: 'Align your brand with environmental impact and veteran support through corporate sponsorship.',
    action: 'Partner With Us',
    href: '/get-involved#corporate',
    variant: 'outline' as const,
  },
];

export function CTASection() {
  return (
    <section className="section-container bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Take Action
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Make a{' '}
            <span className="gradient-text">Difference</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Whether you give, volunteer, or partner with us, 
            you are helping veterans heal while protecting our oceans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="glass-card p-8 flex flex-col hover-lift group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-1">
                {card.description}
              </p>
              
              <Button variant={card.variant} asChild className="w-full">
                <Link to={card.href}>
                  {card.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="mt-12 glass-card p-6 md:p-8 bg-accent/5 border-accent/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">
                  2024 Year-End Campaign
                </h4>
                <p className="text-muted-foreground text-sm">
                  Help us reach our goal of $100,000 by December 31st
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-heading text-2xl font-bold text-accent">$67,450</div>
                <div className="text-sm text-muted-foreground">of $100,000 raised</div>
              </div>
              <Button variant="accent" asChild>
                <Link to="/campaigns/year-end-2024">
                  Contribute
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-1000"
              style={{ width: '67.45%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
