import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { PageHeader } from "@/components/admin/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Pencil, Trash2, MapPin } from "lucide-react";
import { format, isPast } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string;
  time: string | null;
  location: string | null;
  created_at: string;
}

export default function AdminEvents() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const { data: events, isLoading } = useQuery({
    queryKey: ["admin-events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      return data as Event[];
    },
  });

  const upcomingEvents = events?.filter((e) => !isPast(new Date(e.date)));
  const pastEvents = events?.filter((e) => isPast(new Date(e.date)));

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from("events").insert({
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time || null,
        location: data.location,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      toast({ title: "Event created successfully" });
      resetForm();
    },
    onError: (error) => {
      toast({
        title: "Error creating event",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const { error } = await supabase
        .from("events")
        .update({
          title: data.title,
          description: data.description,
          date: data.date,
          time: data.time || null,
          location: data.location,
        })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      toast({ title: "Event updated successfully" });
      resetForm();
    },
    onError: (error) => {
      toast({
        title: "Error updating event",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("events").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      toast({ title: "Event deleted" });
    },
    onError: (error) => {
      toast({
        title: "Error deleting event",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
    });
    setEditingEvent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description || "",
      date: event.date,
      time: event.time || "",
      location: event.location || "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEvent) {
      updateMutation.mutate({ id: editingEvent.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const EventCard = ({ event }: { event: Event }) => (
    <div className="bg-card border rounded-lg p-6 hover:shadow-card-hover transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{event.title}</h3>
          </div>
          {event.description && (
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {event.description}
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              📅 {format(new Date(event.date), "MMM d, yyyy")}
              {event.time && ` at ${event.time}`}
            </span>
            {event.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {event.location}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleEdit(event)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (confirm("Delete this event?")) {
                deleteMutation.mutate(event.id);
              }
            }}
          >
            <Trash2 className="w-4 h-4 text-destructive" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
      <PageHeader
        title="Events"
        description="Manage events and gatherings"
        actions={
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingEvent ? "Edit Event" : "Create Event"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location / Venue</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={createMutation.isPending || updateMutation.isPending}
                  >
                    {editingEvent ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        }
      />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">
            Upcoming ({upcomingEvents?.length ?? 0})
          </TabsTrigger>
          <TabsTrigger value="past">Past ({pastEvents?.length ?? 0})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {isLoading ? (
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card border rounded-lg p-6 animate-pulse"
                >
                  <div className="h-6 bg-muted rounded w-1/3 mb-4" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : upcomingEvents?.length === 0 ? (
            <div className="text-center py-12 bg-card border rounded-lg">
              <p className="text-muted-foreground">No upcoming events</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {upcomingEvents?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastEvents?.length === 0 ? (
            <div className="text-center py-12 bg-card border rounded-lg">
              <p className="text-muted-foreground">No past events</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {pastEvents?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
