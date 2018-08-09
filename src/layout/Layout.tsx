
import * as React from 'react';
import Site from './Site';
import {IAuthorization} from '../HOC/WithAuthorization';
import Login from './login';

interface IProps {
   auth:IAuthorization;
}

export default class Layout extends React.Component<IProps> {

   render() {
      const {isSignedIn, signIn} = this.props.auth;

      return (               
         (isSignedIn) 
         ? <Site /> 
         : <Login signIn={signIn} />
      );
   }
}


{/* use this to debug */}
{/* <React.StrictMode>
   <Navigation/>
   <Main/>
</React.StrictMode> */}