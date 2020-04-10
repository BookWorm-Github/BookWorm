import React, {useContext} from 'react';
import SignIn from "./SignIn";//class

import BookAppMain from "../books/BookAppMain";
import ProfilePage from "./ProfilePage";
import {UserContext} from "./UserProvider";
import {Router} from "react-chrome-extension-router";

function Application() {
	const user = useContext(UserContext);//returns an object and takes in a Context object
	return (
		user ?
			<div className="users_portfolio_homepage">
				<h1>BookWorm</h1>
				<BookAppMain />
				<ProfilePage/>
			</div>
			:
			<Router>
				<SignIn/>
			</Router>

	);
}



export default Application;

