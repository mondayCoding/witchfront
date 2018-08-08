import * as React from 'react';
import Product from '../../models/productModel';
import ProductTable from './productTable';
import EditProductForm from '../productForm/productForm';
import {Button, Modal} from '../../Components';
import res from './localization';
import appSettings from '../../utils/appSettings';
import {IUserContext, userLevel} from '../../layout/App';

export default class Complex extends React.Component<IProps> {

   state: Readonly<IState> = {
      productTable: [],
      selectedIndex: 0,
      isModalOpen: false
   };

   componentDidMount(){
      console.log(this.props.userContext);
   }

   handleAddProduct = () => {
      const newProduct = new Product("New product");
      const productTable = [...this.state.productTable, newProduct];
      this.setState({productTable});
   }

   updateProduct = (updatedProduct:Product) => {
      const productTable = this.state.productTable.slice();
      const selectedIndex = this.state.selectedIndex;
      productTable[selectedIndex] = updatedProduct;
      this.setState({
         productTable,
         isModalOpen:false
      });
   }

   handleProductSelection = (selectedIndex:number) => {
      this.setState({selectedIndex, isModalOpen:true});
   }

   handleProductRemove = (index:number) => {
      this.removeProduct(index);
   }

   removeProduct = (removeIndex:number) =>{    
      const newTable = this.state.productTable.filter((product, index) => !(index === removeIndex));      
      this.setState((prev:IState) => ({
         productTable: newTable})
      );
   }

   closeModal = () => {
      this.setState({isModalOpen: false});
   }

   isAuthorized() {
      return this.props.userContext.level === userLevel.admin;
   }

   render() {
      const {productTable, isModalOpen, selectedIndex} = this.state;
      const selectedProduct = Object.assign({}, this.state.productTable[selectedIndex]);
      const modalheading = (selectedProduct) ? selectedProduct.name : "no selected product";

      return(
         <div className="Complex--wrapper content-centered-lg">
            
            {
               this.isAuthorized() ?
               <React.Fragment>
                  <h2 className="heading underlined">{res.header}</h2>
   
                  <div className="row-flex row-spacing">
                     <Button className="themebutton wide" buttonText="Create new" onClick={this.handleAddProduct} />
                  </div>
   
                  <ProductTable 
                     productTable={productTable} 
                     onProductClick={this.handleProductSelection} 
                     onRemoveClick={this.handleProductRemove}
                  />
   
                  <Modal onClose={this.closeModal} show={isModalOpen} heading={modalheading} size={"lg"}>
                     <EditProductForm
                        product={selectedProduct}
                        onSave={this.updateProduct}
                        onCancel={this.closeModal}
                     />
                  </Modal>
               </React.Fragment>
               : 
               <React.Fragment>
                  <h2 className="heading underlined">{res.insufficientTitle}</h2>
                  <p>{res.requireAdminRights}</p>
               </React.Fragment>
            }

         </div>
      );
   }
}

interface IState {
   productTable: Product[];
   selectedIndex: number;
   isModalOpen: boolean;
}

interface IProps {
   userContext:IUserContext;
}
