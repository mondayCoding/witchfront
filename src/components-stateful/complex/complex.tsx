
//libraries
import * as React from 'react';
import Product from '../../models/productModel';
import ProductTable from './productTable';
import EditProductForm from '../productForm/productForm';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import res from './localization';
import {IUserContext} from '../../layout/layout';



export default class Complex extends React.Component<IProps> {

   public state: Readonly<IState> = {
      userType: 0,
      productTable: [],
      selectedIndex: 0,
      isModalOpen: false
   };

   public handleAddProduct = () => {
      const newProduct = new Product("New product");
      const productTable = [...this.state.productTable, newProduct];
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

   public handleProductSelection = (selectedIndex:number) => {
      this.setState({selectedIndex, isModalOpen:true});
   }

   public handleProductRemove = (index:number) => {
      this.removeProduct(index);
   }

   public removeProduct = (removeIndex:number) =>{    
      const newTable = this.state.productTable.filter((product, index) => !(index === removeIndex));      
      this.setState((prev:IState) => ({
         productTable: newTable})
      );
   }

   public closeModal = () => {
      this.setState({isModalOpen: false});
   }

   public isAuthorized() {
      return this.props.userContext.loggedRole === loggedRole.admin;
   }

   public render() {
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
   
                  <Modal onClose={this.closeModal} show={isModalOpen} heading={modalheading} size={"lg"} >
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

enum userType {
   admin,
   user, 
   visitor
}

enum loggedRole {
   admin = 0,
   developer = 1,
   user = 2,
   quest = 3
}

interface IUserContext {
   isLoggedIn: boolean;
   loggedRole: loggedRole;
}

interface IState {
   userType: userType;
   productTable: Product[];
   selectedIndex: number;
   isModalOpen: boolean;
}

interface IProps {
   userContext:IUserContext;
}
