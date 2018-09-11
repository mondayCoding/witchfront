
import * as React from 'react';
import {TextInputMaterial} from 'Common/Index';

export default class StepThree extends React.Component<IStepThreeForm> {

   render(){
      const {opinionCats, opinionDogs, opinionHouses, opinionLangues, onChange} = this.props;

      return (
         <section>

            <TextInputMaterial 
               value={opinionCats} 
               id="opinionCatsID" 
               label="Your opinion on cats?" 
               name="opinionCats" 
               onChange={onChange}
               error={(opinionCats === "love") ? null : "wrong answer"}
            />
            <TextInputMaterial 
               value={opinionDogs} 
               id="opinionDogsID" 
               label="What about dogs?" 
               name="opinionDogs" 
               onChange={onChange}
            />
            <TextInputMaterial 
               value={opinionHouses} 
               id="opinionHousesID" 
               label="What dod you think about houses?" 
               name="opinionHouses" 
               onChange={onChange}
            />
            <TextInputMaterial 
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

interface IStepThreeForm {
   opinionCats: string;
   opinionDogs: string;
   opinionHouses: string;
   opinionLangues: string;
   onChange(params:any):void;
}
