import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Newspaper, Calendar, User, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["All", "Impact Stories", "Conservation", "Veterans", "Events", "Press"];

  const newsArticles = [
    {
      id: "1",
      slug: "coral-restoration-milestone",
      title: "VETPAL Reaches Major Coral Restoration Milestone",
      excerpt: "Our veteran dive teams have successfully planted over 5,000 coral fragments in the Florida Keys, marking a significant achievement in reef restoration efforts.",
      image: "/placeholder.svg",
      category: "Conservation",
      author: "Sarah Johnson",
      date: "2024-12-15",
      featured: true,
      readTime: "5 min read",
    },
    {
      id: "2",
      slug: "veteran-spotlight",
      title: "Veteran Spotlight: Finding Purpose Through Conservation",
      excerpt: "Army veterans share how VETPAL helped them transition from military service to meaningful work protecting aquatic ecosystems.",
      image: "/placeholder.svg",
      category: "Impact Stories",
      author: "VETPAL Team",
      date: "2024-12-10",
      featured: true,
      readTime: "8 min read",
    },
    {
      id: "3",
      slug: "beach-cleanup-record",
      title: "Coastal Cleanup Sets New Record with 15,000 lbs Removed",
      excerpt: "This month's coordinated cleanup effort across five states resulted in the removal of 15,000 pounds of marine debris, our largest single-day impact yet.",
      image: "/placeholder.svg",
      category: "Events",
      author: "David Martinez",
      date: "2024-12-05",
      featured: false,
      readTime: "4 min read",
    },
    {
      id: "4",
      slug: "partnership-noaa",
      title: "VETPAL Partners with NOAA for Sea Turtle Monitoring",
      excerpt: "New collaboration will expand sea turtle nest monitoring programs along the Atlantic coast, engaging 50 additional veteran monitors.",
      image: "/placeholder.svg",
      category: "Press",
      author: "Rachel Adams",
      date: "2024-11-28",
      featured: false,
      readTime: "6 min read",
    },
    {
      id: "5",
      slug: "training-cohort-graduation",
      title: "Fall Training Cohort Graduates 30 Veterans",
      excerpt: "Thirty veterans completed intensive marine conservation training, earning dive certifications and securing positions with conservation partners.",
      image: "/placeholder.svg",
      category: "Veterans",
      author: "James Wilson",
      date: "2024-11-20",
      featured: false,
      readTime: "5 min read",
    },
    {
      id: "6",
      slug: "mangrove-restoration-project",
      title: "New Mangrove Restoration Project Launches in Florida",
      excerpt: "VETPAL teams begin planting 10,000 mangrove seedlings to restore critical coastal habitat and combat erosion.",
      image: "/placeholder.svg",
      category: "Conservation",
      author: "Maria Rodriguez",
      date: "2024-11-15",
      featured: false,
      readTime: "7 min read",
    },
    {
      id: "7",
      slug: "veteran-mental-health-program",
      title: "Expanding Mental Health Support for Veteran Participants",
      excerpt: "New partnership with Veterans Affairs provides enhanced counseling and peer support services for all VETPAL program participants.",
      image: "/placeholder.svg",
      category: "Veterans",
      author: "Dr. Jennifer Lee",
      date: "2024-11-10",
      featured: false,
      readTime: "6 min read",
    },
    {
      id: "8",
      slug: "ghost-gear-removal",
      title: "Veteran Dive Teams Remove Abandoned Fishing Gear",
      excerpt: "Specialized removal operations target ghost nets and traps that continue to harm marine life long after abandonment.",
      image: "/placeholder.svg",
      category: "Conservation",
      author: "Tom Anderson",
      date: "2024-11-05",
      featured: false,
      readTime: "5 min read",
    },
  ];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Newspaper className="h-16 w-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                News & Stories
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Read the latest updates from VETPAL, including impact stories, conservation news,
                veteran spotlights, and program announcements.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow border-accent/20"
                  >
                    <Link to={`/news/${article.slug}`}>
                      <div className="aspect-video bg-muted relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 right-4 bg-accent text-white">
                          Featured
                        </Badge>
                      </div>
                    </Link>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <Link to={`/news/${article.slug}`}>
                        <h3 className="text-2xl font-bold hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{article.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(article.date)}
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/news/${article.slug}`}>Read More →</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Articles */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {selectedCategory !== "all" ? `${categories.find(c => c.toLowerCase() === selectedCategory)} Articles` : "All Articles"}
            </h2>
            {regularArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <Link to={`/news/${article.slug}`}>
                      <div className="aspect-video bg-muted">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <Link to={`/news/${article.slug}`}>
                        <h3 className="text-lg font-bold hover:text-accent transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </Link>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(article.date)}
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link to={`/news/${article.slug}`}>Read Article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>

          {/* Newsletter Signup CTA */}
          <Card className="mt-16 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <Newspaper className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest stories, impact updates, and
                opportunities to get involved directly in your inbox.
              </p>
              <Button asChild size="lg">
                <Link to="/contact#newsletter">Subscribe to Newsletter</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
