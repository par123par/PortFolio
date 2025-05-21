const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).send('All fields are required!');
  }

  // Here you can process the form data, e.g., log it, save to a database, or send an email
  console.log('Contact Form Submission:', { name, email, subject, message });

  // Send a success response
  res.send('Message received successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});