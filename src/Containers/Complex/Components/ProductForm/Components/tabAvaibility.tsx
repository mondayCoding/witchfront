
import * as React from 'react';
import Product from 'Models/productModel';

// REMINDER: not best practice but there is no proper definition file for this as of 16.6.2018 
// tslint:disable:no-var-requires
const DayPickerInput = require("react-day-picker/DayPickerInput").default;


interface IProps {
   product: Product;
   onDayChange(e:any):void;
}

export default class TabNote extends React.Component<IProps> {

   render(){
      const {product, onDayChange} = this.props;
      const {endOfServiceDate} = product;      

      return(
         <section>
            <h4 className="themeheading underlined">Avaibility settings</h4>
            <DayPickerInput value={endOfServiceDate} onDayChange={onDayChange} />   
            <DayPickerInput value={endOfServiceDate} onDayChange={onDayChange} />   

            <h4 className="themeheading underlined">Remove from catalog</h4> 
            <DayPickerInput  value={endOfServiceDate} onDayChange={onDayChange} />               

            <h4 className="themeheading underlined">Internal dates</h4>
            <DayPickerInput value={endOfServiceDate} onDayChange={onDayChange} />   
         </section>         
      );
   }

}