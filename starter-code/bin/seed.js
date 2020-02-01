const mongoose = require('mongoose');
const User = require('./../models/User');

users = [
  { 
    username: 'robert',
    password: '123',
    name: 'Robert',
    surname: 'E. Lee',
    countryOfOrigin: 'Romania',
    age: 25,
    occupation: 'UX designer',
    countryOfInterest: 'Gambia',
    topicsOfInterest: 'Travel tips',
    topicsOfExpertise: 'Technology',
    profilePic: '', 
    description: 'I am traveling to Nigeria in April 2020'
  },
  { 
    username: 'ioana',
    password: '123',
    name: 'Iona',
    surname: 'E. Lee',
    countryOfOrigin: 'Romania',
    age: 25,
    occupation: 'Legal advisor',
    countryOfInterest: 'Senegal',
    topicsOfInterest: 'Travel tips',
    topicsOfExpertise: 'Professional',
    profilePic: '', 
    description: 'I am traveling to Venezuela this year'
  },
  { 
    username: 'marta',
    password: '123',
    name: 'Marta',
    surname: 'E. Lee',
    countryOfOrigin: 'Poland',
    age: 25,
    occupation: 'Marketing manager',
    countryOfInterest: 'Taiwan',
    topicsOfInterest: 'Food',
    topicsOfExpertise: 'Professional',
    profilePic: '', 
    description: ''
  },
  { 
    username: 'nuria',
    password: '123',
    name: 'Nuria',
    surname: 'Lopez',
    countryOfOrigin: 'Spain',
    age: 33,
    occupation: 'Web developer',
    countryOfInterest: 'Ukrania',
    topicsOfInterest: 'Cultural codes',
    topicsOfExpertise: 'Professional',
    profilePic: '', 
    description: ''
  },
  { 
    username: 'capucine',
    password: '123',
    name: 'Capucine',
    surname: 'Rosset',
    countryOfOrigin: 'France',
    age: 32,
    occupation: 'Web developer',
    countryOfInterest: 'Bolivia',
    topicsOfInterest: 'Travel tips',
    topicsOfExpertise: 'Cultural codes',
    profilePic: '', 
    description: ''
  },
  { 
    username: 'huichi',
    password: '123',
    name: 'Huichi',
    surname: 'Chiu Huang',
    countryOfOrigin: 'Taiwan',
    age: 25,
    occupation: 'Actriz',
    countryOfInterest: '',
    topicsOfInterest: 'Professional',
    topicsOfExpertise: 'Food',
    profilePic: '', 
    description: ''
  },
  { 
    username: 'roxana',
    password: '123',
    name: 'Roxana',
    surname: 'Resnikowski',
    countryOfOrigin: 'Bolivia',
    age: 25,
    occupation: 'Nurse',
    countryOfInterest: '',
    topicsOfInterest: 'Cultural codes',
    topicsOfExpertise: 'Travel tips',
    profilePic: '', 
    description: ''
  },
  { 
    username: 'babou',
    password: '123',
    name: 'Babou',
    surname: 'Jallow',
    countryOfOrigin: 'Gambia',
    age: 37,
    occupation: 'Footballer',
    countryOfInterest: '',
    topicsOfInterest: 'Technology',
    topicsOfExpertise: 'Travel tips',
    profilePic: '', 
    description: ''
  },
  { 
    username: 'serigne',
    password: '123',
    name: 'Serigne',
    surname: 'Mbaye',
    countryOfOrigin: 'Senegal',
    age: 44,
    occupation: 'Pescador',
    countryOfInterest: '',
    topicsOfInterest: 'Professional',
    topicsOfExpertise: 'Travel tips',
    profilePic: '', 
    description: ''
  }
]

mongoose.connect('mongodb://localhost:27017/basic-auth-lab', { useNewUrlParser: true} )
    .then( () => {
      return User.create(users);
    })
    .then( usersDocuments => {
      console.log('Created users', usersDocuments.length); 
    })
    .catch( (err) => console.log('Error connecting to Mongo', err));

