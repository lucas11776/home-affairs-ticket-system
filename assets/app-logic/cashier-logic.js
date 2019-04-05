/********* App Cashiers Functions *********/


/**
 * Help Dest Avaible In Depertment
 * 
 * @var {array}
*/
var DESK = [
	'desk 1', 'desk 2', 'desk 3', 'desk 4', 'desk 5',
	'desk 6', 'desk 7', 'desk 8', 'desk 9', 'desk 10',
	'desk 11', 'desk 12', 'desk 13', 'desk 14', 'desk 15', 
	'desk 16',
];

/**
 * Cashiers Avalible In Depertment
 * 
 * @var {array}
*/
var CASHIER = ['cashier 1','cashier 2'];


/**
 * PhotoBoot Avalible In Depertment
 * 
 * @var {array} 
*/
var PHOTOBOOT = ['Photoboot 1', 'Photoboot 2'];


/**
 * Home-Affairs Services
 * 
 * @var {array}
*/
var APPLICATION = [
	'I.D Application', 'I.D Re-Application', 
	'Later Birth Certificate', 'Death certificate',
	'Passport', 'Smart-Card Collection', 'Passport'
];


/**
 * Generate Random Cashier
 * 
 * @return {object}
*/
function getCashier() {
	var cashier = getRandomCashier();
	var status = getRandomApplication();
	
	return {'cashier': cashier, 'status': status};
}


/**
 * Random Cashier
 * 
 * @return {string}
*/
function getRandomCashier()
{
	var newCashier;	
	var randomPick = Math.floor(Math.random() * 3);

	switch(randomPick)
	{
		case 0:
			newCashier = DESK;
			break;
		case 1:
			newCashier = CASHIER;
			break;
		case 2:
			newCashier = PHOTOBOOT;
			break;
			
	}
	
	var randomPick = Math.floor(Math.random() * newCashier.length);
	
	return newCashier[randomPick];	
}


/**
 * Get Random Application
 * 
 * @return {string}
*/
function getRandomApplication()
{
	var randomNumber = Math.floor(Math.random() * APPLICATION.length);
	
	return APPLICATION[randomNumber];	
}