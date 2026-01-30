import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import {
  Heart,
  ArrowRight,
  CheckCircle,
  Shield,
  Lock,
  Gift,
  Repeat,
  Users
} from 'lucide-react';

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactItems = [
  { amount: 25, impact: 'Provides dive gear for one beach cleanup' },
  { amount: 50, impact: 'Funds one veteran mental health session' },
  { amount: 100, impact: 'Covers certification materials for one veteran' },
  { amount: 250, impact: 'Sponsors a veteran for one month of the program' },
  { amount: 500, impact: 'Funds a full day conservation event' },
  { amount: 1000, impact: 'Provides complete PADI certification for a veteran' },
];

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [tributeType, setTributeType] = useState<'none' | 'honor' | 'memory'>('none');

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ocean" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Support Our Mission</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Donation{' '}
              <span className="gradient-text">Changes Lives</span>
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Every dollar directly supports veteran programs and marine conservation. 
              100% of donations go to our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Donation Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Make Your Gift
              </h2>

              {/* Donation Type Toggle */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setDonationType('once')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                    donationType === 'once'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Gift className="w-4 h-4 inline mr-2" />
                  One-Time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                    donationType === 'monthly'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Repeat className="w-4 h-4 inline mr-2" />
                  Monthly
                </button>
              </div>

              {donationType === 'monthly' && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Become a Sustaining Member</h4>
                      <p className="text-sm text-muted-foreground">
                        Monthly donors receive exclusive updates and invitations to special events.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Amount Selection */}
              <div className="mb-8">
                <Label className="text-foreground font-semibold mb-4 block">
                  Select Amount
                </Label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-4 px-6 rounded-lg font-heading font-bold text-xl transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-accent text-accent-foreground ring-2 ring-accent ring-offset-2 ring-offset-background'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-8 h-14 text-lg"
                  />
                </div>
              </div>

              {/* Tribute Options */}
              <div className="mb-8">
                <Label className="text-foreground font-semibold mb-4 block">
                  Make This a Tribute Gift (Optional)
                </Label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setTributeType('none')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      tributeType === 'none'
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    No Tribute
                  </button>
                  <button
                    onClick={() => setTributeType('honor')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      tributeType === 'honor'
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    In Honor Of
                  </button>
                  <button
                    onClick={() => setTributeType('memory')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      tributeType === 'memory'
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    In Memory Of
                  </button>
                </div>
                
                {tributeType !== 'none' && (
                  <div className="mt-4">
                    <Input
                      placeholder={`Name of person you're ${tributeType === 'honor' ? 'honoring' : 'remembering'}`}
                      className="h-12"
                    />
                  </div>
                )}
              </div>

              {/* Employer Matching */}
              <div className="mb-8 p-4 bg-muted/50 rounded-lg">
                <Label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-foreground">
                    My employer will match this donation
                  </span>
                </Label>
              </div>

              {/* Submit Button */}
              <a
                href={donationType === 'monthly'
                  ? 'https://buy.stripe.com/5kQaEYd5A1kIgFV7NdbAs02'
                  : 'https://donate.stripe.com/00w5kE1mS7J6dtJ1oPbAs01'}
                className={`inline-flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent hover:-translate-y-1 text-base px-8 py-6 rounded-xl font-semibold transition-all duration-300 ${
                  !finalAmount || finalAmount < 5 ? 'pointer-events-none opacity-50' : ''
                }`}
              >
                {donationType === 'monthly' ? 'Give' : 'Donate'} ${finalAmount || 0}{donationType === 'monthly' ? '/month' : ''}
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Security Notice */}
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>Secure payment powered by Stripe</span>
              </div>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Impact Card */}
            <div className="glass-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Your Impact
              </h3>
              <div className="space-y-4">
                {impactItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      finalAmount && finalAmount >= item.amount
                        ? 'bg-accent/10'
                        : 'opacity-50'
                    }`}
                  >
                    <div className="w-16 text-right font-heading font-bold text-accent">
                      ${item.amount}
                    </div>
                    <div className="flex-1 text-sm text-foreground">
                      {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="glass-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Your Trust Matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">501(c)(3) Nonprofit</h4>
                    <p className="text-xs text-muted-foreground">EIN: 12-3456789</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Tax Deductible</h4>
                    <p className="text-xs text-muted-foreground">Receipt sent automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Secure & Private</h4>
                    <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-card p-6 text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Questions about donating?
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact?topic=donation">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-container bg-card">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Other Ways to Give
          </h2>
          <p className="text-muted-foreground">
            Beyond online donations, there are many ways to support our mission.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center hover-lift">
            <h3 className="font-heading font-semibold text-foreground mb-2">Stock Gifts</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Donate appreciated securities and maximize your tax benefits.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact?topic=stock">Learn More</Link>
            </Button>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <h3 className="font-heading font-semibold text-foreground mb-2">Planned Giving</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Include VETPAL in your estate plans for lasting impact.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact?topic=planned">Learn More</Link>
            </Button>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <h3 className="font-heading font-semibold text-foreground mb-2">DAF Gifts</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recommend a grant from your donor-advised fund.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact?topic=daf">Learn More</Link>
            </Button>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <h3 className="font-heading font-semibold text-foreground mb-2">Fundraise</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start a peer-to-peer campaign for a special occasion.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/fundraise">Start Fundraising</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
