
import * as React from "react";
import {IUserContext} from '../layout/layout';

const wrapInContext = (WrappedComponent:any) => {
   return (props:any) => { 
      return(
         <IUserContext.Consumer>
            {(userContext) => <WrappedComponent userContext={userContext}  {...props} />}
         </IUserContext.Consumer>
      );
   };
};

export default wrapInContext;