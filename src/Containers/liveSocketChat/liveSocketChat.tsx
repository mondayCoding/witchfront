
import * as React from 'react';
import * as io from 'socket.io-client';
import ANNO from '../../Utils/Notify';
import Announcement from '../announcement/announcement';
import ChatLine from './line';
import SelectUserMenu from './selectUserMenu';
import {TextinputPlain} from '../../Components';
import {IMessageLine} from '../../interfaces';
import settings from 'Utils/Settings';

// TODO FIX SOCKETS FOR NEW SERVER/FRONT SEPARATION
// GET USERNAMES FROM SETTINGS

export default class ChatWindow extends React.Component {

	socket: SocketIOClient.Socket;
	state: IState = {
		messageHistory: [],
		message: "",
		localUser: "",
		statusList: []
	};

	componentDidMount() {

		//make socket connection and listen for messages
		this.socket = io.connect("http://localhost:4000");

		this.socket.on("connect", () => {
			console.log("socket reached server");
		})

		.on("joinedRoom", (response: any) => {
			ANNO.announce(response.message, null, "info");			
			this.setState({ statusList: response.roomStatus, messageHistory: response.messageHistory });
		})

		.on("warning", (response: any) => {
			ANNO.announce(response.message, null, "info");
		})

		.on("usernameGranted", (response: any) => {
			this.setState({localUser:response.username});
		})

		.on("roomRefresh", (response: any) => {
			ANNO.announce(response.message, null, "info");
			this.setState({ statusList: response.roomStatus });
		})

		.on("roomIsFull", (response: any) => {
			ANNO.announce(response.message, null, "error");
		})

		.on("newMessages", (recivedMessage: IMessageLine) => {
			let messages = this.state.messageHistory;
			messages.push(recivedMessage);
			this.setState({ messageHistory: messages });
		});
	}

	componentWillUnmount() {
		if (this.socket) {
			this.socket.emit("leaveRoom");
		}
	}

   connectToChatAs(username: string) {
      //TODO No server implementation for users outside predefined yet
      const user = settings.getLoggedUserName();
      
      this.socket.emit(
         "allowChatAccessAs", {requestToUseName: username}
      );
   }

	 onKeyUphandler(event: any) {
		if (event.key === "Enter") {

			//send socket message;
			this.socket.emit("chat", {
				message: this.state.message,
			});
		}
	}

	onChangeHandler(event: any) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		let placeholder = "chat...";
		const { message, statusList, localUser } = this.state;
		let onKeyUp = (event: any) => this.onKeyUphandler(event);
		let onChange = (event: any) => this.onChangeHandler(event);

		return (
         <React.Fragment>

            <Announcement 
               message="We are currently in live mode chat intended only for live users. 
               No reqistration required. Your chat history won't be used 
               for any nefarious purposes... mostly." 
            />
            <div className="spacing"></div>

			   <article className="chat">

               <section className="chatwindow" id="chatwindow">

                  <div className="chatlog" id="chatlog">
                     {this.state.messageHistory.map((item: IMessageLine, index) =>
                        <ChatLine key={index} message={item} />)}
                  </div>

                  <TextinputPlain
                     value={message}
                     name="message"
                     onKeyUp={onKeyUp}
                     onChange={onChange}
                     placeholder={placeholder}
                  />
               </section>

               <SelectUserMenu 
                  onClick={(data: string) => this.connectToChatAs(data)} 
                  statusList={statusList}
                  localUser={localUser} 
               />

			   </article>
         </React.Fragment>
		);
	}
}

interface IStatusList { 
	active: boolean;
	name: string;
}

interface IState {
	messageHistory: IMessageLine[];
	message: string;
	localUser: string;
	statusList: IStatusList[];
}
