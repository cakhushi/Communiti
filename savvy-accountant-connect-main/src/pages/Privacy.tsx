import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Communiti Shared Services</title>
        <meta name="description" content="Privacy policy for Communiti Shared Services - how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Introduction</h2>
              <p>
                At Communiti Shared Services, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. The Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc list-inside my-4 ml-4 space-y-2">
                <li><span className="font-medium">Identity Data</span> includes first name, last name, username or similar identifier.</li>
                <li><span className="font-medium">Contact Data</span> includes billing address, email address and telephone numbers.</li>
                <li><span className="font-medium">Technical Data</span> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><span className="font-medium">Usage Data</span> includes information about how you use our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside my-4 ml-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data 
                to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, 
                including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
              </p>
              <ul className="list-disc list-inside my-4 ml-4 space-y-2">
                <li>The right to request access to your personal data.</li>
                <li>The right to request correction of your personal data.</li>
                <li>The right to request erasure of your personal data.</li>
                <li>The right to object to processing of your personal data.</li>
                <li>The right to request restriction of processing your personal data.</li>
                <li>The right to request transfer of your personal data.</li>
                <li>The right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Changes to Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
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
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy; 