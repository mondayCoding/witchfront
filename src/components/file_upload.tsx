
import * as React from 'react';


export default class FileUpload extends React.Component {

   public render(){
      const {...rest} = this.props;

      return (

         <label className="themebutton button--upload">
            <input type="file" {...rest} accept="image/*" />
            <p className="text-aide">Click this or drag a file here to include it</p>
         </label>
      );
   }
}
 