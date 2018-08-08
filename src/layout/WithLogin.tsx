
import Site from './site';
import Login from './login';
import * as React from 'react';
import settings from '../Utils/appSettings';
import wrapInContext from '../HOC/contextProviderHOC';

//
const withLogin = (WrappedComponent:any) => {

   return class extends React.Component {

      render(){
         return <WrappedComponent {...this.props} />;
      }
   };
};

