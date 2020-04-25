//The container that holds the books
import React, {Component, useState} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
class AddButton extends Component{

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
				<div className = 'launcher' >
					<a href = 'https://www.google.com'>Launcher</a>
				</div>
		);
	}


}

export default AddButton;
