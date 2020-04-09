import React, { Component, createContext } from "react";
import { bw_auth, generateUserDocument } from "../firebase/init.js";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
	state = {
		user: null
	};

	componentDidMount = async () => {
		bw_auth.onAuthStateChanged(async userAuth => {
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