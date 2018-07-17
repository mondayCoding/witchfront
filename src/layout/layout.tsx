
import Navigation from './navigation';
import Main from './main';
import Footer from './footer';
import Site from './site';
import Login from './login';
import Button from '../components/button';
import * as React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';

interface State {
   isLoggedIn:boolean;
}

//main layout component, has navigation, main content and router components
export default class Layout extends React.Component {

   public state:State = {
      isLoggedIn:false
   };

   public logIn = () => {
      sessionStorage.setItem("WITCHNODE_LOGGEDIN", "true");
      this.setState({isLoggedIn:true});
   }

   public componentDidMount(){
      const loggedStatus = sessionStorage.getItem("WITCHNODE_LOGGEDIN") === "true";
      
      if (loggedStatus) {         
         this.logIn();
      }

      document.addEventListener("keyup", (event) => { 
         if (event.altKey && event.keyCode===75){
            console.log("alt + k pressed");            
         }             
      });
   }

   public render() {
      const loggedIn = this.state.isLoggedIn;

      if (loggedIn) {
         return (
            <Site />
         );
      } else {
         return (
            <Login logIn={this.logIn} />
         );
      }
   }
}