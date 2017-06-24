window.showGreeting = function() {
	import( './greeting' ).then( ( greet ) => {
		let el = document.getElementById( 'greeting' );
		el.innerHTML = greet.default();
	} );
}

window.showTimestamp = function() {
	import( './timestamp' ).then( ( timestamp ) => {
		let el = document.getElementById( 'timestamp' );
		el.innerHTML = timestamp.default();
	} );
}

window.showWisdom = function() {
	import( './wisdom' ).then( ( wisdom ) => {
		let el = document.getElementById( 'wisdom' );
		el.innerHTML = wisdom.default();
	} );
}
