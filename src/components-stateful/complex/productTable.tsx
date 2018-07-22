
//libraries
import * as React from 'react';
import Product, { productType } from '../../models/productModel';

interface IProps {
   productTable:Product[];
   onProductClick(params:Product, index:number):void;
   onRemoveClick(index:number):void;
}

export default class ProductTable extends React.Component<IProps> {

   public getPlaceholder() {
      return(
         <div className="product-placeholder">
            No products have been created yet. Please press "Add-button" to begin creating products
         </div>
      );
   }

   public getMappedTypes(types:Product["productType"]){            
      return types.map((typename, index) => {         
         return(
            <span key={index} className="type-label shift-background">{typename}</span>
         );
      });
   }

   public render() {
      const productTable = this.props.productTable || [];
      const hasProducts = productTable.length > 0;     

      return(
         <div className="flex-table">
            {
               (hasProducts) ?
               productTable.map((product, index)=> {
                  const {name, id, description, hasPrice, price} = product;
                  const handleProductClick = () => this.props.onProductClick(product, index);
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
                        <div className="cell-60px"><b>{hasPrice && price}</b></div>
                        <div className="cell-60px flex-center">
                           <button onClick={handleRemove} className="close-button"></button>
                        </div>
                     </div>
                  );
               })
               : this.getPlaceholder()
            }
         </div>
      ); 
   }
}


// const Row:React.StatelessComponent<Product> = (props) => {
//    const {name, description, hasPrice, price} = props;
//    console.log(props);
   
//    return(
//       <div className="table-row">
//          <div className="cell-auto">{name}</div>
//          <div className="cell-auto">{description}</div>
//          <div className="cell-auto">{hasPrice && price}</div>
//       </div>
//    );
// };


// export default class ProductTable extends React.Component<IProps> {

//    public render() {
//       const productTable = this.props.productTable || [];   

//       return(
//          <div className="flex-table">
//             {
//                productTable.map((product, index)=> {
//                   return(
//                      <Row 
//                         key={product.name + product.id}
//                         id={product.id}
//                         name={product.name} 
//                         description={product.description} 
//                         hasPrice={product.hasPrice} 
//                         price={product.price} 
//                      />
//                   );
//                })
//             }
//          </div>
//       ); 
//    }
// }
