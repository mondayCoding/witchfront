
import * as React from 'react';
import usageSample, {Sample, patterns} from './codeSamples';

//import components


export default class Gallery extends React.Component<IProps> {

   public state:any = {
      // TODO
   };


   public render(){

      return(
         <section className="component-documentation">

            <header>
               {/* component title */}
               {/* show/hide buttons */}
            </header>

            <div>
               {/* component description */}
            </div>

            <div className="demo">
               {/* demo */}
            </div>

            <Sample isShown={true}>         
               {"usage"}
            </Sample>

            <Sample isShown={true}>         
               {"params"}
            </Sample>

         </section>
      );
   }
}

interface IProps {
   name:string;
   description:string;
}

interface IState {
   showUsageSamples: boolean;
   showParameters: boolean;
   showDemo: boolean;
   isDisabled: boolean;
   isInvalid: boolean;
}


