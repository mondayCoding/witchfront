
//libraries
import * as React from 'react';
import { arrayMove } from 'react-sortable-hoc';

//custom components
import Table from './Table';
import Modal from '../../components/modal';
import SortableList from './sortableList';
import TaskManagerModal from './TaskManagerModal';

//utils
import API from '../../services/ToDo_soon';
import confirm from '../../utils/confirmUtilModule';

//interfaces
import { IMissionItem } from '../../interfaces';



export default class ToDoSoon extends React.Component {

	public state: IState = {
		quests: [],
      newQuest: "",
      activeItem: null,
      activeItemIndex: null,
      modalIsOpen: false,
      isLoading: true,
	};

	public async componentDidMount() {
		// const data = await API.getTodoCollection() as IMissionItem[];
		const data = await API.getDelayedCollection() as IMissionItem[];
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

	public async removeTask(mission: IMissionItem) {

		// close modal if it is open
		const modalIsOpen = this.state.modalIsOpen;

		if (modalIsOpen){
			this.setState({ modalIsOpen: false });
		}

		// confirm deletion
		if (await confirm(`Really delete item: ${mission.objective}`, null, "heading")) {
			const data: any = await API.removeFromCollection({ objective: mission.objective, createDate: mission.createDate });
			this.setState({ quests: data });
		// deletion canceled
		} else {
			// open modal again if it was open			
			if (modalIsOpen) {
				this.setState({ modalIsOpen: true });
			}
		}	
	}

	public handleEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") { this.handleAddNewTaskSubmit(); }
	}

	public async handleTaskToggle(mission: IMissionItem) {
		const data = await API.toggleHandler(
         { objective: mission.objective, createDate: mission.completeDate }
      ) as IMissionItem[];
		this.setState({ quests: data });
	}

	public closeModal = () => {
		this.setState({ modalIsOpen: false });
   }
   
   public openModal = () => {
		this.setState({ modalIsOpen: true });
	}

   public selectActiveItem = (activeItem: IMissionItem, activeItemIndex:number) => {
      this.setState({activeItem, activeItemIndex}, this.openModal);
   }

   public updateTask = (item: IMissionItem) => {
      const quests = this.state.quests.slice(0);
      const index = this.state.activeItemIndex;
      quests[index] = item;
      this.setState({quests}, this.closeModal);
   }

	public handleSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
		this.setState({ quests: arrayMove(this.state.quests, oldIndex, newIndex) });
		console.log("sorted");
   }
   
   public showLoader(){
      return(<div className="loader">Loading...</div>);
   }

   
	public render() {

      //table
      const {newQuest, quests, modalIsOpen, isLoading, activeItem } = this.state;
      const isSubmitDisabled = (newQuest.length < 5);
      const removeItem = (obj: IMissionItem) => this.removeTask(obj);
      const toggle = (obj: IMissionItem) => this.handleTaskToggle(obj);
      const heading = (this.state.activeItem) ? this.state.activeItem.objective : "" ;

      //modal
      const closeModal = this.closeModal;

      return (
			<Table
				value={newQuest}
				disableState={isSubmitDisabled}
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
                  removeItem={removeItem}
                  toggle={toggle}
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
   activeItem: IMissionItem;
   activeItemIndex: number;
}
