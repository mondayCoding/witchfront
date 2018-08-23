import axios, { AxiosError } from 'axios';

import ANNO from '../Utils/Notify';
import LOGGING from '../Utils/loggingModule';

const socketRoute = '/api/chatHistory';


export default class SocketChatApi {

   //chat all previous messages
   public static async getChatHistory() {
      return axios.get(socketRoute)
         .then((response) => response.data )
         .catch((error: AxiosError) => LOGGING.LogErrorResponse(error));
   }
}
  

