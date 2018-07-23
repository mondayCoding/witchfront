
import FormValidator from '../../utils/validationModule';
import res from '../Profile/localization';

const test = FormValidator.test;

const validation = new FormValidator([
   {field: "email", 		message: res.emailIsInvalid, 		  validIf: (x) => test.isEmail(x) },
   {field: "accountNum",message: res.accNumIsInvalid,		  validIf: (x) => test.isInt(x)},
   {field: "username", 	message: "Name is required field", validIf: (x) => !test.isEmpty(x) },
   {field: "username", 	message: res.usernameIsTaken,		  validIf: (x) => (x !== "asd") && (x !=="Mario" )},
   {field: "username", 	message: res.usernameIsInvalid,	  validIf: (x) => test.isLength(x, {min:3, max:20})},
   {field: "color", 		message: "must be red",				  validIf: (x) => x === "red" }
]); 

export default validation;