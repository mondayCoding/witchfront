
import * as React from 'react';
import Product from '../../models/productModel';
import Input from '../../components/Textinput_responsive';
import SliderCheckbox from '../../components/checkbox_slider';
import Select from 'react-select';

interface IProps {
   product: Product;
   onChange(e:any):void;
}

export default class TabGeneral extends React.Component<IProps> {

   public render(){

      const {product, onChange} = this.props;
      const { priceWithVat, price } = product;      

      return(
         <section>
            <h4 className="themeheading underlined">Product associated price</h4>  
            <Input
               isSmall={true}
               label="Base cost"
               name="price"
               value={price.toString()}
               onChange={onChange}
            />
            <Input
               isSmall={true}
               label="Taxless cost"
               name="priceWithVat"
               value={priceWithVat.toString()}
               onChange={onChange}
            />
         </section>         
      );
   }

}