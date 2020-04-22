/*global chrome*/
import React, {Component} from 'react'
import BookShelf from './BookShelf'
import AddBookUI from '../AddBookUI/AddBookUI'
import './bookStyles.css'
import SortBooks from '../sortItems/SortBooks'
import Hotkeys from 'react-hot-keys';
import {deleteBook, deLinkBookfromWindow, storeBook} from "../firebase/firestore/db_functions";
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

		//TODO move the chrome runtime stuff and their callback fns to somewhere more suitable
		chrome.runtime.sendMessage({rq: "urlsForLaunch"}, this._cbForLaunchResponse);
		chrome.runtime.sendMessage({rq: "urlsForWormhole"}, this._cbForWormholeResponse);
		this.handleMessage.bind(this);
	}

	componentDidMount = () => {//updating the user's personal books
		this.setState({bookshelf: this.props.books})
		chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	}

	handleMessage(message, sender, sendResponse){
		if(message.urlsForLaunch != null){
			console.log("App.js got launch urls from background")

			const filteredBook = this.state.bookshelf.map(book => {//find the linked book and then update the Launch for the book
				if( book.key === this.state.linkedBook){
					book.Launch = message.urlsForLaunch;
				}
				return book;
			})

			console.log("updating books after launch: ")
			console.log(filteredBook)

			this.setState({
				bookshelf: filteredBook,
				urlsForLaunch: message.urlsForLaunch
			})

		}
		if(message.urlsForWormhole != null){
			console.log("App.js got launch wormhole from background")

			const filteredBook = this.state.bookshelf.map(book => {//find the linked book and then update the WormHole for the book
				if( book.key === this.state.linkedBook){
					book.WormHole = message.urlsForWormhole;
				}
				return book;
			})

			console.log("updating books after Wormhole: ")
			console.log(filteredBook)

			this.setState({
				bookshelf: filteredBook,
				urlsForWormhole: message.urlsForWormhole
			})

		}

		console.log(this.state.bookshelf);
	}


	_cbForLaunchResponse = (response) => {
		this.setState({
			urlsForLaunch: response.urlsForLaunch
		})

		console.log("state of book after LAUNCH update from background:")

	}

	_cbForWormholeResponse = (response) => {
		this.setState({
			urlsForWormhole: response.urlsForWormhole
		})

		console.log("state of book after WORMHOLE update from background:")
		console.log(this.state.bookshelf);

	}

	/*Methods for adding and deleting books*/
	toggleAddBook = () =>{
		//console.log("Adding book");
		this.setState({addingBook:!this.state.addingBook});
	}

	addBook = (newBook)=> {//gets the newBook from addBookUI /*Every book has title and key, which is the date and linkedwindowId*/
		// deLinking books that may have already linked with this window

		const currWindowId = newBook.linkedWindowId;

		const filteredBooks = this.state.bookshelf.map((book, index, array) => {
			deLinkBookfromWindow(book, currWindowId, this.props.user.uid)
				.then(() => {//delinks the book from window in the database
					book.Launch = null;
					book.WormHole = null;
					book.linkedWindowId = null;
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
			console.log("Adding book success!")
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
		console.log("BookAppMain State is now "+this.state.bookshelf);
		this.state.bookshelf.map((_book, _key) => {
	        return(
	          console.log("Book ("+_book.title+","+_book.key+")")
	        );
		})
	}


	render(){

		return (
			<div>
				{/*Hotkey for dev only, when lots of experimental books are added. take away from final product.*/}
				<Hotkeys keyName = "shift+a" onKeyUp = {this.toggleAddBook}/>
				{/*<button onClick = {this.getURLS}>Get Open Windows</button>*/}
				<div className = 'main-container-center'>

					{/*{console.log("books are: ")};*/}
					{/*{console.log(this.state.bookshelf)};*/}

					<div id = 'blurrable' className = 'book-shelf'>
						<SortBooks books = {this.state.bookshelf} setBooks = {this.setBooks} isBlurred = {this.state.addingBook}/>
						<div className = {this.state.addingBook?'blur-bg':'clear-bg'}>
							<BookShelf bks = {this.state.bookshelf} deleteBook = {this.deleteBook}/>
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

					<button className = 'add-bk-btn' onClick={this.toggleAddBook}><h2>+</h2></button>

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