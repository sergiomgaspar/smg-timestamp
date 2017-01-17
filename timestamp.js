/* 
	Timestamp Microservice for FreeCodeCamp
	by: Sergio Gaspar
	date: 2017/01/17
	
	Create miscroservice with the below user stories:
	
	US1: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
	US2: If it does, it returns both the Unix timestamp and the natural language form of that date.
	US3: If it does not contain a date or Unix timestamp, it returns null for those properties.User
*/
var express = require('express');
var fs = require('fs');
var url = require('url');
var app = express();
var port = process.env.PORT || 3000;
var isDebug = false;
var html = fs.readFileSync('index.html');

// Return null representation of the object
function getNullResponse(){
	return JSON.stringify({"unix": null,"natural": null});
};

// Return expected response from parsed date input
function getResponse(parseDt){
	var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	var timestamp;
	
	if (isNaN(parseDt)){
		// String date format in URL
		timestamp = Date.parse(parseDt);
	
	} else {
		// Numeric inserted in URL (note: input in seconds, timestamp in miliseconds)
		timestamp = parseDt * 1000;
	}
	
	var inDate=new Date();
	inDate.setTime(timestamp);
	
	// Date info for DEBUG only
	Log('D','timestamp: '+timestamp);
	Log('D',"inDate.getTime: "+inDate.getTime());
	Log('D',"inDate.getFullYear(): "+inDate.getFullYear());
	Log('D',"inDate.getMonth(): "+inDate.getMonth());
	Log('D',"inDate.getUTCDate(): "+inDate.getUTCDate());

	// Convert from miliseconds to seconds
	var secDt = inDate.getTime() / 1000;
	
	return JSON.stringify({
		"unix": secDt,
		// example: January 1, 2016
		"natural": monthNames[inDate.getMonth()]+' '+inDate.getUTCDate()+', '+inDate.getFullYear()
	});
};

// Simple Log function to print to console
function Log(level, logStr){
	if (isDebug && level === 'D') console.log("DEBUG: "+logStr);
		else if (level === 'I') console.log("INFO: "+logStr);
			else if (level === 'E') console.log("ERROR: "+logStr);
				else console.log(level+": "+logStr);
};

// START: String replace all aux functions
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
// END: String replace all aux functions

// Express app handles all GET regardless of URL (no routing)
app.get('/*', function(req, res) {
	var parts = url.parse(req.url, true);
	var path = parts.path;
		
	if (path === '/') {
		// return index.html if no timestamp requested
		res.writeHead(200);
		res.write(html);
		res.end();
	} else if (path === '/favicon.ico') {
		// Handle the site icon request... return nothing
		res.writeHead(200);
		res.end();
		} else {
			path = path.slice(1);				// Remove '/'
			path = replaceAll(path,'%20',' ');	// Handles spaces in the URL
			
			Log('I','URL: '+path);
			res.writeHead(200);
			
			if ((isNaN(path)) && (isNaN(Date.parse(path)))) {
				Log("D","Not a proper date inserted, returning null.");
				res.write(getNullResponse());
			} else {
				Log("D","Date inserted, determining output");
				res.write(getResponse(path));
			}
			res.end();
	}
	
});

// Listen on port 3000 by default, IP defaults to 127.0.0.1
app.listen(port);

// Logs port it is running on
Log('I','Server running at http://127.0.0.1:' + port + '/');
// URL to execute:  http://npm.sergiomgaspar.c9users.io/
