import * as React from 'react';
import { arrayMove } from 'react-sortable-hoc';
import Table from './Table';
import Modal from '../../components/Modal';
import SortableList from './sortableList';
import TaskManagerModal from './TaskManagerModal';
import API from '../../services/ToDo_soon';
import confirm from '../../utils/confirmUtilModule';
import { IMissionItem, IMission } from '../../interfaces';
import anno from '../../utils/annoModule';


export default class ToDoSoon extends React.Component {

	public state: IState = {
		quests: [],
      newQuest: "",
      activeItemIndex: null,
      modalIsOpen: false,
      isLoading: true,
	};

	public async componentDidMount() {
		const data = await API.getTodoCollection() as IMissionItem[];
		// const data = await API.getDelayedCollection() as IMissionItem[];
		this.setState({ quests: data, isLoading:false });
   }

	public handleAddNewTaskSubmit = async () => {
		if(await confirm(`Add task called: ${this.state.newQuest}`)){
			const data = await API.addNewItemToCollection({ objective: this.state.newQuest }) as IMissionItem[];
			this.setState({ quests: data, newQuest: "" });
		}
	}

	public handleAddNewTaskOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({newQuest: e.target.value,});
	}

   public handleRemoveTask = async () => {
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


	public handleEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") { this.handleAddNewTaskSubmit(); }
	}

	public handleTaskToggle = async () => {
      const selected = this.getSelectedTask();
      const data = await API.toggleHandler({ 
         objective: selected.objective, 
         createDate: selected.completeDate }) as IMissionItem[];
      this.setState({ quests: data });
   }

	public closeModal = () => {
		this.setState({ modalIsOpen: false });
   }
   
   public openModal = () => {
		this.setState({ modalIsOpen: true });
	}

   public selectActiveItem = (activeItemIndex:number) => {
      this.setState({activeItemIndex}, this.openModal);
   }

   public getSelectedTask(){
      const {quests, activeItemIndex} = this.state;
      return quests[activeItemIndex];
   }

   public updateTask = (item: IMissionItem) => {
      const quests = this.state.quests.slice(0);
      const index = this.state.activeItemIndex;
      quests[index] = item;
      this.setState({quests}, this.closeModal);
   }

   public handleSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
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

   public showLoader(){
      return(<div className="loader">Loading...</div>);
   }

   
	public render() {

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
