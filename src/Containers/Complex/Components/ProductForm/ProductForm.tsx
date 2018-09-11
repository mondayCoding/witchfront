
import * as React from 'react';
import Select from 'react-select';
import Product, { Tag, userType, productType } from 'Models/productModel';
import {TextInputResponsive, Button, Tabs, Tab } from 'Common/Index';
import res from './localization';
import { LocalizedStrings } from 'react-localization';
import GeneralTab from './Components/tabGeneral';
import NoteTab from './Components/tabNote';
import AvaibilityTab from './Components/tabAvaibility';
import AvatarTab from './Components/tabAvatar';
import PriceTab from './Components/tabPrices';
import QuantityTab from './Components/tabQuantity';
import { WithCondition } from 'Hoc/WithCondition';

const ConditionalTab = WithCondition(Tab);


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

   handleTypeSelectOnChange = (selectionString:string) => {
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
            
               {/* Avatar tab */}
               <ConditionalTab title={res.tabAvatar} showCondition={hasImage}>
                  <AvatarTab onSelection={this.handleAvatarSelection} />
               </ConditionalTab>               
                           
               {/* // Price tab */}
               <ConditionalTab title={res.tabPrices} showCondition={hasPrice}>
                  <PriceTab onChange={handleOnChange} product={product} />
               </ConditionalTab>
                              
               {/* Avaibility tab */}
               <ConditionalTab title={res.tabAvaibility} showCondition={hasSetDateValues}> 
                  <AvaibilityTab onDayChange={handleFromChange} product={product} />               
               </ConditionalTab>               
         
               {/* Quantity tab */}
               <ConditionalTab title={res.tabQuantity} showCondition={hasQuantityRules}>
                  <QuantityTab onChange={handleOnChange} product={product} />
               </ConditionalTab>
               
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