import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const TaxFiling = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-accountant-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Income Tax Return Filing</h1>
            <p className="text-lg text-gray-200">
              Professional tax preparation services to maximize your refund and ensure compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Expert Tax Filing Services</h2>
              <p className="text-gray-600">
                At Communiti Shared Services, we understand that navigating tax regulations can be complex and time-consuming. Our professional tax filing services are designed to take the stress out of tax season while ensuring you receive every deduction and credit you're entitled to.
              </p>
              <p className="text-gray-600">
                Whether you're an individual with a simple return, a self-employed professional, or a business owner with complex tax situations, our expert tax preparers have the knowledge and experience to handle your unique needs.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Maximize Your Refund</h3>
                    <p className="text-gray-600">
                      We identify all eligible deductions and credits to ensure you receive the maximum refund possible.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Audit Protection</h3>
                    <p className="text-gray-600">
                      Our meticulous preparation process provides documentation and support in case of an audit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Year-Round Support</h3>
                    <p className="text-gray-600">
                      We're available throughout the year to address your tax questions and concerns.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-4 bg-accountant-600 hover:bg-accountant-700">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tax filing services"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Tax Filing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 10.5H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 14H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 17.5H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Tax Returns</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive preparation of individual tax returns, including T1 General, schedules, and all relevant forms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Salary and wage income reporting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Investment income optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Rental property reporting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Optimization of deductions and credits
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 15C8.10457 15 9 14.1046 9 13C9 11.8954 8.10457 11 7 11C5.89543 11 5 11.8954 5 13C5 14.1046 5.89543 15 7 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Tax Returns</h3>
              <p className="text-gray-600 mb-4">
                Specialized tax preparation for sole proprietors, partnerships, and corporations of all sizes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  T2 Corporate tax returns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Partnership information returns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Business expense optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  CRA compliance assurance
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M12 6L6 12M12 6L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tax Planning Strategies</h3>
              <p className="text-gray-600 mb-4">
                Proactive tax planning to minimize liabilities and improve your financial position.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Year-round tax planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Income splitting strategies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Retirement planning tax optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Future tax liability reduction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Tax Filing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, streamlined approach to ensure accurate and efficient tax preparation.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Initial Consultation</h3>
                <p className="text-gray-600">
                  We begin with a detailed discussion about your financial situation, tax history, and goals. This helps us understand your unique needs and identify potential opportunities for tax savings.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Document Collection</h3>
                <p className="text-gray-600">
                  We provide a comprehensive checklist of required documents based on your situation. Our secure client portal makes it easy to upload and organize your tax documents.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Preparation & Review</h3>
                <p className="text-gray-600">
                  Our tax professionals carefully prepare your returns, applying their expertise to identify all eligible deductions and credits. A thorough review process ensures accuracy and compliance.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Filing & Follow-Up</h3>
                <p className="text-gray-600">
                  Once you approve your return, we electronically file it with the tax authorities. We track the status of your return and refund, and remain available to address any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accountant-800 text-white">
        <div className="container-custom text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Stress-Free Tax Filing?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Let our experts handle your tax returns while you focus on what matters most to you.
          </p>
          <Button asChild size="lg" className="bg-white text-accountant-800 hover:bg-gray-100">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TaxFiling;
