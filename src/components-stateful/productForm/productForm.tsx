
//libraries
import * as React from 'react';

//components
import Select, { Option } from 'react-select';
import Product, { Tag } from '../../models/productModel';
import {userType, productType} from '../../models/productModel';
import Input from '../../components/textinput_responsive';
import Button from '../../components/button';
import res from './localization';
import { LocalizedStrings } from 'react-localization';

//tabs
import Tabs from '../../components/tabs';
import Tab from '../../components/tab';
import GeneralTab from './tabGeneral';
import NoteTab from './tabNote';
import AvaibilityTab from './tabAvaibility';
import AvatarTab from './tabAvatar';
import PriceTab from './tabPrices';
import QuantityTab from './tabQuantity';


export default class ProductForm extends React.Component<IProps> {

   public state:IState = {
      product:this.props.product,
   };

   public handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.type === "text" ? e.target.value : e.target.checked;
      const targetName = e.target.name;
      let product:any = Object.assign({}, this.state.product);
      product[targetName] = targetValue;
      this.setState({product});
   }

   public handleTypeSelectOnChange = (selectionString:Option<string>) => {
      const selectionArray = selectionString.split(",") as productType[];
      let product = Object.assign({}, this.state.product);      
      product.productType = selectionArray;      
      this.setState({product});
   }

   public handleTagSelectOnChange = (selectionString:Tag) => {
      let product = Object.assign({}, this.state.product);      
      product.tag = selectionString;      
      this.setState({product});
   }

   public handleAvatarSelection = (selectedAvatar:IAvatar) => {
      //TODO: set avatar as product avatar
      //for now just log selected avarat's name so we can test this works
      console.log(selectedAvatar.name);
      console.log(selectedAvatar.path);      
   }
      
   public handleFromChange = (from:Date) => {
      console.log(from);      
      let endOf = this.state.product.endOfServiceDate;
   }

   public handleSave = () => {      
      this.props.onSave(this.state.product);    
   }

   public handleCancel = () => {      
      this.props.onCancel();    
   }

   public render() {

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
   resourceFile: LocalizedStrings<any>;
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