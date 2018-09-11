import * as React from 'react';
import {TextInputMaterial, Button, Icons} from 'Common/Index';

export default class Table extends React.Component<IProps> {
   
   render(){
      const {value, onKeyUp, onBtnClick, onChange} = this.props;
      const disableSubmit = !(value.length > 5);

      return (
        <div>
          <div className="line-thin"></div>
          <div className="flex-row-table">
            <TextInputMaterial 
              id="takeNewBtn" 
              value={value} 
              label="description of new quest" 
              onKeyUp={onKeyUp} 
              onChange={onChange}
            />
            <Button 
              onClick={onBtnClick} 
              buttonText="Add"
              buttonIcon={Icons.plus}
              disabled={disableSubmit}
            />
          </div>
          <div className="spacing"></div>
          <div className="line-thin"></div>
          <div className="flex-table">{this.props.children}</div>
          <div className="line-thin"></div>
        </div>
      );
   }
}

interface IProps {
   value: string;
   onKeyUp(e:KeyboardEvent):void;
   onBtnClick(e:React.MouseEvent):void;
   onChange(e:React.ChangeEvent<HTMLInputElement>):void;
}
