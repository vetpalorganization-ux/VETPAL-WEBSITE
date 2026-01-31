import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lock, Eye, UserX, Mail, Shield } from "lucide-react";

export default function DonorPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">Donor Privacy Policy</h1>
            </div>
            <p className="text-xl text-primary-foreground/90">
              Our commitment to protecting the privacy and trust of our generous donors.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last Updated: January 2026
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Our Commitment */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Our Commitment to Donor Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                At VETPAL (Veterans Empowered To Protect Aquatic Life), we are deeply committed to protecting the privacy
                of our donors. Your trust and generosity enable us to carry out our mission of empowering veterans through
                marine conservation. This Donor Privacy Policy outlines how we collect, use, protect, and share information
                about our donors.
              </p>
              <p className="text-muted-foreground">
                This policy applies to all donations made to VETPAL, whether online, by mail, by phone, or in person.
                It supplements our general <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-accent" />
                Information We Collect from Donors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">When you make a donation to VETPAL, we may collect:</p>

              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Full name</li>
                  <li>Billing address and shipping address (if applicable)</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Employer name (for matching gift purposes)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Donation Information</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Donation amount and date</li>
                  <li>Donation type (one-time or recurring)</li>
                  <li>Payment method (last 4 digits only, processed securely by Stripe)</li>
                  <li>Campaign or program designation</li>
                  <li>Tribute or memorial information (if provided)</li>
                  <li>Donor comments or special instructions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Communication Preferences</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Newsletter subscription status</li>
                  <li>Preferred communication methods</li>
                  <li>Frequency preferences for updates</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Anonymous Donations</h3>
                <p className="text-muted-foreground">
                  If you request that your donation be anonymous, we will not publicly disclose your name or donation amount.
                  However, we still need to collect your contact information for tax receipt purposes and IRS compliance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Consent & Legal Basis */}
          <Card>
            <CardHeader>
              <CardTitle>Consent & Legal Basis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                By donating or signing up for updates, you explicitly consent to VETPAL collecting and using your personal
                information for the purposes described in this policy. We also process donor information to fulfill legal
                obligations such as issuing tax receipts and maintaining required records.
              </p>
              <p className="text-muted-foreground">
                Marketing communications are sent only to donors and supporters who have opted in. You may update your
                communication preferences at any time.
              </p>
            </CardContent>
          </Card>

          {/* How We Use Donor Information */}
          <Card>
            <CardHeader>
              <CardTitle>How We Use Donor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We use donor information solely for the following purposes:</p>

              <div className="space-y-3">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Process Your Donation</h4>
                  <p className="text-sm text-muted-foreground">
                    To complete your transaction securely and efficiently through our payment processor, Stripe.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Issue Tax Receipts</h4>
                  <p className="text-sm text-muted-foreground">
                    To provide you with official donation receipts for tax purposes as required by the IRS. VETPAL is a
                    501(c)(3) nonprofit organization (EIN: 99-2108558).
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Acknowledge Your Gift</h4>
                  <p className="text-sm text-muted-foreground">
                    To send thank you messages and acknowledgments of your generous support.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Provide Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    To share impact stories, program updates, and information about how your donation is making a difference
                    (only if you have opted in to receive communications).
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Manage Recurring Donations</h4>
                  <p className="text-sm text-muted-foreground">
                    To process scheduled recurring donations and notify you of upcoming charges or payment issues.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Comply with Legal Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    To meet IRS reporting requirements, state charitable solicitation regulations, and other legal obligations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Donor Bill of Rights */}
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-accent" />
                Donor Bill of Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                VETPAL subscribes to the Donor Bill of Rights, created by leading philanthropic organizations. As our donor, you have the right to:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Be informed of our mission and how we use donated resources</li>
                <li>Be informed of the identity of our board of directors and expect them to exercise prudent judgment</li>
                <li>Have access to our most recent financial statements and annual reports</li>
                <li>Be assured your gifts will be used for the purposes for which they were given</li>
                <li>Receive appropriate acknowledgment and recognition</li>
                <li>Be assured that information about your donation is handled with confidentiality</li>
                <li>Expect that all relationships with individuals representing VETPAL will be professional</li>
                <li>Be informed whether those seeking donations are volunteers, employees, or hired solicitors</li>
                <li>Have the opportunity to have your name deleted from mailing lists we may share</li>
                <li>Feel free to ask questions when making a donation and receive prompt, truthful answers</li>
              </ol>
            </CardContent>
          </Card>

          {/* How We Protect Donor Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-accent" />
                How We Protect Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                We take the security of your personal and financial information seriously:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Secure Payment Processing:</strong> All online donations are processed through Stripe, a PCI-compliant
                  payment processor. We never see or store your full credit card information.
                </li>
                <li>
                  <strong>SSL Encryption:</strong> Our website uses SSL/TLS encryption to protect data transmitted between
                  your browser and our servers.
                </li>
                <li>
                  <strong>Limited Access:</strong> Only authorized staff members have access to donor information, and they
                  are trained in privacy and data security best practices.
                </li>
                <li>
                  <strong>Secure Storage:</strong> Donor records are stored in secure, encrypted databases with regular backups.
                </li>
                <li>
                  <strong>Regular Audits:</strong> We conduct regular security audits and updates to protect against
                  unauthorized access.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Sharing Donor Information */}
          <Card>
            <CardHeader>
              <CardTitle>When We Share Donor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-semibold">
                VETPAL does NOT sell, rent, or trade donor information to third parties.
              </p>

              <p className="text-muted-foreground">We may share limited donor information only in these circumstances:</p>

              <div className="space-y-3">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Service Providers</h4>
                  <p className="text-sm text-muted-foreground">
                    We share information with trusted service providers who help us process donations (Stripe), send
                    communications (email service providers), and maintain our database. These providers are contractually
                    obligated to keep your information confidential and use it only for the services they provide to us.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    All vendors handling donor data are contractually required to meet privacy and security standards,
                    and VETPAL conducts due diligence to verify these controls.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Legal Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    We may disclose donor information when required by law, such as in response to a valid court order or
                    subpoena, or to comply with IRS reporting requirements for large donations.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Public Recognition (With Your Consent)</h4>
                  <p className="text-sm text-muted-foreground">
                    We may publicly recognize donors who have given explicit permission. This may include listing names
                    in annual reports, on our website, or at events. You can request anonymity at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Donor Privacy Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserX className="h-5 w-5 text-accent" />
                Your Donor Privacy Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">As a VETPAL donor, you have the right to:</p>

              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of the donor information we have on file for you.</li>
                <li><strong>Correct:</strong> Request corrections to your donor record, including contact information and preferences.</li>
                <li><strong>Delete:</strong> Request deletion of your donor information, subject to legal retention requirements.</li>
                <li><strong>Restrict Processing:</strong> Ask us to limit how we use your information in certain circumstances.</li>
                <li><strong>Data Portability:</strong> Request a portable copy of your donor data.</li>
                <li><strong>Opt Out of Communications:</strong> Unsubscribe from fundraising appeals, newsletters, and other communications at any time.</li>
                <li><strong>Request Anonymity:</strong> Ask that your donation be kept anonymous and not publicly recognized.</li>
                <li><strong>Cancel Recurring Donations:</strong> Cancel recurring donations at any time through your donor portal or by contacting us.</li>
              </ul>

              <p className="text-muted-foreground mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:donor.privacy@vetpal.org" className="text-accent hover:underline">donor.privacy@vetpal.org</a>.
                Requests will be fulfilled within 30 days where applicable.
              </p>
            </CardContent>
          </Card>

          {/* Recurring Donations */}
          <Card>
            <CardHeader>
              <CardTitle>Recurring Donation Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                For donors who set up recurring monthly donations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Your payment information is securely stored by Stripe, our payment processor, not by VETPAL</li>
                <li>You will receive email notifications before each scheduled donation</li>
                <li>You can modify or cancel your recurring donation at any time through your donor portal</li>
                <li>We will notify you if a payment fails and give you the opportunity to update your payment method</li>
                <li>You can access your complete donation history and receipts through your donor portal</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tribute and Memorial Gifts */}
          <Card>
            <CardHeader>
              <CardTitle>Tribute and Memorial Gift Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                When you make a donation in honor or memory of someone:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>We will not share the donation amount with the honoree or their family unless you specifically request it</li>
                <li>If you provide a notification address, we will send an acknowledgment card to that person informing them of your gift (without disclosing the amount)</li>
                <li>Tribute information is kept confidential and used only for the purposes you specify</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>How Long We Keep Donor Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                We collect only the data necessary for the purposes described in this policy and regularly review and
                purge information that is no longer needed. We retain donor information according to the following guidelines:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Tax Records:</strong> Donation records are retained for at least 7 years as required by IRS regulations</li>
                <li><strong>Active Donors:</strong> Information for donors who have given within the past 5 years is kept in our active database</li>
                <li><strong>Lapsed Donors:</strong> Information for donors who have not given in 5+ years may be archived or deleted upon request</li>
                <li><strong>Recurring Donors:</strong> Records are maintained as long as the recurring donation is active, plus 7 years after cancellation</li>
              </ul>
            </CardContent>
          </Card>

          {/* Breach Notification */}
          <Card>
            <CardHeader>
              <CardTitle>Breach Notification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In the event of a data breach involving donor information, VETPAL will notify affected donors using email
                and/or other reasonable communication methods as soon as practicable, and in accordance with applicable
                legal requirements.
              </p>
            </CardContent>
          </Card>

          {/* Website Tracking & Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Website Tracking & Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Our website uses analytics and cookies to understand site performance and improve the donor experience.
                You can control cookie preferences through your browser settings and opt out of non-essential tracking where available.
              </p>
              <p className="text-muted-foreground">
                For more information, please review our{" "}
                <a href="/cookies" className="text-accent hover:underline">Cookie Policy</a>.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our donation platform is not intended for individuals under 18 years of age. We do not knowingly collect
                donation information from children. If a parent or guardian becomes aware that their child has made a
                donation without permission, please contact us immediately and we will void the transaction and delete
                the information.
              </p>
            </CardContent>
          </Card>

          {/* Changes to This Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Donor Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Donor Privacy Policy from time to time. We will notify donors of significant changes
                by posting the updated policy on our website and sending an email to active donors. The "Last Updated"
                date at the top of this page indicates when the policy was last revised.
              </p>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                Questions or Concerns?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We value your trust and take your privacy seriously. If you have any questions, concerns, or requests
                regarding your donor privacy, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Donor Privacy Contact</strong></p>
                <p>Email: <a href="mailto:donor.privacy@vetpal.org" className="text-accent hover:underline">donor.privacy@vetpal.org</a></p>
                <p>Phone: 214-205-8177</p>
                <p>Mail: VETPAL Corp, Attn: Donor Privacy, 2931 Ridge Rd., Suite 101 Room 713, Rockwall, TX 75032</p>
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Thank you for your generous support!</strong> Your donations make it possible for VETPAL to
                  empower veterans through marine conservation. We are honored by your trust and committed to being
                  excellent stewards of your gift.
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Last revised: January 2026. This policy is reviewed annually.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
