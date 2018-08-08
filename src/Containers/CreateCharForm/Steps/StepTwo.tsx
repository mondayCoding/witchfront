
import * as React from 'react';

import Input from '../../../Components/TextinputMaterial';

interface IStepTwoForm {
	color: string;
	count: string;
	gender: string;
	location: string;
	onChange(params:any):void;
}

export default class StepTwo extends React.Component<IStepTwoForm> {

	public render(){
		const {color, count, gender, location, onChange} = this.props;

		return (
				<section>
					<Input value={color}     id="colorID"  	label="color" 		name="color"  		onChange={onChange} />
					<Input value={count}     id="countID"  	label="count" 		name="count"	 	onChange={onChange} />
					<Input value={gender}    id="genderID" 	label="gender" 	name="gender" 		onChange={onChange} />
					<Input value={location}  id="locationID" 	label="location" 	name="location" 	onChange={onChange} />
				</section>
		);
	}
}

