/**
 * VETPAL About Page
 *
 * CRITICAL GUARDRAIL: Do not fabricate or infer historical facts for VETPAL.
 * All historical content must be explicitly approved. No AI-generated timelines,
 * milestones, dates, or historical narratives may be added without verification.
 */

import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Shield,
  Target,
  Users,
  Compass,
  ArrowRight,
  Globe,
  Anchor
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Service',
    description: 'We honor the spirit of service that defines our veteran community by extending that mission to protecting our oceans.',
  },
  {
    icon: Heart,
    title: 'Healing',
    description: 'We believe in the therapeutic power of nature and purpose-driven work for mental health and personal growth.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Every action we take is measured by its tangible positive effect on both veterans and marine ecosystems.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build lasting bonds between veterans, creating a supportive network that extends beyond our programs.',
  },
];

const team = [
  {
    name: 'Brenden Wing',
    role: 'Chief Executive Officer',
    branch: 'U.S. Army Veteran',
    bio: 'Founder and Army veteran dedicated to empowering fellow veterans through mission-driven environmental conservation and community impact.',
  },
  {
    name: 'Jim Hardying',
    role: 'Chief Financial Officer',
    branch: '',
    bio: 'Oversees financial strategy, compliance, and sustainability to ensure VETPAL\'s long-term mission success.',
  },
  {
    name: 'David Oakey',
    role: 'Chief Operating Officer',
    branch: '',
    bio: 'Leads operations, program execution, and organizational growth to support veterans and conservation initiatives.',
  },
  {
    name: 'Heather Wing',
    role: 'Director of Development',
    branch: '',
    bio: 'Drives fundraising, partnerships, and donor engagement to expand VETPAL\'s impact and reach.',
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ocean" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Compass className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">About VETPAL</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Where Veterans Find{' '}
              <span className="gradient-text">Purpose in Protection</span>
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We are a 501(c)(3) nonprofit uniting veterans in meaningful marine conservation work, 
              providing purpose, community, and healing through protecting our oceans.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Our Story
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Born from Service, Driven by Purpose
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                VETPAL was founded in September 2024 by a group of Army veterans who discovered the healing
                power of waterways conservation during their own transitions to civilian life.
              </p>
              <p>
                What began as a vision for meaningful environmental work quickly grew into action.
                We recognized how purpose-driven conservation work could help veterans build new skills,
                find purpose, and create community.
              </p>
              <p>
                Today, VETPAL operates across 7 waterways, providing volunteer opportunities
                and meaningful engagement while making measurable impact on aquatic ecosystems.
              </p>
            </div>

            <Button variant="accent" className="mt-8" asChild>
              <Link to="/programs">
                Explore Our Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-card border border-border/50 flex items-center justify-center">
              <div className="text-center p-8">
                <Globe className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">Veteran-led conservation in action</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[200px]">
              <div className="font-heading text-3xl font-bold text-accent mb-1">Est. 2024</div>
              <div className="text-sm text-muted-foreground">transforming lives and waterways</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="section-container bg-card">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Our Values
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Guiding Principles
          </h2>
          
          <p className="text-lg text-muted-foreground">
            These core values shape everything we do, from program design to daily operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-container bg-card">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Leadership Team
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Veterans Leading the Charge
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our leadership team is dedicated to empowering veterans through conservation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="glass-card p-6 text-center hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-accent">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium mb-1">{member.role}</p>
              {member.branch && <p className="text-muted-foreground text-xs mb-3">{member.branch}</p>}
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="section-container">
        <div className="glass-card p-8 md:p-12 bg-gradient-ocean">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact By The Numbers
            </h2>
            <p className="text-foreground/80">
              Measurable results for veterans and the environment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">170+</div>
              <div className="text-foreground/80">Veterans Served</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">18</div>
              <div className="text-foreground/80">Waterways Cleaned</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">13K+</div>
              <div className="text-foreground/80">Lbs Debris Removed</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">90+</div>
              <div className="text-foreground/80">Cleanup Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-card">
        <div className="text-center max-w-3xl mx-auto">
          <Anchor className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether as a veteran participant, volunteer, or donor, you can be part of this movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/get-involved">
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/donate">
                <Heart className="w-5 h-5" />
                Make a Donation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
