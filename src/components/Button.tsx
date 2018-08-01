
import * as React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component<IButtonProperties> {

   public render() {
      let { className, buttonText, buttonIcon, type, disabled, ...rest } = this.props;
      className = (className) ? `themebutton ${className}` : "themebutton";
      className = (disabled) ? `disabled ${className}` : className;      
      buttonText = buttonText || "button";
      type = type || "button";

      return (
         <button type={type} className={className} {...rest} >
            {buttonIcon && <span>{buttonIcon}</span>}
            {buttonText && <span>{buttonText}</span>}
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
