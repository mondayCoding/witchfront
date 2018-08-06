
import * as React from 'react';
import usageSample, {Sample, patterns} from './codeSamples';

export default class Gallery extends React.Component<IProps> {

   state:any = {
      // TODO use these components instead of static code samples
   };

   render(){

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


