
import axios, { AxiosError } from 'axios';
import anno from '../Utils/Notify';
import LOGGING from '../Utils/loggingModule';

const service_url = '/api/login';

export default class Login {

	//get all items (promise)
	public static async attemptLogin(params:any) {
		return new Promise((resolve) =>
			axios.post(service_url, params)
				.then(
					(response) => resolve(response.data)
				)
				.catch(               
					(error) => { 
                  resolve(error);
                  LOGGING.LogErrorResponse(error, {announceErrors:false});
               }
				)
		);
   }
   
}







