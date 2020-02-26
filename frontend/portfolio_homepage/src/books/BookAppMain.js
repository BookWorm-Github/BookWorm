
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import BookShelf from './BookShelf'

import AddBookUI from './AddBookUI'
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
      <div className = 'book-shelf'>
        <BookShelf />

          {
            this.state.addingBook? 
            <AddBookUI />
            : 
            <div></div>            
          }

          <button className = 'add-bk-btn' onClick={this.addBook}><h2>+</h2></button>
    
      </div>
    );
  }

  addBook = () =>{
    console.log("Adding book");
    this.setState({addingBook:true});
  }

  submitBook = ()=>{
    console.log("Todo later need to update backend etc in this method (replace this console log msg)");
    this.setState({addingBook:false});
  }

}
export default (BookAppMain);