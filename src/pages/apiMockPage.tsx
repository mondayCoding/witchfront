
//libs
import * as React from 'react';
import ApiMock from '../components-stateful/apiResponseMock/apiResponseMock';


export default class ApiMockPage extends React.Component<any, any> {

   public render() {
      return (
         <div className="api-mock content--lg">
            <ApiMock />       
         </div>
      );
   }
}
