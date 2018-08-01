
//libst
import * as React from 'react';

//components
import Form from '../components-stateful/createCharForm/createCharForm';

export default class CreateCharPage extends React.Component {
   public render() {
      return (
         <div className="content--lg">
            <Form />
         </div>
      );
   }
}
