import { AdminLayout } from "@/components/admin/AdminLayout";
import { PageHeader } from "@/components/admin/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Mail, 
  Shield, 
  Building2,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function AdminSettings() {
  return (
    <AdminLayout>
      <PageHeader
        title="Settings"
        description="Manage your VETPAL admin dashboard settings"
      />

      <div className="grid gap-6">
        {/* Organization Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <CardTitle>Organization Information</CardTitle>
            </div>
            <CardDescription>
              Your nonprofit details for receipts and communications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Organization Name</Label>
                <Input value="VETPAL" disabled />
              </div>
              <div className="space-y-2">
                <Label>EIN (Tax ID)</Label>
                <Input placeholder="XX-XXXXXXX" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Input placeholder="Street address" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>City</Label>
                <Input placeholder="City" />
              </div>
              <div className="space-y-2">
                <Label>State</Label>
                <Input placeholder="State" />
              </div>
              <div className="space-y-2">
                <Label>ZIP</Label>
                <Input placeholder="ZIP Code" />
              </div>
            </div>
            <Button>Save Organization Info</Button>
          </CardContent>
        </Card>

        {/* Stripe Integration */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <CardTitle>Payment Processing</CardTitle>
              </div>
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                <CheckCircle className="w-3 h-3 mr-1" />
                Connected (Test Mode)
              </Badge>
            </div>
            <CardDescription>
              Stripe is connected and ready to accept donations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 dark:bg-green-500/10 rounded-lg p-4 border border-green-200 dark:border-green-500/20">
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Stripe is connected in <strong>Test Mode</strong>. Test donations will not process real payments.
                Switch to Live Mode in your .env file when ready for production.
              </p>
              <Button variant="outline" asChild>
                <a href="https://dashboard.stripe.com/test/payments" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Stripe Dashboard
                </a>
              </Button>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium">Donation Settings</h4>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable Recurring Donations</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow donors to set up monthly/annual contributions
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Cover Transaction Fees Option</Label>
                  <p className="text-sm text-muted-foreground">
                    Let donors opt-in to cover processing fees
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Configuration */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <CardTitle>Email Configuration</CardTitle>
              </div>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                <AlertCircle className="w-3 h-3 mr-1" />
                Not Configured
              </Badge>
            </div>
            <CardDescription>
              Configure email sending for receipts and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-3">
                Connect an email service (Resend recommended) to send donation receipts,
                application notifications, and other transactional emails.
              </p>
              <Button variant="outline">
                Configure Email Service
              </Button>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium">Email Templates</h4>
              <div className="grid gap-2">
                {[
                  "Donation Receipt",
                  "Recurring Donation Confirmation",
                  "Application Received",
                  "Application Status Update",
                  "Event Registration",
                ].map((template) => (
                  <div
                    key={template}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <span className="text-sm">{template}</span>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <CardTitle>Security & Access</CardTitle>
            </div>
            <CardDescription>
              Manage admin access and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Require 2FA for all admin accounts
                </p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h4 className="font-medium">Admin Users</h4>
              <p className="text-sm text-muted-foreground">
                Manage who has access to this admin dashboard. Admins must be assigned
                the 'admin' role in the database.
              </p>
              <Button variant="outline">Manage Admin Users</Button>
            </div>
          </CardContent>
        </Card>

        {/* Site Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Site Settings</CardTitle>
            <CardDescription>
              General website configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Temporarily disable public access to the website
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Accept Donations</Label>
                <p className="text-sm text-muted-foreground">
                  Enable or disable the donation functionality
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Accept Applications</Label>
                <p className="text-sm text-muted-foreground">
                  Allow new job applications to be submitted
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
