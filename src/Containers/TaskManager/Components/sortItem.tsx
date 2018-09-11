
import * as React from 'react';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';
import Icons from 'Common/Icons';

interface Iprops {
   mission : {
      objective:string,
      complete:boolean,
      createDate:string,
      completeDate:string,
   };
   toggle():any;
   onRemove():void;
   onActivation():void;
}

const SortHandle = SortableHandle(() => Icons.bars);

const Row:React.StatelessComponent<Iprops> = ({mission, toggle, onActivation, onRemove}) => {
   let createDate = new Date(mission.createDate).toDateString();
   let iconClass = (mission.complete) ? "fas fa-calendar" : "fas fa-calendar";
   let rowClass = (mission.complete) ? "complete table-row" : "table-row";
   return (
        <div className={rowClass}>
           <div className="cell-status">   
              <SortHandle />
           </div>

           <div className="cell-status" onClick={toggle}>
              <i className={iconClass}></i>
           </div>

           <div className="cell-auto">
              <a className="item-link" onClick={onActivation}>{mission.objective}</a>
           </div>

           <div className="cell-auto">
              {createDate}
           </div>

           <div className="cell-60px" onClick={onRemove} >
              <div className="close-button"></div>
           </div>
        </div>
     );
};

//wrap row class in sortable element
const SortItem = SortableElement(Row);


//export resulting sortable row element
export default SortItem;

