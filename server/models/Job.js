const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
    description: {
      type: String,
      required: true 
    },
    start_date: {
      type: Date,
      required: true,
      validate: {
        validator: (date) => !isNaN(date),
        message: 'Invalid date'
      },
    },
    end_date: {
      type: Date,
      required: true,
      validate: {
        validator: (date) => !isNaN(date),
        message: 'Invalid date'
      },
    },
    location: {
      type: String,
      required: true,
    },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
