
import * as React from 'react';
import Product from 'Models/productModel';
import TextArea from 'Components/TextArea';


interface IProps {
   product: Product;
   onChange(e:any):void;
}

export default class TabNote extends React.Component<IProps> {

   public render(){

      const {product, onChange} = this.props;
      const {memoNote} = product;      

      return(
         <section>
            <h4 className="themeheading underlined">Summary</h4>                
            <TextArea
               label="Product summary"
               name="memoNote"
               id="memoNote"
               value={memoNote}
               onChange={onChange}
            />     
         </section>         
      );
   }

}