import {bw_auth, bw_db} from "../../firebase/init.js";

bw_db.collection('nathan_learning_one').get().then(snapshot => {
	console.log(snapshot.docs);
});

//listen for auth status changes
bw_auth.onAuthStateChanged(user => {
	if(user){
		console.log('user logged in: ', user);

	}
	else{
		console.log('user logged out');
	}
});

//sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	//get user info
	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-password'].value;

	bw_auth.createUserWithEmailAndPassword(email, password).then(credentials => {//we will receive the auth token if the user successfully registers. If user already registered, will show error.
		const modal = document.querySelector('#modal-signup');
		M.Modal.getInstance(modal).close();
		signupForm.reset();
	})
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
	e.preventDefault();

	//sign out
	bw_auth.signOut();
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
	e.preventDefault();

	const email = loginForm['login-email'].value;
	const password = loginForm['login-password'].value;

	bw_auth.signInWithEmailAndPassword(email, password).then(credentials => {
		//close the login modal and reset the form
		const modal = document.querySelector('#modal-login');
		M.Modal.getInstance(modal).close();
		loginForm.reset();
	})
});