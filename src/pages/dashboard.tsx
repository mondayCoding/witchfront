
//libs
import * as React from 'react';
import Dashboard from '../components-stateful/dashboard/dashboard';


export default class DashboardPage extends React.Component {

   public render() {
      return (
         <div className="content--full">
            <Dashboard />                                     
         </div>
      );
   }
}
