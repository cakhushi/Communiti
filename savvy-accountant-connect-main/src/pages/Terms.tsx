import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | Communiti Shared Services</title>
        <meta name="description" content="Terms and conditions for using Communiti Shared Services - our services and your legal agreement with us." />
      </Helmet>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Introduction</h2>
              <p>
                Welcome to Communiti Shared Services. These Terms of Service govern your use of our website and the services we provide. 
                By accessing our website or using our services, you agree to these Terms. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Services</h2>
              <p>
                Communiti Shared Services provides professional accounting, tax filing, advisory services, and financial tools as described on our website. 
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
              </p>
              <p className="mt-2">
                While we strive to provide accurate information and calculations through our financial tools, these are for educational 
                and illustrative purposes only and should not be considered as financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. User Accounts</h2>
              <p>
                Some portions of our services may require you to create an account. You are responsible for maintaining the confidentiality 
                of your account information and for all activities that occur under your account. You agree to notify us immediately of any 
                unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. User Conduct</h2>
              <p>
                When using our services, you agree not to:
              </p>
              <ul className="list-disc list-inside my-4 ml-4 space-y-2">
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe the rights of others, including privacy and intellectual property rights.</li>
                <li>Use our services to transmit harmful code or attempt to gain unauthorized access to our systems.</li>
                <li>Interfere with or disrupt the integrity or performance of our services.</li>
                <li>Collect or store personal data about other users without their consent.</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with a person or entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, icons, images, and software, is the property of Communiti Shared Services 
                and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, or modify 
                any content from our website without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant 
                that our services will be uninterrupted, error-free, or secure, or that any defects will be corrected.
              </p>
              <p className="mt-2">
                We do not warrant the accuracy, completeness, or reliability of any information, calculations, or results obtained through the use of our services, 
                including our financial tools. Users should consult with qualified professionals for specific advice tailored to their situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Communiti Shared Services shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. 
                Any dispute arising from these Terms shall be resolved exclusively in the courts of Pune, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">9. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time by posting the revised terms on our website. Your continued use of our services after the posting 
                of the revised terms constitutes your acceptance of the changes.
              </p>
              <p className="mt-2">
                Last updated: {new Date().toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-4">
                <p><span className="font-medium">Email:</span> communitiservices@gmail.com</p>
                <p><span className="font-medium">Phone:</span> +91 7249081189</p>
                <p><span className="font-medium">Address:</span> 1303, Skyview, Fursungi, Pune 412308</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms; 