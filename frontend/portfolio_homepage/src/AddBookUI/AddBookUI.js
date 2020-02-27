//The container that holds the books
import React, {Component, useState} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
 import '../books/bookStyles.css'
 import './pop-up.css'
class AddBookUI extends Component{

  constructor(){
    super();
    this.state = {
      isHovered: false
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
              <h1 contenteditable="true">Title</h1>
              
              </div>
            </div>
            <button onClick={this.props.closePopup}>close me</button>  
          </div>  
        </div>  
    );  
  } 




}

export default AddBookUI;