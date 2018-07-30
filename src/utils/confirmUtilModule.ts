
import { confirmable, createConfirmation } from 'react-confirm';
import ConfirmationDialog from '../components/Confirm';

// make chosen dialog confirmable
const dialog = confirmable(ConfirmationDialog);

// create confirm function
const confirm = createConfirmation(dialog);
 
// define simplified call to confirm dialog
export default function confirmFunction(confirmation: any, options = {}, heading:string = null) {

	// return version that returns true/false from user input
	return confirm({ confirmation, options, heading }).then(()=>{
		return true;
	}, ()=> {
		return false;
	});

	// original
	// return confirm({ confirmation, options });
}

