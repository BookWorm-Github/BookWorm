import React, { useState } from "react";
import { bw_auth, signInWithGoogle, generateUserDocument } from "../firebase/init.js";
import SignIn from "./SignIn";
import {Link} from "react-chrome-extension-router";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
		event.preventDefault();
		const result = await bw_auth.createUserWithEmailAndPassword(email, password)
			.then(async userCredential => {
				await generateUserDocument(userCredential.user);

			},
			error => {
				setError('Error Signing up with email and password');
				setTimeout(() => {setError(null)}, 3000);
				return error
			});

		setEmail("");
		setPassword("");
		return result
	};

	const onChangeHandler = event => {
		const { name, value } = event.currentTarget;

		if (name === "userEmail") {
			setEmail(value);
		} else if (name === "userPassword") {
			setPassword(value);
		}
	};

	return (
		<div className="mt-8">
			<h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
			<div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
				{error !== null && (
					<div className="py-4 bg-red-600 w-full text-white text-center mb-3">
						{error}
					</div>
				)}
				<form className="">
					<label htmlFor="userEmail" className="block">
						Email:
					</label>
					<input
						type="email"
						className="my-1 p-1 w-full"
						name="userEmail"
						value={email}
						placeholder="E.g: faruq123@gmail.com"
						id="userEmail"
						onChange={event => onChangeHandler(event)}
					/>
					<label htmlFor="userPassword" className="block">
						Password:
					</label>
					<input
						type="password"
						className="mt-1 mb-3 p-1 w-full"
						name="userPassword"
						value={password}
						placeholder="Your Password"
						id="userPassword"
						onChange={event => onChangeHandler(event)}
					/>
					<button
						className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
						onClick={event => {
							setError(null)
							createUserWithEmailAndPasswordHandler(event, email, password)
								.catch(e => {
									//console.log(e)
								})
						}}
					>
						Sign up
					</button>
				</form>
				<p className="text-center my-3">or</p>
				<button
					onClick={() => {
						try {
							signInWithGoogle();
						} catch (error) {
							console.error("Error signing in with Google", error);
						}
					}}
					className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
				>
					Sign In with Google
				</button>
				<p className="text-center my-3">
					Already have an account?{" "}
					<Link component={SignIn} className="text-blue-500 hover:text-blue-600">
						Sign in here
					</Link>{" "}
				</p>
			</div>
		</div>
	);
};

export default SignUp;