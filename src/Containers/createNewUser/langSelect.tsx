
import * as React from 'react';
import Select from 'react-select';

interface Iprops {
   lang:string;
   onChange?(param?:any):any;
}

export default class LangSelect extends React.Component<Iprops> {

   public render(){
      let lang = this.props.lang;
      let onChange = this.props.onChange;

      return (

         <div className="spacing">
            <Select
               name="lang-field-name"
               value={nom[1]}
               onChange={onChange}
               options={nom}
            />
         </div>
      );
   }
}

const nom = [
   { value: 'en', label: 'english' },
   { value: 'fi', label: 'finglish' },
];
