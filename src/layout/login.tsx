import {Button, TextinputMaterial} from '../Components';
import * as React from 'react';
import API from '../services/Login';
import ANNO from '../Utils/annoModule';
import { AxiosError } from 'axios';

export default class Layout extends React.Component<IProps> {

   state:IState = {
      username: "",
      password: "",
      usernameValidation: null,
      passwordValidation: null,
      showHelp: false,
   };

   handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {value, name} = e.target;
      this.setState({
         [name]:value, 
         usernameValidation: null, 
         passwordValidation: null
      });
   }

   handleLoginAsAdmin = () => { this.props.signIn({level:0, settings: {position: ""}}); };
   handleLoginAsDeveloper = () => { this.props.signIn({level:1, settings: {position: ""}}); };
   showHelp = () =>{ this.setState({showHelp:true}); };

   handleOnSubmit = async (e:React.FormEvent) =>{
      e.preventDefault();
      const {username, password} = this.state;

      const loginTry = await API.attemptLogin({username, password}) as AxiosError | any;
      const error = loginTry.response;

      if (error) {
         ANNO.announce(error.data.message, null, "warning");
         this.setState({
            usernameValidation: error.data.username, 
            passwordValidation: error.data.password
         });
      } else {
         console.log("User Profile recieved:");         
         console.log(loginTry);           
         this.props.signIn(loginTry);
         ANNO.announce("Signed in"); 
      }      
   }

   render() {
      const {username, password, usernameValidation, passwordValidation, showHelp} = this.state;

      return (
         <div className="login">
            <div className="login--window">
               <h2 className="login--window--title">
                  Witchnode
               </h2>
               <h3 className="login--window--title">
                  Sign in
               </h3>
               <div className="login--window--content">
                  <form onSubmit={this.handleOnSubmit}>
                     <TextinputMaterial 
                        label="Username or email" 
                        name="username" 
                        value={username}
                        id="usernameID"
                        onChange={this.handleOnChange} 
                        validation={usernameValidation}
                     />
                     <TextinputMaterial 
                        label="Password" 
                        name="password" 
                        value={password}
                        id="passwordID"
                        type="password"
                        onChange={this.handleOnChange}
                        validation={passwordValidation}
                     />
                     <Button buttonText="Sign in" className="wide loginBtn" type="submit" />
                  </form>

                  <section className="forgot-pass">
                     <a href="#" onClick={this.showHelp}>Forgot password?</a>
                  </section>
                  
                  {showHelp &&
                     <div className="row-flex spaced">
                        <Button onClick={this.handleLoginAsAdmin} buttonText="Sign in as Admin" />
                        <Button onClick={this.handleLoginAsDeveloper} buttonText="Sign in as Developer" />
                     </div> 
                  }                 
               </div>
            </div>
         </div>
      );
   }
}

interface IProps {
   signIn(x:any):void;
}
interface IState {
   username: string;
   password: string;
   usernameValidation: string;
   passwordValidation: string;
   showHelp: boolean;
}

