const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  flavor: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);