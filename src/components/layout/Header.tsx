import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    children: [
      { name: 'Our Mission', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Impact Report', href: '/about#impact' },
    ]
  },
  { 
    name: 'Programs', 
    href: '/programs',
    children: [
      { name: 'Veterans Program', href: '/programs#veterans' },
      { name: 'Conservation Projects', href: '/programs#conservation' },
      { name: 'Training & Certification', href: '/programs#training' },
    ]
  },
  { name: 'Campaigns', href: '/campaigns' },
  { 
    name: 'Get Involved', 
    href: '/get-involved',
    children: [
      { name: 'Volunteer', href: '/get-involved#volunteer' },
      { name: 'Partner With Us', href: '/get-involved#partner' },
      { name: 'Corporate Sponsorship', href: '/get-involved#corporate' },
    ]
  },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-ocean flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold text-accent">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-foreground tracking-tight">
                VETPAL
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                Protecting Aquatic Life
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    location.pathname === item.href
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      activeDropdown === item.name && 'rotate-180'
                    )} />
                  )}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="glass-card p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="accent" size="default" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
                      location.pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button variant="accent" asChild className="w-full">
                  <Link to="/donate" className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
