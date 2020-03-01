//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
 import '../books/bookStyles.css'
 import './pop-up.css'
class AddBookUI extends Component{
handleFocus = (event) => event.target.select();
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };
  }

//if user is hovering over album, show launch
//else show title

  render() {  
    return (  
        <div>
        <div className='popup'>    

            <div className = 'book'>
              <h2>Name of the book: </h2>  
              <div>


               <form onSubmit={this.createBook}>
                  <input ref={(t) => this._inputTitle = t}
                    placeholder="Enter Title Here" defaultValue="Title" autoFocus onFocus={this.handleFocus}>
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

  createBook = (e) =>{
      var newBook = {
        key: Date.now(),
        title: this._inputTitle.value
      };
      
      this.setState((prevState) => {
        return { 
          title: newBook.title
        };
      });
     
     /* console.log("Input Title at createBook is: "+newBook.title);*/
    
      this.props.addBook(newBook);

      this._inputTitle.value = "";

      e.preventDefault();
  }

  




}

export default AddBookUI;