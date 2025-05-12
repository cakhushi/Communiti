// EmailJS Configuration
// Important: Make sure to replace these placeholder values with your actual EmailJS details

// You can get these values from your EmailJS dashboard
// 1. Log in to https://www.emailjs.com/
// 2. Go to Email Services to find your Service ID
// 3. Go to Email Templates to find your Template ID
// 4. Get your User ID (Public Key) from the Integration section

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: "service_rgdm35z", // Replace with your actual service ID
  
  // Your EmailJS template ID
  TEMPLATE_ID: "template_9d5wj3h", // Replace with your actual template ID
  
  // Your EmailJS public key (User ID)
  USER_ID: "bScXzS3wnuwdEFZxK", // Replace with your actual public key
};

// Template Parameters Reference
// These are the parameters your EmailJS template should have:
// - name: Sender's name
// - email: Sender's email
// - phone: Sender's phone (optional)
// - subject: Email subject
// - message: Email message content
// - to_email: Recipient email (communitiservices@gmail.com)

// Example EmailJS Template:
/*
Hello,

You have received a new message from {{name}} ({{email}}):

Subject: {{subject}}

Message:
{{message}}

Phone: {{phone}}

This message was sent from your website contact form.
*/ 