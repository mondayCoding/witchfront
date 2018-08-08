
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';
import Tip from './Infotip';
import classNames from 'classnames';

const InputMaterial: React.StatelessComponent<IInputFieldProperties> = (props) => {

   const {id, value, label, tooltip, validation, disabled, ...rest} = props;
   const classString = classNames({
      themeinput: true,
      hasContent: value && value.length > 0,
      invalid: validation,
      disabled
   });

   return (
      <div className={classString} data-tooltip-error={validation}>
         <input type="text" id={id} {...rest} value={value} />
         <label htmlFor={id}> {label} </label>
         <span className="bar"></span>   
         {(tooltip) && <Tip message={tooltip} />}
         {/* {(validation) && <Tip message={validation} />}*/}
      </div> 
   );
};

export default InputMaterial;
