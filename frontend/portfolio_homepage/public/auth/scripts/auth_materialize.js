// import {bw_db} from "../../../src/script/init.js";

bw_db.collection('UserData').get().then(snapshot => {
	console.log(snapshot.docs);
});


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {// when content has been loaded into page, anything of class modal gets grabbed and initialized.

	var modals = document.querySelectorAll('.modal');
	M.Modal.init(modals);

	var items = document.querySelectorAll('.collapsible');
	M.Collapsible.init(items);

});