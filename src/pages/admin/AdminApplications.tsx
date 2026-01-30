import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { PageHeader } from "@/components/admin/PageHeader";
import { DataTable } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Search, Eye, Mail, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role_applied: string;
  military_branch: string | null;
  years_served: string | null;
  resume_url: string | null;
  cover_letter: string | null;
  status: string | null;
  internal_notes: string | null;
  created_at: string;
}

export default function AdminApplications() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(
    null
  );
  const [internalNotes, setInternalNotes] = useState("");

  const { data: applications, isLoading } = useQuery({
    queryKey: ["admin-applications", statusFilter],
    queryFn: async () => {
      let query = supabase
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Application[];
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({
      id,
      status,
      notes,
    }: {
      id: string;
      status: string;
      notes?: string;
    }) => {
      const { error } = await supabase
        .from("applications")
        .update({
          status,
          internal_notes: notes,
          reviewed_at: new Date().toISOString(),
        })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-applications"] });
      toast({ title: "Application updated" });
    },
    onError: (error) => {
      toast({
        title: "Error updating application",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const filteredApplications = applications?.filter(
    (a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.role_applied.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewApplication = (app: Application) => {
    setSelectedApplication(app);
    setInternalNotes(app.internal_notes || "");
  };

  const handleUpdateStatus = (status: string) => {
    if (!selectedApplication) return;
    updateStatusMutation.mutate({
      id: selectedApplication.id,
      status,
      notes: internalNotes,
    });
    setSelectedApplication({
      ...selectedApplication,
      status,
      internal_notes: internalNotes,
    });
  };

  const columns = [
    {
      key: "name",
      header: "Applicant",
      render: (item: Application) => (
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.email}</p>
        </div>
      ),
    },
    {
      key: "role_applied",
      header: "Role",
      render: (item: Application) => (
        <span className="font-medium">{item.role_applied}</span>
      ),
    },
    {
      key: "military_branch",
      header: "Service",
      render: (item: Application) => item.military_branch || "-",
    },
    {
      key: "status",
      header: "Status",
      render: (item: Application) => (
        <StatusBadge
          status={
            (item.status as
              | "new"
              | "reviewing"
              | "interviewed"
              | "accepted"
              | "rejected") ?? "new"
          }
        />
      ),
    },
    {
      key: "created_at",
      header: "Applied",
      render: (item: Application) =>
        format(new Date(item.created_at), "MMM d, yyyy"),
    },
    {
      key: "actions",
      header: "",
      render: (item: Application) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleViewApplication(item)}
          >
            <Eye className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(`mailto:${item.email}`, "_blank")}
          >
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      ),
      className: "w-24",
    },
  ];

  const statusCounts = applications?.reduce(
    (acc, app) => {
      const status = app.status || "new";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <AdminLayout>
      <PageHeader
        title="Applications"
        description="Review and manage veteran job applications"
      />

      {/* Status summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
        {["new", "reviewing", "interviewed", "accepted", "rejected"].map(
          (status) => (
            <button
              key={status}
              onClick={() =>
                setStatusFilter(statusFilter === status ? "all" : status)
              }
              className={`p-3 rounded-lg border text-left transition-all ${
                statusFilter === status
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted/50"
              }`}
            >
              <p className="text-2xl font-bold">{statusCounts?.[status] || 0}</p>
              <p className="text-sm text-muted-foreground capitalize">{status}</p>
            </button>
          )
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or role..."
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
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="reviewing">Reviewing</SelectItem>
            <SelectItem value="interviewed">Interviewed</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={filteredApplications ?? []}
        isLoading={isLoading}
        emptyMessage="No applications found"
      />

      {/* Application Detail Dialog */}
      <Dialog
        open={!!selectedApplication}
        onOpenChange={(open) => !open && setSelectedApplication(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-6">
              {/* Applicant Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Name</Label>
                  <p className="font-medium">{selectedApplication.name}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Email</Label>
                  <p className="font-medium">{selectedApplication.email}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Phone</Label>
                  <p className="font-medium">
                    {selectedApplication.phone || "-"}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Applied</Label>
                  <p className="font-medium">
                    {format(
                      new Date(selectedApplication.created_at),
                      "MMM d, yyyy h:mm a"
                    )}
                  </p>
                </div>
              </div>

              {/* Role & Service */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Role Applied</Label>
                  <p className="font-medium">{selectedApplication.role_applied}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Military Branch</Label>
                  <p className="font-medium">
                    {selectedApplication.military_branch || "-"}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Years Served</Label>
                  <p className="font-medium">
                    {selectedApplication.years_served || "-"}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Current Status</Label>
                  <StatusBadge
                    status={
                      (selectedApplication.status as
                        | "new"
                        | "reviewing"
                        | "interviewed"
                        | "accepted"
                        | "rejected") ?? "new"
                    }
                  />
                </div>
              </div>

              {/* Resume */}
              {selectedApplication.resume_url && (
                <div>
                  <Label className="text-muted-foreground">Resume</Label>
                  <a
                    href={selectedApplication.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Resume
                  </a>
                </div>
              )}

              {/* Cover Letter */}
              {selectedApplication.cover_letter && (
                <div>
                  <Label className="text-muted-foreground">Cover Letter</Label>
                  <p className="whitespace-pre-wrap text-sm mt-1 bg-muted p-3 rounded-lg">
                    {selectedApplication.cover_letter}
                  </p>
                </div>
              )}

              {/* Internal Notes */}
              <div>
                <Label htmlFor="internal_notes">Internal Notes</Label>
                <Textarea
                  id="internal_notes"
                  value={internalNotes}
                  onChange={(e) => setInternalNotes(e.target.value)}
                  rows={3}
                  placeholder="Add private notes about this applicant..."
                  className="mt-1"
                />
              </div>

              {/* Status Actions */}
              <div className="flex flex-wrap gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleUpdateStatus("reviewing")}
                  disabled={selectedApplication.status === "reviewing"}
                >
                  Mark Reviewing
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleUpdateStatus("interviewed")}
                  disabled={selectedApplication.status === "interviewed"}
                >
                  Mark Interviewed
                </Button>
                <Button
                  size="sm"
                  className="bg-success hover:bg-success/90"
                  onClick={() => handleUpdateStatus("accepted")}
                  disabled={selectedApplication.status === "accepted"}
                >
                  Accept
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleUpdateStatus("rejected")}
                  disabled={selectedApplication.status === "rejected"}
                >
                  Reject
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
