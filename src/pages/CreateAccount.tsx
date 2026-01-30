import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User, Shield, Users, Heart, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

type Role = 'veteran' | 'volunteer' | 'donor' | null;

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const logoTheme = theme === 'dark' ? 'light' : 'dark';
  const logoBase = `/assets/branding/logos/${logoTheme}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!selectedRole) {
      toast.error('Please select a role');
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(
        email,
        password,
        firstName,
        lastName,
        [selectedRole]
      );

      if (error) {
        let errorMessage = error.message;
        if (error.message.includes('already registered')) {
          errorMessage = 'This email is already registered. Please sign in instead.';
        }
        toast.error('Signup failed', { description: errorMessage });
      } else {
        toast.success('Account created!', {
          description: 'Welcome to VETPAL. You are now signed in.',
        });
        navigate('/');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const roles = [
    {
      id: 'veteran' as Role,
      icon: Shield,
      title: 'Veteran',
      description: 'Access veteran programs and services',
    },
    {
      id: 'volunteer' as Role,
      icon: Users,
      title: 'Volunteer',
      description: 'Join conservation projects',
    },
    {
      id: 'donor' as Role,
      icon: Heart,
      title: 'Donor',
      description: 'Support our mission',
    },
  ];

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
              <div className="text-3xl font-bold text-teal-400 mb-1">500+</div>
              <div className="text-sm text-slate-400">Veterans Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-1">1,200+</div>
              <div className="text-sm text-slate-400">Active Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-1">50+</div>
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
            <Link to="/sign-in" className="flex-1">
              <Button
                variant="ghost"
                className="w-full text-slate-400 hover:text-white hover:bg-slate-800"
              >
                Sign In
              </Button>
            </Link>
            <Button
              variant="default"
              className="flex-1 bg-slate-800 text-white hover:bg-slate-700"
            >
              Create Account
            </Button>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Create an account</h2>
            <p className="text-slate-400">Join our community today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-slate-300 mb-2 block">
                  First Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="lastName" className="text-slate-300 mb-2 block">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

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

            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password" className="text-slate-300 mb-2 block">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-slate-300 mb-2 block">
                  Confirm
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <Label className="text-slate-300 mb-3 block">
                I am joining as (select all that apply)
              </Label>
              <div className="space-y-3">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      disabled={isLoading}
                      className={cn(
                        'w-full p-4 rounded-lg border-2 transition-all text-left',
                        'hover:border-teal-500/50',
                        isSelected
                          ? 'border-teal-500 bg-teal-500/10'
                          : 'border-slate-700 bg-slate-900',
                        isLoading && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            'p-2 rounded-lg',
                            isSelected ? 'bg-teal-500/20' : 'bg-slate-800'
                          )}
                        >
                          <Icon
                            className={cn(
                              'h-5 w-5',
                              isSelected ? 'text-teal-400' : 'text-slate-400'
                            )}
                          />
                        </div>
                        <div className="flex-1">
                          <div
                            className={cn(
                              'font-semibold mb-1',
                              isSelected ? 'text-teal-400' : 'text-white'
                            )}
                          >
                            {role.title}
                          </div>
                          <div className="text-sm text-slate-400">
                            {role.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-6 text-lg"
              disabled={!selectedRole || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>

            {/* Terms */}
            <p className="text-xs text-slate-500 text-center">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-teal-400 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-teal-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
