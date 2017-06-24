import { join } from './join';
import moment from 'moment';

export default function timestamp() {
	return join( [
		'Current time:',
		moment().format('MMMM Do YYYY, h:mm:ss a')
	] );
}
