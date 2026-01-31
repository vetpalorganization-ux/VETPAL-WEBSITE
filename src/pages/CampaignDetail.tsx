import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  Calendar,
  Heart,
  Share2,
  TrendingUp,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CampaignDetail() {
  const { slug } = useParams();

  // In a real app, this would fetch campaign data from an API based on the slug
  // For now, using mock data
  const campaign = {
    id: "year-end-2024",
    title: "Year-End Impact Campaign 2024",
    slug: "year-end-2024",
    shortDescription: "Help us close the year strong by supporting veteran training programs and marine conservation projects.",
    fullDescription: `As 2024 comes to a close, we're asking for your support to finish the year strong and set up our veterans and ocean ecosystems for success in 2025.

This campaign funds three critical areas: veteran training and certification programs, active marine conservation projects, and mental health support services for our veteran community.

Your donation will directly enable us to train 50 more veterans in marine conservation careers, remove 10,000 pounds of debris from our oceans, and restore a full acre of endangered coral reef in the Florida Keys.`,
    image: "/assets/images/turtle-rescue.jpg",
    goal: 150000,
    raised: 127500,
    donors: 423,
    daysLeft: 15,
    startDate: "2024-11-15",
    endDate: "2025-01-07",
    status: "active",
    category: "General",
    highlights: [
      {
        title: "Train 50 Veterans",
        description: "Provide comprehensive marine conservation training and dive certification",
        icon: Users,
      },
      {
        title: "Remove 10,000 lbs Debris",
        description: "Conduct ocean cleanup operations along critical coastal habitats",
        icon: Target,
      },
      {
        title: "Restore 1 Acre Coral",
        description: "Plant and monitor coral fragments in degraded reef systems",
        icon: CheckCircle2,
      },
    ],
    milestones: [
      { amount: 50000, label: "Fund veteran training program", achieved: true },
      { amount: 100000, label: "Equipment and supplies purchased", achieved: true },
      { amount: 125000, label: "Coral restoration materials secured", achieved: true },
      { amount: 150000, label: "Full year of operations funded", achieved: false },
    ],
    updates: [
      {
        date: "2024-12-20",
        title: "85% Funded - Almost There!",
        content: "Thanks to 423 generous donors, we've raised over $127,000! We're in the final stretch and need your help to reach our $150K goal. Every dollar gets us closer to training more veterans and protecting our oceans.",
      },
      {
        date: "2024-12-10",
        title: "Training Cohort Announced",
        content: "We're excited to announce our January 2025 training cohort of 25 veterans from across the country. These brave men and women will begin their marine conservation careers thanks to your support.",
      },
      {
        date: "2024-11-25",
        title: "Campaign Milestone: $100K Raised!",
        content: "Incredible news! We've reached $100,000 in just 10 days. This means we can now purchase all necessary equipment and supplies for our conservation projects. Thank you to every donor who made this possible.",
      },
    ],
    impactStory: {
      veteranName: "James Rodriguez",
      branch: "U.S. Marine Corps",
      quote: "VETPAL gave me a new mission. After struggling to find purpose after leaving the Marines, the coral restoration program showed me how to serve in a completely new way. Now I'm helping heal the ocean while healing myself.",
      image: "/placeholder.svg",
    },
    faqs: [
      {
        q: "How will my donation be used?",
        a: "Funds are allocated as follows: 60% veteran training and support, 30% conservation project operations, 10% program administration and materials.",
      },
      {
        q: "Can I designate my gift to a specific part of this campaign?",
        a: "Yes! When donating, you can leave a comment specifying if you'd like to support veteran training, coral restoration, or cleanup operations specifically.",
      },
      {
        q: "Will I receive updates on the campaign's progress?",
        a: "Absolutely. All campaign donors receive monthly email updates with photos, stories, and impact metrics from the field.",
      },
      {
        q: "Is my donation tax-deductible?",
        a: "Yes. VETPAL is a 501(c)(3) nonprofit organization (EIN: XX-XXXXXXX). You'll receive a tax receipt immediately after your donation.",
      },
    ],
  };

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: campaign.title,
        text: campaign.shortDescription,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Campaign link copied to clipboard!');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Image */}
        <div className="relative h-[520px] md:h-[750px] bg-muted">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/45 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Badge className="mb-4">{campaign.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {campaign.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {campaign.shortDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Campaign Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Campaign</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  {campaign.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground">{paragraph}</p>
                  ))}
                </CardContent>
              </Card>

              {/* Impact Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Goals & Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {campaign.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-center p-6 rounded-lg bg-accent/5 border border-accent/20">
                        <highlight.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for Updates, Story, FAQs */}
              <Card>
                <Tabs defaultValue="updates" className="w-full">
                  <CardHeader>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="updates">Updates</TabsTrigger>
                      <TabsTrigger value="story">Impact Story</TabsTrigger>
                      <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>
                  </CardHeader>
                  <CardContent>
                    <TabsContent value="updates" className="space-y-6 mt-0">
                      {campaign.updates.map((update, idx) => (
                        <div key={idx} className="border-l-2 border-accent pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {formatDate(update.date)}
                            </span>
                          </div>
                          <h3 className="font-semibold mb-2">{update.title}</h3>
                          <p className="text-muted-foreground text-sm">{update.content}</p>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="story" className="mt-0">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <img
                            src={campaign.impactStory.image}
                            alt={campaign.impactStory.veteranName}
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="text-xl font-bold mb-2">{campaign.impactStory.veteranName}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{campaign.impactStory.branch}</p>
                          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                            "{campaign.impactStory.quote}"
                          </blockquote>
                          <p className="mt-4 text-sm text-muted-foreground">
                            Stories like {campaign.impactStory.veteranName.split(' ')[0]}'s are possible because of generous
                            donors like you. Your contribution to this campaign will help more veterans find purpose and
                            healing through marine conservation.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="faq" className="space-y-4 mt-0">
                      {campaign.faqs.map((faq, idx) => (
                        <div key={idx} className="border-b pb-4 last:border-0">
                          <h3 className="font-semibold mb-2">{faq.q}</h3>
                          <p className="text-sm text-muted-foreground">{faq.a}</p>
                        </div>
                      ))}
                    </TabsContent>
                  </CardContent>
                </Tabs>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Donation Card */}
              <Card className="sticky top-4 border-accent/20">
                <CardContent className="p-6 space-y-6">
                  {/* Progress */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-3xl font-bold text-accent">{formatCurrency(campaign.raised)}</span>
                      <span className="text-muted-foreground">of {formatCurrency(campaign.goal)}</span>
                    </div>
                    <Progress value={calculateProgress(campaign.raised, campaign.goal)} className="h-3" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <Users className="h-4 w-4" />
                          <span>Donors</span>
                        </div>
                        <div className="font-semibold">{campaign.donors}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <Clock className="h-4 w-4" />
                          <span>Time Left</span>
                        </div>
                        <div className="font-semibold">{campaign.daysLeft} days</div>
                      </div>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      Campaign Milestones
                    </h3>
                    <div className="space-y-3">
                      {campaign.milestones.map((milestone, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-3 text-sm ${
                            milestone.achieved ? 'opacity-100' : 'opacity-50'
                          }`}
                        >
                          <CheckCircle2
                            className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                              milestone.achieved ? 'text-success' : 'text-muted-foreground'
                            }`}
                          />
                          <div>
                            <div className="font-semibold">{formatCurrency(milestone.amount)}</div>
                            <div className="text-muted-foreground">{milestone.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4 border-t">
                    <Button asChild className="w-full" size="lg">
                      <Link to={`/donate?campaign=${campaign.id}`}>
                        <Heart className="h-5 w-5 mr-2" />
                        Donate to This Campaign
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Campaign
                    </Button>
                  </div>

                  {/* Campaign Dates */}
                  <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                    Campaign runs from {formatDate(campaign.startDate)} to {formatDate(campaign.endDate)}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Donors (mock data) */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Supporters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Sarah M.", amount: 250, time: "2 hours ago" },
                    { name: "Anonymous", amount: 100, time: "5 hours ago" },
                    { name: "Michael R.", amount: 500, time: "1 day ago" },
                    { name: "Jennifer K.", amount: 75, time: "1 day ago" },
                    { name: "Robert T.", amount: 150, time: "2 days ago" },
                  ].map((donor, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <div>
                        <div className="font-medium">{donor.name}</div>
                        <div className="text-muted-foreground text-xs">{donor.time}</div>
                      </div>
                      <div className="font-semibold text-accent">{formatCurrency(donor.amount)}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Browse Other Campaigns */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/campaigns">Browse All Campaigns</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
