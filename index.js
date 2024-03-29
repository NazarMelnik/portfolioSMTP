const express = require('express');
const nodeMailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true, limit: 20000000 }));
app.use(bodyParser.json( { limit: 20000000 } ));
app.use(express.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            html: require('./template/sender')(req.body)
        };
        transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
});

app.listen(port, () => {
    console.log(`Server was runned at port: ${port}`);
})