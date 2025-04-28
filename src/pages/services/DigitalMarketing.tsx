import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, TrendingUp, Users } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-candy text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Digital Marketing</h1>
            <p className="text-lg text-gray-200">
              Strategic digital marketing solutions to boost your online presence and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Transform Your Digital Presence</h2>
              <p className="text-gray-600">
                At Communiti Shared Services, we deliver comprehensive digital marketing strategies that connect your brand with the right audience at the right time. Our data-driven approach ensures measurable results and maximum return on your marketing investment.
              </p>
              <p className="text-gray-600">
                Whether you're a startup looking to establish your online presence or an established business aiming to expand your digital footprint, our team of digital marketing experts will craft customized solutions to meet your specific goals.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start bounce-subtle">
                  <CheckCircle2 className="h-6 w-6 text-vibrant-purple mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Targeted Campaigns</h3>
                    <p className="text-gray-600">
                      Precision-targeted marketing campaigns that reach your ideal customers with personalized messaging.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bounce-subtle" style={{animationDelay: "0.2s"}}>
                  <CheckCircle2 className="h-6 w-6 text-vibrant-teal mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Data-Driven Strategy</h3>
                    <p className="text-gray-600">
                      Analytics-based approach with continuous optimization to maximize performance and ROI.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bounce-subtle" style={{animationDelay: "0.4s"}}>
                  <CheckCircle2 className="h-6 w-6 text-vibrant-pink mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Full-Service Solutions</h3>
                    <p className="text-gray-600">
                      Comprehensive digital marketing services from strategy development to execution and analysis.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-4 bg-vibrant-purple hover:bg-vibrant-purple/90 button-pop">
                <Link to="/contact">Get a Custom Strategy</Link>
              </Button>
            </div>
            
            <div className="animate-fade-in bubble">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital marketing services"
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Digital Marketing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored digital marketing solutions to help your business thrive online.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift colorful-card animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="w-12 h-12 bg-vibrant-purple/10 rounded-full flex items-center justify-center text-vibrant-purple mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Marketing</h3>
              <p className="text-gray-600 mb-4">
                Engaging content strategies that build authority and drive organic traffic to your business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  Strategic content planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  SEO-optimized blog articles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  Lead generation content
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  Performance tracking & analysis
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift colorful-card animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 bg-vibrant-teal/10 rounded-full flex items-center justify-center text-vibrant-teal mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Strategic social media management to build brand awareness and engage with your target audience.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Platform-specific strategies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Content creation & scheduling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Community management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Performance analytics
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift colorful-card animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="w-12 h-12 bg-vibrant-pink/10 rounded-full flex items-center justify-center text-vibrant-pink mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Targeted email campaigns that nurture leads and drive conversions for your business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  Audience segmentation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  Automated drip campaigns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  A/B testing optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  Conversion tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Digital Marketing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A strategic approach to deliver measurable results for your business.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center text-2xl font-bold bubble">
                  1
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Discovery & Analysis</h3>
                <p className="text-gray-600">
                  We begin by understanding your business goals, target audience, and current digital presence. Our team conducts a thorough analysis of your market, competitors, and existing marketing efforts.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white flex items-center justify-center text-2xl font-bold bubble">
                  2
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Strategy Development</h3>
                <p className="text-gray-600">
                  Based on our findings, we develop a customized digital marketing strategy aligned with your business objectives. This includes channel selection, content planning, and campaign structure.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center text-2xl font-bold bubble">
                  3
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Implementation & Execution</h3>
                <p className="text-gray-600">
                  Our team executes the strategy with precision, creating engaging content, launching campaigns, and optimizing your digital channels for maximum impact and engagement.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white flex items-center justify-center text-2xl font-bold bubble">
                  4
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Monitoring & Optimization</h3>
                <p className="text-gray-600">
                  We continuously monitor campaign performance, analyze key metrics, and make data-driven adjustments to optimize results. Regular reporting keeps you informed of progress and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-purple text-white">
        <div className="container-custom">
          <div className="rounded-2xl p-8 md:p-12 text-center animate-fade-up">
            <h2 className="text-3xl font-bold mb-4 text-shadow">Ready to Grow Your Business Online?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Get started with a customized digital marketing strategy that delivers measurable results for your business.
            </p>
            <Button asChild size="lg" className="bg-white text-vibrant-purple hover:bg-gray-100 button-pop">
              <Link to="/contact">Schedule a Strategy Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalMarketing; 