

import Site from './site';
import Login from './login';
import * as React from 'react';

enum loggedRole {
   admin = 0,
   developer = 1,
   user = 2,
   quest = 3
}

interface State {
   isLoggedIn:boolean;
   loggedRole:loggedRole;
}

export const UserContext = React.createContext({
   isLoggedIn: false, 
   loggedRole: null
});
 
//main layout component, has navigation, main content and router components
export default class Layout extends React.Component {

   public state:State = {
      isLoggedIn: false,
      loggedRole: null
   };

   public logIn = (role:loggedRole) => {
      sessionStorage.setItem("WITCHNODE_ISLOGGEDIN", "true");
      sessionStorage.setItem("WITCHNODE_USERROLE", role.toString());
      this.setState({isLoggedIn:true, loggedRole:role});
   }

   public componentDidMount(){
      const isAlreadyLogged = sessionStorage.getItem("WITCHNODE_ISLOGGEDIN") === "true";
      
      if (isAlreadyLogged) {          
         const loggedAs = parseInt(sessionStorage.getItem("WITCHNODE_USERROLE"),0);
         this.setState({isLoggedIn:true, loggedRole:loggedAs});
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
            <UserContext.Provider value={this.state}>
               <Site />
            </UserContext.Provider>
         );
      } else {
         return (
            <Login logIn={this.logIn} />
         );
      }
   }
}