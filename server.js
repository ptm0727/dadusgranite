const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const nodemailer = require('nodemailer');

const app = express();

// Set up session and flash middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());

// Configure Nodemailer transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'prathamjpm07@gmail.com',
    pass: 'Pr@th@m27',
  },
});

// Send email route
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: 'prathamjpm07@gmail.com',
    to: 'prathamjpm07@gmail.com',
    subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      req.flash('error', 'Failed to send email. Please try again later.');
      console.error('Error sending email:', error);
    } else {
      req.flash('success', 'Email sent successfully.');
      console.log('Email sent:', info.response);
    }

    res.redirect('/contact'); // Redirect back to the contact page
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
