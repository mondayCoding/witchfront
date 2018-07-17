
//*****************REQUIRES***************************

var express = require('express');
var validator = require('validator');

var router = express.Router();


//***************************API (SOON)*****************************

var soonlist = [
   {objective:"get milk", complete: false, createDate:new Date(), completeDate:null},
   {objective:"feed cats", complete: false, createDate:new Date(), completeDate:null},
   {objective:"learn about healthy life", complete: false, createDate:new Date(), completeDate:null},
   {objective:"go grab a drink", complete: false, createDate:new Date(), completeDate:null},
   {objective:"forget about healthy life", complete: false, createDate:new Date(), completeDate:null},
   {objective:"contemplate your life", complete: false, createDate:new Date(), completeDate:null},
   {objective:"existential crisis", complete: false, createDate:new Date(), completeDate:null},
];


//********************SOON**************************************

router.get('/', function(req, res, next) {
   res.send(soonlist);
});

router.get('/delayed', function(req, res, next) {

   setTimeout(() => { res.send(soonlist) }, 5000);
});

router.put('/', function(req, res, next) {
   const addition = (req.body.objective).trim();
   const isProperLenght = validator.isLength(addition, { min: 3, max: 64 });
   const isNotEmpty = !validator.isEmpty(addition);

	if ( isNotEmpty && isProperLenght) {
      const newMission = {
         objective: addition,
         complete:false,
         createDate: new Date(),
         completeDate: null
      };
      soonlist.push(newMission);
      res.status(200).send(soonlist);
   }
   else {
      res.status(400).send("Task too long: max 64 characters allowed");
   }
});

//update missionlist toggle
router.put('/toggle', function(req, res, next) {
   console.log(req.body.objective);

   const toggleVal = (req.body.objective).trim();

   if (!validator.isEmpty(toggleVal)) {

      soonlist.forEach((item, i) => {
         if (item.objective === toggleVal ) {
            if (!soonlist[i].complete) {
               soonlist[i].complete = true;
               soonlist[i].completeDate = new Date();
            } else {
               soonlist[i].complete = false;
               soonlist[i].completeDate = null;
            }
         }
      });
      res.status(200).send(soonlist);
   }
   else {
      res.status(400).send();
   }
});

router.delete('/', function(req, res, next) {
   var filteredlist = soonlist.filter( item => item.objective !== req.body.objective );
   soonlist = filteredlist;
   res.send(soonlist);
   console.log(`removing item ${req.body.objective} from soonlist`);
});



module.exports = router;
