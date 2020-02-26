
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import BookShelf from './BookShelf'

import AddBookUI from '../AddBookUI/AddBookUI'
import './bookStyles.css'

class BookAppMain extends Component {

  constructor(){
    super();
    this.state = {
      addingBook: false,
      title: null
    };
  }

  render(){

    return (
      <div className = 'main-container-center'>
      
        <div id = 'blurrable' className = 'book-shelf'>
          <div className = {this.state.addingBook?'blur-bg':'clear-bg'}>
          <BookShelf />
          </div>
        </div>
      
          {
            this.state.addingBook? 
            <div>
              <AddBookUI 
                submitBook = {this.submitBook}
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

  toggleAddBook = () =>{
    console.log("Adding book");
    this.setState({addingBook:!this.state.addingBook});
  }

  submitBook = (title)=>{
    console.log("Todo later need to update backend etc in this method (replace this console log msg). Book :"+title);
    this.setState({addingBook:false});
  }

}
export default (BookAppMain);