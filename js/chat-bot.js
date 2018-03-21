function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "Hello!!";
		
		if(this.match('what is your name') || this.match('name') || this.match('who are you'))
			return "I am Osiris AI";
		
		if(this.match('what is your purpose') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "To help you become healthier. Do you have pain, or are you hurt? ";
		
		if(this.match('I have a headache') || this.match('ache') || this.match('hurt') || this.match('pain'))
			return "How will you describe your pain on a scale of one to five? (Please type in words..)";
		
		if(this.match('zero'))
			return ["You have no need for any diagnosis.. "];
		
		if(this.match('one'))
			return ["Drink some water and take a short nap.."];

		if(this.match('two') || this.match('three'))
			return ["In this case, the following medicines will help: Paracetamol, Ibuprofen and Aspirin"];

		if(this.match('four'))
			return ["In this case, the following medicines will help: Codeine and Morphine-like drugs such as oxycodone, fentanyl and buprenorphine"];

		if(this.match('five'))
		    return ["Going to the doctor is recommended, but over-the-counter medicines can help reduce the pain:Acetaminophen (Tylenol), Nonsteroidal anti-inflammatory drugs (NSAIDs), Motrin, Advil or naproxen (Aleve, Naprosyn)"];			
		
		if(this.match('thanks') || this.match('bye'))
		    return ["Glad to be of service!!"];

	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
