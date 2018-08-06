
import * as React from 'react';

//*****************************************************************************************************************
// Progress bar 
//*****************************************************************************************************************

const PropgressBar:React.StatelessComponent<IProps> = (props) => {
   const {percentage, showStatusText, showWarningWhenFull} = props;
   const cappedPercentage = (percentage >= 100 ) ? 100 : percentage;
   const statusText = (showStatusText) ? <span>{`${cappedPercentage}%`}</span> : null;
   let classString = "themeprogress";
   if (showStatusText) {classString += " showingStatus";}
   if (showWarningWhenFull && cappedPercentage === 100) {classString += " warning";}

   return (
      <div className={classString} title={cappedPercentage.toString()}>
         {statusText}
         <div className="themeprogress--fill" style={{width:`${cappedPercentage}%`}}></div>
      </div>
   );
};

export default PropgressBar;


interface IProps {
  showStatusText?: boolean;
  showWarningWhenFull?: boolean;
  percentage: number;
}