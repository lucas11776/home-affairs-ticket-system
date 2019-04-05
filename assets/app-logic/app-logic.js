/********* App Logic Functions *********/


/**
 * Developement Global / For Developerment Testing Result
 * 
 * @param {mixed}
*/
function TEST(value)
{
	// name of .class/#id to out put result
	var selector = '.test';

	$(selector).append('<hr>');
	$(selector).append(JSON.stringify(value));
	$(selector).append(value);
	$(selector).append('<hr>');
}


/**
 * Months
 * 
 * @var {array}
*/
var MONTHS = [
	'jan', 'feb', 'mar',
	'apr', 'may', 'jun',
	'jul', 'aug', 'sep',
	'oct', 'nov', 'dec'
];


/**
 * Get Current Time
 * 
 * @return {string}
*/
function getTime()
{
	var date = new Date();
	var hour   = date.getHours();
	var minute = date.getMinutes(); 

	// check if hour are not greater than 23 (Hours)
	if (hour < 10) hour = '0' + hour;

	// check is if minute are not greater than 10
	if (minute < 10) minute = '0' + minute;

	return hour + ':' + minute;	
}


/**
 * Get Current Data
 * 
 * @return {string}
*/
function getDate()
{
	var date = new Date();
	var mouth = MONTHS[date.getMonth()];
	var day = date.getDate();
	
	return day + ' ' + mouth;
}