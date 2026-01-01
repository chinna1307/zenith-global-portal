require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- MONGODB CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- SCHEMA DEFINITION ---
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// --- ROUTES ---
app.get('/', (req, res) => {
    res.send('Zenith Global Backend is Running with MongoDB!');
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, company, message } = req.body;
        console.log('New Inquiry:', { name, email });

        // Save to Database
        const newContact = new Contact({ name, email, company, message });
        await newContact.save();

        res.status(200).json({ 
            success: true, 
            message: 'Thank you. Your message has been saved to our database.' 
        });
    } catch (error) {
        console.error('Database Save Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});