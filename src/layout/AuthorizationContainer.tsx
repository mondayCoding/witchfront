

import * as React from 'react';
import settings from '../Utils/appSettings';
import {IUser, userLevel} from '../interfaces/services';
import Login from './login';


interface IState {
   isSignedIn:boolean;
   level: userLevel;
}

export class AuthorizationContainer extends React.Component {

   state:IState = {
      isSignedIn: false,
      level: null,
   };

   componentDidMount(){
      const isLogged = settings.getIsLoggedIn();
      const level = settings.getUserLevel();
      
      if (isLogged) {          
         this.setState({isSignedIn:true, level});
      }
   }

   signIn = (user:IUser) => {
      this.intializeUserSettings(user);
      this.setState({isSignedIn:true, level:user.level});
   }
   
   signOut = () => {
      settings.setIsLoggedIn(false);
      this.setState({isSignedIn:false, level:undefined});
   }

   intializeUserSettings(user:IUser){
      settings.setIsLoggedIn(true);
      settings.setNotificationPosition(user.settings.position);
      settings.setTheme(user.settings.theme);
      settings.setUserLevel(user.level);
   }

   render(){
      const provided = {
         ...this.state,
         signIn: this.signIn,
         signOut: this.signOut
      };

      return(     
         <Authorization.Provider value={provided}>
            {this.props.children}
         </Authorization.Provider>
      );
   }
}

export const Authorization = React.createContext({});

