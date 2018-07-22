
import Navigation from './navigation';
import Main from './main';
import Footer from './footer';
import * as React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';


//main layout component, has navigation, main content and router components
export default class Layout extends React.Component {

   public render() {

      return (
         <BrowserRouter>
            <div className="body--layout">
               <div className="content-layout">
                  {/* use this to debug */}
                  {/* <React.StrictMode>
                     <Navigation/>
                     <Main/>
                  </React.StrictMode> */}
                  <Navigation/>
                  <Main/>
               </div>               
            <Footer />
            </div>
         </BrowserRouter>
      );
   }
}
