const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  countryOfOrigin: String,
  age: Number,
  occupation: String,
  countryOfInterest: String,
  topicsOfInterest: {type: Array},
  topicsOfExpertise: {type: Array},
  profilePic: String, 
  description: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
