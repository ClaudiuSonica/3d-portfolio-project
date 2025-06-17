# 3D Portfolio Project

This project is a 3D portfolio built with Vue 3, TypeScript, and Three.js.

## Technologies Used

- Vue 3 with `<script setup>` SFCs
- TypeScript
- Vite
- Three.js for 3D graphics
- Netlify Functions for serverless backend
- Brevo (formerly Sendinblue) for email services

## Deployment to Netlify

This project is configured to be deployed on Netlify with serverless functions for the contact form email system.

### Setup Steps

1. Push your code to a GitHub repository
2. Create a new site on Netlify connected to your repository
3. Configure the environment variables for the email function:
   - Go to Site settings > Environment variables
   - Add the following variable:
     - `BREVO_API_KEY`: Your Brevo API key (can be obtained from your Brevo account dashboard)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test Netlify functions locally
npm install -g netlify-cli
netlify dev
```

For more details about the Netlify Functions, see the [functions README](netlify/functions/README.md).

## Vue 3 + TypeScript Resources

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
