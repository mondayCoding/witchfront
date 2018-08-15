
import axios, { AxiosError } from 'axios';
import anno from '../Utils/Notify';
import LOGGING from '../Utils/loggingModule';

const api_url = '/api/statistics/';

export default class TodoApi {

	//get all items (promise)
	public static async getServerStartCount() {
		return new Promise((resolve) =>
			axios.get(api_url)
				.then(
					(response) => { resolve(response.data); }
				)
				.catch( 
					(error) => LOGGING.LogErrorResponse(error)
				)
		);
	}

}







