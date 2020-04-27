import React, { Component } from "react";
import { bw_auth, generateUserDocument } from "../firebase/init.js";
import BookAppMain from "../books/BookAppMain";
import {Router} from "react-chrome-extension-router";
import SignIn from "./SignIn";
import { populatePortfolioHomepage} from "../firebase/firestore/db_functions";
import './User.css'

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			books: []
		};
	}

	componentDidMount = async () => {
		await bw_auth.onAuthStateChanged(async user => {
			if(user) {//if it exists, grab user bookData from the database into app
				// //console.log(userAuth.providerData)
				// //console.log(userAuth.providerId)

				//TEST FUNCTIONS FOR UPDATING THE DATABASE
				// await storeBook({
				// 	key: Date.now(),
				// 	title: "applesss",
				// 	time_created: Date.now()
				// 	}, user.uid)

				await populatePortfolioHomepage(user.uid)
					.then(async books => {
						//console.log(books)
						this.setState({
							user: await generateUserDocument(user),
							books: [...books]
						})
					}, e => console.log(e))
			}

		})
	};

	render() {
		return (
			this.state.user ?
				<div className="users_portfolio_homepage">
				
					
					<BookAppMain user={this.state.user} books={this.state.books}/>
					
				</div>
				:
				<Router>
					<SignIn />
				</Router>

		);
	}

}

export default User;