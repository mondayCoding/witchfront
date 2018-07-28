
//libraries
import * as React from 'react';

//utils
import confirm from '../../utils/confirmUtilModule';
import coinFlipper from '../../utils/coinFlipModule';
import {IFlipHistoryItem} from '../../utils/coinFlipModule';
import Button from '../../components/button';
import Tabs from '../../components/tabs';
import Tab from '../../components/tab'; 

interface IState {
   coinFlipHistory: IFlipHistoryItem[];
   coinFlipCount: number;
} 

export default class Flipper extends React.Component {
   
   public state: IState = {
      coinFlipHistory: [],
      coinFlipCount: 0
   };

   private coinFlipper: coinFlipper;
   
   public componentWillMount(){
      this.coinFlipper = new coinFlipper();
   }

   public updateFlipState(){
      this.setState({
         coinFlipHistory: this.coinFlipper.flipHistory,
         coinFlipCount: this.coinFlipper.flipCount
      });
   }

	public flipCoin = () => {
      this.coinFlipper.flipCoin();
      this.updateFlipState();
   }
   
   public resetCoinFlips = async () => {
      if (await confirm("Are you sure you want to reset flips?, this action cannot be undone", undefined, "Reset")){
         this.coinFlipper.resetHistory();
         this.updateFlipState();
      }
   }
   
   public getFlipHistory(isReversed:boolean){

      const history = (isReversed) ? this.state.coinFlipHistory.slice().reverse() : this.state.coinFlipHistory;
      const classname = (index:number) => {
         if (isReversed && index === 0 || !isReversed && index === history.length-1) {
            return "table-row animated-newItemFlash";
         } 
         else {
            return "table-row";
         }
      };
     
      return(
         history.map((item, index)=> {

            const key = item.flipCounter + item.result;

            return (
               <div key={key} className={classname(index)}>
                  <div className="cell-60px centered">
                     <b>{"#" + ((isReversed) ? history.length - index : index + 1 )}</b>
                  </div>
                  <div className="cell-auto">
                     {item.result}
                  </div>
               </div>
            );
         })
      );      
   }

	public render() {
      const total = this.state.coinFlipCount;
      const headCount = this.coinFlipper.getHeads();
      const tailCount = this.coinFlipper.getTails();
      const latest = this.coinFlipper.lastFlipResult;
      let count = 0;

      return (
         <div className="content-centered-md">

            {/* total counter */}
            <div className="coinHeading">
               <h3 className="themeheading">
                  {
                     "flipped " + total + " times"
                  }
               </h3>
            </div>

            {/* coin animation */}
            <div className="coinFlipWrap">
               <div key={total} className={"coin " + latest} onClick={this.flipCoin}>
                  {latest}
               </div>
            </div>

            {/* buttons */}
            <div className="row-flex spaced">
               <Button buttonText="Flip Coin?" onClick={this.flipCoin} />
               <Button buttonText="Reset" onClick={this.resetCoinFlips} />
            </div>

            <div className="spacing"></div>

            {/* percentage counter */}
            <div className="row-flex spaced">
               <div className="countHeading">
                  <div>Heads: {headCount}</div>
                  <div key={headCount} className="animated-glow-once">
                     {this.coinFlipper.getHeadPercentage()}
                  </div>
               </div>
               <div className="countHeading">
                  <div>Tails: {tailCount}</div>
                  <div key={tailCount} className="animated-glow-once">
                     {this.coinFlipper.getTailPercentage()}
                  </div>
               </div>
            </div>

            {/* result table */}
            <div className="spacing"></div>
            <div className="line-thin"></div>

            <Tabs>
               <Tab title="Latest to first">             
                  <div className="line-thin"></div>
                  <span>
                     Flip counter in anti-chronological order (latest to first):
                  </span>
                  <div className="flex-table">
                     {this.getFlipHistory(true)}
                  </div>
               </Tab>

               <Tab title="First to latest">            
                  <div className="line-thin"></div>
                  <span>
                     Flip counter in chronological order (first to latest):
                  </span>
                  <div className="flex-table">
                     {this.getFlipHistory(false)}
                  </div>      
               </Tab>
               
            </Tabs>
            <div className="line-thin"></div>

         </div>
      );
	}
}

