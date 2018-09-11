import {Button, TextInputMaterial} from 'Common/Index';
import * as React from 'react';
import API from '../Services/Login';
import ANNO from '../Utils/Notify';
import { AxiosError, AxiosResponse } from 'axios';
import Confirm from 'Common/ConfirmPopUp';
import Notify from '../Utils/Notify';

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
   showHelp = async () =>{ if(Confirm("show help?")){this.setState({showHelp:true});} };

   handleOnSubmit = async (e:React.FormEvent) =>{
      e.preventDefault();
      const {username, password} = this.state;

      const loginTry = await API.attemptLogin({username, password}) as AxiosResponse;  
      console.log(loginTry);
      console.log(loginTry);
      console.log(loginTry);
      console.log(loginTry);
      console.log(loginTry);
      
      const error = loginTry.status !== 200;

      if (error) {
         ANNO.announce(loginTry.data.message, null, "warning");
         this.setState({
            usernameValidation: loginTry.data.username, 
            passwordValidation: loginTry.data.password
         });
      } else {
         console.log("User Profile recieved:");         
         console.log(loginTry.data);           
         this.props.signIn(loginTry.data);
         ANNO.announce("Signed in successfully"); 
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
                     <TextInputMaterial 
                        label="Username or email" 
                        name="username" 
                        value={username}
                        id="usernameID"
                        onChange={this.handleOnChange} 
                        error={usernameValidation}
                     />
                     <TextInputMaterial 
                        label="Password" 
                        name="password" 
                        value={password}
                        id="passwordID"
                        type="password"
                        onChange={this.handleOnChange}
                        error={passwordValidation}
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

