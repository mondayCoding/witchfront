
//libs
import * as React from "react";
// import wrapInContext from '../../HOC/contextProviderHOC';
import Complex from 'Containers/Complex/Complex';

export default class ComplexPage extends React.Component {
   render() {
      return (
         <div className="content--xl">
            <Complex />        
         </div>
      );
   }
}

// const ComplexWithContextData = wrapInContext(Complex);

// const ComplexAppWithContext:React.StatelessComponent = (props) => {
//    return(
//       <IUserContext.Consumer>
//          {(userContext) => <Complex userContext={userContext}  {...props} />}
//       </IUserContext.Consumer> 
//    );
// };


