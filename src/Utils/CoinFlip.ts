
type TResult = "heads" | "tails";

export interface IFlipHistoryItem {
   result:TResult;
   flipCounter:number;
}

export default class CoinFlipper {

   public flipHistory: IFlipHistoryItem[];
   public flipCount: number;
   public lastFlipResult: TResult;

   constructor(){
      this.flipHistory = [];
      this.flipCount = 0;
      this.lastFlipResult = null;
   }
   
   public flipCoin(){
      const flipResult = this.flip();
      this.flipCount += 1;
      this.lastFlipResult = flipResult;
      this.pushToHistory(flipResult, this.flipCount);
   }

   public pushToHistory(result:TResult, flipCounter:number ){
      const newHistoryItem = {result, flipCounter};
      this.flipHistory.push(newHistoryItem);
   }
   
   public resetHistory(){
      this.flipCount = 0;
      this.flipHistory = [];
   }
   
   public getHeads(){
      const heads = this.flipHistory.filter( (x) => x.result === "heads" ).length;
      return heads;
   }
   
   public getTails(){
      const tails = this.flipHistory.filter( (x) => x.result === "tails" ).length;
      return tails;
   }
   
   public getTotalFlips(){
      const totalFlips = this.flipHistory.length;
      return totalFlips;
   }

   public getHeadPercentage(){
      if (this.getHeads() === 0) {
         return "0 %";
      }
      const headPercentage =  Math.round((this.getHeads() / this.flipCount)*100*10)/10;
      return headPercentage + " %";
   }

   public getTailPercentage(){
      if (this.getTails() === 0) {
         return "0 %";
      }
      const tailPercentage = Math.round((this.getTails()/this.flipCount)*100*10)/10;
      return tailPercentage + " %";
   }

   private flip(){
      const randomBoolean = Math.random() >= 0.5;

      if (randomBoolean) {
         return "heads";
      }
      else {
         return "tails";
      }
   }

}
