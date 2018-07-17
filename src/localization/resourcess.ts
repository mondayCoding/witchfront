
import LocalizedStrings from 'react-localization';

//polyfills
require('es6-promise').polyfill();

if (typeof Object.assign != 'function') {
   Object.assign = function(target:any, varArgs:any) {
'use strict';
if (target == null) { // TypeError if undefined or null
  throw new TypeError('Cannot convert undefined or null to object');
}

var to = Object(target);

for (var index = 1; index < arguments.length; index++) {
  var nextSource = arguments[index];

  if (nextSource != null) { // Skip over if undefined or null
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

const resoursefile = new LocalizedStrings({
   en:{
      //page general
      lang:"english",
      changedLang:"Interface language switched. {0} is now system language",
      changedLangTitle:"System",
      welcome:"welcome to witchpage",
      header:"Localization test",
      thisPageIs: "test form + localization",

      //userform
      username:"username",
      email:"email",
      location:"location",
      accountNum:"bank account number",
      color:"color of your underwear",
      emailIsInvalid:"This is not valid email address",
      accNumIsInvalid:"Incorrect format for a bank account",
      usernameIsInvalid:"Invalid name length, try different lenght",
      usernameIsTaken:"That user already exists",
      submit:"submit",
      age: "age"
   },

   fi: {
      //page general
      lang:"finglish",
      changedLang:"Kieli saattoi vaihtua. {0} saattaa olla nyt käyttöjärjestelmän kieli",
      changedLangTitle:"Järjestelmä",
      welcome:"Tervetuloa",
      header:"Lokalisaatiotesti",
      thisPageIs: "testiformi ja lokalisoinnin testaus",

      //userform
      username:"käyttäjänimi",
      email:"sähköposti",
      location:"sijainti",
      accountNum:"pankkitilin numero",
      color:"alusvaatteiden väri",
      emailIsInvalid:"Epäkelpo email, kokeile uudestaan",
      accNumIsInvalid:"Huono tilinumero, kokeile parempaa",
      usernameIsInvalid:"Väärän pituinen käyttäjänimi, kokeile toista pituutta",
      usernameIsTaken:"Käyttäjä on jo olemassa",
      submit:"lähetä",
      age: "ikä"


   }
});

export default resoursefile;
