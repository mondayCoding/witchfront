
//modules
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import socket from 'socket.io';
import chalk from 'chalk';

import index from './routes/index';
import statistics from './routes/statistics-API';
import todosimple from './routes/todo-simple-API';
import todosoon from './routes/todo-soon-API';
import forms from './routes/forms-API';
import users from './routes/users';
import filehandler from './routes/fileHandlerAPI';

let app = express() as any;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/api/statistics', statistics);
app.use('/api/forms', forms);
app.use('/api/todo/simple', todosimple);
app.use('/api/todo/soon', todosoon);
app.use('/api/filehandler', filehandler);
app.use('/', index);
//app.use('/', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/////////////////////////////////////////////// SECKET.IO ////////////////////////////////////////TESTING

//socket USERLIST 

let userList = [
  { name: "Admin",    type: 1,   active: false},
  { name: "Peasant",  type: 2,   active: false},
  { name: "Mario",    type: 3,   active: false},
  { name: "Peach",   type: 4,   active: false}
];

let messageHistory = [
   {user:"Admin", content:"Adding new features: xbox integration inc", timestamp:new Date(), userType: 1 },
   {user:"user", content:"timestamps are broken.....", timestamp:new Date(), userType: 2 },
   {user:"Admin", content:"hmn.... it's a feature", timestamp:new Date(), userType: 1 },
   {user:"user", content:"really... just like content leaking outside page?", timestamp:new Date(), userType: 2 },
   {user:"Admin", content:"yes", timestamp:new Date(), userType: 1 },
   {user:"user", content:"and master passwords being leaked via script?", timestamp:new Date(), userType: 2 },
   {user:"system", content:"user has been banned", timestamp:new Date(), userType: 0 }
];

function logMessage(name, message) {
	console.log(chalk.green("Server Reveived new message:"));
	console.log(chalk.yellow(`Message contents : ${message}`));
	console.log(chalk.yellow(`From user : ${name}`));
}

let fakeserver = app.listen(4000, function () {
	console.log("listening on port 4000 (fakeserver)");
});

//setup server
let io = socket(fakeserver);
let concurrentUsersLimit = 5;


//new socket connection
io.on("connection", (socket) => {

	// allow connection if room has space
	const chatroomHasSpace = io.engine.clientsCount <= concurrentUsersLimit;

	if (!chatroomHasSpace) 
	{
		socket.emit('roomIsFull', { message: 'We are very sorry, but room limit has been met' });
		socket.disconnect();
		return
	} 
	else 
	{

		socket.emit('joinedRoom', { message: 'Welcome to coven iniate,', roomStatus:userList, messageHistory });
	}

	//user requesting to join chat
	socket.on("allowChatAccessAs", (data) => 
	{
		const requestName = data.requestToUseName
		const index = userList.findIndex( (x) => x.name === requestName );
		const user  = userList[index];
		const userIsAvailable = (user.active) ? false : true;
		const previousTakenUsername = (socket.takenUserName) ? true : false;
		
		//allow access if socket doesn't already have username and username is available
		if (!previousTakenUsername && userIsAvailable)
		{			
			user.active = true;	//username is now active	
			socket.takenUserName = requestName; //associate username with socket
			
			//update room status
			socket.emit("usernameGranted", {username: requestName});
			io.sockets.emit("roomRefresh", { message: `${requestName} connected`, roomStatus:userList });

			//allow chatting 
			socket.on("chat", (data) => {
				logMessage(user.name, user.message);
				const newchatMessage = { 
					user: user.name, 
					content: data.message, 
					timestamp: new Date(), 
					userType: user.type 
				};
				io.sockets.emit("newMessages", newchatMessage);
			});

			socket.on("leaveRoom", () => {				
				socket.disconnect(0);
			});

			socket.on('disconnect', () => {	
				user.active = false;													
				io.sockets.emit('roomRefresh', {
					message:`${socket.takenUserName} left room`,
					roomStatus:userList
				});
			});
		}
		//username was taken, reject request
		else 
		{
			socket.emit('warning', { message: 'You already have a username or that username is taken' });
		}
	});

});


//////////////////////////////////////////////////////////////////////////////////////TESTING

module.exports = app;
