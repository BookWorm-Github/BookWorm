//The sort button
import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6

class SortBooks extends Component{

  constructor(){
    super();
    this.state = {
    	books: [];
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
								
								<div className = 'wormhole' >
									<a href = "https://www.google.com">Placeholder for Worm Hole. Insert Wormhole launch button here when Wormhole is completed</a>
								</div>

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

	

	SortBooks.propTypes = {
	  books: PropTypes.array
	};


}

export default SortBooks;