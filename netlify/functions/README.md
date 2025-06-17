# Netlify Functions for 3D Portfolio

This directory contains serverless functions for the 3D Portfolio project.

## Email Function

The `sendEmail.js` function handles sending emails from the contact form using Brevo (formerly Sendinblue).

### Setup

1. Create a Brevo account at [https://www.brevo.com/](https://www.brevo.com/) if you don't have one
2. Get your API key from the Brevo dashboard:
   - Log in to your Brevo account
   - Go to SMTP & API > API Keys
   - Create a new API key or use an existing one
3. Deploy your site to Netlify
4. In the Netlify dashboard, go to Site settings > Environment variables
5. Add the following environment variable:
   - `BREVO_API_KEY`: Your Brevo API key

### Testing Locally

To test the functions locally:

1. Install the Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify dev` in the project root
3. Your functions will be available at `http://localhost:8888/.netlify/functions/sendEmail`
