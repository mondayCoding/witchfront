
import Navigation from './Navigation';
import Main from './main';
import Footer from './footer';
import * as React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';
import wrapInContext from '../HOC/contextProviderHOC';

const NavigationWithContext = wrapInContext(Navigation);


// TODO get theme with utility class

export default class Layout extends React.Component<any,any> {

   render() {
      return (
         <BrowserRouter>
            <div className={"body--layout " + this.props.userContext.theme}>
               <div className="content-layout">

                  <nav className="navigation">
                     <NavigationWithContext />
                  </nav>

                  <main className="main" id="wrapper">
                     <Main/>
                  </main>

               </div>               
            <Footer />
            </div>
         </BrowserRouter>
      );
   }
}

{/* use this to debug */}
{/* <React.StrictMode>
   <Navigation/>
   <Main/>
</React.StrictMode> */}