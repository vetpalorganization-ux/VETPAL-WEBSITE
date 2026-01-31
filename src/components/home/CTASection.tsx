import { useState } from 'react';
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
  const [campaignView, setCampaignView] = useState<'results' | 'current'>('results');

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
        <p className="mt-6 text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto text-center">
          VETPAL is a 501(c)(3) nonprofit. EIN: 99-2108558. Donations are tax-deductible to the extent allowed by law.
          Donor privacy is protected under our{" "}
          <Link to="/donor-privacy" className="text-accent hover:underline">
            Donor Privacy Policy
          </Link>
          .
        </p>

        {/* Campaign Results + Current Year */}
        <div className="mt-12 glass-card p-6 md:p-8 bg-accent/5 border-accent/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">
                  {campaignView === 'results' ? '2025 Annual Giving Campaign' : '2026 Annual Giving Campaign'}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {campaignView === 'results'
                    ? '2025 Results'
                    : 'Current Year Campaign'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCampaignView('results')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border transition ${
                  campaignView === 'results'
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                2025 Results
              </button>
              <button
                type="button"
                onClick={() => setCampaignView('current')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border transition ${
                  campaignView === 'current'
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                2026 Campaign
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            {campaignView === 'results' ? (
              <>
                <div className="text-left">
                  <div className="font-heading text-2xl font-bold text-accent">$942,572</div>
                  <div className="text-sm text-muted-foreground">of $2,000,000 goal</div>
                </div>
                <Button variant="accent" asChild>
                  <Link to="/campaigns">
                    View 2025 Results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <div className="text-left">
                  <div className="font-heading text-2xl font-bold text-accent">2026 Annual Giving Campaign</div>
                  <div className="text-sm text-muted-foreground">Fundraising in progress</div>
                </div>
                <Button variant="accent" asChild>
                  <Link to="/donate">
                    Contribute
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-700"
              style={{ width: campaignView === 'results' ? '47.13%' : '0%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
