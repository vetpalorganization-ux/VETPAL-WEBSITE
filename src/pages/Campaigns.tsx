import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, Calendar, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Campaigns() {
  const campaigns = [
    {
      id: "year-end-2024",
      title: "Year-End Impact Campaign 2024",
      slug: "year-end-2024",
      description: "Help us close the year strong by supporting veteran training programs and marine conservation projects. Every dollar makes waves.",
      image: "/placeholder.svg",
      goal: 150000,
      raised: 127500,
      donors: 423,
      daysLeft: 15,
      status: "active",
      featured: true,
      category: "General",
      highlights: [
        "Train 50 veterans in marine conservation",
        "Remove 10,000 lbs of ocean debris",
        "Restore 1 acre of coral reef"
      ]
    },
    {
      id: "coral-restoration-2025",
      title: "Coral Restoration Initiative",
      slug: "coral-restoration-2025",
      description: "Fund a coral reef restoration project in the Florida Keys, supporting our veteran volunteers in partnership with conservation organizations.",
      image: "/placeholder.svg",
      goal: 75000,
      raised: 2500,
      donors: 12,
      daysLeft: 45,
      status: "active",
      featured: true,
      category: "Conservation",
      highlights: [
        "Plant 5,000 coral fragments",
        "Create 2 coral nurseries",
        "Monitor reef health for 12 months"
      ]
    },
    {
      id: "veteran-scholarship",
      title: "Veteran Dive Certification Scholarship",
      slug: "veteran-scholarship",
      description: "Sponsor a veteran's complete dive certification and conservation training, opening doors to marine careers.",
      image: "/placeholder.svg",
      goal: 25000,
      raised: 18750,
      donors: 94,
      daysLeft: 30,
      status: "active",
      featured: false,
      category: "Veterans",
      highlights: [
        "Full PADI dive certification",
        "6 months of conservation training",
        "Job placement support"
      ]
    },
    {
      id: "coastal-cleanup",
      title: "National Coastal Cleanup Tour",
      slug: "coastal-cleanup",
      description: "Support our veteran teams as they travel the country organizing beach cleanups and community engagement.",
      image: "/placeholder.svg",
      goal: 50000,
      raised: 41000,
      donors: 267,
      daysLeft: 22,
      status: "active",
      featured: false,
      category: "Conservation",
      highlights: [
        "20 coastal cleanup events",
        "Engage 2,000 volunteers",
        "Target 25,000 lbs of debris"
      ]
    },
    {
      id: "equipment-fund",
      title: "Conservation Equipment Fund",
      slug: "equipment-fund",
      description: "Help us purchase essential gear: dive equipment, water testing kits, boats, and field supplies for our teams.",
      image: "/placeholder.svg",
      goal: 35000,
      raised: 22100,
      donors: 115,
      daysLeft: 60,
      status: "active",
      featured: false,
      category: "General",
      highlights: [
        "10 full dive kits",
        "Water quality testing equipment",
        "Field communication gear"
      ]
    },
    {
      id: "sea-turtle-2024",
      title: "Sea Turtle Protection Program",
      slug: "sea-turtle-2024",
      description: "Our veteran teams protected 200+ sea turtle nests this year. This campaign funded all monitoring equipment and training.",
      image: "/placeholder.svg",
      goal: 20000,
      raised: 20000,
      donors: 156,
      daysLeft: 0,
      status: "completed",
      featured: false,
      category: "Conservation",
      highlights: [
        "Monitored 200+ nests",
        "Trained 25 veteran monitors",
        "90% hatch success rate"
      ]
    }
  ];

  const activeCampaigns = campaigns.filter(c => c.status === "active");
  const completedCampaigns = campaigns.filter(c => c.status === "completed");
  const featuredCampaigns = campaigns.filter(c => c.featured && c.status === "active");

  const calculateProgress = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <div className="bg-primary text-white h-[520px] md:h-[750px] flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/images/sea-turtle.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/55 to-slate-950/85" />
          </div>
          <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Target className="h-16 w-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Active Campaigns
              </h1>
              <p className="text-xl text-white/80">
                Support specific initiatives that empower veterans and protect our oceans.
                Every campaign directly funds measurable conservation and veteran services.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{activeCampaigns.length}</div>
                <div className="text-sm text-muted-foreground">Active Campaigns</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">
                  {formatCurrency(campaigns.filter(c => c.status === "active").reduce((sum, c) => sum + c.raised, 0))}
                </div>
                <div className="text-sm text-muted-foreground">Total Raised</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">
                  {campaigns.filter(c => c.status === "active").reduce((sum, c) => sum + c.donors, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Campaign Donors</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{completedCampaigns.length}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Campaigns */}
          {featuredCampaigns.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-bold">Featured Campaigns</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredCampaigns.map((campaign) => (
                  <Card key={campaign.id} className="overflow-hidden border-accent/20 hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent text-white">
                        Featured
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-2xl">{campaign.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="w-fit">{campaign.category}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{campaign.description}</p>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold">{formatCurrency(campaign.raised)} raised</span>
                          <span className="text-muted-foreground">of {formatCurrency(campaign.goal)} goal</span>
                        </div>
                        <Progress value={calculateProgress(campaign.raised, campaign.goal)} className="h-3" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {campaign.donors} donors
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {campaign.daysLeft} days left
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Campaign Goals:</h4>
                        <ul className="space-y-1">
                          {campaign.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-accent mt-0.5">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button asChild className="flex-1">
                          <Link to={`/campaigns/${campaign.slug}`}>Learn More</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link to={`/donate?campaign=${campaign.id}`}>
                            <Heart className="h-4 w-4 mr-2" />
                            Donate
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Active Campaigns */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">All Active Campaigns</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="aspect-video bg-muted">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-xl">{campaign.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">{campaign.category}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{campaign.description}</p>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold">{formatCurrency(campaign.raised)}</span>
                        <span className="text-muted-foreground">of {formatCurrency(campaign.goal)}</span>
                      </div>
                      <Progress value={calculateProgress(campaign.raised, campaign.goal)} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{campaign.donors} donors</span>
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link to={`/campaigns/${campaign.slug}`}>Details</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link to={`/donate?campaign=${campaign.id}`}>Donate</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Completed Campaigns */}
          {completedCampaigns.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Completed Campaigns</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedCampaigns.map((campaign) => (
                  <Card key={campaign.id} className="overflow-hidden opacity-90">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-success text-white">
                        ✓ Completed
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{campaign.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">{campaign.category}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-success">{formatCurrency(campaign.raised)} raised</span>
                          <span className="text-muted-foreground">{campaign.donors} donors</span>
                        </div>
                        <Progress value={100} className="h-2 bg-success/20" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{campaign.description}</p>
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <Link to={`/campaigns/${campaign.slug}`}>View Impact Report</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <Card className="mt-16 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Can't Decide? Give Where It's Needed Most</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Make an unrestricted donation to support all our programs. We'll direct your gift to where
                it can have the greatest impact for veterans and ocean conservation.
              </p>
              <Button asChild size="lg">
                <Link to="/donate">Make a General Donation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
