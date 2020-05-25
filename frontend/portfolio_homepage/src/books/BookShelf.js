import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book'
import PropTypes from 'prop-types'
import './bookStyles.css'
import WindowResizer from '../WindowResizer/WindowResizer'
// import BookNavbar from '../hamburger_bar/BookNavbar';

class BookShelf extends Component {

	constructor(props){
		super(props);
		this.state = {
			isShowingWormhole:-1, //isShowingWormhole is the ID of the book from which the wormhole is toggled
      		searchResults:[],
			numBksPerShelf:4,
			spaceBtwnBooks: 9,
		};
	}
	componentDidMount(){
		this.setState(
		{
			spaceBtwnBooks: 10
		}
		)
	}

	create2DArrayOfBooks(bookList){
		const numShelves = Math.ceil(bookList.length/this.state.numBksPerShelf);
			if(numShelves>=0){
				const shelfOfBooks = new Array(numShelves);
				for (let k = 0; k < numShelves; k++) {
					shelfOfBooks[k] = new Array(this.state.numBksPerShelf);
				}

				// Loop to initialize 2D array elements (books).
				// let debugString = "";
				for (let i = 0; i < numShelves; i++) {
					for (let j = 0; j < this.state.numBksPerShelf; j++) {
					    const n = i * this.state.numBksPerShelf + j;
					    if(n<bookList.length){
					      shelfOfBooks[i][j] = bookList[n];
					    }
					    else{
					      shelfOfBooks[i][j] = null;
					    }
					    // debugString+=("Shelf ("+i+","+j+") is "+shelfOfBooks[i][j]+"\n");
					}
				}
				// //console.log("DEBUG SHELF PARSE of bookList len: "+bookList.length+": "+debugString);
				// this.printShelf(shelfOfBooks);
				return shelfOfBooks;
			}
			else return [];
	}

	createBook =(_book,_index) => {

		// this.printBook(_index,_book);
		console.log("CurWinID in BookShelf is "+this.props.curWinID);
			return <Grid key = {_index} item xs zeroMinWidth>
				{_book===null?null:
					<div key={_book.key}>
						{/*<BookNavbar book = {_book} deleteBook = {this.deleteBook} updateBook = {this.props.updateBook} delinkBook={this.props.delinkBook}/>*/}
						<Book book ={_book} deleteBook = {this.deleteBook} updateBook = {this.props.updateBook} delinkBook={this.props.delinkBook} toggleWormhole = {this.toggleWormhole}
						  isShowingWormhole = {this.state.isShowingWormhole} isCurrentWindow = {this.props.curWinID===_book.linkedWindowId} />
					</div>
				}
				</Grid>
	};

	createShelf =(_bookshelf,_index) => {
		return (
			<Grid key = {_index} container spacing={this.state.spaceBtwnBooks}>
				{_bookshelf.map(this.createBook)}
			</Grid>
		)
	};

	separateBooksIntoShelves = (shelfOfBooks,numBooks) =>{
		return <div>{shelfOfBooks.map(this.createShelf)}</div>
	};

	deleteBook = (_book) =>{
		//console.log(_book.title+" Key is "+_book.key);
		this.props.deleteBook(_book)
	};

	render(){
		const bookList = this.props.bks;//array of all books

		const shelfOfBooks = this.create2DArrayOfBooks(bookList);
		// this.printBkList(bookList);
		// var books = bookList.map(this.createBook);
		const books = this.separateBooksIntoShelves(shelfOfBooks, bookList.length);
		// var books = this.divideBooksIntoRows(bookList,bookList.length);


		return (
			<div>
				<WindowResizer setNumBksPerShelf = {this.setNumBooksPerShelf} />
			    <div className='book-shelf'>
			        {books}
			    </div>
		    </div>

		);
	}

	setNumBooksPerShelf = (num) =>{
		this.setState({
			numBksPerShelf:num
		});
	};


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