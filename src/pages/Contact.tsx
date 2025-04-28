import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-accountant-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Communiti Shared Services</h1>
            <p className="text-lg text-gray-200">
              Have questions or ready to work with us? Get in touch with our team of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out to us through any of the following methods. We're available to assist you with your accounting and tax needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accountant-100 text-accountant-600 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      1303, Skyview, Fursungi<br />
                      Pune, Maharashtra 412308
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accountant-100 text-accountant-600 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      Main Office: +91 7249081189<br />
                      Support: +91 7249081189
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accountant-100 text-accountant-600 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      General Inquiries: communitiservices@gmail.com<br />
                      Support: communitiservices@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accountant-100 text-accountant-600 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office for a face-to-face consultation. We're conveniently located in the business district.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md h-[400px] bg-gray-200 flex items-center justify-center">
            {/* Placeholder for an actual map */}
            <div className="text-center p-6">
              <p className="text-gray-500 mb-2">Map will be embedded here</p>
              <p className="text-sm text-gray-400">
                123 Accounting Lane, Finance District, Business City, AB 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">What documents do I need for tax filing?</h3>
              <p className="text-gray-600">
                Typically, you'll need identification, income statements (T4s, T5s), receipts for deductions, and previous year's tax return. We'll provide a detailed checklist based on your specific situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">How much do your services cost?</h3>
              <p className="text-gray-600">
                Our fees vary based on the complexity of your financial situation and the services required. We provide transparent pricing and free initial consultations to assess your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">How long does the registration process take?</h3>
              <p className="text-gray-600">
                Business registration typically takes 5-10 business days, depending on the type of entity and jurisdiction. We'll provide you with a timeline based on your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Do you work with businesses of all sizes?</h3>
              <p className="text-gray-600">
                Yes, we serve clients ranging from individuals and startups to established businesses. Our services are tailored to meet the specific needs of each client, regardless of size.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
