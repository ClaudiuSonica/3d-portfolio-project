// Netlify serverless function for sending emails using Brevo (formerly Sendinblue)
const SibApiV3Sdk = require('@getbrevo/brevo');

// Configure environment variables in Netlify dashboard
// BREVO_API_KEY

exports.handler = async function (event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({message: 'Method Not Allowed'})
        };
    }

    try {
        // Parse the request body
        const data = JSON.parse(event.body);
        const {name, email, message} = data;

        // Validate input
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({message: 'Missing required fields'})
            };
        }

        // Configure Brevo API client
        const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

        // Configure API key authorization
        const apiKey = apiInstance.authentications['api-key'];
        apiKey.apiKey = process.env.BREVO_API_KEY;

        // Create the email content
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

        sendSmtpEmail.subject = `New message from ${name} via Portfolio`;
        sendSmtpEmail.htmlContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;
        sendSmtpEmail.sender = {name: "Portfolio Contact Form", email: "sonix.web.dev@gmail.com"};
        sendSmtpEmail.to = [{email: "csonica95@gmail.com", name: "Claudiu Sonica"}];
        sendSmtpEmail.replyTo = {email: email, name: name};
        sendSmtpEmail.textContent = `
      Name: ${name}
      Email: ${email}

      Message:
      ${message}
    `;

        // Send the email
        await apiInstance.sendTransacEmail(sendSmtpEmail);

        return {
            statusCode: 200,
            body: JSON.stringify({message: 'Email sent successfully'})
        };
    } catch (error) {
        console.error('Error sending email:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({message: 'Error sending email', error: error.message})
        };
    }
};
