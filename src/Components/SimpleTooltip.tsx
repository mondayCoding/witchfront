
import * as React from 'react';

//*****************************************************************************************************************
// Infotip component
//*****************************************************************************************************************

const Tip = (props:any) => {
   const message = props.message;
   return (
      <div className="tip">
         <i className="fas fa-info" tabIndex={0}></i>
         <div className="tip-message" data-tooltip-info={message}></div>
      </div>
   );
};

export default Tip;
