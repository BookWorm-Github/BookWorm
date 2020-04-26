import {bw_db} from "../init";

export const storeBook = async (book, user_id) => {//takes in a book object and a users special uid to create a book under the uid.
	const bookDataRef = bw_db.collection(`users/${user_id}/bookData`).doc(book.key.toString())

	await bookDataRef.get()
		.then(async snapshot => {//needs to check if the snapshot exists or not
			if (snapshot.exists) {
				//console.log("book already exists")
				//console.log(snapshot.id)//gets the docs id
				//console.log(snapshot.data())//gets the docs data
			} else {//doc.data() here will be undefined in this case
				//console.log("initializing book " + book.title)
				await bookDataRef.set({
					title: book.title,
					// time_created: book.time_created,
					linkedWindowId: book.linkedWindowId,
					Launch: book.Launch,
					WormHole: book.WormHole
				})
			}
			return true
		}).catch(e => {
			console.log("Error getting from storing book: " + e)
			return false
		})
}

export const updateBookLW = async (book, user_id) => {
	const bookDataRef = bw_db.collection(`users/${user_id}/bookData`).doc(book.key.toString())
	// alert("updating bk "+book.title+" in database");
	await bookDataRef.get().then(async snapshot => {
		if(snapshot.exists){
			await bookDataRef.update({
					linkedWindowId: book.linkedWindowId,
					Launch: book.Launch,
					WormHole: book.WormHole
			})
			//console.log("database updated book"+book.title+" linked window to be "+bookDataRef.linkedWindowId);
			return true;
		}
		else{
			//console.log("book doesn't exist in database...")
			return false;
		}
	}).catch(e => console.log(e));
	return true;
}


export const populatePortfolioHomepage = async (user_id) => {//returns an array of book objects for user from firestore.
	//console.log("updating portfolio homepage with books from " + user_id)
	let books = []
	const bookDataRef = bw_db.collection(`users/${user_id}/bookData`)
	await bookDataRef.get()
		.then(async (snapshot) => {
			//console.log("iterating through user: " + user_id + " bookData")
			await snapshot.docs.forEach(book => {
				let x = book.data()
				x.key = book.id
				books.push(x)
			})
			return books
		}, e => {
			return e
		})
	return books
}

export const deleteBook = async (bk, user_id) => {
	//console.log("deleting book " + bk.title + " for user: " + user_id)
	const bookDataRef = bw_db.doc(`users/${user_id}/bookData/${bk.key.toString()}`)
	await bookDataRef.get().then(snapshot => {
		bookDataRef.delete().then(function () {
		}).catch(function (error) {
			console.error("Error removing document: ", error);
		})
	})
}

export const deLinkBookfromWindow = async (bk, currWindowId, user_id) => {//update the book with the linked window id
	if (bk.linkedWindowId === currWindowId) {
		let bookDataRef = bw_db.doc(`users/${user_id}/bookData/${bk.key.toString()}`);
		bookDataRef.get().then(async snapshot => {
			if(snapshot.exists){
				await bookDataRef.update({
					// Launch: null,
					// WormHole: null,
					linkedWindowId: -132
				}).then(() => {
					//console.log("Delinked successful for " + bk.title + " and window " + currWindowId);
				}).catch(error => {
					console.error("error updating book with delinking: ", error);
				})
			}
		})

	}
}

