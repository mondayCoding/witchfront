
import Navigation from './Navigation';
import Main from './main';
import Footer from './footer';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import WithAuthorization from '../HOC/WithAuthorization';

const NavigationWithAuth = WithAuthorization(Navigation);

// TODO get theme with utility class
export default class Site extends React.Component {
   render() {
      return (         
         <BrowserRouter>
            <div className={"body--layout"}>
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
      );
   }
}

{/* use this to debug */}
{/* <React.StrictMode>
   <Navigation/>
   <Main/>
</React.StrictMode> */}