
//***********************************************************************
// Js imports
//***********************************************************************

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Layout/AppAuth';

import registerServiceWorker from './registerServiceWorker';

//***********************************************************************
// Polyfills
//***********************************************************************

//***********************************************************************
//Import external style
//***********************************************************************

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-day-picker/lib/style.css';
// import 'react-select/dist/react-select.min.css';
// import 'toastr/build/toastr.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import 'prismjs/themes/prism-okaidia.css';

//***********************************************************************
// Import own stylesheet
//***********************************************************************

import './styles/style.css';

//***********************************************************************
// initialize application
//***********************************************************************

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
