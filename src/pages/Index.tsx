import { Link } from "react-router-dom";
import { Calculator, FileText, BarChart3, FileCheck, DollarSign, IndianRupee, PiggyBank, TrendingUp, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#1E3A8A] text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Professional accountant working"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{opacity: 0.45}}
        />
        {/* Overlay (optional for extra contrast) */}
        <div className="absolute inset-0 bg-[#1E3A8A] opacity-70 z-10" />
        <div className="container-custom w-full py-10 md:py-0 relative z-20">
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-shadow mb-6">
              Professional Shared Services Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Expert business support to help you navigate financial, legal, and administrative challenges with confidence.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#1E3A8A] hover:bg-gray-100 button-pop font-semibold">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-[#1E3A8A] hover:bg-gray-100 button-pop font-semibold">
                <Link to="/services/tax-filing">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial and marketing services tailored to meet your personal and business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
              <ServiceCard
                title="Tax Filing"
                description="Expert income tax return filing for individuals and businesses, ensuring maximum deductions and compliance."
                icon={<FileText size={24} className="text-vibrant-purple" />}
                link="/services/tax-filing"
                className="colorful-card hover-lift"
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <ServiceCard
                title="Accounting"
                description="Complete bookkeeping and accounting services to keep your finances organized and up-to-date."
                icon={<Calculator size={24} className="text-vibrant-pink" />}
                link="/services/accounting"
                className="colorful-card hover-lift"
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <ServiceCard
                title="Advisory Services"
                description="Strategic financial guidance to help you make informed decisions for your business growth."
                icon={<BarChart3 size={24} className="text-vibrant-teal" />}
                link="/services/advisory"
                className="colorful-card hover-lift"
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
              <ServiceCard
                title="Registrations"
                description="Assistance with business registrations, GST/HST, and other regulatory requirements."
                icon={<FileCheck size={24} className="text-vibrant-yellow" />}
                link="/services/registrations"
                className="colorful-card hover-lift"
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.5s"}}>
              <ServiceCard
                title="Digital Marketing"
                description="Strategic digital marketing solutions to boost your online presence and drive business growth."
                icon={<Globe size={24} className="text-vibrant-purple" />}
                link="/services/digital-marketing"
                className="colorful-card hover-lift"
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.6s"}}>
              <ServiceCard
                title="SEO, SMO & Ads"
                description="Data-driven search optimization and advertising solutions to boost your visibility and drive qualified traffic."
                icon={<Search size={24} className="text-vibrant-pink" />}
                link="/services/seo-smo"
                className="colorful-card hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Teaser Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Financial Tools</h2>
              <p className="text-gray-600">
                Access our powerful financial calculators to help you estimate taxes, plan loan repayments, track savings growth, and project investment returns.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-vibrant-purple hover:bg-vibrant-purple/90 button-pop">
                  <Link to="/tools">Use Calculators</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block bubble">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-vibrant-purple" />
                    <h3 className="text-xl font-semibold">Tax Estimator</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-6 w-6 text-vibrant-teal" />
                    <h3 className="text-xl font-semibold">Loan Calculator</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <PiggyBank className="h-6 w-6 text-vibrant-pink" />
                    <h3 className="text-xl font-semibold">Savings Growth</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-vibrant-yellow" />
                    <h3 className="text-xl font-semibold">Investment Returns</h3>
                  </div>
                  <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Our tools give you quick insights to help with financial planning</p>
                    <div className="flex justify-end mt-3">
                      <Link to="/tools" className="text-vibrant-purple font-medium hover:underline">Try Now →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Financial planning session"
                className="rounded-lg shadow-md hover-lift bubble"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex gap-4 bounce-subtle">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-vibrant-purple/10 text-vibrant-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
                    <p className="text-gray-600">
                      Our team consists of certified chartered accountants with years of industry experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 bounce-subtle" style={{animationDelay: "0.2s"}}>
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-vibrant-pink/10 text-vibrant-pink">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
                    <p className="text-gray-600">
                      We prioritize meeting deadlines and providing prompt responses to your inquiries.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 bounce-subtle" style={{animationDelay: "0.4s"}}>
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-vibrant-teal/10 text-vibrant-teal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      We tailor our services to meet your specific needs and financial goals.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-4 bg-vibrant-purple hover:bg-vibrant-purple/90 button-pop">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
              <TestimonialCard
                quote="The team at Communiti Shared Services helped me save thousands on my taxes. Their expertise and attention to detail are unmatched."
                author="Sarah Johnson"
                position="Small Business Owner"
                company="Johnson Retail"
                className="colorful-card hover-lift"
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <TestimonialCard
                quote="I've been working with them for 5 years now. They've consistently provided excellent advisory services that have helped my business grow."
                author="Michael Chen"
                position="CEO"
                company="TechGrowth Solutions"
                className="colorful-card hover-lift"
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <TestimonialCard
                quote="Their registration services made starting my business so much easier. They handled all the paperwork and made sure everything was compliant."
                author="Emily Rodriguez"
                position="Founder"
                company="Creative Designs Co."
                className="colorful-card hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-purple text-white">
        <div className="container-custom text-center py-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Let us help you navigate your financial journey with confidence. Schedule a consultation today.
            </p>
            <Button asChild size="lg" className="bg-white text-vibrant-purple hover:bg-gray-100 button-pop">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
