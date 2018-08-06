
import * as React from 'react';
import Product from '../../../models/productModel';
import AvatarSelector from '../../avatarSelector/avatarSelector';
import DropZone from '../../../Components/File_dropzone';
import FileUploadTest from '../FileUpload';
import Tabs from '../../../Components/Tabs';
import Tab from '../../../Components/Tab';

interface IProps {
   onSelection(e:any):void;
}

export default class AvatarTab extends React.Component<IProps> {
   public render(){
      return(
         <section>
            <h4 className="themeheading">Product image</h4>
             <Tabs>
                <Tab title="Select premade">

                  <span>Select premade image</span>
                  <div className="avatar--grid">
                     <AvatarSelector onSelection={this.props.onSelection} />
                  </div>  

                </Tab>
                <Tab title="Upload custom">

                  <span>TEMP: currently uploads submitted file directly to server</span>
                  {/* <DropZone onFileChange={null} /> */}
                  <FileUploadTest />
                   
                </Tab>
             </Tabs>
         </section>
      );
   }
}