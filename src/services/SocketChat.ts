
import axios, { AxiosError } from 'axios';

import ANNO from '../utils/annoModule';
import LOGGING from '../utils/loggingModule';


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
  







