/*global chrome*/
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
// import WindowId from '../debug/WindowId'
import PropTypes from 'prop-types'
import './bookStyles.css'
import '../wormhole/wormhole.css'
import '../launcher/launcher.css'
import Wormhole from '../wormhole/Wormhole'
import Launcher from '../launcher/Launcher'
import BookNavbar from "../hamburger_bar/BookNavbar";
import isEmpty from "validator/es/lib/isEmpty";

class Book extends Component {

	constructor(props) {
		super(props);
		this.state = {
			book: null,
			title: '',
			isHovered: false
		};
	}

	componentDidMount = () => {
		this.setState({
			linkedWindowId: this.props.book.linkedWindowId,
			book: this.props.book,
			title: this.props.book.title
		});

		if (this.props.book.linkedWindowId >= 0) {
			chrome.runtime.sendMessage({
				rq: "LaunchInfo",
				winId: this.props.book.linkedWindowId
			}, this._cbForLaunchResponse);
			chrome.runtime.sendMessage({
				rq: "WormholeInfo",
				linkedWindowId: this.props.book.linkedWindowId
			}, this._cbForWormholeResponse);
		}
	};

	_cbForLaunchResponse = (response) => {
		if (response.LaunchInfo && response.LaunchInfo.length) {//if launch urls are not empty
			this.props.updateBook(this.props.book,
				this.props.book.linkedWindowId,
				response.LaunchInfo,
				this.props.book.WormHole,
				false);
			console.log("book " + this.props.book.title + " updated launch to be " + response.LaunchInfo);
		} else {
			console.log("book " + this.props.book.title + " received empty for launch");
		}
	};

	_cbForWormholeResponse = (response) => {
		console.log("WORMHOLE INFO:");
		if (this.isEmpty(response.WormholeInfo)) {
			console.log("no wormhole response");
		} else {
			console.log(response.WormholeInfo);
			let wormUrl = [];
			response.WormholeInfo.forEach(tabInfo => {//parse the information given to us, taking out the tabs specifically for each urlInfo we get
				wormUrl.push(tabInfo.url);
			});
			console.log(wormUrl);
			if (!this.isEmpty(response.WormholeInfo)) {//checks if the WormholeInfo is empty, if not then we can update the book using prop method below.
				this.props.updateBook(this.props.book, this.props.book.linkedWindowId, this.props.book.Launch, wormUrl);
				console.log("book " + this.props.book.title + " updated wormhole to be " + wormUrl);
			} else {
				console.log("book " + this.props.book.title + " received empty for wormhole");
			}
		}
	};

	isEmpty(obj) {//checks if the object parameter obj is empty.
		for (const prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				return false;
			}
		}
		return true;
	}

	createHoverMenu() {
		return (
			<div className='hover-menu'>
				<Launcher book={this.props.book} updateBook={this.props.updateBook} urls={this.props.book.Launch}/>
				<div className='line'>
					<p/>
				</div>
				<div className='wormhole'
				     onClick={() => this.props.toggleWormhole(this.props.book.key)}>
					<br/>
					<br/>
					<br/>Wormhole
				</div>
			</div>
		)

	}

	render() {

		const hoverMenu = this.createHoverMenu();
		return (
			<div>
				<div>
					{this.props.isCurrentWindow ?
						<div>Current Window</div>
						: <br/>}
				</div>
				<div className={this.props.isCurrentWindow ? 'current-book' : 'nonexistent-class'}>

					<BookNavbar book={this.props.book} deleteBook={this.props.deleteBook}
					            updateBook={this.props.updateBook} delinkBook={this.props.delinkBook}/>
					<div className='book'
					     onMouseEnter={() => this.setState({isHovered: true})}
					     onMouseLeave={() => this.setState({isHovered: false})}>
						{

							this.state.isHovered ?
								hoverMenu
								:

								<div className='bk_title'><h1 className='booktitle'>{this.state.title}</h1></div>
						}

					</div>

					{
						this.props.isShowingWormhole === this.props.book.key ?
							<div>

								<Wormhole book={this.props.book} toggleWormhole={this.props.toggleWormhole}/>
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
