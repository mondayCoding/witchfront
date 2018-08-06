
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';

export default class Select extends React.Component<IInputFieldProperties> {

   render() {
      const {id, value, label, ...rest} = this.props;
      
      return (
         <div className="themeTextArea">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} value={value} {...rest} ></textarea>
         </div>
      );
   }
}
