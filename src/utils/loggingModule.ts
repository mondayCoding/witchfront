
import anno from './annoModule';
import { AxiosError } from 'axios';

export default class Logging {

	  //Log axios errors this
	  public static LogErrorResponse = (error: AxiosError) =>
	  {
		 //log server side error response (recieved message but fell outside 2xx range)
		 if (error.response) 
		 {
			console.warn(error.response.data);
			console.warn(error.response.status);
			console.warn(error.response.headers);
	
			const status = error.response.status;
			const encoded_data = encodeURI(error.response.data);
			const message = (encoded_data.length < 200) ? error.response.data.replace(/<\/?[^>]+(>|$)/g, "") : "";
	
			anno.announce(`Encountered error on server side. <br> ${message}`, status.toString(), "error");
		 }
		 //log no response recieved 
		 else if (error.request)
		 {
			console.warn(error.request);
			anno.announce(`Request made to server received no answer`, null, "error");      
		 }
		 //something else happened
		 else 
		 {
			console.warn('Error', error.message);
		 }
	  }

}

