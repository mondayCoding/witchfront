
//libs
import * as React from 'react';
import CoinFlipper from '../controllers/coinFlipper/coinFlip';


export default class CoinFlipPage extends React.Component {

   public render() {
      return (
         <div className="page">
            <CoinFlipper /> 
         </div>
      );
   }
}
