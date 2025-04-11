const mongoose = require('mongoose');
const QuoteModel = require('../backend/model/quote');

const MONGO_URI = 'mongodb://127.0.0.1:27017/QuoteApp';

const seedQuotes = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected');

        // Optional: Clear existing data
        await QuoteModel.deleteMany({});

        // Sample data
        const sampleQuotes = [
            {
                author: "Albert Einstein",
                text: "Life is like riding a bicycle. To keep your balance you must keep moving."
            },
            {
                author: "Nelson Mandela",
                text: "It always seems impossible until it’s done."
            },
            {
                author: "Walt Disney",
                text: "The way to get started is to quit talking and begin doing."
            }, {
                author: "Steve Jobs",
                text: "Your time is limited, so don’t waste it living someone else’s life."
            },
            {
                author: "Eleanor Roosevelt",
                text: "The future belongs to those who believe in the beauty of their dreams."
            },
            {
                author: "Mahatma Gandhi",
                text: "Be the change that you wish to see in the world."
            },
            {
                author: "Confucius",
                text: "It does not matter how slowly you go as long as you do not stop."
            },
            {
                author: "Theodore Roosevelt",
                text: "Believe you can and you’re halfway there."
            },
            {
                author: "Henry Ford",
                text: "Whether you think you can or you think you can’t, you’re right."
            },
            {
                author: "Martin Luther King Jr.",
                text: "Faith is taking the first step even when you don’t see the whole staircase."
            }
        ];

        await QuoteModel.insertMany(sampleQuotes);
        console.log('Quotes seeded successfully!');
    } catch (error) {
        console.error('Error seeding quotes:', error);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    }
};

seedQuotes();