const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  restaurant: {
    type: String,
  },
  productName: {
    type: String,
    trim: true,
    required: true,
    maxlength: 86,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
    maxlength: 32,
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true,
  },
  quantity: {
    type: Number,
  },
  sold: {
    type: Number,
    default: 0,
  },
  productImage: {
    type: [String],
  },
  delivered: {
    required: false,
    type: Boolean,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Products = mongoose.model('products', ProductsSchema);
