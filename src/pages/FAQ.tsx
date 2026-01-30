import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Users, Heart, Anchor, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FAQ() {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          q: "What is VETPAL?",
          a: "VETPAL (Veterans Empowered To Protect Aquatic Life) is a 501(c)(3) nonprofit organization that empowers military veterans to continue their service through marine conservation. We provide training, employment, and volunteer opportunities in ocean and waterway protection, helping veterans find purpose, community, and healing while making a positive environmental impact."
        },
        {
          q: "When was VETPAL founded?",
          a: "VETPAL was founded in September 2024 by Army veterans who recognized the need for meaningful post-service opportunities that combine veteran skills with aquatic conservation."
        },
        {
          q: "Where are you located?",
          a: "Our headquarters is in San Diego, CA, but we operate conservation projects and programs in coastal communities across the United States, including California, Florida, North Carolina, Hawaii, and the Pacific Northwest."
        },
        {
          q: "How is VETPAL funded?",
          a: "VETPAL is funded through individual donations, corporate sponsorships, foundation grants, and government contracts for conservation services. We are a 501(c)(3) tax-exempt nonprofit organization, and all donations are tax-deductible to the extent allowed by law."
        },
        {
          q: "What is your EIN (Tax ID number)?",
          a: "Our EIN is XX-XXXXXXX. You can verify our nonprofit status on the IRS website or charity watchdog sites like Charity Navigator and GuideStar."
        }
      ]
    },
    {
      title: "For Veterans",
      icon: Shield,
      questions: [
        {
          q: "Who is eligible for VETPAL programs?",
          a: "All honorably discharged U.S. military veterans from any branch of service are eligible for our programs. We welcome veterans of all eras, from Vietnam to recent conflicts. Current active-duty service members transitioning to civilian life may also be eligible for certain programs."
        },
        {
          q: "Do I need prior conservation experience to join?",
          a: "No prior conservation experience is required. We provide comprehensive training in marine science, conservation techniques, diving certification (if applicable), and other necessary skills. Many veterans find that their military skills (leadership, teamwork, problem-solving) translate well to conservation work."
        },
        {
          q: "What types of programs do you offer for veterans?",
          a: "We offer several pathways: (1) Full-time employment in conservation roles, (2) Skills-based training and certification programs, (3) Volunteer opportunities for ongoing engagement, (4) Peer support and wellness programs. All programs include mental health resources and veteran community building."
        },
        {
          q: "Is there a cost to participate?",
          a: "No. All VETPAL programs are completely free for eligible veterans. We cover training costs, certifications, equipment, and provide stipends or wages for employment programs."
        },
        {
          q: "How do I apply to the veterans program?",
          a: "You can apply online through our Veterans Application page. The application takes about 15-20 minutes and asks about your service background, skills, interests, and availability. After submitting, our team will review your application and contact you within 2 weeks for next steps."
        },
        {
          q: "What happens after I submit my application?",
          a: "After submission, you'll receive a confirmation email. Our veteran services team reviews all applications within 2 weeks. If you're a good fit, we'll schedule a phone or video interview to discuss your interests, answer questions, and determine the best program for you. You'll then be matched with upcoming training cohorts or project opportunities."
        },
        {
          q: "Do you provide mental health support?",
          a: "Yes. All veterans in our programs have access to peer support groups, connections to licensed counselors specializing in veteran mental health, and trauma-informed care throughout all activities. We recognize that many veterans are healing from service-related challenges, and our programs are designed to support that journey."
        },
        {
          q: "Can I participate if I have a service-connected disability?",
          a: "Absolutely. We work with veterans with a wide range of abilities and make accommodations as needed. Many of our programs are specifically designed to be inclusive and accessible. During your interview, we'll discuss your needs and match you with appropriate opportunities."
        }
      ]
    },
    {
      title: "Volunteering",
      icon: Users,
      questions: [
        {
          q: "Do I need to be a veteran to volunteer?",
          a: "No. While our primary mission serves veterans, we welcome civilian volunteers who want to support marine conservation and work alongside veteran teams. Volunteers help with beach cleanups, citizen science, event support, administrative tasks, and more."
        },
        {
          q: "What volunteer opportunities are available?",
          a: "We offer various volunteer roles: (1) Conservation Volunteers for hands-on fieldwork (beach cleanups, habitat restoration, water quality monitoring), (2) Event Volunteers for fundraising events and community outreach, (3) Skilled Volunteers (photography, grant writing, web design, etc.), (4) Mentor Volunteers to support veteran participants."
        },
        {
          q: "How much time do I need to commit?",
          a: "It varies by role. One-time event volunteers can participate for just a few hours. Ongoing conservation volunteers typically commit to one shift per month (4 hours). Skilled volunteers and mentors may have more flexible arrangements. We work with your schedule."
        },
        {
          q: "Is there an age requirement to volunteer?",
          a: "Volunteers must be at least 18 years old for most roles. However, youth ages 14-17 can participate in supervised family volunteer events and certain beach cleanup activities with parental consent."
        },
        {
          q: "Do I need special skills or training?",
          a: "For most volunteer roles, no special skills are required. We provide orientation and training for all volunteers. For specialized roles (dive team, boat crew, skilled volunteers), relevant experience or certifications may be required."
        },
        {
          q: "How do I sign up to volunteer?",
          a: "Complete our online Volunteer Application. You'll receive a confirmation email and be added to our volunteer database. We'll then send you notifications about upcoming opportunities that match your interests and availability."
        }
      ]
    },
    {
      title: "Donations",
      icon: Heart,
      questions: [
        {
          q: "How do I make a donation?",
          a: "You can donate securely online through our Donate page using a credit card, debit card, or bank transfer via Stripe. We also accept donations by check (mail to: VETPAL, 123 Ocean Boulevard, Suite 100, San Diego, CA 92101) or by phone at (555) 123-4567."
        },
        {
          q: "Is my donation tax-deductible?",
          a: "Yes. VETPAL is a 501(c)(3) tax-exempt nonprofit organization. Your donation is tax-deductible to the extent allowed by law. You'll receive an email receipt immediately after your donation for your tax records."
        },
        {
          q: "Can I make a recurring monthly donation?",
          a: "Yes. On our donation page, you can choose to make your gift monthly. Recurring donors are vital to our sustainability and receive special updates on program impact. You can modify or cancel your recurring donation anytime through your donor portal."
        },
        {
          q: "How is my donation used?",
          a: "Approximately 80% of donations go directly to program services (veteran training, conservation projects, mental health support). The remaining 20% covers administrative costs and fundraising. We are committed to financial transparency and publish annual reports detailing our expenses."
        },
        {
          q: "Can I designate my donation to a specific program or campaign?",
          a: "Yes. When donating, you can choose to support a specific campaign (like our annual coral restoration project), a general program area (veteran services, conservation projects), or unrestricted funding where it's needed most."
        },
        {
          q: "Can I donate in honor or memory of someone?",
          a: "Yes. Our donation form includes an option to make a tribute gift in honor or memory of a loved one. We can send a notification card to the honoree or their family (without disclosing the donation amount) if you provide an address."
        },
        {
          q: "Do you accept non-monetary donations?",
          a: "Yes. We accept in-kind donations of conservation equipment, boats, dive gear, office supplies, and professional services. Please contact us at donations@vetpal.org before sending any physical items to ensure they meet our current needs."
        },
        {
          q: "Can I see how past donations were used?",
          a: "Absolutely. We publish annual reports and impact statements on our website showing how donations are used, stories of veterans helped, and conservation outcomes achieved. Donors can also log in to their donor portal to see their personal giving history."
        },
        {
          q: "Is my payment information secure?",
          a: "Yes. All online donations are processed through Stripe, a PCI-compliant payment processor used by millions of businesses worldwide. We never see or store your full credit card information. Our website uses SSL encryption to protect your data."
        }
      ]
    },
    {
      title: "Programs and Impact",
      icon: Anchor,
      questions: [
        {
          q: "What conservation projects does VETPAL work on?",
          a: "Our projects include: (1) Coral reef restoration and monitoring, (2) Beach and coastal cleanups, (3) Marine debris removal and ghost gear recovery, (4) Water quality testing and citizen science, (5) Habitat restoration (mangroves, seagrass, oyster reefs), (6) Sea turtle nest monitoring and protection, (7) Public education and outreach programs."
        },
        {
          q: "How many veterans have you served?",
          a: "Since our founding in September 2024, VETPAL has served 170+ veterans through our programs, providing volunteer opportunities and meaningful engagement. We've facilitated 90+ cleanup events across 7 waterways."
        },
        {
          q: "What has been your environmental impact?",
          a: "Our veteran and volunteer teams have removed 13,000+ lbs of debris from waterways across 7 locations through 90+ cleanup events, making measurable impact on aquatic ecosystems."
        },
        {
          q: "Do you partner with other organizations?",
          a: "Yes. We partner with NOAA, Coral Restoration Foundation, Ocean Conservancy, local universities, and other veteran service organizations. These partnerships expand our reach and provide veterans with diverse opportunities."
        },
        {
          q: "Can my organization partner with VETPAL?",
          a: "We welcome partnerships with conservation groups, veteran organizations, businesses, and government agencies. Please contact us through our Partner Inquiry form to discuss collaboration opportunities."
        },
        {
          q: "Do you offer corporate sponsorship opportunities?",
          a: "Yes. We offer Bronze, Silver, Gold, and Platinum sponsorship levels with benefits including logo placement, event recognition, volunteer team-building opportunities for employees, and impact reports. Contact us for our sponsorship packet."
        }
      ]
    },
    {
      title: "Contact and Support",
      icon: Mail,
      questions: [
        {
          q: "How can I contact VETPAL?",
          a: "You can reach us by email at info@vetpal.org, by phone at (555) 123-4567, or through our Contact form. Our office hours are Monday-Friday, 9am-5pm PST. For specific inquiries, use: veterans@vetpal.org (veterans programs), volunteer@vetpal.org (volunteering), donations@vetpal.org (donations)."
        },
        {
          q: "Do you have a newsletter?",
          a: "Yes. Our monthly newsletter includes impact stories, upcoming events, volunteer opportunities, and conservation news. You can sign up in the footer of our website or on our Contact page."
        },
        {
          q: "Are you on social media?",
          a: "Yes. Follow us on Facebook, Instagram, Twitter, and LinkedIn @VETPAL. We regularly share photos from our projects, veteran stories, and conservation tips."
        },
        {
          q: "Can VETPAL speak at our event or organization?",
          a: "We love sharing our mission and impact. We're available for speaking engagements at schools, veteran organizations, conservation groups, and corporate events. Please contact us at least 4 weeks in advance to check availability."
        },
        {
          q: "How can I stay updated on VETPAL's work?",
          a: "Subscribe to our newsletter, follow us on social media, and check our News page for the latest stories, impact reports, and program updates."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Find answers to common questions about VETPAL, our programs, and how you can get involved.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="overflow-hidden">
                <div className="bg-accent/10 border-b border-accent/20 p-6">
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-accent" />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem
                        key={questionIndex}
                        value={`item-${categoryIndex}-${questionIndex}`}
                      >
                        <AccordionTrigger className="text-left hover:text-accent">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}

            {/* Still Have Questions CTA */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team is here to help.
                  Reach out and we'll get back to you as soon as possible.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:info@vetpal.org">Email: info@vetpal.org</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:555-123-4567">Call: (555) 123-4567</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
