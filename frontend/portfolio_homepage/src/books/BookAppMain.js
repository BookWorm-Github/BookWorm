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
			urlsForWormhole:[],
			curWinID: -2 //random number to denote impossible winID
		};

		chrome.runtime.sendMessage({rq: "getCurrWindowId"}, this.setCurWindow);
	}
	setCurWindow = async (response) =>{
		console.log("BookAppMain setCurWindow received winID:"+response.windowId);
		await this.setState({
			curWinID: response.windowId
		})
		console.log("CurWinID is set to be "+this.state.curWinID);
	}

	componentDidMount = () => {//updating the user's personal books
		this.setState({
			bookshelf: this.props.books
		});
		chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	}

	handleMessage(message, sender, sendResponse){
		console.log("BookAppMain received msg from bckgrnd with winID"+message.winId);
		console.log("urls from wormhole: ");
		console.log(message.urlsForWormhole);
		console.log(this.state.urlsForWormhole);
		let i;
		let currBook = null;
		// this.setState({curWinID:message.winId})
		for (i = 0; i < this.state.bookshelf.length; i++) {
		  if(message.winId===this.state.bookshelf[i].linkedWindowId){//if message window id matches book window id

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

	/*Methods for adding and deleting books*/
	toggleAddBook = () =>{
		////console.log("Adding book");
		this.setState({addingBook:!this.state.addingBook});
	}

	//updates teh linkedWindow, launch and wormhole of a book in database
	updateBook = (bookToBeUpdated, linkedWindowId, launch, wormhole,shouldCloseWindow) => {

		let updatedBooks = this.state.bookshelf.map(function (book, putInDataBase) {//find the linked book and then update the WormHole for the book
			if (book.key === bookToBeUpdated.key) {
				book.linkedWindowId = linkedWindowId;
				book.WormHole = wormhole;
				book.Launch = launch;
			}
			return book;
		});
		bookToBeUpdated.linkedWindowId = linkedWindowId;
		bookToBeUpdated.WormHole = wormhole;
		bookToBeUpdated.Launch = launch;

		this.setState({
			bookshelf: updatedBooks
		})

		updateBookLW(bookToBeUpdated, this.props.user.uid).then(e => {
			if(shouldCloseWindow){
				window.close();
			}
		});
		

	}

	delinkBook = (currWindowId) => {//delinks all the books in bookshelf that have the same windowId as the current one
		//TODO: delink doesn't work on the last book in the bookshelf...
		const filteredBooks = this.state.bookshelf.map((book, index, array) => {
			deLinkBookfromWindow(book, currWindowId, this.props.user.uid)
				.then(() => {//delinks the book from window in the database
					// book.Launch = null;
					// book.WormHole = null;
					// book.linkedWindowId = -1;
				});
			return book;
		});

		this.setState({
			bookshelf: filteredBooks
		})
	}

	addBook = (newBook)=> {//gets the newBook from addBookUI /*Every book has title and key, which is the date and linkedwindowId*/
		// deLinking books that may have already linked with this window

		const currWindowId = newBook.linkedWindowId;

		let filteredBooks = this.state.bookshelf.map((book, index, array) => {
			deLinkBookfromWindow(book, currWindowId, this.props.user.uid)
				.then(() => {//delinks the book from window in the database
					// book.Launch = null;
					// book.WormHole = null;
					// book.linkedWindowId = -1;

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
		            <button className = 'add-bk-btn' onClick={this.toggleAddBook}><h1 className='Plus'>+</h1></button>
		          </span>
		          </ul>
			        <div className = {this.state.addingBook?'blur-bg':'clear-bg'}>
				        <BookShelf curWinID={this.state.curWinID} bks = {this.state.bookshelf} updateBook = {this.updateBook} deleteBook = {this.deleteBook} delinkBook={this.delinkBook}/>
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