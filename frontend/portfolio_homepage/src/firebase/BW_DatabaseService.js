import {bw_db} from "./BW_init.js";

export function sample(){
	bw_db.collection('UserData').get().then(snapshot => {
		console.log(snapshot.docs);
	});
}
