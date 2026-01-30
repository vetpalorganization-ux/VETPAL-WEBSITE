import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { PageHeader } from "@/components/admin/PageHeader";
import { DataTable } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Search, Mail } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

export default function AdminDonations() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const { data: donations, isLoading } = useQuery({
    queryKey: ["admin-donations", statusFilter],
    queryFn: async () => {
      let query = supabase
        .from("donations")
        .select("*, campaigns(title)")
        .order("created_at", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const filteredDonations = donations?.filter(
    (d) =>
      d.donor_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.donor_email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100);
  };

  const handleExport = () => {
    if (!donations?.length) return;

    const headers = ["Date", "Donor Name", "Email", "Amount", "Campaign", "Status"];
    const rows = donations.map((d) => [
      format(new Date(d.created_at), "yyyy-MM-dd HH:mm"),
      d.donor_name || "Anonymous",
      d.donor_email,
      (d.amount / 100).toFixed(2),
      (d.campaigns as { title?: string })?.title || "-",
      d.status,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vetpal-donations-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Export Complete",
      description: `Exported ${donations.length} donations to CSV`,
    });
  };

  type DonationRow = {
    id: string;
    donor_name: string | null;
    donor_email: string;
    amount: number;
    campaigns: { title?: string } | null;
    status: string | null;
    created_at: string;
    is_recurring: boolean | null;
    receipt_sent: boolean | null;
  };

  const columns: { key: string; header: string; render?: (item: DonationRow) => React.ReactNode; className?: string }[] = [
    {
      key: "donor",
      header: "Donor",
      render: (item) => (
        <div>
          <p className="font-medium">{item.donor_name || "Anonymous"}</p>
          <p className="text-sm text-muted-foreground">{item.donor_email}</p>
          {item.is_recurring && (
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Recurring
            </span>
          )}
        </div>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      render: (item) => (
        <span className="font-semibold">{formatCurrency(item.amount)}</span>
      ),
    },
    {
      key: "campaign",
      header: "Campaign",
      render: (item) =>
        (item.campaigns as { title?: string })?.title || "-",
    },
    {
      key: "status",
      header: "Status",
      render: (item) => (
        <StatusBadge
          status={(item.status ?? "pending") as "pending" | "succeeded" | "failed" | "refunded"}
        />
      ),
    },
    {
      key: "created_at",
      header: "Date",
      render: (item) =>
        format(new Date(item.created_at), "MMM d, yyyy h:mm a"),
    },
    {
      key: "actions",
      header: "",
      render: (item) => (
        <Button
          variant="ghost"
          size="sm"
          disabled={item.receipt_sent ?? false}
          className="text-muted-foreground hover:text-primary"
        >
          <Mail className="w-4 h-4" />
        </Button>
      ),
      className: "w-12",
    },
  ];

  const totalAmount =
    filteredDonations
      ?.filter((d) => d.status === "succeeded")
      .reduce((sum, d) => sum + d.amount, 0) ?? 0;

  return (
    <AdminLayout>
      <PageHeader
        title="Donations"
        description={`Total: ${formatCurrency(totalAmount)} from ${filteredDonations?.length ?? 0} donations`}
        actions={
          <Button onClick={handleExport} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        }
      />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="succeeded">Succeeded</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={filteredDonations ?? []}
        isLoading={isLoading}
        emptyMessage="No donations found"
      />
    </AdminLayout>
  );
}
