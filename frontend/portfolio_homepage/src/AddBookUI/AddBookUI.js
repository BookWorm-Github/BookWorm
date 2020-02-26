//The container that holds the books
import React, {Component, useState} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
 // import '../books/bookStyles.css'
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
      <div className='popup\_inner'>  
        <h1>Add Book</h1>  

        <button onClick={this.props.closePopup}>close me</button>  
      </div>  
    </div>  
    );  
  } 




}

export default AddBookUI;