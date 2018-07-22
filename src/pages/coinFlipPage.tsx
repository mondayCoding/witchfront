
//libs
import * as React from 'react';
import CoinFlipper from '../components-stateful/coinFlipper/coinFlip';


export default class CoinFlipPage extends React.Component {

   public render() {
      return (
         <div className="content--lg">
            <CoinFlipper /> 
         </div>
      );
   }
}
