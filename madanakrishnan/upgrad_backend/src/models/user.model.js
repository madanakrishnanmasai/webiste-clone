const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: false
  }],
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'form',
    required: false
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User