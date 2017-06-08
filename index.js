import _ from 'lodash';
import moment from 'moment';

function component() {
	var element = document.createElement( 'div' );

	element.innerHTML = _.join( [ 'Hello', 'World!' ], ' ' );

	return element;
}

document.body.appendChild( component() );
