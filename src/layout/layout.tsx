
import Site from './site';
import Login from './login';
import * as React from 'react';
import settings from '../utils/appSettings';

export default class Layout extends React.Component {

   state:IState = {
      isSignedIn: false,
      level: null
   };

   componentDidMount(){
      const isAlreadyLogged = sessionStorage.getItem("WITCHNODE_ISLOGGEDIN") === "true";
      const level = parseInt(sessionStorage.getItem("WITCHNODE_USERROLE"),0);
      
      if (isAlreadyLogged) {          
         this.setState({isSignedIn:true, level});
      }
   }

   signIn = (user:IUser) => {
      sessionStorage.setItem("WITCHNODE_ISLOGGEDIN", "true");
      sessionStorage.setItem("WITCHNODE_USERROLE", user.level.toString());
      sessionStorage.setItem("WITCHNODE_USER_TIPPOSITION", user.settings.position );
      sessionStorage.setItem("WITCHNODE_USER_THEME", user.settings.theme );
      this.setState({isSignedIn:true, level:user.level});
   }
   
   signOut = () => {
      sessionStorage.setItem("WITCHNODE_ISLOGGEDIN", "false");
      sessionStorage.removeItem("WITCHNODE_USERROLE");
      this.setState({isSignedIn:false, level:undefined});
   }

   render() {
      const isLoggedInside = this.state.isSignedIn;

      if (isLoggedInside) {
         return (
            <UserContext.Provider value={{...this.state, signOut:this.signOut}}>
               <Site />
            </UserContext.Provider>
         );
      } else {
         return (
            <Login signIn={this.signIn} />
         );
      }
   }
}


interface IUser {
   level: userLevel;
   settings: {
      language: string;
      position: string;
      scale: string;
      theme: string;
   };
}

interface IState {
   isSignedIn:boolean;
   level:userLevel;
}

export enum userLevel {
   admin = 0,
   developer = 1,
   user = 2,
   quest = 3
}

// UserContext

export interface IUserContext {
   isSignedIn: boolean;
   level: userLevel;
   signOut():void;
}

export const UserContext = React.createContext({
   isSignedIn: false, 
   level: null,
   signOut: null
});