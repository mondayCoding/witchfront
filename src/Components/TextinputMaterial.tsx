
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';
import Tip from './Infotip';
import classNames from 'classnames';

const InputMaterial: React.SFC<IInputFieldProperties> = (props) => {

   const {id, value, label, tooltip, error, disabled, ...rest} = props;
   const classString = classNames({
      "themeinput--material": true,
      "hasContent": value && value.length > 0,
      "invalid": error,
      "disabled" : disabled
   });

   return (
      <div className={classString} data-tooltip-error={error}>
         <input type="text" id={id} {...rest} value={value} />
         <label htmlFor={id}> {label} </label>
         <span className="bar"></span>   
         {(tooltip) && <Tip message={tooltip} />}
      </div> 
   );
};

export default InputMaterial;
