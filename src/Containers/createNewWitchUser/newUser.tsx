
//****************************************************************************
// Libraries
//****************************************************************************

import * as React from 'react';
import res from '../Profile/localization';
import API from '../../Services/UserForm';
import {TextinputMaterial, Button} from '../../Components';
import anno from '../../Utils/Notify';


//****************************************************************************
// Interface
//****************************************************************************

interface IProps {
   lang:string;
}

interface IState {
   name: string;
   email: string;
   pass: string;
   repeatPass: string;
}

//****************************************************************************
// Form
//****************************************************************************

export default class UserForm extends React.Component<IProps> {

   state:IState = {
      name: "",
      email: "",
      pass: "",
      repeatPass: ""
   };	

   handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      let newState:any = {...this.state};
      newState[e.target.name] = e.target.value;
      this.setState({form:newState});
   }

   onSubmit = () => {
      alert("fuck");
   }

   render(){

      return (
         <form className="userform" onSubmit={this.onSubmit}>
            <div className="spacing"></div>

            <TextinputMaterial 
               name="username" 
               label={res.username} 
               value={"sdasd"} 
               onChange={this.handleOnChange} 
               id="nameID"
            />
            
            <TextinputMaterial 
               name="username" 
               label={res.username} 
               value={"sdasd"} 
               onChange={this.handleOnChange} 
               id="nameID"
            />

            <TextinputMaterial 
               name="username" 
               label={res.username} 
               value={"sdasd"} 
               onChange={this.handleOnChange} 
               id="nameID"
            />

            <div className="spacing"></div>

            <Button buttonText={res.submit} type="submit" />

            <div className="line-thin"></div>

         </form>
      );
   }
}

//****************************************************************************
// Interface
//****************************************************************************

