import React from "react";
import Layout from "../components/Layout";
import { BlogPost } from "@/components/BlogPost";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, FileTextIcon, DownloadIcon, SearchIcon } from "lucide-react";

const blogPosts = [
  {
    title: "7 Tax-Saving Strategies for Small Business Owners in 2024",
    slug: "tax-saving-strategies-small-business-2024",
    excerpt: "Discover effective ways to minimize your tax burden while staying compliant with the latest regulations.",
    category: "Tax Planning",
    coverImage: "/images/blog/tax-saving.jpg",
    author: {
      name: "Priya Sharma",
      avatar: "/images/avatars/priya.jpg"
    },
    date: "April 15, 2024",
    readTime: "8 min read"
  },
  {
    title: "Understanding the New GST Changes for E-commerce Businesses",
    slug: "gst-changes-ecommerce-businesses",
    excerpt: "A comprehensive breakdown of recent GST modifications and how they impact online sellers.",
    category: "GST",
    coverImage: "/images/blog/gst-ecommerce.jpg",
    author: {
      name: "Rajesh Kumar",
      avatar: "/images/avatars/rajesh.jpg"
    },
    date: "March 28, 2024",
    readTime: "10 min read"
  },
  {
    title: "Investment Options to Consider Before the Financial Year Ends",
    slug: "investment-options-financial-year-end",
    excerpt: "Maximize your returns and tax benefits with these investment strategies before March 31st.",
    category: "Investments",
    coverImage: "/images/blog/investments.jpg",
    author: {
      name: "Ananya Patel",
      avatar: "/images/avatars/ananya.jpg"
    },
    date: "February 12, 2024",
    readTime: "7 min read"
  },
  {
    title: "How to Prepare Financial Statements for Your Startup",
    slug: "financial-statements-startup",
    excerpt: "A step-by-step guide to creating accurate and compliant financial reports for new businesses.",
    category: "Accounting",
    coverImage: "/images/blog/financial-statements.jpg",
    author: {
      name: "Vikram Singh",
      avatar: "/images/avatars/vikram.jpg"
    },
    date: "January 20, 2024",
    readTime: "12 min read"
  },
  {
    title: "Digital Accounting Tools Every Modern Business Should Use",
    slug: "digital-accounting-tools-modern-business",
    excerpt: "Streamline your financial processes with these cutting-edge accounting software and applications.",
    category: "Technology",
    coverImage: "/images/blog/digital-tools.jpg",
    author: {
      name: "Sneha Desai",
      avatar: "/images/avatars/sneha.jpg"
    },
    date: "January 5, 2024",
    readTime: "9 min read"
  }
];

const resources = [
  {
    title: "2024 Tax Planning Guide",
    description: "Comprehensive guide to optimize your tax strategy for the current financial year",
    type: "PDF",
    downloadUrl: "/resources/tax-planning-guide-2024.pdf",
    size: "2.4 MB"
  },
  {
    title: "GST Compliance Checklist",
    description: "Essential checklist to ensure your business remains compliant with GST regulations",
    type: "PDF",
    downloadUrl: "/resources/gst-compliance-checklist.pdf",
    size: "1.8 MB"
  },
  {
    title: "Financial Ratios Calculator",
    description: "Excel spreadsheet with pre-built formulas to calculate key financial performance indicators",
    type: "Excel",
    downloadUrl: "/resources/financial-ratios-calculator.xlsx",
    size: "3.2 MB"
  },
  {
    title: "Business Expense Tracker",
    description: "Template to monitor and categorize business expenses for tax and accounting purposes",
    type: "Excel",
    downloadUrl: "/resources/business-expense-tracker.xlsx",
    size: "2.7 MB"
  },
  {
    title: "Investment Comparison Tool",
    description: "Interactive tool to compare different investment options and their potential returns",
    type: "Excel",
    downloadUrl: "/resources/investment-comparison-tool.xlsx",
    size: "4.1 MB"
  }
];

const Blog = () => {
  return (
    <Layout title="Financial Insights & Resources | Savvy Accountant Connect">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Financial Insights & Resources
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Expert advice, industry updates, and valuable resources to help you navigate your financial journey with confidence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto mb-10 gap-4">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search articles and resources..."
              className="pl-10 w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Categories</Button>
            <Button variant="outline">Recent</Button>
          </div>
        </div>

        <Tabs defaultValue="articles" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="articles">Articles & Insights</TabsTrigger>
            <TabsTrigger value="resources">Downloadable Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button>Load More Articles</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {resource.type === "PDF" ? (
                          <FileTextIcon className="h-4 w-4 text-primary" />
                        ) : (
                          <FileIcon className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </div>
                    <CardDescription className="mt-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      {resource.type} • {resource.size}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.downloadUrl} download>
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to receive the latest financial tips, regulatory updates, and exclusive resources directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="Your email address" type="email" className="flex-grow" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 