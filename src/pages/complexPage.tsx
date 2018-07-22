
//libs
import * as React from "react";

//components

import Complex from '../components-stateful/complex/complex';
import {IUserContext} from '../layout/layout';


export default class ComplexPage extends React.Component {
   public render() {
      return (
         <div className="content--xl">
            <ComplexWrapperInContext />        
         </div>
      );
   }
}

const ComplexAppWithContext:React.StatelessComponent = (props) => {
   return(
      <IUserContext.Consumer>
         {(userContext) => <Complex userContext={userContext}  {...props} />}
      </IUserContext.Consumer> 
   );
};

const wrapInContext = (WrappedComponent:any) => {
   return (props:any) => { 
      return(
         <IUserContext.Consumer>
            {(userContext) => <WrappedComponent userContext={userContext}  {...props} />}
         </IUserContext.Consumer>
      );
   };
};

const ComplexWrapperInContext = wrapInContext(Complex);