import { Layout } from '@/components/layout/Layout';
import { StatsCard } from '@/components/shared/StatsCard';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { DollarSign, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const campaignStats = [
  { value: '$123,000', label: 'Total Raised', icon: DollarSign },
  { value: '1,458', label: 'Total Donors', icon: Users },
  { value: '8', label: 'Active Campaigns', icon: Target },
  { value: '95%', label: 'Success Rate', icon: TrendingUp },
];

const featuredCampaigns = [
  {
    id: 1,
    title: 'Ocean Cleanup Initiative 2025',
    description: 'Help us remove 50 tons of plastic from coastal waters through veteran-led cleanup operations.',
    raised: 45000,
    goal: 75000,
    donors: 234,
    daysLeft: 12,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Coral Restoration Training Program',
    description: 'Train 30 veterans in coral reef restoration techniques and marine ecosystem management.',
    raised: 32000,
    goal: 50000,
    donors: 187,
    daysLeft: 24,
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&auto=format&fit=crop',
  },
];

const activeCampaigns = [
  {
    id: 3,
    title: 'Marine Wildlife Monitoring Equipment',
    description: 'Provide veterans with underwater cameras and monitoring equipment for marine life research.',
    raised: 18500,
    goal: 30000,
    donors: 92,
    daysLeft: 18,
  },
  {
    id: 4,
    title: 'Veteran Dive Certification Program',
    description: 'Fund professional diving certifications for veterans entering marine conservation careers.',
    raised: 12000,
    goal: 25000,
    donors: 78,
    daysLeft: 30,
  },
  {
    id: 5,
    title: 'Beach Restoration Project - Gulf Coast',
    description: 'Support veterans in restoring critical beach ecosystems damaged by recent storms.',
    raised: 25000,
    goal: 40000,
    donors: 156,
    daysLeft: 15,
  },
  {
    id: 6,
    title: 'Educational Outreach Program',
    description: 'Enable veterans to teach marine conservation in schools and community centers.',
    raised: 8500,
    goal: 15000,
    donors: 45,
    daysLeft: 45,
  },
];

const completedCampaigns = [
  {
    id: 7,
    title: 'Wetlands Restoration - Florida',
    raised: 50000,
    goal: 50000,
    completedDate: '2024-11-15',
  },
];

const Campaigns = () => {
  const calculateProgress = (raised: number, goal: number) => (raised / goal) * 100;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Active Campaigns
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Support our veteran-led marine conservation initiatives. Every contribution makes a direct impact on our oceans and our veterans.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {campaignStats.map((stat, index) => (
              <StatsCard
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
            Featured Campaigns
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredCampaigns.map((campaign) => {
              const progress = calculateProgress(campaign.raised, campaign.goal);
              return (
                <div key={campaign.id} className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300">
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {campaign.daysLeft} days left
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {campaign.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">${campaign.raised.toLocaleString()} raised</span>
                          <span className="font-semibold text-foreground">${campaign.goal.toLocaleString()} goal</span>
                        </div>
                        <Progress value={progress} className="h-3" />
                        <div className="text-sm text-muted-foreground mt-2">
                          {campaign.donors} donors • {progress.toFixed(0)}% funded
                        </div>
                      </div>
                      <Button className="w-full" variant="accent" asChild>
                        <Link to="/donate">Donate Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* All Active Campaigns */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
            All Active Campaigns
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {activeCampaigns.map((campaign) => {
              const progress = calculateProgress(campaign.raised, campaign.goal);
              return (
                <div key={campaign.id} className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {campaign.title}
                    </h3>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                      {campaign.daysLeft}d
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    {campaign.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">${campaign.raised.toLocaleString()}</span>
                        <span className="font-semibold text-foreground">${campaign.goal.toLocaleString()}</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-2">
                        {campaign.donors} donors
                      </div>
                    </div>
                    <Button className="w-full" variant="outline" size="sm" asChild>
                      <Link to="/donate">Support</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Completed Campaigns */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
            Completed Campaigns
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCampaigns.map((campaign) => (
              <div key={campaign.id} className="glass-card p-6 rounded-xl border-2 border-accent/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-accent font-semibold">Fully Funded</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {campaign.title}
                </h3>
                <div className="text-sm text-muted-foreground">
                  ${campaign.raised.toLocaleString()} raised
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Completed {new Date(campaign.completedDate).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Contact us to discuss custom campaign opportunities or corporate partnership programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-involved">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
