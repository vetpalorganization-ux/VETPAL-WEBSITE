import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Shield, UserX, Copyright } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
            </div>
            <p className="text-xl text-primary-foreground/90">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last Updated: December 23, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Agreement to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                These Terms of Use ("Terms") govern your access to and use of the VETPAL website located at vetpal.org
                (the "Site") and all services provided by VETPAL (Veterans Empowered To Protect Aquatic Life) ("VETPAL," "we," "our," or "us").
              </p>
              <p>
                By accessing or using our Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to
                these Terms, you must not access or use our Site.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
                Your continued use of the Site after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle>Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">To use our Site and services, you must:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete information when creating an account or submitting applications</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                By using our Site, you represent and warrant that you meet these eligibility requirements.
              </p>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">You agree to use our Site only for lawful purposes. You may NOT:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violate any local, state, national, or international law</li>
                <li>Infringe on intellectual property rights of VETPAL or others</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Harass, threaten, or harm others</li>
                <li>Submit false, misleading, or fraudulent information</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the Site or servers</li>
                <li>Use automated tools (bots, scrapers) without permission</li>
                <li>Collect user data without consent</li>
                <li>Use the Site for commercial solicitation without authorization</li>
                <li>Post or transmit obscene, defamatory, or offensive content</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card>
            <CardHeader>
              <CardTitle>User Accounts and Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Certain features of our Site require you to create an account. When creating an account:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>You must provide accurate, current, and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your password</li>
                <li>You are responsible for all activities under your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>You may not transfer your account to another person</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms or for any reason at our discretion.
              </p>
            </CardContent>
          </Card>

          {/* Donations and Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Donations and Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                VETPAL is a 501(c)(3) nonprofit organization. Donations made through our Site are:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Processed securely through Stripe, our payment processor</li>
                <li>Generally tax-deductible to the extent allowed by law (consult your tax advisor)</li>
                <li>Non-refundable except in cases of processing errors or duplicate charges</li>
                <li>Subject to minimum amounts as indicated on donation forms</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <strong>Recurring Donations:</strong> By setting up a recurring donation, you authorize us to charge your payment method
                on the specified schedule until you cancel. You may cancel recurring donations at any time through your donor portal
                or by contacting us at donations@vetpal.org.
              </p>
              <p className="text-muted-foreground">
                <strong>Campaign Donations:</strong> Donations designated for specific campaigns will be used for that purpose.
                If a campaign is fully funded or discontinued, we reserve the right to redirect funds to similar programs.
              </p>
              <p className="text-muted-foreground">
                You will receive a tax receipt for your donation via email. Please retain this for your records.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Copyright className="h-5 w-5 text-accent" />
                Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                All content on our Site, including but not limited to text, graphics, logos, images, videos, software, and
                design, is the property of VETPAL or our licensors and is protected by copyright, trademark, and other
                intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                You may view, download, and print content from our Site for personal, non-commercial use only. You may NOT:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Modify, reproduce, or publicly display our content without permission</li>
                <li>Use our trademarks or logos without written consent</li>
                <li>Create derivative works based on our content</li>
                <li>Use our content for commercial purposes without a license</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                If you are interested in using our content, please contact us at info@vetpal.org.
              </p>
            </CardContent>
          </Card>

          {/* User Content */}
          <Card>
            <CardHeader>
              <CardTitle>User-Generated Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                You may submit content through our Site, including applications, messages, photos, and testimonials ("User Content").
                By submitting User Content, you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Grant us a non-exclusive, royalty-free license to use, reproduce, and display your content</li>
                <li>Represent that you own or have rights to the content</li>
                <li>Warrant that your content does not violate any laws or third-party rights</li>
                <li>Agree that we may moderate, edit, or remove content at our discretion</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable.
              </p>
            </CardContent>
          </Card>

          {/* Applications and Programs */}
          <Card>
            <CardHeader>
              <CardTitle>Applications and Program Participation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Applications for veteran programs, volunteer opportunities, and staff positions are subject to review and approval.
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Submission of an application does not guarantee acceptance</li>
                <li>We may verify information provided in applications</li>
                <li>False or misleading information may result in disqualification</li>
                <li>Participation in programs requires adherence to program-specific rules and waivers</li>
                <li>We reserve the right to remove participants who violate program guidelines</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Disclaimers and Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">Disclaimers</h3>
                <p className="text-muted-foreground mb-2">
                  THE SITE AND ALL SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties regarding accuracy, reliability, or availability</li>
                  <li>Warranties that the Site will be uninterrupted or error-free</li>
                  <li>Warranties regarding security or freedom from viruses</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, VETPAL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                  DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                  <li>Your access to or use of (or inability to access or use) the Site</li>
                  <li>Any conduct or content of third parties on the Site</li>
                  <li>Unauthorized access, use, or alteration of your content</li>
                  <li>Any errors or omissions in content</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE PAST 12 MONTHS, OR $100,
                  WHICHEVER IS GREATER.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card>
            <CardHeader>
              <CardTitle>Indemnification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You agree to indemnify, defend, and hold harmless VETPAL, its officers, directors, employees, volunteers,
                and agents from any claims, liabilities, damages, losses, costs, or expenses (including attorney fees)
                arising from:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                <li>Your use of the Site or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another person or entity</li>
                <li>Your User Content</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Links and Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our Site may contain links to third-party websites or services that are not owned or controlled by VETPAL.
                We have no control over and assume no responsibility for the content, privacy policies, or practices of
                third-party websites. You acknowledge and agree that VETPAL is not liable for any damage or loss caused
                by your use of third-party websites or services.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserX className="h-5 w-5 text-danger" />
                Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate your access to the Site, with or without notice, for any reason,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Violation of these Terms</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>At our sole discretion</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Upon termination, your right to use the Site will immediately cease. Sections of these Terms that by their
                nature should survive termination shall survive, including disclaimers, indemnification, and limitations of liability.
              </p>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution and Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law principles.
              </p>
              <p className="text-muted-foreground">
                Any disputes arising out of or relating to these Terms or your use of the Site shall be resolved through
                binding arbitration in accordance with the rules of the American Arbitration Association, except that
                either party may seek injunctive relief in court if necessary.
              </p>
              <p className="text-muted-foreground">
                You agree to waive your right to a jury trial and to participate in class action lawsuits.
              </p>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card>
            <CardHeader>
              <CardTitle>Severability and Entire Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or
                eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
              <p className="text-muted-foreground">
                These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire
                agreement between you and VETPAL regarding your use of the Site.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>VETPAL</strong></p>
                <p>Email: <a href="mailto:legal@vetpal.org" className="text-accent hover:underline">legal@vetpal.org</a></p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Ocean Boulevard, Suite 100, San Diego, CA 92101</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
