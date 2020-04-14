import {bw_db} from "../init";
import React from "react";

export const storeBook = async (book, user) => {
	const userRef = await bw_db.collection(`users/${user.uid}/bookData`).doc(book.title).get()
		.then(snapshot => {
			console.log(snapshot.id)//gets the docs id
			console.log(snapshot.data())//gets the docs data
		})
	await bw_db.collection(`users/${user.uid}/bookData`).doc(book.title).set({
		key: book.key,
		title: book.title,
		time_created: book.time_created,
		Launch: ['testy'],
		WormHole: {
			test: 123,
			string: "possible?"
		}
	})

	return true
}