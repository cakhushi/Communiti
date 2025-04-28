import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-sunset text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">About Us</h1>
            <p className="text-lg text-gray-200">
              Meet the team of financial experts dedicated to your success. (UPDATED)
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our company history"
                className="rounded-lg shadow-md hover-lift bubble"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4 text-shimmer">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2020, Communiti Shared Services began with a simple mission: to provide accessible, professional accounting services that truly make a difference for our clients. What started as a small practice has grown into a trusted financial partner for individuals and businesses across the region.
              </p>
              <p className="text-gray-600">
                Our founder, Roshni, recognized the need for accessible, transparent financial services that focus on personalized client experiences. Together with co-founder Khushboo, they built a practice that combines expertise with a genuine commitment to client success.
              </p>
              <p className="text-gray-600">
                Today, we maintain our commitment to client-focused service while expanding our expertise to encompass the evolving financial landscape. Our team of certified professionals combines deep technical knowledge with a genuine concern for your financial wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="colorful-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-vibrant-purple">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To empower individuals and businesses to achieve financial clarity, compliance, and confidence through accessible, personalized accounting services and expert guidance.
              </p>
              <p className="text-gray-600">
                We believe that financial expertise should be available to everyone, delivered with transparency and genuine care for our clients' success.
              </p>
            </div>
            
            <div className="colorful-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-vibrant-teal">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start bounce-subtle">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-purple text-white flex items-center justify-center mr-3 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Integrity</span>
                    <p className="text-gray-600">
                      We maintain the highest ethical standards in all our practices.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start bounce-subtle">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-pink text-white flex items-center justify-center mr-3 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Excellence</span>
                    <p className="text-gray-600">
                      We deliver high-quality work with attention to detail.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start bounce-subtle">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-teal text-white flex items-center justify-center mr-3 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Client Focus</span>
                    <p className="text-gray-600">
                      We prioritize our clients' needs and goals in everything we do.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start bounce-subtle">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vibrant-yellow text-white flex items-center justify-center mr-3 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800">Innovation</span>
                    <p className="text-gray-600">
                      We embrace new technologies to improve our services.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals dedicated to your financial success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="colorful-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Roshni"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Roshni</h3>
                <p className="text-vibrant-purple mb-3">Founder & Media Marketing Head</p>
                <p className="text-gray-600 mb-4">
                  As the visionary founder, Roshni brings creative leadership and strategic direction to Communiti Shared Services. She specializes in developing innovative marketing strategies that communicate our values and services to clients.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-vibrant-purple button-pop">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.225 0H1.77C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.77 24h20.455C23.208 24 24 23.227 24 22.271V1.729C24 0.774 23.208 0 22.225 0zM7.18 20.434H3.588V8.975H7.18v11.459zM5.384 7.411c-1.152 0-2.086-0.934-2.086-2.086 0-1.15 0.934-2.086 2.086-2.086 1.15 0 2.086 0.935 2.086 2.086-0.001 1.152-0.936 2.086-2.086 2.086zM20.434 20.434h-3.586v-5.615c0-1.338-0.024-3.056-1.862-3.056-1.864 0-2.151 1.456-2.151 2.959v5.712H9.25V8.975h3.439v1.576h0.049c0.479-0.906 1.646-1.862 3.389-1.862 3.625 0 4.295 2.386 4.295 5.488v6.258h0.002z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-vibrant-blue button-pop">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="colorful-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Khushboo"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Khushboo</h3>
                <p className="text-vibrant-pink mb-3">Co-founder & Finance Head</p>
                <p className="text-gray-600 mb-4">
                  Khushboo is a chartered accountant with 5 years of experience in the financial services industry. She specializes in complex tax strategies, financial reporting, and providing strategic guidance to help businesses optimize their financial operations.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-vibrant-purple button-pop">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.225 0H1.77C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.77 24h20.455C23.208 24 24 23.227 24 22.271V1.729C24 0.774 23.208 0 22.225 0zM7.18 20.434H3.588V8.975H7.18v11.459zM5.384 7.411c-1.152 0-2.086-0.934-2.086-2.086 0-1.15 0.934-2.086 2.086-2.086 1.15 0 2.086 0.935 2.086 2.086-0.001 1.152-0.936 2.086-2.086 2.086zM20.434 20.434h-3.586v-5.615c0-1.338-0.024-3.056-1.862-3.056-1.864 0-2.151 1.456-2.151 2.959v5.712H9.25V8.975h3.439v1.576h0.049c0.479-0.906 1.646-1.862 3.389-1.862 3.625 0 4.295 2.386 4.295 5.488v6.258h0.002z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-vibrant-blue button-pop">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="colorful-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Harsh"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Harsh</h3>
                <p className="text-vibrant-teal mb-3">Financial Advisor</p>
                <p className="text-gray-600 mb-4">
                  Harsh provides expert financial advisory services, helping clients develop personalized investment strategies, retirement plans, and wealth management solutions tailored to their unique financial goals and circumstances.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-vibrant-purple button-pop">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.225 0H1.77C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.77 24h20.455C23.208 24 24 23.227 24 22.271V1.729C24 0.774 23.208 0 22.225 0zM7.18 20.434H3.588V8.975H7.18v11.459zM5.384 7.411c-1.152 0-2.086-0.934-2.086-2.086 0-1.15 0.934-2.086 2.086-2.086 1.15 0 2.086 0.935 2.086 2.086-0.001 1.152-0.936 2.086-2.086 2.086zM20.434 20.434h-3.586v-5.615c0-1.338-0.024-3.056-1.862-3.056-1.864 0-2.151 1.456-2.151 2.959v5.712H9.25V8.975h3.439v1.576h0.049c0.479-0.906 1.646-1.862 3.389-1.862 3.625 0 4.295 2.386 4.295 5.488v6.258h0.002z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-vibrant-blue button-pop">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-purple text-white">
        <div className="container-custom text-center py-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Let our team of professionals help you achieve your financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-vibrant-purple hover:bg-gray-100 button-pop">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 button-pop">
                <Link to="/services/tax-filing">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

