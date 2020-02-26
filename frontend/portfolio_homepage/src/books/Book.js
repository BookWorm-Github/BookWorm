//The container that holds the books
import React, {Component, useState} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import './bookStyles.css'
import Launcher from '../launcher/Launcher'
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
						<div className ='hover-menu'>
							<Launcher />

							<div className = 'wormhole' >
								<a href = "https://www.google.com" target = "_blank">Placeholder for Worm Hole. Insert Wormhole launch button here when Wormhole is completed</a>
							</div>
						</div>
						: 


						<div className = 'title' ><h1>Book</h1></div>
						
					}

			</div>
		);
	}


}

export default Book;