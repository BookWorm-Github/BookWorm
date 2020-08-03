import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book';
import PropTypes from 'prop-types';
import Search from '../Images/search.png';
import hamburger from '../Images/filter.png';
import './bookStyles.css'
// import BookNavbar from '../hamburger_bar/BookNavbar';

class BookShelf extends Component {

	constructor(props){
		super(props);
		this.state = {
			isShowingWormhole:-1, //isShowingWormhole is the ID of the book from which the wormhole is toggled
			titles:[]
		};
	}
	createBook =(_book,_index) => {

		// this.printBook(_index,_book);
		console.log("CurWinID in BookShelf is "+this.props.curWinID);
			return (
				<Grid key = {_index} item xs zeroMinWidth>
					{_book===null?null:
						<div key={_book.key}>
							{/*<BookNavbar book = {_book} deleteBook = {this.deleteBook} updateBook = {this.props.updateBook} delinkBook={this.props.delinkBook}/>*/}
							<Book book ={_book} deleteBook = {this.deleteBook} updateBook = {this.props.updateBook} delinkBook={this.props.delinkBook} toggleWormhole = {this.toggleWormhole}
							  isShowingWormhole = {this.state.isShowingWormhole} isCurrentWindow = {this.props.curWinID===_book.linkedWindowId} />
						</div>
					}
				</Grid>
			)
	};

	deleteBook = (_book) =>{

		//console.log(_book.title+" Key is "+_book.key);
		this.props.deleteBook(_book)
	};

	filterBooks = (e) =>{

		const searchTerm = e.target.value;
		this.props.filterBooks(searchTerm);
		e.preventDefault();
	};

	render(){
		// this.printBkList(bookList);
		// var books = bookList.map(this.createBook);
		//const books = this.separateBooksIntoShelves(shelfOfBooks, bookList.length);
		// var books = this.divideBooksIntoRows(bookList,bookList.length);
		return (
			<div>
				<div className='mybooks'>
					<h1 id='bkshlf-h1'>My books</h1>

					<form id="searchTerm" >
	                    <input className="search" type="text" onChange={this.filterBooks} placeholder="Search" />
						<img src = {Search} alt="search icon" height="20" width="20" className="searchicon"/>
						<input type='image' src={hamburger} alt="filter button" height="30px" width="30px" id = "hamburger"/>
	                </form>

				    <div className='book-shelf'>
						<div className='scrolled'>
							<ul>
								{this.props.results.map((bookListItem) => <li>{bookListItem.title} </li>)}
							</ul>
						</div>
						<br/>
						<br/>
						<button className = 'add-bk-btn' onClick={this.props.toggleAddBook}><h1 className='Plus'>+</h1></button>
				    </div>
				</div>
		    </div>

		);
	}

	filterBooks2 = (e) => {
		let newBookList;
		let oldBookList;
		oldBookList = this.props.bks.titles;
		const searchTerm = e.target.value;
		console.log("searchTerm: " + {searchTerm});
		newBookList = oldBookList.filter(item => {
			const lc = item.toLowerCase();
			return lc.includes(searchTerm)});
		console.log("newBookList: " + {newBookList});
	}

	/*filterBooks = (e) =>{
		//function borrowed from wormhole.js, see wormhole.js for more information
		//Variable to hold the original version of the list
    let currentList = [];
	// Variable to hold the filtered list before putting into state
	let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.bks.titles;
      console.log("currentList: " + {currentList});
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase, took out searh only the part before the regex
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list: do we want this effect?
      newList = currentList
    }
    //TODO: Add console message

	return newList;
  }*/

	//print methods for debug
	printBkList(bookList){
		//console.log("Printing Book List");
		for(let x = 0; x<bookList.length; x++){
		    const jsonObj = bookList[x];
		    this.printBook(x,jsonObj);
		}
	}
	printBook(x,jsonObj){
		const strBuilder = [];
		strBuilder.push("Item "+x+": ");
		for(const key in jsonObj){
		    if (jsonObj.hasOwnProperty(key)) {
		         strBuilder.push(""+jsonObj[key]+",");
		    }
		    else{strBuilder.push("Null")}
		}
		//console.log(strBuilder.join(""));
	}

	toggleWormhole = (book_key) =>{
		//console.log("Adding book");
		this.setState({isShowingWormhole:book_key});
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
