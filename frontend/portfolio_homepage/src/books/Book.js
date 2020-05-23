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
// import WindowId from '../debug/WindowId'
import BookNavbar from "../hamburger_bar/BookNavbar";

class Book extends Component{

	constructor(props){
		super(props);
		this.state = {
		    book: null,
			title:'',
			isHovered: false
		};
	}
	componentDidMount=() =>{
		this.setState({
			linkedWindowId: this.props.book.linkedWindowId,
			book: this.props.book,
			title: this.props.book.title
		});

		if(this.props.book.linkedWindowId>=0){
			chrome.runtime.sendMessage({rq: "urlsForLaunch", winId: this.props.book.linkedWindowId}, this._cbForLaunchResponse);
			chrome.runtime.sendMessage({rq: "urlsForWormhole", linkedWindowId: this.props.book.linkedWindowId}, this._cbForWormholeResponse);
		}
		//console.log("Wormhole for book "+this.props.book.title+" is "+this.props.book.WormHole.toString());

		// chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	}

	_cbForLaunchResponse = (response) => {
		if(response.urlsForLaunch&&response.urlsForLaunch.length){//if launch urls are not empty
			this.props.updateBook(this.props.book,
				this.props.book.linkedWindowId,
				response.urlsForLaunch,
				this.props.book.WormHole,
				false);
			console.log("book "+this.props.book.title+" updated launch to be "+response.urlsForLaunch);
		}
		else{
			console.log("book "+this.props.book.title+" received empty for launch");
		}
	}

	_cbForWormholeResponse = (response) => {
		console.log("WORMHOLE INFO:");
		console.log(response.WormholeInfo)
		let worm = [];
		response.WormholeInfo.forEach(tabInfo => {//parse the information given to us, taking out the tabs specifically for each urlInfo we get
			worm.push(tabInfo.url);
		})

		console.log(worm);

		if(!(response.WormholeInfo === undefined || response.WormholeInfo === 0)){//checks if the WormholeInfo is empty, if not then we can update the book using prop method below.
			this.props.updateBook(this.props.book,this.props.book.linkedWindowId,this.props.book.Launch, worm);
			console.log("book " + this.props.book.title + " updated wormhole to be " + worm);
		}
		else{
			console.log("book " + this.props.book.title + " received empty for wormhole");
		}

	}

	createHoverMenu() {
		return (
			<div className ='hover-menu'>
				<Launcher book = {this.props.book} updateWindow = {this.props.updateBook} urls = {this.props.book.Launch}/>
				<div className = 'line'>
					<p/>
				</div>
					<div className = 'wormhole'
						onClick = {() => this.props.toggleWormhole(this.props.book.key)}>
							<br/>
							<br/>
							<br/>Wormhole
				</div>
			</div>
		)

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
				<div className = 'book'
					onMouseEnter = {()=>this.setState({isHovered:true})}
					onMouseLeave = {()=>this.setState({isHovered:false})}>
					{

						this.state.isHovered?
							hoverMenu
						:

						<div className = 'bk_title' ><h1 className = 'booktitle'>{this.state.title}</h1></div>
					}

				</div>

					{
						this.props.isShowingWormhole===this.props.book.key?
						<div>
							
							<Wormhole book = {this.props.book} toggleWormhole = {this.props.toggleWormhole}/>
						</div> : <div/>
					}
				</div>
			</div>
		);
	}
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