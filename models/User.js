const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  phoneNumber: {
    type: Schema.Types.Mixed,
  },
  restaurant: {
    type: String,
  },
  resetPasswordLink: {
    data: String,
    default: '',
  },
  suspended: {
    required: false,
    type: String,
    default: 'false',
    enum: ['true', 'false'],
  },
  role: {
    type: String,
    enum: ['customer', 'vendor', 'admin'],
    default: 'customer',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
