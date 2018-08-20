
import * as React from 'react';

export default class Modal extends React.Component<Iprops> {

   listenKeyboard = (e:KeyboardEvent) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
         this.props.onClose();
      }
      // if (e.ctrlKey && e.keyCode === 83){
      //    e.preventDefault();
      //    this.props.onSave();        
      // } 
   }

   addListeners = () => {
      window.addEventListener('keydown', this.listenKeyboard, true);
      document.body.classList.add("modalIsOpen");
   }
   
   removeListeners = () => {
      if (document.body.classList.contains("modalIsOpen")){
         window.removeEventListener('keydown', this.listenKeyboard, true);
         document.body.classList.remove("modalIsOpen");
      }      
   }

	onOverlayClick() {
		this.props.onClose();
	}
 
	onDialogClick = (event:any) => {
		event.stopPropagation();
	}

	render() {
      const onClose = this.props.onClose;
      const onDialogClick = this.onDialogClick;
      const size = this.props.size || "md";

      if (this.props.show) {
         this.addListeners();
      } else {
         this.removeListeners();
         return null;
      }

      return (
         <div className="modal-fade" onClick={onClose}>
            <div className={`modal-box animated--scaleIn ${size}`} onClick={onDialogClick}>
               <div className="modal-heading">
                  <h3 className="themeheading">{this.props.heading}</h3>
                  <button onClick={onClose} type="button" className="close-button noborder"></button>
               </div>
               <div className="modal-content-wrap">
                  {this.props.children}
               </div>
            </div>
            
         </div>
      );
	}
}

interface Iprops {
	show: boolean;
   heading: string | React.ReactNode;
   size?: "xl" | "lg" | "md" | "sm" ;
	onClose(): void;
}
