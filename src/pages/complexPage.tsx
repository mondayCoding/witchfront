
//libs
import * as React from "react";

//components

import Complex from '../controllers/complex/complex';
import {UserContext} from './../layout/layout';



export default class ComplexPage extends React.Component {
   public render() {
      return (
         <div className="page">
            <UserContext.Consumer>
               {(userContext) => <Complex userContext={userContext} />}
            </UserContext.Consumer>         
         </div>
      );
   }
}
