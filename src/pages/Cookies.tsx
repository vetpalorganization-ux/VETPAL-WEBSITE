import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Settings, BarChart, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Cookies() {
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  const handleSavePreferences = () => {
    // In a real implementation, this would save to localStorage and update cookie consent
    console.log("Saving cookie preferences:", preferences);
    alert("Your cookie preferences have been saved!");
  };

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const handleRejectAll = () => {
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ocean-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
            </div>
            <p className="text-xl text-primary-foreground/90">
              Learn how we use cookies and similar technologies to improve your experience.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last Updated: December 23, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Cookie Preferences Panel */}
          <Card className="border-accent/20 shadow-lg">
            <CardHeader className="bg-accent/5">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-accent" />
                Manage Your Cookie Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <p className="text-muted-foreground">
                Choose which types of cookies you want to allow. Essential cookies cannot be disabled as they are
                necessary for the website to function.
              </p>

              {/* Essential Cookies */}
              <div className="flex items-start justify-between space-x-4 p-4 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-accent" />
                    <Label htmlFor="essential" className="text-base font-semibold">
                      Essential Cookies
                    </Label>
                    <span className="text-xs bg-accent text-white px-2 py-1 rounded">Required</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies are necessary for the website to function and cannot be disabled. They include
                    session cookies, security cookies, and accessibility features.
                  </p>
                </div>
                <Switch id="essential" checked={true} disabled />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between space-x-4 p-4 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="h-5 w-5 text-accent" />
                    <Label htmlFor="analytics" className="text-base font-semibold cursor-pointer">
                      Analytics Cookies
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting and
                    reporting information anonymously. We use Google Analytics.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked })
                  }
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between space-x-4 p-4 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-accent" />
                    <Label htmlFor="marketing" className="text-base font-semibold cursor-pointer">
                      Marketing Cookies
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies track your activity across websites to deliver relevant advertisements and
                    measure campaign effectiveness.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked })
                  }
                />
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between space-x-4 p-4 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-5 w-5 text-accent" />
                    <Label htmlFor="functional" className="text-base font-semibold cursor-pointer">
                      Functional Cookies
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies enable enhanced functionality and personalization, such as remembering your
                    preferences and settings.
                  </p>
                </div>
                <Switch
                  id="functional"
                  checked={preferences.functional}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, functional: checked })
                  }
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button onClick={handleSavePreferences} className="flex-1 min-w-[200px]">
                  Save Preferences
                </Button>
                <Button onClick={handleAcceptAll} variant="outline" className="flex-1 min-w-[150px]">
                  Accept All
                </Button>
                <Button onClick={handleRejectAll} variant="ghost" className="flex-1 min-w-[150px]">
                  Reject Optional
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* What Are Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you
                visit a website. They are widely used to make websites work more efficiently and provide information to
                website owners.
              </p>
              <p className="text-muted-foreground">
                Cookies allow websites to remember your actions and preferences (such as login status, language, font size,
                and other display preferences) over a period of time, so you don't have to keep re-entering them whenever
                you return to the site or browse from one page to another.
              </p>
            </CardContent>
          </Card>

          {/* How We Use Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                VETPAL uses cookies for several purposes:
              </p>

              <div>
                <h3 className="font-semibold mb-2">Essential Cookies</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Maintain your login session when you access your portal</li>
                  <li>Remember items in your donation cart</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Enable basic website functionality</li>
                  <li>Store your cookie consent preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Track how visitors use our website</li>
                  <li>Measure website performance and identify issues</li>
                  <li>Understand which pages are most popular</li>
                  <li>Analyze user journeys and behavior patterns</li>
                  <li>Improve our content and user experience</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Display relevant advertisements on third-party websites</li>
                  <li>Measure the effectiveness of our campaigns</li>
                  <li>Limit how many times you see an advertisement</li>
                  <li>Understand which campaigns drive donations</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Functional Cookies</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Remember your language and region preferences</li>
                  <li>Personalize content based on your interests</li>
                  <li>Enable social media sharing features</li>
                  <li>Remember form inputs to save you time</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                In addition to our own cookies, we use cookies from trusted third-party services:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Google Analytics</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    We use Google Analytics to analyze website traffic and usage patterns.
                  </p>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    Google Privacy Policy →
                  </a>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Stripe</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Our payment processor uses cookies to detect fraud and ensure secure transactions.
                  </p>
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    Stripe Privacy Policy →
                  </a>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-1">Social Media Platforms</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Social media widgets (Facebook, Twitter, Instagram) may set cookies when you interact with them.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>How to Control Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You have several options to control and manage cookies:
              </p>

              <div>
                <h3 className="font-semibold mb-2">Browser Settings</h3>
                <p className="text-muted-foreground mb-2">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete cookies after each session</li>
                  <li>Accept cookies from specific websites only</li>
                </ul>
                <p className="text-muted-foreground mt-3 text-sm">
                  Note: Blocking all cookies may prevent some features of our website from functioning properly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Browser-Specific Instructions</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Opt-Out Tools</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                  <li>
                    <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Network Advertising Initiative Opt-Out
                    </a>
                  </li>
                  <li>
                    <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Digital Advertising Alliance Opt-Out
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Duration */}
          <Card>
            <CardHeader>
              <CardTitle>Cookie Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">Cookies may be session-based or persistent:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser. Used for
                  login sessions and shopping cart functionality.
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-24 months) or
                  until you delete them. Used to remember your preferences and analyze long-term usage patterns.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to This Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements.
                We will notify you of significant changes by posting the updated policy on this page with a new "Last Updated" date.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Questions About Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>VETPAL</strong></p>
                <p>Email: <a href="mailto:privacy@vetpal.org" className="text-accent hover:underline">privacy@vetpal.org</a></p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
