import React, {Component} from 'react'
import BookShelf from './BookShelf'
/*Testing branch*/
import AddBookUI from '../AddBookUI/AddBookUI'
import './bookStyles.css'
import SortBooks from '../sortItems/SortBooks'

class BookAppMain extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookshelf: [],
      addingBook: false,

    };
  }

  render(){

    return (
      <div>
      {/*<button onClick = {this.getURLS}>Get Open Windows</button>*/}
            <SortBooks books = {this.state.bookshelf} setBooks = {this.setBooks}/>
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
      </div>
    );
  }

 // getURLS = () =>{

 //  chrome.tabs.get(1, () =>{console.log("Callback from getURLS")});

 //  chrome.windows.getAll({populate:true}, getAllOpenWindows);

 //    function getAllOpenWindows(winData) {

 //      var tabs = [];
 //      for (var i in winData) {
 //        if (winData[i].focused === true) {
 //            var winTabs = winData[i].tabs;
 //            var totTabs = winTabs.length;
 //            for (var j=0; j<totTabs;j++) {
 //              tabs.push(winTabs[j].url);
 //            }
 //        }
 //      }
 //      console.log(tabs);
 //    }


 // }



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
        addingBook:false//this clears the addBookUI
      }
    );
    // this.debugBkShelf()
  }

  deleteBook =(key) => {
    console.log("Deleting key "+key)
    var filteredBooks = this.state.bookshelf.filter(function (bk) {
      return (bk.key !== key);
    });
   
    this.setState({ //This will update the state and trigger a rerender of the components
      bookshelf: filteredBooks
    });
  }




  setBooks=(books)=>{
    this.setState({
      bookshelf: books
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