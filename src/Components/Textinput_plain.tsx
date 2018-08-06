
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';

export default class InputPlain extends React.Component<IInputFieldProperties> {

   render() {
      const {...rest} = this.props;

      return (
         <input className="input-plain" type="text" {...rest} />
      );
   }
}
