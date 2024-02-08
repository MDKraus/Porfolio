const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

module.exports = mongoose.connection;
