import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//ATTEMPT TO TRY AND CREATE ANOTHER INITIALIZATION OF THE FIREBASE DOESN'T WORK
export var config = {
	apiKey: "AIzaSyBkGGKw3_CKSVlsK8XUWRqmjTqcggTmtU0",
	authDomain: "bookworm-backend.firebaseapp.com",
	databaseURL: "https://bookworm-backend.firebaseio.com",
	projectId: "bookworm-backend",
	storageBucket: "bookworm-backend.appspot.com",
	messagingSenderId: "845803795351",
	appId: "1:845803795351:web:ffc463d678559e9118cad2",
	measurementId: "G-8FV64KKTXN"
};
//
export const bw_backend_app = firebase.initializeApp(config);
export const bw_auth = firebase.auth();
export const bw_db = firebase.firestore();