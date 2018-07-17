
//**************************** REQUIRES ***************************

var express = require('express');
var router = express.Router();
const winston = require('winston');
const fs = require('fs');


//*************************** WINSTON ******************************


const logDir = 'log';
const env = process.env.NODE_ENV || 'development';

// create log directery if one doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

//schema for logging servers starts to statistics.log
const tsFormat = () => (new Date()).toLocaleTimeString();
const serverStartLog = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new (winston.transports.File)({
      filename: `${logDir}/statistics.log`,
      timestamp: tsFormat,
		level: env === 'development' ? 'debug' : 'info',
		json: true
    })
  ]
});

//server started so add log to serverstartlog
serverStartLog.info('Server started');

//get current statistics.log data for api
let serverStartCount;
let serverStartLogs;

serverStartLog.query({limit:"infinite"}, function (err, result) {
	if (err) {
		 throw err;
   }
   serverStartCount = (result.file).length.toString();
   serverStartLogs = result.file;
});

//*************************** STATISTICS API ******************************

//api for requesting statistics
router.get('/', function(req, res, next) 
{  
   res.send({serverStartCount, serverStartLogs});
});


module.exports = router;
