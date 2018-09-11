

import * as React from 'react';
import Settings from 'Utils/Settings';
import Layout from './Layout';
import {IUser, userLevel} from '../interfaces/services';

export const {Provider, Consumer} = React.createContext({});

export interface IAuthorization {
   isSignedIn: boolean;
   level: userLevel;
   signOut():void;
   signIn(x:any):void;
}

interface IState {
   isSignedIn:boolean;
   level: userLevel;
}

export class AuthProvider extends React.Component {

   state:IState = {
      isSignedIn: false,
      level: null,
   };

   componentDidMount(){
      const isLogged = Settings.getIsLoggedIn();
      const level = Settings.getUserLevel();
      
      if (isLogged) {          
         this.setState({isSignedIn:true, level});
      }
   }

   signIn = (user:IUser) => {
      this.intializeUserSettings(user);
      this.setState({isSignedIn:true, level:user.level});
   }
   
   signOut = () => {
      Settings.setIsLoggedIn(false);
      this.setState({isSignedIn:false, level:undefined});
   }

   intializeUserSettings(user:IUser){
      Settings.setIsLoggedIn(true);
      Settings.setLoggedUserName(user.username);
      Settings.setUserLevel(user.level);
      Settings.setNotificationPosition(user.settings.position);
      Settings.setTheme(user.settings.theme);
   }

   render(){
      const provided = {
         ...this.state,
         signIn: this.signIn,
         signOut: this.signOut
      };

      return(     
         <Provider value={provided}>
            <Layout auth={provided} />
         </Provider>
      );
   }
}





