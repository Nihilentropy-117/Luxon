require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, zipcode, projectType, message } = req.body;

    // Telegram Bot Configuration
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('Telegram credentials not configured');
        return res.status(500).json({ success: false, message: 'Server configuration error. Please contact support.' });
    }

    // Format message for Telegram
    const telegramMessage = `🔔 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
📍 *ZIP Code:* ${zipcode}
🏠 *Project Type:* ${projectType}
💬 *Message:*
${message || 'No message provided'}`;

    // Send to Telegram via HTTPS
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const postData = JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
    });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    try {
        await new Promise((resolve, reject) => {
            const request = https.request(url, options, (response) => {
                let data = '';
                response.on('data', (chunk) => data += chunk);
                response.on('end', () => {
                    if (response.statusCode === 200) {
                        resolve(data);
                    } else {
                        reject(new Error(`Telegram API error: ${response.statusCode}`));
                    }
                });
            });

            request.on('error', reject);
            request.write(postData);
            request.end();
        });

        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
});

// Serve index.html for all routes (SPA)
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
