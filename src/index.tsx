
//***********************************************************************
// Js imports
//***********************************************************************

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from './layout/layout';

import registerServiceWorker from './registerServiceWorker';

//***********************************************************************
// Polyfills
//***********************************************************************

//***********************************************************************
//Import external style
//***********************************************************************

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.min.css';
import 'toastr/build/toastr.css';

//***********************************************************************
// Import own stylesheet
//***********************************************************************

import './styles/style.css';

//***********************************************************************
// initialize application
//***********************************************************************

ReactDOM.render(
  <Layout />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
