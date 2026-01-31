import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Play, Shield, TrendingUp, Waves, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[520px] md:h-[750px] flex items-center overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/assets/videos/vetpal-commercial-part1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85" />
      </div>
      
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">501(c)(3) Nonprofit Organization</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Veterans Empowered to{' '}
            <span className="text-accent">Protect Aquatic Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
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
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl mx-auto mb-10">
            VETPAL is a 501(c)(3) nonprofit. EIN: 99-2108558. Donations are tax-deductible to the extent allowed by law.
            Donor privacy is protected under our{" "}
            <Link to="/donor-privacy" className="underline underline-offset-2 text-white/90 hover:text-white">
              Donor Privacy Policy
            </Link>
            .
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-1">13</div>
              <div className="text-sm text-muted-foreground dark:text-white/70">Veterans Served</div>
              <div className="text-xs text-muted-foreground/80 dark:text-white/60">Since 2024</div>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <Waves className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-1">7</div>
              <div className="text-sm text-muted-foreground dark:text-white/70">Waterways Cleaned</div>
              <div className="text-xs text-muted-foreground/80 dark:text-white/60">Since 2024</div>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-1">43</div>
              <div className="text-sm text-muted-foreground dark:text-white/70">Cleanup Events</div>
              <div className="text-xs text-muted-foreground/80 dark:text-white/60">Since 2024</div>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-1">13k+</div>
              <div className="text-sm text-muted-foreground dark:text-white/70">13k+ lbs of cleanup debris</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-hero" />
    </section>
  );
}
