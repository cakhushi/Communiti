import ExcelJS from 'exceljs';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create absolute path to output file
const outputPath = path.join(__dirname, '..', 'public', 'downloads', 'Business-Expense-Tracker.xlsx');

// Create a new workbook
const workbook = new ExcelJS.Workbook();
workbook.creator = 'Savvy Accountant Connect';
workbook.lastModifiedBy = 'Savvy Accountant Connect';
workbook.created = new Date();
workbook.modified = new Date();

// Add properties
workbook.properties.date1904 = false;

// Create the main worksheet
const worksheet = workbook.addWorksheet('Expense Tracker', {
  properties: { tabColor: { argb: '2563eb' } },
  pageSetup: { paperSize: 9, orientation: 'landscape' }
});

// Set column widths
worksheet.columns = [
  { header: 'Date', key: 'date', width: 15 },
  { header: 'Category', key: 'category', width: 20 },
  { header: 'Description', key: 'description', width: 40 },
  { header: 'Amount', key: 'amount', width: 15 },
  { header: 'Payment Method', key: 'paymentMethod', width: 15 },
  { header: 'Vendor', key: 'vendor', width: 20 },
  { header: 'Invoice No.', key: 'invoiceNo', width: 15 },
  { header: 'Notes', key: 'notes', width: 30 }
];

// Style the header row
worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
worksheet.getRow(1).fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: '2563eb' }
};

// Add data validation for Category
const categoryValidation = {
  type: 'list',
  allowBlank: true,
  formulae: ['"Office Supplies,Travel,Meals & Entertainment,Utilities,Rent,Insurance,Marketing,Professional Services,Software & Subscriptions,Other"']
};
worksheet.getColumn('category').eachCell((cell, rowNumber) => {
  if (rowNumber > 1) {
    cell.dataValidation = categoryValidation;
  }
});

// Add data validation for Payment Method
const paymentMethodValidation = {
  type: 'list',
  allowBlank: true,
  formulae: ['"Cash,Credit Card,Debit Card,Bank Transfer,UPI,Cheque,Other"']
};
worksheet.getColumn('paymentMethod').eachCell((cell, rowNumber) => {
  if (rowNumber > 1) {
    cell.dataValidation = paymentMethodValidation;
  }
});

// Add sample data
const sampleData = [
  {
    date: new Date(),
    category: 'Office Supplies',
    description: 'Stationery and office materials',
    amount: 2500,
    paymentMethod: 'Credit Card',
    vendor: 'Office Depot',
    invoiceNo: 'INV-001',
    notes: 'Monthly office supplies'
  }
];

worksheet.addRows(sampleData);

// Add summary worksheet
const summarySheet = workbook.addWorksheet('Summary', {
  properties: { tabColor: { argb: '059669' } }
});

// Add summary headers
summarySheet.columns = [
  { header: 'Category', key: 'category', width: 20 },
  { header: 'Total Amount', key: 'total', width: 15 },
  { header: 'Percentage', key: 'percentage', width: 15 }
];

// Style summary header
summarySheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
summarySheet.getRow(1).fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: '059669' }
};

// Add formulas for summary
summarySheet.addRow({
  category: 'Office Supplies',
  total: { formula: 'SUMIF(Expense!B:B,"Office Supplies",Expense!D:D)' },
  percentage: { formula: 'B2/SUM(B:B)' }
});

// Add instructions worksheet
const instructionsSheet = workbook.addWorksheet('Instructions', {
  properties: { tabColor: { argb: '7c3aed' } }
});

instructionsSheet.columns = [
  { header: 'Instructions', key: 'instructions', width: 100 }
];

// Style instructions header
instructionsSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
instructionsSheet.getRow(1).fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: '7c3aed' }
};

// Add instructions
const instructions = [
  '1. Enter all business expenses in the Expense Tracker sheet',
  '2. Use the dropdown menus for Category and Payment Method',
  '3. Keep all receipts and invoices for verification',
  '4. The Summary sheet will automatically calculate totals by category',
  '5. Update the Summary sheet formulas if you add new categories',
  '6. Save a backup copy of this file regularly',
  '7. Use the Notes column for additional information',
  '8. Keep this file updated for accurate financial reporting'
];

instructionsSheet.addRows(instructions.map(text => ({ instructions: text })));

// Save the workbook
workbook.xlsx.writeFile(outputPath); 