require('dotenv').config(); // Load environment variables from .env file
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    },
    authMethod: 'PLAIN' // Specify the authentication method explicitly
});

// Email content
let mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: 'gayathriravindran100@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email!'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
