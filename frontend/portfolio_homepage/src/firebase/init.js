import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
	apiKey: "AIzaSyBkGGKw3_CKSVlsK8XUWRqmjTqcggTmtU0",
	authDomain: "bookworm-backend.firebaseapp.com",
	databaseURL: "https://bookworm-backend.firebaseio.com",
	projectId: "bookworm-backend",
	storageBucket: "bookworm-backend.appspot.com",
	messagingSenderId: "845803795351",
	appId: "1:845803795351:web:ffc463d678559e9118cad2",
	measurementId: "G-8FV64KKTXN"
};
export const bw_backend_app = firebase.initializeApp(config);
export const bw_auth = firebase.auth();
export const bw_db = firebase.firestore();

//Google Sign in w/ Popup
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
	bw_auth.signInWithPopup(provider)
		.then(cred => {
			//console.log("Google login success!:")
			//console.log(cred)
		});
};

export const generateUserDocument = async (user) => {//generates user document in firestore. If already exists in firestore then just returns a user object
	if (!user) {
		return;
	}

	const userRef = bw_db.doc(`users/${user.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		try {
			await userRef.set({
				email: user.email,
				photoURL: user.photoURL,
			});
		} catch (error) {
			console.error("Error creating user document", error);
		}
	}
	return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
	if (!uid) return null;
	try {
		const userDocument = await bw_db.doc(`users/${uid}`).get();
		return {
			uid,
			...userDocument.data()
		};
	} catch (error) {
		console.error("Error fetching user", error);
	}
};