
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
              shelves[i][j] = null   
        } 
    } 
    console.log("Printingshelf");
    for(var x = 0; x<shelves.length; x++){
      console.log(shelves[x].toString());
    }

    return shelves;

  }

  createBook =(_book,_index) => {

    return <Grid key = {_index} item xs zeroMinWidth>
              {_book===null? null:
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
    // var books = booklist.map(this.createBook);
    var books = this.separateBooksIntoShelves(shelves,booklist.length);


    return (
        <div className='container'> 
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

 
}
export default (BookShelf);