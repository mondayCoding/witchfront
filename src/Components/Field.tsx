import * as React from 'react';
import Tooltip from 'Common/Infotip';
import classNames from 'classnames';

export const Field: React.SFC<IProps> = ({id, label, tooltip, error, disabled, isNumberField, children }) => {

   const classString = classNames({
      themefield:true,
      hasError: error,
      numeric: isNumberField,
      disabled
   });

   return (
      <React.Fragment>
         <div className={classString}>

            <label className="themefield--label" htmlFor={id}>
               {label}
            </label>

            <div className="themefield--content">
               {children}
               {tooltip && <div className="themefield--tooltip"> {Tooltip(tooltip)}</div>}
            </div>

         </div>

         {error && <div className="themefield--error">{error}</div>}

      </React.Fragment>
   );
};

export interface IProps {
  id?: string;
  label: string;
  disabled?: boolean;
  responsive?: boolean;
  className?:string;
  error?: string;
  isNumberField?: boolean;
  tooltip?: string;
}