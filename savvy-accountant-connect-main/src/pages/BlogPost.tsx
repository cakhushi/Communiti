import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// This would typically come from an API, but for now we'll use static data
const blogPosts = [
  {
    id: "1",
    slug: "tax-saving-tips-freelancers",
    title: "7 Essential Tax-Saving Tips for Freelancers in 2024",
    excerpt: "Maximize your deductions and minimize your tax burden with these actionable strategies for freelancers and independent contractors.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Tax Planning",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 12, 2024",
    readTime: "8 min",
    tags: ["Freelancing", "Tax Deductions", "Self-Employment"],
    content: `
      <h2>Introduction</h2>
      <p>As a freelancer, managing your taxes effectively can make a significant difference to your bottom line. With the right strategies, you can legally reduce your tax burden while ensuring compliance with all regulations.</p>
      
      <p>In this guide, we'll explore seven proven tax-saving strategies specifically designed for freelancers and independent contractors in the 2024 tax year.</p>

      <h2>1. Register as a Business Entity</h2>
      <p>Consider registering as a Sole Proprietorship, LLP, or Private Limited Company based on your business scale. Each entity type offers different tax advantages:</p>
      <ul>
        <li><strong>Sole Proprietorship:</strong> Simple structure with minimal compliance requirements, ideal for small-scale freelancers.</li>
        <li><strong>Limited Liability Partnership (LLP):</strong> Offers liability protection and tax efficiency with moderate compliance.</li>
        <li><strong>Private Limited Company:</strong> Maximum liability protection and potentially lower tax rates for higher income levels.</li>
      </ul>
      
      <h2>2. Maximize Your Business Deductions</h2>
      <p>Track and claim all legitimate business expenses, including:</p>
      <ul>
        <li>Home office expenses (proportionate rent, electricity, internet)</li>
        <li>Professional equipment and software subscriptions</li>
        <li>Professional development (courses, webinars, books)</li>
        <li>Marketing and advertising costs</li>
        <li>Travel expenses for client meetings</li>
        <li>Health insurance premiums</li>
      </ul>
      <p>Maintain detailed records and receipts for all expenses to support your claims during tax assessment.</p>

      <h2>3. Contribute to Tax-Saving Investment Schemes</h2>
      <p>Take advantage of various investment options that offer tax benefits:</p>
      <ul>
        <li><strong>Section 80C investments:</strong> EPF, PPF, ELSS mutual funds, life insurance premiums (up to ₹1.5 lakhs)</li>
        <li><strong>National Pension Scheme (NPS):</strong> Additional deduction up to ₹50,000 under Section 80CCD(1B)</li>
        <li><strong>Health Insurance:</strong> Deduction up to ₹25,000 under Section 80D (₹50,000 for senior citizens)</li>
      </ul>

      <h2>4. Choose the Right Tax Regime</h2>
      <p>Compare the old and new tax regimes to determine which is more beneficial for your situation:</p>
      <ul>
        <li><strong>Old Regime:</strong> Higher tax rates but allows for deductions and exemptions</li>
        <li><strong>New Regime:</strong> Lower tax rates but fewer deductions and exemptions</li>
      </ul>
      <p>As a freelancer with significant business expenses, the old regime often provides more tax-saving opportunities through various deductions.</p>

      <h2>5. Make Quarterly Advance Tax Payments</h2>
      <p>Avoid penalties by paying your taxes in quarterly installments:</p>
      <ul>
        <li>By June 15: 15% of estimated annual tax</li>
        <li>By September 15: 45% of estimated annual tax</li>
        <li>By December 15: 75% of estimated annual tax</li>
        <li>By March 15: 100% of estimated annual tax</li>
      </ul>
      <p>Late payment can result in interest charges of 1% per month under Section 234B and 234C.</p>

      <h2>6. Consider Presumptive Taxation Scheme</h2>
      <p>If your gross receipts are below ₹50 lakhs (for services), the presumptive taxation scheme under Section 44ADA allows you to:</p>
      <ul>
        <li>Declare 50% of your gross receipts as taxable income</li>
        <li>Skip detailed bookkeeping requirements</li>
        <li>Avoid tax audit requirements</li>
      </ul>
      <p>This can significantly simplify your tax compliance while potentially reducing your tax liability.</p>

      <h2>7. Plan Your Income Recognition</h2>
      <p>Strategic timing of income recognition can help optimize your tax situation:</p>
      <ul>
        <li>Consider deferring income to the next financial year if you expect to be in a lower tax bracket</li>
        <li>Invoice clients strategically around the financial year-end</li>
        <li>Time large expenses to maximize deductions in high-income years</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Implementing these tax-saving strategies can significantly reduce your tax burden as a freelancer. However, tax laws are complex and frequently changing, so it's advisable to consult with a tax professional to create a personalized tax plan that addresses your specific situation.</p>
      
      <p>By being proactive about tax planning throughout the year rather than just at tax filing time, you can make more informed financial decisions and keep more of your hard-earned money.</p>
    `,
  },
  {
    id: "2",
    slug: "gst-compliance-small-business",
    title: "GST Compliance Made Simple: A Guide for Small Businesses",
    excerpt: "Navigate GST regulations with confidence using our straightforward approach to compliance, filing, and credit optimization.",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "GST",
    author: "Rajiv Mehta",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "April 28, 2024",
    readTime: "10 min",
    tags: ["GST", "Small Business", "Compliance"],
    content: `
      <h2>Introduction to GST for Small Businesses</h2>
      <p>The Goods and Services Tax (GST) represents a comprehensive indirect tax structure designed to streamline the taxation process in India. For small businesses, understanding and navigating GST compliance is crucial to avoid penalties and optimize tax efficiency.</p>
      
      <p>This guide breaks down GST compliance into simple, actionable steps that small business owners can implement without extensive tax knowledge.</p>

      <h2>GST Registration: Who Needs It?</h2>
      <p>You must register for GST if:</p>
      <ul>
        <li>Your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states)</li>
        <li>You conduct interstate supplies (regardless of turnover)</li>
        <li>You sell through e-commerce platforms</li>
        <li>You are a non-resident taxable person or a casual taxable person</li>
      </ul>
      <p>Even if not mandatory, voluntary registration may be beneficial as it allows you to claim input tax credits and enhances credibility with customers and suppliers.</p>

      <h2>Understanding GST Return Types</h2>
      <p>Common GST returns small businesses need to file:</p>
      <ul>
        <li><strong>GSTR-1:</strong> Details of outward supplies (sales)</li>
        <li><strong>GSTR-3B:</strong> Monthly or quarterly summary return</li>
        <li><strong>GSTR-9:</strong> Annual return</li>
        <li><strong>GSTR-4:</strong> For composition scheme taxpayers</li>
      </ul>
      <p>For most small businesses, regular filing of GSTR-1 and GSTR-3B is the primary compliance requirement.</p>

      <h2>Simplifying GST with the Composition Scheme</h2>
      <p>The Composition Scheme offers simplified compliance for businesses with turnover up to ₹1.5 crore:</p>
      <ul>
        <li>Pay flat rate GST (1% for manufacturers/traders, 5% for restaurants, 6% for other service providers)</li>
        <li>File returns quarterly instead of monthly</li>
        <li>Maintain simplified records</li>
      </ul>
      <p>However, businesses under this scheme cannot collect GST from customers or claim input tax credits.</p>

      <h2>Optimizing Input Tax Credits</h2>
      <p>Maximizing input tax credits is key to reducing your effective tax burden:</p>
      <ul>
        <li>Maintain complete documentation of all purchases with valid tax invoices</li>
        <li>Ensure your suppliers are GST-compliant and file their returns</li>
        <li>Reconcile purchase records with GSTR-2B before filing returns</li>
        <li>Don't overlook GST paid on business expenses like rent, professional services, and utilities</li>
      </ul>
      <p>Remember that inputs used for exempt supplies or non-business purposes are not eligible for input tax credits.</p>

      <h2>Record-Keeping Essentials</h2>
      <p>Proper record maintenance is fundamental to GST compliance:</p>
      <ul>
        <li>Maintain separate records of taxable and non-taxable supplies</li>
        <li>Keep detailed records of input tax credits claimed</li>
        <li>Preserve all tax invoices, credit notes, and debit notes</li>
        <li>Maintain books of accounts and additional documents as required</li>
        <li>Retain records for at least 72 months from the due date of annual return</li>
      </ul>
      <p>Consider using GST-compliant accounting software to automate record-keeping and simplify return filing.</p>

      <h2>Compliance Calendar: Never Miss a Deadline</h2>
      <p>Key GST filing deadlines to remember:</p>
      <ul>
        <li>GSTR-1: 11th of the following month (or quarter)</li>
        <li>GSTR-3B: 20th of the following month (or quarter)</li>
        <li>GSTR-4 (Composition): 18th of the month following the quarter</li>
        <li>GSTR-9 (Annual Return): 31st December of the following financial year</li>
      </ul>
      <p>Late filing attracts penalties of ₹100 per day per return (maximum ₹5,000), plus interest on delayed tax payment at 18% per annum.</p>

      <h2>Handling Common GST Challenges</h2>
      <p>Solutions to frequent issues faced by small businesses:</p>
      <ul>
        <li><strong>Invoice mismatches:</strong> Regularly reconcile data with suppliers and maintain communication</li>
        <li><strong>E-invoice implementation:</strong> If applicable, ensure your billing software is e-invoice compatible</li>
        <li><strong>Managing multiple GST registrations:</strong> Consider centralized compliance management</li>
        <li><strong>Handling rate changes:</strong> Stay updated with GST Council announcements and implement changes promptly</li>
      </ul>

      <h2>Conclusion: Embracing GST as a Business Advantage</h2>
      <p>While GST compliance may seem challenging initially, it offers significant benefits for compliant businesses:</p>
      <ul>
        <li>Simplified taxation structure compared to the previous regime</li>
        <li>Reduced cascading effect of taxes</li>
        <li>Expanded market access across states</li>
        <li>Enhanced business credibility</li>
        <li>Potential for improved cash flow through efficient input tax credit management</li>
      </ul>
      <p>By understanding these fundamentals and establishing robust compliance processes, small businesses can not only avoid penalties but also leverage GST as a strategic business advantage.</p>
    `,
  },
];

// Related posts data would typically come from an API based on tags or categories
const getRelatedPosts = (currentPost: any) => {
  return blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real application, this would be an API call
    const foundPost = blogPosts.find((post) => post.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost));
      // Scroll to top when post loads
      window.scrollTo(0, 0);
    } else {
      // Redirect to resources page if post not found
      navigate("/resources");
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto py-20 px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold">Loading article...</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Savvy Accountant Connect</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="container mx-auto py-12 px-4 sm:px-6">
        {/* Back Button */}
        <Button 
          variant="outline" 
          className="mb-8" 
          asChild
        >
          <Link to="/resources">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
          </Link>
        </Button>

        {/* Article Header */}
        <div 
          className="w-full h-96 bg-cover bg-center rounded-xl mb-8"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              {/* Post Meta */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mb-3 sm:mb-0">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">Financial Advisor</p>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-4 w-4 text-gray-500" />
                  {post.tags.map((tag: string, index: number) => (
                    <Link 
                      key={index} 
                      to={`/resources?tag=${tag}`}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="font-medium">Share this article:</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Author Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex gap-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-lg">{post.author}</p>
                  <p className="text-gray-600 mb-3">Financial Advisor</p>
                  <p className="text-sm text-gray-500">
                    Specialized in tax planning and financial advisory services with over 10 years of experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div 
                          className="w-20 h-16 bg-cover bg-center rounded flex-shrink-0"
                          style={{ backgroundImage: `url(${relatedPost.coverImage})` }}
                        />
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>{relatedPost.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  asChild
                >
                  <Link to="/resources">
                    View All Articles
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Need Personalized Advice?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our financial experts can help you implement these strategies for your specific situation.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost; 