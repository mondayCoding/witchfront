
import * as React from 'react';
import {IMission} from '../../../interfaces';

export default class Row extends React.Component<IMission> {
   render(){
      let mission = this.props.mission;
      let toggle = this.props.toggle;
      let createDate = new Date(mission.createDate).toDateString();
      let iconClass = (mission.complete) ? "fa fa-calendar-check-o" : "fa fa-calendar-o";
      let rowClass = (mission.complete) ? "complete table-row" : "table-row";
      return (
         <div className={rowClass}>
            <div className="cell-status" onClick={toggle}><i className={iconClass}></i></div>
            <div className="cell-auto">{mission.objective}</div>
            <div className="cell-auto">{createDate}</div>
            <div className="cell-60px" onClick={this.props.onClick} >
               <div className="close-button"></div>
            </div>
         </div>
      );
   }

}
