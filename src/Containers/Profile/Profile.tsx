
//libs
import * as React from 'react';
import Userform from '../createNewUser/userform';
import LangSelect from '../createNewUser/langSelect';
import Timer from '../createNewUser/timer';
import ProgressBar from '../../Components/ProgressBar';
import anno from '../../utils/annoModule';
import res from './localization';


export default class Profile extends React.Component {

   state:IState = {
      lang: "en",
      progress: 0
   };
   
   timer: number;

   componentDidMount(){
      res.setLanguage(this.state.lang);
      this.timer = window.setInterval(this.incrementProgress, 500);
   }
   componentWillUnmount(){
      clearInterval(this.timer);
   }

   incrementProgress = () => {
      const progress = this.state.progress + 3;
      this.setState({progress});
   }

   onChangeHandler = (e:any) => {
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

   render() {
      return (
         <div className="content--md">
               
            <h2>{res.welcome}</h2>

            <LangSelect onChange={this.onChangeHandler} lang={this.state.lang} />
            
            <h1>{res.header}</h1>
            <p>{res.thisPageIs}</p>
      
            <div className="time-wrap">
               <Timer lang={this.state.lang} />
            </div>
            <ProgressBar percentage={this.state.progress} showStatusText={true} />
            <ProgressBar percentage={this.state.progress} showWarningWhenFull={true}/>
            <ProgressBar percentage={this.state.progress} />
         
            <Userform lang={this.state.lang} />                       
         </div>
      );
   }
}

type LangType = "fi" | "en";

interface IState {
   lang: LangType;
   progress: number;
}