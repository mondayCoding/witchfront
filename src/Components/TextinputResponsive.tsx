
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';
import classNames from 'classnames';

const InputResponsive: React.StatelessComponent<IInputFieldProperties> = (props) => {

   const {id, value, label, validation, isSmall, tooltip, disabled, ...rest} = props;
   const classString = classNames({
      "themeinput-responsive": true,
      "hasContent": value && value.length > 0,
      "invalid": (validation),
      "number": (isSmall),
      "disabled": disabled
   });
   
   return (
      <div className={classString} data-tooltip-error={validation}>
         <label title={tooltip} htmlFor={id}> {label} </label>
         <input type="text" id={id} {...rest} value={value} />
      </div>
   );   
};

export default InputResponsive;
