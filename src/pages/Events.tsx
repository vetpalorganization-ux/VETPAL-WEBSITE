import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, MapPin, Users, Clock, Filter, CalendarDays } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Events() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    dietary: "",
    message: "",
  });

  const categories = ["All", "Beach Cleanup", "Fundraiser", "Training", "Community Outreach", "Educational"];

  const events = [
    {
      id: "1",
      title: "Annual Gala: Oceans of Opportunity",
      date: "2025-02-14",
      time: "6:00 PM - 10:00 PM",
      location: "San Diego Marina Convention Center",
      category: "Fundraiser",
      image: "/placeholder.svg",
      description: "Join us for an evening of inspiration, impact stories, and celebration. Our annual gala brings together supporters, veterans, and conservation leaders for dinner, live auction, and program updates.",
      spots: 50,
      totalSpots: 200,
      price: "$150 per person",
      featured: true,
      rsvpRequired: true,
    },
    {
      id: "2",
      title: "Beach Cleanup: Mission Bay",
      date: "2025-01-18",
      time: "8:00 AM - 12:00 PM",
      location: "Mission Bay Park, San Diego, CA",
      category: "Beach Cleanup",
      image: "/placeholder.svg",
      description: "Volunteer with our veteran teams to remove marine debris from Mission Bay. All supplies provided. Family-friendly event suitable for ages 12+.",
      spots: 35,
      totalSpots: 50,
      price: "Free",
      featured: true,
      rsvpRequired: true,
    },
    {
      id: "3",
      title: "Dive Training: Open Water Certification",
      date: "2025-01-25",
      time: "9:00 AM - 5:00 PM",
      location: "La Jolla Cove, San Diego, CA",
      category: "Training",
      image: "/placeholder.svg",
      description: "Weekend dive certification course for veterans interested in joining our marine conservation programs. Prerequisites: completed online coursework.",
      spots: 3,
      totalSpots: 12,
      price: "Free for eligible veterans",
      featured: false,
      rsvpRequired: true,
    },
    {
      id: "4",
      title: "Community Talk: Veterans & Ocean Conservation",
      date: "2025-02-05",
      time: "7:00 PM - 8:30 PM",
      location: "San Diego Central Library",
      category: "Community Outreach",
      image: "/placeholder.svg",
      description: "Hear from VETPAL veterans about their conservation work and the connection between military service and environmental stewardship. Q&A to follow.",
      spots: 75,
      totalSpots: 100,
      price: "Free",
      featured: false,
      rsvpRequired: false,
    },
    {
      id: "5",
      title: "Coral Restoration Workshop",
      date: "2025-02-20",
      time: "10:00 AM - 2:00 PM",
      location: "Marine Science Education Center, Key Largo, FL",
      category: "Educational",
      image: "/placeholder.svg",
      description: "Learn about coral biology, reef restoration techniques, and VETPAL's work in the Florida Keys. Includes tour of coral nursery and hands-on activities.",
      spots: 18,
      totalSpots: 25,
      price: "$25 per person",
      featured: false,
      rsvpRequired: true,
    },
    {
      id: "6",
      title: "Beach Cleanup: Outer Banks",
      date: "2025-03-10",
      time: "9:00 AM - 1:00 PM",
      location: "Cape Hatteras National Seashore, NC",
      category: "Beach Cleanup",
      image: "/placeholder.svg",
      description: "Join veteran volunteers for a coastal cleanup along the Outer Banks. Help protect sea turtle nesting habitat and marine ecosystems.",
      spots: 40,
      totalSpots: 60,
      price: "Free",
      featured: true,
      rsvpRequired: true,
    },
    {
      id: "7",
      title: "Veteran Peer Support Meetup",
      date: "2025-01-22",
      time: "6:00 PM - 8:00 PM",
      location: "VETPAL HQ, San Diego, CA",
      category: "Community Outreach",
      image: "/placeholder.svg",
      description: "Monthly meetup for VETPAL veterans and alumni. Informal gathering with pizza, updates, and peer support. All veterans welcome.",
      spots: 15,
      totalSpots: 30,
      price: "Free",
      featured: false,
      rsvpRequired: false,
    },
    {
      id: "8",
      title: "Marine Biology 101 for Veterans",
      date: "2025-02-28",
      time: "6:00 PM - 9:00 PM",
      location: "Online (Zoom)",
      category: "Educational",
      image: "/placeholder.svg",
      description: "Introduction to marine science for veterans considering careers in conservation. Three-week course meets Thursday evenings.",
      spots: 20,
      totalSpots: 30,
      price: "Free for veterans",
      featured: false,
      rsvpRequired: true,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" ||
      event.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesCategory;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const featuredEvents = filteredEvents.filter((event) => event.featured);
  const upcomingEvents = filteredEvents.filter((event) => !event.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, this would submit to an API
    toast({
      title: "RSVP Confirmed!",
      description: "You've successfully registered for this event. Check your email for confirmation and details.",
    });

    // Reset form
    setRsvpForm({
      name: "",
      email: "",
      phone: "",
      guests: "1",
      dietary: "",
      message: "",
    });
    setSelectedEvent(null);
  };

  const getSpotsColor = (spots: number, total: number) => {
    const ratio = spots / total;
    if (ratio > 0.5) return "text-success";
    if (ratio > 0.2) return "text-warning";
    return "text-danger";
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <div className="bg-primary text-white h-[520px] md:h-[750px] flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/images/beach-cleanup.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/55 to-slate-950/85" />
          </div>
          <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <CalendarDays className="h-16 w-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Upcoming Events
              </h1>
              <p className="text-xl text-white/80">
                Join us for beach cleanups, educational workshops, fundraising events, and community gatherings.
                All are welcome to participate and support our mission.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Filter */}
          <div className="mb-8 flex justify-center">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[300px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Featured Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-accent/20 hover:shadow-lg transition-shadow flex flex-col">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent text-white">
                        Featured
                      </Badge>
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{event.category}</Badge>
                        <span className="text-sm font-semibold text-accent">{event.price}</span>
                      </div>
                      <CardTitle className="text-xl mb-4">{event.title}</CardTitle>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <CalendarIcon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-foreground">{formatDate(event.date)}</div>
                            <div>{event.time}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <div>{event.location}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>

                      {event.rsvpRequired && (
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span className={getSpotsColor(event.spots, event.totalSpots)}>
                              {event.spots} spots left
                            </span>
                          </div>
                          <span className="text-muted-foreground">
                            of {event.totalSpots}
                          </span>
                        </div>
                      )}

                      <Dialog open={selectedEvent === event.id} onOpenChange={(open) => !open && setSelectedEvent(null)}>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full"
                            onClick={() => setSelectedEvent(event.id)}
                            disabled={event.rsvpRequired && event.spots === 0}
                          >
                            {event.rsvpRequired ? (event.spots === 0 ? "Event Full" : "RSVP Now") : "Learn More"}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{event.title}</DialogTitle>
                            <DialogDescription>{event.category}</DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />

                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="flex items-start gap-2">
                                <CalendarIcon className="h-4 w-4 mt-0.5 text-accent" />
                                <div>
                                  <div className="font-semibold">Date & Time</div>
                                  <div className="text-muted-foreground">{formatDate(event.date)}</div>
                                  <div className="text-muted-foreground">{event.time}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                                <div>
                                  <div className="font-semibold">Location</div>
                                  <div className="text-muted-foreground">{event.location}</div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">About This Event</h4>
                              <p className="text-muted-foreground">{event.description}</p>
                            </div>

                            {event.rsvpRequired && (
                              <>
                                <div className="p-4 bg-accent/10 rounded-lg">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Users className="h-5 w-5 text-accent" />
                                      <span className="font-semibold">
                                        <span className={getSpotsColor(event.spots, event.totalSpots)}>
                                          {event.spots} spots remaining
                                        </span>
                                        {" "}of {event.totalSpots}
                                      </span>
                                    </div>
                                    <span className="font-semibold text-accent">{event.price}</span>
                                  </div>
                                </div>

                                <form onSubmit={handleRSVP} className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label htmlFor="name">Full Name *</Label>
                                      <Input
                                        id="name"
                                        required
                                        value={rsvpForm.name}
                                        onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="email">Email *</Label>
                                      <Input
                                        id="email"
                                        type="email"
                                        required
                                        value={rsvpForm.email}
                                        onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                                      />
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label htmlFor="phone">Phone Number</Label>
                                      <Input
                                        id="phone"
                                        type="tel"
                                        value={rsvpForm.phone}
                                        onChange={(e) => setRsvpForm({ ...rsvpForm, phone: e.target.value })}
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="guests">Number of Guests *</Label>
                                      <Select
                                        value={rsvpForm.guests}
                                        onValueChange={(value) => setRsvpForm({ ...rsvpForm, guests: value })}
                                      >
                                        <SelectTrigger id="guests">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          {[1, 2, 3, 4, 5].map((num) => (
                                            <SelectItem key={num} value={num.toString()}>
                                              {num} {num === 1 ? "guest" : "guests"}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>

                                  <div>
                                    <Label htmlFor="dietary">Dietary Restrictions (if applicable)</Label>
                                    <Input
                                      id="dietary"
                                      placeholder="e.g., vegetarian, gluten-free, allergies"
                                      value={rsvpForm.dietary}
                                      onChange={(e) => setRsvpForm({ ...rsvpForm, dietary: e.target.value })}
                                    />
                                  </div>

                                  <div>
                                    <Label htmlFor="message">Additional Information or Questions</Label>
                                    <Textarea
                                      id="message"
                                      placeholder="Anything else we should know?"
                                      rows={3}
                                      value={rsvpForm.message}
                                      onChange={(e) => setRsvpForm({ ...rsvpForm, message: e.target.value })}
                                    />
                                  </div>

                                  <Button type="submit" className="w-full" size="lg">
                                    Confirm RSVP
                                  </Button>
                                </form>
                              </>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Upcoming Events */}
          <div>
            <h2 className="text-3xl font-bold mb-6">All Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3 aspect-video md:aspect-auto bg-muted">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{event.category}</Badge>
                              <span className="text-sm font-semibold text-accent">{event.price}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-start gap-2 text-sm">
                            <CalendarIcon className="h-4 w-4 mt-0.5 text-accent" />
                            <div>
                              <div className="font-medium">{formatDate(event.date)}</div>
                              <div className="text-muted-foreground">{event.time}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                            <div className="text-muted-foreground">{event.location}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          {event.rsvpRequired && (
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4" />
                              <span className={getSpotsColor(event.spots, event.totalSpots)}>
                                {event.spots} spots left
                              </span>
                            </div>
                          )}
                          <Dialog open={selectedEvent === event.id} onOpenChange={(open) => !open && setSelectedEvent(null)}>
                            <DialogTrigger asChild>
                              <Button
                                onClick={() => setSelectedEvent(event.id)}
                                disabled={event.rsvpRequired && event.spots === 0}
                              >
                                {event.rsvpRequired ? (event.spots === 0 ? "Event Full" : "RSVP Now") : "Learn More"}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                              {/* Same dialog content as featured events */}
                              <DialogHeader>
                                <DialogTitle className="text-2xl">{event.title}</DialogTitle>
                                <DialogDescription>{event.category}</DialogDescription>
                              </DialogHeader>

                              <div className="space-y-4">
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="w-full h-48 object-cover rounded-lg"
                                />

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-start gap-2">
                                    <CalendarIcon className="h-4 w-4 mt-0.5 text-accent" />
                                    <div>
                                      <div className="font-semibold">Date & Time</div>
                                      <div className="text-muted-foreground">{formatDate(event.date)}</div>
                                      <div className="text-muted-foreground">{event.time}</div>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                                    <div>
                                      <div className="font-semibold">Location</div>
                                      <div className="text-muted-foreground">{event.location}</div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">About This Event</h4>
                                  <p className="text-muted-foreground">{event.description}</p>
                                </div>

                                {event.rsvpRequired && (
                                  <>
                                    <div className="p-4 bg-accent/10 rounded-lg">
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <Users className="h-5 w-5 text-accent" />
                                          <span className="font-semibold">
                                            <span className={getSpotsColor(event.spots, event.totalSpots)}>
                                              {event.spots} spots remaining
                                            </span>
                                            {" "}of {event.totalSpots}
                                          </span>
                                        </div>
                                        <span className="font-semibold text-accent">{event.price}</span>
                                      </div>
                                    </div>

                                    <form onSubmit={handleRSVP} className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label htmlFor="name">Full Name *</Label>
                                          <Input
                                            id="name"
                                            required
                                            value={rsvpForm.name}
                                            onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                                          />
                                        </div>
                                        <div>
                                          <Label htmlFor="email">Email *</Label>
                                          <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={rsvpForm.email}
                                            onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                                          />
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label htmlFor="phone">Phone Number</Label>
                                          <Input
                                            id="phone"
                                            type="tel"
                                            value={rsvpForm.phone}
                                            onChange={(e) => setRsvpForm({ ...rsvpForm, phone: e.target.value })}
                                          />
                                        </div>
                                        <div>
                                          <Label htmlFor="guests">Number of Guests *</Label>
                                          <Select
                                            value={rsvpForm.guests}
                                            onValueChange={(value) => setRsvpForm({ ...rsvpForm, guests: value })}
                                          >
                                            <SelectTrigger id="guests">
                                              <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                              {[1, 2, 3, 4, 5].map((num) => (
                                                <SelectItem key={num} value={num.toString()}>
                                                  {num} {num === 1 ? "guest" : "guests"}
                                                </SelectItem>
                                              ))}
                                            </SelectContent>
                                          </Select>
                                        </div>
                                      </div>

                                      <div>
                                        <Label htmlFor="dietary">Dietary Restrictions (if applicable)</Label>
                                        <Input
                                          id="dietary"
                                          placeholder="e.g., vegetarian, gluten-free, allergies"
                                          value={rsvpForm.dietary}
                                          onChange={(e) => setRsvpForm({ ...rsvpForm, dietary: e.target.value })}
                                        />
                                      </div>

                                      <div>
                                        <Label htmlFor="message">Additional Information or Questions</Label>
                                        <Textarea
                                          id="message"
                                          placeholder="Anything else we should know?"
                                          rows={3}
                                          value={rsvpForm.message}
                                          onChange={(e) => setRsvpForm({ ...rsvpForm, message: e.target.value })}
                                        />
                                      </div>

                                      <Button type="submit" className="w-full" size="lg">
                                        Confirm RSVP
                                      </Button>
                                    </form>
                                  </>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filter or check back soon for new events.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory("all")}
                >
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
