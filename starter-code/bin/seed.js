const mongoose = require('mongoose');
const User = require('./../models/User');

users = [
  { 
    username: 'shaza',
    password: '1234',
    name: 'Shaza',
    surname: 'Alsati',
    countryOfOrigin: 'Morocco',
    age: 40,
    countryOfInterest: 'Spain',
    topicsOfInterest: 'Food',
    topicsOfExpertise: 'Cultural codes',
    profilePic: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/10264304_235912836607620_4352524681634507106_n.jpg?_nc_cat=103&_nc_ohc=k_DQR8Vg33AAX9ciW-e&_nc_ht=scontent-mad1-1.xx&oh=00b7792a550ae86044649e0e6ee57a4a&oe=5EC1B544', 
    description: ''
  },
  { 
    username: 'yousif',
    password: '1234',
    name: 'Iona',
    surname: 'E. Lee',
    countryOfOrigin: 'Morocco',
    age: 55,
    occupation: 'Legal advisor',
    countryOfInterest: 'Spain',
    topicsOfInterest: 'Professional',
    topicsOfExpertise: 'Travel tips',
    profilePic: 'https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/s960x960/14633677_1021604707965429_8389480178877912839_o.jpg?_nc_cat=111&_nc_ohc=-YsQZvEEUeEAX9QEvKk&_nc_ht=scontent-mad1-1.xx&oh=be66b0de65a6b20f8c538614e3e910fc&oe=5EC436D9', 
    description: ''
  },
  { 
    username: 'hajar',
    password: '1234',
    name: 'Hajar',
    surname: 'Cgr',
    countryOfOrigin: 'Morocco',
    age: 28,
    occupation: '',
    countryOfInterest: 'Spain',
    topicsOfInterest: 'LGTBI',
    topicsOfExpertise: 'Cultural codes',
    profilePic: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/12439496_10206116727782819_2306611596740120823_n.jpg?_nc_cat=103&_nc_ohc=nZjg-kDzLikAX_6FJJR&_nc_ht=scontent-mad1-1.xx&oh=0072a00a7fc3f0f4cd15d85f3d165c8f&oe=5ED16404', 
    description: ''
  },
  { 
    username: 'aamir',
    password: '1234',
    name: 'Aamir',
    surname: 'Abbasi',
    countryOfOrigin: 'Morocco',
    age: 35,
    occupation: 'Chef',
    countryOfInterest: 'Spain',
    topicsOfInterest: 'Technology',
    topicsOfExpertise: 'Food',
    profilePic: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/p960x960/51402279_10218635626663948_3536476148835811328_o.jpg?_nc_cat=103&_nc_ohc=ZOWVmw_Bn3YAX_033Lb&_nc_ht=scontent-mad1-1.xx&_nc_tp=6&oh=2945cb5695a64f1075ca28e6160a8e07&oe=5E929747', 
    description: ''
  },
  { 
    username: 'capucine',
    password: '1234',
    name: 'Capucine',
    surname: 'Rosset',
    countryOfOrigin: 'Spain',
    age: 32,
    occupation: 'Web developer',
    countryOfInterest: 'Morocco',
    topicsOfInterest: 'Food',
    topicsOfExpertise: 'LGTBI',
    profilePic: 'https://ca.slack-edge.com/T02CQ4EN4-UNA9DTNEQ-f2acd911b0c8-512', 
    description: ''
  },
  { 
    username: 'ioana',
    password: '1234',
    name: 'Ioana',
    surname: 'Stoica',
    countryOfOrigin: 'Spain',
    age: 27,
    occupation: 'Legal advisor',
    countryOfInterest: 'Morocco',
    topicsOfInterest: 'Travel tips',
    topicsOfExpertise: 'Professional',
    profilePic: 'https://media-exp1.licdn.com/dms/image/C4D03AQHTGAAT5GdjEw/profile-displayphoto-shrink_800_800/0?e=1585785600&v=beta&t=oEigkRNQJ6ivoj51a8HZelyexu7CabSz7phS1t61ySI', 
    description: ''
  },
  { 
    username: 'marta',
    password: '1234',
    name: 'Marta',
    surname: 'Trzaska',
    countryOfOrigin: 'Spain',
    age: 26,
    occupation: '',
    countryOfInterest: 'Morocco',
    topicsOfInterest: 'Food',
    topicsOfExpertise: 'Cultural codes',
    profilePic: 'https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/p960x960/10562773_10205874395072609_7252896847041028387_o.jpg?_nc_cat=105&_nc_ohc=QlXU_OkT-7gAX9-1r-S&_nc_ht=scontent-mad1-1.xx&_nc_tp=6&oh=c2c2c4bf21ef41c6555e8cbf0015fcbd&oe=5EDA45B4', 
    description: ''
  },
  { 
    username: 'nuria',
    password: '1234',
    name: 'Nuria',
    surname: 'Lopez',
    countryOfOrigin: 'Spain',
    age: 33,
    occupation: 'Web developer',
    countryOfInterest: 'Morocco',
    topicsOfInterest: 'Travel tips',
    topicsOfExpertise: 'Technology',
    profilePic: 'https://media-exp1.licdn.com/dms/image/C5603AQG_8fA7gExmjA/profile-displayphoto-shrink_800_800/0?e=1585785600&v=beta&t=fF97WjLEr6ntAM1G7SqqrAUTX7SyQ12AYLf-Qk1JXfo', 
    description: ''
  },
]

mongoose.connect('mongodb://localhost:27017/basic-auth-lab', { useNewUrlParser: true} )
    .then( () => {
      return User.create(users);
    })
    .then( usersDocuments => {
      console.log('Created users', usersDocuments.length); 
    })
    .catch( (err) => console.log('Error connecting to Mongo', err));

