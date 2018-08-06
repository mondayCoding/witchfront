

// polyfill library 

// tslint:disable-next-line:no-var-requires
require('es6-promise').polyfill();

// tslint:disable-next-line:triple-equals
if (typeof Object.assign != 'function') {
   // tslint:disable-next-line:only-arrow-functions
   Object.assign = function(target:any, varArgs:any) {
'use strict';
if (target == null) { // TypeError if undefined or null
  throw new TypeError('Cannot convert undefined or null to object');
}

// tslint:disable-next-line:no-var-keyword
var to = Object(target);

// tslint:disable-next-line:no-var-keyword
for (var index = 1; index < arguments.length; index++) {
  // tslint:disable-next-line:no-var-keyword
  var nextSource = arguments[index];

  if (nextSource != null) { // Skip over if undefined or null
    // tslint:disable-next-line:no-var-keyword
    for (var nextKey in nextSource) {
      // Avoid bugs when hasOwnProperty is shadowed
      if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
        to[nextKey] = nextSource[nextKey];
        }
       }
     }
   }
return to;
  };
 }
