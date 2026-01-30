import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const openings = [
  {
    title: "Program Manager, Marine Conservation",
    location: "San Diego, CA (Hybrid)",
    type: "Full-time",
    team: "Programs",
    summary:
      "Lead veteran conservation cohorts, partner with local agencies, and drive field projects across coastal sites.",
  },
  {
    title: "Dive Safety Officer",
    location: "Florida Keys, FL (On-site)",
    type: "Full-time",
    team: "Operations",
    summary:
      "Oversee dive training, safety protocols, and equipment readiness for veteran dive teams and partner projects.",
  },
  {
    title: "Community Partnerships Lead",
    location: "Remote (US-based)",
    type: "Full-time",
    team: "Partnerships",
    summary:
      "Grow relationships with conservation orgs, universities, and sponsors to expand mission impact and placements.",
  },
  {
    title: "Grants & Impact Reporting Specialist",
    location: "Remote (US-based)",
    type: "Part-time",
    team: "Development",
    summary:
      "Own grant writing, reporting, and impact storytelling to fund veteran training and conservation programs.",
  },
];

const benefits = [
  "Mission-first culture serving veterans and our oceans",
  "Healthcare, PTO, and professional development budget",
  "Hybrid and remote-friendly roles where possible",
  "Field days with conservation teams and partners",
  "Inclusive team with peer mentorship",
];

const steps = [
  "Apply online with your resume and a short note on why VETPAL",
  "Screen with our people team",
  "Panel interview with role leadership",
  "Offer and onboarding with mission immersion",
];

export default function Careers() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                Join Our Mission
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Careers at VETPAL
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Help veterans build meaningful careers while protecting aquatic life. Bring your expertise to a team that pairs purpose with impact.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 space-y-12">
          <section className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Open Roles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {openings.map((role) => (
                  <Card key={role.title} className="border-border/60">
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <Badge variant="outline">{role.team}</Badge>
                        <Badge>{role.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {role.team}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {role.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{role.summary}</p>
                      <div className="flex gap-3">
                        <Button asChild variant="accent">
                          <Link to="/contact">Apply Now</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link to="/contact">Ask a Question</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Why VETPAL</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Hiring Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {steps.map((step, idx) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-semibold">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground/80 mt-2">
                    We value veterans and allies alike. If you’re passionate about aquatic conservation and mission-driven work, we want to hear from you.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Don’t See Your Role?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    We’re always looking for talented people who believe in the mission. Tell us how you’d like to contribute.
                  </p>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/contact">Send Your Resume</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
