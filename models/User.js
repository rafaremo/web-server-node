const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  age: Number,
  active: Boolean,
  email: {
    type: String,
    required: true
  },
  photoURL: {
    type: String,
    required: true,
    default: 'https://www.feedbackhall.com/uploads/user-icon.png'
  },
  addresses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Address'
    }
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
