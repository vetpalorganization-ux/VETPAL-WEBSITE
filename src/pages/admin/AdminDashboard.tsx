import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { PageHeader } from "@/components/admin/PageHeader";
import { StatsCard } from "@/components/admin/StatsCard";
import { DataTable } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import {
  DollarSign,
  Megaphone,
  Users,
  TrendingUp,
  Calendar,
  Heart,
} from "lucide-react";
import { format } from "date-fns";

export default function AdminDashboard() {
  // Fetch donations stats
  const { data: donationsData, isLoading: donationsLoading } = useQuery({
    queryKey: ["admin-donations-stats"],
    queryFn: async () => {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const startOfYear = new Date(now.getFullYear(), 0, 1);

      const { data: allDonations, error } = await supabase
        .from("donations")
        .select("amount, created_at, status")
        .eq("status", "succeeded");

      if (error) throw error;

      const total = allDonations?.reduce((sum, d) => sum + d.amount, 0) ?? 0;
      const monthlyTotal =
        allDonations
          ?.filter((d) => new Date(d.created_at) >= startOfMonth)
          .reduce((sum, d) => sum + d.amount, 0) ?? 0;
      const yearlyTotal =
        allDonations
          ?.filter((d) => new Date(d.created_at) >= startOfYear)
          .reduce((sum, d) => sum + d.amount, 0) ?? 0;

      return {
        total: total / 100,
        monthly: monthlyTotal / 100,
        yearly: yearlyTotal / 100,
        count: allDonations?.length ?? 0,
      };
    },
  });

  // Fetch campaigns stats
  const { data: campaignsData, isLoading: campaignsLoading } = useQuery({
    queryKey: ["admin-campaigns-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("campaigns")
        .select("id, status, current_amount, goal_amount");

      if (error) throw error;

      const active = data?.filter((c) => c.status === "active").length ?? 0;
      const totalRaised = data?.reduce((sum, c) => sum + (c.current_amount ?? 0), 0) ?? 0;

      return {
        total: data?.length ?? 0,
        active,
        totalRaised: totalRaised / 100,
      };
    },
  });

  // Fetch applications stats
  const { data: applicationsData, isLoading: applicationsLoading } = useQuery({
    queryKey: ["admin-applications-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("applications")
        .select("id, status");

      if (error) throw error;

      const newApps = data?.filter((a) => a.status === "new").length ?? 0;

      return {
        total: data?.length ?? 0,
        new: newApps,
      };
    },
  });

  // Fetch recent donations
  const { data: recentDonations, isLoading: recentLoading } = useQuery({
    queryKey: ["admin-recent-donations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("donations")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) throw error;
      return data;
    },
  });

  // Fetch upcoming events
  const { data: upcomingEvents, isLoading: eventsLoading } = useQuery({
    queryKey: ["admin-upcoming-events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .gte("date", new Date().toISOString().split("T")[0])
        .order("date", { ascending: true })
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  type DonationRow = {
    id: string;
    donor_name: string | null;
    donor_email: string;
    amount: number;
    status: string | null;
    created_at: string;
  };

  const donationColumns: { key: string; header: string; render?: (item: DonationRow) => React.ReactNode }[] = [
    {
      key: "donor_name",
      header: "Donor",
      render: (item) => (
        <div>
          <p className="font-medium">{item.donor_name || "Anonymous"}</p>
          <p className="text-sm text-muted-foreground">{item.donor_email}</p>
        </div>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      render: (item) => (
        <span className="font-semibold text-success">
          {formatCurrency(item.amount / 100)}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (item) => (
        <StatusBadge status={(item.status ?? "pending") as "pending" | "succeeded" | "failed" | "refunded"} />
      ),
    },
    {
      key: "created_at",
      header: "Date",
      render: (item) =>
        format(new Date(item.created_at), "MMM d, yyyy"),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of VETPAL's activity."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Monthly Donations"
          value={formatCurrency(donationsData?.monthly ?? 0)}
          subtitle={`${donationsData?.count ?? 0} donations total`}
          icon={DollarSign}
          variant="success"
        />
        <StatsCard
          title="All-Time Raised"
          value={formatCurrency(donationsData?.total ?? 0)}
          icon={TrendingUp}
          variant="primary"
        />
        <StatsCard
          title="Active Campaigns"
          value={campaignsData?.active ?? 0}
          subtitle={`${campaignsData?.total ?? 0} total campaigns`}
          icon={Megaphone}
          variant="warning"
        />
        <StatsCard
          title="New Applications"
          value={applicationsData?.new ?? 0}
          subtitle={`${applicationsData?.total ?? 0} total received`}
          icon={Users}
          variant="default"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Donations */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Donations</h2>
            <a
              href="/admin/donations"
              className="text-sm text-primary hover:underline"
            >
              View all →
            </a>
          </div>
          <DataTable
            columns={donationColumns}
            data={recentDonations ?? []}
            isLoading={recentLoading}
            emptyMessage="No donations yet"
          />
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
            <a
              href="/admin/events"
              className="text-sm text-primary hover:underline"
            >
              View all →
            </a>
          </div>
          <div className="space-y-3">
            {eventsLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : upcomingEvents?.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Calendar className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No upcoming events</p>
              </div>
            ) : (
              upcomingEvents?.map((event) => (
                <div
                  key={event.id}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-card-hover transition-shadow"
                >
                  <h3 className="font-medium text-card-foreground">{event.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {format(new Date(event.date), "MMM d, yyyy")}
                      {event.time && ` at ${event.time}`}
                    </span>
                  </div>
                  {event.location && (
                    <p className="text-sm text-muted-foreground mt-1 truncate">
                      📍 {event.location}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <a
                href="/admin/campaigns"
                className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Megaphone className="w-4 h-4 text-warning" />
                </div>
                <span className="text-sm font-medium">Create Campaign</span>
              </a>
              <a
                href="/admin/news"
                className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Post News Update</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
