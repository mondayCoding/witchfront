
import * as React from 'react';
import Input from '../../components/textinput_material';

interface IStepOneForm {
	name:string; 
	lastname:string;
	pass:string;
	passrepeat: string;
   onChange(params:any):void;
}

export default class StepOne extends React.Component<IStepOneForm> {

	public render(){
		const {name, lastname, pass, passrepeat, onChange} = this.props;

		return (
			<section>
				<Input value={name}        id="NameID"      	label="Name" 				name="name"     	onChange={onChange} />
				<Input value={lastname}    id="LastNameID"  	label="Lastname" 			name="lastname" 	onChange={onChange} />
				<Input value={pass}        id="PassID"      	label="Password" 			name="pass" 		onChange={onChange} />
				<Input value={passrepeat}  id="PassRepeatID" label="Repeat password"	name="passrepeat" onChange={onChange} />
			</section>
		);
	}
}
