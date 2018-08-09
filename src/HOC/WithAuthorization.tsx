
import * as React from "react";
import {Authorization} from '../layout/AuthorizationContainer';
import {userLevel} from '../interfaces/services';


export interface IAuthorization {
   isSignedIn: boolean;
   level: userLevel;
   signOut():void;
   signIn():void;
}

const WithAuthorization = (WrappedComponent:any) => {
   return (props:any) => { 
      return(
         <Authorization.Consumer>
            {(auth:IAuthorization) => <WrappedComponent auth={auth} {...props} />}
         </Authorization.Consumer>
      );
   };
};

export default WithAuthorization;