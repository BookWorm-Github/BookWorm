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
      isHovered: false,

      newURL:'',
    };
  }
  componentDidMount=() =>{
		this.setState({
			title: this.props.book.title
		});
	}
	  createHoverMenu() {
	    return <div className ='hover-menu'>
								<Launcher newURL = {this.state.newURL}/>
								
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
						{this.manualEntry()}
						

			</div>
		);
	}

		/*Temporary functions allowing user to input url*/
		manualEntry = () =>{
			return <div>
				 <form onSubmit={this.manuallyAddURL}>
	                  <input ref={(t) => this._inputURL = t}
	                    defaultValue="https://www.google.com">
	                  </input>
	                  <button type="submit">add</button>
	                </form>
	            </div>
		}

	  manuallyAddURL = (e) =>{

	      e.preventDefault();
	      var _newURL = {
	        key: Date.now(),
	        url: this._inputURL.value
	      };
	      
	      this.setState((prevState) => {
	        return { 
	          newURL: _newURL.url
	        };
	      });
	     
	      this._inputURL.value = "";

	  }


}

export default Book;