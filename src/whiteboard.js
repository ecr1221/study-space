import React, { Component } from "react";
import WhiteBoard from "./components/WhiteBoard";
import Choose from "./components/Choose";
import WebCam from "react-webcam";



class DrawBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			typing: "",
			room: "",
			typingRoom: "",
		};
	}

	componentDidMount() {
		let deferredPrompt;

		window.addEventListener("beforeinstallprompt", (e) => {
			// Prevent Chrome 67 and earlier from automatically showing the prompt
			e.preventDefault();
			// Stash the event so it can be triggered later.
			deferredPrompt = e;
			// Update UI notify the user they can add to home screen
			deferredPrompt.prompt();
			// Wait for the user to respond to the prompt
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === "accepted") {
					console.log("User accepted the A2HS prompt");
				} else {
					console.log("User dismissed the A2HS prompt");
				}
				deferredPrompt = null;
			});
		});
	}

	changeHandler = (inputName, value) => {
		this.setState({
			[inputName]: value
		});
	};

	setUsername = () => {
		if (
			this.state.typing.length <= 25 &&
			this.state.typingRoom.length <= 25
		) {
			this.setState({
				username: "Emma R",
				room: "CHE 2215"
			});
		}
	};

	clearRoom = () => {
		this.setState({
			username: "",
			room: "",
			typingRoom: "",
			typing: ""
		});
	};

	render() {
		return (
			<div class= "room-feed-page">
				<h1 style={{
					color:"#FA7815"
				}}>CHE 2215</h1>
				<div class = "row" style={{
					height: "1300px"
				}}>
					<div class="users-column" style={{
						marginLeft: "20px",
						marginBotton: "20px",
					}}>
						<h3 style={{
							color:"#43D6B9"
						}}>Users</h3>
						<div style={{
							width: "40%",
						}}>
							<h4 style= {{
								paddingBottom: "0px",
								marginBottom: "0px",
								color:"#CECECE"
							}}>Emma R</h4>
							<WebCam
								audio={true}
								width={"100%"}
								height={"100%"}
							/>
						</div>
					</div>
					<div className="whiteboard" style={{
						paddingLeft: "20px",
					}}>
					{this.state.username && this.state.room ? (
						<WhiteBoard clearRoom={this.clearRoom} {...this.state} />
					) : (
						<Choose
							{...this.state}
							setUsername={this.setUsername}
							changeHandler={this.changeHandler}
						/>
					)}
					</div>
				</div>
				
            </div>        
		);
	}
}

export default DrawBoard;