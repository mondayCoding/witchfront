
//libst
import * as React from 'react';

//components
import CreateCharForm from '../../Containers/CreateCharForm/CreateCharForm';

export default class CreateCharPage extends React.Component {
   public render() {
      return (
         <div className="content--lg">
            <CreateCharForm />
         </div>
      );
   }
}
