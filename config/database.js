const mongoose = require('mongoose');

// MongoDB connection URI
const mongoDB = 'mongodb://127.0.0.1/BlockVotes';

mongoose.set("strictQuery", true);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle connection errors
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});


mongoose.connection.once('open', () => {
    console.log('Connectedxs to MongoDB');
});

// Export the Mongoose object
module.exports = mongoose;
