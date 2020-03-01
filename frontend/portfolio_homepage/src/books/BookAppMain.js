
import React, {Component} from 'react'
import BookShelf from './BookShelf'
/*Testing branch*/
import AddBookUI from '../AddBookUI/AddBookUI'
import './bookStyles.css'

class BookAppMain extends Component {

  constructor(){
    super();
    this.state = {
      bookshelf: [],
      addingBook: false,

    };
  }

  render(){

    return (
      
      <div className = 'main-container-center'>
      
        <div id = 'blurrable' className = 'book-shelf'>
          <div className = {this.state.addingBook?'blur-bg':'clear-bg'}>
            <BookShelf bks = {this.state.bookshelf} deleteBook = {this.deleteBook}/>
          </div>
        </div>
      
          {
            this.state.addingBook? 
            <div>
              <AddBookUI 
                addBook = {this.addBook}
                closePopup={this.toggleAddBook} 
              />
            </div>
            : 
            <div>


            </div>            
          }

          <button className = 'add-bk-btn' onClick={this.toggleAddBook}><h2>+</h2></button>
    
      </div>
    );
  }




/*Methods for adding and deleting books*/
  toggleAddBook = () =>{
    //console.log("Adding book");
    this.setState({addingBook:!this.state.addingBook});
  }

  addBook = (newBook)=>{
    /*Every book has title and key, which is the date*/
    //console.log("Todo later need to update backend etc in this method (replace this console log msg). Book :"+newBook.title);
    this.setState(
      {
        bookshelf: [...this.state.bookshelf, newBook],
        addingBook:false
      }
    );
    // this.debugBkShelf()
  }

  deleteBook =(key) => {
    console.log("Deleting key "+key)
    var filteredBooks = this.state.bookshelf.filter(function (bk) {
      return (bk.key !== key);
    });
   
    this.setState({
      bookshelf: filteredBooks
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

}
export default (BookAppMain);