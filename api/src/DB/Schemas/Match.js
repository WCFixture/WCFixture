const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pendient', 'ongoing', 'finished'],
    required: true
  },
  countries: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    required: true
  }, 
  instance: {
    type: String,
    required: true
  },
  result: {
    type: Object,
    required: false
  },
  group: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Match', dataSchema);