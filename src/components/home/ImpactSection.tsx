import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 170,
    suffix: '+',
    label: 'Veterans Served',
    description: 'Since our founding in September 2024',
  },
  {
    icon: MapPin,
    value: 7,
    suffix: '',
    label: 'Waterways Cleaned',
    description: 'Across the United States',
  },
  {
    icon: TrendingUp,
    value: 13000,
    suffix: '+',
    label: 'lbs of cleanup debris',
    description: 'Removed from our oceans',
    format: true,
  },
  {
    icon: Calendar,
    value: 90,
    suffix: '+',
    label: 'Cleanup events',
    description: 'Hosted in 2024 alone',
  },
];

function AnimatedCounter({ 
  value, 
  suffix, 
  format 
}: { 
  value: number; 
  suffix: string; 
  format?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const displayValue = format 
    ? count.toLocaleString() 
    : count.toString();

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-foreground">
      {displayValue}{suffix}
    </div>
  );
}

export function ImpactSection() {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-ocean opacity-50" />
      
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Our Impact
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Making Waves of{' '}
            <span className="gradient-text">Change</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Every statistic represents a veteran finding purpose, 
            a beach restored, and a community strengthened.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                format={stat.format}
              />
              
              <div className="font-heading font-semibold text-foreground mt-2 mb-1">
                {stat.label}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Quote */}
        <div className="mt-16 glass-card p-8 md:p-12 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground italic mb-6">
              "VETPAL gave me a reason to wake up every morning. The ocean saved my life, 
              and now I get to help protect it while surrounded by people who understand my journey."
            </p>
            <footer className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-bold text-accent">JM</span>
              </div>
              <div className="text-left">
                <cite className="font-heading font-semibold text-foreground not-italic">
                  James Mitchell
                </cite>
                <p className="text-sm text-muted-foreground">
                  U.S. Marine Corps Veteran, VETPAL Program Graduate
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
