const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['not eliminated', 'eliminated'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Country', dataSchema);