
//libs
import * as React from 'react';

//components
import Userform from '../components-stateful/createNewUser/userform';
import LangSelect from '../components-stateful/createNewUser/langSelect';
import Timer from '../components-stateful/createNewUser/timer';
import anno from '../utils/annoModule';
import res from '../localization/resourcess';


export default class WitchPage extends React.Component<any, Istates> {
    constructor(props:any){
        super(props);
        this.state = {
            lang:"en"
        };
    }

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
            
               <Userform lang={this.state.lang} res={res} />                       
            </div>
        );
    }
}

type LangType = "fi" | "en";

interface Istates {
   lang: LangType;
}