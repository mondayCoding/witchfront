import * as React from 'react';
import { arrayMove } from 'react-sortable-hoc';
import {Modal} from 'Common/Index';
import Table from './Table';
import SortableList from './sortableList';
import TaskManagerModal from './TaskManagerModal';
import API from 'Services/ToDo_soon';
import confirm from 'Common/ConfirmPopUp';
import { IMissionItem, IMission } from '../../../Interfaces';
import anno from 'Utils/Notify';


export default class ToDoSoon extends React.Component {

	state: IState = {
		quests: [],
      newQuest: "",
      activeItemIndex: null,
      modalIsOpen: false,
      isLoading: true,
	};

	async componentDidMount() {
		const data = await API.getTodoCollection() as IMissionItem[];
		this.setState({ quests: data, isLoading:false });
   }

	handleAddNewTaskSubmit = async () => {
		if(await confirm(`Add task called: ${this.state.newQuest}`)){
			const data = await API.addNewItemToCollection({ objective: this.state.newQuest }) as IMissionItem[];
			this.setState({ quests: data, newQuest: "" });
		}
	}

	handleAddNewTaskOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({newQuest: e.target.value,});
	}

   handleRemoveTask = async () => {
      const selectedMission = this.getSelectedTask();
      this.setState({ modalIsOpen: false });

      if (await confirm(`Really delete item: ${selectedMission.objective}`, null, "heading")) {
         const data = await API.removeFromCollection({ 
            objective: selectedMission.objective, 
            createDate: selectedMission.createDate }) as IMission[];
         this.setState({ quests: data });
         } else {		
            if (this.state.modalIsOpen) {
               this.setState({ modalIsOpen: true });
            }
      }	
   }

	handleEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") { this.handleAddNewTaskSubmit(); }
	}

	handleTaskToggle = async () => {
      const selected = this.getSelectedTask();
      const data = await API.toggleHandler({ 
         objective: selected.objective, 
         createDate: selected.completeDate }) as IMissionItem[];
      this.setState({ quests: data });
   }

	closeModal = () => {
		this.setState({ modalIsOpen: false });
   }
   
   openModal = () => {
		this.setState({ modalIsOpen: true });
	}

   selectActiveItem = (activeItemIndex:number) => {
      this.setState({activeItemIndex}, this.openModal);
   }

   getSelectedTask(){
      const {quests, activeItemIndex} = this.state;
      return quests[activeItemIndex];
   }

   updateTask = (item: IMissionItem) => {
      const quests = this.state.quests.slice(0);
      const index = this.state.activeItemIndex;
      quests[index] = item;
      this.setState({quests}, this.closeModal);
   }

   handleSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
      let quests = this.state.quests.slice(0);
      quests = arrayMove(quests, oldIndex, newIndex);
      quests = quests.map((task, index) =>{
         task.order = index;
         return task;
      });
      console.log(quests);      

      this.setState({quests});
      anno.announce("Tasks have been sorted, there is no server side implementation so this has no permanence");
   }

   showLoader(){
      return(<div className="loader">Loading...</div>);
   }

   
	render() {

      //table
      const {newQuest, quests, modalIsOpen, isLoading, activeItemIndex } = this.state;
      const heading = (quests[activeItemIndex]) ? quests[activeItemIndex].objective : "" ;
      const activeItem = Object.assign({}, this.getSelectedTask());

      //modal
      const closeModal = this.closeModal;

      return (
			<Table
				value={newQuest}
				onKeyUp={this.handleEnter}
				onChange={this.handleAddNewTaskOnChange}
				onBtnClick={this.handleAddNewTaskSubmit}
			>
				<Modal show={modalIsOpen} heading={heading} onClose={closeModal}>
               <TaskManagerModal task={activeItem} onCancel={closeModal} onSave={this.updateTask}/>
				</Modal>

            {
               !isLoading ?
               <SortableList
                  //component properties
                  lockAxis="y"
                  lockToContainerEdges={true}
                  useDragHandle={true}
                  onSortEnd={this.handleSortEnd}
   
                  //passed data
                  items={quests}
                  updateModal={this.selectActiveItem}
                  removeItem={this.handleRemoveTask}
                  toggle={this.handleTaskToggle}
               />
               : this.showLoader()
            }
			</Table>
		);
	}
}

interface IState {
	quests: IMissionItem[];
	newQuest: string;
	modalIsOpen: boolean;
   isLoading: boolean;
   activeItemIndex: number;
}
