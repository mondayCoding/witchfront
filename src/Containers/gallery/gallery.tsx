
import * as React from 'react';
import * as Prism from "prismjs";
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-tsx.min.js';
import usageSample, {Sample, patterns} from 'Containers/gallery/Components/codeSamples';
// tslint:disable-next-line:no-var-requires
const Markdown = require('react-markdown');
import Select, {Option} from 'react-select';

//import components
import {
   TextinputMaterial, TextinputResponsive, TextinputPlain, Checkbox, 
   CheckboxSlider, Radiobutton, WizardPath, Button, ProgressBar, 
   Tab, Tabs, TextArea, Modal
} from 'Components/Index';


export default class Gallery extends React.Component {

   state:IState = {
      firstname:"",
      lastname:"",
      hasCats: false,
      hasDogs: false,
      hadAllergies:false,
      hadNoTimeForAllergies: false,
      amountOfFeet: 0,
      amountOfHands: 0,
      dateOfBirth: null,
      dateOfDeath:null,
      jobList: null,
      job: null,
      showUsageSamples:false,
      showValidationErrors: false,
      allDisabled: false,
      isModalOpen:false,
      bestAnimal: "",
      progress: 0
   };

   timer: number;

   componentDidMount(){
      Prism.highlightAll();
      this.timer = window.setInterval(this.incrementProgress, 500);
   }

   componentWillUnmount(){
      clearInterval(this.timer);
   }
   
   componentDidUpdate(){
      Prism.highlightAll();
   }

   incrementProgress = () => {
      this.setState({progress: this.state.progress + 3});
   }

   handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.type === "text" ? e.target.value : e.target.checked;
      const targetName = e.target.name;
      this.setState({[targetName]:targetValue});
   }

   handleSelectOnChange = (e:any) => {
      const job = e.value;   
      this.setState({job});
   }

   handleMultipleSelectOnChange = (selectionString:Option<string>) => {
      const jobList = selectionString.split(",") as IJob[];   
      this.setState({jobList});
   }

   openModal = () => {
      this.setState({isModalOpen:true});
   }
   closeModal = () => {
      this.setState({isModalOpen:false});
   }

   render(){
      const {firstname, lastname, jobList, job, showValidationErrors, hadNoTimeForAllergies, isModalOpen,  
         hasCats, hasDogs, amountOfHands, dateOfBirth, dateOfDeath, allDisabled, showUsageSamples } = this.state;
      const fullname = `${firstname} ${lastname}`;
      const validation = (showValidationErrors) ? "validation error" : null;

      return(
         <section className="gallery">

            <h2 className="themeheading">Component gallery</h2>
            <section className="settings">             
               <label className="settings--label">Gallery settings | </label>

               <CheckboxSlider
                  name="showUsageSamples"
                  label="Display code examples" 
                  id="showUsageSamples"
                  checked={showUsageSamples}
                  onChange={this.handleOnChange}
               />
               <CheckboxSlider
                  name="allDisabled"
                  label="Disable all input elements" 
                  id="disableAll"
                  checked={allDisabled}
                  onChange={this.handleOnChange}
               />
               <CheckboxSlider
                  name="showValidationErrors"
                  label="Show validation errors" 
                  id="showValidadErrors"
                  checked={showValidationErrors}
                  onChange={this.handleOnChange}
               />   
            </section>

            <article className="item">
               <h4 className="themeheading negative padded">
                  TextInput | Material design
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <TextinputMaterial 
                        name="firstname"
                        label="Firstname"
                        value={firstname}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                        validation={validation}
                     />
                     <TextinputMaterial 
                        name="lastname"
                        label="Lastname"
                        value={lastname}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                        validation={validation}
                     />
         
                     <div className="emphasis-wrapper negative">
                        {fullname}
                     </div>
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.MaterialInput}
                     </Sample>
                  </section>
               </div>
            </article>



            <article className="item">
               <h4 className="themeheading negative padded">
                  TextInput | responsive design
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <TextinputResponsive 
                        name="firstname"
                        id="firstnameresp"
                        label="Firstname"
                        value={firstname}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                        validation={validation}
                     />
                     <TextinputResponsive 
                        name="lastname"
                        id="lastnameresp"
                        label="Lastname"
                        value={lastname}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                        validation={validation}
                     />
         
                     <div className="emphasis-wrapper negative">
                        {fullname}
                     </div>
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.ResponsiveInput}
                     </Sample>
         
                  </section>
               </div>
            </article>

            <article className="item">
               <h4 className="themeheading negative padded">
                  Checkbox | CSS
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <Checkbox
                        name="hasCats"
                        label="Has cats" 
                        id="hascatssimple"
                        checked={hasCats}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                     />
         
                     <Checkbox
                        name="hasDogs"
                        label="Has Dogs" 
                        id="hasdogssimple"
                        checked={hasDogs}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                     />
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.CheckBox}
                     </Sample>         
         
                  </section>
               </div>
            </article>


            <article className="item">
               <h4 className="themeheading negative padded">
                  Checkbox | CSS-Slider
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <CheckboxSlider
                        name="hasCats"
                        label="Has cats" 
                        id="hascatsslider"
                        checked={hasCats}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                     />
         
                     <CheckboxSlider
                        name="hasDogs"
                        label="Has cats" 
                        id="hasdogsslider"
                        checked={hasDogs}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                     />
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.SliderCheckBox}
                     </Sample>   
   
                  </section>
               </div>
            </article>

            <article className="item">
               <h4 className="themeheading negative padded">
                  Radiobutton | CSS radiobutton
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     
                     <Radiobutton 
                        id="radioOne" 
                        disabled={allDisabled} 
                        label="cats" 
                        name="bestAnimal" 
                        onChange={this.handleOnChange} 
                     />
                     <Radiobutton 
                        id="radioTwo" 
                        disabled={allDisabled} 
                        label="dogs" 
                        name="bestAnimal" 
                        onChange={this.handleOnChange} 
                     />
                     <Radiobutton 
                        id="radioThree" 
                        disabled={allDisabled} 
                        label="vombats?" 
                        name="bestAnimal" 
                        onChange={this.handleOnChange} 
                     />
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.Radio}
                     </Sample>  
   
                  </section>
               </div>
            </article>

            <article className="item">
               <h4 className="themeheading negative padded">
                  Tabs | easy to use tabbed content
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <Tabs >
                        <Tab title="Tab#1">
                           Sample content "tab 1"
                        </Tab>
                        <Tab title="Tab#2">
                           Sample content "tab 2"
                        </Tab>
                        <Tab title="Tab#3">
                           Sample content "tab 3"
                        </Tab>
                     </Tabs>
                     
                     <Sample isShown={showUsageSamples}>
                        {usageSample.Tabs}
                     </Sample>   
                  </section>
               </div>
            </article>

            

              <article className="item">
               <h4 className="themeheading negative padded">
                  Progress bar | animated
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">

                     <ProgressBar percentage={this.state.progress} showPercentStatus={true} />
                     <ProgressBar 
                        percentage={this.state.progress} 
                        showPercentStatus={true} 
                        minText="min" 
                        maxText="max" 
                     />
                     <ProgressBar percentage={this.state.progress} showWarningWhenFull={true}/>
                     <ProgressBar percentage={this.state.progress} minText="minValue" maxText="maxValue" />
                     <ProgressBar percentage={this.state.progress} minText="justMin" />
                     <ProgressBar percentage={this.state.progress} />
         
                     <Sample isShown={showUsageSamples}>         
                        {usageSample.progress}
                     </Sample>
                  </section>
               </div>
            </article>


            <article className="item">
               <h4 className="themeheading negative padded">
                  Select | Rich select component with search and multiselect
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <Select 
                        id="selectMultipleValue" 
                        multi={true}
                        simpleValue={true}
                        value={jobList}
                        disabled={allDisabled}
                        onChange={this.handleMultipleSelectOnChange}
                        options={jobs}
                     />
         
                     <Select 
                        id="selectSingleValue" 
                        value={job}
                        disabled={allDisabled}
                        onChange={this.handleSelectOnChange}
                        name="job"
                        options={jobs}
                     />
         
                     <Sample isShown={showUsageSamples}>
         
                        {usageSample.Select}
                     </Sample>
                  </section>
               </div>
            </article>

            <article className="item">
               <h4 className="themeheading negative padded">
                  Button | basic button with variants
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                        
                     <Button buttonText="Simple button" disabled={allDisabled} />
                     <Button buttonText="Simple button" disabled={allDisabled}  className="themebutton dark" />
                     <Button buttonText="Simple button" disabled={allDisabled}  className="themebutton uppercase" />
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.Button}
                     </Sample>
                  </section>
               </div>
            </article>

            <article className="item">
               <h4 className="themeheading negative padded">
                  Modal | simple modal component (click modal-button to open)
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <Button 
                        buttonText="Modal" 
                        disabled={allDisabled} 
                        onClick={this.openModal} 
                        className="themebutton dark" 
                     />
                     <Modal show={isModalOpen} heading="Modal" onClose={this.closeModal}>
                        Modal content goes here
                     </Modal>
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.Modal}
                     </Sample>
                  </section>
               </div>
            </article>
            
            <article className="item">
               <h4 className="themeheading negative padded">
                  WizardPath | Form "step" visualization
               </h4>

               <div className="spacing"></div>

               <div className="item--content">
                  <section className="content--lg">
                     <WizardPath step={4} maxStep={6} />
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.WizardPath}
                     </Sample>
                  </section>
               </div>
            </article>

            <article className="item">
               <h4 className="themeheading negative padded">
                  Loader | Simple pure CSS loader
               </h4>
   
               <div className="item--content">
                  <section className="content--lg">
                     <div className="loader"></div>
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.Loader}
                     </Sample>  
   
                  </section>
               </div>
            </article>

            <div className="content--lg">
               <Markdown source={patterns} />
            </div>
            
         </section>
      );
   }
}

interface IState {
   firstname: string;
   lastname: string;
   hasDogs: boolean;
   hasCats: boolean;
   hadAllergies: boolean;
   hadNoTimeForAllergies: boolean;
   amountOfHands: number;
   amountOfFeet: number;
   dateOfBirth: Date;
   dateOfDeath: Date;
   jobList: IJob[];
   job: IJob;
   allDisabled: boolean;
   showValidationErrors: boolean;
   showUsageSamples: boolean;
   isModalOpen: boolean;
   bestAnimal: string;
   progress: number;
}

const jobs = [
   {value:"1",  label: "Headman"},
   {value:"2",  label: "Bossman"},
   {value:"3",  label: "BigBoss"},
   {value:"4",  label: "Headhunter"},
   {value:"5",  label: "Paladin"},
   {value:"6",  label: "WhiteKnight"},
   {value:"7",  label: "Jobseeker"},
   {value:"8",  label: "Magician"},
   {value:"9",  label: "NeoPaladin"},
   {value:"10",  label: "NobelMan"}
];

interface IJob {
   value:string;
   label: string;
}
