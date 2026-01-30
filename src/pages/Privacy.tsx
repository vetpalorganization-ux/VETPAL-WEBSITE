import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Mail, UserCheck, Database, Globe, FileText } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-primary-foreground/90">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last Updated: December 23, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                VETPAL (Veterans Empowered To Protect Aquatic Life) ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                vetpal.org (the "Site") and use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By using our Site or services, you agree to the collection and use of
                information in accordance with this policy. If you do not agree with this policy, please do not use our Site.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-accent" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Personal Information You Provide</h3>
                <p className="text-muted-foreground mb-2">We may collect the following personal information that you voluntarily provide:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Veteran status, branch of service, and service dates (for veteran applications)</li>
                  <li>Payment information processed through Stripe (we do not store credit card details)</li>
                  <li>Volunteer interests, skills, and availability</li>
                  <li>Employment history and references (for staff applications)</li>
                  <li>Documents you upload (resumes, DD214, waivers, etc.)</li>
                  <li>Communication preferences and newsletter subscriptions</li>
                  <li>Messages and inquiries you send through our contact forms</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-2">When you visit our Site, we automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited, time spent on pages, and click data</li>
                  <li>Referring website and search terms</li>
                  <li>Geographic location (city/state level)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Information from Third Parties</h3>
                <p className="text-muted-foreground mb-2">We may receive information from:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Payment processors (Stripe) to confirm transactions</li>
                  <li>Social media platforms if you interact with our content</li>
                  <li>Public databases to verify veteran status when necessary</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-accent" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>To Provide Services:</strong> Process applications, manage volunteer activities, coordinate events, and deliver programs</li>
                <li><strong>To Process Donations:</strong> Accept and process charitable contributions, issue tax receipts, and manage recurring donations</li>
                <li><strong>To Communicate:</strong> Send confirmations, updates, newsletters, and respond to inquiries</li>
                <li><strong>To Improve Our Site:</strong> Analyze usage patterns, conduct research, and enhance user experience</li>
                <li><strong>To Ensure Security:</strong> Protect against fraud, unauthorized access, and other security threats</li>
                <li><strong>To Comply with Legal Obligations:</strong> Meet reporting requirements for nonprofit organizations and tax purposes</li>
                <li><strong>To Send Marketing:</strong> Share stories, campaign updates, and fundraising appeals (you may opt out anytime)</li>
                <li><strong>To Manage Portal Access:</strong> Provide veterans, volunteers, and donors with personalized dashboards</li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Share Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                How We Share Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> Third parties that help us operate (payment processing, email delivery, hosting, analytics)</li>
                <li><strong>Partner Organizations:</strong> Conservation groups and veteran service organizations we collaborate with (with your consent)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of assets</li>
                <li><strong>With Your Consent:</strong> When you authorize us to share information for specific purposes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-accent" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server infrastructure and firewalls</li>
                <li>Regular security audits and vulnerability testing</li>
                <li>Access controls and employee training</li>
                <li>Encrypted storage for sensitive documents</li>
              </ul>
              <p className="text-muted-foreground">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information,
                we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights and Choices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-accent" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails using the link in each message</li>
                <li><strong>Restrict Processing:</strong> Request that we limit how we use your information</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@vetpal.org" className="text-accent hover:underline">privacy@vetpal.org</a>
              </p>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your experience. See our{" "}
                <a href="/cookies" className="text-accent hover:underline">Cookie Policy</a> for detailed information about:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Types of cookies we use (essential, analytics, marketing)</li>
                <li>How to manage cookie preferences</li>
                <li>Third-party cookies from partners</li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our Site is not intended for individuals under 18 years of age. We do not knowingly collect personal information
                from children. If you are a parent or guardian and believe your child has provided us with personal information,
                please contact us immediately so we can delete it.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Provide our services and fulfill the purposes described in this policy</li>
                <li>Comply with legal, tax, and accounting obligations (typically 7 years for donation records)</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                When information is no longer needed, we securely delete or anonymize it.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these sites.
                We encourage you to review their privacy policies before providing any personal information.
              </p>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of residence.
                These countries may have different data protection laws. We ensure appropriate safeguards are in place to
                protect your information in accordance with this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Changes to This Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new
                policy on this page and updating the "Last Updated" date. Your continued use of our Site after changes are posted
                constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>VETPAL</strong></p>
                <p>Email: <a href="mailto:privacy@vetpal.org" className="text-accent hover:underline">privacy@vetpal.org</a></p>
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
