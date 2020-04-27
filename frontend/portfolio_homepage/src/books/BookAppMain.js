/*global chrome*/
import React, {Component} from 'react'
import BookShelf from './BookShelf'
import AddBookUI from '../AddBookUI/AddBookUI'
import './bookStyles.css'
import SortBooks from '../sortItems/SortBooks'
import { bw_auth, generateUserDocument } from "../firebase/init.js";
import Hotkeys from 'react-hot-keys';
import {deleteBook, deLinkBookfromWindow, storeBook, updateBookLW} from "../firebase/firestore/db_functions";
//added hotkeys: https://github.com/jaywcjlove/react-hotkeys#readme

class BookAppMain extends Component {

	constructor(props){
		super(props);
		this.state = {
			bookshelf: [],
			addingBook: false,
			linkedBook: "", //the current book that is linked to the window
			urlsForLaunch:[],
			urlsForWormhole:[]
		};

		// //TODO move the chrome runtime stuff and their callback fns to somewhere more suitable
		// chrome.runtime.sendMessage({rq: "urlsForLaunch"}, this._cbForLaunchResponse);
		// chrome.runtime.sendMessage({rq: "urlsForWormhole"}, this._cbForWormholeResponse);
		// this.handleMessage.bind(this);
	}

	componentDidMount = () => {//updating the user's personal books
		this.setState({bookshelf: this.props.books})
		chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	}

	handleMessage(message, sender, sendResponse){
		console.log("BookAppMain received msg from bckgrnd with winID"+message.winId);
		var i; var currBook = null;
		for (i = 0; i < this.state.bookshelf.length; i++) {
		  if(message.winId==this.state.bookshelf[i].linkedWindowId){

			currBook = this.state.bookshelf[i];
			console.log("handled msg for "+currBook.title);
			}
		}
		if(currBook!==null){ //if there is bk to b updated
			//update lauch
			if(message.urlsForLaunch&&message.urlsForLaunch.length){//if launch urls are not empty
				this.updateBook(currBook,currBook.linkedWindowId,message.urlsForLaunch,currBook.WormHole);
				console.log("book "+currBook.title+"updated launch to be "+message.urlsForLaunch);
			}
			if(message.urlsForWormhole&&message.urlsForWormhole.length){//if launch urls are not empty
				this.updateBook(currBook,currBook.linkedWindowId,currBook.Launch,message.urlsForWormhole);
				console.log("book "+currBook.title+"updated wormhole to be "+message.urlsForWormhole);
			}



		}
		else{
			console.log("bkappmain: no linkld book with id "+message.winId+ "found");
		}

	}

	// handleMessage(message, sender, sendResponse){
	// 	if(message.urlsForLaunch != null){
	// 		//console.log("App.js got launch urls from background")

	// 		const filteredBook = this.state.bookshelf.map(book => {//find the linked book and then update the Launch for the book
	// 			if( book.linkedWindowId === message.winId){
	// 				book.Launch = message.urlsForLaunch;
	// 				updateBookLW(book, this.props.user.uid).then(() => //console.log("launch in db successfully updated"));
	// 			}
	// 			return book;
	// 		})

	// 		//console.log("updating books after launch: ")
	// 		//console.log(filteredBook)

	// 		this.setState({
	// 			bookshelf: filteredBook,
	// 			urlsForLaunch: message.urlsForLaunch
	// 		})

	// 	}
	// 	if(message.urlsForWormhole != null){
	// 		//console.log("App.js got launch wormhole from background")

	// 		const filteredBook = this.state.bookshelf.map(book => {//find the linked book and then update the WormHole for the book
	// 			if( book.linkedWindowId === message.winId){
	// 				book.WormHole = message.urlsForWormhole;
	// 				updateBookLW(book, this.props.user.uid).then(() => //console.log("wormhole in db successfully updated"));
	// 			}
	// 			return book;
	// 		});

	// 		//console.log("updating books after Wormhole: ")
	// 		//console.log(filteredBook)

	// 		this.setState({
	// 			bookshelf: filteredBook,
	// 			urlsForWormhole: message.urlsForWormhole
	// 		})

	// 	}

	// 	//console.log(this.state.bookshelf);
	// }


	// _cbForLaunchResponse = (response) => {
	// 	this.setState({
	// 		urlsForLaunch: response.urlsForLaunch
	// 	})

	// 	//console.log("state of book after LAUNCH update from background:")

	// }

	// _cbForWormholeResponse = (response) => {
	// 	this.setState({
	// 		urlsForWormhole: response.urlsForWormhole
	// 	})

	// 	//console.log("state of book after WORMHOLE update from background:")
	// 	//console.log(this.state.bookshelf);

	// }

	/*Methods for adding and deleting books*/
	toggleAddBook = () =>{
		////console.log("Adding book");
		this.setState({addingBook:!this.state.addingBook});
	}
	//updates teh linkedWindow, launch and wormhole of a book in database
	updateBook = (bookToBeUpdated, linkedWindowId, launch, wormhole) =>{

		let updatedBooks = this.state.bookshelf.map(function(book, putInDataBase) {//find the linked book and then update the WormHole for the book
			if( book.key == bookToBeUpdated.key){
				book.linkedWindowId = linkedWindowId;
				book.WormHole = wormhole;
				book.Launch = launch;
			}
			return book;
		});
		bookToBeUpdated.linkedWindowId = linkedWindowId;
		bookToBeUpdated.WormHole = wormhole;
		bookToBeUpdated.Launch = launch;


		updateBookLW(bookToBeUpdated, this.props.user.uid).then(e => {

		});
		this.setState({
			bookshelf:updatedBooks
		})

	}

	addBook = (newBook)=> {//gets the newBook from addBookUI /*Every book has title and key, which is the date and linkedwindowId*/
		// deLinking books that may have already linked with this window

		const currWindowId = newBook.linkedWindowId;

		const filteredBooks = this.state.bookshelf.map((book, index, array) => {
			deLinkBookfromWindow(book, currWindowId, this.props.user.uid)
				.then(() => {//delinks the book from window in the database
					// book.Launch = null;
					// book.WormHole = null;
					// book.linkedWindowId = -1001;
				});

			return book;
		});

		//storing the newBook that is linked to the current window
		storeBook(newBook, this.props.user.uid).then(e => {
			this.setState(prevState => ({
				linkedBook: newBook.key,
				bookshelf: [...filteredBooks, newBook],
				addingBook: false//this clears the addBookUI
			}));
			//console.log("Adding book success!")
		});
	}

	deleteBook = (book) => {
		deleteBook(book, this.props.user.uid).then(() => {
		    const filteredBooks = this.state.bookshelf.filter((bk) => {
				    return (bk.title !== book.title);
		    });
		    this.setState({ //This will update the state and trigger a rerender of the components
			    bookshelf: filteredBooks
		    });
		});
	}

	setBooks = (books) => {
		this.setState({
		  bookshelf: books
		});
	}

	debugBkShelf = () => {
		//console.log("BookAppMain State is now "+this.state.bookshelf);
		// this.state.bookshelf.map((_book, _key) => {
	 //        return(
	 //          //console.log("Book ("+_book.title+","+_book.key+")")
	 //        );
		// })
	}


	render(){

		return (
			<div>
				{/*Hotkey for dev only, when lots of experimental books are added. take away from final product.*/}
				<Hotkeys keyName = "shift+a" onKeyUp = {this.toggleAddBook}/>
				{/*<button onClick = {this.getURLS}>Get Open Windows</button>*/}
				<div className = 'main-container-center'>

        <div id = 'blurrable' className = 'book-shelf'>
          <ul id = 'topLine'>
			
	          <SortBooks books = {this.state.bookshelf} setBooks = {this.setBooks} isBlurred = {this.state.addingBook}/>
	          <span className = 'add-btn-container'>
            <h6 id = 'add'>Add book: </h6>
            <button className = 'add-bk-btn' onClick={this.toggleAddBook}><h2>+</h2></button>
			</span>
			<button className = 'signoutbutton'  onClick = {() => {
						        bw_auth.signOut().then(() => {
								        //console.log("Logged out successful")
								        this.setState({
									        user: null
								        })
							        },
							        onRejected => {
								        //console.log("log out unsuccessful")
								        //console.log(onRejected)
							        }
						        )
					        }
					        }>Sign Out</button>
         
          </ul>
	        <div className = {this.state.addingBook?'blur-bg':'clear-bg'}>
		        <BookShelf bks = {this.state.bookshelf} updateBook = {this.updateBook} deleteBook = {this.deleteBook}/>
	        </div>
        </div>

					{this.state.addingBook?
						<div>
							<AddBookUI
								addBook = {this.addBook}
								closePopup={this.toggleAddBook}
								bks = {this.state.bookshelf}
								urlsForLaunch={this.state.urlsForLaunch}
								urlsForWormhole={this.state.urlsForWormhole}
							/>
						</div>
						:
						<div/>
					}

				

					{/*<h2>URLs for Wormhole</h2>*/}
					{/*<ul>*/}
					{/*	{ this.state.urlsForWormhole.map(title => <li>{title}</li>)}*/}
					{/*</ul>*/}

					{/*<h2>URLs for Launch</h2>*/}
					{/*<ul>*/}
					{/*	{ this.state.urlsForLaunch.map(title => <li>{title}</li>)}*/}
					{/*</ul>*/}

				</div>
			</div>
		);
	}

}
export default (BookAppMain);