
import * as React from 'react';
import Product from '../../models/productModel';
import Input from '../../components/textinput_responsive';
import SliderCheckbox from '../../components/checkbox_slider';
import Select from 'react-select';


export default class TabGeneral extends React.Component<Props> {

   public render(){

      const {product, onChange, onSelectChange} = this.props;
      const { name, id, description, productType, hasImage, 
            hasPrice, hasQuantityRules, hasSetDateValues} = product;      

      return(
         <section>
            <h4 className="themeheading underlined">Base Properties</h4>

            <Input
               label="Name"
               name="name"
               id="name"
               value={name}
               onChange={onChange}
            />
            <Input
               label="Item ID"
               name="id"
               id="id"
               value={id}
               onChange={onChange}
            />
            <Input
               label="Product summary"
               name="description"
               id="description"
               value={description}
               onChange={onChange}
            />

            <div className="themeinput-responsive">
               <label htmlFor="selectID">Product types</label>
               <Select 
                  id="selectID" 
                  multi={true}
                  simpleValue={true}
                  name="lang-field-name"
                  value={productType}
                  onChange={onSelectChange}
                  options={productTypeOptions}
               />
            </div>

            <h4 className="themeheading underlined">Addidional properties</h4>
            <SliderCheckbox 
               label="Has Product images" 
               id="imagePropertiesInUse"
               name="hasImage" 
               checked={hasImage} 
               onChange={onChange}
            />
            <SliderCheckbox 
               label="Has price table" 
               id="priceSettingsInUse"
               name="hasPrice" 
               checked={hasPrice} 
               onChange={onChange} 
            />
            <SliderCheckbox 
               label="Has avaibility settings" 
               id="hasSetDateValues"
               name="hasSetDateValues" 
               checked={hasSetDateValues} 
               onChange={onChange} 
            />
            <SliderCheckbox 
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


interface Props {
   product: Product;
   onChange(e:any):void;
   onSelectChange(e:any):void;
}

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