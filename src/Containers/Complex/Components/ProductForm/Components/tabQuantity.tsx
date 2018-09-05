
import * as React from 'react';
import Product from 'Models/productModel';
import {TextinputResponsive} from 'Components/Index';


export default class TabNote extends React.Component<IProps> {
   
   render(){
      const {product, onChange} = this.props;
      const {minAmount, maxAmount} = product;      
      
      return(
         <section>
            <h4 className="themeheading underlined">Quantity rules</h4>

            <TextinputResponsive
               label="Minimum required amount"
               name="minAmount"
               value={minAmount.toString()}
               onChange={onChange}
            />
            <TextinputResponsive
               label="Maximum allowed amount"
               name="maxAmount"
               value={maxAmount.toString()}
               onChange={onChange}
            /> 
         </section>         
      );
   }
}

interface IProps {
   product: Product;
   onChange(e:any):void;
}