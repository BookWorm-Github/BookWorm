//The container that holds the books
import React, {Component, useState} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import './bookStyles.css'
import Launcher from '../launcher/Launcher'
class AddBookUI extends Component{

  constructor(){
    super();
    this.state = {
      isHovered: false
    };
  }

//if user is hovering over album, show launch
//else show title

	render(){

		return (
			<form onSubmit={this.addItem}>
	            <input placeholder="Enter Book Title">
	            </input>
            <button type="submit">add</button>
          </form>
		);
	}


}

export default AddBookUI;