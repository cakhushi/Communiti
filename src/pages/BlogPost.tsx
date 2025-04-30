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
    title: "5 Essential Tax-Saving Tips for Freelancers in 2025",
    excerpt: "Maximize your deductions and minimize your tax burden with these actionable strategies for freelancers and independent contractors.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tax Planning",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 12, 2024",
    readTime: "8 min",
    tags: ["Freelancing", "Tax Deductions", "Self-Employment"],
    content: `
      <h2>Introduction</h2>
      <p>As a freelancer in India, understanding tax regulations and optimizing your tax strategy is crucial for financial success. This guide provides essential tax-saving tips specifically for freelancers in the 2025 tax year.</p>
      
      <h2>1. Choose the Right ITR Form (ITR-4 for 44ADA)</h2>
      <p>If you're using the Presumptive Taxation Scheme, file ITR-4. If not, and your income exceeds ₹2.5 lakhs, go with ITR-3.</p>
      <p>Under Section 44ADA, freelancers can declare 50% of their gross receipts as taxable income, significantly simplifying tax compliance while potentially reducing tax liability.</p>
      
      <h2>2. Declare All Income Sources</h2>
      <p>Apart from freelancing, include bank interest, capital gains, or side gigs. Missing any may lead to a tax notice.</p>
      <p>The Income Tax Department now cross-references income data through Form 26AS and AIS, making it essential to report all income sources accurately to avoid penalties.</p>

      <h2>3. File Before the Deadline (Usually July 31st)</h2>
      <p>Avoid late filing fees under Section 234F. Filing early also gives time to revise, if needed.</p>
      <p>Late filing can result in penalties ranging from ₹1,000 to ₹10,000 depending on your income level and delay duration. Early filing also allows time for corrections before deadlines.</p>

      <h2>4. Reconcile 26AS & AIS with Your Invoices</h2>
      <p>Match your reported income with Form 26AS and Annual Information Statement (AIS)—they show what clients and banks have reported to the IT department.</p>
      <p>These documents serve as a cross-verification mechanism, and any discrepancies could trigger tax notices. Regular reconciliation ensures your tax filing aligns with what the tax department already knows about your income.</p>

      <h2>5. Pay Advance Tax Quarterly</h2>
      <p>Freelancers must pay advance tax if total tax liability exceeds ₹10,000/year. Missing it can attract interest under Sections 234B & 234C.</p>
      <p>The due dates for advance tax payments are:</p>
      <ul>
        <li>By June 15: 15% of estimated annual tax</li>
        <li>By September 15: 45% of estimated annual tax</li>
        <li>By December 15: 75% of estimated annual tax</li>
        <li>By March 15: 100% of estimated annual tax</li>
      </ul>
      <p>Failure to pay advance tax on time can result in interest charges of 1% per month, significantly increasing your overall tax burden.</p>

      <h2>Conclusion</h2>
      <p>Implementing these tax-saving strategies can significantly reduce your tax burden as a freelancer. However, tax laws are complex and frequently changing, so it's advisable to consult with a tax professional to create a personalized tax plan that addresses your specific situation.</p>
      
      <p>By being proactive about tax planning throughout the year rather than just at tax filing time, you can make more informed financial decisions and keep more of your hard-earned money.</p>
    `,
  },
  {
    id: "2",
    slug: "gst-compliance-small-business",
    title: "The Complete GST Compliance Guide for Small Businesses",
    excerpt: "Navigate the complexities of GST with this comprehensive guide tailored for small business owners.",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "GST",
    author: "Rajiv Mehta",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "April 28, 2024",
    readTime: "10 min",
    tags: ["GST", "Small Business", "Compliance"],
    content: `
      <h2>Introduction</h2>
      <p>Staying GST-compliant is crucial for any small business in India. This comprehensive guide will help you navigate GST requirements and stay on track with your compliance obligations.</p>
      
      <h2>1. GST Registration</h2>
      <p>Mandatory if your turnover exceeds ₹20 lakhs (₹10 lakhs for NE and hill states). Apply online via the GST portal.</p>
      <p>Registration process includes:</p>
      <ul>
        <li>Submitting business details through Form GST REG-01</li>
        <li>Verification through OTP or Digital Signature</li>
        <li>Receiving your GSTIN (GST Identification Number)</li>
        <li>Activating your GST portal account</li>
      </ul>

      <h2>2. Invoice Format</h2>
      <p>Use GST-compliant invoices with GSTIN, HSN/SAC codes, tax breakup (CGST/SGST/IGST), and serial numbers.</p>
      <p>A compliant invoice must include:</p>
      <ul>
        <li>Supplier's name, address, and GSTIN</li>
        <li>Recipient's name, address, and GSTIN (if registered)</li>
        <li>Sequential invoice number and date</li>
        <li>Description of goods/services</li>
        <li>HSN/SAC codes for each item</li>
        <li>Quantity and value of goods/services</li>
        <li>Tax rate and amount (CGST/SGST/IGST)</li>
        <li>Total value including taxes</li>
      </ul>

      <h2>3. Monthly/Quarterly Returns</h2>
      <p>There are several returns you need to file regularly:</p>
      <ul>
        <li><strong>GSTR-1:</strong> Outward sales (monthly/quarterly)</li>
        <li><strong>GSTR-3B:</strong> Summary return with tax payment</li>
        <li><strong>GSTR-9:</strong> Annual return (if turnover > ₹2 crore)</li>
      </ul>
      <p>Due dates for regular filers:</p>
      <ul>
        <li>GSTR-1: 11th of the next month (or quarter)</li>
        <li>GSTR-3B: 20th of the next month (or quarter)</li>
        <li>GSTR-9: 31st December of the next financial year</li>
      </ul>

      <h2>4. Input Tax Credit (ITC)</h2>
      <p>Claim ITC only on eligible purchases used for business. Match with GSTR-2B and ensure your vendors file returns on time.</p>
      <p>To maximize ITC benefits:</p>
      <ul>
        <li>Verify that your supplier is GST-registered and has filed returns</li>
        <li>Reconcile your purchase records with GSTR-2B before filing returns</li>
        <li>Maintain proper documentation of all input tax claims</li>
        <li>Ensure purchases are used for business purposes</li>
        <li>Claim ITC within the specified timeline (currently before filing September return of next FY)</li>
      </ul>

      <h2>5. Maintain Records</h2>
      <p>Keep all bills, purchase registers, and return filings for at least 6 years. This helps during audits or notices.</p>
      <p>Essential records to maintain:</p>
      <ul>
        <li>All purchase and sales invoices</li>
        <li>Debit and credit notes</li>
        <li>Electronic cash/credit ledgers</li>
        <li>Input tax credit registers</li>
        <li>Stock records for goods</li>
        <li>Bank statements and payment proofs</li>
      </ul>

      <h2>6. Avoid Common Mistakes</h2>
      <p>Mismatched invoices, late filings, and non-payment of GST can lead to heavy penalties and interest.</p>
      <p>Common pitfalls to avoid:</p>
      <ul>
        <li>Missing filing deadlines (penalties start at ₹100 per day)</li>
        <li>Incorrect classification of goods/services</li>
        <li>Claiming ineligible ITC</li>
        <li>Ignoring reconciliation of GSTR-1 and GSTR-3B</li>
        <li>Not checking vendor compliance</li>
        <li>Failing to issue proper tax invoices</li>
      </ul>

      <h2>7. Opt for Composition Scheme (if eligible)</h2>
      <p>Turnover below ₹1.5 crore? Pay tax at a fixed rate and file quarterly returns with less compliance (no ITC allowed).</p>
      <p>Benefits and considerations:</p>
      <ul>
        <li>Reduced compliance burden (quarterly returns instead of monthly)</li>
        <li>Lower tax rates: 1% for traders, 5% for restaurants, 6% for other service providers</li>
        <li>Simplified record-keeping requirements</li>
        <li>Not eligible for businesses making inter-state supplies or online sales</li>
        <li>Cannot collect GST from customers</li>
        <li>Cannot claim input tax credit</li>
      </ul>

      <h2>Conclusion</h2>
      <p>While GST compliance may seem complex, following these steps systematically can help your small business stay compliant. Consider using GST-compliant accounting software to automate many of these processes and reduce errors.</p>
      
      <p>Remember that GST laws are subject to change, so stay updated through official notifications from the GST Council and consult with a tax professional when needed.</p>
    `,
  },
  {
    id: "3",
    slug: "new-tax-regime-vs-old",
    title: "New Tax Regime vs Old: Which One Should You Choose in 2024-25?",
    excerpt: "A detailed comparison of both tax regimes to help you make an informed decision for the current financial year.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tax Planning",
    author: "Harsh",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "June 2, 2024",
    readTime: "8 min",
    tags: ["Tax Planning", "ITR Filing", "Tax Benefits"],
    content: `
      <div style="line-height: 1.5; margin-top: 0; margin-bottom: 1rem;">
        <p>Choosing between the Old and New Tax Regime? Here's a quick breakdown to help you decide which option is best for your financial situation in the 2024-25 assessment year.</p>
        
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; margin: 1rem 0;">
          <thead>
            <tr style="background-color: #f0f7ff;">
              <th style="border: 1px solid #e5e7eb; padding: 0.5rem; text-align: left;">🔍 Criteria</th>
              <th style="border: 1px solid #e5e7eb; padding: 0.5rem; text-align: left;">👵 Old Regime</th>
              <th style="border: 1px solid #e5e7eb; padding: 0.5rem; text-align: left;">🆕 New Regime (2024-25)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem; font-weight: 500;">Tax Rates</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Higher rates, but with deductions</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Lower rates, no major deductions</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem; font-weight: 500;">Deductions</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Yes – 80C, 80D, HRA, etc.</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Mostly not allowed</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem; font-weight: 500;">Simplicity</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Complex with paperwork</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Simple, fewer calculations</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem; font-weight: 500;">Ideal for</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Those with high investments & deductions</td>
              <td style="border: 1px solid #e5e7eb; padding: 0.5rem;">Those with low/no deductions</td>
            </tr>
          </tbody>
        </table>
        
        <p style="font-weight: 500; margin-top: 0.5rem; margin-bottom: 0.5rem;">New Regime is now the default—but you can opt for the old one while filing.</p>
        
        <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 0.75rem; margin: 1rem 0;">
          <p style="font-weight: 600; margin: 0 0 0.25rem 0;">✅ Quick Tip:</p>
          <p style="margin: 0;">Choose Old Regime if your deductions exceed ₹3 lakh. Otherwise, New Regime might save you more!</p>
        </div>
        
        <h3 style="font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.5rem 0;">Understanding the Old Tax Regime</h3>
        <p style="margin: 0 0 0.5rem 0;">The old tax regime offers various deductions that can significantly reduce your taxable income:</p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0 0 1rem 0;">
          <li><strong>Section 80C:</strong> Investments up to ₹1.5 lakh (PPF, ELSS, etc.)</li>
          <li><strong>Section 80D:</strong> Health insurance premiums</li>
          <li><strong>HRA:</strong> Tax exemption for rent paid</li>
          <li><strong>Home Loan Interest:</strong> Deduction up to ₹2 lakh</li>
        </ul>
        
        <h3 style="font-size: 1.25rem; font-weight: 600; margin: 1.25rem 0 0.5rem 0;">Understanding the New Tax Regime</h3>
        <p style="margin: 0 0 0.5rem 0;">The new regime offers lower tax rates but removes most deductions:</p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0 0 1rem 0;">
          <li>More slabs with reduced rates</li>
          <li>No tax up to ₹3 lakh (vs ₹2.5 lakh in old regime)</li>
          <li>Standard deduction of ₹50,000 for salaried individuals</li>
          <li>No tax up to income of ₹7 lakh under Section 87A</li>
        </ul>
        
        <h3 style="font-size: 1.25rem; font-weight: 600; margin: 1.25rem 0 0.5rem 0;">When to Choose Old Regime:</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0 0 1rem 0;">
          <li>You have significant investments under Section 80C</li>
          <li>You pay rent and can claim HRA benefits</li>
          <li>You have a home loan for a self-occupied property</li>
          <li>Your total deductions exceed ₹3 lakh</li>
        </ul>
        
        <h3 style="font-size: 1.25rem; font-weight: 600; margin: 1.25rem 0 0.5rem 0;">When to Choose New Regime:</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0 0 1rem 0;">
          <li>You have minimal investments or deductions</li>
          <li>You prefer simplicity in tax calculation</li>
          <li>You're in the early stages of your career with income below ₹7 lakh</li>
        </ul>
        
        <div style="background-color: #fefce8; border-left: 4px solid #eab308; padding: 0.75rem; margin: 1rem 0;">
          <p style="font-weight: 600; margin: 0 0 0.25rem 0;">⚠️ Note:</p>
          <p style="margin: 0;">The choice between regimes can be made annually while filing your ITR. Business professionals have restrictions when switching back to the old regime.</p>
        </div>
        
        <p style="margin: 1rem 0 0 0;">Calculate your tax liability under both regimes before deciding. Consider consulting a tax professional for personalized advice.</p>
      </div>
    `,
  },
  {
    id: "4",
    slug: "investment-strategies-beginners",
    title: "Smart Investment Strategies for Beginners in 2025",
    excerpt: "Start your investment journey with these proven strategies designed for beginners in the current market.",
    coverImage: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Investment",
    author: "Sanjay Mehta",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 25, 2024",
    readTime: "9 min",
    tags: ["Investment", "Beginners", "Financial Planning"],
    content: `
      <h2 style="font-size: 1.75rem; color: #2563eb; margin-bottom: 1rem;">Introduction</h2>
      <p style="font-size: 1rem; color: #4b5563; line-height: 1.6; margin-bottom: 1.5rem;">Just starting your investment journey? Follow these beginner-friendly tips to grow your wealth smartly:</p>
      
      <ol style="counter-reset: list-counter; list-style-type: none; padding-left: 0;">
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">1</span>
            Start Early, Even Small
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Time beats amount—begin with as little as ₹500/month.</p>
        </li>
        
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">2</span>
            Set Clear Financial Goals
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Invest with a purpose—retirement, home, emergency fund, etc.</p>
        </li>
        
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">3</span>
            Diversify Your Portfolio
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Don't put all your money in one basket. Mix mutual funds, stocks, FDs, and gold.</p>
        </li>
        
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">4</span>
            Use SIPs for Mutual Funds
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Systematic Investment Plans reduce risk and build discipline.</p>
        </li>
        
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">5</span>
            Don't Chase Quick Returns
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Avoid hype and stay away from "get rich quick" schemes.</p>
        </li>
        
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">6</span>
            Build an Emergency Fund First
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Save 3–6 months' expenses before aggressive investing.</p>
        </li>
        
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">7</span>
            Understand Risk vs. Return
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Higher returns often come with higher risk. Know your comfort level.</p>
        </li>
        
        <li style="counter-increment: list-counter; margin-bottom: 1.5rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.2rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center;">
            <span style="background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 0.875rem;">8</span>
            Stay Consistent & Patient
          </h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-left: 2.5rem; margin-bottom: 0;">Wealth grows over time—not overnight. Stay invested and review annually.</p>
        </li>
      </ol>
      
      <h2 style="font-size: 1.75rem; color: #2563eb; margin-top: 2rem; margin-bottom: 1rem;">Conclusion</h2>
      <p style="font-size: 1rem; color: #4b5563; line-height: 1.6;">Investing doesn't need to be complicated. By following these straightforward strategies and remaining disciplined, even beginners can build substantial wealth over time. Remember that consistency is key, and it's never too early or too late to start your investment journey.</p>
    `,
  },
  {
    id: "5",
    slug: "accounting-software-small-business",
    title: "Top 7 Accounting Software for Small Businesses in India",
    excerpt: "Find the perfect accounting solution for your small business with our comprehensive comparison.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Accounting",
    author: "Neha Verma",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 18, 2024",
    readTime: "6 min",
    tags: ["Accounting", "Software", "Small Business", "GST"],
    content: `
      <div style="background-color: #f8fafc; padding: 2rem; border-radius: 0.75rem; margin-bottom: 2rem;">
        <h2 style="font-size: 1.75rem; color: #2563eb; margin-top: 0; margin-bottom: 1rem;">Accounting Software for Small Businesses</h2>
        <p style="font-size: 1.1rem; color: #4b5563; line-height: 1.6; margin-bottom: 1.5rem;">Managing your finances just got easier! Here are the top accounting tools small businesses in India swear by:</p>
      </div>
      
      <div style="display: grid; gap: 1.5rem; margin-bottom: 2rem;">
        <!-- TallyPrime -->
        <div style="display: flex; background-color: #f0f7ff; border-radius: 0.75rem; overflow: hidden;">
          <div style="background-color: #3b82f6; width: 0.5rem; flex-shrink: 0;"></div>
          <div style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">TallyPrime</h3>
            <p style="font-size: 1rem; color: #4b5563; margin: 0;">Most popular and GST-ready. Great for traditional businesses.</p>
          </div>
        </div>
        
        <!-- Zoho Books -->
        <div style="display: flex; background-color: #f0f7ff; border-radius: 0.75rem; overflow: hidden;">
          <div style="background-color: #3b82f6; width: 0.5rem; flex-shrink: 0;"></div>
          <div style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">Zoho Books</h3>
            <p style="font-size: 1rem; color: #4b5563; margin: 0;">Cloud-based, user-friendly, and ideal for startups & freelancers.</p>
          </div>
        </div>
        
        <!-- QuickBooks -->
        <div style="display: flex; background-color: #f0f7ff; border-radius: 0.75rem; overflow: hidden;">
          <div style="background-color: #3b82f6; width: 0.5rem; flex-shrink: 0;"></div>
          <div style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">QuickBooks (India)</h3>
            <p style="font-size: 1rem; color: #4b5563; margin: 0;">Smart automation and easy reporting (limited availability in India after 2023, alternatives like Zoho gaining ground).</p>
          </div>
        </div>
        
        <!-- Vyapar -->
        <div style="display: flex; background-color: #f0f7ff; border-radius: 0.75rem; overflow: hidden;">
          <div style="background-color: #3b82f6; width: 0.5rem; flex-shrink: 0;"></div>
          <div style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">Vyapar</h3>
            <p style="font-size: 1rem; color: #4b5563; margin: 0;">Simple, mobile-first accounting—perfect for traders and shopkeepers.</p>
          </div>
        </div>
        
        <!-- Busy Accounting -->
        <div style="display: flex; background-color: #f0f7ff; border-radius: 0.75rem; overflow: hidden;">
          <div style="background-color: #3b82f6; width: 0.5rem; flex-shrink: 0;"></div>
          <div style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">Busy Accounting</h3>
            <p style="font-size: 1rem; color: #4b5563; margin: 0;">Good for inventory-heavy businesses. GST-compliant with strong reporting.</p>
          </div>
        </div>
        
        <!-- Marg ERP -->
        <div style="display: flex; background-color: #f0f7ff; border-radius: 0.75rem; overflow: hidden;">
          <div style="background-color: #3b82f6; width: 0.5rem; flex-shrink: 0;"></div>
          <div style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">Marg ERP</h3>
            <p style="font-size: 1rem; color: #4b5563; margin: 0;">Best for retailers and pharma businesses with billing + inventory tools.</p>
          </div>
        </div>
        
        <!-- myBillBook -->
        <div style="display: flex; background-color: #f0f7ff; border-radius: 0.75rem; overflow: hidden;">
          <div style="background-color: #3b82f6; width: 0.5rem; flex-shrink: 0;"></div>
          <div style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">myBillBook</h3>
            <p style="font-size: 1rem; color: #4b5563; margin: 0;">Easy invoicing, expense tracking, and reports—great for micro-businesses.</p>
          </div>
        </div>
      </div>
      
      <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 1.5rem; border-radius: 0.5rem; margin-top: 2rem;">
        <p style="display: flex; align-items: center; font-size: 1.1rem; color: #166534; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">
          <span style="background: #22c55e; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem;">💡</span>
          Tip
        </p>
        <p style="font-size: 1rem; color: #166534; margin-left: 2.5rem; margin-bottom: 0; line-height: 1.6;">
          Choose software based on your business size, GST needs, and tech comfort level.
        </p>
      </div>
      
      <h2 style="font-size: 1.75rem; color: #2563eb; margin-top: 2rem; margin-bottom: 1rem;">Making Your Decision</h2>
      <p style="font-size: 1rem; color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">
        When selecting the right accounting software for your business, consider these factors:
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-bottom: 1.5rem;">
        <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
          <span style="color: #3b82f6; margin-right: 0.75rem;">•</span> Your business size and growth projections
        </li>
        <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
          <span style="color: #3b82f6; margin-right: 0.75rem;">•</span> Specific features you need (inventory, payroll, etc.)
        </li>
        <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
          <span style="color: #3b82f6; margin-right: 0.75rem;">•</span> Budget and pricing model preferences
        </li>
        <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
          <span style="color: #3b82f6; margin-right: 0.75rem;">•</span> Ease of use and availability of support
        </li>
        <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0; display: flex; align-items: center;">
          <span style="color: #3b82f6; margin-right: 0.75rem;">•</span> Integration with other business tools you use
        </li>
      </ul>
      <p style="font-size: 1rem; color: #4b5563; line-height: 1.6;">
        Many of these software options offer free trials, so don't hesitate to test a few before making your final decision. The right accounting software can save you time, reduce errors, and provide valuable insights to help grow your business.
      </p>
    `,
  },
  {
    id: "6",
    slug: "digital-marketing-tips-accounting-firms",
    title: "Digital Marketing Tips for Businesses in India",
    excerpt: "Learn how businesses in India can leverage digital marketing to attract and retain clients.",
    coverImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    author: "Vikram Singh",
    authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 10, 2024",
    readTime: "5 min",
    tags: ["Digital Marketing", "Social Media", "Business Growth"],
    content: `
      <div style="background-color: #f8fafc; padding: 2rem; border-radius: 0.75rem; margin-bottom: 2rem;">
        <h2 style="font-size: 1.75rem; color: #2563eb; margin-top: 0; margin-bottom: 1rem;">Digital Marketing for Indian Businesses</h2>
        <p style="font-size: 1.1rem; color: #4b5563; line-height: 1.6; margin-bottom: 1.5rem;">No matter what you sell, going digital is non-negotiable. Here are powerful tips tailored for different business types:</p>
      </div>
      
      <!-- Retail Stores -->
      <div style="background-color: #f0f7ff; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.25rem; color: #1e40af; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center;">
          <span style="background: #3b82f6; color: white; width: 36px; height: 36px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 1.25rem;">🛍️</span>
          Retail Stores
        </h3>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 0; margin-bottom: 0;">
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #3b82f6; margin-right: 0.75rem; font-size: 1.25rem;">•</span> List your store on Google My Business
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #3b82f6; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Run local Facebook/Instagram ads with offers
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0; display: flex; align-items: center;">
            <span style="color: #3b82f6; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Use WhatsApp to stay in touch with customers
          </li>
        </ul>
      </div>
      
      <!-- Food & Home-based Businesses -->
      <div style="background-color: #fff7ed; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.25rem; color: #9a3412; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center;">
          <span style="background: #ea580c; color: white; width: 36px; height: 36px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 1.25rem;">🍱</span>
          Food & Home-based Businesses
        </h3>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 0; margin-bottom: 0;">
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #ea580c; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Post regularly on Instagram with good photos
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #ea580c; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Use Zomato/Swiggy or your own delivery via WhatsApp
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0; display: flex; align-items: center;">
            <span style="color: #ea580c; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Collect and showcase customer reviews
          </li>
        </ul>
      </div>
      
      <!-- Service-Based Businesses -->
      <div style="background-color: #f0fdf4; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.25rem; color: #166534; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center;">
          <span style="background: #22c55e; color: white; width: 36px; height: 36px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 1.25rem;">💼</span>
          Service-Based Businesses (CA, Coaching, etc.)
        </h3>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 0; margin-bottom: 0;">
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #22c55e; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Build a simple, clean website
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #22c55e; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Offer free tips via blogs or YouTube
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0; display: flex; align-items: center;">
            <span style="color: #22c55e; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Run Google Ads for local visibility
          </li>
        </ul>
      </div>
      
      <!-- Handmade/Creative Sellers -->
      <div style="background-color: #fdf2f8; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.25rem; color: #9d174d; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center;">
          <span style="background: #db2777; color: white; width: 36px; height: 36px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 1.25rem;">🧵</span>
          Handmade/Creative Sellers
        </h3>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 0; margin-bottom: 0;">
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #db2777; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Sell on Instagram + marketplaces (Etsy, Amazon)
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #db2777; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Use Reels to show behind-the-scenes or process
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0; display: flex; align-items: center;">
            <span style="color: #db2777; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Offer referral discounts to customers
          </li>
        </ul>
      </div>
      
      <!-- B2B Businesses -->
      <div style="background-color: #eff6ff; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.25rem; color: #1e3a8a; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center;">
          <span style="background: #2563eb; color: white; width: 36px; height: 36px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem; font-size: 1.25rem;">🏢</span>
          B2B Businesses
        </h3>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 0; margin-bottom: 0;">
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #2563eb; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Focus on LinkedIn and email marketing
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0.75rem; display: flex; align-items: center;">
            <span style="color: #2563eb; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Share case studies or client testimonials
          </li>
          <li style="font-size: 1rem; color: #4b5563; margin-bottom: 0; display: flex; align-items: center;">
            <span style="color: #2563eb; margin-right: 0.75rem; font-size: 1.25rem;">•</span> Use SEO to rank for industry-specific keywords
          </li>
        </ul>
      </div>
      
      <!-- Pro Tip -->
      <div style="background-color: #f9fafb; border-left: 4px solid #f59e0b; padding: 1.5rem; border-radius: 0.5rem; margin-top: 2rem;">
        <p style="display: flex; align-items: center; font-size: 1.1rem; color: #b45309; margin-top: 0; margin-bottom: 0.5rem; font-weight: 600;">
          <span style="background: #f59e0b; color: white; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; margin-right: 0.75rem;">💡</span>
          Pro Tip
        </p>
        <p style="font-size: 1rem; color: #92400e; margin-left: 2.5rem; margin-bottom: 0; line-height: 1.6;">
          Don't try everything—pick 2–3 platforms your audience uses and do them well.
        </p>
      </div>
      
      <h2 style="font-size: 1.75rem; color: #2563eb; margin-top: 2rem; margin-bottom: 1rem;">Getting Started</h2>
      <p style="font-size: 1rem; color: #4b5563; line-height: 1.6;">
        Digital marketing doesn't have to be overwhelming. Start by identifying your target customer and choose one platform to master first. Consistency is more important than perfection when it comes to digital marketing. Track what works, learn from what doesn't, and gradually expand your digital presence as your business grows.
      </p>
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