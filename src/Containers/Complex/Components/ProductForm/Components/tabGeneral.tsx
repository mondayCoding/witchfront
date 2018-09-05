
import * as React from 'react';
import {TextinputResponsive, CheckboxSlider} from 'Components/Index';
import Product from 'Models/productModel';
import Select from 'react-select';


export default class TabGeneral extends React.Component<IProps> {

   render(){

      const {product, onChange, onTagSelectChange, onTypeSelectChange} = this.props;
      const { name, id, description, productType, hasImage, 
            hasPrice, hasQuantityRules, hasSetDateValues, tag} = product;      

      return(
         <section>
            <h4 className="themeheading underlined">Base Properties</h4>

            <TextinputResponsive
               label="Name"
               name="name"
               id="name"
               value={name}
               onChange={onChange}
            />
            <TextinputResponsive
               label="Item ID"
               name="id"
               id="id"
               value={id}
               onChange={onChange}
            />
            <TextinputResponsive
               label="Product summary"
               name="description"
               id="description"
               value={description}
               onChange={onChange}
            />

            <div className="themeinput-responsive">
               <label htmlFor="selectID">Tag</label>
               <Select 
                  id="tagSelectID" 
                  simpleValue={true}
                  name="tag"
                  value={tag}
                  onChange={onTagSelectChange}
                  options={tagOptions}
               />
            </div>

            <div className="themeinput-responsive">
               <label htmlFor="selectID">Types</label>
               <Select 
                  id="selectID" 
                  multi={true}
                  simpleValue={true}
                  name="productType"
                  value={productType}
                  onChange={onTypeSelectChange}
                  options={productTypeOptions}
               />
            </div>

            <h4 className="themeheading underlined">Addidional properties</h4>
            <CheckboxSlider 
               label="Has Product images" 
               id="imagePropertiesInUse"
               name="hasImage" 
               checked={hasImage} 
               onChange={onChange}
            />
            <CheckboxSlider 
               label="Has price table" 
               id="priceSettingsInUse"
               name="hasPrice" 
               checked={hasPrice} 
               onChange={onChange} 
            />
            <CheckboxSlider 
               label="Has avaibility settings" 
               id="hasSetDateValues"
               name="hasSetDateValues" 
               checked={hasSetDateValues} 
               onChange={onChange} 
            />
            <CheckboxSlider 
               label="Has limited supply" 
               id="quantitySettingsInUse"
               name="hasQuantityRules" 
               checked={hasQuantityRules} 
               onChange={onChange} 
            />
         </section>         
      );
   }
}


interface IProps {
   product: Product;
   onChange(e:any):void;
   onTypeSelectChange(e:any):void;
   onTagSelectChange(e:any):void;
}

const tagOptions = [
   {value: "green",        label: "Green"       },
   {value: "yellow",       label: "Yellow"      },
   {value: "blue",         label: "Blue"        },
   {value: "red",          label: "Red"         },
   {value: "orange",       label: "Orange"      }
];

const productTypeOptions = [
   {value: "armor",        label: "Armor"       },
   {value: "weapon",       label: "Weapon"      },
   {value: "accessory",    label: "Accessory"   },
   {value: "consumable",   label: "Consumable"  },
   {value: "tool",         label: "Tool"        },
   {value: "trash",        label: "Trash"       },
   {value: "quest",        label: "Quest"       },
   {value: "gm_debug",     label: "Gm_debug"    }
];