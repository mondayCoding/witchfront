
//****************************************************************************
// Libraries
//****************************************************************************

import * as React from 'react';
import FormValidator from '../../utils/validationModule';
import API from '../../services/UserForm';

import Input from '../../components/textinput_material';
import Button from '../../components/button';
import anno from '../../utils/annoModule';


//****************************************************************************
// Interface
//****************************************************************************

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


//****************************************************************************
// Form
//****************************************************************************

export default class UserForm extends React.Component<any,any> {

   public state:IState = {
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

	public validation: FormValidator;
	public validating: boolean;

   public componentWillMount(){ 
		
      const res = this.props.res;
      const test = FormValidator.test;

      this.validation = new FormValidator([
         {field: "email", 		message: res.emailIsInvalid, 		  validIf: (x) => test.isEmail(x) },
         {field: "accountNum",message: res.accNumIsInvalid,		  validIf: (x) => test.isInt(x)},
         {field: "username", 	message: "Name is required field", validIf: (x) => !test.isEmpty(x) },
         {field: "username", 	message: res.usernameIsTaken,		  validIf: (x) => (x !== "asd") && (x !=="Mario" )},
         {field: "username", 	message: res.usernameIsInvalid,	  validIf: (x) => test.isLength(x, {min:3, max:20})},
         {field: "color", 		message: "must be red",				  validIf: (x) => x === "red" }
      ]);      
	}
	
	public validateForm(){
      this.validation.validate(this.state.form);
	}

   public handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      let newState:any = {...this.state.form};
      newState[e.target.name] = e.target.value;
      this.setState({form:newState});
   }

   public handleOnBlur = (e:React.ChangeEvent<HTMLInputElement>) => {
      this.validation.activateRule(e.target.name);
      this.forceUpdate();
   }

   public async onsubmitHandler(event:any){
      event.preventDefault();
      this.validation.activateAllRules();
      this.forceUpdate();

      let data:any = await API.postUserForm(this.state.form);
      anno.announce("server message", data);
   }

   public render(){
      const {username, email, location, accountNum, color, age } = this.state.form;
      let res = this.props.res;
      let validify = this.validation;
      let onSubmit = (event:any)=>this.onsubmitHandler(event);

      this.validateForm();  

      return (
         <form className="userform" onSubmit={onSubmit}>
            <div className="spacing"></div>

            <Input 
               name="username" 
               label={res.username} 
               value={username} 
               onChange={this.handleOnChange} 
               onBlur={this.handleOnBlur}
               id="nameID"
               validation={validify.getValidatedMessage("username")} 
            />
            
            <Input 
               name="email"
               tooltip="You wont actually recieve any emails form us... :)"
               label={res.email} 
               value={email} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="emailID"
               validation={validify.getValidatedMessage("email")} 
            />
            <Input 
               name="location" 
               tooltip="Original home country" 
               label={res.location}  
               value={location} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="locationID"
            />
            <Input 
               name="accountNum" 
               tooltip="Use only numbers"
               label={res.accountNum} 
               value={accountNum} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur} 
               id="accountNumID"
               validation={validify.isValid("accountNum") ? null : validify.getMessage("accountNum")} 
            />
            <Input 
               name="color" 
               label={res.color} 
               value={color} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="colorID"
               validation={validify.getValidatedMessage("color")}					
            />
            <Input 
               name="age" 
               label={res.age} 
               value={age} 
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
               id="ageID"
               validation={validify.getValidatedMessage("age")}
            />

            <div className="spacing"></div>

            <Button buttonText={res.submit} type="submit" />

            <div className="line-thin"></div>

         </form>
      );
   }
}
