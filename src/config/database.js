const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/niredb');
        console.log('MongoDB konektatuta');
    } catch (error) {
        console.error('MongoDB konexio errorea:', error);
        process.exit(1);
    }
};

module.exports = connectDB;