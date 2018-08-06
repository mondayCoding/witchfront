
import * as React from 'react';
import {IInputCheckboxProperties} from '../interfaces';

export default class Checkbox extends React.Component<IInputCheckboxProperties> {

   render() {
      const {id, label, ...rest} = this.props;

      return (
         <div className="themecheckbox">
            <input type="checkbox" id={id}  {...rest} />
            <label htmlFor={id} >{label}</label>
         </div>
      );
   }
}
