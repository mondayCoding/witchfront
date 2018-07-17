
//*************************** REQUIRE ******************************

var express = require('express');
var mongoose = require('mongoose');
var validator = require('validator');
var connectionJSON = require('../.env.json');

var router = express.Router();


//*************************** MONGO ******************************


//connect to database
mongoose.connect(connectionJSON.mongo, (err) => {
   if (!err) console.log("mongo success");        
});

//creating schemas - data blueprints
var todoSchema = new mongoose.Schema({
   item:String
});

//create models
var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({item: 'add item to database'}).save(function(err){
//    if (err) throw err;
//    console.log("item saved to database");
// });


//*************************** GENERIC ROUTES ******************************


router.get('/', function(req, res, next) 
{
   res.render('index', { title: 'WitchNode | Welcome to the coven' });
});


router.post('/', function(req, res, next) 
{
   res.render('index', { title: 'Post: Success (' + req.body.task_name + ')' });
});

//catch all
router.get('*', function(req, res, next) 
{
   res.render('index', { title: 'WitchNode | Welcome to the coven' });
});


module.exports = router;
