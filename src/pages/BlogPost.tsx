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
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">As a freelancer, managing your taxes efficiently is crucial for maximizing your income. Here are five essential tips to help you save on taxes in 2025.</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">1. Maintain Proper Business Records</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Keep detailed records of all your income and expenses. This includes:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>Invoices and receipts</li>
            <li>Bank statements</li>
            <li>Expense records</li>
            <li>Business-related travel logs</li>
          </ul>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">2. Claim All Eligible Deductions</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Take advantage of these common deductions:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>Home office expenses</li>
            <li>Professional development costs</li>
            <li>Equipment and software</li>
            <li>Business insurance premiums</li>
          </ul>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">3. Plan Your Tax Payments</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Stay ahead of your tax obligations by:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>Setting aside 30% of income for taxes</li>
            <li>Making quarterly advance tax payments</li>
            <li>Using tax planning software</li>
          </ul>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">4. Invest in Tax-Saving Instruments</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Consider these tax-saving options:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>Section 80C investments (up to ₹1.5 lakh)</li>
            <li>Health insurance premiums (Section 80D)</li>
            <li>NPS contributions (additional ₹50,000)</li>
          </ul>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">5. Stay Updated with Tax Laws</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Keep yourself informed about:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>New tax regulations</li>
            <li>Changes in deduction limits</li>
            <li>Filing deadlines</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Pro Tips</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>Consider hiring a tax professional for complex situations</li>
            <li>Use digital tools for expense tracking</li>
            <li>Keep personal and business finances separate</li>
            <li>Plan your income and expenses strategically</li>
          </ul>
        </div>
      </div>
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
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">Staying GST-compliant is crucial for any small business in India. This comprehensive guide will help you navigate GST requirements and stay on track with your compliance obligations.</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">1. GST Registration</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Mandatory if your turnover exceeds ₹20 lakhs (₹10 lakhs for NE and hill states). Apply online via the GST portal.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2">Registration process includes:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>Submitting business details through Form GST REG-01</li>
            <li>Verification through OTP or Digital Signature</li>
            <li>Receiving your GSTIN (GST Identification Number)</li>
            <li>Activating your GST portal account</li>
          </ul>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">2. Invoice Format</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Use GST-compliant invoices with GSTIN, HSN/SAC codes, tax breakup (CGST/SGST/IGST), and serial numbers.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2">A compliant invoice must include:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>Supplier's name, address, and GSTIN</li>
            <li>Recipient's name, address, and GSTIN (if registered)</li>
            <li>Sequential invoice number and date</li>
            <li>Description of goods/services</li>
            <li>HSN/SAC codes for each item</li>
            <li>Quantity and value of goods/services</li>
            <li>Tax rate and amount (CGST/SGST/IGST)</li>
            <li>Total value including taxes</li>
          </ul>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">3. Monthly/Quarterly Returns</h3>
          <p class="text-[#4F4F4F] leading-relaxed">There are several returns you need to file regularly:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li><strong>GSTR-1:</strong> Outward sales (monthly/quarterly)</li>
            <li><strong>GSTR-3B:</strong> Summary return with tax payment</li>
            <li><strong>GSTR-9:</strong> Annual return (if turnover > ₹2 crore)</li>
          </ul>
          <p class="text-[#4F4F4F] leading-relaxed mt-4">Due dates for regular filers:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>GSTR-1: 11th of the next month (or quarter)</li>
            <li>GSTR-3B: 20th of the next month (or quarter)</li>
            <li>GSTR-9: 31st December of the next financial year</li>
          </ul>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">4. Input Tax Credit (ITC)</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Claim ITC only on eligible purchases used for business. Match with GSTR-2B and ensure your vendors file returns on time.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2">To maximize ITC benefits:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>Verify that your supplier is GST-registered and has filed returns</li>
            <li>Reconcile your purchase records with GSTR-2B before filing returns</li>
            <li>Maintain proper documentation of all input tax claims</li>
            <li>Ensure purchases are used for business purposes</li>
            <li>Claim ITC within the specified timeline (currently before filing September return of next FY)</li>
          </ul>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">5. Maintain Records</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Keep all bills, purchase registers, and return filings for at least 6 years. This helps during audits or notices.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2">Essential records to maintain:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>All purchase and sales invoices</li>
            <li>Debit and credit notes</li>
            <li>Electronic cash/credit ledgers</li>
            <li>Input tax credit registers</li>
            <li>Stock records for goods</li>
            <li>Bank statements and payment proofs</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Pro Tips</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>Use GST-compliant accounting software</li>
            <li>Set reminders for return filing dates</li>
            <li>Regularly reconcile your books with GST returns</li>
            <li>Keep digital copies of all documents</li>
            <li>Stay updated with GST notifications and circulars</li>
          </ul>
        </div>
      </div>
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
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">Choosing between the Old and New Tax Regime? Here's a comprehensive comparison to help you make an informed decision for the 2024-25 assessment year.</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Key Differences</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-blue-100">
                  <th class="border border-blue-200 p-3 text-left text-[#2E2E2E]">Feature</th>
                  <th class="border border-blue-200 p-3 text-left text-[#2E2E2E]">Old Regime</th>
                  <th class="border border-blue-200 p-3 text-left text-[#2E2E2E]">New Regime</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white">
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Tax Rates</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Higher rates with deductions</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Lower rates, no major deductions</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Deductions</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Available (80C, 80D, HRA, etc.)</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Mostly not allowed</td>
                </tr>
                <tr class="bg-white">
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Simplicity</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Complex with paperwork</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Simple, fewer calculations</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Ideal for</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">High investments & deductions</td>
                  <td class="border border-blue-200 p-3 text-[#4F4F4F]">Low/no deductions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Old Tax Regime Benefits</h3>
          <p class="text-[#4F4F4F] leading-relaxed">The old regime offers various deductions that can significantly reduce your taxable income:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li><strong>Section 80C:</strong> Investments up to ₹1.5 lakh (PPF, ELSS, etc.)</li>
            <li><strong>Section 80D:</strong> Health insurance premiums</li>
            <li><strong>HRA:</strong> Tax exemption for rent paid</li>
            <li><strong>Home Loan Interest:</strong> Deduction up to ₹2 lakh</li>
            <li><strong>LTA:</strong> Leave Travel Allowance</li>
            <li><strong>Professional Tax:</strong> Up to ₹2,500</li>
          </ul>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">New Tax Regime Benefits</h3>
          <p class="text-[#4F4F4F] leading-relaxed">The new regime offers simplified tax structure with lower rates:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>No tax up to ₹3 lakh (vs ₹2.5 lakh in old regime)</li>
            <li>Standard deduction of ₹50,000 for salaried individuals</li>
            <li>No tax up to income of ₹7 lakh under Section 87A</li>
            <li>Simplified tax slabs with reduced rates</li>
            <li>No need to maintain investment proofs</li>
          </ul>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">When to Choose Old Regime</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Consider the old regime if:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>You have significant investments under Section 80C</li>
            <li>You pay rent and can claim HRA benefits</li>
            <li>You have a home loan for a self-occupied property</li>
            <li>Your total deductions exceed ₹3 lakh</li>
            <li>You have high medical insurance premiums</li>
          </ul>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">When to Choose New Regime</h3>
          <p class="text-[#4F4F4F] leading-relaxed">The new regime might be better if:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>You have minimal investments or deductions</li>
            <li>You prefer simplicity in tax calculation</li>
            <li>You're in the early stages of your career</li>
            <li>Your income is below ₹7 lakh</li>
            <li>You don't have many tax-saving investments</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Pro Tips</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>Calculate your tax liability under both regimes before deciding</li>
            <li>Consider your long-term financial goals</li>
            <li>Review your decision annually</li>
            <li>Consult a tax professional for personalized advice</li>
            <li>Remember that the choice can be made while filing your ITR</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    id: "4",
    slug: "smart-investment-strategies",
    title: "Smart Investment Strategies for Beginners in 2025",
    excerpt: "Learn the fundamentals of investing and discover strategies to build wealth over time.",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Investments",
    author: "Harsh",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "June 3, 2024",
    readTime: "10 min",
    tags: ["Investments", "Wealth Building", "Financial Planning"],
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">Starting your investment journey can be overwhelming, but with the right strategies and knowledge, you can build a strong financial foundation. This guide will help you understand the basics and make informed investment decisions.</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Investment Fundamentals</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Before diving into specific strategies, understand these key concepts:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li><strong>Risk vs. Return:</strong> Higher potential returns usually come with higher risk</li>
            <li><strong>Diversification:</strong> Spread investments across different assets to reduce risk</li>
            <li><strong>Time Horizon:</strong> Consider how long you can stay invested</li>
            <li><strong>Liquidity:</strong> How quickly you can convert investments to cash</li>
            <li><strong>Tax Efficiency:</strong> Consider tax implications of your investments</li>
          </ul>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Beginner-Friendly Investment Options</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-2">1. Mutual Funds</h4>
              <p class="text-[#4F4F4F] leading-relaxed">Professional management and diversification:</p>
              <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
                <li>Start with index funds or balanced funds</li>
                <li>Systematic Investment Plans (SIPs) for regular investing</li>
                <li>Low minimum investment amounts</li>
                <li>Professional fund management</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-2">2. Public Provident Fund (PPF)</h4>
              <p class="text-[#4F4F4F] leading-relaxed">Government-backed savings scheme:</p>
              <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
                <li>Tax-free returns</li>
                <li>15-year lock-in period</li>
                <li>Minimum investment of ₹500 per year</li>
                <li>Eligible for tax deduction under Section 80C</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-2">3. Equity-Linked Savings Scheme (ELSS)</h4>
              <p class="text-[#4F4F4F] leading-relaxed">Tax-saving mutual funds:</p>
              <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
                <li>3-year lock-in period</li>
                <li>Potential for higher returns</li>
                <li>Tax deduction under Section 80C</li>
                <li>Exposure to equity markets</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Investment Strategy Framework</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-2">1. Set Clear Goals</h4>
              <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
                <li>Define short-term and long-term objectives</li>
                <li>Quantify your financial goals</li>
                <li>Set realistic timelines</li>
                <li>Prioritize your goals</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-2">2. Create an Emergency Fund</h4>
              <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
                <li>Save 3-6 months of expenses</li>
                <li>Keep in liquid instruments</li>
                <li>Separate from investment portfolio</li>
                <li>Regularly review and update</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-2">3. Asset Allocation</h4>
              <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
                <li>Balance between equity and debt</li>
                <li>Consider your risk tolerance</li>
                <li>Review and rebalance periodically</li>
                <li>Adjust based on market conditions</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Common Investment Mistakes to Avoid</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>Investing without clear goals</li>
            <li>Following market trends blindly</li>
            <li>Not diversifying enough</li>
            <li>Panic selling during market downturns</li>
            <li>Ignoring inflation impact</li>
            <li>Not reviewing portfolio regularly</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Pro Tips</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>Start investing early to benefit from compound interest</li>
            <li>Automate your investments through SIPs</li>
            <li>Keep investment costs low</li>
            <li>Stay invested for the long term</li>
            <li>Regularly review and rebalance your portfolio</li>
            <li>Consider consulting a financial advisor for personalized advice</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    id: "5",
    slug: "top-accounting-software",
    title: "Top 7 Accounting Software for Small Businesses in India",
    excerpt: "Compare the best accounting software solutions for Indian small businesses, including features, pricing, and GST compliance.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology",
    author: "Harsh",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "June 4, 2024",
    readTime: "12 min",
    tags: ["Accounting Software", "GST", "Business Tools"],
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">Choosing the right accounting software is crucial for small businesses in India. This comprehensive guide compares the top 7 accounting solutions, focusing on GST compliance, ease of use, and value for money.</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Key Features to Consider</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>GST compliance and filing capabilities</li>
            <li>Invoice generation and management</li>
            <li>Bank reconciliation features</li>
            <li>Inventory management</li>
            <li>Multi-user access</li>
            <li>Mobile app availability</li>
            <li>Customer support quality</li>
            <li>Integration with other business tools</li>
          </ul>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">1. TallyPrime</h3>
          <div class="space-y-3">
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Best for:</strong> Traditional businesses requiring comprehensive accounting features</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Complete GST compliance</li>
              <li>Advanced inventory management</li>
              <li>Multi-company support</li>
              <li>Customizable reports</li>
            </ul>
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Pricing:</strong> Starting from ₹18,000 per year</p>
          </div>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">2. QuickBooks Online</h3>
          <div class="space-y-3">
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Best for:</strong> Modern businesses seeking cloud-based solutions</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Cloud-based access</li>
              <li>Automated bank feeds</li>
              <li>Mobile app with receipt scanning</li>
              <li>Multi-currency support</li>
            </ul>
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Pricing:</strong> Starting from ₹1,500 per month</p>
          </div>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">3. Zoho Books</h3>
          <div class="space-y-3">
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Best for:</strong> Small businesses wanting an integrated ecosystem</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Integration with Zoho suite</li>
              <li>Automated workflows</li>
              <li>Client portal</li>
              <li>Time tracking</li>
            </ul>
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Pricing:</strong> Starting from ₹2,999 per year</p>
          </div>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">4. Busy Accounting</h3>
          <div class="space-y-3">
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Best for:</strong> Manufacturing and trading businesses</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Advanced inventory features</li>
              <li>Barcode support</li>
              <li>Multi-location support</li>
              <li>Manufacturing process tracking</li>
            </ul>
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Pricing:</strong> Starting from ₹15,000 per year</p>
          </div>
        </div>

        <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">5. Marg ERP 9+</h3>
          <div class="space-y-3">
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Best for:</strong> Retail and wholesale businesses</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Point of Sale features</li>
              <li>Barcode management</li>
              <li>Multi-branch support</li>
              <li>GST compliance</li>
            </ul>
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Pricing:</strong> Starting from ₹12,000 per year</p>
          </div>
        </div>

        <div class="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">6. Vyapar</h3>
          <div class="space-y-3">
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Best for:</strong> Small retail businesses and startups</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Simple interface</li>
              <li>Mobile-first approach</li>
              <li>Basic inventory management</li>
              <li>GST billing</li>
            </ul>
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Pricing:</strong> Starting from ₹2,999 per year</p>
          </div>
        </div>

        <div class="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">7. ProfitBooks</h3>
          <div class="space-y-3">
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Best for:</strong> Service-based businesses</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Cloud-based solution</li>
              <li>Project management</li>
              <li>Time tracking</li>
              <li>Client portal</li>
            </ul>
            <p class="text-[#4F4F4F] leading-relaxed"><strong>Pricing:</strong> Starting from ₹1,999 per year</p>
          </div>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Pro Tips</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>Start with a free trial before purchasing</li>
            <li>Consider your business growth plans</li>
            <li>Check for GST compliance features</li>
            <li>Evaluate customer support quality</li>
            <li>Consider data backup options</li>
            <li>Look for mobile app availability</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: "6",
    slug: "digital-marketing-accounting",
    title: "Digital Marketing Tips for Accounting Firms",
    excerpt: "Learn effective digital marketing strategies to grow your accounting practice and attract more clients.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    author: "Harsh",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "June 5, 2024",
    readTime: "8 min",
    tags: ["Digital Marketing", "Business Growth", "Client Acquisition"],
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">In today's digital age, accounting firms need a strong online presence to attract and retain clients. This guide provides practical digital marketing strategies tailored for accounting professionals.</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Website Optimization</h3>
          <div class="space-y-4">
            <p class="text-[#4F4F4F] leading-relaxed">Your website is your digital storefront. Make it count:</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Mobile-responsive design</li>
              <li>Clear service descriptions</li>
              <li>Easy contact forms</li>
              <li>Client testimonials</li>
              <li>Blog section for content marketing</li>
              <li>SSL security certificate</li>
              <li>Fast loading speed</li>
            </ul>
          </div>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Content Marketing Strategy</h3>
          <div class="space-y-4">
            <p class="text-[#4F4F4F] leading-relaxed">Create valuable content that positions you as an expert:</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Regular blog posts on tax updates</li>
              <li>Downloadable guides and checklists</li>
              <li>Video content explaining complex topics</li>
              <li>Case studies of successful client work</li>
              <li>Newsletter with industry insights</li>
              <li>Infographics on tax deadlines</li>
            </ul>
          </div>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Social Media Presence</h3>
          <div class="space-y-4">
            <p class="text-[#4F4F4F] leading-relaxed">Build your professional network online:</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>LinkedIn for professional networking</li>
              <li>Twitter for quick updates and engagement</li>
              <li>Facebook for community building</li>
              <li>Instagram for behind-the-scenes content</li>
              <li>Regular posting schedule</li>
              <li>Engage with industry discussions</li>
            </ul>
          </div>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Local SEO Strategy</h3>
          <div class="space-y-4">
            <p class="text-[#4F4F4F] leading-relaxed">Improve your local visibility:</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Google Business Profile optimization</li>
              <li>Local directory listings</li>
              <li>Location-based keywords</li>
              <li>Local backlinks</li>
              <li>Client reviews management</li>
              <li>Local content creation</li>
            </ul>
          </div>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Email Marketing</h3>
          <div class="space-y-4">
            <p class="text-[#4F4F4F] leading-relaxed">Build and nurture client relationships:</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Regular newsletter updates</li>
              <li>Tax deadline reminders</li>
              <li>Service announcements</li>
              <li>Client success stories</li>
              <li>Personalized communication</li>
              <li>Automated email sequences</li>
            </ul>
          </div>
        </div>

        <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Paid Advertising</h3>
          <div class="space-y-4">
            <p class="text-[#4F4F4F] leading-relaxed">Strategic paid campaigns:</p>
            <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
              <li>Google Ads for local search</li>
              <li>LinkedIn ads for B2B targeting</li>
              <li>Facebook ads for brand awareness</li>
              <li>Retargeting campaigns</li>
              <li>Landing page optimization</li>
              <li>Conversion tracking</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Pro Tips</h3>
          <ul class="list-disc pl-6 space-y-2 text-[#4F4F4F]">
            <li>Consistency is key in digital marketing</li>
            <li>Track and measure your results</li>
            <li>Focus on quality over quantity</li>
            <li>Stay updated with industry trends</li>
            <li>Engage with your audience regularly</li>
            <li>Invest in professional photography</li>
          </ul>
        </div>
      </div>
    `
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

// Add Google Fonts
const googleFonts = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
`;

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
        <style>{googleFonts}</style>
      </Helmet>

      <div className="container mx-auto py-12 px-4 sm:px-6">
        {/* Back Button */}
        <Button 
          variant="outline" 
          className="mb-8 font-['Poppins']" 
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
                <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mb-3 sm:mb-0 font-['Poppins']">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-gray-500 text-sm font-['Poppins']">
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
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-['Poppins'] text-[#2E2E2E]">
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
                  <p className="font-medium font-['Poppins'] text-[#2E2E2E]">{post.author}</p>
                  <p className="text-sm text-[#4F4F4F] font-['Poppins']">Financial Advisor</p>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none font-['Poppins']"
                style={{
                  '--tw-prose-body': '#4F4F4F',
                  '--tw-prose-headings': '#2E2E2E',
                  '--tw-prose-links': '#1A73E8',
                  '--tw-prose-bold': '#2E2E2E',
                  '--tw-prose-counters': '#4F4F4F',
                  '--tw-prose-bullets': '#4F4F4F',
                  '--tw-prose-hr': '#E5E7EB',
                  '--tw-prose-quotes': '#2E2E2E',
                  '--tw-prose-quote-borders': '#E5E7EB',
                  '--tw-prose-captions': '#4F4F4F',
                  '--tw-prose-code': '#2E2E2E',
                  '--tw-prose-pre-code': '#E5E7EB',
                  '--tw-prose-pre-bg': '#1F2937',
                  '--tw-prose-th-borders': '#E5E7EB',
                  '--tw-prose-td-borders': '#E5E7EB',
                } as React.CSSProperties}
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
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors font-['Poppins']"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="font-medium font-['Poppins'] text-[#2E2E2E]">Share this article:</p>
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
              <h3 className="text-lg font-semibold mb-4 font-['Poppins'] text-[#2E2E2E]">About the Author</h3>
              <div className="flex gap-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-lg font-['Poppins'] text-[#2E2E2E]">{post.author}</p>
                  <p className="text-[#4F4F4F] mb-3 font-['Poppins']">Financial Advisor</p>
                  <p className="text-sm text-[#4F4F4F] font-['Poppins']">
                    Specialized in tax planning and financial advisory services with over 10 years of experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4 font-['Poppins'] text-[#2E2E2E]">Related Articles</h3>
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
                          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-[#1A73E8] transition-colors font-['Poppins'] text-[#2E2E2E]">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center gap-1 mt-1 text-xs text-[#4F4F4F] font-['Poppins']">
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
                  className="w-full mt-4 font-['Poppins']"
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