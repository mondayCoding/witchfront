
//***********************************************************************
// Js imports
//***********************************************************************

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AuthProvider } from './Layout/AppAuth';

//***********************************************************************
// Polyfills
//***********************************************************************

// tslint:disable-next-line:no-var-requires
require('Utils/Polyfills');

//***********************************************************************
//Import external style
//***********************************************************************

import 'react-day-picker/lib/style.css';
import 'toastr/build/toastr.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'prismjs/themes/prism-okaidia.css';

//***********************************************************************
// Import internal stylesheet
//***********************************************************************

import './styles/style.css';


//***********************************************************************
// initialize application
//***********************************************************************

ReactDOM.render(
  <AuthProvider />,
  document.getElementById('root') as HTMLElement
);
