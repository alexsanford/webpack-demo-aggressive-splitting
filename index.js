lodashPromise = import('lodash');
momentPromise = import('moment');

function component() {
	return Promise.all( [ lodashPromise, momentPromise ] ).then(
		( args ) => {

			[ _, moment ] = args;

			var element = document.createElement( 'div' );

			element.innerHTML = _.join(
				[
					'Hello',
					'World!',
					'--',
					moment().format('MMMM Do YYYY, h:mm:ss a')
				], ' ' );

			return element;
		}
	)
}

component().then( element => document.body.appendChild( element ) );
