
import Layout from './Layout';
import * as React from 'react';
import {AuthorizationContainer} from './AuthorizationContainer';
import WithAuthorization from '../HOC/WithAuthorization';

const LayoutWithAuth = WithAuthorization(Layout);

// TODO => BREAK APART
// Separate login container with context provider (login state and state change) [ STATE AND CONTEXT BASED ]
// remove settings, these use utility class for get-set     [ LOCALSTORAGE BASED ]
// separate "Layout" with (site wrapped in login context) or (login screen)
export default class App extends React.Component {

   render() {
      return(
         <AuthorizationContainer>
            <LayoutWithAuth />
         </AuthorizationContainer>
      );
   }
}