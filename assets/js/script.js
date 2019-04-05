(function(){
	
	
	// update time on startup
	updateTime();
	
    // upadate Abandoned Ticket List Html
    updateAbandonedTicketList();
    
	// update time every second
	setInterval(updateTime, 1000);
	
	// wait list clear three seconds
	var clearWaitListTimeOut = {};
	
	// Generete Time
	var generateTimeOuts = [];
	
	// random generate Time
	var randomTimeGenerate;
	
	// generate ticket each random time
	var ticketGenerateTimeOut = generateTimeOutTicket();
	
	
	/* 
		update time element
		
		@return {void}
	*/
	function updateTime()
	{
		$('.time').html(getTime());
		$('.date').html(getDate());
	}
	
	
	/*
		Generate Ticket
	
		@return {void}
	*/
	function generateTicket()
	{
        // upadate Abandoned Ticket List Html
        updateAbandonedTicketList();
		
		// get number tickets and increamet number by 1
		var ticketNumber = countTickets() + 1;
		
		// get random casheir
		var ticket = getCashier();
		
		// add ticket number to ticket
		ticket['ticketNumber'] = ticketNumber;
		
		// add ticket to html
		insertTicket(ticket);
		
		// add ticket waiting list
		waitTicket(ticketNumber);
		
		// save ticket in generateTimeOuts
		saveTicketProgress(ticketNumber, ticketGenerateTimeOut);	
		
		// random insert ticket to Abandoned Tickect
		generateAbandonedTicket(ticketNumber);

		// Generate New Ticket	
		ticketGenerateTimeOut = generateTimeOutTicket();
		
	}

	/*
		Update Abandoned Ticket Html
	
	*/
	function updateAbandonedTicketList()
	{
		var abandonedTicket = getAbandonedTicket();
        var html = '';
        
        for(var i = 0; i < abandonedTicket.length; i++){
            html += abandonedTicket[i] + ' ';
        }
        
        $('.abandoned-ticket').html(html);
	}
	
	/*
		Save Ticket To Generate Time Out
		
		@param number ticketNumber 
		@param number timeOutId
		@return boolean
	*/
	function saveTicketProgress(ticketNumber, timeOutId)
	{
		
		var ticketDetials = {'ticketNumber': ticketNumber, 'timeOut':timeOutId};
		
		var clear = new clearList(ticketDetials);
		
		clearWaitListTimeOut[ticketNumber] = clear;
		
	}
	
	
	/*
		Clear List
		
		@params object ticketDetails
	
	*/
	function clearList(ticketDetails)
	{
		
		if(!(this instanceof clearList)) return new clearList(ticketDetails);
		
		var ticketNumber = ticketDetails.ticketNumber;
		var ticketTimeOut = ticketDetails.timeOut;
		var initCallerTimeOut = setTimeout(init, 4000);
	
		function init()
		{
			removeElement();
			clearTimeOut();
			updateAbandonedTicketList();
		}
		
		
		var removeElement = function()
		{
			return $('.' + ticketClassExtesion + ticketNumber).remove();
		};
		
		var clearTimeOut = function()
		{
			clearTimeout(ticketTimeOut);
			clearTimeout(initCallerTimeOut);
		};
		
	}
	
	
	/*
		Generate Ticket TimeOut
	
		@return number
	*/
	function generateTimeOutTicket()
	{
		
		var lastTimeTimeOut = randomTimeGenerate;
		
		randomTimeGenerate = Math.floor(Math.random() * 10) * 1000;
		
		// adject random time
		if(randomTimeGenerate > lastTimeTimeOut) if(lastTimeTimeOut > 2000) randomTimeGenerate += 1500;
		
		
		return setTimeout(generateTicket, randomTimeGenerate);
		
	}
	
	
	/*
		Generate Abandoned Ticket Random
		
		@param number TicketNumber
		@return boolean
	*/
	function generateAbandonedTicket(ticketNumber)
	{
		// random pick number range 10
		var randomNumber = Math.floor(Math.random() * 10);

		
        if(randomNumber % 4 == 0)
        {
            abandonedTicket(ticketNumber);
			
		 	return true;	
        }
		
		 return false;
	}
	
	
}());
