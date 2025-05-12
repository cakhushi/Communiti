import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create absolute path to output file
const outputPath = path.join(__dirname, '..', 'public', 'downloads', 'Investment-Tax-Benefits-2024.pdf');

// Create a new PDF document
const doc = new PDFDocument({
  size: 'A4',
  margin: 50,
  info: {
    Title: 'Investment Tax Benefits Guide 2024',
    Author: 'Savvy Accountant Connect',
    Subject: 'Investment Tax Benefits',
    Keywords: 'Investment, Tax Benefits, 2024, Tax Planning'
  }
});

// Pipe the PDF to a file
doc.pipe(createWriteStream(outputPath));

// Add header with title
doc.fontSize(24)
   .fillColor('#2563eb') // Blue color
   .text('Investment Tax Benefits Guide', { align: 'center' })
   .fontSize(18)
   .fillColor('#1e40af') // Darker blue
   .text('Financial Year 2024-25', { align: 'center' })
   .moveDown(1);

// Add subtitle
doc.fontSize(14)
   .fillColor('#4b5563') // Gray color
   .text('Comprehensive guide to tax-saving investments and deductions', { align: 'center' })
   .moveDown(2);

// Helper function to create section headers
const createSectionHeader = (title, icon) => {
  doc.fontSize(16)
     .fillColor('#1e40af') // Dark blue
     .text(`${icon} ${title}`, { underline: true })
     .moveDown(0.5);
};

// Helper function to create investment items
const createInvestmentItem = (title, limit, description, benefits) => {
  doc.fontSize(12)
     .fillColor('#1f2937') // Dark gray
     .text(title, { continued: false })
     .moveDown(0.2);
  
  doc.fontSize(11)
     .fillColor('#4b5563') // Gray
     .text(`Maximum Deduction: ₹${limit}`, { continued: false })
     .moveDown(0.2);
  
  doc.fontSize(11)
     .fillColor('#4b5563')
     .text(description, { continued: false })
     .moveDown(0.2);
  
  if (benefits) {
    doc.fontSize(11)
       .fillColor('#059669') // Green
       .text('Key Benefits:', { continued: false })
       .moveDown(0.2);
    
    benefits.forEach(benefit => {
      doc.fontSize(11)
         .fillColor('#4b5563')
         .text(`• ${benefit}`, { continued: false })
         .moveDown(0.2);
    });
  }
  
  doc.moveDown(1);
};

// Section 80C Investments
createSectionHeader('Section 80C Investments', '💰');
const section80CInvestments = [
  {
    title: 'Public Provident Fund (PPF)',
    limit: '1,50,000',
    description: 'Long-term savings scheme with government backing and tax-free returns.',
    benefits: [
      'Tax-free interest at 7.1% p.a.',
      '15-year lock-in period',
      'Partial withdrawals allowed from 7th year'
    ]
  },
  {
    title: 'Equity Linked Savings Scheme (ELSS)',
    limit: '1,50,000',
    description: 'Tax-saving mutual funds with potential for higher returns.',
    benefits: [
      '3-year lock-in period',
      'Potential for higher returns',
      'Systematic Investment Plan (SIP) available'
    ]
  },
  {
    title: 'National Savings Certificate (NSC)',
    limit: '1,50,000',
    description: 'Fixed income investment with government guarantee.',
    benefits: [
      'Interest rate of 7.7% p.a.',
      '5-year lock-in period',
      'Compounding interest'
    ]
  }
];

section80CInvestments.forEach(inv => createInvestmentItem(inv.title, inv.limit, inv.description, inv.benefits));
doc.moveDown(1);

// Health Insurance
createSectionHeader('Health Insurance (Section 80D)', '🏥');
const healthInsurance = [
  {
    title: 'Self, Spouse & Children',
    limit: '25,000',
    description: 'Health insurance premium for self, spouse, and dependent children.',
    benefits: [
      'Additional ₹25,000 for parents',
      'Additional ₹50,000 for senior citizen parents',
      'Preventive health check-up up to ₹5,000'
    ]
  }
];

healthInsurance.forEach(inv => createInvestmentItem(inv.title, inv.limit, inv.description, inv.benefits));
doc.moveDown(1);

// Home Loan Benefits
createSectionHeader('Home Loan Benefits', '🏠');
const homeLoanBenefits = [
  {
    title: 'Home Loan Interest (Section 24)',
    limit: '2,00,000',
    description: 'Deduction on interest paid on home loan for self-occupied property.',
    benefits: [
      'Separate from Section 80C limit',
      'Available for under-construction properties',
      'Pre-EMI interest also eligible'
    ]
  },
  {
    title: 'Principal Repayment (Section 80C)',
    limit: '1,50,000',
    description: 'Deduction on principal repayment of home loan.',
    benefits: [
      'Part of Section 80C limit',
      'Available only after possession',
      'Can be claimed along with interest deduction'
    ]
  }
];

homeLoanBenefits.forEach(inv => createInvestmentItem(inv.title, inv.limit, inv.description, inv.benefits));
doc.moveDown(1);

// NPS Benefits
createSectionHeader('National Pension System (NPS)', '👥');
const npsBenefits = [
  {
    title: 'NPS Tier I Account (Section 80CCD)',
    limit: '50,000',
    description: 'Additional deduction for NPS contributions beyond Section 80C limit.',
    benefits: [
      'Tax-free returns up to 60%',
      'Pension after retirement',
      'Flexible contribution options'
    ]
  }
];

npsBenefits.forEach(inv => createInvestmentItem(inv.title, inv.limit, inv.description, inv.benefits));
doc.moveDown(2);

// Important Notes
createSectionHeader('Important Notes', '📝');
const notes = [
  '• Total deduction under Section 80C is capped at ₹1,50,000',
  '• Some investments have lock-in periods',
  '• Returns and tax benefits vary by investment type',
  '• Consider your risk appetite before investing',
  '• Consult a financial advisor for personalized advice'
];

notes.forEach(note => {
  doc.fontSize(11)
     .fillColor('#1f2937')
     .text(note)
     .moveDown(0.3);
});

doc.moveDown(2);

// Add footer with tips
doc.fontSize(12)
   .fillColor('#059669') // Green color
   .text('💡 Pro Tips:', { align: 'center' })
   .moveDown(0.5)
   .fontSize(11)
   .fillColor('#4b5563') // Gray color
   .text('1. Start tax planning early in the financial year', { align: 'center' })
   .text('2. Diversify your investments across different instruments', { align: 'center' })
   .text('3. Keep all investment proofs and receipts safely', { align: 'center' })
   .moveDown(1)
   .text('For more information, visit: www.savvyaccountantconnect.com', { align: 'center' });

// Finalize the PDF
doc.end(); 