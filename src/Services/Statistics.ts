
import axios, { AxiosError } from 'axios';
import anno from '../Utils/Notify';
import LOGGING from '../Utils/loggingModule';

const serviceRoute = '/api/statistics/';

export default class TodoApi {

	static async getServerStartCount() {
		return axios.get(serviceRoute)
         .then((response) => response.data ) 
         .catch((error) => LOGGING.LogErrorResponse(error));		
	}
}







