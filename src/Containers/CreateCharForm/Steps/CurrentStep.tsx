import * as React from 'react';
import {StepOne, StepTwo, StepThree, StepFour} from '.';

const CurrentStep = (props:ICurrentStep) => {

	const step = props.formstate.step;
	const formstate = props.formstate;
	const onChange = props.onChange;

	switch(step) {
		case 1:
			return(<StepOne {...formstate} onChange={onChange} />);

		case 2:
			return(<StepTwo {...formstate} onChange={onChange} />) ;

		case 3:
			return (<StepThree {...formstate} onChange={onChange} />);

		case 4:
			return (<StepFour {...formstate} onChange={onChange} />);

		default:
			return(<StepOne {...formstate} onChange={onChange} />);
	}
};

export default CurrentStep;


interface ICurrentStep {
	formstate:IFormState;
	onChange(param:any):void;
}

interface IFormState {
	step: number;
	maxStep:number;
	name:string;
	lastname:string;
	pass:string;
	passrepeat: string;
	location: string;
	color: string;
	count: string;
	gender: string;
	email: string;
	opinionCats: string;
   opinionDogs: string;
   opinionHouses: string;
	opinionLangues: string;
	youLikeRadio:string;
	selection: string;
   allowMarketing: boolean;
}
