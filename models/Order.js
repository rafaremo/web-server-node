const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  restaurant: {
    type: String,
    required: true
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }
  ],
  totalPrice: Number,
  quantity: Number
});

module.exports = mongoose.model('Order', orderSchema);