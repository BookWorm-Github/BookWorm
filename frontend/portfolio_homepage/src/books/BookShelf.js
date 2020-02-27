
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book'

import './bookStyles.css'

class BookShelf extends Component {

  constructor(){
    super();
    this.state = {
      books:[],
      numBksPerShelf:3
    };
  }


  parseShelves(booklist){
    const numShelves = Math.ceil(booklist.length/this.state.numBksPerShelf);

    var shelves = new Array(numShelves);
    for (var k = 0; k < shelves.length; k++) { 
        shelves[k] = new Array(this.state.numBksPerShelf); 
    } 

    // Loop to initilize 2D array elements (books). 
    for (var i = 0; i < numShelves; i++) { 
        for (var j = 0; j < this.state.numBksPerShelf; j++) { 
            var n = j*numShelves+i;
            if(n<booklist.length)
              shelves[i][j] = booklist[n];
            else
              shelves[i][j] = null;   
        } 
    } 
    // this.printShelf(shelves);
    return shelves;

  }

  createBook =(_book,_index) => {

    this.printBook(_index,_book);

    return <Grid key = {_index} item xs zeroMinWidth>
              {_book===null?<div>Someone fix this bug</div>:
                    <Book book ={_book}  />
              }
            </Grid>
  }

  createShelf =(_bookshelf,_index) => {

    const space = 5;
    return <Grid key = {_index} container spacing={5}>
                  {_bookshelf.map(this.createBook)}
                </Grid>
  }

  separateBooksIntoShelves = (shelves,numBooks) =>{
      return shelves.map(this.createShelf)
  }

  render(){
    var booklist = this.props.bks;//array of all books

    var shelves = this.parseShelves(booklist);
    this.printBkList(booklist);
    // var books = booklist.map(this.createBook);
    var books = this.separateBooksIntoShelves(shelves,booklist.length);


    return (
        <div className='book-shelf'> 
           {/*<Grid container spacing={space}>
                  {books}
                </Grid>

              <Grid container spacing={space}>
                <Grid item xs zeroMinWidth>
                  <Book ></Book>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Book ></Book>
                </Grid>
                <Grid item xs zeroMinWidth>
                  
                </Grid>
              </Grid>*/
            }
            
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
export default (BookShelf);