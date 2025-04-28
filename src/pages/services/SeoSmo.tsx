import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Search, Share2, Zap } from "lucide-react";

const SeoSmo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-candy text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">SEO, SMO & Digital Ads</h1>
            <p className="text-lg text-gray-200">
              Data-driven search optimization and advertising solutions to boost your visibility and drive qualified traffic
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Elevate Your Online Visibility</h2>
              <p className="text-gray-600">
                At Communiti Shared Services, we combine technical expertise with creative strategies to improve your search rankings, optimize social media presence, and deliver high-performing ad campaigns that drive measurable results.
              </p>
              <p className="text-gray-600">
                Whether you need to improve organic search rankings, maximize social media reach, or create targeted ad campaigns, our specialized team delivers customized solutions that align with your business goals and target audience.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start bounce-subtle">
                  <CheckCircle2 className="h-6 w-6 text-vibrant-purple mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Technical Excellence</h3>
                    <p className="text-gray-600">
                      Advanced SEO techniques and technical optimization for maximum search visibility and performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bounce-subtle" style={{animationDelay: "0.2s"}}>
                  <CheckCircle2 className="h-6 w-6 text-vibrant-teal mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">ROI-Focused Campaigns</h3>
                    <p className="text-gray-600">
                      Strategic ad management that maximizes your advertising budget and delivers measurable returns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bounce-subtle" style={{animationDelay: "0.4s"}}>
                  <CheckCircle2 className="h-6 w-6 text-vibrant-pink mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Holistic Approach</h3>
                    <p className="text-gray-600">
                      Integrated SEO, SMO and advertising strategies that work together to achieve comprehensive results.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="SEO and digital advertising services"
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
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our SEO, SMO & Ads Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive search optimization and advertising solutions to enhance your online presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift colorful-card animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="w-12 h-12 bg-vibrant-purple/10 rounded-full flex items-center justify-center text-vibrant-purple mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive SEO services to improve your website's visibility and ranking in search engine results.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  Technical SEO audits & fixes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  On-page optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  Keyword research & strategy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-purple rounded-full mr-2"></span>
                  Link building & authority development
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift colorful-card animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 bg-vibrant-teal/10 rounded-full flex items-center justify-center text-vibrant-teal mb-4">
                <Share2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Optimization (SMO)</h3>
              <p className="text-gray-600 mb-4">
                Strategic social media optimization to enhance your brand's reach and engagement across platforms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Profile optimization & branding
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Content strategy development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Engagement rate optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-teal rounded-full mr-2"></span>
                  Cross-platform integration
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift colorful-card animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="w-12 h-12 bg-vibrant-pink/10 rounded-full flex items-center justify-center text-vibrant-pink mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Paid Advertising Campaigns</h3>
              <p className="text-gray-600 mb-4">
                Targeted digital advertising campaigns to drive qualified traffic and conversions for your business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  Google Ads management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  Social media advertising
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  Remarketing campaigns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vibrant-pink rounded-full mr-2"></span>
                  Conversion rate optimization
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
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our SEO & Advertising Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A methodical approach to improve your search visibility and advertising performance.
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
                <h3 className="text-2xl font-semibold mb-3">Comprehensive Audit</h3>
                <p className="text-gray-600">
                  We conduct a thorough audit of your website, search visibility, social media presence, and existing ad campaigns to identify strengths, weaknesses, and opportunities for improvement.
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
                  Based on audit findings and your business goals, we develop a tailored strategy integrating SEO, social media optimization, and paid advertising for maximum impact and efficiency.
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
                <h3 className="text-2xl font-semibold mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Our technical team implements the strategy, making necessary website optimizations, setting up campaigns, and creating targeted content to improve visibility and engagement.
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
                <h3 className="text-2xl font-semibold mb-3">Monitoring & Refinement</h3>
                <p className="text-gray-600">
                  We continuously monitor performance metrics, making data-driven adjustments to optimize campaigns and search rankings. Detailed monthly reports keep you informed of progress and ROI.
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
            <h2 className="text-3xl font-bold mb-4 text-shadow">Ready to Boost Your Online Visibility?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Get started with a comprehensive SEO, SMO, and advertising strategy tailored to your business goals.
            </p>
            <Button asChild size="lg" className="bg-white text-vibrant-purple hover:bg-gray-100 button-pop">
              <Link to="/contact">Request a Free Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeoSmo; 