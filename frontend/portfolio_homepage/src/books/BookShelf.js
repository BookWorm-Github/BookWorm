import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book';
import PropTypes from 'prop-types';
import Search from '../Images/search.png';
import hamburger from '../Images/filter.png';
import './bookStyles.css'
import SortButton from '../SortButton';
import SortBooks from '../sortItems/SortBooks';
import DefaultList from './DefaultList';
import SortList from './SortList';

// import BookNavbar from '../hamburger_bar/BookNavbar';

class BookShelf extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isShowingWormhole: -1, //isShowingWormhole is the ID of the book from which the wormhole is toggled
			sortingBooks: false,
			titles: [],
			searchResults: [],
		};
	}

	


	
	
	componentDidMount = () => {//updating the user's personal books
	//waiting 1 ms before setting state gives time for props to be updated
	setTimeout(() => {this.setState({
		searchResults: this.props.bks,
	});
	console.log(this.props.bks);
	console.log(this.state.searchResults);
	}, 1);	
	};


	createBook = (_book, _index) => { 

		// this.printBook(_index,_book);
		console.log("CurWinID in BookShelf is " + this.props.curWinID);
		return (
			<Grid key={_index} item xs zeroMinWidth>
				{_book === null ? null :
					<div key={_book.key}>
						{/*<BookNavbar book = {_book} deleteBook = {this.deleteBook} updateBook = {this.props.updateBook} delinkBook={this.props.delinkBook}/>*/}
						<Book book={_book} deleteBook={this.deleteBook} updateBook={this.props.updateBook}
						      delinkBook={this.props.delinkBook} toggleWormhole={this.toggleWormhole}
						      isShowingWormhole={this.state.isShowingWormhole}
						      isCurrentWindow={this.props.curWinID === _book.linkedWindowId}/>
					</div>
				}
			</Grid>
		)
	};

	deleteBook = (_book) => {

		//console.log(_book.title+" Key is "+_book.key);
		this.props.deleteBook(_book)

	};

	

	filterBooks = (e) => {
		const searchTerm = e.target.value;
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
		e.preventDefault();
	};

	toggleSortBooks = (e) => {
		this.setState({sortingBooks: !this.state.sortingBooks});
		e.preventDefault();
	};

	
	sortBooksAlphabetically = () => {
		let unsorted = []; 
		let sorted = []; //sets up an empty array called unsorted and one called sorted
        unsorted = this.state.bookshelf //sets unsorted to whatever's in bookshelf
        sorted = unsorted.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ?1: -1); //sorts 'unsorted' alphabetically and sets that equal to sorted
        console.log(sorted);
        this.setState({ 
		  	searchResults: sorted,
		});
		this.toggleSortBooks();
	}

	sortBooksBackwards = () => {
		let unsorted = []; 
		let sorted = []; //sets up an empty array called unsorted and one called sorted
        unsorted = this.state.bookshelf //sets unsorted to whatever's in bookshelf
        sorted = unsorted.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? -1: 1); //sorts 'unsorted' alphabetically and sets that equal to sorted
        console.log(sorted);
        this.setState({ 
		  	searchResults: sorted,
		});
		this.toggleSortBooks();
	}

	sortBooksNewest = () => {
		let unsorted = [];
		let sorted = [];
        unsorted=this.state.bookshelf;
        sorted = unsorted.sort((a,b) => (a.key > b.key) ? -1: 1)
        console.log(sorted);
        this.setState({
			orderedResults: sorted,
		});
		this.toggleSortBooks();
	}

	sortBooksOldest = () => {
		let unsorted = [];
		let sorted = [];
        unsorted=this.state.bookshelf;
        sorted = unsorted.sort((a,b) => (a.key > b.key) ? 1: -1)
        console.log(sorted);
        this.setState({
			orderedResults: sorted,
		});
		this.toggleSortBooks();
	}



/*	filterBooks = (searchTerm) => {
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
        sorted = unsorted.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ?1: -1); //sorts 'unsorted' alphabetically and sets that equal to sorted
        console.log(sorted);
        this.setState({ 
		  	searchResults: sorted,
		});

	}
	

	sortBooksBackwards = () => {
		let unsorted = []; 
		let sorted = []; //sets up an empty array called unsorted and one called sorted
        unsorted = this.state.bookshelf //sets unsorted to whatever's in bookshelf
        sorted = unsorted.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? -1: 1); //sorts 'unsorted' alphabetically and sets that equal to sorted
        console.log(sorted);
        this.setState({ 
		  	searchResults: sorted,
		});

	}

	sortBooksNewest = () =>{
		let unsorted = [];
		let sorted = [];
        unsorted=this.state.bookshelf;
        sorted = unsorted.sort((a,b) => (a.key > b.key) ? -1: 1)
        console.log(sorted);
        this.setState({
			orderedResults: sorted,
		});
    }

	sortBooksOldest = () =>{
		let unsorted = [];
		let sorted = [];
        unsorted=this.state.bookshelf;
        sorted = unsorted.sort((a,b) => (a.key > b.key) ? 1: -1)
        console.log(sorted);
        this.setState({
			orderedResults: sorted,
		});
	}
	
*/

	render() {
		// this.printBkList(bookList);
		// var books = bookList.map(this.createBook);
		//const books = this.separateBooksIntoShelves(shelfOfBooks, bookList.length);
		// var books = this.divideBooksIntoRows(bookList,bookList.length);
		return (
			<div>
				<div className='mybooks'>
					<div className='h1Container'>
						<h1 id='bkshlf-h1'>My books</h1>
					</div>
					<form id="searchTerm">
						<input className="search" type="text" onChange={this.filterBooks} placeholder="Search"/>
						<img src={Search} alt="search icon" height="20" width="20" className="searchicon"/>
						<SortButton toggleSortBooks={this.toggleSortBooks}/>
					</form>

					{this.state.sortingBooks ?
						<div >
							<SortList sortBooksAlphabetically={this.sortBooksAlphabetically}
								sortBooksBackwards={this.sortBooksBackwards}
								sortBooksNewest={this.sortBooksNewest}
								sortBooksOldest={this.sortBooksOldest}/>
						</div>
						:
						<div className='resultsList'>
							<DefaultList results={this.state.searchResults} toggleAddBook={this.props.toggleAddBook} 
										updateBook={this.props.updateBook}/>
						</div>
							
					}
				</div>
			</div>

		);
	}

	

	
	//print methods for debug
	printBkList(bookList) {
		//console.log("Printing Book List");
		for (let x = 0; x < bookList.length; x++) {
			const jsonObj = bookList[x];
			this.printBook(x, jsonObj);
		}
	}

	printBook(x, jsonObj) {
		const strBuilder = [];
		strBuilder.push("Item " + x + ": ");
		for (const key in jsonObj) {
			if (jsonObj.hasOwnProperty(key)) {
				strBuilder.push("" + jsonObj[key] + ",");
			} else {
				strBuilder.push("Null")
			}
		}
		//console.log(strBuilder.join(""));
	}

	toggleWormhole = (book_key) => {
		//console.log("Adding book");
		this.setState({isShowingWormhole: book_key});
	}
}

BookShelf.propTypes = {
	bks: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		linkedWindowId: PropTypes.number,
		Launch: PropTypes.array.isRequired,
		WormHole: PropTypes.array.isRequired
	})),
	deleteBook: PropTypes.func.isRequired,

	updateBook: PropTypes.func.isRequired,
	curWinID: PropTypes.number.isRequired
};

export default (BookShelf);
