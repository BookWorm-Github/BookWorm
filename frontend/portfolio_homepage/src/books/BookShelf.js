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
		this.setState({
			searchResults: this.props.bks,
		});
		console.log(this.props.bks)
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
		this.props.filterBooks(searchTerm);
		e.preventDefault();
	};

	toggleSortBooks = (e) => {
		this.setState({sortingBooks: !this.state.sortingBooks});
		e.preventDefault();
	};

	
	sortBooksAlphabetically = () => {
		this.props.sortBooksAlphabetically();
		this.toggleSortBooks();
	}

	sortBooksBackwards = () => {
		this.props.sortBooksBackwards();
		this.toggleSortBooks();
	}

	sortBooksNewest = () => {
		this.props.sortBooksNewest();
		this.toggleSortBooks();
	}

	sortBooksOldest = () => {
		this.props.sortBooksOldest();
		this.toggleSortBooks();
	}




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
							<DefaultList results={this.props.results} toggleAddBook={this.props.toggleAddBook} 
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
