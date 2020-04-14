import {bw_db} from "../init";
import React from "react";

export const storeBook = async (book, user) => {
	const bookDataRef = bw_db.collection(`users/${user.uid}/bookData`).doc(book.title)
	await bookDataRef.get()
		.then(async snapshot => {//needs to check if the snapshot exists or not
			if(snapshot.exists){
				console.log(snapshot.id)//gets the docs id
				console.log(snapshot.data())//gets the docs data
			}
			else{//doc.data() here will be undefined in this case
				await bookDataRef.set({
					key: book.key,
					title: book.title,
					time_created: book.time_created,
					Launch: ['testy'],
					WormHole: {
						test: 123,
						string: "possible?"
					}
				})
			}
		}).catch(e => {
			console.log("Error getting from document: " + e)
		})

	return true
}