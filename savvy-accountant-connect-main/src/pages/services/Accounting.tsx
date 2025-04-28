import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Accounting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-accountant-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Accounting Services</h1>
            <p className="text-lg text-gray-200">
              Professional accounting solutions to keep your finances organized and your business compliant.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Accounting services"
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Accounting Solutions</h2>
              <p className="text-gray-600">
                At Communiti Shared Services, we deliver reliable, accurate, and timely accounting services tailored to meet the unique needs of your business. Our team of experienced professionals is dedicated to maintaining your financial records with precision while providing insights to help your business thrive.
              </p>
              <p className="text-gray-600">
                Whether you're a small business owner, a growing enterprise, or a seasoned corporation, our accounting services provide the foundation you need for sound financial management and decision-making.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Accurate Financial Reporting</h3>
                    <p className="text-gray-600">
                      Detailed and timely financial statements to track your business performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Tax Compliance</h3>
                    <p className="text-gray-600">
                      Keep your business compliant with all relevant tax regulations and deadlines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Financial Insights</h3>
                    <p className="text-gray-600">
                      Valuable insights to help you make informed business decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-4 bg-accountant-600 hover:bg-accountant-700">
                <Link to="/contact">Request a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Accounting Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive accounting solutions tailored to your specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 14H3M3 8H21M3 18H15M3 4H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Bookkeeping</h3>
              <p className="text-gray-600 mb-4">
                Accurate recording and organization of your daily financial transactions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Accounts payable & receivable
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Bank reconciliations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  General ledger maintenance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Chart of accounts setup & management
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 15L16.5 12.5M16.5 12.5L19 10M16.5 12.5L19 15M16.5 12.5L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17M7 11H11M7 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Statements</h3>
              <p className="text-gray-600 mb-4">
                Preparation of comprehensive financial reports to track business performance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Income statements
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Balance sheets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Cash flow statements
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Customized financial reports
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Payroll Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive payroll processing to ensure accurate and timely payments.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Payroll processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Tax withholdings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Payroll tax filings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Employee payment records
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 22H19C20.1046 22 21 21.1046 21 20V10C21 8.89543 20.1046 8 19 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18.5C13.6569 18.5 15 17.1569 15 15.5C15 13.8431 13.6569 12.5 12 12.5C10.3431 12.5 9 13.8431 9 15.5C9 17.1569 10.3431 18.5 12 18.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8V6C17 3.79086 15.2091 2 13 2H11C8.79086 2 7 3.79086 7 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Accounts Payable & Receivable</h3>
              <p className="text-gray-600 mb-4">
                Management of your payment obligations and incoming revenues.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Invoice generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Bill payment processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Cash flow management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Vendor and customer account management
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V19C15 19.5304 14.7893 20.0391 14.4142 20.4142C14.0391 20.7893 13.5304 21 13 21H11C10.4696 21 9.96086 20.7893 9.58579 20.4142C9.21071 20.0391 9 19.5304 9 19V5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 7H7C7.53043 7 8.03914 7.21071 8.41421 7.58579C8.78929 7.96086 9 8.46957 9 9V19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 11H20C20.5304 11 21.0391 11.2107 21.4142 11.5858C21.7893 11.9609 22 12.4696 22 13V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V13C15 12.4696 15.2107 11.9609 15.5858 11.5858C15.9609 11.2107 16.4696 11 17 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Analysis</h3>
              <p className="text-gray-600 mb-4">
                Detailed evaluation of your financial data to guide strategic decisions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Budget preparation & analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Financial trend analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Cash flow projection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Financial performance indicators
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.1277 15.8031 19.0624 16.6511 19.2083 17.4759C19.3542 18.3006 19.7064 19.0793 20.24 19.75L20.12 19.87C20.6 20.34 20.28 21.17 19.64 21.24L18.87 21.33C16.66 21.56 13.53 20.11 11.31 17.9C9.09 15.68 7.66 12.56 7.87 10.34L7.96 9.58C8.03 8.94 8.86 8.62 9.33 9.1L9.45 9.22C10.1207 9.75357 10.8994 10.1058 11.7241 10.2517C12.5489 10.3976 13.3969 10.3323 14.2 10.06C15.1291 9.7532 15.9577 9.1975 16.5872 8.45795C17.2166 7.7184 17.623 6.82433 17.76 5.87L20.84 9C20.327 9.97038 19.9481 11.0283 19.72 12.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">QuickBooks & Software Support</h3>
              <p className="text-gray-600 mb-4">
                Assistance with accounting software setup, training, and troubleshooting.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  QuickBooks setup & training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Software migration assistance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  System integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Custom accounting solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Benefits of Professional Accounting</h2>
              <p className="text-gray-600">
                Partnering with Communiti Shared Services for your accounting needs provides numerous advantages that extend beyond basic bookkeeping. Our professional services can transform your financial management and contribute to your business success.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 text-accountant-700">Time & Resource Savings</h3>
                  <p className="text-gray-600">
                    Focus on growing your business while we handle the time-consuming task of maintaining your financial records with precision.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 text-accountant-700">Reduced Errors</h3>
                  <p className="text-gray-600">
                    Our expert accountants implement systematic processes and checks to minimize errors in your financial reporting.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 text-accountant-700">Better Decision-Making</h3>
                  <p className="text-gray-600">
                    Access to accurate, up-to-date financial information enables more informed business decisions.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 text-accountant-700">Regulatory Compliance</h3>
                  <p className="text-gray-600">
                    Stay compliant with changing tax laws and financial regulations, avoiding penalties and legal issues.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Benefits of professional accounting"
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accountant-800 text-white">
        <div className="container-custom text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Financial Management?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Let our accounting experts help you maintain accurate financial records and gain valuable business insights.
          </p>
          <Button asChild size="lg" className="bg-white text-accountant-800 hover:bg-gray-100">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Accounting;
