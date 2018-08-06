
import * as React from 'react';
import Product from '../../../models/productModel';
import Input from '../../../Components/Textinput_responsive';


export default class TabNote extends React.Component<IProps> {
   
   render(){
      const {product, onChange} = this.props;
      const {minAmount, maxAmount} = product;      
      
      return(
         <section>
            <h4 className="themeheading underlined">Quantity rules</h4>

            <Input
               label="Minimum required amount"
               name="minAmount"
               value={minAmount.toString()}
               onChange={onChange}
            />
            <Input
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