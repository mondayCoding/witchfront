
import * as React from 'react';
import * as Prism from "prismjs";
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-tsx.min.js';
import usageSample, {Sample} from './codeSamples';

//import components
import MaterialInput from '../../components/textinput_material';
import ResponsiveInput from '../../components/textinput_responsive';
import SimpleInput from '../../components/textinput_plain';
import CheckBox from '../../components/checkbox';
import SliderCheckbox from '../../components/checkbox_slider';
import Radio from '../../components/radiobutton';
import WizardPath from '../../components/wizard_path';
import Button from '../../components/button';
import Tab from '../../components/tab';
import Tabs from '../../components/tabs';
import Modal from '../../components/modal';
import Select, {Option} from 'react-select';


export default class Gallery extends React.Component {

   public state:State = {
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
      allDisabled: false,
      isModalOpen:false,
      bestAnimal: ""
   };

   public componentDidMount(){
      Prism.highlightAll();
   }

   public componentDidUpdate(){
      Prism.highlightAll();
   }

   public handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.type === "text" ? e.target.value : e.target.checked;
      const targetName = e.target.name;
      this.setState({[targetName]:targetValue});
   }

   public handleSelectOnChange = (e:any) => {
      const job = e.value;   
      this.setState({job});
   }

   public handleMultipleSelectOnChange = (selectionString:Option<string>) => {
      const jobList = selectionString.split(",") as Job[];   
      this.setState({jobList});
   }

   public openModal = () => {
      this.setState({isModalOpen:true});
   }
   public closeModal = () => {
      this.setState({isModalOpen:false});
   }

   public render(){
      const {firstname, lastname, jobList, job, hadAllergies, hadNoTimeForAllergies, isModalOpen,  
         hasCats, hasDogs, amountOfHands, dateOfBirth, dateOfDeath, allDisabled, showUsageSamples } = this.state;
      const fullname = `${firstname} ${lastname}`;
      const livedFord = "calc";

      return(
         <section className="gallery">

            <h2 className="themeheading">Component gallery</h2>
            <section className="settings">             
               <label className="settings--label">Gallery settings:</label>

               <SliderCheckbox
                  name="showUsageSamples"
                  label="Display code examples" 
                  id="showUsageSamples"
                  checked={showUsageSamples}
                  onChange={this.handleOnChange}
               />
               <SliderCheckbox
                  name="allDisabled"
                  label="Disable all input elements" 
                  id="disableAll"
                  checked={allDisabled}
                  onChange={this.handleOnChange}
               />     
            </section>

            <article className="item">
               <h4 className="themeheading negative padded">
                  TextInput | Material design
               </h4>
   
               <div className="item--content">
                  <section className="content-centered-lg">
                     <MaterialInput 
                           name="firstname"
                           id="firstnamematerial"
                           label="Firstname"
                           value={firstname}
                           disabled={allDisabled}
                           onChange={this.handleOnChange} 
                     />
                     <MaterialInput 
                        name="lastname"
                        id="lastnamematerial"
                        label="Lastname"
                        value={lastname}
                        disabled={allDisabled}
                        onChange={this.handleOnChange} 
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
                  <section className="content-centered-lg">
                     <ResponsiveInput 
                        name="firstname"
                        id="firstnameresp"
                        label="Firstname"
                        value={firstname}
                        disabled={allDisabled}
                        onChange={this.handleOnChange} 
                     />
                     <ResponsiveInput 
                        name="lastname"
                        id="lastnameresp"
                        label="Lastname"
                        value={lastname}
                        disabled={allDisabled}
                        onChange={this.handleOnChange} 
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
                  <section className="content-centered-lg">
                     <CheckBox
                        name="hasCats"
                        label="Has cats" 
                        id="hascatssimple"
                        checked={hasCats}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                     />
         
                     <CheckBox
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
                  <section className="content-centered-lg">
                     <SliderCheckbox
                        name="hasCats"
                        label="Has cats" 
                        id="hascatsslider"
                        checked={hasCats}
                        disabled={allDisabled}
                        onChange={this.handleOnChange}
                     />
         
                     <SliderCheckbox
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
                  <section className="content-centered-lg">
                     
                     <Radio id="radioOne" disabled={allDisabled} label="cats" name="bestAnimal" onChange={this.handleOnChange} />
                     <Radio id="radioTwo" disabled={allDisabled} label="dogs" name="bestAnimal" onChange={this.handleOnChange} />
                     <Radio id="radioThree" disabled={allDisabled} label="vombats?" name="bestAnimal" onChange={this.handleOnChange} />
         
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
                  <section className="content-centered-lg">
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
                  Select | Rich select component with search and multiselect
               </h4>
   
               <div className="item--content">
                  <section className="content-centered-lg">
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
                  <section className="content-centered-lg">
                        
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
                  <section className="content-centered-lg">
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
                  <section className="content-centered-lg">
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
                  <section className="content-centered-lg">
                     <div className="loader"></div>
         
                     <Sample isShown={showUsageSamples}>
                        {usageSample.Loader}
                     </Sample>  
   
                  </section>
               </div>
            </article>


            
         </section>
      );
   }
}

interface State {
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
   jobList: Job[];
   job: Job;
   allDisabled: boolean;
   showUsageSamples: boolean;
   isModalOpen: boolean;
   bestAnimal: string;
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

interface Job {
   value:string;
   label: string;
}
