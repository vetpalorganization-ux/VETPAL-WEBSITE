import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lock, ShieldCheck, ArrowLeft, LifeBuoy } from 'lucide-react';
import { isAdminAuthenticated, setAdminToken, validateAdminToken } from '@/hooks/use-admin-auth';

export default function AdminLogin() {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  if (isAdminAuthenticated()) {
    const redirectTo = (location.state as { from?: string } | null)?.from || '/admin/applications';
    return <Navigate to={redirectTo} replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setError('Enter the admin access token.');
      return;
    }
    if (!validateAdminToken(token)) {
      setError('Invalid admin token.');
      return;
    }
    setAdminToken(token);
    navigate('/admin/applications', { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="absolute top-6 left-6">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to site
        </Button>
      </div>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-accent" />
          </div>
          <CardTitle className="text-2xl">Admin Access</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Enter the admin access token to manage applications.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-muted-foreground" />
                Admin Token
              </label>
              <Input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter admin token"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In to Admin
            </Button>
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="text-xs text-muted-foreground text-center space-y-1">
              <p>Set the token via environment variable `VITE_ADMIN_TOKEN`.</p>
              <div className="flex items-center justify-center gap-2">
                <LifeBuoy className="w-3 h-3" />
                <a
                  href="mailto:info@vetpal.org"
                  className="text-accent hover:underline"
                >
                  Lost access? Contact support
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
