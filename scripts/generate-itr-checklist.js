import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create absolute path to output file
const outputPath = path.join(__dirname, '..', 'public', 'downloads', 'itr-checklist-2024-25.pdf');

// Create a new PDF document
const doc = new PDFDocument({
  size: 'A4',
  margin: 50,
  info: {
    Title: 'Income Tax Return Checklist 2024-25',
    Author: 'Savvy Accountant Connect',
    Subject: 'ITR Filing Checklist',
    Keywords: 'ITR, Tax Filing, Checklist, 2024-25'
  }
});

// Pipe the PDF to a file
doc.pipe(createWriteStream(outputPath));

// Add header with logo and title
doc.fontSize(24)
   .fillColor('#2563eb') // Blue color
   .text('Income Tax Return Checklist', { align: 'center' })
   .fontSize(18)
   .fillColor('#1e40af') // Darker blue
   .text('Financial Year 2024-25', { align: 'center' })
   .moveDown(1);

// Add subtitle
doc.fontSize(14)
   .fillColor('#4b5563') // Gray color
   .text('Essential documents and information needed for filing your income tax return', { align: 'center' })
   .moveDown(2);

// Helper function to create section headers
const createSectionHeader = (title, icon) => {
  doc.fontSize(16)
     .fillColor('#1e40af') // Dark blue
     .text(`${icon} ${title}`, { underline: true })
     .moveDown(0.5);
};

// Helper function to create list items
const createListItem = (text) => {
  doc.fontSize(12)
     .fillColor('#1f2937') // Dark gray
     .text(`• ${text}`, { continued: false })
     .moveDown(0.3);
};

// Basic Documents section
createSectionHeader('Basic Documents', '📄');
const basicDocuments = [
  'PAN Card (Permanent Account Number)',
  'Aadhaar Card (Linked with PAN)',
  'Bank Account Details (IFSC, Account Number)',
  'Previous Year\'s ITR Acknowledgment (if filed)',
  'Personal Contact Information (Email, Phone)',
  'Current Address Proof (Aadhaar/Passport/Utility Bill)'
];
basicDocuments.forEach(createListItem);
doc.moveDown(1);

// Income Details section
createSectionHeader('Income Details', '💰');
const incomeDetails = [
  'Form 16 from Employer (if salaried)',
  'Form 16A for TDS on Other Income',
  'Form 26AS (Tax Credit Statement)',
  'Annual Information Statement (AIS)',
  'Salary Slips for All Months',
  'Income from Other Sources (Interest, Dividends)',
  'Bank Statements for All Accounts',
  'Rental Income Details (if applicable)',
  'Capital Gains Statements (for shares, property)',
  'Business Income Records (if self-employed)'
];
incomeDetails.forEach(createListItem);
doc.moveDown(1);

// Deduction Proofs section
createSectionHeader('Deduction Proofs', '💸');
const deductionProofs = [
  'Section 80C Investments (PPF, ELSS, NSC, etc.)',
  'Section 80D Health Insurance Premium Receipts',
  'Section 80G Donation Receipts',
  'Home Loan Interest Certificate (Section 24)',
  'Education Loan Interest Certificate (Section 80E)',
  'HRA Receipts and Rent Agreement (if applicable)',
  'NPS Contribution Receipt (Section 80CCD)',
  'Medical Bills for Dependent with Disability (Section 80DD)',
  'Electric Vehicle Loan Interest (Section 80EEB)',
  'Interest on Education Loan (Section 80E)'
];
deductionProofs.forEach(createListItem);
doc.moveDown(1);

// Other Essentials section
createSectionHeader('Other Essentials', '📋');
const otherEssentials = [
  'Foreign Income Details (if applicable)',
  'Foreign Assets Information (for Schedule FA)',
  'Digital Signature Certificate (if required)',
  'Business Income & Expense Records (for professionals)',
  'GST Returns (for businesses)',
  'Property Sale/Purchase Documents (if applicable)',
  'Investment Portfolio Statements',
  'Insurance Policy Documents'
];
otherEssentials.forEach(createListItem);
doc.moveDown(1);

// Important Dates section
createSectionHeader('Important Dates', '📆');
const importantDates = [
  'July 31, 2024: Due date for non-audit cases',
  'October 31, 2024: Due date for audit cases',
  'December 31, 2024: Extended due date (if announced)',
  'March 15, 2024: Last date for advance tax payment',
  'June 15, 2024: First quarter advance tax due date',
  'September 15, 2024: Second quarter advance tax due date',
  'December 15, 2024: Third quarter advance tax due date'
];
importantDates.forEach(createListItem);
doc.moveDown(2);

// Add footer with tips
doc.fontSize(12)
   .fillColor('#059669') // Green color
   .text('💡 Pro Tips:', { align: 'center' })
   .moveDown(0.5)
   .fontSize(11)
   .fillColor('#4b5563') // Gray color
   .text('1. Keep all documents organized in a separate folder', { align: 'center' })
   .text('2. Maintain digital copies of all receipts and documents', { align: 'center' })
   .text('3. Start collecting documents well before the filing deadline', { align: 'center' })
   .moveDown(1)
   .text('For more information, visit: www.savvyaccountantconnect.com', { align: 'center' });

// Finalize the PDF
doc.end(); 