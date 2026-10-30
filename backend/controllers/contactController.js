import ContactMessage from '../models/ContactMessage.js';
import { getDBStatus } from '../config/db.js';

// In-memory array for messages if database is not yet connected
const inMemoryMessages = [];

// @desc    Submit a contact form message
// @route   POST /api/contact
// @access  Public
export const submitContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    if (getDBStatus()) {
      const newMessage = await ContactMessage.create({
        name,
        email,
        subject: subject || 'Portfolio Inquiry',
        message,
      });

      console.log(`📬 [Contact Form] Saved new message from ${name} (${email}) to MongoDB Atlas!`);

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received and saved successfully.',
        data: newMessage,
        storage: 'database',
      });
    }

    // Demo/Memory fallback
    const savedMsg = {
      _id: 'temp_' + Date.now(),
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      createdAt: new Date().toISOString(),
    };
    inMemoryMessages.unshift(savedMsg);

    console.log(`📬 [Contact Form] Demo message received from ${name} (${email}): "${subject}"`);

    return res.status(201).json({
      success: true,
      message: 'Message received! (Running in demo mode - connect MongoDB Atlas in backend/.env for persistent storage).',
      data: savedMsg,
      storage: 'memory',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.',
      error: error.message,
    });
  }
};

// @desc    Get all contact messages (Admin/Inbox)
// @route   GET /api/contact
// @access  Public
export const getContactMessages = async (req, res) => {
  try {
    if (getDBStatus()) {
      const messages = await ContactMessage.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    }

    return res.json({ success: true, count: inMemoryMessages.length, data: inMemoryMessages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
