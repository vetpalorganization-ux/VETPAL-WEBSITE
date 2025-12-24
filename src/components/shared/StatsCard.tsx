import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function StatsCard({ value, label, icon: Icon, className }: StatsCardProps) {
  return (
    <div className={cn('text-center', className)}>
      {Icon && (
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent" />
          </div>
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
