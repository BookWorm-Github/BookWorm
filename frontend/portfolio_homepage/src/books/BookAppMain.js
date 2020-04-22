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
		console.log("App.js got response from background.js")
		if(message.urlsForLaunch != null){
			console.log("App.js got launch urls from background")

			this.setState({urlsForLaunch: message.urlsForLaunch})
		}
		if(message.urlsForWormhole != null){
			console.log("App.js got launch wormhole from background")
			this.setState({urlsForWormhole: message.urlsForWormhole})

		}
	}


	_cbForLaunchResponse = (response) => {

		this.setState({urlsForLaunch: response.urlsForLaunch})

	}

	_cbForWormholeResponse = (response) => {

		this.setState({urlsForWormhole: response.urlsForWormhole})

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
					book.linkedWindowId = null;
					if (array[index] === array.length - 1) {//if the last element in the array has been processed and delinked...

					}
				}).catch(e => {
				console.log(e);
			});

			return book;
		});

		//storing the newBook that is linked to the current window
		storeBook(newBook, this.props.user.uid).then(e => {
			this.setState(prevState => ({
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


				</div>
			</div>
		);
	}

}
export default (BookAppMain);