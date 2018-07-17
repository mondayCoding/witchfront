
//libs
import * as React from 'react';




export default class Main extends React.Component {

   public theme = true;

   public setTheme() {
 
      let link = document.getElementById("stylelink") as HTMLLinkElement;

      if (this.theme) {
         
         link.href="/stylesheets/style_light.min.css";
         this.theme = !this.theme;                  
      } 
      else {
         link.href="/stylesheets/style.min.css"; 
         this.theme = !this.theme;
      }
   }

   public render() {
      return (
      <footer className="footer">
         <a href="https://github.com/mondayCoding/witchnode">
            <span>code lives </span>
            <i className="fas fa-heart"></i>
            <span> and dies with </span>            
         </a>
         <i onClick={() => this.setTheme()} className="fas fa-coffee"></i>
      </footer>
      );
   }
}