
import * as React from 'react';

import Input from '../../components/Textinput_material';
import Button from '../../components/Button';
import Icons from '../../components/Icons';

interface IProps {
   value: string;
   onKeyUp(e:KeyboardEvent):void;
   onBtnClick(e:React.MouseEvent):void;
   onChange(e:React.ChangeEvent<HTMLInputElement>):void;
}


export default class Table extends React.Component<IProps> {
   public render(){
      const {value, onKeyUp, onBtnClick, onChange} = this.props;
      const disableSubmit = !(value.length > 5);

      return (
        <div>
          <div className="line-thin"></div>
          <div className="flex-row-table">
            <Input 
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
