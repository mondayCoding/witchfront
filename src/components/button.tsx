
import * as React from 'react';

export default class Button extends React.Component<IButtonProperties> {

   public render() {
       let { className, buttonText, buttonIcon, type, ...rest } = this.props;
       className = className || "themebutton";
       buttonText = buttonText || "button";
       type = type || "button";

       return (
           <button type={type} className={className} {...rest} >
              <span>{buttonIcon}</span>
              <span>{buttonText}</span>
           </button>
       );
   }
}

export interface IButtonProperties {
  className?: string;
  id?: string;
  disabled?:boolean;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  type?: string;
  onClick?(params:any):any;
}
