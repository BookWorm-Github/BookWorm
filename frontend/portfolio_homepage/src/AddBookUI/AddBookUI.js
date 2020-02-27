//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
 import '../books/bookStyles.css'
 import './pop-up.css'
class AddBookUI extends Component{

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

        <div className='popup'>    

          <div className='popup-inner'>  
            <div className = 'book' style = {{height:'100%'}} >
              <h2>Name of the book: </h2>  
              <div>


               <form onSubmit={this.submitBook}>
                  <input ref={(t) => this._inputTitle = t}
                    placeholder="Enter Title Here" defaultValue="Title">
                  </input>
                  <button type="submit">add</button>
                </form>


              </div>
            </div>
            <button onClick={this.props.closePopup}>close me</button>  
          </div>  
        </div>  
    );  
  } 

  submitBook = (e) =>{
      var newBook = {
        key: Date.now(),
        title: this._inputTitle.value
      };
      
      this.setState((prevState) => {
        return { 
          title: newBook.title
        };
      });
     
     /* console.log("Input Title at submitBook is: "+newBook.title);*/
    
      this.props.addBook(newBook);

      this._inputTitle.value = "";

      e.preventDefault();
  }

  




}

export default AddBookUI;