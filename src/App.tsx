import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ScrollToTop } from "@/components/ScrollToTop";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import DonateSuccess from "./pages/DonateSuccess";
import Contact from "./pages/Contact";
import Campaigns from "./pages/Campaigns";
import CampaignDetail from "./pages/CampaignDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import DonorPrivacy from "./pages/DonorPrivacy";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

// Auth pages
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import Auth from "./pages/Auth";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Admin pages (old - token based)
import AdminLogin from "./pages/AdminLogin";
import AdminApplicationsOld from "./pages/AdminApplications";
import AdminApplicationDetail from "./pages/AdminApplicationDetail";

// Admin pages (new - Supabase auth based)
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDonations from "./pages/admin/AdminDonations";
import AdminCampaigns from "./pages/admin/AdminCampaigns";
import AdminNews from "./pages/admin/AdminNews";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminDonors from "./pages/admin/AdminDonors";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate/success" element={<DonateSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/:slug" element={<CampaignDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/donor-privacy" element={<DonorPrivacy />} />
            <Route path="/executive-summary" element={<ExecutiveSummary />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/apply/:type" element={<Apply />} />

            {/* User auth pages */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/auth" element={<Auth />} />

            {/* Admin auth pages */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />

            {/* Legacy admin routes (token-based - keeping for backwards compatibility) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/applications/legacy" element={<AdminApplicationsOld />} />
            <Route path="/admin/applications/:id" element={<AdminApplicationDetail />} />

            {/* Protected admin routes (Supabase auth based) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/donations"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDonations />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/campaigns"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminCampaigns />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/news"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminNews />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/events"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminEvents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/applications"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminApplications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/donors"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDonors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminSettings />
                </ProtectedRoute>
              }
            />

            {/* 404 - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
