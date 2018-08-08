
//libraries
import * as React from 'react';
import Product, { productType } from '../../models/productModel';
import Icons from '../../Components/Icons';

export default class ProductTable extends React.Component<IProps> {

   renderPlaceholder() {
      return(
         <div className="product-placeholder">
            No products have been created yet. Please press "Add-button" to begin creating products
         </div>
      );
   }

   getMappedTypes(types:Product["productType"]){            
      return types.map((typename, index) => {         
         return(<span key={index} className="type-label shift-background">{typename}</span>);
      });
   }

   render() {
      const productTable = this.props.productTable || [];
      const hasProducts = productTable.length > 0;     

      return(
         <div className="flex-table">
            {
               (hasProducts) ?
               productTable.map((product, index)=> {
                  const {name, id, description, hasPrice, price} = product;
                  const handleProductClick = () => this.props.onProductClick(index);
                  const handleRemove = () => this.props.onRemoveClick(index);                  

                  return(
                     <div className="table-row" key={name + index}>
                        <div className="cell-auto" title={description}>
                           <span className="interactable" onClick={handleProductClick}>
                              {name}
                           </span>
                           <span>
                              {this.getMappedTypes(product.productType)}
                           </span>
                        </div>
                        <div className="cell-30px"><b>{hasPrice && price}</b></div>
                        <div className="cell-30px">{Icons.missions}</div>
                        <div className="cell-30px">{Icons.missions}</div>
                        <div className="cell-30px">{Icons.missions}</div>
                        <div className="cell-30px flex-center">
                           <button onClick={handleRemove} className="close-button"></button>
                        </div>
                     </div>
                  );
               })
               : this.renderPlaceholder()
            }
         </div>
      ); 
   }
}

interface IProps {
   productTable:Product[];
   onProductClick(index:number):void;
   onRemoveClick(index:number):void;
}
