import React, {useContext} from 'react';
import SignIn from "./SignIn"; //class
import BookAppMain from "../books/BookAppMain";
import {UserContext} from "./UserProvider";
import {Router} from "react-chrome-extension-router";
import {bw_auth} from "../firebase/init";

function Application() {
	const user = useContext(UserContext);//returns an object and takes in a Context object
	return (
		user ?
			<div className="users_portfolio_homepage">
				<h1 className={"ph_title"}>BookWorm</h1>
				<BookAppMain />
				<button className = "w-full py-3 bg-red-600 mt-4 text-white"
				        onClick = {() => {
					        bw_auth.signOut().then(
						        onFulfilled => {
							        console.log("Logged out successful")
						        },
						        onRejected => {
							        console.log("log out unsuccessful")
							        console.log(onRejected)
						        }
					        )
				        }
				        }>Sign out</button>
			</div>
			:
			<Router>
				<SignIn/>
			</Router>

	);
}



export default Application;

