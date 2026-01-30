import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Status =
  | "draft"
  | "active"
  | "completed"
  | "published"
  | "cancelled"
  | "pending"
  | "succeeded"
  | "failed"
  | "refunded"
  | "new"
  | "reviewing"
  | "interviewed"
  | "accepted"
  | "rejected";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<
  Status,
  { label: string; variant: "default" | "secondary" | "destructive" | "outline" }
> = {
  draft: { label: "Draft", variant: "secondary" },
  active: { label: "Active", variant: "default" },
  completed: { label: "Completed", variant: "outline" },
  published: { label: "Published", variant: "default" },
  cancelled: { label: "Cancelled", variant: "destructive" },
  pending: { label: "Pending", variant: "secondary" },
  succeeded: { label: "Succeeded", variant: "default" },
  failed: { label: "Failed", variant: "destructive" },
  refunded: { label: "Refunded", variant: "outline" },
  new: { label: "New", variant: "default" },
  reviewing: { label: "Reviewing", variant: "secondary" },
  interviewed: { label: "Interviewed", variant: "outline" },
  accepted: { label: "Accepted", variant: "default" },
  rejected: { label: "Rejected", variant: "destructive" },
};

const statusColors: Record<Status, string> = {
  draft: "bg-muted text-muted-foreground",
  active: "bg-success/15 text-success border-success/30",
  completed: "bg-primary/15 text-primary border-primary/30",
  published: "bg-success/15 text-success border-success/30",
  cancelled: "bg-destructive/15 text-destructive border-destructive/30",
  pending: "bg-warning/15 text-warning border-warning/30",
  succeeded: "bg-success/15 text-success border-success/30",
  failed: "bg-destructive/15 text-destructive border-destructive/30",
  refunded: "bg-muted text-muted-foreground",
  new: "bg-accent/15 text-accent border-accent/30",
  reviewing: "bg-warning/15 text-warning border-warning/30",
  interviewed: "bg-primary/15 text-primary border-primary/30",
  accepted: "bg-success/15 text-success border-success/30",
  rejected: "bg-destructive/15 text-destructive border-destructive/30",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status] || { label: status, variant: "outline" as const };
  const colorClass = statusColors[status] || "";

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium border",
        colorClass,
        className
      )}
    >
      {config.label}
    </Badge>
  );
}
