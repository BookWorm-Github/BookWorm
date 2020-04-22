import React, {Component} from 'react'
import BookShelf from './BookShelf'
import AddBookUI from '../AddBookUI/AddBookUI'
import './bookStyles.css'
import SortBooks from '../sortItems/SortBooks'
import Hotkeys from 'react-hot-keys';
import {deleteBook, deLinkBookfromWindow, storeBook} from "../firebase/firestore/db_functions";
//added hotkeys: https://github.com/jaywcjlove/react-hotkeys#readme
class BookAppMain extends Component {

	constructor(props){
		super(props);
		this.state = {
		  bookshelf: [],
		  addingBook: false,
		};
	}

	componentDidMount = () => {//updating the user's personal books
		this.setState({bookshelf: this.props.books})
	}

	render(){

	return (
		  <div>
		{/*Hotkey for dev only, when lots of experimental books are added. take away from final product.*/}
		  <Hotkeys keyName = "shift+a" onKeyUp = {this.toggleAddBook}/>
		  {/*<button onClick = {this.getURLS}>Get Open Windows</button>*/}
		  <div className = 'main-container-center'>

		    <div id = 'blurrable' className = 'book-shelf'>
		        <SortBooks books = {this.state.bookshelf} setBooks = {this.setBooks} isBlurred = {this.state.addingBook}/>
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
		            bks = {this.state.bookshelf}
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
 //
 //  chrome.tabs.get(1, () =>{console.log("Callback from getURLS")});
 //
 //  chrome.windows.getAll({populate:true}, getAllOpenWindows);
 //
 //    function getAllOpenWindows(winData) {
 //
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
 //
 //
 // }

	/*Methods for adding and deleting books*/
	toggleAddBook = () =>{
		//console.log("Adding book");
		this.setState({addingBook:!this.state.addingBook});
	}

	addBook = (newBook)=>{//gets the newBook from addBookUI
		/*Every book has title and key, which is the date and linkedwindowId*/
		//console.log("Todo later need to update backend etc in this method (replace this console log msg). Book :"+newBook.title);

		// deLinking books that may have already linked with this window
		const currWindowId = newBook.linkedWindowId;

		if(this.state.bookshelf.length === 0){
			storeBook(newBook, this.props.user.uid).then(e => {
				this.setState(prevState => ({
					bookshelf: [...filteredBooks, newBook],
					addingBook:false//this clears the addBookUI
				}));
				console.log("adding book was successful")
			});
		}
		const filteredBooks = this.state.bookshelf.map( (book, index, array) => {
			deLinkBookfromWindow(book, currWindowId, this.props.user.uid).then(() => {//delinks the book from window in the database
				book.linkedWindowId = null;
				if(array[index] === array.length - 1){//if the last element in the array has been processed and delinked...
					//storing the newBook that is linked to the current window
					storeBook(newBook, this.props.user.uid).then(e => {
						this.setState(prevState => ({
							bookshelf: [...filteredBooks, newBook],
							addingBook:false//this clears the addBookUI
						}));
						console.log("adding book was successful")
					});
				}
			}).catch(e => {
				console.log(e);
			});

			return book;
		})

		//

		// this.setState({
		// 	bookshelf: filteredBooks
		// });


	}

	deleteBook = (book) => {
		deleteBook(book, this.props.user.uid).then(() => {
		    const filteredBooks = this.state.bookshelf.filter((bk) => {
				    return (bk.title !== book.title);
		    });
		    this.setState({ //This will update the state and trigger a rerender of the components
			    bookshelf: filteredBooks
		    });
		});
	}

	setBooks = (books) => {
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