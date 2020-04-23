/*global chrome*/
//The container that holds the books
import React, {Component} from 'react'
import '../books/bookStyles.css'
import './pop-up.css'

class AddBookUI extends Component {

    handleFocus = (event) => event.target.select();

    constructor(props) {
        super(props);
        this.state = {
            title: '',
	        newBook: null
        };
    }

    render() {
        return (
            <div>
                <div className='popup'>

                    <div className='book'>
                        <h2>Name of the book: </h2>
                        <div>

                            <form onSubmit={this.createBook}>

                                <input ref={(t) => this._inputTitle = t}
                                       placeholder="Enter Title Here" defaultValue="Title" autoFocus
                                       onFocus={this.handleFocus}>
                                </input>

                                <span>
									<button type="submit">Add</button>
								</span>

                            </form>

                            <button onClick={this.props.closePopup}>Cancel</button>

                        </div>

                    </div>


                </div>
            </div>
        );
    }

    createBook = (e) => {//receiving the value in the form onSubmit.
	    //check to see if the newBook added with title this._inputTitle.value already exists
	    let isDup = this.checkDuplicates(this._inputTitle.value);
	    if (!isDup) {
		    chrome.runtime.sendMessage({rq: "getCurrWindowId"}, this._cbWindowIdResponse.bind(this));
	    }
	    else{
		    this._inputTitle.value = "";
		    this.setState({newBook: null})
	    }

	    e.preventDefault();
    }

    checkDuplicates = (new_book_name) => {//compare book titles making sure there are no duplicates
        let isDuplicate = false;
        if (this.props.bks.length !== 0) {//no books yet so can't have duplicates
            for (const books of this.props.bks) {
                // console.log(books);
                if (books.title === new_book_name) {
                    alert(new_book_name + " already exists!");
                    isDuplicate = true;
                    break;
                }
            }
        }
        return isDuplicate;
    }

	_cbWindowIdResponse(response) {
        let windowId = response.windowId;
        if(windowId==null)
            alert('window id is null');


		const nb = {//what a book should contain
			key: Date.now(),
			title: this._inputTitle.value,
			time_created: Date.now(),
			linkedWindowId: windowId,
			Launch: this.props.urlsForLaunch,
			WormHole: this.props.urlsForWormhole
		};

		console.log("Linking current window " + windowId.toString() + " to book: "+nb.title +" so nb linked window is "+nb.linkedWindowId);
        this.props.addBook(nb);//calls this.props.addBook function so that we can add the newly created book and go back to portfolio homepage clearing the addBookUI
		this._inputTitle.value = "";
        this.setState({newBook: null})
	}


}

export default AddBookUI;