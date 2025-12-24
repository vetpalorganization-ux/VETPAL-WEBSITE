import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Waves, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-ocean" />
      
      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-[200%] animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-accent"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-seafoam/10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-accent/5 animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">501(c)(3) Nonprofit Organization</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Veterans Empowered to{' '}
            <span className="gradient-text">Protect Aquatic Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We unite veterans in meaningful marine conservation work, providing purpose, 
            community, and healing through protecting our oceans and coastal ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" asChild>
              <Link to="/donate">
                Make a Donation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/get-involved">
                <Play className="w-5 h-5" />
                Join Our Mission
              </Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Veterans Served</div>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <Waves className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Cleanup Events</div>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">75K</div>
              <div className="text-sm text-muted-foreground">Lbs Debris Removed</div>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">25</div>
              <div className="text-sm text-muted-foreground">Coastal Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-hero" />
    </section>
  );
}
