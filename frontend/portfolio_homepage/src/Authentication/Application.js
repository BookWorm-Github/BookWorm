import React, {Component} from 'react';
import {Router} from "@reach/router";
import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import ProfilePage from "./ProfilePage";
// import PasswordReset from "./PasswordReset";
class Application extends Component {
	constructor() {
		super();
		this.state = {
			user: null
		}
	}
	render() {
		return (
			// this.state.user ?
				// <ProfilePage />
				// :
				// <Router>
				// 	<SignUp path="signUp" />
					<SignIn path="/"/>
					// <PasswordReset path = "passwordReset"/>
				// </Router>
		)
	}
}
export default Application;