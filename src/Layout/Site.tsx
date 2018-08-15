
import classNames from 'classnames';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WithAuthorization from '../Hoc/WithAuthorization';
import NOTIFY from '../Utils/Notify';
import SETTINGS from 'Utils/Settings';
import Footer from './Footer';
import Main from './Main';
import Navigation from './Navigation';

const NavigationWithAuth = WithAuthorization(Navigation);

// TODO get theme with utility class
export default class Site extends React.Component {

   componentDidMount(){
      NOTIFY.success(`Logged in as ${SETTINGS.getLoggedUserName()}`);      
      NOTIFY.success(`using theme ${SETTINGS.getTheme()}`);
   }

   getBodyClassName(){
      const userTheme = SETTINGS.getTheme();

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