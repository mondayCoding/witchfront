
import Site from './site';
import Login from './login';
import * as React from 'react';
import settings from '../Utils/appSettings';
import wrapInContext from '../HOC/contextProviderHOC';


// TODO => BREAK APART
// Separate login container with context provider (login state and state change) [ STATE AND CONTEXT BASED ]
// remove settings, these use utility class for get-set     [ LOCALSTORAGE BASED ]
// separate "Layout" with (site wrapped in login context) or (login screen)
export default class App extends React.Component {

   state:IState = {
      isSignedIn: false,
      level: null,
      theme: Theme.default
   };

   componentDidMount(){
      const isAlreadyLogged = settings.getIsLoggedIn() === "true";
      const level = settings.getUserLevel();
      
      if (isAlreadyLogged) {          
         this.setState({isSignedIn:true, level});
      }
   }

   changeTheme = (newTheme:Theme) => {
      console.log(newTheme);      
      settings.setTheme(newTheme);
      this.setState({theme:newTheme});
   }

   signIn = (user:IUser) => {
      settings.setNotificationPosition(user.settings.position);
      settings.setTheme(user.settings.theme);
      settings.setUserLevel(user.level.toString());
      settings.setIsLoggedIn("true");
      this.setState({isSignedIn:true, level:user.level});
   }
   
   signOut = () => {
      settings.setIsLoggedIn("false");
      settings.setUserLevel("");
      this.setState({isSignedIn:false, level:undefined});
   }

   renderSiteWithContext(){
      const SiteWithContext = wrapInContext(Site);
      return <SiteWithContext />;
   }

   render() {
      const isLoggedInside = this.state.isSignedIn;

      if (isLoggedInside) {
         return (
            <UserContext.Provider value={{...this.state, signOut:this.signOut, changeTheme:this.changeTheme}}>
               {this.renderSiteWithContext()}
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
   theme: Theme;
}

export enum Theme {
   default = "default",
   viole = "violet",
   light = "light"
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
   theme: Theme;
   signOut():void;
   changeTheme():void;
}

export const UserContext = React.createContext({
   isSignedIn: false, 
   level: null,
   signOut: null,
   changeTheme: null,
   theme: null
});