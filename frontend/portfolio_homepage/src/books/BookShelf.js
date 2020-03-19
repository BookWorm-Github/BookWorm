
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book'

import PropTypes from 'prop-types'

import './bookStyles.css'

import BookNavbar from '../hamburger_bar/BookNavbar'
class BookShelf extends Component {

  constructor(){
    super();
    this.state = {
      books:[],
      numBksPerShelf:3
    };
  }


  create2DArrayOfBooks(booklist){
    const numShelves = Math.ceil(booklist.length/this.state.numBksPerShelf);

    var shelfOfBooks = new Array(numShelves);
    for (var k = 0; k < shelfOfBooks.length; k++) { 
        shelfOfBooks[k] = new Array(this.state.numBksPerShelf); 
    } 

    // Loop to initilize 2D array elements (books). 
    var debugString = "";
    for (var i = 0; i < numShelves; i++) { 
        for (var j = 0; j < this.state.numBksPerShelf; j++) { 
            var n = i*this.state.numBksPerShelf+j;
            if(n<booklist.length){
              shelfOfBooks[i][j] = booklist[n];
            }
            else{
              shelfOfBooks[i][j] = null;   
            }
            debugString+=("Shelf ("+i+","+j+") is "+shelfOfBooks[i][j]+"\n");
        }
    } 
    console.log("DEBUG SHELF PARSE of booklist len: "+booklist.length+": "+debugString);
    // this.printShelf(shelfOfBooks);
    return shelfOfBooks;

  }

  createBook =(_book,_index) => {

    // this.printBook(_index,_book);

    return <Grid key = {_index} item xs zeroMinWidth>
              {_book===null?null:
                      <div key={_book.key}>
                          <BookNavbar book ={_book} deleteBook = {this.deleteBook} />
                          {/*<button onClick={() => this.deleteBook(_book)}>Delete Book</button>*/}
                        <Book book ={_book} />
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
    console.log(_book.title+" Key is "+_book.key); this.props.deleteBook(_book.key)
  }


  render(){
    var booklist = this.props.bks;//array of all books

    var shelfOfBooks = this.create2DArrayOfBooks(booklist);
    // this.printBkList(booklist);
    // var books = booklist.map(this.createBook);
    var books = this.separateBooksIntoShelves(shelfOfBooks,booklist.length);
    // var books = this.divideBooksIntoRows(booklist,booklist.length);


    return (
        <div className='book-shelf'> 
          
            {books}
          </div>

    );
  }


  //print methods for debug
  printBkList(booklist){
     console.log("Printing Book List");
    for(var x = 0; x<booklist.length; x++){
      var jsonObj = booklist[x];
      this.printBook(x,jsonObj);
    }
  }
  printBook(x,jsonObj){
       var strBuilder = [];
       strBuilder.push("Item "+x+": ");
        for(var key in jsonObj){
            if (jsonObj.hasOwnProperty(key)) {
                 strBuilder.push(""+jsonObj[key]+",");
            }
            else{strBuilder.push("Null")}
        }
      console.log(strBuilder.join(""));
  }


 
}


BookShelf.propTypes = {
    bks: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        title: PropTypes.string.isRequired

      })),
     deleteBook: PropTypes.func.isRequired
  };

export default (BookShelf);