import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book'
import PropTypes from 'prop-types'
import './bookStyles.css'
import BookNavbar from '../hamburger_bar/BookNavbar';

class BookShelf extends Component {

	constructor(props){
	super(props);
	this.state = {

	  isShowingWormhole:false,
	  books:[],
	  numBksPerShelf:4
	};
	}


	create2DArrayOfBooks(bookList){
	const numShelves = Math.ceil(bookList.length/this.state.numBksPerShelf);

	  const shelfOfBooks = new Array(numShelves);
	  for (let k = 0; k < shelfOfBooks.length; k++) {
	    shelfOfBooks[k] = new Array(this.state.numBksPerShelf);
	}

	// Loop to initialize 2D array elements (books).
	  let debugString = "";
	  for (let i = 0; i < numShelves; i++) {
	    for (let j = 0; j < this.state.numBksPerShelf; j++) {
	        const n = i * this.state.numBksPerShelf + j;
	        if(n<bookList.length){
	          shelfOfBooks[i][j] = bookList[n];
	        }
	        else{
	          shelfOfBooks[i][j] = null;
	        }
	        debugString+=("Shelf ("+i+","+j+") is "+shelfOfBooks[i][j]+"\n");
	    }
	}
	console.log("DEBUG SHELF PARSE of bookList len: "+bookList.length+": "+debugString);
	// this.printShelf(shelfOfBooks);
	return shelfOfBooks;

	}

	createBook =(_book,_index) => {

	// this.printBook(_index,_book);

		return <Grid key = {_index} item xs zeroMinWidth>
			{_book===null?null:
				<div key={_book.key}>
					<BookNavbar book ={_book} deleteBook = {this.deleteBook} />
					{/*<BookNavbar />*/}
					<Book book ={_book} toggleWormhole = {this.toggleWormhole}
					  isShowingWormhole = {this.state.isShowingWormhole} />
				</div>
			}
			</Grid>
	}

	createShelf =(_bookshelf,_index) => {

	const space = 5;
	return <Grid key = {_index} container spacing={space}>
	              {_bookshelf.map(this.createBook)}
	            </Grid>
	}

	separateBooksIntoShelves = (shelfOfBooks,numBooks) =>{
	  return <div>{shelfOfBooks.map(this.createShelf)}</div>
	}

	deleteBook = (_book) =>{
		console.log(_book.title+" Key is "+_book.key);
		this.props.deleteBook(_book)
	}


	render(){
		const bookList = this.props.bks;//array of all books

		const shelfOfBooks = this.create2DArrayOfBooks(bookList);
		// this.printBkList(bookList);
		// var books = bookList.map(this.createBook);
		const books = this.separateBooksIntoShelves(shelfOfBooks, bookList.length);
		// var books = this.divideBooksIntoRows(bookList,bookList.length);


		return (
		    <div className='book-shelf'>

		        {books}
		      </div>

		);
	}


	//print methods for debug
	printBkList(bookList){
		console.log("Printing Book List");
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
		console.log(strBuilder.join(""));
	}

	toggleWormhole = (bool) =>{
		//console.log("Adding book");
		this.setState({isShowingWormhole:bool});
	}

}

BookShelf.propTypes = {
    bks: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
		linkedWindowId: PropTypes.number
    })),
	deleteBook: PropTypes.func.isRequired
  };

export default (BookShelf);