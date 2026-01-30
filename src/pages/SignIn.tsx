import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const logoTheme = theme === 'dark' ? 'light' : 'dark';
  const logoBase = `/assets/branding/logos/${logoTheme}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        toast.error('Login failed', {
          description: error.message === 'Invalid login credentials' 
            ? 'Invalid email or password. Please try again.' 
            : error.message,
        });
      } else {
        toast.success('Welcome back!', {
          description: 'You have successfully signed in.',
        });
        navigate('/');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-12 flex-col justify-center">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center w-20 h-20 bg-teal-500 rounded-2xl mb-8">
            <img
              src={`${logoBase}/header.png`}
              alt="VETPAL – Veterans Empowered To Protect Aquatic Life"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to VETPAL
          </h1>

          {/* Description */}
          <p className="text-slate-300 mb-12 leading-relaxed">
            Join our community of veterans, volunteers, and donors dedicated to protecting aquatic life and empowering those who served.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-1">170+</div>
              <div className="text-sm text-slate-400">Veterans Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-1">300+</div>
              <div className="text-sm text-slate-400">Active Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-1">27+</div>
              <div className="text-sm text-slate-400">Conservation Sites</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-slate-950 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Toggle Buttons */}
          <div className="flex gap-2 mb-8">
            <Button
              variant="default"
              className="flex-1 bg-slate-800 text-white hover:bg-slate-700"
            >
              Sign In
            </Button>
            <Link to="/create-account" className="flex-1">
              <Button
                variant="ghost"
                className="w-full text-slate-400 hover:text-white hover:bg-slate-800"
              >
                Create Account
              </Button>
            </Link>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-slate-400">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-slate-300 mb-2 block">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="text-slate-300 mb-2 block">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-6 text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
