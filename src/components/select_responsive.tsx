
import * as React from 'react';
import Select from 'react-select';
import {ISelectProperties} from '../interfaces';

export default class InputResponsive extends React.Component<ISelectProperties> {

   public render() {
      const {id, label, validation, ...rest} = this.props;

      let validationClass = (validation) ? "invalid" : null;

      //TODO : siirrä tämä rakenne suoraan selectin ympärille 
      return (
         <div className="themeinput-responsive" data-tooltip-error={validation}>
            <label htmlFor={id}>{label}</label>
            <Select id={id} {...rest} />
         </div>
      );
   }
}
