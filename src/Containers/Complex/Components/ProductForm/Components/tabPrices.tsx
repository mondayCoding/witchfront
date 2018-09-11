
import * as React from 'react';
import Product from 'Models/productModel';
import {TextInputResponsive, CheckboxSlider} from 'Common/Index';
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
            <TextInputResponsive
               isSmall={true}
               label="Base cost"
               name="price"
               value={price.toString()}
               onChange={onChange}
            />
            <TextInputResponsive
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
