/********* Ticket Logic Functions *********/


/**
 * Default Application Database
 * 
 * @var {object}
*/
var defualtDB = {
	'abandonedTicketList': [],
	'waitList': []
};


/**
 * Upadate Application DB
 * 
 * @return {boolean}
*/
function updateDB(database)
{
	if(typeof(database) == 'object')
	{	
		window.sessionStorage.setItem('tickets', JSON.stringify(database));
		
		return true;		
	}
	
	return false;
}



/**
 * Check if database exist or has been created
 * 
 * @return {void}
*/
function checkTicketDB()
{
	var tickets = window.sessionStorage.getItem('tickets');

	if (tickets === null)
	{
		updateDB(defualtDB);
	}

}


/**
 * Get Tickets Database
 * 
 * @return {void}
*/
function getTickets()
{
	checkTicketDB();

	var tickets = JSON.parse(window.sessionStorage.getItem('tickets'));
	
	return tickets;
}


/**
 * Count Number Tickets
 * 
 * @return {number}
*/
function countTickets()
{
	var tickets = getTickets();
	var waitList = tickets.waitList.length;
	
	return waitList;	
}


/**
 * Add Ticket Wait List
 * 
 * @param {number} ticketNumber
 * @returns {boolean}
*/
function waitTicket(ticketNumber)
{
	var tickets= getTickets();
	tickets.waitList.push(ticketNumber);
	
	return updateDB(tickets);	
}


/**
 * Get Abandoned Tickets
 * 
 * @return {object}
*/
function getAbandonedTicket()
{
    var tickets = getTickets();
    var abandonedTicket = tickets.abandonedTicketList;
    
    // Limit result
    if(abandonedTicket.length > 20)
    {
        var start = (abandonedTicket.length-1) - 20;
        var end = abandonedTicket.length - 1;
        
        return abandonedTicket.slice(start, end);
    }
    
    return abandonedTicket;
}


/**
 * Add Ticket To Abandoned List
 * 
 * @param {number} ticketNumber
 * @return {boolean}
*/
function abandonedTicket(ticketNumber)
{
	var tickets = getTickets();
    var list = tickets.abandonedTicketList;
    list.push(ticketNumber);

    return updateDB(tickets);
}