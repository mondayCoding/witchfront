
import axios, { AxiosError } from 'axios';
import anno from '../Utils/Notify';
import LOGGING from '../Utils/loggingModule';

const service_url = '/api/login';

export default class Login {

	//get all items (promise)
	public static async attemptLogin(params:any) {

      return axios.post(service_url, params)
         .then(
            (response) => response                      
         )
         .catch(               
            (error:AxiosError) => error.response
         );  
   }
   
}







