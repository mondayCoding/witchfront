
import * as React from 'react';

export default class Timer extends React.Component<any, any> {

   public statetimer:any;

   constructor(props:any){
      super(props);
      this.state = {
         date : new Date()
      };
   }

   public componentDidMount() {
      this.statetimer = setInterval( () => this.tick(), 1000 );
   }

   public componentWillUnmount() {
      clearInterval(this.statetimer);
   }

   public tick() {
      this.setState({
         date : new Date()
      });
   }

   public render() {
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let lang = (this.props.lang === "fi") ? "fi-FI" : "en-EN" ;

      return (
         <div className="time-block">
            <div className="time-content">
               <h3>{ this.state.date.toLocaleDateString(lang, options)}</h3>
            </div>
         </div>
      );
   }
};
