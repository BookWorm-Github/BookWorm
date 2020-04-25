
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
      launchURLs: ['https://www.github.com/'],
      wormholeURLs:['https://www.github.com/','https://www.google.com/search?sxsrf=ALeKk03xO56CXGouNmYNfOx9L3LEpIKKrQ%3A1585511879738&ei=x_2AXofVLMusytMPvui78AI&q=when+will+coronavirus+end&oq=when+will+&gs_lcp=CgZwc3ktYWIQAxgAMgQIIxAnMgQIIxAnMgUIABCDATIFCAAQgwEyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BggAEBYQHjoFCAAQzQI6BwgAEBQQhwI6BwgjEOoCECc6BQgAEJECOgQIABBDUOcpWM1kYPBsaARwAngDgAGJAogBrCqSAQczMi4xOC4zmAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab']
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
						onClick = {() => this.props.toggleWormhole(true)}>Wormhole
				</div>
			</div>

	  }
	  


	render(){

		const hoverMenu = this.createHoverMenu();
		return (
			<div>
			<div className = 'book'
				onMouseEnter = {()=>this.setState({isHovered:true})}
				onMouseLeave = {()=>this.setState({isHovered:false})}>

				{

					this.state.isHovered?
						hoverMenu
					:

					<div className = 'bk_title' ><h1>{this.state.title}</h1></div>
				}

			</div>

				{
					this.props.isShowingWormhole? 
					<div>
						<Wormhole urls = {this.state.wormholeURLs} toggleWormhole = {this.props.toggleWormhole}/>
					</div> : <div/>
				}
				
				
					<ManualEntryOfURL setWormholeURLs = {this.setWormholeURLs} setLaunchURLs = {this.setLaunchURLs}/>

			</div>
		);
	}
	setLaunchURLs = (newURL) => {
		this.setState(
	      {
	        launchURLs: [...this.state.launchURLs,newURL],
	        wormholeURLs:[...this.state.wormholeURLs,newURL]
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
		key: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		linkedWindowId: PropTypes.number
	}),
		toggleWormhole: PropTypes.func.isRequired,
		isShowingWormhole: PropTypes.bool.isRequired
	};


export default Book;