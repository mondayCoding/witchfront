
//libst
import * as React from 'react';

//components
import Form from '../components-stateful/CreateCharForm/createCharForm';
import Tip from '../components/infotip';
import ImgCaption from '../components/img_caption';


export default class CreateCharPage extends React.Component {
   public render() {
      return (
         <div className="content--lg">
            <Form />
         </div>
      );
   }
}
