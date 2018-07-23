
//libs
import * as React from 'react';

//components
import Userform from '../createNewUser/userform';
import LangSelect from '../createNewUser/langSelect';
import Timer from '../createNewUser/timer';
import anno from '../../utils/annoModule';
import res from './localization';


export default class Profile extends React.Component<any, Istates> {

   public state:Istates = {
      lang: "en"
   };

   public componentDidMount(){
      res.setLanguage(this.state.lang);
   }

   public onChangeHandler = (e:any) => {
      console.log("changed lang");
      this.setState({
         lang: e.value
      });

      res.setLanguage(e.value);
      
      anno.announce(
         res.formatString(res.changedLang, res.lang) as string, 
         res.changedLangTitle, 
         "info"
      );
   }

   public render() {
      return (
         <div className="content--md">
               
            <h2>{res.welcome}</h2>

            <LangSelect onChange={this.onChangeHandler} lang={this.state.lang} />
            
            <h1>{res.header}</h1>
            <p>{res.thisPageIs}</p>
      
            <div className="time-wrap">
               <Timer lang={this.state.lang} />
            </div>
         
            <Userform lang={this.state.lang} />                       
         </div>
      );
   }
}

type LangType = "fi" | "en";

interface Istates {
   lang: LangType;
}