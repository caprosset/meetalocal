const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  countryOfOrigin: String,
  age: Number,
  countryOfInterest: String,
  topicsOfInterest: String,
  topicsOfExpertise: String,
  profilePic: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
