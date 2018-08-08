
import * as React from 'react';
import Input from '../../Components/TextinputResponsive';
import SliderCheckBox from '../../Components/CheckboxSlider';
import Button from '../../Components/Button';
import { IMissionItem } from '../../interfaces';


export default class TaskManagerModal extends React.Component<IModalProps> {

   state:IMissionItem = {
      objective: "",
      longObjective: "",
      createDate: "",
      complete: null,
      completeDate: "",
      order: null
   };

   componentDidMount(){
      this.setState({
         objective: this.props.task.objective,
         longObjective: this.props.task.longObjective,
         createDate: this.props.task.createDate,
         complete:this.props.task.complete,
         completeDate:this.props.task.completeDate,
         order: this.props.task.order
      });
   }

   handleSave = () => {
      this.props.onSave(this.state);
   }

   handleCancel = () => {
      this.props.onCancel();
   }

   handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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

interface IModalProps {
   task: IMissionItem;
   onSave(param:IMissionItem):void;
   onCancel():void;
}