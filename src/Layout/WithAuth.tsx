import * as React from 'react';
import { Consumer, IAuthorization } from './AppAuth';

export const WithAuthorization = (WrappedComponent:any) => {
   console.log("dadasdasd");
   console.log(WrappedComponent);
   
   return (props:any) => { 
      return(
         <Consumer>
            {(auth:IAuthorization) => <WrappedComponent auth={auth} {...props} />}
         </Consumer>
      );
   };
};