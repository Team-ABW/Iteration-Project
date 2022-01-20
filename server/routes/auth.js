const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/authController.js');
const { cookieController } = require('../controllers/authController.js');
const { sessionController } = require('../controllers/authController.js');

router.post('/verify', 
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(200)
  });
router.post('/create', 
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(200)
  });

  
  
  
  
  
  
  
  module.exports = router