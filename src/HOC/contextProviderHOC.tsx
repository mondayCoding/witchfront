
import * as React from "react";
import {UserContext} from '../layout/App';

const wrapInContext = (WrappedComponent:any) => {
   return (props:any) => { 
      return(
         <UserContext.Consumer>
            {(userContext) => <WrappedComponent userContext={userContext}  {...props} />}
         </UserContext.Consumer>
      );
   };
};

export default wrapInContext;


