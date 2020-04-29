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
    		urls: []
    	};
  	}
  	componentDidMount(){
  		this.setState({
  			urls: this.props.urls
  		});

  	}

	render(){

		return (
			
				<div className = 'launcher' onClick = {this.openURLs}>
					 <br></br>
					 <br></br>
					 <br></br>
					Launcher
				</div>
			
		);

	}

	openURLs = (e) =>{

		e.preventDefault();
		
		if(this.props.urls==null)
			alert("No urls to open");
		else if (this.props.urls&&!this.props.urls.length){//there are no urls in prop
			let newTab = 'chrome://newtab'

			chrome.runtime.sendMessage({rq: "openWindowOfTabs", urlsToLaunch: newTab},this._cbWindow.bind(this));
		}
		else{
			// alert("Opening "+this.props.urls.toString())
			chrome.runtime.sendMessage({rq: "openWindowOfTabs", urlsToLaunch: this.props.urls},this._cbWindow.bind(this));
		}
	}

	_cbWindow = (response) => {
		//alert("Window "+response.windowId+" was just created");
		this.props.updateWindow(this.props.book,response.windowId,this.props.book.Launch,this.props.book.WormHole,true);

		// window.close();
	}

	



}


Launcher.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string),
    updateWindow: PropTypes.func.isRequired
  };

export default Launcher;
