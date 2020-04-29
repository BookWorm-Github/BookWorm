/*global chrome*/
//The container that holds the books
import React, {Component} from 'react'
import '../books/bookStyles.css'
import './pop-up.css'
import Checkbox from "./Checkbox";

const OPTIONS = ["Link book to window"];

class AddBookUI extends Component {

    handleFocus = (event) => event.target.select();

    constructor(props) {
        super(props);
        this.state = {
            title: '',
	        newBook: null,
            checkboxes: OPTIONS.reduce(
              (options, option) => ({
                ...options,
                [option]: false
              }),
              {}
            )
        };
    }

    render() {
        return (
            <div>
                <div className='popup'>

                    <div>
                        <h2 id="inputtitle">Name of the book: </h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>

                            <form onSubmit={this.createBook}>

                                <input className="inputbox" ref={(t) => this._inputTitle = t}
                                       placeholder="Enter Title Here" defaultValue="Title" autoFocus
                                       onFocus={this.handleFocus}>
                                </input>
                                
                                {this.createCheckboxes()}

                                <span>
									<button type="submit">Add</button>
                                    <button onClick={this.props.closePopup}>Cancel</button>
								</span>

                            </form>

                            

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
                // //console.log(books);
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
        let windowId = response.windowId;//this gets the current windowId
        if(windowId==null)
            alert('window id is null');

        //Check if whether the book is linked to a window or not. If not, book.linkedWindowId = -1
		let linkToWindow = -1;
		Object.keys(this.state.checkboxes)
          .filter(checkbox => this.state.checkboxes[checkbox])
          .forEach(checkbox => {
            //console.log(checkbox, "is selected.");
            if(checkbox ==='Link book to window'){
                linkToWindow = windowId;
                // alert('Checkbox '+checkbox +' is selected. This book will be linked to current window');
            }
          });
          // alert('Book is linked to window'+linkToWindow);

		const nb = {//what a book should contain
			key: Date.now(),
			title: this._inputTitle.value,
			time_created: Date.now(),
			linkedWindowId: linkToWindow,
			Launch: this.props.urlsForLaunch,
			WormHole: this.props.urlsForWormhole
		};

		//console.log("Linking current window " + windowId.toString() + " to book: "+nb.title +" so nb linked window is "+nb.linkedWindowId);
        this.props.addBook(nb);//calls this.props.addBook function so that we can add the newly created book and go back to portfolio homepage clearing the addBookUI
		this._inputTitle.value = "";
        this.setState({newBook: null})
	}

    /*link window questionaire*/

      handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
      };

    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
      );

      createCheckboxes = () => OPTIONS.map(this.createCheckbox);


}

export default AddBookUI;