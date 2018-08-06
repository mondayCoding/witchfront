
import * as React from 'react';
import Select from 'react-select';

import Input from '../../Components/Textinput_material';
import CheckBox from '../../Components/Checkbox';
import Radiobutton from '../../Components/Radiobutton';

interface IStepThreeForm {
   email: string;
   allowMarketing: boolean;
   selection:string;
   youLikeRadio:string;
   onChange(params:any):void;
}

export default class StepFour extends React.Component<IStepThreeForm> {

   render(){
      const {email, allowMarketing, onChange, selection, youLikeRadio} = this.props;

      return (
         <section className="">         
            <Input value={email} id="emailID" label="Email" name="email" onChange={onChange}/>

            <Radiobutton 
               id="radioOne" 
               value="cats"
               checked={youLikeRadio === "cats"} 
               label="like cats?" 
               name="youLikeRadio" 
               onChange={onChange} 
            />
            <Radiobutton 
               id="radioTwo" 
               value="dogs" 
               checked={youLikeRadio === "dogs"}             
               label="like dogs?" 
               name="youLikeRadio" 
               onChange={onChange}
            />
            <Radiobutton 
               id="radioThree" 
               value="gerbil"
               checked={youLikeRadio === "gerbil"}                 
               label="like gerbils?" 
               name="youLikeRadio" 
               onChange={onChange}
            />

            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>

            <CheckBox 
               checked={allowMarketing} 
               name="allowMarketing"
               id="marketingID" 
               label="Allow direct marketing (and spam)"
               onChange={onChange}
            />

            
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>

            <Select
               name="selection"
               options={[
                  { value: 'en', label: 'english' },
                  { value: 'fi', label: 'finglish' },
               ]}
            />

         </section>
      );
   }
}
