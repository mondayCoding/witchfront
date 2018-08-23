
import axios, { AxiosError } from 'axios';

const serviceRoute = '/api/login';

export default class Login {

	static async attemptLogin(params:any) {
      return axios.post(serviceRoute, params)
         .then((response) => response)
         .catch((error:AxiosError) => error.response);  
   }
   
}

