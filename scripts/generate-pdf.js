import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';

// Create a new PDF document
const doc = new PDFDocument({
  size: 'A4',
  margin: 50
});

// Pipe the PDF to a file
doc.pipe(createWriteStream('public/downloads/itr-checklist-2024-25.pdf'));

// Add content to the PDF
doc.fontSize(24)
   .text('Income Tax Return Checklist 2024-25', { align: 'center' })
   .moveDown(2);

doc.fontSize(16)
   .text('Before you file your ITR, make sure you\'ve got everything ready. Here\'s your quick checklist:', { align: 'left' })
   .moveDown(2);

// Basic Documents section
doc.fontSize(18)
   .text('🧾 Basic Documents', { underline: true })
   .moveDown(1);

const basicDocs = [
  'PAN Card',
  'Aadhaar Card',
  'Bank account details (with IFSC)',
  'Form 16 (if salaried)',
  'Form 26AS & AIS (download from income tax portal)'
];

basicDocs.forEach(item => {
  doc.fontSize(12)
     .text(`• ${item}`)
     .moveDown(0.5);
});

doc.moveDown(1);

// Income Details section
doc.fontSize(18)
   .text('💼 Income Details', { underline: true })
   .moveDown(1);

const incomeDetails = [
  'Freelance/Business income summary',
  'Salary slips (if applicable)',
  'Interest income from FDs, savings accounts, etc.',
  'Capital gains (stocks, mutual funds, property)'
];

incomeDetails.forEach(item => {
  doc.fontSize(12)
     .text(`• ${item}`)
     .moveDown(0.5);
});

doc.moveDown(1);

// Deduction Proofs section
doc.fontSize(18)
   .text('📑 Deduction Proofs (for Old Regime)', { underline: true })
   .moveDown(1);

const deductionProofs = [
  'LIC, PPF, ELSS, NPS (for 80C)',
  'Medical insurance premium (80D)',
  'Home loan interest (80EE/80EEA)',
  'Education loan (80E)',
  'Donations (80G)'
];

deductionProofs.forEach(item => {
  doc.fontSize(12)
     .text(`• ${item}`)
     .moveDown(0.5);
});

doc.moveDown(1);

// Other Essentials section
doc.fontSize(18)
   .text('📦 Other Essentials', { underline: true })
   .moveDown(1);

const otherEssentials = [
  'Rent receipts (for HRA claims)',
  'Details of any foreign income/assets',
  'Aadhaar-linked mobile for e-verification'
];

otherEssentials.forEach(item => {
  doc.fontSize(12)
     .text(`• ${item}`)
     .moveDown(0.5);
});

doc.moveDown(1);

// Important Dates section
doc.fontSize(18)
   .text('📅 Important Dates', { underline: true })
   .moveDown(1);

const importantDates = [
  'Deadline to file: July 31, 2025 (for individuals)',
  'Advance Tax Due Dates: 15th June, Sept, Dec, March'
];

importantDates.forEach(item => {
  doc.fontSize(12)
     .text(`• ${item}`)
     .moveDown(0.5);
});

doc.moveDown(2);

// Pro Tip
doc.fontSize(14)
   .text('💡 Pro Tip: File early to avoid last-minute rush and errors.', { align: 'center' });

// Finalize the PDF
doc.end(); 