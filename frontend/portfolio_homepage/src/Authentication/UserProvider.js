import React, { Component } from "react";
import { bw_auth, generateUserDocument } from "../firebase/init.js";
import {storeBook} from "../firebase/firestore/db_functions";

export const UserContext = React.createContext({user: null}); //creates and returns to UserContext a Context object.

class UserProvider extends Component {
	state = {
		user: null
	};

	componentDidMount = async () => {
		await bw_auth.onAuthStateChanged(async userAuth => {
			const user = await generateUserDocument(userAuth);
			this.setState({ user });
			console.log(userAuth)
			if(userAuth) {//if it exists, grab user bookdata from the database into react
				console.log(userAuth.providerData)
				console.log(userAuth.providerId)
				storeBook({key: 1, title: "TEST", time_created: Date.now()}, userAuth.uid).then(onFulfilled => {
					console.log(onFulfilled)
				});
			}
		})
	};

	render() {
		const { user } = this.state;
		return (
			<UserContext.Provider value={user}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

export default UserProvider;