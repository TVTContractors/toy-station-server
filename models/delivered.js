const mongoose = require('mongoose');

const deliveredSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product', // Reference to the product model (if applicable)
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    addedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Explicitly set the collection name to 'cart_items'
module.exports = mongoose.model('Delivered', deliveredSchema, 'delivered_items');
