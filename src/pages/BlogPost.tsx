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
    slug: "investment-strategies-beginners",
    title: "Smart Investment Strategies for Beginners in 2025",
    excerpt: "Start your investment journey with these proven strategies designed for beginners in the current market.",
    coverImage: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Investment",
    author: "Sanjay Mehta",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 25, 2024",
    readTime: "9 min",
    tags: ["Investment", "Financial Planning", "Wealth Building"],
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">Ready to grow your money but not sure where to start? Here are some smart, beginner-friendly strategies to kickstart your investment journey in 2025.</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">1. Start with Clear Goals</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Invest with purpose — whether it's buying a home, saving for a child's education, or building wealth. Define short-term, mid-term, and long-term goals.</p>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">2. Emergency Fund First</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Before investing, save at least 3–6 months of expenses in a liquid fund or savings account. It protects you from unexpected surprises.</p>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">3. Diversify Your Investments</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Don't put all your money in one basket! Use a mix of:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2 text-[#4F4F4F]">
            <li>💰 Fixed Deposits for safety</li>
            <li>📈 Mutual Funds/ELSS for growth</li>
            <li>🏠 Real Estate for long-term returns</li>
            <li>💸 NPS/PPF for tax savings</li>
          </ul>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">4. Start Small, Stay Consistent</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Begin with SIPs (Systematic Investment Plans) in mutual funds — even ₹500/month adds up! The power of compounding is your best friend.</p>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">5. Avoid "Hot Tips" and Quick Gains</h3>
          <p class="text-[#4F4F4F] leading-relaxed">If it sounds too good to be true, it probably is. Stick to long-term, stable options and ignore market noise.</p>
        </div>

        <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">6. Use Tax Benefits</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Make use of Sections like 80C, 80D, and 80CCD(1B) to save on tax while investing smartly.</p>
        </div>

        <div class="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">7. Review Once a Year</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Your financial goals and life situations change — so should your investments. Make time once a year to review and rebalance.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Remember</h3>
          <p class="text-[#4F4F4F] leading-relaxed">🔔 Investing is a journey, not a race. Start smart. Stay patient. Watch your wealth grow!</p>
        </div>
      </div>
    `,
  },
  {
    id: "5",
    slug: "accounting-software-small-business",
    title: "Top 7 Accounting Software for Small Businesses in India",
    excerpt: "Find the perfect accounting solution for your small business with our comprehensive comparison.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accounting",
    author: "Neha Verma",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 18, 2024",
    readTime: "6 min",
    tags: ["Accounting Software", "GST", "Small Business"],
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">Running a business? Stay ahead with the right accounting tools! Here are the top 7 software options trusted by Indian small businesses for billing, GST filing, and financial management:</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">1. TallyPrime</h3>
          <p class="text-[#4F4F4F] leading-relaxed">India's most trusted desktop-based accounting tool. Great for invoicing, inventory, GST, and compliance.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2"><strong>📌 Best for:</strong> Traditional businesses & accountants</p>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">2. Zoho Books</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Cloud-based, user-friendly, and perfect for small to mid-sized businesses. Comes with GST filing, automation & mobile app.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2"><strong>📌 Best for:</strong> Tech-savvy startups & service providers</p>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">3. QuickBooks (India)</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Clean UI and great for freelancers or service businesses. Easy bank sync & reporting. (Currently phased out but legacy users still exist)</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2"><strong>📌 Best for:</strong> Freelancers & consultants</p>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">4. Vyapar</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Made for Indian businesses with billing, stock, and expense tracking. Works offline too!</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2"><strong>📌 Best for:</strong> Small retailers & wholesalers</p>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">5. Busy Accounting</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Robust solution for inventory-led businesses with GST reports and barcode features.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2"><strong>📌 Best for:</strong> Traders, manufacturers</p>
        </div>

        <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">6. Marg ERP</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Popular for pharma and retail businesses with supply chain features.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2"><strong>📌 Best for:</strong> Distributors & industry-specific use</p>
        </div>

        <div class="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">7. Khatabook / OkCredit</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Simple digital ledger apps for daily entries, free to use, and great for mobile use.</p>
          <p class="text-[#4F4F4F] leading-relaxed mt-2"><strong>📌 Best for:</strong> Micro businesses & local shops</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Tip</h3>
          <p class="text-[#4F4F4F] leading-relaxed">💡 Choose a software that suits your business size, GST needs, and ease of use.</p>
        </div>
      </div>
    `,
  },
  {
    id: "6",
    slug: "digital-marketing-tips-accounting-firms",
    title: "Digital Marketing Tips for Accounting Firms",
    excerpt: "Learn how accounting firms can leverage digital marketing to attract and retain clients.",
    coverImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    author: "Vikram Singh",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 10, 2024",
    readTime: "5 min",
    tags: ["Digital Marketing", "Accounting", "Business Growth"],
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-[#2E2E2E] mb-4">Introduction</h2>
        <p class="text-[#4F4F4F] leading-relaxed">Want more clients for your accounting practice? Here's how you can grow online with smart, simple marketing moves:</p>

        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">1. Build a Professional Website</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Your website is your digital visiting card. Include services, contact info, client testimonials, and a blog.</p>
        </div>

        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">2. Share Tax Tips on Social Media</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Post short, useful updates on Instagram, LinkedIn, or WhatsApp — like "Last date to file ITR" or "Top tax-saving ideas."</p>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">3. Google My Business is a Must</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Register your firm on Google Maps — so people nearby can find you easily and see reviews.</p>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">4. Email Your Clients Monthly</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Send a small newsletter with tax updates, due dates, or finance tips. It builds trust and keeps you top-of-mind.</p>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">5. Use SEO-Optimized Blog Posts</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Write articles like "How to file ITR as a freelancer" — and rank on Google. It helps new clients find you.</p>
        </div>

        <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">6. Run Targeted Ads (Small Budget)</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Use Facebook or Google Ads to reach businesses or salaried professionals near you. Start with just ₹200/day.</p>
        </div>

        <div class="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">7. Answer FAQs with Reels or Posts</h3>
          <p class="text-[#4F4F4F] leading-relaxed">Common questions like "Which ITR to file?" or "Can I claim rent deduction?" — answer them with short reels or carousel posts.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold text-[#2E2E2E] mb-3">Key Principle</h3>
          <p class="text-[#4F4F4F] leading-relaxed">💡 Be seen. Be helpful. Be trusted. That's the digital way to grow your accounting firm in 2025!</p>
        </div>
      </div>
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