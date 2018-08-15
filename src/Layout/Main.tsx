
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
   chatPage, CreateCharPage, dashboard, soonpage,
   settingsPage,profilePage, complexPage, galleryPage, coinFlipPage
} from './pages';

export default class Main extends React.Component {

   state:any = {
      hasError:false
   }; 

   //error handling (error boundary)
   componentDidCatch(error:any, info:any) {
      // fallback UI
      this.setState({ hasError: true });
      console.error(error);
      console.error(info);
    }

   render() {
      return (
         <React.Fragment>
            {
               (!this.state.hasError) ? 
               <Switch>
                  <Route exact={true} path="/" component={dashboard}/>
                  <Route exact={true} path="/createchar" component={CreateCharPage}/>
                  <Route exact={true} path="/soon" component={soonpage}/>
                  <Route exact={true} path="/gallery" component={galleryPage}/>
                  <Route exact={true} path="/witchchat" component={chatPage}/>
                  <Route exact={true} path="/profile" component={profilePage}/>
                  <Route exact={true} path="/settings" component={settingsPage}/>
                  <Route exact={true} path="/coinflip" component={coinFlipPage}/>
                  <Route exact={true} path="/complex" component={complexPage}/>
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
