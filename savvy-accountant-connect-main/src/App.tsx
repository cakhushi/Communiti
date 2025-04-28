import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import TaxFiling from "./pages/services/TaxFiling";
import Accounting from "./pages/services/Accounting";
import Advisory from "./pages/services/Advisory";
import Registrations from "./pages/services/Registrations";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SeoSmo from "./pages/services/SeoSmo";

// Tools Pages
import Tools from "./pages/tools";

// Blog Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Legal Pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Routes */}
          <Route path="/services/tax-filing" element={<TaxFiling />} />
          <Route path="/services/accounting" element={<Accounting />} />
          <Route path="/services/advisory" element={<Advisory />} />
          <Route path="/services/registrations" element={<Registrations />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo-smo" element={<SeoSmo />} />
          
          {/* Tools Routes */}
          <Route path="/tools" element={<Tools />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Legal Routes */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
