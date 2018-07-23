# Good patterns in React

Samples of good developments patterns (not best practices) for React and Typescript.


## Typecript

### Variable declarations

Start with most restrictive declaration and loosen it up when necessary.  
const > let > var 

### Typing

By default provide typing for everything and only use "any" if there is no other way.
Many external modules have no typings and might require use of liberal "any".

### Naming schemas

* Interfaces are named with capital I and have double capital. (e.g IUser)
* Independent modules and utility classes have "Module" in their name (e.g. validationModule)
* Models have "Model" in their name (e.g. userModel)
* Use descriptive method naming and opt for "action"-describing prefix when possible. (e.g. set*, get*, remove*, add*, update*, is*, has*)


## React 

### Naming schemas

* If component parameter is mapped to attribute, name it after that attribute  
(name for parameter that holds value would be "value" and for parameter holding onclick it would be "onClick")
* Event handler methods should have "handle" on their name (e.g handleOnClick, handleSubmit)
* Application methods should describe the interaction (e.g. closeModal, openModal, removeItemFromList).
* Use descriptive names for components. Name should usable as description for components purpose.
* Stateless components should have very generic names (e.g. Row, CheckBox) while stateful components have longer more descriptive names (e.g. UserManagementForm)
* High Order Components should have "HOC" in their name (e.g. ProductRowHOC)
* Stateful component folders are named after main component (e.g. UserManagementForm component lives in UserManagementForm folder)


### Component wrapping

In React, all components are required to have a single root tag. 
Sometimes this leads to wrapping components in tags that have no real purpose other than wrapping component. (usually pair of div-tags)
In these cases wrapper tags should be replaced with <React.Fragment> to avoid purposeless HTML-output.

### Stateless component VS Class component

If component doesn't use lifecycle methods and does not hold state, it  propably should be stateless component. 
Representational components should also generally be stateless components.
By similar logic stateful components should mostly contain stateless components instead of direct HTML-output.  
_**NOTE:** Components that use multiple methods to support Render() are easier to maintain as Class components even if they have no state or lifecycles._

### About State

State should be kept as clean as possible. Anything that can be derived from other data already stored in state or props should be excluded from it.
For example if state has "firstName" and "lastName" fields, fullName can be derived and doesn't need to exist in state.
Depending on your choice of validation-library validations might not need to exist in state.  
While state is not inherently immutable it should be treated as such to avoid side-effects and hard to find bugs.

### Stateful Component folder Structure
Stateful components should have their own folder as they can be considered minified applications. This folder should contain all files that are directly and exclusively tied to them.
Some of the possible residents for stateful folder:
* Index (the main stateful component, can also be named same as folder itself)
* Localization resources
* Validation objects
* Tests
* Local interfaces
* Stateless (representational) components, that cannot be used as universal components










