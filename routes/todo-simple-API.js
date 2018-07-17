
//*************************** REQUIRES ******************************


var express = require('express');
var validator = require('validator');

var router = express.Router();


//*************************** SAMPLEDATA *****************************


var list = [
   {objective:"rivi1", complete: true, createDate:new Date(), completeDate:null},
   {objective:"rivi2", complete: true, createDate:new Date(), completeDate:null},
   {objective:"rivi3", complete: false, createDate:new Date(), completeDate:null},
   {objective:"rivi4", complete: false, createDate:new Date(), completeDate:null},
   {objective:"rivi5", complete: true, createDate:new Date(), completeDate:null},
   {objective:"rivi6", complete: true, createDate:new Date(), completeDate:null},
];


//*************************** API ******************************


//get current list
router.get('/', function (req, res, next) 
{
	res.send(list);
});

//add new item
router.put('/', function (req, res, next) 
{
   const addition = (req.body.objective).trim();
   const isProperLenght = validator.isLength(addition, { min: 3, max: 64 });
   const isNotEmpty = !validator.isEmpty(addition);

	if ( isNotEmpty && isProperLenght) {
		const newMission = {
			objective: addition,
			complete: false,
			createDate: new Date(),
			completeDate: null
		};
		list.push(newMission);
		res.status(200).send(list);
	}
	else {
		res.status(400).send("Objective too long: max 64 characters allowed");
	}
});

//remove item
router.delete('/', function(req, res, next) {
   list = list.filter( item => item.objective !== req.body.objective );
   res.send(list);
   console.log(`removed item: ${req.body.objective}`);
});

//update toggle values
router.put('/toggle', function(req, res, next) {
   const toggleVal = (req.body.objective).trim();

   if (!validator.isEmpty(toggleVal)) {

      list.forEach((item, i) => {
         if (item.objective === toggleVal ) {
            if (!list[i].complete) {
               list[i].complete = true;
               list[i].completeDate = new Date();
            } else {
               list[i].complete = false;
               list[i].completeDate = null;
            }
         }
      });
      res.status(200).send(list);
   }
   else {
      res.status(400).send();
   }
});

module.exports = router;
