
import * as React from 'react';

import Input from '../../components/textinput_material';
import CheckBox from '../../components/checkbox';

interface IStepThreeForm {
   opinionCats: string;
   opinionDogs: string;
   opinionHouses: string;
   opinionLangues: string;
   onChange(params:any):void;
}

export default class StepThree extends React.Component<IStepThreeForm> {


   public render(){
      const {opinionCats, opinionDogs, opinionHouses, opinionLangues, onChange} = this.props;

      return (
         <section>

            <Input 
               value={opinionCats} 
               id="opinionCatsID" 
               label="Your opinion on cats?" 
               name="opinionCats" 
               onChange={onChange}
               validation={(opinionCats === "love") ? null : "wrong answer"}
            />
            <Input 
               value={opinionDogs} 
               id="opinionDogsID" 
               label="What about dogs?" 
               name="opinionDogs" 
               onChange={onChange}
            />
            <Input 
               value={opinionHouses} 
               id="opinionHousesID" 
               label="What dod you think about houses?" 
               name="opinionHouses" 
               onChange={onChange}
            />
            <Input 
               value={opinionLangues} 
               id="opinionLanguesID" 
               label="Best programming language?" 
               name="opinionLangues" 
               onChange={onChange}
            />


         </section>
      );
   }
}
