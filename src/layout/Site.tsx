
import classNames from 'classnames';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WithAuthorization from '../HOC/WithAuthorization';
import anno from '../Utils/annoModule';
import settings from '../Utils/appSettings';
import Footer from './footer';
import Main from './main';
import Navigation from './Navigation';

const NavigationWithAuth = WithAuthorization(Navigation);

// TODO get theme with utility class
export default class Site extends React.Component {

   componentDidMount(){
      anno.success(`Logged in as ${settings.getLoggedUserName()}`);
   }

   getBodyClassName(){
      const userTheme = settings.getTheme();

      return classNames({
         "body--layout": true,
         [userTheme]: userTheme
      });
   }

   render() {
      return (         
         <BrowserRouter>
            <div className={this.getBodyClassName()}>
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