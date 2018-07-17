
//libraries
import * as React from 'react';

//components
import Select, { Option } from 'react-select';
import Product from '../../models/productModel';
import {userType, productType} from '../../models/productModel';
import Input from '../../components/textinput_responsive';
import Button from '../../components/button';

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

   public handleSelectOnChange = (selectionString:Option<string>) => {
      const selectionArray = selectionString.split(",") as productType[];
      let product = Object.assign({}, this.state.product);      
      product.productType = selectionArray;      
      this.setState({product});
   }

   public handleAvatarSelection = (selectedAvatar:Avatar) => {
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

      const {hasPrice, hasQuantityRules, minAmount, maxAmount, hasSetDateValues, hasImage} = this.state.product;
      const product = this.state.product;
      const handleOnChange = this.handleOnChange;
      const handleSelectOnChange = this.handleSelectOnChange;
      const handleFromChange = this.handleFromChange;

      return(
         <div className="product--modal">

            <Tabs>

               {/* general settings tab */}
               <Tab title="General">
                  <GeneralTab onChange={handleOnChange} onSelectChange={handleSelectOnChange} product={product} />
               </Tab>

               {/* Note tab */}
               <Tab title="Notes"> 
                  <NoteTab product={product} onChange={handleOnChange} />
               </Tab>

               {
                  // Avatar tab
                  hasImage && 
                  <Tab title="Avatar">
                     <AvatarTab onSelection={this.handleAvatarSelection} />
                  </Tab>
               }
               
               {
                  // Price tab
                  hasPrice && 
                  <Tab title="Price">
                     <PriceTab onChange={handleOnChange} product={product} />
                  </Tab>
               }

               {
                  // Avaibility tab
                  hasSetDateValues && 
                  <Tab title="Avaibility"> 
                     <AvaibilityTab onDayChange={handleFromChange} product={product} />               
                  </Tab>
               }

               {
                  // Quantity tab
                  hasQuantityRules && 
                  <Tab title="Quantity">
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

interface Avatar {
   selected: boolean;  
   name: string;        
   path: string;          
}