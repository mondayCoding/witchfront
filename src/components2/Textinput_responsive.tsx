
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';

export default class InputResponsive extends React.Component<IInputFieldProperties> {

   public render() {
      const {id, value, label, validation, isSmall, tooltip, ...rest} = this.props;
      const hasContent = value && value.length > 0;
      const isDisabled = this.props.disabled;
      let classString = "themeinput-responsive";
      if (hasContent) {classString += " hasContent";}
      if (isDisabled) {classString += " disabled";}
      if (validation) {classString += " invalid";}
      if (isSmall) {classString += " number";}
      
      return (
         <div className={classString} data-tooltip-error={validation}>
               <label title={tooltip} htmlFor={id}> {label} </label>
               <input type="text" id={id} {...rest} value={value} />
         </div>
      );
   } 
}
