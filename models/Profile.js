const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  address:{
    type: String,
    trim: true
  }, 
  lastName:{
    type: String
  },
  firstName:{
    type: String
  },
  email: {
    type: String,
    unique: true
  },
    city: {
    type: String,
  },
  profileImage:{
    type: String,
  },
  restaurant: {
    type: String,
  },
  history: {
    type: Array,
    default: []
},
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
