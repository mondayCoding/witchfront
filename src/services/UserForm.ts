
import axios, { AxiosError } from 'axios';
import anno from '../utils/annoModule';
import LOGGING from '../utils/loggingModule';

const api_url = "/api/forms/userform";

export default class UserFormApi {


	// post form and get response (promise)
	public static async postUserForm(params:any) {
		return new Promise((resolve) =>
			axios.post(api_url, { form: params })
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error:AxiosError) => LOGGING.LogErrorResponse(error)
				)
		);
   }   
}







