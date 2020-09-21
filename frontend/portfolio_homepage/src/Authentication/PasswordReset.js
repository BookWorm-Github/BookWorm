import React, {Component} from "react";
import {bw_auth} from "../firebase/init.js";
import SignIn from "./SignIn";
import {Link} from "react-chrome-extension-router";
import './styles.css';

class PasswordReset extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			emailHasBeenSent: false,
			error: null
		}
	}

	render() {
		return (
			<div className="mt-8">
				<h1 className="text-xl text-center font-bold mb-3">
					Reset your Password
				</h1>
				<div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
					<form action="">
						{this.state.emailHasBeenSent && (
							<div className="py-3 bg-green-400 w-full text-white text-center mb-3">
								An email has been sent to you!
							</div>
						)}
						{this.state.error !== null && (
							<div className="py-3 bg-red-600 w-full text-white text-center mb-3">
								{this.state.error}
							</div>
						)}
						<label htmlFor="userEmail" className="w-full block">
							Email:
						</label>
						<input
							type="email"
							name="userEmail"
							id="userEmail"
							value={this.state.email}
							placeholder="Input your email"
							onChange={this.onChangeHandler}
							className="mb-3 w-full px-1 py-2"
						/>
						<button
							className="w-full bg-blue-400 text-white py-3"
							onClick={event => {
								this.setState({
									error: null
								});
								this.sendResetEmail(event);
							}}
						>
							Send me a reset link
						</button>
					</form>

					<Link
						component={SignIn}
						className="my-2 text-blue-700 hover:text-blue-800 text-center block"
					>
						&larr; back to sign in page
					</Link>
				</div>
			</div>
		);
	}

	onChangeHandler = event => {
		const {name, value} = event.currentTarget;

		if (name === "userEmail") {
			this.setState({
				email: value
			});
		}
	};

	sendResetEmail = event => {
		event.preventDefault();
		bw_auth.sendPasswordResetEmail(this.state.email)
			.then(() => {
				this.setState({
					emailHasBeenSent: true
				});
				setTimeout(() => {
					this.setState({
						emailHasBeenSent: false
					})
				}, 3000);
			})
			.catch(() => {
				this.setState({
					error: "Error resetting password"
				});
			});
	};
}

// const PasswordReset = () => {
// 	const [email, setEmail] = useState("");
// 	const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
// 	const [error, setError] = useState(null);
//
// 	const onChangeHandler = event => {
// 		const { name, value } = event.currentTarget;
//
// 		if (name === "userEmail") {
// 			setEmail(value);
// 		}
// 	};
//
// 	const sendResetEmail = event => {
// 		event.preventDefault();
// 		bw_auth.sendPasswordResetEmail(email)
// 			.then(() => {
// 				setEmailHasBeenSent(true);
// 				setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
// 			})
// 			.catch(() => {
// 				setError("Error resetting password");
// 			});
// 	};
// 	return (
// 		<div className="mt-8">
// 			<h1 className="text-xl text-center font-bold mb-3">
// 				Reset your Password
// 			</h1>
// 			<div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
// 				<form action="">
// 					{emailHasBeenSent && (
// 						<div className="py-3 bg-green-400 w-full text-white text-center mb-3">
// 							An email has been sent to you!
// 						</div>
// 					)}
// 					{error !== null && (
// 						<div className="py-3 bg-red-600 w-full text-white text-center mb-3">
// 							{error}
// 						</div>
// 					)}
// 					<label htmlFor="userEmail" className="w-full block">
// 						Email:
// 					</label>
// 					<input
// 						type="email"
// 						name="userEmail"
// 						id="userEmail"
// 						value={email}
// 						placeholder="Input your email"
// 						onChange={onChangeHandler}
// 						className="mb-3 w-full px-1 py-2"
// 					/>
// 					<button
// 						className="w-full bg-blue-400 text-white py-3"
// 						onClick={event => {
// 							setError(null);
// 							sendResetEmail(event);
// 						}}
// 					>
// 						Send me a reset link
// 					</button>
// 				</form>
//
// 				<Link
// 					component={SignIn}
// 					className="my-2 text-blue-700 hover:text-blue-800 text-center block"
// 				>
// 					&larr; back to sign in page
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

export default PasswordReset;
