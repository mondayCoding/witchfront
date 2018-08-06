
//libs
import * as React from "react";
import wrapInContext from '../../HOC/contextProviderHOC';
import Complex from '../../Containers/complex/complex';

export default class ComplexPage extends React.Component {
   public render() {
      return (
         <div className="content--xl">
            <ComplexWithContextData />        
         </div>
      );
   }
}

const ComplexWithContextData = wrapInContext(Complex);

// const ComplexAppWithContext:React.StatelessComponent = (props) => {
//    return(
//       <IUserContext.Consumer>
//          {(userContext) => <Complex userContext={userContext}  {...props} />}
//       </IUserContext.Consumer> 
//    );
// };


