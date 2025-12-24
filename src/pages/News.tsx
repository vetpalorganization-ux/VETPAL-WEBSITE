import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredArticle = {
  id: 1,
  title: 'Veterans Lead Successful Coral Restoration in Florida Keys',
  excerpt: 'A team of 15 veteran divers completed the largest coral restoration project in VETPAL history, planting over 5,000 coral fragments across three reef systems.',
  date: '2024-12-15',
  readTime: '5 min read',
  category: 'Impact Stories',
  image: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?w=1200&auto=format&fit=crop',
  author: {
    name: 'Sarah Martinez',
    role: 'Communications Director',
  },
};

const articles = [
  {
    id: 2,
    title: 'New Partnership with National Marine Sanctuary',
    excerpt: 'VETPAL announces collaboration with NOAA to train veterans in marine sanctuary management and conservation.',
    date: '2024-12-10',
    readTime: '4 min read',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Veteran Training Program Reaches 500th Graduate',
    excerpt: 'Celebrating a major milestone as our marine conservation training program certifies its 500th veteran participant.',
    date: '2024-12-05',
    readTime: '3 min read',
    category: 'Programs',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Ocean Cleanup Initiative Removes 10 Tons of Plastic',
    excerpt: 'Veterans participating in our coastal cleanup program successfully remove 10 tons of plastic waste from Pacific beaches.',
    date: '2024-12-01',
    readTime: '6 min read',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Meet the Veterans: Stories from the Field',
    excerpt: 'Hear firsthand accounts from veterans who found purpose and healing through marine conservation work.',
    date: '2024-11-28',
    readTime: '7 min read',
    category: 'Veteran Stories',
    image: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Research Shows Benefits of Nature-Based Therapy',
    excerpt: 'New study highlights the mental health benefits of marine conservation work for veterans dealing with PTSD.',
    date: '2024-11-20',
    readTime: '5 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Upcoming Events: Winter Conservation Calendar',
    excerpt: 'Check out our lineup of winter conservation events, workshops, and volunteer opportunities.',
    date: '2024-11-15',
    readTime: '4 min read',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop',
  },
];

const categories = [
  'All Stories',
  'Impact Stories',
  'Partnerships',
  'Programs',
  'Conservation',
  'Veteran Stories',
  'Research',
  'Events',
];

const News = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            News & Stories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated on our conservation efforts, veteran success stories, and the latest developments in marine protection.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All Stories' ? 'accent' : 'outline'}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto bg-muted overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                    <Tag className="w-4 h-4" />
                    {featuredArticle.category}
                  </span>
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredArticle.date).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-ocean flex items-center justify-center text-accent font-semibold">
                      {featuredArticle.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{featuredArticle.author.name}</div>
                      <div className="text-sm text-muted-foreground">{featuredArticle.author.role}</div>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Button variant="accent" size="lg" className="w-fit">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
            Recent Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300"
              >
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Subscribe to our newsletter to get the latest stories, event updates, and conservation news delivered to your inbox.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/#newsletter">Subscribe Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default News;
