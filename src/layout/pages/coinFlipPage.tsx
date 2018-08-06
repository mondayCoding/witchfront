
//libs
import * as React from 'react';
import CoinFlipper from '../../Containers/coinFlipper/coinFlip';


export default class CoinFlipPage extends React.Component {

   public render() {
      return (
         <div className="content--lg">
            <CoinFlipper /> 
         </div>
      );
   }
}
