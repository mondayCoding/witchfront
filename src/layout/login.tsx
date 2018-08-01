

import Button from '../components/Button';
import Input from '../components/Textinput_material';
import * as React from 'react';
import API from '../services/Login';
import ANNO from '../utils/annoModule';
import { AxiosError } from 'axios';


interface IProps {
   logIn(x:number):void;
}
interface IState {
   username: string;
   password: string;
   usernameValidation: string;
   passwordValidation: string;
   showHelp: boolean;
}

//main layout component, has navigation, main content and router components
export default class Layout extends React.Component<IProps> {

   public state:IState = {
      username: "",
      password: "",
      usernameValidation: null,
      passwordValidation: null,
      showHelp: false,
   };

   public handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {value, name} = e.target;
      this.setState({
         [name]:value, 
         usernameValidation: null, 
         passwordValidation: null
      });
   }

   public handleLoginAsAdmin = () => {
      this.props.logIn(0);
   }

   public handleLoginAsDeveloper = () => {
      this.props.logIn(1);
   }

   public handleOnSubmit = async (e:React.FormEvent) =>{
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
         ANNO.announce("succesfull login");   
         this.props.logIn(loginTry.level);
      }      
   }

   public showHelp = () =>{
      this.setState({showHelp:true});
   }

   public render() {
      const {username, password, usernameValidation, passwordValidation, showHelp} = this.state;

      return (
         <div className="login">
            <div className="login--window">
               <h2 className="login--window--title">
                  Login
               </h2>
               <div className="login--window--content">
                  <form onSubmit={this.handleOnSubmit}>
                     <Input 
                        label="Username or email" 
                        name="username" 
                        value={username}
                        id="usernameID"
                        onChange={this.handleOnChange} 
                        validation={usernameValidation}
                     />
                     <Input 
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
