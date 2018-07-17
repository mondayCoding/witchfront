
//libs
import * as React from 'react';

//components
import Announcement from '../controllers/announcement/announcement';
import ChatWindow from '../controllers/liveSocketChat/liveSocketChat';


export default class ChatPage extends React.Component<any,any> {
   public render() {
      return (
         <div className="page">
            <Announcement 
                message="We are currently in live mode chat intended only for live users. 
                No reqistration required. Your chat history won't be used 
                for any nefarious purposes... mostly." 
            />
            <div className="spacing"></div>
            <ChatWindow />
         </div>
      );
   }
}
