const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

const emailConfig = {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b6c8b083a36b8f",
    pass: "63580f8100e650"
  },
};

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport(emailConfig);

    const mailOptions = {
      from: emailConfig.auth.user, // Use the same 'user' from emailConfig
      to: 'wojtek.117@interia.eu', // Replace with the email where you want to receive the messages
      subject: `New contact message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the messagetrhtrehtre.' });
  }
});

const PORT = 5000; // Change this to your desired port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
