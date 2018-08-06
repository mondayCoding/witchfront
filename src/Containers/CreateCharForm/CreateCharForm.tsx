
import * as React from 'react';
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import StepFour from './step4';
import Button from '../../Components/Button';
import anno from '../../utils/annoModule';
import WizardPath from '../../Components/Wizard_path';
import Tip from '../../Components/Infotip';
import ImgCaption from '../../Components/ImageWithCaption';

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



export default class UserForm extends React.Component {

	state: IFormState = {
		step: 1,
		maxStep:4,
		name:"",
		lastname:"",
		pass:"",
		passrepeat: "",
		location: "",
		color: "",
		count: "",
		gender: "",
		email: "",
		opinionCats:"",
		opinionDogs:"",
		opinionHouses:"",
		opinionLangues:"",
		youLikeRadio: "",
		selection:"en",
		allowMarketing: false
	};


	goToNext = () => {
		const { step } = this.state;
		if (step !== this.state.maxStep) {
			this.setState({ step: step + 1 });
		} else {
			anno.announce("form complete");
		}
	}

	goToPrevious = () => {
		const { step } = this.state;
		if (step !== 1) {
			this.setState({ step: step - 1 });
		} else {
			anno.announce("returned to start");
		}
	}

	onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const value = (target.type === "checkbox") ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	onsubmitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      console.log("no submit handling as of now");      
	}

	render() {
		const {step, maxStep } = this.state;

		return (
			<section className="content-centered-md">
				<form className="userform" onSubmit={this.onsubmitHandler}>

					<div className="spacing"></div>

					<WizardPath step={step} maxStep={maxStep} />

					<div className="spacing"></div>
					<div className="line-thin"></div>					

					<div className="row-flex spaced">
						<Button buttonText="return" 	type="button" onClick={this.goToPrevious} />
						<Button buttonText="next" 		type="button" onClick={this.goToNext} />
					</div>

					<div className="line-thin"></div>
					<div className="spacing"></div>
					

					<CurrentStep formstate={this.state} onChange={this.onChangeHandler}/>

					<div className="spacing"></div>
					<div className="line-thin"></div>
         
               <Tip message="This form is creation of it's time and repsesents no values of any kind" />
               <Tip message="Another tip with no valuable content" />
               <Tip message="Third one, still useless" />
               <Tip message="Not even going to bother anymore" />
               <Tip message="..." />

               <ImgCaption 
                  src="../images/blur.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="sm" 
                  captionTitle="Blur by design"
               />
      
               <ImgCaption 
                  src="../images/card.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="md" 
                  captionTitle="Blur by design"
               />
      
               <ImgCaption 
                  src="../images/orbs.png" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="md" 
                  captionTitle="Blur by design"
               />            

               <ImgCaption 
                  src="../images/snek.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="md" 
                  captionTitle="Blur by design"
               />              

               <ImgCaption 
                  src="../images/holo.jpg" 
                  captionText="This is caption sample for testing imgCaption component."
                  size="md" 
                  captionTitle="Blur by design"
               />                

               <ImgCaption 
                  src="../images/abyss.jpg" 
                  captionText="This is caption sample for testing imgCaption component."
                  size="md" 
                  captionTitle="Blur by design" 
               />
               
				</form>
			</section>
		);
	}
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

interface ICurrentStep {
	formstate:IFormState;
	onChange(param:any):void;
}