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
import BookNavbar from "../hamburger_bar/BookNavbar";

class Book extends Component{

	constructor(props){
		super(props);
		this.state = {
		    linkedWindowId:-100,
		    book: null,
			title:'',
			isHovered: false
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
			// chrome.runtime.sendMessage({rq: "urlsForWormhole", winId: this.props.book.linkedWindowId}, this._cbForWormholeResponse);
		}
		//console.log("Wormhole for book "+this.props.book.title+" is "+this.props.book.WormHole.toString());

		// chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	}
	//for initial book setups
	_cbForLaunchResponse = (response) => {
		if(response.urlsForLaunch&&response.urlsForLaunch.length){//if launch urls are not empty
			this.props.updateBook(this.props.book,
				this.props.book.linkedWindowId,
				response.urlsForLaunch,
				this.props.book.WormHole,
				false);
			// console.log("book "+this.props.book.title+"updated launch to be "+response.urlsForLaunch);

		}
		else{

			// console.log("book "+this.props.book.title+" received empty for launch");
		}
	}

	//uncomment below and the above chrome runtime if u want wormhole reset every time the component mounts
	//ideally but unimplemented: wormhole will only be reset when new WINDOW (not tab) opens for only the book that has the current linked window
	// _cbForWormholeResponse = (response) => {
	// 	if(response.urlsForWormhole&&response.urlsForWormhole.length){//if launch urls are not empty
	// 		this.props.updateBook(this.props.book,
	// 			this.props.book.linkedWindowId,
	// 			this.props.book.Launch,
	// 			response.urlsForWormhole,
	// 			false);
	// 		console.log("book "+this.props.book.title+"updated wormhole to be "+response.urlsForWormhole);
	// 	}
	// 	else{
	// 		console.log("book "+this.props.book.title+" received empty for wormhole");
	// 	}

	// }



	createHoverMenu() {
		return <div className ='hover-menu'>
				<Launcher book = {this.props.book} updateWindow = {this.props.updateBook} urls = {this.props.book.Launch}/>
				<div className = 'line'>
					<p></p>

				</div>
					<div className = 'wormhole'
						onClick = {() => this.props.toggleWormhole(this.props.book.key)}>Wormhole
				</div>
			</div>

	}
	  


	render(){

		const hoverMenu = this.createHoverMenu();
		return (
			<div>
				<div>
					{this.props.isCurrentWindow? 
					<div>Current Window</div>
					:<br/>}
				</div>

				<div className = {this.props.isCurrentWindow? 'current-book':'nonexistent-class'}>
				<BookNavbar book = {this.props.book} deleteBook = {this.props.deleteBook} updateBook = {this.props.updateBook} delinkBook={this.props.delinkBook}/>
				{/*<WindowId linkedWindowId = {this.props.book.linkedWindowId} />*/}
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
						this.props.isShowingWormhole==this.props.book.key?
						<div>
							<Wormhole book = {this.props.book} toggleWormhole = {this.props.toggleWormhole}/>
						</div> : <div/>
					}

						{/*<ManualEntryOfURL setWormholeURLs = {this.setWormholeURLs} setLaunchURLs = {this.setLaunchURLs}/>*/}
				</div>
			</div>
		);
	}

	// setLinkedWindow = (windowId) =>{
	// 	this.setState({
	// 		linkedWindowId: windowId
	// 	}, () =>{
	// 	// this.props.updateBook(this.props.book,windowId,this.state.launchURLs,this.state.wormholeURLs)})
	// 		this.props.updateBook(this.props.book, windowId, this.props.book.Launch, this.props.book.WormHole)
	// 	})
	// }

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
		isShowingWormhole: PropTypes.number.isRequired,
		updateBook: PropTypes.func.isRequired,
		deleteBook: PropTypes.func.isRequired,
		delinkBook: PropTypes.func.isRequired,
		isCurrentWindow: PropTypes.bool.isRequired
	};


export default Book;