const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name!'],
    maxlength: [20, 'A user must have less than 20 characters!']
  },
  email: {
    type: String,
    required: [true, 'A user must have an email!'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email!']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'A user must have a password!'],
    minlength: [8, 'A password length must be atleast 8']
  },
  passwordConfirm: {
    type: String,
    required: [true, 'A user must have a password!'],
    minlength: [8, 'A password length must be atleast 8']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
