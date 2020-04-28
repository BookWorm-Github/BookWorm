/*global chrome*/
//The container that holds the books
import React, {Component} from 'react'
import './launcher.css'
import PropTypes from 'prop-types'
import TitleFetcher from '../urlTitleFetcher/TitleFetcher'
//https://urlmeta.org/
//import $ from 'jquery'
//import WebTitleFetcher from '../experiments/webtitlefetcher.php'
//import '../experiments/get_external_content.php'
// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
class Launcher extends Component{
	constructor(props){
		super(props);
		this.state = {
    		urls: [],
    		winWidth:0,
    		winHeight:0
    	};
  	}
  	componentDidMount(){

    var w = window.outerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
    var h = window.outerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
  		this.setState({
  			urls: this.props.urls,
  			winWidth: w,
  			winHeight: h
  		});

  	}

	render(){

		return (
				<div className = 'launcher' onClick = {this.openURLs}>
					Launcher
				</div>
		);

	}

	openURLs = (e) =>{

		e.preventDefault();
		
		if(this.props.urls==null)
			alert("No urls to open");
		else{
			// alert("Opening "+this.props.urls.toString())
			chrome.runtime.sendMessage({rq: "openWindowOfTabs", urlsToLaunch: this.props.urls, winWidth: this.state.winWidth, winHeight: this.state.winHeight},this._cbWindow.bind(this));
		}
	}

	_cbWindow = (response) => {
		//alert("Window "+response.windowId+" was just created");
		this.props.updateWindow(this.props.book,response.windowId,this.props.book.Launch,this.props.book.WormHole);
		chrome.runtime.sendMessage({rq: "closeCurrentTab"});
	}

	



}


Launcher.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string),
    updateWindow: PropTypes.func.isRequired
  };

export default Launcher;
