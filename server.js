require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const NodeCache = require('node-cache');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;
const cache = new NodeCache({ stdTTL: 3600 }); // Cache data for 1 hour

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.trim() // Trim in case of extra spaces
    }
});

// Log email and password for debugging (REMOVE THIS IN PRODUCTION)
console.log(`Email User: ${process.env.EMAIL_USER}`);
console.log(`Email Password: ${process.env.EMAIL_PASS}`);

// Endpoint to handle email form submission
app.post('/send-email', (req, res) => {
    console.log('Received form data:', req.body); // Debugging log
    const { naam, email, reason, bericht } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Hulpdienstvoertuigenbenelux - ${reason} - ${naam}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                <p><strong>Naam:</strong><br>${naam}</p>
                <hr>
                <p><strong>Email:</strong><br><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                <hr>
                <p><strong>Reden:</strong><br>${reason}</p>
                <hr>
                <p><strong>Bericht:</strong><br>${bericht.replace(/\n/g, '<br>')}</p>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email.' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully.' });
    });
});


// Route to fetch Google Sheets data
app.get('/fetch-sheet', async (req, res) => {
    const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
    const API_KEY = process.env.API_KEY;
    const region = req.query.region || 'NL';
    const cacheKey = `sheetData_${region}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        console.log(`[${new Date().toISOString()}] Serving cached data for region: ${region}`);
        return res.json(cachedData);
    }

    const SheetName = region === 'NL' ? 'MegaSheetNL' : region === 'BE' ? 'MegaSheetBE' : null;
    if (!SheetName) return res.status(400).json({ error: 'Invalid region specified' });

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SheetName}?key=${API_KEY}`;
    console.log(`[${new Date().toISOString()}] Fetching data from Google Sheets...`);

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.values) {
            console.warn(`[${new Date().toISOString()}] Warning: No data received.`);
            return res.status(404).json({ error: 'No data found in Google Sheets' });
        }

        console.log(`[${new Date().toISOString()}] Successfully fetched ${data.values.length} rows.`);
        cache.set(cacheKey, data);
        res.json(data);
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error fetching data:`, error);
        res.status(500).json({ error: 'Failed to fetch data from Google Sheets' });
    }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'list.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n=================================`);
    console.log(` Server started at: http://localhost:${PORT} `);
    console.log(`=================================\n`);
});