
//*****************REQUIRES***************************

var express = require('express');
var mongoose = require('mongoose');
var test = require('validator');

var router = express.Router();


//********************USERFORM API**************************************

router.post('/userform', function(req, res, next) {
   const username = req.body.form.username;
   const accountNum = req.body.form.accountNum;
   const email = req.body.form.email;

   if (username && accountNum && email && test.isNumeric(accountNum) && test.isEmail(email)){
      res.send(`Thank you for your personal infromation ${req.body.form.username}. ❤️ With love from Nigerian Prince`);
   } else {
      res.status(400).send("You forgot to fill in VALID bank account and/or username");
   }
});


module.exports = router;
