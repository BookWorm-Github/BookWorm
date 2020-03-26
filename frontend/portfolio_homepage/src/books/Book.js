//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import PropTypes from 'prop-types'
import './bookStyles.css'
import Launcher from '../launcher/Launcher'
import ManualEntryOfURL from '../addURL/ManualEntryOfURL'
import WormHole from "../WormHole/WormHole";
class Book extends Component{

  constructor(props){
    super(props);
    this.state = {
      title:'',
      isHovered: false,
      urls: ['https://www.github.com/']
    };
  }
  componentDidMount=() =>{
		this.setState({
			title: this.props.book.title
		});
	}
	  createHoverMenu() {
	    return <div className ='hover-menu'>
		    <Launcher urls = {this.state.urls}/>
		    <WormHole/>
	    </div>
	  }


	render(){

		var hoverMenu = this.createHoverMenu();
		return (
			<div>
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

				<ManualEntryOfURL setBookURLs = {this.setBookURLs}/>
			</div>
		);
	}
	setBookURLs = (newURL) => {
		this.setState(
	      {
	        urls: [...this.state.urls,newURL],
	      }
	    );
	}





}

Book.propTypes = {
	  book: PropTypes.shape({
	  		key: PropTypes.number,
		    title: PropTypes.string.isRequired
		  }),
	};


export default Book;