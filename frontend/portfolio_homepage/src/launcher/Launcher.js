/*global chrome*/
import React, {Component} from 'react';
import './launcher.css';
import PropTypes from 'prop-types';
import launchButton from '../Images/launchButton.png';
// import TitleFetcher from '../urlTitleFetcher/TitleFetcher'
//https://urlmeta.org/
//import $ from 'jquery'
//import WebTitleFetcher from '../experiments/webtitlefetcher.php'
//import '../experiments/get_external_content.php'
// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
class Launcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urls: []
		};
	}

	componentDidMount() {
		this.setState({
			urls: this.props.urls
		});

	}

	render() {

		return (

			<div className='launcher' onClick={this.openURLs}>
				<img src={launchButton} alt="launch icon" height="20" width="20"/>
			</div>

		);

	}

	openURLs = (e) => {

		e.preventDefault();

		if (this.props.urls && !this.props.urls.length) {//there are no urls in prop
			let newTab = 'chrome://newtab';
			
			chrome.runtime.sendMessage({rq: "openWindowOfTabs", urlsToLaunch: newTab}, this._cbWindow.bind(this));
		} else {
			alert("Opening " + this.props.urls.toString())
			chrome.runtime.sendMessage({
				rq: "openWindowOfTabs",
				urlsToLaunch: this.props.urls
			}, this._cbWindow.bind(this));
		}
	};

	_cbWindow = (response) => {
		console.log('cbRunning')
		//alert("Window "+response.windowId+" was just created");
		//this.props.updateBook(this.props.book, response.windowId, this.props.book.Launch, this.props.book.WormHole, true);
		// window.close();
	}
}


Launcher.propTypes = {
	urls: PropTypes.arrayOf(PropTypes.string),
	updateBook: PropTypes.func.isRequired
};

export default Launcher;
