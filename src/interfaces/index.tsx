
 //******************SHARED COMPONENT PROPERTIES*********************************************/

//generic input field
export interface IInputFieldProperties {
   id?:string;
   name?:string;
   label?:string;
   value?:string;
   placeholder?:string;
   readonly?:boolean;
   required?:boolean;
   disabled?:boolean;
   isSmall?:boolean;
   type?:string;
   tooltip?:string;
   error?:string;
   onChange?(params?:any):any;
   onBlur?(params?:any):any;
   onKeyUp?(params?:any):any;
} 

export interface ISelectProperties {
   id?:string;
   name?:string;
   label?:string;
   value?:string;
   placeholder?:string;
   readonly?:boolean;
   required?:boolean;
   disabled?:boolean;
   isSmall?:boolean;
   validation?:string;
   onChange?(params?:any):any;
   onKeyUp?(params?:any):any;
}

//generic button properties
export interface IButtonProperties {
    className?: string;
    id?: string;
    disabled?:boolean;
    buttonText?: string;
    type?: string;
    onClick?(params:any):any;
}

 //generic Checkbox input properties
export interface IInputCheckboxProperties {
    name?:string;
    id:string;
    label:string;
    disabled?:boolean;
    defaultChecked?:boolean;
    checked?:boolean;
    value?:string;
    onChange?(params?:any):any;
}


 //******************CUSTOM OBJECT MODELS*************************************************/

//chat window component message (socket message)
export interface IMessageLine {
    user:string;
    content:string;
    timestamp:string;
    userType:number;
}

//TODO LIST - Mission item
export interface IMission {
    mission : IMissionItem;
    toggle:any;
    onClick:any;
}

export interface IMissionItem {
   objective:string;
   longObjective?: string;
   complete:boolean;
   createDate:string;
   completeDate:string;
   order: number;
}



