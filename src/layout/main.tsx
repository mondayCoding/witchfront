
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import chatPage from './pages/chatPage';
import createCharPage from './pages/CreateCharPage';
import dashboard from './pages/dashboard';
import docsPage from './pages/docsPage';
import gallerypage from './pages/galleryPage';
import settingsPage from './pages/settingsPage';
import soonpage from './pages/soonpage';
import witchPage from './pages/profilePage';
import apiMockPage from './pages/apiMockPage';
import coinFlipPage from './pages/coinFlipPage';
import complex from './pages/complexPage';


export default class Main extends React.Component {

   public state:any = {
      hasError:false
   };   

   //error handling (error boundary)
   public componentDidCatch(error:any, info:any) {
      // fallback UI
      this.setState({ hasError: true });
      console.error(error);
      console.error(info);
    }

   public render() {
      return (
         <React.Fragment>
            {
               (!this.state.hasError) ? 
               <Switch>
                  <Route exact={true} path="/" component={dashboard}/>
                  <Route exact={true} path="/createchar" component={createCharPage}/>
                  <Route exact={true} path="/soon" component={soonpage}/>
                  <Route exact={true} path="/gallery" component={gallerypage}/>
                  <Route exact={true} path="/witchchat" component={chatPage}/>
                  <Route exact={true} path="/profile" component={witchPage}/>
                  <Route exact={true} path="/settings" component={settingsPage}/>
                  <Route exact={true} path="/docs" component={docsPage}/>
                  <Route exact={true} path="/apimock" component={apiMockPage}/>
                  <Route exact={true} path="/coinflip" component={coinFlipPage}/>
                  <Route exact={true} path="/complex" component={complex}/>
                  <Redirect to="/"/>
               </Switch> 
               :
               <section>
                  <h2>
                     Something Broke ;(
                  </h2>
               </section>
            }         
         </React.Fragment> 
      );
   }
}
