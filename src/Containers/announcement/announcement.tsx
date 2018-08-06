
import * as React from 'react';

export default class Announcement extends React.Component<IProps> {

   public state = {
      pageWidth: ""
   };

   render() {
      return (
         <div className="top-panel">
            <div className="announcement">
               <span className="message">{this.props.message}</span>
            </div>
         </div>
      );
   }
}

interface IProps {
   message:string;
}
