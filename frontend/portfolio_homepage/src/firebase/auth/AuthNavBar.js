import React, { Component } from 'react';
// import {bw_db, bw_auth, bw_backend_app} from "./script/init";
export class AuthNavBar extends Component{

	constructor() {
		super();
		this.state = {
			user: {
				email: "",
				password: ""
			}
		}

	}

	render() {
		// console.log(bw_auth.currentUser);
		// console.log(bw_db);
		return(
			<div className="auth-navbar">
				<nav className="z-depth-0 grey lighten-4">
					<div className="nav-wrapper container">
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li className="logged-in">
								<a href="/#" className="grey-text modal-trigger" data-target="modal-account">Account</a>
							</li>
							<li className="logged-in">
								<a href="/#" className="grey-text" id="logout">Logout</a>
							</li>
							<li className="logged-in">
								<a href="/#" className="grey-text modal-trigger" data-target="modal-create">Connect with
									Database</a>
							</li>
							<li className="logged-out">
								<a href="/#" className="grey-text modal-trigger" data-target="modal-login">Login</a>
							</li>
							<li className="logged-out">
								<a href="/#" className="grey-text modal-trigger" data-target="modal-signup">Sign up</a>
							</li>
						</ul>
					</div>


				</nav>

				<div id="modal-signup" className="modal">
					<div className="modal-content">
						<h4>Sign up</h4><br/>
						<form id="signup-form">
							<div className="input-field">
								<input type="email" id="signup-email" required/>
								<label htmlFor="signup-email">Email address</label>
							</div>
							<div className="input-field">
								<input type="password" id="signup-password" required/>
								<label htmlFor="signup-password">Choose password</label>
							</div>
							<button className="btn yellow darken-2 z-depth-0">Sign up</button>
						</form>
					</div>
				</div>

				<div id="modal-login" className="modal">
					<div className="modal-content">
						<h4>Login</h4><br/>
						<form id="login-form">
							<div className="input-field">
								<input type="email" id="login-email" required/>
								<label htmlFor="login-email">Email address</label>
							</div>
							<div className="input-field">
								<input type="password" id="login-password" required/>
								<label htmlFor="login-password">Your password</label>
							</div>
							<button className="btn yellow darken-2 z-depth-0">Login</button>
						</form>
					</div>
				</div>

				<div id="modal-account" className="modal">
					<div className="modal-content center-align">
						<h4>Account details</h4><br/>
						<div className="account-details"></div>
					</div>
				</div>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
				{/*<script type="module" src="auth/scripts/auth.js"></script>*/}
				{/*<script type="module" src="auth_materialize.js"></script>*/}
			</div>
		)
	}
}

