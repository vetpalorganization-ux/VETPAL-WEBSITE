import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
  className?: string;
  iconClassName?: string;
  children?: ReactNode;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  link,
  className,
  iconClassName,
  children,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group',
        className
      )}
    >
      <div
        className={cn(
          'w-14 h-14 rounded-lg bg-gradient-ocean flex items-center justify-center mb-4 shadow-accent group-hover:scale-110 transition-transform duration-300',
          iconClassName
        )}
      >
        <Icon className="w-7 h-7 text-accent" />
      </div>

      <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {children}

      {link && (
        <Button
          variant="link"
          asChild
          className="p-0 h-auto text-accent hover:text-accent/80"
        >
          <Link to={link.href}>
            {link.text} →
          </Link>
        </Button>
      )}
    </div>
  );
}
