//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import './bookStyles.css'
import Launcher from '../launcher/Launcher'
class Book extends Component{

  constructor(){
    super();
    this.state = {
      title:'',
      isHovered: false
    };
  }
  componentDidMount=() =>{
		this.setState({
			title: this.props.book.title
		});
	}

	  createHoverMenu() {
	    return <div className ='hover-menu'>
								<Launcher />

								<div className = 'wormhole' >
									<a href = "https://www.google.com">Placeholder for Worm Hole. Insert Wormhole launch button here when Wormhole is completed</a>
								</div>
							</div>
	  }


	render(){
		
		var hoverMenu = this.createHoverMenu();
		return (
			<div className = 'book'
					onMouseEnter = {()=>this.setState({isHovered:true})}
					onMouseLeave = {()=>this.setState({isHovered:false})}>

					{

						this.state.isHovered? 
							hoverMenu
						: 


						<div className = 'title' ><h1>{this.state.title}</h1></div>
						
					}

			</div>
		);
	}


}

export default Book;