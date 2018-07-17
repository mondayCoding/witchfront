import * as React from 'react';

export default class UsageSamples {

   public static Tabs = 
   `
   <Tabs>
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
   `;

   public static Select =
   `
   <Select 
      id="selectMultipleValue" 
      multi={true}
      simpleValue={true}
      value={jobList}
      onChange={this.handleMultipleSelectOnChange}
      options={jobs}
   />

   <Select 
      id="selectSingleValue" 
      value={job}
      onChange={this.handleSelectOnChange}
      name="job"
      options={jobs}
   />
   `;

   public static Loader =
   `
   <div className="loader"></div>
   `;

   public static CheckBox = 
   `
   <CheckBox
      name="hasCats"
      label="Has cats" 
      id="hascatssimple"
      checked={hasCats}
      onChange={this.handleOnChange}
   />

   <CheckBox
      name="hasDogs"
      label="Has Dogs" 
      id="hasdogssimple"
      checked={hasDogs}
      onChange={this.handleOnChange}
   />
   `;
   public static SliderCheckBox = 
   `
   <SliderCheckbox
      name="hasCats"
      label="Has cats" 
      id="hascatsslider"
      checked={hasCats}
      onChange={this.handleOnChange}
   />

   <SliderCheckbox
      name="hasDogs"
      label="Has cats" 
      id="hasdogsslider"
      checked={hasDogs}
      onChange={this.handleOnChange}
   />   
   `;

   public static ResponsiveInput = 
   `
   <ResponsiveInput 
      name="firstname"
      id="firstnameresp"
      label="Firstname"
      value={firstname}
      onChange={this.handleOnChange} 
   />
      <ResponsiveInput 
      name="lastname"
      id="lastnameresp"
      label="Lastname"
      value={lastname}
      onChange={this.handleOnChange} 
   />
   `;

   public static MaterialInput = 
   `
   <MaterialInput 
      name="firstname"
      id="firstnameresp"
      label="Firstname"
      value={firstname}
      onChange={this.handleOnChange} 
   />
   <MaterialInput 
      name="lastname"
      id="lastnameresp"
      label="Lastname"
      value={lastname}
      onChange={this.handleOnChange} 
   />
   `;

   public static WizardPath = 
   `
   <WizardPath step={4} maxStep={6} />
   `;

   public static Button = 
   `
   <Button buttonText="Simple button" />
   <Button buttonText="Simple button" className="themebutton dark" />
   <Button buttonText="Simple button" className="themebutton uppercase" />
   `;

   public static Modal = 
   `
   <Button buttonText="Modal" onClick={this.openModal} className="themebutton dark" />

   <Modal show={isModalOpen} heading="Modal" onClose={this.closeModal}>
      Modal content goes here
   </Modal>
   `;

   public static Radio = 
   `
   <Radio id="radioOne" label="cats" name="radioTestb" />
   <Radio id="radioTwo" label="dogs" name="radioTestb" />
   <Radio id="radioThree" label="vombats?" name="radioTestb" />
   `;
   
}

interface Props {
   isShown:boolean;
}

export const Sample:React.StatelessComponent<Props> = (props) => {

   if (!props.isShown) {
      return null;
   }

   return(
      <pre>
         <code className="language-tsx">
            {props.children}
         </code> 
      </pre>
   );
};





