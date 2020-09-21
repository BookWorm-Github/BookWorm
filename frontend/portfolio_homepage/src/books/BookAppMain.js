/*global chrome*/
import React, {Component} from 'react'
import BookShelf from './BookShelf'
import AddBookUI from '../AddBookUI/AddBookUI'
import './bookStyles.css'
import SortBooks from '../sortItems/SortBooks'
import Hotkeys from 'react-hot-keys';
import {deleteBook, deLinkBookfromWindow, storeBook, updateBookLW} from "../firebase/firestore/db_functions";
import {buildQueries} from '@testing-library/react'
import header from '../Images/header.png';
import setting from '../Images/profile-setting.png';
// import { bw_auth, generateUserDocument } from "../firebase/init.js";
//added hotkeys: https://github.com/jaywcjlove/react-hotkeys#readme

class BookAppMain extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bookshelf: [],
			addingBook: false,
			linkedBook: "", //the current book that is linked to the window
			urlsForLaunch: [],
			urlsForWormhole: [],
			curWinID: -2, //negative random number to denote impossible winID
			searchResults: [], //searchResult needs to be here instead of bookworm in order for the props to be passed to it quickly enough
		};
	}

	setCurWindow = async (response) => {
		console.log("BookAppMain setCurWindow received winID:" + response.windowId);
		await this.setState({
			curWinID: response.windowId
		});
		console.log("CurWinID is set to be " + this.state.curWinID);
	};

	componentDidMount = () => {//updating the user's personal books
		this.setState({
			bookshelf: this.props.books,
			searchResults: this.props.books,
		});
		chrome.runtime.sendMessage({rq: "getCurrWindowId"}, this.setCurWindow);
		// chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	};

	/*Methods for adding and deleting books*/
	toggleAddBook = () => {
		this.setState({addingBook: !this.state.addingBook});
	};

	//Method for switching between displaying sort list and list of books


	//updates the linkedWindow, launch and wormhole of a book in database
	updateBook = (bookToBeUpdated, linkedWindowId, launch, wormhole, shouldClosePortal) => {
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
		});

		updateBookLW(bookToBeUpdated, this.props.user.uid).then(e => {
			if (shouldClosePortal) {
				window.close();
			}
		});


	};

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
	};

	addBook = (newBook) => {//gets the newBook from addBookUI /*Every book has title and key, which is the date and linkedwindowId*/
		// deLinking books that may have already linked with this window

		const currWindowId = newBook.linkedWindowId;

		let filteredBooks = this.state.bookshelf.map((book) => {
			deLinkBookfromWindow(book, currWindowId, this.props.user.uid)
				.then(() => {//delinks the book from window in the database
					// book.Launch = null;
					// book.WormHole = null;
					// book.linkedWindowId = -1;
				});
			return book;
		});

		console.log(newBook);
		//storing the newBook that is linked to the current window
		storeBook(newBook, this.props.user.uid).then(e => {
			this.setState(prevState => ({
				linkedBook: newBook.key,
				bookshelf: [...filteredBooks, newBook],
				searchResults: [...filteredBooks, newBook],
				addingBook: false//this clears the addBookUI
			}));
			console.log("Adding book success!");
		});
	};

	deleteBook = (book) => {
		deleteBook(book, this.props.user.uid).then(() => {
			const filteredBooks = this.state.bookshelf.filter((bk) => {
				return (bk.title !== book.title);
			});
			this.setState({ //This will update the state and trigger a rerender of the components
				bookshelf: filteredBooks
			});
		});
	};

	setBooks = (books) => {
		this.setState({
			bookshelf: books
		});
	};



	filterBooks = (searchTerm) => {
		// Variable to hold the original version of the list
		let currentList = [];
		// Variable to hold the filtered list before putting into state
		let newList = [];

		// If the search bar isn't empty
		if (searchTerm !== "") {
			// Assign the original list to currentList
			currentList = this.state.bookshelf;
			// Use .filter() to determine which items should be displayed
			// based on the search terms
			newList = currentList.filter(item => {
				// change current item to lowercase and searh only the part before the regex
				const filter = searchTerm;
				return item.title.includes(filter)
			});
		} else {
			// If the search bar is empty, set newList to original task list: do we want this effect?
			newList = this.state.bookshelf;
		}
		// Set the filtered state based on what our rules added to newList
		this.setState({
			searchResults: newList
		});
	}

	sortBooksAlphabetically = () => {
		let unsorted = [];
		let sorted = []; //sets up an empty array called unsorted and one called sorted
		unsorted = this.state.bookshelf //sets unsorted to whatever's in bookshelf
		sorted = unsorted.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1); //sorts 'unsorted' alphabetically and sets that equal to sorted
		console.log(sorted);
		this.setState({
			searchResults: sorted,
		});

	}


	sortBooksBackwards = () => {
		let unsorted = [];
		let sorted = []; //sets up an empty array called unsorted and one called sorted
		unsorted = this.state.bookshelf //sets unsorted to whatever's in bookshelf
		sorted = unsorted.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? -1 : 1); //sorts 'unsorted' alphabetically and sets that equal to sorted
		console.log(sorted);
		this.setState({
			searchResults: sorted,
		});

	}

	sortBooksNewest = () => {
		let unsorted = [];
		let sorted = [];
		unsorted = this.state.bookshelf;
		sorted = unsorted.sort((a, b) => (a.key > b.key) ? -1 : 1)
		console.log(sorted);
		this.setState({
			orderedResults: sorted,
		});
	}

	sortBooksOldest = () => {
		let unsorted = [];
		let sorted = [];
		unsorted = this.state.bookshelf;
		sorted = unsorted.sort((a, b) => (a.key > b.key) ? 1 : -1)
		console.log(sorted);
		this.setState({
			orderedResults: sorted,
		});
    }


	render() {
		return (
			<div>
				{/*Hotkey for dev only, when lots of experimental books are added. take away from final product.*/}
				<Hotkeys keyName="shift+a" onKeyUp={this.toggleAddBook}/>
				<div className="header">
					<input type="image" src={header} alt="" id="header-logo"/>
				</div>
				<div className="header">
					<input type="image" src={setting} alt="" onClick={() => console.log('clicked')}/>
				</div>
				<div className={this.state.addingBook ? 'blur-bg' : 'clear-bg'}>

					<BookShelf curWinID={this.state.curWinID} bks={this.state.bookshelf}
					           results={this.state.searchResults} updateBook={this.updateBook}
					           deleteBook={this.deleteBook} delinkBook={this.delinkBook}
					           toggleAddBook={this.toggleAddBook} filterBooks={this.filterBooks}
					           sortBooksAlphabetically={this.sortBooksAlphabetically}
					           sortBooksBackwards={this.sortBooksBackwards}
					           sortBooksNewest={this.sortBooksNewest}
					           sortBooksOldest={this.sortBooksOldest}
					/>
				</div>

				{this.state.addingBook ?
					<div>
						<AddBookUI
							addBook={this.addBook}
							closePopup={this.toggleAddBook}
							bks={this.state.bookshelf}
							urlsForLaunch={this.state.urlsForLaunch}
							urlsForWormhole={this.state.urlsForWormhole}
						/>
					</div>
					:
					<div/>
				}
				<book/>
			</div>
		);
	}

}

export default (BookAppMain);





