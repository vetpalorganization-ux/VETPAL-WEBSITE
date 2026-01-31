import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { submitApplication } from '@/lib/applications';
import { Shield, Heart, ArrowLeft, Loader2 } from 'lucide-react';

const formSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  location: z.string().min(2, 'City and State required'),
  linkedin_url: z.string().url().optional().or(z.literal('')),
  veteran_status: z.string().min(1, 'Please select your veteran status'),
  cover_note: z.string().min(10, 'Please tell us a bit about yourself'),
  relocation: z.boolean().default(false),
  role_applied: z.string(),
});

export default function Apply() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate type parameter
  useEffect(() => {
    if (type !== 'veteran' && type !== 'volunteer') {
      navigate('/404');
    }
  }, [type, navigate]);

  const isVeteran = type === 'veteran';
  const title = isVeteran ? 'Veteran Program Application' : 'Volunteer Application';
  const subtitle = isVeteran
    ? 'Join our mission to protect aquatic life while building your career.'
    : 'Give your time and make a real impact on our oceans.';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      location: '',
      linkedin_url: '',
      veteran_status: isVeteran ? '' : 'Civilian',
      cover_note: '',
      relocation: false,
      role_applied: isVeteran ? 'Veteran Program Participant' : 'General Volunteer',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await submitApplication({
        ...values,
        role_applied: values.role_applied, // Ensure role is passed correctly
      });
      toast.success('Application submitted successfully! We will be in touch soon.');
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="relative h-[520px] md:h-[750px] flex items-center overflow-hidden text-white">
          <div className="absolute inset-0">
            <img
              src="/assets/images/river-cleanup.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85" />
          </div>

          <div className="container max-w-3xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              {isVeteran ? (
                <Shield className="w-4 h-4" />
              ) : (
                <Heart className="w-4 h-4" />
              )}
              {isVeteran ? 'For Veterans' : 'Get Involved'}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-white/80">{subtitle}</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-2xl mx-auto px-4">
            <Button
              variant="ghost"
              className="mb-8 pl-0 hover:pl-2 transition-all"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="glass-card p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Location</FormLabel>
                        <FormControl>
                          <Input placeholder="City, State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {isVeteran && (
                  <FormField
                    control={form.control}
                    name="veteran_status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Military Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Active Duty">Active Duty</SelectItem>
                            <SelectItem value="Veteran">Veteran</SelectItem>
                            <SelectItem value="Reservist">Reservist</SelectItem>
                            <SelectItem value="National Guard">National Guard</SelectItem>
                            <SelectItem value="Spouse/Dependent">
                              Spouse/Dependent
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="linkedin_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cover_note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {isVeteran
                          ? 'Why are you interested in this program?'
                          : 'Why do you want to volunteer with VETPAL?'}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a bit about your background and motivation..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isVeteran && (
                  <FormField
                    control={form.control}
                    name="relocation"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I am willing to relocate for this opportunity
                          </FormLabel>
                          <FormDescription>
                            Some positions may require relocation to coastal areas.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
