
import * as $ from 'jquery';
import axios from 'axios';
import * as React from 'react';

import Table from '../todo-soon/Table';
import Row from './Row';
import Button from '../../components/button';

import {IMission} from '../../interfaces';
import API from '../../api/Todo_simple';
import anno from '../../utils/annoModule';

interface IMissionArr {
  quests: IMission[];
  newQuest: string;
  submitDisabled: boolean;
}

export default class TodoSimple extends React.Component<any, IMissionArr> {

  public state:IMissionArr = {
    quests: [],
    newQuest: "",
    submitDisabled: true
  };

  public componentDidMount() {
    this.getTodoCollection();
  }

  public async clickHandler() {
    const data:any = await API.addNewItemToCollection({objective: this.state.newQuest});
    this.setState({quests:data, newQuest:""});
  }

  public onChangeHandler(event: any) {
    this.setState({
      newQuest: event.target.value,
      submitDisabled: ((event.target.value).length > 2 ? false : true)
    });
  }

  public async toggleHandler(mission: IMission["mission"]) {
    const data:any = await API.toggleHandler({objective:mission.objective, createDate: mission.completeDate});
    this.setState({quests:data});
  }

  public async removeOnClick(mission: IMission["mission"]) {
    const data:any = await API.removeFromCollection({ objective: mission.objective, createDate: mission.createDate });
    this.setState({quests:data});
  } 

  public enterHandler(event: any) {
    if (event.key === "Enter") { this.clickHandler(); }
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
    const { newQuest, submitDisabled, quests } = this.state;
    let onKeyUp = (event: any) => this.enterHandler(event);
    let onChange = (event: any) => this.onChangeHandler(event);
    let onBtnClick = () => this.clickHandler();

    return (
      <Table 
        value={newQuest} 
        disableState={submitDisabled} 
        onKeyUp={onKeyUp} 
        onChange={onChange} 
        onBtnClick={onBtnClick} 
        quests={quests} 
      >
        {quests.map((item:any, i) => 
          <Row 
            key={i} 
            toggle={() => this.toggleHandler(item)} 
            mission={item} 
            onClick={() => this.removeOnClick(item)} 
          />
        )}
      </Table>
      
    );
  }
}
