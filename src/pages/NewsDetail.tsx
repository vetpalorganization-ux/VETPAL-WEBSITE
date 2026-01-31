import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Share2, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function NewsDetail() {
  const { slug } = useParams();

  // In a real app, this would fetch article data from an API based on the slug
  // For now, using mock data
  const article = {
    id: "1",
    slug: "coral-restoration-initiative",
    title: "VETPAL Launches Coral Restoration Initiative",
    excerpt: "Our veteran teams are partnering with conservation organizations to protect and restore coral reefs in the Florida Keys.",
    image: "/assets/images/salvage.jpg",
    category: "Conservation",
    author: {
      name: "Sarah Johnson",
      title: "Conservation Director",
      image: "/placeholder.svg",
      bio: "Sarah leads VETPAL's conservation initiatives, bringing passion for marine biology and reef restoration.",
    },
    date: "2024-12-15",
    readTime: "5 min read",
    content: `
<p class="lead">VETPAL's veteran teams are launching an ambitious coral restoration initiative in partnership with established marine conservation organizations in the Florida Keys National Marine Sanctuary.</p>

<h2>A Vision for Veteran-Led Marine Conservation</h2>

<p>This coral restoration project represents VETPAL's commitment to combining veteran skills with meaningful environmental impact. Through partnerships with experienced conservation organizations, our veteran volunteers will contribute to collecting, nurturing, and transplanting coral fragments to degraded reef sites throughout the Florida Keys.</p>

<p>"This milestone represents not just environmental success, but also the incredible dedication of our veteran dive teams," says Dr. Maria Rodriguez, VETPAL's Marine Science Lead. "Each coral fragment planted is a testament to the skills, discipline, and commitment that these veterans bring to ocean conservation."</p>

<h2>The Impact of Coral Restoration</h2>

<p>Coral reefs are among the most biodiverse ecosystems on Earth, often called the "rainforests of the sea." They provide:</p>

<ul>
  <li>Habitat for 25% of all marine species</li>
  <li>Natural coastal protection from storms and erosion</li>
  <li>Food and income for millions of people worldwide</li>
  <li>Potential for medical discoveries and pharmaceuticals</li>
</ul>

<p>The Florida Reef Tract, where VETPAL operates, has lost over 90% of its coral cover in recent decades due to warming waters, disease, and other stressors. Our restoration work aims to reverse this decline and rebuild these critical ecosystems.</p>

<h2>Veteran Leadership in Action</h2>

<p>The project is led by a team of 12 veteran dive specialists, many of whom completed their advanced dive training through VETPAL's certification program. Former Navy Corpsman Michael Chen serves as the project's dive coordinator.</p>

<blockquote>
  <p>"After leaving the military, I was searching for a new mission," Chen explains. "Working on coral restoration has given me that sense of purpose again. We're not just planting corals—we're rebuilding an ecosystem and creating a legacy for future generations."</p>
</blockquote>

<p>The team works in challenging conditions, often diving multiple times per day in varying weather and sea states. Their military training in discipline, teamwork, and adaptability has proven invaluable to the project's success.</p>

<h2>Science-Based Approach</h2>

<p>VETPAL's restoration methodology follows best practices established by coral scientists and conservation organizations. The process includes:</p>

<ol>
  <li><strong>Collection:</strong> Small fragments are carefully collected from healthy donor colonies</li>
  <li><strong>Nursery Care:</strong> Fragments are grown in underwater nurseries for 6-12 months</li>
  <li><strong>Outplanting:</strong> Mature fragments are transplanted to degraded reef sites</li>
  <li><strong>Monitoring:</strong> Teams track survival rates and growth for years after planting</li>
</ol>

<p>The project maintains a rigorous monitoring protocol, with dive teams assessing each outplant site quarterly to track coral survival, growth, and overall reef health. Current data shows an impressive 85% survival rate for transplanted corals—significantly higher than the industry average of 65-70%.</p>

<h2>Community Engagement and Education</h2>

<p>Beyond the physical work of planting corals, VETPAL's teams engage with local schools, dive shops, and community organizations to raise awareness about reef conservation. Over the past year, veteran team members have:</p>

<ul>
  <li>Conducted 24 educational presentations for schools and community groups</li>
  <li>Trained 50 volunteer divers in coral restoration techniques</li>
  <li>Hosted 8 reef cleanup events removing over 2,000 pounds of debris</li>
  <li>Created educational materials viewed by 15,000+ people online</li>
</ul>

<h2>Looking Ahead: The Next 5,000</h2>

<p>With this milestone achieved, VETPAL is already planning the next phase of expansion. Thanks to new funding from the Year-End Impact Campaign, the team aims to plant an additional 5,000 fragments in 2025, doubling their impact.</p>

<p>The project is also expanding its training program, with plans to certify 15 additional veteran divers in advanced coral restoration techniques. This expansion will allow VETPAL to tackle larger reef sites and take on more complex restoration challenges.</p>

<p>"We're proving that veterans can be environmental leaders," says VETPAL Executive Director James Wilson, himself a Marine Corps veteran. "This coral restoration project shows what's possible when you combine veteran dedication with meaningful conservation work. And we're just getting started."</p>

<h2>How You Can Support</h2>

<p>The coral restoration project is funded entirely through donor contributions. To support this vital work:</p>

<ul>
  <li><strong>Donate:</strong> Contribute to the <a href="/campaigns/coral-restoration-2025">Coral Restoration Initiative</a></li>
  <li><strong>Volunteer:</strong> Join us for reef cleanup dives and monitoring events</li>
  <li><strong>Spread the Word:</strong> Share this story to raise awareness about reef conservation</li>
  <li><strong>Visit:</strong> See the restoration sites firsthand through our eco-tour partnerships</li>
</ul>

<p>Every contribution, large or small, helps us continue this important work of healing our oceans while supporting our veterans.</p>

<hr />

<p class="text-sm text-muted-foreground"><em>This project is conducted under permits from the Florida Keys National Marine Sanctuary and follows all established guidelines for coral restoration. VETPAL partners with the Coral Restoration Foundation, NOAA, and the University of Miami's Rosenstiel School of Marine Science.</em></p>
    `,
    tags: ["Coral Restoration", "Florida Keys", "Marine Conservation", "Veteran Impact"],
    relatedArticles: [
      {
        id: "2",
        slug: "veteran-spotlight-michael",
        title: "Veteran Spotlight: Michael's Journey from Combat to Conservation",
        category: "Impact Stories",
        image: "/placeholder.svg",
      },
      {
        id: "6",
        slug: "mangrove-restoration-project",
        title: "New Mangrove Restoration Project Launches in Florida",
        category: "Conservation",
        image: "/placeholder.svg",
      },
      {
        id: "4",
        slug: "partnership-noaa",
        title: "VETPAL Partners with NOAA for Sea Turtle Monitoring",
        category: "Press",
        image: "/placeholder.svg",
      },
    ],
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = (platform?: string) => {
    const url = window.location.href;
    const text = article.title;

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (navigator.share) {
      navigator.share({ title: text, url });
    } else {
      navigator.clipboard.writeText(url);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Image */}
        <div className="relative h-[520px] md:h-[750px] bg-muted">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/45 to-transparent" />
        </div>

        {/* Article Header */}
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <Button asChild variant="ghost" size="sm" className="mb-6">
                <Link to="/news">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to News
                </Link>
              </Button>

              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b">
                <span className="text-sm font-semibold">Share:</span>
                <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare()}>
                  <Share2 className="h-4 w-4 mr-2" />
                  More
                </Button>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-strong:text-foreground prose-lead:text-lg prose-lead:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">Tags:</span>
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8 bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={article.author.image}
                      alt={article.author.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold mb-1">{article.author.name}</h3>
                      <p className="text-sm text-accent mb-2">{article.author.title}</p>
                      <p className="text-sm text-muted-foreground">{article.author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Card>

            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-6">Related Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {article.relatedArticles.map((related) => (
                  <Card key={related.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={`/news/${related.slug}`}>
                      <div className="aspect-video bg-muted">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">{related.category}</Badge>
                      <Link to={`/news/${related.slug}`}>
                        <h3 className="font-semibold hover:text-accent transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="mt-16 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Support This Work</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Stories like this are made possible by donors like you. Help us continue empowering
                  veterans and protecting our oceans.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/donate">Make a Donation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/news">Read More Stories</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
