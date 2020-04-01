//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import PropTypes from 'prop-types'
import './bookStyles.css'
import '../wormhole/wormhole.css'
import Wormhole from '../wormhole/Wormhole'
import Launcher from '../launcher/Launcher'
import ManualEntryOfURL from '../addURL/ManualEntryOfURL'

class Book extends Component{

  constructor(props){
    super(props);
    this.state = {
      title:'',
      isHovered: false,
      isShowingWormhole:false,
      launchURLs: ['https://www.github.com/'],
      wormholeURLs:['https://www.github.com/','https://www.google.com']
    };
  }
  componentDidMount=() =>{
		this.setState({
			title: this.props.book.title
		});
	}
	  createHoverMenu() {
	    return <div className ='hover-menu'>
				<Launcher urls = {this.state.launchURLs}/>
				<div className = 'wormhole' 
						onClick = {() => this.toggleWormhole(true)}>Wormhole
				</div>
			</div>

	  }
	  toggleWormhole = (bool) =>{
	    //console.log("Adding book");
	    this.setState({isShowingWormhole:bool});
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

				{
					this.state.isShowingWormhole? 
					<div>
						<Wormhole urls = {this.state.wormholeURLs} toggleWormhole = {this.toggleWormhole}/>
					</div> : <div></div>
				}
				
				
					<ManualEntryOfURL setLaunchURLs = {this.setLaunchURLs}/>

			</div>
		);
	}
	setLaunchURLs = (newURL) => {
		this.setState(
	      {
	        launchURLs: [...this.state.wormholeURLs,newURL],
	        wormholeURLs:[...this.state.launchURLs,newURL]
	      }
	    );
	}

	setWormholeURLs = (newURL) =>{
		this.setState(
	      {
	        wormholeURLs: [...this.state.wormholeURLs,newURL],
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