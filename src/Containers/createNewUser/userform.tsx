
//****************************************************************************
// Libraries
//****************************************************************************

import * as React from 'react';
import res from '../Profile/localization';
import API from '../../Services/UserForm';
import {TextInputMaterial, Button} from 'Common/Index';
import anno from '../../Utils/Notify';
import validation from './validation';


//****************************************************************************
// Form
//****************************************************************************

export default class UserForm extends React.Component<IProps> {

   state:IState = {
      form : {
         username:"",
         email:"",
         location:"",
         accountNum:"",
			color:"",
			age: "", 
			date: Date.now()
      }
   };

	validation = validation;
	validating: boolean;
	
	validateForm(){
      this.validation.validate(this.state.form);
	}

   handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      let newState:any = {...this.state.form};
      newState[e.target.name] = e.target.value;
      this.setState({form:newState});
   }

   handleOnBlur = (e:React.ChangeEvent<HTMLInputElement>) => {
      this.validation.activateRule(e.target.name);
      this.forceUpdate();
   }

   async onsubmitHandler(event:any){
      event.preventDefault();
      this.validation.activateAllRules();
      this.forceUpdate();

      let data:any = await API.postUserForm(this.state.form);
      anno.announce("server message", data);
   }

   render(){
      const {username, email, location, accountNum, color, age } = this.state.form;
      let validify = this.validation;
      let onSubmit = (event:any)=>this.onsubmitHandler(event);

      this.validateForm();  

      return (
         <form className="userform" onSubmit={onSubmit}>
            <div className="spacing"></div>

            <TextInputMaterial 
               name="username" 
               label={res.username} 
               value={username} 
               onChange={this.handleOnChange} 
               onBlur={this.handleOnBlur}
               id="nameID"
               error={validify.getValidatedMessage("username")} 
            />
            
            <TextInputMaterial 
               name="email"
               tooltip="You wont actually recieve any emails form us... :)"
               label={res.email} 
               value={email} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="emailID"
               error={validify.getValidatedMessage("email")} 
            />
            <TextInputMaterial 
               name="location" 
               tooltip="Original home country" 
               label={res.location}  
               value={location} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="locationID"
            />
            <TextInputMaterial 
               name="accountNum" 
               tooltip="Use only numbers"
               label={res.accountNum} 
               value={accountNum} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur} 
               id="accountNumID"
               error={validify.getValidatedMessage("accountNum")} 
            />
            <TextInputMaterial 
               name="color" 
               label={res.color} 
               value={color} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="colorID"
               error={validify.getValidatedMessage("color")}					
            />
            <TextInputMaterial 
               name="age" 
               label={res.age} 
               value={age} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="ageID"
               error={validify.getValidatedMessage("age")}
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

interface IProps {
   lang:string;
}

interface IState {
   form:IForm;
}

interface IForm {
   "username":string;
   "email":string;
   "location":string;
   "accountNum":string;
   "color":string;
   "age": string;
   "date": number;
}