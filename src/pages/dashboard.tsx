
//libs
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import API from '../api/Statistics';
import navicons from '../layout/navIcons';

interface IStatisticsRespn {
    serverStartCount:string;
    serverStartLogs:{};
}


export default class Dashboard extends React.Component {

    public state = {
        startCount: "0"
    };

    public componentDidMount(){
        this.updateServerStartCount();
    }

    public async updateServerStartCount(){
        let { serverStartCount } = await API.getServerStartCount() as IStatisticsRespn;
        this.setState({startCount:serverStartCount});
    }

    public render() {
        return (
            <div className="page">
                
                <section className="server-statistics">
                    <div className="statistic">
                        <span className="phrase">
                            Server has been started <span className="counter">{this.state.startCount}</span> times
                        </span>
                    </div>
                </section> 
                
                <section className="dashboard">

                    <NavLink exact to="/" activeClassName="active" className="dash-item" >

                        <div className="pagesymbol">
                           {navicons.dashboard}
                        </div>
                        <div className="pagetitle">
                            Dashboard
                        </div>
                    </NavLink>

                    <NavLink exact to="/createchar" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.createchar}                           
                        </div>
                        <div className="pagetitle">
                            Create Character
                        </div>
                    </NavLink>

                    <NavLink exact to="/soon" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.soon}                           
                        </div>
                        <div className="pagetitle">
                            Soon™
                        </div>
                    </NavLink>

                    <NavLink exact to="/missions" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.missions}                           
                        </div>
                        <div className="pagetitle">
                            Missions
                        </div>
                    </NavLink>

                    <NavLink exact to="/witchchat" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.covenchat}                           
                        </div>
                        <div className="pagetitle">
                            covenChat
                        </div>
                    </NavLink>

                    <NavLink exact to="/profile" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.profile}                           
                        </div>
                        <div className="pagetitle">
                            Profile
                        </div>
                    </NavLink>

                    <NavLink exact to="/settings" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.settings}                           
                        </div>
                        <div className="pagetitle">
                            Settings
                        </div>
                    </NavLink>

                    <NavLink exact to="/docs" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.documentation}                           
                        </div>
                        <div className="pagetitle">
                            Documentation
                            </div>
                    </NavLink>

                     <NavLink exact to="/apimock" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.apimocking}                           
                        </div>
                        <div className="pagetitle">
                           Apimock
                        </div>
                     </NavLink>

                     <NavLink exact to="/coinflip" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.apimocking}                           
                        </div>
                        <div className="pagetitle">
                           Coinflipper
                        </div>
                     </NavLink>

                     <NavLink exact to="/complex" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                           {navicons.complex}                           
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
