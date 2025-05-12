# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/97da1d3e-0440-46c7-a8a8-90d9c6b43e18

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/97da1d3e-0440-46c7-a8a8-90d9c6b43e18) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/97da1d3e-0440-46c7-a8a8-90d9c6b43e18) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Downloadable Resources

This project includes several downloadable resources for users:

1. Income Tax Return Checklist 2024-25 (PDF)
2. GST Return Filing Calendar FY 2024-25 (PDF)
3. Business Expense Tracker Template (Excel)
4. Investment Tax Benefits Guide 2024 (PDF)

### Regenerating Resource Files

If you need to modify or regenerate these files, you can use the scripts in the `scripts` directory:

```sh
# Generate all resource files at once
node scripts/generate-all-resources.js

# Or generate individual files
node scripts/generate-itr-checklist.js
node scripts/generate-gst-calendar.js
node scripts/generate-investment-guide.js
node scripts/generate-expense-tracker.js

# To validate the generated files
node scripts/validate-pdfs.js
```

All generated files are saved in the `public/downloads` directory and are accessible via the website's resources section.

## Setting Up the Contact Form with EmailJS

The contact form is configured to send emails to communitiservices@gmail.com using EmailJS. To set this up:

1. Create an account at [EmailJS](https://www.emailjs.com/) (they have a free tier)
2. Set up an Email Service (like Gmail, Outlook, etc.)
3. Create an Email Template with the following parameters:
   - `name`: Sender's name
   - `email`: Sender's email
   - `phone`: Sender's phone
   - `subject`: Email subject
   - `message`: Email message content
   - `to_email`: Recipient email (communitiservices@gmail.com)

4. Update the EmailJS configuration in `src/lib/emailjs.ts` with your:
   - Service ID
   - Template ID
   - User ID (public key)

Example template format:
```
Hello,

You have received a new message from {{name}} ({{email}}):

Subject: {{subject}}

Message:
{{message}}

Phone: {{phone}}

This message was sent from your website contact form.
```

Once configured, all form submissions from the contact page will be sent directly to communitiservices@gmail.com.
