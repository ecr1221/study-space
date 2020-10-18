import React, { Component } from "react";
//import logo from "./logo1.png";

class Choose extends Component {
	render() {
		return (
			<div className="login">
				
				<button
					onClick={() => this.props.setUsername()}>
					White Board
				</button>
				
			</div>
		);
	}
}

export default Choose;
