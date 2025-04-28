import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Store, Briefcase, Users, Building2, FileText } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Registrations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-accountant-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Registrations</h1>
            <p className="text-lg text-gray-200">
              Professional assistance with all your business registration and compliance needs.
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Business registration services"
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Streamlined Registration Services</h2>
              <p className="text-gray-600">
                Navigating the complex world of business registrations and regulatory compliance can be overwhelming. At Communiti Shared Services, we simplify the process by handling all aspects of business registration on your behalf.
              </p>
              <p className="text-gray-600">
                Our team stays up-to-date with the latest regulatory requirements to ensure your business is properly registered and compliant with all necessary agencies, allowing you to focus on what you do best – running your business.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Navigate complex registration requirements with our experienced team.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Time-Saving</h3>
                    <p className="text-gray-600">
                      Focus on your core business while we handle the paperwork and filings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accountant-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Complete Compliance</h3>
                    <p className="text-gray-600">
                      Ensure your business meets all regulatory requirements from day one.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-4 bg-accountant-600 hover:bg-accountant-700">
                <Link to="/contact">Discuss Your Registration Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Types Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized Registration Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of specialized registration services to meet your specific business needs.
            </p>
          </div>

          <Tabs defaultValue="business" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8 bg-white rounded-lg border border-gray-200 p-1 w-full max-w-md mx-auto">
              <TabsTrigger value="business">Business Registrations</TabsTrigger>
              <TabsTrigger value="compliance">Compliance Registrations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="business" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard 
                  title="Shop Act Registration"
                  description="Complete assistance with Shop & Establishment Act registration for your retail or commercial establishment."
                  icon={<Store />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="Udyam Registration"
                  description="Register your Micro, Small, or Medium Enterprise (MSME) to access government schemes and benefits."
                  icon={<Briefcase />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="LLP Registration"
                  description="Form a Limited Liability Partnership with complete legal compliance and documentation."
                  icon={<Users />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="Partnership Firm Registration"
                  description="Establish your partnership firm with proper legal structure and compliance management."
                  icon={<Users />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="Private Company Registration"
                  description="Incorporate your private limited company with comprehensive compliance support."
                  icon={<Building2 />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="OPC Registration"
                  description="Set up a One Person Company with all statutory and regulatory compliances."
                  icon={<FileText />}
                  link="/contact"
                />
              </div>
              
              <div className="text-center pt-6">
                <Button asChild variant="outline" className="border-accountant-600 text-accountant-600 hover:bg-accountant-50">
                  <Link to="/contact">Explore All Business Registration Services</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="compliance" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard 
                  title="GST Registration"
                  description="Complete Goods and Services Tax registration with ongoing compliance support."
                  icon={<FileText />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="PF & ESI Registration"
                  description="Register for Provident Fund and Employee State Insurance schemes with complete setup."
                  icon={<Users />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="FSSAI Registration"
                  description="Food Safety and Standards Authority of India licensing and registration for food businesses."
                  icon={<Store />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="Trademark Registration"
                  description="Protect your brand identity with comprehensive trademark registration services."
                  icon={<Briefcase />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="Import Export Code"
                  description="Obtain your IEC code for international trade operations with complete documentation."
                  icon={<FileText />}
                  link="/contact"
                />
                
                <ServiceCard 
                  title="Professional Tax Registration"
                  description="Register for professional tax with complete compliance management for your business."
                  icon={<Building2 />}
                  link="/contact"
                />
              </div>
              
              <div className="text-center pt-6">
                <Button asChild variant="outline" className="border-accountant-600 text-accountant-600 hover:bg-accountant-50">
                  <Link to="/contact">Explore All Compliance Registration Services</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Registration Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive registration solutions for businesses at every stage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Name Registration</h3>
              <p className="text-gray-600 mb-4">
                Register your business name and secure your brand identity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Name availability search
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Business name registration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Trading name registration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Name renewal management
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10V17M12 10L16 6M12 10L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">GST/HST Registration</h3>
              <p className="text-gray-600 mb-4">
                Compliance with goods and services tax requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  GST/HST registration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Threshold analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Compliance guidance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Filing assistance
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Structure Setup</h3>
              <p className="text-gray-600 mb-4">
                Establishment of the optimal legal structure for your business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Sole proprietorship registration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Partnership formation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Corporation incorporation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Structure comparison consultation
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Payroll Registration</h3>
              <p className="text-gray-600 mb-4">
                Setup of payroll accounts and compliance systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  CRA payroll account setup
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Workers' compensation registration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Employee benefits setup
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Compliance documentation
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H17C16.4696 8 15.9609 8.21071 15.5858 8.58579C15.2107 8.96086 15 9.46957 15 10V21C15 21.5304 15.2107 22.0391 15.5858 22.4142C15.9609 22.7893 16.4696 23 17 23H21C21.5304 23 22.0391 22.7893 22.4142 22.4142C22.7893 22.0391 23 21.5304 23 21V10C23 9.46957 22.7893 8.96086 22.4142 8.58579C22.0391 8.21071 21.5304 8 21 8H20M18 8V6C18 4.93913 17.5786 3.92172 16.8284 3.17157C16.0783 2.42143 15.0609 2 14 2H10C8.93913 2 7.92172 2.42143 7.17157 3.17157C6.42143 3.92172 6 4.93913 6 6V8M18 8H6M6 8H5C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10V21C3 21.5304 3.21071 22.0391 3.58579 22.4142C3.96086 22.7893 4.46957 23 5 23H9C9.53043 23 10.0391 22.7893 10.4142 22.4142C10.7893 22.0391 11 21.5304 11 21V10C11 9.46957 10.7893 8.96086 10.4142 8.58579C10.0391 8.21071 9.53043 8 9 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Licenses & Permits</h3>
              <p className="text-gray-600 mb-4">
                Identification and acquisition of required licenses and permits.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Industry-specific licensing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Municipal permit acquisition
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Zoning compliance verification
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Renewal management
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accountant-100 rounded-full flex items-center justify-center text-accountant-600 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 10H7C6.46957 10 5.96086 10.2107 5.58579 10.5858C5.21071 10.9609 5 11.4696 5 12C5 12.5304 5.21071 13.0391 5.58579 13.4142C5.96086 13.7893 6.46957 14 7 14H9M15 10H17C17.5304 10 18.0391 10.2107 18.4142 10.5858C18.7893 10.9609 19 11.4696 19 12C19 12.5304 18.7893 13.0391 18.4142 13.4142C18.0391 13.7893 17.5304 14 17 14H15M12 14V19M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tax ID Numbers</h3>
              <p className="text-gray-600 mb-4">
                Acquisition of necessary tax identification numbers for your business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Business Number (BN) registration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  GST/HST number acquisition
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Import/Export numbers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accountant-600 rounded-full mr-2"></span>
                  Specialized tax accounts setup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Registration Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to handling your business registration needs efficiently.
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
                  We begin with a comprehensive discussion about your business model, goals, and registration requirements. This helps us understand your specific needs and develop a tailored registration plan.
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
                <h3 className="text-2xl font-semibold mb-3">Requirements Analysis</h3>
                <p className="text-gray-600">
                  We identify all registration requirements applicable to your business, including necessary licenses, permits, and tax registrations based on your industry, location, and business structure.
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
                <h3 className="text-2xl font-semibold mb-3">Document Preparation</h3>
                <p className="text-gray-600">
                  We prepare all necessary documentation and application forms, ensuring accuracy and completeness to avoid delays or rejections in the registration process.
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
                <h3 className="text-2xl font-semibold mb-3">Submission & Follow-Up</h3>
                <p className="text-gray-600">
                  We submit all applications on your behalf and actively follow up with relevant authorities to ensure timely processing. We keep you informed throughout the process and address any inquiries from regulatory bodies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-accountant-100 text-accountant-600 flex items-center justify-center text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Compliance Guidance</h3>
                <p className="text-gray-600">
                  Upon successful registration, we provide comprehensive guidance on ongoing compliance requirements, filing deadlines, and record-keeping obligations to help you maintain good standing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accountant-800 text-white">
        <div className="container-custom text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Business on the Right Track</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Ensure proper registration and compliance from day one with our professional registration services.
          </p>
          <Button asChild size="lg" className="bg-white text-accountant-800 hover:bg-gray-100">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Registrations;
