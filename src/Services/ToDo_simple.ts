
import axios, { AxiosError } from 'axios';
import anno from '../Utils/Notify';
import LOGGING from '../Utils/loggingModule';

const serviceRoute = '/api/todo/simple';
const toggleItemRoute = `${serviceRoute}/toggle`;


export default class TodoApi {

	static async getTodoCollection() {
      return axios.get(serviceRoute)
         .then((response) => response.data)
         .catch((error) => LOGGING.LogErrorResponse(error));	
	}

	static async toggleHandler(params: any) {
      return axios.put(toggleItemRoute, params)
         .then((response) => response.data)
         .catch((error) => LOGGING.LogErrorResponse(error));	
	}

	static async addNewItemToCollection(params: any) {
      return axios.put(serviceRoute, params)
         .then((response) => response.data)
         .catch((error) => LOGGING.LogErrorResponse(error));
	}

	static async removeFromCollection(params: any) {
      return axios({
            method: "delete",
            url: serviceRoute,
            data: params
         })
         .then((response) => response.data)
         .catch((error: AxiosError) => LOGGING.LogErrorResponse(error));
	}
}







