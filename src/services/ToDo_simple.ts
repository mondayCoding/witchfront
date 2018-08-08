
import axios, { AxiosError } from 'axios';
import anno from '../Utils/annoModule';
import LOGGING from '../Utils/loggingModule';

const api_url = '/api/todo/simple';

export default class TodoApi {

	//get all items (callback)  
	public static getTodoCollectionCallback = (callback: any) => {
		axios.get(api_url)
			.then(
				(response) => callback(response.data)
			)
			.catch(
				(error) => LOGGING.LogErrorResponse(error)
			);
	}

	//get all items (promise)
	public static async getTodoCollection() {
		return new Promise((resolve) =>
			axios.get(api_url)
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error) => LOGGING.LogErrorResponse(error)
				)
		);
	}

	//update item
	public static async toggleHandler(params: any) {
		return new Promise((resolve) =>
			axios.put(`${api_url}/toggle`, params)
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error) => LOGGING.LogErrorResponse(error)
				)
		);
	}

	//add item
	public static async addNewItemToCollection(params: any) {
		return new Promise((resolve) =>
			axios.put(api_url, params)
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error) => LOGGING.LogErrorResponse(error)
				)
		);

	}

	//delete item
	public static async removeFromCollection(params: any) {
		return new Promise((resolve) =>
			axios({
				method: "delete",
				url: api_url,
				data: params
			})
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error: AxiosError) => LOGGING.LogErrorResponse(error)
				)
		);
	}

}







