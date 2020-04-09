import React, {Component} from 'react';
import SignIn from "./SignIn";//class
import SignUp from "./SignUp";//function
import PasswordReset from "./PasswordReset";
import BookAppMain from "../books/BookAppMain";
import ProfilePage from "./ProfilePage";

class Application extends Component {
	constructor() {
		super();
		this.state = {
			user: null
		}
	}
	render() {
		return(
		this.state.user ?
			<div className="users_portfolio_homepage">
				<h1>BookWorm</h1>
				<BookAppMain />
				<ProfilePage/>
			</div>
			:
				<div>
					<SignUp/>
					<SignIn/>
					<PasswordReset/>
				</div>
				// <Router>
				// 	<Switch>
				// 		<Route path="/" exact component={SignIn}/>
				// 		<Route path="/SignUp" component={SignUp}/>
				// 		<Route path = "/PasswordReset" component={PasswordReset}/>
				// 	</Switch>
				//  </Router>
		)

	}
}
export default Application;

