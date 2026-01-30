import { Link, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, ArrowRight, Share2 } from 'lucide-react';

export default function DonateSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <Layout>
      <section className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-scale-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-success/20">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
            Thank You for Your{' '}
            <span className="gradient-text">Generosity!</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 animate-fade-up delay-100">
            Your donation has been successfully processed. You'll receive a confirmation 
            email shortly with your tax-deductible receipt.
          </p>

          {/* Impact Message */}
          <div className="glass-card p-8 mb-8 animate-fade-up delay-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Your Impact
              </h2>
            </div>
            <p className="text-muted-foreground">
              Your contribution directly supports veteran programs and marine conservation efforts. 
              Together, we're healing heroes and protecting our oceans.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" asChild>
              <Link to="/">
                Return Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/events">
                <Share2 className="w-4 h-4" />
                Get Involved
              </Link>
            </Button>
          </div>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t border-border animate-fade-up delay-400">
            <p className="text-sm text-muted-foreground mb-4">
              Help spread the word about VETPAL
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=I just supported @VETPAL! Join me in supporting veterans and marine conservation.&url=${window.location.origin}`, '_blank')}
              >
                Share on X
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`, '_blank')}
              >
                Share on Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
