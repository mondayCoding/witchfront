import * as React from 'react';

export default class UsageSamples {

   static Tabs = 
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

   static Select =
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

   static Loader =
   `
   <div className="loader"></div>
   `;

   static CheckBox = 
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
   static SliderCheckBox = 
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

   static ResponsiveInput = 
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

   static MaterialInput = 
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

   static WizardPath = 
   `
   <WizardPath step={4} maxStep={6} />
   `;

   static Button = 
   `
   <Button buttonText="Simple button" />
   <Button buttonText="Simple button" className="themebutton dark" />
   <Button buttonText="Simple button" className="themebutton uppercase" />
   `;

   static Modal = 
   `
   <Button buttonText="Modal" onClick={this.openModal} className="themebutton dark" />

   <Modal show={isModalOpen} heading="Modal" onClose={this.closeModal}>
      Modal content goes here
   </Modal>
   `;

   static Radio = 
   `
   <Radio id="radioOne" label="cats" name="radioTestb" />
   <Radio id="radioTwo" label="dogs" name="radioTestb" />
   <Radio id="radioThree" label="vombats?" name="radioTestb" />
   `;
   
}

interface IProps {
   isShown:boolean;
}

export const Sample:React.StatelessComponent<IProps> = (props) => {

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


export const patterns = 
`
# Good patterns in React

Samples of good developments patterns (not best practices) for React and Typescript.

## Typecript

### Variable scoping

Start with most restrictive scope and allow looser scope when necessary.  
const > let > var 

### Typing

By default provide typing for everything and only use "any" if there is no other way.  
Many external modules have no typings and might require use of liberal "any".

### Naming schemas

* Interfaces are named with capital I and have double capital. (e.g IUser)
* Independent modules and utility classes have "Module" in their name (e.g. validationModule)
* Models have "Model" in their name (e.g. userModel)
* Use descriptive method naming and opt for "action"-describing prefix when possible. 
(e.g. set&ast;, get&ast;, remove&ast;, add&ast;, update&ast;, is&ast;, has&ast;)


## React 

### Naming schemas

* If component parameter is mapped to attribute, name it after that attribute   
(name for parameter that holds value would be "value" and for parameter holding onclick it would be "onClick")
* Event handler methods should have "handler" on their name (e.g handleOnClick, handleSubmit)
* UI-Interaction methods should describe the interaction (e.g. closeModal, openModal, removeItemFromList).
* Use descriptive names for components. Name should usable as description for components purpose.
* Stateless components should have very generic names (e.g. Row, CheckBox) while stateful components 
have longer more descriptive names (e.g. UserManagementForm)
* High Order Components should have "HOC" in their name (e.g. ProductRowHOC)
* Stateful component folders are named after main component (e.g. UserManagementForm component lives in 
   UserManagementForm folder)


### Component wrapping

In React, all components are required to have a single root tag. 
Sometimes this leads to wrapping components in tags that have no real purpose other than wrapping component. 
(usually pair of div-tags)
In these cases wrapper tags should be replaced with <React.Fragment> to avoid purposeless HTML-output.

### Stateless component VS Class component

If component doesn't use lifecycle methods and does not hold state, it propably should be stateless component. 
Representational components should also generally be stateless components.
By similar logic stateful components should mostly contain stateless components instead of direct HTML-output.  
_**NOTE:** Components that use multiple methods to support Render() are easier to maintain as Class components, 
even if they have no state or lifecycles._

### About State

State should be kept as clean as possible. Anything that can be derived from other data already stored in state or 
props should be excluded from it.
For example if state has "firstName" and "lastName" fields, fullName can be derived and doesn't need to exist in state.
Depending on your choice of validation-library validations might not need to exist in state.

### Stateful Component folder Structure
Stateful components have their own folder. This folder contains all files that are directly and exclusively tied 
to component.
Some of the possible residents for stateful folder are:
* Index (the main stateful component, can also be named same as folder itself)
* Localization resources
* Validation rules file
* Tests
* Local interfaces
* Stateless (representational) components, that aren't universally usable
`;




