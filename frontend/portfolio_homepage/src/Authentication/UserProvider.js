import React, { Component } from "react";
import { bw_auth, generateUserDocument } from "../firebase/init.js";

export const UserContext = React.createContext({user: null}); //creates and returns to UserContext a Context object.

class UserProvider extends Component {
	state = {
		user: null
	};

	componentWillMount = async () => {
		await bw_auth.onAuthStateChanged(async userAuth => {
			const user = await generateUserDocument(userAuth);
			this.setState({ user });
		});
	}

	componentDidMount = async () => {
		await bw_auth.onAuthStateChanged(async userAuth => {
			const user = await generateUserDocument(userAuth);
			this.setState({ user });
		});


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