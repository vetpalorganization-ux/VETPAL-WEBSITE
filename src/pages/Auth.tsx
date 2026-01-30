import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Shield, Users, Heart, Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  roles: z.array(z.enum(['veteran', 'volunteer', 'donor'])).min(1, 'Please select at least one role'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme } = useTheme();
  const logoTheme = theme === 'dark' ? 'light' : 'dark';
  const logoBase = `/assets/branding/logos/${logoTheme}`;

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      roles: [],
    },
  });

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    const { error } = await signIn(data.email, data.password);
    setIsLoading(false);

    if (error) {
      toast({
        title: 'Login failed',
        description: error.message === 'Invalid login credentials' 
          ? 'Invalid email or password. Please try again.' 
          : error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
      });
      navigate('/');
    }
  };

  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    const { error } = await signUp(
      data.email,
      data.password,
      data.firstName,
      data.lastName,
      data.roles
    );
    setIsLoading(false);

    if (error) {
      let errorMessage = error.message;
      if (error.message.includes('already registered')) {
        errorMessage = 'This email is already registered. Please sign in instead.';
      }
      toast({
        title: 'Signup failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Account created!',
        description: 'Welcome to VETPAL. You are now signed in.',
      });
      navigate('/');
    }
  };

  const roleOptions = [
    { value: 'veteran' as const, label: 'Veteran', icon: Shield, description: 'Access veteran programs and services' },
    { value: 'volunteer' as const, label: 'Volunteer', icon: Users, description: 'Join conservation projects' },
    { value: 'donor' as const, label: 'Donor', icon: Heart, description: 'Support our mission' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ocean" />
        <div className="absolute inset-0 wave-pattern opacity-30" />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur flex items-center justify-center">
              <img
                src={`${logoBase}/header.png`}
                alt="VETPAL – Veterans Empowered To Protect Aquatic Life"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Welcome to VETPAL
          </h1>
          <p className="text-lg text-foreground/80 max-w-md">
            Join our community of veterans, volunteers, and donors dedicated to protecting aquatic life and empowering those who served.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">170+</div>
              <div className="text-sm text-foreground/60">Veterans Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">300+</div>
              <div className="text-sm text-foreground/60">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">27+</div>
              <div className="text-sm text-foreground/60">Conservation Sites</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={`${logoBase}/mobile.png`}
                alt="VETPAL – Veterans Empowered To Protect Aquatic Life"
                className="h-10 w-auto object-contain"
              />
              <span className="font-heading font-bold text-xl text-foreground">VETPAL</span>
            </Link>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 p-1 bg-muted rounded-xl mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                isLogin
                  ? 'bg-background text-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                !isLogin
                  ? 'bg-background text-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Create Account
            </button>
          </div>

          {isLogin ? (
            /* Login Form */
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground">Welcome back</h2>
                  <p className="text-muted-foreground mt-1">Sign in to your account</p>
                </div>

                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            {...field}
                            type="email"
                            placeholder="you@example.com"
                            className="pl-11"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="pl-11"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="accent"
                  className="w-full"
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
            </Form>
          ) : (
            /* Signup Form */
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-5">
                <div className="text-center mb-4">
                  <h2 className="font-heading text-2xl font-bold text-foreground">Create an account</h2>
                  <p className="text-muted-foreground mt-1">Join our community today</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={signupForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input {...field} placeholder="John" className="pl-11" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Doe" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input {...field} type="email" placeholder="you@example.com" className="pl-11" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={signupForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input {...field} type="password" placeholder="••••••" className="pl-11" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" placeholder="••••••" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={signupForm.control}
                  name="roles"
                  render={() => (
                    <FormItem>
                      <FormLabel>I am joining as (select all that apply)</FormLabel>
                      <div className="grid gap-3 mt-2">
                        {roleOptions.map((role) => (
                          <FormField
                            key={role.value}
                            control={signupForm.control}
                            name="roles"
                            render={({ field }) => (
                              <FormItem key={role.value}>
                                <div
                                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                                    field.value?.includes(role.value)
                                      ? 'border-accent bg-accent/10'
                                      : 'border-border hover:border-accent/50'
                                  }`}
                                  onClick={() => {
                                    const current = field.value || [];
                                    const updated = current.includes(role.value)
                                      ? current.filter((r) => r !== role.value)
                                      : [...current, role.value];
                                    field.onChange(updated);
                                  }}
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(role.value)}
                                      onCheckedChange={(checked) => {
                                        const current = field.value || [];
                                        const updated = checked
                                          ? [...current, role.value]
                                          : current.filter((r) => r !== role.value);
                                        field.onChange(updated);
                                      }}
                                    />
                                  </FormControl>
                                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                                    <role.icon className="w-5 h-5 text-accent" />
                                  </div>
                                  <div className="flex-1">
                                    <Label className="font-medium text-foreground cursor-pointer">
                                      {role.label}
                                    </Label>
                                    <p className="text-xs text-muted-foreground">{role.description}</p>
                                  </div>
                                </div>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="accent"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By creating an account, you agree to our{' '}
                  <Link to="/terms" className="text-accent hover:underline">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
