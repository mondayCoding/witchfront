
import * as React from 'react';
import {Button, WizardPath, Infotip, ImageWithCaption} from '../../Components';
import {CurrentStep} from './Steps';
import anno from '../../Utils/annoModule';


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
         
               <Infotip message="This form is creation of it's time and repsesents no values of any kind" />
               <Infotip message="Another tip with no valuable content" />
               <Infotip message="Third one, still useless" />
               <Infotip message="Not even going to bother anymore" />
               <Infotip message="..." />

               <ImageWithCaption 
                  src="../images/blur.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="sm" 
                  captionTitle="Blur by design"
               />
      
               <ImageWithCaption 
                  src="../images/card.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="md" 
                  captionTitle="Blur by design"
               />
      
               <ImageWithCaption 
                  src="../images/orbs.png" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="md" 
                  captionTitle="Blur by design"
               />            

               <ImageWithCaption 
                  src="../images/snek.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content"
                  size="md" 
                  captionTitle="Blur by design"
               />              

               <ImageWithCaption 
                  src="../images/holo.jpg" 
                  captionText="This is caption sample for testing imgCaption component."
                  size="md" 
                  captionTitle="Blur by design"
               />                

               <ImageWithCaption 
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

