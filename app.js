const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const smtpTransport = require('nodemailer-smtp-transport');

const app = express();
const port = 3000;

// Middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  // Retrieve form data
  const phone = req.body.phone;
  // Retrieve other form fields...

  // Build email message
  const subject = 'New Form Submission';
  const message = `Phone: ${phone}\n`;
  // Add other form fields to the message...

  // Configure nodemailer with OAuth2
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'your@gmail.com', // Replace with your Gmail address
        clientId: 'your-client-id', // Replace with your OAuth2 client ID
        clientSecret: 'your-client-secret', // Replace with your OAuth2 client secret
        refreshToken: 'your-refresh-token', // Replace with your OAuth2 refresh token
        accessToken: 'your-access-token' // Replace with your OAuth2 access token
      }
    })
  );

  // Set up email options
  const mailOptions = {
    from: 'your@gmail.com',
    to: 'victoriasneha04@gmail.com',  // Replace with your actual email address
    subject: subject,
    text: message
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent: ' + info.response);
  });

  // Respond to the client (optional)
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
