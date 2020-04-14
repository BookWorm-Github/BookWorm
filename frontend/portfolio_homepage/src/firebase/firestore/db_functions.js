import {bw_db} from "../init";

export const storeBook = async (book, user) => {
	const bookDataRef = bw_db.collection(`users/${user}/bookData`).doc(book.title)

	return await bookDataRef.get() // returns true if
		.then(async snapshot => {//needs to check if the snapshot exists or not
			if (snapshot.exists) {
				console.log("doc already exists")
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
			console.log("Error getting from document: " + e)
			return false
		})
}