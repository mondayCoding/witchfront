
//libs
import * as React from 'react';

//components
import ChatWindow from '../components-stateful/liveSocketChat/liveSocketChat';


export default class ChatPage extends React.Component<any,any> {
   public render() {
      return (
         <div className="content--xl">
            <ChatWindow />
         </div>
      );
   }
}
