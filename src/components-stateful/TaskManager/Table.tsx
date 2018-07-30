
import * as React from 'react';

import Input from '../../components/Textinput_material';
import Button from '../../components/Button';


export default class Table extends React.Component<any> {
   public render(){
      const {value, onKeyUp, onBtnClick, onChange, disableState, children} = this.props;

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
              className={(disableState) ? "themebutton disabled" : "themebutton"} 
            />
          </div>
          <div className="spacing"></div>
          <div className="line-thin"></div>
          <div className="flex-table">{children}</div>
          <div className="line-thin"></div>
        </div>
      );
   }

}
