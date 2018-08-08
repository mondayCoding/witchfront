
import * as React from 'react';
import Select, { Option } from 'react-select';
import Product, { Tag } from '../../models/productModel';
import {userType, productType} from '../../models/productModel';
import Input from '../../Components/TextinputResponsive';
import Button from '../../Components/Button';
import res from './localization';
import { LocalizedStrings } from 'react-localization';
import Tabs from '../../Components/Tabs';
import Tab from '../../Components/Tab';
import GeneralTab from './components/tabGeneral';
import NoteTab from './components/tabNote';
import AvaibilityTab from './components/tabAvaibility';
import AvatarTab from './components/tabAvatar';
import PriceTab from './components/tabPrices';
import QuantityTab from './components/tabQuantity';


export default class ProductForm extends React.Component<IProps> {

   state:IState = {
      product:this.props.product,
   };

   handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.type === "text" ? e.target.value : e.target.checked;
      const targetName = e.target.name;
      let product:any = Object.assign({}, this.state.product);
      product[targetName] = targetValue;
      this.setState({product});
   }

   handleTypeSelectOnChange = (selectionString:Option<string>) => {
      const selectionArray = selectionString.split(",") as productType[];
      let product = Object.assign({}, this.state.product);      
      product.productType = selectionArray;      
      this.setState({product});
   }

   handleTagSelectOnChange = (selectionString:Tag) => {
      let product = Object.assign({}, this.state.product);      
      product.tag = selectionString;      
      this.setState({product});
   }

   handleAvatarSelection = (selectedAvatar:IAvatar) => {
      //TODO: set avatar as product avatar
      //for now just log selected avarat's name so we can test this works
      console.log(selectedAvatar.name);
      console.log(selectedAvatar.path);      
   }
      
   handleFromChange = (from:Date) => {
      console.log(from);      
      let endOf = this.state.product.endOfServiceDate;
   }

   handleSave = () => {      
      this.props.onSave(this.state.product);    
   }

   handleCancel = () => {      
      this.props.onCancel();    
   }

   render() {

      const {hasPrice, hasQuantityRules, hasSetDateValues, hasImage} = this.state.product;
      const product = this.state.product;
      const handleOnChange = this.handleOnChange;
      const handleFromChange = this.handleFromChange;

      return(
         <div className="product--modal">

            <Tabs>

               {/* general settings tab */}
               <Tab title={res.tabGeneral}>
                  <GeneralTab 
                     onChange={handleOnChange} 
                     onTypeSelectChange={this.handleTypeSelectOnChange} 
                     onTagSelectChange={this.handleTagSelectOnChange} 
                     product={product}
                  />
               </Tab>

               {/* Note tab */}
               <Tab title={res.tabNotes}> 
                  <NoteTab product={product} onChange={handleOnChange} />
               </Tab>

               {
                  // Avatar tab
                  hasImage && 
                  <Tab title={res.tabAvatar}>
                     <AvatarTab onSelection={this.handleAvatarSelection} />
                  </Tab>
               }
               
               {
                  // Price tab
                  hasPrice && 
                  <Tab title={res.tabPrices}>
                     <PriceTab onChange={handleOnChange} product={product} />
                  </Tab>
               }

               {
                  // Avaibility tab
                  hasSetDateValues && 
                  <Tab title={res.tabAvaibility}> 
                     <AvaibilityTab onDayChange={handleFromChange} product={product} />               
                  </Tab>
               }

               {
                  // Quantity tab
                  hasQuantityRules && 
                  <Tab title={res.tabQuantity}>
                     <QuantityTab onChange={handleOnChange} product={product} />
                  </Tab>
               }
            </Tabs>

            <div className="line-thin"></div>

            <div className="row-flex spaced">
               <Button buttonText="Cancel" onClick={this.handleCancel} />
               <Button buttonText="Save" onClick={this.handleSave} />
            </div>
            
         </div>
      ); 
   }
}

interface IProps {
   product:Product;
   onSave(param:Product):void;
   onCancel():void;
}

interface IState {
   product:Product;
}

interface IAvatar {
   selected: boolean;  
   name: string;        
   path: string;          
}