
import Navigation from './Navigation';
import Main from './main';
import Footer from './footer';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import WithAuthorization, {IAuthorization} from '../HOC/WithAuthorization';
import Login from './login';

const NavigationWithAuth = WithAuthorization(Navigation);

interface IProps {
   auth:IAuthorization;
}

// TODO get theme with utility class
export default class Layout extends React.Component<IProps,any> {

   componentDidMount(){
      console.log(this.props);
      
   }

   render() {
      return (         
      
      <React.Fragment>
         {this.props.auth.isSignedIn ?
            <BrowserRouter>
               <div className={"body--layout "}>
                  <div className="content-layout">

                     <nav className="navigation">
                        <NavigationWithAuth />
                     </nav>

                     <main className="main" id="wrapper">
                        <Main/>
                     </main>

                  </div>               
               <Footer />
               </div>
            </BrowserRouter>
            :
            <Login signIn={this.props.auth.signIn}/>
         }
      </React.Fragment>
      );
   }
}

{/* use this to debug */}
{/* <React.StrictMode>
   <Navigation/>
   <Main/>
</React.StrictMode> */}