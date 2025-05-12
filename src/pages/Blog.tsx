import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Calendar, Clock, ChevronRight, Search } from "lucide-react";

// Add Google Fonts
const googleFonts = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
`;

// Blog data
const featuredPosts = [
  {
    id: 1,
    slug: "tax-saving-tips-freelancers",
    title: "5 Essential Tax-Saving Tips for Freelancers in 2025",
    excerpt: "Learn how freelancers can optimize their tax strategy and save money with these essential tips.",
    category: "Tax Planning",
    author: "Priya Sharma",
    date: "May 15, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    slug: "gst-compliance-small-business",
    title: "The Complete GST Compliance Guide for Small Businesses",
    excerpt: "Staying GST-compliant is crucial for any small business in India. Learn essential requirements from registration to filing returns.",
    category: "GST",
    author: "Raj Patel",
    date: "April 28, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const latestPosts = [
  {
    id: 3,
    slug: "new-tax-regime-vs-old",
    title: "New Tax Regime vs Old: Which One Should You Choose in 2024-25?",
    excerpt: "A detailed comparison of both tax regimes to help you make an informed decision for the current financial year.",
    category: "Tax Planning",
    author: "Harsh",
    date: "June 2, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    slug: "investment-strategies-beginners",
    title: "Smart Investment Strategies for Beginners in 2025",
    excerpt: "Start your investment journey with these proven strategies designed for beginners in the current market.",
    category: "Investment",
    author: "Sanjay Mehta",
    date: "May 25, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    slug: "accounting-software-small-business",
    title: "Top 7 Accounting Software for Small Businesses in India",
    excerpt: "Find the perfect accounting solution for your small business with our comprehensive comparison.",
    category: "Accounting",
    author: "Neha Verma",
    date: "May 18, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    slug: "digital-marketing-tips-accounting-firms",
    title: "Digital Marketing Tips for Accounting Firms",
    excerpt: "Learn how accounting firms can leverage digital marketing to attract and retain clients.",
    category: "Marketing",
    author: "Vikram Singh",
    date: "May 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const resources = [
  {
    id: 1,
    title: "Income Tax Return Checklist 2024-25",
    description: "A comprehensive checklist of documents and information needed for filing ITR",
    category: "Tax Filing",
    format: "PDF",
    size: "1.2 MB",
    downloadUrl: "/downloads/itr-checklist-2024-25.pdf",
  },
  {
    id: 2,
    title: "GST Return Filing Calendar FY 2024-25",
    description: "Monthly and quarterly due dates for all GST returns",
    category: "GST",
    format: "PDF",
    size: "0.9 MB",
    downloadUrl: "/downloads/GST-Calendar-FY24-25.pdf",
  },
  {
    id: 3,
    title: "Business Expense Tracker Template",
    description: "Excel template to track and categorize business expenses",
    category: "Accounting",
    format: "Excel",
    size: "2.4 MB",
    downloadUrl: "/downloads/Business-Expense-Tracker.xlsx",
  },
  {
    id: 4,
    title: "Investment Tax Benefits Guide 2024",
    description: "Detailed guide on tax benefits for various investment options",
    category: "Investment",
    format: "PDF",
    size: "1.8 MB",
    downloadUrl: "/downloads/Investment-Tax-Benefits-2024.pdf",
  },
];

const categories = [
  "All",
  "Tax Planning",
  "GST",
  "Accounting",
  "Investment",
  "Business",
  "Marketing",
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("articles");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDownload = (resource) => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = resource.downloadUrl;
    link.download = resource.title.replace(/\s+/g, "-").toLowerCase() + getFileExtension(resource.format);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileExtension = (format) => {
    switch (format.toLowerCase()) {
      case "pdf": return ".pdf";
      case "excel": return ".xlsx";
      case "word": case "document": return ".docx";
      default: return "";
    }
  };

  const filteredPosts = [...featuredPosts, ...latestPosts].filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredResources = resources.filter(
    (resource) =>
      (selectedCategory === "All" || resource.category === selectedCategory) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <Helmet>
        <title>Financial Resources & Blog | Communiti Shared Services</title>
        <meta
          name="description"
          content="Explore our collection of financial tips, guides, and downloadable resources to help you navigate tax planning, accounting, and business finances."
        />
        <style>{googleFonts}</style>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-20">
        <div className="container-custom px-4 md:px-10">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
              Financial Resources & Insights
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl font-['Poppins']">
              Explore our collection of expert articles, guides, and tools designed to help you navigate your financial journey with confidence
            </p>
            <div className="w-full max-w-md relative">
              <Input
                type="text"
                placeholder="Search articles, resources..."
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 font-['Poppins']"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA]">
        <div className="container-custom px-4 md:px-10">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full font-['Poppins']"
              >
                {category}
              </Button>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="articles" className="font-['Poppins']">Articles & Guides</TabsTrigger>
              <TabsTrigger value="resources" className="font-['Poppins']">Downloadable Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="articles">
              {/* Featured Posts */}
              {searchTerm === "" && selectedCategory === "All" && (
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-10 text-center font-['Poppins'] text-[#2E2E2E]">Featured Articles</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg bg-white">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-['Poppins']">{post.category}</span>
                          </div>
                          <CardTitle className="text-xl font-['Poppins'] text-[#2E2E2E]">
                            <Link to={`/blog/${post.slug}`} className="hover:text-[#1A73E8] transition-colors hover:underline">
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="font-['Poppins'] text-[#4F4F4F] leading-relaxed">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between text-sm text-[#4F4F4F] font-['Poppins']">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Latest Articles */}
              <div>
                <h2 className="text-3xl font-bold mb-10 text-center font-['Poppins'] text-[#2E2E2E]">
                  {filteredPosts.length > 0
                    ? searchTerm
                      ? "Search Results"
                      : selectedCategory !== "All"
                      ? `${selectedCategory} Articles`
                      : "Latest Articles"
                    : "No Articles Found"}
                </h2>
                {filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg bg-white">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-['Poppins']">{post.category}</span>
                          </div>
                          <CardTitle className="text-xl font-['Poppins'] text-[#2E2E2E]">
                            <Link to={`/blog/${post.slug}`} className="hover:text-[#1A73E8] transition-colors hover:underline">
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="font-['Poppins'] text-[#4F4F4F] leading-relaxed">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between text-sm text-[#4F4F4F] font-['Poppins']">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-[#4F4F4F] mb-4 font-['Poppins']">No articles found matching your search criteria.</p>
                    <Button onClick={() => {setSearchTerm(""); setSelectedCategory("All");}} className="font-['Poppins']">
                      View All Articles
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <h2 className="text-3xl font-bold mb-10 text-center font-['Poppins'] text-[#2E2E2E]">
                {filteredResources.length > 0
                  ? searchTerm
                    ? "Search Results"
                    : selectedCategory !== "All"
                    ? `${selectedCategory} Resources`
                    : "Downloadable Resources"
                  : "No Resources Found"}
              </h2>
              {filteredResources.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {filteredResources.map((resource) => (
                    <Card key={resource.id} className="transition-all hover:shadow-lg bg-white">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full mb-3 inline-block font-['Poppins']">
                              {resource.category}
                            </span>
                            <CardTitle className="text-xl mb-2 font-['Poppins'] text-[#2E2E2E]">{resource.title}</CardTitle>
                            <CardDescription className="font-['Poppins'] text-[#4F4F4F] leading-relaxed">{resource.description}</CardDescription>
                          </div>
                          <div className="bg-gray-100 p-3 rounded-full">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm text-[#4F4F4F] font-['Poppins']">
                          {resource.format} • {resource.size}
                        </div>
                        <Button variant="outline" className="flex items-center gap-2 font-['Poppins']" onClick={() => handleDownload(resource)}>
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-[#4F4F4F] mb-4 font-['Poppins']">No resources found matching your search criteria.</p>
                  <Button onClick={() => {setSearchTerm(""); setSelectedCategory("All");}} className="font-['Poppins']">
                    View All Resources
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom px-4 md:px-10">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-['Poppins'] text-[#2E2E2E]">Subscribe to Our Newsletter</h2>
            <p className="text-[#4F4F4F] mb-8 max-w-2xl mx-auto font-['Poppins'] leading-relaxed">
              Get the latest financial tips, tax updates, and accounting insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-grow font-['Poppins']" />
              <Button className="font-['Poppins']">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom px-4 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 p-8 md:p-12 rounded-2xl text-white">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-['Poppins']">Need Personalized Financial Advice?</h2>
              <p className="text-white/90 font-['Poppins'] leading-relaxed">
                Our team of expert financial advisors is ready to help you navigate your specific financial challenges
              </p>
            </div>
            <Button asChild variant="secondary" size="lg" className="whitespace-nowrap font-['Poppins']">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog; 