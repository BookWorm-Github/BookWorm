//The container that holds the books
import React, {Component, useState} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import './bookStyles.css'
class Book extends Component{

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
			<div className = 'book'
					onMouseEnter = {()=>this.setState({isHovered:true})}
					onMouseLeave = {()=>this.setState({isHovered:false})}>

					{
						this.state.isHovered? 

						<div className = 'hover-menu' >
							<a href = "https://www.google.com">Launch</a>

						</div>

						: 


						<div className = 'title' >Book</div>
						
					}

			</div>
		);
	}


}

export default Book;