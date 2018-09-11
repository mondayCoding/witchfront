
import * as React from 'react';
import { Field } from 'Common/Field';

export const TextInputResponsive: React.SFC<IProps> = ({id, label, error, isSmall, tooltip, disabled, ...rest}) => {
   
   return (
      <Field 
         label={label} 
         id={id} 
         data-tooltip-error={error} 
         error={error} 
         tooltip={tooltip}
         isNumberField={isSmall}
         disabled={disabled}
      >
         <input 
            className="themeinput" 
            id={id} 
            disabled={disabled}
            type="text" 
            {...rest} 
         />
      </Field>
   );   
};

export interface IProps {
   id?:string;
   name?:string;
   label?:string;
   value?:string;
   placeholder?:string;
   readonly?:boolean;
   required?:boolean;
   disabled?:boolean;
   isSmall?:boolean;
   type?:string;
   tooltip?:string;
   error?:string;
   onChange?(params?:any):any;
   onBlur?(params?:any):any;
   onKeyUp?(params?:any):any;
} 
