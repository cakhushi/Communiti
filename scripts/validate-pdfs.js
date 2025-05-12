import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create absolute path to the downloads directory
const downloadsPath = path.join(__dirname, '..', 'public', 'downloads');

console.log('Validating files in', downloadsPath);

// List all files in the downloads directory
try {
  const files = fs.readdirSync(downloadsPath);
  console.log(`Found ${files.length} files in directory`);
  
  // Count of PDF files found
  const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));
  console.log(`\nFound ${pdfFiles.length} PDF files:`);
  
  // Validate each PDF file
  pdfFiles.forEach(file => {
    const filePath = path.join(downloadsPath, file);
    const stats = fs.statSync(filePath);
    
    // Basic validation - check if file exists and has content
    if (stats.size > 0) {
      console.log(`✅ ${file}: Valid size (${stats.size} bytes)`);
      
      // Check file header to confirm it's a PDF
      try {
        const buffer = fs.readFileSync(filePath, { encoding: null });
        const header = buffer.slice(0, 5).toString();
        if (header.includes('%PDF-')) {
          console.log(`✅ ${file}: Valid PDF header`);
        } else {
          console.log(`❌ ${file}: Invalid PDF header`);
        }
      } catch (err) {
        console.error(`Error reading ${file}:`, err.message);
      }
    } else {
      console.log(`❌ ${file}: Empty file (${stats.size} bytes)`);
    }
  });
  
  // Count of Excel files found
  const excelFiles = files.filter(file => file.toLowerCase().endsWith('.xlsx'));
  console.log(`\nFound ${excelFiles.length} Excel files:`);
  
  // Validate each Excel file
  excelFiles.forEach(file => {
    const filePath = path.join(downloadsPath, file);
    const stats = fs.statSync(filePath);
    
    // Basic validation - check if file exists and has content
    if (stats.size > 0) {
      console.log(`✅ ${file}: Valid (${stats.size} bytes)`);
    } else {
      console.log(`❌ ${file}: Empty file (${stats.size} bytes)`);
    }
  });
  
} catch (err) {
  console.error('Error reading directory:', err);
} 