const models = require('../model/auth.js');
const bcrypt = require('bcrypt')

const cookieController = {};
//store the user id in a cookie
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user.id, {httpOnly: true, secure: true, sameSite: true},);
  return next();
}

const sessionController = {};
//find the appropriate session for this request in the database, then verify whether or not the session is still valid.
sessionController.isLoggedIn = (req, res, next) => {
  models.Session.findOne({cookieId: req.cookies.ssid}, (err, session) => {
    if (err) {
      return next('Error in sessionController.isLoggedIn: ' + JSON.stringify(err));
    } else if (!session) {
      res.redirect('/login');
    } else {
      return next();
    }
  })
};
//create and save a new Session into the database.This is the middleware that we pass in either when somebody logs in or signs up
sessionController.startSession = (req, res, next) => {
  models.Session.create({ cookieId: res.locals.user.id}, (err, session) => {
    console.log(res.locals.user.id)
    if (err) return next('Error in sessionController.startSession: ' + JSON.stringify(err));
    else return next();
  });
};

const userController = {};
//retrieve all users from the database and stores it into res.locals before moving on to next middleware.
userController.getAllUsers = (req, res, next) => {
  models.User.find({}, (err, users) => {
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    res.locals.users = users;
    return next();
  });
};
//create and save a new User into the database.
userController.createUser = async (req, res, next) => {
  const {username, password} = req.body;
  if (!username || !password) return next('Missing username or password in userController.createUser');
  console.log(username, password)
  try{
  const user = await models.User.create({username, password})
  res.locals.user = user
  console.log('create ding')
  return next()
  }
  catch(error){
  console.log(error)}
};
//Obtain username and password from the request body, locate the appropriate user in the database, and then authenticate the submitted password against the password stored in the database.
userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body;
  if (!username || !password) return next('Missing username or password in userController.verifyUser');

  models.User.findOne({username}, (err, user) => {
    console.log(user)
    if (err) {
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    } else if (!user) {
      res.send('false')
      //res.redirect('localhost:8080/auth/signup')
    } else {
      bcrypt.compare(password, user.password)
        .then(result => {
          if (!result) {
            console.log(result)
            res.send('false password')
          }
          else {
            res.locals.user = user;
            return next();
          }
        })
        .catch(err => {
          return next('Error in userController.verifyUser: ' + JSON.stringify(err));
        })
    }
  })
}


module.exports = {
  sessionController,
  cookieController,
  userController
}