/********* Wait List Logic Functions *********/


/**
 * Wait List Html .class Extension
 * 
 * @var {string}
*/
var ticketClassExtesion = 'ticket-';


/**
 * Hide And Show Line Title
 * 
 * @return {void}
*/
function waitLineHeading()
{
	$('.table-heading').toggleClass('hidden');
}


/**
 * Ticket Template
 * 
 * @param {number} ticket
 * @return {string}
*/
function ticketTemplate(ticket, cashier, status)
{
	var html = 
		'<tr class="' + ticketClassExtesion + ticket + '">' +
            '<td>' + status  + '</td>' +
            '<td>' + ticket  + '</td>' +
			'<td>' + cashier + '</td>' +
		'</tr>';
		
    return html;
}


/**
 * Insert New Ticket In Html
 * 
 * @param {object} ticket
 * @returns {boolean}
*/
function insertTicket(ticket)
{
	if(typeof(ticket) == 'object')
	{
		var template = ticketTemplate(ticket.ticketNumber, ticket.cashier, ticket.status);

		// add tikect to html
		$('.wait-list').append(template);
		
		return true;
	}
	
	return false;
}