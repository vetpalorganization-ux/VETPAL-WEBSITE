import { Layout } from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is VETPAL?',
        a: 'VETPAL (Veterans Empowered To Protect Aquatic Life) is a nonprofit organization that connects veterans with marine conservation opportunities. We provide training, resources, and support to help veterans transition into meaningful environmental careers while healing through nature-based therapy.',
      },
      {
        q: 'Who can participate in VETPAL programs?',
        a: 'Our programs are open to all veterans of the U.S. Armed Forces, regardless of branch, discharge status, or service era. We welcome veterans from all backgrounds and experience levels.',
      },
      {
        q: 'Are VETPAL programs free for veterans?',
        a: 'Yes! All of our core programs, including training, certification preparation, and conservation projects, are provided at no cost to participating veterans. This is made possible through donations and grants.',
      },
    ],
  },
  {
    category: 'Programs',
    questions: [
      {
        q: 'What types of training do you offer?',
        a: 'We offer professional diving certification, marine biology training, coastal ecosystem management, underwater photography, coral restoration techniques, and marine wildlife monitoring. All training is hands-on and led by experienced professionals.',
      },
      {
        q: 'How long do your programs last?',
        a: 'Program lengths vary. Our intensive diving certification course runs 4-6 weeks, while ongoing conservation projects offer flexible scheduling. Veterans can participate as their schedule allows.',
      },
      {
        q: 'Do I need prior experience?',
        a: 'No prior experience is necessary! We provide comprehensive training from the ground up. However, basic swimming ability is required for diving programs.',
      },
    ],
  },
  {
    category: 'Getting Involved',
    questions: [
      {
        q: 'How do I sign up as a veteran?',
        a: 'Click the "Create Account" button, select "Veteran" as your role, and complete the registration. Our team will contact you within 48 hours to discuss program options.',
      },
      {
        q: 'Can non-veterans volunteer?',
        a: 'Absolutely! We welcome volunteers to support our programs, assist with events, and help with conservation projects. Create an account and select "Volunteer" to get started.',
      },
      {
        q: 'How can I donate?',
        a: 'You can make a one-time or recurring donation through our secure donation page. All donations are tax-deductible and directly support veteran programs and marine conservation efforts.',
      },
    ],
  },
  {
    category: 'Impact & Results',
    questions: [
      {
        q: 'What impact has VETPAL made?',
        a: 'Since our founding, we\'ve trained over 500 veterans, planted 50,000+ coral fragments, removed 100+ tons of ocean plastic, and helped 200+ veterans transition into marine conservation careers.',
      },
      {
        q: 'Where do you operate?',
        a: 'We have active projects in Florida, California, Hawaii, and the Gulf Coast, with expansion plans to additional coastal regions.',
      },
      {
        q: 'How is my donation used?',
        a: 'Over 85% of donations go directly to program delivery. This includes training costs, equipment, transportation, and veteran support services. View our annual report for detailed financial information.',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Find answers to common questions about our programs, volunteer opportunities, and impact.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold">
                  {index + 1}
                </span>
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`${index}-${qIndex}`}
                    className="glass-card px-6 rounded-lg border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
