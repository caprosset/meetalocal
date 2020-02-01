var express = require('express');
var router = express.Router();
const User = require('./../models/User');

// PRE ROUTE MIDDLEWARE - check if user has authenticated cookie

router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 																//		|
  else {                          	//    |
  	res.redirect("/login");       	//    |
  }                                 //    |
});																	//		|
// 		 ------------------------------------  
//     | 
//     V

router.get("/main", (req, res, next) => {
  res.render("main");

});

router.get("/private", (req, res, next) => {
  User.find()
  .then((allUsersfromDB) => {
    console.log(allUsersfromDB, req.session.currentUser)
      res.render('private', {
        allUsersfromDB,
        userInfo: req.session.currentUser
      });
    })
    .catch((err) => console.log('ERRROOOORRR', err));
})


module.exports = router;