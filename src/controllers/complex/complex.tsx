
//libraries
import * as React from 'react';
import Product from '../../models/productModel';
import ProductTable from './productTable';
import EditProductForm from '../productForm/productForm';
import Button from '../../components/button';
import Modal from '../../components/modal';

enum userType {
   admin,
   user, 
   visitor
}

interface IState {
   userType: userType;
   productTable: Product[];
   selectedProduct: Product;
   selectedIndex: number;
   isModalOpen: boolean;
}


export default class Complex extends React.Component {

   public state:IState = {
      userType: 0,
      productTable: [],
      selectedIndex: 0,
      selectedProduct: null,
      isModalOpen: false,
   };

   public handleAddProduct = () => {
      let productTable = this.state.productTable;
      const newProduct = new Product("New product");
      productTable.push(newProduct);
      this.setState({productTable});
   }

   public updateProduct = (updatedProduct:Product) => {
      const productTable = this.state.productTable.slice();
      const selectedIndex = this.state.selectedIndex;
      productTable[selectedIndex] = updatedProduct;
      this.setState({
         productTable,
         isModalOpen:false
      });
   }

   public handleProductSelection = (selectedProduct:Product, selectedIndex:number) => {
      this.setState({
         selectedIndex,
         selectedProduct, 
         isModalOpen:true
      });
   }

   public handleProductRemove = (index:number) => {
      const productTable = this.state.productTable;
      productTable.splice(index,1);      
      this.setState({productTable});
   }

   public closeModal = () => {
      this.setState({isModalOpen: false});
   }

   public render() {
      const {productTable, isModalOpen, selectedIndex} = this.state;
      const selectedProduct = Object.assign({}, this.state.selectedProduct);
      const modalheading = (selectedProduct) ? selectedProduct.name : "no selected product";

      return(
         <div className="Complex--wrapper content-centered-lg">

            <h2 className="heading underlined">Complex form testing || null/encompass</h2>

            <div className="row-flex row-spacing">
               <Button className="themebutton wide" buttonText="Create new" onClick={this.handleAddProduct} />
            </div>

            <ProductTable 
               productTable={productTable} 
               onProductClick={this.handleProductSelection} 
               onRemoveClick={this.handleProductRemove}
            />

            <Modal onClose={this.closeModal} show={isModalOpen} heading={modalheading} >
               <EditProductForm 
                  product={selectedProduct}
                  onSave={this.updateProduct}
                  onCancel={this.closeModal}
               />
            </Modal>

         </div>
      );
   }
}
