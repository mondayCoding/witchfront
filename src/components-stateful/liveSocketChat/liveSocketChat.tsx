
//libs
import * as React from 'react';
import * as io from 'socket.io-client';

//utils
import ANNO from '../../utils/annoModule';

//components
import ChatLine from './line';
import SelectUserMenu from './selectUserMenu';
import InputPlain from '../../components/textinput_plain';

import { IMessageLine } from '../../interfaces';

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

//class
export default class ChatWindow extends React.Component {

	public socket: SocketIOClient.Socket;
	public state: IState = {
		messageHistory: [],
		message: "",
		localUser: "",
		statusList: []
	};

	public componentDidMount() {

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

	public componentWillUnmount() {
		if (this.socket) {
			this.socket.emit("leaveRoom");
		}
	}

	public connectToChatAs(username: string) {
		this.socket.emit(
			"allowChatAccessAs", {requestToUseName: username}
		);
	}

	public onKeyUphandler(event: any) {
		if (event.key === "Enter") {

			//send socket message;
			this.socket.emit("chat", {
				message: this.state.message,
			});
		}
	}

	public onChangeHandler(event: any) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	public render() {
		let placeholder = "chat...";
		const { message, statusList, localUser } = this.state;
		let onKeyUp = (event: any) => this.onKeyUphandler(event);
		let onChange = (event: any) => this.onChangeHandler(event);

		return (
			<article className="chat">

				<section className="chatwindow" id="chatwindow">

					<div className="chatlog" id="chatlog">
						{this.state.messageHistory.map((item: IMessageLine, index) =>
							<ChatLine key={index} message={item} />)}
					</div>

					<InputPlain
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
		);
	}

}
