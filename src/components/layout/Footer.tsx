import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  Heart,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';

const footerLinks = {
  organization: [
    { name: 'About Us', href: '/about' },
    { name: 'Executive Summary', href: '/executive-summary' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Impact Report', href: '/about#impact' },
    { name: 'Financials', href: '/about#financials' },
    { name: 'Careers', href: '/careers' },
  ],
  programs: [
    { name: 'Veterans Program', href: '/programs#veterans' },
    { name: 'Conservation Projects', href: '/programs#conservation' },
    { name: 'Training', href: '/programs#training' },
    { name: 'Events', href: '/events' },
    { name: 'Campaigns', href: '/campaigns' },
  ],
  getInvolved: [
    { name: 'Volunteer', href: '/get-involved#volunteer' },
    { name: 'Donate', href: '/donate' },
    { name: 'Partner', href: '/get-involved#partner' },
    { name: 'Corporate Giving', href: '/get-involved#corporate' },
    { name: 'Fundraise', href: '/donate' },
  ],
  resources: [
    { name: 'News & Stories', href: '/news' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/vetpal' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/vetpal' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/vetpal' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/vetpal' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/vetpal' },
];

export function Footer() {
  const { theme } = useTheme();
  const logoBase = `/assets/branding/logos/${theme}`;

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden text-white">
            <div className="absolute inset-0">
              <img
                src="/assets/images/coral-reef.jpg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/85" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  Join Our Mission
                </h3>
                <p className="text-white/80 text-lg">
                  Get updates on our conservation efforts and veteran programs. 
                  Be the first to know about upcoming events and campaigns.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                    required
                  />
                  <Button variant="accent" size="lg" className="whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
                <p className="text-white/60 text-sm mt-3">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={`${logoBase}/header.png`}
                alt="VETPAL – Veterans Empowered To Protect Aquatic Life"
                className="h-12 w-auto object-contain drop-shadow-sm"
                loading="lazy"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering veterans through meaningful marine conservation work. 
              Together, we heal while protecting our oceans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@vetpal.org" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@vetpal.org</span>
              </a>
              <a href="tel:+12142058177" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>214-205-8177</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>VETPAL Corp<br />2931 Ridge Rd.<br />Suite 101 Room 713<br />Rockwall, TX 75032</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>&copy; {new Date().getFullYear()} VETPAL.</span>
              <span>All rights reserved.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="hidden sm:inline w-4 h-4 text-accent" />
              <span className="hidden sm:inline">for our oceans and veterans.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Use
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-accent transition-colors">
                Cookie Preferences
              </Link>
              <Link to="/donor-privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Donor Privacy
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              VETPAL is a 501(c)(3) nonprofit organization. EIN: 99-2108558. Donations are tax-deductible to the extent allowed by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
