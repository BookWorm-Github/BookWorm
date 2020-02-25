//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import './bookStyles.css'
class Book extends Component{

	render(){
		return (
			<div className = 'book'>
				<div className = 'title' 
				data-hover = "What now ladidiidalsk">
				<h1>Hover over me!</h1>
				<a href = 'https://www.google.com'>Google</a>
				</div>

			</div>
		);
	}

}

export default Book;