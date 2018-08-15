
//libs
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import API from '../../services/Statistics';
import Icons from '../../Components/Icons';
import settings from 'Utils/Settings';

interface IStatisticsRespn {
   serverStartCount:string;
   serverStartLogs:{};
}

export default class Dashboard extends React.Component {

   state = {
      startCount: "0"
   };

   componentDidMount(){
      this.updateServerStartCount();     
   }

   async updateServerStartCount(){
      let { serverStartCount } = await API.getServerStartCount() as IStatisticsRespn;
      this.setState({startCount:serverStartCount});
   }

   render() {
      return (
         <div className="content--full">
               
               <section className="server-statistics">
                  <div className="statistic">
                     <span className="phrase">
                           Server has been started <span className="counter">{this.state.startCount}</span> times
                     </span>
                  </div>
               </section> 
               
               <section className="dashboard">

                  <NavLink exact={true} to="/" activeClassName="active" className="dash-item" >

                     <div className="pagesymbol">
                        {Icons.dashboard}
                     </div>
                     <div className="pagetitle">
                           Dashboard
                     </div>
                  </NavLink>

                  <NavLink exact={true} to="/createchar" activeClassName="active" className="dash-item" >
                     <div className="pagesymbol">
                        {Icons.createchar}                           
                     </div>
                     <div className="pagetitle">
                           Create Character
                     </div>
                  </NavLink>

                  <NavLink exact={true} to="/soon" activeClassName="active" className="dash-item" >
                     <div className="pagesymbol">
                        {Icons.soon}                           
                     </div>
                     <div className="pagetitle">
                           Soon™
                     </div>
                  </NavLink>

                  <NavLink exact={true} to="/witchchat" activeClassName="active" className="dash-item" >
                     <div className="pagesymbol">
                        {Icons.covenchat}                           
                     </div>
                     <div className="pagetitle">
                           covenChat
                     </div>
                  </NavLink>

                  <NavLink exact={true} to="/profile" activeClassName="active" className="dash-item" >
                     <div className="pagesymbol">
                        {Icons.profile}                           
                     </div>
                     <div className="pagetitle">
                           Profile
                     </div>
                  </NavLink>

                  <NavLink exact={true} to="/settings" activeClassName="active" className="dash-item" >
                     <div className="pagesymbol">
                        {Icons.settings}                           
                     </div>
                     <div className="pagetitle">
                           Settings
                     </div>
                  </NavLink>

                  <NavLink exact={true} to="/coinflip" activeClassName="active" className="dash-item" >
                     <div className="pagesymbol">
                        {Icons.apimocking}                           
                     </div>
                     <div className="pagetitle">
                        Coinflipper
                     </div>
                  </NavLink>

                  <NavLink exact={true} to="/complex" activeClassName="active" className="dash-item" >
                     <div className="pagesymbol">
                        {Icons.complex}                           
                     </div>
                     <div className="pagetitle">
                        Complex
                     </div>
                  </NavLink>
               </section>
         </div>
      );
   }
}
