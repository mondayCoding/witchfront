
//libs
import * as React from "react";

//components

import Listing from './todo-soon';
import ToDoSimple from './todo-simple';


export default class SoonPage extends React.Component {
   public render() {
      return (
      <div className="content--xl">

         <h3 className="heading underlined">
            Soon™ | Sortable taskmanager
         </h3>

         <Listing />

         <div className="spacing xl"></div>

         <h3 className="heading underlined">
            Board | Simple unsortable tasklist
         </h3>

         <ToDoSimple />
         
      </div>
      );
   }
}
