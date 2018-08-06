

import * as React from 'react';
import ChatWindow from '../../Containers/liveSocketChat/liveSocketChat';


export default class ChatPage extends React.Component<any,any> {
   public render() {
      return (
         <div className="content--xl">
            <ChatWindow />
         </div>
      );
   }
}
