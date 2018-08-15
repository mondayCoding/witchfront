import axios, { AxiosError } from 'axios';

import ANNO from '../Utils/Notify';
import LOGGING from '../Utils/loggingModule';


export default class SocketChatApi {

  //chat all previous messages
  public static async getChatHistory() {
    return new Promise((resolve) => 
      axios.get('/api/chatHistory')
      .then(
        (response) => resolve(response.data)
      )
      .catch(
        (error: AxiosError) => LOGGING.LogErrorResponse(error)
      )
    );

  }

}
  







