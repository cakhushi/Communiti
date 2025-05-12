import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create absolute path to output file
const outputPath = path.join(__dirname, '..', 'public', 'downloads', 'GST-Calendar-FY24-25.pdf');

// Create a new PDF document
const doc = new PDFDocument({
  size: 'A4',
  margin: 50,
  info: {
    Title: 'GST Return Filing Calendar FY 2024-25',
    Author: 'Savvy Accountant Connect',
    Subject: 'GST Calendar',
    Keywords: 'GST, Calendar, Returns, 2024-25'
  }
});

// Pipe the PDF to a file
doc.pipe(createWriteStream(outputPath));

// Add header with title
doc.fontSize(24)
   .fillColor('#2563eb') // Blue color
   .text('GST Return Filing Calendar', { align: 'center' })
   .fontSize(18)
   .fillColor('#1e40af') // Darker blue
   .text('Financial Year 2024-25', { align: 'center' })
   .moveDown(1);

// Add subtitle
doc.fontSize(14)
   .fillColor('#4b5563') // Gray color
   .text('Important due dates for GST return filing and compliance', { align: 'center' })
   .moveDown(2);

// Helper function to create section headers
const createSectionHeader = (title) => {
  doc.fontSize(16)
     .fillColor('#1e40af') // Dark blue
     .text(title, { underline: true })
     .moveDown(0.5);
};

// Helper function to create table headers
const createTableHeader = (headers) => {
  const startX = 50;
  const startY = doc.y;
  const colWidth = (doc.page.width - 100) / headers.length;
  
  headers.forEach((header, i) => {
    doc.fontSize(12)
       .fillColor('#1e40af')
       .text(header, startX + (i * colWidth), startY, {
         width: colWidth,
         align: 'left'
       });
  });
  
  doc.moveDown(1);
};

// Helper function to create table rows
const createTableRow = (data) => {
  const startX = 50;
  const startY = doc.y;
  const colWidth = (doc.page.width - 100) / data.length;
  
  data.forEach((item, i) => {
    doc.fontSize(11)
       .fillColor('#1f2937')
       .text(item, startX + (i * colWidth), startY, {
         width: colWidth,
         align: 'left'
       });
  });
  
  doc.moveDown(0.5);
};

// Monthly Returns Section
createSectionHeader('Monthly Returns (GSTR-1, GSTR-3B)');
createTableHeader(['Month', 'GSTR-1 Due Date', 'GSTR-3B Due Date']);

const monthlyReturns = [
  ['April 2024', '11th May 2024', '20th May 2024'],
  ['May 2024', '11th June 2024', '20th June 2024'],
  ['June 2024', '11th July 2024', '20th July 2024'],
  ['July 2024', '11th August 2024', '20th August 2024'],
  ['August 2024', '11th September 2024', '20th September 2024'],
  ['September 2024', '11th October 2024', '20th October 2024'],
  ['October 2024', '11th November 2024', '20th November 2024'],
  ['November 2024', '11th December 2024', '20th December 2024'],
  ['December 2024', '11th January 2025', '20th January 2025'],
  ['January 2025', '11th February 2025', '20th February 2025'],
  ['February 2025', '11th March 2025', '20th March 2025'],
  ['March 2025', '11th April 2025', '20th April 2025']
];

monthlyReturns.forEach(createTableRow);
doc.moveDown(2);

// Annual Returns Section
createSectionHeader('Annual Returns');
createTableHeader(['Return Type', 'Due Date', 'Description']);

const annualReturns = [
  ['GSTR-9', '31st December 2024', 'Annual Return for Regular Taxpayers'],
  ['GSTR-9C', '31st December 2024', 'Reconciliation Statement'],
  ['GSTR-4', '30th April 2025', 'Annual Return for Composition Dealers']
];

annualReturns.forEach(createTableRow);
doc.moveDown(2);

// Important Notes Section
createSectionHeader('Important Notes');
const notes = [
  '• Late filing of returns attracts interest and late fees',
  '• Interest is charged at 18% per annum on the tax amount',
  '• Late fee is Rs. 50 per day (Rs. 20 for nil returns)',
  '• Maximum late fee is capped at Rs. 10,000 per return',
  '• E-invoicing is mandatory for businesses with turnover > Rs. 10 Cr',
  '• QRMP scheme is available for businesses with turnover < Rs. 5 Cr'
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
   .text('1. Set reminders for all due dates well in advance', { align: 'center' })
   .text('2. Maintain proper records of all transactions', { align: 'center' })
   .text('3. Reconcile your books with GST returns regularly', { align: 'center' })
   .moveDown(1)
   .text('For more information, visit: www.savvyaccountantconnect.com', { align: 'center' });

// Finalize the PDF
doc.end(); 