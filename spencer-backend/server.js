import express from 'express';
import cors from 'cors';
import { PASSWORD, PORT, USER } from './config.js'; // Ensure this path is correct and the file exists
import nodemailer from 'nodemailer';

// Server creation
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoints
app.get('/', (req, res) => res.status(200).send('my contact is working'));

app.post('/contact', (req, res) => {
    const values = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        object: req.body.type,
        email: req.body.email,
        comment: req.body.comment,
    };
    console.log(values);
    // Send a response back to the client
    res.status(200).json({ message: 'Contact information received', data: values });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: USER,
          pass: PASSWORD
        },
        tls: {
            rejectUnauthorized: false // Allow self-signed certificates
        }
    });

    const mailOptions = {
        from: `${values.firstName} <${values.email}>`,
        to: USER,
        subject: values.object,
        text: values.comment,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully: ' + info.response);
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`My Server is running at: ${PORT}`);
});
