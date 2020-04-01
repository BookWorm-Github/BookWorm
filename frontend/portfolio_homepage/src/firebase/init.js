//this second intialization file for the firebase may be unnecessary, but the only work around since i can't inject this into the credentials/html and make it work.
var config = {
	apiKey: "AIzaSyBkGGKw3_CKSVlsK8XUWRqmjTqcggTmtU0",
	authDomain: "bookworm-backend.firebaseapp.com",
	databaseURL: "https://bookworm-backend.firebaseio.com",
	projectId: "bookworm-backend",
	storageBucket: "bookworm-backend.appspot.com",
	messagingSenderId: "845803795351",
	appId: "1:845803795351:web:ffc463d678559e9118cad2",
	measurementId: "G-8FV64KKTXN"
};
var fbapp = firebase.initializeApp(config);

const db = firebase.firestore();
// db.settings({timestampsInSnapshots: true});
console.log("hello");