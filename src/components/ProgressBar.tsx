
import * as React from 'react';

//*****************************************************************************************************************
// Infotip component
//*****************************************************************************************************************

interface IProps {
   showStatusText?: boolean;
   percentage?: number;
}

const PropgressBar:React.StatelessComponent<IProps> = (props) => {
   const {percentage, showStatusText} = props;
   const cappedPercentage = (percentage >= 100 ) ? 100 : percentage;
   const statusText = (showStatusText) ? <span>{`${cappedPercentage}%`}</span> : null;
   const className = (showStatusText) ? "themeprogress showingStatus" : "themeprogress" ;

   return (
      <div className={className} title={cappedPercentage.toString()}>
         {statusText}
         <div className="themeprogress--fill" style={{width:`${cappedPercentage}%`}}></div>
      </div>
   );
};

export default PropgressBar;

// more complex version that calculates percentages itself
// const PropgressBar:React.StatelessComponent<IProps> = (props) => {
//    const {maxValue, currentValue, percentage, showStatus} = props;
//    const value = (percentage) ? percentage : Math.round(currentValue/maxValue*100);
//    const cappedValue = (value >= 100 ) ? 100 : value;
//    const status = (showStatus) ? <span>{`${value}%`}</span> : null;
//    const className = (showStatus) ? "themeprogress showingStatus" : "themeprogress" ;

//    return (
//       <div className={className}>
//          {status}
//          <div className="themeprogress--fill" style={{width:`${cappedValue}%`}}></div>
//       </div>
//    );
// };