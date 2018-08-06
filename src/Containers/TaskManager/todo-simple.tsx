
import * as React from 'react';

import Table from './Table';
import Row from './Row';

import {IMission} from '../../interfaces';
import API from '../../services/ToDo_simple';
import anno from '../../utils/annoModule';

interface IMissionArr {
  quests: IMission[];
  newQuest: string;
}

export default class TodoSimple extends React.Component<any, IMissionArr> {

   public state:IMissionArr = {
      quests: [],
      newQuest: ""
   };

   public componentDidMount() {
      this.getTodoCollection();
   }

   public async addNewTask() {
      const quests = await API.addNewItemToCollection({objective: this.state.newQuest}) as IMission[];
      this.setState({quests, newQuest:""});
   }

   public onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
      this.setState({
         newQuest: event.target.value
      });
   }

   public async toggleHandler(mission: IMission["mission"]) {
      const quests = await API.toggleHandler(
         {objective:mission.objective, createDate: mission.completeDate}
      ) as IMission[];
      this.setState({quests});
   }

   public async removeOnClick(mission: IMission["mission"]) {
      const data:any = await API.removeFromCollection({ objective: mission.objective, createDate: mission.createDate });
      this.setState({quests:data});
   } 

   public enterHandler(event: any) {
      if (event.key === "Enter") { this.addNewTask(); }
   }

   //promise method
   public getTodoCollectionWithPromise = async () => {
      const tasks:any = await API.getTodoCollection();
      this.setState({ quests:tasks });
   }

   //callback way
   public getTodoCollection = () => {
      API.getTodoCollectionCallback(
         (data:any) => this.setState({quests:data})
      );
   }

   public render() {
      const { newQuest, quests } = this.state;
      let onKeyUp = (event:any) => this.enterHandler(event);
      let onChange = (event:React.ChangeEvent<HTMLInputElement>) => this.onChangeHandler(event);
      let addNewTask = () => this.addNewTask();

      return (
         <Table 
            value={newQuest} 
            onKeyUp={onKeyUp} 
            onChange={onChange} 
            onBtnClick={addNewTask} 
         >
         {quests.map((item:any, i) => 
            <Row 
               key={`item-${i}`} 
               toggle={() => this.toggleHandler(item)} 
               mission={item} 
               onClick={() => this.removeOnClick(item)} 
            />
         )}
         </Table>
         
      );
   }
}
