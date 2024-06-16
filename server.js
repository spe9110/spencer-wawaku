// Import the required modules using ES6 import syntax
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// App configuration
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Listener
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Nodemailer transport configuration
const mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

// Route to handle contact form submission
app.post('/contact', (req, res) => {
  const values = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    object: req.body.type,
    email: req.body.email,
    comment: req.body.comment,
  };

  const mailOptions = {
    from: `${values.firstName} <${values.email}>`,
    to: 'codewithspencer23@gmail.com',
    subject: values.object,
    text: values.comment,
  };

  mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ status: 'error', message: 'Failed to send email' });
    } else {
      console.log('Email sent successfully: ' + info.response);
      res.json({ status: 'success', message: 'Email sent successfully' });
    }
  });
});


// npm i express
// npm i cors
// npm i nodemailer
// npm i nodemon
// npm i body-parser
// npm i dotenv


/*
When using "type": "module" in your package.json, it signifies that your project is using ES6 modules. This means you should use import and export statements instead of require. Additionally, some modules (like nodemailer) might need a slight adjustment when imported.

Here's how you can update your code to work correctly with ES6 modules:

*/ 