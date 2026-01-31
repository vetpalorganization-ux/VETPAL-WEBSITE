import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Heart,
  Building2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactTopics = [
  { id: 'general', label: 'General Inquiry', icon: MessageSquare },
  { id: 'volunteer', label: 'Volunteer Opportunities', icon: Users },
  { id: 'donation', label: 'Donation Questions', icon: Heart },
  { id: 'partnership', label: 'Partnership/Sponsorship', icon: Building2 },
  { id: 'media', label: 'Media/Press', icon: Mail },
];

const officeInfo = {
  address: '123 Ocean Drive, Suite 100\nSan Diego, CA 92101',
  phone: '(800) 555-1234',
  email: 'info@vetpal.org',
  hours: 'Monday - Friday: 9am - 5pm PST',
};

export default function ContactPage() {
  const { toast } = useToast();
  const [selectedTopic, setSelectedTopic] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 1-2 business days.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[520px] md:h-[750px] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/assets/images/flag.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">Contact Us</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have questions about our programs, want to partner with us, or just want to say hello? 
              We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {officeInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Phone</h4>
                    <a 
                      href={`tel:${officeInfo.phone.replace(/[^0-9]/g, '')}`}
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      {officeInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Email</h4>
                    <a 
                      href={`mailto:${officeInfo.email}`}
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      {officeInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      {officeInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a href="/faq" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  Frequently Asked Questions
                </a>
                <a href="/about" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  About VETPAL
                </a>
                <a href="/programs" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  Our Programs
                </a>
                <a href="/donate" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  Ways to Give
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              {/* Topic Selection */}
              <div className="mb-8">
                <Label className="text-foreground font-semibold mb-4 block">
                  What can we help you with?
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {contactTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedTopic === topic.id
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      <topic.icon className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-xs font-medium">{topic.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-foreground">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Company or organization name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    required
                    className="mt-1 rounded border-border"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to VETPAL storing my information and contacting me regarding my inquiry. 
                    View our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="section-container bg-card">
        <div className="glass-card p-8 md:p-12 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Visit Our Headquarters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our main office is located in beautiful San Diego, California. 
            We welcome visitors by appointment during business hours.
          </p>
          <div className="aspect-video max-w-4xl mx-auto bg-muted rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map coming soon</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
