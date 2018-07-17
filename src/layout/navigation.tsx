
import * as React from 'react';
import {NavLink} from 'react-router-dom';
import navicons from "./navIcons";

export default class Navigation extends React.Component {
   public render() {
      return (
        <nav className="navigation">
            <ul className="navi-list">
                <li className="navi-item">
                    <NavLink exact to="/" activeClassName="active" title="Dashboard">
                        {navicons.dashboard}
                        <span className="pagename">Dashboard</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/createchar" activeClassName="active" title="Create Character">
                        {navicons.createchar}
                        <span className="pagename">Create Character</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/soon" activeClassName="active" title="Soon™">
                        {navicons.soon}
                        <span className="pagename">Soon™</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/gallery" activeClassName="active" title="Missions">
                        {navicons.missions}
                        <span className="pagename">Gallery</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/witchchat" activeClassName="active" title="covenChat">
                        {navicons.covenchat}
                        <span className="pagename">CovenChat</span>
                        {/* <i className="far fa-comments"></i> */}
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/profile" activeClassName="active" title="Profile">
                        {navicons.profile}
                        <span className="pagename">Profile</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/settings" activeClassName="active" title="Settings">
                        {navicons.settings}
                        <span className="pagename">Settings</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/docs" activeClassName="active" title="Documentation">
                        {navicons.documentation}
                        <span className="pagename">Documentation</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/apimock" activeClassName="active" title="ApiMock">
                        {navicons.apimocking}
                        <span className="pagename">Api Mocking</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/coinflip" activeClassName="active" title="Coin Flipper">
                        {navicons.coinflipper}
                        <span className="pagename">CoinFlipper</span>
                    </NavLink>
                </li>
               <li className="navi-item">
                  <NavLink exact to="/complex" activeClassName="active" title="Complex">
                     {navicons.complex}
                     <span className="pagename">Complex</span>
                  </NavLink>
                </li>
            </ul>
        </nav>
      );
   }
}
