import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { PageHeader } from "@/components/admin/PageHeader";
import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Download, Search, Eye, Heart } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface Donor {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  city: string | null;
  state: string | null;
  total_donated: number | null;
  donation_count: number | null;
  first_donation_at: string | null;
  last_donation_at: string | null;
  is_recurring_donor: boolean | null;
  created_at: string;
}

export default function AdminDonors() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);

  const { data: donors, isLoading } = useQuery({
    queryKey: ["admin-donors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("donors")
        .select("*")
        .order("total_donated", { ascending: false });

      if (error) throw error;
      return data as Donor[];
    },
  });

  // Fetch donations for selected donor
  const { data: donorDonations } = useQuery({
    queryKey: ["admin-donor-donations", selectedDonor?.id],
    queryFn: async () => {
      if (!selectedDonor) return [];
      const { data, error } = await supabase
        .from("donations")
        .select("*, campaigns(title)")
        .eq("donor_id", selectedDonor.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!selectedDonor,
  });

  const filteredDonors = donors?.filter(
    (d) =>
      d.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount / 100);
  };

  const handleExport = () => {
    if (!donors?.length) return;

    const headers = [
      "Name",
      "Email",
      "Phone",
      "City",
      "State",
      "Total Donated",
      "Donation Count",
      "First Donation",
      "Last Donation",
      "Recurring",
    ];
    const rows = donors.map((d) => [
      d.name || "",
      d.email,
      d.phone || "",
      d.city || "",
      d.state || "",
      ((d.total_donated ?? 0) / 100).toFixed(2),
      d.donation_count?.toString() || "0",
      d.first_donation_at
        ? format(new Date(d.first_donation_at), "yyyy-MM-dd")
        : "",
      d.last_donation_at
        ? format(new Date(d.last_donation_at), "yyyy-MM-dd")
        : "",
      d.is_recurring_donor ? "Yes" : "No",
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vetpal-donors-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Export Complete",
      description: `Exported ${donors.length} donors to CSV`,
    });
  };

  const totalLifetimeDonations =
    donors?.reduce((sum, d) => sum + (d.total_donated ?? 0), 0) ?? 0;
  const recurringDonors = donors?.filter((d) => d.is_recurring_donor).length ?? 0;

  const columns = [
    {
      key: "name",
      header: "Donor",
      render: (item: Donor) => (
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{item.name || "Anonymous"}</p>
            {item.is_recurring_donor && (
              <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                <Heart className="w-3 h-3 mr-1 fill-primary" />
                Recurring
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{item.email}</p>
        </div>
      ),
    },
    {
      key: "total_donated",
      header: "Total Given",
      render: (item: Donor) => (
        <span className="font-semibold text-success">
          {formatCurrency(item.total_donated ?? 0)}
        </span>
      ),
    },
    {
      key: "donation_count",
      header: "Donations",
      render: (item: Donor) => item.donation_count ?? 0,
    },
    {
      key: "location",
      header: "Location",
      render: (item: Donor) =>
        item.city && item.state ? `${item.city}, ${item.state}` : "-",
    },
    {
      key: "last_donation_at",
      header: "Last Donation",
      render: (item: Donor) =>
        item.last_donation_at
          ? format(new Date(item.last_donation_at), "MMM d, yyyy")
          : "-",
    },
    {
      key: "actions",
      header: "",
      render: (item: Donor) => (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSelectedDonor(item)}
        >
          <Eye className="w-4 h-4" />
        </Button>
      ),
      className: "w-12",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Donors"
        description={`${donors?.length ?? 0} donors · ${formatCurrency(totalLifetimeDonations)} lifetime · ${recurringDonors} recurring`}
        actions={
          <Button onClick={handleExport} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        }
      />

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredDonors ?? []}
        isLoading={isLoading}
        emptyMessage="No donors yet"
      />

      {/* Donor Detail Dialog */}
      <Dialog
        open={!!selectedDonor}
        onOpenChange={(open) => !open && setSelectedDonor(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Donor Profile</DialogTitle>
          </DialogHeader>
          {selectedDonor && (
            <div className="space-y-6">
              {/* Donor Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedDonor.name || "Anonymous Donor"}
                  </h3>
                  <p className="text-muted-foreground">{selectedDonor.email}</p>
                  {selectedDonor.phone && (
                    <p className="text-sm text-muted-foreground">
                      {selectedDonor.phone}
                    </p>
                  )}
                </div>
                {selectedDonor.is_recurring_donor && (
                  <Badge className="bg-primary/10 text-primary border-primary/30">
                    <Heart className="w-3 h-3 mr-1 fill-primary" />
                    Recurring Donor
                  </Badge>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-success">
                    {formatCurrency(selectedDonor.total_donated ?? 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Given</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">
                    {selectedDonor.donation_count ?? 0}
                  </p>
                  <p className="text-sm text-muted-foreground">Donations</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">
                    {selectedDonor.first_donation_at
                      ? format(
                          new Date(selectedDonor.first_donation_at),
                          "yyyy"
                        )
                      : "-"}
                  </p>
                  <p className="text-sm text-muted-foreground">Donor Since</p>
                </div>
              </div>

              {/* Location */}
              {(selectedDonor.city || selectedDonor.state) && (
                <div>
                  <Label className="text-muted-foreground">Location</Label>
                  <p>
                    {[selectedDonor.city, selectedDonor.state]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </div>
              )}

              {/* Donation History */}
              <div>
                <Label className="text-muted-foreground mb-3 block">
                  Donation History
                </Label>
                {donorDonations?.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No donation records found
                  </p>
                ) : (
                  <div className="space-y-2">
                    {donorDonations?.map((donation) => (
                      <div
                        key={donation.id}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">
                            {formatCurrency(donation.amount)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {(donation.campaigns as { title?: string })?.title ||
                              "General Fund"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">
                            {format(
                              new Date(donation.created_at),
                              "MMM d, yyyy"
                            )}
                          </p>
                          <Badge
                            variant="outline"
                            className={
                              donation.status === "succeeded"
                                ? "bg-success/10 text-success"
                                : ""
                            }
                          >
                            {donation.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
