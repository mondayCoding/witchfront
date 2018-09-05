
//libs
import * as React from 'react';
import Gallery from '../../Containers/gallery/gallery';
import Documentation from '../../Containers/gallery/Components/Documentation/documentation';


export default class MissionPage extends React.Component {
   
   public render() {
      return (
         <React.Fragment>
            <Gallery />
            <Documentation />
         </React.Fragment>
      );
   }
}
