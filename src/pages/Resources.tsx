import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Download, ArrowRight, Search, FileText, BookOpen } from "lucide-react";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    slug: "tax-saving-tips-freelancers",
    title: "5 Essential Tax-Saving Tips for Freelancers in 2025",
    excerpt: "Maximize your deductions and minimize your tax burden with these actionable strategies for freelancers and independent contractors.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Tax Planning",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 12, 2024",
    readTime: "8 min",
    tags: ["Freelancing", "Tax Deductions", "Self-Employment"]
  },
  {
    id: "2",
    slug: "gst-compliance-small-business",
    title: "The Complete GST Compliance Guide for Small Businesses",
    excerpt: "Staying GST-compliant is crucial for any small business in India. Learn essential requirements from registration to filing returns.",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "GST",
    author: "Rajiv Mehta",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "April 28, 2024",
    readTime: "10 min",
    tags: ["GST", "Small Business", "Compliance"]
  },
  {
    id: "3",
    slug: "investment-strategies-2024",
    title: "Top Investment Strategies for Market Volatility in 2024",
    excerpt: "Learn how to protect and grow your wealth during uncertain market conditions with these proven investment approaches.",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Investments",
    author: "Anil Kapoor",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 5, 2024",
    readTime: "12 min",
    tags: ["Investments", "Market Volatility", "Portfolio Management"]
  },
  {
    id: "4",
    slug: "retirement-planning-guide",
    title: "Comprehensive Retirement Planning Guide for 30-40 Year Olds",
    excerpt: "Start building your retirement nest egg early with our decade-by-decade approach to financial independence.",
    coverImage: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Retirement",
    author: "Meera Desai",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "April 15, 2024",
    readTime: "15 min",
    tags: ["Retirement", "Financial Planning", "NPS", "EPF"]
  },
  {
    id: "5",
    slug: "business-expense-tracking",
    title: "Optimizing Business Expense Tracking for Tax Efficiency",
    excerpt: "Implement these expense tracking systems to maximize deductions and streamline your tax filing process.",
    coverImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Business Finance",
    author: "Vikram Singh",
    authorImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 8, 2024",
    readTime: "9 min",
    tags: ["Business Expenses", "Tax Efficiency", "Bookkeeping"]
  },
  {
    id: "6",
    slug: "best-personal-finance-apps",
    title: "10 Best Personal Finance Apps for Indian Users in 2024",
    excerpt: "Discover the top mobile applications that can help you budget, save, invest, and manage your finances more effectively.",
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Personal Finance",
    author: "Sunita Patel",
    authorImage: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 20, 2024",
    readTime: "7 min",
    tags: ["Personal Finance", "Budgeting Apps", "Financial Management"]
  }
];

// Sample downloadable resources data
const resources = [
  {
    id: "1",
    title: "Income Tax Return Checklist 2024-25",
    description: "A comprehensive checklist of documents and information needed for filing your Income Tax Return correctly.",
    type: "pdf",
    downloadUrl: "/downloads/itr-checklist-2024-25.txt",
    previewUrl: "/previews/itr-checklist-2024-25.jpg",
    fileSize: "1.2 MB",
    category: "Tax Planning",
    downloads: 458
  },
  {
    id: "2",
    title: "Income Tax Calculator - FY 2024-25",
    description: "A comprehensive Excel-based calculator to estimate your income tax liability under both old and new tax regimes.",
    type: "spreadsheet",
    downloadUrl: "/downloads/income-tax-calculator-2024.xlsx",
    previewUrl: "/previews/income-tax-calculator-2024.jpg",
    fileSize: "245 KB",
    category: "Tax Planning",
    downloads: 1254
  },
  {
    id: "3",
    title: "GST Filing Checklist and Timeline",
    description: "Stay on top of your GST compliance with this detailed checklist and timeline of filing requirements.",
    type: "pdf",
    downloadUrl: "/downloads/gst-filing-checklist-2024.pdf",
    previewUrl: "/previews/gst-filing-checklist-2024.jpg",
    fileSize: "1.2 MB",
    category: "GST",
    downloads: 875
  },
  {
    id: "4",
    title: "Business Expense Tracker Template",
    description: "Track your business expenses efficiently with categorization for optimal tax deductions.",
    type: "spreadsheet",
    downloadUrl: "/downloads/business-expense-tracker.xlsx",
    previewUrl: "/previews/business-expense-tracker.jpg",
    fileSize: "320 KB",
    category: "Business Finance",
    downloads: 1532
  },
  {
    id: "5",
    title: "Investment Portfolio Management Template",
    description: "Track your investment performance across different asset classes and calculate returns with this easy-to-use template.",
    type: "spreadsheet",
    downloadUrl: "/downloads/investment-portfolio-tracker.xlsx",
    previewUrl: "/previews/investment-portfolio-tracker.jpg",
    fileSize: "425 KB",
    category: "Investments",
    downloads: 967
  },
  {
    id: "6",
    title: "Retirement Planning Guide & Calculator",
    description: "Comprehensive guide to planning your retirement with a built-in calculator to estimate your retirement corpus needs.",
    type: "guide",
    downloadUrl: "/downloads/retirement-planning-toolkit.zip",
    previewUrl: "/previews/retirement-planning-toolkit.jpg",
    fileSize: "3.5 MB",
    category: "Retirement",
    downloads: 742
  },
  {
    id: "7",
    title: "Financial Goal Planning Worksheet",
    description: "Set SMART financial goals and track your progress toward achieving them with this interactive worksheet.",
    type: "document",
    downloadUrl: "/downloads/financial-goal-planning.pdf",
    previewUrl: "/previews/financial-goal-planning.jpg",
    fileSize: "890 KB",
    category: "Personal Finance",
    downloads: 1105
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All" },
  { id: "tax-planning", name: "Tax Planning" },
  { id: "gst", name: "GST" },
  { id: "investments", name: "Investments" },
  { id: "retirement", name: "Retirement" },
  { id: "business-finance", name: "Business Finance" },
  { id: "personal-finance", name: "Personal Finance" }
];

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("blog");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Filter blog posts based on search query and category
  const filteredBlogPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || post.category.replace(/\s+/g, "-").toLowerCase() === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Filter resources based on search query and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || resource.category.replace(/\s+/g, "-").toLowerCase() === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <Helmet>
        <title>Resources & Blog | Savvy Accountant Connect</title>
        <meta name="description" content="Access our collection of financial resources, guides, calculators, and insightful blog articles to help you navigate your financial journey." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Financial Resources & Insights</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Discover practical financial tools, guides, and expert insights to help you navigate your financial journey with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search resources and articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 flex-nowrap">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Blog Articles
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Downloadable Resources
              </TabsTrigger>
            </TabsList>

            {/* Blog Articles Tab */}
            <TabsContent value="blog" className="space-y-8">
              {filteredBlogPosts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogPosts.map(post => (
                    <Card key={post.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-all">
                      <div 
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.coverImage})` }}
                      />
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl line-clamp-2 hover:text-blue-600 transition-colors">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2 flex-grow">
                        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-2">
                          <img 
                            src={post.authorImage} 
                            alt={post.author} 
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" /> {post.date}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Downloadable Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              {filteredResources.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map(resource => (
                    <Card key={resource.id} className="flex overflow-hidden hover:shadow-md transition-all">
                      <div
                        className="w-1/3 bg-cover bg-center hidden md:block"
                        style={{ backgroundImage: `url(${resource.previewUrl})` }}
                      />
                      <div className="w-full md:w-2/3">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center mb-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                              {resource.category}
                            </Badge>
                            <span className="text-xs text-gray-500">{resource.fileSize}</span>
                          </div>
                          <CardTitle className="text-xl">{resource.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {resource.type} • {resource.downloads.toLocaleString()} downloads
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-gray-600 text-sm">{resource.description}</p>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button 
                            asChild
                            variant="outline" 
                            className="w-full group"
                          >
                            <a href={resource.downloadUrl} download>
                              <Download className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
                              Download {resource.type}
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Personalized Financial Guidance?</h2>
            <p className="text-gray-600 mb-8">
              Our team of financial experts can provide customized solutions tailored to your specific situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services" className="group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage; 