
import * as React from 'react';
import Product from '../../models/productModel';
import Input from '../../components/Textinput_responsive';


interface IProps {
   product: Product;
   onChange(e:any):void;
}

export default class TabNote extends React.Component<IProps> {

   public render(){

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