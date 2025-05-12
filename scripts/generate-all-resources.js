import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create absolute path to the downloads directory
const downloadsPath = path.join(__dirname, '..', 'public', 'downloads');

// Ensure downloads directory exists
if (!fs.existsSync(downloadsPath)) {
  fs.mkdirSync(downloadsPath, { recursive: true });
  console.log(`Created directory: ${downloadsPath}`);
}

console.log('Generating all resource files...');

try {
  // Generate ITR checklist PDF
  console.log('\n1. Generating Income Tax Return Checklist...');
  execSync('node scripts/generate-itr-checklist.js', { stdio: 'inherit' });

  // Generate GST Calendar PDF
  console.log('\n2. Generating GST Return Filing Calendar...');
  execSync('node scripts/generate-gst-calendar.js', { stdio: 'inherit' });

  // Generate Investment Tax Benefits Guide PDF
  console.log('\n3. Generating Investment Tax Benefits Guide...');
  execSync('node scripts/generate-investment-guide.js', { stdio: 'inherit' });

  // Generate Business Expense Tracker Excel file
  console.log('\n4. Generating Business Expense Tracker...');
  execSync('node scripts/generate-expense-tracker.js', { stdio: 'inherit' });

  console.log('\nAll resource files generated successfully!');

  // List all generated files
  const files = fs.readdirSync(downloadsPath);
  console.log(`\nGenerated ${files.length} files in ${downloadsPath}:`);
  files.forEach(file => {
    const stats = fs.statSync(path.join(downloadsPath, file));
    console.log(`- ${file} (${Math.round(stats.size / 1024 * 10) / 10} KB)`);
  });

} catch (error) {
  console.error('Error generating resources:', error.message);
  process.exit(1);
} 