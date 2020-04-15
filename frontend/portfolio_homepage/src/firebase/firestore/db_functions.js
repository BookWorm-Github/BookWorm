import {bw_db} from "../init";

export const storeBook = async (book, user_id) => {//takes in a book object and a users special uid to create a book under the uid.
	const bookDataRef = bw_db.collection(`users/${user_id}/bookData`).doc(book.title)

	await bookDataRef.get()
		.then(async snapshot => {//needs to check if the snapshot exists or not
			if (snapshot.exists) {
				console.log("book already exists")
				console.log(snapshot.id)//gets the docs id
				console.log(snapshot.data())//gets the docs data
			} else {//doc.data() here will be undefined in this case
				console.log("initializing book " + book.title)
				await bookDataRef.set({
					key: book.key,
					title: book.title,
					time_created: book.time_created,
					Launch: [],
					WormHole: {}
				})
			}
			return true
		}).catch(e => {
			console.log("Error getting from storing book: " + e)
			return false
		})
}

export const populatePortfolioHomepage = async (user_id) => {//returns an array of book objects for user from firestore.
	console.log("updating portfolio homepage with books from " + user_id)
	let books = []
	const bookDataRef = bw_db.collection(`users/${user_id}/bookData`)
	await bookDataRef.get()
		.then(async (snapshot) => {
			console.log("iterating through bookData")
			await snapshot.docs.forEach(book => {
				books.push(book.data())
			})
				return books
			}, e => {
				return e
			})
	return books
}

export const deleteBook = async (book_title, user_id) => {
	console.log("deleting book " + book_title + " for user: " + user_id)
	const bookDataRef = bw_db.doc(`users/${user_id}/bookData/${book_title}`)
	const book = await bookDataRef.get()
	if(book.data()){
		bookDataRef.delete()
			.then(function() {
				console.log("Document successfully deleted!");
			}).catch(function(error) {
			console.error("Error removing document: ", error);
		});
	}
	else{
		console.log("Book either doesn't exist or unsuspected error")
	}

}

