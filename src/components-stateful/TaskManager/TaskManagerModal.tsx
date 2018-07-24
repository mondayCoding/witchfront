
import * as React from 'react';
import Input from '../../components/Textinput_responsive';
import SliderCheckBox from '../../components/checkbox_slider';
import Button from '../../components/button';
import { IMissionItem } from '../../interfaces';


interface IModalProps {
   task: IMissionItem;
   onSave(param:IMissionItem):void;
   onCancel():void;
}

export default class TaskManagerModal extends React.Component<IModalProps> {

   public state:IMissionItem = {
      objective: this.props.task.objective,
      longObjective: this.props.task.longObjective,
      createDate: this.props.task.createDate,
      complete:this.props.task.complete,
      completeDate:this.props.task.completeDate
   };

   public handleSave = () => {
      this.props.onSave(this.state);
   }

   public handleCancel = () => {
      this.props.onCancel();
   }

   public handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      const targetName = e.target.name;
      this.setState({[targetName]:targetValue});
   }

   public render(){
      return(
         <React.Fragment>
            <Input 
               value={this.state.objective} 
               name="objective" 
               label="Summary" 
               onChange={this.handleOnChange} 
            />
            <Input 
               value={this.state.longObjective} 
               name="longobjective" 
               label="Full description" 
               onChange={this.handleOnChange} 
            />
            <SliderCheckBox 
               id="sliderCBID" 
               checked={this.state.complete} 
               name="complete" 
               label="Completed" 
               onChange={this.handleOnChange} 
            />
            <div className="line-thin"></div>
            <div className="row-flex spaced">
               <Button onClick={this.handleCancel} buttonText="Cancel" />
               <Button onClick={this.handleSave} buttonText="Save" />
            </div>
         </React.Fragment>
      );
   }
}