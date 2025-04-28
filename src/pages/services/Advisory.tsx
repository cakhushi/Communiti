import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Advisory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-accountant-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Advisory Services</h1>
            <p className="text-lg text-gray-200">
              Strategic financial guidance to help your business thrive and achieve long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Expert Financial Advisory</h2>
              <p className="text-gray-600">
                At Communiti Shared Services, we go beyond traditional accounting services to provide strategic advisory solutions that help your business navigate challenges, identify opportunities, and achieve sustainable growth.
              </p>
              <p className="text-gray-600">
                Our experienced financial advisors work closely with you to understand your business objectives and develop tailored strategies that address your specific needs and circumstances.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Develop robust financial strategies aligned with your business goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
                    <p className="text-gray-600">
                      Make informed decisions based on comprehensive financial analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Proactive Approach</h3>
                    <p className="text-gray-600">
                      Anticipate challenges and opportunities before they impact your business.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-4 bg-accountant-600 hover:bg-accountant-700">
                <Link to="/contact">Schedule an Advisory Session</Link>
              </Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Financial advisory services"
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
            <h2 className="text-3xl font-bold mb-4">Our Advisory Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive advisory solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 9L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H19V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Performance Analysis</h3>
              <p className="text-gray-600 mb-4">
                Detailed evaluation of your business performance to identify strengths and improvement areas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Financial ratio analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Benchmarking against industry standards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Profitability assessment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Operational efficiency review
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cash Flow Management</h3>
              <p className="text-gray-600 mb-4">
                Strategies to optimize your cash flow and maintain financial stability.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Cash flow forecasting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Working capital optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Accounts receivable strategies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Cash conservation techniques
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Structure Advisory</h3>
              <p className="text-gray-600 mb-4">
                Guidance on optimal business structures to enhance efficiency and reduce tax liabilities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Entity selection analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Restructuring opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Tax implications assessment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Compliance considerations
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 16H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Business Planning</h3>
              <p className="text-gray-600 mb-4">
                Development of comprehensive business plans to guide your company's growth.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Financial goal setting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Market opportunity analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Risk assessment & mitigation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Performance measurement frameworks
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Budget & Forecasting</h3>
              <p className="text-gray-600 mb-4">
                Creation of detailed budgets and financial forecasts to guide business decisions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Annual budget development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Revenue & expense projections
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Scenario planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Budget vs. actual analysis
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Assessment & Management</h3>
              <p className="text-gray-600 mb-4">
                Identification and mitigation of financial risks to protect your business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Financial risk identification
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Control mechanism development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Contingency planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Insurance coverage review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Advisory Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic methodology to deliver tailored financial guidance for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Assess</h3>
              <p className="text-gray-600">
                We conduct a thorough assessment of your current financial position, business operations, and goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyze</h3>
              <p className="text-gray-600">
                We analyze the collected data to identify strengths, weaknesses, opportunities, and threats.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Advise</h3>
              <p className="text-gray-600">
                We provide strategic recommendations based on our analysis and industry best practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Implement</h3>
              <p className="text-gray-600">
                We assist with implementing the recommended strategies and monitor outcomes.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-accountant-600 hover:bg-accountant-700">
              <Link to="/contact">Get Started with Advisory Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accountant-800 text-white">
        <div className="container-custom text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Your Business to the Next Level</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Partner with our financial advisors to unlock your business's full potential.
          </p>
          <Button asChild size="lg" className="bg-white text-accountant-800 hover:bg-gray-100">
            <Link to="/contact">Schedule a Strategic Session</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Advisory;
