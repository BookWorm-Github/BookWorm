/*global chrome*/
//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import PropTypes from 'prop-types'
import './bookStyles.css'
import '../wormhole/wormhole.css'
import '../launcher/launcher.css'
import Wormhole from '../wormhole/Wormhole'
import Launcher from '../launcher/Launcher'
import ManualEntryOfURL from '../addURL/ManualEntryOfURL'
import WindowId from '../debug/WindowId'

class Book extends Component{

  constructor(props){
    super(props);
    this.state = {
    	linkedWindowId:-100,
    	book: null,
      title:'',
      isHovered: false,
      // launchURLs: ['https://www.github.com/'],
      // wormholeURLs:['https://www.github.com/','https://www.google.com/search?sxsrf=ALeKk03xO56CXGouNmYNfOx9L3LEpIKKrQ%3A1585511879738&ei=x_2AXofVLMusytMPvui78AI&q=when+will+coronavirus+end&oq=when+will+&gs_lcp=CgZwc3ktYWIQAxgAMgQIIxAnMgQIIxAnMgUIABCDATIFCAAQgwEyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BggAEBYQHjoFCAAQzQI6BwgAEBQQhwI6BwgjEOoCECc6BQgAEJECOgQIABBDUOcpWM1kYPBsaARwAngDgAGJAogBrCqSAQczMi4xOC4zmAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab']
    };
     // this.handleMessage.bind(this);
  }
  componentDidMount=() =>{
		this.setState({
			linkedWindowId: this.props.book.linkedWindowId,
			book: this.props.book,
			title: this.props.book.title
		});

		if(this.props.book.linkedWindowId>=0){
			chrome.runtime.sendMessage({rq: "urlsForLaunch", winId: this.props.book.linkedWindowId}, this._cbForLaunchResponse);
			chrome.runtime.sendMessage({rq: "urlsForWormhole", winId: this.props.book.linkedWindowId}, this._cbForWormholeResponse);
		}
		//book is getting the right wormholes in log
		//console.log("Wormhole for book "+this.props.book.title+" is "+this.props.book.WormHole.toString());

		// chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	}
	// handleMessage(message, sender, sendResponse){
	// 	console.log("Book"+this.props.book.title+
	// 		" linkedID: "+this.props.book.linkedWindowId+
	// 		" received winID from background: "+message.winId);
	// 	if(message.winId==this.props.book.linkedWindowId){
	// 		console.log("updated wormhole n launch");
	// 		this._cbForLaunchResponse(message);
	// 		this._cbForWormholeResponse(message);
	// 	}
	// 	else{
	// 		console.log("no need update wormhole n launch");
	// 	}
	// }
	//for initial book setups
	_cbForLaunchResponse = (response) => {
		if(response.urlsForLaunch&&response.urlsForLaunch.length){//if launch urls are not empty
			this.props.updateBook(this.props.book,this.props.book.linkedWindowId,response.urlsForLaunch,this.props.book.WormHole);
			console.log("book "+this.props.book.title+"updated launch to be "+response.urlsForLaunch);

		}
		else{

			console.log("book "+this.props.book.title+" received empty for launch");
		}
	}

	_cbForWormholeResponse = (response) => {
		if(response.urlsForWormhole&&response.urlsForWormhole.length){//if launch urls are not empty
			this.props.updateBook(this.props.book,this.props.book.linkedWindowId,this.props.book.Launch,response.urlsForWormhole);
			console.log("book "+this.props.book.title+"updated wormhole to be "+response.urlsForWormhole);
		}
		else{
			console.log("book "+this.props.book.title+" received empty for wormhole");
		}

	}



	  createHoverMenu() {
	    return <div className ='hover-menu'>
				<Launcher book = {this.props.book} updateWindow = {this.props.updateBook} urls = {this.props.book.Launch}/>
				<div className = 'line'>
					<p></p>

				</div>
				<div className = 'wormhole'
						onClick = {() => this.props.toggleWormhole(true)}>Wormhole
				</div>
			</div>

	  }
	  


	render(){

		const hoverMenu = this.createHoverMenu();
		return (
			<div>
			<div> <WindowId linkedWindowId = {this.props.book.linkedWindowId} /> </div>
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
						<Wormhole book = {this.props.book} toggleWormhole = {this.props.toggleWormhole}/>
					</div> : <div/>
				}
				
					{/*<ManualEntryOfURL setWormholeURLs = {this.setWormholeURLs} setLaunchURLs = {this.setLaunchURLs}/>*/}

			</div>
		);
	}

	setLinkedWindow = (windowId) =>{


		this.setState({
			linkedWindowId: windowId
		}, () =>{
		this.props.updateBook(this.props.book,windowId,this.state.launchURLs,this.state.wormholeURLs)})
	}
	// setLaunchURLs = (newURL) => {
	// 	this.setState(
	//       {
	//         launchURLs: [...this.state.launchURLs,newURL],
	//         wormholeURLs:[...this.state.wormholeURLs,newURL]
	//       }, ()=>(this.props.updateBook(this.props.book,this.state.linkedWindowId,this.state.launchURLs,this.state.wormholeURLs))
	//     );

	// }

	// setWormholeURLs = (newURL) =>{
	// 	this.setState(
	//       {
	//         wormholeURLs: [...this.state.wormholeURLs,newURL],
	//       },()=>(this.props.updateBook(this.props.book,this.state.linkedWindowId,this.state.launchURLs,this.state.wormholeURLs))
	//     );
	// }




}

Book.propTypes = {
	book: PropTypes.shape({
		key: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		linkedWindowId: PropTypes.number.isRequired,
		Launch: PropTypes.array.isRequired,
		WormHole: PropTypes.array.isRequired
	}),
		toggleWormhole: PropTypes.func.isRequired,
		isShowingWormhole: PropTypes.bool.isRequired,
		updateBook: PropTypes.func.isRequired
	};


export default Book;