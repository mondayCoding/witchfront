

import Footer from './footer';
import Button from '../components/button';
import Input from '../components/textinput_material';
import * as React from 'react';
import axios, { AxiosError } from 'axios';


interface Props {
   logIn():void;
}
interface State {
   username: string;
   password: string;
}

//main layout component, has navigation, main content and router components
export default class Layout extends React.Component<Props> {

   public state:State = {
      username: "",
      password: ""
   };

   public handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {value, name} = e.target;
      this.setState({[name]:value});
   }


   public render() {
      const {username, password} = this.state;

      return (
         <div className="login">
            <div className="login--window">
               <h2 className="login--window--title">
                  Login
               </h2>
               <div className="login--window--content">
                  <Input 
                     label="Username or email" 
                     name="username" 
                     value={username}
                     id="usernameID"
                     onChange={this.handleOnChange} 
                  />
                  <Input 
                     label="Password" 
                     name="password" 
                     value={password}
                     id="passwordID"
                     type="password"
                     onChange={this.handleOnChange} 
                  />

                  <section className="forgot-pass">
                     <a href="#">Forgot password?</a>
                  </section>

                  <Button onClick={this.props.logIn} buttonText="Sign in" />
               </div>
            </div>
         </div>
      );
   }
}
